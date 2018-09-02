import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertOrderComponent } from './upsert-order.component';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
  ],
  declarations: [UpsertOrderComponent],
  exports: [UpsertOrderComponent],
  entryComponents: [UpsertOrderComponent],
})
export class UpsertOrderModule { }
