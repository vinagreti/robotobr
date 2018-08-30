import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule } from '@angular/material';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { UserServiceModule } from '../shared/services/user-service/user-service.module';
import { LeftMenuModule } from '../shared/components/left-menu/left-menu.module';
import { BalanceModule } from '@app/shared/components/balance/balance.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    UserServiceModule,
    FlexLayoutModule,
    LeftMenuModule,
    MatDividerModule,
    BalanceModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
