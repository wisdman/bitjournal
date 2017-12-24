import { Component, forwardRef, Input } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { ENTER } from '@angular/cdk/keycodes'

import {MatChipInputEvent} from '@angular/material'

import { Timestamp } from '@core/timestamp'

@Component({
  selector: 'datetime',
  templateUrl: './datetime.component.html',
  styleUrls: [ './datetime.component.css' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimeComponent),
    multi: true
  }]
})
export class DateTimeComponent implements ControlValueAccessor {

  ts: Timestamp | null

  get value(): string {
    if (this.ts === null)
      return ''

    return this.ts.dateString + 'T' + this.ts.timeString
  }

  set value(value: string) {
    let ts
    try {
      ts = value && new Timestamp(value) || null
    } catch (_) {
      ts = null
    }
    this.ts = ts
    this.onChangeCallback(ts)
  }

  private onTouchedCallback: () => void = () => {}
  private onChangeCallback: (_: any) => void = () => {}

  onBlur() {
    this.onTouchedCallback()
  }

  writeValue(value: any) {
    let ts
    try {
      ts = value && new Timestamp(value) || null
    } catch (_) {
      ts = null
    }
    this.ts = ts
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }
}
