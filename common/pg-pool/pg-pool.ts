
import { Pool, PoolConfig } from 'pg'

import { POSTGRES_POOL_CONFIG } from './environments'

console.log('=== PgPool config ===\n', POSTGRES_POOL_CONFIG)

// Postgres Pool
export const pgPool = new Pool(POSTGRES_POOL_CONFIG)
