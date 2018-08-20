import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$ = new BehaviorSubject(undefined);

  constructor() {
    this.loadCurrentUser();
  }

  private loadCurrentUser() {
    this.user$.next({
      name: 'San Carlos',
      email: 'sancarlos@gmail.com',
      avatar: 'https://sancarlosblog.com/wp-content/uploads/sites/455/2008/11/calvinhobbscalmdown.jpg',
    });
  }

}
