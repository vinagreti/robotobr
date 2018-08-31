import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutionReportComponent } from './execution-report.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExecutionReportComponent],
  exports: [ExecutionReportComponent]
})
export class ExecutionReportModule { }
