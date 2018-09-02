import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotoApiService } from '@app/shared/services/roboto-api/roboto-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    RobotoApiService
  ]
})
export class RobotoApiModule { }
