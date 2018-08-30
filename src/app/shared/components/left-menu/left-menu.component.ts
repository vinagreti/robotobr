import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Input() iconMode = false;

  menuItems = [
    { name: 'Dashboard', icon: 'multiline_chart', routerPath: '/dashboard' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
