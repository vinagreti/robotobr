import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule { }
