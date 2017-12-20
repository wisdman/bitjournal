
import { URL } from 'url'

import { Response } from './response'
import { IClient, IMethod } from './client.interface'

import { HTTPClient } from './http-client'
import { HTTPSClient } from './https-client'

import { Debug } from '@core/debug'
const debug = new Debug('HTTP')

export class HTTP {

  async request(method: IMethod, urlString: string): Promise<Response> {
    const url = new URL(urlString)

    const protocol = url.protocol.toLowerCase()

    const client = /^https/.test(protocol) ? new HTTPSClient() : new HTTPClient()

    debug(`=== HTTP(S) Request [%s] ===`, urlString)

    let response

    try {
      response = await client.request(method, url)
    } catch (error) {
      debug(`=== HTTP(S) Request [%s] Error ===\n%O`, urlString, error)
      throw error
    }

    debug(`=== HTTP(S) Request [%s] Successful ===\n%O`, urlString, response)

    return response
  }

  async get(urlString: string): Promise<Response> {
    return await this.request('GET', urlString)
  }

  async json<T extends object>(urlString: string): Promise<T> {
    const response = await this.get(urlString)
    const data = await response.json()
    return data as T
  }
}
