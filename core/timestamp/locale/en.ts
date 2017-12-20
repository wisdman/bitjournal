
export class EN {
  [Symbol.toStringTag]() {
    return 'EN'
  }

  static MONTHS: Array<{ id: number, title: string }> = [
    { id: 0 , title: 'January'   },
    { id: 1 , title: 'February'  },
    { id: 2 , title: 'March'     },
    { id: 3 , title: 'April'     },
    { id: 4 , title: 'May'       },
    { id: 5 , title: 'June'      },
    { id: 6 , title: 'July'      },
    { id: 7 , title: 'August'    },
    { id: 8 , title: 'September' },
    { id: 9 , title: 'October'   },
    { id: 10, title: 'November'  },
    { id: 11, title: 'December'  },
  ]

  static getMonthString(month: number, genitive?:boolean): string {
    return this.MONTHS[month].title
  }

  static DAYS: Array<{ id: number, title: string }> = [
    { id: 0 , title: 'Sunday'    },
    { id: 1 , title: 'Monday'    },
    { id: 2 , title: 'Tuesday'   },
    { id: 3 , title: 'Wednesday' },
    { id: 4 , title: 'Thursday'  },
    { id: 5 , title: 'Friday'    },
    { id: 6 , title: 'Saturday'  },
  ]

  static getDayString(month: number, genitive?:boolean): string {
    return this.DAYS[month].title
  }

  private constructor() {}
}
