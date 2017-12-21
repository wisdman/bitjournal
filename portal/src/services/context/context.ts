import { Injectable, Inject, Optional } from '@angular/core'

import { CONTEXT, IContext } from '../../context'

@Injectable()
export class ContextService {

  private _context: IContext

  constructor( @Optional() @Inject(CONTEXT) context: IContext) {
    this._context = context
  }

  get status(): number {
    return this._context && this._context.status || NaN
  }

  set status(value: number) {
    if (this._context)
      this._context.status = value
  }

}
