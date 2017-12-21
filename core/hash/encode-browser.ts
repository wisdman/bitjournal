
declare const TextEncoder: any

export const encode = (input:string): Uint8Array =>
                        new TextEncoder("utf-8").encode(input)
