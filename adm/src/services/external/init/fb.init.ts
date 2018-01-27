
import { FB_API } from '@common/environment'

export function FBInit(): Promise<void> {
  return new Promise( (resolve, reject) => {

    (<any>window).fbAsyncInit = function() {
      const FB = (<any>window).FB
      if (FB)
        resolve(FB)
      else
        reject( new Error('FB Initialisation error') )
    }

    const script = document.createElement('script')
    script.type  = 'text/javascript'
    script.async = true
    script.id    = 'facebook-jssdk'
    script.src   = FB_API

    document.head.appendChild(script)
  })
}
