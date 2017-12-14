import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

@Injectable()
export class NotificationService {

  private isServer: boolean
  private allowNotification: boolean = false

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isServer = isPlatformServer(platformId)
    this.initNotification()
  }

  initNotification() {
    if (this.isServer)
      return

    if (!window || !('Notification' in window))
      return

    switch ((<any>window).Notification.permission) {
      case 'granted':
        this.allowNotification = true
        return

      case 'denied':
        this.allowNotification = false
        return

      default:
        Notification.requestPermission( permission => {
          this.allowNotification = permission === 'granted'
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
