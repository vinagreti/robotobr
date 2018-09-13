import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertOrderComponent } from './upsert-order.component';
import { MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpsertOrderService } from '@app/shared/components/order/upsert-order/upsert-order.service';
import { ConfirmDialogModule } from '@app/shared/components/confirm-dialog/confirm-dialog.module';
import { MarketSelectorModule } from '@app/shared/components/form/market-selector/market-selector.module';
import { SideSelectorModule } from '@app/shared/components/form/side-selector/side-selector.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FlexLayoutModule,
    ConfirmDialogModule,
    MarketSelectorModule,
    SideSelectorModule,
  ],
  providers: [UpsertOrderService],
  declarations: [UpsertOrderComponent],
  exports: [UpsertOrderComponent],
  entryComponents: [UpsertOrderComponent],
})
export class UpsertOrderModule { }
