
import { IFieldMorphingFunction, Fields } from './fields'

export function ToJSON(fn?: IFieldMorphingFunction): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    if (typeof propertyKey === 'symbol')
      throw new TypeError('Property name must be a string')

    let fields = Fields.get(target.constructor)
    let field = fields.get(propertyKey)

    field.isJSON = true
    field.toJSONFunction = fn

    Fields.set(target.constructor, fields.set(field))
  }
}
