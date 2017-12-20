
export class RU {
  [Symbol.toStringTag]() {
    return 'RU'
  }

  static MONTHS: Array<{ id: number, title: string, genitive: string }> = [
    { id: 0 , title: 'Январь'  , genitive: 'Января'   },
    { id: 1 , title: 'Февраль' , genitive: 'Февраля'  },
    { id: 2 , title: 'Март'    , genitive: 'Марта'    },
    { id: 3 , title: 'Апрель'  , genitive: 'Апреля'   },
    { id: 4 , title: 'Май'     , genitive: 'Мая'      },
    { id: 5 , title: 'Июнь'    , genitive: 'Июня'     },
    { id: 6 , title: 'Июль'    , genitive: 'Июля'     },
    { id: 7 , title: 'Август'  , genitive: 'Августа'  },
    { id: 8 , title: 'Сентябрь', genitive: 'Сентября' },
    { id: 9 , title: 'Октябрь' , genitive: 'Октября'  },
    { id: 10, title: 'Ноябрь'  , genitive: 'Ноября'   },
    { id: 11, title: 'Декабрь' , genitive: 'Декабря'  },
  ]

  static getMonthString(month: number, genitive:boolean = false): string {
    return this.MONTHS[month][genitive ? 'genitive' : 'title']
  }

  static DAYS: Array<{ id: number, title: string }> = [
    { id: 0 , title: 'Воскресение' },
    { id: 1 , title: 'Понедельник' },
    { id: 2 , title: 'Вторник'     },
    { id: 3 , title: 'Среда'       },
    { id: 4 , title: 'Четверг'     },
    { id: 5 , title: 'Пятница'     },
    { id: 6 , title: 'Суббота'     },
  ]

  static getDayString(month: number, genitive?:boolean): string {
    return this.DAYS[month].title
  }

  private constructor() {}
}



