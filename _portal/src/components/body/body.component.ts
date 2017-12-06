import { Component, ViewEncapsulation, Inject } from '@angular/core'

// import { CONTEXT } from '../../app.tokens'

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BodyComponent {

  public context: any

  // constructor(@Inject(CONTEXT) context: any) {
  //   this.context = context;
  //   context.test = 123456;
  // }
}
