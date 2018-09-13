import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideSelectorComponent } from './side-selector.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
  ],
  declarations: [SideSelectorComponent],
  exports: [SideSelectorComponent]
})
export class SideSelectorModule { }
