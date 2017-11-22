// === HTTP Service enveroments ===


// HTTP Server port, default '0.0.0.0'
export const SERVICE_HOSTNAME = process.env.SERVICE_HOSTNAME || '0.0.0.0'
// HTTP Server port, default 80
export const SERVICE_PORT = Math.max(~~(process.env.SERVICE_PORT || '') || 0, 0) || 80
// HTTP Server  timeout value for sockets, default 120 seconds
export const SERVICE_TIMEOUT = Math.max(~~(process.env.SERVICE_TIMEOUT || '') || 0, 0) || 120
// HTTP Server keep alive timeout value for sockets, default 5 seconds
export const SERVICE_KEEP_ALIVE = Math.max(~~(process.env.SERVICE_KEEP_ALIVE || '') || 0, 0) || 5

// Node debug
export const DEBUG = (process.env.NODE_DEBUG || '').split(/\s*,\s*/)
                                                   .map( item => item.toLowerCase().trim() )
                                                   .filter( item => !!item )



