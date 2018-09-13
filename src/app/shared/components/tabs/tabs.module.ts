import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { TabsComponent } from './tabs.component';
import { TabModule } from './tab/tab.module';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    TabModule
  ],
  declarations: [TabsComponent, TabMenuComponent],
  exports: [
    TabsComponent,
    TabMenuComponent,
    TabModule
  ],
})
export class TabsModule { }
