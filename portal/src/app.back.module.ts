import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'

import { AppModule } from './app.module'
import { LayoutComponent } from './components'

@NgModule({
  bootstrap: [LayoutComponent],
  imports: [
    AppModule,
    ServerModule,
  ]
})
export class AppBackModule {}
