import { Routes } from '@angular/router'

import {
  Page101Component,
  Page404Component,
  PageArticleComponent,
  PageCoinComponent,
  PageCoinsComponent,
  PageDonateComponent,
  PageMainComponent,
  PagePrivacyComponent,
  PageTagComponent,
  PageTagsComponent,
} from './components'

export const ROUTES: Routes = [
  { path: ''               , component: PageMainComponent    },

  { path: '101'            , component: Page101Component     },

  { path: 'donate'         , component: PageDonateComponent  },

  { path: 'privacy'        , component: PagePrivacyComponent },

  { path: 'coins/:symbol'  , component: PageCoinComponent    },
  { path: 'coins'          , component: PageCoinsComponent   },

  { path: 'tags'           , component: PageTagsComponent    },
  { path: 'tags/:tag'      , component: PageTagComponent     },

  { path: ':date/:url'     , component: PageArticleComponent },

  { path: '**'             , component: Page404Component     },
]

