
import { ILocale } from './locale.interface'

import { EN } from './en'
import { RU } from './ru'

export const Locale: {
  [key: string]: ILocale
} = { EN, RU }
