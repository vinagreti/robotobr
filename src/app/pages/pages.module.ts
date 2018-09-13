import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule } from '@angular/material';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { UserServiceModule } from '../shared/services/user-service/user-service.module';
import { LeftMenuModule } from '../shared/components/left-menu/left-menu.module';
import { BalanceModule } from '@app/shared/components/balance/balance.module';
import { ExecutionReportModule } from '@app/shared/components/execution-report/execution-report.module';
import { MyOpenOrdersModule } from '@app/shared/components/my-open-orders/my-open-orders.module';
import { UpsertOrderModule } from '@app/shared/components/order/upsert-order/upsert-order.module';
import { TabsModule } from '@app/shared/components/tabs/tabs.module';
import { OperationFormModule } from '@app/shared/components/operation/operation-form/operation-form.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    UserServiceModule,
    FlexLayoutModule,
    LeftMenuModule,
    ExecutionReportModule,
    MatDividerModule,
    BalanceModule,
    MyOpenOrdersModule,
    UpsertOrderModule,
    TabsModule,
    OperationFormModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
