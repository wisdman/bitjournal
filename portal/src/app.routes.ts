import { Routes } from '@angular/router'

import {
  NoContentComponent,
  Page101Component,
  PageArticleComponent,
  PageCoinComponent,
  PageCoinsComponent,
  PageMainComponent,
} from './components'

export const ROUTES: Routes = [
  { path: ''           , component: PageMainComponent    },

  { path: '101'        , component: Page101Component     },

  { path: 'coins/:id'  , component: PageCoinComponent    },
  { path: 'coins'      , component: PageCoinsComponent   },

  { path: ':date/:url' , component: PageArticleComponent },

  { path: '**'         , component: NoContentComponent   },
]

