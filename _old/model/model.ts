
import { Fields, Field } from './fields'
import { valueOfLoop } from './valueof'

const FieldsSymbol = Symbol('Fields')

export abstract class Model {
  static get fields(): Fields {
    return Fields.get(this)
  }

  constructor(...attr:Array<any>) {
    const fields = (<any>this.constructor).fields as Fields
    const value = attr[0] === undefined ? {} : attr[0]

    // Appaly Input decorated fields
    fields.inputFields.forEach( field => {
      (this as any)[field.propertyKey] =
        field.inputFunction instanceof Function ? field.inputFunction.call(this, value[field.propertyKey])
                                                : value[field.propertyKey]
    } )
  }

  valueOf(): any {
    // Appaly Output decorated fields
    const fields = (<any>this.constructor).fields as Fields
    return fields.outputFields.reduce( (prev: { [key: string]: any }, field: Field) => {
      let value =
        field.outputFunction instanceof Function ? field.outputFunction.call(this, (this as any)[field.propertyKey])
                                                 : (this as any)[field.propertyKey]

      prev[field.propertyKey] = valueOfLoop(value)

      return prev
    }, {})
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return ''
  }

  toJSON(): any {
    // Appaly JSON decorated fields
    const fields = (<any>this.constructor).fields as Fields
    return fields.jsonFields.reduce( (prev: { [key: string]: any }, field: Field) => {
      prev[field.propertyKey] =
        field.toJSONFunction instanceof Function ? field.toJSONFunction.call(this, (this as any)[field.propertyKey])
                                                 : (this as any)[field.propertyKey]

      return prev
    }, {})
  }

  [Symbol.toPrimitive](hint : 'default' | 'string' | 'number') {
    switch (hint) {
      case 'default':
        return this.valueOf()
      case 'number':
        return this.toNumber()
      case 'string':
        return this.toString()
      default:
        throw new TypeError('Cannot convert Model value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Model'
  }
}
