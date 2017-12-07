import { Routes } from '@angular/router'

import {
  NoContentComponent,
  Page101Component,
  PageArticleComponent,
  PageCurrenciesComponent,
  PageCurrenciesItemComponent,
  PageEventsComponent,
  PageEventsItemComponent,
  PageExchangesComponent,
  PageExchangesItemComponent,
  PageICOComponent,
  PageICOItemComponent,
  PageMainComponent,
  PageMarketsComponent,
  PageMarketsItemComponent,
  PageSectionComponent,
} from './components'

export const ROUTES: Routes = [
  { path: ''               , component: PageMainComponent           },

  { path: '101'            , component: Page101Component            },

  { path: 'currencies/:id' , component: PageCurrenciesComponent     },
  { path: 'currencies'     , component: PageCurrenciesItemComponent },

  { path: 'events/:id'     , component: PageEventsComponent         },
  { path: 'events'         , component: PageEventsItemComponent     },

  { path: 'exchanges/:id'  , component: PageExchangesComponent      },
  { path: 'exchanges'      , component: PageExchangesItemComponent  },

  { path: 'ico/:id'        , component: PageICOComponent            },
  { path: 'ico'            , component: PageICOItemComponent        },

  { path: 'markets/:id'    , component: PageMarketsComponent        },
  { path: 'markets'        , component: PageMarketsItemComponent    },

  { path: ':section'       , component: PageSectionComponent        },
  { path: ':date/:url'     , component: PageArticleComponent        },

  { path: '**'             , component: NoContentComponent          },
]

