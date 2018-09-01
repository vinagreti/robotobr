import { Component, AfterViewInit, Input } from '@angular/core';
import { ScriptService } from '@app/shared/services/script';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  id = Date.now();

  chart;

  private tradingView;

  @Input() market: string;

  @Input() title: string;

  constructor(
    private script: ScriptService
  ) { }

  ngAfterViewInit() {
    this.loadScripts();
  }

  initTradingView() {
    this.chart = new this.tradingView.widget({
      autosize: true,
      symbol: `BINANCE:${this.market}`,
      interval: '15',
      timezone: 'Etc/UTC',
      theme: 'Light',
      style: '1',
      locale: 'br',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      allow_symbol_change: false,
      container_id: this.id
    });
  }

  private loadScripts() {
    this.script.load('https://s3.tradingview.com/tv.js', 'TradingView')
      .then(tradingView => {
        this.tradingView = tradingView;

        if (this.market) {
          this.initTradingView();
        }
      });
  }

}
