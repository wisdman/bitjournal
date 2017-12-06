
import { Pool, PoolConfig } from 'pg'

import { POSTGRES_POOL_CONFIG } from './environments'

// Postgres Pool
export const pgPool = new Pool(POSTGRES_POOL_CONFIG)
