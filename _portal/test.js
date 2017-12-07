

let value = {'ts': 'DESC'}
let text = ''

// === Object value ===
    if (typeof value === 'object') {
      let feelds = Object.keys(value)

      if (feelds.length === 0) {
        text = ''
        console.log('AAAAAAAA')
      }

      text = ' ORDER BY '
                + feelds.map( item => `"${item}" ${value[item]}`)
                        .join(', ')
      console.log(text)
    } else {
      console.log('else')
    }
