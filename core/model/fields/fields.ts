
export interface IFieldMorphingFunction {
  (value: any): any
}

export interface IFieldValidationFunction {
  async (value: any): Promise<boolean>
}

export class Field {
  isMain: boolean = false

  isInput: boolean = false
  inputFunction:  IFieldMorphingFunction | undefined = undefined

  isOutput: boolean = false
  outputFunction: IFieldMorphingFunction | undefined = undefined

  isJSON: boolean = false
  toJSONFunction: IFieldMorphingFunction | undefined = undefined

  validationFunction: IFieldValidationFunction | undefined = undefined

  constructor(readonly propertyKey: string){}
}

export class Fields extends Map<string, Field> {
  static List = new WeakMap<Object, Fields>()

  static get(target: Object): Fields {
    return this.List.get(target) || new Fields()
  }

  static set(target: Object, fields: Fields) {
    this.List.set(target, fields)
  }

  get(propertyKey: string): Field {
    return super.get(propertyKey) || new Field(propertyKey)
  }

  set(field: string | Field): this {
    let value = field instanceof Field ? field : new Field(field)
    super.set(value.propertyKey, value)
    return this
  }

  get fields(): Array<Field>  { return Array.from(this.values()) }

  get mainFields(): Array<Field>  { return this.fields.filter( item => item.isMain ) }
  get mainKeyList(): Array<string> { return this.mainFields.map( item => item.propertyKey ) }

  get inputFields(): Array<Field>  { return this.fields.filter( item => item.isInput ) }
  get inputKeyList(): Array<string> { return this.inputFields.map( item => item.propertyKey ) }

  get outputFields(): Array<Field>  { return this.fields.filter( item => item.isOutput ) }
  get outputKeyList(): Array<string> { return this.outputFields.map( item => item.propertyKey ) }

  get jsonFields(): Array<Field>  { return this.fields.filter( item => item.isJSON ) }
  get jsonKeyList(): Array<string> { return this.jsonFields.map( item => item.propertyKey ) }

  get validateFilds(): Array<Field>  { return this.fields.filter( item => item.validationFunction !== undefined ) }
  get validateKeyList(): Array<string> { return this.validateFilds.map( item => item.propertyKey ) }
}
