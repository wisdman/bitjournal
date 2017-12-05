
const RUS = 'щ  ш  ч  ц  ю  я  ё ж  ы э а б в г д е з и й к л м н о п р с т у ф х'.split(/\s+/)
const ENG = 'sh sh ch cz yu ya e zh y e a b v g d e z i j k l m n o p r s t u f x'.split(/\s+/)

export class URLBuilder {
  static build = (input: string, maxLength = 128) => {
    // Prepare string
    let text = input.toLowerCase()
                    .replace(/\s+/g, '_')

    // translit
    text = text.split('')
               .map(char => {
                 let i = RUS.indexOf( char )
                 return i < 0 ? char : ENG[i]
               }).join('')

    // Clear
    text = text.replace(/[^0-9a-z_]/g, '')
               .slice(0, maxLength)
               .replace(/(^_+|_+$)/g, '')

    return text
  }

  private constructor() {}
}
