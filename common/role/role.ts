/*
 * === User role ===
 */

export class Role {
  static User          = new Role('user'          , 'Пользователь'  , null)
  static Author        = new Role('author'        , 'Автор'         , null)
  static Publisher     = new Role('publisher'     , 'Публикатор'    , null)
  static Ads           = new Role('ads'           , 'Рекламщик'     , null)
  static Administrator = new Role('administrator' , 'Администратор' , null)
  static Su            = new Role('su'            , 'Super user'    , null)

  static *[Symbol.iterator](): IterableIterator<Role> {
    const keys = Object.keys(this)
    for (let key of keys)
      yield (this as any)[key] as Role
  }

  static get(input: any): Role | undefined {
    let id = String(input && input.id || input)

    for (let item of this)
      if (item.id === id)
        return item

    return undefined
  }

  static getArray(value: any): Array<Role> {
    return new Array<any>().concat(value)
                           .map( item => this.get(item) )
                           .filter( item => item !== undefined )
                           .filter((item, i, self) => self.indexOf(item) === i) as Array<Role>
  }

  private constructor(
    readonly id: string,
    readonly title: string,
    readonly icon: string | null
  ) {}

  valueOf(): any {
    return this.id
  }

  toNumber(): number {
    return Array.prototype.indexOf.call(Role, this)
  }

  toString(): string {
    return this.id
  }

  toJSON(): any {
    return this.id
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
        throw new TypeError('Cannot convert Role value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Role'
  }
}
