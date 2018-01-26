
import {
  YA_METRIKA_API,
  YA_METRIKA_ID,
} from '@common/environment'

export function MetrikaInit(): Promise<void> {
  return new Promise( (resolve, reject) => {
    (<any>window).yandex_metrika_callbacks = function() {

      try {
        (<any>window)[`yaCounter${YA_METRIKA_ID}`] = new (<any>window).Ya.Metrika({
          id: YA_METRIKA_ID,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true
        })
      } catch (error) {
        reject( error )
      }

      const YA = (<any>window)[`yaCounter${YA_METRIKA_ID}`]

      if (YA)
        resolve(YA)
      else
        reject( new Error('Yandex Metrika Initialisation error') )
    }

    const script = document.createElement('script')
    script.type  = 'text/javascript'
    script.async = true
    script.id    = 'metrika-jssdk'
    script.src   = YA_METRIKA_API

    document.head.appendChild(script)
  })
}
