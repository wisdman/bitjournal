
export interface ILocale {
  getMonthString(month: number, genitive?:boolean): string
  getDayString(month: number, genitive?:boolean): string
}
