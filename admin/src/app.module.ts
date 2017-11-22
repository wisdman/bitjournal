

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, PreloadAllModules } from '@angular/router'

import { COMPONENTS } from './app.components'
// import { MODULES } from './app.modules'
import { ROUTES }   from './app.routes'
import { SERVICES } from './app.services'
import { MATERIAL } from './app.material'

import { LayoutComponent } from './components'

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
