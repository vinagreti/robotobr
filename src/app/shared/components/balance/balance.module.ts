import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance.component';
import { WsClientModule } from '@app/shared/services/ws-client/ws-client.module';

@NgModule({
  imports: [
    CommonModule,
    WsClientModule,
  ],
  declarations: [BalanceComponent],
  exports: [BalanceComponent]
})
export class BalanceModule { }
