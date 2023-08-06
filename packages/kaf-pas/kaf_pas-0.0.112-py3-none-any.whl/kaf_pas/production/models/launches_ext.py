import logging

logger = logging.getLogger(__name__)


class Launches_ext:
    def _getQtyChilds(self, records):
        from django.db import connection
        from kaf_pas.ckk.models.item_qty import Item_qty

        res = 0
        if isinstance(records, list):

            with connection.cursor() as cursor:
                for record in records:
                    sql_str = f'''WITH RECURSIVE r AS (
                                                                SELECT *, 1 AS level
                                                                FROM production_launch_item_refs
                                                                WHERE parent_id IN (%s)

                                                                union all

                                                                SELECT production_launch_item_refs.*, r.level + 1 AS level
                                                                FROM production_launch_item_refs
                                                                         JOIN r
                                                                              ON production_launch_item_refs.parent_id = r.child_id)

                                                            select  count(*)
                                                            from r where launch_id = %s'''

                    cursor.execute(sql_str, [record.get('id'), record.get('launch_id')])
                    qty, = cursor.fetchone()
                    res += qty
                    Item_qty.objects.create(
                        child_id=record.get('id'),
                        parent_id=record.get('parent_id'),
                        qty=qty
                    )
        return dict(qty=res)

    def get_count(self, item_line, qty, level, get_full_path, get_full_path_obj, items_refs_qty_stack):
        from kaf_pas.ckk.models.attr_type import Attr_type
        from django.conf import settings
        from isc_common.number import StrToNumber
        from isc_common.common import blinkString

        key = 'LaunchesManager.get_count'

        settings.LOCKS.acquire(key)
        SPC_CLM_COUNT_ATTR, _ = Attr_type.objects.get_or_create(code='SPC_CLM_COUNT')
        from kaf_pas.kd.models.document_attributes import Document_attributes

        res = None
        if items_refs_qty_stack.size() > 0:
            qty = items_refs_qty_stack.find_one(lambda x: x[0] == level - 1 and x[1] == get_full_path_obj[level - 1].get('id'))[2]

        if level == 1:
            res, _ = Document_attributes.objects.get_or_create(attr_type=SPC_CLM_COUNT_ATTR, value_str=str(qty), value_int=qty)
            settings.LOCKS.release(key)
            return res

        _str = item_line.SPC_CLM_COUNT.value_str if item_line.SPC_CLM_COUNT else None
        if _str == 'null':
            _str = None

        if _str != None:
            if _str.find(',') != -1:
                try:
                    str1 = _str.replace(',', '.')
                    count = StrToNumber(str1)

                    SPC_CLM_COUNT, created = Document_attributes.objects.get_or_create(attr_type=SPC_CLM_COUNT_ATTR, value_str=str1)
                    if created == False:
                        SPC_CLM_COUNT.value_int = count
                        SPC_CLM_COUNT.value_str = str1
                        SPC_CLM_COUNT.save()

                    if qty > 1:
                        count *= qty
                        SPC_CLM_COUNT, created = Document_attributes.objects.get_or_create(attr_type=SPC_CLM_COUNT_ATTR, value_str=str(count))
                        if created != True:
                            SPC_CLM_COUNT.value_int = count
                            SPC_CLM_COUNT.save()

                    res = SPC_CLM_COUNT
                except ValueError:
                    SPC_CLM_COUNT, created = Document_attributes.objects.get_or_create(attr_type=SPC_CLM_COUNT_ATTR, value_str='1')
                    if created == True:
                        SPC_CLM_COUNT.value_int = 1
                        SPC_CLM_COUNT.save()

            else:
                try:
                    count = StrToNumber(_str)
                    if qty > 1:
                        count *= qty
                        SPC_CLM_COUNT, created = Document_attributes.objects.get_or_create(attr_type=SPC_CLM_COUNT_ATTR, value_str=str(count))
                        if created == True:
                            SPC_CLM_COUNT.value_int = count
                            SPC_CLM_COUNT.save()
                        res = SPC_CLM_COUNT
                    else:
                        res = item_line.SPC_CLM_COUNT
                except ValueError:
                    SPC_CLM_COUNT, created = Document_attributes.objects.get_or_create(attr_type=SPC_CLM_COUNT_ATTR, value_str='1')
                    if created == True:
                        SPC_CLM_COUNT.value_int = 1
                        SPC_CLM_COUNT.save()

        else:
            res = item_line.SPC_CLM_COUNT

        if res == None and item_line.section != 'Документация':
            raise Exception(blinkString(f'Для: {get_full_path} count == 0', color='red', bold=True, blink=False))

        settings.LOCKS.release(key)
        return res

    def rec_operation(self, operations_item, launch, get_full_path):
        from django.conf import settings
        from isc_common.common import blinkString
        from kaf_pas.production.models.launch_operation_attr import Launch_operation_attr
        from kaf_pas.production.models.launch_operation_material import Launch_operations_material
        from kaf_pas.production.models.launch_operation_resources import Launch_operation_resources
        from kaf_pas.production.models.launch_operations_item import Launch_operations_item
        from kaf_pas.production.models.operation_attr import Operation_attr
        from kaf_pas.production.models.operation_material import Operation_material
        from kaf_pas.production.models.operation_resources import Operation_resources

        # start_time = time.clock()
        launch_operations_item, created = Launch_operations_item.objects.get_or_create(
            item=operations_item.item,
            launch=launch,
            num=operations_item.num,
            operation=operations_item.operation,
            defaults=dict(
                description=operations_item.description,
                ed_izm=operations_item.ed_izm,
                operationitem=operations_item,
                qty=operations_item.qty,
            )
        )

        for operation_attr in Operation_attr.objects.filter(operation=operations_item.operation):
            Launch_operation_attr.objects.get_or_create(
                operation=launch_operations_item.operation,
                launch=launch,
                attr_type=operation_attr.attr_type
            )

        if created:
            logger.debug(f'Created: {created} launch_operations_item :  {launch_operations_item}')
            # logger_timing.debug(f'launch_operations_item Time: {time.clock() - start_time}')

            operation_material_query = Operation_material.objects.filter(operationitem=operations_item)

            for operation_material in operation_material_query:
                # start_time = time.clock()
                # 'launch_operationitem', 'material', 'material_askon'
                if operation_material.material != None or operation_material.material_askon != None:
                    launch_operations_material, created = Launch_operations_material.objects.get_or_create(
                        launch_operationitem=launch_operations_item,
                        material=operation_material.material,
                        material_askon=operation_material.material_askon,
                        defaults=dict(
                            operation_material=operation_material,
                            edizm=operation_material.edizm,
                            qty=operation_material.qty,
                        )
                    )
                    # launch_operations_materials.push(launch_operations_material)
                    if created:
                        logger.debug(f'Created: launch_operations_material :  {launch_operations_material}')

            def exception_not_location():
                raise Exception(f'''<b>Для : {get_full_path}</b>  {blinkString(text='не задано местоположение. Запустите анализатор готовности к запуску.', blink=False, color='red', bold=True)}''')

            operation_resources_query = Operation_resources.objects.filter(operationitem=operations_item)

            if operation_resources_query.count() == 0:
                exception_not_location()

            for operation_resources in operation_resources_query:
                if operation_resources.location == None:
                    exception_not_location()

                if operation_resources.resource == None:
                    # start_time = time.clock()
                    operation_resources.resource, created = settings.OPERS_STACK.NOT_UNDEFINED_WORKSHOP(operation_resources.location)
                    # logger.debug(f'Created : {created} operation_resources.resource :  {operation_resources.resource}')
                    # logger_timing.debug(f'Resource.objects.get_or_create Time: {time.clock() - start_time}')

                # start_time = time.clock()
                # 'launch_operationitem', 'location', 'resource'
                launch_operation_resource, created = Launch_operation_resources.objects.get_or_create(
                    launch_operationitem=launch_operations_item,
                    resource=operation_resources.resource,
                    location=operation_resources.location,
                    location_fin=operation_resources.location_fin,
                    defaults=dict(
                        operation_resources=operation_resources,
                        batch_size=operation_resources.batch_size,
                    )
                )
                # launch_operation_resources.push(launch_operation_resource)
                if created:
                    logger.debug(f'Created: launch_operation_resources.resource :  {launch_operation_resource}')

    def rec_operations_data(self, item, section, get_full_path, key, first_step, launch):
        from django.conf import settings
        from isc_common.common import blinkString
        from kaf_pas.production.models.operations_item import Operations_item

        # start_time = time.clock()
        cnt = Operations_item.objects.filter(item=item).count()
        # logger_timing.debug(f'Operations_item.objects.filter Time: {time.clock() - start_time}')
        if cnt == 0:
            if section != 'Документация':
                settings.LOCKS.release(key)
                raise Exception(blinkString(text=f'Для : ID: {item.id} {get_full_path} не найдена операция.', bold=True, blink=False))
        else:

            if first_step == True and section == 'Документация':
                settings.LOCKS.release(key)
                raise Exception(blinkString(text=f'Изделие : ID: {item.id} {get_full_path} должно входить как сборочная еденица.', bold=True, blink=False))

            if section != 'Документация':
                operations_item_query = Operations_item.objects.filter(item=item)

                for operations_item in operations_item_query:
                    try:
                        self.rec_operation(operations_item=operations_item, launch=launch, get_full_path=get_full_path)
                    except Exception as ex:
                        settings.LOCKS.release(key)
                        raise ex

    def make_launch(self, data, mode='add'):
        from django.conf import settings
        from django.db import transaction
        from isc_common import Stack
        from isc_common.auth.models.user import User
        from isc_common.bit import TurnBitOn
        from isc_common.common import blinkString
        from isc_common.datetime import DateTimeToStr
        from isc_common.datetime import DateToStr
        from isc_common.datetime import StrToDate
        from isc_common.number import StrToNumber
        from isc_common.progress import managed_progress
        from isc_common.progress import progress_deleted
        from isc_common.progress import ProgressDroped
        from isc_common.ws.webSocket import WebSocket
        from kaf_pas.ckk.models.ed_izm import Ed_izm
        from kaf_pas.ckk.models.item_line import Item_line
        from kaf_pas.ckk.models.item_refs import Item_refs
        from kaf_pas.production.models import p_id
        from kaf_pas.production.models.launch_item_line import Launch_item_line
        from kaf_pas.production.models.launch_item_refs import Launch_item_refs
        from kaf_pas.production.models.launches import Launches
        from kaf_pas.production.models.ready_2_launch_ext import Item_refs_Stack
        from kaf_pas.sales.models.demand import Demand
        from kaf_pas.sales.models.demand_view import Demand_view

        # logger.debug(f'make_launch data: {data}')
        # raise Exception(f'Функция находится на разработке.')
        id = data.get('id')
        demands = data.get('demand')

        description = data.get('description')
        date = data.get('date')

        date = StrToDate(date)
        user = User.objects.get(id=data.get('user_id'))

        edizm_shtuka = Ed_izm.objects.get(code='шт')

        parentlaunch = None

        if isinstance(demands, list):
            for demand_id in demands:
                demand = Demand_view.objects.get(id=demand_id)
                # if demand.qty_for_launch == None or demand.qty_for_launch == 0:
                #     raise Exception(f'Не указано количестово для запуска заказа № {demand.code} от {DateToStr(demand.date, hours=3)}')
                # elif demand.qty_for_launch > demand.tail_qty:
                #     raise Exception(f'Затребован болшее количество ({demand.qty_for_launch}) количестово для запуска заказа № {demand.code} от {DateToStr(demand.date, hours=3)}, чем имеется в наличии ({demand.tail_qty})')

                if demand.qty > demand.tail_qty:
                    raise Exception(f'Затребовано болшее количество ({demand.qty}) имеется для запуска заказа № {demand.code} от {DateToStr(demand.date, hours=3)}, чем имеется в наличии ({demand.tail_qty})')

        # launch_item_lines = Stack()
        # launch_operations_materials = Stack()
        # launch_operation_resources = Stack()

        if isinstance(demands, list):
            for demand_id in demands:
                key = f'LaunchesManager.make_launch_{demand_id}'
                settings.LOCKS.acquire(key)
                for demand in Demand.objects.filter(id=demand_id):
                    if demand.status.code != 'otkryt':
                        demand_view = Demand_view.objects.get(id=demand.id)
                        if demand_view.launch_qty == 0:
                            demand.status = settings.PROD_OPERS_STACK.DEMAND_OTKR
                            demand.save()
                        else:
                            settings.LOCKS.release(key)
                            raise Exception(f'Заказ № {demand.code} от {DateTimeToStr(demand.date)} не может быть запущен, т.к. находится в состоянии "{demand.status.name}"')

                    if mode == 'update':
                        item_query = Launches.objects.filter(demand__precent_item__item=demand.precent_item.item, status__code='formirovanie')
                        item_count = item_query.count()
                        if item_count > 0:
                            raise Exception(f'{demand.precent_item.item.item_name} уже включен в данный запуск.')

                    cnt = Launches.objects.filter(demand=demand).count() + 1
                    child_code = f'{demand.code}/{cnt}'

                    where_clause = f'where is_bit_on(props::integer, 0) = true and is_bit_on(props::integer, 1) = true and parent_id != {p_id}'
                    cntAll = Item_refs.objects.get_descendants_count(
                        id=demand.precent_item.item.id,
                        where_clause=where_clause,
                        # fields='child_id, parent_id'
                        # distinct='distinct'
                    )

                    logger.debug(f'cntAll: {cntAll}')
                    first_step = True

                    def get_template(date):
                        from isc_common.datetime import DateToStr
                        return DateToStr(date, '%Y / %m')

                    if mode == 'add':
                        code = get_template(date)
                        num = len([code for code in [get_template(launch.date) for launch in Launches.objects.filter(parent__isnull=True)] if code == code]) + 1
                        code = f'''{code} / {num}'''
                    elif mode == 'update':
                        parentlaunch = Launches.objects.get(id=id)
                        code = parentlaunch.code

                    with managed_progress(
                            id=f'demand_{demand.id}_{user.id}',
                            qty=cntAll,
                            user=user.id,
                            message=blinkString(f'Формирование производственной спецификации: Запуск № {code}, Заказ № {demand.code} от {DateToStr(demand.date)} ({cntAll} товарных позиций.)', bold=True, blink=False),
                            title='Выполнено',
                            props=TurnBitOn(0, 0)
                            # props=TurnBitOn(0, 1) #Без WebSocket progressbar a
                    ) as progress:
                        with transaction.atomic():
                            def except_func():
                                settings.LOCKS.release(key)

                            progress.except_func = except_func

                            # qty = demand.qty_for_launch
                            qty = demand.qty

                            if mode == 'add':
                                if parentlaunch == None:
                                    parentlaunch = Launches.objects.create(
                                        date=date,
                                        code=code,
                                        description=description,
                                        status=settings.PROD_OPERS_STACK.FORMIROVANIE
                                    )

                            launch = Launches.objects.create(
                                parent=parentlaunch,
                                code=child_code,
                                date=date,
                                demand_id=demand_id,
                                description=description,
                                qty=qty,
                                status=settings.PROD_OPERS_STACK.FORMIROVANIE
                            )

                            items_refs_stack = Item_refs_Stack()
                            items_refs_qty_stack = Stack()
                            items_refs_stack.add_parents(id=demand.precent_item.item.id)

                            item_ref_query = Item_refs.objects.get_descendants(
                                id=demand.precent_item.item.id,
                                where_clause=where_clause
                            )

                            for item_ref in item_ref_query:
                                if ~item_ref.props.used:
                                    settings.LOCKS.release(key)
                                    continue

                                items_refs_stack.push(item_ref)

                                try:
                                    item_line = Item_line.objects.get(parent=item_ref.parent, child=item_ref.child)
                                except Item_line.DoesNotExist:
                                    settings.LOCKS.release(key)
                                    raise Exception(blinkString(text=f'Для : PARENT_ID: {item_ref.parent.id if item_ref.parent else None} CHILD_ID: {item_ref.child.id} {items_refs_stack.get_full_path} не найдена строка детализации.', bold=True, blink=False))

                                count = self.get_count(
                                    item_line=item_line,
                                    qty=demand.qty,
                                    level=item_ref.level,
                                    get_full_path=items_refs_stack.get_full_path,
                                    get_full_path_obj=items_refs_stack.get_full_path_obj,
                                    items_refs_qty_stack=items_refs_qty_stack
                                )

                                _count_per_one = StrToNumber(item_line.SPC_CLM_COUNT.value_str) if count and item_line.section != 'Документация' else 0
                                _count = StrToNumber(count.value_str) if count and item_line.section != 'Документация' else 0

                                if items_refs_qty_stack.exists(lambda x: x[0] == item_ref.level and x[1] == item_ref.child.id) == False:
                                    items_refs_qty_stack.push((item_ref.level, item_ref.child.id, _count))

                                # start_time = time.clock()
                                launch_item_refs, created = Launch_item_refs.objects.get_or_create(
                                    child=item_ref.child,
                                    parent=item_ref.parent if item_ref.level != 1 else None,
                                    launch=launch,
                                    qty=_count,
                                    qty_per_one=_count_per_one,
                                    defaults=dict(
                                        item_refs=item_ref,
                                        item_full_name=items_refs_stack.get_full_path,
                                        item_full_name_obj=items_refs_stack.get_full_path_obj
                                    )
                                )

                                if created:
                                    logger.debug(f'Created: {created} launch_item_refs :  {launch_item_refs}')
                                    # logger_timing.debug(f'launch_item_refs Time: {time.clock() - start_time}')
                                else:
                                    launch_item_refs.replication_factor += 1
                                    launch_item_refs.save()
                                    # logger.warning(f'!!!!!!!!!!!!!!!!!!!!!!!!!!!! Not Created: {created} launch_item_refs :  {launch_item_refs} !!!!!!!!!!!!!!!!!!!!!!!')

                                    # start_time = time.clock()

                                edizm = item_line.edizm if item_line.edizm else edizm_shtuka

                                launch_item_line, created = Launch_item_line.objects.get_or_create(
                                    child=item_line.child,
                                    parent=item_line.parent,
                                    item_line=item_line,
                                    launch=launch,

                                    SPC_CLM_FORMAT=item_line.SPC_CLM_FORMAT,
                                    SPC_CLM_ZONE=item_line.SPC_CLM_ZONE,
                                    SPC_CLM_POS=item_line.SPC_CLM_POS,
                                    SPC_CLM_MARK=item_line.SPC_CLM_MARK,
                                    SPC_CLM_NAME=item_line.SPC_CLM_NAME,
                                    SPC_CLM_COUNT=count,
                                    SPC_CLM_NOTE=item_line.SPC_CLM_NOTE,
                                    SPC_CLM_MASSA=item_line.SPC_CLM_MASSA,
                                    SPC_CLM_MATERIAL=item_line.SPC_CLM_MATERIAL,
                                    SPC_CLM_USER=item_line.SPC_CLM_USER,
                                    SPC_CLM_KOD=item_line.SPC_CLM_KOD,
                                    SPC_CLM_FACTORY=item_line.SPC_CLM_FACTORY,
                                    edizm=edizm,
                                    section=item_line.section,
                                    section_num=item_line.section_num,
                                    subsection=item_line.subsection,
                                )

                                if created:
                                    logger.debug(f'Created : launch_item_line :  {launch_item_line}')

                                if item_ref.parent:
                                    if first_step == False:
                                        self.rec_operations_data(
                                            item=item_ref.parent,
                                            section=launch_item_line.section,
                                            get_full_path=items_refs_stack.get_full_path,
                                            key=key,
                                            first_step=first_step,
                                            launch=launch,
                                        )

                                self.rec_operations_data(
                                    item=item_ref.child,
                                    section=launch_item_line.section,
                                    get_full_path=items_refs_stack.get_full_path,
                                    key=key,
                                    first_step=first_step,
                                    launch=launch,
                                )
                                first_step = False

                                if progress.step() != 0:
                                    settings.LOCKS.release(key)
                                    raise ProgressDroped(progress_deleted)

                            demand.status = settings.PROD_OPERS_STACK.DEMAND_LAUNCHED
                            demand.save()
                            settings.LOCKS.release(key)

                            WebSocket.full_refresh_grid(settings.GRID_CONSTANTS.refresh_production_launch_grid)
                        # end_time = time.clock()
                        # logger_timing.debug(f'End Time: {end_time}')
                        # logger_timing.debug(f'Total Time: {end_time - start_time}')

                        settings.EVENT_STACK.EVENTS_PRODUCTION_MAKE_LAUNCH.send_message(message=f'Выполнено формирование запуска  <h3>{launch.code} от {launch.date}</h3><p/>')

        return data
