import { Component, Input, forwardRef } from '@angular/core';
import { SIDES, Side } from '@app/shared/components/models/sides';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

//  Used to extend ngForms functions
const SIDE_SELECTOR_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SideSelectorComponent),
  multi: true
};

@Component({
  selector: 'app-side-selector',
  templateUrl: './side-selector.component.html',
  styleUrls: ['./side-selector.component.scss'],
  providers: [SIDE_SELECTOR_CONTROL_VALUE_ACCESSOR]
})
export class SideSelectorComponent implements ControlValueAccessor {

  sides: Side[] = Object.keys(SIDES).map(key => SIDES[key]);

  set value(v: Side) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
      this.setTouched();
    }
  }

  get value(): Side {
    return this.innerValue;
  }

  @Input() placeholder = 'Side';

  private touched: boolean;

  private innerValue: Side;

  private onTouchedCallback: () => void = noop;

  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  writeValue(v: Side) {
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
