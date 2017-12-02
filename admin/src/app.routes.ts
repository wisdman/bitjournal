import { Routes } from '@angular/router'

import {
  AdsItemComponent,
  AdsListComponent,
  CurrencyItemComponent,
  CurrencyListComponent,
  DashboardBlockComponent,
  ExchangeItemComponent,
  ExchangeListComponent,
  ICOItemComponent,
  ICOListComponent,
  ImageItemComponent,
  ImageListComponent,
  LogsBlockComponent,
  MarketItemComponent,
  MarketListComponent,
  NoContentComponent,
  PublicationItemComponent,
  PublicationListComponent,
  SectionItemComponent,
  SectionListComponent,
  StatusListComponent,
  UserItemComponent,
  UserListComponent,
  VideoListComponent,
} from './components'

export const ROUTES: Routes = [
  { path: ''                 , component: DashboardBlockComponent  },

  { path: 'ads/:id'          , component: AdsItemComponent         },
  { path: 'ads'              , component: AdsListComponent         },

  { path: 'currencies/:id'   , component: CurrencyItemComponent    },
  { path: 'currencies'       , component: CurrencyListComponent    },

  { path: 'exchanges/:id'    , component: ExchangeItemComponent    },
  { path: 'exchanges'        , component: ExchangeListComponent    },

  { path: 'ico/:id'          , component: ICOItemComponent         },
  { path: 'ico'              , component: ICOListComponent         },

  { path: 'images/:id'       , component: ImageItemComponent       },
  { path: 'images'           , component: ImageListComponent       },

  { path: 'logs'             , component: LogsBlockComponent       },

  { path: 'markets/:id'      , component: MarketItemComponent      },
  { path: 'markets'          , component: MarketListComponent      },

  { path: 'publications/:id' , component: PublicationItemComponent },
  { path: 'publications'     , component: PublicationListComponent },

  { path: 'sections/:id'     , component: SectionItemComponent     },
  { path: 'sections'         , component: SectionListComponent     },

  { path: 'statuses'         , component: StatusListComponent      },

  { path: 'users/:id'        , component: UserItemComponent        },
  { path: 'users'            , component: UserListComponent        },

  { path: 'video'            , component: VideoListComponent       },

  // { path: '**'               , component: NoContentComponent       },
]

