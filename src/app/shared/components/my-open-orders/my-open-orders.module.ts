import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOpenOrdersComponent } from './my-open-orders.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MyOpenOrdersComponent],
  exports: [MyOpenOrdersComponent]
})
export class MyOpenOrdersModule { }
