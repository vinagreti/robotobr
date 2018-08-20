import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatcherComponent } from './watcher.component';
import { WsClientModule } from '../../services/ws-client/ws-client.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    WsClientModule,
    FlexLayoutModule,
  ],
  declarations: [WatcherComponent],
  exports: [WatcherComponent]
})
export class WatcherModule { }
