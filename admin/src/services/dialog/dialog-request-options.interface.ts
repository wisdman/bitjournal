export type IDialogRequestType = 'text' | 'password' | 'number'

export interface IDialogRequestOptions {
  title?: string
  placeholder?: string
  message?: string
  type?: IDialogRequestType
  default?: string | number
}

