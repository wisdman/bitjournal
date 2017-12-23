
import { TW_API } from '@common/environment'

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
    script.id    = 'twitter-jssdk'
    script.src   = TW_API

    document.head.appendChild(script)
  })
}
