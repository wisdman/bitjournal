import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core'

import { Froala } from '../../froala'

@Component({
  selector: 'content-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements AfterViewInit, OnDestroy {

  froala: Froala | null = null

  @ViewChild('editor') textareaRef: ElementRef;

  ngAfterViewInit() {

    this.froala = new Froala(this.textareaRef.nativeElement)

    console.dir(this.froala)

    // tinymce.init({
    //   target: this.textareaRef.nativeElement
    // })

    // tinymce.init({
    //   selector: '#' + this.elementId,
    //   plugins: ['link', 'paste', 'table'],
    //   skin_url: 'assets/skins/lightgray',
    //   setup: editor => {
    //     this.editor = editor;
    //     console.dir(this.editor)
    //     // editor.on('keyup', () => {
    //     //   const content = editor.getContent();
    //     //   this.onEditorKeyup.emit(content);
    //     // });
    //   },
    // });
  }

  ngOnDestroy() {
     // remove(this.editor);
  }

}
