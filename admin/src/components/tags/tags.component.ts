import { Component, forwardRef, Input } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { ENTER } from '@angular/cdk/keycodes'

import {MatChipInputEvent} from '@angular/material'


@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: [ './tags.component.css' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsComponent),
    multi: true
  }]
})
export class TagsComponent implements ControlValueAccessor {

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER];

  tags: Array<string> = new Array<string>()

  private onTouchedCallback: () => void = () => {}
  private onChangeCallback: (_: any) => void = () => {}

  get value(): Array<string> {
    return this.tags
  };

  set value(value: Array<string>) {
    this.tags = value
    this.onChangeCallback(value)
  }

  onBlur() {
    this.onTouchedCallback()
  }

  writeValue(value: any) {
    this.tags = value
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }

  add(event: MatChipInputEvent): void {
    const input = event.input
    const value = (event.value || '').trim()

    if (!value)
      return

    this.tags.push(value)

    if (input)
      input.value = ''

    this.onChangeCallback(this.tags)
  }

  remove(input: any): void {
    this.tags = this.tags.filter( item => item !== input)
    this.onChangeCallback(this.tags)
  }


}
