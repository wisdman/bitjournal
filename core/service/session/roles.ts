
export class Roles {
  static clearInput(arg: Array<any> = []): Array<string> {
    return arg.reduce( (prev: Array<any>, item) => prev.concat(item), new Array<any>() )
              .map( item => String(item).toLowerCase().trim() )
              .filter( (item, i, self) => !!item && self.indexOf(item) === i )
  }

  private _roles: Array<string> = []

  get all(): Array<string> {
    return this._roles.slice()
  }

  add(...arg: Array<any>) {
    const newRoles = Roles.clearInput(arg)

    this._roles = this._roles
                      .concat(newRoles)
                      .filter((item, i, self) => self.indexOf(item) === i)
  }

  remove(...arg: Array<any>) {
    const removeRoles = Roles.clearInput(arg)

    this._roles = this._roles
                      .filter( item => !removeRoles.includes(item) )
  }

  toggle(...arg: Array<any>) {
    const toggleRoles = Roles.clearInput(arg)

    const removeRoles = toggleRoles.filter( item =>  this._roles.includes(item) )
    const newRoles    = toggleRoles.filter( item => !this._roles.includes(item) )


     this._roles = this._roles
                       .filter( item => !removeRoles.includes(item) )
                       .concat(newRoles)
  }

  set(...arg: Array<any>) {
    this._roles = Roles.clearInput(arg)
  }

  reset() {
    this._roles = []
  }

  checkAny(...arg: Array<any>): boolean {
    const roles = Roles.clearInput(arg)

    for (let role of roles)
      if (this._roles.includes(role))
        return true

    return false
  }

  checkAll(...arg: Array<any>): boolean {
    const roles = Roles.clearInput(arg)

    if (roles.length === 0)
      return false

    for (let role of roles)
      if (!this._roles.includes(role))
        return false

    return true
  }

  valueOf() {
    return this.all
  }

  toJSON(): any {
    return this.valueOf()
  }
}
