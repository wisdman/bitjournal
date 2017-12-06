import { Routes } from '@angular/router'

import {
  NoContentComponent,
  MainPageComponent,
} from './components'

export const ROUTES: Routes = [
  { path: ''                   , component: MainPageComponent  },

  { path: '**'                 , component: NoContentComponent },
]

