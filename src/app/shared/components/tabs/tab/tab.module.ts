import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { TabComponent } from './tab.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [TabComponent],
  exports: [TabComponent],
})
export class TabModule { }
