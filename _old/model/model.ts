
import { CallableClass } from '@core/callable'

import { Rights } from './rights'

interface IValue {
  [key: string]: any
}

export interface IModelResult {
  value: IValue,
  errors: Array<string>
}

export class Model extends CallableClass {

  private _fields: Array<{
    key: string,
    roles: {
      [role: string]: Rights
    }
  }>

  constructor(
    scheme: { [key: string]: (value: any) => IValue },
    fields: { [key: string]: { [rights: string]: Array<any>  }   }
  ) {

    const morphings = Object.keys(scheme)
                            .map( key => {// Generate morphing functions
                              const fn = scheme[key]

                              return (value: IValue): IValue | undefined  =>
                                key in value ? ({ [key]: fn.call(value, value[key]) }) : undefined
                            })

    super( (value: IValue): IModelResult =>
      morphings.reduce( (prev, fn) => {

        let result

        try {
          result = fn(value)
        } catch (error) {
          const message = String(error && error.message || error)
          prev.errors.push(message)
          result = undefined
        }

        if (result !== undefined)
          prev.value = Object.assign(prev.value, result)

        return prev
      }, {
        value: {},
        errors: []
      } as IModelResult)
    )

    Object.keys(fields)
          .forEach( key => {

            const item = fields[key]

            const roles = Object.keys(item)
                                .reduce( (prev, rightsStr) => {

                                  const rights = new Rights(rightsStr)

                                  const roles = item[rightsStr]
                                                .map( item => String(item).trim() || '*' )
                                                .map( item => ({ [item]: rights }) )

                                  return Object.assign(prev, roles)
                                }, {} as { [role: string]: Rights } )

            this._fields.push({ key, roles })
          })
  }

  private _fieldsByRoleAndRights(inputRole: string, inputRights: string): Array<string> {
    return this._fields
               .filter( item => {
                 const rights = item.roles[inputRole]
                 return rights && rights.check(inputRights) || false
               })
               .map( item => item.key )
  }

  getFeelds(value: { [rights: string]: Array<any>  }): Array<string> {

    return Object.keys(value)
                 .reduce( (prev, rights) => {
                   const roles = value[rights]
                                 .map( item => String(item).trim() || '*' )
                                 .map( role => ({ role, rights }) )

                   return prev.concat(roles)
                 }, [] as Array<{ role: string, rights: string }> )
                 .map( item => this._fieldsByRoleAndRights(item.role, item.rights))
                 .reduce( (prev, item) => prev.concat(item) )
                 .filter((item, i, self) => self.indexOf(item) === i)

  }
}

