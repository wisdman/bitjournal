import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

// === External components ===
import Chartist from 'chartist'

import { DATA } from './data'

@Component({
  selector: '.currency-card',
  templateUrl: './currency-card.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CurrencyCardComponent implements AfterViewInit {

  @ViewChild('chart') chartRef:ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  ngAfterViewInit() {
    if ( isPlatformBrowser(this.platformId) ) {

      const priceUSD = DATA.price_usd.map( item => ({ x: new Date(item[0]), y: item[1] }) )

      new (<any>Chartist.Line)(this.chartRef.nativeElement,{
        series: [{
          name: 'price_usd',
          data: priceUSD
        }]
      },{
        low: 0,
        showArea: true,
        showPoint: false,
        axisX: {
          type: Chartist.FixedScaleAxis,
          divisor: 10,
          labelInterpolationFnc: (value: any) => `${value}`
        },
        // height: '300px'
      })

      console.dir(DATA.price_usd)
    }
  }
}
