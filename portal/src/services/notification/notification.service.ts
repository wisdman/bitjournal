import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

@Injectable()
export class NotificationService {

  private readonly _isServer: boolean
  private _allowNotification: boolean = false

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this._isServer = isPlatformServer(platformId)
  }

  init() {
    if (this._isServer)
      return

    if (!window || !('Notification' in window))
      return

    switch ((<any>window).Notification.permission) {
      case 'granted':
        this._allowNotification = true
        return

      case 'denied':
        this._allowNotification = false
        return

      default:
        Notification.requestPermission( permission => {
          this._allowNotification = permission === 'granted'
        })
    }
  }

  load(): Promise<void> {
    return Promise.resolve()
  }
}


export function NotificationServiceFactory(notificationService: NotificationService): Function {
  return () => notificationService.load()
}
