import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UpsertOrderService {

  setTotal = new EventEmitter<number>();

  setPrice = new EventEmitter<number>();

  setQuantity = new EventEmitter<number>();

  constructor() { }
}
