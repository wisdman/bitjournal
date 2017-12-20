/*
 * Debug in browser
 */

// Node debug
export const DEBUG = (window && window.localStorage && window.localStorage.getItem('DEBUG') || '')
                      .split(/\s*,\s*/)
                      .map( item => item.toLowerCase().trim() )
                      .filter( item => !!item )

export const isEnable = (name:string) => DEBUG.includes( name ) || DEBUG.includes('*')

export const log = (str: string, args: Array<any>) => console.log(str, ...args)
