import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertOrderComponent } from './upsert-order.component';
import { MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpsertOrderService } from '@app/shared/components/order/upsert-order/upsert-order.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
  ],
  providers: [UpsertOrderService],
  declarations: [UpsertOrderComponent],
  exports: [UpsertOrderComponent],
  entryComponents: [UpsertOrderComponent],
})
export class UpsertOrderModule { }
