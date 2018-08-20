import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Input() iconMode = false;

  menuItems = [
    { name: 'Bot', icon: 'home', routerPath: '' },
    { name: 'Dashboard', icon: 'home', routerPath: '/dashboard' },
    { name: 'Profile', icon: 'home', routerPath: '/account/profile' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
