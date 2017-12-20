export interface ICoinHistodayItem {
  time: number

  close : number,
  high  : number,
  low   : number,
  open  : number,

  value : number,
}

export interface ICoinHistoday {
  Response: 'Success' | 'Error'
  Message: string
  Data: Array<ICoinHistodayItem>
}
