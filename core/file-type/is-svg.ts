
const HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g

const SVG_REGEX = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:<![^>]*>)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i

const isBinary = (input: Uint8Array) => {
  for (let i = 0; i < 24; i++)
    if (input[i] === 65533 || input[i] <= 8)
      return true
  return false;
}


export default (input: Uint8Array): boolean =>
  !isBinary(input) && SVG_REGEX.test( input.toString().replace(HTML_COMMENT_REGEX, '') )
