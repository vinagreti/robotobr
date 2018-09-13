import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationFormComponent } from './operation-form.component';
import { MarketSelectorModule } from '@app/shared/components/form/market-selector/market-selector.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MarketSelectorModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    FlexLayoutModule,
  ],
  declarations: [OperationFormComponent],
  exports: [OperationFormComponent]
})
export class OperationFormModule { }
