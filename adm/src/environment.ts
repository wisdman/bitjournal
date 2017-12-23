
export * from '@common/environment'

export const DOMAIN_ADM = process.env.PRODUCTION ? 'adm.bitjournal.io' : 'adm.bitjournal.io:4433'

export const TOTP_SERVICE_NAME = 'BitJournal'
export const TOTP_URI = (email: string, secret: string) => `otpauth://totp/${TOTP_SERVICE_NAME}:${email}?secret=${secret}&issuer=${TOTP_SERVICE_NAME}`

