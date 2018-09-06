import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material';
import { LoginRoutingModule } from './login-routing.module';
import { IconModule } from '@app/shared/components/icon/icon.module';

@NgModule({
  imports: [
    MatButtonModule,
    IconModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule {}
