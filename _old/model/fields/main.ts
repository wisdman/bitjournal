
import { Fields } from './fields'

export function Main(): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    if (typeof propertyKey === 'symbol')
      throw new TypeError('Property name must be a string')

    let fields = Fields.get(target.constructor)
    let field = fields.get(propertyKey)

    field.isMain = true

    Fields.set(target.constructor, fields.set(field))
  }
}
