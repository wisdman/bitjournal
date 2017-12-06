
import { URL } from 'url'

import { Response } from './response'
import { IClient, IMethod } from './client.interface'

import { HTTPClient } from './http-client'
import { HTTPSClient } from './https-client'

export class HTTP {

  request(method: IMethod, urlString: string): Promise<Response> {
    const url = new URL(urlString)

    const protocol = url.protocol.toLowerCase()

    const client = /^https/.test(protocol) ? new HTTPSClient() : new HTTPClient()
    return client.request(method, url)
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
