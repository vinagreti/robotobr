import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-service/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  user;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

}
