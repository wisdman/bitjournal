
import { IFieldValidationFunction, Fields } from './fields'

export function Validate(fn?: IFieldValidationFunction): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    if (typeof propertyKey === 'symbol')
      throw new TypeError('Property name must be a string')

    let fields = Fields.get(target.constructor)
    let field = fields.get(propertyKey)

    field.validationFunction = fn

    Fields.set(target.constructor, fields.set(field))
  }
}
