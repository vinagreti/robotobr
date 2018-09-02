import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotoApiModule } from '@app/shared/services/roboto-api/roboto-api.module';

@NgModule({
  imports: [
    CommonModule,
    RobotoApiModule,
  ]
})
export class CoreModule { }
