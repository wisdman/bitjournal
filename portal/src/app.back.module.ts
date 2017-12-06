

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ServerModule } from '@angular/platform-server'

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, PreloadAllModules } from '@angular/router'

import { COMPONENTS, ENTRY_COMPONENTS } from './app.components'
import { MATERIAL } from './app.material'
import { PIPES } from './app.pipes'
import { ROUTES }   from './app.routes'
import { SERVICES } from './app.services'

import { LayoutComponent } from './components'

import { APP_ID } from './app.id'

@NgModule({
  bootstrap: [ LayoutComponent ],
  declarations: [
    LayoutComponent,
    ...COMPONENTS,
    ...PIPES
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    NoopAnimationsModule,
    ServerModule,

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
    ...SERVICES
  ],

  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class AppModule {}
