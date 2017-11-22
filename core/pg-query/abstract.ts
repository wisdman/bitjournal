export abstract class AbstractQuery {
  text: string
  values: Array<any>

  constructor(readonly name: string) {}

  valueOf() {
    return {
      text: this.text,
      values: this.values,
    }
  }
}
