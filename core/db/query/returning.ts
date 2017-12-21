export type IReturningValue = string | Array<string> | { [key: string]: any }

export class Returning {

  readonly text: string

  constructor(value: IReturningValue = []) {
    let feelds: Array<string> = Array.isArray(value) ? value : typeof value === 'string' ? [value] : Object.keys(value)

    // escape feels
    feelds = feelds.map( item => `"${item}"` )

    this.text = ` RETURNING ${ feelds.join(', ') || '*' }`
  }
}