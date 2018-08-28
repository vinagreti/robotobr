import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WatcherModule } from '@app/shared/components/watcher/watcher.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogModule } from '@app/shared/components/dialog/dialog.module';
import { UpsertOrderModule } from '@app/shared/components/order/upsert-order/upsert-order.module';
import { BalanceModule } from '@app/shared/components/balance/balance.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    WatcherModule,
    BalanceModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    FlexLayoutModule,
    DialogModule,
    UpsertOrderModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
