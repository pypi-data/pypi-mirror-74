import logging

from bitfield import BitField
from django.conf import settings
from django.db import transaction, connection
from django.db.models import PositiveIntegerField, OneToOneField, CASCADE, UniqueConstraint, Q
from django.forms import model_to_dict

from isc_common import delAttr, setAttr
from isc_common.bit import IsBitOn
from isc_common.fields.related import ForeignKeyProtect
from isc_common.http.DSRequest import DSRequest
from isc_common.managers.common_managet_with_lookup_fields import CommonManagetWithLookUpFieldsManager, CommonManagetWithLookUpFieldsQuerySet
from isc_common.models.audit import AuditModel
from isc_common.number import DelProps
from kaf_pas.ckk.models.locations import Locations
from kaf_pas.production.models.launch_operations_item import Launch_operations_item
from kaf_pas.production.models.operation_resources import Operation_resources
from kaf_pas.production.models.resource import Resource

logger = logging.getLogger(__name__)


class Launch_operation_resourcesQuerySet(CommonManagetWithLookUpFieldsQuerySet):
    def create(self, **kwargs):
        if kwargs.get('resource'):
            setAttr(kwargs, 'resource_id', kwargs.get('resource').id)
            delAttr(kwargs, 'resource')

        if kwargs.get('location'):
            setAttr(kwargs, 'location_id', kwargs.get('location').id)
            delAttr(kwargs, 'location')

        if not kwargs.get('resource_id') and not kwargs.get('location_id'):
            raise Exception('Необходим хотябы один выбранный параметр.')
        delAttr(kwargs, 'resource__name')
        delAttr(kwargs, 'location__full_name')

        resource_id = kwargs.get('resource_id')
        if resource_id:
            setAttr(kwargs, 'location_id', Resource.objects.get(id=resource_id).location.id)

        setAttr(kwargs, '_operation', 'create')
        return super().create(**kwargs)


class Launch_operation_resourcesManager(CommonManagetWithLookUpFieldsManager):

    @staticmethod
    def refresh_resource(apps=None, schema_editor=None):
        key = 'Launch_operation_resourcesManager.refresh_resource'
        settings.LOCKS.acquire(key)
        sql_text = '''select  launch_operationitem_id, count(*)
                from production_launch_operation_resources
                group by launch_operationitem_id
                having count(*) > 1'''

        sql_items = f'''select id
        from production_launch_operation_resources
        where launch_operationitem_id = %s'''

        with transaction.atomic():
            with connection.cursor() as cursor:
                cursor.execute(sql_text)
                rows = cursor.fetchall()
                for row in rows:
                    launch_operationitem_id, count = row
                    # print(f'launch_operationitem_id: {launch_operationitem_id}')
                    cursor.execute(sql_items, [launch_operationitem_id])
                    rows_item = cursor.fetchall()

                    first_step = True
                    for item in rows_item:
                        id, = item
                        if not first_step:
                            # print(f'id: {id}')
                            res = Launch_operation_resources.objects.filter(id=id).delete()
                            # print(res)
                        else:
                            first_step = False
        settings.LOCKS.release(key)

    def createFromRequest(self, request):
        from kaf_pas.production.models.launch_item_view import Launch_item_viewManager

        request = DSRequest(request=request)
        data = request.get_data()
        _data = data.copy()
        launch_operationitem_id = _data.get('launch_operationitem_id')

        res = []
        if isinstance(launch_operationitem_id, list):
            delAttr(_data, 'launch_operationitem_id')
            with transaction.atomic():
                for launch_operationitem in launch_operationitem_id:
                    setAttr(_data, 'launch_operationitem_id', launch_operationitem)

                    Launch_item_viewManager.check_launch(Launch_operation_resources.objects.get(launch_operationitem_id=launch_operationitem).launch_operationitem.launch)
                    operation_resource = super().create(**_data)
                    _res = model_to_dict(operation_resource)
                    setAttr(_res, 'location__full_name', operation_resource.location.full_name if operation_resource.location else None)
                    setAttr(_res, 'resource__name', operation_resource.resource.full_name if operation_resource.resource else None)
                    res.append(DelProps(_res))
        else:
            Launch_item_viewManager.check_launch(Launch_operation_resources.objects.get(launch_operationitem_id=launch_operationitem_id).launch_operationitem.launch)
            operation_resource = super().create(**_data)
            _res = model_to_dict(operation_resource)
            setAttr(_res, 'location__full_name', operation_resource.location.full_name if operation_resource.location else None)
            setAttr(_res, 'resource__name', operation_resource.resource.full_name if operation_resource.resource else None)
            res.append(DelProps(_res))
        return res

    def deleteFromRequest(self, request, removed=None, ):
        from kaf_pas.production.models.launch_item_view import Launch_item_viewManager

        request = DSRequest(request=request)
        res = 0
        tuple_ids = request.get_tuple_ids()
        with transaction.atomic():
            for id, mode in tuple_ids:
                if mode == 'hide':
                    super().filter(id=id).soft_delete()
                else:
                    Launch_item_viewManager.check_launch(Launch_operation_resources.objects.get(id=id).launch_operationitem.launch)
                    qty, _ = super().filter(id=id).delete()
                res += qty
        return res

    @staticmethod
    def getRecord(record):
        res = {
            'id': record.id,
            'operation_resources_id': record.operation_resources.id if record.operation_resources else None,
            'launch_operationitem_id': record.launch_operationitem.id,
            'resource_id': record.resource.id if record.resource else None,
            'resource__code': record.resource.code if record.resource else None,
            'resource__name': record.resource.name if record.resource else None,
            'location_id': record.location.id if record.location else None,
            'location__code': record.location.code if record.location else None,
            'location__name': record.location.name if record.location else None,
            'location__full_name': record.location.full_name if record.location else None,
            'location_fin_id': record.location_fin.id if record.location_fin else None,
            'location_fin__code': record.location_fin.code if record.location_fin else None,
            'location_fin__name': record.location_fin.name if record.location_fin else None,
            'location_fin__full_name': record.location_fin.full_name if record.location_fin else None,
            'complex_name': record.complex_name,
            'batch_size': record.batch_size,
            'props': record.props._value,
            'enabled': IsBitOn(record.props, 0),
            'editing': record.editing,
            'deliting': record.deliting,
        }
        return res

    def get_queryset(self):
        return Launch_operation_resourcesQuerySet(self.model, using=self._db)


