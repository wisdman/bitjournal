import { NgModule } from '@angular/core';

import {
  EditorComponent,
} from './components'

@NgModule({
  declarations: [
    EditorComponent,
  ],
  exports: [EditorComponent]
})
export class EditorModule {}
