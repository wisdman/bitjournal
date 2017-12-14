import { NgModule } from '@angular/core'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'

import { AppModule } from './app.module'
import { LayoutComponent } from './components'

@NgModule({
  bootstrap: [LayoutComponent],
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
  ]
})
export class AppBackModule {}