class Launch_operation_resources(AuditModel):
    operation_resources = ForeignKeyProtect(Operation_resources, null=True, blank=True)
    launch_operationitem = OneToOneField(Launch_operations_item, on_delete=CASCADE)
    resource = ForeignKeyProtect(Resource, null=True, blank=True)
    location = ForeignKeyProtect(Locations, related_name='Launch_operation_resources_location')
    location_fin = ForeignKeyProtect(Locations, related_name='Launch_operation_resources_location_fin', null=True, blank=True)
    batch_size = PositiveIntegerField(default=1, db_index=True)

    props = BitField(flags=(
        ('enabled', 'Доступность в данной производственной спецификации'),  # 1
    ), default=1, db_index=True)

    @property
    def complex_name(self):
        return f'{self.resource.location.full_name}{self.resource.name}' if self.resource else None

    objects = Launch_operation_resourcesManager()

    def __str__(self):
        return f"ID: {self.id}, \n" \
               f"operation_resources: [{self.operation_resources}], \n" \
               f"launch_operationitem: [{self.launch_operationitem}], \n" \
               f"resource: [{self.resource}], \n" \
               f"location: [{self.location}], \n" \
               f"location_fin: [{self.location_fin}], \n" \
               f"batch_size: {self.batch_size}\n"

    class Meta:
        verbose_name = 'Кросс таблица'
        constraints = [
            UniqueConstraint(fields=['launch_operationitem'], condition=Q(location=None) & Q(location_fin=None) & Q(resource=None), name='Launch_operation_resources_unique_constraint_0'),
            UniqueConstraint(fields=['launch_operationitem', 'resource'], condition=Q(location=None) & Q(location_fin=None), name='Launch_operation_resources_unique_constraint_1'),
            UniqueConstraint(fields=['launch_operationitem', 'location'], condition=Q(location_fin=None) & Q(resource=None), name='Launch_operation_resources_unique_constraint_2'),
            UniqueConstraint(fields=['launch_operationitem', 'location', 'resource'], condition=Q(location_fin=None), name='Launch_operation_resources_unique_constraint_3'),
            UniqueConstraint(fields=['launch_operationitem', 'location_fin'], condition=Q(location=None) & Q(resource=None), name='Launch_operation_resources_unique_constraint_4'),
            UniqueConstraint(fields=['launch_operationitem', 'location_fin', 'resource'], condition=Q(location=None), name='Launch_operation_resources_unique_constraint_5'),
            UniqueConstraint(fields=['launch_operationitem', 'location', 'location_fin'], condition=Q(resource=None), name='Launch_operation_resources_unique_constraint_6'),
            UniqueConstraint(fields=['launch_operationitem', 'location', 'location_fin', 'resource'], name='Launch_operation_resources_unique_constraint_7'),
        ]
