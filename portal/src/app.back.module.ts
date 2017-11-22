

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ServerModule } from '@angular/platform-server'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { RouterModule, PreloadAllModules } from '@angular/router'

import { COMPONENTS } from './app.components'
import { ROUTES } from './app.routes'
import { SERVICES } from './app.services'

import { BodyComponent } from './components'

import { APP_ID } from './app.id'

@NgModule({
  bootstrap: [ BodyComponent ],
  declarations: [
    BodyComponent,
    ...COMPONENTS
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    ServerModule,

    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    RouterModule.forRoot(ROUTES, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    })
  ],

  providers: [
    ...SERVICES
  ]
})
export class AppModule {}
