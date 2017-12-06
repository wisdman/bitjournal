
import { URL } from 'url'
import { Response } from './response'

export type IMethod = 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT'

export interface IClient {
  request(method: IMethod, url: URL): Promise<Response>
}
