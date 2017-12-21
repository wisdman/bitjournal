// === PG Client enveroments ===

import { PoolConfig } from 'pg'

// PGSQL server host, default localhost
const POSTGRES_HOST         = process.env.POSTGRES_HOST || 'localhost'
// PGSQL server posrt, default  5432
const POSTGRES_PORT         = Math.max(~~(process.env.POSTGRES_PORT || ''), 0) || 5432
// PGSQL server database, default postgres
const POSTGRES_DB           = process.env.POSTGRES_DB || 'postgres'
// PGSQL server user, default postgres
const POSTGRES_USER         = process.env.POSTGRES_USER || 'postgres'
// PGSQL server password, default is empty
const POSTGRES_PASSWORD     = process.env.POSTGRES_PASSWORD || ''
// PGSQL server idle connection timeout, default 10 seconds
const POSTGRES_IDLE_TIMEOUT = Math.max(~~(process.env.POSTGRES_IDLE_TIMEOUT || '') || 0, 0) || 10
// PGSQL server pool size, default 10
const POSTGRES_POOL_SIZE    = Math.max(~~(process.env.POSTGRES_POOL_SIZE || '') || 0, 0) || 10

// PGSQL Pool config
export const POSTGRES_POOL_CONFIG: PoolConfig = {
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  idleTimeoutMillis: POSTGRES_IDLE_TIMEOUT * 1000,
  max: POSTGRES_POOL_SIZE
}
