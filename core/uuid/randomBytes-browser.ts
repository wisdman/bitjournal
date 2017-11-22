
const randomBytes = (size: number) => {
  let rnd = new Uint8Array(size)
  window.crypto.getRandomValues(rnd)
  return rnd
}

export default randomBytes
