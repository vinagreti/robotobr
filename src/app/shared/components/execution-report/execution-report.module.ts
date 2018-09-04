import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutionReportComponent } from './execution-report.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [ExecutionReportComponent],
  exports: [ExecutionReportComponent]
})
export class ExecutionReportModule { }
