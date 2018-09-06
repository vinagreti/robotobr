import { NgModule } from '@angular/core';
import { LoggedGuardService } from './logged-guard.service';

@NgModule({
  providers: [
    LoggedGuardService,
  ]
})
export class GuardModule {}
