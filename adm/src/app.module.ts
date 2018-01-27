

import { NgModule, APP_INITIALIZER } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, PreloadAllModules } from '@angular/router'

import { COMPONENTS, ENTRY_COMPONENTS } from './app.components'
import { MATERIAL } from './app.material'
import { PIPES } from './app.pipes'
import { ROUTES }   from './app.routes'
import { SERVICES } from './app.services'

import { LayoutComponent } from './components'

import {
  ExternalService,
  ExternalServiceFactory,
} from './services'

@NgModule({
  bootstrap: [ LayoutComponent ],

  declarations: [
    LayoutComponent,
    ...COMPONENTS,
    ...PIPES
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,

    ...MATERIAL,

    RouterModule.forRoot(ROUTES, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    })
  ],

  providers: [
    ...SERVICES,
    {
      provide: APP_INITIALIZER,
      useFactory: ExternalServiceFactory,
      deps: [ ExternalService ],
      multi: true
    }
  ],

  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class AppModule {
  constructor(
    externalService: ExternalService
  ) {
    externalService.init()
  }
}
