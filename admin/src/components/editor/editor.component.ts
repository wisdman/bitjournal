import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone, forwardRef } from '@angular/core'

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"

import * as $ from 'jquery'

import './froala/imports'

import { OPTIONS } from './froala/options'

@Component({
  selector: 'editor',
  template: '',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
  }]
})
export class EditorComponent implements OnInit, OnDestroy, ControlValueAccessor {

  private _initialized: boolean = false

  private _$element: any
  private _editor: any

  private _listeningEvents: Array<string> = new Array<string>()

  constructor(el: ElementRef,  private zone: NgZone) {
    const element: any = el.nativeElement;
    this._$element = (<any>$(element))

    this.zone = zone
  }

  private onTouchedCallback: () => void = () => {}
  private onChangeCallback: (_: any) => void = () => {}

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }

  // Form model content changed.
  writeValue(content: any): void {
    this.updateEditor(content)
  }

  // register event on jquery element
  private registerEvent(element: any, eventName: string, callback: Function) {
    if (!element || !eventName || !callback)
      return

    this._listeningEvents.push(eventName)
    element.on(eventName, callback)
  }

  // update model if editor contentChanged
  private updateModel() {
    this.zone.run(() => {
      const returnedHtml: string = this._$element.froalaEditor('html.get') || ''
      this.onChangeCallback(returnedHtml)
    })
  }

  // Update editor with model contents.
  private updateEditor(content: string) {
    content = content || ''

    if (this._initialized)
      this._$element.froalaEditor('html.set', content)
    else
      this._$element.html(content)
  }

  private createEditor() {
    if (this._initialized)
      return

    // bind contentChange
    this.registerEvent(this._$element, 'froalaEditor.contentChanged', () => {
      setTimeout(() => this.updateModel(), 0)
    })

    // init editor
    this.zone.runOutsideAngular(() => {
      this._editor = this._$element
                         .froalaEditor(OPTIONS)
                         .data('froala.editor')
                         .$el
    })

    this._initialized = true
  }

  private destroyEditor() {
    if (!this._initialized)
      return

    this._$element.off( this._listeningEvents.join(" ") )
    this._$element.froalaEditor('destroy')
    this._listeningEvents = new Array<string>()
    this._initialized = false
  }

  ngOnInit() {
    this.createEditor()
  }

  ngOnDestroy() {
    this.destroyEditor()
  }

}
