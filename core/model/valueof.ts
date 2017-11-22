/*
 * valueOf loop function
 */

export function valueOfLoop(value: any): any {
  if (Array.isArray(value))
    return value.map( item => valueOfLoop(item) )

  if (value.valueOf instanceof Function)
    return value.valueOf()

  return value
}
