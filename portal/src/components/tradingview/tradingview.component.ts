import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core'

import { ICoin } from '@common/coin'

@Component({
  selector: 'tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: [ './tradingview.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class TradingViewComponent {
  @Input() value: string | null = null

  @ViewChild('tradingView') tradingView: ElementRef

  ngAfterViewInit() {
    const element = this.tradingView.nativeElement
    element.innerHTML = ''

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://s3.tradingview.com/tv.js'

    script.onload = function() {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `
        new TradingView.widget({
          "autosize": true,
          "symbol": "BTCUSD",
          "interval": "60",
          "timezone": "Europe/London",
          "theme": "Light",
          "style": "1",
          "locale": "ru",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hideideas": true
        })
      `
      element.appendChild(script)
    }

    element.appendChild(script)
  }
}
