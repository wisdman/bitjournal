/*
 * Ticker service
 */

import { Service } from '@core/service'

import {
  TickerAPI
} from './api'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(

  new TickerAPI(),
)
