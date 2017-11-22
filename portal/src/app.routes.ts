import { Routes } from '@angular/router'

import {
  Page404Component,
  PageArticleComponent,
  PageCurrencyComponent,
  PageCurrencyListComponent,
  PageMainComponent,
} from './components'

export const ROUTES: Routes = [
  { path: '',             component: PageMainComponent     },
  { path: 'article',      component: PageArticleComponent  },
  { path: 'currency/:id', component: PageCurrencyComponent },
  { path: 'currency', component: PageCurrencyListComponent },
  { path: '**',           component: Page404Component      },
]
