import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinanceService } from '@app/shared/services/binance-service/binance.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BinanceService
  ]
})
export class BinanceServiceModule { }
