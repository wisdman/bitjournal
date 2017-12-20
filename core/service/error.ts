import { STATUS_CODES } from 'http'

export class HttpError extends Error {

  readonly status: number
  readonly origin: Error

  constructor(status: number, message?: string | Error, origin?: Error) {

    if (message instanceof Error) {
      origin = message
      message = origin.message
    }

    // Create origin anyewhere
    if (origin === undefined) {
      origin = new Error(message || 'Unknown internal server error')
    }

    // Prevent send internal error message to user
    if (!message || status >= 500) {
      message = STATUS_CODES[status] || 'Undefined error'
    }

    super(message)
    this.status = status
    this.origin = origin
  }
}
