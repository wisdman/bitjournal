
import { Pool, PoolConfig } from 'pg'

import { POSTGRES_POOL_CONFIG } from './environments'

// Postgres Pool fabric
export const createPool = (config: Partial<PoolConfig> = {}) => {
  const poolConfig = Object.assign({},POSTGRES_POOL_CONFIG, config)
  console.log('=== Init PG Pool with config ===\n', Object.assign({}, POSTGRES_POOL_CONFIG, { password: '*****' }))
  return new Pool(poolConfig)
}
