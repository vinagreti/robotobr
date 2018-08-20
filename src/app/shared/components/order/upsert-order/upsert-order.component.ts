import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upsert-order',
  templateUrl: './upsert-order.component.html',
  styleUrls: ['./upsert-order.component.scss']
})
export class UpsertOrderComponent implements OnInit {

  @Output() create = new EventEmitter();

  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.cancel.emit();
  }

  onCreate() {
    this.create.emit({});
  }

}
