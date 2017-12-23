import { Routes } from '@angular/router'

import {
  AdsItemComponent,
  AdsListComponent,
  CoinItemComponent,
  CoinListComponent,
  DashboardBlockComponent,
  NoContentComponent,
  PublicationItemComponent,
  PublicationListComponent,
  StatusListComponent,
  UserItemComponent,
  UserListComponent,
  VideoListComponent,
} from './components'

export const ROUTES: Routes = [
  { path: ''                   , component: DashboardBlockComponent  },

  { path: 'ads/:id'            , component: AdsItemComponent         },
  { path: 'ads'                , component: AdsListComponent         },

  { path: 'coins/:symbol'      , component: CoinItemComponent        },
  { path: 'coins'              , component: CoinListComponent        },

  { path: 'publications/:id'   , component: PublicationItemComponent },
  { path: 'publications'       , component: PublicationListComponent },

  { path: 'statuses'           , component: StatusListComponent      },

  { path: 'users/:id'          , component: UserItemComponent        },
  { path: 'users'              , component: UserListComponent        },

  { path: 'video'              , component: VideoListComponent       },

  { path: '**'                 , component: NoContentComponent       },
]

