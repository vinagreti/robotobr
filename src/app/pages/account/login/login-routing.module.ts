import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const _loginRoutes: Routes = [

  { path: '',     component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(_loginRoutes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
