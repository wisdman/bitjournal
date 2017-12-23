

import { NgModule, APP_INITIALIZER } from '@angular/core'
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
  NotificationService,
  NotificationServiceFactory,
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
    BrowserModule.withServerTransition({ appId: 'app_bj' }),
    BrowserTransferStateModule,

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
      useFactory: NotificationServiceFactory,
      deps: [ NotificationService ],
      multi: true
    },
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
    notificationService: NotificationService,
    externalService: ExternalService
  ) {
    notificationService.init()
    externalService.init()
  }

}
