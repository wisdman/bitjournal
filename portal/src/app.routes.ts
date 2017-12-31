import { Routes } from '@angular/router'

import {
  Page101Component,
  Page404Component,
  PageArticleComponent,
  PageCoinComponent,
  PageCoinsComponent,
  PageMainComponent,
  PagePrivacyComponent,
} from './components'

export const ROUTES: Routes = [
  { path: ''               , component: PageMainComponent    },

  { path: '101'            , component: Page101Component     },

  { path: 'privacy'        , component: PagePrivacyComponent },

  { path: 'coins/:symbol'  , component: PageCoinComponent    },
  { path: 'coins'          , component: PageCoinsComponent   },

  { path: ':date/:url'     , component: PageArticleComponent },

  { path: '**'             , component: Page404Component     },
]

