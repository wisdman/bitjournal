
export const DEBUG = process.env.DEBUG ? true : false

export const DOMAIN_PORTAL = process.env.PRODUCTION ? 'bitjournal.io'     : 'bitjournal.dev'
export const DOMAIN_API    = process.env.PRODUCTION ? 'api.bitjournal.io' : 'api.bitjournal.dev:4431'
export const DOMAIN_RAW    = process.env.PRODUCTION ? 'raw.bitjournal.io' : 'raw.bitjournal.dev:4432'

export const META_DEFAULT_TITLE = 'BitJournal — издание про биткоин, криптовалюты, ICO, майнинг и блокчейн'
export const META_DEFAULT_DESCRIPTION = 'На сайте BitJournal вы найдете оперативные новости из мира криптоиндустрии — все о самых грандиозных ICO в истории, огромные майнинг-фермы про летящий на луну биткоин и многое другое'
export const META_DEFAULT_KEYWORDS = 'биткоин, bitjournal, криптовалюты, ico, майнинг, блокчейн'

// Yandex metrika
export const YA_METRIKA_ID = 47024637
export const YA_METRIKA_API = 'https://mc.yandex.ru/metrika/watch.js'

// Facebook
export const FB_API = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.11&appId=139427653304621'

// VKontakte
export const VK_SOCIAL_ID = '149011206'
export const VK_API = 'https://vk.com/js/api/openapi.js'

// Twitter
export const TW_API = 'https://platform.twitter.com/widgets.js'

// Google
export const GOOGLE_API = 'https://apis.google.com/js/platform.js'

// YouTube
export const YOUTUBE_API_KEY = 'AIzaSyB2gY86homt-uvqDQrRA0ru8gsNkPKRdZc'
export const YOUTUBE_DATA_URL = `https://www.googleapis.com/youtube/v3/videos?id={{IDS}}&key=${YOUTUBE_API_KEY}&part=snippet,statistics,contentDetails`

// Share url
export const SHARE_FB       = 'https://www.facebook.com/sharer/sharer.php?u={{URL}}'
export const SHARE_TWITTER  = 'https://twitter.com/home?status={{URL}}'
export const SHARE_VK       = 'https://vk.com/share.php?url={{URL}}'
export const SHARE_TELEGRAM = 'https://t.me/share/url?url={{URL}}'
export const SHARE_WHATSAPP = 'whatsapp://send?text={{URL}}'
export const SHARE_VIBER    = 'viber://forward?text={{URL}}'
export const SHARE_GOOGLE   = 'https://plus.google.com/share?url={{URL}}'
