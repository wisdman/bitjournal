
import { CallableClass } from '@core/callable'

interface IValue {
  [key: string]: any
}

export interface IModelResult {
  value: IValue,
  errors: Array<string>
}

export class Model extends CallableClass {

  constructor(scheme: { [key: string]: (value: any) => IValue | undefined }) {

    const morphings = Object.keys(scheme)
                            .map( key => {// Generate morphing functions
                              const fn = scheme[key]

                              return (value: IValue): IValue | undefined  =>
                                key in value ? fn.call(value, value[key]) : undefined
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
  }
}

