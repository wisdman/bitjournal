
const METRIKA_ID = 47024637
const METRIKA_API = 'https://mc.yandex.ru/metrika/watch.js'

export function MetrikaInit(): Promise<void> {
  return new Promise( (resolve, reject) => {

    (<any>window).yandex_metrika_callbacks = function() {

      try {
        (<any>window)[`yaCounter${METRIKA_ID}`] = new (<any>window).Ya.Metrika({
          id: METRIKA_ID,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true
        })
      } catch (_) {}

      const YA = (<any>window)[`yaCounter${METRIKA_ID}`]

      if (YA)
        resolve(YA)
      else
        reject( new Error('Yandex Metrika Initialisation error') )
    }

    const script = document.createElement('script')
    script.type  = 'text/javascript'
    script.async = true
    script.id    = 'metrika-jssdk'
    script.src   = METRIKA_API

    document.head.appendChild(script)
  })
}
