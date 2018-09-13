import { Component, forwardRef, Input } from '@angular/core';
import { MARKETS, Market } from '@app/shared/components/models/markets';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

//  Used to extend ngForms functions
const MARKET_SELECTOR_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MarketSelectorComponent),
  multi: true
};

@Component({
  selector: 'app-market-selector',
  templateUrl: './market-selector.component.html',
  styleUrls: ['./market-selector.component.scss'],
  providers: [MARKET_SELECTOR_CONTROL_VALUE_ACCESSOR]
})
export class MarketSelectorComponent implements ControlValueAccessor {

  markets: Market[] = Object.keys(MARKETS).map(key => MARKETS[key]);

  set value(v: Market) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.setTouched();
    }
  }

  get value(): Market {
    return this.innerValue;
  }

  @Input() placeholder = 'Market';

  @Input() disabled: boolean;

  private touched: boolean;

  private innerValue: Market;

  private onTouchedCallback: () => void = noop;

  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  writeValue(v: Market) {
    if (v !== this.value) {
      this.value = v;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  private setTouched() {
    if (!this.touched) {
      this.touched = true;
      this.onTouchedCallback();
    }
  }

}
