import { RouteMiddleware, Context, INext, HttpError, Get, Post } from '@core/service'

// @Route('/publications')
export class UsersAPI extends RouteMiddleware {

  @Get('/users')
  // @Auth(['admin', 'su'])
  getAll(ctx: Context, next: INext) {
    console.log('Get all ')
  }

  @Get('/users/:id')
  // @Auth()
  getOne() {
    console.log('Get one')
  }

  // @Get('', 'q')
  // find() {

  // }

  @Post()
  // @Auth(['admin', 'su'])
  create() {
    console.log('Create')
  }

  @Post()
  // @Auth(['admin', 'su'])
  update() {
    console.log('Update')
  }

  // async main(ctx: Context, next: INext): Promise<void> {
  //   ctx.set(ctx.session)
  //   await next()
  // }

}
