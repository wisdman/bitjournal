

import { Timestamp } from '../core/timestamp'

const ts = new Timestamp('2017-12-20T12:08:55.330Z')





const atDate = new Date()

let out: string = ''

  console.log(ts.compare(atDate, { ignoreTime: true}))

    // Set date
    if ( ts.compare(atDate, { ignoreTime: true}) === 0 )
      out += 'Сегодня'
    else {
      atDate.setDate( atDate.getDate() - 1 )

      if (  ts.compare(atDate, { ignoreTime: true}) === 0 )
        out += 'Вчера'
      else {
        out += String( ts.getDate() )
        out += ' ' + ts.genitiveMonthString

        const year = ts.getFullYear()
        if (year !== atDate.getFullYear())
          out += ' ' + String(year)
      }
    }

    // Set time
    out += ' ' + String(ts.getHours())
    out += ':' + ('00' + String(ts.getMinutes())).slice(-2)

console.log(out)


