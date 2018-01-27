webpackJsonp(["main"],{

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/zone.js/dist/zone.js
var zone = __webpack_require__(229);
var zone_default = /*#__PURE__*/__webpack_require__.n(zone);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(22);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(20);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/router/esm5/router.js
var router = __webpack_require__(25);

// CONCATENATED MODULE: ./components/article/article.component.ts

class ArticleComponent {
    constructor() {
        this.value = null;
    }
}

// CONCATENATED MODULE: ./components/article/index.ts


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/material.es5.js + 23 modules
var material_es5 = __webpack_require__(87);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/common/esm5/http.js
var http = __webpack_require__(60);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/Observable.js
var Observable = __webpack_require__(5);
var Observable_default = /*#__PURE__*/__webpack_require__.n(Observable);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/observable/of.js
var of = __webpack_require__(81);
var of_default = /*#__PURE__*/__webpack_require__.n(of);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/operator/catch.js
var operator_catch = __webpack_require__(103);
var catch_default = /*#__PURE__*/__webpack_require__.n(operator_catch);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/operator/filter.js
var filter = __webpack_require__(104);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/hash/encode-browser.ts
const encode = (input) => new TextEncoder("utf-8").encode(input);

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/hash/hash.ts

const DIGEST_LENGTH = 32;
const BLOCK_SIZE = 64;
const K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
    0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
    0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
    0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
    0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
    0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
    0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
    0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
    0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
function hashBlocks(w, v, p, pos, len) {
    let a, b, c, d, e, f, g, h, u, i, j, t1, t2;
    while (len >= 64) {
        a = v[0];
        b = v[1];
        c = v[2];
        d = v[3];
        e = v[4];
        f = v[5];
        g = v[6];
        h = v[7];
        for (i = 0; i < 16; i++) {
            j = pos + i * 4;
            w[i] = (((p[j] & 0xff) << 24) | ((p[j + 1] & 0xff) << 16) |
                ((p[j + 2] & 0xff) << 8) | (p[j + 3] & 0xff));
        }
        for (i = 16; i < 64; i++) {
            u = w[i - 2];
            t1 = (u >>> 17 | u << (32 - 17)) ^ (u >>> 19 | u << (32 - 19)) ^ (u >>> 10);
            u = w[i - 15];
            t2 = (u >>> 7 | u << (32 - 7)) ^ (u >>> 18 | u << (32 - 18)) ^ (u >>> 3);
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
        }
        for (i = 0; i < 64; i++) {
            t1 = (((((e >>> 6 | e << (32 - 6)) ^ (e >>> 11 | e << (32 - 11)) ^
                (e >>> 25 | e << (32 - 25))) + ((e & f) ^ (~e & g))) | 0) +
                ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;
            t2 = (((a >>> 2 | a << (32 - 2)) ^ (a >>> 13 | a << (32 - 13)) ^
                (a >>> 22 | a << (32 - 22))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
            h = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }
        v[0] += a;
        v[1] += b;
        v[2] += c;
        v[3] += d;
        v[4] += e;
        v[5] += f;
        v[6] += g;
        v[7] += h;
        pos += 64;
        len -= 64;
    }
    return pos;
}
function buf2hex(buffer) {
    return;
}
class hash_Hash {
    constructor() {
        this.digestLength = DIGEST_LENGTH;
        this.blockSize = BLOCK_SIZE;
        this.state = new Int32Array(8);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(128);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
        this.reset();
    }
    static hashString(input) {
        const buffer = typeof input === 'string' ? encode(input) : input;
        const hashBuffer = new Uint8Array(hash_Hash.hash(buffer).buffer);
        return Array.prototype.map.call(hashBuffer, (x) => ('00' + x.toString(16)).slice(-2)).join('');
    }
    static hash(data) {
        const h = new hash_Hash().update(data);
        const digest = h.digest();
        h.clean();
        return digest;
    }
    reset() {
        this.state[0] = 0x6a09e667;
        this.state[1] = 0xbb67ae85;
        this.state[2] = 0x3c6ef372;
        this.state[3] = 0xa54ff53a;
        this.state[4] = 0x510e527f;
        this.state[5] = 0x9b05688c;
        this.state[6] = 0x1f83d9ab;
        this.state[7] = 0x5be0cd19;
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
        return this;
    }
    clean() {
        for (let i = 0; i < this.buffer.length; i++)
            this.buffer[i] = 0;
        for (let i = 0; i < this.temp.length; i++)
            this.temp[i] = 0;
        this.reset();
    }
    update(data, dataLength = data.length) {
        if (this.finished)
            throw new Error("SHA256: can't update because hash was finished.");
        let dataPos = 0;
        this.bytesHashed += dataLength;
        if (this.bufferLength > 0) {
            while (this.bufferLength < 64 && dataLength > 0) {
                this.buffer[this.bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this.bufferLength === 64) {
                hashBlocks(this.temp, this.state, this.buffer, 0, 64);
                this.bufferLength = 0;
            }
        }
        if (dataLength >= 64) {
            dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
            dataLength %= 64;
        }
        while (dataLength > 0) {
            this.buffer[this.bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    }
    finish(out) {
        if (!this.finished) {
            const bytesHashed = this.bytesHashed;
            const left = this.bufferLength;
            const bitLenHi = (bytesHashed / 0x20000000) | 0;
            const bitLenLo = bytesHashed << 3;
            const padLength = (bytesHashed % 64 < 56) ? 64 : 128;
            this.buffer[left] = 0x80;
            for (let i = left + 1; i < padLength - 8; i++)
                this.buffer[i] = 0;
            this.buffer[padLength - 8] = (bitLenHi >>> 24) & 0xff;
            this.buffer[padLength - 7] = (bitLenHi >>> 16) & 0xff;
            this.buffer[padLength - 6] = (bitLenHi >>> 8) & 0xff;
            this.buffer[padLength - 5] = (bitLenHi >>> 0) & 0xff;
            this.buffer[padLength - 4] = (bitLenLo >>> 24) & 0xff;
            this.buffer[padLength - 3] = (bitLenLo >>> 16) & 0xff;
            this.buffer[padLength - 2] = (bitLenLo >>> 8) & 0xff;
            this.buffer[padLength - 1] = (bitLenLo >>> 0) & 0xff;
            hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
            this.finished = true;
        }
        for (let i = 0; i < 8; i++) {
            out[i * 4 + 0] = (this.state[i] >>> 24) & 0xff;
            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
        }
        return this;
    }
    digest() {
        const out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    }
}

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/hash/index.ts


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/operator/map.js
var map = __webpack_require__(82);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ./services/message/message.service.ts



class message_service_MessageService {
    constructor(platformId, _snackBar) {
        this._snackBar = _snackBar;
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
    }
    message(message, duration = 2000) {
        if (this._isServer)
            console.log(message);
        else
            this._snackBar.open(message, undefined, { duration });
    }
}

// CONCATENATED MODULE: ./services/message/index.ts


// CONCATENATED MODULE: ./services/user/user.service.ts












const AUTH_TOKEN_LS_ID = 'auth-token';
const ME_PATH = (path = '') => api_service_APIService.buildURL(`/users/me/${path}`);
const ɵ0 = ME_PATH;
const AUTH_PATH = (path = '') => api_service_APIService.buildURL(`/auth/${path}`);
const ɵ1 = AUTH_PATH;
class user_service_UserService {
    constructor(platformId, _http, _matDialog, _message) {
        this._http = _http;
        this._matDialog = _matDialog;
        this._message = _message;
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
    }
    get _authToken() {
        if (this._isServer)
            return null;
        return window.localStorage.getItem(AUTH_TOKEN_LS_ID) || null;
    }
    set _authToken(value) {
        if (this._isServer)
            return;
        value = value && value.trim() || null;
        if (value)
            window.localStorage.setItem(AUTH_TOKEN_LS_ID, value);
        else
            window.localStorage.removeItem(AUTH_TOKEN_LS_ID);
    }
    get authToken() {
        return this._authToken;
    }
    get authHeaders() {
        let authToken = this._authToken;
        return new http["h" /* HttpHeaders */]({ 'Authorization': 'token ' + (authToken || 'null') });
    }
    me() {
        return this._http.get(ME_PATH(), { headers: this.authHeaders })
            .catch(error => {
            if (error instanceof http["f" /* HttpErrorResponse */]) {
                if (error.status === 403)
                    this._matDialog.open(auth_dialog_component_AuthDialogComponent, { data: this });
                else
                    this._message.message(`Ошибка ${error.status}: ${error.message}`);
            }
            else
                this._message.message('Ошибка приложения');
            return Observable["Observable"].of(null);
        })
            .filter(item => item !== null);
    }
    login(data) {
        return this._http.post(AUTH_PATH('login'), data, { headers: this.authHeaders })
            .catch(error => Observable["Observable"].of(null))
            .map(item => {
            if (item === null) {
                this._message.message('Неверное имя пользователя или пароль');
                return false;
            }
            this._authToken = item.token;
            window.location.reload();
            return true;
        });
    }
    logout() {
        this._http.get(AUTH_PATH('logout'), { headers: this.authHeaders })
            .catch(error => Observable["Observable"].of(null))
            .subscribe(item => {
            this._authToken = null;
            window.location.reload();
        });
    }
}


// CONCATENATED MODULE: ./services/user/index.ts


// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/common/environment/environment.ts
const DEBUG =  false ? true : false;
const DOMAIN_PORTAL =  true ? 'bitjournal.io' : 'bitjournal.dev';
const DOMAIN_API =  true ? 'api.bitjournal.io' : 'api.bitjournal.dev:4431';
const DOMAIN_RAW =  true ? 'raw.bitjournal.io' : 'raw.bitjournal.dev:4432';
const META_DEFAULT_TITLE = 'BitJournal — издание про биткоин, криптовалюты, ICO, майнинг и блокчейн';
const META_DEFAULT_DESCRIPTION = 'На сайте BitJournal вы найдете оперативные новости из мира криптоиндустрии — все о самых грандиозных ICO в истории, огромные майнинг-фермы про летящий на луну биткоин и многое другое';
const META_DEFAULT_KEYWORDS = 'биткоин, bitjournal, криптовалюты, ico, майнинг, блокчейн';
const YA_METRIKA_ID = 47024637;
const YA_METRIKA_API = 'https://mc.yandex.ru/metrika/watch.js';
const FB_API = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.11&appId=139427653304621';
const VK_SOCIAL_ID = '149011206';
const VK_API = 'https://vk.com/js/api/openapi.js';
const TW_API = 'https://platform.twitter.com/widgets.js';
const GOOGLE_API = 'https://apis.google.com/js/platform.js';
const YOUTUBE_API_KEY = 'AIzaSyB2gY86homt-uvqDQrRA0ru8gsNkPKRdZc';
const YOUTUBE_DATA_URL = `https://www.googleapis.com/youtube/v3/videos?id={{IDS}}&key=${YOUTUBE_API_KEY}&part=snippet,statistics,contentDetails`;
const SHARE_FB = 'https://www.facebook.com/sharer/sharer.php?u={{URL}}';
const SHARE_TWITTER = 'https://twitter.com/home?status={{URL}}';
const SHARE_VK = 'https://vk.com/share.php?url={{URL}}';
const SHARE_TELEGRAM = 'https://t.me/share/url?url={{URL}}';
const SHARE_WHATSAPP = 'whatsapp://send?text={{URL}}';
const SHARE_VIBER = 'viber://forward?text={{URL}}';
const SHARE_GOOGLE = 'https://plus.google.com/share?url={{URL}}';

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/common/environment/index.ts


// CONCATENATED MODULE: ./services/api/api.service.ts












class api_service_APIService {
    constructor(platformId, _tstate, _http, _user, _message) {
        this._tstate = _tstate;
        this._http = _http;
        this._user = _user;
        this._message = _message;
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
        this._isBrowser = Object(common["t" /* isPlatformBrowser */])(platformId);
    }
    static buildURL(value = '') {
        const path = ('/' + value).replace(/\/+/g, '/')
            .replace(/\/+$/, '');
        return `https://${DOMAIN_API}${path}`;
    }
    _transferStateKey(url) {
        const pathHash = hash_Hash.hashString(url);
        const itemKey = Object(platform_browser["m" /* makeStateKey */])(pathHash);
        return itemKey;
    }
    _transferStateGet(url) {
        if (this._isServer)
            return undefined;
        const itemKey = this._transferStateKey(url);
        if (!this._tstate.hasKey(itemKey))
            return undefined;
        const result = this._tstate.get(itemKey, null);
        this._tstate.remove(itemKey);
        return result;
    }
    _transferStateSet(url, item) {
        if (this._isBrowser)
            return;
        if (item !== undefined && item !== null)
            return;
        const itemKey = this._transferStateKey(url);
        this._tstate.set(itemKey, item);
    }
    _handleError(error) {
        if (error instanceof http["f" /* HttpErrorResponse */]) {
            switch (error.status) {
                case 403:
                    this._message.message('403: Доступ запрещен');
                    break;
                case 404:
                    this._message.message('404: Элемент не найден');
                    break;
                default:
                    this._message.message(`Ошибка ${error.status}: ${error.message}`);
            }
        }
        else
            this._message.message('Ошибка приложения');
        return Observable["Observable"].of(null);
    }
    get(path, inputParams = {}) {
        const url = api_service_APIService.buildURL(path);
        const result = this._transferStateGet(url + JSON.stringify(inputParams));
        if (result !== undefined && result !== null)
            return Observable["Observable"].of(result);
        const params = new http["i" /* HttpParams */]({ fromObject: inputParams });
        return this._http.get(url, {
            headers: this._user.authHeaders,
            params
        })
            .catch(error => this._handleError(error))
            .filter((item) => item !== null
            && item !== undefined
            && (item.enable === undefined || item.enable === true))
            .map(item => {
            this._transferStateSet(url, item);
            return item;
        });
    }
    post(path, data) {
        const url = api_service_APIService.buildURL(path);
        return this._http.post(url, data, { headers: this._user.authHeaders })
            .catch(error => this._handleError(error))
            .filter(item => item !== null);
    }
    put(path, data) {
        const url = api_service_APIService.buildURL(path);
        return this._http.put(url, data, { headers: this._user.authHeaders })
            .catch(error => this._handleError(error))
            .filter(item => item !== null);
    }
    delete(path) {
        const url = api_service_APIService.buildURL(path);
        return this._http.delete(url, { headers: this._user.authHeaders })
            .catch(error => this._handleError(error))
            .filter(item => item !== null);
    }
}

// CONCATENATED MODULE: ./services/api/index.ts


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/observable/merge.js
var merge = __webpack_require__(276);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/observable/interval.js
var interval = __webpack_require__(277);
var interval_default = /*#__PURE__*/__webpack_require__.n(interval);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/operator/mergeAll.js
var mergeAll = __webpack_require__(187);
var mergeAll_default = /*#__PURE__*/__webpack_require__.n(mergeAll);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/operator/concatMap.js
var concatMap = __webpack_require__(280);
var concatMap_default = /*#__PURE__*/__webpack_require__.n(concatMap);

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/common/coin/environment.ts
const COINS_API_PATH = '/coins';
const COINS_DATATABLE = 'coins';
const COINS_HOT = [
    'BTC',
    'BCH',
    'DASH',
    'ETH',
    'ZEC',
    'XMR',
    'BTG',
    'LTC',
];
const SYMBOL_CHARACTER_MAP = ['*', '@', '$'];
const COIN_IMG = (symbol) => symbol.replace(/[^a-z0-9]/gi, (match) => {
    let i = SYMBOL_CHARACTER_MAP.indexOf(match);
    return i >= 0 ? String(i) : '';
}).toLowerCase();

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/common/coin/index.ts


// CONCATENATED MODULE: ./services/coin/coin.service.ts











const COINS_UPDATE_INTERVAL = 30000;
class coin_service_CoinService {
    constructor(platformId, _api) {
        this._api = _api;
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
        this.hot = this._api
            .get(COINS_API_PATH, { symbols: COINS_HOT.join(',') })
            .map(item => {
            const result = Observable["Observable"].of(item);
            if (this._isServer)
                return result;
            return Observable["Observable"].merge(result, this.tiker());
        })
            .mergeAll();
    }
    tiker() {
        return Observable["Observable"]
            .interval(COINS_UPDATE_INTERVAL)
            .concatMap(() => this._api.get(COINS_API_PATH, { symbols: COINS_HOT.join(',') }));
    }
}

// CONCATENATED MODULE: ./services/coin/index.ts


// CONCATENATED MODULE: ./context/context.ts
class Context {
    constructor() {
        this.status = 200;
    }
}

// CONCATENATED MODULE: ./context/injection.ts

const CONTEXT = new core["p" /* InjectionToken */]('CONTEXT');

// CONCATENATED MODULE: ./context/index.ts



// CONCATENATED MODULE: ./services/context/context.ts


class ContextService {
    constructor(context) {
        this._context = context;
    }
    get status() {
        return this._context && this._context.status || NaN;
    }
    set status(value) {
        if (this._context)
            this._context.status = value;
    }
}

// CONCATENATED MODULE: ./services/context/index.ts


// CONCATENATED MODULE: ./services/external/init/fb.init.ts

function FBInit() {
    return new Promise((resolve, reject) => {
        window.fbAsyncInit = function () {
            const FB = window.FB;
            if (FB)
                resolve(FB);
            else
                reject(new Error('FB Initialisation error'));
        };
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.id = 'facebook-jssdk';
        script.src = FB_API;
        document.head.appendChild(script);
    });
}

// CONCATENATED MODULE: ./services/external/init/google.init.ts

function GoogleInit() {
    return new Promise((resolve, reject) => {
        window.onGoogleLoad = function () {
            const gapi = window.gapi;
            if (gapi)
                resolve(gapi);
            else
                reject(new Error('Google API Initialisation error'));
        };
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.id = 'google-jssdk';
        script.src = GOOGLE_API + '?onload=onGoogleLoad';
        document.head.appendChild(script);
    });
}

// CONCATENATED MODULE: ./services/external/init/metrika.init.ts

function MetrikaInit() {
    return new Promise((resolve, reject) => {
        window.yandex_metrika_callbacks = function () {
            try {
                window[`yaCounter${YA_METRIKA_ID}`] = new window.Ya.Metrika({
                    id: YA_METRIKA_ID,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true
                });
            }
            catch (_) { }
            const YA = window[`yaCounter${YA_METRIKA_ID}`];
            if (YA)
                resolve(YA);
            else
                reject(new Error('Yandex Metrika Initialisation error'));
        };
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.id = 'metrika-jssdk';
        script.src = YA_METRIKA_API;
        document.head.appendChild(script);
    });
}

// CONCATENATED MODULE: ./services/external/init/twitter.init.ts

function TwitterInit() {
    return new Promise((resolve, reject) => {
        window.twttr = {
            _e: [function (TW) {
                    if (TW)
                        resolve(TW);
                    else
                        reject(new Error('TW Initialisation error'));
                }]
        };
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.id = 'twitter-jssdk';
        script.src = TW_API;
        document.head.appendChild(script);
    });
}

// CONCATENATED MODULE: ./services/external/init/vk.init.ts

function VKInit() {
    return new Promise((resolve, reject) => {
        window.vkAsyncInit = function () {
            const VK = window.VK;
            if (VK)
                resolve(VK);
            else
                reject(new Error('VK Initialisation error'));
        };
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.id = 'vkontakte-jssdk';
        script.src = VK_API;
        document.head.appendChild(script);
    });
}

// CONCATENATED MODULE: ./services/external/init/index.ts






// CONCATENATED MODULE: ./services/external/external.service.ts



class external_service_ExternalService {
    constructor(platformId) {
        this._fb = undefined;
        this._google = undefined;
        this._twitter = undefined;
        this._vk = undefined;
        this._ya = undefined;
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
    }
    init() {
        if (this._isServer)
            return;
        this._fb = FBInit().then(api => api || undefined).catch(error => console.error(error));
        this._google = GoogleInit().then(api => api || undefined).catch(error => console.error(error));
        this._twitter = TwitterInit().then(api => api || undefined).catch(error => console.error(error));
        this._vk = VKInit().then(api => api || undefined).catch(error => console.error(error));
        this._ya = MetrikaInit().then(api => api || undefined).catch(error => console.error(error));
    }
    get fb() {
        return this._fb || Promise.resolve(undefined);
    }
    get google() {
        return this._google || Promise.resolve(undefined);
    }
    get twitter() {
        return this._twitter || Promise.resolve(undefined);
    }
    get vk() {
        return this._vk || Promise.resolve(undefined);
    }
    get ya() {
        return this._ya || Promise.resolve(undefined);
    }
    load() {
        return Promise.resolve();
    }
}
function ExternalServiceFactory(externalService) {
    return () => externalService.load();
}

// CONCATENATED MODULE: ./services/external/index.ts


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/Subject.js
var Subject = __webpack_require__(9);
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject);

// CONCATENATED MODULE: ./services/loader/loader.service.ts



class loader_service_LoaderService {
    constructor(platformId) {
        this.loaderSubject = new Subject["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
    }
    show() {
        if (this._isServer)
            return;
        this.loaderSubject.next(true);
    }
    hide() {
        if (this._isServer)
            return;
        this.loaderSubject.next(false);
    }
}

// CONCATENATED MODULE: ./services/loader/index.ts


// CONCATENATED MODULE: ./pipes/ccimg/ccimg.pipe.ts



class ccimg_pipe_CoinImagePipe {
    static transform(input) {
        return `https://${DOMAIN_PORTAL}/coins/${COIN_IMG(String(input))}.png`;
    }
    transform(input) {
        return ccimg_pipe_CoinImagePipe.transform(input);
    }
}

// CONCATENATED MODULE: ./pipes/ccimg/index.ts


// CONCATENATED MODULE: ./pipes/filter/filter.ts

class FilterPipe {
    transform(input, key, value) {
        if (Array.isArray(input))
            return input.filter((item) => item[key] === value);
        return input;
    }
}

// CONCATENATED MODULE: ./pipes/filter/index.ts


// CONCATENATED MODULE: ./pipes/image/image.pipe.ts


const EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
const PATH_OG = `https://${DOMAIN_RAW}/og.png`;
class image_pipe_ImagePipe {
    static transform(input, og = false) {
        if (!input)
            return og ? PATH_OG : EMPTY_GIF;
        const path = ('/' + String(input))
            .trim()
            .replace(/\/+/g, '/')
            .replace(/\/+$/, '');
        if (!path)
            return og ? PATH_OG : EMPTY_GIF;
        return `https://${DOMAIN_RAW}${path}`;
    }
    transform(input, og = false) {
        return image_pipe_ImagePipe.transform(input, og);
    }
}

// CONCATENATED MODULE: ./pipes/image/index.ts


// CONCATENATED MODULE: ./pipes/order/order.ts

class OrderPipe {
    transform(input, key) {
        if (Array.isArray(input))
            return input.sort((a, b) => a[key] < b[key] ? 1 : -1);
        return input;
    }
}

// CONCATENATED MODULE: ./pipes/order/index.ts


// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/timestamp/utc.ts
class UTC {
    constructor(_this) {
        this._this = _this;
    }
    get fullYear() {
        return this._this.getUTCFullYear();
    }
    set fullYear(value) {
        this._this.setUTCFullYear(value);
    }
    get month() {
        return this._this.getUTCMonth();
    }
    set month(value) {
        this._this.setUTCMonth(value);
    }
    get date() {
        return this._this.getUTCDate();
    }
    set date(value) {
        this._this.setUTCDate(value);
    }
    get day() {
        return this._this.getUTCDay();
    }
    get hours() {
        return this._this.getUTCHours();
    }
    set hours(value) {
        this._this.setUTCHours(value);
    }
    get minutes() {
        return this._this.getUTCMinutes();
    }
    set minutes(value) {
        this._this.setUTCMinutes(value);
    }
    get seconds() {
        return this._this.getUTCSeconds();
    }
    set seconds(value) {
        this._this.setUTCSeconds(value);
    }
    get milliseconds() {
        return this._this.getUTCMilliseconds();
    }
    set milliseconds(value) {
        this._this.setUTCMilliseconds(value);
    }
    get monthString() {
        return this._this.locale.getMonthString(this.month);
    }
    get genitiveMonthString() {
        return this._this.locale.getMonthString(this.month, true);
    }
    get dayString() {
        return this._this.locale.getDayString(this.day);
    }
    get dateString() {
        const year = String(this.fullYear);
        const month = ('00' + String(this.month + 1)).slice(-2);
        const date = ('00' + String(this.date).padStart(2, '0')).slice(-2);
        return `${year}-${month}-${date}`;
    }
    get timeString() {
        const hours = ('00' + String(this.hours)).slice(-2);
        const minutes = ('00' + String(this.minutes)).slice(-2);
        const seconds = ('00' + String(this.seconds)).slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    }
    setMidnight() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
    }
    toNumber() {
        return this._this.time;
    }
    toString() {
        return this._this.toUTCString();
    }
    toJSON() {
        return this._this.iso;
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'default':
                return this.valueOf();
            case 'number':
                return this.toNumber();
            case 'string':
                return this.toString();
            default:
                throw new TypeError('Cannot convert Timestamp.UTC value to unknown value');
        }
    }
}

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/timestamp/locale/en.ts
class EN {
    constructor() { }
    [Symbol.toStringTag]() {
        return 'EN';
    }
    static getMonthString(month, genitive) {
        return this.MONTHS[month].title;
    }
    static getDayString(month, genitive) {
        return this.DAYS[month].title;
    }
}
EN.MONTHS = [
    { id: 0, title: 'January' },
    { id: 1, title: 'February' },
    { id: 2, title: 'March' },
    { id: 3, title: 'April' },
    { id: 4, title: 'May' },
    { id: 5, title: 'June' },
    { id: 6, title: 'July' },
    { id: 7, title: 'August' },
    { id: 8, title: 'September' },
    { id: 9, title: 'October' },
    { id: 10, title: 'November' },
    { id: 11, title: 'December' },
];
EN.DAYS = [
    { id: 0, title: 'Sunday' },
    { id: 1, title: 'Monday' },
    { id: 2, title: 'Tuesday' },
    { id: 3, title: 'Wednesday' },
    { id: 4, title: 'Thursday' },
    { id: 5, title: 'Friday' },
    { id: 6, title: 'Saturday' },
];

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/timestamp/locale/ru.ts
class RU {
    constructor() { }
    [Symbol.toStringTag]() {
        return 'RU';
    }
    static getMonthString(month, genitive = false) {
        return this.MONTHS[month][genitive ? 'genitive' : 'title'];
    }
    static getDayString(month, genitive) {
        return this.DAYS[month].title;
    }
}
RU.MONTHS = [
    { id: 0, title: 'Январь', genitive: 'Января' },
    { id: 1, title: 'Февраль', genitive: 'Февраля' },
    { id: 2, title: 'Март', genitive: 'Марта' },
    { id: 3, title: 'Апрель', genitive: 'Апреля' },
    { id: 4, title: 'Май', genitive: 'Мая' },
    { id: 5, title: 'Июнь', genitive: 'Июня' },
    { id: 6, title: 'Июль', genitive: 'Июля' },
    { id: 7, title: 'Август', genitive: 'Августа' },
    { id: 8, title: 'Сентябрь', genitive: 'Сентября' },
    { id: 9, title: 'Октябрь', genitive: 'Октября' },
    { id: 10, title: 'Ноябрь', genitive: 'Ноября' },
    { id: 11, title: 'Декабрь', genitive: 'Декабря' },
];
RU.DAYS = [
    { id: 0, title: 'Воскресение' },
    { id: 1, title: 'Понедельник' },
    { id: 2, title: 'Вторник' },
    { id: 3, title: 'Среда' },
    { id: 4, title: 'Четверг' },
    { id: 5, title: 'Пятница' },
    { id: 6, title: 'Суббота' },
];

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/timestamp/locale/locale.ts


const Locale = { EN: EN, RU: RU };

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/timestamp/locale/index.ts


// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/timestamp/timestamp.ts


class timestamp_Timestamp extends Date {
    constructor(value = Date.now(), locale = timestamp_Timestamp.Locale.RU) {
        super(value);
        this.locale = locale;
        if (Number.isNaN(this.getTime()))
            throw new TypeError('Date is invalid');
    }
    get fullYear() {
        return this.getFullYear();
    }
    set fullYear(value) {
        this.setFullYear(value);
    }
    get month() {
        return this.getMonth();
    }
    set month(value) {
        this.setMonth(value);
    }
    get date() {
        return this.getDate();
    }
    set date(value) {
        this.setDate(value);
    }
    get day() {
        return this.getDay();
    }
    get hours() {
        return this.getHours();
    }
    set hours(value) {
        this.setHours(value);
    }
    get minutes() {
        return this.getMinutes();
    }
    set minutes(value) {
        this.setMinutes(value);
    }
    get seconds() {
        return this.getSeconds();
    }
    set seconds(value) {
        this.setSeconds(value);
    }
    get milliseconds() {
        return this.getMilliseconds();
    }
    set milliseconds(value) {
        this.setMilliseconds(value);
    }
    get UTC() {
        return new UTC(this);
    }
    get monthString() {
        return this.locale.getMonthString(this.month);
    }
    get genitiveMonthString() {
        return this.locale.getMonthString(this.month, true);
    }
    get dayString() {
        return this.locale.getDayString(this.day);
    }
    get dateString() {
        const year = String(this.fullYear);
        const month = ('00' + String(this.month + 1)).slice(-2);
        const date = ('00' + String(this.date)).slice(-2);
        return `${year}-${month}-${date}`;
    }
    get timeString() {
        const hours = ('00' + String(this.hours)).slice(-2);
        const minutes = ('00' + String(this.minutes)).slice(-2);
        const seconds = ('00' + String(this.seconds)).slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    }
    get time() {
        return this.getTime();
    }
    set time(value) {
        this.setTime(value);
    }
    get unux() {
        return this.getTime() / 1000 | 0;
    }
    set unix(value) {
        this.setTime(value * 1000);
    }
    get timezoneOffset() {
        return this.getTimezoneOffset();
    }
    get timezone() {
        let offset = this.timezoneOffset;
        let str = '-';
        if (offset < 0) {
            offset = -1 * offset;
            str = '+';
        }
        str += ('00' + String(Math.floor(offset / 60))).slice(-2);
        str += ':';
        str += ('00' + String(Math.round((offset % 60) * 100))).slice(-2);
        return str;
    }
    get iso() {
        return this.toISOString();
    }
    setMidnight() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
    }
    compare(input, { ignoreTime = false, ignoreMilliseconds = true, } = {}) {
        const other = new Date(input);
        if (Number.isNaN(other.getTime()))
            throw new TypeError('Comparable date is invalid');
        let a = this.getUTCFullYear();
        let b = other.getUTCFullYear();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        a = this.getUTCMonth();
        b = other.getUTCMonth();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        a = this.getUTCDate();
        b = other.getUTCDate();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        if (ignoreTime)
            return 0;
        a = this.getUTCHours();
        b = other.getUTCHours();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        a = this.getUTCMinutes();
        b = other.getUTCMinutes();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        a = this.getUTCSeconds();
        b = other.getUTCSeconds();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        if (ignoreMilliseconds)
            return 0;
        a = this.getUTCMilliseconds();
        b = other.getUTCMilliseconds();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        return 0;
    }
    toHRString(atDateInput = new Date()) {
        const atDate = new Date(atDateInput);
        let out = '';
        if (this.compare(atDate, { ignoreTime: true }) === 0)
            out += 'Сегодня';
        else {
            atDate.setDate(atDate.getDate() - 1);
            if (this.compare(atDate, { ignoreTime: true }) === 0)
                out += 'Вчера';
            else {
                out += String(this.getDate());
                out += ' ' + this.genitiveMonthString;
                const year = this.getFullYear();
                if (year !== atDate.getFullYear())
                    out += ' ' + String(year);
            }
        }
        out += ' ' + String(this.getHours());
        out += ':' + ('00' + String(this.getMinutes())).slice(-2);
        return out;
    }
    get HRString() {
        return this.toHRString();
    }
    valueOf() {
        return new Date(this.time);
    }
    toNumber() {
        return this.time;
    }
    toString() {
        return this.iso;
    }
    toJSON() {
        return this.iso;
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'default':
                return this.valueOf();
            case 'number':
                return this.toNumber();
            case 'string':
                return this.toString();
            default:
                throw new TypeError('Cannot convert Timestamp value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Timestamp';
    }
}
timestamp_Timestamp.Locale = Locale;

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/core/timestamp/index.ts


// CONCATENATED MODULE: ./pipes/timestamp/timestamp.ts


class timestamp_TimestampPipe {
    transform(input, type = 'ISO') {
        let ts;
        try {
            ts = new timestamp_Timestamp(input);
        }
        catch (error) {
            console.error('TimestampPipe construct error', input);
            return '';
        }
        switch (type) {
            case 'HR':
                return ts.HRString;
            case 'DATE':
                return ts.UTC.dateString;
            case 'ISO':
            default:
                return ts.iso;
        }
    }
}

// CONCATENATED MODULE: ./pipes/timestamp/index.ts


// CONCATENATED MODULE: ./pipes/index.ts






// CONCATENATED MODULE: ./services/meta/meta.service.ts



class meta_service_MetaService {
    constructor(_meta, _title) {
        this._meta = _meta;
        this._title = _title;
    }
    setMetaTags({ title = '', description = '', keywords = '', ogTitle = '', ogDescription = '', ogImage = 0, } = {}) {
        this._title.setTitle(title || META_DEFAULT_TITLE);
        this._meta.addTag({ name: 'title', content: title || META_DEFAULT_TITLE });
        this._meta.addTag({ name: 'description', content: description || META_DEFAULT_DESCRIPTION });
        this._meta.addTag({ name: 'keywords', content: keywords || META_DEFAULT_KEYWORDS });
        const ogImagePath = image_pipe_ImagePipe.transform(ogImage, true);
        this._meta.addTag({ property: 'og:type', content: 'website' });
        this._meta.addTag({ property: 'og:title', content: ogTitle || title || META_DEFAULT_TITLE });
        this._meta.addTag({ property: 'og:description', content: ogDescription || description || META_DEFAULT_DESCRIPTION });
        this._meta.addTag({ property: 'og:image', content: ogImagePath });
        this._meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
        this._meta.addTag({ name: 'twitter:site', content: '@bitjournal_io' });
        this._meta.addTag({ name: 'twitter:creator', content: '@bitjournal_io' });
        this._meta.addTag({ name: 'twitter:title', content: ogTitle || title || META_DEFAULT_TITLE });
        this._meta.addTag({ name: 'twitter:description', content: ogDescription || description || META_DEFAULT_DESCRIPTION });
        this._meta.addTag({ name: 'twitter:image', content: ogImagePath });
    }
}

// CONCATENATED MODULE: ./services/meta/index.ts


// CONCATENATED MODULE: ./services/notification/notification.service.ts


class notification_service_NotificationService {
    constructor(platformId) {
        this._allowNotification = false;
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
    }
    init() {
        if (this._isServer)
            return;
        if (!window || !('Notification' in window))
            return;
        switch (window.Notification.permission) {
            case 'granted':
                this._allowNotification = true;
                return;
            case 'denied':
                this._allowNotification = false;
                return;
            default:
                Notification.requestPermission(permission => {
                    this._allowNotification = permission === 'granted';
                });
        }
    }
    load() {
        return Promise.resolve();
    }
}
function NotificationServiceFactory(notificationService) {
    return () => notificationService.load();
}

// CONCATENATED MODULE: ./services/notification/index.ts


// CONCATENATED MODULE: ./services/youtube/youtube.service.ts








class youtube_service_YouTubeService {
    constructor(_http, _message) {
        this._http = _http;
        this._message = _message;
    }
    getVideoData(ids = []) {
        if (ids.length <= 0)
            return Observable["Observable"].of(new Array());
        const query = YOUTUBE_DATA_URL.replace(/\{\{\s*IDS\s*\}\}/, ids.join(','));
        return this._http.get(query)
            .catch(error => {
            this._message.message(`YouTube: ${String(error)}`);
            return Observable["Observable"].of(null);
        })
            .map(item => item && item.items || null)
            .filter(item => Array.isArray(item));
    }
}

// CONCATENATED MODULE: ./services/youtube/index.ts


// CONCATENATED MODULE: ./services/index.ts











// CONCATENATED MODULE: ./components/auth/auth-dialog.component.ts




class auth_dialog_component_AuthDialogComponent {
    constructor(dialogRef, fb, user) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.user = user;
        this.dialogRef.disableClose = true;
        this.authForm = this.fb.group({
            email: ['', [esm5_forms["p" /* Validators */].required, esm5_forms["p" /* Validators */].email]],
            password: ['', [esm5_forms["p" /* Validators */].required]],
        });
    }
    async onSubmit() {
        if (!this.authForm.valid)
            return;
        this.user.login(this.authForm.value).subscribe(result => {
            if (!result)
                this.authForm.patchValue({ password: '' });
        });
    }
}

// CONCATENATED MODULE: ./components/auth/index.ts


// CONCATENATED MODULE: ./components/coin/coin.component.ts









const COLUMNS = [
    'title',
    'price',
    'high24Hour',
    'low24Hour',
];
const COINSNAPSHOT_USD_URL = (symbol) => `/cc/?fsym=${symbol}&tsym=USD`;
const coin_component__0 = COINSNAPSHOT_USD_URL;
class coin_component_CoinComponent {
    constructor(platformId, _http, _sanitizationService) {
        this._http = _http;
        this._sanitizationService = _sanitizationService;
        this.showPrice = 'USD';
        this._value = null;
        this.marketsSource = new material_es5["a" /* MatTableDataSource */](new Array());
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
    }
    set value(value) {
        this._value = value;
        this.updateMarketsTable();
    }
    get value() {
        return this._value;
    }
    get displayedColumns() {
        return COLUMNS;
    }
    ngAfterViewInit() {
        this.marketsSource.sort = this.sort;
    }
    updateMarketsTable() {
        if (!this._value)
            return;
        this.chartURL = this._sanitizationService.bypassSecurityTrustResourceUrl(`/chart.html#${this._value.symbol}`);
        if (this._isServer)
            return;
        const symbol = this._value.symbol;
        const url = COINSNAPSHOT_USD_URL(symbol);
        this._http
            .get(url)
            .catch(error => Observable["Observable"].of(null))
            .filter(item => item !== null)
            .subscribe(result => {
            if (!result.Data || !Array.isArray(result.Data.Exchanges))
                return;
            this.marketsSource.data = result.Data
                .Exchanges
                .filter((item) => {
                return item.TOSYMBOL === 'USD'
                    && parseInt(item.LASTUPDATE) > 1514000000;
            })
                .map((item) => ({
                title: item.MARKET,
                price: Math.round(parseFloat(item.PRICE) * 1000) / 1000,
                high24Hour: Math.round(parseFloat(item.HIGH24HOUR) * 1000) / 1000,
                low24Hour: Math.round(parseFloat(item.LOW24HOUR) * 1000) / 1000,
            }));
        });
    }
}


// CONCATENATED MODULE: ./components/coin/index.ts


// CONCATENATED MODULE: ./components/coins-ribbon/coins-ribbon.component.ts


class CoinsRsibbonComponent {
    constructor(_coin) {
        this._coin = _coin;
        this.coins = this._coin.hot;
    }
}

// CONCATENATED MODULE: ./components/coins-ribbon/index.ts


// CONCATENATED MODULE: ./components/footer/footer.component.ts



class footer_component_FooterComponent {
    constructor(_ext) {
        this._ext = _ext;
    }
    addVKWidget() {
        this._ext.vk.then(VK => {
            if (!VK)
                return;
            VK.Widgets.Group('vk_group_vidget', {
                mode: 1,
                no_cover: 1,
                color2: '24292e',
            }, VK_SOCIAL_ID);
        });
    }
    ngAfterViewInit() {
        this.addVKWidget();
    }
}

// CONCATENATED MODULE: ./components/footer/index.ts


// CONCATENATED MODULE: ./components/header/header.component.ts


class HeaderComponent {
    constructor(_router) {
        this._router = _router;
        this.navBarVisibility = false;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/header/index.ts


// CONCATENATED MODULE: ./components/layout/layout.component.ts



class layout_component_LayoutComponent {
    constructor(platformId, _router) {
        this._router = _router;
        this._isServer = Object(common["u" /* isPlatformServer */])(platformId);
        this._router
            .events
            .filter(event => (event instanceof router["d" /* NavigationEnd */]))
            .subscribe(event => {
            if (this._isServer)
                return;
            window.scrollTo(0, 0);
        });
    }
}

// CONCATENATED MODULE: ./components/layout/index.ts


// CONCATENATED MODULE: ./components/loader/loader.component.ts


class LoaderComponent {
    constructor(_loaderService) {
        this._loaderService = _loaderService;
    }
    ngOnInit() {
        this.subscription = this._loaderService
            .loaderState
            .subscribe((state) => this.show = state);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

// CONCATENATED MODULE: ./components/loader/index.ts


// CONCATENATED MODULE: ./components/no-content/no-content.component.ts

class NoContentComponent {
}

// CONCATENATED MODULE: ./components/no-content/index.ts


// CONCATENATED MODULE: ./components/pages/101/page-101.component.ts

class Page101Component {
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/101/index.ts


// CONCATENATED MODULE: ./components/pages/404/page-404.component.ts


class Page404Component {
    constructor(_context) {
        this._context = _context;
    }
    ngOnInit() {
        this._context.status = 404;
    }
}

// CONCATENATED MODULE: ./components/pages/404/index.ts


// CONCATENATED MODULE: ./components/pages/article/page-article.component.ts







const API_PUBLICATIONS = 'publications';
const ITEM_KEY = Object(platform_browser["m" /* makeStateKey */])('page-article-item');
const PUBLICATIONS_KEY = Object(platform_browser["m" /* makeStateKey */])('page-article-publications');
class page_article_component_PageArticleComponent {
    constructor(platformId, _tstate, _context, _route, _api, _meta, _loaderService) {
        this._tstate = _tstate;
        this._context = _context;
        this._route = _route;
        this._api = _api;
        this._meta = _meta;
        this._loaderService = _loaderService;
        this.showLoader = false;
        this.isServer = Object(common["u" /* isPlatformServer */])(platformId);
        _route.params.subscribe(params => {
            this.initData(params);
        });
    }
    setMetaTags(item) {
        this._meta.setMetaTags({
            title: item.title,
            description: item.description,
            ogTitle: item.ogTitle,
            ogDescription: item.ogDescription,
            ogImage: item.ogImage || item.image || undefined
        });
    }
    initData(params) {
        this._loaderService.show();
        const date = String(params['date']).trim();
        const url = String(params['url']).trim();
        if (this._tstate.hasKey(ITEM_KEY)) {
            const item = this._tstate.get(ITEM_KEY, null);
            this.item = Observable["Observable"].of(item);
            this._loaderService.hide();
            this._tstate.remove(ITEM_KEY);
        }
        else {
            this.item = this._api
                .get(`/${API_PUBLICATIONS}/${date}/${url}`)
                .map(item => {
                this.setMetaTags(item);
                if (this.isServer)
                    this._tstate.set(ITEM_KEY, item);
                this._loaderService.hide();
                return item;
            });
        }
        if (this._tstate.hasKey(PUBLICATIONS_KEY)) {
            const items = this._tstate.get(PUBLICATIONS_KEY, new Array());
            this.publications = Observable["Observable"].of(items);
            this._tstate.remove(PUBLICATIONS_KEY);
        }
        else {
            this.publications = this._api
                .get(`/${API_PUBLICATIONS}?limit=12`)
                .map(items => {
                if (this.isServer)
                    this._tstate.set(PUBLICATIONS_KEY, items);
                return items;
            });
        }
    }
}

// CONCATENATED MODULE: ./components/pages/article/index.ts


// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/common/publication/environment.ts
const PUBLICATIONS_API_PATH = '/publications';
const PUBLICATIONS_DATATABLE = 'publications';

// CONCATENATED MODULE: C:/Users/Nastya/documents/bitjournal/common/publication/index.ts


// CONCATENATED MODULE: ./components/pages/coin/page-coin.component.ts






class page_coin_component_PageCoinComponent {
    constructor(_route, _api, _meta, _loaderService) {
        this._route = _route;
        this._api = _api;
        this._meta = _meta;
        this._loaderService = _loaderService;
        _route.params.subscribe(params => {
            this.onRoute(params);
        });
    }
    onRoute(params) {
        const symbol = params.symbol;
        this.item = this._api
            .get(`${COINS_API_PATH}/${symbol}`);
        this.publications = this._api
            .get(`${PUBLICATIONS_API_PATH}?limit=50`);
    }
}

// CONCATENATED MODULE: ./components/pages/coin/index.ts


// CONCATENATED MODULE: ./components/pages/coins/meta.ts
const META = {
    title: 'Курсы криптовалют (bitcoin, ethereum и другие) на сегодня',
    description: 'Курсы всех криптовалют, их капитализация и графики изменения за всю историю на BitJournal — курс биткоин, ethereum, ripple и других валют',
    keywords: 'курс биткоин, курс эфириум, курс рипл, курсы криптовалют, капитализация криптовалют, капитализация биткоин'
};

// CONCATENATED MODULE: ./components/pages/coins/page-coins.component.ts







const page_coins_component_COLUMNS = [
    'icon',
    'title',
    'priceUSD',
    'capitalizationUSD',
    'priceRUB',
    'capitalizationRUB',
    'priceBTC',
    'change24h',
    'rating',
];
class page_coins_component_PageCoinsComponent {
    constructor(_api, _meta, _loaderService) {
        this._api = _api;
        this._meta = _meta;
        this._loaderService = _loaderService;
        this.filtredPrice = 'RUB';
        this.dataSource = new material_es5["a" /* MatTableDataSource */](new Array());
    }
    get displayedColumns() {
        return page_coins_component_COLUMNS.filter(item => item.indexOf(this.filtredPrice) < 0);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
    ngOnInit() {
        this._loaderService.show();
        this._meta.setMetaTags(META);
        this._api
            .get(`${COINS_API_PATH}`)
            .subscribe(items => {
            this.dataSource.data = items
                .map(item => {
                item.capitalizationUSD = (item.availableSupply || 0) * (item.priceUSD || 0);
                return item;
            });
            this._loaderService.hide();
        });
        this.publications = this._api
            .get(`${PUBLICATIONS_API_PATH}?limit=50`);
    }
}

// CONCATENATED MODULE: ./components/pages/coins/index.ts


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/rxjs/add/observable/forkJoin.js
var forkJoin = __webpack_require__(281);
var forkJoin_default = /*#__PURE__*/__webpack_require__.n(forkJoin);

// CONCATENATED MODULE: ./components/pages/main/page-main.component.ts






class page_main_component_PageMainComponent {
    constructor(_api, _meta, _loaderService) {
        this._api = _api;
        this._meta = _meta;
        this._loaderService = _loaderService;
    }
    ngOnInit() {
        this._loaderService.show();
        this._meta.setMetaTags();
        this.publications_weight_0 = this._api
            .get(`${PUBLICATIONS_API_PATH}`, {
            weight: '0',
            limit: '20'
        });
        this.publications_weight_12 = this._api
            .get(`${PUBLICATIONS_API_PATH}`, {
            weight: '1,2',
            limit: '9'
        });
        this.publications = Observable["Observable"].forkJoin(this.publications_weight_0, this.publications_weight_12)
            .map(([s1, s2]) => {
            this._loaderService.hide();
            const result = [...s1, ...s2];
            result.forEach(item => console.dir(item));
            return result;
        });
    }
    ngAfterViewInit() {
        this.publicationsList.changes.subscribe(t => {
            console.dir(t);
            console.dir(this.publicationsList);
        });
    }
}

// CONCATENATED MODULE: ./components/pages/main/index.ts


// CONCATENATED MODULE: ./components/pages/privacy/page-privacy.component.ts

class PagePrivacyComponent {
}

// CONCATENATED MODULE: ./components/pages/privacy/index.ts


// CONCATENATED MODULE: ./components/pages/index.ts








// CONCATENATED MODULE: ./components/pub-card/pub-card.component.ts

class PubCardComponent {
}

// CONCATENATED MODULE: ./components/pub-card/index.ts


// CONCATENATED MODULE: ./components/pub-line/pub-line.component.ts

class PubLineComponent {
}

// CONCATENATED MODULE: ./components/pub-line/index.ts


// CONCATENATED MODULE: ./components/share/share.component.ts


class share_component_ShareComponent {
    get fbUrl() {
        return SHARE_FB.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get googleUrl() {
        return SHARE_GOOGLE.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get telegramUrl() {
        return SHARE_TELEGRAM.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get twitterUrl() {
        return SHARE_TWITTER.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get viberUrl() {
        return SHARE_VIBER.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get vkUrl() {
        return SHARE_VK.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get whatsappUrl() {
        return SHARE_WHATSAPP.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get url() {
        let url = Array.isArray(this.value) ? this.value.join('/') : String(this.value);
        const match = /^(?:[\/\s]+)?(.*)/.exec(url);
        url = match && match[1] || '';
        if (!/^http/i.test(url))
            url = `https://${DOMAIN_PORTAL}/${url}`;
        return encodeURIComponent(url);
    }
}

// CONCATENATED MODULE: ./components/share/index.ts


// CONCATENATED MODULE: ./components/tradingview/tradingview.component.ts

class TradingViewComponent {
    constructor() {
        this.value = null;
    }
    ngAfterViewInit() {
        const element = this.tradingView.nativeElement;
        element.innerHTML = '';
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.onload = function () {
            const script = document.createElement('script');
            script.type = 'text/javascript';
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
      `;
            element.appendChild(script);
        };
        element.appendChild(script);
    }
}

// CONCATENATED MODULE: ./components/tradingview/index.ts


// CONCATENATED MODULE: ./components/video-ribbon/video-ribbon.component.ts




const API_BASE = '/video';
class VideoRibbonComponent {
    constructor(_router, _apiService, _youTubeService) {
        this._router = _router;
        this._apiService = _apiService;
        this._youTubeService = _youTubeService;
    }
    createVideoRibbonItem(item) {
        return {
            id: item.id,
            href: 'https://www.youtube.com/watch?v=' + item.id,
            thumb: item.snippet.thumbnails.default.url,
            date: new Date(item.snippet.publishedAt),
            title: item.snippet.title,
            duration: item.contentDetails.duration,
            view: parseInt(item.statistics.viewCount) || 0,
            like: parseInt(item.statistics.likeCount) || 0,
            dislike: parseInt(item.statistics.dislikeCount) || 0,
            comment: parseInt(item.statistics.commentCount) || 0,
        };
    }
    ngOnInit() {
        this.items = this._apiService
            .get(API_BASE)
            .map(items => items.map(item => item.id))
            .map(items => this._youTubeService.getVideoData(items))
            .mergeAll()
            .map(items => items.map(item => this.createVideoRibbonItem(item)));
    }
}

// CONCATENATED MODULE: ./components/video-ribbon/index.ts


// CONCATENATED MODULE: ./components/index.ts
















// CONCATENATED MODULE: ./app.components.ts

const COMPONENTS = [
    ArticleComponent,
    auth_dialog_component_AuthDialogComponent,
    coin_component_CoinComponent,
    CoinsRsibbonComponent,
    footer_component_FooterComponent,
    HeaderComponent,
    LoaderComponent,
    NoContentComponent,
    Page101Component,
    Page404Component,
    page_article_component_PageArticleComponent,
    page_coin_component_PageCoinComponent,
    page_coins_component_PageCoinsComponent,
    page_main_component_PageMainComponent,
    PagePrivacyComponent,
    PubCardComponent,
    PubLineComponent,
    share_component_ShareComponent,
    TradingViewComponent,
    VideoRibbonComponent,
];
const ENTRY_COMPONENTS = [
    auth_dialog_component_AuthDialogComponent,
];

// CONCATENATED MODULE: ./app.module.ts






const app_module__0 = NotificationServiceFactory, app_module__1 = ExternalServiceFactory;
class AppModule {
    constructor(notificationService, externalService) {
        notificationService.init();
        externalService.init();
    }
}


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/dialog/typings/index.ngfactory.js
var index_ngfactory = __webpack_require__(282);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/tooltip/typings/index.ngfactory.js
var typings_index_ngfactory = __webpack_require__(188);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/snack-bar/typings/index.ngfactory.js
var snack_bar_typings_index_ngfactory = __webpack_require__(283);

// CONCATENATED MODULE: ./components/pages/main/page-main.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var styles = [".bj-page-main__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}@media (min-width:600px){.bj-page-main__wrapper{padding:var(--indent-double) var(--indent-base)}}@media (min-width:1200px){.bj-page-main__wrapper{padding:var(--indent-double)}}.bj-page-main__row{width:100%;display:flex;justify-content:flex-start;align-items:stretch}.bj-page-main__col{flex:1 1 auto}.bj-page-main__aside{width:var(--aside-width);flex:0 0 var(--aside-width);margin-left:var(--indent-double);flex-direction:column;justify-content:flex-start;align-items:center;display:none}@media (min-width:700px){.bj-page-main__aside{display:flex}.bj-page-main__card--zero,.bj-pub-card.bj-page-main__card--zero{display:none}}.bj-page-main__card{margin-top:var(--indent-double)}.bj-page-main__card:first-child{margin-top:0}@supports (display:grid){@media (min-width:1000px){.bj-page-main__card{margin-top:0}.bj-page-main__card--wide{grid-column-end:span 2}.bj-page-main__col--grid{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:var(--indent-double);grid-row-gap:var(--indent-double);grid-auto-flow:dense}}@media (min-width:1200px){.bj-page-main__col--grid{grid-template-columns:1fr 1fr 1fr}}}"];


// CONCATENATED MODULE: ./components/pub-card/pub-card.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var pub_card_component_css_ngstyle_styles = [".bj-pub-card{display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start;max-width:100%;text-decoration:none;text-transform:none;color:var(--color-main);background:#fff;box-shadow:0 1px 1px rgba(0,0,0,.1);padding-bottom:var(--indent-base)}.bj-pub-card__figure{flex:0 0 100%;width:100%;min-height:66.66667vw;position:relative;margin:0;padding:0;background:#f6f6f6;display:flex;flex-direction:column;justify-content:space-between}@media (min-width:600px){.bj-pub-card__figure{min-height:250px}}.bj-pub-card__picture{position:absolute;left:0;top:0;right:0;bottom:0;height:100%;overflow:hidden;background:#f9f9f9}.bj-pub-card__picture,.bj-pub-card__picture img,.bj-pub-card__row{display:block;box-sizing:border-box;width:100%}.bj-pub-card__picture img{min-width:100%;min-height:100%;top:50%;left:50%;transform:translate(-50%,-50%) scale(1);transform-origin:center;transition:transform .5s linear;object-fit:cover;position:absolute}.bj-pub-card:hover .bj-pub-card__picture img{transform:translate(-50%,-50%) scale(1.05)}.bj-pub-card__picture:after{content:\"\";display:block;position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(36,41,46,0) 0,rgba(36,41,46,.1) 34%,rgba(36,41,46,.7))}.bj-pub-card__row{position:relative;padding:var(--indent-base) 0}.bj-pub-card__h2{margin:0 0 -.1em;font-family:inherit;font-size:1.5rem;line-height:1.35;color:#fff;text-shadow:0 0 2px rgba(36,41,46,.7)}.bj-pub-card__datetime,.bj-pub-card__h1,.bj-pub-card__h2{display:block;box-sizing:border-box;padding:0 var(--indent-base)}.bj-pub-card__h1{flex:0 0 100%;width:100%;margin:0;font-family:inherit;font-size:1.17rem;line-height:1.15;margin-top:var(--indent-half)}.bj-pub-card__datetime{margin-top:var(--indent-base);color:var(--color-gray);font-size:13px}.bj-pub-card__datetime i{margin-right:.5em}"];


// CONCATENATED MODULE: ./components/pub-card/pub-card.component.ngfactory.js
/** PURE_IMPORTS_START _pub_card.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_angular_common,_pub_card.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _pub_card.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_angular_common,_pub_card.component PURE_IMPORTS_END */






var styles_PubCardComponent = [pub_card_component_css_ngstyle_styles];
var RenderType_PubCardComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_PubCardComponent, data: {} });

function View_PubCardComponent_1(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 2, "figcaption", [["class", "bj-pub-card__row bj-pub-card__row--dark"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h2", [["class", "bj-pub-card__h2"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.bigTitle; _ck(_v, 2, 0, currVal_0); }); }
function View_PubCardComponent_0(_l) { return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_19" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 6, "figure", [["class", "bj-pub-card__figure"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 2, "picture", [["class", "bj-pub-card__picture"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_20" /* ɵppd */](5, 1), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 0, "figcaption", [["class", "bj-pub-card__row"]], null, null, null, null, null)), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_PubCardComponent_1)), core["_3" /* ɵdid */](8, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 5, "time", [["class", "bj-pub-card__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_20" /* ɵppd */](10, 1), (_l()(), core["_4" /* ɵeld */](11, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-clock-o"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](12, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](13, null, ["", ""])), core["_20" /* ɵppd */](14, 2), (_l()(), core["_4" /* ɵeld */](15, 0, null, null, 1, "h1", [["class", "bj-pub-card__h1"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](16, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = !!_co.value.bigTitle; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_16" /* ɵnov */](_v, 0), _co.value.image)); _ck(_v, 4, 0, currVal_0); var currVal_2 = core["_25" /* ɵunv */](_v, 9, 0, _ck(_v, 10, 0, core["_16" /* ɵnov */](_v, 1), _co.value.ts)); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_25" /* ɵunv */](_v, 13, 0, _ck(_v, 14, 0, core["_16" /* ɵnov */](_v, 1), _co.value.ts, "HR")); _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.value.title; _ck(_v, 16, 0, currVal_4); }); }
function View_PubCardComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-pub-card"]], null, null, null, View_PubCardComponent_0, RenderType_PubCardComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, PubCardComponent, [], null, null)], null, null); }
var PubCardComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".bj-pub-card", PubCardComponent, View_PubCardComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pub-line/pub-line.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var pub_line_component_css_ngstyle_styles = [".bj-pub-line{display:flex;margin-top:var(--indent-base);text-decoration:none;text-transform:none;color:var(--color-main);width:100%}.bj-pub-line__picture{display:block;position:relative;width:60px;min-width:60px;max-width:60px;height:60px;min-height:60px;max-height:60px;flex:0 0 60px;border-radius:50%;overflow:hidden;margin-right:var(--indent-base);background:#f9f9f9}.bj-pub-line__picture img{display:block;box-sizing:border-box;position:absolute;min-width:100%;min-height:100%;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover;border-radius:50%}.bj-pub-line__data{flex:1 1 auto}.bj-pub-line__datetime,.bj-pub-line__h1{display:block;box-sizing:border-box;padding:0}.bj-pub-line__datetime{color:var(--color-gray);font-size:13px;margin:0}.bj-pub-line__datetime i{margin-right:.5em}.bj-pub-line__h1{width:100%;margin:5px 0 0;font-family:inherit;font-size:1rem;font-weight:500;line-height:1.4}"];


// CONCATENATED MODULE: ./components/pub-line/pub-line.component.ngfactory.js
/** PURE_IMPORTS_START _pub_line.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_pub_line.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _pub_line.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_pub_line.component PURE_IMPORTS_END */





var styles_PubLineComponent = [pub_line_component_css_ngstyle_styles];
var RenderType_PubLineComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_PubLineComponent, data: {} });

function View_PubLineComponent_0(_l) { return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_19" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 2, "picture", [["class", "bj-pub-line__picture"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_20" /* ɵppd */](4, 1), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 8, "div", [["class", "bj-pub-line__data"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 5, "time", [["class", "bj-pub-line__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_20" /* ɵppd */](7, 1), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-clock-o"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](10, null, ["", ""])), core["_20" /* ɵppd */](11, 2), (_l()(), core["_4" /* ɵeld */](12, 0, null, null, 1, "h1", [["class", "bj-pub-line__h1"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](13, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 3, 0, _ck(_v, 4, 0, core["_16" /* ɵnov */](_v, 0), _co.value.image)); _ck(_v, 3, 0, currVal_0); var currVal_1 = core["_25" /* ɵunv */](_v, 6, 0, _ck(_v, 7, 0, core["_16" /* ɵnov */](_v, 1), _co.value.ts)); _ck(_v, 6, 0, currVal_1); var currVal_2 = core["_25" /* ɵunv */](_v, 10, 0, _ck(_v, 11, 0, core["_16" /* ɵnov */](_v, 1), _co.value.ts, "HR")); _ck(_v, 10, 0, currVal_2); var currVal_3 = _co.value.title; _ck(_v, 13, 0, currVal_3); }); }
function View_PubLineComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-pub-line"]], null, null, null, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, PubLineComponent, [], null, null)], null, null); }
var PubLineComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".bj-pub-line", PubLineComponent, View_PubLineComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pages/main/page-main.component.ngfactory.js
/** PURE_IMPORTS_START _page_main.component.css.ngstyle,_angular_core,_.._pub_card_pub_card.component.ngfactory,_angular_router,_angular_common,_.._pub_card_pub_card.component,_.._pub_line_pub_line.component.ngfactory,_.._pub_line_pub_line.component,_.._.._pipes_order_order,_.._.._pipes_timestamp_timestamp,_page_main.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_main.component.css.ngstyle,_angular_core,_.._pub_card_pub_card.component.ngfactory,_angular_router,_angular_common,_.._pub_card_pub_card.component,_.._pub_line_pub_line.component.ngfactory,_.._pub_line_pub_line.component,_.._.._pipes_order_order,_.._.._pipes_timestamp_timestamp,_page_main.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */














var styles_PageMainComponent = [styles];
var RenderType_PageMainComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMainComponent, data: {} });

function View_PageMainComponent_1(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 16777216, [[1, 3]], null, 4, "a", [["class", "bj-pub-card bj-page-main__card"]], [[2, "bj-page-main__card--wide", null], [2, "bj-page-main__card--zero", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubCardComponent_0, RenderType_PubCardComponent)), core["_3" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_20" /* ɵppd */](2, 2), core["_18" /* ɵpad */](3, 3), core["_3" /* ɵdid */](4, 49152, [["publicationsList", 4]], 0, PubCardComponent, [], { value: [0, "value"] }, null), (_l()(), core["Z" /* ɵand */](0, null, null, 0))], function (_ck, _v) { var currVal_4 = _ck(_v, 3, 0, "/", core["_25" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_16" /* ɵnov */](_v.parent, 1), _v.context.$implicit.ts, "DATE")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_4); var currVal_5 = _v.context.$implicit; _ck(_v, 4, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.weight > 1); var currVal_1 = (_v.context.$implicit.weight === 0); var currVal_2 = core["_16" /* ɵnov */](_v, 1).target; var currVal_3 = core["_16" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); });
}
function View_PageMainComponent_2(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-line"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_3" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_20" /* ɵppd */](2, 2), core["_18" /* ɵpad */](3, 3), core["_3" /* ɵdid */](4, 49152, null, 0, PubLineComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/", core["_25" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_16" /* ɵnov */](_v.parent, 1), _v.context.$implicit.ts, "DATE")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).target; var currVal_1 = core["_16" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageMainComponent_0(_l) { return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, OrderPipe, []), core["_19" /* ɵpid */](0, timestamp_TimestampPipe, []), core["_22" /* ɵqud */](671088640, 1, { publicationsList: 1 }), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 12, "main", [["class", "bj-page-main__wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 11, "div", [["class", "bj-page-main__row"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 4, "div", [["class", "bj-page-main__col bj-page-main__col--grid"]], null, null, null, null, null)), (_l()(), core["Z" /* ɵand */](16777216, null, null, 3, null, View_PageMainComponent_1)), core["_3" /* ɵdid */](7, 802816, null, 0, common["k" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_19" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), core["_20" /* ɵppd */](9, 2), (_l()(), core["_4" /* ɵeld */](10, 0, null, null, 5, "aside", [["class", "bj-page-main__aside"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](11, 0, null, null, 1, "h1", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["Z" /* ɵand */](16777216, null, null, 2, null, View_PageMainComponent_2)), core["_3" /* ɵdid */](14, 802816, null, 0, common["k" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_19" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 7, 0, _ck(_v, 9, 0, core["_16" /* ɵnov */](_v, 0), core["_25" /* ɵunv */](_v, 7, 0, core["_16" /* ɵnov */](_v, 8).transform(_co.publications)), "ts")); _ck(_v, 7, 0, currVal_0); var currVal_1 = core["_25" /* ɵunv */](_v, 14, 0, core["_16" /* ɵnov */](_v, 15).transform(_co.publications_weight_0)); _ck(_v, 14, 0, currVal_1); }, null); }
function View_PageMainComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "page-main", [["class", "page"]], null, null, null, View_PageMainComponent_0, RenderType_PageMainComponent)), core["_3" /* ɵdid */](1, 4308992, null, 0, page_main_component_PageMainComponent, [api_service_APIService, meta_service_MetaService, loader_service_LoaderService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMainComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("page-main.page", page_main_component_PageMainComponent, View_PageMainComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/101/page-101.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_101_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/pages/101/page-101.component.ngfactory.js
/** PURE_IMPORTS_START _page_101.component.css.ngstyle,_angular_core,_page_101.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_101.component.css.ngstyle,_angular_core,_page_101.component PURE_IMPORTS_END */



var styles_Page101Component = [page_101_component_css_ngstyle_styles];
var RenderType_Page101Component = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_Page101Component, data: {} });

function View_Page101Component_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["101"]))], null, null); }
function View_Page101Component_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "page-101", [], null, null, null, View_Page101Component_0, RenderType_Page101Component)), core["_3" /* ɵdid */](1, 114688, null, 0, Page101Component, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Page101ComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("page-101", Page101Component, View_Page101Component_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/privacy/page-privacy.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_privacy_component_css_ngstyle_styles = [".bj-page-privacy__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}@media (min-width:600px){.bj-page-privacy__wrapper{padding:var(--indent-double) var(--indent-base)}}@media (min-width:1200px){.bj-page-privacy__wrapper{padding:var(--indent-double)}}.bj-page-privacy__content{display:block;width:100%;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,.1);padding:var(--indent-double) 0}.bj-page-privacy__content__h1{font-size:1.5rem}"];


// CONCATENATED MODULE: ./components/pages/privacy/page-privacy.component.ngfactory.js
/** PURE_IMPORTS_START _page_privacy.component.css.ngstyle,_angular_core,_page_privacy.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_privacy.component.css.ngstyle,_angular_core,_page_privacy.component PURE_IMPORTS_END */



var styles_PagePrivacyComponent = [page_privacy_component_css_ngstyle_styles];
var RenderType_PagePrivacyComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_PagePrivacyComponent, data: {} });

function View_PagePrivacyComponent_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 83, "main", [["class", "bj-page-privacy__wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 82, "article", [["class", "bj-page-privacy__content article"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 1, "h1", [["class", "bj-page-privacy__content__h1"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"])), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442, \u043A\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C BitJournal inc. \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442, \u0445\u0440\u0430\u043D\u0438\u0442 \u0438 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0443\u044E \u043E\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435 "])), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 1, "a", [["href", "https://bitjournal.io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["https://bitjournal.io"])), (_l()(), core["_24" /* ɵted */](-1, null, [" (\"\u0421\u0430\u0439\u0442\"). \u0414\u0430\u043D\u043D\u0430\u044F \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u0438 \u043A \u0421\u0430\u0439\u0442\u0443, \u0432\u0441\u0435\u043C \u043F\u043E\u0434\u0434\u043E\u043C\u0435\u043D\u0430\u043C \u0421\u0430\u0439\u0442\u0430 \u0438 \u0432\u0441\u0435\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u043C \u0438 \u0443\u0441\u043B\u0443\u0433\u0430\u043C, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u043C BitJournal inc."])), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u042D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0442\u043E\u043C, \u043A\u0430\u043A\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043C\u044B \u0438\u043B\u0438 \u0442\u0440\u0435\u0442\u044C\u0438 \u043B\u0438\u0446\u0430 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u0412\u044B \u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435\u0441\u044C \u043D\u0430\u0448\u0438\u043C \u0421\u0430\u0439\u0442\u043E\u043C. \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F, \u0447\u0442\u043E \u044D\u0442\u0438 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u0412\u0430\u043C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u043D\u0430\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0441\u0435\u0431\u0435."])), (_l()(), core["_4" /* ɵeld */](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043D\u0430 \u044D\u0442\u043E\u0442 \u0421\u0430\u0439\u0442 \u0438 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u0443\u044E \u0441 \u0435\u0433\u043E \u043F\u043E\u043C\u043E\u0449\u044C\u044E. \u041E\u043D\u0430 \u043D\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0438 \u043D\u0430 \u043A\u0430\u043A\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044B \u0438 \u043D\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u0430 \u043A \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430\u043C \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0443\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u043E \u043D\u0430\u0448\u0435\u043C \u0421\u0430\u0439\u0442\u0435 \u0438 \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u043E\u0433\u0443\u0442 \u0434\u0435\u043B\u0430\u0442\u044C\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0421\u0430\u0439\u0442, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u0441 \u044D\u0442\u043E\u0433\u043E \u0421\u0430\u0439\u0442\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044B \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442."])), (_l()(), core["_4" /* ɵeld */](13, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"])), (_l()(), core["_4" /* ɵeld */](15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041A\u043E\u0433\u0434\u0430 \u0412\u044B \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u0442\u0435 \u0421\u0430\u0439\u0442, \u043C\u044B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C IP \u0430\u0434\u0440\u0435\u0441, \u0438\u043C\u044F \u0434\u043E\u043C\u0435\u043D\u0430 \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0412\u044B \u043A \u043D\u0430\u043C \u043F\u0440\u0438\u0448\u043B\u0438 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \"yandex.ru\") \u0438 \u0441\u0442\u0440\u0430\u043D\u0443 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u043E\u0433\u043E ip , \u0430 \u0442\u0430\u043A \u0436\u0435 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u0432\u0441\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u0441 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0421\u0430\u0439\u0442\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u0443\u044E."])), (_l()(), core["_4" /* ɵeld */](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u043D\u0430 \u0421\u0430\u0439\u0442\u0435, \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043B\u0435\u0433\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0421\u0430\u0439\u0442\u043E\u043C. \u0421\u0430\u0439\u0442 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0431\u0449\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u043E\u0431\u0440\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u043F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0421\u0430\u0439\u0442\u0430."])), (_l()(), core["_4" /* ɵeld */](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0421\u0430\u0439\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0443\u044E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044E \"cookies\" (\"\u043A\u0443\u043A\u0438\") \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0442\u0438\u043B\u0435\u0439 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043F\u043E\u0434 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u044D\u043A\u0440\u0430\u043D\u0430 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0430. \"\u041A\u0443\u043A\u0438\" \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043D\u0430 \u0436\u0435\u0441\u0442\u043A\u043E\u043C \u0434\u0438\u0441\u043A\u0435 \u0412\u0430\u0448\u0435\u0433\u043E \u0436\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430. \u0412 \"cookies\" \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0439 \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0421\u0430\u0439\u0442\u0430, - \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0412\u0430\u0448\u0438\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0438 \u0441\u0431\u043E\u0440\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u043E \u0421\u0430\u0439\u0442\u0443, \u0442.\u0435. \u043A\u0430\u043A\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0412\u044B \u043F\u043E\u0441\u0435\u0442\u0438\u043B\u0438, \u0447\u0442\u043E \u0431\u044B\u043B\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E, \u0438\u043C\u044F \u0434\u043E\u043C\u0435\u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0438 \u0441\u0442\u0440\u0430\u043D\u0430 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u0432, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u0421\u0430\u0439\u0442 \u0438 \u0434\u0430\u043B\u0435\u0435."])), (_l()(), core["_4" /* ɵeld */](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0422\u0430\u043A\u0436\u0435 \u0434\u0430\u043D\u043D\u0443\u044E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435 \u0441\u0447\u0435\u0442\u0447\u0438\u043A\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Yandex/Rambler/Google \u0438 \u0442.\u043F."])), (_l()(), core["_4" /* ɵeld */](23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \"Cookies\" \u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \u043B\u0438\u0447\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0412\u0430\u0441. \u0427\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0431\u0435\u0437 \"cookies\", \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0430 \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0430 \"cookies\", \u043B\u0438\u0431\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u043B\u0430 \u0412\u0430\u0441 \u043E\u0431 \u0438\u0445 \u043F\u043E\u0441\u044B\u043B\u043A\u0435 (\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u043E\u0432\u0435\u0442\u0443\u0435\u043C \u0412\u0430\u043C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043A\u0443 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \"\u041F\u043E\u043C\u043E\u0449\u044C\" \u0438 \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u044C \u043A\u0430\u043A \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043F\u043E \"cookies\")."])), (_l()(), core["_4" /* ɵeld */](25, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0421\u0430\u0439\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 (\u0436\u0443\u0440\u043D\u0430\u043B\u044B) \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u043B\u044F \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u043E\u0446\u0435\u043D\u043A\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u0445\u043E\u0441\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0438 \u0438 \u0441\u0447\u0435\u0442\u0447\u0438\u043A\u0438 \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 (yandex.ru, top100.rambler.ru, top.mail.ru \u0438 \u0434\u0440.). \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u044D\u0442\u0443 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u0442 \u0421\u0430\u0439\u0442 \u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0421\u0430\u0439\u0442\u0430 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u043C\u0438 \u0412\u0430\u043C\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u043C, \u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0421\u0430\u0439\u0442\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u043C \u0434\u043B\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439. \u041C\u044B \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043F\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F\u043C \u043D\u0430 \u0421\u0430\u0439\u0442\u0435, \u043D\u043E \u043D\u0435 \u043E\u0431 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044F\u0445 \u0421\u0430\u0439\u0442\u0430, \u0442\u0430\u043A \u0447\u0442\u043E \u043D\u0438\u043A\u0430\u043A\u0430\u044F \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0412\u0430\u0441 \u043B\u0438\u0447\u043D\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C\u0441\u044F \u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0421\u0430\u0439\u0442\u0430 \u0431\u0435\u0437 \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F."])), (_l()(), core["_4" /* ɵeld */](27, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0422\u0430\u043A\u0436\u0435 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043B\u0438\u0447\u043D\u0443\u044E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u0442 \u043D\u0430\u0448 \u0421\u0430\u0439\u0442, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u0421\u0430\u0439\u0442\u0435, \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0444\u043E\u0440\u043C\u044B \u0438 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u0421\u0430\u0439\u0442\u0435. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0438\u043C\u044F, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441, \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043C\u043E\u0433\u0443\u0442, \u043E\u0434\u043D\u0430\u043A\u043E, \u043F\u043E\u0441\u0435\u0449\u0430\u0442\u044C \u043D\u0430\u0448 \u0421\u0430\u0439\u0442 \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u043E. \u041C\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u043B\u0438\u0447\u043D\u0443\u044E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0434\u043E\u0431\u0440\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u043D\u0430\u043C \u0442\u0430\u043A\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043B\u0438\u0447\u043D\u043E\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043A\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u0435\u0448\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C\u0438 \u0421\u0430\u0439\u0442\u0430."])), (_l()(), core["_4" /* ɵeld */](29, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041A\u0430\u043A \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E"])), (_l()(), core["_4" /* ɵeld */](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["BitJournal inc. \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043B\u0438\u0447\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0434\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0446\u0435\u043B\u0435\u0439:"])), (_l()(), core["_4" /* ɵeld */](33, 0, null, null, 10, "ul", [], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](34, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0414\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0435\u0439. \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u0430\u044F \u0432\u0430\u043C\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043D\u0430\u043C \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439 \u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E;"])), (_l()(), core["_4" /* ɵeld */](36, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0427\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0442\u043E\u0433\u043E, \u043A\u0442\u043E \u0438\u0437 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u0421\u0430\u0439\u0442\u0430 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D \u0432 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u0445, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0445 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0421\u0430\u0439\u0442\u0435;"])), (_l()(), core["_4" /* ɵeld */](38, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0414\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u0448\u0435\u0433\u043E \u0421\u0430\u0439\u0442\u0430. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u0443\u044E \u0441\u0432\u044F\u0437\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043D\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438;"])), (_l()(), core["_4" /* ɵeld */](40, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043E\u043D\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u043B\u0438\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043D\u0430 \u0442\u0435\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435, \u043A\u0430\u043A \u043C\u044B \u0434\u0443\u043C\u0430\u0435\u043C, \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u043B\u044F \u043D\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441;"])), (_l()(), core["_4" /* ɵeld */](42, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445 \u0438 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0438 \u0442.\u0434. \u0415\u0441\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0445\u043E\u0442\u0435\u043B \u0431\u044B \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u0438\u0441\u0435\u043C, \u043C\u044B \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u043E \u0442\u043E\u043C\u0443, \u043A\u0430\u043A \u043E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u043D\u0438\u0436\u043D\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u043A\u0430\u0436\u0434\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0438\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448 \u0421\u0430\u0439\u0442."])), (_l()(), core["_4" /* ɵeld */](44, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"])), (_l()(), core["_4" /* ɵeld */](46, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0412\u0432\u043E\u0434\u044F \u043B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u043A\u0430\u043A\u043E\u0439-\u043B\u0438\u0431\u043E \u0444\u043E\u0440\u043C\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435, \u043D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \u00AB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u00BB, \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0434\u0430\u0435\u0442 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0438\u0445 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0435\u0439 \u0432\u043E\u043B\u0435\u0439 \u0438 \u0432 \u0441\u0432\u043E\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0435, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0442\u0430\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u0438 \u0441\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C."])), (_l()(), core["_4" /* ɵeld */](48, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0412 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0435\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043D\u0438 \u043F\u0440\u0438 \u043A\u0430\u043A\u0438\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\u0445 \u043E\u043D\u0430 \u043D\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0438 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C \u0431\u0435\u0437 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0438 \u043F\u0440\u044F\u043C\u043E \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438, \u0421\u0442\u0440\u0430\u043D \u0435\u0432\u0440\u043E\u0441\u043E\u044E\u0437\u0430 \u0438 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438 \u0421\u0435\u043D\u0442-\u041A\u0438\u0301\u0442\u0441 \u0438 \u041D\u0435\u0301\u0432\u0438\u0441"])), (_l()(), core["_4" /* ɵeld */](50, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043D\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438, \u0438 \u043D\u0435 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0438\u0445 \u0434\u0435\u0435\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0438. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0438\u0437 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u0430\u044F \u0438\u043C \u043E\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0439."])), (_l()(), core["_4" /* ɵeld */](52, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043B\u0438\u0446\u0430."])), (_l()(), core["_4" /* ɵeld */](54, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0441\u044F \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u0432\u043F\u0440\u0430\u0432\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0434\u043B\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043D\u043E\u0432\u043E\u0441\u0442\u043D\u043E\u0439 \u0438\u043B\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0439 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C email-\u043F\u0438\u0441\u0435\u043C \u0438 SMS-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439."])), (_l()(), core["_4" /* ɵeld */](56, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"])), (_l()(), core["_4" /* ɵeld */](58, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u0432 \u0447\u0430\u0441\u0442\u0438 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043E\u0431 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043E\u0442\u043C\u0435\u0442\u043A\u0438 \u043F\u0440\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u043B\u044E\u0431\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u043C \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u044B\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435\u043C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."])), (_l()(), core["_4" /* ɵeld */](60, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0441\u044F \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E, \u043B\u044E\u0431\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0435\u0439\u0441\u044F \u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0441\u0431\u043E\u0440, \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E, \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u0435, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 (\u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443), \u043E\u0431\u0435\u0437\u043B\u0438\u0447\u0438\u0432\u0430\u043D\u0438\u0435, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043F\u0440\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0444\u043E\u0440\u043C\u044B \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435."])), (_l()(), core["_4" /* ɵeld */](62, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0442\u043E\u0437\u0432\u0430\u043D\u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043F\u0443\u0442\u0435\u043C \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0432 \u0430\u0434\u0440\u0435\u0441 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u0430\u0439\u0442\u0430. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0437\u044B\u0432\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u0443\u0434\u0430\u043B\u044F\u0435\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u043D\u0435 \u0432\u043F\u0440\u0430\u0432\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C."])), (_l()(), core["_4" /* ɵeld */](64, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041A\u0430\u043A \u043C\u044B \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u043C \u0432\u0430\u0448\u0443 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E"])), (_l()(), core["_4" /* ɵeld */](66, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0421\u0430\u0439\u0442\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043C\u0435\u0440\u044B \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0441\u0431\u043E\u0440\u0443, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044E \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043B\u044E\u0431\u044B\u0445 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u0438\u0445 \u043E\u0442 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0438\u043B\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044F \u0412\u0430\u0448\u0435\u0439 \u043B\u0438\u0447\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 (\u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u043F\u0430\u0440\u043E\u043B\u044C, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0438 \u0434\u0430\u043D\u043D\u044B\u0435, \u0445\u0440\u0430\u043D\u044F\u0449\u0438\u0435\u0441\u044F \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0421\u0430\u0439\u0442\u0435)."])), (_l()(), core["_4" /* ɵeld */](68, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041E\u0431\u0449\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043B\u0438\u0447\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438"])), (_l()(), core["_4" /* ɵeld */](70, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041C\u044B \u043D\u0435 \u043F\u0440\u043E\u0434\u0430\u0435\u043C, \u043D\u0435 \u043E\u0431\u043C\u0435\u043D\u0438\u0432\u0430\u0435\u043C \u0438\u043B\u0438 \u043D\u0435 \u0434\u0430\u0435\u043C \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u043B\u0438\u0447\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043E\u0431\u0449\u0438\u0435 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0434\u0435\u043C\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043D\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u043B\u0438\u0447\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439, \u043D\u0430\u0448\u0438\u043C\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438 \u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439, \u043E\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0432\u044B\u0448\u0435. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432 \u0443\u0441\u043B\u0443\u0433, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u043D\u0430\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430\u0448\u0438\u043C \u0421\u0430\u0439\u0442\u043E\u043C \u0438\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u0442 \u043D\u0430\u0448\u0435\u0433\u043E \u0438\u043C\u0435\u043D\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u043B\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u0438\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u044D\u0442\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u0441 \u044D\u0442\u0438\u043C\u0438 \u0442\u0440\u0435\u0442\u044C\u0438\u043C\u0438 \u043B\u0438\u0446\u0430\u043C\u0438 \u0434\u043B\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439 \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438, \u0447\u0442\u043E \u0412\u044B \u0434\u0430\u043B\u0438 \u043D\u0430\u043C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F."])), (_l()(), core["_4" /* ɵeld */](72, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"])), (_l()(), core["_4" /* ɵeld */](74, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["BitJournal inc. \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043F\u043E \u0441\u0432\u043E\u0435\u043C\u0443 \u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0442\u044C \u0434\u0430\u043D\u043D\u0443\u044E \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u041C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C \u044D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u0442\u044C \u0432 \u043A\u0443\u0440\u0441\u0435 \u043B\u044E\u0431\u044B\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u043C\u044B \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u043C \u043B\u0438\u0447\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043C\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C."])), (_l()(), core["_4" /* ɵeld */](76, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0412\u0430\u0448\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441 \u044D\u0442\u0438\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438"])), (_l()(), core["_4" /* ɵeld */](78, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u044D\u0442\u043E\u0442 \u0421\u0430\u0439\u0442, \u0412\u044B \u0432\u044B\u0440\u0430\u0436\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0438 \u043E\u0441\u043E\u0437\u043D\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441 \u044D\u0442\u043E\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439. \u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u0441 \u044D\u0442\u043E\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043D\u0430\u0448 \u0421\u0430\u0439\u0442. \u0412\u0430\u0448\u0435 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0421\u0430\u0439\u0442\u0430 \u043F\u043E\u0441\u043B\u0435 \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0443\u044E \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0412\u0430\u0448\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441 \u044D\u0442\u0438\u043C\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438."])), (_l()(), core["_4" /* ɵeld */](80, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438"])), (_l()(), core["_4" /* ɵeld */](82, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u043E\u043C\u043D\u0438\u0442\u0435, \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u0421\u0430\u0439\u0442\u043E\u0432 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u043D\u0435 \u043F\u043E\u0434\u043F\u0430\u0434\u0430\u0435\u0442 \u043F\u043E\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0421\u0430\u0439\u0442\u0430 \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u0432."]))], null, null); }
function View_PagePrivacyComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "page-privacy", [["class", "page"]], null, null, null, View_PagePrivacyComponent_0, RenderType_PagePrivacyComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, PagePrivacyComponent, [], null, null)], null, null); }
var PagePrivacyComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("page-privacy.page", PagePrivacyComponent, View_PagePrivacyComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/coin/page-coin.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_coin_component_css_ngstyle_styles = [".bj-page-coin__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}@media (min-width:600px){.bj-page-coin__wrapper{padding:var(--indent-double) var(--indent-base)}}@media (min-width:1200px){.bj-page-coin__wrapper{padding:var(--indent-double)}}.bj-page-coin__row{width:100%;display:flex;justify-content:flex-start;align-items:stretch}.bj-page-coin__col{flex:1 1 auto;max-width:100%;position:relative}.bj-page-coin__aside{width:var(--aside-width);flex:0 0 var(--aside-width);margin-left:var(--indent-double);flex-direction:column;justify-content:flex-start;align-items:center;display:none}@media (min-width:1200px){.bj-page-coin__aside{display:flex}}"];


// CONCATENATED MODULE: ./components/coin/coin.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var coin_component_css_ngstyle_styles = [".bj-coin,.bj-coin__logo img{display:block;width:100%}.bj-coin__wrapper{display:block;padding:20px}.bj-coin__row{display:flex;align-items:flex-start;flex-wrap:wrap}.bj-coin__row+.bj-coin__row{margin-top:var(--indent-base)}.bj-coin__row--center{align-items:center}.bj-coin__col+.bj-coin__col{margin-left:var(--indent-double)}.bj-coin__col--row{flex:1 1 auto;display:block;justify-content:space-between;flex-wrap:wrap}@media (min-width:900px){.bj-coin__col--row{display:flex}}.bj-coin__logo{display:block;flex:0 0 88px;width:88px;height:88px;order:2}.bj-coin__logo img{height:100%}.bj-coin__h1{font-size:2rem;font-weight:500;line-height:1;margin:1rem 0 .1rem var(--indent-base);padding:0;order:2}.bj-coin__h1__symbol{display:block;color:var(--color-gray);font-size:1rem;font-weight:400}.bj-coin__prices{margin:0 var(--indent-double);order:2}.bj-coin__prices__currency{display:block;font-size:30px;font-weight:400;font-style:normal;margin:1rem 0 .1rem;padding:0}.bj-coin__prices__btc{display:block;color:var(--color-gray);font-size:1rem}.bj-coin__controls__currency{flex:0 0 auto;display:flex;margin-left:auto;order:2}.bj-coin__controls__currency-button{display:block;font-size:100%;font-weight:300;font-style:normal;background:0 0;border:0;padding:0;margin:0 0 0 var(--indent-double);color:var(--color-gray);cursor:pointer}.bj-coin__controls__currency-button+.bj-coin__controls__currency-button{margin-left:var(--indent-half)}.bj-coin__controls__currency-button--active{color:inherit;font-weight:400}.bj-coin__info{padding-top:var(--indent-base)}.bj-coin__col--row .bj-coin__info{flex:1 0 auto}.bj-coin__info h3,.bj-coin__info span{white-space:nowrap;margin:0;padding:0;padding-right:var(--indent-base)}.bj-coin__info h3{font-style:normal;padding-bottom:5px;font-size:13px;font-weight:500}.bj-coin__info span{font-size:16px;font-weight:300}.bj-coin__chart{width:100%;height:500px;min-height:500px}.bj-coin__chart iframe{width:100%;height:100%;min-height:100%;max-height:100%}.bj-coin__table-wrapper{width:100%;max-width:100%;overflow:hidden;overflow-x:scroll}.bj-coin__table{width:100%;min-width:550px}"];


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/sort/typings/index.ngfactory.js
var sort_typings_index_ngfactory = __webpack_require__(189);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/sort.es5.js
var sort_es5 = __webpack_require__(94);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/cdk/esm5/table.es5.js
var table_es5 = __webpack_require__(66);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/table.es5.js
var esm5_table_es5 = __webpack_require__(95);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/table/typings/index.ngfactory.js
var table_typings_index_ngfactory = __webpack_require__(190);

// CONCATENATED MODULE: ./components/coin/coin.component.ngfactory.js
/** PURE_IMPORTS_START _coin.component.css.ngstyle,_angular_core,_.._.._.._node_modules__angular_material_sort_typings_index.ngfactory,_angular_material_sort,_angular_cdk_table,_angular_material_table,_.._.._.._node_modules__angular_material_table_typings_index.ngfactory,_angular_common,_.._pipes_ccimg_ccimg.pipe,_coin.component,_angular_common_http,_angular_platform_browser PURE_IMPORTS_END */
/** PURE_IMPORTS_START _coin.component.css.ngstyle,_angular_core,_.._.._.._node_modules__angular_material_sort_typings_index.ngfactory,_angular_material_sort,_angular_cdk_table,_angular_material_table,_.._.._.._node_modules__angular_material_table_typings_index.ngfactory,_angular_common,_.._pipes_ccimg_ccimg.pipe,_coin.component,_angular_common_http,_angular_platform_browser PURE_IMPORTS_END */












var styles_CoinComponent = [coin_component_css_ngstyle_styles];
var RenderType_CoinComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoinComponent, data: {} });

function View_CoinComponent_2(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "div", [["class", "bj-coin__prices__currency"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](2, null, ["$\u00A0", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _co.value.priceUSD, "1.2-8")); _ck(_v, 2, 0, currVal_0); }); }
function View_CoinComponent_3(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "div", [["class", "bj-coin__prices__currency"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](2, null, ["\u20BD\u00A0", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _co.value.priceRUB, "1.2-8")); _ck(_v, 2, 0, currVal_0); }); }
function View_CoinComponent_4(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.founder; _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_5(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0414\u0430\u0442\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.startDate; _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_6(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043C\u043E\u043D\u0435\u0442:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.availableSupply; _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_7(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0412\u0441\u0435\u0433\u043E \u043C\u043E\u043D\u0435\u0442:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.maxSupply; _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_8(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u0437\u0430 \u0431\u043B\u043E\u043A:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.blockReward; _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_9(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0431\u043B\u043E\u043A:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.lastBlockNumber; _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_10(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 5, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0441\u0435\u0442\u0438:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["", "HS/s"])), core["_20" /* ɵppd */](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _co.value.hashRate, "1.0-0")); _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_11(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 5, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["$\u00A0", ""])), core["_20" /* ɵppd */](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _co.value.capitalizationUSD, "1.2-2")); _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_12(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 5, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["\u20BD\u00A0", ""])), core["_20" /* ɵppd */](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _co.value.capitalizationRUB, "1.2-2")); _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_13(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 5, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041E\u0431\u044A\u0435\u043C, 24\u0447:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["$\u00A0", ""])), core["_20" /* ɵppd */](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _co.value.volume24hUSD, "1.2-2")); _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_14(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 5, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041E\u0431\u044A\u0435\u043C, 24\u0447:"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](4, null, ["\u20BD\u00A0", ""])), core["_20" /* ɵppd */](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _co.value.volume24hRUB, "1.2-2")); _ck(_v, 4, 0, currVal_0); }); }
function View_CoinComponent_15(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u0411\u0438\u0440\u0436\u0430"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_CoinComponent_16(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 2, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); }); }
function View_CoinComponent_17(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"], ["style", "max-width:130px"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u0426\u0435\u043D\u0430, $"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_CoinComponent_18(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:130px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _v.context.$implicit.price, "1.2-4")); _ck(_v, 2, 0, currVal_0); }); }
function View_CoinComponent_19(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"], ["style", "max-width:130px"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["Min, 24\u0447"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_CoinComponent_20(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:130px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _v.context.$implicit.high24Hour, "1.2-4")); _ck(_v, 2, 0, currVal_0); }); }
function View_CoinComponent_21(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"], ["style", "max-width:130px"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["Max, 24\u0447"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_CoinComponent_22(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:130px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _v.context.$implicit.low24Hour, "1.2-4")); _ck(_v, 2, 0, currVal_0); }); }
function View_CoinComponent_23(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "mat-header-row", [["class", "mat-header-row"], ["role", "row"]], null, null, null, table_typings_index_ngfactory["d" /* View_MatHeaderRow_0 */], table_typings_index_ngfactory["a" /* RenderType_MatHeaderRow */])), core["_3" /* ɵdid */](1, 49152, null, 0, esm5_table_es5["f" /* MatHeaderRow */], [], null, null)], null, null); }
function View_CoinComponent_24(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "mat-row", [["class", "mat-row"], ["role", "row"]], null, null, null, table_typings_index_ngfactory["e" /* View_MatRow_0 */], table_typings_index_ngfactory["b" /* RenderType_MatRow */])), core["_3" /* ɵdid */](1, 49152, null, 0, esm5_table_es5["h" /* MatRow */], [], null, null)], null, null); }
function View_CoinComponent_1(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 132, "div", [["class", "bj-coin__wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 22, "div", [["class", "bj-coin__row bj-coin__row--center"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 2, "picture", [["class", "bj-coin__logo"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_20" /* ɵppd */](4, 1), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 4, "h1", [["class", "bj-coin__h1"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](7, null, ["", ""])), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 1, "span", [["class", "bj-coin__h1__symbol"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](9, null, ["", ""])), (_l()(), core["_4" /* ɵeld */](10, 0, null, null, 8, "div", [["class", "bj-coin__prices"]], null, null, null, null, null)), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_2)), core["_3" /* ɵdid */](12, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_3)), core["_3" /* ɵdid */](14, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](15, 0, null, null, 3, "div", [["class", "bj-coin__prices__btc"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](16, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](17, null, ["", "\u00A0BTC"])), core["_20" /* ɵppd */](18, 2), (_l()(), core["_4" /* ɵeld */](19, 0, null, null, 4, "div", [["class", "bj-coin__controls__currency"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](20, 0, null, null, 1, "button", [["class", "bj-coin__controls__currency-button"]], [[2, "bj-coin__controls__currency-button--active", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ((_co.showPrice = "RUB") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["RUB"])), (_l()(), core["_4" /* ɵeld */](22, 0, null, null, 1, "button", [["class", "bj-coin__controls__currency-button"]], [[2, "bj-coin__controls__currency-button--active", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ((_co.showPrice = "USD") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["USD"])), (_l()(), core["_4" /* ɵeld */](24, 0, null, null, 49, "div", [["class", "bj-coin__row"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](25, 0, null, null, 24, "div", [["class", "bj-coin__col"]], null, null, null, null, null)), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_4)), core["_3" /* ɵdid */](27, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_5)), core["_3" /* ɵdid */](29, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](30, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](31, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C:"])), (_l()(), core["_4" /* ɵeld */](33, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](34, null, ["", ""])), (_l()(), core["_4" /* ɵeld */](35, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](36, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Proof type:"])), (_l()(), core["_4" /* ɵeld */](38, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](39, null, ["", ""])), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_6)), core["_3" /* ɵdid */](41, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_7)), core["_3" /* ɵdid */](43, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_8)), core["_3" /* ɵdid */](45, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_9)), core["_3" /* ɵdid */](47, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_10)), core["_3" /* ɵdid */](49, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](50, 0, null, null, 23, "div", [["class", "bj-coin__col bj-coin__col--row"]], null, null, null, null, null)), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_11)), core["_3" /* ɵdid */](52, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_12)), core["_3" /* ɵdid */](54, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_13)), core["_3" /* ɵdid */](56, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_14)), core["_3" /* ɵdid */](58, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](59, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](60, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0418\u0437\u043C., 1\u0447:"])), (_l()(), core["_4" /* ɵeld */](62, 0, null, null, 1, "span", [], [[2, "bj-common--up", null], [2, "bj-common--down", null]], null, null, null, null)), (_l()(), core["_24" /* ɵted */](63, null, ["", "\u00A0%"])), (_l()(), core["_4" /* ɵeld */](64, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](65, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0418\u0437\u043C., 24\u0447:"])), (_l()(), core["_4" /* ɵeld */](67, 0, null, null, 1, "span", [], [[2, "bj-common--up", null], [2, "bj-common--down", null]], null, null, null, null)), (_l()(), core["_24" /* ɵted */](68, null, ["", "\u00A0%"])), (_l()(), core["_4" /* ɵeld */](69, 0, null, null, 4, "div", [["class", "bj-coin__info"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](70, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0418\u0437\u043C., 7\u0434:"])), (_l()(), core["_4" /* ɵeld */](72, 0, null, null, 1, "span", [], [[2, "bj-common--up", null], [2, "bj-common--down", null]], null, null, null, null)), (_l()(), core["_24" /* ɵted */](73, null, ["", "\u00A0%"])), (_l()(), core["_4" /* ɵeld */](74, 0, null, null, 1, "div", [["class", "bj-coin__row bj-coin__chart"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](75, 0, null, null, 0, "iframe", [["frameborder", "0"]], [[8, "src", 5]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](76, 0, null, null, 56, "div", [["class", "bj-coin__row bj-coin__table-wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](77, 0, null, null, 55, "mat-table", [["class", "bj-coin__table mat-table"], ["matSort", ""], ["matSortActive", "price"], ["matSortDirection", "desc"], ["matSortDisableClear", ""]], null, null, null, table_typings_index_ngfactory["f" /* View_MatTable_0 */], table_typings_index_ngfactory["c" /* RenderType_MatTable */])), core["_3" /* ɵdid */](78, 671744, [[1, 4]], 0, sort_es5["b" /* MatSort */], [], { active: [0, "active"], direction: [1, "direction"], disableClear: [2, "disableClear"] }, null), core["_3" /* ɵdid */](79, 3391488, [["table", 4]], 3, esm5_table_es5["j" /* MatTable */], [core["r" /* IterableDiffers */], core["h" /* ChangeDetectorRef */], core["k" /* ElementRef */], [8, null]], { dataSource: [0, "dataSource"] }, null), core["_22" /* ɵqud */](603979776, 2, { _columnDefs: 1 }), core["_22" /* ɵqud */](335544320, 3, { _headerDef: 0 }), core["_22" /* ɵqud */](603979776, 4, { _rowDefs: 1 }), (_l()(), core["_4" /* ɵeld */](83, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](84, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 5, { cell: 0 }), core["_22" /* ɵqud */](335544320, 6, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[2, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_15)), core["_3" /* ɵdid */](89, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[6, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_16)), core["_3" /* ɵdid */](92, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[5, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](94, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](95, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 7, { cell: 0 }), core["_22" /* ɵqud */](335544320, 8, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[2, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_17)), core["_3" /* ɵdid */](100, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[8, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_18)), core["_3" /* ɵdid */](103, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[7, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](105, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](106, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 9, { cell: 0 }), core["_22" /* ɵqud */](335544320, 10, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[2, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_19)), core["_3" /* ɵdid */](111, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_20)), core["_3" /* ɵdid */](114, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[9, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](116, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](117, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 11, { cell: 0 }), core["_22" /* ɵqud */](335544320, 12, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[2, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_21)), core["_3" /* ɵdid */](122, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[12, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_22)), core["_3" /* ɵdid */](125, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[11, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_23)), core["_3" /* ɵdid */](128, 540672, null, 0, esm5_table_es5["g" /* MatHeaderRowDef */], [core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { columns: [0, "columns"] }, null), core["_21" /* ɵprd */](2048, [[3, 4]], table_es5["h" /* CdkHeaderRowDef */], null, [esm5_table_es5["g" /* MatHeaderRowDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_CoinComponent_24)), core["_3" /* ɵdid */](131, 540672, null, 0, esm5_table_es5["i" /* MatRowDef */], [core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { columns: [0, "columns"] }, null), core["_21" /* ɵprd */](2048, [[4, 4]], table_es5["j" /* CdkRowDef */], null, [esm5_table_es5["i" /* MatRowDef */]])], function (_ck, _v) { var _co = _v.component; var currVal_3 = (_co.showPrice === "USD"); _ck(_v, 12, 0, currVal_3); var currVal_4 = (_co.showPrice === "RUB"); _ck(_v, 14, 0, currVal_4); var currVal_8 = _co.value.founder; _ck(_v, 27, 0, currVal_8); var currVal_9 = _co.value.startDate; _ck(_v, 29, 0, currVal_9); var currVal_12 = _co.value.availableSupply; _ck(_v, 41, 0, currVal_12); var currVal_13 = _co.value.maxSupply; _ck(_v, 43, 0, currVal_13); var currVal_14 = _co.value.blockReward; _ck(_v, 45, 0, currVal_14); var currVal_15 = _co.value.lastBlockNumber; _ck(_v, 47, 0, currVal_15); var currVal_16 = _co.value.hashRate; _ck(_v, 49, 0, currVal_16); var currVal_17 = (_co.showPrice === "USD"); _ck(_v, 52, 0, currVal_17); var currVal_18 = (_co.showPrice === "RUB"); _ck(_v, 54, 0, currVal_18); var currVal_19 = (_co.showPrice === "USD"); _ck(_v, 56, 0, currVal_19); var currVal_20 = (_co.showPrice === "RUB"); _ck(_v, 58, 0, currVal_20); var currVal_31 = "price"; var currVal_32 = "desc"; var currVal_33 = ""; _ck(_v, 78, 0, currVal_31, currVal_32, currVal_33); var currVal_34 = _co.marketsSource; _ck(_v, 79, 0, currVal_34); var currVal_35 = "title"; _ck(_v, 84, 0, currVal_35); var currVal_36 = "price"; _ck(_v, 95, 0, currVal_36); var currVal_37 = "high24Hour"; _ck(_v, 106, 0, currVal_37); var currVal_38 = "low24Hour"; _ck(_v, 117, 0, currVal_38); var currVal_39 = _co.displayedColumns; _ck(_v, 128, 0, currVal_39); var currVal_40 = _co.displayedColumns; _ck(_v, 131, 0, currVal_40); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 3, 0, _ck(_v, 4, 0, core["_16" /* ɵnov */](_v.parent, 0), _co.value.symbol)); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.value.title; _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.value.symbol; _ck(_v, 9, 0, currVal_2); var currVal_5 = core["_25" /* ɵunv */](_v, 17, 0, _ck(_v, 18, 0, core["_16" /* ɵnov */](_v.parent, 1), _co.value.priceBTC, "1.0-12")); _ck(_v, 17, 0, currVal_5); var currVal_6 = (_co.showPrice === "RUB"); _ck(_v, 20, 0, currVal_6); var currVal_7 = (_co.showPrice === "USD"); _ck(_v, 22, 0, currVal_7); var currVal_10 = _co.value.algorithm; _ck(_v, 34, 0, currVal_10); var currVal_11 = _co.value.proofType; _ck(_v, 39, 0, currVal_11); var currVal_21 = (_co.value.change1h > 0); var currVal_22 = (_co.value.change1h < 0); _ck(_v, 62, 0, currVal_21, currVal_22); var currVal_23 = _co.value.change1h; _ck(_v, 63, 0, currVal_23); var currVal_24 = (_co.value.change24h > 0); var currVal_25 = (_co.value.change24h < 0); _ck(_v, 67, 0, currVal_24, currVal_25); var currVal_26 = _co.value.change24h; _ck(_v, 68, 0, currVal_26); var currVal_27 = (_co.value.change7d > 0); var currVal_28 = (_co.value.change7d < 0); _ck(_v, 72, 0, currVal_27, currVal_28); var currVal_29 = _co.value.change7d; _ck(_v, 73, 0, currVal_29); var currVal_30 = _co.chartURL; _ck(_v, 75, 0, currVal_30); });
}
function View_CoinComponent_0(_l) { return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, ccimg_pipe_CoinImagePipe, []), core["_19" /* ɵpid */](0, common["e" /* DecimalPipe */], [core["t" /* LOCALE_ID */]]), core["_22" /* ɵqud */](671088640, 1, { sort: 0 }), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_CoinComponent_1)), core["_3" /* ɵdid */](4, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value; _ck(_v, 4, 0, currVal_0); }, null); }
function View_CoinComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-coin"]], null, null, null, View_CoinComponent_0, RenderType_CoinComponent)), core["_3" /* ɵdid */](1, 4243456, null, 0, coin_component_CoinComponent, [core["A" /* PLATFORM_ID */], http["c" /* HttpClient */], platform_browser["d" /* DomSanitizer */]], null, null)], null, null); }
var CoinComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".bj-coin", coin_component_CoinComponent, View_CoinComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pages/coin/page-coin.component.ngfactory.js
/** PURE_IMPORTS_START _page_coin.component.css.ngstyle,_angular_core,_.._pub_line_pub_line.component.ngfactory,_angular_router,_angular_common,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_.._coin_coin.component.ngfactory,_.._coin_coin.component,_angular_common_http,_angular_platform_browser,_page_coin.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_coin.component.css.ngstyle,_angular_core,_.._pub_line_pub_line.component.ngfactory,_angular_router,_angular_common,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_.._coin_coin.component.ngfactory,_.._coin_coin.component,_angular_common_http,_angular_platform_browser,_page_coin.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */















var styles_PageCoinComponent = [page_coin_component_css_ngstyle_styles];
var RenderType_PageCoinComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageCoinComponent, data: {} });

function View_PageCoinComponent_1(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-line"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_3" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_20" /* ɵppd */](2, 2), core["_18" /* ɵpad */](3, 3), core["_3" /* ɵdid */](4, 49152, null, 0, PubLineComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/", core["_25" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_16" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "DATE")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).target; var currVal_1 = core["_16" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinComponent_0(_l) { return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 10, "main", [["class", "bj-page-coin__wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 9, "div", [["class", "bj-page-coin__row"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 2, "div", [["class", "bj-page-coin__col bj-common--white-box bj-coin"]], null, null, null, View_CoinComponent_0, RenderType_CoinComponent)), core["_3" /* ɵdid */](4, 4243456, null, 0, coin_component_CoinComponent, [core["A" /* PLATFORM_ID */], http["c" /* HttpClient */], platform_browser["d" /* DomSanitizer */]], { value: [0, "value"] }, null), core["_19" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 5, "aside", [["class", "bj-page-coin__aside"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 1, "h3", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["Z" /* ɵand */](16777216, null, null, 2, null, View_PageCoinComponent_1)), core["_3" /* ɵdid */](10, 802816, null, 0, common["k" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_19" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 4, 0, core["_16" /* ɵnov */](_v, 5).transform(_co.item)); _ck(_v, 4, 0, currVal_0); var currVal_1 = core["_25" /* ɵunv */](_v, 10, 0, core["_16" /* ɵnov */](_v, 11).transform(_co.publications)); _ck(_v, 10, 0, currVal_1); }, null); }
function View_PageCoinComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "page-coin", [["class", "page"]], null, null, null, View_PageCoinComponent_0, RenderType_PageCoinComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, page_coin_component_PageCoinComponent, [router["a" /* ActivatedRoute */], api_service_APIService, meta_service_MetaService, loader_service_LoaderService], null, null)], null, null); }
var PageCoinComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("page-coin.page", page_coin_component_PageCoinComponent, View_PageCoinComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/coins/page-coins.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_coins_component_css_ngstyle_styles = [".bj-page-coins__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}@media (min-width:600px){.bj-page-coins__wrapper{padding:var(--indent-double) var(--indent-base)}}@media (min-width:1200px){.bj-page-coins__wrapper{padding:var(--indent-double)}}.bj-page-coins__row{width:100%;display:flex;justify-content:flex-start;align-items:stretch}.bj-page-coins__col{flex:1 1 auto;max-width:100%;position:relative}.bj-page-coins__col:after,.bj-page-coins__col:before{content:\"\";display:block;position:absolute;top:0;bottom:0;width:var(--indent-base)}.bj-page-coins__col:before{left:0;background:linear-gradient(90deg,#fff 0,#fff 30%,transparent)}.bj-page-coins__col:after{right:0;background:linear-gradient(270deg,#fff 0,#fff 30%,transparent)}.bj-page-coins__aside{width:var(--aside-width);flex:0 0 var(--aside-width);margin-left:var(--indent-double);flex-direction:column;justify-content:flex-start;align-items:center;display:none}@media (min-width:1200px){.bj-page-coins__aside{display:flex}}.bj-page-coins__controls{padding:var(--indent-base) var(--indent-base) 0;width:100%;display:flex;align-items:center}@media (min-width:1200px){.bj-page-coins__controls{padding:var(--indent-double) var(--indent-double) 0}}.bj-page-coins__controls__filter{flex:1 1 auto}.bj-page-coins__controls__currency{flex:0 0 auto;display:flex}.bj-page-coins__controls__currency-button{display:block;font-size:100%;font-weight:300;font-style:normal;background:0 0;border:0;padding:0;margin:0 0 0 var(--indent-double);color:var(--color-gray);cursor:pointer}.bj-page-coins__controls__currency-button+.bj-page-coins__controls__currency-button{margin-left:var(--indent-half)}.bj-page-coins__controls__currency-button--active{color:inherit;font-weight:400}.bj-page-coins__table-wrapper{width:100%;max-width:100%;overflow:hidden;overflow-x:scroll}.bj-page-coins__table{min-width:860px}@media (min-width:900px){.bj-page-coins__table-wrapper{overflow-x:hidden}.bj-page-coins__table{max-width:100%}}.bj-page-coins__table__icon{width:32px;height:32px}"];


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/form-field/typings/index.ngfactory.js
var form_field_typings_index_ngfactory = __webpack_require__(136);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/form-field.es5.js
var form_field_es5 = __webpack_require__(37);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/core.es5.js
var core_es5 = __webpack_require__(4);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/input.es5.js
var input_es5 = __webpack_require__(91);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/cdk/esm5/platform.es5.js
var platform_es5 = __webpack_require__(15);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/paginator/typings/index.ngfactory.js + 2 modules
var paginator_typings_index_ngfactory = __webpack_require__(284);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/paginator.es5.js
var paginator_es5 = __webpack_require__(102);

// CONCATENATED MODULE: ./components/pages/coins/page-coins.component.ngfactory.js
/** PURE_IMPORTS_START _page_coins.component.css.ngstyle,_angular_core,_angular_material_table,_angular_cdk_table,_.._.._.._.._node_modules__angular_material_sort_typings_index.ngfactory,_angular_material_sort,_angular_router,_angular_common,_.._.._.._.._node_modules__angular_material_table_typings_index.ngfactory,_.._pub_line_pub_line.component.ngfactory,_.._pub_line_pub_line.component,_.._.._pipes_ccimg_ccimg.pipe,_.._.._pipes_timestamp_timestamp,_.._.._.._.._node_modules__angular_material_form_field_typings_index.ngfactory,_angular_material_form_field,_angular_material_core,_angular_material_input,_angular_cdk_platform,_angular_forms,_.._.._.._.._node_modules__angular_material_paginator_typings_index.ngfactory,_angular_material_paginator,_page_coins.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_coins.component.css.ngstyle,_angular_core,_angular_material_table,_angular_cdk_table,_.._.._.._.._node_modules__angular_material_sort_typings_index.ngfactory,_angular_material_sort,_angular_router,_angular_common,_.._.._.._.._node_modules__angular_material_table_typings_index.ngfactory,_.._pub_line_pub_line.component.ngfactory,_.._pub_line_pub_line.component,_.._.._pipes_ccimg_ccimg.pipe,_.._.._pipes_timestamp_timestamp,_.._.._.._.._node_modules__angular_material_form_field_typings_index.ngfactory,_angular_material_form_field,_angular_material_core,_angular_material_input,_angular_cdk_platform,_angular_forms,_.._.._.._.._node_modules__angular_material_paginator_typings_index.ngfactory,_angular_material_paginator,_page_coins.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */

























var styles_PageCoinsComponent = [page_coins_component_css_ngstyle_styles];
var RenderType_PageCoinsComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageCoinsComponent, data: {} });

function View_PageCoinsComponent_1(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"], ["style", "max-width:42px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null)], null, null); }
function View_PageCoinsComponent_2(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:42px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 1, "img", [["class", "bj-page-coins__table__icon"]], [[8, "src", 4]], null, null, null, null)), core["_20" /* ɵppd */](3, 1)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent, 0), _v.context.$implicit.symbol)); _ck(_v, 2, 0, currVal_0); }); }
function View_PageCoinsComponent_3(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_4(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 5, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 3, "a", [["class", "bj-page-coins__table__link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](3, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵpad */](4, 2), (_l()(), core["_24" /* ɵted */](5, null, ["", " (", ")"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/coins", _v.context.$implicit.symbol); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 3).target; var currVal_1 = core["_16" /* ɵnov */](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; var currVal_4 = _v.context.$implicit.symbol; _ck(_v, 5, 0, currVal_3, currVal_4); });
}
function View_PageCoinsComponent_5(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"], ["style", "max-width:130px"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u0426\u0435\u043D\u0430, $"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_6(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:130px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent, 1), _v.context.$implicit.priceUSD, "1.2-8")); _ck(_v, 2, 0, currVal_0); }); }
function View_PageCoinsComponent_7(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F, $"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_8(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent, 1), _v.context.$implicit.capitalizationUSD, "1.2-2")); _ck(_v, 2, 0, currVal_0); }); }
function View_PageCoinsComponent_9(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"], ["style", "max-width:150px"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u0426\u0435\u043D\u0430, \u20BD"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_10(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:150px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent, 1), _v.context.$implicit.priceRUB, "1.2-8")); _ck(_v, 2, 0, currVal_0); }); }
function View_PageCoinsComponent_11(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F, \u20BD"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_12(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "font-size:12px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent, 1), _v.context.$implicit.capitalizationRUB, "1.2-2")); _ck(_v, 2, 0, currVal_0); }); }
function View_PageCoinsComponent_13(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"], ["style", "max-width:130px"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u0426\u0435\u043D\u0430, BTC"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_14(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:130px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](2, null, ["", ""])), core["_20" /* ɵppd */](3, 2)], null, function (_ck, _v) { var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent, 1), _v.context.$implicit.priceBTC, "1.0-12")); _ck(_v, 2, 0, currVal_0); }); }
function View_PageCoinsComponent_15(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"], ["style", "max-width:100px"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["24\u0447"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_16(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:100px; text-align: right"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 1, "span", [], [[2, "bj-common--up", null], [2, "bj-common--down", null]], null, null, null, null)), (_l()(), core["_24" /* ɵted */](3, null, ["", "\u00A0%"]))], null, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.change24h > 0); var currVal_1 = (_v.context.$implicit.change24h < 0); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.change24h; _ck(_v, 3, 0, currVal_2); }); }
function View_PageCoinsComponent_17(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", ""], ["role", "columnheader"], ["style", "max-width:80px"]], [[2, "mat-sort-header-sorted", null], [2, "mat-sort-header-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1)._handleClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, sort_typings_index_ngfactory["b" /* View_MatSortHeader_0 */], sort_typings_index_ngfactory["a" /* RenderType_MatSortHeader */])), core["_3" /* ɵdid */](1, 245760, null, 0, sort_es5["c" /* MatSortHeader */], [sort_es5["d" /* MatSortHeaderIntl */], core["h" /* ChangeDetectorRef */], [2, sort_es5["b" /* MatSort */]], [2, table_es5["d" /* CdkColumnDef */]]], { id: [0, "id"] }, null), core["_3" /* ɵdid */](2, 16384, null, 0, esm5_table_es5["d" /* MatHeaderCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["\u0420\u0435\u0439\u0442\u0438\u043D\u0433"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1)._isSorted(); var currVal_1 = core["_16" /* ɵnov */](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_18(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 6, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"], ["style", "max-width:80px"]], null, null, null, null, null)), core["_3" /* ɵdid */](1, 16384, null, 0, esm5_table_es5["a" /* MatCell */], [table_es5["d" /* CdkColumnDef */], core["k" /* ElementRef */]], null, null), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-star-o"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-star-o"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-star-o"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-star-o"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-star-o"]], null, null, null, null, null))], null, null); }
function View_PageCoinsComponent_19(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "mat-header-row", [["class", "mat-header-row"], ["role", "row"]], null, null, null, table_typings_index_ngfactory["d" /* View_MatHeaderRow_0 */], table_typings_index_ngfactory["a" /* RenderType_MatHeaderRow */])), core["_3" /* ɵdid */](1, 49152, null, 0, esm5_table_es5["f" /* MatHeaderRow */], [], null, null)], null, null); }
function View_PageCoinsComponent_20(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "mat-row", [["class", "mat-row"], ["role", "row"]], null, null, null, table_typings_index_ngfactory["e" /* View_MatRow_0 */], table_typings_index_ngfactory["b" /* RenderType_MatRow */])), core["_3" /* ɵdid */](1, 49152, null, 0, esm5_table_es5["h" /* MatRow */], [], null, null)], null, null); }
function View_PageCoinsComponent_21(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-line"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_3" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_20" /* ɵppd */](2, 2), core["_18" /* ɵpad */](3, 3), core["_3" /* ɵdid */](4, 49152, null, 0, PubLineComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/", core["_25" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_16" /* ɵnov */](_v.parent, 2), _v.context.$implicit.ts, "DATE")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).target; var currVal_1 = core["_16" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageCoinsComponent_0(_l) {
    return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, ccimg_pipe_CoinImagePipe, []), core["_19" /* ɵpid */](0, common["e" /* DecimalPipe */], [core["t" /* LOCALE_ID */]]), core["_19" /* ɵpid */](0, timestamp_TimestampPipe, []), core["_22" /* ɵqud */](402653184, 1, { sort: 0 }), core["_22" /* ɵqud */](402653184, 2, { paginator: 0 }), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 141, "main", [["class", "bj-page-coins__wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 140, "div", [["class", "bj-page-coins__row"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 133, "div", [["class", "bj-page-coins__col bj-common--white-box"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 17, "div", [["class", "bj-page-coins__controls"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 11, "mat-form-field", [["class", "bj-page-coins__controls__filter mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["_3" /* ɵdid */](10, 7389184, null, 7, form_field_es5["b" /* MatFormField */], [core["k" /* ElementRef */], core["h" /* ChangeDetectorRef */], [2, core_es5["h" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), core["_22" /* ɵqud */](335544320, 3, { _control: 0 }), core["_22" /* ɵqud */](335544320, 4, { _placeholderChild: 0 }), core["_22" /* ɵqud */](335544320, 5, { _labelChild: 0 }), core["_22" /* ɵqud */](603979776, 6, { _errorChildren: 1 }), core["_22" /* ɵqud */](603979776, 7, { _hintChildren: 1 }), core["_22" /* ɵqud */](603979776, 8, { _prefixChildren: 1 }), core["_22" /* ɵqud */](603979776, 9, { _suffixChildren: 1 }), (_l()(), core["_4" /* ɵeld */](18, 0, null, 1, 2, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "\u041F\u043E\u0438\u0441\u043A \u0432\u0430\u043B\u044E\u0442\u044B"]], [[2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "keyup"], [null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("blur" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 19)._focusChanged(false) !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (core["_16" /* ɵnov */](_v, 19)._focusChanged(true) !== false);
                ad = (pd_1 && ad);
            }
            if (("input" === en)) {
                var pd_2 = (core["_16" /* ɵnov */](_v, 19)._onInput() !== false);
                ad = (pd_2 && ad);
            }
            if (("keyup" === en)) {
                var pd_3 = (_co.applyFilter($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](19, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [8, null], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"] }, null), core["_21" /* ɵprd */](2048, [[3, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["_4" /* ɵeld */](21, 0, null, null, 4, "div", [["class", "bj-page-coins__controls__currency"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](22, 0, null, null, 1, "button", [["class", "bj-page-coins__controls__currency-button"]], [[2, "bj-page-coins__controls__currency-button--active", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ((_co.filtredPrice = "USD") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["RUB"])), (_l()(), core["_4" /* ɵeld */](24, 0, null, null, 1, "button", [["class", "bj-page-coins__controls__currency-button"]], [[2, "bj-page-coins__controls__currency-button--active", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ((_co.filtredPrice = "RUB") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["USD"])), (_l()(), core["_4" /* ɵeld */](26, 0, null, null, 114, "div", [["class", "bj-page-coins__table-wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](27, 0, null, null, 110, "mat-table", [["class", "bj-page-coins__table mat-table"], ["matSort", ""], ["matSortActive", "capitalizationUSD"], ["matSortDirection", "desc"], ["matSortDisableClear", ""]], null, null, null, table_typings_index_ngfactory["f" /* View_MatTable_0 */], table_typings_index_ngfactory["c" /* RenderType_MatTable */])), core["_3" /* ɵdid */](28, 671744, [[1, 4]], 0, sort_es5["b" /* MatSort */], [], { active: [0, "active"], direction: [1, "direction"], disableClear: [2, "disableClear"] }, null), core["_3" /* ɵdid */](29, 3391488, [["table", 4]], 3, esm5_table_es5["j" /* MatTable */], [core["r" /* IterableDiffers */], core["h" /* ChangeDetectorRef */], core["k" /* ElementRef */], [8, null]], { dataSource: [0, "dataSource"] }, null), core["_22" /* ɵqud */](603979776, 10, { _columnDefs: 1 }), core["_22" /* ɵqud */](335544320, 11, { _headerDef: 0 }), core["_22" /* ɵqud */](603979776, 12, { _rowDefs: 1 }), (_l()(), core["_4" /* ɵeld */](33, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](34, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 13, { cell: 0 }), core["_22" /* ɵqud */](335544320, 14, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_1)), core["_3" /* ɵdid */](39, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[14, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_2)), core["_3" /* ɵdid */](42, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[13, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](44, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](45, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 15, { cell: 0 }), core["_22" /* ɵqud */](335544320, 16, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_3)), core["_3" /* ɵdid */](50, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[16, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_4)), core["_3" /* ɵdid */](53, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[15, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](55, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](56, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 17, { cell: 0 }), core["_22" /* ɵqud */](335544320, 18, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_5)), core["_3" /* ɵdid */](61, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[18, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_6)), core["_3" /* ɵdid */](64, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[17, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](66, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](67, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 19, { cell: 0 }), core["_22" /* ɵqud */](335544320, 20, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_7)), core["_3" /* ɵdid */](72, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[20, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_8)), core["_3" /* ɵdid */](75, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[19, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](77, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](78, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 21, { cell: 0 }), core["_22" /* ɵqud */](335544320, 22, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_9)), core["_3" /* ɵdid */](83, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[22, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_10)), core["_3" /* ɵdid */](86, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[21, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](88, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](89, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 23, { cell: 0 }), core["_22" /* ɵqud */](335544320, 24, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_11)), core["_3" /* ɵdid */](94, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[24, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_12)), core["_3" /* ɵdid */](97, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[23, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](99, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](100, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 25, { cell: 0 }), core["_22" /* ɵqud */](335544320, 26, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_13)), core["_3" /* ɵdid */](105, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[26, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_14)), core["_3" /* ɵdid */](108, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[25, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](110, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](111, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 27, { cell: 0 }), core["_22" /* ɵqud */](335544320, 28, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_15)), core["_3" /* ɵdid */](116, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[28, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_16)), core["_3" /* ɵdid */](119, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[27, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["_4" /* ɵeld */](121, 0, null, null, 10, null, null, null, null, null, null, null)), core["_3" /* ɵdid */](122, 16384, null, 2, esm5_table_es5["c" /* MatColumnDef */], [], { name: [0, "name"] }, null), core["_22" /* ɵqud */](335544320, 29, { cell: 0 }), core["_22" /* ɵqud */](335544320, 30, { headerCell: 0 }), core["_21" /* ɵprd */](2048, [[10, 4]], table_es5["d" /* CdkColumnDef */], null, [esm5_table_es5["c" /* MatColumnDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_17)), core["_3" /* ɵdid */](127, 16384, null, 0, esm5_table_es5["e" /* MatHeaderCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[30, 4]], table_es5["f" /* CdkHeaderCellDef */], null, [esm5_table_es5["e" /* MatHeaderCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_18)), core["_3" /* ɵdid */](130, 16384, null, 0, esm5_table_es5["b" /* MatCellDef */], [core["K" /* TemplateRef */]], null, null), core["_21" /* ɵprd */](2048, [[29, 4]], table_es5["b" /* CdkCellDef */], null, [esm5_table_es5["b" /* MatCellDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_19)), core["_3" /* ɵdid */](133, 540672, null, 0, esm5_table_es5["g" /* MatHeaderRowDef */], [core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { columns: [0, "columns"] }, null), core["_21" /* ɵprd */](2048, [[11, 4]], table_es5["h" /* CdkHeaderRowDef */], null, [esm5_table_es5["g" /* MatHeaderRowDef */]]), (_l()(), core["Z" /* ɵand */](0, null, null, 2, null, View_PageCoinsComponent_20)), core["_3" /* ɵdid */](136, 540672, null, 0, esm5_table_es5["i" /* MatRowDef */], [core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { columns: [0, "columns"] }, null), core["_21" /* ɵprd */](2048, [[12, 4]], table_es5["j" /* CdkRowDef */], null, [esm5_table_es5["i" /* MatRowDef */]]), (_l()(), core["_4" /* ɵeld */](138, 0, null, null, 2, "mat-paginator", [["class", "mat-paginator"]], null, null, null, paginator_typings_index_ngfactory["b" /* View_MatPaginator_0 */], paginator_typings_index_ngfactory["a" /* RenderType_MatPaginator */])), core["_3" /* ɵdid */](139, 245760, [[2, 4], ["paginator", 4]], 0, paginator_es5["b" /* MatPaginator */], [paginator_es5["c" /* MatPaginatorIntl */], core["h" /* ChangeDetectorRef */]], { pageSize: [0, "pageSize"], pageSizeOptions: [1, "pageSizeOptions"] }, null), core["_18" /* ɵpad */](140, 5), (_l()(), core["_4" /* ɵeld */](141, 0, null, null, 5, "aside", [["class", "bj-page-coins__aside"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](142, 0, null, null, 1, "h1", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["Z" /* ɵand */](16777216, null, null, 2, null, View_PageCoinsComponent_21)), core["_3" /* ɵdid */](145, 802816, null, 0, common["k" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_19" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_26 = "\u041F\u043E\u0438\u0441\u043A \u0432\u0430\u043B\u044E\u0442\u044B"; _ck(_v, 19, 0, currVal_26); var currVal_29 = "capitalizationUSD"; var currVal_30 = "desc"; var currVal_31 = ""; _ck(_v, 28, 0, currVal_29, currVal_30, currVal_31); var currVal_32 = _co.dataSource; _ck(_v, 29, 0, currVal_32); var currVal_33 = "icon"; _ck(_v, 34, 0, currVal_33); var currVal_34 = "title"; _ck(_v, 45, 0, currVal_34); var currVal_35 = "priceUSD"; _ck(_v, 56, 0, currVal_35); var currVal_36 = "capitalizationUSD"; _ck(_v, 67, 0, currVal_36); var currVal_37 = "priceRUB"; _ck(_v, 78, 0, currVal_37); var currVal_38 = "capitalizationRUB"; _ck(_v, 89, 0, currVal_38); var currVal_39 = "priceBTC"; _ck(_v, 100, 0, currVal_39); var currVal_40 = "change24h"; _ck(_v, 111, 0, currVal_40); var currVal_41 = "rating"; _ck(_v, 122, 0, currVal_41); var currVal_42 = _co.displayedColumns; _ck(_v, 133, 0, currVal_42); var currVal_43 = _co.displayedColumns; _ck(_v, 136, 0, currVal_43); var currVal_44 = 100; var currVal_45 = _ck(_v, 140, 0, 50, 100, 200, 1000, 9999); _ck(_v, 139, 0, currVal_44, currVal_45); var currVal_46 = core["_25" /* ɵunv */](_v, 145, 0, core["_16" /* ɵnov */](_v, 146).transform(_co.publications)); _ck(_v, 145, 0, currVal_46); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_16" /* ɵnov */](_v, 10)._control.errorState; var currVal_1 = core["_16" /* ɵnov */](_v, 10)._control.errorState; var currVal_2 = core["_16" /* ɵnov */](_v, 10)._canLabelFloat; var currVal_3 = core["_16" /* ɵnov */](_v, 10)._shouldLabelFloat(); var currVal_4 = core["_16" /* ɵnov */](_v, 10)._hideControlPlaceholder(); var currVal_5 = core["_16" /* ɵnov */](_v, 10)._control.disabled; var currVal_6 = core["_16" /* ɵnov */](_v, 10)._control.focused; var currVal_7 = (core["_16" /* ɵnov */](_v, 10).color == "primary"); var currVal_8 = (core["_16" /* ɵnov */](_v, 10).color == "accent"); var currVal_9 = (core["_16" /* ɵnov */](_v, 10).color == "warn"); var currVal_10 = core["_16" /* ɵnov */](_v, 10)._shouldForward("untouched"); var currVal_11 = core["_16" /* ɵnov */](_v, 10)._shouldForward("touched"); var currVal_12 = core["_16" /* ɵnov */](_v, 10)._shouldForward("pristine"); var currVal_13 = core["_16" /* ɵnov */](_v, 10)._shouldForward("dirty"); var currVal_14 = core["_16" /* ɵnov */](_v, 10)._shouldForward("valid"); var currVal_15 = core["_16" /* ɵnov */](_v, 10)._shouldForward("invalid"); var currVal_16 = core["_16" /* ɵnov */](_v, 10)._shouldForward("pending"); _ck(_v, 9, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); var currVal_17 = core["_16" /* ɵnov */](_v, 19)._isServer; var currVal_18 = core["_16" /* ɵnov */](_v, 19).id; var currVal_19 = core["_16" /* ɵnov */](_v, 19).placeholder; var currVal_20 = core["_16" /* ɵnov */](_v, 19).disabled; var currVal_21 = core["_16" /* ɵnov */](_v, 19).required; var currVal_22 = core["_16" /* ɵnov */](_v, 19).readonly; var currVal_23 = (core["_16" /* ɵnov */](_v, 19)._ariaDescribedby || null); var currVal_24 = core["_16" /* ɵnov */](_v, 19).errorState; var currVal_25 = core["_16" /* ɵnov */](_v, 19).required.toString(); _ck(_v, 18, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_27 = (_co.filtredPrice === "USD"); _ck(_v, 22, 0, currVal_27); var currVal_28 = (_co.filtredPrice === "RUB"); _ck(_v, 24, 0, currVal_28); });
}
function View_PageCoinsComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "page-coins", [["class", "page"]], null, null, null, View_PageCoinsComponent_0, RenderType_PageCoinsComponent)), core["_3" /* ɵdid */](1, 4308992, null, 0, page_coins_component_PageCoinsComponent, [api_service_APIService, meta_service_MetaService, loader_service_LoaderService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageCoinsComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("page-coins.page", page_coins_component_PageCoinsComponent, View_PageCoinsComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/article/page-article.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_article_component_css_ngstyle_styles = [".bj-page-article__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}@media (min-width:600px){.bj-page-article__wrapper{padding:var(--indent-double) var(--indent-base)}}@media (min-width:1200px){.bj-page-article__wrapper{padding:var(--indent-double)}}.bj-page-article__row{width:100%;display:flex;justify-content:flex-start;align-items:stretch}.bj-page-article__col{flex:1 1 auto}.bj-page-article__aside{width:var(--aside-width);flex:0 0 var(--aside-width);margin-left:var(--indent-double);flex-direction:column;justify-content:flex-start;align-items:center;display:none}@media (min-width:900px){.bj-page-article__aside{display:flex}}"];


// CONCATENATED MODULE: ./components/article/article.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var article_component_css_ngstyle_styles = [".bj-article{display:block;width:100%}.bj-article__header{position:relative;width:100%;padding:var(--indent-double) 0}.bj-article__header__picture,.bj-article__header__picture:after{display:block;position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%}.bj-article__header__picture{box-sizing:border-box;overflow:hidden;background:#f9f9f9}.bj-article__header__picture img{display:block;box-sizing:border-box;position:absolute;min-width:100%;min-height:100%;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover}.bj-article__header__picture:after{content:\"\";background:rgba(36,41,46,.5)}.bj-article__header__tags{display:flex;position:relative;width:100%;max-width:var(--max-article-width);height:30px;margin:0 auto;padding:0 20px;flex-wrap:wrap;overflow:hidden}.bj-article__header__tags a{display:block;position:relative;text-decoration:none;text-transform:uppercase;font-size:13px;font-weight:300;line-height:21px;background:rgba(36,41,46,.9);color:#fff;margin-right:8px;padding:5px 5px 0}.bj-article__header__tags a:after,.bj-article__header__tags a:before{display:block;content:\"\";position:absolute;width:0;height:0;top:0}.bj-article__header__tags a:before{left:-5px;border-bottom:30px solid rgba(36,41,46,.9);border-left:5px solid transparent}.bj-article__header__tags a:after{right:-5px;border-top:30px solid rgba(36,41,46,.9);border-right:5px solid transparent}.bj-article__header__tags a:first-child:before,.bj-article__header__tags a:last-child:after{display:none}.bj-article__header__datetime,.bj-article__header__h1,.bj-article__header__h2{display:block;position:relative;width:100%;max-width:var(--max-article-width);padding:0 20px;color:#fff}.bj-article__header__datetime{margin:var(--indent-double) auto 0;font-size:14px}.bj-article__header__datetime i{margin-right:.5em}.bj-article__header__h1,.bj-article__header__h2{margin:10px auto 20px;font-family:inherit;font-size:2rem;font-weight:500;line-height:1.35}.bj-article__header__h1{font-size:1.1rem}@media (min-width:600px){.bj-article__header__h1,.bj-article__header__h2{font-size:2.25rem}}.bj-article__header__h2+.bj-article__header__h1{margin-top:-12px;font-size:1.2rem;font-weight:400}@media (min-width:600px){.bj-article__header__h2+.bj-article__header__h1{font-size:1.2rem}}.bj-article__share{display:block;position:relative;width:100%;max-width:var(--max-article-width);padding:0 20px;margin:40px auto 0}"];


// CONCATENATED MODULE: ./components/share/share.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var share_component_css_ngstyle_styles = [".share,.share__item{display:flex;height:30px;justify-content:flex-start;align-items:stretch}.share__item{flex:0 0 auto;overflow:hidden;text-decoration:none;text-transform:none;font-size:13px;font-weight:300;line-height:1;color:#fff;background:0 0;margin-right:10px}@media (min-width:400px){.share__item{margin-right:20px}}.share__item__icon,.share__item__text{height:30px;align-items:center;background:var(--background-color)}.share__item__icon{display:flex;justify-content:center;width:30px;flex:0 0 30px}.share__item__icon svg{width:18px;height:18px}.share__item__icon path{fill:currentColor}.share__item__text{display:none;flex:0 0 auto;border-left:1px solid #fff;padding:0 .7em;white-space:nowrap}@media (min-width:450px){.share__item--fb .share__item__text{display:flex}}@media (min-width:550px){.share__item--vk .share__item__text{display:flex}}@media (min-width:650px){.share__item--twitter .share__item__text{display:flex}}@media (min-width:750px){.share__item--telegram .share__item__text{display:flex}}@media (min-width:900px){.share__item--google .share__item__text,.share__item--telegram .share__item__text,.share__item--twitter .share__item__text,.share__item--viber .share__item__text,.share__item--whatsapp .share__item__text{display:none}}@media (min-width:1000px){.share__item--twitter .share__item__text{display:flex}}@media (min-width:1100px){.share__item--telegram .share__item__text{display:flex}}.share__item__text span{white-space:nowrap}.share__item--fb{--background-color:#3b5998}.share__item--twitter{--background-color:#1ea2f4}.share__item--vk{--background-color:#6478a1}.share__item--telegram{--background-color:#31afec}.share__item--whatsapp{--background-color:#26d365}.share__item--viber{--background-color:#8f5db7}.share__item--google{--background-color:#dc5144}"];


// CONCATENATED MODULE: ./components/share/share.component.ngfactory.js
/** PURE_IMPORTS_START _share.component.css.ngstyle,_angular_core,_share.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _share.component.css.ngstyle,_angular_core,_share.component PURE_IMPORTS_END */



var styles_ShareComponent = [share_component_css_ngstyle_styles];
var RenderType_ShareComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_ShareComponent, data: {} });

function View_ShareComponent_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 6, "a", [["class", "share__item share__item--fb"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 0, ":svg:path", [["d", "M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1 .2-1.3 1-1.3h3V0h-3.8C10.6 0 9 1.6 9 4.6V8z"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Facebook"])), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 6, "a", [["class", "share__item share__item--vk"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](10, 0, null, null, 0, ":svg:path", [["d", "M13.2 19c.6 0 .8-.4.8-1 0-1.8.7-3 2-1.5 1.6 1.5 2 2.5 3.7 2.5H23c.7 0 1-.3 1-.7 0-.8-1.4-2.4-2.6-3.5-1.7-1.5-1.8-1.6-.3-3.5C23 9 25.3 6 23 6h-3.8c-.8 0-1 .4-1 1-1 2.4-3 5.5-3.8 5-.7-.5-.4-2.4-.3-5.3 0-.7 0-1.2-1-1.5L11 5C9 5 7.4 6 8.3 6c1.6.4 1.4 3.8 1 5.3-.6 2.5-3-2-4-4.3C5 6.4 5 6 4 6H.8c-.5 0-.8.2-.8.5 0 .6 3 6.7 5.8 9.8 2.7 3 5.5 2.7 7.4 2.7z"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](11, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"])), (_l()(), core["_4" /* ɵeld */](14, 0, null, null, 6, "a", [["class", "share__item share__item--twitter"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](15, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](16, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](17, 0, null, null, 0, ":svg:path", [["d", "M24 4.6c-1 .3-1.8.6-2.8.7 1-.6 1.8-1.5 2-2.7-.8.6-2 1-3 1.2-1-1-2.2-1.6-3.6-1.6-3.2 0-5.5 3-4.8 6-4 0-7.7-2-10-5C.3 5.3 1 8 3 9.6c-.8 0-1.6-.2-2.2-.6 0 2.4 1.5 4.5 4 5-.8.2-1.5.2-2.3 0 .6 2 2.4 3.5 4.6 3.5-2 1.6-4.7 2.3-7.3 2 2.2 1.4 4.8 2.3 7.5 2.3 9.2 0 14.4-7.8 14-14.7 1-.6 1.8-1.5 2.5-2.4z"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](18, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](19, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Twitter"])), (_l()(), core["_4" /* ɵeld */](21, 0, null, null, 6, "a", [["class", "share__item share__item--telegram"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](22, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](23, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](24, 0, null, null, 0, ":svg:path", [["d", "M.4 11.6l5.6 2 2 7c.2.3.8.5 1 .2l3.2-2.5c.3-.3.8-.3 1 0l5.7 4c.3.3.8 0 1-.4l4-19.7c0-.5-.4-1-1-.7L.5 10.4c-.5.2-.5 1 0 1.2zm7.3 1l10.8-6.8c.3 0 .5.2.3.4l-9 8.3-.5 1L9 18c0 .3-.5.3-.5 0l-1.2-4c-.2-.5 0-1 .4-1.3z"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](25, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](26, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Telegram"])), (_l()(), core["_4" /* ɵeld */](28, 0, null, null, 6, "a", [["class", "share__item share__item--whatsapp"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](29, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](30, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](31, 0, null, null, 0, ":svg:path", [["d", "M0 24l1.7-6.2C.7 16 .2 14 .2 11.8.2 5.4 5.5 0 12.2 0c3 0 6 1.2 8.3 3.5C22.7 5.7 24 8.7 24 12c0 6.5-5.4 11.8-12 11.8-2 0-4-.5-5.6-1.5L0 24zm6.7-3.8c1.6 1 3.2 1.6 5.3 1.6 5.5 0 10-4.4 10-10C22 6.5 17.4 2 12 2 6.7 2 2.3 6.4 2.3 12c0 2 .6 3.8 1.7 5.5l-1 3.7 3.7-1zM18 14.7l-.5-.3-2-1c-.3 0-.5 0-.7.2-.2.3-.8 1-1 1 0 .3-.3.4-.6.2-.3 0-1.3-.5-2.4-1.5-1-.8-1.5-1.7-1.7-2 0-.3 0-.5.3-.6 0-.2.3-.4.4-.6.2 0 .2-.2.3-.4V9L9 7c-.2-.7-.4-.6-.6-.6h-.6c-.2 0-.5 0-.8.4s-1 1-1 2.5 1 2.8 1.2 3c.2.2 2 3.2 5 4.5l1.8.6c.7.3 1.3.2 2 .2.4 0 1.6-.8 2-1.5v-1.3z"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](32, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](33, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["WhatsApp"])), (_l()(), core["_4" /* ɵeld */](35, 0, null, null, 6, "a", [["class", "share__item share__item--viber"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](36, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](37, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](38, 0, null, null, 0, ":svg:path", [["d", "M14.3 0H9.7A8.7 8.7 0 0 0 1 8.7v4.1c0 3.6 2.2 6.8 5.5 8.1v2.7c0 .2.1.3.3.4H7l.3-.1 2.7-2.4h4.4c4.8 0 8.7-3.9 8.7-8.7V8.7C23 3.9 19.1 0 14.3 0zm7.8 12.8c0 4.3-3.5 7.8-7.8 7.8H9.8l-.3.1-2 1.8v-2c0-.2-.1-.4-.3-.4A7.8 7.8 0 0 1 2 12.8V8.7C2 4.4 5.5.9 9.8.9h4.6c4.3 0 7.8 3.5 7.8 7.8l-.1 4.1zM18 13.9l-2.8-1.8c-.3-.2-.7-.3-1-.2-.4.1-.7.3-.9.6l-.1.2c-1.2-.4-2.6-.9-3.4-3.2l.3-.3c.6-.5.6-1.4.1-1.9L8.1 4.7c-.2-.2-.5-.2-.6 0L6.1 5.9c-1.2 1-.7 2.6-.5 3.1v.1a20 20 0 0 0 3 4c1.9 1.9 5.2 3.6 5.3 3.7.4.2.8.4 1.2.4.7 0 1.5-.4 1.9-1l1-1.5c.3-.3.3-.6 0-.8zm-1.6 1.7c-.4.6-1.3.8-1.9.4 0 0-3.4-1.8-5.1-3.5C7.8 10.8 6.7 9 6.5 8.7c-.4-1.1-.3-1.7.2-2.1l1-.9 1.9 2.2c.2.2.1.5 0 .6L9 9c-.1.1-.2.3-.1.5 1 3.1 2.8 3.7 4.2 4.2l.2.1c.2.1.4 0 .5-.2l.3-.5.3-.2.3.1 2.4 1.6-.7 1zM13 7.4c-.2-.1-.5.1-.6.3-.1.2.1.5.3.6a2 2 0 0 1 1.5 1.4c.1.2.2.3.4.3h.1c.2-.1.4-.3.3-.6-.2-.9-1-1.7-2-2zm3.5 2.8h.1c.2-.1.4-.3.3-.6a6 6 0 0 0-4-4c-.2-.1-.5.1-.6.3s.1.5.3.6c1.6.5 2.9 1.7 3.3 3.3.2.2.4.4.6.4zm-3.7-6.7c-.2-.1-.5.1-.6.3-.1.2.1.5.3.6 2.7.8 4.9 2.9 5.7 5.7.1.2.2.3.4.3h.1c.2-.1.4-.3.3-.6a8.8 8.8 0 0 0-6.2-6.3z"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](39, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](40, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Viber"])), (_l()(), core["_4" /* ɵeld */](42, 0, null, null, 6, "a", [["class", "share__item share__item--google"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](43, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](44, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](45, 0, null, null, 0, ":svg:path", [["d", "M7 11v2.4h4c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1l2-1.8C10.4 5.8 8.7 5 7 5c-4 0-7 3-7 7s3 7 7 7 6.7-2.8 6.7-6.8V11H7zm0 0l17 2h-3v3h-2v-3h-3v-2h3V8h2v3h3v2z"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](46, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](47, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Googel+"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fbUrl; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.vkUrl; _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.twitterUrl; _ck(_v, 14, 0, currVal_2); var currVal_3 = _co.telegramUrl; _ck(_v, 21, 0, currVal_3); var currVal_4 = _co.whatsappUrl; _ck(_v, 28, 0, currVal_4); var currVal_5 = _co.viberUrl; _ck(_v, 35, 0, currVal_5); var currVal_6 = _co.googleUrl; _ck(_v, 42, 0, currVal_6); }); }
function View_ShareComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "share"]], null, null, null, View_ShareComponent_0, RenderType_ShareComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, share_component_ShareComponent, [], null, null)], null, null); }
var ShareComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".share", share_component_ShareComponent, View_ShareComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/article/article.component.ngfactory.js
/** PURE_IMPORTS_START _article.component.css.ngstyle,_angular_core,_share_share.component.ngfactory,_share_share.component,_angular_common,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_article.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _article.component.css.ngstyle,_angular_core,_share_share.component.ngfactory,_share_share.component,_angular_common,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_article.component PURE_IMPORTS_END */








var styles_ArticleComponent = [article_component_css_ngstyle_styles];
var RenderType_ArticleComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_ArticleComponent, data: {} });

function View_ArticleComponent_2(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 12, "div", [["class", "bj-article__header__tags"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["#\u0422\u0435\u0433 1"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["#\u0422\u0435\u0433as 2"])), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["#\u0422\u0435asd\u0433 3 cas"])), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["#\u0422\u0435\u0433asd 4"])), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["#\u0422\u0435sd \u043F\u0444\u0442\u044C"])), (_l()(), core["_4" /* ɵeld */](11, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["#\u0422\u0435\u0433asd "]))], null, null); }
function View_ArticleComponent_3(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "h2", [["class", "bj-article__header__h2"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.bigTitle; _ck(_v, 1, 0, currVal_0); }); }
function View_ArticleComponent_4(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 3, "div", [["class", "bj-article__share share"]], null, null, null, View_ShareComponent_0, RenderType_ShareComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, share_component_ShareComponent, [], { value: [0, "value"] }, null), core["_20" /* ɵppd */](2, 2), core["_18" /* ɵpad */](3, 2)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, core["_25" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_16" /* ɵnov */](_v.parent.parent, 1), _co.value.ts, "URL")), _co.value.url); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ArticleComponent_1(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 17, "div", [["class", "bj-article__header"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 2, "picture", [["class", "bj-article__header__picture"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_20" /* ɵppd */](3, 1), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_2)), core["_3" /* ɵdid */](5, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 5, "time", [["class", "bj-article__header__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_20" /* ɵppd */](7, 1), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-clock-o"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](10, null, ["", ""])), core["_20" /* ɵppd */](11, 2), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_3)), core["_3" /* ɵdid */](13, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](14, 0, null, null, 1, "h1", [["class", "bj-article__header__h1"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](15, null, ["", ""])), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_4)), core["_3" /* ɵdid */](17, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.value.tags.length > 0); _ck(_v, 5, 0, currVal_1); var currVal_4 = !!_co.value.bigTitle; _ck(_v, 13, 0, currVal_4); var currVal_6 = _co.value; _ck(_v, 17, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_16" /* ɵnov */](_v.parent, 0), _co.value.image)); _ck(_v, 2, 0, currVal_0); var currVal_2 = core["_25" /* ɵunv */](_v, 6, 0, _ck(_v, 7, 0, core["_16" /* ɵnov */](_v.parent, 1), _co.value.ts)); _ck(_v, 6, 0, currVal_2); var currVal_3 = core["_25" /* ɵunv */](_v, 10, 0, _ck(_v, 11, 0, core["_16" /* ɵnov */](_v.parent, 1), _co.value.ts, "HR")); _ck(_v, 10, 0, currVal_3); var currVal_5 = _co.value.title; _ck(_v, 15, 0, currVal_5); }); }
function View_ArticleComponent_0(_l) { return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_19" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["Z" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_1)), core["_3" /* ɵdid */](3, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 24, "div", [["class", "bj-article__content article"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u043C\u044F\u0443\u0435\u0434\u043F\u043B\u0442\u0442\u0443\u0434\u043F\u043B\u0443\u043A\u043B\u043F\u044C\u043B\u043A\u043F\u044C\u043B\u043F\u04433\u043B\u043F\u0442\u044C34\u043B\u0434\u0436\u044C\u043B\u0434\u043B\u044C\u043043\u0434\u043B\u0430\u044C"])), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 11, "ol", [], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u043B3\u0442\u0437\u043A\u043F\u044C\u0436\u043B\u0434\u043A3\u0442\u043F\u04303\u0436\u0434\u0430\u043B\u0442\u044C\u0436\u043B3\u0449\u0436\u0448\u0449\u043A\u0442\u0449\u043A\u0435\u0449\u0442\u0436\u043A\u0435\u043C\u0434\u043B\u043A\u0430\u043C\u0434\u0442\u0436\u043B\u043A\u043C\u0442\u0436\u043B\u0434 "])), (_l()(), core["_4" /* ɵeld */](10, 0, null, null, 5, "ul", [], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](11, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](12, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0443\u043F\u044C\u043B\u043F\u0434\u043B\u043F\u0434\u043B\u043F\u0434\u044C\u0442\u043F\u0443\u0434\u0442\u043F\u043B\u043F\u043B\u0434"])), (_l()(), core["_4" /* ɵeld */](14, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u044C\u043B\u0443\u043A\u044C\u043B\u0434\u0443\u0434\u044C\u043B\u043F\u044C\u0442\u043F\u043B\u0434"])), (_l()(), core["_4" /* ɵeld */](16, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](17, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0443\u043F\u044C\u043B\u043F\u0434\u043B\u043F\u0434\u043B\u043F\u0434\u044C\u0442\u043F\u0443\u0434\u0442\u043F\u043B\u043F\u043B\u0434"])), (_l()(), core["_4" /* ɵeld */](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u043C\u044F\u0443\u0435\u0434\u043F\u043B\u0442\u0442\u0443\u0434\u043F\u043B\u0443\u043A\u043B\u043F\u044C\u043B\u043A\u043F\u044C\u043B\u043F\u04433\u043B\u043F\u0442\u044C34\u043B\u0434\u0436\u044C\u043B\u0434\u043B\u044C\u043043\u0434\u043B\u0430\u044C"])), (_l()(), core["_4" /* ɵeld */](21, 0, null, null, 7, "blockquote", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, [" \u041A\u043E\u0433\u0434\u0430 \u043C\u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u043B\u043E\u0441\u044C 23 \u0433\u043E\u0434\u0430, \u0443 \u043C\u0435\u043D\u044F \u0443\u0436\u0435 \u0431\u044B\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430 \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432, \u0432 24 \u0433\u043E\u0434\u0430 \u2014 \u0431\u043E\u043B\u044C\u0448\u0435 10 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432, \u0430 \u0432 25 \u043B\u0435\u0442 \u2014 \u0431\u043E\u043B\u044C\u0448\u0435 100 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432. \u0418 \u0432\u0441\u0451 \u044D\u0442\u043E \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u044F \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0434\u0435\u043B\u0430\u043B \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0430\u0434\u0438 \u0434\u0435\u043D\u0435\u0433. "])), (_l()(), core["_4" /* ɵeld */](23, 0, null, null, 1, "picture", [], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](24, 0, null, null, 0, "img", [["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/267px-Steve_Jobs_Headshot_2010-CROP.jpg"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](25, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0421\u0442\u0438\u0432 \u0414\u0436\u043E\u0431\u0441"])), (_l()(), core["_4" /* ɵeld */](27, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Apple inc."]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ArticleComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-article"]], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, ArticleComponent, [], null, null)], null, null); }
var ArticleComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".bj-article", ArticleComponent, View_ArticleComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pages/article/page-article.component.ngfactory.js
/** PURE_IMPORTS_START _page_article.component.css.ngstyle,_angular_core,_.._pub_line_pub_line.component.ngfactory,_angular_router,_angular_common,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_.._article_article.component.ngfactory,_.._article_article.component,_page_article.component,_angular_platform_browser,_.._.._services_context_context,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_article.component.css.ngstyle,_angular_core,_.._pub_line_pub_line.component.ngfactory,_angular_router,_angular_common,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_.._article_article.component.ngfactory,_.._article_article.component,_page_article.component,_angular_platform_browser,_.._.._services_context_context,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */















var styles_PageArticleComponent = [page_article_component_css_ngstyle_styles];
var RenderType_PageArticleComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageArticleComponent, data: {} });

function View_PageArticleComponent_1(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-line"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_3" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_20" /* ɵppd */](2, 2), core["_18" /* ɵpad */](3, 3), core["_3" /* ɵdid */](4, 49152, null, 0, PubLineComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/", core["_25" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_16" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "DATE")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).target; var currVal_1 = core["_16" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageArticleComponent_0(_l) { return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 10, "main", [["class", "bj-page-article__wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 9, "div", [["class", "bj-page-article__row"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 2, "article", [["class", "bj-page-article__col bj-common--white-box bj-article"]], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_3" /* ɵdid */](4, 49152, null, 0, ArticleComponent, [], { value: [0, "value"] }, null), core["_19" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 5, "aside", [["class", "bj-page-article__aside"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 1, "h1", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0442\u0430\u043A\u0436\u0435"])), (_l()(), core["Z" /* ɵand */](16777216, null, null, 2, null, View_PageArticleComponent_1)), core["_3" /* ɵdid */](10, 802816, null, 0, common["k" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_19" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 4, 0, core["_16" /* ɵnov */](_v, 5).transform(_co.item)); _ck(_v, 4, 0, currVal_0); var currVal_1 = core["_25" /* ɵunv */](_v, 10, 0, core["_16" /* ɵnov */](_v, 11).transform(_co.publications)); _ck(_v, 10, 0, currVal_1); }, null); }
function View_PageArticleComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "page-article", [["class", "page"]], [[2, "page--loading", null]], null, null, View_PageArticleComponent_0, RenderType_PageArticleComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, page_article_component_PageArticleComponent, [core["A" /* PLATFORM_ID */], platform_browser["k" /* TransferState */], ContextService, router["a" /* ActivatedRoute */], api_service_APIService, meta_service_MetaService, loader_service_LoaderService], null, null)], null, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).showLoader; _ck(_v, 0, 0, currVal_0); }); }
var PageArticleComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("page-article.page", page_article_component_PageArticleComponent, View_PageArticleComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/404/page-404.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_404_component_css_ngstyle_styles = [".bj-page-404__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}"];


// CONCATENATED MODULE: ./components/no-content/no-content.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var no_content_component_css_ngstyle_styles = [".bj-no-content{display:block;margin:0;padding:0;font-size:1.17rem;font-weight:400;line-height:1.4}.bj-no-content span{display:block;margin:0 auto;text-align:center}.bj-no-content__code{font-size:5rem;font-weight:500}"];


// CONCATENATED MODULE: ./components/no-content/no-content.component.ngfactory.js
/** PURE_IMPORTS_START _no_content.component.css.ngstyle,_angular_core,_no_content.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _no_content.component.css.ngstyle,_angular_core,_no_content.component PURE_IMPORTS_END */



var styles_NoContentComponent = [no_content_component_css_ngstyle_styles];
var RenderType_NoContentComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_NoContentComponent, data: {} });

function View_NoContentComponent_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 8, "h1", [["class", "bj-no-content"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "span", [["class", "bj-no-content__code"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["404"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"])), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041D\u043E \u043C\u044B \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u043B\u0438 \u0430\u0434\u0440\u0435\u0441"])), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0418 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u043C \u0435\u0435 \u043F\u043E\u0437\u0436\u0435"]))], null, null); }
function View_NoContentComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "no-content", [], null, null, null, View_NoContentComponent_0, RenderType_NoContentComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, NoContentComponent, [], null, null)], null, null); }
var NoContentComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("no-content", NoContentComponent, View_NoContentComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/404/page-404.component.ngfactory.js
/** PURE_IMPORTS_START _page_404.component.css.ngstyle,_angular_core,_.._no_content_no_content.component.ngfactory,_.._no_content_no_content.component,_page_404.component,_.._.._services_context_context PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_404.component.css.ngstyle,_angular_core,_.._no_content_no_content.component.ngfactory,_.._no_content_no_content.component,_page_404.component,_.._.._services_context_context PURE_IMPORTS_END */






var styles_Page404Component = [page_404_component_css_ngstyle_styles];
var RenderType_Page404Component = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_Page404Component, data: {} });

function View_Page404Component_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 2, "main", [["class", "bj-page-404__wrapper"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 1, "no-content", [], null, null, null, View_NoContentComponent_0, RenderType_NoContentComponent)), core["_3" /* ɵdid */](2, 49152, null, 0, NoContentComponent, [], null, null)], null, null); }
function View_Page404Component_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "page-404", [["class", "page"]], null, null, null, View_Page404Component_0, RenderType_Page404Component)), core["_3" /* ɵdid */](1, 114688, null, 0, Page404Component, [ContextService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Page404ComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("page-404.page", Page404Component, View_Page404Component_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/auth/auth-dialog.component.css.shim.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var auth_dialog_component_css_shim_ngstyle_styles = [".auth-form-title[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center}.auth-form[_ngcontent-%COMP%]{min-width:300px}.auth-form-row[_ngcontent-%COMP%]{margin-top:10px;display:block;width:100%}.auth-form-row[_ngcontent-%COMP%]:first-child{margin-top:0}.auth-form-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}"];


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/dialog.es5.js
var dialog_es5 = __webpack_require__(90);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/button/typings/index.ngfactory.js
var button_typings_index_ngfactory = __webpack_require__(191);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/button.es5.js
var button_es5 = __webpack_require__(58);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/cdk/esm5/a11y.es5.js
var a11y_es5 = __webpack_require__(12);

// CONCATENATED MODULE: ./components/auth/auth-dialog.component.ngfactory.js
/** PURE_IMPORTS_START _auth_dialog.component.css.shim.ngstyle,_angular_core,_angular_material_form_field,_angular_material_dialog,_angular_forms,_.._.._.._node_modules__angular_material_form_field_typings_index.ngfactory,_angular_material_core,_angular_material_input,_angular_cdk_platform,_angular_common,_.._.._.._node_modules__angular_material_button_typings_index.ngfactory,_angular_material_button,_angular_cdk_a11y,_auth_dialog.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _auth_dialog.component.css.shim.ngstyle,_angular_core,_angular_material_form_field,_angular_material_dialog,_angular_forms,_.._.._.._node_modules__angular_material_form_field_typings_index.ngfactory,_angular_material_core,_angular_material_input,_angular_cdk_platform,_angular_common,_.._.._.._node_modules__angular_material_button_typings_index.ngfactory,_angular_material_button,_angular_cdk_a11y,_auth_dialog.component PURE_IMPORTS_END */














var styles_AuthDialogComponent = [auth_dialog_component_css_shim_ngstyle_styles];
var RenderType_AuthDialogComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 0, styles: styles_AuthDialogComponent, data: {} });

function View_AuthDialogComponent_1(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_3" /* ɵdid */](1, 16384, [[4, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_24" /* ɵted */](-1, null, ["Email is "])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["required"]))], null, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_2(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_3" /* ɵdid */](1, 16384, [[4, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_24" /* ɵted */](-1, null, ["Please enter a valid email address"]))], null, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_3(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_3" /* ɵdid */](1, 16384, [[11, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_24" /* ɵted */](-1, null, ["Password is "])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["required"]))], null, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_0(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 2, "h1", [["class", "auth-form-title mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), core["_3" /* ɵdid */](1, 81920, null, 0, dialog_es5["j" /* MatDialogTitle */], [[2, dialog_es5["f" /* MatDialogContainer */]]], null, null), (_l()(), core["_24" /* ɵted */](-1, null, ["Authorization"])), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 46, "form", [["class", "auth-form mat-dialog-content"], ["mat-dialog-content", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 5).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["_16" /* ɵnov */](_v, 5).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngSubmit" === en)) {
                var pd_2 = (_co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](4, 16384, null, 0, esm5_forms["r" /* ɵbf */], [], null, null), core["_3" /* ɵdid */](5, 540672, null, 0, esm5_forms["g" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_21" /* ɵprd */](2048, null, esm5_forms["c" /* ControlContainer */], null, [esm5_forms["g" /* FormGroupDirective */]]), core["_3" /* ɵdid */](7, 16384, null, 0, esm5_forms["m" /* NgControlStatusGroup */], [esm5_forms["c" /* ControlContainer */]], null, null), core["_3" /* ɵdid */](8, 16384, null, 0, dialog_es5["g" /* MatDialogContent */], [], null, null), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 20, "mat-form-field", [["class", "auth-form-row mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["_3" /* ɵdid */](10, 7389184, null, 7, form_field_es5["b" /* MatFormField */], [core["k" /* ElementRef */], core["h" /* ChangeDetectorRef */], [2, core_es5["h" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), core["_22" /* ɵqud */](335544320, 1, { _control: 0 }), core["_22" /* ɵqud */](335544320, 2, { _placeholderChild: 0 }), core["_22" /* ɵqud */](335544320, 3, { _labelChild: 0 }), core["_22" /* ɵqud */](603979776, 4, { _errorChildren: 1 }), core["_22" /* ɵqud */](603979776, 5, { _hintChildren: 1 }), core["_22" /* ɵqud */](603979776, 6, { _prefixChildren: 1 }), core["_22" /* ɵqud */](603979776, 7, { _suffixChildren: 1 }), (_l()(), core["_4" /* ɵeld */](18, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "email"], ["matInput", ""], ["placeholder", "E-mail"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 19)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["_16" /* ɵnov */](_v, 19).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["_16" /* ɵnov */](_v, 19)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["_16" /* ɵnov */](_v, 19)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("blur" === en)) {
                var pd_4 = (core["_16" /* ɵnov */](_v, 24)._focusChanged(false) !== false);
                ad = (pd_4 && ad);
            }
            if (("focus" === en)) {
                var pd_5 = (core["_16" /* ɵnov */](_v, 24)._focusChanged(true) !== false);
                ad = (pd_5 && ad);
            }
            if (("input" === en)) {
                var pd_6 = (core["_16" /* ɵnov */](_v, 24)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](19, 16384, null, 0, esm5_forms["d" /* DefaultValueAccessor */], [core["C" /* Renderer2 */], core["k" /* ElementRef */], [2, esm5_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["_21" /* ɵprd */](1024, null, esm5_forms["j" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm5_forms["d" /* DefaultValueAccessor */]]), core["_3" /* ɵdid */](21, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["c" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["j" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_21" /* ɵprd */](2048, null, esm5_forms["k" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_3" /* ɵdid */](23, 16384, null, 0, esm5_forms["l" /* NgControlStatus */], [esm5_forms["k" /* NgControl */]], null, null), core["_3" /* ɵdid */](24, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [2, esm5_forms["k" /* NgControl */]], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["_21" /* ɵprd */](2048, [[1, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["Z" /* ɵand */](16777216, null, 5, 1, null, View_AuthDialogComponent_1)), core["_3" /* ɵdid */](27, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Z" /* ɵand */](16777216, null, 5, 1, null, View_AuthDialogComponent_2)), core["_3" /* ɵdid */](29, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](30, 0, null, null, 18, "mat-form-field", [["class", "auth-form-row mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["_3" /* ɵdid */](31, 7389184, null, 7, form_field_es5["b" /* MatFormField */], [core["k" /* ElementRef */], core["h" /* ChangeDetectorRef */], [2, core_es5["h" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), core["_22" /* ɵqud */](335544320, 8, { _control: 0 }), core["_22" /* ɵqud */](335544320, 9, { _placeholderChild: 0 }), core["_22" /* ɵqud */](335544320, 10, { _labelChild: 0 }), core["_22" /* ɵqud */](603979776, 11, { _errorChildren: 1 }), core["_22" /* ɵqud */](603979776, 12, { _hintChildren: 1 }), core["_22" /* ɵqud */](603979776, 13, { _prefixChildren: 1 }), core["_22" /* ɵqud */](603979776, 14, { _suffixChildren: 1 }), (_l()(), core["_4" /* ɵeld */](39, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "password"], ["matInput", ""], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 40)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["_16" /* ɵnov */](_v, 40).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["_16" /* ɵnov */](_v, 40)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["_16" /* ɵnov */](_v, 40)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("blur" === en)) {
                var pd_4 = (core["_16" /* ɵnov */](_v, 45)._focusChanged(false) !== false);
                ad = (pd_4 && ad);
            }
            if (("focus" === en)) {
                var pd_5 = (core["_16" /* ɵnov */](_v, 45)._focusChanged(true) !== false);
                ad = (pd_5 && ad);
            }
            if (("input" === en)) {
                var pd_6 = (core["_16" /* ɵnov */](_v, 45)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](40, 16384, null, 0, esm5_forms["d" /* DefaultValueAccessor */], [core["C" /* Renderer2 */], core["k" /* ElementRef */], [2, esm5_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["_21" /* ɵprd */](1024, null, esm5_forms["j" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm5_forms["d" /* DefaultValueAccessor */]]), core["_3" /* ɵdid */](42, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["c" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["j" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_21" /* ɵprd */](2048, null, esm5_forms["k" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_3" /* ɵdid */](44, 16384, null, 0, esm5_forms["l" /* NgControlStatus */], [esm5_forms["k" /* NgControl */]], null, null), core["_3" /* ɵdid */](45, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [2, esm5_forms["k" /* NgControl */]], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["_21" /* ɵprd */](2048, [[8, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["Z" /* ɵand */](16777216, null, 5, 1, null, View_AuthDialogComponent_3)), core["_3" /* ɵdid */](48, 16384, null, 0, common["l" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_4" /* ɵeld */](49, 0, null, null, 0, "input", [["hidden", ""], ["type", "submit"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](50, 0, null, null, 5, "mat-dialog-actions", [["class", "mat-dialog-actions"]], null, null, null, null, null)), core["_3" /* ɵdid */](51, 16384, null, 0, dialog_es5["e" /* MatDialogActions */], [], null, null), (_l()(), core["_4" /* ɵeld */](52, 0, null, null, 3, "button", [["class", "auth-form-button mat-button"], ["color", "primary"], ["mat-button", ""], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onSubmit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["b" /* View_MatButton_0 */], button_typings_index_ngfactory["a" /* RenderType_MatButton */])), core["_3" /* ɵdid */](53, 180224, null, 0, button_es5["b" /* MatButton */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], a11y_es5["g" /* FocusMonitor */]], { disabled: [0, "disabled"], color: [1, "color"] }, null), core["_3" /* ɵdid */](54, 16384, null, 0, button_es5["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), core["_24" /* ɵted */](-1, 0, ["Submit"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_8 = _co.authForm; _ck(_v, 5, 0, currVal_8); var currVal_42 = "email"; _ck(_v, 21, 0, currVal_42); var currVal_43 = "E-mail"; var currVal_44 = "text"; _ck(_v, 24, 0, currVal_43, currVal_44); var currVal_45 = _co.authForm.controls.email.hasError("required"); _ck(_v, 27, 0, currVal_45); var currVal_46 = _co.authForm.controls.email.hasError("email"); _ck(_v, 29, 0, currVal_46); var currVal_80 = "password"; _ck(_v, 42, 0, currVal_80); var currVal_81 = "Password"; var currVal_82 = "password"; _ck(_v, 45, 0, currVal_81, currVal_82); var currVal_83 = _co.authForm.controls.password.hasError("required"); _ck(_v, 48, 0, currVal_83); var currVal_85 = _co.authForm.invalid; var currVal_86 = "primary"; _ck(_v, 53, 0, currVal_85, currVal_86); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_16" /* ɵnov */](_v, 7).ngClassUntouched; var currVal_2 = core["_16" /* ɵnov */](_v, 7).ngClassTouched; var currVal_3 = core["_16" /* ɵnov */](_v, 7).ngClassPristine; var currVal_4 = core["_16" /* ɵnov */](_v, 7).ngClassDirty; var currVal_5 = core["_16" /* ɵnov */](_v, 7).ngClassValid; var currVal_6 = core["_16" /* ɵnov */](_v, 7).ngClassInvalid; var currVal_7 = core["_16" /* ɵnov */](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = core["_16" /* ɵnov */](_v, 10)._control.errorState; var currVal_10 = core["_16" /* ɵnov */](_v, 10)._control.errorState; var currVal_11 = core["_16" /* ɵnov */](_v, 10)._canLabelFloat; var currVal_12 = core["_16" /* ɵnov */](_v, 10)._shouldLabelFloat(); var currVal_13 = core["_16" /* ɵnov */](_v, 10)._hideControlPlaceholder(); var currVal_14 = core["_16" /* ɵnov */](_v, 10)._control.disabled; var currVal_15 = core["_16" /* ɵnov */](_v, 10)._control.focused; var currVal_16 = (core["_16" /* ɵnov */](_v, 10).color == "primary"); var currVal_17 = (core["_16" /* ɵnov */](_v, 10).color == "accent"); var currVal_18 = (core["_16" /* ɵnov */](_v, 10).color == "warn"); var currVal_19 = core["_16" /* ɵnov */](_v, 10)._shouldForward("untouched"); var currVal_20 = core["_16" /* ɵnov */](_v, 10)._shouldForward("touched"); var currVal_21 = core["_16" /* ɵnov */](_v, 10)._shouldForward("pristine"); var currVal_22 = core["_16" /* ɵnov */](_v, 10)._shouldForward("dirty"); var currVal_23 = core["_16" /* ɵnov */](_v, 10)._shouldForward("valid"); var currVal_24 = core["_16" /* ɵnov */](_v, 10)._shouldForward("invalid"); var currVal_25 = core["_16" /* ɵnov */](_v, 10)._shouldForward("pending"); _ck(_v, 9, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25]); var currVal_26 = core["_16" /* ɵnov */](_v, 23).ngClassUntouched; var currVal_27 = core["_16" /* ɵnov */](_v, 23).ngClassTouched; var currVal_28 = core["_16" /* ɵnov */](_v, 23).ngClassPristine; var currVal_29 = core["_16" /* ɵnov */](_v, 23).ngClassDirty; var currVal_30 = core["_16" /* ɵnov */](_v, 23).ngClassValid; var currVal_31 = core["_16" /* ɵnov */](_v, 23).ngClassInvalid; var currVal_32 = core["_16" /* ɵnov */](_v, 23).ngClassPending; var currVal_33 = core["_16" /* ɵnov */](_v, 24)._isServer; var currVal_34 = core["_16" /* ɵnov */](_v, 24).id; var currVal_35 = core["_16" /* ɵnov */](_v, 24).placeholder; var currVal_36 = core["_16" /* ɵnov */](_v, 24).disabled; var currVal_37 = core["_16" /* ɵnov */](_v, 24).required; var currVal_38 = core["_16" /* ɵnov */](_v, 24).readonly; var currVal_39 = (core["_16" /* ɵnov */](_v, 24)._ariaDescribedby || null); var currVal_40 = core["_16" /* ɵnov */](_v, 24).errorState; var currVal_41 = core["_16" /* ɵnov */](_v, 24).required.toString(); _ck(_v, 18, 1, [currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]); var currVal_47 = core["_16" /* ɵnov */](_v, 31)._control.errorState; var currVal_48 = core["_16" /* ɵnov */](_v, 31)._control.errorState; var currVal_49 = core["_16" /* ɵnov */](_v, 31)._canLabelFloat; var currVal_50 = core["_16" /* ɵnov */](_v, 31)._shouldLabelFloat(); var currVal_51 = core["_16" /* ɵnov */](_v, 31)._hideControlPlaceholder(); var currVal_52 = core["_16" /* ɵnov */](_v, 31)._control.disabled; var currVal_53 = core["_16" /* ɵnov */](_v, 31)._control.focused; var currVal_54 = (core["_16" /* ɵnov */](_v, 31).color == "primary"); var currVal_55 = (core["_16" /* ɵnov */](_v, 31).color == "accent"); var currVal_56 = (core["_16" /* ɵnov */](_v, 31).color == "warn"); var currVal_57 = core["_16" /* ɵnov */](_v, 31)._shouldForward("untouched"); var currVal_58 = core["_16" /* ɵnov */](_v, 31)._shouldForward("touched"); var currVal_59 = core["_16" /* ɵnov */](_v, 31)._shouldForward("pristine"); var currVal_60 = core["_16" /* ɵnov */](_v, 31)._shouldForward("dirty"); var currVal_61 = core["_16" /* ɵnov */](_v, 31)._shouldForward("valid"); var currVal_62 = core["_16" /* ɵnov */](_v, 31)._shouldForward("invalid"); var currVal_63 = core["_16" /* ɵnov */](_v, 31)._shouldForward("pending"); _ck(_v, 30, 1, [currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63]); var currVal_64 = core["_16" /* ɵnov */](_v, 44).ngClassUntouched; var currVal_65 = core["_16" /* ɵnov */](_v, 44).ngClassTouched; var currVal_66 = core["_16" /* ɵnov */](_v, 44).ngClassPristine; var currVal_67 = core["_16" /* ɵnov */](_v, 44).ngClassDirty; var currVal_68 = core["_16" /* ɵnov */](_v, 44).ngClassValid; var currVal_69 = core["_16" /* ɵnov */](_v, 44).ngClassInvalid; var currVal_70 = core["_16" /* ɵnov */](_v, 44).ngClassPending; var currVal_71 = core["_16" /* ɵnov */](_v, 45)._isServer; var currVal_72 = core["_16" /* ɵnov */](_v, 45).id; var currVal_73 = core["_16" /* ɵnov */](_v, 45).placeholder; var currVal_74 = core["_16" /* ɵnov */](_v, 45).disabled; var currVal_75 = core["_16" /* ɵnov */](_v, 45).required; var currVal_76 = core["_16" /* ɵnov */](_v, 45).readonly; var currVal_77 = (core["_16" /* ɵnov */](_v, 45)._ariaDescribedby || null); var currVal_78 = core["_16" /* ɵnov */](_v, 45).errorState; var currVal_79 = core["_16" /* ɵnov */](_v, 45).required.toString(); _ck(_v, 39, 1, [currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79]); var currVal_84 = (core["_16" /* ɵnov */](_v, 53).disabled || null); _ck(_v, 52, 0, currVal_84); });
}
function View_AuthDialogComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "auth-dialog", [], null, null, null, View_AuthDialogComponent_0, RenderType_AuthDialogComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, auth_dialog_component_AuthDialogComponent, [dialog_es5["i" /* MatDialogRef */], esm5_forms["e" /* FormBuilder */], dialog_es5["a" /* MAT_DIALOG_DATA */]], null, null)], null, null); }
var AuthDialogComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */]("auth-dialog", auth_dialog_component_AuthDialogComponent, View_AuthDialogComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/layout/layout.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var layout_component_css_ngstyle_styles = [".bj-lottery{width:100%;display:block;background:#08090e}.bj-lottery img{display:block;max-width:100%;max-height:200px;margin:0 auto}"];


// CONCATENATED MODULE: ./components/header/header.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var header_component_css_ngstyle_styles = [".bj-header{position:fixed;left:0;top:0;width:100%;height:100px;z-index:900;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.bj-header__row-wrapper{display:block;position:relative;width:100%;height:50%;background:#fff}.bj-header__row-wrapper--dark{background:var(--color-main);color:#fff}.bj-header__row-wrapper--scroll:after,.bj-header__row-wrapper--scroll:before{content:\"\";display:block;position:absolute;top:0;bottom:0;width:var(--indent-base)}.bj-header__row-wrapper--scroll:before{left:0;background:linear-gradient(90deg,#fff 0,#fff 30%,transparent)}.bj-header__row-wrapper--scroll:after{right:0;background:linear-gradient(270deg,#fff 0,#fff 30%,transparent)}.bj-header__row{margin:0 auto;height:100%;max-width:var(--max-width);display:flex}.bj-header__row--hidden{overflow:hidden}@media (min-width:1000px){.bj-header__row{padding:0 0 0 var(--indent-base)}}@media (min-width:1200px){.bj-header__row{padding:0 var(--indent-base) 0 var(--indent-double)}}.bj-header__button{height:100%;padding:0 var(--indent-base);text-transform:uppercase;text-decoration:none;font-family:inherit;font-size:100%;font-style:normal;border:0;border-radius:0;background-color:transparent;box-shadow:none;color:inherit;white-space:nowrap;display:flex;align-items:center;cursor:pointer;transition:background-color .3s}.bj-header__button:hover{background-color:var(--color-hover-light)}.bj-header__button--icon{font-size:1.5rem}.bj-header__button--login{display:none}@media (min-width:1000px){.bj-header__button--menu{display:none}.bj-header__button--login{display:flex}}.bj-header__logo{height:56px;width:56px;margin:-3px auto 0;padding:0;background:var(--color-main);border:3px solid #fff;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:999;cursor:pointer}.bj-header__logo img{height:50%;width:auto;margin-left:-5%}@media (min-width:1000px){.bj-header__logo{height:94px;width:94px;margin:4px var(--indent-half) 0 0}}.bj-header__nav{display:block;position:fixed;top:50px;bottom:0;height:auto;left:0;width:70vw;max-width:300px;margin-right:auto;background:var(--color-main);color:#fff;z-index:950;transform:translate(-105%);transition:transform .3s}.bj-header__nav--show{transform:translate(0)}.bj-header__nav .bj-header__button{height:50px;border-top:1px solid #555;border-bottom:1px solid #111}@media (min-width:1000px){.bj-header__nav{position:static;display:flex;transform:none}.bj-header__nav--show{transform:none}.bj-header__nav .bj-header__button{border-top:0 none;border-bottom:0 none}}"];


// CONCATENATED MODULE: ./components/coins-ribbon/coins-ribbon.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var coins_ribbon_component_css_ngstyle_styles = [".bj-coins-ribbon{display:flex;flex:1 1 auto;height:calc(100% + 20px);max-width:100%;flex-wrap:nowrap;overflow:hidden;overflow-x:scroll}@media (min-width:1000px){.bj-coins-ribbon{margin-left:100px;overflow-x:hidden;flex-wrap:wrap}}.bj-coins-ribbon__item{display:flex;flex:0 0 auto;align-items:center;justify-content:flex-start;height:calc(100% - 20px);overflow:hidden;padding:0 var(--indent-half);color:inherit;background:0 0;font-size:14px;font-weight:400;line-height:1;text-transform:uppercase;text-decoration:none}.bj-coins-ribbon__item:first-child{padding-left:var(--indent-base)}.bj-coins-ribbon__item:last-child{padding-right:var(--indent-base)}@media (min-width:1000px){.bj-coins-ribbon__item{padding:0 var(--indent-base)}}.bj-coins-ribbon__item:hover{background:var(--color-hover-dark)}.bj-coins-ribbon__item__icon{width:32px;height:32px;flex:0 0 32px;margin-right:8px}.bj-coins-ribbon__item__data{display:flex;flex-direction:column;align-items:flex-start}.bj-coins-ribbon__item__symbol{display:block;margin:0;padding:0;font-size:11px;font-weight:300;line-height:1}.bj-coins-ribbon__item__rate{display:block;margin:5px 0 0;padding:0}.bj-coins-ribbon__item__rate span:first-child{margin-right:.15em;font-size:15px}"];


// CONCATENATED MODULE: ./components/coins-ribbon/coins-ribbon.component.ngfactory.js
/** PURE_IMPORTS_START _coins_ribbon.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_.._pipes_ccimg_ccimg.pipe,_coins_ribbon.component,_.._services_coin_coin.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _coins_ribbon.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_.._pipes_ccimg_ccimg.pipe,_coins_ribbon.component,_.._services_coin_coin.service PURE_IMPORTS_END */







var styles_CoinsRsibbonComponent = [coins_ribbon_component_css_ngstyle_styles];
var RenderType_CoinsRsibbonComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoinsRsibbonComponent, data: {} });

function View_CoinsRsibbonComponent_1(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 12, "a", [["class", "bj-coins-ribbon__item"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵpad */](2, 2), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 1, "img", [["class", "bj-coins-ribbon__item__icon"]], [[8, "src", 4]], null, null, null, null)), core["_20" /* ɵppd */](4, 1), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 7, "div", [["class", "bj-coins-ribbon__item__data"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 1, "h5", [["class", "bj-coins-ribbon__item__symbol"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](7, null, ["", ""])), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 4, "div", [["class", "bj-coins-ribbon__item__rate"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["$"])), (_l()(), core["_4" /* ɵeld */](11, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](12, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, "/coins", _v.context.$implicit.symbol); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).target; var currVal_1 = core["_16" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["_25" /* ɵunv */](_v, 3, 0, _ck(_v, 4, 0, core["_16" /* ɵnov */](_v.parent, 0), _v.context.$implicit.symbol)); _ck(_v, 3, 0, currVal_3); var currVal_4 = _v.context.$implicit.symbol; _ck(_v, 7, 0, currVal_4); var currVal_5 = _v.context.$implicit.priceUSD; _ck(_v, 12, 0, currVal_5); });
}
function View_CoinsRsibbonComponent_0(_l) { return core["_26" /* ɵvid */](0, [core["_19" /* ɵpid */](0, ccimg_pipe_CoinImagePipe, []), (_l()(), core["Z" /* ɵand */](16777216, null, null, 2, null, View_CoinsRsibbonComponent_1)), core["_3" /* ɵdid */](2, 802816, null, 0, common["k" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_19" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_25" /* ɵunv */](_v, 2, 0, core["_16" /* ɵnov */](_v, 3).transform(_co.coins)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CoinsRsibbonComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-coins-ribbon"]], null, null, null, View_CoinsRsibbonComponent_0, RenderType_CoinsRsibbonComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, CoinsRsibbonComponent, [coin_service_CoinService], null, null)], null, null); }
var CoinsRsibbonComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".bj-coins-ribbon", CoinsRsibbonComponent, View_CoinsRsibbonComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/header/header.component.ngfactory.js
/** PURE_IMPORTS_START _header.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_coins_ribbon_coins_ribbon.component.ngfactory,_coins_ribbon_coins_ribbon.component,_.._services_coin_coin.service,_header.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _header.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_coins_ribbon_coins_ribbon.component.ngfactory,_coins_ribbon_coins_ribbon.component,_.._services_coin_coin.service,_header.component PURE_IMPORTS_END */








var styles_HeaderComponent = [header_component_css_ngstyle_styles];
var RenderType_HeaderComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_0(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 17, "div", [["class", "bj-header__row-wrapper bj-header__row-wrapper--dark"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 16, "div", [["class", "bj-header__row"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 1, "button", [["class", "bj-header__button bj-header__button--icon bj-header__button--menu"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ((_co.navBarVisibility = !_co.navBarVisibility) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 2, "a", [["class", "bj-header__logo"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](5, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 0, "img", [["alt", "BitJournal"], ["src", "/svg/logo.svg"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 8, "nav", [["class", "bj-header__nav"]], [[2, "bj-header__nav--show", null]], null, null, null, null)), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = ((_co.navBarVisibility = false) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](9, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_4" /* ɵeld */](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_4" /* ɵeld */](12, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/coins"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = ((_co.navBarVisibility = false) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](13, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_4" /* ɵeld */](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0412\u0430\u043B\u044E\u0442\u044B"])), (_l()(), core["_4" /* ɵeld */](16, 0, null, null, 1, "button", [["class", "bj-header__button bj-header__button--icon"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](17, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](18, 0, null, null, 3, "div", [["class", "bj-header__row-wrapper bj-header__row-wrapper--scroll"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](19, 0, null, null, 2, "div", [["class", "bj-header__row bj-header__row--hidden"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](20, 0, null, null, 1, "div", [["class", "bj-coins-ribbon"]], null, null, null, View_CoinsRsibbonComponent_0, RenderType_CoinsRsibbonComponent)), core["_3" /* ɵdid */](21, 49152, null, 0, CoinsRsibbonComponent, [coin_service_CoinService], null, null)], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 5, 0, currVal_2); var currVal_6 = "/"; _ck(_v, 9, 0, currVal_6); var currVal_9 = "/coins"; _ck(_v, 13, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_16" /* ɵnov */](_v, 5).target; var currVal_1 = core["_16" /* ɵnov */](_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = _co.navBarVisibility; _ck(_v, 7, 0, currVal_3); var currVal_4 = core["_16" /* ɵnov */](_v, 9).target; var currVal_5 = core["_16" /* ɵnov */](_v, 9).href; _ck(_v, 8, 0, currVal_4, currVal_5); var currVal_7 = core["_16" /* ɵnov */](_v, 13).target; var currVal_8 = core["_16" /* ɵnov */](_v, 13).href; _ck(_v, 12, 0, currVal_7, currVal_8); });
}
function View_HeaderComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-header"]], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_3" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".bj-header", HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/loader/loader.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var loader_component_css_ngstyle_styles = ["@keyframes loader-cubeGridScaleDelay{0%,70%,to{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}.loader{width:100px;height:100px;position:absolute;left:50%;top:350px;transform:translate(-50%);display:none;flex-wrap:wrap;justify-content:space-between;align-content:space-between}.loader--show{display:flex}.loader__cube{flex:0 0 30%;height:30%;background-color:var(--color-main);animation:loader-cubeGridScaleDelay 1.3s infinite ease-in-out}.loader__cube--1{animation-delay:.2s}.loader__cube--2{animation-delay:.3s}.loader__cube--3{animation-delay:.4s}.loader__cube--4{animation-delay:.1s}.loader__cube--5{animation-delay:.2s}.loader__cube--6{animation-delay:.3s}.loader__cube--7{animation-delay:0s}.loader__cube--8{animation-delay:.1s}.loader__cube--9{animation-delay:.2s}"];


// CONCATENATED MODULE: ./components/loader/loader.component.ngfactory.js
/** PURE_IMPORTS_START _loader.component.css.ngstyle,_angular_core,_loader.component,_.._services_loader_loader.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _loader.component.css.ngstyle,_angular_core,_loader.component,_.._services_loader_loader.service PURE_IMPORTS_END */




var styles_LoaderComponent = [loader_component_css_ngstyle_styles];
var RenderType_LoaderComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_LoaderComponent, data: {} });

function View_LoaderComponent_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--1"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--2"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--3"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](3, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--4"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--5"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](5, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--6"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--7"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](7, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--8"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--9"]], null, null, null, null, null))], null, null); }
function View_LoaderComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "loader"]], [[2, "loader--show", null]], null, null, View_LoaderComponent_0, RenderType_LoaderComponent)), core["_3" /* ɵdid */](1, 245760, null, 0, LoaderComponent, [loader_service_LoaderService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 1).show; _ck(_v, 0, 0, currVal_0); }); }
var LoaderComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".loader", LoaderComponent, View_LoaderComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/footer/footer.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var footer_component_css_ngstyle_styles = [".bj-footer,.bj-footer__logo{display:block;overflow:hidden;background:var(--color-main)}.bj-footer{padding:0 0 var(--indent-double);color:#fff;position:relative;width:100%}.bj-footer__logo{position:absolute;left:-100px;top:-100px;height:200px;width:200px;border:3px solid #fff;border-radius:50%;z-index:800;cursor:pointer}.bj-footer__logo img{display:block;position:absolute;top:119px;left:107px;height:38px;width:auto}.bj-footer__nav{margin:0 auto;max-width:var(--max-width);padding:var(--indent-base) var(--indent-base) var(--indent-base) calc(100px + var(--indent-base));min-height:100px;display:block}@media (min-width:1200px){.bj-footer__nav{padding:var(--indent-base) var(--indent-double) var(--indent-base) calc(100px + var(--indent-double))}}.bj-footer__nav__row{width:100%;display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:flex-start}.bj-footer__nav__item{margin:0 0 1em 1em;border-bottom:1px solid #fff;padding-bottom:.1em;text-transform:none;text-decoration:none;font-family:inherit;font-size:100%;font-style:normal;color:inherit;white-space:nowrap}.bj-footer__nav__item:first-child{margin-left:0}.bj-footer__nav__item--donate{color:#ef6c00;border-bottom-color:#ef6c00}.bj-footer__row{margin-top:0 auto;max-width:var(--max-width);padding:0 var(--indent-half);display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:center}@media (min-width:1000px){.bj-footer__row{flex-wrap:nowrap}}@media (min-width:1200px){.bj-footer__row{padding:0 0 0 calc(var(--indent-double) + var(--indent-half))}}.bj-footer__col{order:2;width:200px;flex:0 0 200px;margin:var(--indent-half);display:flex;flex-direction:column;justify-content:center}.bj-footer__col:last-child{width:auto;flex:1 1 auto;text-align:center;margin-top:calc(var(--indent-base) + var(--indent-half))}@media (min-width:1000px){.bj-footer__col:last-child{order:1;margin-top:var(--indent-half);margin-right:auto;text-align:left}}.bj-footer__col>p{padding:0 var(--indent-base) 0 0;margin:0 0 var(--indent-half);line-height:1.4;font-size:14px}.bj-footer__col__widget{width:100%;overflow:hidden;border-radius:3px;display:flex;justify-content:flex-start}.bj-footer__bottom a,.bj-footer__col__widget+.bj-footer__col__widget{margin-top:var(--indent-base)}.bj-footer__bottom{margin:0 auto;max-width:var(--max-width);padding:0 var(--indent-base);display:flex;flex-wrap:wrap;justify-content:center}@media (min-width:1200px){.bj-footer__bottom{padding:0 var(--indent-double)}}.bj-footer__bottom a{text-transform:none;text-decoration:none;font-family:inherit;font-size:12px;font-weight:300;font-style:normal;color:inherit;white-space:nowrap;border-bottom:1px solid #fff;padding-bottom:.1em}.bj-footer__bottom span{margin:var(--indent-base) 1em 0}.bj-footer__bottom__copyright{font-size:12px;font-weight:300;white-space:nowrap;margin:var(--indent-base) 0 0;flex:0 0 100%;text-align:center}@media (min-width:600px){.bj-footer__bottom__copyright{flex-basis:auto;margin-left:auto}}.bj-footer__telegram{height:28px;padding:0 .7em;text-decoration:none;text-transform:none;font-size:13px;font-weight:500;line-height:1;display:flex;align-items:center;justify-content:flex-start;color:inherit;background:#08c;border-radius:3px}.bj-footer__telegram svg{width:18px;height:18px;margin-right:.7em}.bj-footer__telegram path{fill:currentColor}"];


// CONCATENATED MODULE: ./components/footer/footer.component.ngfactory.js
/** PURE_IMPORTS_START _footer.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_footer.component,_.._services_external_external.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _footer.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_footer.component,_.._services_external_external.service PURE_IMPORTS_END */






var styles_FooterComponent = [footer_component_css_ngstyle_styles];
var RenderType_FooterComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) {
    return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 9, "nav", [["class", "bj-footer__nav"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](1, 0, null, null, 8, "div", [["class", "bj-footer__nav__row"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](3, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_4" /* ɵeld */](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/coins"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](7, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_4" /* ɵeld */](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0412\u0430\u043B\u044E\u0442\u044B"])), (_l()(), core["_4" /* ɵeld */](10, 0, null, null, 30, "div", [["class", "bj-footer__row"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](11, 0, null, null, 2, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](12, 0, null, null, 1, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](13, 0, null, null, 0, "div", [["id", "vk_group_vidget"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](14, 0, null, null, 5, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](15, 0, null, null, 4, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](16, 0, null, null, 3, "div", [["class", "fb-page"], ["data-adapt-container-width", "false"], ["data-height", "160"], ["data-hide-cover", "true"], ["data-href", "https://www.facebook.com/bitjournalOfficial/"], ["data-show-facepile", "false"], ["data-small-header", "false"], ["data-width", "200"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](17, 0, null, null, 2, "blockquote", [["cite", "https://www.facebook.com/bitjournalOfficial/"], ["class", "fb-xfbml-parse-ignore"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](18, 0, null, null, 1, "a", [["href", "https://www.facebook.com/bitjournalOfficial/"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["BitJournal"])), (_l()(), core["_4" /* ɵeld */](20, 0, null, null, 11, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](21, 0, null, null, 5, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](22, 0, null, null, 4, "a", [["class", "bj-footer__telegram"], ["href", "https://t.me/bitjournal_io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](23, 0, null, null, 1, ":svg:svg", [["height", "24"], ["viewBox", "0 0 24 24"], ["width", "24"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](24, 0, null, null, 0, ":svg:path", [["d", "M.4 11.6l5.6 2 2 7c.2.3.8.5 1 .2l3.2-2.5c.3-.3.8-.3 1 0l5.7 4c.3.3.8 0 1-.4l4-19.7c0-.5-.4-1-1-.7L.5 10.4c-.5.2-.5 1 0 1.2zm7.3 1l10.8-6.8c.3 0 .5.2.3.4l-9 8.3-.5 1L9 18c0 .3-.5.3-.5 0l-1.2-4c-.2-.5 0-1 .4-1.3z"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](25, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["BitJournal \u0432 \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C"])), (_l()(), core["_4" /* ɵeld */](27, 0, null, null, 1, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](28, 0, null, null, 0, "div", [["class", "g-ytsubscribe"], ["data-channelid", "UCeOLUeYNcYDos1wcTJVLGlw"], ["data-count", "default"], ["data-layout", "default"], ["data-theme", "dark"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](29, 0, null, null, 2, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](30, 0, null, null, 1, "a", [["class", "twitter-follow-button"], ["data-show-count", "false"], ["data-size", "large"], ["href", "https://twitter.com/bitjournal_io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Follow @bitjournal_io"])), (_l()(), core["_4" /* ɵeld */](32, 0, null, null, 8, "div", [["class", "bj-footer__col"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](33, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u0443\u0440\u0441\u043E\u0432 \u0432\u0430\u043B\u044E\u0442 \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C \u0434\u043E 30 \u043C\u0438\u043D\u0443\u0442 \u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043D\u043E\u0441\u0442\u0438 \u0431\u0438\u0440\u0436."])), (_l()(), core["_4" /* ɵeld */](35, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u0412\u0441\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439."])), (_l()(), core["_4" /* ɵeld */](37, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["BitJournal \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u043E\u0432."])), (_l()(), core["_4" /* ɵeld */](39, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430."])), (_l()(), core["_4" /* ɵeld */](41, 0, null, null, 13, "div", [["class", "bj-footer__bottom"]], null, null, null, null, null)), (_l()(), core["_4" /* ɵeld */](42, 0, null, null, 1, "a", [["href", "/rss"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["RSS"])), (_l()(), core["_4" /* ɵeld */](44, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["|"])), (_l()(), core["_4" /* ɵeld */](46, 0, null, null, 2, "a", [["routerLink", "/privacy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 47).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](47, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_24" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"])), (_l()(), core["_4" /* ɵeld */](49, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["|"])), (_l()(), core["_4" /* ɵeld */](51, 0, null, null, 1, "a", [["href", "mailto:ad@bitjournal.io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["ad@bitjournal.io"])), (_l()(), core["_4" /* ɵeld */](53, 0, null, null, 1, "div", [["class", "bj-footer__bottom__copyright"]], null, null, null, null, null)), (_l()(), core["_24" /* ɵted */](-1, null, ["Copyright \u00A9 2017 BitJournal"])), (_l()(), core["_4" /* ɵeld */](55, 0, null, null, 2, "a", [["class", "bj-footer__logo"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_16" /* ɵnov */](_v, 56).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_3" /* ɵdid */](56, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["i" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_4" /* ɵeld */](57, 0, null, null, 0, "img", [["alt", "BitJournal"], ["src", "/svg/logo.svg"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 3, 0, currVal_2); var currVal_5 = "/coins"; _ck(_v, 7, 0, currVal_5); var currVal_8 = "/privacy"; _ck(_v, 47, 0, currVal_8); var currVal_11 = "/"; _ck(_v, 56, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 3).target; var currVal_1 = core["_16" /* ɵnov */](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = core["_16" /* ɵnov */](_v, 7).target; var currVal_4 = core["_16" /* ɵnov */](_v, 7).href; _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_6 = core["_16" /* ɵnov */](_v, 47).target; var currVal_7 = core["_16" /* ɵnov */](_v, 47).href; _ck(_v, 46, 0, currVal_6, currVal_7); var currVal_9 = core["_16" /* ɵnov */](_v, 56).target; var currVal_10 = core["_16" /* ɵnov */](_v, 56).href; _ck(_v, 55, 0, currVal_9, currVal_10); });
}
function View_FooterComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-footer"]], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), core["_3" /* ɵdid */](1, 4243456, null, 0, footer_component_FooterComponent, [external_service_ExternalService], null, null)], null, null); }
var FooterComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".bj-footer", footer_component_FooterComponent, View_FooterComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/layout/layout.component.ngfactory.js
/** PURE_IMPORTS_START _layout.component.css.ngstyle,_angular_core,_header_header.component.ngfactory,_header_header.component,_angular_router,_loader_loader.component.ngfactory,_loader_loader.component,_.._services_loader_loader.service,_footer_footer.component.ngfactory,_footer_footer.component,_.._services_external_external.service,_layout.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _layout.component.css.ngstyle,_angular_core,_header_header.component.ngfactory,_header_header.component,_angular_router,_loader_loader.component.ngfactory,_loader_loader.component,_.._services_loader_loader.service,_footer_footer.component.ngfactory,_footer_footer.component,_.._services_external_external.service,_layout.component PURE_IMPORTS_END */












var styles_LayoutComponent = [layout_component_css_ngstyle_styles];
var RenderType_LayoutComponent = /*@__PURE__*/ core["_2" /* ɵcrt */]({ encapsulation: 2, styles: styles_LayoutComponent, data: {} });

function View_LayoutComponent_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "header", [["class", "bj-header"]], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_3" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["l" /* Router */]], null, null), (_l()(), core["_4" /* ɵeld */](2, 0, null, null, 1, "div", [["class", "loader"]], [[2, "loader--show", null]], null, null, View_LoaderComponent_0, RenderType_LoaderComponent)), core["_3" /* ɵdid */](3, 245760, null, 0, LoaderComponent, [loader_service_LoaderService], null, null), (_l()(), core["_4" /* ɵeld */](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core["_3" /* ɵdid */](5, 212992, null, 0, router["o" /* RouterOutlet */], [router["b" /* ChildrenOutletContexts */], core["N" /* ViewContainerRef */], core["j" /* ComponentFactoryResolver */], [8, null], core["h" /* ChangeDetectorRef */]], null, null), (_l()(), core["_4" /* ɵeld */](6, 0, null, null, 1, "footer", [["class", "bj-footer"]], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), core["_3" /* ɵdid */](7, 4243456, null, 0, footer_component_FooterComponent, [external_service_ExternalService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = core["_16" /* ɵnov */](_v, 3).show; _ck(_v, 2, 0, currVal_0); }); }
function View_LayoutComponent_Host_0(_l) { return core["_26" /* ɵvid */](0, [(_l()(), core["_4" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "layout"]], null, null, null, View_LayoutComponent_0, RenderType_LayoutComponent)), core["_3" /* ɵdid */](1, 49152, null, 0, layout_component_LayoutComponent, [core["A" /* PLATFORM_ID */], router["l" /* Router */]], null, null)], null, null); }
var LayoutComponentNgFactory = /*@__PURE__*/ core["_0" /* ɵccf */](".layout", layout_component_LayoutComponent, View_LayoutComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/animations/esm5/browser.js
var browser = __webpack_require__(192);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/platform-browser/esm5/animations.js
var animations = __webpack_require__(285);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/animations/esm5/animations.js
var esm5_animations = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/cdk/esm5/bidi.es5.js
var bidi_es5 = __webpack_require__(14);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/cdk/esm5/scrolling.es5.js
var scrolling_es5 = __webpack_require__(45);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/cdk/esm5/overlay.es5.js
var overlay_es5 = __webpack_require__(28);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/select.es5.js
var select_es5 = __webpack_require__(92);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/tooltip.es5.js
var tooltip_es5 = __webpack_require__(93);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/cdk/esm5/layout.es5.js
var layout_es5 = __webpack_require__(135);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/material/esm5/snack-bar.es5.js
var snack_bar_es5 = __webpack_require__(134);

// EXTERNAL MODULE: C:/Users/Nastya/documents/bitjournal/node_modules/@angular/cdk/esm5/portal.es5.js
var portal_es5 = __webpack_require__(26);

// CONCATENATED MODULE: ./app.module.ngfactory.js
/** PURE_IMPORTS_START _angular_core,_app.module,_components_layout_layout.component,_.._node_modules__angular_material_dialog_typings_index.ngfactory,_.._node_modules__angular_material_tooltip_typings_index.ngfactory,_.._node_modules__angular_material_snack_bar_typings_index.ngfactory,_components_pages_main_page_main.component.ngfactory,_components_pages_101_page_101.component.ngfactory,_components_pages_privacy_page_privacy.component.ngfactory,_components_pages_coin_page_coin.component.ngfactory,_components_pages_coins_page_coins.component.ngfactory,_components_pages_article_page_article.component.ngfactory,_components_pages_404_page_404.component.ngfactory,_components_auth_auth_dialog.component.ngfactory,_components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_a11y,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_material_dialog,_angular_material_core,_angular_material_select,_angular_material_tooltip,_angular_material_paginator,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_sort,_angular_router,_services_message_message.service,_services_user_user.service,_services_api_api.service,_services_coin_coin.service,_services_context_context,_context_injection,_services_loader_loader.service,_services_meta_meta.service,_services_youtube_youtube.service,_services_notification_notification.service,_services_external_external.service,_angular_material_button,_angular_cdk_portal,_angular_material_form_field,_angular_material_input,_angular_cdk_table,_angular_material_table,_components_pages_main_page_main.component,_components_pages_101_page_101.component,_components_pages_privacy_page_privacy.component,_components_pages_coin_page_coin.component,_components_pages_coins_page_coins.component,_components_pages_article_page_article.component,_components_pages_404_page_404.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_app.module,_components_layout_layout.component,_.._node_modules__angular_material_dialog_typings_index.ngfactory,_.._node_modules__angular_material_tooltip_typings_index.ngfactory,_.._node_modules__angular_material_snack_bar_typings_index.ngfactory,_components_pages_main_page_main.component.ngfactory,_components_pages_101_page_101.component.ngfactory,_components_pages_privacy_page_privacy.component.ngfactory,_components_pages_coin_page_coin.component.ngfactory,_components_pages_coins_page_coins.component.ngfactory,_components_pages_article_page_article.component.ngfactory,_components_pages_404_page_404.component.ngfactory,_components_auth_auth_dialog.component.ngfactory,_components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_a11y,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_material_dialog,_angular_material_core,_angular_material_select,_angular_material_tooltip,_angular_material_paginator,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_sort,_angular_router,_services_message_message.service,_services_user_user.service,_services_api_api.service,_services_coin_coin.service,_services_context_context,_context_injection,_services_loader_loader.service,_services_meta_meta.service,_services_youtube_youtube.service,_services_notification_notification.service,_services_external_external.service,_angular_material_button,_angular_cdk_portal,_angular_material_form_field,_angular_material_input,_angular_cdk_table,_angular_material_table,_components_pages_main_page_main.component,_components_pages_101_page_101.component,_components_pages_privacy_page_privacy.component,_components_pages_coin_page_coin.component,_components_pages_coins_page_coins.component,_components_pages_article_page_article.component,_components_pages_404_page_404.component PURE_IMPORTS_END */




























































var AppModuleNgFactory = /*@__PURE__*/ core["_1" /* ɵcmf */](AppModule, [layout_component_LayoutComponent], function (_l) { return core["_12" /* ɵmod */]([core["_13" /* ɵmpd */](512, core["j" /* ComponentFactoryResolver */], core["X" /* ɵCodegenComponentFactoryResolver */], [[8, [index_ngfactory["a" /* MatDialogContainerNgFactory */], typings_index_ngfactory["a" /* TooltipComponentNgFactory */], snack_bar_typings_index_ngfactory["a" /* MatSnackBarContainerNgFactory */], snack_bar_typings_index_ngfactory["b" /* SimpleSnackBarNgFactory */], PageMainComponentNgFactory, Page101ComponentNgFactory, PagePrivacyComponentNgFactory, PageCoinComponentNgFactory, PageCoinsComponentNgFactory, PageArticleComponentNgFactory, Page404ComponentNgFactory, AuthDialogComponentNgFactory, LayoutComponentNgFactory]], [3, core["j" /* ComponentFactoryResolver */]], core["w" /* NgModuleRef */]]), core["_13" /* ɵmpd */](5120, core["t" /* LOCALE_ID */], core["_17" /* ɵo */], [[3, core["t" /* LOCALE_ID */]]]), core["_13" /* ɵmpd */](4608, common["n" /* NgLocalization */], common["m" /* NgLocaleLocalization */], [core["t" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_13" /* ɵmpd */](5120, core["r" /* IterableDiffers */], core["_11" /* ɵm */], []), core["_13" /* ɵmpd */](5120, core["s" /* KeyValueDiffers */], core["_14" /* ɵn */], []), core["_13" /* ɵmpd */](4608, platform_browser["d" /* DomSanitizer */], platform_browser["x" /* ɵe */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](6144, core["F" /* Sanitizer */], null, [platform_browser["d" /* DomSanitizer */]]), core["_13" /* ɵmpd */](4608, platform_browser["g" /* HAMMER_GESTURE_CONFIG */], platform_browser["h" /* HammerGestureConfig */], []), core["_13" /* ɵmpd */](5120, platform_browser["e" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["o" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["s" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["r" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["d" /* DOCUMENT */], core["y" /* NgZone */], common["d" /* DOCUMENT */], common["d" /* DOCUMENT */], platform_browser["g" /* HAMMER_GESTURE_CONFIG */]]), core["_13" /* ɵmpd */](4608, platform_browser["f" /* EventManager */], platform_browser["f" /* EventManager */], [platform_browser["e" /* EVENT_MANAGER_PLUGINS */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](135680, platform_browser["q" /* ɵDomSharedStylesHost */], platform_browser["q" /* ɵDomSharedStylesHost */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["p" /* ɵDomRendererFactory2 */], platform_browser["p" /* ɵDomRendererFactory2 */], [platform_browser["f" /* EventManager */], platform_browser["q" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](5120, browser["a" /* AnimationDriver */], animations["d" /* ɵc */], []), core["_13" /* ɵmpd */](5120, browser["c" /* ɵAnimationStyleNormalizer */], animations["e" /* ɵd */], []), core["_13" /* ɵmpd */](4608, browser["b" /* ɵAnimationEngine */], animations["c" /* ɵb */], [browser["a" /* AnimationDriver */], browser["c" /* ɵAnimationStyleNormalizer */]]), core["_13" /* ɵmpd */](5120, core["D" /* RendererFactory2 */], animations["f" /* ɵe */], [platform_browser["p" /* ɵDomRendererFactory2 */], browser["b" /* ɵAnimationEngine */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](6144, platform_browser["t" /* ɵSharedStylesHost */], null, [platform_browser["q" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](4608, core["L" /* Testability */], core["L" /* Testability */], [core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, platform_browser["i" /* Meta */], platform_browser["i" /* Meta */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["j" /* Title */], platform_browser["j" /* Title */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, platform_browser["k" /* TransferState */], platform_browser["w" /* ɵc */], [common["d" /* DOCUMENT */], core["c" /* APP_ID */]]), core["_13" /* ɵmpd */](4608, esm5_animations["b" /* AnimationBuilder */], animations["b" /* ɵBrowserAnimationBuilder */], [core["D" /* RendererFactory2 */], platform_browser["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_forms["s" /* ɵi */], esm5_forms["s" /* ɵi */], []), core["_13" /* ɵmpd */](4608, esm5_forms["e" /* FormBuilder */], esm5_forms["e" /* FormBuilder */], []), core["_13" /* ɵmpd */](4608, http["k" /* HttpXsrfTokenExtractor */], http["p" /* ɵg */], [common["d" /* DOCUMENT */], core["A" /* PLATFORM_ID */], http["n" /* ɵe */]]), core["_13" /* ɵmpd */](4608, http["q" /* ɵh */], http["q" /* ɵh */], [http["k" /* HttpXsrfTokenExtractor */], http["o" /* ɵf */]]), core["_13" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["q" /* ɵh */]]), core["_13" /* ɵmpd */](4608, http["m" /* ɵd */], http["m" /* ɵd */], []), core["_13" /* ɵmpd */](6144, http["l" /* XhrFactory */], null, [http["m" /* ɵd */]]), core["_13" /* ɵmpd */](4608, http["j" /* HttpXhrBackend */], http["j" /* HttpXhrBackend */], [http["l" /* XhrFactory */]]), core["_13" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["j" /* HttpXhrBackend */]]), core["_13" /* ɵmpd */](5120, http["g" /* HttpHandler */], http["r" /* ɵinterceptingHandler */], [http["b" /* HttpBackend */], [2, http["a" /* HTTP_INTERCEPTORS */]]]), core["_13" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["g" /* HttpHandler */]]), core["_13" /* ɵmpd */](6144, bidi_es5["b" /* DIR_DOCUMENT */], null, [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, bidi_es5["c" /* Directionality */], bidi_es5["c" /* Directionality */], [[2, bidi_es5["b" /* DIR_DOCUMENT */]]]), core["_13" /* ɵmpd */](4608, platform_es5["a" /* Platform */], platform_es5["a" /* Platform */], []), core["_13" /* ɵmpd */](4608, a11y_es5["i" /* InteractivityChecker */], a11y_es5["i" /* InteractivityChecker */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](4608, a11y_es5["h" /* FocusTrapFactory */], a11y_es5["h" /* FocusTrapFactory */], [a11y_es5["i" /* InteractivityChecker */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](136192, a11y_es5["d" /* AriaDescriber */], a11y_es5["b" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, a11y_es5["d" /* AriaDescriber */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["l" /* LiveAnnouncer */], a11y_es5["k" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, a11y_es5["l" /* LiveAnnouncer */]], [2, a11y_es5["j" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["g" /* FocusMonitor */], a11y_es5["e" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, a11y_es5["g" /* FocusMonitor */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, scrolling_es5["c" /* ScrollDispatcher */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, scrolling_es5["f" /* ViewportRuler */], scrolling_es5["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, scrolling_es5["f" /* ViewportRuler */]], platform_es5["a" /* Platform */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, overlay_es5["h" /* ScrollStrategyOptions */], overlay_es5["h" /* ScrollStrategyOptions */], [scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["f" /* ViewportRuler */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](5120, overlay_es5["e" /* OverlayContainer */], overlay_es5["i" /* ɵa */], [[3, overlay_es5["e" /* OverlayContainer */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["m" /* ɵh */], overlay_es5["m" /* ɵh */], [scrolling_es5["f" /* ViewportRuler */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["f" /* OverlayKeyboardDispatcher */], overlay_es5["l" /* ɵf */], [[3, overlay_es5["f" /* OverlayKeyboardDispatcher */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["c" /* Overlay */], overlay_es5["c" /* Overlay */], [overlay_es5["h" /* ScrollStrategyOptions */], overlay_es5["e" /* OverlayContainer */], core["j" /* ComponentFactoryResolver */], overlay_es5["m" /* ɵh */], overlay_es5["f" /* OverlayKeyboardDispatcher */], core["g" /* ApplicationRef */], core["q" /* Injector */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["j" /* ɵc */], overlay_es5["k" /* ɵd */], [overlay_es5["c" /* Overlay */]]), core["_13" /* ɵmpd */](5120, dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], dialog_es5["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay_es5["c" /* Overlay */]]), core["_13" /* ɵmpd */](4608, dialog_es5["d" /* MatDialog */], dialog_es5["d" /* MatDialog */], [overlay_es5["c" /* Overlay */], core["q" /* Injector */], [2, common["h" /* Location */]], dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, dialog_es5["d" /* MatDialog */]], overlay_es5["e" /* OverlayContainer */]]), core["_13" /* ɵmpd */](4608, core_es5["d" /* ErrorStateMatcher */], core_es5["d" /* ErrorStateMatcher */], []), core["_13" /* ɵmpd */](5120, select_es5["a" /* MAT_SELECT_SCROLL_STRATEGY */], select_es5["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay_es5["c" /* Overlay */]]), core["_13" /* ɵmpd */](5120, tooltip_es5["a" /* MAT_TOOLTIP_SCROLL_STRATEGY */], tooltip_es5["b" /* MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay_es5["c" /* Overlay */]]), core["_13" /* ɵmpd */](5120, paginator_es5["c" /* MatPaginatorIntl */], paginator_es5["a" /* MAT_PAGINATOR_INTL_PROVIDER_FACTORY */], [[3, paginator_es5["c" /* MatPaginatorIntl */]]]), core["_13" /* ɵmpd */](4608, layout_es5["d" /* MediaMatcher */], layout_es5["d" /* MediaMatcher */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](135680, layout_es5["a" /* BreakpointObserver */], layout_es5["a" /* BreakpointObserver */], [layout_es5["d" /* MediaMatcher */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, snack_bar_es5["b" /* MatSnackBar */], snack_bar_es5["b" /* MatSnackBar */], [overlay_es5["c" /* Overlay */], a11y_es5["l" /* LiveAnnouncer */], core["q" /* Injector */], layout_es5["a" /* BreakpointObserver */], [3, snack_bar_es5["b" /* MatSnackBar */]]]), core["_13" /* ɵmpd */](5120, sort_es5["d" /* MatSortHeaderIntl */], sort_es5["a" /* MAT_SORT_HEADER_INTL_PROVIDER_FACTORY */], [[3, sort_es5["d" /* MatSortHeaderIntl */]]]), core["_13" /* ɵmpd */](5120, router["a" /* ActivatedRoute */], router["x" /* ɵf */], [router["l" /* Router */]]), core["_13" /* ɵmpd */](4608, router["f" /* PreloadAllModules */], router["f" /* PreloadAllModules */], []), core["_13" /* ɵmpd */](6144, router["g" /* PreloadingStrategy */], null, [router["f" /* PreloadAllModules */]]), core["_13" /* ɵmpd */](135680, router["p" /* RouterPreloader */], router["p" /* RouterPreloader */], [router["l" /* Router */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], core["q" /* Injector */], router["g" /* PreloadingStrategy */]]), core["_13" /* ɵmpd */](4608, router["e" /* NoPreloading */], router["e" /* NoPreloading */], []), core["_13" /* ɵmpd */](5120, router["i" /* ROUTER_INITIALIZER */], router["A" /* ɵi */], [router["y" /* ɵg */]]), core["_13" /* ɵmpd */](5120, core["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [router["i" /* ROUTER_INITIALIZER */]]), core["_13" /* ɵmpd */](4608, message_service_MessageService, message_service_MessageService, [core["A" /* PLATFORM_ID */], snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, user_service_UserService, user_service_UserService, [core["A" /* PLATFORM_ID */], http["c" /* HttpClient */], dialog_es5["d" /* MatDialog */], message_service_MessageService]), core["_13" /* ɵmpd */](4608, api_service_APIService, api_service_APIService, [core["A" /* PLATFORM_ID */], platform_browser["k" /* TransferState */], http["c" /* HttpClient */], user_service_UserService, message_service_MessageService]), core["_13" /* ɵmpd */](4608, coin_service_CoinService, coin_service_CoinService, [core["A" /* PLATFORM_ID */], api_service_APIService]), core["_13" /* ɵmpd */](4608, ContextService, ContextService, [[2, CONTEXT]]), core["_13" /* ɵmpd */](4608, loader_service_LoaderService, loader_service_LoaderService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](4608, meta_service_MetaService, meta_service_MetaService, [platform_browser["i" /* Meta */], platform_browser["j" /* Title */]]), core["_13" /* ɵmpd */](4608, youtube_service_YouTubeService, youtube_service_YouTubeService, [http["c" /* HttpClient */], message_service_MessageService]), core["_13" /* ɵmpd */](512, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["_13" /* ɵmpd */](1024, core["m" /* ErrorHandler */], platform_browser["v" /* ɵa */], []), core["_13" /* ɵmpd */](1024, core["x" /* NgProbeToken */], function () { return [router["t" /* ɵb */]()]; }, []), core["_13" /* ɵmpd */](256, core["c" /* APP_ID */], "app_bj", []), core["_13" /* ɵmpd */](2048, platform_browser["u" /* ɵTRANSITION_ID */], null, [core["c" /* APP_ID */]]), core["_13" /* ɵmpd */](512, router["y" /* ɵg */], router["y" /* ɵg */], [core["q" /* Injector */]]), core["_13" /* ɵmpd */](512, notification_service_NotificationService, notification_service_NotificationService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](512, external_service_ExternalService, external_service_ExternalService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](1024, core["d" /* APP_INITIALIZER */], function (p0_0, p1_0, p1_1, p1_2, p2_0, p3_0, p4_0) { return [platform_browser["A" /* ɵh */](p0_0), platform_browser["y" /* ɵf */](p1_0, p1_1, p1_2), router["z" /* ɵh */](p2_0), app_module__0(p3_0), app_module__1(p4_0)]; }, [[2, core["x" /* NgProbeToken */]], platform_browser["u" /* ɵTRANSITION_ID */], common["d" /* DOCUMENT */], core["q" /* Injector */], router["y" /* ɵg */], notification_service_NotificationService, external_service_ExternalService]), core["_13" /* ɵmpd */](512, core["e" /* ApplicationInitStatus */], core["e" /* ApplicationInitStatus */], [[2, core["d" /* APP_INITIALIZER */]]]), core["_13" /* ɵmpd */](131584, core["g" /* ApplicationRef */], core["g" /* ApplicationRef */], [core["y" /* NgZone */], core["Y" /* ɵConsole */], core["q" /* Injector */], core["m" /* ErrorHandler */], core["j" /* ComponentFactoryResolver */], core["e" /* ApplicationInitStatus */]]), core["_13" /* ɵmpd */](512, core["f" /* ApplicationModule */], core["f" /* ApplicationModule */], [core["g" /* ApplicationRef */]]), core["_13" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_13" /* ɵmpd */](512, platform_browser["b" /* BrowserTransferStateModule */], platform_browser["b" /* BrowserTransferStateModule */], []), core["_13" /* ɵmpd */](512, animations["a" /* BrowserAnimationsModule */], animations["a" /* BrowserAnimationsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["q" /* ɵba */], esm5_forms["q" /* ɵba */], []), core["_13" /* ɵmpd */](512, esm5_forms["h" /* FormsModule */], esm5_forms["h" /* FormsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["o" /* ReactiveFormsModule */], esm5_forms["o" /* ReactiveFormsModule */], []), core["_13" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_13" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_13" /* ɵmpd */](512, bidi_es5["a" /* BidiModule */], bidi_es5["a" /* BidiModule */], []), core["_13" /* ɵmpd */](256, core_es5["e" /* MATERIAL_SANITY_CHECKS */], true, []), core["_13" /* ɵmpd */](512, core_es5["l" /* MatCommonModule */], core_es5["l" /* MatCommonModule */], [[2, core_es5["e" /* MATERIAL_SANITY_CHECKS */]]]), core["_13" /* ɵmpd */](512, platform_es5["b" /* PlatformModule */], platform_es5["b" /* PlatformModule */], []), core["_13" /* ɵmpd */](512, core_es5["v" /* MatRippleModule */], core_es5["v" /* MatRippleModule */], []), core["_13" /* ɵmpd */](512, a11y_es5["a" /* A11yModule */], a11y_es5["a" /* A11yModule */], []), core["_13" /* ɵmpd */](512, button_es5["d" /* MatButtonModule */], button_es5["d" /* MatButtonModule */], []), core["_13" /* ɵmpd */](512, portal_es5["g" /* PortalModule */], portal_es5["g" /* PortalModule */], []), core["_13" /* ɵmpd */](512, scrolling_es5["b" /* ScrollDispatchModule */], scrolling_es5["b" /* ScrollDispatchModule */], []), core["_13" /* ɵmpd */](512, overlay_es5["g" /* OverlayModule */], overlay_es5["g" /* OverlayModule */], []), core["_13" /* ɵmpd */](512, dialog_es5["h" /* MatDialogModule */], dialog_es5["h" /* MatDialogModule */], []), core["_13" /* ɵmpd */](512, form_field_es5["d" /* MatFormFieldModule */], form_field_es5["d" /* MatFormFieldModule */], []), core["_13" /* ɵmpd */](512, input_es5["b" /* MatInputModule */], input_es5["b" /* MatInputModule */], []), core["_13" /* ɵmpd */](512, core_es5["t" /* MatPseudoCheckboxModule */], core_es5["t" /* MatPseudoCheckboxModule */], []), core["_13" /* ɵmpd */](512, core_es5["r" /* MatOptionModule */], core_es5["r" /* MatOptionModule */], []), core["_13" /* ɵmpd */](512, select_es5["d" /* MatSelectModule */], select_es5["d" /* MatSelectModule */], []), core["_13" /* ɵmpd */](512, tooltip_es5["d" /* MatTooltipModule */], tooltip_es5["d" /* MatTooltipModule */], []), core["_13" /* ɵmpd */](512, paginator_es5["d" /* MatPaginatorModule */], paginator_es5["d" /* MatPaginatorModule */], []), core["_13" /* ɵmpd */](512, layout_es5["c" /* LayoutModule */], layout_es5["c" /* LayoutModule */], []), core["_13" /* ɵmpd */](512, snack_bar_es5["d" /* MatSnackBarModule */], snack_bar_es5["d" /* MatSnackBarModule */], []), core["_13" /* ɵmpd */](512, sort_es5["e" /* MatSortModule */], sort_es5["e" /* MatSortModule */], []), core["_13" /* ɵmpd */](512, table_es5["l" /* CdkTableModule */], table_es5["l" /* CdkTableModule */], []), core["_13" /* ɵmpd */](512, esm5_table_es5["l" /* MatTableModule */], esm5_table_es5["l" /* MatTableModule */], []), core["_13" /* ɵmpd */](1024, router["s" /* ɵa */], router["v" /* ɵd */], [[3, router["l" /* Router */]]]), core["_13" /* ɵmpd */](512, router["r" /* UrlSerializer */], router["c" /* DefaultUrlSerializer */], []), core["_13" /* ɵmpd */](512, router["b" /* ChildrenOutletContexts */], router["b" /* ChildrenOutletContexts */], []), core["_13" /* ɵmpd */](256, router["h" /* ROUTER_CONFIGURATION */], { useHash: false, preloadingStrategy: router["f" /* PreloadAllModules */] }, []), core["_13" /* ɵmpd */](1024, common["i" /* LocationStrategy */], router["u" /* ɵc */], [common["s" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], router["h" /* ROUTER_CONFIGURATION */]]), core["_13" /* ɵmpd */](512, common["h" /* Location */], common["h" /* Location */], [common["i" /* LocationStrategy */]]), core["_13" /* ɵmpd */](512, core["i" /* Compiler */], core["i" /* Compiler */], []), core["_13" /* ɵmpd */](512, core["v" /* NgModuleFactoryLoader */], core["I" /* SystemJsNgModuleLoader */], [core["i" /* Compiler */], [2, core["J" /* SystemJsNgModuleLoaderConfig */]]]), core["_13" /* ɵmpd */](1024, router["j" /* ROUTES */], function () { return [[{ path: "", component: page_main_component_PageMainComponent }, { path: "101", component: Page101Component }, { path: "privacy", component: PagePrivacyComponent }, { path: "coins/:symbol", component: page_coin_component_PageCoinComponent }, { path: "coins", component: page_coins_component_PageCoinsComponent }, { path: ":date/:url", component: page_article_component_PageArticleComponent }, { path: "**", component: Page404Component }]]; }, []), core["_13" /* ɵmpd */](1024, router["l" /* Router */], router["w" /* ɵe */], [core["g" /* ApplicationRef */], router["r" /* UrlSerializer */], router["b" /* ChildrenOutletContexts */], common["h" /* Location */], core["q" /* Injector */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], router["j" /* ROUTES */], router["h" /* ROUTER_CONFIGURATION */], [2, router["q" /* UrlHandlingStrategy */]], [2, router["k" /* RouteReuseStrategy */]]]), core["_13" /* ɵmpd */](512, router["n" /* RouterModule */], router["n" /* RouterModule */], [[2, router["s" /* ɵa */]], [2, router["l" /* Router */]]]), core["_13" /* ɵmpd */](512, AppModule, AppModule, [notification_service_NotificationService, external_service_ExternalService]), core["_13" /* ɵmpd */](256, http["n" /* ɵe */], "XSRF-TOKEN", []), core["_13" /* ɵmpd */](256, http["o" /* ɵf */], "X-XSRF-TOKEN", [])]); });


// CONCATENATED MODULE: ./main.front.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return main_front__0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return main_front__1; });




console.log(`${"bitjournal"} v${"0.2.0"}`);
let decorateModuleRef = (value) => value;
const main_front__0 = decorateModuleRef;
if (false) {
    decorateModuleRef = (modRef) => {
        const appRef = modRef.injector.get(ApplicationRef);
        const cmpRef = appRef.components[0];
        let ng = window.ng;
        enableDebugTools(cmpRef);
        window.ng.probe = ng.probe;
        window.ng.coreTokens = ng.coreTokens;
        return modRef;
    };
}
else {
    Object(core["R" /* enableProdMode */])();
    decorateModuleRef = (modRef) => {
        Object(platform_browser["l" /* disableDebugTools */])();
        return modRef;
    };
}
function main() {
    return Object(platform_browser["n" /* platformBrowser */])()
        .bootstrapModuleFactory(AppModuleNgFactory)
        .then(decorateModuleRef)
        .catch((err) => console.error(err));
}
const domReadyHandler = () => {
    document.removeEventListener('DOMContentLoaded', domReadyHandler);
    main();
};
const main_front__1 = domReadyHandler;
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', domReadyHandler);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}



/***/ })

},[227]);