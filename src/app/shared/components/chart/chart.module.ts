import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ScriptServiceModule } from '@app/shared/services/script';


@NgModule({
  imports: [
    CommonModule,
    ScriptServiceModule,
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule { }
