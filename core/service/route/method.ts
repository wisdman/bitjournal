
import { Methods } from './methods'
import { generateRouteFunction } from './route-function'

type IMethod = 'DELETE' | 'GET' | 'POST' | 'PUT'

function Method(method: IMethod, pattern: string = '', ...queryKeyList: Array<string>): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    if (typeof propertyKey === 'symbol')
      throw new TypeError('Property name must be a string')

    let methods = Methods.get(target.constructor)
    methods.push( generateRouteFunction(method, pattern, queryKeyList, propertyKey) )
    Methods.set(target.constructor, methods)
  }
}

export const Delete = (pattern?: string, ...queryKeyList: Array<string>) => Method('DELETE' , pattern , ...queryKeyList)
export const Get    = (pattern?: string, ...queryKeyList: Array<string>) => Method('GET'    , pattern , ...queryKeyList)
export const Post   = (pattern?: string, ...queryKeyList: Array<string>) => Method('POST'   , pattern , ...queryKeyList)
export const Put    = (pattern?: string, ...queryKeyList: Array<string>) => Method('PUT'    , pattern , ...queryKeyList)
