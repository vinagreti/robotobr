import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationMonitorComponent } from './operation-monitor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OperationMonitorComponent],
  exports: [OperationMonitorComponent]
})
export class OperationMonitorModule { }
