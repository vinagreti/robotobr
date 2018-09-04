import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotoApiModule } from '@app/shared/services/roboto-api/roboto-api.module';
import { UpsertOrderModule } from '@app/shared/components/order/upsert-order/upsert-order.module';

@NgModule({
  imports: [
    CommonModule,
    RobotoApiModule,
    UpsertOrderModule,
  ]
})
export class CoreModule { }
