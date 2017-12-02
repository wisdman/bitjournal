
export class Currency {
  static MainFields = [
    'symbol',
    'enable',
    'title',
    'image'
  ]

  readonly symbol: string

  readonly enable: boolean

  readonly title: string
  readonly description: string

  readonly ogTitle: string
  readonly ogDescription: string

  readonly image: number | null
  readonly ogImage: number | null

  readonly content: string

  readonly branding: object

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.symbol = String(value.symbol || '').trim()

    this.enable = !!value.enable

    this.title = String(value.title || '').trim()
    this.ogTitle = String(value.ogTitle || '').trim()

    this.description = String(value.description || '').trim()
    this.ogDescription = String(value.ogDescription || '').trim()

    this.image = Math.max(~~value.image, 0) || null
    this.ogImage = Math.max(~~value.ogImage, 0) || null

    this.content = String(value.content || '').trim()

    this.branding = {}
  }

  valueOf() {
    return {
      symbol: this.symbol,

      enable: this.enable,

      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,

      content: this.content,

      branding: this.branding,
    }
  }

  toJSON(): any {
    return {
      symbol: this.symbol,

      enable: this.enable,

      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,

      content: this.content,

      branding: this.branding,
    }
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return this.title
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
        throw new TypeError('Cannot convert Currency value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Currency'
  }
}
