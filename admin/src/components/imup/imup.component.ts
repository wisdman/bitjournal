import { Component, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

import {
  FileService,
  DialogService,
} from '../../services'

@Component({
  selector: 'imup',
  templateUrl: './imup.component.html',
  styleUrls: [ './imup.component.css' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImupComponent),
    multi: true
  }]
})
export class ImupComponent implements ControlValueAccessor {

  oid: number | null = null

  constructor(
    private readonly _fileService: FileService,
    private readonly _dialog: DialogService
  ) {}

  private onTouchedCallback: () => void = () => {}
  private onChangeCallback: (_: any) => void = () => {}

  get value(): number | null {
    return this.oid
  };

  set value(value: number | null) {
    if (this.oid !== value) {
      this.oid = value
      this.onChangeCallback(value)
    }
  }

  onBlur() {
    this.onTouchedCallback()
  }

  writeValue(value: any) {
    if (this.oid !== value)
      this.oid = value
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }

  add() {
    this._fileService
        .upload()
        .subscribe( result => this.value = result.oid )
  }

  edit() {
    console.log('Adobe editor')
  }

  delete() {
    if (this.value === null)
        return

    this._dialog.open({
      title: 'Удалить картинку?',
      message: `Вы уверены, что хотите удалить картинку?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result !== true)
        return

      if (this.value === null)
        return

      this._fileService
          .delete(this.value)
          .subscribe( result => this.value = null )
    })
  }
}
