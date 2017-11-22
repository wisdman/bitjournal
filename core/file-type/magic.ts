/*
 * Magic numbers
 */

export default [
  { mime: 'image/jpeg', extension: 'jpg',
    offset: 0 , header: new Uint8Array([0xFF, 0xD8, 0xFF]) },

  { mime: 'image/png', extension: 'png',
    offset: 0 , header: new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]) },

  { mime: 'image/gif', extension: 'gif',
    offset: 0 , header: new Uint8Array([0x47, 0x49, 0x46]) },

  { mime: 'image/webp', extension: 'webp',
    offset: 8 , header: new Uint8Array([0x57, 0x45, 0x42, 0x50]) },
] as Array<{
  mime: string
  extension: string
  offset: number
  header: Uint8Array
}>
