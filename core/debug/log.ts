/*
 * Debug in node
 */

// Node debug
export const DEBUG = (process.env.NODE_DEBUG || '')
                      .split(/\s*,\s*/)
                      .map( item => item.toLowerCase().trim() )
                      .filter( item => !!item )

export const isEnable = (name:string) => DEBUG.includes( name ) || DEBUG.includes('*')

export const log = (str: string, args: Array<any>) => console.log(str, ...args)
