
export class Video {
  static MainFields = [
    'id',
    'enable',
    'title',
  ]

  readonly id: string
  readonly enable: boolean

  readonly title: string
  readonly description: string

  readonly ogTitle: string
  readonly ogDescription: string

  readonly image: number | null
  readonly ogImage: number | null

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = String(value.title || '').trim()

    this.enable = !!value.enable

    this.title = String(value.title || '').trim()
    this.ogTitle = String(value.ogTitle || '').trim()

    this.description = String(value.description || '').trim()
    this.ogDescription = String(value.ogDescription || '').trim()

    this.image = Math.max(~~value.image, 0) || null
    this.ogImage = Math.max(~~value.ogImage, 0) || null
  }

  valueOf() {
    return {
      enable: this.enable,

      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,
    }
  }

  toJSON(): any {
    return {
      id: this.id,

      enable: this.enable,

      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,
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
        throw new TypeError('Cannot convert Video value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Video'
  }
}
