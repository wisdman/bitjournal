
const GOOGLE_API = 'https://apis.google.com/js/platform.js'

export function GoogleInit(): Promise<void> {
  return new Promise( (resolve, reject) => {

    // (<any>window).twttr = {
    //   _e: [function(TW: any) {
    //     if (TW)
    //       resolve(TW)
    //     else
    //       reject( new Error('TW Initialisation error') )
    //   }]
    // }

    const script = document.createElement('script')
    script.type  = 'text/javascript'
    script.async = true
    script.id    = 'google-js'
    script.src   = GOOGLE_API

    document.head.appendChild(script)
  })
}
