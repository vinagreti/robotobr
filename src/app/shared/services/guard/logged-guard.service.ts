import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@shared/services/auth-service/auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoggedGuardService implements CanActivate {

  public loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private auth: AuthService) {
    console.log('LoggedGuardService started');
    this.auth.user.subscribe(user => {
      if (user && user.auth && user.uid) {
        this.loginStatus.next(user.logged);
      }
    });
  }

  canActivate() {
    return this.loginStatus;
  }
}
