/*
 * === Sections ===
 */

export class Section {
  static Main   = new Section('main', 'Главная', {
    title: 'BitJournal — издание про биткоин, криптовалюты, ICO, майнинг и блокчейн',
    descriptiuon: 'На сайте BitJournal вы найдете оперативные новости из мира криптоиндустрии — все о самых грандиозных ICO в истории, огромные майнинг-фермы про летящий на луну биткоин и многое другое',
    keywords: 'биткоин, bitjournal, криптовалюты, ico, майнинг, блокчейн',
    image: 'og.png'
  })

  static Newbie = new Section('101',  'Новичкам', {
    title: 'BitJournal — Новичкам',
    descriptiuon: '',
    keywords: 'биткоин, bitjournal, криптовалюты, ico, майнинг, блокчейн',
    image: 'og.png'
  })

  static *[Symbol.iterator](): IterableIterator<Section> {
    const keys = Object.keys(this)
    for (let key of keys)
      yield (this as any)[key] as Section
  }

  static get(input: any): Section | undefined {
    let id = String(input && input.id || input)

    for (let item of this)
      if (item.id === id)
        return item

    return undefined
  }

  static getArray(value: any): Array<Section> {
    return new Array<any>().concat(value)
                           .map( item => this.get(item) )
                           .filter( item => item !== undefined )
                           .filter((item, i, self) => self.indexOf(item) === i) as Array<Section>
  }

  private constructor(
    readonly id: string,
    readonly title: string,
    readonly og: {
      title: string,
      descriptiuon: string,
      keywords: string,
      image: string,
    }
  ) {}

  valueOf(): any {
    return this.id
  }

  toNumber(): number {
    return Array.prototype.indexOf.call(Section, this)
  }

  toString(): string {
    return this.id
  }

  toJSON(): any {
    return this.id
  }

  [Symbol.toPrimitive](hint : 'default' | 'string' | 'number') {
    switch (hint) {
      case 'default':
        return this.valueOf()
      case 'number':
        return this.toNumber()
      case 'string':
        return this.toString()
      default:
        throw new TypeError('Cannot convert Section value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Section'
  }
}
