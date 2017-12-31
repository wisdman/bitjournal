
const XML = [{
  type: 'text/html',
  regexp: /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype html[^>]*\s*(?:<![^>]*>)*[^>]*>\s*)?<html[^>]*>[^]*<\/html>\s*$/i
},{
  type: 'application/rss+xml',
  regexp: /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype rss[^>]*\s*(?:<![^>]*>)*[^>]*>\s*)?<rss[^>]*>[^]*<\/rss>\s*$/i
},{
  type: 'image/svg+xml',
  regexp: /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:<![^>]*>)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i
}]

export const textContentType = (value: string): string => {
  for (let pattern of XML)
    if ( pattern.regexp.test(value) )
      return pattern.type

  return 'text/plain'
}
