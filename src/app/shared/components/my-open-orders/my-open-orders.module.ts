import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOpenOrdersComponent } from './my-open-orders.component';
import { WsClientModule } from '@app/shared/services/ws-client/ws-client.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    WsClientModule,
    MatTableModule,
  ],
  declarations: [MyOpenOrdersComponent],
  exports: [MyOpenOrdersComponent]
})
export class MyOpenOrdersModule { }
