
import { VK_API } from '@common/environment'

export function VKInit(): Promise<void> {
  return new Promise( (resolve, reject) => {

    (<any>window).vkAsyncInit = function() {
      const VK = (<any>window).VK
      if (VK)
        resolve(VK)
      else
        reject( new Error('VK Initialisation error') )
    }

    const script = document.createElement('script')
    script.type  = 'text/javascript'
    script.async = true
    script.id    = 'vkontakte-jssdk'
    script.src   = VK_API

    document.head.appendChild(script)
  })
}