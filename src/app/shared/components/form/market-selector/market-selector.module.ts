import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketSelectorComponent } from './market-selector.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
  ],
  declarations: [MarketSelectorComponent],
  exports: [MarketSelectorComponent]
})
export class MarketSelectorModule { }
