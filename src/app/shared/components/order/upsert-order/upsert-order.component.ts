import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upsert-order',
  templateUrl: './upsert-order.component.html',
  styleUrls: ['./upsert-order.component.scss']
})
export class UpsertOrderComponent implements OnInit {

  @Input() formData: any = {};

  constructor() { }

  ngOnInit() {
  }

}
