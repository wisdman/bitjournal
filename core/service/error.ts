import { STATUS_CODES } from 'http'

export class HttpError extends Error {

  readonly status: number
  readonly originError: Error

  constructor(status: number, message?: string | Error, originError?: Error) {

    if (message instanceof Error) {
      originError = message
      message = originError.message
    }

    // Create origin anyewhere
    if (originError === undefined) {
      originError = new Error(message || 'Unknown internal server error')
    }

    // Prevent send internal error message to user
    if (!message || status >= 500) {
      message = STATUS_CODES[status] || 'Undefined error'
    }

    super(message)
    this.status = status
    this.originError = originError
  }
}
