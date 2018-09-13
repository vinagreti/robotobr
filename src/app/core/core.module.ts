import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotoApiModule } from '@app/shared/services/roboto-api/roboto-api.module';
import { UpsertOrderModule } from '@app/shared/components/order/upsert-order/upsert-order.module';
import { AuthModule } from '@app/shared/services/auth-service/auth.module';
import { LocalFirebaseModule } from '@app/shared/services/local-firebase/local-firebase.module';
import { LocalDatabaseModule } from '@app/shared/services/local-database/local-database.module';
import { WsClientModule } from '@app/shared/services/ws-client/ws-client.module';

@NgModule({
  imports: [
    CommonModule,
    RobotoApiModule,
    UpsertOrderModule,
    AuthModule,
    LocalFirebaseModule,
    LocalDatabaseModule,
    WsClientModule,
  ]
})
export class CoreModule { }
