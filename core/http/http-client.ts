
import http, { IncomingMessage } from 'http'
import { URL } from 'url'

import { Response } from './response'
import { IClient, IMethod } from './client.interface'

export class HTTPClient implements IClient {

  request(method: IMethod, url: URL): Promise<Response> {

    return new Promise( (resolve, reject) => {

      const path = (url.pathname || '/') + (url.search && url.search || '')

      const req = http.request({
        hostname: url.hostname,
        port: url.port || 80,
        path: path,
        method: method,
      }, (res: IncomingMessage ) => resolve( new Response(res) ) )

      req.on('error', (error: Error) => reject(error))

      req.end()

    })
  }

}
