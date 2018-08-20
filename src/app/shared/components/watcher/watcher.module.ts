import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatcherComponent } from './watcher.component';
import { WsClientModule } from '../../services/ws-client/ws-client.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartModule } from '@app/shared/components/chart/chart.module';

@NgModule({
  imports: [
    CommonModule,
    WsClientModule,
    FlexLayoutModule,
    ChartModule,
  ],
  declarations: [WatcherComponent],
  exports: [WatcherComponent]
})
export class WatcherModule { }
