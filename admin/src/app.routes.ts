import { Routes } from '@angular/router'

import {
  AdsItemComponent,
  AdsListComponent,
  BlockItemComponent,
  BlockListComponent,
  CurrencyItemComponent,
  CurrencyListComponent,
  DashboardBlockComponent,
  ExchangeItemComponent,
  ExchangeListComponent,
  HardwareItemComponent,
  HardwareListComponent,
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
  SettingsBlockComponent,
  StaticItemComponent,
  StaticListComponent,
  StatusListComponent,
  UserItemComponent,
  UserListComponent,
  VideoListComponent,
} from './components'

import {
  PublicationService,
  SectionService,
  UserService,
} from './services'

export const ROUTES: Routes = [
  { path: ''                 , component: DashboardBlockComponent  },

  { path: 'ads/:id'          , component: AdsItemComponent         },
  { path: 'ads'              , component: AdsListComponent         },

  { path: 'blocks/:id'       , component: BlockItemComponent       },
  { path: 'blocks'           , component: BlockListComponent       },

  { path: 'currencies/:id'   , component: CurrencyItemComponent    },
  { path: 'currencies'       , component: CurrencyListComponent    },

  { path: 'exchanges/:id'    , component: ExchangeItemComponent    },
  { path: 'exchanges'        , component: ExchangeListComponent    },

  { path: 'hardware/:id'     , component: HardwareItemComponent    },
  { path: 'hardware'         , component: HardwareListComponent    },

  { path: 'ico/:id'          , component: ICOItemComponent         },
  { path: 'ico'              , component: ICOListComponent         },

  { path: 'images/:id'       , component: ImageItemComponent       },
  { path: 'images'           , component: ImageListComponent       },

  { path: 'logs'             , component: LogsBlockComponent       },

  { path: 'markets/:id'      , component: MarketItemComponent      },
  { path: 'markets'          , component: MarketListComponent      },

  { path: `${PublicationService.BaseURL}/:id` , component: PublicationItemComponent },
  { path: `${PublicationService.BaseURL}`     , component: PublicationListComponent },

  { path: `${SectionService.BaseURL}/:id`     , component: SectionItemComponent     },
  { path: `${SectionService.BaseURL}`         , component: SectionListComponent     },

  { path: 'settings'         , component: SettingsBlockComponent   },

  { path: 'static/:id'       , component: StaticItemComponent      },
  { path: 'static'           , component: StaticListComponent      },

  { path: 'status'           , component: StatusListComponent      },

  { path: `${UserService.BaseURL}/:id`        , component: UserItemComponent        },
  { path: `${UserService.BaseURL}`            , component: UserListComponent        },

  { path: 'video'            , component: VideoListComponent       },

  { path: '**'               , component: NoContentComponent       },
]

