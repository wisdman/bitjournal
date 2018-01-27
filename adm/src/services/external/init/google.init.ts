
import { GOOGLE_API } from '@common/environment'

export function GoogleInit(): Promise<void> {
  return new Promise( (resolve, reject) => {

    (<any>window).onGoogleLoad = function() {
      const gapi = (<any>window).gapi
      if (gapi)
        resolve(gapi)
      else
        reject( new Error('Google API Initialisation error') )
    }

    const script = document.createElement('script')
    script.type  = 'text/javascript'
    script.async = true
    script.id    = 'google-jssdk'
    script.src   = GOOGLE_API + '?onload=onGoogleLoad'

    document.head.appendChild(script)
  })
}
