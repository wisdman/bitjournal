
const TW_API = 'https://platform.twitter.com/widgets.js'

export function TwitterInit(): Promise<void> {
  return new Promise( (resolve, reject) => {

    (<any>window).twttr = {
      _e: [function(TW: any) {
        if (TW)
          resolve(TW)
        else
          reject( new Error('TW Initialisation error') )
      }]
    }

    const script = document.createElement('script')
    script.type  = 'text/javascript'
    script.async = true
    script.id    = 'twitter-js'
    script.src   = TW_API

    document.head.appendChild(script)
  })
}