import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOpenOrdersComponent } from './my-open-orders.component';
import { WsClientModule } from '@app/shared/services/ws-client/ws-client.module';
import { MatTableModule, MatButtonModule } from '@angular/material';
import { IconModule } from '@app/shared/components/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    WsClientModule,
    MatTableModule,
    MatButtonModule,
    IconModule,
  ],
  declarations: [MyOpenOrdersComponent],
  exports: [MyOpenOrdersComponent]
})
export class MyOpenOrdersModule { }
