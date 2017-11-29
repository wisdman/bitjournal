

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, PreloadAllModules } from '@angular/router'

import { COMPONENTS, ENTRY_COMPONENTS } from './app.components'
import { MATERIAL } from './app.material'
import { MODULES } from './app.modules'
import { ROUTES }   from './app.routes'
import { SERVICES } from './app.services'

import { LayoutComponent } from './components'

import { AuthDialogComponent } from './components'

@NgModule({
  bootstrap: [ LayoutComponent ],

  declarations: [
    LayoutComponent,
    ...COMPONENTS
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ...MATERIAL,

    ...MODULES,

    RouterModule.forRoot(ROUTES, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    })
  ],

  providers: [
    ...SERVICES
  ],

  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class AppModule {}
