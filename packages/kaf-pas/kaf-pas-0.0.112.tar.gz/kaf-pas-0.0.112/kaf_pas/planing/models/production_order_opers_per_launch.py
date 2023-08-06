import logging

from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.db.models import DecimalField, DateTimeField, TextField, PositiveIntegerField, SmallIntegerField, BigIntegerField

from isc_common.auth.models.user import User
from isc_common.fields.code_field import CodeField
from isc_common.fields.related import ForeignKeyProtect, ForeignKeySetNull
from isc_common.managers.common_manager import CommonManager
from isc_common.models.audit import AuditModel
from isc_common.ws.webSocket import WebSocket
from kaf_pas.ckk.models.locations import Locations
from kaf_pas.planing.models.operation_operation import Operation_operation
from kaf_pas.planing.models.operation_types import Operation_types
from kaf_pas.planing.models.production_order_opers import Production_order_opersManager, Production_order_opersQuerySet
from kaf_pas.production.models.launches import Launches
from kaf_pas.production.models.resource import Resource

logger = logging.getLogger(__name__)


class Production_order_opers_per_launchManager(CommonManager):

    @staticmethod
    def refreshRows(ids):
        if isinstance(ids, int):
            ids = [ids]
        records = [Production_order_opersManager.getRecord(record) for record in Production_order_opers_per_launch.objects.filter(id__in=ids)]
        WebSocket.row_refresh_grid(grid_id=settings.GRID_CONSTANTS.refresh_operationsGrid_row, records=records)

    @staticmethod
    def fullRows(suffix=''):
        WebSocket.full_refresh_grid(grid_id=f'{settings.GRID_CONSTANTS.refresh_operationsGrid}{suffix}')

    def get_queryset(self):
        return Production_order_opersQuerySet(self.model, using=self._db)


class Production_order_opers_per_launch(AuditModel):
    from kaf_pas.planing.models.status_operation_types import Status_operation_types
    from kaf_pas.planing.models.operation_refs import Operation_refsManager

    date = DateTimeField(default=None)
    description = TextField(null=True, blank=True)
    opertype = ForeignKeyProtect(Operation_types, related_name='Production_order_opers_per_launch_opertype')
    creator = ForeignKeyProtect(User, related_name='Production_order_opers_per_launch_creator')
    status = ForeignKeyProtect(Status_operation_types)
    operation_operation = ForeignKeySetNull(Operation_operation, null=True, blank=True)
    num = CodeField()
    operation_operation_num = PositiveIntegerField()
    production_operation_num = PositiveIntegerField()
    production_operation_attrs = ArrayField(CodeField(null=True, blank=True))
    production_operation_colors = ArrayField(SmallIntegerField(null=True, blank=True))
    parent_id = BigIntegerField()

    launch = ForeignKeyProtect(Launches)
    location = ForeignKeyProtect(Locations, related_name='Production_order_opers_per_launch_location')
    location_fin = ForeignKeySetNull(Locations, related_name='Production_order_opers_per_launch_location_fib', null=True, blank=True)

    resource = ForeignKeyProtect(Resource)
    edizm_arr = ArrayField(CodeField(null=True, blank=True))
    value_sum = DecimalField(decimal_places=4, max_digits=19)
    value1_sum = ArrayField(DecimalField(decimal_places=4, max_digits=19))
    value_made = DecimalField(decimal_places=4, max_digits=19, null=True, blank=True)
    value_start = DecimalField(decimal_places=4, max_digits=19, null=True, blank=True)
    value_odd = DecimalField(decimal_places=4, max_digits=19)

    props = Operation_refsManager.props()

    objects = Production_order_opers_per_launchManager()

    def __str__(self):
        return super().__str__()

    def __repr__(self):
        return self.__str__()

    class Meta:
        managed = False
        db_table = 'planing_production_order_opers_per_launch_view'
        verbose_name = 'Операции Заказа на производство'
