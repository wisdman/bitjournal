import {
  createServer,
  IncomingMessage,
  Server,
  ServerResponse
} from 'http'

import { Socket } from 'net'

import { Middleware, IMiddleware, Compose } from './middleware'
import { Context } from './context'

import { logError } from './log-error'
import { DebugMiddleware } from './debug'

import {
  SERVICE_HOSTNAME,
  SERVICE_KEEP_ALIVE,
  SERVICE_PORT,
  SERVICE_TIMEOUT,
} from './environments'

export class Service extends Server {

  constructor(...items: Array<IMiddleware | Middleware>) {
    super()

   items.unshift( new DebugMiddleware() )

   const middleware = Compose( items.map( item => item as any as IMiddleware) )

    // Service listener
    this.on('request', (req: IncomingMessage, res: ServerResponse) => {
      // Build context
      const context = new Context(req, res)

      // Run middleware
      middleware(context, () => Promise.resolve())
      .then( () => context.respond() )
      .catch( error => {
        logError(error, context)
        try { context.throw(error) } catch (_) {}
      })
    })

    // Client socker error
    this.on('clientError', (error: Error, socket: Socket) => {
      socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
      logError(error)
    })

    this.timeout = SERVICE_TIMEOUT
    this.keepAliveTimeout = SERVICE_KEEP_ALIVE

    this.listen(SERVICE_PORT, SERVICE_HOSTNAME, () => {
      const address = this.address()
      console.log(`Opened HTTP server on ${address.address}:${address.port}`)
    })
  }
}
