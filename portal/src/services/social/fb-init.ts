
const FB_API = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.11&appId=139427653304621'

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
