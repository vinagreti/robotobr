import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {

  @Input() activeTab: string;

  @ContentChild(TemplateRef) content: TemplateRef<TabMenuComponent>;

  constructor() { }

  ngOnInit() {
  }

}
