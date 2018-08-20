import { Component, OnInit, Input, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { GoogleChartComponent } from 'ng2-google-charts';
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
      title: 'Company Performance',
      legend: {
        position: 'bottom',
      }
    }
  };

  @Input()
  set data(v: any[]) {
    if (v && this._data !== v) {
      this._data = v;
      this.dataChanges.emit(this._data);
    }
  }

  get data() {
    return this._data;
  }

  @ViewChild(GoogleChartComponent) cchart: GoogleChartComponent;

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
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(this.updateChartData)
  }

  private updateChartData = (data) => {
    this.lineChartData.dataTable = [['Time', 'Price']];
    if (data && data.length) {
      this.lineChartData.dataTable.push(...data);
    } else {
      this.lineChartData.dataTable.push([0, 0]);
    }
    this.lineChartData = Object.create(this.lineChartData);
  }

}
