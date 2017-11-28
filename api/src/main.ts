/*
 * API service
 */

import { Service, Context, INext, Middleware } from '@core/service'

import { UserSessionMiddleware } from '@common/middleware'
import { PgDBMiddleware } from './pgdb'

import * as API from './api'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(

  new PgDBMiddleware(), // Add database to context

  new UserSessionMiddleware(), // Add session to context

  ...Object.values(API).map( api => new api() ), // Api routing and execute

)


// import { OTP } from '@core/otp'

// let otp = new OTP({ secret: '91bedca81c16b4f2413b01f19b7e545c668cd0b1e9a2e5452e79ea991b0f39ec' })
// console.dir(otp.keyuri('Kirill', 'BitJournal'))

// const secret = otp.base32Secret
// console.log('=== Secret ===\n%s', secret)

// const decoded = otp.decodeKey(secret)
// console.log(decoded)

// // // console.log(otp.encodeKey(decoded))

// // // const secret = otp.base32Secret

// // // console.log(otp.decodeKey(secret))

// setInterval( () => console.log(otp.totpToken()), 10000 )


