import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatcherComponent } from './watcher.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartModule } from '@app/shared/components/chart/chart.module';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ChartModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [WatcherComponent],
  exports: [WatcherComponent]
})
export class WatcherModule { }
