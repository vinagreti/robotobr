import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WatcherModule } from '@app/shared/components/watcher/watcher.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogModule } from '@app/shared/components/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    WatcherModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    FlexLayoutModule,
    DialogModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
