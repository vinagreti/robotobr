import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WsClientService } from './ws-client.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WsClientService
  ]
})
export class WsClientModule { }
