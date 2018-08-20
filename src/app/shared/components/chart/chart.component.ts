import { Component, OnInit, Input, EventEmitter, OnDestroy } from '@angular/core';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {

  lineChartData = {
    chartType: 'LineChart',
    dataTable: [
      ['Time', 'Price'],
      ['0', 0]
    ],
    options: {
      legend: {
        position: 'bottom',
      }
    }
  };

  @Input() title: string;

  @Input()
  set data(v: any[]) {
    if (v && JSON.stringify(this._data) !== JSON.stringify(v)) {
      this._data = v;
      this.dataChanges.emit(this._data);
    }
  }

  get data() {
    return this._data;
  }

  private dataChanges = new EventEmitter();

  private dataChangesSubscription: Subscription;

  private _data = [];

  constructor() { }

  ngOnInit() {
    this.subscribeToDataChanges()
  }

  ngOnDestroy() {
    this.unsubscribeToDataChanges();
  }

  private unsubscribeToDataChanges() {
    this.dataChangesSubscription.unsubscribe();
  }

  private subscribeToDataChanges() {
    this.dataChangesSubscription = this.dataChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(this.updateChartData)
  }

  private updateChartData = (data) => {
    console.log('updateChartData', this.title)
    this.lineChartData.dataTable = [['Time', 'Price']];
    if (data && data.length) {
      this.lineChartData.dataTable.push(...data);
    } else {
      this.lineChartData.dataTable.push([0, 0]);
    }

    if (this.title) {
      this.lineChartData.options['title'] = this.title;
    }

    this.lineChartData = Object.create(this.lineChartData);
  }

}
