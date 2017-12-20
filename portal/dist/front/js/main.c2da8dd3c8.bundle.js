webpackJsonp(["main"],{

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/zone.js/dist/zone.js
var zone = __webpack_require__(219);
var zone_default = /*#__PURE__*/__webpack_require__.n(zone);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(25);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/router/esm5/router.js
var router = __webpack_require__(4);

// CONCATENATED MODULE: ./components/article/article.component.ts

class ArticleComponent {
    constructor() {
        this.value = null;
    }
}

// CONCATENATED MODULE: ./components/article/index.ts


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/material.es5.js + 26 modules
var material_es5 = __webpack_require__(93);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/common/esm5/http.js
var http = __webpack_require__(85);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/Observable.js
var Observable = __webpack_require__(7);
var Observable_default = /*#__PURE__*/__webpack_require__.n(Observable);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/observable/of.js
var of = __webpack_require__(86);
var of_default = /*#__PURE__*/__webpack_require__.n(of);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/catch.js
var operator_catch = __webpack_require__(125);
var catch_default = /*#__PURE__*/__webpack_require__.n(operator_catch);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/filter.js
var filter = __webpack_require__(126);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/map.js
var map = __webpack_require__(127);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/uuid/randomBytes-browser.ts
const randomBytes = (size) => {
    let rnd = new Uint8Array(size);
    window.crypto.getRandomValues(rnd);
    return rnd;
};
const ɵ0 = randomBytes;
/* harmony default export */ var randomBytes_browser = (randomBytes);


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/uuid/bytesToUuid.ts
const BTH = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f",
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f",
    "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f",
    "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f",
    "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f",
    "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f",
    "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f",
    "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f",
    "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f",
    "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f",
    "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af",
    "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf",
    "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf",
    "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df",
    "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef",
    "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
/* harmony default export */ var bytesToUuid = ((buf) => BTH[buf[0]] + BTH[buf[1]] +
    BTH[buf[2]] + BTH[buf[3]] + '-' +
    BTH[buf[4]] + BTH[buf[5]] + '-' +
    BTH[buf[6]] + BTH[buf[7]] + '-' +
    BTH[buf[8]] + BTH[buf[9]] + '-' +
    BTH[buf[10]] + BTH[buf[11]] +
    BTH[buf[12]] + BTH[buf[13]] +
    BTH[buf[14]] + BTH[buf[15]]);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/uuid/v1.ts


const SEED_BYTES = randomBytes_browser(16);
const NODE_ID = [
    SEED_BYTES[0] | 0x01,
    SEED_BYTES[1],
    SEED_BYTES[2],
    SEED_BYTES[3],
    SEED_BYTES[4],
    SEED_BYTES[5],
];
let _clockseq = (SEED_BYTES[6] << 8 | SEED_BYTES[7]) & 0x3fff;
let lastMSecs = 0;
let lastNSecs = 0;
/* harmony default export */ var v1 = (() => {
    let msecs = new Date().getTime();
    let nsecs = lastNSecs + 1;
    let dt = (msecs - lastMSecs) + (nsecs - lastNSecs) / 10000;
    let clockseq = dt < 0 ? _clockseq + 1 & 0x3fff : _clockseq;
    if (dt < 0 || msecs > lastMSecs) {
        nsecs = 0;
    }
    if (nsecs >= 10000)
        throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    lastMSecs = msecs;
    lastNSecs = nsecs;
    _clockseq = clockseq;
    msecs += 12219292800000;
    let i = 0;
    let b = new Uint8Array(16);
    let tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    let tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    b[i++] = tmh >>> 24 & 0xf | 0x10;
    b[i++] = tmh >>> 16 & 0xff;
    b[i++] = clockseq >>> 8 | 0x80;
    b[i++] = clockseq & 0xff;
    for (let n = 0; n < 6; ++n)
        b[i + n] = NODE_ID[n];
    return bytesToUuid(b);
});

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/uuid/patterns.ts
const UUIDv1_PATTERN = '[a-f0-9]{8}-[a-f0-9]{4}-1[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}';
const UUIDv1_REGEXP = /^[a-f0-9]{8}-[a-f0-9]{4}-1[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
const UUIDv4_PATTERN = '[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}';
const UUIDv4_REGEXP = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
const UUIDnil_PATTERN = '00000000-0000-0000-0000-000000000000';
const UUIDnil_REGEXP = /^00000000-0000-0000-0000-000000000000$/;

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/uuid/uuid.ts


class uuid_UUID {
    static getArray(value) {
        return new Array().concat(value)
            .map(item => {
            try {
                const uuid = new uuid_UUID(item && item.id || item);
                return uuid.version === null ? null : uuid;
            }
            catch (_) {
                return null;
            }
        })
            .filter(item => item !== null);
    }
    constructor(uuid = null) {
        if (uuid instanceof uuid_UUID) {
            this.version = uuid.version;
            this.uuid = uuid.uuid;
            return this;
        }
        if (typeof uuid === 'string') {
            let value = uuid.toLowerCase();
            if (UUIDnil_REGEXP.test(value)) {
                this.version = null;
                this.uuid = value;
                return this;
            }
            if (UUIDv1_REGEXP.test(value)) {
                this.version = 1;
                this.uuid = value;
                return this;
            }
            if (UUIDv4_REGEXP.test(value)) {
                this.version = 4;
                this.uuid = value;
                return this;
            }
            throw new Error(`UUID "${uuid}" does not match the UUID string`);
        }
        if (uuid === null) {
            this.version = null;
            this.uuid = UUIDnil_PATTERN;
            return this;
        }
        if (uuid === 1) {
            this.version = 1;
            this.uuid = v1();
            return this;
        }
        if (uuid === 4) {
            this.version = 4;
            this.uuid = v1();
            return this;
        }
        throw new Error(`Illegal UUID version of "${uuid}"`);
    }
    get value() {
        return this.uuid;
    }
    valueOf() {
        return this.uuid;
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.uuid;
    }
    toJSON() {
        return this.uuid;
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
                throw new TypeError('Cannot convert UUID value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'UUID';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/uuid/index.ts



// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/timestamp.ts
const GENITIVE_MONTHS = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
];
class Timestamp extends Date {
    static fromUnux(value) {
        const uts = ~~value;
        return new Timestamp(uts * 1000);
    }
    constructor(value) {
        super(value);
    }
    get isValid() {
        return !Number.isNaN(this.getTime());
    }
    get isInvalid() {
        return !this.isValid;
    }
    toURLString() {
        const year = String(this.getUTCFullYear());
        const month = String(this.getUTCMonth() + 1).padStart(2, '0');
        const date = String(this.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${date}`;
    }
    compareDateWithOutTime(other) {
        return this.getFullYear() === other.getFullYear()
            && this.getMonth() === other.getMonth()
            && this.getDate() === other.getDate();
    }
    toHRString() {
        const now = new Date();
        let out = '';
        if (this.compareDateWithOutTime(now))
            out += 'Сегодня';
        else {
            now.setDate(now.getDate() - 1);
            if (this.compareDateWithOutTime(now))
                out += 'Вчера';
            else {
                out += String(this.getDate());
                out += ' ' + GENITIVE_MONTHS[this.getMonth()];
                const year = this.getFullYear();
                if (year !== now.getFullYear())
                    out += ' ' + String(year);
            }
        }
        out += ' ' + String(this.getHours());
        out += ':' + String(this.getMinutes()).padStart(2, '0');
        return out;
    }
    valueOf() {
        return new Date(this);
    }
    toNumber() {
        return this.getTime();
    }
    toString() {
        return this.toISOString();
    }
    toJSON() {
        return this.toISOString();
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
                throw new TypeError('Cannot convert Model value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Timestamp';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/enum/enum.ts
const ENUM_ID_REGEXP = /^[a-z][a-z0-9]*$/;
class Enum {
    constructor(id, value) {
        this.id = id;
        this.value = value;
        if (!ENUM_ID_REGEXP.test(id))
            throw new TypeError(`Enum ID "${id}" does not matc the pattern "${ENUM_ID_REGEXP.source}"`);
    }
    static *[Symbol.iterator]() {
        const keys = Object.keys(this);
        for (let key of keys) {
            yield this[key];
        }
    }
    static get(value) {
        let id = String(value && value.id || value);
        for (let item of this)
            if (item.id === id)
                return item;
        return undefined;
    }
    static getArray(value) {
        return new Array().concat(value)
            .map(item => this.get(item))
            .filter(item => item !== undefined);
    }
    valueOf() {
        return this.id;
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.value;
    }
    toJSON() {
        return this.id;
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
                throw new TypeError('Cannot convert Enum value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Enum';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/enum/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/ads/block.enum.ts

class BlockEnum extends Enum {
    constructor(id, value, description) {
        super(id, value);
        this.description = description;
    }
    [Symbol.toStringTag]() {
        return 'BlockEnum';
    }
}
BlockEnum.A1 = new BlockEnum('a1', 'A1', 'Вершний');
BlockEnum.A2 = new BlockEnum('a2', 'A2', 'Под видео');
BlockEnum.A3 = new BlockEnum('a3', 'A3', 'Под новостью');
BlockEnum.B1 = new BlockEnum('b1', 'B1', 'Башня');
BlockEnum.B2 = new BlockEnum('b2', 'B2', 'Башня');
BlockEnum.B3 = new BlockEnum('b3', 'B3', 'Башня');
BlockEnum.M1 = new BlockEnum('m1', 'M1', 'Мобильный');
BlockEnum.M2 = new BlockEnum('m2', 'M2', 'Мобильный');
BlockEnum.M3 = new BlockEnum('m3', 'M3', 'Мобильный');

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/ads/ads.ts



const ENUM_PG_ARRAY_PATTERN = /^\{([a-z0-9,]+)\}$/;
const DATE_REGEXP = /^\d{4}-\d{2}-\d{3}$/;
class ads_Ads {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.enable = value.enable === undefined ? true : !!value.enable;
        if (value.blocks) {
            const match = ENUM_PG_ARRAY_PATTERN.exec(value.blocks);
            const blocks = match && match[1].split(',') || value.blocks;
            this.blocks = BlockEnum.getArray(blocks);
        }
        else
            this.blocks = new Array();
        this.title = String(value.title || '').trim();
        this.description = String(value.description || '').trim();
        this.url = String(value.url || '').trim();
        this.startDate = new Timestamp(value.startDate);
        this.endDate = new Timestamp(value.endDate);
        this.content = String(value.content || '').trim();
        this.files = Array.isArray(value.files) ? value.files
            .map((item) => Math.max(~~value.collected, 0))
            .filter((item) => item > 0)
            : new Array();
        this.limits =
            typeof value.limits === 'object' ? {
                show: Math.max(~~value.limits.show, 0),
                showPerDay: Math.max(~~value.limits.showPerDay, 0),
                showPerUser: Math.max(~~value.limits.showPerUser, 0),
                click: Math.max(~~value.limits.click, 0),
                clickPerDay: Math.max(~~value.limits.clickPerDay, 0),
                clickPerUser: Math.max(~~value.limits.clickPerUser, 0),
            } : {
                show: 0,
                showPerDay: 0,
                showPerUser: 0,
                click: 0,
                clickPerDay: 0,
                clickPerUser: 0,
            };
        this.stats = {};
        if (value.stats === 'object')
            for (let key in value.stats) {
                key = String(key).trim();
                if (DATE_REGEXP.test(key))
                    this.stats[key] = {
                        show: Math.max(~~value.stats[key].show, 0),
                        click: Math.max(~~value.stats[key].click, 0),
                    };
            }
    }
    valueOf() {
        return {
            enable: this.enable,
            blocks: this.blocks.map(item => item.valueOf()),
            title: this.title,
            description: this.description,
            url: this.url,
            startDate: this.startDate,
            endDate: this.startDate,
            content: this.content,
            files: this.files,
            limits: this.limits,
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
            blocks: this.blocks,
            title: this.title,
            description: this.description,
            url: this.url,
            startDate: this.startDate,
            endDate: this.startDate,
            content: this.content,
            files: this.files,
            limits: this.limits,
            stats: this.stats,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert Ads value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Ads';
    }
}
ads_Ads.MainFields = [
    'id',
    'enable',
    'blocks',
    'title',
    'startDate',
    'endDate',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/ads/index.ts



// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/coin/price.ts
class Price {
    constructor(value) {
        this._btc = 0;
        this._usd = 0;
        this.update(value);
    }
    get btc() {
        return this._btc;
    }
    get usd() {
        return this._usd;
    }
    update(value = {}) {
        const btc = value.btc !== undefined && Math.max(parseFloat(value.btc), 0);
        this._btc = btc || this.btc;
        const usd = value.usd !== undefined && Math.max(parseFloat(value.usd), 0);
        this._usd = usd || this.usd;
    }
    valueOf() {
        return {
            btc: this.btc,
            usd: this.usd,
        };
    }
    toJSON() {
        return {
            btc: this.btc,
            usd: this.usd,
        };
    }
    toNumber() {
        return this.usd || 0;
    }
    toString() {
        return String(this.toNumber());
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
                throw new TypeError('Cannot convert Price value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Price';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/coin/historical.ts


class historical_Historical {
    constructor(value = {}) {
        this.price = new Price();
        this.ts = new Timestamp(value.ts);
        this.updatePrice(value.price);
    }
    updatePrice(value = {}) {
        this.price.update(value);
    }
    valueOf() {
        return {
            ts: this.ts,
            price: this.price,
        };
    }
    toJSON() {
        return {
            ts: this.ts,
            price: this.price,
        };
    }
    toNumber() {
        return this.price.toNumber();
    }
    toString() {
        return String(this.ts);
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
                throw new TypeError('Cannot convert Historical value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Historical';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/coin/coin.ts



const SYMBOL_PATTERN = /^[A-Z0-9@$]+$/;
class coin_Coin {
    constructor(value = {}) {
        this._max = 0;
        this._available = 0;
        this.price = new Price();
        this._volume24 = 0;
        this._historical = new Array();
        const symbol = String(value.symbol || '').trim().toUpperCase();
        if (!SYMBOL_PATTERN.test(symbol))
            throw new TypeError(`Symbol "${symbol} not match to pattern ${SYMBOL_PATTERN.source}`);
        this.symbol = symbol;
        this.update(value);
    }
    get max() {
        return this._max;
    }
    get available() {
        return this._available;
    }
    get capitalization() {
        return {
            btc: this.price.btc * this.available,
            usd: this.price.usd * this.available,
        };
    }
    get volume24() {
        return this._volume24;
    }
    get ts() {
        return this._ts;
    }
    get historical() {
        return this._historical.sort((a, b) => a.ts < b.ts ? -1 : 1);
    }
    get lastHistorical() {
        const historical = this.historical;
        if (historical.length === 0)
            return undefined;
        return historical[historical.length - 1].ts;
    }
    updatePrice(value = {}) {
        this.price.update(value);
    }
    updateHistorical(value = []) {
        if (!Array.isArray(value))
            return;
        value.map(item => new historical_Historical(item))
            .forEach(newItem => {
            const currentItem = this._historical.find(item => Number(item.ts) === Number(newItem.ts));
            if (!currentItem) {
                this._historical.push(newItem);
                return;
            }
            currentItem.updatePrice(newItem.price);
        });
    }
    update(value = {}) {
        if (!value)
            return;
        if (value.symbol !== this.symbol)
            return;
        this._max = value.max !== undefined ? Math.max(parseFloat(value.max), 0) : 0;
        this._available = value.available !== undefined ? Math.max(parseFloat(value.available), 0) : 0;
        this._volume24 = value.volume24 !== undefined ? Math.max(parseFloat(value.volume24), 0) : 0;
        this._ts = new Timestamp(value.ts);
        this.updatePrice(value.price);
        this.updateHistorical(value.historical);
    }
    valueOf() {
        return {
            symbol: this.symbol,
            max: this.max,
            available: this.available,
            price: this.price.valueOf(),
            capitalization: this.capitalization,
            volume24: this.volume24,
            ts: this.ts,
            historical: this.historical,
        };
    }
    toJSON() {
        return {
            symbol: this.symbol,
            max: this.max,
            available: this.available,
            price: this.price,
            capitalization: this.capitalization,
            volume24: this.volume24,
            ts: this.ts,
        };
    }
    equal(item) {
        return JSON.stringify(item) === JSON.stringify(this);
    }
    toNumber() {
        return this.capitalization.usd;
    }
    toString() {
        return this.symbol;
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
                throw new TypeError('Cannot convert Coin value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Coin';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/coin/index.ts




// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/rating/rating.ts
class Rating {
    constructor(value = {}) {
        this.like = Math.max(~~value.like, 0);
        this.dislike = Math.max(~~value.dislike, 0);
    }
    get value() {
        return this.like / (this.like + this.dislike);
    }
    get stars() {
        return 5 * this.value;
    }
    valueOf() {
        return {
            like: this.like,
            dislike: this.dislike,
        };
    }
    toJSON() {
        return {
            like: this.like,
            dislike: this.dislike,
        };
    }
    toNumber() {
        return this.value;
    }
    toString() {
        return String(this.value);
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
                throw new TypeError('Cannot convert Raiting value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Raiting';
    }
}
Rating.MainFields = [
    'like',
    'dislike',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/rating/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/currency/currency.ts


class currency_Currency {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.symbol = String(value.symbol || '').trim();
        this.enable = value.enable === undefined ? true : !!value.enable;
        this.extUrl = String(value.extUrl || '').trim();
        this.title = String(value.title || '').trim();
        this.ogTitle = String(value.ogTitle || '').trim();
        this.description = String(value.description || '').trim();
        this.ogDescription = String(value.ogDescription || '').trim();
        this.image = Math.max(~~value.image, 0) || null;
        this.ogImage = Math.max(~~value.ogImage, 0) || null;
        this.startDate = new Timestamp(value.startDate);
        this.founder = String(value.founder || '').trim();
        this.maxCoin = Math.max(~~value.maxCoin, 0);
        this.algorithm = String(value.algorithm || '').trim();
        this.system = String(value.system || '').trim();
        this.content = String(value.content || '').trim();
        this.rating = new Rating(value.rating);
        this.bjr = Math.min(Math.max(~~value.bjr, 0), 5);
        this.branding = {};
    }
    valueOf() {
        return {
            symbol: this.symbol,
            enable: this.enable,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate,
            founder: this.founder,
            maxCoin: this.maxCoin,
            algorithm: this.algorithm,
            system: this.system,
            content: this.content,
            bjr: this.bjr,
        };
    }
    toJSON() {
        return {
            symbol: this.symbol,
            enable: this.enable,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate.isValid ? this.startDate : undefined,
            founder: this.founder,
            maxCoin: this.maxCoin,
            algorithm: this.algorithm,
            system: this.system,
            content: this.content,
            rating: this.rating,
            bjr: this.bjr,
            branding: this.branding,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert Currency value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Currency';
    }
}
currency_Currency.MainFields = [
    'symbol',
    'enable',
    'title',
    'image',
    'rating',
    'bjr',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/currency/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/exchange/exchange.ts



class exchange_Exchange {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.enable = value.enable === undefined ? true : !!value.enable;
        this.url = String(value.url || '').trim();
        this.extUrl = String(value.extUrl || '').trim();
        this.title = String(value.title || '').trim();
        this.ogTitle = String(value.ogTitle || '').trim();
        this.description = String(value.description || '').trim();
        this.ogDescription = String(value.ogDescription || '').trim();
        this.image = Math.max(~~value.image, 0) || null;
        this.ogImage = Math.max(~~value.ogImage, 0) || null;
        this.startDate = new Timestamp(value.startDate);
        this.referral = !!value.referral;
        this.content = String(value.content || '').trim();
        this.rating = new Rating(value.rating);
        this.bjr = Math.min(Math.max(~~value.bjr, 0), 5);
        this.branding = {};
    }
    valueOf() {
        return {
            enable: this.enable,
            url: this.url,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate,
            referral: this.referral,
            content: this.content,
            bjr: this.bjr,
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
            url: this.url,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate.isValid ? this.startDate : undefined,
            referral: this.referral,
            content: this.content,
            rating: this.rating,
            bjr: this.bjr,
            branding: this.branding,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert Exchange value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Exchange';
    }
}
exchange_Exchange.MainFields = [
    'id',
    'enable',
    'url',
    'title',
    'image',
    'rating',
    'bjr',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/exchange/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/ico/ico.ts



class ico_ICO {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.enable = value.enable === undefined ? true : !!value.enable;
        this.url = String(value.url || '').trim();
        this.extUrl = String(value.extUrl || '').trim();
        this.title = String(value.title || '').trim();
        this.ogTitle = String(value.ogTitle || '').trim();
        this.description = String(value.description || '').trim();
        this.ogDescription = String(value.ogDescription || '').trim();
        this.image = Math.max(~~value.image, 0) || null;
        this.ogImage = Math.max(~~value.ogImage, 0) || null;
        this.startDate = new Timestamp(value.startDate);
        this.goal = Math.max(~~value.goal, 0);
        this.collected = Math.max(~~value.collected, 0);
        this.status = String(value.status || '').trim();
        this.content = String(value.content || '').trim();
        this.rating = new Rating(value.rating);
        this.bjr = Math.min(Math.max(~~value.bjr, 0), 5);
        this.branding = {};
    }
    valueOf() {
        return {
            enable: this.enable,
            url: this.url,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate,
            goal: this.goal,
            collected: this.collected,
            status: this.status,
            content: this.content,
            bjr: this.bjr,
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
            url: this.url,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate.isValid ? this.startDate : undefined,
            goal: this.goal,
            collected: this.collected,
            status: this.status,
            content: this.content,
            rating: this.rating,
            bjr: this.bjr,
            branding: this.branding,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert ICO value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'ICO';
    }
}
ico_ICO.MainFields = [
    'id',
    'enable',
    'url',
    'title',
    'image',
    'rating',
    'bjr',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/ico/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/market/market.ts



class market_Market {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.enable = value.enable === undefined ? true : !!value.enable;
        this.url = String(value.url || '').trim();
        this.extUrl = String(value.extUrl || '').trim();
        this.title = String(value.title || '').trim();
        this.ogTitle = String(value.ogTitle || '').trim();
        this.description = String(value.description || '').trim();
        this.ogDescription = String(value.ogDescription || '').trim();
        this.image = Math.max(~~value.image, 0) || null;
        this.ogImage = Math.max(~~value.ogImage, 0) || null;
        this.startDate = new Timestamp(value.startDate);
        this.referral = !!value.referral;
        this.content = String(value.content || '').trim();
        this.rating = new Rating(value.rating);
        this.bjr = Math.min(Math.max(~~value.bjr, 0), 5);
        this.branding = {};
    }
    valueOf() {
        return {
            enable: this.enable,
            url: this.url,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate,
            referral: this.referral,
            content: this.content,
            bjr: this.bjr,
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
            url: this.url,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate.isValid ? this.startDate : undefined,
            referral: this.referral,
            content: this.content,
            rating: this.rating,
            bjr: this.bjr,
            branding: this.branding,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert Market value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Market';
    }
}
market_Market.MainFields = [
    'id',
    'enable',
    'url',
    'title',
    'image',
    'rating',
    'bjr',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/market/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/url-builder/url-builder.ts
const RUS = 'щ  ш  ч  ц  ю  я  ё ж  ы э а б в г д е з и й к л м н о п р с т у ф х'.split(/\s+/);
const ENG = 'sh sh ch cz yu ya e zh y e a b v g d e z i j k l m n o p r s t u f x'.split(/\s+/);
class URLBuilder {
    constructor() { }
}
URLBuilder.build = (input, maxLength = 128) => {
    let text = input.toLowerCase()
        .replace(/\s+/g, '_');
    text = text.split('')
        .map(char => {
        let i = RUS.indexOf(char);
        return i < 0 ? char : ENG[i];
    }).join('');
    text = text.replace(/[^0-9a-z_]/g, '')
        .slice(0, maxLength)
        .replace(/(^_+|_+$)/g, '');
    return text;
};

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/url-builder/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/publication/publication.ts




class publication_Publication {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.ts = new Timestamp(value.ts);
        this.url = String(value.url || '').trim();
        this.enable = !!value.enable;
        this.sections = uuid_UUID.getArray(value.sections);
        this.currencies = Array.isArray(value.currencies) ? value.currencies
            .map((item) => String(item).trim().toLowerCase())
            .filter((item) => !!item)
            : new Array();
        this.exchanges = uuid_UUID.getArray(value.exchanges);
        this.ico = uuid_UUID.getArray(value.ico);
        this.markets = uuid_UUID.getArray(value.markets);
        this.weight = value.weight === undefined ? 1 : Math.min(Math.max(~~value.weight, 0), 3);
        this.bigTitle = String(value.bigTitle || '').trim();
        this.title = String(value.title || '').trim();
        this.ogTitle = String(value.ogTitle || '').trim();
        this.description = String(value.description || '').trim();
        this.ogDescription = String(value.ogDescription || '').trim();
        this.image = Math.max(~~value.image, 0) || null;
        this.ogImage = Math.max(~~value.ogImage, 0) || null;
        this.authors = uuid_UUID.getArray(value.authors);
        this.tags = Array.isArray(value.tags) ? value.tags
            .map((item) => String(item).trim().toLowerCase())
            .filter((item) => !!item)
            : new Array();
        this.sharing = value.sharing === undefined ? true : !!value.sharing;
        this.comments = value.comments === undefined ? true : !!value.comments;
        this.ads = value.ads === undefined ? true : !!value.ads;
        this.rss = value.rss === undefined ? true : !!value.rss;
        this.content = String(value.content || '').trim();
        this.rating = new Rating(value.rating);
        this.branding = {};
        this.lastModified = new Timestamp(value.lastModified);
        if (!this.url)
            this.url = URLBuilder.build(this.title);
    }
    valueOf() {
        return {
            ts: this.ts,
            url: this.url,
            enable: this.enable,
            sections: this.sections.map(item => item.valueOf()),
            currencies: this.currencies,
            exchanges: this.exchanges.map(item => item.valueOf()),
            ico: this.ico.map(item => item.valueOf()),
            markets: this.markets.map(item => item.valueOf()),
            weight: this.weight,
            bigTitle: this.bigTitle,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            authors: this.authors.map(item => item.valueOf()),
            tags: this.tags,
            sharing: this.sharing,
            comments: this.comments,
            ads: this.ads,
            rss: this.rss,
            content: this.content
        };
    }
    toJSON() {
        return {
            id: this.id,
            ts: this.ts,
            url: this.url,
            enable: this.enable,
            sections: this.sections,
            currencies: this.currencies,
            exchanges: this.exchanges,
            ico: this.ico,
            markets: this.markets,
            weight: this.weight,
            bigTitle: this.bigTitle,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            authors: this.authors,
            tags: this.tags,
            sharing: this.sharing,
            comments: this.comments,
            ads: this.ads,
            rss: this.rss,
            content: this.content,
            rating: this.rating,
            branding: this.branding,
            lastModified: this.lastModified.isValid ? this.lastModified : undefined,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert Publication value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Publication';
    }
}
publication_Publication.MainFields = [
    'id',
    'ts',
    'url',
    'enable',
    'sections',
    'currencies',
    'exchanges',
    'ico',
    'markets',
    'weight',
    'bigTitle',
    'title',
    'description',
    'image',
    'authors',
    'tags',
    'rss',
    'rating',
    'branding',
    'lastModified',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/publication/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/section/section.ts

class section_Section {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.enable = value.enable === undefined ? true : !!value.enable;
        this.url = String(value.url || '').trim() || null;
        this.title = String(value.title || '').trim();
        this.ogTitle = String(value.ogTitle || '').trim();
        this.description = String(value.description || '').trim();
        this.ogDescription = String(value.ogDescription || '').trim();
        this.image = Math.max(~~value.image, 0) || null;
        this.ogImage = Math.max(~~value.ogImage, 0) || null;
        this.branding = {};
    }
    valueOf() {
        return {
            enable: this.enable,
            url: this.url,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
            url: this.url,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            branding: this.branding,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert Section value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Section';
    }
}
section_Section.MainFields = [
    'id',
    'enable',
    'url',
    'title',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/section/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/status/status.ts

class status_Status {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.enable = value.enable === undefined ? true : !!value.enable;
        this.title = String(value.title || '').trim();
        this.image = Math.max(~~value.image, 0) || null;
    }
    valueOf() {
        return {
            enable: this.enable,
            title: this.title,
            image: this.image,
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
            title: this.title,
            image: this.image,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert Status value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Status';
    }
}
status_Status.MainFields = [
    'id',
    'enable',
    'title',
    'image',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/status/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/user/role.enum.ts

class RoleEnum extends Enum {
    constructor(id, value, icon) {
        super(id, value);
        this.icon = icon;
    }
    [Symbol.toStringTag]() {
        return 'UserRole';
    }
}
RoleEnum.User = new RoleEnum('user', 'Пользователь', null);
RoleEnum.Author = new RoleEnum('author', 'Автор', null);
RoleEnum.Publisher = new RoleEnum('publisher', 'Публикатор', null);
RoleEnum.Chief = new RoleEnum('chief', 'Редактор', null);
RoleEnum.Administrator = new RoleEnum('administrator', 'Администратор', null);
RoleEnum.Su = new RoleEnum('su', 'Super user', null);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/user/user.ts



const user_ENUM_PG_ARRAY_PATTERN = /^\{([a-z0-9,]+)\}$/;
class user_User {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.enable = !!value.enable;
        if (value.roles) {
            const match = user_ENUM_PG_ARRAY_PATTERN.exec(value.roles);
            const roles = match && match[1].split(',') || value.roles;
            this.roles = RoleEnum.getArray(roles);
        }
        else
            this.roles = new Array();
        this.url = String(value.url || '').trim() || null;
        this.title = String(value.title || '').trim();
        this.description = String(value.description || '').trim();
        this.email = String(value.email || '').trim();
        this.phone = String(value.phone || '').trim() || null;
        this.oauth = {};
        this.image = Math.max(~~value.image, 0) || null;
        this.statuses = uuid_UUID.getArray(value.statuses);
        this.rating = new Rating(value.rating);
        this.bjr = Math.min(Math.max(~~value.bjr, 0), 5);
        this.card = {};
    }
    checkRole(roles) {
        for (let role of roles)
            if (this.roles.includes(role))
                return true;
        return false;
    }
    get valid() {
        return this.id !== null
            && this.id.version !== null;
    }
    valueOf() {
        return {
            enable: this.enable,
            roles: this.roles.map(item => item.valueOf()),
            url: this.url,
            title: this.title,
            description: this.description,
            email: this.email,
            phone: this.phone,
            image: this.image,
            statuses: this.statuses.map(item => item.valueOf()),
            bjr: this.bjr,
            card: this.card
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
            roles: this.roles,
            url: this.url,
            title: this.title,
            description: this.description,
            email: this.email,
            phone: this.phone,
            oauth: this.oauth,
            image: this.image,
            statuses: this.statuses,
            rating: this.rating,
            bjr: this.bjr,
            card: this.card
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert User value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'User';
    }
}
user_User.AnonymousFields = [
    'id',
    'title',
    'url',
    'image',
    'statuses',
    'rating',
    'bjr',
];
user_User.MainFields = [
    'id',
    'enable',
    'title',
    'email',
    'phone',
    'url',
    'roles',
    'image',
    'statuses',
    'rating',
    'bjr',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/user/index.ts



// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/video/video.ts
class Video {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = String(value.id || '').trim();
        this.enable = value.enable === undefined ? true : !!value.enable;
    }
    valueOf() {
        return {
            id: this.id,
            enable: this.enable,
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.id;
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
                throw new TypeError('Cannot convert Video value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Video';
    }
}
Video.MainFields = [
    'id',
    'enable',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/video/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/event/event.ts



class event_Event {
    constructor(value = {}) {
        if (!value)
            value = {};
        this.id = new uuid_UUID(value.id || null);
        this.enable = value.enable === undefined ? true : !!value.enable;
        this.url = String(value.url || '').trim();
        this.extUrl = String(value.extUrl || '').trim();
        this.title = String(value.title || '').trim();
        this.ogTitle = String(value.ogTitle || '').trim();
        this.description = String(value.description || '').trim();
        this.ogDescription = String(value.ogDescription || '').trim();
        this.image = Math.max(~~value.image, 0) || null;
        this.ogImage = Math.max(~~value.ogImage, 0) || null;
        this.startDate = new Timestamp(value.startDate);
        this.content = String(value.content || '').trim();
        this.rating = new Rating(value.rating);
        this.bjr = Math.min(Math.max(~~value.bjr, 0), 5);
        this.branding = {};
    }
    valueOf() {
        return {
            enable: this.enable,
            url: this.url,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate,
            content: this.content,
            bjr: this.bjr,
        };
    }
    toJSON() {
        return {
            id: this.id,
            enable: this.enable,
            url: this.url,
            extUrl: this.extUrl,
            title: this.title,
            ogTitle: this.ogTitle,
            description: this.description,
            ogDescription: this.ogDescription,
            image: this.image,
            ogImage: this.ogImage,
            startDate: this.startDate.isValid ? this.startDate : undefined,
            content: this.content,
            rating: this.rating,
            bjr: this.bjr,
            branding: this.branding,
        };
    }
    toNumber() {
        return NaN;
    }
    toString() {
        return this.title;
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
                throw new TypeError('Cannot convert Event value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'Event';
    }
}
event_Event.MainFields = [
    'id',
    'enable',
    'url',
    'title',
    'image',
    'rating',
    'bjr',
];

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/event/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/index.ts














// CONCATENATED MODULE: ./services/message/message.service.ts



class message_service_MessageService {
    constructor(platformId, _snackBar) {
        this._snackBar = _snackBar;
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
    }
    message(message, duration = 2000) {
        if (this.isServer)
            console.log(message);
        else
            this._snackBar.open(message, undefined, { duration });
    }
}

// CONCATENATED MODULE: ./services/message/index.ts


// CONCATENATED MODULE: ./services/user/user.service.ts














const AUTH_TOKEN_LS_ID = 'auth-token';
class user_service_UserService {
    constructor(platformId, _http, _matDialog, _message, _snackBar) {
        this._http = _http;
        this._matDialog = _matDialog;
        this._message = _message;
        this._snackBar = _snackBar;
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
    }
    get _authToken() {
        if (this.isServer)
            return null;
        return window.localStorage.getItem(AUTH_TOKEN_LS_ID) || null;
    }
    set _authToken(value) {
        if (this.isServer)
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
        return this._http.get(api_service_APIService.buildPath('/users/me'), { headers: this.authHeaders })
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
            .filter(item => item !== null)
            .map(item => new user_User(item));
    }
    login(data) {
        return this._http.post(api_service_APIService.buildPath('/auth/login'), data, { headers: this.authHeaders })
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
        this._http.get(api_service_APIService.buildPath('/auth/logout'), { headers: this.authHeaders })
            .catch(error => Observable["Observable"].of(null))
            .subscribe(item => {
            this._authToken = null;
            window.location.reload();
        });
    }
}

// CONCATENATED MODULE: ./services/user/index.ts


// CONCATENATED MODULE: ./services/api/enveroments.ts
let API_SERVER_VALUE = "https://api.bitjournal.io";
const API_SERVER = API_SERVER_VALUE;

// CONCATENATED MODULE: ./services/api/api.service.ts










const PATH_REGEXP = /^\/?(.*)/;
class api_service_APIService {
    constructor(_http, _router, _user, _message) {
        this._http = _http;
        this._router = _router;
        this._user = _user;
        this._message = _message;
    }
    static buildPath(value = '') {
        let match = PATH_REGEXP.exec(value.trim());
        return API_SERVER + '/' + (match && match[1] || '');
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
        const params = new http["i" /* HttpParams */]({ fromObject: inputParams });
        return this._http.get(api_service_APIService.buildPath(path), {
            headers: this._user.authHeaders,
            params
        })
            .catch(error => this._handleError(error))
            .filter(item => item !== null);
    }
    post(path, data) {
        return this._http.post(api_service_APIService.buildPath(path), data, { headers: this._user.authHeaders })
            .catch(error => this._handleError(error))
            .filter(item => item !== null);
    }
    put(path, data) {
        return this._http.put(api_service_APIService.buildPath(path), data, { headers: this._user.authHeaders })
            .catch(error => this._handleError(error))
            .filter(item => item !== null);
    }
    delete(path) {
        return this._http.delete(api_service_APIService.buildPath(path), { headers: this._user.authHeaders })
            .catch(error => this._handleError(error))
            .filter(item => item !== null);
    }
}

// CONCATENATED MODULE: ./services/api/index.ts


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/Subject.js
var Subject = __webpack_require__(10);
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject);

// CONCATENATED MODULE: ./services/loader/loader.service.ts



class loader_service_LoaderService {
    constructor(platformId) {
        this.loaderSubject = new Subject["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
    }
    show() {
        if (this.isServer)
            return;
        this.loaderSubject.next({ show: true });
    }
    hide() {
        if (this.isServer)
            return;
        this.loaderSubject.next({ show: false });
    }
}

// CONCATENATED MODULE: ./services/loader/index.ts


// CONCATENATED MODULE: ./pipes/timestamp/timestamp.ts


class timestamp_TimestampPipe {
    transform(input, type = 'ISO') {
        const ts = new Timestamp(input);
        if (ts.isInvalid)
            return '';
        switch (type) {
            case 'ISO':
                return ts.toISOString();
            case 'HR':
                return ts.toHRString();
            case 'URL':
                return ts.toURLString();
            default:
                return ts.toISOString();
        }
    }
}

// CONCATENATED MODULE: ./pipes/timestamp/index.ts


// CONCATENATED MODULE: ./pipes/image/enveroments.ts
let RAW_SERVER_VALUE = "https://raw.bitjournal.io";
let PORTAL_SERVER_VALUE = "https://bitjournal.io";
const RAW_SERVER = RAW_SERVER_VALUE;
const PORTAL_SERVER = PORTAL_SERVER_VALUE;

// CONCATENATED MODULE: ./pipes/image/image.pipe.ts


const image_pipe_PATH_REGEXP = /^\/?(.*)/;
const EMPTY_PNG = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
class image_pipe_ImagePipe {
    static ogURL(input) {
        if (!input)
            return PORTAL_SERVER + '/og.png';
        const match = image_pipe_PATH_REGEXP.exec(String(input).trim());
        if (!match)
            return PORTAL_SERVER + '/og.png';
        return RAW_SERVER + '/' + (match && match[1]);
    }
    transform(input) {
        if (!input)
            return EMPTY_PNG;
        const match = image_pipe_PATH_REGEXP.exec(String(input).trim());
        if (!match)
            return EMPTY_PNG;
        return RAW_SERVER + '/' + (match && match[1]);
    }
}

// CONCATENATED MODULE: ./pipes/image/index.ts


// CONCATENATED MODULE: ./pipes/order/order.ts

class OrderPipe {
    transform(input, key) {
        if (Array.isArray(input))
            return input.sort((a, b) => a[key] > b[key] ? 1 : -1);
        return input;
    }
}

// CONCATENATED MODULE: ./pipes/order/index.ts


// CONCATENATED MODULE: ./pipes/filter/filter.ts

class FilterPipe {
    transform(input, key, value) {
        if (Array.isArray(input))
            return input.filter((item) => item[key] === value);
        return input;
    }
}

// CONCATENATED MODULE: ./pipes/filter/index.ts


// CONCATENATED MODULE: ./pipes/index.ts





// CONCATENATED MODULE: ./services/meta/meta.service.ts

const DEFAULT_TITLE = 'BitJournal — издание про биткоин, криптовалюты, ICO, майнинг и блокчейн';
const DEFAULT_DESCRIPTION = 'На сайте BitJournal вы найдете оперативные новости из мира криптоиндустрии — все о самых грандиозных ICO в истории, огромные майнинг-фермы про летящий на луну биткоин и многое другое';
const DEFAULT_KEYWORDS = 'биткоин, bitjournal, криптовалюты, ico, майнинг, блокчейн';

class meta_service_MetaService {
    constructor(_meta, _title) {
        this._meta = _meta;
        this._title = _title;
    }
    setMetaTags({ title = '', description = '', keywords = '', ogTitle = '', ogDescription = '', ogImage = 0, } = {}) {
        this._title.setTitle(title || DEFAULT_TITLE);
        this._meta.addTag({ name: 'title', content: title || DEFAULT_TITLE });
        this._meta.addTag({ name: 'description', content: description || DEFAULT_DESCRIPTION });
        this._meta.addTag({ name: 'keywords', content: keywords || DEFAULT_KEYWORDS });
        this._meta.addTag({ property: 'og:type', content: 'website' });
        this._meta.addTag({ property: 'og:title', content: ogTitle || title || DEFAULT_TITLE });
        this._meta.addTag({ property: 'og:description', content: ogDescription || description || DEFAULT_DESCRIPTION });
        this._meta.addTag({ property: 'og:image', content: image_pipe_ImagePipe.ogURL(ogImage) });
        this._meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
        this._meta.addTag({ name: 'twitter:site', content: '@bitjournal_io' });
        this._meta.addTag({ name: 'twitter:creator', content: '@bitjournal_io' });
        this._meta.addTag({ name: 'twitter:title', content: ogTitle || title || DEFAULT_TITLE });
        this._meta.addTag({ name: 'twitter:description', content: ogDescription || description || DEFAULT_DESCRIPTION });
        this._meta.addTag({ name: 'twitter:image', content: image_pipe_ImagePipe.ogURL(ogImage) });
    }
}

// CONCATENATED MODULE: ./services/meta/index.ts


// CONCATENATED MODULE: ./services/notification/notification.service.ts


class notification_service_NotificationService {
    constructor(platformId) {
        this.allowNotification = false;
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
        this.initNotification();
    }
    initNotification() {
        if (this.isServer)
            return;
        if (!window || !('Notification' in window))
            return;
        switch (window.Notification.permission) {
            case 'granted':
                this.allowNotification = true;
                return;
            case 'denied':
                this.allowNotification = false;
                return;
            default:
                Notification.requestPermission(permission => {
                    this.allowNotification = permission === 'granted';
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


// CONCATENATED MODULE: ./services/social/vk-init.ts
const VK_API = 'https://vk.com/js/api/openapi.js';
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

// CONCATENATED MODULE: ./services/social/twitter-init.ts
const TW_API = 'https://platform.twitter.com/widgets.js';
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

// CONCATENATED MODULE: ./services/social/google-init.ts
const GOOGLE_API = 'https://apis.google.com/js/platform.js';
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

// CONCATENATED MODULE: ./services/social/fb-init.ts
const FB_API = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.11&appId=139427653304621';
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

// CONCATENATED MODULE: ./services/social/enveroments.ts
const VK_SOCIAL_ID = '149011206';

// CONCATENATED MODULE: ./services/social/social.service.ts







class social_service_SocialService {
    constructor(platformId) {
        this._vk = undefined;
        this._twitter = undefined;
        this._google = undefined;
        this._fb = undefined;
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
        this.init();
    }
    init() {
        if (this.isServer)
            return;
        this._vk = VKInit();
        this._twitter = TwitterInit();
        this._google = GoogleInit();
        this._fb = FBInit();
    }
    vk() {
        return this._vk || Promise.resolve(undefined);
    }
    twitter() {
        return this._twitter || Promise.resolve(undefined);
    }
    google() {
        return this._google || Promise.resolve(undefined);
    }
    fb() {
        return this._fb || Promise.resolve(undefined);
    }
}
social_service_SocialService.VK_SOCIAL_ID = VK_SOCIAL_ID;

// CONCATENATED MODULE: ./services/social/index.ts


// CONCATENATED MODULE: ./services/youtube/youtube.service.ts







const GOOGLE_API_KEY = 'AIzaSyB2gY86homt-uvqDQrRA0ru8gsNkPKRdZc';
const YOUTUBE_DATA_URL = `https://www.googleapis.com/youtube/v3/videos?id={{IDS}}&key=${GOOGLE_API_KEY}&part=snippet,statistics,contentDetails`;
const YOUTUBE_URL_REGEXP = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;
class youtube_service_YouTubeService {
    constructor(_http, _message) {
        this._http = _http;
        this._message = _message;
    }
    static parseVideoId(text) {
        text = text.trim();
        const idMatch = /^[a-zA-Z0-9_-]{6,11}$/.exec(text);
        if (idMatch)
            return idMatch[0];
        const urlMatch = YOUTUBE_URL_REGEXP.exec(text);
        if (urlMatch)
            return urlMatch[1];
        return undefined;
    }
    static formatDuration(duration) {
        return duration.replace(/[^0-9]+/g, ':')
            .replace(/(^:+|:+$)/g, '');
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


// CONCATENATED MODULE: ./services/metrika/metrika-init.ts
const METRIKA_ID = 47024637;
const METRIKA_API = 'https://mc.yandex.ru/metrika/watch.js';
function MetrikaInit() {
    return new Promise((resolve, reject) => {
        window.yandex_metrika_callbacks = function () {
            try {
                window[`yaCounter${METRIKA_ID}`] = new window.Ya.Metrika({
                    id: METRIKA_ID,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true
                });
            }
            catch (_) { }
            const YA = window[`yaCounter${METRIKA_ID}`];
            if (YA)
                resolve(YA);
            else
                reject(new Error('Yandex Metrika Initialisation error'));
        };
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.id = 'metrika-jssdk';
        script.src = METRIKA_API;
        document.head.appendChild(script);
    });
}

// CONCATENATED MODULE: ./services/metrika/metrika.service.ts



class metrika_service_MetrikaService {
    constructor(platformId) {
        this._ya = undefined;
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
        this.init();
    }
    init() {
        if (this.isServer)
            return;
        this._ya = MetrikaInit();
    }
    ya() {
        return this._ya || Promise.resolve(undefined);
    }
    async hit(url, referer) {
        const ya = await this.ya();
        if (!ya)
            return;
        ya.hit(url);
    }
}

// CONCATENATED MODULE: ./services/metrika/index.ts


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


// CONCATENATED MODULE: ./components/currencies-ribbon/currencies-ribbon.component.ts


class CurrenciesRsibbonComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/currencies-ribbon/index.ts


// CONCATENATED MODULE: ./components/follow/follow.component.ts

class FollowComponent {
}

// CONCATENATED MODULE: ./components/follow/index.ts


// CONCATENATED MODULE: ./components/footer/footer.component.ts


class footer_component_FooterComponent {
    constructor(_socialService) {
        this._socialService = _socialService;
    }
    addVKWidget() {
        this._socialService.vk().then(VK => {
            if (!VK)
                return;
            VK.Widgets.Group('vk_group_vidget', {
                mode: 1,
                no_cover: 1,
                color2: '24292e',
            }, social_service_SocialService.VK_SOCIAL_ID);
        });
    }
    addTwitterWidget() {
        this._socialService.twitter().then(tw => { });
    }
    addYouTubeWidget() {
        this._socialService.google().then(ga => { });
    }
    addFBWidget() {
        this._socialService.fb().then(fb => { });
    }
    ngAfterViewInit() {
        this.addVKWidget();
        this.addTwitterWidget();
        this.addYouTubeWidget();
        this.addFBWidget();
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
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
        this._router
            .events
            .filter(event => (event instanceof router["d" /* NavigationEnd */]))
            .subscribe(event => {
            if (this.isServer)
                return;
            window.scrollTo(0, 0);
            console.log(document.title);
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
            .subscribe((state) => this.show = state.show);
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


// CONCATENATED MODULE: ./components/pages/article/page-article.component.ts







const API_PUBLICATIONS = 'publications';
const ITEM_KEY = Object(platform_browser["m" /* makeStateKey */])('page-article-item');
const PUBLICATIONS_KEY = Object(platform_browser["m" /* makeStateKey */])('page-article-publications');
class page_article_component_PageArticleComponent {
    constructor(platformId, _tstate, _route, _api, _meta, _loaderService) {
        this._tstate = _tstate;
        this._route = _route;
        this._api = _api;
        this._meta = _meta;
        this._loaderService = _loaderService;
        this.showLoader = false;
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
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


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies.component.ts


class PageCurrenciesComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/currencies/page-currencies-item.component.ts


class PageCurrenciesItemComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/currencies/index.ts



// CONCATENATED MODULE: ./components/pages/events/page-events.component.ts


class PageEventsComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/events/page-events-item.component.ts


class PageEventsItemComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/events/index.ts



// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges.component.ts


class PageExchangesComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges-item.component.ts


class PageExchangesItemComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/exchanges/index.ts



// CONCATENATED MODULE: ./components/pages/ico/page-ico.component.ts


class PageICOComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/ico/page-ico-item.component.ts


class PageICOItemComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/ico/index.ts



// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/observable/concat.js
var concat = __webpack_require__(267);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);

// CONCATENATED MODULE: ./components/pages/main/page-main.component.ts







const page_main_component_API_PUBLICATIONS = 'publications';
const PUBLICATIONS_WEIGHT_0_KEY = Object(platform_browser["m" /* makeStateKey */])('page-main-publications_weight_0');
const PUBLICATIONS_WEIGHT_12_KEY = Object(platform_browser["m" /* makeStateKey */])('page-main-publications_weight_12');
class page_main_component_PageMainComponent {
    constructor(platformId, _tstate, _api, _meta, _loaderService) {
        this._tstate = _tstate;
        this._api = _api;
        this._meta = _meta;
        this._loaderService = _loaderService;
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
    }
    setMetaTags() {
        this._meta.setMetaTags();
    }
    ngOnInit() {
        this._loaderService.show();
        if (this._tstate.hasKey(PUBLICATIONS_WEIGHT_0_KEY)) {
            const items = this._tstate.get(PUBLICATIONS_WEIGHT_0_KEY, new Array());
            this.publications_weight_0 = Observable["Observable"].of(items);
            this._tstate.remove(PUBLICATIONS_WEIGHT_0_KEY);
        }
        else {
            this.publications_weight_0 = this._api
                .get(`/${page_main_component_API_PUBLICATIONS}?weight=0&limit=30`)
                .map(items => {
                if (this.isServer)
                    this._tstate.set(PUBLICATIONS_WEIGHT_0_KEY, items);
                return items;
            });
        }
        if (this._tstate.hasKey(PUBLICATIONS_WEIGHT_12_KEY)) {
            const items = this._tstate.get(PUBLICATIONS_WEIGHT_12_KEY, new Array());
            this.publications_weight_12 = Observable["Observable"].of(items);
            this._loaderService.hide();
            this._tstate.remove(PUBLICATIONS_WEIGHT_12_KEY);
        }
        else {
            this.publications_weight_12 = this._api.get(`/${page_main_component_API_PUBLICATIONS}?weight=1,2&limit=30`)
                .map(items => {
                if (this.isServer)
                    this._tstate.set(PUBLICATIONS_WEIGHT_12_KEY, items);
                this._loaderService.hide();
                return items;
            });
        }
        this.publications = Observable["Observable"].concat(this.publications_weight_0, this.publications_weight_12)
            .map(items => {
            console.log(items);
            return items;
        });
        this._meta.setMetaTags();
    }
}

// CONCATENATED MODULE: ./components/pages/main/index.ts


// CONCATENATED MODULE: ./components/pages/markets/page-markets.component.ts


class PageMarketsComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/markets/page-markets-item.component.ts


class PageMarketsItemComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/markets/index.ts



// CONCATENATED MODULE: ./components/pages/section/page-section.component.ts

class PageSectionComponent {
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/pages/section/index.ts


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

const SHARE_URL_BASE = 'https://bitjournal.io/';
const FB_BASE = 'https://www.facebook.com/sharer/sharer.php?u={{URL}}';
const TWITTER_BASE = 'https://twitter.com/home?status={{URL}}';
const VK_BASE = 'https://vk.com/share.php?url={{URL}}';
const TELEGRAM_BASE = 'https://t.me/share/url?url={{URL}}';
const WHATSAPP_BASE = 'whatsapp://send?text={{URL}}';
const VIBER_BASE = 'viber://forward?text={{URL}}';
const GOOGLE_BASE = 'https://plus.google.com/share?url={{URL}}';
class ShareComponent {
    get fbUrl() {
        return FB_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get twitterUrl() {
        return TWITTER_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get vkUrl() {
        return VK_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get telegramUrl() {
        return TELEGRAM_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get whatsappUrl() {
        return WHATSAPP_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get viberUrl() {
        return VIBER_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get googleUrl() {
        return GOOGLE_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url);
    }
    get url() {
        let url = Array.isArray(this.value) ? this.value.join('/') : String(this.value);
        const match = /^(?:[\/\s]+)?(.*)/.exec(url);
        url = match && match[1] || '';
        if (!/^http/i.test(url))
            url = SHARE_URL_BASE + '/' + url;
        return encodeURIComponent(url);
    }
}

// CONCATENATED MODULE: ./components/share/index.ts


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/mergeAll.js
var mergeAll = __webpack_require__(268);
var mergeAll_default = /*#__PURE__*/__webpack_require__.n(mergeAll);

// CONCATENATED MODULE: ./components/video-ribbon/video-ribbon.component.ts




const API_BASE = 'video';
class video_ribbon_component_VideoRibbonComponent {
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
            duration: youtube_service_YouTubeService.formatDuration(item.contentDetails.duration),
            view: parseInt(item.statistics.viewCount) || 0,
            like: parseInt(item.statistics.likeCount) || 0,
            dislike: parseInt(item.statistics.dislikeCount) || 0,
            comment: parseInt(item.statistics.commentCount) || 0,
        };
    }
    ngOnInit() {
        this.items = this._apiService
            .get(`/${API_BASE}`)
            .map(items => items.filter(item => item.enable))
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
    CurrenciesRsibbonComponent,
    FollowComponent,
    footer_component_FooterComponent,
    HeaderComponent,
    LoaderComponent,
    NoContentComponent,
    Page101Component,
    page_article_component_PageArticleComponent,
    PageCurrenciesComponent,
    PageCurrenciesItemComponent,
    PageEventsComponent,
    PageEventsItemComponent,
    PageExchangesComponent,
    PageExchangesItemComponent,
    PageICOComponent,
    PageICOItemComponent,
    page_main_component_PageMainComponent,
    PageMarketsComponent,
    PageMarketsItemComponent,
    PageSectionComponent,
    PubCardComponent,
    PubLineComponent,
    ShareComponent,
    video_ribbon_component_VideoRibbonComponent,
];
const ENTRY_COMPONENTS = [
    auth_dialog_component_AuthDialogComponent,
];

// CONCATENATED MODULE: ./app.module.ts






const app_module__0 = NotificationServiceFactory;
class AppModule {
    constructor(notificationService) {
        notificationService.initNotification();
    }
}


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/dialog/typings/index.ngfactory.js
var index_ngfactory = __webpack_require__(269);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/snack-bar/typings/index.ngfactory.js
var typings_index_ngfactory = __webpack_require__(270);

// CONCATENATED MODULE: ./components/pages/main/page-main.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var styles = [".bj-page-main__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}@media (min-width:600px){.bj-page-main__wrapper{padding:var(--indent-double) var(--indent-base)}}@media (min-width:1200px){.bj-page-main__wrapper{padding:var(--indent-double)}}.bj-page-main__row{width:100%;display:flex;justify-content:flex-start;align-items:stretch}.bj-page-main__col{flex:1 1 auto}.bj-page-main__aside{width:var(--aside-width);flex:0 0 var(--aside-width);margin-left:var(--indent-double);flex-direction:column;justify-content:flex-start;align-items:center;display:none}@media (min-width:700px){.bj-page-main__aside{display:flex}}.bj-page-main__card{margin-top:var(--indent-double)}.bj-page-main__card:first-child{margin-top:0}@supports (display:grid){@media (min-width:1000px){.bj-page-main__card{margin-top:0}.bj-page-main__card--wide{grid-column-end:span 2}.bj-page-main__col--grid{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:var(--indent-double);grid-row-gap:var(--indent-double);grid-auto-flow:dense}}@media (min-width:1200px){.bj-page-main__col--grid{grid-template-columns:1fr 1fr 1fr}}}"];


// CONCATENATED MODULE: ./components/pub-card/pub-card.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var pub_card_component_css_ngstyle_styles = [".bj-pub-card{display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start;max-width:100%;text-decoration:none;text-transform:none;color:var(--color-main)}.bj-pub-card__figure{flex:0 0 100%;width:100%;min-height:calc(100vw/1.5);position:relative;margin:0;padding:0;background:#f6f6f6;display:flex;flex-direction:column;justify-content:space-between}@media (min-width:600px){.bj-pub-card__figure{min-height:250px}}.bj-pub-card__picture{position:absolute;left:0;top:0;right:0;bottom:0;height:100%;overflow:hidden;background:#f9f9f9}.bj-pub-card__picture,.bj-pub-card__picture img,.bj-pub-card__row{display:block;box-sizing:border-box;width:100%}.bj-pub-card__picture img{min-width:100%;min-height:100%;top:50%;left:50%;transform:translate(-50%,-50%) scale(1);transform-origin:center;transition:transform .5s linear;object-fit:cover;position:absolute}.bj-pub-card:hover .bj-pub-card__picture img{transform:translate(-50%,-50%) scale(1.05)}.bj-pub-card__picture:after{content:\"\";display:block;position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,rgba(36,41,46,0) 0%,rgba(36,41,46,.1) 34%,rgba(36,41,46,.7) 100%)}.bj-pub-card__row{position:relative;padding:var(--indent-base) 0}.bj-pub-card__h2{margin:0 0 -.1em;font-family:inherit;font-size:1.5rem;line-height:1.35;color:#fff;text-shadow:0 0 2px rgba(36,41,46,.7)}.bj-pub-card__datetime,.bj-pub-card__h1,.bj-pub-card__h2{display:block;box-sizing:border-box;padding:0 var(--indent-base)}.bj-pub-card__h1{flex:0 0 100%;width:100%;margin:0;font-family:inherit;font-size:1.17rem;line-height:1.15;margin-top:var(--indent-half)}.bj-pub-card__datetime{margin-top:var(--indent-base);color:var(--color-gray);font-size:13px}.bj-pub-card__datetime i{margin-right:.5em}"];


// CONCATENATED MODULE: ./components/pub-card/pub-card.component.ngfactory.js
/** PURE_IMPORTS_START _pub_card.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_angular_common,_pub_card.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _pub_card.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_angular_common,_pub_card.component PURE_IMPORTS_END */






var styles_PubCardComponent = [pub_card_component_css_ngstyle_styles];
var RenderType_PubCardComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PubCardComponent, data: {} });

function View_PubCardComponent_1(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "figcaption", [["class", "bj-pub-card__row bj-pub-card__row--dark"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [["class", "bj-pub-card__h2"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.bigTitle; _ck(_v, 2, 0, currVal_0); }); }
function View_PubCardComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 6, "figure", [["class", "bj-pub-card__figure"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 2, "picture", [["class", "bj-pub-card__picture"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_18" /* ɵppd */](5, 1), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 0, "figcaption", [["class", "bj-pub-card__row"]], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_PubCardComponent_1)), core["_2" /* ɵdid */](8, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 5, "time", [["class", "bj-pub-card__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_18" /* ɵppd */](10, 1), (_l()(), core["_3" /* ɵeld */](11, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-clock-o"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](13, null, ["", ""])), core["_18" /* ɵppd */](14, 2), (_l()(), core["_3" /* ɵeld */](15, 0, null, null, 1, "h1", [["class", "bj-pub-card__h1"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](16, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = !!_co.value.bigTitle; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_15" /* ɵnov */](_v, 0), _co.value.image)); _ck(_v, 4, 0, currVal_0); var currVal_2 = core["_23" /* ɵunv */](_v, 9, 0, _ck(_v, 10, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts)); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_23" /* ɵunv */](_v, 13, 0, _ck(_v, 14, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts, "HR")); _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.value.title; _ck(_v, 16, 0, currVal_4); }); }
function View_PubCardComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-pub-card"]], null, null, null, View_PubCardComponent_0, RenderType_PubCardComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, PubCardComponent, [], null, null)], null, null); }
var PubCardComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-pub-card", PubCardComponent, View_PubCardComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pub-line/pub-line.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var pub_line_component_css_ngstyle_styles = [".bj-pub-line{display:flex;margin-top:var(--indent-base);text-decoration:none;text-transform:none;color:var(--color-main);width:100%}.bj-pub-line__picture{display:block;position:relative;width:60px;min-width:60px;max-width:60px;height:60px;min-height:60px;max-height:60px;flex:0 0 60px;border-radius:50%;overflow:hidden;margin-right:var(--indent-base);background:#f9f9f9}.bj-pub-line__picture img{display:block;box-sizing:border-box;position:absolute;min-width:100%;min-height:100%;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover;border-radius:50%}.bj-pub-line__data{flex:1 1 auto}.bj-pub-line__datetime,.bj-pub-line__h1{display:block;box-sizing:border-box;padding:0}.bj-pub-line__datetime{color:var(--color-gray);font-size:13px;margin:0}.bj-pub-line__datetime i{margin-right:.5em}.bj-pub-line__h1{width:100%;margin:5px 0 0;font-family:inherit;font-size:1rem;font-weight:500;line-height:1.4}"];


// CONCATENATED MODULE: ./components/pub-line/pub-line.component.ngfactory.js
/** PURE_IMPORTS_START _pub_line.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_pub_line.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _pub_line.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_pub_line.component PURE_IMPORTS_END */





var styles_PubLineComponent = [pub_line_component_css_ngstyle_styles];
var RenderType_PubLineComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PubLineComponent, data: {} });

function View_PubLineComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 2, "picture", [["class", "bj-pub-line__picture"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_18" /* ɵppd */](4, 1), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 8, "div", [["class", "bj-pub-line__data"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 5, "time", [["class", "bj-pub-line__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_18" /* ɵppd */](7, 1), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-clock-o"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](10, null, ["", ""])), core["_18" /* ɵppd */](11, 2), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 1, "h1", [["class", "bj-pub-line__h1"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](13, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 3, 0, _ck(_v, 4, 0, core["_15" /* ɵnov */](_v, 0), _co.value.image)); _ck(_v, 3, 0, currVal_0); var currVal_1 = core["_23" /* ɵunv */](_v, 6, 0, _ck(_v, 7, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts)); _ck(_v, 6, 0, currVal_1); var currVal_2 = core["_23" /* ɵunv */](_v, 10, 0, _ck(_v, 11, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts, "HR")); _ck(_v, 10, 0, currVal_2); var currVal_3 = _co.value.title; _ck(_v, 13, 0, currVal_3); }); }
function View_PubLineComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-pub-line"]], null, null, null, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, PubLineComponent, [], null, null)], null, null); }
var PubLineComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-pub-line", PubLineComponent, View_PubLineComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pages/main/page-main.component.ngfactory.js
/** PURE_IMPORTS_START _page_main.component.css.ngstyle,_angular_core,_.._pub_card_pub_card.component.ngfactory,_angular_router,_angular_common,_.._pub_card_pub_card.component,_.._pub_line_pub_line.component.ngfactory,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_page_main.component,_angular_platform_browser,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_main.component.css.ngstyle,_angular_core,_.._pub_card_pub_card.component.ngfactory,_angular_router,_angular_common,_.._pub_card_pub_card.component,_.._pub_line_pub_line.component.ngfactory,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_page_main.component,_angular_platform_browser,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */














var styles_PageMainComponent = [styles];
var RenderType_PageMainComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMainComponent, data: {} });

function View_PageMainComponent_1(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-card bj-page-main__card"]], [[2, "bj-page-main__card--wide", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubCardComponent_0, RenderType_PubCardComponent)), core["_2" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵppd */](2, 2), core["_16" /* ɵpad */](3, 3), core["_2" /* ɵdid */](4, 49152, null, 0, PubCardComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_3 = _ck(_v, 3, 0, "/", core["_23" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "URL")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_3); var currVal_4 = _v.context.$implicit; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.weight > 1); var currVal_1 = core["_15" /* ɵnov */](_v, 1).target; var currVal_2 = core["_15" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); });
}
function View_PageMainComponent_2(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-line"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_2" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵppd */](2, 2), core["_16" /* ɵpad */](3, 3), core["_2" /* ɵdid */](4, 49152, null, 0, PubLineComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/", core["_23" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "URL")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).target; var currVal_1 = core["_15" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageMainComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 11, "main", [["class", "bj-page-main__wrapper"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 10, "div", [["class", "bj-page-main__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 3, "div", [["class", "bj-page-main__col bj-page-main__col--grid"]], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageMainComponent_1)), core["_2" /* ɵdid */](5, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 5, "aside", [["class", "bj-page-main__aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 1, "h1", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageMainComponent_2)), core["_2" /* ɵdid */](11, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 5, 0, core["_15" /* ɵnov */](_v, 6).transform(_co.publications)); _ck(_v, 5, 0, currVal_0); var currVal_1 = core["_23" /* ɵunv */](_v, 11, 0, core["_15" /* ɵnov */](_v, 12).transform(_co.publications_weight_0)); _ck(_v, 11, 0, currVal_1); }, null); }
function View_PageMainComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-main", [["class", "page"]], null, null, null, View_PageMainComponent_0, RenderType_PageMainComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, page_main_component_PageMainComponent, [core["A" /* PLATFORM_ID */], platform_browser["k" /* TransferState */], api_service_APIService, meta_service_MetaService, loader_service_LoaderService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMainComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-main.page", page_main_component_PageMainComponent, View_PageMainComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/101/page-101.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_101_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/video-ribbon/video-ribbon.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var video_ribbon_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/video-ribbon/video-ribbon.component.ngfactory.js
/** PURE_IMPORTS_START _video_ribbon.component.css.ngstyle,_angular_core,_angular_common,_video_ribbon.component,_angular_router,_.._services_api_api.service,_.._services_youtube_youtube.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _video_ribbon.component.css.ngstyle,_angular_core,_angular_common,_video_ribbon.component,_angular_router,_.._services_api_api.service,_.._services_youtube_youtube.service PURE_IMPORTS_END */







var styles_VideoRibbonComponent = [video_ribbon_component_css_ngstyle_styles];
var RenderType_VideoRibbonComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_VideoRibbonComponent, data: {} });

function View_VideoRibbonComponent_1(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 10, "a", [["class", "bj-video-ribbon__item"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 5, "figure", [["class", "bj-video-ribbon__figure"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "img", [["class", "bj-video-ribbon__thumb"]], [[8, "src", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "figcaption", [["class", "bj-video-ribbon__caption bj-video-ribbon__caption--left"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](4, null, ["", ""])), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "figcaption", [["class", "bj-video-ribbon__caption bj-video-ribbon__caption--right"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](6, null, ["", ""])), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 1, "time", [["class", "bj-video-ribbon__datetime"]], [[1, "datetime", 0]], null, null, null, null)), (_l()(), core["_22" /* ɵted */](8, null, ["", ""])), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 1, "h3", [["class", "bj-video-ribbon__title"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](10, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.href; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.thumb; _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.duration; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.like; _ck(_v, 6, 0, currVal_3); var currVal_4 = _v.context.$implicit.date; _ck(_v, 7, 0, currVal_4); var currVal_5 = _v.context.$implicit.date; _ck(_v, 8, 0, currVal_5); var currVal_6 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_6); }); }
function View_VideoRibbonComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 3, "div", [["class", "bj-video-ribbon__wrapper"]], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_VideoRibbonComponent_1)), core["_2" /* ɵdid */](2, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 2, 0, core["_15" /* ɵnov */](_v, 3).transform(_co.items)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_VideoRibbonComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["l" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VideoRibbonComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("video-ribbon", video_ribbon_component_VideoRibbonComponent, View_VideoRibbonComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/101/page-101.component.ngfactory.js
/** PURE_IMPORTS_START _page_101.component.css.ngstyle,_angular_core,_.._video_ribbon_video_ribbon.component.ngfactory,_.._video_ribbon_video_ribbon.component,_angular_router,_.._.._services_api_api.service,_.._.._services_youtube_youtube.service,_page_101.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_101.component.css.ngstyle,_angular_core,_.._video_ribbon_video_ribbon.component.ngfactory,_.._video_ribbon_video_ribbon.component,_angular_router,_.._.._services_api_api.service,_.._.._services_youtube_youtube.service,_page_101.component PURE_IMPORTS_END */








var styles_Page101Component = [page_101_component_css_ngstyle_styles];
var RenderType_Page101Component = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_Page101Component, data: {} });

function View_Page101Component_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Video"])), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](6, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["l" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
function View_Page101Component_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-101", [], null, null, null, View_Page101Component_0, RenderType_Page101Component)), core["_2" /* ɵdid */](1, 114688, null, 0, Page101Component, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Page101ComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-101", Page101Component, View_Page101Component_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_currencies_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies.component.ngfactory.js
/** PURE_IMPORTS_START _page_currencies.component.css.ngstyle,_angular_core,_page_currencies.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_currencies.component.css.ngstyle,_angular_core,_page_currencies.component,_angular_router PURE_IMPORTS_END */




var styles_PageCurrenciesComponent = [page_currencies_component_css_ngstyle_styles];
var RenderType_PageCurrenciesComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageCurrenciesComponent, data: {} });

function View_PageCurrenciesComponent_0(_l) { return core["_24" /* ɵvid */](0, [], null, null); }
function View_PageCurrenciesComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-currencies", [], null, null, null, View_PageCurrenciesComponent_0, RenderType_PageCurrenciesComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageCurrenciesComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageCurrenciesComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-currencies", PageCurrenciesComponent, View_PageCurrenciesComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_currencies_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_currencies_item.component.css.ngstyle,_angular_core,_page_currencies_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_currencies_item.component.css.ngstyle,_angular_core,_page_currencies_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageCurrenciesItemComponent = [page_currencies_item_component_css_ngstyle_styles];
var RenderType_PageCurrenciesItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageCurrenciesItemComponent, data: {} });

function View_PageCurrenciesItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
function View_PageCurrenciesItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-currencies-item", [], null, null, null, View_PageCurrenciesItemComponent_0, RenderType_PageCurrenciesItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageCurrenciesItemComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageCurrenciesItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-currencies-item", PageCurrenciesItemComponent, View_PageCurrenciesItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/events/page-events.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_events_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/events/page-events.component.ngfactory.js
/** PURE_IMPORTS_START _page_events.component.css.ngstyle,_angular_core,_page_events.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_events.component.css.ngstyle,_angular_core,_page_events.component,_angular_router PURE_IMPORTS_END */




var styles_PageEventsComponent = [page_events_component_css_ngstyle_styles];
var RenderType_PageEventsComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageEventsComponent, data: {} });

function View_PageEventsComponent_0(_l) { return core["_24" /* ɵvid */](0, [], null, null); }
function View_PageEventsComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-events", [], null, null, null, View_PageEventsComponent_0, RenderType_PageEventsComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageEventsComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageEventsComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-events", PageEventsComponent, View_PageEventsComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/events/page-events-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_events_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/events/page-events-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_events_item.component.css.ngstyle,_angular_core,_page_events_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_events_item.component.css.ngstyle,_angular_core,_page_events_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageEventsItemComponent = [page_events_item_component_css_ngstyle_styles];
var RenderType_PageEventsItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageEventsItemComponent, data: {} });

function View_PageEventsItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
function View_PageEventsItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-events-item", [], null, null, null, View_PageEventsItemComponent_0, RenderType_PageEventsItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageEventsItemComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageEventsItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-events-item", PageEventsItemComponent, View_PageEventsItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_exchanges_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges.component.ngfactory.js
/** PURE_IMPORTS_START _page_exchanges.component.css.ngstyle,_angular_core,_page_exchanges.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_exchanges.component.css.ngstyle,_angular_core,_page_exchanges.component,_angular_router PURE_IMPORTS_END */




var styles_PageExchangesComponent = [page_exchanges_component_css_ngstyle_styles];
var RenderType_PageExchangesComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageExchangesComponent, data: {} });

function View_PageExchangesComponent_0(_l) { return core["_24" /* ɵvid */](0, [], null, null); }
function View_PageExchangesComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-exchanges", [], null, null, null, View_PageExchangesComponent_0, RenderType_PageExchangesComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageExchangesComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageExchangesComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-exchanges", PageExchangesComponent, View_PageExchangesComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_exchanges_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_exchanges_item.component.css.ngstyle,_angular_core,_page_exchanges_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_exchanges_item.component.css.ngstyle,_angular_core,_page_exchanges_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageExchangesItemComponent = [page_exchanges_item_component_css_ngstyle_styles];
var RenderType_PageExchangesItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageExchangesItemComponent, data: {} });

function View_PageExchangesItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
function View_PageExchangesItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-exchanges-item", [], null, null, null, View_PageExchangesItemComponent_0, RenderType_PageExchangesItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageExchangesItemComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageExchangesItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-exchanges-item", PageExchangesItemComponent, View_PageExchangesItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/ico/page-ico.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_ico_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/ico/page-ico.component.ngfactory.js
/** PURE_IMPORTS_START _page_ico.component.css.ngstyle,_angular_core,_page_ico.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_ico.component.css.ngstyle,_angular_core,_page_ico.component,_angular_router PURE_IMPORTS_END */




var styles_PageICOComponent = [page_ico_component_css_ngstyle_styles];
var RenderType_PageICOComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageICOComponent, data: {} });

function View_PageICOComponent_0(_l) { return core["_24" /* ɵvid */](0, [], null, null); }
function View_PageICOComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-ico", [], null, null, null, View_PageICOComponent_0, RenderType_PageICOComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageICOComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageICOComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-ico", PageICOComponent, View_PageICOComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/ico/page-ico-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_ico_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/ico/page-ico-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_ico_item.component.css.ngstyle,_angular_core,_page_ico_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_ico_item.component.css.ngstyle,_angular_core,_page_ico_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageICOItemComponent = [page_ico_item_component_css_ngstyle_styles];
var RenderType_PageICOItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageICOItemComponent, data: {} });

function View_PageICOItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
function View_PageICOItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-ico-item", [], null, null, null, View_PageICOItemComponent_0, RenderType_PageICOItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageICOItemComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageICOItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-ico-item", PageICOItemComponent, View_PageICOItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/markets/page-markets.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_markets_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/markets/page-markets.component.ngfactory.js
/** PURE_IMPORTS_START _page_markets.component.css.ngstyle,_angular_core,_page_markets.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_markets.component.css.ngstyle,_angular_core,_page_markets.component,_angular_router PURE_IMPORTS_END */




var styles_PageMarketsComponent = [page_markets_component_css_ngstyle_styles];
var RenderType_PageMarketsComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMarketsComponent, data: {} });

function View_PageMarketsComponent_0(_l) { return core["_24" /* ɵvid */](0, [], null, null); }
function View_PageMarketsComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-markets", [], null, null, null, View_PageMarketsComponent_0, RenderType_PageMarketsComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMarketsComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMarketsComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-markets", PageMarketsComponent, View_PageMarketsComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/markets/page-markets-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_markets_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/markets/page-markets-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_markets_item.component.css.ngstyle,_angular_core,_page_markets_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_markets_item.component.css.ngstyle,_angular_core,_page_markets_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageMarketsItemComponent = [page_markets_item_component_css_ngstyle_styles];
var RenderType_PageMarketsItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMarketsItemComponent, data: {} });

function View_PageMarketsItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
function View_PageMarketsItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-markets-item", [], null, null, null, View_PageMarketsItemComponent_0, RenderType_PageMarketsItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMarketsItemComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMarketsItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-markets-item", PageMarketsItemComponent, View_PageMarketsItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/section/page-section.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_section_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/pages/section/page-section.component.ngfactory.js
/** PURE_IMPORTS_START _page_section.component.css.ngstyle,_angular_core,_page_section.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_section.component.css.ngstyle,_angular_core,_page_section.component PURE_IMPORTS_END */



var styles_PageSectionComponent = [page_section_component_css_ngstyle_styles];
var RenderType_PageSectionComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageSectionComponent, data: {} });

function View_PageSectionComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0420\u0430\u0437\u0434\u0435\u043B"]))], null, null); }
function View_PageSectionComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-section", [], null, null, null, View_PageSectionComponent_0, RenderType_PageSectionComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageSectionComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageSectionComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-section", PageSectionComponent, View_PageSectionComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/article/page-article.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_article_component_css_ngstyle_styles = [".bj-page-article__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}@media (min-width:600px){.bj-page-article__wrapper{padding:var(--indent-double) var(--indent-base)}}@media (min-width:1200px){.bj-page-article__wrapper{padding:var(--indent-double)}}.bj-page-article__row{width:100%;display:flex;justify-content:flex-start;align-items:stretch}.bj-page-article__col{flex:1 1 auto}.bj-page-article__aside{width:var(--aside-width);flex:0 0 var(--aside-width);margin-left:var(--indent-double);flex-direction:column;justify-content:flex-start;align-items:center;display:none}@media (min-width:900px){.bj-page-article__aside{display:flex}}"];


// CONCATENATED MODULE: ./components/article/article.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var article_component_css_ngstyle_styles = [".bj-article{display:block}.bj-article__wrapper{display:block;width:100%}.bj-article__header{position:relative;width:100%;padding:var(--indent-double) var(--indent-base)}.bj-article__header__picture,.bj-article__header__picture:after{display:block;position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%}.bj-article__header__picture{box-sizing:border-box;overflow:hidden;background:#f9f9f9}.bj-article__header__picture img{display:block;box-sizing:border-box;position:absolute;min-width:100%;min-height:100%;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover}.bj-article__header__picture:after{content:\"\";background:rgba(36,41,46,.5)}.bj-article__header__tags{display:flex;position:relative;width:100%;max-width:var(--max-article-width);height:22px;margin:0 auto;padding:0;flex-wrap:wrap;overflow:hidden}@media (min-width:600px){.bj-article__header__tags{padding:0 20px}}.bj-article__header__tags a{display:block;position:relative;text-decoration:none;text-transform:uppercase;font-size:13px;font-weight:300;line-height:21px;padding:1px 5px 0;background:var(--color-main);color:#fff;margin-right:8px}.bj-article__header__tags a::after,.bj-article__header__tags a::before{display:block;content:\"\";position:absolute;width:0;height:0;top:0}.bj-article__header__tags a::before{left:-5px;border-bottom:22px solid var(--color-main);border-left:5px solid transparent}.bj-article__header__tags a::after{right:-5px;border-top:22px solid var(--color-main);border-right:5px solid transparent}.bj-article__header__tags a:first-child::before{display:none}.bj-article__header__tags a:last-child::after{display:none}.bj-article__header__datetime{display:block;position:relative;width:100%;max-width:var(--max-article-width);margin:var(--indent-double) auto 0;font-size:14px;color:#fff}@media (min-width:600px){.bj-article__header__datetime{padding:0 20px}}.bj-article__header__datetime i{margin-right:.5em}.bj-article__header__h1,.bj-article__header__h2{display:block;position:relative;width:100%;max-width:var(--max-article-width);margin:10px auto 20px;font-family:inherit;font-size:1.5rem;font-weight:500;line-height:1.35;color:#fff}@media (min-width:600px){.bj-article__header__h1,.bj-article__header__h2{font-size:2.25rem;padding:0 20px}}.bj-article__header__h2+.bj-article__header__h1{margin-top:-12px;font-size:1.25rem;font-weight:400}@media (min-width:600px){.bj-article__header__h2+.bj-article__header__h1{font-size:1.5rem}}.bj-article__share{position:relative;width:100%;margin-top:var(--indent-base);padding:0 var(--indent-base)}@media (min-width:600px){.bj-article__share{padding:0}}"];


// CONCATENATED MODULE: ./components/share/share.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var share_component_css_ngstyle_styles = [".share,.share__item{display:flex;height:30px;justify-content:space-between;align-items:stretch}.share__item{flex:0 0 auto;overflow:hidden;justify-content:flex-start;text-decoration:none;text-transform:none;font-size:13px;font-weight:300;line-height:1;color:#fff;background:0 0}.share__item__icon,.share__item__text{height:30px;align-items:center;background:var(--background-color)}.share__item__icon{display:flex;justify-content:center;width:30px;flex:0 0 30px}.share__item__icon svg{width:18px;height:18px}.share__item__icon path{fill:currentColor}.share__item__text{display:none;flex:0 0 auto;margin-left:2px;padding:0 .7em;white-space:nowrap}@media (min-width:400px){.share__item--fb .share__item__text{display:flex}}@media (min-width:450px){.share__item--twitter .share__item__text{display:flex}}@media (min-width:550px){.share__item--vk .share__item__text{display:flex}}@media (min-width:650px){.share__item--telegram .share__item__text{display:flex}}@media (min-width:750px){.share__item--whatsapp .share__item__text{display:flex}}@media (min-width:800px){.share__item--viber .share__item__text{display:flex}}@media (min-width:850px){.share__item--google .share__item__text{display:flex}}@media (min-width:900px){.share__item--google .share__item__text,.share__item--telegram .share__item__text,.share__item--viber .share__item__text,.share__item--whatsapp .share__item__text{display:none}}@media (min-width:1000px){.share__item--telegram .share__item__text{display:flex}}@media (min-width:1050px){.share__item--whatsapp .share__item__text{display:flex}}@media (min-width:1100px){.share__item--viber .share__item__text{display:flex}}@media (min-width:1150px){.share__item--google .share__item__text{display:flex}}.share__item__text span{white-space:nowrap}.share__item--fb{--background-color:#3b5998}.share__item--twitter{--background-color:#1ea2f4}.share__item--vk{--background-color:#6478a1}.share__item--telegram{--background-color:#31afec}.share__item--whatsapp{--background-color:#26d365}.share__item--viber{--background-color:#8f5db7}.share__item--google{--background-color:#dc5144}"];


// CONCATENATED MODULE: ./components/share/share.component.ngfactory.js
/** PURE_IMPORTS_START _share.component.css.ngstyle,_angular_core,_share.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _share.component.css.ngstyle,_angular_core,_share.component PURE_IMPORTS_END */



var styles_ShareComponent = [share_component_css_ngstyle_styles];
var RenderType_ShareComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_ShareComponent, data: {} });

function View_ShareComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 6, "a", [["class", "share__item share__item--fb"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 0, ":svg:path", [["d", "M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1 .2-1.3 1-1.3h3V0h-3.8C10.6 0 9 1.6 9 4.6V8z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Facebook"])), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 6, "a", [["class", "share__item share__item--twitter"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](10, 0, null, null, 0, ":svg:path", [["d", "M24 4.6c-1 .3-1.8.6-2.8.7 1-.6 1.8-1.5 2-2.7-.8.6-2 1-3 1.2-1-1-2.2-1.6-3.6-1.6-3.2 0-5.5 3-4.8 6-4 0-7.7-2-10-5C.3 5.3 1 8 3 9.6c-.8 0-1.6-.2-2.2-.6 0 2.4 1.5 4.5 4 5-.8.2-1.5.2-2.3 0 .6 2 2.4 3.5 4.6 3.5-2 1.6-4.7 2.3-7.3 2 2.2 1.4 4.8 2.3 7.5 2.3 9.2 0 14.4-7.8 14-14.7 1-.6 1.8-1.5 2.5-2.4z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](11, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Twitter"])), (_l()(), core["_3" /* ɵeld */](14, 0, null, null, 6, "a", [["class", "share__item share__item--vk"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](15, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](16, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](17, 0, null, null, 0, ":svg:path", [["d", "M13.2 19c.6 0 .8-.4.8-1 0-1.8.7-3 2-1.5 1.6 1.5 2 2.5 3.7 2.5H23c.7 0 1-.3 1-.7 0-.8-1.4-2.4-2.6-3.5-1.7-1.5-1.8-1.6-.3-3.5C23 9 25.3 6 23 6h-3.8c-.8 0-1 .4-1 1-1 2.4-3 5.5-3.8 5-.7-.5-.4-2.4-.3-5.3 0-.7 0-1.2-1-1.5L11 5C9 5 7.4 6 8.3 6c1.6.4 1.4 3.8 1 5.3-.6 2.5-3-2-4-4.3C5 6.4 5 6 4 6H.8c-.5 0-.8.2-.8.5 0 .6 3 6.7 5.8 9.8 2.7 3 5.5 2.7 7.4 2.7z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](18, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](19, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"])), (_l()(), core["_3" /* ɵeld */](21, 0, null, null, 6, "a", [["class", "share__item share__item--telegram"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](22, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](23, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](24, 0, null, null, 0, ":svg:path", [["d", "M.4 11.6l5.6 2 2 7c.2.3.8.5 1 .2l3.2-2.5c.3-.3.8-.3 1 0l5.7 4c.3.3.8 0 1-.4l4-19.7c0-.5-.4-1-1-.7L.5 10.4c-.5.2-.5 1 0 1.2zm7.3 1l10.8-6.8c.3 0 .5.2.3.4l-9 8.3-.5 1L9 18c0 .3-.5.3-.5 0l-1.2-4c-.2-.5 0-1 .4-1.3z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](25, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](26, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Telegram"])), (_l()(), core["_3" /* ɵeld */](28, 0, null, null, 6, "a", [["class", "share__item share__item--whatsapp"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](29, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](30, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](31, 0, null, null, 0, ":svg:path", [["d", "M0 24l1.7-6.2C.7 16 .2 14 .2 11.8.2 5.4 5.5 0 12.2 0c3 0 6 1.2 8.3 3.5C22.7 5.7 24 8.7 24 12c0 6.5-5.4 11.8-12 11.8-2 0-4-.5-5.6-1.5L0 24zm6.7-3.8c1.6 1 3.2 1.6 5.3 1.6 5.5 0 10-4.4 10-10C22 6.5 17.4 2 12 2 6.7 2 2.3 6.4 2.3 12c0 2 .6 3.8 1.7 5.5l-1 3.7 3.7-1zM18 14.7l-.5-.3-2-1c-.3 0-.5 0-.7.2-.2.3-.8 1-1 1 0 .3-.3.4-.6.2-.3 0-1.3-.5-2.4-1.5-1-.8-1.5-1.7-1.7-2 0-.3 0-.5.3-.6 0-.2.3-.4.4-.6.2 0 .2-.2.3-.4V9L9 7c-.2-.7-.4-.6-.6-.6h-.6c-.2 0-.5 0-.8.4s-1 1-1 2.5 1 2.8 1.2 3c.2.2 2 3.2 5 4.5l1.8.6c.7.3 1.3.2 2 .2.4 0 1.6-.8 2-1.5v-1.3z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](32, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](33, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["WhatsApp"])), (_l()(), core["_3" /* ɵeld */](35, 0, null, null, 6, "a", [["class", "share__item share__item--viber"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](36, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](37, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](38, 0, null, null, 0, ":svg:path", [["d", "M14.3 0H9.7A8.7 8.7 0 0 0 1 8.7v4.1c0 3.6 2.2 6.8 5.5 8.1v2.7c0 .2.1.3.3.4H7l.3-.1 2.7-2.4h4.4c4.8 0 8.7-3.9 8.7-8.7V8.7C23 3.9 19.1 0 14.3 0zm7.8 12.8c0 4.3-3.5 7.8-7.8 7.8H9.8l-.3.1-2 1.8v-2c0-.2-.1-.4-.3-.4A7.8 7.8 0 0 1 2 12.8V8.7C2 4.4 5.5.9 9.8.9h4.6c4.3 0 7.8 3.5 7.8 7.8l-.1 4.1zM18 13.9l-2.8-1.8c-.3-.2-.7-.3-1-.2-.4.1-.7.3-.9.6l-.1.2c-1.2-.4-2.6-.9-3.4-3.2l.3-.3c.6-.5.6-1.4.1-1.9L8.1 4.7c-.2-.2-.5-.2-.6 0L6.1 5.9c-1.2 1-.7 2.6-.5 3.1v.1a20 20 0 0 0 3 4c1.9 1.9 5.2 3.6 5.3 3.7.4.2.8.4 1.2.4.7 0 1.5-.4 1.9-1l1-1.5c.3-.3.3-.6 0-.8zm-1.6 1.7c-.4.6-1.3.8-1.9.4 0 0-3.4-1.8-5.1-3.5C7.8 10.8 6.7 9 6.5 8.7c-.4-1.1-.3-1.7.2-2.1l1-.9 1.9 2.2c.2.2.1.5 0 .6L9 9c-.1.1-.2.3-.1.5 1 3.1 2.8 3.7 4.2 4.2l.2.1c.2.1.4 0 .5-.2l.3-.5.3-.2.3.1 2.4 1.6-.7 1zM13 7.4c-.2-.1-.5.1-.6.3-.1.2.1.5.3.6a2 2 0 0 1 1.5 1.4c.1.2.2.3.4.3h.1c.2-.1.4-.3.3-.6-.2-.9-1-1.7-2-2zm3.5 2.8h.1c.2-.1.4-.3.3-.6a6 6 0 0 0-4-4c-.2-.1-.5.1-.6.3s.1.5.3.6c1.6.5 2.9 1.7 3.3 3.3.2.2.4.4.6.4zm-3.7-6.7c-.2-.1-.5.1-.6.3-.1.2.1.5.3.6 2.7.8 4.9 2.9 5.7 5.7.1.2.2.3.4.3h.1c.2-.1.4-.3.3-.6a8.8 8.8 0 0 0-6.2-6.3z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](39, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](40, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Viber"])), (_l()(), core["_3" /* ɵeld */](42, 0, null, null, 6, "a", [["class", "share__item share__item--google"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](43, 0, null, null, 2, "div", [["class", "share__item__icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](44, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 24 24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](45, 0, null, null, 0, ":svg:path", [["d", "M7 11v2.4h4c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1l2-1.8C10.4 5.8 8.7 5 7 5c-4 0-7 3-7 7s3 7 7 7 6.7-2.8 6.7-6.8V11H7zm0 0l17 2h-3v3h-2v-3h-3v-2h3V8h2v3h3v2z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](46, 0, null, null, 2, "div", [["class", "share__item__text"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](47, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Googel+"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fbUrl; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.twitterUrl; _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.vkUrl; _ck(_v, 14, 0, currVal_2); var currVal_3 = _co.telegramUrl; _ck(_v, 21, 0, currVal_3); var currVal_4 = _co.whatsappUrl; _ck(_v, 28, 0, currVal_4); var currVal_5 = _co.viberUrl; _ck(_v, 35, 0, currVal_5); var currVal_6 = _co.googleUrl; _ck(_v, 42, 0, currVal_6); }); }
function View_ShareComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "share"]], null, null, null, View_ShareComponent_0, RenderType_ShareComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, ShareComponent, [], null, null)], null, null); }
var ShareComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".share", ShareComponent, View_ShareComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/article/article.component.ngfactory.js
/** PURE_IMPORTS_START _article.component.css.ngstyle,_angular_core,_angular_common,_share_share.component.ngfactory,_share_share.component,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_article.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _article.component.css.ngstyle,_angular_core,_angular_common,_share_share.component.ngfactory,_share_share.component,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_article.component PURE_IMPORTS_END */








var styles_ArticleComponent = [article_component_css_ngstyle_styles];
var RenderType_ArticleComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_ArticleComponent, data: {} });

function View_ArticleComponent_2(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "h2", [["class", "bj-article__header__h2"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.bigTitle; _ck(_v, 1, 0, currVal_0); }); }
function View_ArticleComponent_1(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 13, "div", [["class", "bj-article__header"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 2, "picture", [["class", "bj-article__header__picture"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_18" /* ɵppd */](3, 1), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 5, "time", [["class", "bj-article__header__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_18" /* ɵppd */](5, 1), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-clock-o"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](8, null, ["", ""])), core["_18" /* ɵppd */](9, 2), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_2)), core["_2" /* ɵdid */](11, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 1, "h1", [["class", "bj-article__header__h1"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](13, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = !!_co.value.bigTitle; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 2, 0, _ck(_v, 3, 0, core["_15" /* ɵnov */](_v.parent, 0), _co.value.image)); _ck(_v, 2, 0, currVal_0); var currVal_1 = core["_23" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_15" /* ɵnov */](_v.parent, 1), _co.value.ts)); _ck(_v, 4, 0, currVal_1); var currVal_2 = core["_23" /* ɵunv */](_v, 8, 0, _ck(_v, 9, 0, core["_15" /* ɵnov */](_v.parent, 1), _co.value.ts, "HR")); _ck(_v, 8, 0, currVal_2); var currVal_4 = _co.value.title; _ck(_v, 13, 0, currVal_4); }); }
function View_ArticleComponent_3(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 3, "div", [["class", "bj-article__share share"]], null, null, null, View_ShareComponent_0, RenderType_ShareComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, ShareComponent, [], { value: [0, "value"] }, null), core["_18" /* ɵppd */](2, 2), core["_16" /* ɵpad */](3, 2)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, core["_23" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 1), _co.value.ts, "URL")), _co.value.url); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ArticleComponent_4(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "div", [["class", "bj-article__content article"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.content; _ck(_v, 0, 0, currVal_0); }); }
function View_ArticleComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_1)), core["_2" /* ɵdid */](3, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_3)), core["_2" /* ɵdid */](5, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_4)), core["_2" /* ɵdid */](7, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.value; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.value; _ck(_v, 7, 0, currVal_2); }, null); }
function View_ArticleComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-article"]], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, ArticleComponent, [], null, null)], null, null); }
var ArticleComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-article", ArticleComponent, View_ArticleComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pages/article/page-article.component.ngfactory.js
/** PURE_IMPORTS_START _page_article.component.css.ngstyle,_angular_core,_.._pub_line_pub_line.component.ngfactory,_angular_router,_angular_common,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_.._article_article.component.ngfactory,_.._article_article.component,_page_article.component,_angular_platform_browser,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_article.component.css.ngstyle,_angular_core,_.._pub_line_pub_line.component.ngfactory,_angular_router,_angular_common,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_.._article_article.component.ngfactory,_.._article_article.component,_page_article.component,_angular_platform_browser,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_.._.._services_loader_loader.service PURE_IMPORTS_END */














var styles_PageArticleComponent = [page_article_component_css_ngstyle_styles];
var RenderType_PageArticleComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageArticleComponent, data: {} });

function View_PageArticleComponent_1(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-line"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_2" /* ɵdid */](1, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵppd */](2, 2), core["_16" /* ɵpad */](3, 3), core["_2" /* ɵdid */](4, 49152, null, 0, PubLineComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/", core["_23" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "URL")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).target; var currVal_1 = core["_15" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageArticleComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 10, "main", [["class", "bj-page-article__wrapper"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 9, "div", [["class", "bj-page-article__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 2, "article", [["class", "bj-page-article__col bj-article"]], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](4, 49152, null, 0, ArticleComponent, [], { value: [0, "value"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 5, "aside", [["class", "bj-page-article__aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 1, "h1", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0442\u0430\u043A\u0436\u0435"])), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageArticleComponent_1)), core["_2" /* ɵdid */](10, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 4, 0, core["_15" /* ɵnov */](_v, 5).transform(_co.item)); _ck(_v, 4, 0, currVal_0); var currVal_1 = core["_23" /* ɵunv */](_v, 10, 0, core["_15" /* ɵnov */](_v, 11).transform(_co.publications)); _ck(_v, 10, 0, currVal_1); }, null); }
function View_PageArticleComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-article", [["class", "page"]], [[2, "page--loading", null]], null, null, View_PageArticleComponent_0, RenderType_PageArticleComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, page_article_component_PageArticleComponent, [core["A" /* PLATFORM_ID */], platform_browser["k" /* TransferState */], router["a" /* ActivatedRoute */], api_service_APIService, meta_service_MetaService, loader_service_LoaderService], null, null)], null, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).showLoader; _ck(_v, 0, 0, currVal_0); }); }
var PageArticleComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-article.page", page_article_component_PageArticleComponent, View_PageArticleComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/no-content/no-content.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var no_content_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/no-content/no-content.component.ngfactory.js
/** PURE_IMPORTS_START _no_content.component.css.ngstyle,_angular_core,_no_content.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _no_content.component.css.ngstyle,_angular_core,_no_content.component PURE_IMPORTS_END */



var styles_NoContentComponent = [no_content_component_css_ngstyle_styles];
var RenderType_NoContentComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_NoContentComponent, data: {} });

function View_NoContentComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 3, "h1", [["class", "no-content"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["404"])), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Page not fount"]))], null, null); }
function View_NoContentComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "no-content", [], null, null, null, View_NoContentComponent_0, RenderType_NoContentComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, NoContentComponent, [], null, null)], null, null); }
var NoContentComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("no-content", NoContentComponent, View_NoContentComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/auth/auth-dialog.component.css.shim.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var auth_dialog_component_css_shim_ngstyle_styles = [".auth-form-title[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center}.auth-form[_ngcontent-%COMP%]{min-width:300px}.auth-form-row[_ngcontent-%COMP%]{margin-top:10px;display:block;width:100%}.auth-form-row[_ngcontent-%COMP%]:first-child{margin-top:0}.auth-form-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}"];


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/form-field.es5.js
var form_field_es5 = __webpack_require__(49);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/dialog.es5.js
var dialog_es5 = __webpack_require__(84);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/form-field/typings/index.ngfactory.js
var form_field_typings_index_ngfactory = __webpack_require__(271);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/core.es5.js
var core_es5 = __webpack_require__(5);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/input.es5.js
var input_es5 = __webpack_require__(95);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/platform.es5.js
var platform_es5 = __webpack_require__(19);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/button/typings/index.ngfactory.js
var button_typings_index_ngfactory = __webpack_require__(272);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/button.es5.js
var button_es5 = __webpack_require__(64);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/a11y.es5.js
var a11y_es5 = __webpack_require__(14);

// CONCATENATED MODULE: ./components/auth/auth-dialog.component.ngfactory.js
/** PURE_IMPORTS_START _auth_dialog.component.css.shim.ngstyle,_angular_core,_angular_material_form_field,_angular_material_dialog,_angular_forms,_.._.._.._node_modules__angular_material_form_field_typings_index.ngfactory,_angular_material_core,_angular_material_input,_angular_cdk_platform,_angular_common,_.._.._.._node_modules__angular_material_button_typings_index.ngfactory,_angular_material_button,_angular_cdk_a11y,_auth_dialog.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _auth_dialog.component.css.shim.ngstyle,_angular_core,_angular_material_form_field,_angular_material_dialog,_angular_forms,_.._.._.._node_modules__angular_material_form_field_typings_index.ngfactory,_angular_material_core,_angular_material_input,_angular_cdk_platform,_angular_common,_.._.._.._node_modules__angular_material_button_typings_index.ngfactory,_angular_material_button,_angular_cdk_a11y,_auth_dialog.component PURE_IMPORTS_END */














var styles_AuthDialogComponent = [auth_dialog_component_css_shim_ngstyle_styles];
var RenderType_AuthDialogComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 0, styles: styles_AuthDialogComponent, data: {} });

function View_AuthDialogComponent_1(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_2" /* ɵdid */](1, 16384, [[4, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_22" /* ɵted */](-1, null, ["Email is "])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["required"]))], null, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_2(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_2" /* ɵdid */](1, 16384, [[4, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_22" /* ɵted */](-1, null, ["Please enter a valid email address"]))], null, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_3(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_2" /* ɵdid */](1, 16384, [[11, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_22" /* ɵted */](-1, null, ["Password is "])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["required"]))], null, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_0(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "h1", [["class", "auth-form-title mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), core["_2" /* ɵdid */](1, 81920, null, 0, dialog_es5["j" /* MatDialogTitle */], [[2, dialog_es5["f" /* MatDialogContainer */]]], null, null), (_l()(), core["_22" /* ɵted */](-1, null, ["Authorization"])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 46, "form", [["class", "auth-form mat-dialog-content"], ["mat-dialog-content", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 5).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["_15" /* ɵnov */](_v, 5).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngSubmit" === en)) {
                var pd_2 = (_co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](4, 16384, null, 0, esm5_forms["r" /* ɵbf */], [], null, null), core["_2" /* ɵdid */](5, 540672, null, 0, esm5_forms["g" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_19" /* ɵprd */](2048, null, esm5_forms["c" /* ControlContainer */], null, [esm5_forms["g" /* FormGroupDirective */]]), core["_2" /* ɵdid */](7, 16384, null, 0, esm5_forms["m" /* NgControlStatusGroup */], [esm5_forms["c" /* ControlContainer */]], null, null), core["_2" /* ɵdid */](8, 16384, null, 0, dialog_es5["g" /* MatDialogContent */], [], null, null), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 20, "mat-form-field", [["class", "auth-form-row mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["_2" /* ɵdid */](10, 7389184, null, 7, form_field_es5["b" /* MatFormField */], [core["k" /* ElementRef */], core["h" /* ChangeDetectorRef */], [2, core_es5["e" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), core["_20" /* ɵqud */](335544320, 1, { _control: 0 }), core["_20" /* ɵqud */](335544320, 2, { _placeholderChild: 0 }), core["_20" /* ɵqud */](335544320, 3, { _labelChild: 0 }), core["_20" /* ɵqud */](603979776, 4, { _errorChildren: 1 }), core["_20" /* ɵqud */](603979776, 5, { _hintChildren: 1 }), core["_20" /* ɵqud */](603979776, 6, { _prefixChildren: 1 }), core["_20" /* ɵqud */](603979776, 7, { _suffixChildren: 1 }), (_l()(), core["_3" /* ɵeld */](18, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "email"], ["matInput", ""], ["placeholder", "E-mail"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 19)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["_15" /* ɵnov */](_v, 19).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["_15" /* ɵnov */](_v, 19)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["_15" /* ɵnov */](_v, 19)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("blur" === en)) {
                var pd_4 = (core["_15" /* ɵnov */](_v, 24)._focusChanged(false) !== false);
                ad = (pd_4 && ad);
            }
            if (("focus" === en)) {
                var pd_5 = (core["_15" /* ɵnov */](_v, 24)._focusChanged(true) !== false);
                ad = (pd_5 && ad);
            }
            if (("input" === en)) {
                var pd_6 = (core["_15" /* ɵnov */](_v, 24)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](19, 16384, null, 0, esm5_forms["d" /* DefaultValueAccessor */], [core["C" /* Renderer2 */], core["k" /* ElementRef */], [2, esm5_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["_19" /* ɵprd */](1024, null, esm5_forms["j" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm5_forms["d" /* DefaultValueAccessor */]]), core["_2" /* ɵdid */](21, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["c" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["j" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_19" /* ɵprd */](2048, null, esm5_forms["k" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_2" /* ɵdid */](23, 16384, null, 0, esm5_forms["l" /* NgControlStatus */], [esm5_forms["k" /* NgControl */]], null, null), core["_2" /* ɵdid */](24, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [2, esm5_forms["k" /* NgControl */]], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["c" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["_19" /* ɵprd */](2048, [[1, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["Y" /* ɵand */](16777216, null, 5, 1, null, View_AuthDialogComponent_1)), core["_2" /* ɵdid */](27, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Y" /* ɵand */](16777216, null, 5, 1, null, View_AuthDialogComponent_2)), core["_2" /* ɵdid */](29, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](30, 0, null, null, 18, "mat-form-field", [["class", "auth-form-row mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["_2" /* ɵdid */](31, 7389184, null, 7, form_field_es5["b" /* MatFormField */], [core["k" /* ElementRef */], core["h" /* ChangeDetectorRef */], [2, core_es5["e" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), core["_20" /* ɵqud */](335544320, 8, { _control: 0 }), core["_20" /* ɵqud */](335544320, 9, { _placeholderChild: 0 }), core["_20" /* ɵqud */](335544320, 10, { _labelChild: 0 }), core["_20" /* ɵqud */](603979776, 11, { _errorChildren: 1 }), core["_20" /* ɵqud */](603979776, 12, { _hintChildren: 1 }), core["_20" /* ɵqud */](603979776, 13, { _prefixChildren: 1 }), core["_20" /* ɵqud */](603979776, 14, { _suffixChildren: 1 }), (_l()(), core["_3" /* ɵeld */](39, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "password"], ["matInput", ""], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 40)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["_15" /* ɵnov */](_v, 40).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["_15" /* ɵnov */](_v, 40)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["_15" /* ɵnov */](_v, 40)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("blur" === en)) {
                var pd_4 = (core["_15" /* ɵnov */](_v, 45)._focusChanged(false) !== false);
                ad = (pd_4 && ad);
            }
            if (("focus" === en)) {
                var pd_5 = (core["_15" /* ɵnov */](_v, 45)._focusChanged(true) !== false);
                ad = (pd_5 && ad);
            }
            if (("input" === en)) {
                var pd_6 = (core["_15" /* ɵnov */](_v, 45)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](40, 16384, null, 0, esm5_forms["d" /* DefaultValueAccessor */], [core["C" /* Renderer2 */], core["k" /* ElementRef */], [2, esm5_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["_19" /* ɵprd */](1024, null, esm5_forms["j" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm5_forms["d" /* DefaultValueAccessor */]]), core["_2" /* ɵdid */](42, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["c" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["j" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_19" /* ɵprd */](2048, null, esm5_forms["k" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_2" /* ɵdid */](44, 16384, null, 0, esm5_forms["l" /* NgControlStatus */], [esm5_forms["k" /* NgControl */]], null, null), core["_2" /* ɵdid */](45, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [2, esm5_forms["k" /* NgControl */]], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["c" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["_19" /* ɵprd */](2048, [[8, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["Y" /* ɵand */](16777216, null, 5, 1, null, View_AuthDialogComponent_3)), core["_2" /* ɵdid */](48, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](49, 0, null, null, 0, "input", [["hidden", ""], ["type", "submit"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](50, 0, null, null, 5, "mat-dialog-actions", [["class", "mat-dialog-actions"]], null, null, null, null, null)), core["_2" /* ɵdid */](51, 16384, null, 0, dialog_es5["e" /* MatDialogActions */], [], null, null), (_l()(), core["_3" /* ɵeld */](52, 0, null, null, 3, "button", [["class", "auth-form-button mat-button"], ["color", "primary"], ["mat-button", ""], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onSubmit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["b" /* View_MatButton_0 */], button_typings_index_ngfactory["a" /* RenderType_MatButton */])), core["_2" /* ɵdid */](53, 180224, null, 0, button_es5["b" /* MatButton */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], a11y_es5["g" /* FocusMonitor */]], { disabled: [0, "disabled"], color: [1, "color"] }, null), core["_2" /* ɵdid */](54, 16384, null, 0, button_es5["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), core["_22" /* ɵted */](-1, 0, ["Submit"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_8 = _co.authForm; _ck(_v, 5, 0, currVal_8); var currVal_42 = "email"; _ck(_v, 21, 0, currVal_42); var currVal_43 = "E-mail"; var currVal_44 = "text"; _ck(_v, 24, 0, currVal_43, currVal_44); var currVal_45 = _co.authForm.controls.email.hasError("required"); _ck(_v, 27, 0, currVal_45); var currVal_46 = _co.authForm.controls.email.hasError("email"); _ck(_v, 29, 0, currVal_46); var currVal_80 = "password"; _ck(_v, 42, 0, currVal_80); var currVal_81 = "Password"; var currVal_82 = "password"; _ck(_v, 45, 0, currVal_81, currVal_82); var currVal_83 = _co.authForm.controls.password.hasError("required"); _ck(_v, 48, 0, currVal_83); var currVal_85 = _co.authForm.invalid; var currVal_86 = "primary"; _ck(_v, 53, 0, currVal_85, currVal_86); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_15" /* ɵnov */](_v, 7).ngClassUntouched; var currVal_2 = core["_15" /* ɵnov */](_v, 7).ngClassTouched; var currVal_3 = core["_15" /* ɵnov */](_v, 7).ngClassPristine; var currVal_4 = core["_15" /* ɵnov */](_v, 7).ngClassDirty; var currVal_5 = core["_15" /* ɵnov */](_v, 7).ngClassValid; var currVal_6 = core["_15" /* ɵnov */](_v, 7).ngClassInvalid; var currVal_7 = core["_15" /* ɵnov */](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = core["_15" /* ɵnov */](_v, 10)._control.errorState; var currVal_10 = core["_15" /* ɵnov */](_v, 10)._control.errorState; var currVal_11 = core["_15" /* ɵnov */](_v, 10)._canLabelFloat; var currVal_12 = core["_15" /* ɵnov */](_v, 10)._shouldLabelFloat(); var currVal_13 = core["_15" /* ɵnov */](_v, 10)._hideControlPlaceholder(); var currVal_14 = core["_15" /* ɵnov */](_v, 10)._control.disabled; var currVal_15 = core["_15" /* ɵnov */](_v, 10)._control.focused; var currVal_16 = (core["_15" /* ɵnov */](_v, 10).color == "primary"); var currVal_17 = (core["_15" /* ɵnov */](_v, 10).color == "accent"); var currVal_18 = (core["_15" /* ɵnov */](_v, 10).color == "warn"); var currVal_19 = core["_15" /* ɵnov */](_v, 10)._shouldForward("untouched"); var currVal_20 = core["_15" /* ɵnov */](_v, 10)._shouldForward("touched"); var currVal_21 = core["_15" /* ɵnov */](_v, 10)._shouldForward("pristine"); var currVal_22 = core["_15" /* ɵnov */](_v, 10)._shouldForward("dirty"); var currVal_23 = core["_15" /* ɵnov */](_v, 10)._shouldForward("valid"); var currVal_24 = core["_15" /* ɵnov */](_v, 10)._shouldForward("invalid"); var currVal_25 = core["_15" /* ɵnov */](_v, 10)._shouldForward("pending"); _ck(_v, 9, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25]); var currVal_26 = core["_15" /* ɵnov */](_v, 23).ngClassUntouched; var currVal_27 = core["_15" /* ɵnov */](_v, 23).ngClassTouched; var currVal_28 = core["_15" /* ɵnov */](_v, 23).ngClassPristine; var currVal_29 = core["_15" /* ɵnov */](_v, 23).ngClassDirty; var currVal_30 = core["_15" /* ɵnov */](_v, 23).ngClassValid; var currVal_31 = core["_15" /* ɵnov */](_v, 23).ngClassInvalid; var currVal_32 = core["_15" /* ɵnov */](_v, 23).ngClassPending; var currVal_33 = core["_15" /* ɵnov */](_v, 24)._isServer; var currVal_34 = core["_15" /* ɵnov */](_v, 24).id; var currVal_35 = core["_15" /* ɵnov */](_v, 24).placeholder; var currVal_36 = core["_15" /* ɵnov */](_v, 24).disabled; var currVal_37 = core["_15" /* ɵnov */](_v, 24).required; var currVal_38 = core["_15" /* ɵnov */](_v, 24).readonly; var currVal_39 = (core["_15" /* ɵnov */](_v, 24)._ariaDescribedby || null); var currVal_40 = core["_15" /* ɵnov */](_v, 24).errorState; var currVal_41 = core["_15" /* ɵnov */](_v, 24).required.toString(); _ck(_v, 18, 1, [currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]); var currVal_47 = core["_15" /* ɵnov */](_v, 31)._control.errorState; var currVal_48 = core["_15" /* ɵnov */](_v, 31)._control.errorState; var currVal_49 = core["_15" /* ɵnov */](_v, 31)._canLabelFloat; var currVal_50 = core["_15" /* ɵnov */](_v, 31)._shouldLabelFloat(); var currVal_51 = core["_15" /* ɵnov */](_v, 31)._hideControlPlaceholder(); var currVal_52 = core["_15" /* ɵnov */](_v, 31)._control.disabled; var currVal_53 = core["_15" /* ɵnov */](_v, 31)._control.focused; var currVal_54 = (core["_15" /* ɵnov */](_v, 31).color == "primary"); var currVal_55 = (core["_15" /* ɵnov */](_v, 31).color == "accent"); var currVal_56 = (core["_15" /* ɵnov */](_v, 31).color == "warn"); var currVal_57 = core["_15" /* ɵnov */](_v, 31)._shouldForward("untouched"); var currVal_58 = core["_15" /* ɵnov */](_v, 31)._shouldForward("touched"); var currVal_59 = core["_15" /* ɵnov */](_v, 31)._shouldForward("pristine"); var currVal_60 = core["_15" /* ɵnov */](_v, 31)._shouldForward("dirty"); var currVal_61 = core["_15" /* ɵnov */](_v, 31)._shouldForward("valid"); var currVal_62 = core["_15" /* ɵnov */](_v, 31)._shouldForward("invalid"); var currVal_63 = core["_15" /* ɵnov */](_v, 31)._shouldForward("pending"); _ck(_v, 30, 1, [currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63]); var currVal_64 = core["_15" /* ɵnov */](_v, 44).ngClassUntouched; var currVal_65 = core["_15" /* ɵnov */](_v, 44).ngClassTouched; var currVal_66 = core["_15" /* ɵnov */](_v, 44).ngClassPristine; var currVal_67 = core["_15" /* ɵnov */](_v, 44).ngClassDirty; var currVal_68 = core["_15" /* ɵnov */](_v, 44).ngClassValid; var currVal_69 = core["_15" /* ɵnov */](_v, 44).ngClassInvalid; var currVal_70 = core["_15" /* ɵnov */](_v, 44).ngClassPending; var currVal_71 = core["_15" /* ɵnov */](_v, 45)._isServer; var currVal_72 = core["_15" /* ɵnov */](_v, 45).id; var currVal_73 = core["_15" /* ɵnov */](_v, 45).placeholder; var currVal_74 = core["_15" /* ɵnov */](_v, 45).disabled; var currVal_75 = core["_15" /* ɵnov */](_v, 45).required; var currVal_76 = core["_15" /* ɵnov */](_v, 45).readonly; var currVal_77 = (core["_15" /* ɵnov */](_v, 45)._ariaDescribedby || null); var currVal_78 = core["_15" /* ɵnov */](_v, 45).errorState; var currVal_79 = core["_15" /* ɵnov */](_v, 45).required.toString(); _ck(_v, 39, 1, [currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79]); var currVal_84 = (core["_15" /* ɵnov */](_v, 53).disabled || null); _ck(_v, 52, 0, currVal_84); });
}
function View_AuthDialogComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "auth-dialog", [], null, null, null, View_AuthDialogComponent_0, RenderType_AuthDialogComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, auth_dialog_component_AuthDialogComponent, [dialog_es5["i" /* MatDialogRef */], esm5_forms["e" /* FormBuilder */], dialog_es5["a" /* MAT_DIALOG_DATA */]], null, null)], null, null); }
var AuthDialogComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("auth-dialog", auth_dialog_component_AuthDialogComponent, View_AuthDialogComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/layout/layout.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var layout_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/header/header.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var header_component_css_ngstyle_styles = [".bj-header{position:fixed;left:0;top:0;width:100%;height:100px;z-index:900;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.bj-header__row-wrapper{display:block;width:100%;height:50%;background:#fff}.bj-header__row-wrapper--dark{background:var(--color-main);color:#fff}.bj-header__row{margin:0 auto;height:100%;max-width:var(--max-width);display:flex}@media (min-width:1000px){.bj-header__row{padding:0 0 0 var(--indent-base)}}@media (min-width:1200px){.bj-header__row{padding:0 var(--indent-base) 0 var(--indent-double)}}.bj-header__button{height:100%;padding:0 var(--indent-base);text-transform:uppercase;text-decoration:none;font-family:inherit;font-size:100%;font-style:normal;border:0;border-radius:0;background-color:transparent;box-shadow:none;color:inherit;white-space:nowrap;display:flex;align-items:center;cursor:pointer;transition:background-color .3s}.bj-header__button:hover{background-color:var(--color-hover-light)}.bj-header__button--icon{font-size:1.5rem}.bj-header__button--login{display:none}@media (min-width:1000px){.bj-header__button--menu{display:none}.bj-header__button--login{display:flex}}.bj-header__logo{height:56px;width:56px;margin:-3px auto 0;padding:0;background:var(--color-main);border:3px solid #fff;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:999;cursor:pointer}.bj-header__logo img{height:50%;width:auto;margin-left:-5%}@media (min-width:1000px){.bj-header__logo{height:94px;width:94px;margin:4px var(--indent-half) 0 0}}.bj-header__nav{display:block;position:fixed;top:50px;bottom:0;height:auto;left:0%;width:70vw;max-width:300px;margin-right:auto;background:var(--color-main);color:#fff;z-index:950;transform:translate(-105%);transition:transform .3s}.bj-header__nav--show{transform:translate(0%)}.bj-header__nav .bj-header__button{height:50px;border-top:1px solid #555;border-bottom:1px solid #111}@media (min-width:1000px){.bj-header__nav{position:static;display:flex;transform:none}.bj-header__nav--show{transform:none}.bj-header__nav .bj-header__button{border-top:0 none;border-bottom:0 none}}"];


// CONCATENATED MODULE: ./components/currencies-ribbon/currencies-ribbon.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var currencies_ribbon_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/currencies-ribbon/currencies-ribbon.component.ngfactory.js
/** PURE_IMPORTS_START _currencies_ribbon.component.css.ngstyle,_angular_core,_currencies_ribbon.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _currencies_ribbon.component.css.ngstyle,_angular_core,_currencies_ribbon.component,_angular_router PURE_IMPORTS_END */




var styles_CurrenciesRsibbonComponent = [currencies_ribbon_component_css_ngstyle_styles];
var RenderType_CurrenciesRsibbonComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_CurrenciesRsibbonComponent, data: {} });

function View_CurrenciesRsibbonComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 5, "a", [["class", "bj-currencies-ribbon__item"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "img", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "h5", [["class", "bj-currencies-ribbon__item"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 2, "div", [["class", "bj-currencies-ribbon__rate"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 0, "span", [], null, null, null, null, null))], null, null); }
function View_CurrenciesRsibbonComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "currencies-ribbon", [], null, null, null, View_CurrenciesRsibbonComponent_0, RenderType_CurrenciesRsibbonComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, CurrenciesRsibbonComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CurrenciesRsibbonComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("currencies-ribbon", CurrenciesRsibbonComponent, View_CurrenciesRsibbonComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/header/header.component.ngfactory.js
/** PURE_IMPORTS_START _header.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_currencies_ribbon_currencies_ribbon.component.ngfactory,_currencies_ribbon_currencies_ribbon.component,_header.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _header.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_currencies_ribbon_currencies_ribbon.component.ngfactory,_currencies_ribbon_currencies_ribbon.component,_header.component PURE_IMPORTS_END */







var styles_HeaderComponent = [header_component_css_ngstyle_styles];
var RenderType_HeaderComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_0(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 13, "div", [["class", "bj-header__row-wrapper bj-header__row-wrapper--dark"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 12, "div", [["class", "bj-header__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 1, "button", [["class", "bj-header__button bj-header__button--icon bj-header__button--menu"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = ((_co.navBarVisibility = !_co.navBarVisibility) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 2, "a", [["class", "bj-header__logo"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](5, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 0, "img", [["alt", "BitJournal"], ["src", "/svg/logo.svg"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 4, "nav", [["class", "bj-header__nav"]], [[2, "bj-header__nav--show", null]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](9, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 1, "button", [["class", "bj-header__button bj-header__button--icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](13, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](14, 0, null, null, 3, "div", [["class", "bj-header__row-wrapper"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](15, 0, null, null, 2, "div", [["class", "bj-header__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](16, 0, null, null, 1, "currencies-ribbon", [], null, null, null, View_CurrenciesRsibbonComponent_0, RenderType_CurrenciesRsibbonComponent)), core["_2" /* ɵdid */](17, 114688, null, 0, CurrenciesRsibbonComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 5, 0, currVal_2); var currVal_6 = "/"; _ck(_v, 9, 0, currVal_6); _ck(_v, 17, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_15" /* ɵnov */](_v, 5).target; var currVal_1 = core["_15" /* ɵnov */](_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = _co.navBarVisibility; _ck(_v, 7, 0, currVal_3); var currVal_4 = core["_15" /* ɵnov */](_v, 9).target; var currVal_5 = core["_15" /* ɵnov */](_v, 9).href; _ck(_v, 8, 0, currVal_4, currVal_5); });
}
function View_HeaderComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-header"]], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-header", HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/loader/loader.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var loader_component_css_ngstyle_styles = ["@keyframes loader-cubeGridScaleDelay{0%,70%,to{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}.loader{width:100px;height:100px;position:fixed;left:50%;top:140px;transform:translate(-50%,0);display:none;flex-wrap:wrap;justify-content:space-between;align-content:space-between}.loader--show{display:flex}.loader__cube{flex:0 0 30%;height:30%;background-color:var(--color-main);animation:loader-cubeGridScaleDelay 1.3s infinite ease-in-out}.loader__cube--1{animation-delay:.2s}.loader__cube--2{animation-delay:.3s}.loader__cube--3{animation-delay:.4s}.loader__cube--4{animation-delay:.1s}.loader__cube--5{animation-delay:.2s}.loader__cube--6{animation-delay:.3s}.loader__cube--7{animation-delay:0s}.loader__cube--8{animation-delay:.1s}.loader__cube--9{animation-delay:.2s}"];


// CONCATENATED MODULE: ./components/loader/loader.component.ngfactory.js
/** PURE_IMPORTS_START _loader.component.css.ngstyle,_angular_core,_loader.component,_.._services_loader_loader.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _loader.component.css.ngstyle,_angular_core,_loader.component,_.._services_loader_loader.service PURE_IMPORTS_END */




var styles_LoaderComponent = [loader_component_css_ngstyle_styles];
var RenderType_LoaderComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_LoaderComponent, data: {} });

function View_LoaderComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--1"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--2"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--3"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--4"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--5"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--6"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--7"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--8"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 0, "div", [["class", "loader__cube loader__cube--9"]], null, null, null, null, null))], null, null); }
function View_LoaderComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "loader"]], [[2, "loader--show", null]], null, null, View_LoaderComponent_0, RenderType_LoaderComponent)), core["_2" /* ɵdid */](1, 245760, null, 0, LoaderComponent, [loader_service_LoaderService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).show; _ck(_v, 0, 0, currVal_0); }); }
var LoaderComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".loader", LoaderComponent, View_LoaderComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/footer/footer.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var footer_component_css_ngstyle_styles = [".bj-footer,.bj-footer__logo{display:block;overflow:hidden;background:var(--color-main)}.bj-footer{padding:0 0 var(--indent-double);color:#fff;position:relative;width:100%}.bj-footer__logo{position:absolute;left:-100px;top:-100px;height:200px;width:200px;border:3px solid #fff;border-radius:50%;z-index:800;cursor:pointer}.bj-footer__logo img{display:block;position:absolute;top:119px;left:107px;height:38px;width:auto}.bj-footer__nav{margin:0 auto;max-width:var(--max-width);padding:var(--indent-base) var(--indent-base) var(--indent-base) calc(100px + var(--indent-base));min-height:100px;display:block}@media (min-width:1200px){.bj-footer__nav{padding:var(--indent-base) var(--indent-double) var(--indent-base) calc(100px + var(--indent-double))}}.bj-footer__nav__row{width:100%;display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:flex-start}.bj-footer__nav__item{margin:0 0 1em 1em;border-bottom:1px solid #fff;padding-bottom:.1em;text-transform:none;text-decoration:none;font-family:inherit;font-size:100%;font-style:normal;color:inherit;white-space:nowrap}.bj-footer__nav__item:first-child{margin-left:0}.bj-footer__nav__item--donate{color:#ef6c00;border-bottom-color:#ef6c00}.bj-footer__row{margin-top:0 auto;max-width:var(--max-width);padding:0 var(--indent-half);display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:center}@media (min-width:1000px){.bj-footer__row{flex-wrap:nowrap}}@media (min-width:1200px){.bj-footer__row{padding:0 0 0 calc(var(--indent-double) + var(--indent-half))}}.bj-footer__col{order:2;width:200px;flex:0 0 200px;margin:var(--indent-half);display:flex;flex-direction:column;justify-content:center}.bj-footer__col:last-child{width:auto;flex:1 1 auto;text-align:center;margin-top:calc(var(--indent-base) + var(--indent-half))}@media (min-width:1000px){.bj-footer__col:last-child{order:1;margin-top:var(--indent-half);margin-right:auto;text-align:left}}.bj-footer__col>p{padding:0 var(--indent-base) 0 0;margin:0 0 var(--indent-half);line-height:1.4;font-size:14px}.bj-footer__col__widget{width:100%;overflow:hidden;border-radius:3px;display:flex;justify-content:flex-start}.bj-footer__bottom a,.bj-footer__col__widget+.bj-footer__col__widget{margin-top:var(--indent-base)}.bj-footer__bottom{margin:0 auto;max-width:var(--max-width);padding:0 var(--indent-base);display:flex;flex-wrap:wrap;justify-content:center}@media (min-width:1200px){.bj-footer__bottom{padding:0 var(--indent-double)}}.bj-footer__bottom a{text-transform:none;text-decoration:none;font-family:inherit;font-size:12px;font-weight:300;font-style:normal;color:inherit;white-space:nowrap;border-bottom:1px solid #fff;padding-bottom:.1em}.bj-footer__bottom span{margin:var(--indent-base) 1em 0}.bj-footer__bottom__copyright{font-size:12px;font-weight:300;white-space:nowrap;margin:var(--indent-base) 0 0;flex:0 0 100%;text-align:center}@media (min-width:600px){.bj-footer__bottom__copyright{flex-basis:auto;margin-left:auto}}.bj-footer__telegram{height:28px;padding:0 .7em;text-decoration:none;text-transform:none;font-size:13px;font-weight:500;line-height:1;display:flex;align-items:center;justify-content:flex-start;color:inherit;background:#08c;border-radius:3px}.bj-footer__telegram svg{width:18px;height:18px;margin-right:.7em}.bj-footer__telegram path{fill:currentColor}"];


// CONCATENATED MODULE: ./components/footer/footer.component.ngfactory.js
/** PURE_IMPORTS_START _footer.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_footer.component,_.._services_social_social.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _footer.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_footer.component,_.._services_social_social.service PURE_IMPORTS_END */






var styles_FooterComponent = [footer_component_css_ngstyle_styles];
var RenderType_FooterComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 5, "nav", [["class", "bj-footer__nav"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 4, "div", [["class", "bj-footer__nav__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](3, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 28, "div", [["class", "bj-footer__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 2, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 1, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 0, "div", [["id", "vk_group_vidget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](10, 0, null, null, 5, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](11, 0, null, null, 4, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 3, "div", [["class", "fb-page"], ["data-adapt-container-width", "false"], ["data-height", "160"], ["data-hide-cover", "true"], ["data-href", "https://www.facebook.com/bitjournalOfficial/"], ["data-show-facepile", "false"], ["data-small-header", "false"], ["data-width", "200"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](13, 0, null, null, 2, "blockquote", [["cite", "https://www.facebook.com/bitjournalOfficial/"], ["class", "fb-xfbml-parse-ignore"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](14, 0, null, null, 1, "a", [["href", "https://www.facebook.com/bitjournalOfficial/"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["BitJournal"])), (_l()(), core["_3" /* ɵeld */](16, 0, null, null, 11, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](17, 0, null, null, 5, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](18, 0, null, null, 4, "a", [["class", "bj-footer__telegram"], ["href", "https://t.me/bitjournal_io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](19, 0, null, null, 1, ":svg:svg", [["height", "24"], ["viewBox", "0 0 24 24"], ["width", "24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](20, 0, null, null, 0, ":svg:path", [["d", "M.4 11.6l5.6 2 2 7c.2.3.8.5 1 .2l3.2-2.5c.3-.3.8-.3 1 0l5.7 4c.3.3.8 0 1-.4l4-19.7c0-.5-.4-1-1-.7L.5 10.4c-.5.2-.5 1 0 1.2zm7.3 1l10.8-6.8c.3 0 .5.2.3.4l-9 8.3-.5 1L9 18c0 .3-.5.3-.5 0l-1.2-4c-.2-.5 0-1 .4-1.3z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](21, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["BitJournal \u0432 \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C"])), (_l()(), core["_3" /* ɵeld */](23, 0, null, null, 1, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](24, 0, null, null, 0, "div", [["class", "g-ytsubscribe"], ["data-channelid", "UCeOLUeYNcYDos1wcTJVLGlw"], ["data-count", "default"], ["data-layout", "default"], ["data-theme", "dark"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](25, 0, null, null, 2, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](26, 0, null, null, 1, "a", [["class", "twitter-follow-button"], ["data-show-count", "false"], ["data-size", "large"], ["href", "https://twitter.com/bitjournal_io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Follow @bitjournal_io"])), (_l()(), core["_3" /* ɵeld */](28, 0, null, null, 6, "div", [["class", "bj-footer__col"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](29, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0412\u0441\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439."])), (_l()(), core["_3" /* ɵeld */](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["BitJournal \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u043E\u0432."])), (_l()(), core["_3" /* ɵeld */](33, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430."])), (_l()(), core["_3" /* ɵeld */](35, 0, null, null, 13, "div", [["class", "bj-footer__bottom"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](36, 0, null, null, 1, "a", [["href", "/rss"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["RSS"])), (_l()(), core["_3" /* ɵeld */](38, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["|"])), (_l()(), core["_3" /* ɵeld */](40, 0, null, null, 1, "a", [["href", "/api"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["API"])), (_l()(), core["_3" /* ɵeld */](42, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["|"])), (_l()(), core["_3" /* ɵeld */](44, 0, null, null, 2, "a", [["routerLink", "/privacy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 45).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](45, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](47, 0, null, null, 1, "div", [["class", "bj-footer__bottom__copyright"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Copyright \u00A9 2017 BitJournal"])), (_l()(), core["_3" /* ɵeld */](49, 0, null, null, 2, "a", [["class", "bj-footer__logo"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 50).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](50, 671744, null, 0, router["m" /* RouterLinkWithHref */], [router["l" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](51, 0, null, null, 0, "img", [["alt", "BitJournal"], ["src", "/svg/logo.svg"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 3, 0, currVal_2); var currVal_5 = "/privacy"; _ck(_v, 45, 0, currVal_5); var currVal_8 = "/"; _ck(_v, 50, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 3).target; var currVal_1 = core["_15" /* ɵnov */](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = core["_15" /* ɵnov */](_v, 45).target; var currVal_4 = core["_15" /* ɵnov */](_v, 45).href; _ck(_v, 44, 0, currVal_3, currVal_4); var currVal_6 = core["_15" /* ɵnov */](_v, 50).target; var currVal_7 = core["_15" /* ɵnov */](_v, 50).href; _ck(_v, 49, 0, currVal_6, currVal_7); });
}
function View_FooterComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-footer"]], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), core["_2" /* ɵdid */](1, 4243456, null, 0, footer_component_FooterComponent, [social_service_SocialService], null, null)], null, null); }
var FooterComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-footer", footer_component_FooterComponent, View_FooterComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/layout/layout.component.ngfactory.js
/** PURE_IMPORTS_START _layout.component.css.ngstyle,_angular_core,_header_header.component.ngfactory,_header_header.component,_angular_router,_loader_loader.component.ngfactory,_loader_loader.component,_.._services_loader_loader.service,_footer_footer.component.ngfactory,_footer_footer.component,_.._services_social_social.service,_layout.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _layout.component.css.ngstyle,_angular_core,_header_header.component.ngfactory,_header_header.component,_angular_router,_loader_loader.component.ngfactory,_loader_loader.component,_.._services_loader_loader.service,_footer_footer.component.ngfactory,_footer_footer.component,_.._services_social_social.service,_layout.component PURE_IMPORTS_END */












var styles_LayoutComponent = [layout_component_css_ngstyle_styles];
var RenderType_LayoutComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_LayoutComponent, data: {} });

function View_LayoutComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "header", [["class", "bj-header"]], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["l" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 1, "div", [["class", "loader"]], [[2, "loader--show", null]], null, null, View_LoaderComponent_0, RenderType_LoaderComponent)), core["_2" /* ɵdid */](3, 245760, null, 0, LoaderComponent, [loader_service_LoaderService], null, null), (_l()(), core["_3" /* ɵeld */](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core["_2" /* ɵdid */](5, 212992, null, 0, router["o" /* RouterOutlet */], [router["b" /* ChildrenOutletContexts */], core["N" /* ViewContainerRef */], core["j" /* ComponentFactoryResolver */], [8, null], core["h" /* ChangeDetectorRef */]], null, null), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 1, "footer", [["class", "bj-footer"]], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), core["_2" /* ɵdid */](7, 4243456, null, 0, footer_component_FooterComponent, [social_service_SocialService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 3).show; _ck(_v, 2, 0, currVal_0); }); }
function View_LayoutComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "layout"]], null, null, null, View_LayoutComponent_0, RenderType_LayoutComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, layout_component_LayoutComponent, [core["A" /* PLATFORM_ID */], router["l" /* Router */]], null, null)], null, null); }
var LayoutComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".layout", layout_component_LayoutComponent, View_LayoutComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/browser.js
var browser = __webpack_require__(182);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/animations.js
var animations = __webpack_require__(273);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/animations.js
var esm5_animations = __webpack_require__(27);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/bidi.es5.js
var bidi_es5 = __webpack_require__(20);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/scrolling.es5.js
var scrolling_es5 = __webpack_require__(63);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/overlay.es5.js
var overlay_es5 = __webpack_require__(35);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/sort.es5.js
var sort_es5 = __webpack_require__(180);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/layout.es5.js
var layout_es5 = __webpack_require__(123);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/snack-bar.es5.js
var snack_bar_es5 = __webpack_require__(122);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/portal.es5.js
var portal_es5 = __webpack_require__(36);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/table.es5.js
var table_es5 = __webpack_require__(124);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/table.es5.js
var esm5_table_es5 = __webpack_require__(181);

// CONCATENATED MODULE: ./app.module.ngfactory.js
/** PURE_IMPORTS_START _angular_core,_app.module,_components_layout_layout.component,_.._node_modules__angular_material_dialog_typings_index.ngfactory,_.._node_modules__angular_material_snack_bar_typings_index.ngfactory,_components_pages_main_page_main.component.ngfactory,_components_pages_101_page_101.component.ngfactory,_components_pages_currencies_page_currencies.component.ngfactory,_components_pages_currencies_page_currencies_item.component.ngfactory,_components_pages_events_page_events.component.ngfactory,_components_pages_events_page_events_item.component.ngfactory,_components_pages_exchanges_page_exchanges.component.ngfactory,_components_pages_exchanges_page_exchanges_item.component.ngfactory,_components_pages_ico_page_ico.component.ngfactory,_components_pages_ico_page_ico_item.component.ngfactory,_components_pages_markets_page_markets.component.ngfactory,_components_pages_markets_page_markets_item.component.ngfactory,_components_pages_section_page_section.component.ngfactory,_components_pages_article_page_article.component.ngfactory,_components_no_content_no_content.component.ngfactory,_components_auth_auth_dialog.component.ngfactory,_components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,_services_message_message.service,_services_user_user.service,_services_api_api.service,_services_meta_meta.service,_services_social_social.service,_services_youtube_youtube.service,_services_loader_loader.service,_services_metrika_metrika.service,_services_notification_notification.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,_components_pages_main_page_main.component,_components_pages_101_page_101.component,_components_pages_currencies_page_currencies.component,_components_pages_currencies_page_currencies_item.component,_components_pages_events_page_events.component,_components_pages_events_page_events_item.component,_components_pages_exchanges_page_exchanges.component,_components_pages_exchanges_page_exchanges_item.component,_components_pages_ico_page_ico.component,_components_pages_ico_page_ico_item.component,_components_pages_markets_page_markets.component,_components_pages_markets_page_markets_item.component,_components_pages_section_page_section.component,_components_pages_article_page_article.component,_components_no_content_no_content.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_app.module,_components_layout_layout.component,_.._node_modules__angular_material_dialog_typings_index.ngfactory,_.._node_modules__angular_material_snack_bar_typings_index.ngfactory,_components_pages_main_page_main.component.ngfactory,_components_pages_101_page_101.component.ngfactory,_components_pages_currencies_page_currencies.component.ngfactory,_components_pages_currencies_page_currencies_item.component.ngfactory,_components_pages_events_page_events.component.ngfactory,_components_pages_events_page_events_item.component.ngfactory,_components_pages_exchanges_page_exchanges.component.ngfactory,_components_pages_exchanges_page_exchanges_item.component.ngfactory,_components_pages_ico_page_ico.component.ngfactory,_components_pages_ico_page_ico_item.component.ngfactory,_components_pages_markets_page_markets.component.ngfactory,_components_pages_markets_page_markets_item.component.ngfactory,_components_pages_section_page_section.component.ngfactory,_components_pages_article_page_article.component.ngfactory,_components_no_content_no_content.component.ngfactory,_components_auth_auth_dialog.component.ngfactory,_components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,_services_message_message.service,_services_user_user.service,_services_api_api.service,_services_meta_meta.service,_services_social_social.service,_services_youtube_youtube.service,_services_loader_loader.service,_services_metrika_metrika.service,_services_notification_notification.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,_components_pages_main_page_main.component,_components_pages_101_page_101.component,_components_pages_currencies_page_currencies.component,_components_pages_currencies_page_currencies_item.component,_components_pages_events_page_events.component,_components_pages_events_page_events_item.component,_components_pages_exchanges_page_exchanges.component,_components_pages_exchanges_page_exchanges_item.component,_components_pages_ico_page_ico.component,_components_pages_ico_page_ico_item.component,_components_pages_markets_page_markets.component,_components_pages_markets_page_markets_item.component,_components_pages_section_page_section.component,_components_pages_article_page_article.component,_components_no_content_no_content.component PURE_IMPORTS_END */






































































var AppModuleNgFactory = /*@__PURE__*/ core["_0" /* ɵcmf */](AppModule, [layout_component_LayoutComponent], function (_l) { return core["_12" /* ɵmod */]([core["_13" /* ɵmpd */](512, core["j" /* ComponentFactoryResolver */], core["W" /* ɵCodegenComponentFactoryResolver */], [[8, [index_ngfactory["a" /* MatDialogContainerNgFactory */], typings_index_ngfactory["a" /* MatSnackBarContainerNgFactory */], typings_index_ngfactory["b" /* SimpleSnackBarNgFactory */], PageMainComponentNgFactory, Page101ComponentNgFactory, PageCurrenciesComponentNgFactory, PageCurrenciesItemComponentNgFactory, PageEventsComponentNgFactory, PageEventsItemComponentNgFactory, PageExchangesComponentNgFactory, PageExchangesItemComponentNgFactory, PageICOComponentNgFactory, PageICOItemComponentNgFactory, PageMarketsComponentNgFactory, PageMarketsItemComponentNgFactory, PageSectionComponentNgFactory, PageArticleComponentNgFactory, NoContentComponentNgFactory, AuthDialogComponentNgFactory, LayoutComponentNgFactory]], [3, core["j" /* ComponentFactoryResolver */]], core["w" /* NgModuleRef */]]), core["_13" /* ɵmpd */](5120, core["t" /* LOCALE_ID */], core["_11" /* ɵm */], [[3, core["t" /* LOCALE_ID */]]]), core["_13" /* ɵmpd */](4608, common["l" /* NgLocalization */], common["k" /* NgLocaleLocalization */], [core["t" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_13" /* ɵmpd */](5120, core["r" /* IterableDiffers */], core["_8" /* ɵk */], []), core["_13" /* ɵmpd */](5120, core["s" /* KeyValueDiffers */], core["_9" /* ɵl */], []), core["_13" /* ɵmpd */](4608, platform_browser["d" /* DomSanitizer */], platform_browser["x" /* ɵe */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](6144, core["F" /* Sanitizer */], null, [platform_browser["d" /* DomSanitizer */]]), core["_13" /* ɵmpd */](4608, platform_browser["g" /* HAMMER_GESTURE_CONFIG */], platform_browser["h" /* HammerGestureConfig */], []), core["_13" /* ɵmpd */](5120, platform_browser["e" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["o" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["s" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["r" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["d" /* DOCUMENT */], core["y" /* NgZone */], common["d" /* DOCUMENT */], common["d" /* DOCUMENT */], platform_browser["g" /* HAMMER_GESTURE_CONFIG */]]), core["_13" /* ɵmpd */](4608, platform_browser["f" /* EventManager */], platform_browser["f" /* EventManager */], [platform_browser["e" /* EVENT_MANAGER_PLUGINS */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](135680, platform_browser["q" /* ɵDomSharedStylesHost */], platform_browser["q" /* ɵDomSharedStylesHost */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["p" /* ɵDomRendererFactory2 */], platform_browser["p" /* ɵDomRendererFactory2 */], [platform_browser["f" /* EventManager */], platform_browser["q" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](5120, browser["a" /* AnimationDriver */], animations["d" /* ɵc */], []), core["_13" /* ɵmpd */](5120, browser["c" /* ɵAnimationStyleNormalizer */], animations["e" /* ɵd */], []), core["_13" /* ɵmpd */](4608, browser["b" /* ɵAnimationEngine */], animations["c" /* ɵb */], [browser["a" /* AnimationDriver */], browser["c" /* ɵAnimationStyleNormalizer */]]), core["_13" /* ɵmpd */](5120, core["D" /* RendererFactory2 */], animations["f" /* ɵe */], [platform_browser["p" /* ɵDomRendererFactory2 */], browser["b" /* ɵAnimationEngine */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](6144, platform_browser["t" /* ɵSharedStylesHost */], null, [platform_browser["q" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](4608, core["L" /* Testability */], core["L" /* Testability */], [core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, platform_browser["i" /* Meta */], platform_browser["i" /* Meta */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["j" /* Title */], platform_browser["j" /* Title */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, platform_browser["k" /* TransferState */], platform_browser["w" /* ɵc */], [common["d" /* DOCUMENT */], core["c" /* APP_ID */]]), core["_13" /* ɵmpd */](4608, esm5_animations["b" /* AnimationBuilder */], animations["b" /* ɵBrowserAnimationBuilder */], [core["D" /* RendererFactory2 */], platform_browser["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_forms["s" /* ɵi */], esm5_forms["s" /* ɵi */], []), core["_13" /* ɵmpd */](4608, esm5_forms["e" /* FormBuilder */], esm5_forms["e" /* FormBuilder */], []), core["_13" /* ɵmpd */](4608, http["k" /* HttpXsrfTokenExtractor */], http["p" /* ɵg */], [common["d" /* DOCUMENT */], core["A" /* PLATFORM_ID */], http["n" /* ɵe */]]), core["_13" /* ɵmpd */](4608, http["q" /* ɵh */], http["q" /* ɵh */], [http["k" /* HttpXsrfTokenExtractor */], http["o" /* ɵf */]]), core["_13" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["q" /* ɵh */]]), core["_13" /* ɵmpd */](4608, http["m" /* ɵd */], http["m" /* ɵd */], []), core["_13" /* ɵmpd */](6144, http["l" /* XhrFactory */], null, [http["m" /* ɵd */]]), core["_13" /* ɵmpd */](4608, http["j" /* HttpXhrBackend */], http["j" /* HttpXhrBackend */], [http["l" /* XhrFactory */]]), core["_13" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["j" /* HttpXhrBackend */]]), core["_13" /* ɵmpd */](5120, http["g" /* HttpHandler */], http["r" /* ɵinterceptingHandler */], [http["b" /* HttpBackend */], [2, http["a" /* HTTP_INTERCEPTORS */]]]), core["_13" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["g" /* HttpHandler */]]), core["_13" /* ɵmpd */](6144, bidi_es5["b" /* DIR_DOCUMENT */], null, [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, bidi_es5["c" /* Directionality */], bidi_es5["c" /* Directionality */], [[2, bidi_es5["b" /* DIR_DOCUMENT */]]]), core["_13" /* ɵmpd */](4608, platform_es5["a" /* Platform */], platform_es5["a" /* Platform */], []), core["_13" /* ɵmpd */](5120, scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, scrolling_es5["c" /* ScrollDispatcher */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, scrolling_es5["f" /* ViewportRuler */], scrolling_es5["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, scrolling_es5["f" /* ViewportRuler */]], platform_es5["a" /* Platform */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["f" /* ScrollStrategyOptions */], [scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["f" /* ViewportRuler */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](5120, overlay_es5["c" /* OverlayContainer */], overlay_es5["g" /* ɵa */], [[3, overlay_es5["c" /* OverlayContainer */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["k" /* ɵh */], overlay_es5["k" /* ɵh */], [scrolling_es5["f" /* ViewportRuler */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["d" /* OverlayKeyboardDispatcher */], overlay_es5["j" /* ɵf */], [[3, overlay_es5["d" /* OverlayKeyboardDispatcher */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["a" /* Overlay */], overlay_es5["a" /* Overlay */], [overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["c" /* OverlayContainer */], core["j" /* ComponentFactoryResolver */], overlay_es5["k" /* ɵh */], overlay_es5["d" /* OverlayKeyboardDispatcher */], core["g" /* ApplicationRef */], core["q" /* Injector */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["h" /* ɵc */], overlay_es5["i" /* ɵd */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, a11y_es5["i" /* InteractivityChecker */], a11y_es5["i" /* InteractivityChecker */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](4608, a11y_es5["h" /* FocusTrapFactory */], a11y_es5["h" /* FocusTrapFactory */], [a11y_es5["i" /* InteractivityChecker */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](136192, a11y_es5["d" /* AriaDescriber */], a11y_es5["b" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, a11y_es5["d" /* AriaDescriber */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["l" /* LiveAnnouncer */], a11y_es5["k" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, a11y_es5["l" /* LiveAnnouncer */]], [2, a11y_es5["j" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["g" /* FocusMonitor */], a11y_es5["e" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, a11y_es5["g" /* FocusMonitor */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], dialog_es5["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, dialog_es5["d" /* MatDialog */], dialog_es5["d" /* MatDialog */], [overlay_es5["a" /* Overlay */], core["q" /* Injector */], [2, common["g" /* Location */]], dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, dialog_es5["d" /* MatDialog */]]]), core["_13" /* ɵmpd */](5120, sort_es5["b" /* MatSortHeaderIntl */], sort_es5["a" /* MAT_SORT_HEADER_INTL_PROVIDER_FACTORY */], [[3, sort_es5["b" /* MatSortHeaderIntl */]]]), core["_13" /* ɵmpd */](4608, layout_es5["d" /* MediaMatcher */], layout_es5["d" /* MediaMatcher */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](135680, layout_es5["a" /* BreakpointObserver */], layout_es5["a" /* BreakpointObserver */], [layout_es5["d" /* MediaMatcher */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, snack_bar_es5["b" /* MatSnackBar */], snack_bar_es5["b" /* MatSnackBar */], [overlay_es5["a" /* Overlay */], a11y_es5["l" /* LiveAnnouncer */], core["q" /* Injector */], layout_es5["a" /* BreakpointObserver */], [3, snack_bar_es5["b" /* MatSnackBar */]]]), core["_13" /* ɵmpd */](4608, core_es5["c" /* ErrorStateMatcher */], core_es5["c" /* ErrorStateMatcher */], []), core["_13" /* ɵmpd */](5120, router["a" /* ActivatedRoute */], router["x" /* ɵf */], [router["l" /* Router */]]), core["_13" /* ɵmpd */](4608, router["f" /* PreloadAllModules */], router["f" /* PreloadAllModules */], []), core["_13" /* ɵmpd */](6144, router["g" /* PreloadingStrategy */], null, [router["f" /* PreloadAllModules */]]), core["_13" /* ɵmpd */](135680, router["p" /* RouterPreloader */], router["p" /* RouterPreloader */], [router["l" /* Router */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], core["q" /* Injector */], router["g" /* PreloadingStrategy */]]), core["_13" /* ɵmpd */](4608, router["e" /* NoPreloading */], router["e" /* NoPreloading */], []), core["_13" /* ɵmpd */](5120, router["i" /* ROUTER_INITIALIZER */], router["A" /* ɵi */], [router["y" /* ɵg */]]), core["_13" /* ɵmpd */](5120, core["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [router["i" /* ROUTER_INITIALIZER */]]), core["_13" /* ɵmpd */](4608, message_service_MessageService, message_service_MessageService, [core["A" /* PLATFORM_ID */], snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, user_service_UserService, user_service_UserService, [core["A" /* PLATFORM_ID */], http["c" /* HttpClient */], dialog_es5["d" /* MatDialog */], message_service_MessageService, snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, api_service_APIService, api_service_APIService, [http["c" /* HttpClient */], router["l" /* Router */], user_service_UserService, message_service_MessageService]), core["_13" /* ɵmpd */](4608, meta_service_MetaService, meta_service_MetaService, [platform_browser["i" /* Meta */], platform_browser["j" /* Title */]]), core["_13" /* ɵmpd */](4608, social_service_SocialService, social_service_SocialService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](4608, youtube_service_YouTubeService, youtube_service_YouTubeService, [http["c" /* HttpClient */], message_service_MessageService]), core["_13" /* ɵmpd */](4608, loader_service_LoaderService, loader_service_LoaderService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](4608, metrika_service_MetrikaService, metrika_service_MetrikaService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](512, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["_13" /* ɵmpd */](1024, core["m" /* ErrorHandler */], platform_browser["v" /* ɵa */], []), core["_13" /* ɵmpd */](1024, core["x" /* NgProbeToken */], function () { return [router["t" /* ɵb */]()]; }, []), core["_13" /* ɵmpd */](256, core["c" /* APP_ID */], "app_bj", []), core["_13" /* ɵmpd */](2048, platform_browser["u" /* ɵTRANSITION_ID */], null, [core["c" /* APP_ID */]]), core["_13" /* ɵmpd */](512, router["y" /* ɵg */], router["y" /* ɵg */], [core["q" /* Injector */]]), core["_13" /* ɵmpd */](512, notification_service_NotificationService, notification_service_NotificationService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](1024, core["d" /* APP_INITIALIZER */], function (p0_0, p1_0, p1_1, p1_2, p2_0, p3_0) { return [platform_browser["A" /* ɵh */](p0_0), platform_browser["y" /* ɵf */](p1_0, p1_1, p1_2), router["z" /* ɵh */](p2_0), app_module__0(p3_0)]; }, [[2, core["x" /* NgProbeToken */]], platform_browser["u" /* ɵTRANSITION_ID */], common["d" /* DOCUMENT */], core["q" /* Injector */], router["y" /* ɵg */], notification_service_NotificationService]), core["_13" /* ɵmpd */](512, core["e" /* ApplicationInitStatus */], core["e" /* ApplicationInitStatus */], [[2, core["d" /* APP_INITIALIZER */]]]), core["_13" /* ɵmpd */](131584, core["g" /* ApplicationRef */], core["g" /* ApplicationRef */], [core["y" /* NgZone */], core["X" /* ɵConsole */], core["q" /* Injector */], core["m" /* ErrorHandler */], core["j" /* ComponentFactoryResolver */], core["e" /* ApplicationInitStatus */]]), core["_13" /* ɵmpd */](512, core["f" /* ApplicationModule */], core["f" /* ApplicationModule */], [core["g" /* ApplicationRef */]]), core["_13" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_13" /* ɵmpd */](512, platform_browser["b" /* BrowserTransferStateModule */], platform_browser["b" /* BrowserTransferStateModule */], []), core["_13" /* ɵmpd */](512, animations["a" /* BrowserAnimationsModule */], animations["a" /* BrowserAnimationsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["q" /* ɵba */], esm5_forms["q" /* ɵba */], []), core["_13" /* ɵmpd */](512, esm5_forms["h" /* FormsModule */], esm5_forms["h" /* FormsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["o" /* ReactiveFormsModule */], esm5_forms["o" /* ReactiveFormsModule */], []), core["_13" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_13" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_13" /* ɵmpd */](512, bidi_es5["a" /* BidiModule */], bidi_es5["a" /* BidiModule */], []), core["_13" /* ɵmpd */](512, portal_es5["g" /* PortalModule */], portal_es5["g" /* PortalModule */], []), core["_13" /* ɵmpd */](512, platform_es5["b" /* PlatformModule */], platform_es5["b" /* PlatformModule */], []), core["_13" /* ɵmpd */](512, scrolling_es5["b" /* ScrollDispatchModule */], scrolling_es5["b" /* ScrollDispatchModule */], []), core["_13" /* ɵmpd */](512, overlay_es5["e" /* OverlayModule */], overlay_es5["e" /* OverlayModule */], []), core["_13" /* ɵmpd */](512, a11y_es5["a" /* A11yModule */], a11y_es5["a" /* A11yModule */], []), core["_13" /* ɵmpd */](256, core_es5["d" /* MATERIAL_SANITY_CHECKS */], true, []), core["_13" /* ɵmpd */](512, core_es5["g" /* MatCommonModule */], core_es5["g" /* MatCommonModule */], [[2, core_es5["d" /* MATERIAL_SANITY_CHECKS */]]]), core["_13" /* ɵmpd */](512, dialog_es5["h" /* MatDialogModule */], dialog_es5["h" /* MatDialogModule */], []), core["_13" /* ɵmpd */](512, sort_es5["c" /* MatSortModule */], sort_es5["c" /* MatSortModule */], []), core["_13" /* ɵmpd */](512, table_es5["k" /* CdkTableModule */], table_es5["k" /* CdkTableModule */], []), core["_13" /* ɵmpd */](512, esm5_table_es5["a" /* MatTableModule */], esm5_table_es5["a" /* MatTableModule */], []), core["_13" /* ɵmpd */](512, layout_es5["c" /* LayoutModule */], layout_es5["c" /* LayoutModule */], []), core["_13" /* ɵmpd */](512, snack_bar_es5["d" /* MatSnackBarModule */], snack_bar_es5["d" /* MatSnackBarModule */], []), core["_13" /* ɵmpd */](512, form_field_es5["d" /* MatFormFieldModule */], form_field_es5["d" /* MatFormFieldModule */], []), core["_13" /* ɵmpd */](512, input_es5["b" /* MatInputModule */], input_es5["b" /* MatInputModule */], []), core["_13" /* ɵmpd */](512, core_es5["k" /* MatRippleModule */], core_es5["k" /* MatRippleModule */], []), core["_13" /* ɵmpd */](512, button_es5["d" /* MatButtonModule */], button_es5["d" /* MatButtonModule */], []), core["_13" /* ɵmpd */](1024, router["s" /* ɵa */], router["v" /* ɵd */], [[3, router["l" /* Router */]]]), core["_13" /* ɵmpd */](512, router["r" /* UrlSerializer */], router["c" /* DefaultUrlSerializer */], []), core["_13" /* ɵmpd */](512, router["b" /* ChildrenOutletContexts */], router["b" /* ChildrenOutletContexts */], []), core["_13" /* ɵmpd */](256, router["h" /* ROUTER_CONFIGURATION */], { useHash: false, preloadingStrategy: router["f" /* PreloadAllModules */] }, []), core["_13" /* ɵmpd */](1024, common["h" /* LocationStrategy */], router["u" /* ɵc */], [common["p" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], router["h" /* ROUTER_CONFIGURATION */]]), core["_13" /* ɵmpd */](512, common["g" /* Location */], common["g" /* Location */], [common["h" /* LocationStrategy */]]), core["_13" /* ɵmpd */](512, core["i" /* Compiler */], core["i" /* Compiler */], []), core["_13" /* ɵmpd */](512, core["v" /* NgModuleFactoryLoader */], core["I" /* SystemJsNgModuleLoader */], [core["i" /* Compiler */], [2, core["J" /* SystemJsNgModuleLoaderConfig */]]]), core["_13" /* ɵmpd */](1024, router["j" /* ROUTES */], function () { return [[{ path: "", component: page_main_component_PageMainComponent }, { path: "101", component: Page101Component }, { path: "currencies/:id", component: PageCurrenciesComponent }, { path: "currencies", component: PageCurrenciesItemComponent }, { path: "events/:id", component: PageEventsComponent }, { path: "events", component: PageEventsItemComponent }, { path: "exchanges/:id", component: PageExchangesComponent }, { path: "exchanges", component: PageExchangesItemComponent }, { path: "ico/:id", component: PageICOComponent }, { path: "ico", component: PageICOItemComponent }, { path: "markets/:id", component: PageMarketsComponent }, { path: "markets", component: PageMarketsItemComponent }, { path: ":section", component: PageSectionComponent }, { path: ":date/:url", component: page_article_component_PageArticleComponent }, { path: "**", component: NoContentComponent }]]; }, []), core["_13" /* ɵmpd */](1024, router["l" /* Router */], router["w" /* ɵe */], [core["g" /* ApplicationRef */], router["r" /* UrlSerializer */], router["b" /* ChildrenOutletContexts */], common["g" /* Location */], core["q" /* Injector */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], router["j" /* ROUTES */], router["h" /* ROUTER_CONFIGURATION */], [2, router["q" /* UrlHandlingStrategy */]], [2, router["k" /* RouteReuseStrategy */]]]), core["_13" /* ɵmpd */](512, router["n" /* RouterModule */], router["n" /* RouterModule */], [[2, router["s" /* ɵa */]], [2, router["l" /* Router */]]]), core["_13" /* ɵmpd */](512, AppModule, AppModule, [notification_service_NotificationService]), core["_13" /* ɵmpd */](256, http["n" /* ɵe */], "XSRF-TOKEN", []), core["_13" /* ɵmpd */](256, http["o" /* ɵf */], "X-XSRF-TOKEN", [])]); });


// CONCATENATED MODULE: ./main.front.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return main_front__0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });




console.log(`${"bitjournal"} v${"0.2.0"}`);
let decorateModuleRef = (value) => value;
const main_front__0 = decorateModuleRef;
if (true) {
    decorateModuleRef = (modRef) => {
        const appRef = modRef.injector.get(core["g" /* ApplicationRef */]);
        const cmpRef = appRef.components[0];
        let ng = window.ng;
        Object(platform_browser["l" /* enableDebugTools */])(cmpRef);
        window.ng.probe = ng.probe;
        window.ng.coreTokens = ng.coreTokens;
        return modRef;
    };
}
else {
    enableProdMode();
    decorateModuleRef = (modRef) => {
        disableDebugTools();
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
const ɵ1 = domReadyHandler;
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

},[217]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXJ0aWNsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvcmFuZG9tQnl0ZXMtYnJvd3Nlci50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvYnl0ZXNUb1V1aWQudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3YxLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC9wYXR0ZXJucy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvdXVpZC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS90aW1lc3RhbXAvdGltZXN0YW1wLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdGltZXN0YW1wL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9lbnVtLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9ibG9jay5lbnVtLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2Fkcy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2NvaW4vcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2hpc3RvcmljYWwudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2NvaW4udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcmF0aW5nL3JhdGluZy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3JhdGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2N1cnJlbmN5LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY3VycmVuY3kvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9leGNoYW5nZS9leGNoYW5nZS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V4Y2hhbmdlL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvaWNvL2ljby50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL21hcmtldC9tYXJrZXQudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci91cmwtYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3VybC1idWlsZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vcHVibGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9wdWJsaWNhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vc2VjdGlvbi50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zdGF0dXMvc3RhdHVzLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc3RhdHVzL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci9yb2xlLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vdmlkZW8udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy92aWRlby9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V2ZW50L2V2ZW50LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXZlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL2VudmVyb21lbnRzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvbG9hZGVyL2xvYWRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2xvYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy90aW1lc3RhbXAvdGltZXN0YW1wLnRzIiwid2VicGFjazovLy8uL3BpcGVzL3RpbWVzdGFtcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy9pbWFnZS9lbnZlcm9tZW50cy50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlLnRzIiwid2VicGFjazovLy8uL3BpcGVzL2ltYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3BpcGVzL29yZGVyL29yZGVyLnRzIiwid2VicGFjazovLy8uL3BpcGVzL29yZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3BpcGVzL2ZpbHRlci9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcGlwZXMvZmlsdGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3BpcGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL21ldGEvbWV0YS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL21ldGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL25vdGlmaWNhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zb2NpYWwvdmstaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zb2NpYWwvdHdpdHRlci1pbml0LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NvY2lhbC9nb29nbGUtaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zb2NpYWwvZmItaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zb2NpYWwvZW52ZXJvbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc29jaWFsL3NvY2lhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NvY2lhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy95b3V0dWJlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL21ldHJpa2EvbWV0cmlrYS1pbml0LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL21ldHJpa2EvbWV0cmlrYS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL21ldHJpa2EvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9sbG93L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm8tY29udGVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy8xMDEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9wYWdlLW1haW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Yi1jYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHViLWxpbmUvcHViLWxpbmUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHViLWxpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZS9zaGFyZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9wYWdlLW1haW4uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28taXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28taXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2FydGljbGUvcGFnZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZS9zaGFyZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZS9zaGFyZS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLmZyb250LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTs7O0FDUFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOzs7QUM3Q0EsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEc7QUFDQTs7O0FDTEE7QUFDeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeEZBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2RkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxHQUFHLCtCQUErQixzQkFBc0I7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckRBOzs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbEJlO0FBQ0s7QUFDQTtBQUNwQixrQ0FBa0MsY0FBYztBQUNoRCx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsSEE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbkRvQjtBQUNKO0FBQ2hCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUNvQjtBQUNKO0FBQ0s7QUFDckI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPLHdCQUF3QixzQkFBc0I7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZIQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hEQTs7O0FDQWlCO0FBQ0c7QUFDcEI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoR0E7OztBQ0FlO0FBQ0s7QUFDSDtBQUNqQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNGQTs7O0FDQWU7QUFDSztBQUNIO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakdBOzs7QUNBZTtBQUNLO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzRkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pCQTs7O0FDQWU7QUFDTTtBQUNEO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakpBOzs7QUNBZTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyRUE7OztBQ0FlO0FBQ2Y7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcERBOzs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDZmU7QUFDSTtBQUNGO0FBQ2pCLHVDQUFrQyxjQUFjO0FBQ2hEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25IQTtBQUNBOzs7QUNEQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUNBOzs7QUNBZTtBQUNLO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0EsMkhBQWtHLHkyREFBcTBDLGtNQUEwSCxFQUFFLHNzRkFBbTNDLGVBQWUsRUFBRSxnNUxBQXd1RyxlQUFlLEVBQUUsK2lEQUEwM0IsaUNBQW1CLEVBQUUsc2hCQUFvVCxrSkFBNEUsRUFBRSx5aElBQSt0RSwwRUFBNEQsa3FCQUEyWSxXQUFXLDZEQUE2QyxHQUFHLDJDQUErQyxHQUFHLDZEQUFpRSxHQUFHLDZEQUFpRSxHQUFHLHFEQUF5RCxHQUFHLHFEQUF5RCxHQUFHLDJEQUErRCxHQUFHLDJEQUErRCxHQUFHLCtDQUFtRCxHQUFHLCtDQUFtRCxHQUFHLHVEQUEyRCxHQUFHLHVEQUEyRCxHQUFHLG9EQUF3RCxHQUFHLDZFQUEwRCxHQUFHLDRDQUFnRCxHQUFHLEVBQUUsbTFCQUEyZixFQUFFO0FBQ2w5Vzs7Ozs7QUN6RVI7QUFDeUM7QUFDc0I7QUFDbEM7QUFDN0IsZUFBZSxhQUFxQixJQUFJLFFBQXdCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1EiLCJmaWxlIjoianMvbWFpbi5jMmRhOGRkM2M4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE2MztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenlcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjbGFzcyBBcnRpY2xlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FydGljbGUuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hcnRpY2xlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgcmFuZG9tQnl0ZXMgPSAoc2l6ZSkgPT4ge1xuICAgIGxldCBybmQgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmQpO1xuICAgIHJldHVybiBybmQ7XG59O1xuY29uc3QgybUwID0gcmFuZG9tQnl0ZXM7XG5leHBvcnQgZGVmYXVsdCByYW5kb21CeXRlcztcbmV4cG9ydCB7IMm1MCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvcmFuZG9tQnl0ZXMtYnJvd3Nlci50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IEJUSCA9IFtcIjAwXCIsIFwiMDFcIiwgXCIwMlwiLCBcIjAzXCIsIFwiMDRcIiwgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiLCBcIjA5XCIsIFwiMGFcIiwgXCIwYlwiLCBcIjBjXCIsIFwiMGRcIiwgXCIwZVwiLCBcIjBmXCIsXG4gICAgXCIxMFwiLCBcIjExXCIsIFwiMTJcIiwgXCIxM1wiLCBcIjE0XCIsIFwiMTVcIiwgXCIxNlwiLCBcIjE3XCIsIFwiMThcIiwgXCIxOVwiLCBcIjFhXCIsIFwiMWJcIiwgXCIxY1wiLCBcIjFkXCIsIFwiMWVcIiwgXCIxZlwiLFxuICAgIFwiMjBcIiwgXCIyMVwiLCBcIjIyXCIsIFwiMjNcIiwgXCIyNFwiLCBcIjI1XCIsIFwiMjZcIiwgXCIyN1wiLCBcIjI4XCIsIFwiMjlcIiwgXCIyYVwiLCBcIjJiXCIsIFwiMmNcIiwgXCIyZFwiLCBcIjJlXCIsIFwiMmZcIixcbiAgICBcIjMwXCIsIFwiMzFcIiwgXCIzMlwiLCBcIjMzXCIsIFwiMzRcIiwgXCIzNVwiLCBcIjM2XCIsIFwiMzdcIiwgXCIzOFwiLCBcIjM5XCIsIFwiM2FcIiwgXCIzYlwiLCBcIjNjXCIsIFwiM2RcIiwgXCIzZVwiLCBcIjNmXCIsXG4gICAgXCI0MFwiLCBcIjQxXCIsIFwiNDJcIiwgXCI0M1wiLCBcIjQ0XCIsIFwiNDVcIiwgXCI0NlwiLCBcIjQ3XCIsIFwiNDhcIiwgXCI0OVwiLCBcIjRhXCIsIFwiNGJcIiwgXCI0Y1wiLCBcIjRkXCIsIFwiNGVcIiwgXCI0ZlwiLFxuICAgIFwiNTBcIiwgXCI1MVwiLCBcIjUyXCIsIFwiNTNcIiwgXCI1NFwiLCBcIjU1XCIsIFwiNTZcIiwgXCI1N1wiLCBcIjU4XCIsIFwiNTlcIiwgXCI1YVwiLCBcIjViXCIsIFwiNWNcIiwgXCI1ZFwiLCBcIjVlXCIsIFwiNWZcIixcbiAgICBcIjYwXCIsIFwiNjFcIiwgXCI2MlwiLCBcIjYzXCIsIFwiNjRcIiwgXCI2NVwiLCBcIjY2XCIsIFwiNjdcIiwgXCI2OFwiLCBcIjY5XCIsIFwiNmFcIiwgXCI2YlwiLCBcIjZjXCIsIFwiNmRcIiwgXCI2ZVwiLCBcIjZmXCIsXG4gICAgXCI3MFwiLCBcIjcxXCIsIFwiNzJcIiwgXCI3M1wiLCBcIjc0XCIsIFwiNzVcIiwgXCI3NlwiLCBcIjc3XCIsIFwiNzhcIiwgXCI3OVwiLCBcIjdhXCIsIFwiN2JcIiwgXCI3Y1wiLCBcIjdkXCIsIFwiN2VcIiwgXCI3ZlwiLFxuICAgIFwiODBcIiwgXCI4MVwiLCBcIjgyXCIsIFwiODNcIiwgXCI4NFwiLCBcIjg1XCIsIFwiODZcIiwgXCI4N1wiLCBcIjg4XCIsIFwiODlcIiwgXCI4YVwiLCBcIjhiXCIsIFwiOGNcIiwgXCI4ZFwiLCBcIjhlXCIsIFwiOGZcIixcbiAgICBcIjkwXCIsIFwiOTFcIiwgXCI5MlwiLCBcIjkzXCIsIFwiOTRcIiwgXCI5NVwiLCBcIjk2XCIsIFwiOTdcIiwgXCI5OFwiLCBcIjk5XCIsIFwiOWFcIiwgXCI5YlwiLCBcIjljXCIsIFwiOWRcIiwgXCI5ZVwiLCBcIjlmXCIsXG4gICAgXCJhMFwiLCBcImExXCIsIFwiYTJcIiwgXCJhM1wiLCBcImE0XCIsIFwiYTVcIiwgXCJhNlwiLCBcImE3XCIsIFwiYThcIiwgXCJhOVwiLCBcImFhXCIsIFwiYWJcIiwgXCJhY1wiLCBcImFkXCIsIFwiYWVcIiwgXCJhZlwiLFxuICAgIFwiYjBcIiwgXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJiNFwiLCBcImI1XCIsIFwiYjZcIiwgXCJiN1wiLCBcImI4XCIsIFwiYjlcIiwgXCJiYVwiLCBcImJiXCIsIFwiYmNcIiwgXCJiZFwiLCBcImJlXCIsIFwiYmZcIixcbiAgICBcImMwXCIsIFwiYzFcIiwgXCJjMlwiLCBcImMzXCIsIFwiYzRcIiwgXCJjNVwiLCBcImM2XCIsIFwiYzdcIiwgXCJjOFwiLCBcImM5XCIsIFwiY2FcIiwgXCJjYlwiLCBcImNjXCIsIFwiY2RcIiwgXCJjZVwiLCBcImNmXCIsXG4gICAgXCJkMFwiLCBcImQxXCIsIFwiZDJcIiwgXCJkM1wiLCBcImQ0XCIsIFwiZDVcIiwgXCJkNlwiLCBcImQ3XCIsIFwiZDhcIiwgXCJkOVwiLCBcImRhXCIsIFwiZGJcIiwgXCJkY1wiLCBcImRkXCIsIFwiZGVcIiwgXCJkZlwiLFxuICAgIFwiZTBcIiwgXCJlMVwiLCBcImUyXCIsIFwiZTNcIiwgXCJlNFwiLCBcImU1XCIsIFwiZTZcIiwgXCJlN1wiLCBcImU4XCIsIFwiZTlcIiwgXCJlYVwiLCBcImViXCIsIFwiZWNcIiwgXCJlZFwiLCBcImVlXCIsIFwiZWZcIixcbiAgICBcImYwXCIsIFwiZjFcIiwgXCJmMlwiLCBcImYzXCIsIFwiZjRcIiwgXCJmNVwiLCBcImY2XCIsIFwiZjdcIiwgXCJmOFwiLCBcImY5XCIsIFwiZmFcIiwgXCJmYlwiLCBcImZjXCIsIFwiZmRcIiwgXCJmZVwiLCBcImZmXCJdO1xuZXhwb3J0IGRlZmF1bHQgKGJ1ZikgPT4gQlRIW2J1ZlswXV0gKyBCVEhbYnVmWzFdXSArXG4gICAgQlRIW2J1ZlsyXV0gKyBCVEhbYnVmWzNdXSArICctJyArXG4gICAgQlRIW2J1Zls0XV0gKyBCVEhbYnVmWzVdXSArICctJyArXG4gICAgQlRIW2J1Zls2XV0gKyBCVEhbYnVmWzddXSArICctJyArXG4gICAgQlRIW2J1Zls4XV0gKyBCVEhbYnVmWzldXSArICctJyArXG4gICAgQlRIW2J1ZlsxMF1dICsgQlRIW2J1ZlsxMV1dICtcbiAgICBCVEhbYnVmWzEyXV0gKyBCVEhbYnVmWzEzXV0gK1xuICAgIEJUSFtidWZbMTRdXSArIEJUSFtidWZbMTVdXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2J5dGVzVG9VdWlkLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHJhbmRvbUJ5dGVzIGZyb20gJy4vcmFuZG9tQnl0ZXMnO1xuaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQnO1xuY29uc3QgU0VFRF9CWVRFUyA9IHJhbmRvbUJ5dGVzKDE2KTtcbmNvbnN0IE5PREVfSUQgPSBbXG4gICAgU0VFRF9CWVRFU1swXSB8IDB4MDEsXG4gICAgU0VFRF9CWVRFU1sxXSxcbiAgICBTRUVEX0JZVEVTWzJdLFxuICAgIFNFRURfQllURVNbM10sXG4gICAgU0VFRF9CWVRFU1s0XSxcbiAgICBTRUVEX0JZVEVTWzVdLFxuXTtcbmxldCBfY2xvY2tzZXEgPSAoU0VFRF9CWVRFU1s2XSA8PCA4IHwgU0VFRF9CWVRFU1s3XSkgJiAweDNmZmY7XG5sZXQgbGFzdE1TZWNzID0gMDtcbmxldCBsYXN0TlNlY3MgPSAwO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGxldCBtc2VjcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBuc2VjcyA9IGxhc3ROU2VjcyArIDE7XG4gICAgbGV0IGR0ID0gKG1zZWNzIC0gbGFzdE1TZWNzKSArIChuc2VjcyAtIGxhc3ROU2VjcykgLyAxMDAwMDtcbiAgICBsZXQgY2xvY2tzZXEgPSBkdCA8IDAgPyBfY2xvY2tzZXEgKyAxICYgMHgzZmZmIDogX2Nsb2Nrc2VxO1xuICAgIGlmIChkdCA8IDAgfHwgbXNlY3MgPiBsYXN0TVNlY3MpIHtcbiAgICAgICAgbnNlY3MgPSAwO1xuICAgIH1cbiAgICBpZiAobnNlY3MgPj0gMTAwMDApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICAgIGxhc3RNU2VjcyA9IG1zZWNzO1xuICAgIGxhc3ROU2VjcyA9IG5zZWNzO1xuICAgIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgYiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICBsZXQgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCAmIDB4ZmY7XG4gICAgbGV0IHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdG1oICYgMHhmZjtcbiAgICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDtcbiAgICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcbiAgICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG4gICAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKVxuICAgICAgICBiW2kgKyBuXSA9IE5PREVfSURbbl07XG4gICAgcmV0dXJuIGJ5dGVzVG9VdWlkKGIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3YxLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNvbnN0IFVVSUR2MV9QQVRURVJOID0gJ1thLWYwLTldezh9LVthLWYwLTldezR9LTFbYS1mMC05XXszfS1bODlhYl1bYS1mMC05XXszfS1bYS1mMC05XXsxMn0nO1xuZXhwb3J0IGNvbnN0IFVVSUR2MV9SRUdFWFAgPSAvXlthLWYwLTldezh9LVthLWYwLTldezR9LTFbYS1mMC05XXszfS1bODlhYl1bYS1mMC05XXszfS1bYS1mMC05XXsxMn0kL2k7XG5leHBvcnQgY29uc3QgVVVJRHY0X1BBVFRFUk4gPSAnW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tNFthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSc7XG5leHBvcnQgY29uc3QgVVVJRHY0X1JFR0VYUCA9IC9eW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tNFthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSQvaTtcbmV4cG9ydCBjb25zdCBVVUlEbmlsX1BBVFRFUk4gPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbmV4cG9ydCBjb25zdCBVVUlEbmlsX1JFR0VYUCA9IC9eMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJC87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC9wYXR0ZXJucy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB2MSBmcm9tICcuL3YxJztcbmltcG9ydCB7IFVVSUR2MV9SRUdFWFAsIFVVSUR2NF9SRUdFWFAsIFVVSURuaWxfUkVHRVhQLCBVVUlEbmlsX1BBVFRFUk4sIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgY2xhc3MgVVVJRCB7XG4gICAgc3RhdGljIGdldEFycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoKS5jb25jYXQodmFsdWUpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1dWlkID0gbmV3IFVVSUQoaXRlbSAmJiBpdGVtLmlkIHx8IGl0ZW0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB1dWlkLnZlcnNpb24gPT09IG51bGwgPyBudWxsIDogdXVpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHV1aWQgPSBudWxsKSB7XG4gICAgICAgIGlmICh1dWlkIGluc3RhbmNlb2YgVVVJRCkge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdXVpZC52ZXJzaW9uO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdXVpZC51dWlkO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdXVpZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKFVVSURuaWxfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVVUlEdjFfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVVUlEdjRfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVVVJRCBcIiR7dXVpZH1cIiBkb2VzIG5vdCBtYXRjaCB0aGUgVVVJRCBzdHJpbmdgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXVpZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXVpZCA9IFVVSURuaWxfUEFUVEVSTjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dWlkID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdjEoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dWlkID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSA0O1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdjEoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBVVUlEIHZlcnNpb24gb2YgXCIke3V1aWR9XCJgKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgVVVJRCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVVVJRCc7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvdXVpZC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdXVpZCc7XG5leHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgR0VOSVRJVkVfTU9OVEhTID0gW1xuICAgICfQr9C90LLQsNGA0Y8nLFxuICAgICfQpNC10LLRgNCw0LvRjycsXG4gICAgJ9Cc0LDRgNGC0LAnLFxuICAgICfQkNC/0YDQtdC70Y8nLFxuICAgICfQnNCw0Y8nLFxuICAgICfQmNGO0L3RjycsXG4gICAgJ9CY0Y7Qu9GPJyxcbiAgICAn0JDQstCz0YPRgdGC0LAnLFxuICAgICfQodC10L3RgtGP0LHRgNGPJyxcbiAgICAn0J7QutGC0Y/QsdGA0Y8nLFxuICAgICfQndC+0Y/QsdGA0Y8nLFxuICAgICfQlNC10LrQsNCx0YDRjydcbl07XG5leHBvcnQgY2xhc3MgVGltZXN0YW1wIGV4dGVuZHMgRGF0ZSB7XG4gICAgc3RhdGljIGZyb21VbnV4KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHV0cyA9IH5+dmFsdWU7XG4gICAgICAgIHJldHVybiBuZXcgVGltZXN0YW1wKHV0cyAqIDEwMDApO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIGdldCBpc0ludmFsaWQoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc1ZhbGlkO1xuICAgIH1cbiAgICB0b1VSTFN0cmluZygpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IFN0cmluZyh0aGlzLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZyh0aGlzLmdldFVUQ01vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBkYXRlID0gU3RyaW5nKHRoaXMuZ2V0VVRDRGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWA7XG4gICAgfVxuICAgIGNvbXBhcmVEYXRlV2l0aE91dFRpbWUob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnVsbFllYXIoKSA9PT0gb3RoZXIuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgJiYgdGhpcy5nZXRNb250aCgpID09PSBvdGhlci5nZXRNb250aCgpXG4gICAgICAgICAgICAmJiB0aGlzLmdldERhdGUoKSA9PT0gb3RoZXIuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgICB0b0hSU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGlmICh0aGlzLmNvbXBhcmVEYXRlV2l0aE91dFRpbWUobm93KSlcbiAgICAgICAgICAgIG91dCArPSAn0KHQtdCz0L7QtNC90Y8nO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBhcmVEYXRlV2l0aE91dFRpbWUobm93KSlcbiAgICAgICAgICAgICAgICBvdXQgKz0gJ9CS0YfQtdGA0LAnO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFN0cmluZyh0aGlzLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgb3V0ICs9ICcgJyArIEdFTklUSVZFX01PTlRIU1t0aGlzLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHllYXIgIT09IG5vdy5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gJyAnICsgU3RyaW5nKHllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG91dCArPSAnICcgKyBTdHJpbmcodGhpcy5nZXRIb3VycygpKTtcbiAgICAgICAgb3V0ICs9ICc6JyArIFN0cmluZyh0aGlzLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMpO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBNb2RlbCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVGltZXN0YW1wJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdGltZXN0YW1wL3RpbWVzdGFtcC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdGltZXN0YW1wJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS90aW1lc3RhbXAvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBFTlVNX0lEX1JFR0VYUCA9IC9eW2Etel1bYS16MC05XSokLztcbmV4cG9ydCBjbGFzcyBFbnVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICghRU5VTV9JRF9SRUdFWFAudGVzdChpZCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFbnVtIElEIFwiJHtpZH1cIiBkb2VzIG5vdCBtYXRjIHRoZSBwYXR0ZXJuIFwiJHtFTlVNX0lEX1JFR0VYUC5zb3VyY2V9XCJgKTtcbiAgICB9XG4gICAgc3RhdGljICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgeWllbGQgdGhpc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXQodmFsdWUpIHtcbiAgICAgICAgbGV0IGlkID0gU3RyaW5nKHZhbHVlICYmIHZhbHVlLmlkIHx8IHZhbHVlKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzKVxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpLmNvbmNhdCh2YWx1ZSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLmdldChpdGVtKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgRW51bSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnRW51bSc7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL2VudW0vZW51bS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vZW51bSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEVudW0gfSBmcm9tICdAY29yZS9lbnVtJztcbmV4cG9ydCBjbGFzcyBCbG9ja0VudW0gZXh0ZW5kcyBFbnVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdmFsdWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHN1cGVyKGlkLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnQmxvY2tFbnVtJztcbiAgICB9XG59XG5CbG9ja0VudW0uQTEgPSBuZXcgQmxvY2tFbnVtKCdhMScsICdBMScsICfQktC10YDRiNC90LjQuScpO1xuQmxvY2tFbnVtLkEyID0gbmV3IEJsb2NrRW51bSgnYTInLCAnQTInLCAn0J/QvtC0INCy0LjQtNC10L4nKTtcbkJsb2NrRW51bS5BMyA9IG5ldyBCbG9ja0VudW0oJ2EzJywgJ0EzJywgJ9Cf0L7QtCDQvdC+0LLQvtGB0YLRjNGOJyk7XG5CbG9ja0VudW0uQjEgPSBuZXcgQmxvY2tFbnVtKCdiMScsICdCMScsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uQjIgPSBuZXcgQmxvY2tFbnVtKCdiMicsICdCMicsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uQjMgPSBuZXcgQmxvY2tFbnVtKCdiMycsICdCMycsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uTTEgPSBuZXcgQmxvY2tFbnVtKCdtMScsICdNMScsICfQnNC+0LHQuNC70YzQvdGL0LknKTtcbkJsb2NrRW51bS5NMiA9IG5ldyBCbG9ja0VudW0oJ20yJywgJ00yJywgJ9Cc0L7QsdC40LvRjNC90YvQuScpO1xuQmxvY2tFbnVtLk0zID0gbmV3IEJsb2NrRW51bSgnbTMnLCAnTTMnLCAn0JzQvtCx0LjQu9GM0L3Ri9C5Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2Jsb2NrLmVudW0udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgQmxvY2tFbnVtIH0gZnJvbSAnLi9ibG9jay5lbnVtJztcbmNvbnN0IEVOVU1fUEdfQVJSQVlfUEFUVEVSTiA9IC9eXFx7KFthLXowLTksXSspXFx9JC87XG5jb25zdCBEQVRFX1JFR0VYUCA9IC9eXFxkezR9LVxcZHsyfS1cXGR7M30kLztcbmV4cG9ydCBjbGFzcyBBZHMge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgaWYgKHZhbHVlLmJsb2Nrcykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBFTlVNX1BHX0FSUkFZX1BBVFRFUk4uZXhlYyh2YWx1ZS5ibG9ja3MpO1xuICAgICAgICAgICAgY29uc3QgYmxvY2tzID0gbWF0Y2ggJiYgbWF0Y2hbMV0uc3BsaXQoJywnKSB8fCB2YWx1ZS5ibG9ja3M7XG4gICAgICAgICAgICB0aGlzLmJsb2NrcyA9IEJsb2NrRW51bS5nZXRBcnJheShibG9ja3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuZW5kRGF0ZSk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlLmZpbGVzKSA/IHZhbHVlLmZpbGVzXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiBNYXRoLm1heCh+fnZhbHVlLmNvbGxlY3RlZCwgMCkpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtID4gMClcbiAgICAgICAgICAgIDogbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMubGltaXRzID1cbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS5saW1pdHMgPT09ICdvYmplY3QnID8ge1xuICAgICAgICAgICAgICAgIHNob3c6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLnNob3csIDApLFxuICAgICAgICAgICAgICAgIHNob3dQZXJEYXk6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLnNob3dQZXJEYXksIDApLFxuICAgICAgICAgICAgICAgIHNob3dQZXJVc2VyOiBNYXRoLm1heCh+fnZhbHVlLmxpbWl0cy5zaG93UGVyVXNlciwgMCksXG4gICAgICAgICAgICAgICAgY2xpY2s6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLmNsaWNrLCAwKSxcbiAgICAgICAgICAgICAgICBjbGlja1BlckRheTogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuY2xpY2tQZXJEYXksIDApLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyVXNlcjogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuY2xpY2tQZXJVc2VyLCAwKSxcbiAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogMCxcbiAgICAgICAgICAgICAgICBzaG93UGVyRGF5OiAwLFxuICAgICAgICAgICAgICAgIHNob3dQZXJVc2VyOiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrOiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyRGF5OiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyVXNlcjogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdHMgPSB7fTtcbiAgICAgICAgaWYgKHZhbHVlLnN0YXRzID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZS5zdGF0cykge1xuICAgICAgICAgICAgICAgIGtleSA9IFN0cmluZyhrZXkpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoREFURV9SRUdFWFAudGVzdChrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBNYXRoLm1heCh+fnZhbHVlLnN0YXRzW2tleV0uc2hvdywgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogTWF0aC5tYXgofn52YWx1ZS5zdGF0c1trZXldLmNsaWNrLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBibG9ja3M6IHRoaXMuYmxvY2tzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgZmlsZXM6IHRoaXMuZmlsZXMsXG4gICAgICAgICAgICBsaW1pdHM6IHRoaXMubGltaXRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBibG9ja3M6IHRoaXMuYmxvY2tzLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBmaWxlczogdGhpcy5maWxlcyxcbiAgICAgICAgICAgIGxpbWl0czogdGhpcy5saW1pdHMsXG4gICAgICAgICAgICBzdGF0czogdGhpcy5zdGF0cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgQWRzIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdBZHMnO1xuICAgIH1cbn1cbkFkcy5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ2Jsb2NrcycsXG4gICAgJ3RpdGxlJyxcbiAgICAnc3RhcnREYXRlJyxcbiAgICAnZW5kRGF0ZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9hZHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2Fkcyc7XG5leHBvcnQgKiBmcm9tICcuL2Jsb2NrLmVudW0nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBjbGFzcyBQcmljZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYnRjID0gMDtcbiAgICAgICAgdGhpcy5fdXNkID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgYnRjKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnRjO1xuICAgIH1cbiAgICBnZXQgdXNkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNkO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWUgPSB7fSkge1xuICAgICAgICBjb25zdCBidGMgPSB2YWx1ZS5idGMgIT09IHVuZGVmaW5lZCAmJiBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLmJ0YyksIDApO1xuICAgICAgICB0aGlzLl9idGMgPSBidGMgfHwgdGhpcy5idGM7XG4gICAgICAgIGNvbnN0IHVzZCA9IHZhbHVlLnVzZCAhPT0gdW5kZWZpbmVkICYmIE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUudXNkKSwgMCk7XG4gICAgICAgIHRoaXMuX3VzZCA9IHVzZCB8fCB0aGlzLnVzZDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ0YzogdGhpcy5idGMsXG4gICAgICAgICAgICB1c2Q6IHRoaXMudXNkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidGM6IHRoaXMuYnRjLFxuICAgICAgICAgICAgdXNkOiB0aGlzLnVzZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZCB8fCAwO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnRvTnVtYmVyKCkpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBQcmljZSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnUHJpY2UnO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL3ByaWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi9wcmljZSc7XG5leHBvcnQgY2xhc3MgSGlzdG9yaWNhbCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLnByaWNlID0gbmV3IFByaWNlKCk7XG4gICAgICAgIHRoaXMudHMgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnRzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh2YWx1ZS5wcmljZSk7XG4gICAgfVxuICAgIHVwZGF0ZVByaWNlKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5wcmljZS51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlLnRvTnVtYmVyKCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudHMpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBIaXN0b3JpY2FsIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdIaXN0b3JpY2FsJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9oaXN0b3JpY2FsLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi9wcmljZSc7XG5pbXBvcnQgeyBIaXN0b3JpY2FsIH0gZnJvbSAnLi9oaXN0b3JpY2FsJztcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15bQS1aMC05QCRdKyQvO1xuZXhwb3J0IGNsYXNzIENvaW4ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5fbWF4ID0gMDtcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gMDtcbiAgICAgICAgdGhpcy5wcmljZSA9IG5ldyBQcmljZSgpO1xuICAgICAgICB0aGlzLl92b2x1bWUyNCA9IDA7XG4gICAgICAgIHRoaXMuX2hpc3RvcmljYWwgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gU3RyaW5nKHZhbHVlLnN5bWJvbCB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmICghU1lNQk9MX1BBVFRFUk4udGVzdChzeW1ib2wpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgU3ltYm9sIFwiJHtzeW1ib2x9IG5vdCBtYXRjaCB0byBwYXR0ZXJuICR7U1lNQk9MX1BBVFRFUk4uc291cmNlfWApO1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgbWF4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4O1xuICAgIH1cbiAgICBnZXQgYXZhaWxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlO1xuICAgIH1cbiAgICBnZXQgY2FwaXRhbGl6YXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidGM6IHRoaXMucHJpY2UuYnRjICogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgICAgICB1c2Q6IHRoaXMucHJpY2UudXNkICogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCB2b2x1bWUyNCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZTI0O1xuICAgIH1cbiAgICBnZXQgdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cztcbiAgICB9XG4gICAgZ2V0IGhpc3RvcmljYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaXN0b3JpY2FsLnNvcnQoKGEsIGIpID0+IGEudHMgPCBiLnRzID8gLTEgOiAxKTtcbiAgICB9XG4gICAgZ2V0IGxhc3RIaXN0b3JpY2FsKCkge1xuICAgICAgICBjb25zdCBoaXN0b3JpY2FsID0gdGhpcy5oaXN0b3JpY2FsO1xuICAgICAgICBpZiAoaGlzdG9yaWNhbC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gaGlzdG9yaWNhbFtoaXN0b3JpY2FsLmxlbmd0aCAtIDFdLnRzO1xuICAgIH1cbiAgICB1cGRhdGVQcmljZSh2YWx1ZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucHJpY2UudXBkYXRlKHZhbHVlKTtcbiAgICB9XG4gICAgdXBkYXRlSGlzdG9yaWNhbCh2YWx1ZSA9IFtdKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhbHVlLm1hcChpdGVtID0+IG5ldyBIaXN0b3JpY2FsKGl0ZW0pKVxuICAgICAgICAgICAgLmZvckVhY2gobmV3SXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuX2hpc3RvcmljYWwuZmluZChpdGVtID0+IE51bWJlcihpdGVtLnRzKSA9PT0gTnVtYmVyKG5ld0l0ZW0udHMpKTtcbiAgICAgICAgICAgIGlmICghY3VycmVudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaXN0b3JpY2FsLnB1c2gobmV3SXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEl0ZW0udXBkYXRlUHJpY2UobmV3SXRlbS5wcmljZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodmFsdWUuc3ltYm9sICE9PSB0aGlzLnN5bWJvbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fbWF4ID0gdmFsdWUubWF4ICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLm1heCksIDApIDogMDtcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gdmFsdWUuYXZhaWxhYmxlICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLmF2YWlsYWJsZSksIDApIDogMDtcbiAgICAgICAgdGhpcy5fdm9sdW1lMjQgPSB2YWx1ZS52b2x1bWUyNCAhPT0gdW5kZWZpbmVkID8gTWF0aC5tYXgocGFyc2VGbG9hdCh2YWx1ZS52b2x1bWUyNCksIDApIDogMDtcbiAgICAgICAgdGhpcy5fdHMgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnRzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh2YWx1ZS5wcmljZSk7XG4gICAgICAgIHRoaXMudXBkYXRlSGlzdG9yaWNhbCh2YWx1ZS5oaXN0b3JpY2FsKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0aGlzLmF2YWlsYWJsZSxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLnZhbHVlT2YoKSxcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uOiB0aGlzLmNhcGl0YWxpemF0aW9uLFxuICAgICAgICAgICAgdm9sdW1lMjQ6IHRoaXMudm9sdW1lMjQsXG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIGhpc3RvcmljYWw6IHRoaXMuaGlzdG9yaWNhbCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRoaXMuYXZhaWxhYmxlLFxuICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvbjogdGhpcy5jYXBpdGFsaXphdGlvbixcbiAgICAgICAgICAgIHZvbHVtZTI0OiB0aGlzLnZvbHVtZTI0LFxuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVxdWFsKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGl0ZW0pID09PSBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcGl0YWxpemF0aW9uLnVzZDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgQ29pbiB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnQ29pbic7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2NvaW4vY29pbi50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vY29pbic7XG5leHBvcnQgKiBmcm9tICcuL3ByaWNlJztcbmV4cG9ydCAqIGZyb20gJy4vaGlzdG9yaWNhbCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBjbGFzcyBSYXRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5saWtlID0gTWF0aC5tYXgofn52YWx1ZS5saWtlLCAwKTtcbiAgICAgICAgdGhpcy5kaXNsaWtlID0gTWF0aC5tYXgofn52YWx1ZS5kaXNsaWtlLCAwKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saWtlIC8gKHRoaXMubGlrZSArIHRoaXMuZGlzbGlrZSk7XG4gICAgfVxuICAgIGdldCBzdGFycygpIHtcbiAgICAgICAgcmV0dXJuIDUgKiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlrZTogdGhpcy5saWtlLFxuICAgICAgICAgICAgZGlzbGlrZTogdGhpcy5kaXNsaWtlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaWtlOiB0aGlzLmxpa2UsXG4gICAgICAgICAgICBkaXNsaWtlOiB0aGlzLmRpc2xpa2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFJhaXRpbmcgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1JhaXRpbmcnO1xuICAgIH1cbn1cblJhdGluZy5NYWluRmllbGRzID0gW1xuICAgICdsaWtlJyxcbiAgICAnZGlzbGlrZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3JhdGluZy9yYXRpbmcudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3JhdGluZyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcmF0aW5nL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5leHBvcnQgY2xhc3MgQ3VycmVuY3kge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuc3ltYm9sID0gU3RyaW5nKHZhbHVlLnN5bWJvbCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLmV4dFVybCA9IFN0cmluZyh2YWx1ZS5leHRVcmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5zdGFydERhdGUpO1xuICAgICAgICB0aGlzLmZvdW5kZXIgPSBTdHJpbmcodmFsdWUuZm91bmRlciB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm1heENvaW4gPSBNYXRoLm1heCh+fnZhbHVlLm1heENvaW4sIDApO1xuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IFN0cmluZyh2YWx1ZS5hbGdvcml0aG0gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5zeXN0ZW0gPSBTdHJpbmcodmFsdWUuc3lzdGVtIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBmb3VuZGVyOiB0aGlzLmZvdW5kZXIsXG4gICAgICAgICAgICBtYXhDb2luOiB0aGlzLm1heENvaW4sXG4gICAgICAgICAgICBhbGdvcml0aG06IHRoaXMuYWxnb3JpdGhtLFxuICAgICAgICAgICAgc3lzdGVtOiB0aGlzLnN5c3RlbSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuaXNWYWxpZCA/IHRoaXMuc3RhcnREYXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZm91bmRlcjogdGhpcy5mb3VuZGVyLFxuICAgICAgICAgICAgbWF4Q29pbjogdGhpcy5tYXhDb2luLFxuICAgICAgICAgICAgYWxnb3JpdGhtOiB0aGlzLmFsZ29yaXRobSxcbiAgICAgICAgICAgIHN5c3RlbTogdGhpcy5zeXN0ZW0sXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBDdXJyZW5jeSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnQ3VycmVuY3knO1xuICAgIH1cbn1cbkN1cnJlbmN5Lk1haW5GaWVsZHMgPSBbXG4gICAgJ3N5bWJvbCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jdXJyZW5jeS9jdXJyZW5jeS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vY3VycmVuY3knO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5leHBvcnQgY2xhc3MgRXhjaGFuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZXh0VXJsID0gU3RyaW5nKHZhbHVlLmV4dFVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMucmVmZXJyYWwgPSAhIXZhbHVlLnJlZmVycmFsO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBTdHJpbmcodmFsdWUuY29udGVudCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgcmVmZXJyYWw6IHRoaXMucmVmZXJyYWwsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuaXNWYWxpZCA/IHRoaXMuc3RhcnREYXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVmZXJyYWw6IHRoaXMucmVmZXJyYWwsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBFeGNoYW5nZSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnRXhjaGFuZ2UnO1xuICAgIH1cbn1cbkV4Y2hhbmdlLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V4Y2hhbmdlL2V4Y2hhbmdlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9leGNoYW5nZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXhjaGFuZ2UvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBJQ08ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZXh0VXJsID0gU3RyaW5nKHZhbHVlLmV4dFVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMuZ29hbCA9IE1hdGgubWF4KH5+dmFsdWUuZ29hbCwgMCk7XG4gICAgICAgIHRoaXMuY29sbGVjdGVkID0gTWF0aC5tYXgofn52YWx1ZS5jb2xsZWN0ZWQsIDApO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFN0cmluZyh2YWx1ZS5zdGF0dXMgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGdvYWw6IHRoaXMuZ29hbCxcbiAgICAgICAgICAgIGNvbGxlY3RlZDogdGhpcy5jb2xsZWN0ZWQsXG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmlzVmFsaWQgPyB0aGlzLnN0YXJ0RGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdvYWw6IHRoaXMuZ29hbCxcbiAgICAgICAgICAgIGNvbGxlY3RlZDogdGhpcy5jb2xsZWN0ZWQsXG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgSUNPIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdJQ08nO1xuICAgIH1cbn1cbklDTy5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3VybCcsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pY28vaWNvLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9pY28nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuZXhwb3J0IGNsYXNzIE1hcmtldCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5yZWZlcnJhbCA9ICEhdmFsdWUucmVmZXJyYWw7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICByZWZlcnJhbDogdGhpcy5yZWZlcnJhbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZWZlcnJhbDogdGhpcy5yZWZlcnJhbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IE1hcmtldCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnTWFya2V0JztcbiAgICB9XG59XG5NYXJrZXQuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd1cmwnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvbWFya2V0L21hcmtldC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vbWFya2V0JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBSVVMgPSAn0YkgINGIICDRhyAg0YYgINGOICDRjyAg0ZEg0LYgINGLINGNINCwINCxINCyINCzINC0INC1INC3INC4INC5INC6INC7INC8INC9INC+INC/INGAINGBINGCINGDINGEINGFJy5zcGxpdCgvXFxzKy8pO1xuY29uc3QgRU5HID0gJ3NoIHNoIGNoIGN6IHl1IHlhIGUgemggeSBlIGEgYiB2IGcgZCBlIHogaSBqIGsgbCBtIG4gbyBwIHIgcyB0IHUgZiB4Jy5zcGxpdCgvXFxzKy8pO1xuZXhwb3J0IGNsYXNzIFVSTEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5VUkxCdWlsZGVyLmJ1aWxkID0gKGlucHV0LCBtYXhMZW5ndGggPSAxMjgpID0+IHtcbiAgICBsZXQgdGV4dCA9IGlucHV0LnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJ18nKTtcbiAgICB0ZXh0ID0gdGV4dC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IHtcbiAgICAgICAgbGV0IGkgPSBSVVMuaW5kZXhPZihjaGFyKTtcbiAgICAgICAgcmV0dXJuIGkgPCAwID8gY2hhciA6IEVOR1tpXTtcbiAgICB9KS5qb2luKCcnKTtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXjAtOWEtel9dL2csICcnKVxuICAgICAgICAuc2xpY2UoMCwgbWF4TGVuZ3RoKVxuICAgICAgICAucmVwbGFjZSgvKF5fK3xfKyQpL2csICcnKTtcbiAgICByZXR1cm4gdGV4dDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXJsLWJ1aWxkZXIvdXJsLWJ1aWxkZXIudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3VybC1idWlsZGVyJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFVSTEJ1aWxkZXIgfSBmcm9tICdAY29yZS91cmwtYnVpbGRlcic7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBQdWJsaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLnRzID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS50cyk7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnNlY3Rpb25zID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5zZWN0aW9ucyk7XG4gICAgICAgIHRoaXMuY3VycmVuY2llcyA9IEFycmF5LmlzQXJyYXkodmFsdWUuY3VycmVuY2llcykgPyB2YWx1ZS5jdXJyZW5jaWVzXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiBTdHJpbmcoaXRlbSkudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiAhIWl0ZW0pXG4gICAgICAgICAgICA6IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmV4Y2hhbmdlcyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUuZXhjaGFuZ2VzKTtcbiAgICAgICAgdGhpcy5pY28gPSBVVUlELmdldEFycmF5KHZhbHVlLmljbyk7XG4gICAgICAgIHRoaXMubWFya2V0cyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUubWFya2V0cyk7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gdmFsdWUud2VpZ2h0ID09PSB1bmRlZmluZWQgPyAxIDogTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS53ZWlnaHQsIDApLCAzKTtcbiAgICAgICAgdGhpcy5iaWdUaXRsZSA9IFN0cmluZyh2YWx1ZS5iaWdUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5hdXRob3JzID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5hdXRob3JzKTtcbiAgICAgICAgdGhpcy50YWdzID0gQXJyYXkuaXNBcnJheSh2YWx1ZS50YWdzKSA/IHZhbHVlLnRhZ3NcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IFN0cmluZyhpdGVtKS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICEhaXRlbSlcbiAgICAgICAgICAgIDogbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2hhcmluZyA9IHZhbHVlLnNoYXJpbmcgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLnNoYXJpbmc7XG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB2YWx1ZS5jb21tZW50cyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuY29tbWVudHM7XG4gICAgICAgIHRoaXMuYWRzID0gdmFsdWUuYWRzID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5hZHM7XG4gICAgICAgIHRoaXMucnNzID0gdmFsdWUucnNzID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5yc3M7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgICAgIHRoaXMubGFzdE1vZGlmaWVkID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5sYXN0TW9kaWZpZWQpO1xuICAgICAgICBpZiAoIXRoaXMudXJsKVxuICAgICAgICAgICAgdGhpcy51cmwgPSBVUkxCdWlsZGVyLmJ1aWxkKHRoaXMudGl0bGUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHNlY3Rpb25zOiB0aGlzLnNlY3Rpb25zLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIGN1cnJlbmNpZXM6IHRoaXMuY3VycmVuY2llcyxcbiAgICAgICAgICAgIGV4Y2hhbmdlczogdGhpcy5leGNoYW5nZXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgaWNvOiB0aGlzLmljby5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICBtYXJrZXRzOiB0aGlzLm1hcmtldHMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgd2VpZ2h0OiB0aGlzLndlaWdodCxcbiAgICAgICAgICAgIGJpZ1RpdGxlOiB0aGlzLmJpZ1RpdGxlLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgYXV0aG9yczogdGhpcy5hdXRob3JzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgICAgIHNoYXJpbmc6IHRoaXMuc2hhcmluZyxcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgICAgICAgYWRzOiB0aGlzLmFkcyxcbiAgICAgICAgICAgIHJzczogdGhpcy5yc3MsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgc2VjdGlvbnM6IHRoaXMuc2VjdGlvbnMsXG4gICAgICAgICAgICBjdXJyZW5jaWVzOiB0aGlzLmN1cnJlbmNpZXMsXG4gICAgICAgICAgICBleGNoYW5nZXM6IHRoaXMuZXhjaGFuZ2VzLFxuICAgICAgICAgICAgaWNvOiB0aGlzLmljbyxcbiAgICAgICAgICAgIG1hcmtldHM6IHRoaXMubWFya2V0cyxcbiAgICAgICAgICAgIHdlaWdodDogdGhpcy53ZWlnaHQsXG4gICAgICAgICAgICBiaWdUaXRsZTogdGhpcy5iaWdUaXRsZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIGF1dGhvcnM6IHRoaXMuYXV0aG9ycyxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgICAgIHNoYXJpbmc6IHRoaXMuc2hhcmluZyxcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgICAgICAgYWRzOiB0aGlzLmFkcyxcbiAgICAgICAgICAgIHJzczogdGhpcy5yc3MsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IHRoaXMubGFzdE1vZGlmaWVkLmlzVmFsaWQgPyB0aGlzLmxhc3RNb2RpZmllZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgUHVibGljYXRpb24gdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1B1YmxpY2F0aW9uJztcbiAgICB9XG59XG5QdWJsaWNhdGlvbi5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ3RzJyxcbiAgICAndXJsJyxcbiAgICAnZW5hYmxlJyxcbiAgICAnc2VjdGlvbnMnLFxuICAgICdjdXJyZW5jaWVzJyxcbiAgICAnZXhjaGFuZ2VzJyxcbiAgICAnaWNvJyxcbiAgICAnbWFya2V0cycsXG4gICAgJ3dlaWdodCcsXG4gICAgJ2JpZ1RpdGxlJyxcbiAgICAndGl0bGUnLFxuICAgICdkZXNjcmlwdGlvbicsXG4gICAgJ2ltYWdlJyxcbiAgICAnYXV0aG9ycycsXG4gICAgJ3RhZ3MnLFxuICAgICdyc3MnLFxuICAgICdyYXRpbmcnLFxuICAgICdicmFuZGluZycsXG4gICAgJ2xhc3RNb2RpZmllZCcsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNhdGlvbic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5leHBvcnQgY2xhc3MgU2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgU2VjdGlvbiB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnU2VjdGlvbic7XG4gICAgfVxufVxuU2VjdGlvbi5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3VybCcsXG4gICAgJ3RpdGxlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc2VjdGlvbi9zZWN0aW9uLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zZWN0aW9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuZXhwb3J0IGNsYXNzIFN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFN0YXR1cyB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnU3RhdHVzJztcbiAgICB9XG59XG5TdGF0dXMuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc3RhdHVzL3N0YXR1cy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vc3RhdHVzJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zdGF0dXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBFbnVtIH0gZnJvbSAnQGNvcmUvZW51bSc7XG5leHBvcnQgY2xhc3MgUm9sZUVudW0gZXh0ZW5kcyBFbnVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdmFsdWUsIGljb24pIHtcbiAgICAgICAgc3VwZXIoaWQsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVXNlclJvbGUnO1xuICAgIH1cbn1cblJvbGVFbnVtLlVzZXIgPSBuZXcgUm9sZUVudW0oJ3VzZXInLCAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJywgbnVsbCk7XG5Sb2xlRW51bS5BdXRob3IgPSBuZXcgUm9sZUVudW0oJ2F1dGhvcicsICfQkNCy0YLQvtGAJywgbnVsbCk7XG5Sb2xlRW51bS5QdWJsaXNoZXIgPSBuZXcgUm9sZUVudW0oJ3B1Ymxpc2hlcicsICfQn9GD0LHQu9C40LrQsNGC0L7RgCcsIG51bGwpO1xuUm9sZUVudW0uQ2hpZWYgPSBuZXcgUm9sZUVudW0oJ2NoaWVmJywgJ9Cg0LXQtNCw0LrRgtC+0YAnLCBudWxsKTtcblJvbGVFbnVtLkFkbWluaXN0cmF0b3IgPSBuZXcgUm9sZUVudW0oJ2FkbWluaXN0cmF0b3InLCAn0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YAnLCBudWxsKTtcblJvbGVFbnVtLlN1ID0gbmV3IFJvbGVFbnVtKCdzdScsICdTdXBlciB1c2VyJywgbnVsbCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci9yb2xlLmVudW0udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBSb2xlRW51bSB9IGZyb20gJy4vcm9sZS5lbnVtJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5jb25zdCBFTlVNX1BHX0FSUkFZX1BBVFRFUk4gPSAvXlxceyhbYS16MC05LF0rKVxcfSQvO1xuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgaWYgKHZhbHVlLnJvbGVzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IEVOVU1fUEdfQVJSQVlfUEFUVEVSTi5leGVjKHZhbHVlLnJvbGVzKTtcbiAgICAgICAgICAgIGNvbnN0IHJvbGVzID0gbWF0Y2ggJiYgbWF0Y2hbMV0uc3BsaXQoJywnKSB8fCB2YWx1ZS5yb2xlcztcbiAgICAgICAgICAgIHRoaXMucm9sZXMgPSBSb2xlRW51bS5nZXRBcnJheShyb2xlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5yb2xlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IFN0cmluZyh2YWx1ZS5lbWFpbCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnBob25lID0gU3RyaW5nKHZhbHVlLnBob25lIHx8ICcnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vYXV0aCA9IHt9O1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0dXNlcyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUuc3RhdHVzZXMpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmNhcmQgPSB7fTtcbiAgICB9XG4gICAgY2hlY2tSb2xlKHJvbGVzKSB7XG4gICAgICAgIGZvciAobGV0IHJvbGUgb2Ygcm9sZXMpXG4gICAgICAgICAgICBpZiAodGhpcy5yb2xlcy5pbmNsdWRlcyhyb2xlKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgdmFsaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICE9PSBudWxsXG4gICAgICAgICAgICAmJiB0aGlzLmlkLnZlcnNpb24gIT09IG51bGw7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgcm9sZXM6IHRoaXMucm9sZXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBzdGF0dXNlczogdGhpcy5zdGF0dXNlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgY2FyZDogdGhpcy5jYXJkXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLFxuICAgICAgICAgICAgb2F1dGg6IHRoaXMub2F1dGgsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB0aGlzLnN0YXR1c2VzLFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBjYXJkOiB0aGlzLmNhcmRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgVXNlciB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVXNlcic7XG4gICAgfVxufVxuVXNlci5Bbm9ueW1vdXNGaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAndGl0bGUnLFxuICAgICd1cmwnLFxuICAgICdpbWFnZScsXG4gICAgJ3N0YXR1c2VzJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5Vc2VyLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndGl0bGUnLFxuICAgICdlbWFpbCcsXG4gICAgJ3Bob25lJyxcbiAgICAndXJsJyxcbiAgICAncm9sZXMnLFxuICAgICdpbWFnZScsXG4gICAgJ3N0YXR1c2VzJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci91c2VyLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9yb2xlLmVudW0nO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNsYXNzIFZpZGVvIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gU3RyaW5nKHZhbHVlLmlkIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgVmlkZW8gdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1ZpZGVvJztcbiAgICB9XG59XG5WaWRlby5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3ZpZGVvL3ZpZGVvLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi92aWRlbyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBFdmVudCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnRXZlbnQnO1xuICAgIH1cbn1cbkV2ZW50Lk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V2ZW50L2V2ZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9ldmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXZlbnQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2Fkcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvaW4nO1xuZXhwb3J0ICogZnJvbSAnLi9jdXJyZW5jeSc7XG5leHBvcnQgKiBmcm9tICcuL2V4Y2hhbmdlJztcbmV4cG9ydCAqIGZyb20gJy4vaWNvJztcbmV4cG9ydCAqIGZyb20gJy4vbWFya2V0JztcbmV4cG9ydCAqIGZyb20gJy4vcHVibGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yYXRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdHVzJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQsIF9zbmFja0Jhcikge1xuICAgICAgICB0aGlzLl9zbmFja0JhciA9IF9zbmFja0JhcjtcbiAgICAgICAgdGhpcy5pc1NlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCk7XG4gICAgfVxuICAgIG1lc3NhZ2UobWVzc2FnZSwgZHVyYXRpb24gPSAyMDAwKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VydmVyKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4obWVzc2FnZSwgdW5kZWZpbmVkLCB7IGR1cmF0aW9uIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL21lc3NhZ2UvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQXV0aERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0Bjb21tb24vbW9kZWxzJztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlJztcbmNvbnN0IEFVVEhfVE9LRU5fTFNfSUQgPSAnYXV0aC10b2tlbic7XG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQsIF9odHRwLCBfbWF0RGlhbG9nLCBfbWVzc2FnZSwgX3NuYWNrQmFyKSB7XG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcbiAgICAgICAgdGhpcy5fbWF0RGlhbG9nID0gX21hdERpYWxvZztcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IF9tZXNzYWdlO1xuICAgICAgICB0aGlzLl9zbmFja0JhciA9IF9zbmFja0JhcjtcbiAgICAgICAgdGhpcy5pc1NlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCk7XG4gICAgfVxuICAgIGdldCBfYXV0aFRva2VuKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKEFVVEhfVE9LRU5fTFNfSUQpIHx8IG51bGw7XG4gICAgfVxuICAgIHNldCBfYXV0aFRva2VuKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VydmVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlICYmIHZhbHVlLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUSF9UT0tFTl9MU19JRCwgdmFsdWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQVVUSF9UT0tFTl9MU19JRCk7XG4gICAgfVxuICAgIGdldCBhdXRoVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoVG9rZW47XG4gICAgfVxuICAgIGdldCBhdXRoSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGF1dGhUb2tlbiA9IHRoaXMuX2F1dGhUb2tlbjtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ3Rva2VuICcgKyAoYXV0aFRva2VuIHx8ICdudWxsJykgfSk7XG4gICAgfVxuICAgIG1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoQVBJU2VydmljZS5idWlsZFBhdGgoJy91c2Vycy9tZScpLCB7IGhlYWRlcnM6IHRoaXMuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0RGlhbG9nLm9wZW4oQXV0aERpYWxvZ0NvbXBvbmVudCwgeyBkYXRhOiB0aGlzIH0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKGDQntGI0LjQsdC60LAgJHtlcnJvci5zdGF0dXN9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCfQntGI0LjQsdC60LAg0L/RgNC40LvQvtC20LXQvdC40Y8nKTtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKG51bGwpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gbmV3IFVzZXIoaXRlbSkpO1xuICAgIH1cbiAgICBsb2dpbihkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoQVBJU2VydmljZS5idWlsZFBhdGgoJy9hdXRoL2xvZ2luJyksIGRhdGEsIHsgaGVhZGVyczogdGhpcy5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUub2YobnVsbCkpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJ9Cd0LXQstC10YDQvdC+0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70Lgg0L/QsNGA0L7Qu9GMJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYXV0aFRva2VuID0gaXRlbS50b2tlbjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLl9odHRwLmdldChBUElTZXJ2aWNlLmJ1aWxkUGF0aCgnL2F1dGgvbG9nb3V0JyksIHsgaGVhZGVyczogdGhpcy5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUub2YobnVsbCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXV0aFRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvdXNlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImxldCBBUElfU0VSVkVSX1ZBTFVFID0gXCJodHRwczovL2FwaS5iaXRqb3VybmFsLmlvXCI7XG5leHBvcnQgY29uc3QgQVBJX1NFUlZFUiA9IEFQSV9TRVJWRVJfVkFMVUU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL2FwaS9lbnZlcm9tZW50cy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi91c2VyJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbWVzc2FnZSc7XG5pbXBvcnQgeyBBUElfU0VSVkVSIH0gZnJvbSAnLi9lbnZlcm9tZW50cyc7XG5jb25zdCBQQVRIX1JFR0VYUCA9IC9eXFwvPyguKikvO1xuZXhwb3J0IGNsYXNzIEFQSVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKF9odHRwLCBfcm91dGVyLCBfdXNlciwgX21lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5faHR0cCA9IF9odHRwO1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgICAgICB0aGlzLl91c2VyID0gX3VzZXI7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBfbWVzc2FnZTtcbiAgICB9XG4gICAgc3RhdGljIGJ1aWxkUGF0aCh2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGxldCBtYXRjaCA9IFBBVEhfUkVHRVhQLmV4ZWModmFsdWUudHJpbSgpKTtcbiAgICAgICAgcmV0dXJuIEFQSV9TRVJWRVIgKyAnLycgKyAobWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJycpO1xuICAgIH1cbiAgICBfaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZSgnNDAzOiDQlNC+0YHRgtGD0L8g0LfQsNC/0YDQtdGJ0LXQvScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCc0MDQ6INCt0LvQtdC80LXQvdGCINC90LUg0L3QsNC50LTQtdC9Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZShg0J7RiNC40LHQutCwICR7ZXJyb3Iuc3RhdHVzfTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZSgn0J7RiNC40LHQutCwINC/0YDQuNC70L7QttC10L3QuNGPJyk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKG51bGwpO1xuICAgIH1cbiAgICBnZXQocGF0aCwgaW5wdXRQYXJhbXMgPSB7fSkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IGlucHV0UGFyYW1zIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoQVBJU2VydmljZS5idWlsZFBhdGgocGF0aCksIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX3VzZXIuYXV0aEhlYWRlcnMsXG4gICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLl9oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxuICAgIHBvc3QocGF0aCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKHBhdGgpLCBkYXRhLCB7IGhlYWRlcnM6IHRoaXMuX3VzZXIuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLl9oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxuICAgIHB1dChwYXRoLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChBUElTZXJ2aWNlLmJ1aWxkUGF0aChwYXRoKSwgZGF0YSwgeyBoZWFkZXJzOiB0aGlzLl91c2VyLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xuICAgIH1cbiAgICBkZWxldGUocGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoQVBJU2VydmljZS5idWlsZFBhdGgocGF0aCksIHsgaGVhZGVyczogdGhpcy5fdXNlci5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuX2hhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9hcGkvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmV4cG9ydCBjbGFzcyBMb2FkZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkKSB7XG4gICAgICAgIHRoaXMubG9hZGVyU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIHRoaXMubG9hZGVyU3RhdGUgPSB0aGlzLmxvYWRlclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuaXNTZXJ2ZXIgPSBpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQoeyBzaG93OiB0cnVlIH0pO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQoeyBzaG93OiBmYWxzZSB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL2xvYWRlci9sb2FkZXIuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vbG9hZGVyLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9sb2FkZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuZXhwb3J0IGNsYXNzIFRpbWVzdGFtcFBpcGUge1xuICAgIHRyYW5zZm9ybShpbnB1dCwgdHlwZSA9ICdJU08nKSB7XG4gICAgICAgIGNvbnN0IHRzID0gbmV3IFRpbWVzdGFtcChpbnB1dCk7XG4gICAgICAgIGlmICh0cy5pc0ludmFsaWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnSVNPJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHMudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgJ0hSJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHMudG9IUlN0cmluZygpO1xuICAgICAgICAgICAgY2FzZSAnVVJMJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHMudG9VUkxTdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BpcGVzL3RpbWVzdGFtcC90aW1lc3RhbXAudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3RpbWVzdGFtcCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BpcGVzL3RpbWVzdGFtcC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImxldCBSQVdfU0VSVkVSX1ZBTFVFID0gXCJodHRwczovL3Jhdy5iaXRqb3VybmFsLmlvXCI7XG5sZXQgUE9SVEFMX1NFUlZFUl9WQUxVRSA9IFwiaHR0cHM6Ly9iaXRqb3VybmFsLmlvXCI7XG5leHBvcnQgY29uc3QgUkFXX1NFUlZFUiA9IFJBV19TRVJWRVJfVkFMVUU7XG5leHBvcnQgY29uc3QgUE9SVEFMX1NFUlZFUiA9IFBPUlRBTF9TRVJWRVJfVkFMVUU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BpcGVzL2ltYWdlL2VudmVyb21lbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkFXX1NFUlZFUiwgUE9SVEFMX1NFUlZFUiB9IGZyb20gJy4vZW52ZXJvbWVudHMnO1xuY29uc3QgUEFUSF9SRUdFWFAgPSAvXlxcLz8oLiopLztcbmNvbnN0IEVNUFRZX1BORyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JztcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUge1xuICAgIHN0YXRpYyBvZ1VSTChpbnB1dCkge1xuICAgICAgICBpZiAoIWlucHV0KVxuICAgICAgICAgICAgcmV0dXJuIFBPUlRBTF9TRVJWRVIgKyAnL29nLnBuZyc7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gUEFUSF9SRUdFWFAuZXhlYyhTdHJpbmcoaW5wdXQpLnRyaW0oKSk7XG4gICAgICAgIGlmICghbWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gUE9SVEFMX1NFUlZFUiArICcvb2cucG5nJztcbiAgICAgICAgcmV0dXJuIFJBV19TRVJWRVIgKyAnLycgKyAobWF0Y2ggJiYgbWF0Y2hbMV0pO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0oaW5wdXQpIHtcbiAgICAgICAgaWYgKCFpbnB1dClcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9QTkc7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gUEFUSF9SRUdFWFAuZXhlYyhTdHJpbmcoaW5wdXQpLnRyaW0oKSk7XG4gICAgICAgIGlmICghbWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfUE5HO1xuICAgICAgICByZXR1cm4gUkFXX1NFUlZFUiArICcvJyArIChtYXRjaCAmJiBtYXRjaFsxXSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZS5waXBlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGlwZXMvaW1hZ2UvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgT3JkZXJQaXBlIHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQsIGtleSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuc29ydCgoYSwgYikgPT4gYVtrZXldID4gYltrZXldID8gMSA6IC0xKTtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGlwZXMvb3JkZXIvb3JkZXIudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL29yZGVyJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGlwZXMvb3JkZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSB7XG4gICAgdHJhbnNmb3JtKGlucHV0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSlcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1ba2V5XSA9PT0gdmFsdWUpO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9maWx0ZXIvZmlsdGVyLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9maWx0ZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9maWx0ZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3RpbWVzdGFtcCc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vb3JkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE1ldGEsIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5jb25zdCBERUZBVUxUX1RJVExFID0gJ0JpdEpvdXJuYWwg4oCUINC40LfQtNCw0L3QuNC1INC/0YDQviDQsdC40YLQutC+0LjQvSwg0LrRgNC40L/RgtC+0LLQsNC70Y7RgtGLLCBJQ08sINC80LDQudC90LjQvdCzINC4INCx0LvQvtC60YfQtdC50L0nO1xuY29uc3QgREVGQVVMVF9ERVNDUklQVElPTiA9ICfQndCwINGB0LDQudGC0LUgQml0Sm91cm5hbCDQstGLINC90LDQudC00LXRgtC1INC+0L/QtdGA0LDRgtC40LLQvdGL0LUg0L3QvtCy0L7RgdGC0Lgg0LjQtyDQvNC40YDQsCDQutGA0LjQv9GC0L7QuNC90LTRg9GB0YLRgNC40Lgg4oCUINCy0YHQtSDQviDRgdCw0LzRi9GFINCz0YDQsNC90LTQuNC+0LfQvdGL0YUgSUNPINCyINC40YHRgtC+0YDQuNC4LCDQvtCz0YDQvtC80L3Ri9C1INC80LDQudC90LjQvdCzLdGE0LXRgNC80Ysg0L/RgNC+INC70LXRgtGP0YnQuNC5INC90LAg0LvRg9C90YMg0LHQuNGC0LrQvtC40L0g0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtSc7XG5jb25zdCBERUZBVUxUX0tFWVdPUkRTID0gJ9Cx0LjRgtC60L7QuNC9LCBiaXRqb3VybmFsLCDQutGA0LjQv9GC0L7QstCw0LvRjtGC0YssIGljbywg0LzQsNC50L3QuNC90LMsINCx0LvQvtC60YfQtdC50L0nO1xuaW1wb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMnO1xuZXhwb3J0IGNsYXNzIE1ldGFTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihfbWV0YSwgX3RpdGxlKSB7XG4gICAgICAgIHRoaXMuX21ldGEgPSBfbWV0YTtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBfdGl0bGU7XG4gICAgfVxuICAgIHNldE1ldGFUYWdzKHsgdGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJywga2V5d29yZHMgPSAnJywgb2dUaXRsZSA9ICcnLCBvZ0Rlc2NyaXB0aW9uID0gJycsIG9nSW1hZ2UgPSAwLCB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fdGl0bGUuc2V0VGl0bGUodGl0bGUgfHwgREVGQVVMVF9USVRMRSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgbmFtZTogJ3RpdGxlJywgY29udGVudDogdGl0bGUgfHwgREVGQVVMVF9USVRMRSB9KTtcbiAgICAgICAgdGhpcy5fbWV0YS5hZGRUYWcoeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiBkZXNjcmlwdGlvbiB8fCBERUZBVUxUX0RFU0NSSVBUSU9OIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IG5hbWU6ICdrZXl3b3JkcycsIGNvbnRlbnQ6IGtleXdvcmRzIHx8IERFRkFVTFRfS0VZV09SRFMgfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgcHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogJ3dlYnNpdGUnIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBvZ1RpdGxlIHx8IHRpdGxlIHx8IERFRkFVTFRfVElUTEUgfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IG9nRGVzY3JpcHRpb24gfHwgZGVzY3JpcHRpb24gfHwgREVGQVVMVF9ERVNDUklQVElPTiB9KTtcbiAgICAgICAgdGhpcy5fbWV0YS5hZGRUYWcoeyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogSW1hZ2VQaXBlLm9nVVJMKG9nSW1hZ2UpIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IG5hbWU6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAnc3VtbWFyeV9sYXJnZV9pbWFnZScgfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgbmFtZTogJ3R3aXR0ZXI6c2l0ZScsIGNvbnRlbnQ6ICdAYml0am91cm5hbF9pbycgfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgbmFtZTogJ3R3aXR0ZXI6Y3JlYXRvcicsIGNvbnRlbnQ6ICdAYml0am91cm5hbF9pbycgfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgbmFtZTogJ3R3aXR0ZXI6dGl0bGUnLCBjb250ZW50OiBvZ1RpdGxlIHx8IHRpdGxlIHx8IERFRkFVTFRfVElUTEUgfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgbmFtZTogJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBvZ0Rlc2NyaXB0aW9uIHx8IGRlc2NyaXB0aW9uIHx8IERFRkFVTFRfREVTQ1JJUFRJT04gfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgbmFtZTogJ3R3aXR0ZXI6aW1hZ2UnLCBjb250ZW50OiBJbWFnZVBpcGUub2dVUkwob2dJbWFnZSkgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9tZXRhL21ldGEuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vbWV0YS5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvbWV0YS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkKSB7XG4gICAgICAgIHRoaXMuYWxsb3dOb3RpZmljYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCk7XG4gICAgICAgIHRoaXMuaW5pdE5vdGlmaWNhdGlvbigpO1xuICAgIH1cbiAgICBpbml0Tm90aWZpY2F0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF3aW5kb3cgfHwgISgnTm90aWZpY2F0aW9uJyBpbiB3aW5kb3cpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHdpbmRvdy5Ob3RpZmljYXRpb24ucGVybWlzc2lvbikge1xuICAgICAgICAgICAgY2FzZSAnZ3JhbnRlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd05vdGlmaWNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAnZGVuaWVkJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93Tm90aWZpY2F0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24ocGVybWlzc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dOb3RpZmljYXRpb24gPSBwZXJtaXNzaW9uID09PSAnZ3JhbnRlZCc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBOb3RpZmljYXRpb25TZXJ2aWNlRmFjdG9yeShub3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgcmV0dXJuICgpID0+IG5vdGlmaWNhdGlvblNlcnZpY2UubG9hZCgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvbm90aWZpY2F0aW9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgVktfQVBJID0gJ2h0dHBzOi8vdmsuY29tL2pzL2FwaS9vcGVuYXBpLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBWS0luaXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2luZG93LnZrQXN5bmNJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgVksgPSB3aW5kb3cuVks7XG4gICAgICAgICAgICBpZiAoVkspXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShWSyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVksgSW5pdGlhbGlzYXRpb24gZXJyb3InKSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuaWQgPSAndmtvbnRha3RlLWpzc2RrJztcbiAgICAgICAgc2NyaXB0LnNyYyA9IFZLX0FQSTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvdmstaW5pdC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IFRXX0FQSSA9ICdodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIFR3aXR0ZXJJbml0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdpbmRvdy50d3R0ciA9IHtcbiAgICAgICAgICAgIF9lOiBbZnVuY3Rpb24gKFRXKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChUVylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoVFcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdUVyBJbml0aWFsaXNhdGlvbiBlcnJvcicpKTtcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LmlkID0gJ3R3aXR0ZXItanNzZGsnO1xuICAgICAgICBzY3JpcHQuc3JjID0gVFdfQVBJO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3NvY2lhbC90d2l0dGVyLWluaXQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBHT09HTEVfQVBJID0gJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsYXRmb3JtLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBHb29nbGVJbml0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdpbmRvdy5vbkdvb2dsZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBnYXBpID0gd2luZG93LmdhcGk7XG4gICAgICAgICAgICBpZiAoZ2FwaSlcbiAgICAgICAgICAgICAgICByZXNvbHZlKGdhcGkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0dvb2dsZSBBUEkgSW5pdGlhbGlzYXRpb24gZXJyb3InKSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuaWQgPSAnZ29vZ2xlLWpzc2RrJztcbiAgICAgICAgc2NyaXB0LnNyYyA9IEdPT0dMRV9BUEkgKyAnP29ubG9hZD1vbkdvb2dsZUxvYWQnO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3NvY2lhbC9nb29nbGUtaW5pdC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IEZCX0FQSSA9ICdodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L3J1X1JVL3Nkay5qcyN4ZmJtbD0xJnZlcnNpb249djIuMTEmYXBwSWQ9MTM5NDI3NjUzMzA0NjIxJztcbmV4cG9ydCBmdW5jdGlvbiBGQkluaXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgRkIgPSB3aW5kb3cuRkI7XG4gICAgICAgICAgICBpZiAoRkIpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShGQik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignRkIgSW5pdGlhbGlzYXRpb24gZXJyb3InKSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuaWQgPSAnZmFjZWJvb2stanNzZGsnO1xuICAgICAgICBzY3JpcHQuc3JjID0gRkJfQVBJO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3NvY2lhbC9mYi1pbml0LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNvbnN0IFZLX1NPQ0lBTF9JRCA9ICcxNDkwMTEyMDYnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvZW52ZXJvbWVudHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWS0luaXQgfSBmcm9tICcuL3ZrLWluaXQnO1xuaW1wb3J0IHsgVHdpdHRlckluaXQgfSBmcm9tICcuL3R3aXR0ZXItaW5pdCc7XG5pbXBvcnQgeyBHb29nbGVJbml0IH0gZnJvbSAnLi9nb29nbGUtaW5pdCc7XG5pbXBvcnQgeyBGQkluaXQgfSBmcm9tICcuL2ZiLWluaXQnO1xuaW1wb3J0IHsgVktfU09DSUFMX0lEIH0gZnJvbSAnLi9lbnZlcm9tZW50cyc7XG5leHBvcnQgY2xhc3MgU29jaWFsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZCkge1xuICAgICAgICB0aGlzLl92ayA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fdHdpdHRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZ29vZ2xlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9mYiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc1NlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fdmsgPSBWS0luaXQoKTtcbiAgICAgICAgdGhpcy5fdHdpdHRlciA9IFR3aXR0ZXJJbml0KCk7XG4gICAgICAgIHRoaXMuX2dvb2dsZSA9IEdvb2dsZUluaXQoKTtcbiAgICAgICAgdGhpcy5fZmIgPSBGQkluaXQoKTtcbiAgICB9XG4gICAgdmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ayB8fCBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG4gICAgdHdpdHRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R3aXR0ZXIgfHwgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGdvb2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dvb2dsZSB8fCBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG4gICAgZmIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYiB8fCBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG59XG5Tb2NpYWxTZXJ2aWNlLlZLX1NPQ0lBTF9JRCA9IFZLX1NPQ0lBTF9JRDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvc29jaWFsL3NvY2lhbC5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9zb2NpYWwuc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3NvY2lhbC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbWVzc2FnZSc7XG5jb25zdCBHT09HTEVfQVBJX0tFWSA9ICdBSXphU3lCMmdZODZob210LXV2cURRclJBMHJ1OGdzTmtQS1JkWmMnO1xuY29uc3QgWU9VVFVCRV9EQVRBX1VSTCA9IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcz9pZD17e0lEU319JmtleT0ke0dPT0dMRV9BUElfS0VZfSZwYXJ0PXNuaXBwZXQsc3RhdGlzdGljcyxjb250ZW50RGV0YWlsc2A7XG5jb25zdCBZT1VUVUJFX1VSTF9SRUdFWFAgPSAvKD86eW91dHViZVxcLmNvbVxcL1xcUyooPzooPzpcXC9lKD86bWJlZCkpP1xcL3x3YXRjaFxcLz9cXD8oPzpcXFMqPyY/dlxcPSkpfHlvdXR1XFwuYmVcXC8pKFthLXpBLVowLTlfLV17NiwxMX0pLztcbmV4cG9ydCBjbGFzcyBZb3VUdWJlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoX2h0dHAsIF9tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IF9tZXNzYWdlO1xuICAgIH1cbiAgICBzdGF0aWMgcGFyc2VWaWRlb0lkKHRleHQpIHtcbiAgICAgICAgdGV4dCA9IHRleHQudHJpbSgpO1xuICAgICAgICBjb25zdCBpZE1hdGNoID0gL15bYS16QS1aMC05Xy1dezYsMTF9JC8uZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKGlkTWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gaWRNYXRjaFswXTtcbiAgICAgICAgY29uc3QgdXJsTWF0Y2ggPSBZT1VUVUJFX1VSTF9SRUdFWFAuZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKHVybE1hdGNoKVxuICAgICAgICAgICAgcmV0dXJuIHVybE1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgZm9ybWF0RHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLnJlcGxhY2UoL1teMC05XSsvZywgJzonKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyheOit8OiskKS9nLCAnJyk7XG4gICAgfVxuICAgIGdldFZpZGVvRGF0YShpZHMgPSBbXSkge1xuICAgICAgICBpZiAoaWRzLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobmV3IEFycmF5KCkpO1xuICAgICAgICBjb25zdCBxdWVyeSA9IFlPVVRVQkVfREFUQV9VUkwucmVwbGFjZSgvXFx7XFx7XFxzKklEU1xccypcXH1cXH0vLCBpZHMuam9pbignLCcpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHF1ZXJ5KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZShgWW91VHViZTogJHtTdHJpbmcoZXJyb3IpfWApO1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobnVsbCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbSAmJiBpdGVtLml0ZW1zIHx8IG51bGwpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gQXJyYXkuaXNBcnJheShpdGVtKSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMveW91dHViZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IE1FVFJJS0FfSUQgPSA0NzAyNDYzNztcbmNvbnN0IE1FVFJJS0FfQVBJID0gJ2h0dHBzOi8vbWMueWFuZGV4LnJ1L21ldHJpa2Evd2F0Y2guanMnO1xuZXhwb3J0IGZ1bmN0aW9uIE1ldHJpa2FJbml0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdpbmRvdy55YW5kZXhfbWV0cmlrYV9jYWxsYmFja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1tgeWFDb3VudGVyJHtNRVRSSUtBX0lEfWBdID0gbmV3IHdpbmRvdy5ZYS5NZXRyaWthKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IE1FVFJJS0FfSUQsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrbWFwOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFja0xpbmtzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhY2N1cmF0ZVRyYWNrQm91bmNlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykgeyB9XG4gICAgICAgICAgICBjb25zdCBZQSA9IHdpbmRvd1tgeWFDb3VudGVyJHtNRVRSSUtBX0lEfWBdO1xuICAgICAgICAgICAgaWYgKFlBKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoWUEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1lhbmRleCBNZXRyaWthIEluaXRpYWxpc2F0aW9uIGVycm9yJykpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LmlkID0gJ21ldHJpa2EtanNzZGsnO1xuICAgICAgICBzY3JpcHQuc3JjID0gTUVUUklLQV9BUEk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvbWV0cmlrYS9tZXRyaWthLWluaXQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNZXRyaWthSW5pdCB9IGZyb20gJy4vbWV0cmlrYS1pbml0JztcbmV4cG9ydCBjbGFzcyBNZXRyaWthU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZCkge1xuICAgICAgICB0aGlzLl95YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc1NlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5feWEgPSBNZXRyaWthSW5pdCgpO1xuICAgIH1cbiAgICB5YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3lhIHx8IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgICBhc3luYyBoaXQodXJsLCByZWZlcmVyKSB7XG4gICAgICAgIGNvbnN0IHlhID0gYXdhaXQgdGhpcy55YSgpO1xuICAgICAgICBpZiAoIXlhKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB5YS5oaXQodXJsKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL21ldHJpa2EvbWV0cmlrYS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9tZXRyaWthLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9tZXRyaWthL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0YSc7XG5leHBvcnQgKiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NvY2lhbCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuZXhwb3J0ICogZnJvbSAnLi95b3V0dWJlJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmlrYSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5leHBvcnQgY2xhc3MgQXV0aERpYWxvZ0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZGlhbG9nUmVmLCBmYiwgdXNlcikge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZiA9IGRpYWxvZ1JlZjtcbiAgICAgICAgdGhpcy5mYiA9IGZiO1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dGhGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIG9uU3VibWl0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYXV0aEZvcm0udmFsaWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudXNlci5sb2dpbih0aGlzLmF1dGhGb3JtLnZhbHVlKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KVxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aEZvcm0ucGF0Y2hWYWx1ZSh7IHBhc3N3b3JkOiAnJyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLWRpYWxvZy5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2F1dGgvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2N1cnJlbmNpZXMtcmliYm9uL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgRm9sbG93Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9mb2xsb3cvZm9sbG93LmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vZm9sbG93LmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZm9sbG93L2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29jaWFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9zb2NpYWxTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NvY2lhbFNlcnZpY2UgPSBfc29jaWFsU2VydmljZTtcbiAgICB9XG4gICAgYWRkVktXaWRnZXQoKSB7XG4gICAgICAgIHRoaXMuX3NvY2lhbFNlcnZpY2UudmsoKS50aGVuKFZLID0+IHtcbiAgICAgICAgICAgIGlmICghVkspXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgVksuV2lkZ2V0cy5Hcm91cCgndmtfZ3JvdXBfdmlkZ2V0Jywge1xuICAgICAgICAgICAgICAgIG1vZGU6IDEsXG4gICAgICAgICAgICAgICAgbm9fY292ZXI6IDEsXG4gICAgICAgICAgICAgICAgY29sb3IyOiAnMjQyOTJlJyxcbiAgICAgICAgICAgIH0sIFNvY2lhbFNlcnZpY2UuVktfU09DSUFMX0lEKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZFR3aXR0ZXJXaWRnZXQoKSB7XG4gICAgICAgIHRoaXMuX3NvY2lhbFNlcnZpY2UudHdpdHRlcigpLnRoZW4odHcgPT4geyB9KTtcbiAgICB9XG4gICAgYWRkWW91VHViZVdpZGdldCgpIHtcbiAgICAgICAgdGhpcy5fc29jaWFsU2VydmljZS5nb29nbGUoKS50aGVuKGdhID0+IHsgfSk7XG4gICAgfVxuICAgIGFkZEZCV2lkZ2V0KCkge1xuICAgICAgICB0aGlzLl9zb2NpYWxTZXJ2aWNlLmZiKCkudGhlbihmYiA9PiB7IH0pO1xuICAgIH1cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkVktXaWRnZXQoKTtcbiAgICAgICAgdGhpcy5hZGRUd2l0dGVyV2lkZ2V0KCk7XG4gICAgICAgIHRoaXMuYWRkWW91VHViZVdpZGdldCgpO1xuICAgICAgICB0aGlzLmFkZEZCV2lkZ2V0KCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9mb290ZXIuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgIHRoaXMubmF2QmFyVmlzaWJpbGl0eSA9IGZhbHNlO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgTGF5b3V0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkLCBfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgIHRoaXMuaXNTZXJ2ZXIgPSBpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpO1xuICAgICAgICB0aGlzLl9yb3V0ZXJcbiAgICAgICAgICAgIC5ldmVudHNcbiAgICAgICAgICAgIC5maWx0ZXIoZXZlbnQgPT4gKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2VydmVyKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnRpdGxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9hZGVyU2VydmljZSwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihfbG9hZGVyU2VydmljZSkge1xuICAgICAgICB0aGlzLl9sb2FkZXJTZXJ2aWNlID0gX2xvYWRlclNlcnZpY2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2xvYWRlclNlcnZpY2VcbiAgICAgICAgICAgIC5sb2FkZXJTdGF0ZVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoc3RhdGUpID0+IHRoaXMuc2hvdyA9IHN0YXRlLnNob3cpO1xuICAgIH1cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2xvYWRlci5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xvYWRlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgTm9Db250ZW50Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9uby1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFBhZ2UxMDFDb21wb25lbnQge1xuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLTEwMS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlLCBtYWtlU3RhdGVLZXkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCB7IEFQSVNlcnZpY2UsIE1ldGFTZXJ2aWNlLCBMb2FkZXJTZXJ2aWNlLCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzJztcbmNvbnN0IEFQSV9QVUJMSUNBVElPTlMgPSAncHVibGljYXRpb25zJztcbmNvbnN0IElURU1fS0VZID0gbWFrZVN0YXRlS2V5KCdwYWdlLWFydGljbGUtaXRlbScpO1xuY29uc3QgUFVCTElDQVRJT05TX0tFWSA9IG1ha2VTdGF0ZUtleSgncGFnZS1hcnRpY2xlLXB1YmxpY2F0aW9ucycpO1xuZXhwb3J0IGNsYXNzIFBhZ2VBcnRpY2xlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkLCBfdHN0YXRlLCBfcm91dGUsIF9hcGksIF9tZXRhLCBfbG9hZGVyU2VydmljZSkge1xuICAgICAgICB0aGlzLl90c3RhdGUgPSBfdHN0YXRlO1xuICAgICAgICB0aGlzLl9yb3V0ZSA9IF9yb3V0ZTtcbiAgICAgICAgdGhpcy5fYXBpID0gX2FwaTtcbiAgICAgICAgdGhpcy5fbWV0YSA9IF9tZXRhO1xuICAgICAgICB0aGlzLl9sb2FkZXJTZXJ2aWNlID0gX2xvYWRlclNlcnZpY2U7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2VydmVyID0gaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKTtcbiAgICAgICAgX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEocGFyYW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldE1ldGFUYWdzKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5fbWV0YS5zZXRNZXRhVGFncyh7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dUaXRsZTogaXRlbS5vZ1RpdGxlLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogaXRlbS5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dJbWFnZTogaXRlbS5vZ0ltYWdlIHx8IGl0ZW0uaW1hZ2UgfHwgdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0RGF0YShwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5fbG9hZGVyU2VydmljZS5zaG93KCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBTdHJpbmcocGFyYW1zWydkYXRlJ10pLnRyaW0oKTtcbiAgICAgICAgY29uc3QgdXJsID0gU3RyaW5nKHBhcmFtc1sndXJsJ10pLnRyaW0oKTtcbiAgICAgICAgaWYgKHRoaXMuX3RzdGF0ZS5oYXNLZXkoSVRFTV9LRVkpKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fdHN0YXRlLmdldChJVEVNX0tFWSwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBPYnNlcnZhYmxlLm9mKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5fbG9hZGVyU2VydmljZS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLl90c3RhdGUucmVtb3ZlKElURU1fS0VZKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX2FwaVxuICAgICAgICAgICAgICAgIC5nZXQoYC8ke0FQSV9QVUJMSUNBVElPTlN9LyR7ZGF0ZX0vJHt1cmx9YClcbiAgICAgICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWV0YVRhZ3MoaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RzdGF0ZS5zZXQoSVRFTV9LRVksIGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlclNlcnZpY2UuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RzdGF0ZS5oYXNLZXkoUFVCTElDQVRJT05TX0tFWSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fdHN0YXRlLmdldChQVUJMSUNBVElPTlNfS0VZLCBuZXcgQXJyYXkoKSk7XG4gICAgICAgICAgICB0aGlzLnB1YmxpY2F0aW9ucyA9IE9ic2VydmFibGUub2YoaXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5fdHN0YXRlLnJlbW92ZShQVUJMSUNBVElPTlNfS0VZKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHVibGljYXRpb25zID0gdGhpcy5fYXBpXG4gICAgICAgICAgICAgICAgLmdldChgLyR7QVBJX1BVQkxJQ0FUSU9OU30/bGltaXQ9MTJgKVxuICAgICAgICAgICAgICAgIC5tYXAoaXRlbXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VydmVyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90c3RhdGUuc2V0KFBVQkxJQ0FUSU9OU19LRVksIGl0ZW1zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2FydGljbGUvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUN1cnJlbmNpZXNDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VFdmVudHNDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1ldmVudHMuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlRXhjaGFuZ2VzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUlDT0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlSUNPSXRlbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLWljby5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdlLWljby1pdGVtLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlLCBtYWtlU3RhdGVLZXkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2NvbmNhdCc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlLCBNZXRhU2VydmljZSwgTG9hZGVyU2VydmljZSwgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5jb25zdCBBUElfUFVCTElDQVRJT05TID0gJ3B1YmxpY2F0aW9ucyc7XG5jb25zdCBQVUJMSUNBVElPTlNfV0VJR0hUXzBfS0VZID0gbWFrZVN0YXRlS2V5KCdwYWdlLW1haW4tcHVibGljYXRpb25zX3dlaWdodF8wJyk7XG5jb25zdCBQVUJMSUNBVElPTlNfV0VJR0hUXzEyX0tFWSA9IG1ha2VTdGF0ZUtleSgncGFnZS1tYWluLXB1YmxpY2F0aW9uc193ZWlnaHRfMTInKTtcbmV4cG9ydCBjbGFzcyBQYWdlTWFpbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZCwgX3RzdGF0ZSwgX2FwaSwgX21ldGEsIF9sb2FkZXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3RzdGF0ZSA9IF90c3RhdGU7XG4gICAgICAgIHRoaXMuX2FwaSA9IF9hcGk7XG4gICAgICAgIHRoaXMuX21ldGEgPSBfbWV0YTtcbiAgICAgICAgdGhpcy5fbG9hZGVyU2VydmljZSA9IF9sb2FkZXJTZXJ2aWNlO1xuICAgICAgICB0aGlzLmlzU2VydmVyID0gaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKTtcbiAgICB9XG4gICAgc2V0TWV0YVRhZ3MoKSB7XG4gICAgICAgIHRoaXMuX21ldGEuc2V0TWV0YVRhZ3MoKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2xvYWRlclNlcnZpY2Uuc2hvdygpO1xuICAgICAgICBpZiAodGhpcy5fdHN0YXRlLmhhc0tleShQVUJMSUNBVElPTlNfV0VJR0hUXzBfS0VZKSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl90c3RhdGUuZ2V0KFBVQkxJQ0FUSU9OU19XRUlHSFRfMF9LRVksIG5ldyBBcnJheSgpKTtcbiAgICAgICAgICAgIHRoaXMucHVibGljYXRpb25zX3dlaWdodF8wID0gT2JzZXJ2YWJsZS5vZihpdGVtcyk7XG4gICAgICAgICAgICB0aGlzLl90c3RhdGUucmVtb3ZlKFBVQkxJQ0FUSU9OU19XRUlHSFRfMF9LRVkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdWJsaWNhdGlvbnNfd2VpZ2h0XzAgPSB0aGlzLl9hcGlcbiAgICAgICAgICAgICAgICAuZ2V0KGAvJHtBUElfUFVCTElDQVRJT05TfT93ZWlnaHQ9MCZsaW1pdD0zMGApXG4gICAgICAgICAgICAgICAgLm1hcChpdGVtcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RzdGF0ZS5zZXQoUFVCTElDQVRJT05TX1dFSUdIVF8wX0tFWSwgaXRlbXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90c3RhdGUuaGFzS2V5KFBVQkxJQ0FUSU9OU19XRUlHSFRfMTJfS0VZKSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl90c3RhdGUuZ2V0KFBVQkxJQ0FUSU9OU19XRUlHSFRfMTJfS0VZLCBuZXcgQXJyYXkoKSk7XG4gICAgICAgICAgICB0aGlzLnB1YmxpY2F0aW9uc193ZWlnaHRfMTIgPSBPYnNlcnZhYmxlLm9mKGl0ZW1zKTtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlclNlcnZpY2UuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5fdHN0YXRlLnJlbW92ZShQVUJMSUNBVElPTlNfV0VJR0hUXzEyX0tFWSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1YmxpY2F0aW9uc193ZWlnaHRfMTIgPSB0aGlzLl9hcGkuZ2V0KGAvJHtBUElfUFVCTElDQVRJT05TfT93ZWlnaHQ9MSwyJmxpbWl0PTMwYClcbiAgICAgICAgICAgICAgICAubWFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHN0YXRlLnNldChQVUJMSUNBVElPTlNfV0VJR0hUXzEyX0tFWSwgaXRlbXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlclNlcnZpY2UuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVibGljYXRpb25zID0gT2JzZXJ2YWJsZS5jb25jYXQodGhpcy5wdWJsaWNhdGlvbnNfd2VpZ2h0XzAsIHRoaXMucHVibGljYXRpb25zX3dlaWdodF8xMilcbiAgICAgICAgICAgIC5tYXAoaXRlbXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbXMpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbWV0YS5zZXRNZXRhVGFncygpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UtbWFpbi5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21haW4vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZU1hcmtldHNDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlTWFya2V0c0l0ZW1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLW1hcmtldHMuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgUGFnZVNlY3Rpb25Db21wb25lbnQge1xuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuLzEwMSc7XG5leHBvcnQgKiBmcm9tICcuL2FydGljbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jdXJyZW5jaWVzJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZXhjaGFuZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vaWNvJztcbmV4cG9ydCAqIGZyb20gJy4vbWFpbic7XG5leHBvcnQgKiBmcm9tICcuL21hcmtldHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgUHViQ2FyZENvbXBvbmVudCB7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wdWItY2FyZC5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3B1Yi1jYXJkL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjbGFzcyBQdWJMaW5lQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3B1Yi1saW5lLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcHViLWxpbmUvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgU0hBUkVfVVJMX0JBU0UgPSAnaHR0cHM6Ly9iaXRqb3VybmFsLmlvLyc7XG5jb25zdCBGQl9CQVNFID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PXt7VVJMfX0nO1xuY29uc3QgVFdJVFRFUl9CQVNFID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaG9tZT9zdGF0dXM9e3tVUkx9fSc7XG5jb25zdCBWS19CQVNFID0gJ2h0dHBzOi8vdmsuY29tL3NoYXJlLnBocD91cmw9e3tVUkx9fSc7XG5jb25zdCBURUxFR1JBTV9CQVNFID0gJ2h0dHBzOi8vdC5tZS9zaGFyZS91cmw/dXJsPXt7VVJMfX0nO1xuY29uc3QgV0hBVFNBUFBfQkFTRSA9ICd3aGF0c2FwcDovL3NlbmQ/dGV4dD17e1VSTH19JztcbmNvbnN0IFZJQkVSX0JBU0UgPSAndmliZXI6Ly9mb3J3YXJkP3RleHQ9e3tVUkx9fSc7XG5jb25zdCBHT09HTEVfQkFTRSA9ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9e3tVUkx9fSc7XG5leHBvcnQgY2xhc3MgU2hhcmVDb21wb25lbnQge1xuICAgIGdldCBmYlVybCgpIHtcbiAgICAgICAgcmV0dXJuIEZCX0JBU0UucmVwbGFjZSgvXFx7XFx7XFxzKlVSTFxccypcXH1cXH0vLCB0aGlzLnVybCk7XG4gICAgfVxuICAgIGdldCB0d2l0dGVyVXJsKCkge1xuICAgICAgICByZXR1cm4gVFdJVFRFUl9CQVNFLnJlcGxhY2UoL1xce1xce1xccypVUkxcXHMqXFx9XFx9LywgdGhpcy51cmwpO1xuICAgIH1cbiAgICBnZXQgdmtVcmwoKSB7XG4gICAgICAgIHJldHVybiBWS19CQVNFLnJlcGxhY2UoL1xce1xce1xccypVUkxcXHMqXFx9XFx9LywgdGhpcy51cmwpO1xuICAgIH1cbiAgICBnZXQgdGVsZWdyYW1VcmwoKSB7XG4gICAgICAgIHJldHVybiBURUxFR1JBTV9CQVNFLnJlcGxhY2UoL1xce1xce1xccypVUkxcXHMqXFx9XFx9LywgdGhpcy51cmwpO1xuICAgIH1cbiAgICBnZXQgd2hhdHNhcHBVcmwoKSB7XG4gICAgICAgIHJldHVybiBXSEFUU0FQUF9CQVNFLnJlcGxhY2UoL1xce1xce1xccypVUkxcXHMqXFx9XFx9LywgdGhpcy51cmwpO1xuICAgIH1cbiAgICBnZXQgdmliZXJVcmwoKSB7XG4gICAgICAgIHJldHVybiBWSUJFUl9CQVNFLnJlcGxhY2UoL1xce1xce1xccypVUkxcXHMqXFx9XFx9LywgdGhpcy51cmwpO1xuICAgIH1cbiAgICBnZXQgZ29vZ2xlVXJsKCkge1xuICAgICAgICByZXR1cm4gR09PR0xFX0JBU0UucmVwbGFjZSgvXFx7XFx7XFxzKlVSTFxccypcXH1cXH0vLCB0aGlzLnVybCk7XG4gICAgfVxuICAgIGdldCB1cmwoKSB7XG4gICAgICAgIGxldCB1cmwgPSBBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZS5qb2luKCcvJykgOiBTdHJpbmcodGhpcy52YWx1ZSk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gL14oPzpbXFwvXFxzXSspPyguKikvLmV4ZWModXJsKTtcbiAgICAgICAgdXJsID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICAgIGlmICghL15odHRwL2kudGVzdCh1cmwpKVxuICAgICAgICAgICAgdXJsID0gU0hBUkVfVVJMX0JBU0UgKyAnLycgKyB1cmw7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvc2hhcmUvc2hhcmUuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9zaGFyZS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3NoYXJlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZUFsbCc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlLCBZb3VUdWJlU2VydmljZSwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5jb25zdCBBUElfQkFTRSA9ICd2aWRlbyc7XG5leHBvcnQgY2xhc3MgVmlkZW9SaWJib25Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIsIF9hcGlTZXJ2aWNlLCBfeW91VHViZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZSA9IF9hcGlTZXJ2aWNlO1xuICAgICAgICB0aGlzLl95b3VUdWJlU2VydmljZSA9IF95b3VUdWJlU2VydmljZTtcbiAgICB9XG4gICAgY3JlYXRlVmlkZW9SaWJib25JdGVtKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JyArIGl0ZW0uaWQsXG4gICAgICAgICAgICB0aHVtYjogaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmwsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShpdGVtLnNuaXBwZXQucHVibGlzaGVkQXQpLFxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uc25pcHBldC50aXRsZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBZb3VUdWJlU2VydmljZS5mb3JtYXREdXJhdGlvbihpdGVtLmNvbnRlbnREZXRhaWxzLmR1cmF0aW9uKSxcbiAgICAgICAgICAgIHZpZXc6IHBhcnNlSW50KGl0ZW0uc3RhdGlzdGljcy52aWV3Q291bnQpIHx8IDAsXG4gICAgICAgICAgICBsaWtlOiBwYXJzZUludChpdGVtLnN0YXRpc3RpY3MubGlrZUNvdW50KSB8fCAwLFxuICAgICAgICAgICAgZGlzbGlrZTogcGFyc2VJbnQoaXRlbS5zdGF0aXN0aWNzLmRpc2xpa2VDb3VudCkgfHwgMCxcbiAgICAgICAgICAgIGNvbW1lbnQ6IHBhcnNlSW50KGl0ZW0uc3RhdGlzdGljcy5jb21tZW50Q291bnQpIHx8IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5fYXBpU2VydmljZVxuICAgICAgICAgICAgLmdldChgLyR7QVBJX0JBU0V9YClcbiAgICAgICAgICAgIC5tYXAoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbmFibGUpKVxuICAgICAgICAgICAgLm1hcChpdGVtcyA9PiBpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkKSlcbiAgICAgICAgICAgIC5tYXAoaXRlbXMgPT4gdGhpcy5feW91VHViZVNlcnZpY2UuZ2V0VmlkZW9EYXRhKGl0ZW1zKSlcbiAgICAgICAgICAgIC5tZXJnZUFsbCgpXG4gICAgICAgICAgICAubWFwKGl0ZW1zID0+IGl0ZW1zLm1hcChpdGVtID0+IHRoaXMuY3JlYXRlVmlkZW9SaWJib25JdGVtKGl0ZW0pKSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi92aWRlby1yaWJib24uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy92aWRlby1yaWJib24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FydGljbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoJztcbmV4cG9ydCAqIGZyb20gJy4vY3VycmVuY2llcy1yaWJib24nO1xuZXhwb3J0ICogZnJvbSAnLi9mb2xsb3cnO1xuZXhwb3J0ICogZnJvbSAnLi9mb290ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9uby1jb250ZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWItY2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL3B1Yi1saW5lJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmUnO1xuZXhwb3J0ICogZnJvbSAnLi92aWRlby1yaWJib24nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgQXJ0aWNsZUNvbXBvbmVudCwgQXV0aERpYWxvZ0NvbXBvbmVudCwgQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQsIEZvbGxvd0NvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIExvYWRlckNvbXBvbmVudCwgTm9Db250ZW50Q29tcG9uZW50LCBQYWdlMTAxQ29tcG9uZW50LCBQYWdlQXJ0aWNsZUNvbXBvbmVudCwgUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIFBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCwgUGFnZUV2ZW50c0NvbXBvbmVudCwgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsIFBhZ2VFeGNoYW5nZXNDb21wb25lbnQsIFBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50LCBQYWdlSUNPQ29tcG9uZW50LCBQYWdlSUNPSXRlbUNvbXBvbmVudCwgUGFnZU1haW5Db21wb25lbnQsIFBhZ2VNYXJrZXRzQ29tcG9uZW50LCBQYWdlTWFya2V0c0l0ZW1Db21wb25lbnQsIFBhZ2VTZWN0aW9uQ29tcG9uZW50LCBQdWJDYXJkQ29tcG9uZW50LCBQdWJMaW5lQ29tcG9uZW50LCBTaGFyZUNvbXBvbmVudCwgVmlkZW9SaWJib25Db21wb25lbnQsIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmV4cG9ydCBjb25zdCBDT01QT05FTlRTID0gW1xuICAgIEFydGljbGVDb21wb25lbnQsXG4gICAgQXV0aERpYWxvZ0NvbXBvbmVudCxcbiAgICBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCxcbiAgICBGb2xsb3dDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgTm9Db250ZW50Q29tcG9uZW50LFxuICAgIFBhZ2UxMDFDb21wb25lbnQsXG4gICAgUGFnZUFydGljbGVDb21wb25lbnQsXG4gICAgUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsXG4gICAgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VFdmVudHNDb21wb25lbnQsXG4gICAgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsXG4gICAgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCxcbiAgICBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCxcbiAgICBQYWdlSUNPQ29tcG9uZW50LFxuICAgIFBhZ2VJQ09JdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VNYWluQ29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZXRzQ29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCxcbiAgICBQYWdlU2VjdGlvbkNvbXBvbmVudCxcbiAgICBQdWJDYXJkQ29tcG9uZW50LFxuICAgIFB1YkxpbmVDb21wb25lbnQsXG4gICAgU2hhcmVDb21wb25lbnQsXG4gICAgVmlkZW9SaWJib25Db21wb25lbnQsXG5dO1xuZXhwb3J0IGNvbnN0IEVOVFJZX0NPTVBPTkVOVFMgPSBbXG4gICAgQXV0aERpYWxvZ0NvbXBvbmVudCxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC5jb21wb25lbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlLCBOb3RpZmljYXRpb25TZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vc2VydmljZXMnO1xuY29uc3QgybUwID0gTm90aWZpY2F0aW9uU2VydmljZUZhY3Rvcnk7XG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihub3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UuaW5pdE5vdGlmaWNhdGlvbigpO1xuICAgIH1cbn1cbmV4cG9ydCB7IMm1MCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAubW9kdWxlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5iai1wYWdlLW1haW5fX3dyYXBwZXJ7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTttYXJnaW46MCBhdXRvO3BhZGRpbmc6dmFyKC0taW5kZW50LWRvdWJsZSkgMH1AbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7LmJqLXBhZ2UtbWFpbl9fd3JhcHBlcntwYWRkaW5nOnZhcigtLWluZGVudC1kb3VibGUpIHZhcigtLWluZGVudC1iYXNlKX19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuYmotcGFnZS1tYWluX193cmFwcGVye3BhZGRpbmc6dmFyKC0taW5kZW50LWRvdWJsZSl9fS5iai1wYWdlLW1haW5fX3Jvd3t3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpzdHJldGNofS5iai1wYWdlLW1haW5fX2NvbHtmbGV4OjEgMSBhdXRvfS5iai1wYWdlLW1haW5fX2FzaWRle3dpZHRoOnZhcigtLWFzaWRlLXdpZHRoKTtmbGV4OjAgMCB2YXIoLS1hc2lkZS13aWR0aCk7bWFyZ2luLWxlZnQ6dmFyKC0taW5kZW50LWRvdWJsZSk7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Om5vbmV9QG1lZGlhIChtaW4td2lkdGg6NzAwcHgpey5iai1wYWdlLW1haW5fX2FzaWRle2Rpc3BsYXk6ZmxleH19LmJqLXBhZ2UtbWFpbl9fY2FyZHttYXJnaW4tdG9wOnZhcigtLWluZGVudC1kb3VibGUpfS5iai1wYWdlLW1haW5fX2NhcmQ6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDowfUBzdXBwb3J0cyAoZGlzcGxheTpncmlkKXtAbWVkaWEgKG1pbi13aWR0aDoxMDAwcHgpey5iai1wYWdlLW1haW5fX2NhcmR7bWFyZ2luLXRvcDowfS5iai1wYWdlLW1haW5fX2NhcmQtLXdpZGV7Z3JpZC1jb2x1bW4tZW5kOnNwYW4gMn0uYmotcGFnZS1tYWluX19jb2wtLWdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dyaWQtY29sdW1uLWdhcDp2YXIoLS1pbmRlbnQtZG91YmxlKTtncmlkLXJvdy1nYXA6dmFyKC0taW5kZW50LWRvdWJsZSk7Z3JpZC1hdXRvLWZsb3c6ZGVuc2V9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmJqLXBhZ2UtbWFpbl9fY29sLS1ncmlke2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmcn19fVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLmJqLXB1Yi1jYXJke2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDttYXgtd2lkdGg6MTAwJTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTpub25lO2NvbG9yOnZhcigtLWNvbG9yLW1haW4pfS5iai1wdWItY2FyZF9fZmlndXJle2ZsZXg6MCAwIDEwMCU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OmNhbGMoMTAwdncvMS41KTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MDtwYWRkaW5nOjA7YmFja2dyb3VuZDojZjZmNmY2O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59QG1lZGlhIChtaW4td2lkdGg6NjAwcHgpey5iai1wdWItY2FyZF9fZmlndXJle21pbi1oZWlnaHQ6MjUwcHh9fS5iai1wdWItY2FyZF9fcGljdHVyZXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZjlmOWY5fS5iai1wdWItY2FyZF9fcGljdHVyZSwuYmotcHViLWNhcmRfX3BpY3R1cmUgaW1nLC5iai1wdWItY2FyZF9fcm93e2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCV9LmJqLXB1Yi1jYXJkX19waWN0dXJlIGltZ3ttaW4td2lkdGg6MTAwJTttaW4taGVpZ2h0OjEwMCU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzIGxpbmVhcjtvYmplY3QtZml0OmNvdmVyO3Bvc2l0aW9uOmFic29sdXRlfS5iai1wdWItY2FyZDpob3ZlciAuYmotcHViLWNhcmRfX3BpY3R1cmUgaW1ne3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxLjA1KX0uYmotcHViLWNhcmRfX3BpY3R1cmU6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMzYsNDEsNDYsMCkgMCUscmdiYSgzNiw0MSw0NiwuMSkgMzQlLHJnYmEoMzYsNDEsNDYsLjcpIDEwMCUpfS5iai1wdWItY2FyZF9fcm93e3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6dmFyKC0taW5kZW50LWJhc2UpIDB9LmJqLXB1Yi1jYXJkX19oMnttYXJnaW46MCAwIC0uMWVtO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEuNXJlbTtsaW5lLWhlaWdodDoxLjM1O2NvbG9yOiNmZmY7dGV4dC1zaGFkb3c6MCAwIDJweCByZ2JhKDM2LDQxLDQ2LC43KX0uYmotcHViLWNhcmRfX2RhdGV0aW1lLC5iai1wdWItY2FyZF9faDEsLmJqLXB1Yi1jYXJkX19oMntkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjAgdmFyKC0taW5kZW50LWJhc2UpfS5iai1wdWItY2FyZF9faDF7ZmxleDowIDAgMTAwJTt3aWR0aDoxMDAlO21hcmdpbjowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEuMTdyZW07bGluZS1oZWlnaHQ6MS4xNTttYXJnaW4tdG9wOnZhcigtLWluZGVudC1oYWxmKX0uYmotcHViLWNhcmRfX2RhdGV0aW1le21hcmdpbi10b3A6dmFyKC0taW5kZW50LWJhc2UpO2NvbG9yOnZhcigtLWNvbG9yLWdyYXkpO2ZvbnQtc2l6ZToxM3B4fS5iai1wdWItY2FyZF9fZGF0ZXRpbWUgaXttYXJnaW4tcmlnaHQ6LjVlbX1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcHViX2NhcmQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3BpcGVzX2ltYWdlX2ltYWdlLnBpcGUsXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX2FuZ3VsYXJfY29tbW9uLF9wdWJfY2FyZC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcHViX2NhcmQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3BpcGVzX2ltYWdlX2ltYWdlLnBpcGUsXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX2FuZ3VsYXJfY29tbW9uLF9wdWJfY2FyZC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcHViLWNhcmQuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL3BpcGVzL2ltYWdlL2ltYWdlLnBpcGVcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9waXBlcy90aW1lc3RhbXAvdGltZXN0YW1wXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi9wdWItY2FyZC5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUHViQ2FyZENvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUHViQ2FyZENvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QdWJDYXJkQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUHViQ2FyZENvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1B1YkNhcmRDb21wb25lbnQgfTtcbmZ1bmN0aW9uIFZpZXdfUHViQ2FyZENvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJmaWdjYXB0aW9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkX19yb3cgYmotcHViLWNhcmRfX3Jvdy0tZGFya1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZF9faDJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDIsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMCA9IF9jby52YWx1ZS5iaWdUaXRsZTsgX2NrKF92LCAyLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUHViQ2FyZENvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbaTEuybVwaWQoMCwgaTIuSW1hZ2VQaXBlLCBbXSksIGkxLsm1cGlkKDAsIGkzLlRpbWVzdGFtcFBpcGUsIFtdKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgNiwgXCJmaWd1cmVcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWNhcmRfX2ZpZ3VyZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMiwgXCJwaWN0dXJlXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkX19waWN0dXJlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0LCAwLCBudWxsLCBudWxsLCAxLCBcImltZ1wiLCBbXSwgW1s4LCBcInNyY1wiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVwcGQoNSwgMSksIChfbCgpKCksIGkxLsm1ZWxkKDYsIDAsIG51bGwsIG51bGwsIDAsIFwiZmlnY2FwdGlvblwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZF9fcm93XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMSwgbnVsbCwgVmlld19QdWJDYXJkQ29tcG9uZW50XzEpKSwgaTEuybVkaWQoOCwgMTYzODQsIG51bGwsIDAsIGk0Lk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoOSwgMCwgbnVsbCwgbnVsbCwgNSwgXCJ0aW1lXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkX19kYXRldGltZVwiXV0sIFtbMSwgXCJkYXRldGltZVwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVwcGQoMTAsIDEpLCAoX2woKSgpLCBpMS7JtWVsZCgxMSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJpXCIsIFtbXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIl0sIFtcImNsYXNzXCIsIFwiZmEgZmEtY2xvY2stb1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMTIsIDAsIG51bGwsIG51bGwsIDIsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgxMywgbnVsbCwgW1wiXCIsIFwiXCJdKSksIGkxLsm1cHBkKDE0LCAyKSwgKF9sKCkoKSwgaTEuybVlbGQoMTUsIDAsIG51bGwsIG51bGwsIDEsIFwiaDFcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWNhcmRfX2gxXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgxNiwgbnVsbCwgW1wiXCIsIFwiXCJdKSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8xID0gISFfY28udmFsdWUuYmlnVGl0bGU7IF9jayhfdiwgOCwgMCwgY3VyclZhbF8xKTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1dW52KF92LCA0LCAwLCBfY2soX3YsIDUsIDAsIGkxLsm1bm92KF92LCAwKSwgX2NvLnZhbHVlLmltYWdlKSk7IF9jayhfdiwgNCwgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMiA9IGkxLsm1dW52KF92LCA5LCAwLCBfY2soX3YsIDEwLCAwLCBpMS7JtW5vdihfdiwgMSksIF9jby52YWx1ZS50cykpOyBfY2soX3YsIDksIDAsIGN1cnJWYWxfMik7IHZhciBjdXJyVmFsXzMgPSBpMS7JtXVudihfdiwgMTMsIDAsIF9jayhfdiwgMTQsIDAsIGkxLsm1bm92KF92LCAxKSwgX2NvLnZhbHVlLnRzLCBcIkhSXCIpKTsgX2NrKF92LCAxMywgMCwgY3VyclZhbF8zKTsgdmFyIGN1cnJWYWxfNCA9IF9jby52YWx1ZS50aXRsZTsgX2NrKF92LCAxNiwgMCwgY3VyclZhbF80KTsgfSk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1B1YkNhcmRDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWNhcmRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1B1YkNhcmRDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9QdWJDYXJkQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQ5MTUyLCBudWxsLCAwLCBpNS5QdWJDYXJkQ29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBudWxsLCBudWxsKTsgfVxudmFyIFB1YkNhcmRDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiLmJqLXB1Yi1jYXJkXCIsIGk1LlB1YkNhcmRDb21wb25lbnQsIFZpZXdfUHViQ2FyZENvbXBvbmVudF9Ib3N0XzAsIHsgdmFsdWU6IFwidmFsdWVcIiB9LCB7fSwgW10pO1xuZXhwb3J0IHsgUHViQ2FyZENvbXBvbmVudE5nRmFjdG9yeSBhcyBQdWJDYXJkQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIuYmotcHViLWxpbmV7ZGlzcGxheTpmbGV4O21hcmdpbi10b3A6dmFyKC0taW5kZW50LWJhc2UpO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOm5vbmU7Y29sb3I6dmFyKC0tY29sb3ItbWFpbik7d2lkdGg6MTAwJX0uYmotcHViLWxpbmVfX3BpY3R1cmV7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo2MHB4O21pbi13aWR0aDo2MHB4O21heC13aWR0aDo2MHB4O2hlaWdodDo2MHB4O21pbi1oZWlnaHQ6NjBweDttYXgtaGVpZ2h0OjYwcHg7ZmxleDowIDAgNjBweDtib3JkZXItcmFkaXVzOjUwJTtvdmVyZmxvdzpoaWRkZW47bWFyZ2luLXJpZ2h0OnZhcigtLWluZGVudC1iYXNlKTtiYWNrZ3JvdW5kOiNmOWY5Zjl9LmJqLXB1Yi1saW5lX19waWN0dXJlIGltZ3tkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjphYnNvbHV0ZTttaW4td2lkdGg6MTAwJTttaW4taGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtvYmplY3QtZml0OmNvdmVyO2JvcmRlci1yYWRpdXM6NTAlfS5iai1wdWItbGluZV9fZGF0YXtmbGV4OjEgMSBhdXRvfS5iai1wdWItbGluZV9fZGF0ZXRpbWUsLmJqLXB1Yi1saW5lX19oMXtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9LmJqLXB1Yi1saW5lX19kYXRldGltZXtjb2xvcjp2YXIoLS1jb2xvci1ncmF5KTtmb250LXNpemU6MTNweDttYXJnaW46MH0uYmotcHViLWxpbmVfX2RhdGV0aW1lIGl7bWFyZ2luLXJpZ2h0Oi41ZW19LmJqLXB1Yi1saW5lX19oMXt3aWR0aDoxMDAlO21hcmdpbjo1cHggMCAwO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEuNH1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcHViLWxpbmUvcHViLWxpbmUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcHViX2xpbmUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3BpcGVzX2ltYWdlX2ltYWdlLnBpcGUsXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX3B1Yl9saW5lLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wdWJfbGluZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfLi5fcGlwZXNfaW1hZ2VfaW1hZ2UucGlwZSxfLi5fcGlwZXNfdGltZXN0YW1wX3RpbWVzdGFtcCxfcHViX2xpbmUuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3B1Yi1saW5lLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi4vLi4vcGlwZXMvdGltZXN0YW1wL3RpbWVzdGFtcFwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIi4vcHViLWxpbmUuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX1B1YkxpbmVDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1B1YkxpbmVDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUHViTGluZUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1B1YkxpbmVDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QdWJMaW5lQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QdWJMaW5lQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtpMS7JtXBpZCgwLCBpMi5JbWFnZVBpcGUsIFtdKSwgaTEuybVwaWQoMCwgaTMuVGltZXN0YW1wUGlwZSwgW10pLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAyLCBcInBpY3R1cmVcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWxpbmVfX3BpY3R1cmVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwiaW1nXCIsIFtdLCBbWzgsIFwic3JjXCIsIDRdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtXBwZCg0LCAxKSwgKF9sKCkoKSwgaTEuybVlbGQoNSwgMCwgbnVsbCwgbnVsbCwgOCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWxpbmVfX2RhdGFcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDYsIDAsIG51bGwsIG51bGwsIDUsIFwidGltZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItbGluZV9fZGF0ZXRpbWVcIl1dLCBbWzEsIFwiZGF0ZXRpbWVcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDcsIDEpLCAoX2woKSgpLCBpMS7JtWVsZCg4LCAwLCBudWxsLCBudWxsLCAwLCBcImlcIiwgW1tcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiXSwgW1wiY2xhc3NcIiwgXCJmYSBmYS1jbG9jay1vXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAyLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTAsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCBpMS7JtXBwZCgxMSwgMiksIChfbCgpKCksIGkxLsm1ZWxkKDEyLCAwLCBudWxsLCBudWxsLCAxLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1saW5lX19oMVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTMsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1dW52KF92LCAzLCAwLCBfY2soX3YsIDQsIDAsIGkxLsm1bm92KF92LCAwKSwgX2NvLnZhbHVlLmltYWdlKSk7IF9jayhfdiwgMywgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IGkxLsm1dW52KF92LCA2LCAwLCBfY2soX3YsIDcsIDAsIGkxLsm1bm92KF92LCAxKSwgX2NvLnZhbHVlLnRzKSk7IF9jayhfdiwgNiwgMCwgY3VyclZhbF8xKTsgdmFyIGN1cnJWYWxfMiA9IGkxLsm1dW52KF92LCAxMCwgMCwgX2NrKF92LCAxMSwgMCwgaTEuybVub3YoX3YsIDEpLCBfY28udmFsdWUudHMsIFwiSFJcIikpOyBfY2soX3YsIDEwLCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gX2NvLnZhbHVlLnRpdGxlOyBfY2soX3YsIDEzLCAwLCBjdXJyVmFsXzMpOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUHViTGluZUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItbGluZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUHViTGluZUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1B1YkxpbmVDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNDkxNTIsIG51bGwsIDAsIGk0LlB1YkxpbmVDb21wb25lbnQsIFtdLCBudWxsLCBudWxsKV0sIG51bGwsIG51bGwpOyB9XG52YXIgUHViTGluZUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCIuYmotcHViLWxpbmVcIiwgaTQuUHViTGluZUNvbXBvbmVudCwgVmlld19QdWJMaW5lQ29tcG9uZW50X0hvc3RfMCwgeyB2YWx1ZTogXCJ2YWx1ZVwiIH0sIHt9LCBbXSk7XG5leHBvcnQgeyBQdWJMaW5lQ29tcG9uZW50TmdGYWN0b3J5IGFzIFB1YkxpbmVDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9tYWluLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9wdWJfY2FyZF9wdWJfY2FyZC5jb21wb25lbnQubmdmYWN0b3J5LF9hbmd1bGFyX3JvdXRlcixfYW5ndWxhcl9jb21tb24sXy4uX3B1Yl9jYXJkX3B1Yl9jYXJkLmNvbXBvbmVudCxfLi5fcHViX2xpbmVfcHViX2xpbmUuY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fcHViX2xpbmVfcHViX2xpbmUuY29tcG9uZW50LF8uLl8uLl9waXBlc190aW1lc3RhbXBfdGltZXN0YW1wLF9wYWdlX21haW4uY29tcG9uZW50LF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXIsXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fLi5fc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX2xvYWRlcl9sb2FkZXIuc2VydmljZSBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX21haW4uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3B1Yl9jYXJkX3B1Yl9jYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfLi5fcHViX2NhcmRfcHViX2NhcmQuY29tcG9uZW50LF8uLl9wdWJfbGluZV9wdWJfbGluZS5jb21wb25lbnQubmdmYWN0b3J5LF8uLl9wdWJfbGluZV9wdWJfbGluZS5jb21wb25lbnQsXy4uXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX3BhZ2VfbWFpbi5jb21wb25lbnQsX2FuZ3VsYXJfcGxhdGZvcm1fYnJvd3NlcixfLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLF8uLl8uLl9zZXJ2aWNlc19tZXRhX21ldGEuc2VydmljZSxfLi5fLi5fc2VydmljZXNfbG9hZGVyX2xvYWRlci5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtbWFpbi5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vLi4vcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uLy4uL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIi4uLy4uL3B1Yi1saW5lL3B1Yi1saW5lLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuLi8uLi9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk4IGZyb20gXCIuLi8uLi8uLi9waXBlcy90aW1lc3RhbXAvdGltZXN0YW1wXCI7XG5pbXBvcnQgKiBhcyBpOSBmcm9tIFwiLi9wYWdlLW1haW4uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCAqIGFzIGkxMSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpMTIgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL21ldGEvbWV0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpMTMgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2xvYWRlci9sb2FkZXIuc2VydmljZVwiO1xudmFyIHN0eWxlc19QYWdlTWFpbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZU1haW5Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZU1haW5Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlTWFpbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VNYWluQ29tcG9uZW50IH07XG5mdW5jdGlvbiBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzEoX2wpIHtcbiAgICByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZCBiai1wYWdlLW1haW5fX2NhcmRcIl1dLCBbWzIsIFwiYmotcGFnZS1tYWluX19jYXJkLS13aWRlXCIsIG51bGxdLCBbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDEpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIGkyLlZpZXdfUHViQ2FyZENvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX1B1YkNhcmRDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNjcxNzQ0LCBudWxsLCAwLCBpMy5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMy5Sb3V0ZXIsIGkzLkFjdGl2YXRlZFJvdXRlLCBpNC5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCBpMS7JtXBwZCgyLCAyKSwgaTEuybVwYWQoMywgMyksIGkxLsm1ZGlkKDQsIDQ5MTUyLCBudWxsLCAwLCBpNS5QdWJDYXJkQ29tcG9uZW50LCBbXSwgeyB2YWx1ZTogWzAsIFwidmFsdWVcIl0gfSwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8zID0gX2NrKF92LCAzLCAwLCBcIi9cIiwgaTEuybV1bnYoX3YsIDEsIDAsIF9jayhfdiwgMiwgMCwgaTEuybVub3YoX3YucGFyZW50LCAwKSwgX3YuY29udGV4dC4kaW1wbGljaXQudHMsIFwiVVJMXCIpKSwgX3YuY29udGV4dC4kaW1wbGljaXQudXJsKTsgX2NrKF92LCAxLCAwLCBjdXJyVmFsXzMpOyB2YXIgY3VyclZhbF80ID0gX3YuY29udGV4dC4kaW1wbGljaXQ7IF9jayhfdiwgNCwgMCwgY3VyclZhbF80KTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IChfdi5jb250ZXh0LiRpbXBsaWNpdC53ZWlnaHQgPiAxKTsgdmFyIGN1cnJWYWxfMSA9IGkxLsm1bm92KF92LCAxKS50YXJnZXQ7IHZhciBjdXJyVmFsXzIgPSBpMS7JtW5vdihfdiwgMSkuaHJlZjsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzAsIGN1cnJWYWxfMSwgY3VyclZhbF8yKTsgfSk7XG59XG5mdW5jdGlvbiBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzIoX2wpIHtcbiAgICByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItbGluZVwiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDEpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIGk2LlZpZXdfUHViTGluZUNvbXBvbmVudF8wLCBpNi5SZW5kZXJUeXBlX1B1YkxpbmVDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNjcxNzQ0LCBudWxsLCAwLCBpMy5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMy5Sb3V0ZXIsIGkzLkFjdGl2YXRlZFJvdXRlLCBpNC5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCBpMS7JtXBwZCgyLCAyKSwgaTEuybVwYWQoMywgMyksIGkxLsm1ZGlkKDQsIDQ5MTUyLCBudWxsLCAwLCBpNy5QdWJMaW5lQ29tcG9uZW50LCBbXSwgeyB2YWx1ZTogWzAsIFwidmFsdWVcIl0gfSwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8yID0gX2NrKF92LCAzLCAwLCBcIi9cIiwgaTEuybV1bnYoX3YsIDEsIDAsIF9jayhfdiwgMiwgMCwgaTEuybVub3YoX3YucGFyZW50LCAwKSwgX3YuY29udGV4dC4kaW1wbGljaXQudHMsIFwiVVJMXCIpKSwgX3YuY29udGV4dC4kaW1wbGljaXQudXJsKTsgX2NrKF92LCAxLCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gX3YuY29udGV4dC4kaW1wbGljaXQ7IF9jayhfdiwgNCwgMCwgY3VyclZhbF8zKTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS50YXJnZXQ7IHZhciBjdXJyVmFsXzEgPSBpMS7JtW5vdihfdiwgMSkuaHJlZjsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzAsIGN1cnJWYWxfMSk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZU1haW5Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW2kxLsm1cGlkKDAsIGk4LlRpbWVzdGFtcFBpcGUsIFtdKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMTEsIFwibWFpblwiLCBbW1wiY2xhc3NcIiwgXCJiai1wYWdlLW1haW5fX3dyYXBwZXJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDEwLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1wYWdlLW1haW5fX3Jvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMywgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotcGFnZS1tYWluX19jb2wgYmotcGFnZS1tYWluX19jb2wtLWdyaWRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAyLCBudWxsLCBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzEpKSwgaTEuybVkaWQoNSwgODAyODE2LCBudWxsLCAwLCBpNC5OZ0Zvck9mLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWYsIGkxLkl0ZXJhYmxlRGlmZmVyc10sIHsgbmdGb3JPZjogWzAsIFwibmdGb3JPZlwiXSB9LCBudWxsKSwgaTEuybVwaWQoMTMxMDcyLCBpNC5Bc3luY1BpcGUsIFtpMS5DaGFuZ2VEZXRlY3RvclJlZl0pLCAoX2woKSgpLCBpMS7JtWVsZCg3LCAwLCBudWxsLCBudWxsLCA1LCBcImFzaWRlXCIsIFtbXCJjbGFzc1wiLCBcImJqLXBhZ2UtbWFpbl9fYXNpZGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDgsIDAsIG51bGwsIG51bGwsIDEsIFwiaDFcIiwgW1tcImNsYXNzXCIsIFwiY29sdW1uLWhlYWRlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MURcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcIl0pKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIG51bGwsIDIsIG51bGwsIFZpZXdfUGFnZU1haW5Db21wb25lbnRfMikpLCBpMS7JtWRpZCgxMSwgODAyODE2LCBudWxsLCAwLCBpNC5OZ0Zvck9mLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWYsIGkxLkl0ZXJhYmxlRGlmZmVyc10sIHsgbmdGb3JPZjogWzAsIFwibmdGb3JPZlwiXSB9LCBudWxsKSwgaTEuybVwaWQoMTMxMDcyLCBpNC5Bc3luY1BpcGUsIFtpMS5DaGFuZ2VEZXRlY3RvclJlZl0pXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1dW52KF92LCA1LCAwLCBpMS7JtW5vdihfdiwgNikudHJhbnNmb3JtKF9jby5wdWJsaWNhdGlvbnMpKTsgX2NrKF92LCA1LCAwLCBjdXJyVmFsXzApOyB2YXIgY3VyclZhbF8xID0gaTEuybV1bnYoX3YsIDExLCAwLCBpMS7JtW5vdihfdiwgMTIpLnRyYW5zZm9ybShfY28ucHVibGljYXRpb25zX3dlaWdodF8wKSk7IF9jayhfdiwgMTEsIDAsIGN1cnJWYWxfMSk7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlTWFpbkNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtbWFpblwiLCBbW1wiY2xhc3NcIiwgXCJwYWdlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlTWFpbkNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VNYWluQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTkuUGFnZU1haW5Db21wb25lbnQsIFtpMS5QTEFURk9STV9JRCwgaTEwLlRyYW5zZmVyU3RhdGUsIGkxMS5BUElTZXJ2aWNlLCBpMTIuTWV0YVNlcnZpY2UsIGkxMy5Mb2FkZXJTZXJ2aWNlXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VNYWluQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtbWFpbi5wYWdlXCIsIGk5LlBhZ2VNYWluQ29tcG9uZW50LCBWaWV3X1BhZ2VNYWluQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlTWFpbkNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlTWFpbkNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLm5vLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXJ9XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfdmlkZW9fcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX2NvbW1vbixfdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fc2VydmljZXNfeW91dHViZV95b3V0dWJlLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfdmlkZW9fcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX2NvbW1vbixfdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fc2VydmljZXNfeW91dHViZV95b3V0dWJlLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuL3ZpZGVvLXJpYmJvbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZVwiO1xudmFyIHN0eWxlc19WaWRlb1JpYmJvbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfVmlkZW9SaWJib25Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfVmlkZW9SaWJib25Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9WaWRlb1JpYmJvbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1ZpZGVvUmliYm9uQ29tcG9uZW50IH07XG5mdW5jdGlvbiBWaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50XzEoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxMCwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9faXRlbVwiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgW1s4LCBcImhyZWZcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDUsIFwiZmlndXJlXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fZmlndXJlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImltZ1wiLCBbW1wiY2xhc3NcIiwgXCJiai12aWRlby1yaWJib25fX3RodW1iXCJdXSwgW1s4LCBcInNyY1wiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJmaWdjYXB0aW9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fY2FwdGlvbiBiai12aWRlby1yaWJib25fX2NhcHRpb24tLWxlZnRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDQsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCAxLCBcImZpZ2NhcHRpb25cIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX19jYXB0aW9uIGJqLXZpZGVvLXJpYmJvbl9fY2FwdGlvbi0tcmlnaHRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDYsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg3LCAwLCBudWxsLCBudWxsLCAxLCBcInRpbWVcIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX19kYXRldGltZVwiXV0sIFtbMSwgXCJkYXRldGltZVwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoOCwgbnVsbCwgW1wiXCIsIFwiXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDksIDAsIG51bGwsIG51bGwsIDEsIFwiaDNcIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX190aXRsZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTAsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IF92LmNvbnRleHQuJGltcGxpY2l0LmhyZWY7IF9jayhfdiwgMCwgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IF92LmNvbnRleHQuJGltcGxpY2l0LnRodW1iOyBfY2soX3YsIDIsIDAsIGN1cnJWYWxfMSk7IHZhciBjdXJyVmFsXzIgPSBfdi5jb250ZXh0LiRpbXBsaWNpdC5kdXJhdGlvbjsgX2NrKF92LCA0LCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gX3YuY29udGV4dC4kaW1wbGljaXQubGlrZTsgX2NrKF92LCA2LCAwLCBjdXJyVmFsXzMpOyB2YXIgY3VyclZhbF80ID0gX3YuY29udGV4dC4kaW1wbGljaXQuZGF0ZTsgX2NrKF92LCA3LCAwLCBjdXJyVmFsXzQpOyB2YXIgY3VyclZhbF81ID0gX3YuY29udGV4dC4kaW1wbGljaXQuZGF0ZTsgX2NrKF92LCA4LCAwLCBjdXJyVmFsXzUpOyB2YXIgY3VyclZhbF82ID0gX3YuY29udGV4dC4kaW1wbGljaXQudGl0bGU7IF9jayhfdiwgMTAsIDAsIGN1cnJWYWxfNik7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMywgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX193cmFwcGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8xKSksIGkxLsm1ZGlkKDIsIDgwMjgxNiwgbnVsbCwgMCwgaTIuTmdGb3JPZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmLCBpMS5JdGVyYWJsZURpZmZlcnNdLCB7IG5nRm9yT2Y6IFswLCBcIm5nRm9yT2ZcIl0gfSwgbnVsbCksIGkxLsm1cGlkKDEzMTA3MiwgaTIuQXN5bmNQaXBlLCBbaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBpMS7JtXVudihfdiwgMiwgMCwgaTEuybVub3YoX3YsIDMpLnRyYW5zZm9ybShfY28uaXRlbXMpKTsgX2NrKF92LCAyLCAwLCBjdXJyVmFsXzApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJ2aWRlby1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9WaWRlb1JpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkzLlZpZGVvUmliYm9uQ29tcG9uZW50LCBbaTQuUm91dGVyLCBpNS5BUElTZXJ2aWNlLCBpNi5Zb3VUdWJlU2VydmljZV0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBWaWRlb1JpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJ2aWRlby1yaWJib25cIiwgaTMuVmlkZW9SaWJib25Db21wb25lbnQsIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFZpZGVvUmliYm9uQ29tcG9uZW50TmdGYWN0b3J5IGFzIFZpZGVvUmliYm9uQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV8xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF8uLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLF9wYWdlXzEwMS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV8xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF8uLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLF9wYWdlXzEwMS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS0xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uLy4uL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMveW91dHViZS95b3V0dWJlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuL3BhZ2UtMTAxLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19QYWdlMTAxQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlMTAxQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2UxMDFDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlMTAxQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZTEwMUNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZTEwMUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1hc2lkZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRFxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzOFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAxLCBcImgyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJWaWRlb1wiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCAxLCBcInZpZGVvLXJpYmJvblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTIuVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX1ZpZGVvUmliYm9uQ29tcG9uZW50KSksIGkxLsm1ZGlkKDYsIDExNDY4OCwgbnVsbCwgMCwgaTMuVmlkZW9SaWJib25Db21wb25lbnQsIFtpNC5Sb3V0ZXIsIGk1LkFQSVNlcnZpY2UsIGk2LllvdVR1YmVTZXJ2aWNlXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDYsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZTEwMUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtMTAxXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2UxMDFDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlMTAxQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTcuUGFnZTEwMUNvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlMTAxQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtMTAxXCIsIGk3LlBhZ2UxMDFDb21wb25lbnQsIFZpZXdfUGFnZTEwMUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZTEwMUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlMTAxQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvMTAxL3BhZ2UtMTAxLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlQ3VycmVuY2llc0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlQ3VycmVuY2llc0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQ3VycmVuY2llc0NvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1jdXJyZW5jaWVzXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlQ3VycmVuY2llc0NvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlQ3VycmVuY2llc0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWN1cnJlbmNpZXNcIiwgaTIuUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIFZpZXdfUGFnZUN1cnJlbmNpZXNDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2N1cnJlbmNpZXNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2N1cnJlbmNpZXNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDAsIFwiYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAwLCBcImFzaWRlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1jdXJyZW5jaWVzLWl0ZW1cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWN1cnJlbmNpZXMtaXRlbVwiLCBpMi5QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQsIFZpZXdfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfZXZlbnRzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfZXZlbnRzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1ldmVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VFdmVudHNDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VFdmVudHNDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUV2ZW50c0NvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VFdmVudHNDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlRXZlbnRzQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXZlbnRzQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtdLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV2ZW50c0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtZXZlbnRzXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VFdmVudHNDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlRXZlbnRzQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUV2ZW50c0NvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlRXZlbnRzQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtZXZlbnRzXCIsIGkyLlBhZ2VFdmVudHNDb21wb25lbnQsIFZpZXdfUGFnZUV2ZW50c0NvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUV2ZW50c0NvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlRXZlbnRzQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXZlbnRzSXRlbUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhcnRpY2xlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDAsIFwiYXNpZGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXZlbnRzSXRlbUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtZXZlbnRzLWl0ZW1cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VFdmVudHNJdGVtQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtZXZlbnRzLWl0ZW1cIiwgaTIuUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsIFZpZXdfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VFeGNoYW5nZXNDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFeGNoYW5nZXNDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLWV4Y2hhbmdlc1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VFeGNoYW5nZXNDb21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWV4Y2hhbmdlc1wiLCBpMi5QYWdlRXhjaGFuZ2VzQ29tcG9uZW50LCBWaWV3X1BhZ2VFeGNoYW5nZXNDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VFeGNoYW5nZXNDb21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDAsIFwiYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAwLCBcImFzaWRlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLWV4Y2hhbmdlcy1pdGVtXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWV4Y2hhbmdlcy1pdGVtXCIsIGkyLlBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50LCBWaWV3X1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2ljby5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9pY28uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2ljby5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9pY28uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWljby5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLWljby5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZUlDT0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUlDT0NvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlSUNPQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUlDT0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VJQ09Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VJQ09Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW10sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlSUNPQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1pY29cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUlDT0NvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VJQ09Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlSUNPQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VJQ09Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1pY29cIiwgaTIuUGFnZUlDT0NvbXBvbmVudCwgVmlld19QYWdlSUNPQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlSUNPQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VJQ09Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9pY29faXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9pY29faXRlbS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VJQ09JdGVtQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlSUNPSXRlbUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlSUNPSXRlbUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VJQ09JdGVtQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUlDT0l0ZW1Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VJQ09JdGVtQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAwLCBcImFydGljbGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhc2lkZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VJQ09JdGVtQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1pY28taXRlbVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlSUNPSXRlbUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VJQ09JdGVtQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUlDT0l0ZW1Db21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUlDT0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1pY28taXRlbVwiLCBpMi5QYWdlSUNPSXRlbUNvbXBvbmVudCwgVmlld19QYWdlSUNPSXRlbUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUlDT0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUlDT0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28taXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX21hcmtldHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfbWFya2V0cy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfbWFya2V0cy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9tYXJrZXRzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtbWFya2V0cy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZU1hcmtldHNDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VNYXJrZXRzQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZU1hcmtldHNDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0NvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZU1hcmtldHNDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW10sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlTWFya2V0c0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtbWFya2V0c1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlTWFya2V0c0NvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZU1hcmtldHNDb21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZU1hcmtldHNDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1tYXJrZXRzXCIsIGkyLlBhZ2VNYXJrZXRzQ29tcG9uZW50LCBWaWV3X1BhZ2VNYXJrZXRzQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlTWFya2V0c0NvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlTWFya2V0c0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAwLCBcImFydGljbGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhc2lkZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtbWFya2V0cy1pdGVtXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlTWFya2V0c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1tYXJrZXRzLWl0ZW1cIiwgaTIuUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50LCBWaWV3X1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIubm8tY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcn1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9zZWN0aW9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX3NlY3Rpb24uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9zZWN0aW9uLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLXNlY3Rpb24uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1zZWN0aW9uLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19QYWdlU2VjdGlvbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZVNlY3Rpb25Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZVNlY3Rpb25Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlU2VjdGlvbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VTZWN0aW9uQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlU2VjdGlvbkNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1hc2lkZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQyMFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXCJdKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZVNlY3Rpb25Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLXNlY3Rpb25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZVNlY3Rpb25Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlU2VjdGlvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VTZWN0aW9uQ29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VTZWN0aW9uQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2Utc2VjdGlvblwiLCBpMi5QYWdlU2VjdGlvbkNvbXBvbmVudCwgVmlld19QYWdlU2VjdGlvbkNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZVNlY3Rpb25Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZVNlY3Rpb25Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5iai1wYWdlLWFydGljbGVfX3dyYXBwZXJ7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTttYXJnaW46MCBhdXRvO3BhZGRpbmc6dmFyKC0taW5kZW50LWRvdWJsZSkgMH1AbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7LmJqLXBhZ2UtYXJ0aWNsZV9fd3JhcHBlcntwYWRkaW5nOnZhcigtLWluZGVudC1kb3VibGUpIHZhcigtLWluZGVudC1iYXNlKX19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuYmotcGFnZS1hcnRpY2xlX193cmFwcGVye3BhZGRpbmc6dmFyKC0taW5kZW50LWRvdWJsZSl9fS5iai1wYWdlLWFydGljbGVfX3Jvd3t3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpzdHJldGNofS5iai1wYWdlLWFydGljbGVfX2NvbHtmbGV4OjEgMSBhdXRvfS5iai1wYWdlLWFydGljbGVfX2FzaWRle3dpZHRoOnZhcigtLWFzaWRlLXdpZHRoKTtmbGV4OjAgMCB2YXIoLS1hc2lkZS13aWR0aCk7bWFyZ2luLWxlZnQ6dmFyKC0taW5kZW50LWRvdWJsZSk7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Om5vbmV9QG1lZGlhIChtaW4td2lkdGg6OTAwcHgpey5iai1wYWdlLWFydGljbGVfX2FzaWRle2Rpc3BsYXk6ZmxleH19XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2FydGljbGUvcGFnZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIuYmotYXJ0aWNsZXtkaXNwbGF5OmJsb2NrfS5iai1hcnRpY2xlX193cmFwcGVye2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0uYmotYXJ0aWNsZV9faGVhZGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7cGFkZGluZzp2YXIoLS1pbmRlbnQtZG91YmxlKSB2YXIoLS1pbmRlbnQtYmFzZSl9LmJqLWFydGljbGVfX2hlYWRlcl9fcGljdHVyZSwuYmotYXJ0aWNsZV9faGVhZGVyX19waWN0dXJlOmFmdGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7cmlnaHQ6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uYmotYXJ0aWNsZV9faGVhZGVyX19waWN0dXJle2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZjlmOWY5fS5iai1hcnRpY2xlX19oZWFkZXJfX3BpY3R1cmUgaW1ne2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOmFic29sdXRlO21pbi13aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO29iamVjdC1maXQ6Y292ZXJ9LmJqLWFydGljbGVfX2hlYWRlcl9fcGljdHVyZTphZnRlcntjb250ZW50OlxcXCJcXFwiO2JhY2tncm91bmQ6cmdiYSgzNiw0MSw0NiwuNSl9LmJqLWFydGljbGVfX2hlYWRlcl9fdGFnc3tkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttYXgtd2lkdGg6dmFyKC0tbWF4LWFydGljbGUtd2lkdGgpO2hlaWdodDoyMnB4O21hcmdpbjowIGF1dG87cGFkZGluZzowO2ZsZXgtd3JhcDp3cmFwO292ZXJmbG93OmhpZGRlbn1AbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7LmJqLWFydGljbGVfX2hlYWRlcl9fdGFnc3twYWRkaW5nOjAgMjBweH19LmJqLWFydGljbGVfX2hlYWRlcl9fdGFncyBhe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDoyMXB4O3BhZGRpbmc6MXB4IDVweCAwO2JhY2tncm91bmQ6dmFyKC0tY29sb3ItbWFpbik7Y29sb3I6I2ZmZjttYXJnaW4tcmlnaHQ6OHB4fS5iai1hcnRpY2xlX19oZWFkZXJfX3RhZ3MgYTo6YWZ0ZXIsLmJqLWFydGljbGVfX2hlYWRlcl9fdGFncyBhOjpiZWZvcmV7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjA7aGVpZ2h0OjA7dG9wOjB9LmJqLWFydGljbGVfX2hlYWRlcl9fdGFncyBhOjpiZWZvcmV7bGVmdDotNXB4O2JvcmRlci1ib3R0b206MjJweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtib3JkZXItbGVmdDo1cHggc29saWQgdHJhbnNwYXJlbnR9LmJqLWFydGljbGVfX2hlYWRlcl9fdGFncyBhOjphZnRlcntyaWdodDotNXB4O2JvcmRlci10b3A6MjJweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluKTtib3JkZXItcmlnaHQ6NXB4IHNvbGlkIHRyYW5zcGFyZW50fS5iai1hcnRpY2xlX19oZWFkZXJfX3RhZ3MgYTpmaXJzdC1jaGlsZDo6YmVmb3Jle2Rpc3BsYXk6bm9uZX0uYmotYXJ0aWNsZV9faGVhZGVyX190YWdzIGE6bGFzdC1jaGlsZDo6YWZ0ZXJ7ZGlzcGxheTpub25lfS5iai1hcnRpY2xlX19oZWFkZXJfX2RhdGV0aW1le2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttYXgtd2lkdGg6dmFyKC0tbWF4LWFydGljbGUtd2lkdGgpO21hcmdpbjp2YXIoLS1pbmRlbnQtZG91YmxlKSBhdXRvIDA7Zm9udC1zaXplOjE0cHg7Y29sb3I6I2ZmZn1AbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7LmJqLWFydGljbGVfX2hlYWRlcl9fZGF0ZXRpbWV7cGFkZGluZzowIDIwcHh9fS5iai1hcnRpY2xlX19oZWFkZXJfX2RhdGV0aW1lIGl7bWFyZ2luLXJpZ2h0Oi41ZW19LmJqLWFydGljbGVfX2hlYWRlcl9faDEsLmJqLWFydGljbGVfX2hlYWRlcl9faDJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO21heC13aWR0aDp2YXIoLS1tYXgtYXJ0aWNsZS13aWR0aCk7bWFyZ2luOjEwcHggYXV0byAyMHB4O2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEuNXJlbTtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MS4zNTtjb2xvcjojZmZmfUBtZWRpYSAobWluLXdpZHRoOjYwMHB4KXsuYmotYXJ0aWNsZV9faGVhZGVyX19oMSwuYmotYXJ0aWNsZV9faGVhZGVyX19oMntmb250LXNpemU6Mi4yNXJlbTtwYWRkaW5nOjAgMjBweH19LmJqLWFydGljbGVfX2hlYWRlcl9faDIrLmJqLWFydGljbGVfX2hlYWRlcl9faDF7bWFyZ2luLXRvcDotMTJweDtmb250LXNpemU6MS4yNXJlbTtmb250LXdlaWdodDo0MDB9QG1lZGlhIChtaW4td2lkdGg6NjAwcHgpey5iai1hcnRpY2xlX19oZWFkZXJfX2gyKy5iai1hcnRpY2xlX19oZWFkZXJfX2gxe2ZvbnQtc2l6ZToxLjVyZW19fS5iai1hcnRpY2xlX19zaGFyZXtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO21hcmdpbi10b3A6dmFyKC0taW5kZW50LWJhc2UpO3BhZGRpbmc6MCB2YXIoLS1pbmRlbnQtYmFzZSl9QG1lZGlhIChtaW4td2lkdGg6NjAwcHgpey5iai1hcnRpY2xlX19zaGFyZXtwYWRkaW5nOjB9fVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5zaGFyZSwuc2hhcmVfX2l0ZW17ZGlzcGxheTpmbGV4O2hlaWdodDozMHB4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOnN0cmV0Y2h9LnNoYXJlX19pdGVte2ZsZXg6MCAwIGF1dG87b3ZlcmZsb3c6aGlkZGVuO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOm5vbmU7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0OjE7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOjAgMH0uc2hhcmVfX2l0ZW1fX2ljb24sLnNoYXJlX19pdGVtX190ZXh0e2hlaWdodDozMHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtY29sb3IpfS5zaGFyZV9faXRlbV9faWNvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMHB4O2ZsZXg6MCAwIDMwcHh9LnNoYXJlX19pdGVtX19pY29uIHN2Z3t3aWR0aDoxOHB4O2hlaWdodDoxOHB4fS5zaGFyZV9faXRlbV9faWNvbiBwYXRoe2ZpbGw6Y3VycmVudENvbG9yfS5zaGFyZV9faXRlbV9fdGV4dHtkaXNwbGF5Om5vbmU7ZmxleDowIDAgYXV0bzttYXJnaW4tbGVmdDoycHg7cGFkZGluZzowIC43ZW07d2hpdGUtc3BhY2U6bm93cmFwfUBtZWRpYSAobWluLXdpZHRoOjQwMHB4KXsuc2hhcmVfX2l0ZW0tLWZiIC5zaGFyZV9faXRlbV9fdGV4dHtkaXNwbGF5OmZsZXh9fUBtZWRpYSAobWluLXdpZHRoOjQ1MHB4KXsuc2hhcmVfX2l0ZW0tLXR3aXR0ZXIgLnNoYXJlX19pdGVtX190ZXh0e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6NTUwcHgpey5zaGFyZV9faXRlbS0tdmsgLnNoYXJlX19pdGVtX190ZXh0e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6NjUwcHgpey5zaGFyZV9faXRlbS0tdGVsZWdyYW0gLnNoYXJlX19pdGVtX190ZXh0e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6NzUwcHgpey5zaGFyZV9faXRlbS0td2hhdHNhcHAgLnNoYXJlX19pdGVtX190ZXh0e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6ODAwcHgpey5zaGFyZV9faXRlbS0tdmliZXIgLnNoYXJlX19pdGVtX190ZXh0e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6ODUwcHgpey5zaGFyZV9faXRlbS0tZ29vZ2xlIC5zaGFyZV9faXRlbV9fdGV4dHtkaXNwbGF5OmZsZXh9fUBtZWRpYSAobWluLXdpZHRoOjkwMHB4KXsuc2hhcmVfX2l0ZW0tLWdvb2dsZSAuc2hhcmVfX2l0ZW1fX3RleHQsLnNoYXJlX19pdGVtLS10ZWxlZ3JhbSAuc2hhcmVfX2l0ZW1fX3RleHQsLnNoYXJlX19pdGVtLS12aWJlciAuc2hhcmVfX2l0ZW1fX3RleHQsLnNoYXJlX19pdGVtLS13aGF0c2FwcCAuc2hhcmVfX2l0ZW1fX3RleHR7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1pbi13aWR0aDoxMDAwcHgpey5zaGFyZV9faXRlbS0tdGVsZWdyYW0gLnNoYXJlX19pdGVtX190ZXh0e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6MTA1MHB4KXsuc2hhcmVfX2l0ZW0tLXdoYXRzYXBwIC5zaGFyZV9faXRlbV9fdGV4dHtkaXNwbGF5OmZsZXh9fUBtZWRpYSAobWluLXdpZHRoOjExMDBweCl7LnNoYXJlX19pdGVtLS12aWJlciAuc2hhcmVfX2l0ZW1fX3RleHR7ZGlzcGxheTpmbGV4fX1AbWVkaWEgKG1pbi13aWR0aDoxMTUwcHgpey5zaGFyZV9faXRlbS0tZ29vZ2xlIC5zaGFyZV9faXRlbV9fdGV4dHtkaXNwbGF5OmZsZXh9fS5zaGFyZV9faXRlbV9fdGV4dCBzcGFue3doaXRlLXNwYWNlOm5vd3JhcH0uc2hhcmVfX2l0ZW0tLWZiey0tYmFja2dyb3VuZC1jb2xvcjojM2I1OTk4fS5zaGFyZV9faXRlbS0tdHdpdHRlcnstLWJhY2tncm91bmQtY29sb3I6IzFlYTJmNH0uc2hhcmVfX2l0ZW0tLXZrey0tYmFja2dyb3VuZC1jb2xvcjojNjQ3OGExfS5zaGFyZV9faXRlbS0tdGVsZWdyYW17LS1iYWNrZ3JvdW5kLWNvbG9yOiMzMWFmZWN9LnNoYXJlX19pdGVtLS13aGF0c2FwcHstLWJhY2tncm91bmQtY29sb3I6IzI2ZDM2NX0uc2hhcmVfX2l0ZW0tLXZpYmVyey0tYmFja2dyb3VuZC1jb2xvcjojOGY1ZGI3fS5zaGFyZV9faXRlbS0tZ29vZ2xley0tYmFja2dyb3VuZC1jb2xvcjojZGM1MTQ0fVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zaGFyZS9zaGFyZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9zaGFyZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfc2hhcmUuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3NoYXJlLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9zaGFyZS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vc2hhcmUuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vc2hhcmUuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX1NoYXJlQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9TaGFyZUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19TaGFyZUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1NoYXJlQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfU2hhcmVDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1NoYXJlQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA2LCBcImFcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW0gc2hhcmVfX2l0ZW0tLWZiXCJdLCBbXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIl1dLCBbWzgsIFwiaHJlZlwiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW1fX2ljb25cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDEsIFwiOnN2ZzpzdmdcIiwgW1tcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDAsIFwiOnN2ZzpwYXRoXCIsIFtbXCJkXCIsIFwiTTkgOEg2djRoM3YxMmg1VjEyaDMuNmwuNC00aC00VjYuM2MwLTEgLjItMS4zIDEtMS4zaDNWMGgtMy44QzEwLjYgMCA5IDEuNiA5IDQuNlY4elwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW1fX3RleHRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDUsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiRmFjZWJvb2tcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNywgMCwgbnVsbCwgbnVsbCwgNiwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcInNoYXJlX19pdGVtIHNoYXJlX19pdGVtLS10d2l0dGVyXCJdLCBbXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIl1dLCBbWzgsIFwiaHJlZlwiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoOCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW1fX2ljb25cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDksIDAsIG51bGwsIG51bGwsIDEsIFwiOnN2ZzpzdmdcIiwgW1tcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEwLCAwLCBudWxsLCBudWxsLCAwLCBcIjpzdmc6cGF0aFwiLCBbW1wiZFwiLCBcIk0yNCA0LjZjLTEgLjMtMS44LjYtMi44LjcgMS0uNiAxLjgtMS41IDItMi43LS44LjYtMiAxLTMgMS4yLTEtMS0yLjItMS42LTMuNi0xLjYtMy4yIDAtNS41IDMtNC44IDYtNCAwLTcuNy0yLTEwLTVDLjMgNS4zIDEgOCAzIDkuNmMtLjggMC0xLjYtLjItMi4yLS42IDAgMi40IDEuNSA0LjUgNCA1LS44LjItMS41LjItMi4zIDAgLjYgMiAyLjQgMy41IDQuNiAzLjUtMiAxLjYtNC43IDIuMy03LjMgMiAyLjIgMS40IDQuOCAyLjMgNy41IDIuMyA5LjIgMCAxNC40LTcuOCAxNC0xNC43IDEtLjYgMS44LTEuNSAyLjUtMi40elwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMTEsIDAsIG51bGwsIG51bGwsIDIsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcInNoYXJlX19pdGVtX190ZXh0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxMiwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJUd2l0dGVyXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDE0LCAwLCBudWxsLCBudWxsLCA2LCBcImFcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW0gc2hhcmVfX2l0ZW0tLXZrXCJdLCBbXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIl1dLCBbWzgsIFwiaHJlZlwiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMTUsIDAsIG51bGwsIG51bGwsIDIsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcInNoYXJlX19pdGVtX19pY29uXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxNiwgMCwgbnVsbCwgbnVsbCwgMSwgXCI6c3ZnOnN2Z1wiLCBbW1widmlld0JveFwiLCBcIjAgMCAyNCAyNFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMTcsIDAsIG51bGwsIG51bGwsIDAsIFwiOnN2ZzpwYXRoXCIsIFtbXCJkXCIsIFwiTTEzLjIgMTljLjYgMCAuOC0uNC44LTEgMC0xLjguNy0zIDItMS41IDEuNiAxLjUgMiAyLjUgMy43IDIuNUgyM2MuNyAwIDEtLjMgMS0uNyAwLS44LTEuNC0yLjQtMi42LTMuNS0xLjctMS41LTEuOC0xLjYtLjMtMy41QzIzIDkgMjUuMyA2IDIzIDZoLTMuOGMtLjggMC0xIC40LTEgMS0xIDIuNC0zIDUuNS0zLjggNS0uNy0uNS0uNC0yLjQtLjMtNS4zIDAtLjcgMC0xLjItMS0xLjVMMTEgNUM5IDUgNy40IDYgOC4zIDZjMS42LjQgMS40IDMuOCAxIDUuMy0uNiAyLjUtMy0yLTQtNC4zQzUgNi40IDUgNiA0IDZILjhjLS41IDAtLjguMi0uOC41IDAgLjYgMyA2LjcgNS44IDkuOCAyLjcgMyA1LjUgMi43IDcuNCAyLjd6XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxOCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW1fX3RleHRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDE5LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MTJcXHUwNDFBXFx1MDQzRVxcdTA0M0RcXHUwNDQyXFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzNVwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgyMSwgMCwgbnVsbCwgbnVsbCwgNiwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcInNoYXJlX19pdGVtIHNoYXJlX19pdGVtLS10ZWxlZ3JhbVwiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgW1s4LCBcImhyZWZcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIyLCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJzaGFyZV9faXRlbV9faWNvblwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMjMsIDAsIG51bGwsIG51bGwsIDEsIFwiOnN2ZzpzdmdcIiwgW1tcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDI0LCAwLCBudWxsLCBudWxsLCAwLCBcIjpzdmc6cGF0aFwiLCBbW1wiZFwiLCBcIk0uNCAxMS42bDUuNiAyIDIgN2MuMi4zLjguNSAxIC4ybDMuMi0yLjVjLjMtLjMuOC0uMyAxIDBsNS43IDRjLjMuMy44IDAgMS0uNGw0LTE5LjdjMC0uNS0uNC0xLTEtLjdMLjUgMTAuNGMtLjUuMi0uNSAxIDAgMS4yem03LjMgMWwxMC44LTYuOGMuMyAwIC41LjIuMy40bC05IDguMy0uNSAxTDkgMThjMCAuMy0uNS4zLS41IDBsLTEuMi00Yy0uMi0uNSAwLTEgLjQtMS4zelwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMjUsIDAsIG51bGwsIG51bGwsIDIsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcInNoYXJlX19pdGVtX190ZXh0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyNiwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJUZWxlZ3JhbVwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgyOCwgMCwgbnVsbCwgbnVsbCwgNiwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcInNoYXJlX19pdGVtIHNoYXJlX19pdGVtLS13aGF0c2FwcFwiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgW1s4LCBcImhyZWZcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDI5LCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJzaGFyZV9faXRlbV9faWNvblwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMzAsIDAsIG51bGwsIG51bGwsIDEsIFwiOnN2ZzpzdmdcIiwgW1tcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMxLCAwLCBudWxsLCBudWxsLCAwLCBcIjpzdmc6cGF0aFwiLCBbW1wiZFwiLCBcIk0wIDI0bDEuNy02LjJDLjcgMTYgLjIgMTQgLjIgMTEuOC4yIDUuNCA1LjUgMCAxMi4yIDBjMyAwIDYgMS4yIDguMyAzLjVDMjIuNyA1LjcgMjQgOC43IDI0IDEyYzAgNi41LTUuNCAxMS44LTEyIDExLjgtMiAwLTQtLjUtNS42LTEuNUwwIDI0em02LjctMy44YzEuNiAxIDMuMiAxLjYgNS4zIDEuNiA1LjUgMCAxMC00LjQgMTAtMTBDMjIgNi41IDE3LjQgMiAxMiAyIDYuNyAyIDIuMyA2LjQgMi4zIDEyYzAgMiAuNiAzLjggMS43IDUuNWwtMSAzLjcgMy43LTF6TTE4IDE0LjdsLS41LS4zLTItMWMtLjMgMC0uNSAwLS43LjItLjIuMy0uOCAxLTEgMSAwIC4zLS4zLjQtLjYuMi0uMyAwLTEuMy0uNS0yLjQtMS41LTEtLjgtMS41LTEuNy0xLjctMiAwLS4zIDAtLjUuMy0uNiAwLS4yLjMtLjQuNC0uNi4yIDAgLjItLjIuMy0uNFY5TDkgN2MtLjItLjctLjQtLjYtLjYtLjZoLS42Yy0uMiAwLS41IDAtLjguNHMtMSAxLTEgMi41IDEgMi44IDEuMiAzYy4yLjIgMiAzLjIgNSA0LjVsMS44LjZjLjcuMyAxLjMuMiAyIC4yLjQgMCAxLjYtLjggMi0xLjV2LTEuM3pcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMyLCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJzaGFyZV9faXRlbV9fdGV4dFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMzMsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiV2hhdHNBcHBcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMzUsIDAsIG51bGwsIG51bGwsIDYsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJzaGFyZV9faXRlbSBzaGFyZV9faXRlbS0tdmliZXJcIl0sIFtcInRhcmdldFwiLCBcIl9ibGFua1wiXV0sIFtbOCwgXCJocmVmXCIsIDRdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzNiwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW1fX2ljb25cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDM3LCAwLCBudWxsLCBudWxsLCAxLCBcIjpzdmc6c3ZnXCIsIFtbXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzOCwgMCwgbnVsbCwgbnVsbCwgMCwgXCI6c3ZnOnBhdGhcIiwgW1tcImRcIiwgXCJNMTQuMyAwSDkuN0E4LjcgOC43IDAgMCAwIDEgOC43djQuMWMwIDMuNiAyLjIgNi44IDUuNSA4LjF2Mi43YzAgLjIuMS4zLjMuNEg3bC4zLS4xIDIuNy0yLjRoNC40YzQuOCAwIDguNy0zLjkgOC43LTguN1Y4LjdDMjMgMy45IDE5LjEgMCAxNC4zIDB6bTcuOCAxMi44YzAgNC4zLTMuNSA3LjgtNy44IDcuOEg5LjhsLS4zLjEtMiAxLjh2LTJjMC0uMi0uMS0uNC0uMy0uNEE3LjggNy44IDAgMCAxIDIgMTIuOFY4LjdDMiA0LjQgNS41LjkgOS44LjloNC42YzQuMyAwIDcuOCAzLjUgNy44IDcuOGwtLjEgNC4xek0xOCAxMy45bC0yLjgtMS44Yy0uMy0uMi0uNy0uMy0xLS4yLS40LjEtLjcuMy0uOS42bC0uMS4yYy0xLjItLjQtMi42LS45LTMuNC0zLjJsLjMtLjNjLjYtLjUuNi0xLjQuMS0xLjlMOC4xIDQuN2MtLjItLjItLjUtLjItLjYgMEw2LjEgNS45Yy0xLjIgMS0uNyAyLjYtLjUgMy4xdi4xYTIwIDIwIDAgMCAwIDMgNGMxLjkgMS45IDUuMiAzLjYgNS4zIDMuNy40LjIuOC40IDEuMi40LjcgMCAxLjUtLjQgMS45LTFsMS0xLjVjLjMtLjMuMy0uNiAwLS44em0tMS42IDEuN2MtLjQuNi0xLjMuOC0xLjkuNCAwIDAtMy40LTEuOC01LjEtMy41QzcuOCAxMC44IDYuNyA5IDYuNSA4LjdjLS40LTEuMS0uMy0xLjcuMi0yLjFsMS0uOSAxLjkgMi4yYy4yLjIuMS41IDAgLjZMOSA5Yy0uMS4xLS4yLjMtLjEuNSAxIDMuMSAyLjggMy43IDQuMiA0LjJsLjIuMWMuMi4xLjQgMCAuNS0uMmwuMy0uNS4zLS4yLjMuMSAyLjQgMS42LS43IDF6TTEzIDcuNGMtLjItLjEtLjUuMS0uNi4zLS4xLjIuMS41LjMuNmEyIDIgMCAwIDEgMS41IDEuNGMuMS4yLjIuMy40LjNoLjFjLjItLjEuNC0uMy4zLS42LS4yLS45LTEtMS43LTItMnptMy41IDIuOGguMWMuMi0uMS40LS4zLjMtLjZhNiA2IDAgMCAwLTQtNGMtLjItLjEtLjUuMS0uNi4zcy4xLjUuMy42YzEuNi41IDIuOSAxLjcgMy4zIDMuMy4yLjIuNC40LjYuNHptLTMuNy02LjdjLS4yLS4xLS41LjEtLjYuMy0uMS4yLjEuNS4zLjYgMi43LjggNC45IDIuOSA1LjcgNS43LjEuMi4yLjMuNC4zaC4xYy4yLS4xLjQtLjMuMy0uNmE4LjggOC44IDAgMCAwLTYuMi02LjN6XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzOSwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW1fX3RleHRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDQwLCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlZpYmVyXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDQyLCAwLCBudWxsLCBudWxsLCA2LCBcImFcIiwgW1tcImNsYXNzXCIsIFwic2hhcmVfX2l0ZW0gc2hhcmVfX2l0ZW0tLWdvb2dsZVwiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgW1s4LCBcImhyZWZcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDQzLCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJzaGFyZV9faXRlbV9faWNvblwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNDQsIDAsIG51bGwsIG51bGwsIDEsIFwiOnN2ZzpzdmdcIiwgW1tcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDQ1LCAwLCBudWxsLCBudWxsLCAwLCBcIjpzdmc6cGF0aFwiLCBbW1wiZFwiLCBcIk03IDExdjIuNGg0Yy0uMiAxLTEuMiAzLTQgMy0yLjQgMC00LjMtMi00LjMtNC40IDAtMi40IDItNC40IDQuMy00LjQgMS40IDAgMi4zLjYgMi44IDFsMi0xLjhDMTAuNCA1LjggOC43IDUgNyA1Yy00IDAtNyAzLTcgN3MzIDcgNyA3IDYuNy0yLjggNi43LTYuOFYxMUg3em0wIDBsMTcgMmgtM3YzaC0ydi0zaC0zdi0yaDNWOGgydjNoM3YyelwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNDYsIDAsIG51bGwsIG51bGwsIDIsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcInNoYXJlX19pdGVtX190ZXh0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0NywgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJHb29nZWwrXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gX2NvLmZiVXJsOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzEgPSBfY28udHdpdHRlclVybDsgX2NrKF92LCA3LCAwLCBjdXJyVmFsXzEpOyB2YXIgY3VyclZhbF8yID0gX2NvLnZrVXJsOyBfY2soX3YsIDE0LCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gX2NvLnRlbGVncmFtVXJsOyBfY2soX3YsIDIxLCAwLCBjdXJyVmFsXzMpOyB2YXIgY3VyclZhbF80ID0gX2NvLndoYXRzYXBwVXJsOyBfY2soX3YsIDI4LCAwLCBjdXJyVmFsXzQpOyB2YXIgY3VyclZhbF81ID0gX2NvLnZpYmVyVXJsOyBfY2soX3YsIDM1LCAwLCBjdXJyVmFsXzUpOyB2YXIgY3VyclZhbF82ID0gX2NvLmdvb2dsZVVybDsgX2NrKF92LCA0MiwgMCwgY3VyclZhbF82KTsgfSk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1NoYXJlQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcInNoYXJlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19TaGFyZUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1NoYXJlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQ5MTUyLCBudWxsLCAwLCBpMi5TaGFyZUNvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBTaGFyZUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCIuc2hhcmVcIiwgaTIuU2hhcmVDb21wb25lbnQsIFZpZXdfU2hhcmVDb21wb25lbnRfSG9zdF8wLCB7IHZhbHVlOiBcInZhbHVlXCIgfSwge30sIFtdKTtcbmV4cG9ydCB7IFNoYXJlQ29tcG9uZW50TmdGYWN0b3J5IGFzIFNoYXJlQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvc2hhcmUvc2hhcmUuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfY29tbW9uLF9zaGFyZV9zaGFyZS5jb21wb25lbnQubmdmYWN0b3J5LF9zaGFyZV9zaGFyZS5jb21wb25lbnQsXy4uX3BpcGVzX2ltYWdlX2ltYWdlLnBpcGUsXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX2FydGljbGUuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfY29tbW9uLF9zaGFyZV9zaGFyZS5jb21wb25lbnQubmdmYWN0b3J5LF9zaGFyZV9zaGFyZS5jb21wb25lbnQsXy4uX3BpcGVzX2ltYWdlX2ltYWdlLnBpcGUsXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX2FydGljbGUuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uL3NoYXJlL3NoYXJlLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuLi9zaGFyZS9zaGFyZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlXCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vcGlwZXMvdGltZXN0YW1wL3RpbWVzdGFtcFwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIi4vYXJ0aWNsZS5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfQXJ0aWNsZUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19BcnRpY2xlQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQgfTtcbmZ1bmN0aW9uIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8yKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbW1wiY2xhc3NcIiwgXCJiai1hcnRpY2xlX19oZWFkZXJfX2gyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgxLCBudWxsLCBbXCJcIiwgXCJcIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBfY28udmFsdWUuYmlnVGl0bGU7IF9jayhfdiwgMSwgMCwgY3VyclZhbF8wKTsgfSk7IH1cbmZ1bmN0aW9uIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMTMsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWFydGljbGVfX2hlYWRlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMiwgXCJwaWN0dXJlXCIsIFtbXCJjbGFzc1wiLCBcImJqLWFydGljbGVfX2hlYWRlcl9fcGljdHVyZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMSwgXCJpbWdcIiwgW10sIFtbOCwgXCJzcmNcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDMsIDEpLCAoX2woKSgpLCBpMS7JtWVsZCg0LCAwLCBudWxsLCBudWxsLCA1LCBcInRpbWVcIiwgW1tcImNsYXNzXCIsIFwiYmotYXJ0aWNsZV9faGVhZGVyX19kYXRldGltZVwiXV0sIFtbMSwgXCJkYXRldGltZVwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVwcGQoNSwgMSksIChfbCgpKCksIGkxLsm1ZWxkKDYsIDAsIG51bGwsIG51bGwsIDAsIFwiaVwiLCBbW1wiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCJdLCBbXCJjbGFzc1wiLCBcImZhIGZhLWNsb2NrLW9cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDcsIDAsIG51bGwsIG51bGwsIDIsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCg4LCBudWxsLCBbXCJcIiwgXCJcIl0pKSwgaTEuybVwcGQoOSwgMiksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAxLCBudWxsLCBWaWV3X0FydGljbGVDb21wb25lbnRfMikpLCBpMS7JtWRpZCgxMSwgMTYzODQsIG51bGwsIDAsIGkyLk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMTIsIDAsIG51bGwsIG51bGwsIDEsIFwiaDFcIiwgW1tcImNsYXNzXCIsIFwiYmotYXJ0aWNsZV9faGVhZGVyX19oMVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTMsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMyA9ICEhX2NvLnZhbHVlLmJpZ1RpdGxlOyBfY2soX3YsIDExLCAwLCBjdXJyVmFsXzMpOyB9LCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gaTEuybV1bnYoX3YsIDIsIDAsIF9jayhfdiwgMywgMCwgaTEuybVub3YoX3YucGFyZW50LCAwKSwgX2NvLnZhbHVlLmltYWdlKSk7IF9jayhfdiwgMiwgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IGkxLsm1dW52KF92LCA0LCAwLCBfY2soX3YsIDUsIDAsIGkxLsm1bm92KF92LnBhcmVudCwgMSksIF9jby52YWx1ZS50cykpOyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMSk7IHZhciBjdXJyVmFsXzIgPSBpMS7JtXVudihfdiwgOCwgMCwgX2NrKF92LCA5LCAwLCBpMS7JtW5vdihfdi5wYXJlbnQsIDEpLCBfY28udmFsdWUudHMsIFwiSFJcIikpOyBfY2soX3YsIDgsIDAsIGN1cnJWYWxfMik7IHZhciBjdXJyVmFsXzQgPSBfY28udmFsdWUudGl0bGU7IF9jayhfdiwgMTMsIDAsIGN1cnJWYWxfNCk7IH0pOyB9XG5mdW5jdGlvbiBWaWV3X0FydGljbGVDb21wb25lbnRfMyhfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDMsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWFydGljbGVfX3NoYXJlIHNoYXJlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTMuVmlld19TaGFyZUNvbXBvbmVudF8wLCBpMy5SZW5kZXJUeXBlX1NoYXJlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQ5MTUyLCBudWxsLCAwLCBpNC5TaGFyZUNvbXBvbmVudCwgW10sIHsgdmFsdWU6IFswLCBcInZhbHVlXCJdIH0sIG51bGwpLCBpMS7JtXBwZCgyLCAyKSwgaTEuybVwYWQoMywgMildLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gX2NrKF92LCAzLCAwLCBpMS7JtXVudihfdiwgMSwgMCwgX2NrKF92LCAyLCAwLCBpMS7JtW5vdihfdi5wYXJlbnQsIDEpLCBfY28udmFsdWUudHMsIFwiVVJMXCIpKSwgX2NvLnZhbHVlLnVybCk7IF9jayhfdiwgMSwgMCwgY3VyclZhbF8wKTsgfSwgbnVsbCk7IH1cbmZ1bmN0aW9uIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF80KF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotYXJ0aWNsZV9fY29udGVudCBhcnRpY2xlXCJdXSwgW1s4LCBcImlubmVySFRNTFwiLCAxXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBfY28udmFsdWUuY29udGVudDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbaTEuybVwaWQoMCwgaTUuSW1hZ2VQaXBlLCBbXSksIGkxLsm1cGlkKDAsIGk2LlRpbWVzdGFtcFBpcGUsIFtdKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIG51bGwsIDEsIG51bGwsIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8xKSksIGkxLsm1ZGlkKDMsIDE2Mzg0LCBudWxsLCAwLCBpMi5OZ0lmLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWZdLCB7IG5nSWY6IFswLCBcIm5nSWZcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAxLCBudWxsLCBWaWV3X0FydGljbGVDb21wb25lbnRfMykpLCBpMS7JtWRpZCg1LCAxNjM4NCwgbnVsbCwgMCwgaTIuTmdJZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmXSwgeyBuZ0lmOiBbMCwgXCJuZ0lmXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMSwgbnVsbCwgVmlld19BcnRpY2xlQ29tcG9uZW50XzQpKSwgaTEuybVkaWQoNywgMTYzODQsIG51bGwsIDAsIGkyLk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBfY28udmFsdWU7IF9jayhfdiwgMywgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IF9jby52YWx1ZTsgX2NrKF92LCA1LCAwLCBjdXJyVmFsXzEpOyB2YXIgY3VyclZhbF8yID0gX2NvLnZhbHVlOyBfY2soX3YsIDcsIDAsIGN1cnJWYWxfMik7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19BcnRpY2xlQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWFydGljbGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0FydGljbGVDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9BcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQ5MTUyLCBudWxsLCAwLCBpNy5BcnRpY2xlQ29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBudWxsLCBudWxsKTsgfVxudmFyIEFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiLmJqLWFydGljbGVcIiwgaTcuQXJ0aWNsZUNvbXBvbmVudCwgVmlld19BcnRpY2xlQ29tcG9uZW50X0hvc3RfMCwgeyB2YWx1ZTogXCJ2YWx1ZVwiIH0sIHt9LCBbXSk7XG5leHBvcnQgeyBBcnRpY2xlQ29tcG9uZW50TmdGYWN0b3J5IGFzIEFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfLi5fcHViX2xpbmVfcHViX2xpbmUuY29tcG9uZW50Lm5nZmFjdG9yeSxfYW5ndWxhcl9yb3V0ZXIsX2FuZ3VsYXJfY29tbW9uLF8uLl9wdWJfbGluZV9wdWJfbGluZS5jb21wb25lbnQsXy4uXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50LF9wYWdlX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXIsXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fLi5fc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX2xvYWRlcl9sb2FkZXIuc2VydmljZSBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3B1Yl9saW5lX3B1Yl9saW5lLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfLi5fcHViX2xpbmVfcHViX2xpbmUuY29tcG9uZW50LF8uLl8uLl9waXBlc190aW1lc3RhbXBfdGltZXN0YW1wLF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudCxfcGFnZV9hcnRpY2xlLmNvbXBvbmVudCxfYW5ndWxhcl9wbGF0Zm9ybV9icm93c2VyLF8uLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX21ldGFfbWV0YS5zZXJ2aWNlLF8uLl8uLl9zZXJ2aWNlc19sb2FkZXJfbG9hZGVyLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vcHViLWxpbmUvcHViLWxpbmUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vLi4vcGlwZXMvdGltZXN0YW1wL3RpbWVzdGFtcFwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIi4uLy4uL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpOCBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTkgZnJvbSBcIi4vcGFnZS1hcnRpY2xlLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTEwIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgKiBhcyBpMTEgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTEyIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9tZXRhL21ldGEuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTEzIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9sb2FkZXIvbG9hZGVyLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfUGFnZUFydGljbGVDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VBcnRpY2xlQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VBcnRpY2xlQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUFydGljbGVDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlQXJ0aWNsZUNvbXBvbmVudCB9O1xuZnVuY3Rpb24gVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF8xKF9sKSB7XG4gICAgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA0LCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWxpbmVcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxKS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBpMi5WaWV3X1B1YkxpbmVDb21wb25lbnRfMCwgaTIuUmVuZGVyVHlwZV9QdWJMaW5lQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDY3MTc0NCwgbnVsbCwgMCwgaTMuUm91dGVyTGlua1dpdGhIcmVmLCBbaTMuUm91dGVyLCBpMy5BY3RpdmF0ZWRSb3V0ZSwgaTQuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgaTEuybVwcGQoMiwgMiksIGkxLsm1cGFkKDMsIDMpLCBpMS7JtWRpZCg0LCA0OTE1MiwgbnVsbCwgMCwgaTUuUHViTGluZUNvbXBvbmVudCwgW10sIHsgdmFsdWU6IFswLCBcInZhbHVlXCJdIH0sIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMiA9IF9jayhfdiwgMywgMCwgXCIvXCIsIGkxLsm1dW52KF92LCAxLCAwLCBfY2soX3YsIDIsIDAsIGkxLsm1bm92KF92LnBhcmVudCwgMCksIF92LmNvbnRleHQuJGltcGxpY2l0LnRzLCBcIlVSTFwiKSksIF92LmNvbnRleHQuJGltcGxpY2l0LnVybCk7IF9jayhfdiwgMSwgMCwgY3VyclZhbF8yKTsgdmFyIGN1cnJWYWxfMyA9IF92LmNvbnRleHQuJGltcGxpY2l0OyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMyk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMSkudGFyZ2V0OyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDEpLmhyZWY7IF9jayhfdiwgMCwgMCwgY3VyclZhbF8wLCBjdXJyVmFsXzEpOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VBcnRpY2xlQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtpMS7JtXBpZCgwLCBpNi5UaW1lc3RhbXBQaXBlLCBbXSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDEwLCBcIm1haW5cIiwgW1tcImNsYXNzXCIsIFwiYmotcGFnZS1hcnRpY2xlX193cmFwcGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCA5LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1wYWdlLWFydGljbGVfX3Jvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMiwgXCJhcnRpY2xlXCIsIFtbXCJjbGFzc1wiLCBcImJqLXBhZ2UtYXJ0aWNsZV9fY29sIGJqLWFydGljbGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBpNy5WaWV3X0FydGljbGVDb21wb25lbnRfMCwgaTcuUmVuZGVyVHlwZV9BcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDQsIDQ5MTUyLCBudWxsLCAwLCBpOC5BcnRpY2xlQ29tcG9uZW50LCBbXSwgeyB2YWx1ZTogWzAsIFwidmFsdWVcIl0gfSwgbnVsbCksIGkxLsm1cGlkKDEzMTA3MiwgaTQuQXN5bmNQaXBlLCBbaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdKSwgKF9sKCkoKSwgaTEuybVlbGQoNiwgMCwgbnVsbCwgbnVsbCwgNSwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wYWdlLWFydGljbGVfX2FzaWRlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg3LCAwLCBudWxsLCBudWxsLCAxLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcImNvbHVtbi1oZWFkZXJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDI3XFx1MDQzOFxcdTA0NDJcXHUwNDMwXFx1MDQzOVxcdTA0NDJcXHUwNDM1IFxcdTA0NDJcXHUwNDMwXFx1MDQzQVxcdTA0MzZcXHUwNDM1XCJdKSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAyLCBudWxsLCBWaWV3X1BhZ2VBcnRpY2xlQ29tcG9uZW50XzEpKSwgaTEuybVkaWQoMTAsIDgwMjgxNiwgbnVsbCwgMCwgaTQuTmdGb3JPZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmLCBpMS5JdGVyYWJsZURpZmZlcnNdLCB7IG5nRm9yT2Y6IFswLCBcIm5nRm9yT2ZcIl0gfSwgbnVsbCksIGkxLsm1cGlkKDEzMTA3MiwgaTQuQXN5bmNQaXBlLCBbaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBpMS7JtXVudihfdiwgNCwgMCwgaTEuybVub3YoX3YsIDUpLnRyYW5zZm9ybShfY28uaXRlbSkpOyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzEgPSBpMS7JtXVudihfdiwgMTAsIDAsIGkxLsm1bm92KF92LCAxMSkudHJhbnNmb3JtKF9jby5wdWJsaWNhdGlvbnMpKTsgX2NrKF92LCAxMCwgMCwgY3VyclZhbF8xKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VBcnRpY2xlQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1hcnRpY2xlXCIsIFtbXCJjbGFzc1wiLCBcInBhZ2VcIl1dLCBbWzIsIFwicGFnZS0tbG9hZGluZ1wiLCBudWxsXV0sIG51bGwsIG51bGwsIFZpZXdfUGFnZUFydGljbGVDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlQXJ0aWNsZUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTkuUGFnZUFydGljbGVDb21wb25lbnQsIFtpMS5QTEFURk9STV9JRCwgaTEwLlRyYW5zZmVyU3RhdGUsIGkzLkFjdGl2YXRlZFJvdXRlLCBpMTEuQVBJU2VydmljZSwgaTEyLk1ldGFTZXJ2aWNlLCBpMTMuTG9hZGVyU2VydmljZV0sIG51bGwsIG51bGwpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5zaG93TG9hZGVyOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG52YXIgUGFnZUFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1hcnRpY2xlLnBhZ2VcIiwgaTkuUGFnZUFydGljbGVDb21wb25lbnQsIFZpZXdfUGFnZUFydGljbGVDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VBcnRpY2xlQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VBcnRpY2xlQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIubm8tY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcn1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX25vX2NvbnRlbnQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX25vX2NvbnRlbnQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX25vX2NvbnRlbnQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX25vX2NvbnRlbnQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL25vLWNvbnRlbnQuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vbm8tY29udGVudC5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfTm9Db250ZW50Q29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9Ob0NvbnRlbnRDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfTm9Db250ZW50Q29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfTm9Db250ZW50Q29tcG9uZW50IGFzIFJlbmRlclR5cGVfTm9Db250ZW50Q29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19Ob0NvbnRlbnRDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDMsIFwiaDFcIiwgW1tcImNsYXNzXCIsIFwibm8tY29udGVudFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIjQwNFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImJyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJQYWdlIG5vdCBmb3VudFwiXSkpXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X05vQ29udGVudENvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcIm5vLWNvbnRlbnRcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfTm9Db250ZW50Q29tcG9uZW50XzAsIFJlbmRlclR5cGVfTm9Db250ZW50Q29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQ5MTUyLCBudWxsLCAwLCBpMi5Ob0NvbnRlbnRDb21wb25lbnQsIFtdLCBudWxsLCBudWxsKV0sIG51bGwsIG51bGwpOyB9XG52YXIgTm9Db250ZW50Q29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcIm5vLWNvbnRlbnRcIiwgaTIuTm9Db250ZW50Q29tcG9uZW50LCBWaWV3X05vQ29udGVudENvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgTm9Db250ZW50Q29tcG9uZW50TmdGYWN0b3J5IGFzIE5vQ29udGVudENvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5hdXRoLWZvcm0tdGl0bGVbX25nY29udGVudC0lQ09NUCVde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOmNlbnRlcn0uYXV0aC1mb3JtW19uZ2NvbnRlbnQtJUNPTVAlXXttaW4td2lkdGg6MzAwcHh9LmF1dGgtZm9ybS1yb3dbX25nY29udGVudC0lQ09NUCVde21hcmdpbi10b3A6MTBweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9LmF1dGgtZm9ybS1yb3dbX25nY29udGVudC0lQ09NUCVdOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MH0uYXV0aC1mb3JtLWJ1dHRvbltfbmdjb250ZW50LSVDT01QJV17bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b31cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2F1dGhfZGlhbG9nLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZCxfYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2csX2FuZ3VsYXJfZm9ybXMsXy4uXy4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9hbmd1bGFyX21hdGVyaWFsX2NvcmUsX2FuZ3VsYXJfbWF0ZXJpYWxfaW5wdXQsX2FuZ3VsYXJfY2RrX3BsYXRmb3JtLF9hbmd1bGFyX2NvbW1vbixfLi5fLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX2J1dHRvbl90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSxfYW5ndWxhcl9tYXRlcmlhbF9idXR0b24sX2FuZ3VsYXJfY2RrX2ExMXksX2F1dGhfZGlhbG9nLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9hdXRoX2RpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGQsX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nLF9hbmd1bGFyX2Zvcm1zLF8uLl8uLl8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZF90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSxfYW5ndWxhcl9tYXRlcmlhbF9jb3JlLF9hbmd1bGFyX21hdGVyaWFsX2lucHV0LF9hbmd1bGFyX2Nka19wbGF0Zm9ybSxfYW5ndWxhcl9jb21tb24sXy4uXy4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9idXR0b25fdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uLF9hbmd1bGFyX2Nka19hMTF5LF9hdXRoX2RpYWxvZy5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vYXV0aC1kaWFsb2cuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQvdHlwaW5ncy9pbmRleC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpNyBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCAqIGFzIGk4IGZyb20gXCJAYW5ndWxhci9jZGsvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGk5IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGkxMCBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi90eXBpbmdzL2luZGV4Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTExIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcbmltcG9ydCAqIGFzIGkxMiBmcm9tIFwiQGFuZ3VsYXIvY2RrL2ExMXlcIjtcbmltcG9ydCAqIGFzIGkxMyBmcm9tIFwiLi9hdXRoLWRpYWxvZy5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfQXV0aERpYWxvZ0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfQXV0aERpYWxvZ0NvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAwLCBzdHlsZXM6IHN0eWxlc19BdXRoRGlhbG9nQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfQXV0aERpYWxvZ0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0F1dGhEaWFsb2dDb21wb25lbnQgfTtcbmZ1bmN0aW9uIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgNCwgXCJtYXQtZXJyb3JcIiwgW1tcImNsYXNzXCIsIFwibWF0LWVycm9yXCJdLCBbXCJyb2xlXCIsIFwiYWxlcnRcIl1dLCBbWzEsIFwiaWRcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDEsIDE2Mzg0LCBbWzQsIDRdXSwgMCwgaTIuTWF0RXJyb3IsIFtdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIkVtYWlsIGlzIFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAxLCBcInN0cm9uZ1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wicmVxdWlyZWRcIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMSkuaWQ7IF9jayhfdiwgMCwgMCwgY3VyclZhbF8wKTsgfSk7IH1cbmZ1bmN0aW9uIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8yKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJtYXQtZXJyb3JcIiwgW1tcImNsYXNzXCIsIFwibWF0LWVycm9yXCJdLCBbXCJyb2xlXCIsIFwiYWxlcnRcIl1dLCBbWzEsIFwiaWRcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDEsIDE2Mzg0LCBbWzQsIDRdXSwgMCwgaTIuTWF0RXJyb3IsIFtdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMSkuaWQ7IF9jayhfdiwgMCwgMCwgY3VyclZhbF8wKTsgfSk7IH1cbmZ1bmN0aW9uIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8zKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgNCwgXCJtYXQtZXJyb3JcIiwgW1tcImNsYXNzXCIsIFwibWF0LWVycm9yXCJdLCBbXCJyb2xlXCIsIFwiYWxlcnRcIl1dLCBbWzEsIFwiaWRcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDEsIDE2Mzg0LCBbWzExLCA0XV0sIDAsIGkyLk1hdEVycm9yLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJQYXNzd29yZCBpcyBcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJzdHJvbmdcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcInJlcXVpcmVkXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDEpLmlkOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzAoX2wpIHtcbiAgICByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDIsIFwiaDFcIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtLXRpdGxlIG1hdC1kaWFsb2ctdGl0bGVcIl0sIFtcIm1hdC1kaWFsb2ctdGl0bGVcIiwgXCJcIl1dLCBbWzgsIFwiaWRcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDEsIDgxOTIwLCBudWxsLCAwLCBpMy5NYXREaWFsb2dUaXRsZSwgW1syLCBpMy5NYXREaWFsb2dDb250YWluZXJdXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJBdXRob3JpemF0aW9uXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDQ2LCBcImZvcm1cIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtIG1hdC1kaWFsb2ctY29udGVudFwiXSwgW1wibWF0LWRpYWxvZy1jb250ZW50XCIsIFwiXCJdLCBbXCJub3ZhbGlkYXRlXCIsIFwiXCJdXSwgW1syLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXV0sIFtbbnVsbCwgXCJuZ1N1Ym1pdFwiXSwgW251bGwsIFwic3VibWl0XCJdLCBbbnVsbCwgXCJyZXNldFwiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfY28gPSBfdi5jb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoKFwic3VibWl0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCA1KS5vblN1Ym1pdCgkZXZlbnQpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwicmVzZXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzEgPSAoaTEuybVub3YoX3YsIDUpLm9uUmVzZXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzEgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcIm5nU3VibWl0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8yID0gKF9jby5vblN1Ym1pdCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoNCwgMTYzODQsIG51bGwsIDAsIGk0Lsm1YmYsIFtdLCBudWxsLCBudWxsKSwgaTEuybVkaWQoNSwgNTQwNjcyLCBudWxsLCAwLCBpNC5Gb3JtR3JvdXBEaXJlY3RpdmUsIFtbOCwgbnVsbF0sIFs4LCBudWxsXV0sIHsgZm9ybTogWzAsIFwiZm9ybVwiXSB9LCB7IG5nU3VibWl0OiBcIm5nU3VibWl0XCIgfSksIGkxLsm1cHJkKDIwNDgsIG51bGwsIGk0LkNvbnRyb2xDb250YWluZXIsIG51bGwsIFtpNC5Gb3JtR3JvdXBEaXJlY3RpdmVdKSwgaTEuybVkaWQoNywgMTYzODQsIG51bGwsIDAsIGk0Lk5nQ29udHJvbFN0YXR1c0dyb3VwLCBbaTQuQ29udHJvbENvbnRhaW5lcl0sIG51bGwsIG51bGwpLCBpMS7JtWRpZCg4LCAxNjM4NCwgbnVsbCwgMCwgaTMuTWF0RGlhbG9nQ29udGVudCwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAyMCwgXCJtYXQtZm9ybS1maWVsZFwiLCBbW1wiY2xhc3NcIiwgXCJhdXRoLWZvcm0tcm93IG1hdC1pbnB1dC1jb250YWluZXIgbWF0LWZvcm0tZmllbGRcIl1dLCBbWzIsIFwibWF0LWlucHV0LWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0XCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1oaWRlLXBsYWNlaG9sZGVyXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1kaXNhYmxlZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvY3VzZWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1wcmltYXJ5XCIsIG51bGxdLCBbMiwgXCJtYXQtYWNjZW50XCIsIG51bGxdLCBbMiwgXCJtYXQtd2FyblwiLCBudWxsXSwgWzIsIFwibmctdW50b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy10b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy1wcmlzdGluZVwiLCBudWxsXSwgWzIsIFwibmctZGlydHlcIiwgbnVsbF0sIFsyLCBcIm5nLXZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1wZW5kaW5nXCIsIG51bGxdXSwgbnVsbCwgbnVsbCwgaTUuVmlld19NYXRGb3JtRmllbGRfMCwgaTUuUmVuZGVyVHlwZV9NYXRGb3JtRmllbGQpKSwgaTEuybVkaWQoMTAsIDczODkxODQsIG51bGwsIDcsIGkyLk1hdEZvcm1GaWVsZCwgW2kxLkVsZW1lbnRSZWYsIGkxLkNoYW5nZURldGVjdG9yUmVmLCBbMiwgaTYuTUFUX0xBQkVMX0dMT0JBTF9PUFRJT05TXV0sIG51bGwsIG51bGwpLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDEsIHsgX2NvbnRyb2w6IDAgfSksIGkxLsm1cXVkKDMzNTU0NDMyMCwgMiwgeyBfcGxhY2Vob2xkZXJDaGlsZDogMCB9KSwgaTEuybVxdWQoMzM1NTQ0MzIwLCAzLCB7IF9sYWJlbENoaWxkOiAwIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDQsIHsgX2Vycm9yQ2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgNSwgeyBfaGludENoaWxkcmVuOiAxIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDYsIHsgX3ByZWZpeENoaWxkcmVuOiAxIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDcsIHsgX3N1ZmZpeENoaWxkcmVuOiAxIH0pLCAoX2woKSgpLCBpMS7JtWVsZCgxOCwgMCwgbnVsbCwgMSwgNywgXCJpbnB1dFwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtaW5wdXQtZWxlbWVudCBtYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sXCJdLCBbXCJmb3JtQ29udHJvbE5hbWVcIiwgXCJlbWFpbFwiXSwgW1wibWF0SW5wdXRcIiwgXCJcIl0sIFtcInBsYWNlaG9sZGVyXCIsIFwiRS1tYWlsXCJdLCBbXCJ0eXBlXCIsIFwidGV4dFwiXV0sIFtbMiwgXCJuZy11bnRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXByaXN0aW5lXCIsIG51bGxdLCBbMiwgXCJuZy1kaXJ0eVwiLCBudWxsXSwgWzIsIFwibmctdmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLXBlbmRpbmdcIiwgbnVsbF0sIFsyLCBcIm1hdC1pbnB1dC1zZXJ2ZXJcIiwgbnVsbF0sIFsxLCBcImlkXCIsIDBdLCBbOCwgXCJwbGFjZWhvbGRlclwiLCAwXSwgWzgsIFwiZGlzYWJsZWRcIiwgMF0sIFs4LCBcInJlcXVpcmVkXCIsIDBdLCBbOCwgXCJyZWFkT25seVwiLCAwXSwgWzEsIFwiYXJpYS1kZXNjcmliZWRieVwiLCAwXSwgWzEsIFwiYXJpYS1pbnZhbGlkXCIsIDBdLCBbMSwgXCJhcmlhLXJlcXVpcmVkXCIsIDBdXSwgW1tudWxsLCBcImlucHV0XCJdLCBbbnVsbCwgXCJibHVyXCJdLCBbbnVsbCwgXCJjb21wb3NpdGlvbnN0YXJ0XCJdLCBbbnVsbCwgXCJjb21wb3NpdGlvbmVuZFwiXSwgW251bGwsIFwiZm9jdXNcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiaW5wdXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDE5KS5faGFuZGxlSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJibHVyXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8xID0gKGkxLsm1bm92KF92LCAxOSkub25Ub3VjaGVkKCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8xICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJjb21wb3NpdGlvbnN0YXJ0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8yID0gKGkxLsm1bm92KF92LCAxOSkuX2NvbXBvc2l0aW9uU3RhcnQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzIgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImNvbXBvc2l0aW9uZW5kXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8zID0gKGkxLsm1bm92KF92LCAxOSkuX2NvbXBvc2l0aW9uRW5kKCRldmVudC50YXJnZXQudmFsdWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMyAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiYmx1clwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNCA9IChpMS7JtW5vdihfdiwgMjQpLl9mb2N1c0NoYW5nZWQoZmFsc2UpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiZm9jdXNcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzUgPSAoaTEuybVub3YoX3YsIDI0KS5fZm9jdXNDaGFuZ2VkKHRydWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNSAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiaW5wdXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzYgPSAoaTEuybVub3YoX3YsIDI0KS5fb25JbnB1dCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMTksIDE2Mzg0LCBudWxsLCAwLCBpNC5EZWZhdWx0VmFsdWVBY2Nlc3NvciwgW2kxLlJlbmRlcmVyMiwgaTEuRWxlbWVudFJlZiwgWzIsIGk0LkNPTVBPU0lUSU9OX0JVRkZFUl9NT0RFXV0sIG51bGwsIG51bGwpLCBpMS7JtXByZCgxMDI0LCBudWxsLCBpNC5OR19WQUxVRV9BQ0NFU1NPUiwgZnVuY3Rpb24gKHAwXzApIHsgcmV0dXJuIFtwMF8wXTsgfSwgW2k0LkRlZmF1bHRWYWx1ZUFjY2Vzc29yXSksIGkxLsm1ZGlkKDIxLCA2NzE3NDQsIG51bGwsIDAsIGk0LkZvcm1Db250cm9sTmFtZSwgW1szLCBpNC5Db250cm9sQ29udGFpbmVyXSwgWzgsIG51bGxdLCBbOCwgbnVsbF0sIFsyLCBpNC5OR19WQUxVRV9BQ0NFU1NPUl1dLCB7IG5hbWU6IFswLCBcIm5hbWVcIl0gfSwgbnVsbCksIGkxLsm1cHJkKDIwNDgsIG51bGwsIGk0Lk5nQ29udHJvbCwgbnVsbCwgW2k0LkZvcm1Db250cm9sTmFtZV0pLCBpMS7JtWRpZCgyMywgMTYzODQsIG51bGwsIDAsIGk0Lk5nQ29udHJvbFN0YXR1cywgW2k0Lk5nQ29udHJvbF0sIG51bGwsIG51bGwpLCBpMS7JtWRpZCgyNCwgOTMzODg4LCBudWxsLCAwLCBpNy5NYXRJbnB1dCwgW2kxLkVsZW1lbnRSZWYsIGk4LlBsYXRmb3JtLCBbMiwgaTQuTmdDb250cm9sXSwgWzIsIGk0Lk5nRm9ybV0sIFsyLCBpNC5Gb3JtR3JvdXBEaXJlY3RpdmVdLCBpNi5FcnJvclN0YXRlTWF0Y2hlciwgWzgsIG51bGxdXSwgeyBwbGFjZWhvbGRlcjogWzAsIFwicGxhY2Vob2xkZXJcIl0sIHR5cGU6IFsxLCBcInR5cGVcIl0gfSwgbnVsbCksIGkxLsm1cHJkKDIwNDgsIFtbMSwgNF1dLCBpMi5NYXRGb3JtRmllbGRDb250cm9sLCBudWxsLCBbaTcuTWF0SW5wdXRdKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIDUsIDEsIG51bGwsIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8xKSksIGkxLsm1ZGlkKDI3LCAxNjM4NCwgbnVsbCwgMCwgaTkuTmdJZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmXSwgeyBuZ0lmOiBbMCwgXCJuZ0lmXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgNSwgMSwgbnVsbCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzIpKSwgaTEuybVkaWQoMjksIDE2Mzg0LCBudWxsLCAwLCBpOS5OZ0lmLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWZdLCB7IG5nSWY6IFswLCBcIm5nSWZcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDMwLCAwLCBudWxsLCBudWxsLCAxOCwgXCJtYXQtZm9ybS1maWVsZFwiLCBbW1wiY2xhc3NcIiwgXCJhdXRoLWZvcm0tcm93IG1hdC1pbnB1dC1jb250YWluZXIgbWF0LWZvcm0tZmllbGRcIl1dLCBbWzIsIFwibWF0LWlucHV0LWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0XCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1oaWRlLXBsYWNlaG9sZGVyXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1kaXNhYmxlZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvY3VzZWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1wcmltYXJ5XCIsIG51bGxdLCBbMiwgXCJtYXQtYWNjZW50XCIsIG51bGxdLCBbMiwgXCJtYXQtd2FyblwiLCBudWxsXSwgWzIsIFwibmctdW50b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy10b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy1wcmlzdGluZVwiLCBudWxsXSwgWzIsIFwibmctZGlydHlcIiwgbnVsbF0sIFsyLCBcIm5nLXZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1wZW5kaW5nXCIsIG51bGxdXSwgbnVsbCwgbnVsbCwgaTUuVmlld19NYXRGb3JtRmllbGRfMCwgaTUuUmVuZGVyVHlwZV9NYXRGb3JtRmllbGQpKSwgaTEuybVkaWQoMzEsIDczODkxODQsIG51bGwsIDcsIGkyLk1hdEZvcm1GaWVsZCwgW2kxLkVsZW1lbnRSZWYsIGkxLkNoYW5nZURldGVjdG9yUmVmLCBbMiwgaTYuTUFUX0xBQkVMX0dMT0JBTF9PUFRJT05TXV0sIG51bGwsIG51bGwpLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDgsIHsgX2NvbnRyb2w6IDAgfSksIGkxLsm1cXVkKDMzNTU0NDMyMCwgOSwgeyBfcGxhY2Vob2xkZXJDaGlsZDogMCB9KSwgaTEuybVxdWQoMzM1NTQ0MzIwLCAxMCwgeyBfbGFiZWxDaGlsZDogMCB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCAxMSwgeyBfZXJyb3JDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCAxMiwgeyBfaGludENoaWxkcmVuOiAxIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDEzLCB7IF9wcmVmaXhDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCAxNCwgeyBfc3VmZml4Q2hpbGRyZW46IDEgfSksIChfbCgpKCksIGkxLsm1ZWxkKDM5LCAwLCBudWxsLCAxLCA3LCBcImlucHV0XCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1pbnB1dC1lbGVtZW50IG1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2xcIl0sIFtcImZvcm1Db250cm9sTmFtZVwiLCBcInBhc3N3b3JkXCJdLCBbXCJtYXRJbnB1dFwiLCBcIlwiXSwgW1wicGxhY2Vob2xkZXJcIiwgXCJQYXNzd29yZFwiXSwgW1widHlwZVwiLCBcInBhc3N3b3JkXCJdXSwgW1syLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXSwgWzIsIFwibWF0LWlucHV0LXNlcnZlclwiLCBudWxsXSwgWzEsIFwiaWRcIiwgMF0sIFs4LCBcInBsYWNlaG9sZGVyXCIsIDBdLCBbOCwgXCJkaXNhYmxlZFwiLCAwXSwgWzgsIFwicmVxdWlyZWRcIiwgMF0sIFs4LCBcInJlYWRPbmx5XCIsIDBdLCBbMSwgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIDBdLCBbMSwgXCJhcmlhLWludmFsaWRcIiwgMF0sIFsxLCBcImFyaWEtcmVxdWlyZWRcIiwgMF1dLCBbW251bGwsIFwiaW5wdXRcIl0sIFtudWxsLCBcImJsdXJcIl0sIFtudWxsLCBcImNvbXBvc2l0aW9uc3RhcnRcIl0sIFtudWxsLCBcImNvbXBvc2l0aW9uZW5kXCJdLCBbbnVsbCwgXCJmb2N1c1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJpbnB1dFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgNDApLl9oYW5kbGVJbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImJsdXJcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzEgPSAoaTEuybVub3YoX3YsIDQwKS5vblRvdWNoZWQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzEgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImNvbXBvc2l0aW9uc3RhcnRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzIgPSAoaTEuybVub3YoX3YsIDQwKS5fY29tcG9zaXRpb25TdGFydCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiY29tcG9zaXRpb25lbmRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzMgPSAoaTEuybVub3YoX3YsIDQwKS5fY29tcG9zaXRpb25FbmQoJGV2ZW50LnRhcmdldC52YWx1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8zICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJibHVyXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF80ID0gKGkxLsm1bm92KF92LCA0NSkuX2ZvY3VzQ2hhbmdlZChmYWxzZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF80ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJmb2N1c1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNSA9IChpMS7JtW5vdihfdiwgNDUpLl9mb2N1c0NoYW5nZWQodHJ1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF81ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJpbnB1dFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNiA9IChpMS7JtW5vdihfdiwgNDUpLl9vbklucHV0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF82ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg0MCwgMTYzODQsIG51bGwsIDAsIGk0LkRlZmF1bHRWYWx1ZUFjY2Vzc29yLCBbaTEuUmVuZGVyZXIyLCBpMS5FbGVtZW50UmVmLCBbMiwgaTQuQ09NUE9TSVRJT05fQlVGRkVSX01PREVdXSwgbnVsbCwgbnVsbCksIGkxLsm1cHJkKDEwMjQsIG51bGwsIGk0Lk5HX1ZBTFVFX0FDQ0VTU09SLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTQuRGVmYXVsdFZhbHVlQWNjZXNzb3JdKSwgaTEuybVkaWQoNDIsIDY3MTc0NCwgbnVsbCwgMCwgaTQuRm9ybUNvbnRyb2xOYW1lLCBbWzMsIGk0LkNvbnRyb2xDb250YWluZXJdLCBbOCwgbnVsbF0sIFs4LCBudWxsXSwgWzIsIGk0Lk5HX1ZBTFVFX0FDQ0VTU09SXV0sIHsgbmFtZTogWzAsIFwibmFtZVwiXSB9LCBudWxsKSwgaTEuybVwcmQoMjA0OCwgbnVsbCwgaTQuTmdDb250cm9sLCBudWxsLCBbaTQuRm9ybUNvbnRyb2xOYW1lXSksIGkxLsm1ZGlkKDQ0LCAxNjM4NCwgbnVsbCwgMCwgaTQuTmdDb250cm9sU3RhdHVzLCBbaTQuTmdDb250cm9sXSwgbnVsbCwgbnVsbCksIGkxLsm1ZGlkKDQ1LCA5MzM4ODgsIG51bGwsIDAsIGk3Lk1hdElucHV0LCBbaTEuRWxlbWVudFJlZiwgaTguUGxhdGZvcm0sIFsyLCBpNC5OZ0NvbnRyb2xdLCBbMiwgaTQuTmdGb3JtXSwgWzIsIGk0LkZvcm1Hcm91cERpcmVjdGl2ZV0sIGk2LkVycm9yU3RhdGVNYXRjaGVyLCBbOCwgbnVsbF1dLCB7IHBsYWNlaG9sZGVyOiBbMCwgXCJwbGFjZWhvbGRlclwiXSwgdHlwZTogWzEsIFwidHlwZVwiXSB9LCBudWxsKSwgaTEuybVwcmQoMjA0OCwgW1s4LCA0XV0sIGkyLk1hdEZvcm1GaWVsZENvbnRyb2wsIG51bGwsIFtpNy5NYXRJbnB1dF0pLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgNSwgMSwgbnVsbCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzMpKSwgaTEuybVkaWQoNDgsIDE2Mzg0LCBudWxsLCAwLCBpOS5OZ0lmLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWZdLCB7IG5nSWY6IFswLCBcIm5nSWZcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDQ5LCAwLCBudWxsLCBudWxsLCAwLCBcImlucHV0XCIsIFtbXCJoaWRkZW5cIiwgXCJcIl0sIFtcInR5cGVcIiwgXCJzdWJtaXRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDUwLCAwLCBudWxsLCBudWxsLCA1LCBcIm1hdC1kaWFsb2ctYWN0aW9uc1wiLCBbW1wiY2xhc3NcIiwgXCJtYXQtZGlhbG9nLWFjdGlvbnNcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDUxLCAxNjM4NCwgbnVsbCwgMCwgaTMuTWF0RGlhbG9nQWN0aW9ucywgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg1MiwgMCwgbnVsbCwgbnVsbCwgMywgXCJidXR0b25cIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtLWJ1dHRvbiBtYXQtYnV0dG9uXCJdLCBbXCJjb2xvclwiLCBcInByaW1hcnlcIl0sIFtcIm1hdC1idXR0b25cIiwgXCJcIl0sIFtcInR5cGVcIiwgXCJzdWJtaXRcIl1dLCBbWzgsIFwiZGlzYWJsZWRcIiwgMF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2NvID0gX3YuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKF9jby5vblN1Ym1pdCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIGkxMC5WaWV3X01hdEJ1dHRvbl8wLCBpMTAuUmVuZGVyVHlwZV9NYXRCdXR0b24pKSwgaTEuybVkaWQoNTMsIDE4MDIyNCwgbnVsbCwgMCwgaTExLk1hdEJ1dHRvbiwgW2kxLkVsZW1lbnRSZWYsIGk4LlBsYXRmb3JtLCBpMTIuRm9jdXNNb25pdG9yXSwgeyBkaXNhYmxlZDogWzAsIFwiZGlzYWJsZWRcIl0sIGNvbG9yOiBbMSwgXCJjb2xvclwiXSB9LCBudWxsKSwgaTEuybVkaWQoNTQsIDE2Mzg0LCBudWxsLCAwLCBpMTEuTWF0QnV0dG9uQ3NzTWF0U3R5bGVyLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCAwLCBbXCJTdWJtaXRcIl0pKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IF9jayhfdiwgMSwgMCk7IHZhciBjdXJyVmFsXzggPSBfY28uYXV0aEZvcm07IF9jayhfdiwgNSwgMCwgY3VyclZhbF84KTsgdmFyIGN1cnJWYWxfNDIgPSBcImVtYWlsXCI7IF9jayhfdiwgMjEsIDAsIGN1cnJWYWxfNDIpOyB2YXIgY3VyclZhbF80MyA9IFwiRS1tYWlsXCI7IHZhciBjdXJyVmFsXzQ0ID0gXCJ0ZXh0XCI7IF9jayhfdiwgMjQsIDAsIGN1cnJWYWxfNDMsIGN1cnJWYWxfNDQpOyB2YXIgY3VyclZhbF80NSA9IF9jby5hdXRoRm9ybS5jb250cm9scy5lbWFpbC5oYXNFcnJvcihcInJlcXVpcmVkXCIpOyBfY2soX3YsIDI3LCAwLCBjdXJyVmFsXzQ1KTsgdmFyIGN1cnJWYWxfNDYgPSBfY28uYXV0aEZvcm0uY29udHJvbHMuZW1haWwuaGFzRXJyb3IoXCJlbWFpbFwiKTsgX2NrKF92LCAyOSwgMCwgY3VyclZhbF80Nik7IHZhciBjdXJyVmFsXzgwID0gXCJwYXNzd29yZFwiOyBfY2soX3YsIDQyLCAwLCBjdXJyVmFsXzgwKTsgdmFyIGN1cnJWYWxfODEgPSBcIlBhc3N3b3JkXCI7IHZhciBjdXJyVmFsXzgyID0gXCJwYXNzd29yZFwiOyBfY2soX3YsIDQ1LCAwLCBjdXJyVmFsXzgxLCBjdXJyVmFsXzgyKTsgdmFyIGN1cnJWYWxfODMgPSBfY28uYXV0aEZvcm0uY29udHJvbHMucGFzc3dvcmQuaGFzRXJyb3IoXCJyZXF1aXJlZFwiKTsgX2NrKF92LCA0OCwgMCwgY3VyclZhbF84Myk7IHZhciBjdXJyVmFsXzg1ID0gX2NvLmF1dGhGb3JtLmludmFsaWQ7IHZhciBjdXJyVmFsXzg2ID0gXCJwcmltYXJ5XCI7IF9jayhfdiwgNTMsIDAsIGN1cnJWYWxfODUsIGN1cnJWYWxfODYpOyB9LCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDEpLmlkOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzEgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1VudG91Y2hlZDsgdmFyIGN1cnJWYWxfMiA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzVG91Y2hlZDsgdmFyIGN1cnJWYWxfMyA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzUHJpc3RpbmU7IHZhciBjdXJyVmFsXzQgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc0RpcnR5OyB2YXIgY3VyclZhbF81ID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NWYWxpZDsgdmFyIGN1cnJWYWxfNiA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzSW52YWxpZDsgdmFyIGN1cnJWYWxfNyA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzUGVuZGluZzsgX2NrKF92LCAzLCAwLCBjdXJyVmFsXzEsIGN1cnJWYWxfMiwgY3VyclZhbF8zLCBjdXJyVmFsXzQsIGN1cnJWYWxfNSwgY3VyclZhbF82LCBjdXJyVmFsXzcpOyB2YXIgY3VyclZhbF85ID0gaTEuybVub3YoX3YsIDEwKS5fY29udHJvbC5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF8xMCA9IGkxLsm1bm92KF92LCAxMCkuX2NvbnRyb2wuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfMTEgPSBpMS7JtW5vdihfdiwgMTApLl9jYW5MYWJlbEZsb2F0OyB2YXIgY3VyclZhbF8xMiA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZExhYmVsRmxvYXQoKTsgdmFyIGN1cnJWYWxfMTMgPSBpMS7JtW5vdihfdiwgMTApLl9oaWRlQ29udHJvbFBsYWNlaG9sZGVyKCk7IHZhciBjdXJyVmFsXzE0ID0gaTEuybVub3YoX3YsIDEwKS5fY29udHJvbC5kaXNhYmxlZDsgdmFyIGN1cnJWYWxfMTUgPSBpMS7JtW5vdihfdiwgMTApLl9jb250cm9sLmZvY3VzZWQ7IHZhciBjdXJyVmFsXzE2ID0gKGkxLsm1bm92KF92LCAxMCkuY29sb3IgPT0gXCJwcmltYXJ5XCIpOyB2YXIgY3VyclZhbF8xNyA9IChpMS7JtW5vdihfdiwgMTApLmNvbG9yID09IFwiYWNjZW50XCIpOyB2YXIgY3VyclZhbF8xOCA9IChpMS7JtW5vdihfdiwgMTApLmNvbG9yID09IFwid2FyblwiKTsgdmFyIGN1cnJWYWxfMTkgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpOyB2YXIgY3VyclZhbF8yMCA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJ0b3VjaGVkXCIpOyB2YXIgY3VyclZhbF8yMSA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKTsgdmFyIGN1cnJWYWxfMjIgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwiZGlydHlcIik7IHZhciBjdXJyVmFsXzIzID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInZhbGlkXCIpOyB2YXIgY3VyclZhbF8yNCA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJpbnZhbGlkXCIpOyB2YXIgY3VyclZhbF8yNSA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpOyBfY2soX3YsIDksIDEsIFtjdXJyVmFsXzksIGN1cnJWYWxfMTAsIGN1cnJWYWxfMTEsIGN1cnJWYWxfMTIsIGN1cnJWYWxfMTMsIGN1cnJWYWxfMTQsIGN1cnJWYWxfMTUsIGN1cnJWYWxfMTYsIGN1cnJWYWxfMTcsIGN1cnJWYWxfMTgsIGN1cnJWYWxfMTksIGN1cnJWYWxfMjAsIGN1cnJWYWxfMjEsIGN1cnJWYWxfMjIsIGN1cnJWYWxfMjMsIGN1cnJWYWxfMjQsIGN1cnJWYWxfMjVdKTsgdmFyIGN1cnJWYWxfMjYgPSBpMS7JtW5vdihfdiwgMjMpLm5nQ2xhc3NVbnRvdWNoZWQ7IHZhciBjdXJyVmFsXzI3ID0gaTEuybVub3YoX3YsIDIzKS5uZ0NsYXNzVG91Y2hlZDsgdmFyIGN1cnJWYWxfMjggPSBpMS7JtW5vdihfdiwgMjMpLm5nQ2xhc3NQcmlzdGluZTsgdmFyIGN1cnJWYWxfMjkgPSBpMS7JtW5vdihfdiwgMjMpLm5nQ2xhc3NEaXJ0eTsgdmFyIGN1cnJWYWxfMzAgPSBpMS7JtW5vdihfdiwgMjMpLm5nQ2xhc3NWYWxpZDsgdmFyIGN1cnJWYWxfMzEgPSBpMS7JtW5vdihfdiwgMjMpLm5nQ2xhc3NJbnZhbGlkOyB2YXIgY3VyclZhbF8zMiA9IGkxLsm1bm92KF92LCAyMykubmdDbGFzc1BlbmRpbmc7IHZhciBjdXJyVmFsXzMzID0gaTEuybVub3YoX3YsIDI0KS5faXNTZXJ2ZXI7IHZhciBjdXJyVmFsXzM0ID0gaTEuybVub3YoX3YsIDI0KS5pZDsgdmFyIGN1cnJWYWxfMzUgPSBpMS7JtW5vdihfdiwgMjQpLnBsYWNlaG9sZGVyOyB2YXIgY3VyclZhbF8zNiA9IGkxLsm1bm92KF92LCAyNCkuZGlzYWJsZWQ7IHZhciBjdXJyVmFsXzM3ID0gaTEuybVub3YoX3YsIDI0KS5yZXF1aXJlZDsgdmFyIGN1cnJWYWxfMzggPSBpMS7JtW5vdihfdiwgMjQpLnJlYWRvbmx5OyB2YXIgY3VyclZhbF8zOSA9IChpMS7JtW5vdihfdiwgMjQpLl9hcmlhRGVzY3JpYmVkYnkgfHwgbnVsbCk7IHZhciBjdXJyVmFsXzQwID0gaTEuybVub3YoX3YsIDI0KS5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF80MSA9IGkxLsm1bm92KF92LCAyNCkucmVxdWlyZWQudG9TdHJpbmcoKTsgX2NrKF92LCAxOCwgMSwgW2N1cnJWYWxfMjYsIGN1cnJWYWxfMjcsIGN1cnJWYWxfMjgsIGN1cnJWYWxfMjksIGN1cnJWYWxfMzAsIGN1cnJWYWxfMzEsIGN1cnJWYWxfMzIsIGN1cnJWYWxfMzMsIGN1cnJWYWxfMzQsIGN1cnJWYWxfMzUsIGN1cnJWYWxfMzYsIGN1cnJWYWxfMzcsIGN1cnJWYWxfMzgsIGN1cnJWYWxfMzksIGN1cnJWYWxfNDAsIGN1cnJWYWxfNDFdKTsgdmFyIGN1cnJWYWxfNDcgPSBpMS7JtW5vdihfdiwgMzEpLl9jb250cm9sLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzQ4ID0gaTEuybVub3YoX3YsIDMxKS5fY29udHJvbC5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF80OSA9IGkxLsm1bm92KF92LCAzMSkuX2NhbkxhYmVsRmxvYXQ7IHZhciBjdXJyVmFsXzUwID0gaTEuybVub3YoX3YsIDMxKS5fc2hvdWxkTGFiZWxGbG9hdCgpOyB2YXIgY3VyclZhbF81MSA9IGkxLsm1bm92KF92LCAzMSkuX2hpZGVDb250cm9sUGxhY2Vob2xkZXIoKTsgdmFyIGN1cnJWYWxfNTIgPSBpMS7JtW5vdihfdiwgMzEpLl9jb250cm9sLmRpc2FibGVkOyB2YXIgY3VyclZhbF81MyA9IGkxLsm1bm92KF92LCAzMSkuX2NvbnRyb2wuZm9jdXNlZDsgdmFyIGN1cnJWYWxfNTQgPSAoaTEuybVub3YoX3YsIDMxKS5jb2xvciA9PSBcInByaW1hcnlcIik7IHZhciBjdXJyVmFsXzU1ID0gKGkxLsm1bm92KF92LCAzMSkuY29sb3IgPT0gXCJhY2NlbnRcIik7IHZhciBjdXJyVmFsXzU2ID0gKGkxLsm1bm92KF92LCAzMSkuY29sb3IgPT0gXCJ3YXJuXCIpOyB2YXIgY3VyclZhbF81NyA9IGkxLsm1bm92KF92LCAzMSkuX3Nob3VsZEZvcndhcmQoXCJ1bnRvdWNoZWRcIik7IHZhciBjdXJyVmFsXzU4ID0gaTEuybVub3YoX3YsIDMxKS5fc2hvdWxkRm9yd2FyZChcInRvdWNoZWRcIik7IHZhciBjdXJyVmFsXzU5ID0gaTEuybVub3YoX3YsIDMxKS5fc2hvdWxkRm9yd2FyZChcInByaXN0aW5lXCIpOyB2YXIgY3VyclZhbF82MCA9IGkxLsm1bm92KF92LCAzMSkuX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKTsgdmFyIGN1cnJWYWxfNjEgPSBpMS7JtW5vdihfdiwgMzEpLl9zaG91bGRGb3J3YXJkKFwidmFsaWRcIik7IHZhciBjdXJyVmFsXzYyID0gaTEuybVub3YoX3YsIDMxKS5fc2hvdWxkRm9yd2FyZChcImludmFsaWRcIik7IHZhciBjdXJyVmFsXzYzID0gaTEuybVub3YoX3YsIDMxKS5fc2hvdWxkRm9yd2FyZChcInBlbmRpbmdcIik7IF9jayhfdiwgMzAsIDEsIFtjdXJyVmFsXzQ3LCBjdXJyVmFsXzQ4LCBjdXJyVmFsXzQ5LCBjdXJyVmFsXzUwLCBjdXJyVmFsXzUxLCBjdXJyVmFsXzUyLCBjdXJyVmFsXzUzLCBjdXJyVmFsXzU0LCBjdXJyVmFsXzU1LCBjdXJyVmFsXzU2LCBjdXJyVmFsXzU3LCBjdXJyVmFsXzU4LCBjdXJyVmFsXzU5LCBjdXJyVmFsXzYwLCBjdXJyVmFsXzYxLCBjdXJyVmFsXzYyLCBjdXJyVmFsXzYzXSk7IHZhciBjdXJyVmFsXzY0ID0gaTEuybVub3YoX3YsIDQ0KS5uZ0NsYXNzVW50b3VjaGVkOyB2YXIgY3VyclZhbF82NSA9IGkxLsm1bm92KF92LCA0NCkubmdDbGFzc1RvdWNoZWQ7IHZhciBjdXJyVmFsXzY2ID0gaTEuybVub3YoX3YsIDQ0KS5uZ0NsYXNzUHJpc3RpbmU7IHZhciBjdXJyVmFsXzY3ID0gaTEuybVub3YoX3YsIDQ0KS5uZ0NsYXNzRGlydHk7IHZhciBjdXJyVmFsXzY4ID0gaTEuybVub3YoX3YsIDQ0KS5uZ0NsYXNzVmFsaWQ7IHZhciBjdXJyVmFsXzY5ID0gaTEuybVub3YoX3YsIDQ0KS5uZ0NsYXNzSW52YWxpZDsgdmFyIGN1cnJWYWxfNzAgPSBpMS7JtW5vdihfdiwgNDQpLm5nQ2xhc3NQZW5kaW5nOyB2YXIgY3VyclZhbF83MSA9IGkxLsm1bm92KF92LCA0NSkuX2lzU2VydmVyOyB2YXIgY3VyclZhbF83MiA9IGkxLsm1bm92KF92LCA0NSkuaWQ7IHZhciBjdXJyVmFsXzczID0gaTEuybVub3YoX3YsIDQ1KS5wbGFjZWhvbGRlcjsgdmFyIGN1cnJWYWxfNzQgPSBpMS7JtW5vdihfdiwgNDUpLmRpc2FibGVkOyB2YXIgY3VyclZhbF83NSA9IGkxLsm1bm92KF92LCA0NSkucmVxdWlyZWQ7IHZhciBjdXJyVmFsXzc2ID0gaTEuybVub3YoX3YsIDQ1KS5yZWFkb25seTsgdmFyIGN1cnJWYWxfNzcgPSAoaTEuybVub3YoX3YsIDQ1KS5fYXJpYURlc2NyaWJlZGJ5IHx8IG51bGwpOyB2YXIgY3VyclZhbF83OCA9IGkxLsm1bm92KF92LCA0NSkuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfNzkgPSBpMS7JtW5vdihfdiwgNDUpLnJlcXVpcmVkLnRvU3RyaW5nKCk7IF9jayhfdiwgMzksIDEsIFtjdXJyVmFsXzY0LCBjdXJyVmFsXzY1LCBjdXJyVmFsXzY2LCBjdXJyVmFsXzY3LCBjdXJyVmFsXzY4LCBjdXJyVmFsXzY5LCBjdXJyVmFsXzcwLCBjdXJyVmFsXzcxLCBjdXJyVmFsXzcyLCBjdXJyVmFsXzczLCBjdXJyVmFsXzc0LCBjdXJyVmFsXzc1LCBjdXJyVmFsXzc2LCBjdXJyVmFsXzc3LCBjdXJyVmFsXzc4LCBjdXJyVmFsXzc5XSk7IHZhciBjdXJyVmFsXzg0ID0gKGkxLsm1bm92KF92LCA1MykuZGlzYWJsZWQgfHwgbnVsbCk7IF9jayhfdiwgNTIsIDAsIGN1cnJWYWxfODQpOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJhdXRoLWRpYWxvZ1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfQXV0aERpYWxvZ0NvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTEzLkF1dGhEaWFsb2dDb21wb25lbnQsIFtpMy5NYXREaWFsb2dSZWYsIGk0LkZvcm1CdWlsZGVyLCBpMy5NQVRfRElBTE9HX0RBVEFdLCBudWxsLCBudWxsKV0sIG51bGwsIG51bGwpOyB9XG52YXIgQXV0aERpYWxvZ0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJhdXRoLWRpYWxvZ1wiLCBpMTMuQXV0aERpYWxvZ0NvbXBvbmVudCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBBdXRoRGlhbG9nQ29tcG9uZW50TmdGYWN0b3J5IGFzIEF1dGhEaWFsb2dDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5iai1oZWFkZXJ7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMHB4O3otaW5kZXg6OTAwO2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsLjEyKSwwIDFweCAycHggcmdiYSgwLDAsMCwuMjQpfS5iai1oZWFkZXJfX3Jvdy13cmFwcGVye2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6NTAlO2JhY2tncm91bmQ6I2ZmZn0uYmotaGVhZGVyX19yb3ctd3JhcHBlci0tZGFya3tiYWNrZ3JvdW5kOnZhcigtLWNvbG9yLW1haW4pO2NvbG9yOiNmZmZ9LmJqLWhlYWRlcl9fcm93e21hcmdpbjowIGF1dG87aGVpZ2h0OjEwMCU7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7ZGlzcGxheTpmbGV4fUBtZWRpYSAobWluLXdpZHRoOjEwMDBweCl7LmJqLWhlYWRlcl9fcm93e3BhZGRpbmc6MCAwIDAgdmFyKC0taW5kZW50LWJhc2UpfX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5iai1oZWFkZXJfX3Jvd3twYWRkaW5nOjAgdmFyKC0taW5kZW50LWJhc2UpIDAgdmFyKC0taW5kZW50LWRvdWJsZSl9fS5iai1oZWFkZXJfX2J1dHRvbntoZWlnaHQ6MTAwJTtwYWRkaW5nOjAgdmFyKC0taW5kZW50LWJhc2UpO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWRlY29yYXRpb246bm9uZTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2ZvbnQtc3R5bGU6bm9ybWFsO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZTtjb2xvcjppbmhlcml0O3doaXRlLXNwYWNlOm5vd3JhcDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3N9LmJqLWhlYWRlcl9fYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItaG92ZXItbGlnaHQpfS5iai1oZWFkZXJfX2J1dHRvbi0taWNvbntmb250LXNpemU6MS41cmVtfS5iai1oZWFkZXJfX2J1dHRvbi0tbG9naW57ZGlzcGxheTpub25lfUBtZWRpYSAobWluLXdpZHRoOjEwMDBweCl7LmJqLWhlYWRlcl9fYnV0dG9uLS1tZW51e2Rpc3BsYXk6bm9uZX0uYmotaGVhZGVyX19idXR0b24tLWxvZ2lue2Rpc3BsYXk6ZmxleH19LmJqLWhlYWRlcl9fbG9nb3toZWlnaHQ6NTZweDt3aWR0aDo1NnB4O21hcmdpbjotM3B4IGF1dG8gMDtwYWRkaW5nOjA7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1tYWluKTtib3JkZXI6M3B4IHNvbGlkICNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3otaW5kZXg6OTk5O2N1cnNvcjpwb2ludGVyfS5iai1oZWFkZXJfX2xvZ28gaW1ne2hlaWdodDo1MCU7d2lkdGg6YXV0bzttYXJnaW4tbGVmdDotNSV9QG1lZGlhIChtaW4td2lkdGg6MTAwMHB4KXsuYmotaGVhZGVyX19sb2dve2hlaWdodDo5NHB4O3dpZHRoOjk0cHg7bWFyZ2luOjRweCB2YXIoLS1pbmRlbnQtaGFsZikgMCAwfX0uYmotaGVhZGVyX19uYXZ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDt0b3A6NTBweDtib3R0b206MDtoZWlnaHQ6YXV0bztsZWZ0OjAlO3dpZHRoOjcwdnc7bWF4LXdpZHRoOjMwMHB4O21hcmdpbi1yaWdodDphdXRvO2JhY2tncm91bmQ6dmFyKC0tY29sb3ItbWFpbik7Y29sb3I6I2ZmZjt6LWluZGV4Ojk1MDt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDUlKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3N9LmJqLWhlYWRlcl9fbmF2LS1zaG93e3RyYW5zZm9ybTp0cmFuc2xhdGUoMCUpfS5iai1oZWFkZXJfX25hdiAuYmotaGVhZGVyX19idXR0b257aGVpZ2h0OjUwcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgIzU1NTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMTExfUBtZWRpYSAobWluLXdpZHRoOjEwMDBweCl7LmJqLWhlYWRlcl9fbmF2e3Bvc2l0aW9uOnN0YXRpYztkaXNwbGF5OmZsZXg7dHJhbnNmb3JtOm5vbmV9LmJqLWhlYWRlcl9fbmF2LS1zaG93e3RyYW5zZm9ybTpub25lfS5iai1oZWFkZXJfX25hdiAuYmotaGVhZGVyX19idXR0b257Ym9yZGVyLXRvcDowIG5vbmU7Ym9yZGVyLWJvdHRvbTowIG5vbmV9fVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfY3VycmVuY2llc19yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfY3VycmVuY2llc19yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA1LCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotY3VycmVuY2llcy1yaWJib25fX2l0ZW1cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDAsIFwiaW1nXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDAsIFwiaDVcIiwgW1tcImNsYXNzXCIsIFwiYmotY3VycmVuY2llcy1yaWJib25fX2l0ZW1cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDIsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWN1cnJlbmNpZXMtcmliYm9uX19yYXRlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0LCAwLCBudWxsLCBudWxsLCAwLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJjdXJyZW5jaWVzLXJpYmJvblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgQ3VycmVuY2llc1JzaWJib25Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiY3VycmVuY2llcy1yaWJib25cIiwgaTIuQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQsIFZpZXdfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IEN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50TmdGYWN0b3J5IGFzIEN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2hlYWRlci5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9yb3V0ZXIsX2FuZ3VsYXJfY29tbW9uLF9jdXJyZW5jaWVzX3JpYmJvbl9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LF9jdXJyZW5jaWVzX3JpYmJvbl9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQsX2hlYWRlci5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfaGVhZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX3JvdXRlcixfYW5ndWxhcl9jb21tb24sX2N1cnJlbmNpZXNfcmliYm9uX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2N1cnJlbmNpZXNfcmliYm9uX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudCxfaGVhZGVyLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIi4uL2N1cnJlbmNpZXMtcmliYm9uL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfSGVhZGVyQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9IZWFkZXJDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfSGVhZGVyQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfSGVhZGVyQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfSGVhZGVyQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19IZWFkZXJDb21wb25lbnRfMChfbCkge1xuICAgIHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMTMsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fcm93LXdyYXBwZXIgYmotaGVhZGVyX19yb3ctd3JhcHBlci0tZGFya1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMTIsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fcm93XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAxLCBcImJ1dHRvblwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX2J1dHRvbiBiai1oZWFkZXJfX2J1dHRvbi0taWNvbiBiai1oZWFkZXJfX2J1dHRvbi0tbWVudVwiXV0sIG51bGwsIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfY28gPSBfdi5jb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoKF9jby5uYXZCYXJWaXNpYmlsaXR5ID0gIV9jby5uYXZCYXJWaXNpYmlsaXR5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDAsIFwiaVwiLCBbW1wiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCJdLCBbXCJjbGFzc1wiLCBcImZhIGZhLWJhcnNcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDQsIDAsIG51bGwsIG51bGwsIDIsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX2xvZ29cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgNSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg1LCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDYsIDAsIG51bGwsIG51bGwsIDAsIFwiaW1nXCIsIFtbXCJhbHRcIiwgXCJCaXRKb3VybmFsXCJdLCBbXCJzcmNcIiwgXCIvc3ZnL2xvZ28uc3ZnXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg3LCAwLCBudWxsLCBudWxsLCA0LCBcIm5hdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX25hdlwiXV0sIFtbMiwgXCJiai1oZWFkZXJfX25hdi0tc2hvd1wiLCBudWxsXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoOCwgMCwgbnVsbCwgbnVsbCwgMywgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fYnV0dG9uXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL1wiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDkpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoOSwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgxMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFCXFx1MDQzNVxcdTA0M0RcXHUwNDQyXFx1MDQzMFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgxMiwgMCwgbnVsbCwgbnVsbCwgMSwgXCJidXR0b25cIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b24gYmotaGVhZGVyX19idXR0b24tLWljb25cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEzLCAwLCBudWxsLCBudWxsLCAwLCBcImlcIiwgW1tcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiXSwgW1wiY2xhc3NcIiwgXCJmYSBmYS1zZWFyY2hcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDE0LCAwLCBudWxsLCBudWxsLCAzLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX3Jvdy13cmFwcGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxNSwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDE2LCAwLCBudWxsLCBudWxsLCAxLCBcImN1cnJlbmNpZXMtcmliYm9uXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBpNC5WaWV3X0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50XzAsIGk0LlJlbmRlclR5cGVfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQpKSwgaTEuybVkaWQoMTcsIDExNDY4OCwgbnVsbCwgMCwgaTUuQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQsIFtpMi5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzIgPSBcIi9cIjsgX2NrKF92LCA1LCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF82ID0gXCIvXCI7IF9jayhfdiwgOSwgMCwgY3VyclZhbF82KTsgX2NrKF92LCAxNywgMCk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgNSkudGFyZ2V0OyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDUpLmhyZWY7IF9jayhfdiwgNCwgMCwgY3VyclZhbF8wLCBjdXJyVmFsXzEpOyB2YXIgY3VyclZhbF8zID0gX2NvLm5hdkJhclZpc2liaWxpdHk7IF9jayhfdiwgNywgMCwgY3VyclZhbF8zKTsgdmFyIGN1cnJWYWxfNCA9IGkxLsm1bm92KF92LCA5KS50YXJnZXQ7IHZhciBjdXJyVmFsXzUgPSBpMS7JtW5vdihfdiwgOSkuaHJlZjsgX2NrKF92LCA4LCAwLCBjdXJyVmFsXzQsIGN1cnJWYWxfNSk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfSGVhZGVyQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfSGVhZGVyQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfSGVhZGVyQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTYuSGVhZGVyQ29tcG9uZW50LCBbaTIuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIEhlYWRlckNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCIuYmotaGVhZGVyXCIsIGk2LkhlYWRlckNvbXBvbmVudCwgVmlld19IZWFkZXJDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IEhlYWRlckNvbXBvbmVudE5nRmFjdG9yeSBhcyBIZWFkZXJDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiQGtleWZyYW1lcyBsb2FkZXItY3ViZUdyaWRTY2FsZURlbGF5ezAlLDcwJSx0b3t0cmFuc2Zvcm06c2NhbGUzRCgxLDEsMSl9MzUle3RyYW5zZm9ybTpzY2FsZTNEKDAsMCwxKX19LmxvYWRlcnt3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHg7cG9zaXRpb246Zml4ZWQ7bGVmdDo1MCU7dG9wOjE0MHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwwKTtkaXNwbGF5Om5vbmU7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVufS5sb2FkZXItLXNob3d7ZGlzcGxheTpmbGV4fS5sb2FkZXJfX2N1YmV7ZmxleDowIDAgMzAlO2hlaWdodDozMCU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1tYWluKTthbmltYXRpb246bG9hZGVyLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0fS5sb2FkZXJfX2N1YmUtLTF7YW5pbWF0aW9uLWRlbGF5Oi4yc30ubG9hZGVyX19jdWJlLS0ye2FuaW1hdGlvbi1kZWxheTouM3N9LmxvYWRlcl9fY3ViZS0tM3thbmltYXRpb24tZGVsYXk6LjRzfS5sb2FkZXJfX2N1YmUtLTR7YW5pbWF0aW9uLWRlbGF5Oi4xc30ubG9hZGVyX19jdWJlLS01e2FuaW1hdGlvbi1kZWxheTouMnN9LmxvYWRlcl9fY3ViZS0tNnthbmltYXRpb24tZGVsYXk6LjNzfS5sb2FkZXJfX2N1YmUtLTd7YW5pbWF0aW9uLWRlbGF5OjBzfS5sb2FkZXJfX2N1YmUtLTh7YW5pbWF0aW9uLWRlbGF5Oi4xc30ubG9hZGVyX19jdWJlLS05e2FuaW1hdGlvbi1kZWxheTouMnN9XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfbG9hZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9sb2FkZXIuY29tcG9uZW50LF8uLl9zZXJ2aWNlc19sb2FkZXJfbG9hZGVyLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfbG9hZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9sb2FkZXIuY29tcG9uZW50LF8uLl9zZXJ2aWNlc19sb2FkZXJfbG9hZGVyLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vbG9hZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2xvYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sb2FkZXIvbG9hZGVyLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfTG9hZGVyQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9Mb2FkZXJDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfTG9hZGVyQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfTG9hZGVyQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfTG9hZGVyQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19Mb2FkZXJDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLTFcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLTJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLTNcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLTRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDQsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLTVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDUsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLTZcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDYsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLTdcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDcsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLThcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDgsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlcl9fY3ViZSBsb2FkZXJfX2N1YmUtLTlcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTG9hZGVyQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlclwiXV0sIFtbMiwgXCJsb2FkZXItLXNob3dcIiwgbnVsbF1dLCBudWxsLCBudWxsLCBWaWV3X0xvYWRlckNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0xvYWRlckNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAyNDU3NjAsIG51bGwsIDAsIGkyLkxvYWRlckNvbXBvbmVudCwgW2kzLkxvYWRlclNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMSkuc2hvdzsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxudmFyIExvYWRlckNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCIubG9hZGVyXCIsIGkyLkxvYWRlckNvbXBvbmVudCwgVmlld19Mb2FkZXJDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IExvYWRlckNvbXBvbmVudE5nRmFjdG9yeSBhcyBMb2FkZXJDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLmJqLWZvb3RlciwuYmotZm9vdGVyX19sb2dve2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6dmFyKC0tY29sb3ItbWFpbil9LmJqLWZvb3RlcntwYWRkaW5nOjAgMCB2YXIoLS1pbmRlbnQtZG91YmxlKTtjb2xvcjojZmZmO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9LmJqLWZvb3Rlcl9fbG9nb3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMDBweDt0b3A6LTEwMHB4O2hlaWdodDoyMDBweDt3aWR0aDoyMDBweDtib3JkZXI6M3B4IHNvbGlkICNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7ei1pbmRleDo4MDA7Y3Vyc29yOnBvaW50ZXJ9LmJqLWZvb3Rlcl9fbG9nbyBpbWd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTE5cHg7bGVmdDoxMDdweDtoZWlnaHQ6MzhweDt3aWR0aDphdXRvfS5iai1mb290ZXJfX25hdnttYXJnaW46MCBhdXRvO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO3BhZGRpbmc6dmFyKC0taW5kZW50LWJhc2UpIHZhcigtLWluZGVudC1iYXNlKSB2YXIoLS1pbmRlbnQtYmFzZSkgY2FsYygxMDBweCArIHZhcigtLWluZGVudC1iYXNlKSk7bWluLWhlaWdodDoxMDBweDtkaXNwbGF5OmJsb2NrfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmJqLWZvb3Rlcl9fbmF2e3BhZGRpbmc6dmFyKC0taW5kZW50LWJhc2UpIHZhcigtLWluZGVudC1kb3VibGUpIHZhcigtLWluZGVudC1iYXNlKSBjYWxjKDEwMHB4ICsgdmFyKC0taW5kZW50LWRvdWJsZSkpfX0uYmotZm9vdGVyX19uYXZfX3Jvd3t3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uYmotZm9vdGVyX19uYXZfX2l0ZW17bWFyZ2luOjAgMCAxZW0gMWVtO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmY7cGFkZGluZy1ib3R0b206LjFlbTt0ZXh0LXRyYW5zZm9ybTpub25lO3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7Zm9udC1zdHlsZTpub3JtYWw7Y29sb3I6aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3dyYXB9LmJqLWZvb3Rlcl9fbmF2X19pdGVtOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjB9LmJqLWZvb3Rlcl9fbmF2X19pdGVtLS1kb25hdGV7Y29sb3I6I2VmNmMwMDtib3JkZXItYm90dG9tLWNvbG9yOiNlZjZjMDB9LmJqLWZvb3Rlcl9fcm93e21hcmdpbi10b3A6MCBhdXRvO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO3BhZGRpbmc6MCB2YXIoLS1pbmRlbnQtaGFsZik7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmNlbnRlcn1AbWVkaWEgKG1pbi13aWR0aDoxMDAwcHgpey5iai1mb290ZXJfX3Jvd3tmbGV4LXdyYXA6bm93cmFwfX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5iai1mb290ZXJfX3Jvd3twYWRkaW5nOjAgMCAwIGNhbGModmFyKC0taW5kZW50LWRvdWJsZSkgKyB2YXIoLS1pbmRlbnQtaGFsZikpfX0uYmotZm9vdGVyX19jb2x7b3JkZXI6Mjt3aWR0aDoyMDBweDtmbGV4OjAgMCAyMDBweDttYXJnaW46dmFyKC0taW5kZW50LWhhbGYpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcn0uYmotZm9vdGVyX19jb2w6bGFzdC1jaGlsZHt3aWR0aDphdXRvO2ZsZXg6MSAxIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWluZGVudC1iYXNlKSArIHZhcigtLWluZGVudC1oYWxmKSl9QG1lZGlhIChtaW4td2lkdGg6MTAwMHB4KXsuYmotZm9vdGVyX19jb2w6bGFzdC1jaGlsZHtvcmRlcjoxO21hcmdpbi10b3A6dmFyKC0taW5kZW50LWhhbGYpO21hcmdpbi1yaWdodDphdXRvO3RleHQtYWxpZ246bGVmdH19LmJqLWZvb3Rlcl9fY29sPnB7cGFkZGluZzowIHZhcigtLWluZGVudC1iYXNlKSAwIDA7bWFyZ2luOjAgMCB2YXIoLS1pbmRlbnQtaGFsZik7bGluZS1oZWlnaHQ6MS40O2ZvbnQtc2l6ZToxNHB4fS5iai1mb290ZXJfX2NvbF9fd2lkZ2V0e3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6M3B4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uYmotZm9vdGVyX19ib3R0b20gYSwuYmotZm9vdGVyX19jb2xfX3dpZGdldCsuYmotZm9vdGVyX19jb2xfX3dpZGdldHttYXJnaW4tdG9wOnZhcigtLWluZGVudC1iYXNlKX0uYmotZm9vdGVyX19ib3R0b217bWFyZ2luOjAgYXV0bzttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtwYWRkaW5nOjAgdmFyKC0taW5kZW50LWJhc2UpO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmJqLWZvb3Rlcl9fYm90dG9te3BhZGRpbmc6MCB2YXIoLS1pbmRlbnQtZG91YmxlKX19LmJqLWZvb3Rlcl9fYm90dG9tIGF7dGV4dC10cmFuc2Zvcm06bm9uZTt0ZXh0LWRlY29yYXRpb246bm9uZTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjMwMDtmb250LXN0eWxlOm5vcm1hbDtjb2xvcjppbmhlcml0O3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZmZmO3BhZGRpbmctYm90dG9tOi4xZW19LmJqLWZvb3Rlcl9fYm90dG9tIHNwYW57bWFyZ2luOnZhcigtLWluZGVudC1iYXNlKSAxZW0gMH0uYmotZm9vdGVyX19ib3R0b21fX2NvcHlyaWdodHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDozMDA7d2hpdGUtc3BhY2U6bm93cmFwO21hcmdpbjp2YXIoLS1pbmRlbnQtYmFzZSkgMCAwO2ZsZXg6MCAwIDEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6NjAwcHgpey5iai1mb290ZXJfX2JvdHRvbV9fY29weXJpZ2h0e2ZsZXgtYmFzaXM6YXV0bzttYXJnaW4tbGVmdDphdXRvfX0uYmotZm9vdGVyX190ZWxlZ3JhbXtoZWlnaHQ6MjhweDtwYWRkaW5nOjAgLjdlbTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTpub25lO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoxO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOiMwOGM7Ym9yZGVyLXJhZGl1czozcHh9LmJqLWZvb3Rlcl9fdGVsZWdyYW0gc3Zne3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bWFyZ2luLXJpZ2h0Oi43ZW19LmJqLWZvb3Rlcl9fdGVsZWdyYW0gcGF0aHtmaWxsOmN1cnJlbnRDb2xvcn1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9mb290ZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfZm9vdGVyLmNvbXBvbmVudCxfLi5fc2VydmljZXNfc29jaWFsX3NvY2lhbC5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2Zvb3Rlci5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9yb3V0ZXIsX2FuZ3VsYXJfY29tbW9uLF9mb290ZXIuY29tcG9uZW50LF8uLl9zZXJ2aWNlc19zb2NpYWxfc29jaWFsLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vZm9vdGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb2NpYWwvc29jaWFsLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfRm9vdGVyQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9Gb290ZXJDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfRm9vdGVyQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19Gb290ZXJDb21wb25lbnRfMChfbCkge1xuICAgIHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgNSwgXCJuYXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19uYXZcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDQsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2X19yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9cIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAzKS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDMsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFCXFx1MDQzNVxcdTA0M0RcXHUwNDQyXFx1MDQzMFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg2LCAwLCBudWxsLCBudWxsLCAyOCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDcsIDAsIG51bGwsIG51bGwsIDIsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fY29sIGJqLWZvb3Rlcl9fY29sLS13aWRnZXRzXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg4LCAwLCBudWxsLCBudWxsLCAxLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbF9fd2lkZ2V0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAwLCBcImRpdlwiLCBbW1wiaWRcIiwgXCJ2a19ncm91cF92aWRnZXRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEwLCAwLCBudWxsLCBudWxsLCA1LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbCBiai1mb290ZXJfX2NvbC0td2lkZ2V0c1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMTEsIDAsIG51bGwsIG51bGwsIDQsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fY29sX193aWRnZXRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEyLCAwLCBudWxsLCBudWxsLCAzLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJmYi1wYWdlXCJdLCBbXCJkYXRhLWFkYXB0LWNvbnRhaW5lci13aWR0aFwiLCBcImZhbHNlXCJdLCBbXCJkYXRhLWhlaWdodFwiLCBcIjE2MFwiXSwgW1wiZGF0YS1oaWRlLWNvdmVyXCIsIFwidHJ1ZVwiXSwgW1wiZGF0YS1ocmVmXCIsIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2JpdGpvdXJuYWxPZmZpY2lhbC9cIl0sIFtcImRhdGEtc2hvdy1mYWNlcGlsZVwiLCBcImZhbHNlXCJdLCBbXCJkYXRhLXNtYWxsLWhlYWRlclwiLCBcImZhbHNlXCJdLCBbXCJkYXRhLXdpZHRoXCIsIFwiMjAwXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxMywgMCwgbnVsbCwgbnVsbCwgMiwgXCJibG9ja3F1b3RlXCIsIFtbXCJjaXRlXCIsIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2JpdGpvdXJuYWxPZmZpY2lhbC9cIl0sIFtcImNsYXNzXCIsIFwiZmIteGZibWwtcGFyc2UtaWdub3JlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxNCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJhXCIsIFtbXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2JpdGpvdXJuYWxPZmZpY2lhbC9cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJCaXRKb3VybmFsXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDE2LCAwLCBudWxsLCBudWxsLCAxMSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19jb2wgYmotZm9vdGVyX19jb2wtLXdpZGdldHNcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDE3LCAwLCBudWxsLCBudWxsLCA1LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbF9fd2lkZ2V0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxOCwgMCwgbnVsbCwgbnVsbCwgNCwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fdGVsZWdyYW1cIl0sIFtcImhyZWZcIiwgXCJodHRwczovL3QubWUvYml0am91cm5hbF9pb1wiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxOSwgMCwgbnVsbCwgbnVsbCwgMSwgXCI6c3ZnOnN2Z1wiLCBbW1wiaGVpZ2h0XCIsIFwiMjRcIl0sIFtcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIl0sIFtcIndpZHRoXCIsIFwiMjRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIwLCAwLCBudWxsLCBudWxsLCAwLCBcIjpzdmc6cGF0aFwiLCBbW1wiZFwiLCBcIk0uNCAxMS42bDUuNiAyIDIgN2MuMi4zLjguNSAxIC4ybDMuMi0yLjVjLjMtLjMuOC0uMyAxIDBsNS43IDRjLjMuMy44IDAgMS0uNGw0LTE5LjdjMC0uNS0uNC0xLTEtLjdMLjUgMTAuNGMtLjUuMi0uNSAxIDAgMS4yem03LjMgMWwxMC44LTYuOGMuMyAwIC41LjIuMy40bC05IDguMy0uNSAxTDkgMThjMCAuMy0uNS4zLS41IDBsLTEuMi00Yy0uMi0uNSAwLTEgLjQtMS4zelwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMjEsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiQml0Sm91cm5hbCBcXHUwNDMyIFxcdTA0MjJcXHUwNDM1XFx1MDQzQlxcdTA0MzVcXHUwNDMzXFx1MDQ0MFxcdTA0MzBcXHUwNDNDXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDIzLCAwLCBudWxsLCBudWxsLCAxLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbF9fd2lkZ2V0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyNCwgMCwgbnVsbCwgbnVsbCwgMCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiZy15dHN1YnNjcmliZVwiXSwgW1wiZGF0YS1jaGFubmVsaWRcIiwgXCJVQ2VPTFVlWU5jWURvczF3Y1RKVkxHbHdcIl0sIFtcImRhdGEtY291bnRcIiwgXCJkZWZhdWx0XCJdLCBbXCJkYXRhLWxheW91dFwiLCBcImRlZmF1bHRcIl0sIFtcImRhdGEtdGhlbWVcIiwgXCJkYXJrXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyNSwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19jb2xfX3dpZGdldFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMjYsIDAsIG51bGwsIG51bGwsIDEsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJ0d2l0dGVyLWZvbGxvdy1idXR0b25cIl0sIFtcImRhdGEtc2hvdy1jb3VudFwiLCBcImZhbHNlXCJdLCBbXCJkYXRhLXNpemVcIiwgXCJsYXJnZVwiXSwgW1wiaHJlZlwiLCBcImh0dHBzOi8vdHdpdHRlci5jb20vYml0am91cm5hbF9pb1wiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiRm9sbG93IEBiaXRqb3VybmFsX2lvXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDI4LCAwLCBudWxsLCBudWxsLCA2LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMjksIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxMlxcdTA0NDFcXHUwNDM1IFxcdTA0NDFcXHUwNDQxXFx1MDQ0QlxcdTA0M0JcXHUwNDNBXFx1MDQzOCBcXHUwNDNGXFx1MDQ0MFxcdTA0MzVcXHUwNDM0XFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzMFxcdTA0MzJcXHUwNDNCXFx1MDQ0RlxcdTA0NEVcXHUwNDQyXFx1MDQ0MVxcdTA0NEYgXFx1MDQzOFxcdTA0NDFcXHUwNDNBXFx1MDQzQlxcdTA0NEVcXHUwNDQ3XFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDNEXFx1MDQzRSBcXHUwNDM0XFx1MDQzQlxcdTA0NEYgXFx1MDQ0MVxcdTA0M0ZcXHUwNDQwXFx1MDQzMFxcdTA0MzJcXHUwNDNFXFx1MDQ0N1xcdTA0M0RcXHUwNDRCXFx1MDQ0NSBcXHUwNDQ2XFx1MDQzNVxcdTA0M0JcXHUwNDM1XFx1MDQzOS5cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMzEsIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiQml0Sm91cm5hbCBcXHUwNDNEXFx1MDQzNSBcXHUwNDNEXFx1MDQzNVxcdTA0NDFcXHUwNDM1XFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0MzVcXHUwNDNEXFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0MzggXFx1MDQzN1xcdTA0MzAgXFx1MDQ0MVxcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0NDBcXHUwNDM2XFx1MDQzOFxcdTA0M0NcXHUwNDNFXFx1MDQzNSBcXHUwNDMyXFx1MDQzRFxcdTA0MzVcXHUwNDQ4XFx1MDQzRFxcdTA0MzhcXHUwNDQ1IFxcdTA0MzhcXHUwNDNEXFx1MDQ0MlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0MzVcXHUwNDQyLVxcdTA0NDFcXHUwNDMwXFx1MDQzOVxcdTA0NDJcXHUwNDNFXFx1MDQzMi5cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMzMsIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRlxcdTA0NDBcXHUwNDM4IFxcdTA0MzhcXHUwNDQxXFx1MDQzRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzggXFx1MDQzQ1xcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDM4XFx1MDQzMFxcdTA0M0JcXHUwNDNFXFx1MDQzMiBcXHUwNDQxXFx1MDQzMFxcdTA0MzlcXHUwNDQyXFx1MDQzMCBcXHUwNDQxXFx1MDQ0MVxcdTA0NEJcXHUwNDNCXFx1MDQzQVxcdTA0MzAgXFx1MDQzRVxcdTA0MzFcXHUwNDRGXFx1MDQzN1xcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0MzAuXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDM1LCAwLCBudWxsLCBudWxsLCAxMywgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19ib3R0b21cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDM2LCAwLCBudWxsLCBudWxsLCAxLCBcImFcIiwgW1tcImhyZWZcIiwgXCIvcnNzXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUlNTXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDM4LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcInxcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYVwiLCBbW1wiaHJlZlwiLCBcIi9hcGlcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJBUElcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNDIsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wifFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg0NCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhXCIsIFtbXCJyb3V0ZXJMaW5rXCIsIFwiL3ByaXZhY3lcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCA0NSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg0NSwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDM4XFx1MDQzQVxcdTA0MzAgXFx1MDQzQVxcdTA0M0VcXHUwNDNEXFx1MDQ0NFxcdTA0MzhcXHUwNDM0XFx1MDQzNVxcdTA0M0RcXHUwNDQ2XFx1MDQzOFxcdTA0MzBcXHUwNDNCXFx1MDQ0Q1xcdTA0M0RcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDM4XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDQ3LCAwLCBudWxsLCBudWxsLCAxLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2JvdHRvbV9fY29weXJpZ2h0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiQ29weXJpZ2h0IFxcdTAwQTkgMjAxNyBCaXRKb3VybmFsXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDQ5LCAwLCBudWxsLCBudWxsLCAyLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19sb2dvXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL1wiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDUwKS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDUwLCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDUxLCAwLCBudWxsLCBudWxsLCAwLCBcImltZ1wiLCBbW1wiYWx0XCIsIFwiQml0Sm91cm5hbFwiXSwgW1wic3JjXCIsIFwiL3N2Zy9sb2dvLnN2Z1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzIgPSBcIi9cIjsgX2NrKF92LCAzLCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF81ID0gXCIvcHJpdmFjeVwiOyBfY2soX3YsIDQ1LCAwLCBjdXJyVmFsXzUpOyB2YXIgY3VyclZhbF84ID0gXCIvXCI7IF9jayhfdiwgNTAsIDAsIGN1cnJWYWxfOCk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMykudGFyZ2V0OyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDMpLmhyZWY7IF9jayhfdiwgMiwgMCwgY3VyclZhbF8wLCBjdXJyVmFsXzEpOyB2YXIgY3VyclZhbF8zID0gaTEuybVub3YoX3YsIDQ1KS50YXJnZXQ7IHZhciBjdXJyVmFsXzQgPSBpMS7JtW5vdihfdiwgNDUpLmhyZWY7IF9jayhfdiwgNDQsIDAsIGN1cnJWYWxfMywgY3VyclZhbF80KTsgdmFyIGN1cnJWYWxfNiA9IGkxLsm1bm92KF92LCA1MCkudGFyZ2V0OyB2YXIgY3VyclZhbF83ID0gaTEuybVub3YoX3YsIDUwKS5ocmVmOyBfY2soX3YsIDQ5LCAwLCBjdXJyVmFsXzYsIGN1cnJWYWxfNyk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfRm9vdGVyQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3RlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfRm9vdGVyQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQyNDM0NTYsIG51bGwsIDAsIGk0LkZvb3RlckNvbXBvbmVudCwgW2k1LlNvY2lhbFNlcnZpY2VdLCBudWxsLCBudWxsKV0sIG51bGwsIG51bGwpOyB9XG52YXIgRm9vdGVyQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcIi5iai1mb290ZXJcIiwgaTQuRm9vdGVyQ29tcG9uZW50LCBWaWV3X0Zvb3RlckNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgRm9vdGVyQ29tcG9uZW50TmdGYWN0b3J5IGFzIEZvb3RlckNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfaGVhZGVyX2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LF9oZWFkZXJfaGVhZGVyLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsX2xvYWRlcl9sb2FkZXIuY29tcG9uZW50Lm5nZmFjdG9yeSxfbG9hZGVyX2xvYWRlci5jb21wb25lbnQsXy4uX3NlcnZpY2VzX2xvYWRlcl9sb2FkZXIuc2VydmljZSxfZm9vdGVyX2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5LF9mb290ZXJfZm9vdGVyLmNvbXBvbmVudCxfLi5fc2VydmljZXNfc29jaWFsX3NvY2lhbC5zZXJ2aWNlLF9sYXlvdXQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfaGVhZGVyX2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LF9oZWFkZXJfaGVhZGVyLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsX2xvYWRlcl9sb2FkZXIuY29tcG9uZW50Lm5nZmFjdG9yeSxfbG9hZGVyX2xvYWRlci5jb21wb25lbnQsXy4uX3NlcnZpY2VzX2xvYWRlcl9sb2FkZXIuc2VydmljZSxfZm9vdGVyX2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5LF9mb290ZXJfZm9vdGVyLmNvbXBvbmVudCxfLi5fc2VydmljZXNfc29jaWFsX3NvY2lhbC5zZXJ2aWNlLF9sYXlvdXQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCIuLi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvYWRlci9sb2FkZXIuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTggZnJvbSBcIi4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTkgZnJvbSBcIi4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NvY2lhbC9zb2NpYWwuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTExIGZyb20gXCIuL2xheW91dC5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfTGF5b3V0Q29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9MYXlvdXRDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfTGF5b3V0Q29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50IGFzIFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19MYXlvdXRDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiaGVhZGVyXCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIGkyLlZpZXdfSGVhZGVyQ29tcG9uZW50XzAsIGkyLlJlbmRlclR5cGVfSGVhZGVyQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTMuSGVhZGVyQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImxvYWRlclwiXV0sIFtbMiwgXCJsb2FkZXItLXNob3dcIiwgbnVsbF1dLCBudWxsLCBudWxsLCBpNS5WaWV3X0xvYWRlckNvbXBvbmVudF8wLCBpNS5SZW5kZXJUeXBlX0xvYWRlckNvbXBvbmVudCkpLCBpMS7JtWRpZCgzLCAyNDU3NjAsIG51bGwsIDAsIGk2LkxvYWRlckNvbXBvbmVudCwgW2k3LkxvYWRlclNlcnZpY2VdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMTY3NzcyMTYsIG51bGwsIG51bGwsIDEsIFwicm91dGVyLW91dGxldFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg1LCAyMTI5OTIsIG51bGwsIDAsIGk0LlJvdXRlck91dGxldCwgW2k0LkNoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGkxLlZpZXdDb250YWluZXJSZWYsIGkxLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgWzgsIG51bGxdLCBpMS5DaGFuZ2VEZXRlY3RvclJlZl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg2LCAwLCBudWxsLCBudWxsLCAxLCBcImZvb3RlclwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBpOC5WaWV3X0Zvb3RlckNvbXBvbmVudF8wLCBpOC5SZW5kZXJUeXBlX0Zvb3RlckNvbXBvbmVudCkpLCBpMS7JtWRpZCg3LCA0MjQzNDU2LCBudWxsLCAwLCBpOS5Gb290ZXJDb21wb25lbnQsIFtpMTAuU29jaWFsU2VydmljZV0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgX2NrKF92LCAzLCAwKTsgX2NrKF92LCA1LCAwKTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAzKS5zaG93OyBfY2soX3YsIDIsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19MYXlvdXRDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwibGF5b3V0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19MYXlvdXRDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9MYXlvdXRDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNDkxNTIsIG51bGwsIDAsIGkxMS5MYXlvdXRDb21wb25lbnQsIFtpMS5QTEFURk9STV9JRCwgaTQuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBudWxsLCBudWxsKTsgfVxudmFyIExheW91dENvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCIubGF5b3V0XCIsIGkxMS5MYXlvdXRDb21wb25lbnQsIFZpZXdfTGF5b3V0Q29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBMYXlvdXRDb21wb25lbnROZ0ZhY3RvcnkgYXMgTGF5b3V0Q29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfYW5ndWxhcl9jb3JlLF9hcHAubW9kdWxlLF9jb21wb25lbnRzX2xheW91dF9sYXlvdXQuY29tcG9uZW50LF8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfc25hY2tfYmFyX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX21haW5fcGFnZV9tYWluLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfMTAxX3BhZ2VfMTAxLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljby5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljb19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfc2VjdGlvbl9wYWdlX3NlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19hcnRpY2xlX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX25vX2NvbnRlbnRfbm9fY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX2F1dGhfYXV0aF9kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19sYXlvdXRfbGF5b3V0LmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfY29tbW9uLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXIsX2FuZ3VsYXJfYW5pbWF0aW9uc19icm93c2VyLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXJfYW5pbWF0aW9ucyxfYW5ndWxhcl9hbmltYXRpb25zLF9hbmd1bGFyX2Zvcm1zLF9hbmd1bGFyX2NvbW1vbl9odHRwLF9hbmd1bGFyX2Nka19iaWRpLF9hbmd1bGFyX2Nka19wbGF0Zm9ybSxfYW5ndWxhcl9jZGtfc2Nyb2xsaW5nLF9hbmd1bGFyX2Nka19vdmVybGF5LF9hbmd1bGFyX2Nka19hMTF5LF9hbmd1bGFyX21hdGVyaWFsX2RpYWxvZyxfYW5ndWxhcl9tYXRlcmlhbF9zb3J0LF9hbmd1bGFyX2Nka19sYXlvdXQsX2FuZ3VsYXJfbWF0ZXJpYWxfc25hY2tfYmFyLF9hbmd1bGFyX21hdGVyaWFsX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9zZXJ2aWNlc19tZXNzYWdlX21lc3NhZ2Uuc2VydmljZSxfc2VydmljZXNfdXNlcl91c2VyLnNlcnZpY2UsX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UsX3NlcnZpY2VzX3NvY2lhbF9zb2NpYWwuc2VydmljZSxfc2VydmljZXNfeW91dHViZV95b3V0dWJlLnNlcnZpY2UsX3NlcnZpY2VzX2xvYWRlcl9sb2FkZXIuc2VydmljZSxfc2VydmljZXNfbWV0cmlrYV9tZXRyaWthLnNlcnZpY2UsX3NlcnZpY2VzX25vdGlmaWNhdGlvbl9ub3RpZmljYXRpb24uc2VydmljZSxfYW5ndWxhcl9jZGtfcG9ydGFsLF9hbmd1bGFyX2Nka190YWJsZSxfYW5ndWxhcl9tYXRlcmlhbF90YWJsZSxfYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkLF9hbmd1bGFyX21hdGVyaWFsX2lucHV0LF9hbmd1bGFyX21hdGVyaWFsX2J1dHRvbixfY29tcG9uZW50c19wYWdlc19tYWluX3BhZ2VfbWFpbi5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfMTAxX3BhZ2VfMTAxLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXNfaXRlbS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfZXhjaGFuZ2VzX3BhZ2VfZXhjaGFuZ2VzLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19pY29fcGFnZV9pY29faXRlbS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHMuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX3NlY3Rpb25fcGFnZV9zZWN0aW9uLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19hcnRpY2xlX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQsX2NvbXBvbmVudHNfbm9fY29udGVudF9ub19jb250ZW50LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9hbmd1bGFyX2NvcmUsX2FwcC5tb2R1bGUsX2NvbXBvbmVudHNfbGF5b3V0X2xheW91dC5jb21wb25lbnQsXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2dfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9zbmFja19iYXJfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfbWFpbl9wYWdlX21haW4uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc18xMDFfcGFnZV8xMDEuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0cy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19zZWN0aW9uX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2FydGljbGVfcGFnZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfbm9fY29udGVudF9ub19jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfYXV0aF9hdXRoX2RpYWxvZy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX2xheW91dF9sYXlvdXQuY29tcG9uZW50Lm5nZmFjdG9yeSxfYW5ndWxhcl9jb21tb24sX2FuZ3VsYXJfcGxhdGZvcm1fYnJvd3NlcixfYW5ndWxhcl9hbmltYXRpb25zX2Jyb3dzZXIsX2FuZ3VsYXJfcGxhdGZvcm1fYnJvd3Nlcl9hbmltYXRpb25zLF9hbmd1bGFyX2FuaW1hdGlvbnMsX2FuZ3VsYXJfZm9ybXMsX2FuZ3VsYXJfY29tbW9uX2h0dHAsX2FuZ3VsYXJfY2RrX2JpZGksX2FuZ3VsYXJfY2RrX3BsYXRmb3JtLF9hbmd1bGFyX2Nka19zY3JvbGxpbmcsX2FuZ3VsYXJfY2RrX292ZXJsYXksX2FuZ3VsYXJfY2RrX2ExMXksX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nLF9hbmd1bGFyX21hdGVyaWFsX3NvcnQsX2FuZ3VsYXJfY2RrX2xheW91dCxfYW5ndWxhcl9tYXRlcmlhbF9zbmFja19iYXIsX2FuZ3VsYXJfbWF0ZXJpYWxfY29yZSxfYW5ndWxhcl9yb3V0ZXIsX3NlcnZpY2VzX21lc3NhZ2VfbWVzc2FnZS5zZXJ2aWNlLF9zZXJ2aWNlc191c2VyX3VzZXIuc2VydmljZSxfc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLF9zZXJ2aWNlc19tZXRhX21ldGEuc2VydmljZSxfc2VydmljZXNfc29jaWFsX3NvY2lhbC5zZXJ2aWNlLF9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSxfc2VydmljZXNfbG9hZGVyX2xvYWRlci5zZXJ2aWNlLF9zZXJ2aWNlc19tZXRyaWthX21ldHJpa2Euc2VydmljZSxfc2VydmljZXNfbm90aWZpY2F0aW9uX25vdGlmaWNhdGlvbi5zZXJ2aWNlLF9hbmd1bGFyX2Nka19wb3J0YWwsX2FuZ3VsYXJfY2RrX3RhYmxlLF9hbmd1bGFyX21hdGVyaWFsX3RhYmxlLF9hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGQsX2FuZ3VsYXJfbWF0ZXJpYWxfaW5wdXQsX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uLF9jb21wb25lbnRzX3BhZ2VzX21haW5fcGFnZV9tYWluLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc18xMDFfcGFnZV8xMDEuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHMuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19pY29fcGFnZV9pY28uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljb19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0cy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHNfaXRlbS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfc2VjdGlvbl9wYWdlX3NlY3Rpb24uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2FydGljbGVfcGFnZV9hcnRpY2xlLmNvbXBvbmVudCxfY29tcG9uZW50c19ub19jb250ZW50X25vX2NvbnRlbnQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZy90eXBpbmdzL2luZGV4Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXIvdHlwaW5ncy9pbmRleC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9wYWdlLW1haW4uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpOCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTkgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTEwIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTExIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxMiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxMyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTQgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28taXRlbS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTUgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTYgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxOCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2FydGljbGUvcGFnZS1hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxOSBmcm9tIFwiLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMjAgZnJvbSBcIi4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkyMSBmcm9tIFwiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTIyIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGkyMyBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0ICogYXMgaTI0IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zL2Jyb3dzZXJcIjtcbmltcG9ydCAqIGFzIGkyNSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBpMjYgZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCAqIGFzIGkyNyBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAqIGFzIGkyOCBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCAqIGFzIGkyOSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2JpZGlcIjtcbmltcG9ydCAqIGFzIGkzMCBmcm9tIFwiQGFuZ3VsYXIvY2RrL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBpMzEgZnJvbSBcIkBhbmd1bGFyL2Nkay9zY3JvbGxpbmdcIjtcbmltcG9ydCAqIGFzIGkzMiBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcbmltcG9ydCAqIGFzIGkzMyBmcm9tIFwiQGFuZ3VsYXIvY2RrL2ExMXlcIjtcbmltcG9ydCAqIGFzIGkzNCBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgKiBhcyBpMzUgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCAqIGFzIGkzNiBmcm9tIFwiQGFuZ3VsYXIvY2RrL2xheW91dFwiO1xuaW1wb3J0ICogYXMgaTM3IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXJcIjtcbmltcG9ydCAqIGFzIGkzOCBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuaW1wb3J0ICogYXMgaTM5IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk0MCBmcm9tIFwiLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTQxIGZyb20gXCIuL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNDIgZnJvbSBcIi4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNDMgZnJvbSBcIi4vc2VydmljZXMvbWV0YS9tZXRhLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0NCBmcm9tIFwiLi9zZXJ2aWNlcy9zb2NpYWwvc29jaWFsLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0NSBmcm9tIFwiLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTQ2IGZyb20gXCIuL3NlcnZpY2VzL2xvYWRlci9sb2FkZXIuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTQ3IGZyb20gXCIuL3NlcnZpY2VzL21ldHJpa2EvbWV0cmlrYS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNDggZnJvbSBcIi4vc2VydmljZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNDkgZnJvbSBcIkBhbmd1bGFyL2Nkay9wb3J0YWxcIjtcbmltcG9ydCAqIGFzIGk1MCBmcm9tIFwiQGFuZ3VsYXIvY2RrL3RhYmxlXCI7XG5pbXBvcnQgKiBhcyBpNTEgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XG5pbXBvcnQgKiBhcyBpNTIgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGRcIjtcbmltcG9ydCAqIGFzIGk1MyBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCAqIGFzIGk1NCBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBpNTUgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1NiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1NyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1OSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2MCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYxIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYyIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjMgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjQgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28taXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2NSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTY2IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2NyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTY4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjkgZnJvbSBcIi4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50XCI7XG52YXIgQXBwTW9kdWxlTmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMC7JtWNtZihpMS5BcHBNb2R1bGUsIFtpMi5MYXlvdXRDb21wb25lbnRdLCBmdW5jdGlvbiAoX2wpIHsgcmV0dXJuIGkwLsm1bW9kKFtpMC7JtW1wZCg1MTIsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaTAuybVDb2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBbWzgsIFtpMy5NYXREaWFsb2dDb250YWluZXJOZ0ZhY3RvcnksIGk0Lk1hdFNuYWNrQmFyQ29udGFpbmVyTmdGYWN0b3J5LCBpNC5TaW1wbGVTbmFja0Jhck5nRmFjdG9yeSwgaTUuUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnksIGk2LlBhZ2UxMDFDb21wb25lbnROZ0ZhY3RvcnksIGk3LlBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50TmdGYWN0b3J5LCBpOC5QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnksIGk5LlBhZ2VFdmVudHNDb21wb25lbnROZ0ZhY3RvcnksIGkxMC5QYWdlRXZlbnRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSwgaTExLlBhZ2VFeGNoYW5nZXNDb21wb25lbnROZ0ZhY3RvcnksIGkxMi5QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSwgaTEzLlBhZ2VJQ09Db21wb25lbnROZ0ZhY3RvcnksIGkxNC5QYWdlSUNPSXRlbUNvbXBvbmVudE5nRmFjdG9yeSwgaTE1LlBhZ2VNYXJrZXRzQ29tcG9uZW50TmdGYWN0b3J5LCBpMTYuUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5LCBpMTcuUGFnZVNlY3Rpb25Db21wb25lbnROZ0ZhY3RvcnksIGkxOC5QYWdlQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSwgaTE5Lk5vQ29udGVudENvbXBvbmVudE5nRmFjdG9yeSwgaTIwLkF1dGhEaWFsb2dDb21wb25lbnROZ0ZhY3RvcnksIGkyMS5MYXlvdXRDb21wb25lbnROZ0ZhY3RvcnldXSwgWzMsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcl0sIGkwLk5nTW9kdWxlUmVmXSksIGkwLsm1bXBkKDUxMjAsIGkwLkxPQ0FMRV9JRCwgaTAuybVtLCBbWzMsIGkwLkxPQ0FMRV9JRF1dKSwgaTAuybVtcGQoNDYwOCwgaTIyLk5nTG9jYWxpemF0aW9uLCBpMjIuTmdMb2NhbGVMb2NhbGl6YXRpb24sIFtpMC5MT0NBTEVfSUQsIFsyLCBpMjIuybVhXV0pLCBpMC7JtW1wZCg1MTIwLCBpMC5JdGVyYWJsZURpZmZlcnMsIGkwLsm1aywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMC5LZXlWYWx1ZURpZmZlcnMsIGkwLsm1bCwgW10pLCBpMC7JtW1wZCg0NjA4LCBpMjMuRG9tU2FuaXRpemVyLCBpMjMuybVlLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDYxNDQsIGkwLlNhbml0aXplciwgbnVsbCwgW2kyMy5Eb21TYW5pdGl6ZXJdKSwgaTAuybVtcGQoNDYwOCwgaTIzLkhBTU1FUl9HRVNUVVJFX0NPTkZJRywgaTIzLkhhbW1lckdlc3R1cmVDb25maWcsIFtdKSwgaTAuybVtcGQoNTEyMCwgaTIzLkVWRU5UX01BTkFHRVJfUExVR0lOUywgZnVuY3Rpb24gKHAwXzAsIHAwXzEsIHAxXzAsIHAyXzAsIHAyXzEpIHsgcmV0dXJuIFtuZXcgaTIzLsm1RG9tRXZlbnRzUGx1Z2luKHAwXzAsIHAwXzEpLCBuZXcgaTIzLsm1S2V5RXZlbnRzUGx1Z2luKHAxXzApLCBuZXcgaTIzLsm1SGFtbWVyR2VzdHVyZXNQbHVnaW4ocDJfMCwgcDJfMSldOyB9LCBbaTIyLkRPQ1VNRU5ULCBpMC5OZ1pvbmUsIGkyMi5ET0NVTUVOVCwgaTIyLkRPQ1VNRU5ULCBpMjMuSEFNTUVSX0dFU1RVUkVfQ09ORklHXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy5FdmVudE1hbmFnZXIsIGkyMy5FdmVudE1hbmFnZXIsIFtpMjMuRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoMTM1NjgwLCBpMjMuybVEb21TaGFyZWRTdHlsZXNIb3N0LCBpMjMuybVEb21TaGFyZWRTdHlsZXNIb3N0LCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy7JtURvbVJlbmRlcmVyRmFjdG9yeTIsIGkyMy7JtURvbVJlbmRlcmVyRmFjdG9yeTIsIFtpMjMuRXZlbnRNYW5hZ2VyLCBpMjMuybVEb21TaGFyZWRTdHlsZXNIb3N0XSksIGkwLsm1bXBkKDUxMjAsIGkyNC5BbmltYXRpb25Ecml2ZXIsIGkyNS7JtWMsIFtdKSwgaTAuybVtcGQoNTEyMCwgaTI0Lsm1QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyLCBpMjUuybVkLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyNC7JtUFuaW1hdGlvbkVuZ2luZSwgaTI1Lsm1YiwgW2kyNC5BbmltYXRpb25Ecml2ZXIsIGkyNC7JtUFuaW1hdGlvblN0eWxlTm9ybWFsaXplcl0pLCBpMC7JtW1wZCg1MTIwLCBpMC5SZW5kZXJlckZhY3RvcnkyLCBpMjUuybVlLCBbaTIzLsm1RG9tUmVuZGVyZXJGYWN0b3J5MiwgaTI0Lsm1QW5pbWF0aW9uRW5naW5lLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNjE0NCwgaTIzLsm1U2hhcmVkU3R5bGVzSG9zdCwgbnVsbCwgW2kyMy7JtURvbVNoYXJlZFN0eWxlc0hvc3RdKSwgaTAuybVtcGQoNDYwOCwgaTAuVGVzdGFiaWxpdHksIGkwLlRlc3RhYmlsaXR5LCBbaTAuTmdab25lXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy5NZXRhLCBpMjMuTWV0YSwgW2kyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMjMuVGl0bGUsIGkyMy5UaXRsZSwgW2kyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMjMuVHJhbnNmZXJTdGF0ZSwgaTIzLsm1YywgW2kyMi5ET0NVTUVOVCwgaTAuQVBQX0lEXSksIGkwLsm1bXBkKDQ2MDgsIGkyNi5BbmltYXRpb25CdWlsZGVyLCBpMjUuybVCcm93c2VyQW5pbWF0aW9uQnVpbGRlciwgW2kwLlJlbmRlcmVyRmFjdG9yeTIsIGkyMy5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMjcuybVpLCBpMjcuybVpLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyNy5Gb3JtQnVpbGRlciwgaTI3LkZvcm1CdWlsZGVyLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyOC5IdHRwWHNyZlRva2VuRXh0cmFjdG9yLCBpMjguybVnLCBbaTIyLkRPQ1VNRU5ULCBpMC5QTEFURk9STV9JRCwgaTI4Lsm1ZV0pLCBpMC7JtW1wZCg0NjA4LCBpMjguybVoLCBpMjguybVoLCBbaTI4Lkh0dHBYc3JmVG9rZW5FeHRyYWN0b3IsIGkyOC7JtWZdKSwgaTAuybVtcGQoNTEyMCwgaTI4LkhUVFBfSU5URVJDRVBUT1JTLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTI4Lsm1aF0pLCBpMC7JtW1wZCg0NjA4LCBpMjguybVkLCBpMjguybVkLCBbXSksIGkwLsm1bXBkKDYxNDQsIGkyOC5YaHJGYWN0b3J5LCBudWxsLCBbaTI4Lsm1ZF0pLCBpMC7JtW1wZCg0NjA4LCBpMjguSHR0cFhockJhY2tlbmQsIGkyOC5IdHRwWGhyQmFja2VuZCwgW2kyOC5YaHJGYWN0b3J5XSksIGkwLsm1bXBkKDYxNDQsIGkyOC5IdHRwQmFja2VuZCwgbnVsbCwgW2kyOC5IdHRwWGhyQmFja2VuZF0pLCBpMC7JtW1wZCg1MTIwLCBpMjguSHR0cEhhbmRsZXIsIGkyOC7JtWludGVyY2VwdGluZ0hhbmRsZXIsIFtpMjguSHR0cEJhY2tlbmQsIFsyLCBpMjguSFRUUF9JTlRFUkNFUFRPUlNdXSksIGkwLsm1bXBkKDQ2MDgsIGkyOC5IdHRwQ2xpZW50LCBpMjguSHR0cENsaWVudCwgW2kyOC5IdHRwSGFuZGxlcl0pLCBpMC7JtW1wZCg2MTQ0LCBpMjkuRElSX0RPQ1VNRU5ULCBudWxsLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyOS5EaXJlY3Rpb25hbGl0eSwgaTI5LkRpcmVjdGlvbmFsaXR5LCBbWzIsIGkyOS5ESVJfRE9DVU1FTlRdXSksIGkwLsm1bXBkKDQ2MDgsIGkzMC5QbGF0Zm9ybSwgaTMwLlBsYXRmb3JtLCBbXSksIGkwLsm1bXBkKDUxMjAsIGkzMS5TY3JvbGxEaXNwYXRjaGVyLCBpMzEuU0NST0xMX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzEuU2Nyb2xsRGlzcGF0Y2hlcl0sIGkwLk5nWm9uZSwgaTMwLlBsYXRmb3JtXSksIGkwLsm1bXBkKDUxMjAsIGkzMS5WaWV3cG9ydFJ1bGVyLCBpMzEuVklFV1BPUlRfUlVMRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzEuVmlld3BvcnRSdWxlcl0sIGkzMC5QbGF0Zm9ybSwgaTAuTmdab25lXSksIGkwLsm1bXBkKDQ2MDgsIGkzMi5TY3JvbGxTdHJhdGVneU9wdGlvbnMsIGkzMi5TY3JvbGxTdHJhdGVneU9wdGlvbnMsIFtpMzEuU2Nyb2xsRGlzcGF0Y2hlciwgaTMxLlZpZXdwb3J0UnVsZXIsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuT3ZlcmxheUNvbnRhaW5lciwgaTMyLsm1YSwgW1szLCBpMzIuT3ZlcmxheUNvbnRhaW5lcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMzIuybVoLCBpMzIuybVoLCBbaTMxLlZpZXdwb3J0UnVsZXIsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgaTMyLsm1ZiwgW1szLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMzIuT3ZlcmxheSwgaTMyLk92ZXJsYXksIFtpMzIuU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLCBpMzIuT3ZlcmxheUNvbnRhaW5lciwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMzIuybVoLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgaTAuQXBwbGljYXRpb25SZWYsIGkwLkluamVjdG9yLCBpMC5OZ1pvbmUsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuybVjLCBpMzIuybVkLCBbaTMyLk92ZXJsYXldKSwgaTAuybVtcGQoNDYwOCwgaTMzLkludGVyYWN0aXZpdHlDaGVja2VyLCBpMzMuSW50ZXJhY3Rpdml0eUNoZWNrZXIsIFtpMzAuUGxhdGZvcm1dKSwgaTAuybVtcGQoNDYwOCwgaTMzLkZvY3VzVHJhcEZhY3RvcnksIGkzMy5Gb2N1c1RyYXBGYWN0b3J5LCBbaTMzLkludGVyYWN0aXZpdHlDaGVja2VyLCBpMC5OZ1pvbmUsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCgxMzYxOTIsIGkzMy5BcmlhRGVzY3JpYmVyLCBpMzMuQVJJQV9ERVNDUklCRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzMuQXJpYURlc2NyaWJlcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzMuTGl2ZUFubm91bmNlciwgaTMzLkxJVkVfQU5OT1VOQ0VSX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTMzLkxpdmVBbm5vdW5jZXJdLCBbMiwgaTMzLkxJVkVfQU5OT1VOQ0VSX0VMRU1FTlRfVE9LRU5dLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNTEyMCwgaTMzLkZvY3VzTW9uaXRvciwgaTMzLkZPQ1VTX01PTklUT1JfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzMuRm9jdXNNb25pdG9yXSwgaTAuTmdab25lLCBpMzAuUGxhdGZvcm1dKSwgaTAuybVtcGQoNTEyMCwgaTM0Lk1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZLCBpMzQuTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVJfRkFDVE9SWSwgW2kzMi5PdmVybGF5XSksIGkwLsm1bXBkKDQ2MDgsIGkzNC5NYXREaWFsb2csIGkzNC5NYXREaWFsb2csIFtpMzIuT3ZlcmxheSwgaTAuSW5qZWN0b3IsIFsyLCBpMjIuTG9jYXRpb25dLCBpMzQuTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1ksIFszLCBpMzQuTWF0RGlhbG9nXV0pLCBpMC7JtW1wZCg1MTIwLCBpMzUuTWF0U29ydEhlYWRlckludGwsIGkzNS5NQVRfU09SVF9IRUFERVJfSU5UTF9QUk9WSURFUl9GQUNUT1JZLCBbWzMsIGkzNS5NYXRTb3J0SGVhZGVySW50bF1dKSwgaTAuybVtcGQoNDYwOCwgaTM2Lk1lZGlhTWF0Y2hlciwgaTM2Lk1lZGlhTWF0Y2hlciwgW2kzMC5QbGF0Zm9ybV0pLCBpMC7JtW1wZCgxMzU2ODAsIGkzNi5CcmVha3BvaW50T2JzZXJ2ZXIsIGkzNi5CcmVha3BvaW50T2JzZXJ2ZXIsIFtpMzYuTWVkaWFNYXRjaGVyLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNDYwOCwgaTM3Lk1hdFNuYWNrQmFyLCBpMzcuTWF0U25hY2tCYXIsIFtpMzIuT3ZlcmxheSwgaTMzLkxpdmVBbm5vdW5jZXIsIGkwLkluamVjdG9yLCBpMzYuQnJlYWtwb2ludE9ic2VydmVyLCBbMywgaTM3Lk1hdFNuYWNrQmFyXV0pLCBpMC7JtW1wZCg0NjA4LCBpMzguRXJyb3JTdGF0ZU1hdGNoZXIsIGkzOC5FcnJvclN0YXRlTWF0Y2hlciwgW10pLCBpMC7JtW1wZCg1MTIwLCBpMzkuQWN0aXZhdGVkUm91dGUsIGkzOS7JtWYsIFtpMzkuUm91dGVyXSksIGkwLsm1bXBkKDQ2MDgsIGkzOS5QcmVsb2FkQWxsTW9kdWxlcywgaTM5LlByZWxvYWRBbGxNb2R1bGVzLCBbXSksIGkwLsm1bXBkKDYxNDQsIGkzOS5QcmVsb2FkaW5nU3RyYXRlZ3ksIG51bGwsIFtpMzkuUHJlbG9hZEFsbE1vZHVsZXNdKSwgaTAuybVtcGQoMTM1NjgwLCBpMzkuUm91dGVyUHJlbG9hZGVyLCBpMzkuUm91dGVyUHJlbG9hZGVyLCBbaTM5LlJvdXRlciwgaTAuTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBpMC5Db21waWxlciwgaTAuSW5qZWN0b3IsIGkzOS5QcmVsb2FkaW5nU3RyYXRlZ3ldKSwgaTAuybVtcGQoNDYwOCwgaTM5Lk5vUHJlbG9hZGluZywgaTM5Lk5vUHJlbG9hZGluZywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMzkuUk9VVEVSX0lOSVRJQUxJWkVSLCBpMzkuybVpLCBbaTM5Lsm1Z10pLCBpMC7JtW1wZCg1MTIwLCBpMC5BUFBfQk9PVFNUUkFQX0xJU1RFTkVSLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTM5LlJPVVRFUl9JTklUSUFMSVpFUl0pLCBpMC7JtW1wZCg0NjA4LCBpNDAuTWVzc2FnZVNlcnZpY2UsIGk0MC5NZXNzYWdlU2VydmljZSwgW2kwLlBMQVRGT1JNX0lELCBpMzcuTWF0U25hY2tCYXJdKSwgaTAuybVtcGQoNDYwOCwgaTQxLlVzZXJTZXJ2aWNlLCBpNDEuVXNlclNlcnZpY2UsIFtpMC5QTEFURk9STV9JRCwgaTI4Lkh0dHBDbGllbnQsIGkzNC5NYXREaWFsb2csIGk0MC5NZXNzYWdlU2VydmljZSwgaTM3Lk1hdFNuYWNrQmFyXSksIGkwLsm1bXBkKDQ2MDgsIGk0Mi5BUElTZXJ2aWNlLCBpNDIuQVBJU2VydmljZSwgW2kyOC5IdHRwQ2xpZW50LCBpMzkuUm91dGVyLCBpNDEuVXNlclNlcnZpY2UsIGk0MC5NZXNzYWdlU2VydmljZV0pLCBpMC7JtW1wZCg0NjA4LCBpNDMuTWV0YVNlcnZpY2UsIGk0My5NZXRhU2VydmljZSwgW2kyMy5NZXRhLCBpMjMuVGl0bGVdKSwgaTAuybVtcGQoNDYwOCwgaTQ0LlNvY2lhbFNlcnZpY2UsIGk0NC5Tb2NpYWxTZXJ2aWNlLCBbaTAuUExBVEZPUk1fSURdKSwgaTAuybVtcGQoNDYwOCwgaTQ1LllvdVR1YmVTZXJ2aWNlLCBpNDUuWW91VHViZVNlcnZpY2UsIFtpMjguSHR0cENsaWVudCwgaTQwLk1lc3NhZ2VTZXJ2aWNlXSksIGkwLsm1bXBkKDQ2MDgsIGk0Ni5Mb2FkZXJTZXJ2aWNlLCBpNDYuTG9hZGVyU2VydmljZSwgW2kwLlBMQVRGT1JNX0lEXSksIGkwLsm1bXBkKDQ2MDgsIGk0Ny5NZXRyaWthU2VydmljZSwgaTQ3Lk1ldHJpa2FTZXJ2aWNlLCBbaTAuUExBVEZPUk1fSURdKSwgaTAuybVtcGQoNTEyLCBpMjIuQ29tbW9uTW9kdWxlLCBpMjIuQ29tbW9uTW9kdWxlLCBbXSksIGkwLsm1bXBkKDEwMjQsIGkwLkVycm9ySGFuZGxlciwgaTIzLsm1YSwgW10pLCBpMC7JtW1wZCgxMDI0LCBpMC5OZ1Byb2JlVG9rZW4sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtpMzkuybViKCldOyB9LCBbXSksIGkwLsm1bXBkKDI1NiwgaTAuQVBQX0lELCBcImFwcF9ialwiLCBbXSksIGkwLsm1bXBkKDIwNDgsIGkyMy7JtVRSQU5TSVRJT05fSUQsIG51bGwsIFtpMC5BUFBfSURdKSwgaTAuybVtcGQoNTEyLCBpMzkuybVnLCBpMzkuybVnLCBbaTAuSW5qZWN0b3JdKSwgaTAuybVtcGQoNTEyLCBpNDguTm90aWZpY2F0aW9uU2VydmljZSwgaTQ4Lk5vdGlmaWNhdGlvblNlcnZpY2UsIFtpMC5QTEFURk9STV9JRF0pLCBpMC7JtW1wZCgxMDI0LCBpMC5BUFBfSU5JVElBTElaRVIsIGZ1bmN0aW9uIChwMF8wLCBwMV8wLCBwMV8xLCBwMV8yLCBwMl8wLCBwM18wKSB7IHJldHVybiBbaTIzLsm1aChwMF8wKSwgaTIzLsm1ZihwMV8wLCBwMV8xLCBwMV8yKSwgaTM5Lsm1aChwMl8wKSwgaTEuybUwKHAzXzApXTsgfSwgW1syLCBpMC5OZ1Byb2JlVG9rZW5dLCBpMjMuybVUUkFOU0lUSU9OX0lELCBpMjIuRE9DVU1FTlQsIGkwLkluamVjdG9yLCBpMzkuybVnLCBpNDguTm90aWZpY2F0aW9uU2VydmljZV0pLCBpMC7JtW1wZCg1MTIsIGkwLkFwcGxpY2F0aW9uSW5pdFN0YXR1cywgaTAuQXBwbGljYXRpb25Jbml0U3RhdHVzLCBbWzIsIGkwLkFQUF9JTklUSUFMSVpFUl1dKSwgaTAuybVtcGQoMTMxNTg0LCBpMC5BcHBsaWNhdGlvblJlZiwgaTAuQXBwbGljYXRpb25SZWYsIFtpMC5OZ1pvbmUsIGkwLsm1Q29uc29sZSwgaTAuSW5qZWN0b3IsIGkwLkVycm9ySGFuZGxlciwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMC5BcHBsaWNhdGlvbkluaXRTdGF0dXNdKSwgaTAuybVtcGQoNTEyLCBpMC5BcHBsaWNhdGlvbk1vZHVsZSwgaTAuQXBwbGljYXRpb25Nb2R1bGUsIFtpMC5BcHBsaWNhdGlvblJlZl0pLCBpMC7JtW1wZCg1MTIsIGkyMy5Ccm93c2VyTW9kdWxlLCBpMjMuQnJvd3Nlck1vZHVsZSwgW1szLCBpMjMuQnJvd3Nlck1vZHVsZV1dKSwgaTAuybVtcGQoNTEyLCBpMjMuQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGUsIGkyMy5Ccm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyNS5Ccm93c2VyQW5pbWF0aW9uc01vZHVsZSwgaTI1LkJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI3Lsm1YmEsIGkyNy7JtWJhLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI3LkZvcm1zTW9kdWxlLCBpMjcuRm9ybXNNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjcuUmVhY3RpdmVGb3Jtc01vZHVsZSwgaTI3LlJlYWN0aXZlRm9ybXNNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjguSHR0cENsaWVudFhzcmZNb2R1bGUsIGkyOC5IdHRwQ2xpZW50WHNyZk1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyOC5IdHRwQ2xpZW50TW9kdWxlLCBpMjguSHR0cENsaWVudE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyOS5CaWRpTW9kdWxlLCBpMjkuQmlkaU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGk0OS5Qb3J0YWxNb2R1bGUsIGk0OS5Qb3J0YWxNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzAuUGxhdGZvcm1Nb2R1bGUsIGkzMC5QbGF0Zm9ybU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzMS5TY3JvbGxEaXNwYXRjaE1vZHVsZSwgaTMxLlNjcm9sbERpc3BhdGNoTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTMyLk92ZXJsYXlNb2R1bGUsIGkzMi5PdmVybGF5TW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTMzLkExMXlNb2R1bGUsIGkzMy5BMTF5TW9kdWxlLCBbXSksIGkwLsm1bXBkKDI1NiwgaTM4Lk1BVEVSSUFMX1NBTklUWV9DSEVDS1MsIHRydWUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzguTWF0Q29tbW9uTW9kdWxlLCBpMzguTWF0Q29tbW9uTW9kdWxlLCBbWzIsIGkzOC5NQVRFUklBTF9TQU5JVFlfQ0hFQ0tTXV0pLCBpMC7JtW1wZCg1MTIsIGkzNC5NYXREaWFsb2dNb2R1bGUsIGkzNC5NYXREaWFsb2dNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzUuTWF0U29ydE1vZHVsZSwgaTM1Lk1hdFNvcnRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNTAuQ2RrVGFibGVNb2R1bGUsIGk1MC5DZGtUYWJsZU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGk1MS5NYXRUYWJsZU1vZHVsZSwgaTUxLk1hdFRhYmxlTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM2LkxheW91dE1vZHVsZSwgaTM2LkxheW91dE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzNy5NYXRTbmFja0Jhck1vZHVsZSwgaTM3Lk1hdFNuYWNrQmFyTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTUyLk1hdEZvcm1GaWVsZE1vZHVsZSwgaTUyLk1hdEZvcm1GaWVsZE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGk1My5NYXRJbnB1dE1vZHVsZSwgaTUzLk1hdElucHV0TW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM4Lk1hdFJpcHBsZU1vZHVsZSwgaTM4Lk1hdFJpcHBsZU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGk1NC5NYXRCdXR0b25Nb2R1bGUsIGk1NC5NYXRCdXR0b25Nb2R1bGUsIFtdKSwgaTAuybVtcGQoMTAyNCwgaTM5Lsm1YSwgaTM5Lsm1ZCwgW1szLCBpMzkuUm91dGVyXV0pLCBpMC7JtW1wZCg1MTIsIGkzOS5VcmxTZXJpYWxpemVyLCBpMzkuRGVmYXVsdFVybFNlcmlhbGl6ZXIsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzkuQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgaTM5LkNoaWxkcmVuT3V0bGV0Q29udGV4dHMsIFtdKSwgaTAuybVtcGQoMjU2LCBpMzkuUk9VVEVSX0NPTkZJR1VSQVRJT04sIHsgdXNlSGFzaDogZmFsc2UsIHByZWxvYWRpbmdTdHJhdGVneTogaTM5LlByZWxvYWRBbGxNb2R1bGVzIH0sIFtdKSwgaTAuybVtcGQoMTAyNCwgaTIyLkxvY2F0aW9uU3RyYXRlZ3ksIGkzOS7JtWMsIFtpMjIuUGxhdGZvcm1Mb2NhdGlvbiwgWzIsIGkyMi5BUFBfQkFTRV9IUkVGXSwgaTM5LlJPVVRFUl9DT05GSUdVUkFUSU9OXSksIGkwLsm1bXBkKDUxMiwgaTIyLkxvY2F0aW9uLCBpMjIuTG9jYXRpb24sIFtpMjIuTG9jYXRpb25TdHJhdGVneV0pLCBpMC7JtW1wZCg1MTIsIGkwLkNvbXBpbGVyLCBpMC5Db21waWxlciwgW10pLCBpMC7JtW1wZCg1MTIsIGkwLk5nTW9kdWxlRmFjdG9yeUxvYWRlciwgaTAuU3lzdGVtSnNOZ01vZHVsZUxvYWRlciwgW2kwLkNvbXBpbGVyLCBbMiwgaTAuU3lzdGVtSnNOZ01vZHVsZUxvYWRlckNvbmZpZ11dKSwgaTAuybVtcGQoMTAyNCwgaTM5LlJPVVRFUywgZnVuY3Rpb24gKCkgeyByZXR1cm4gW1t7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogaTU1LlBhZ2VNYWluQ29tcG9uZW50IH0sIHsgcGF0aDogXCIxMDFcIiwgY29tcG9uZW50OiBpNTYuUGFnZTEwMUNvbXBvbmVudCB9LCB7IHBhdGg6IFwiY3VycmVuY2llcy86aWRcIiwgY29tcG9uZW50OiBpNTcuUGFnZUN1cnJlbmNpZXNDb21wb25lbnQgfSwgeyBwYXRoOiBcImN1cnJlbmNpZXNcIiwgY29tcG9uZW50OiBpNTguUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50IH0sIHsgcGF0aDogXCJldmVudHMvOmlkXCIsIGNvbXBvbmVudDogaTU5LlBhZ2VFdmVudHNDb21wb25lbnQgfSwgeyBwYXRoOiBcImV2ZW50c1wiLCBjb21wb25lbnQ6IGk2MC5QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCB9LCB7IHBhdGg6IFwiZXhjaGFuZ2VzLzppZFwiLCBjb21wb25lbnQ6IGk2MS5QYWdlRXhjaGFuZ2VzQ29tcG9uZW50IH0sIHsgcGF0aDogXCJleGNoYW5nZXNcIiwgY29tcG9uZW50OiBpNjIuUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQgfSwgeyBwYXRoOiBcImljby86aWRcIiwgY29tcG9uZW50OiBpNjMuUGFnZUlDT0NvbXBvbmVudCB9LCB7IHBhdGg6IFwiaWNvXCIsIGNvbXBvbmVudDogaTY0LlBhZ2VJQ09JdGVtQ29tcG9uZW50IH0sIHsgcGF0aDogXCJtYXJrZXRzLzppZFwiLCBjb21wb25lbnQ6IGk2NS5QYWdlTWFya2V0c0NvbXBvbmVudCB9LCB7IHBhdGg6IFwibWFya2V0c1wiLCBjb21wb25lbnQ6IGk2Ni5QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQgfSwgeyBwYXRoOiBcIjpzZWN0aW9uXCIsIGNvbXBvbmVudDogaTY3LlBhZ2VTZWN0aW9uQ29tcG9uZW50IH0sIHsgcGF0aDogXCI6ZGF0ZS86dXJsXCIsIGNvbXBvbmVudDogaTY4LlBhZ2VBcnRpY2xlQ29tcG9uZW50IH0sIHsgcGF0aDogXCIqKlwiLCBjb21wb25lbnQ6IGk2OS5Ob0NvbnRlbnRDb21wb25lbnQgfV1dOyB9LCBbXSksIGkwLsm1bXBkKDEwMjQsIGkzOS5Sb3V0ZXIsIGkzOS7JtWUsIFtpMC5BcHBsaWNhdGlvblJlZiwgaTM5LlVybFNlcmlhbGl6ZXIsIGkzOS5DaGlsZHJlbk91dGxldENvbnRleHRzLCBpMjIuTG9jYXRpb24sIGkwLkluamVjdG9yLCBpMC5OZ01vZHVsZUZhY3RvcnlMb2FkZXIsIGkwLkNvbXBpbGVyLCBpMzkuUk9VVEVTLCBpMzkuUk9VVEVSX0NPTkZJR1VSQVRJT04sIFsyLCBpMzkuVXJsSGFuZGxpbmdTdHJhdGVneV0sIFsyLCBpMzkuUm91dGVSZXVzZVN0cmF0ZWd5XV0pLCBpMC7JtW1wZCg1MTIsIGkzOS5Sb3V0ZXJNb2R1bGUsIGkzOS5Sb3V0ZXJNb2R1bGUsIFtbMiwgaTM5Lsm1YV0sIFsyLCBpMzkuUm91dGVyXV0pLCBpMC7JtW1wZCg1MTIsIGkxLkFwcE1vZHVsZSwgaTEuQXBwTW9kdWxlLCBbaTQ4Lk5vdGlmaWNhdGlvblNlcnZpY2VdKSwgaTAuybVtcGQoMjU2LCBpMjguybVlLCBcIlhTUkYtVE9LRU5cIiwgW10pLCBpMC7JtW1wZCgyNTYsIGkyOC7JtWYsIFwiWC1YU1JGLVRPS0VOXCIsIFtdKV0pOyB9KTtcbmV4cG9ydCB7IEFwcE1vZHVsZU5nRmFjdG9yeSBhcyBBcHBNb2R1bGVOZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwLm1vZHVsZS5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyLCBlbmFibGVEZWJ1Z1Rvb2xzLCBkaXNhYmxlRGVidWdUb29scyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQXBwTW9kdWxlTmdGYWN0b3J5IH0gZnJvbSAnLi9hcHAubW9kdWxlLm5nZmFjdG9yeSc7XG5jb25zb2xlLmxvZyhgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gdiR7cHJvY2Vzcy5lbnYuQVBQX1ZFUlNJT059YCk7XG5sZXQgZGVjb3JhdGVNb2R1bGVSZWYgPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3QgybUwID0gZGVjb3JhdGVNb2R1bGVSZWY7XG5pZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBkZWNvcmF0ZU1vZHVsZVJlZiA9IChtb2RSZWYpID0+IHtcbiAgICAgICAgY29uc3QgYXBwUmVmID0gbW9kUmVmLmluamVjdG9yLmdldChBcHBsaWNhdGlvblJlZik7XG4gICAgICAgIGNvbnN0IGNtcFJlZiA9IGFwcFJlZi5jb21wb25lbnRzWzBdO1xuICAgICAgICBsZXQgbmcgPSB3aW5kb3cubmc7XG4gICAgICAgIGVuYWJsZURlYnVnVG9vbHMoY21wUmVmKTtcbiAgICAgICAgd2luZG93Lm5nLnByb2JlID0gbmcucHJvYmU7XG4gICAgICAgIHdpbmRvdy5uZy5jb3JlVG9rZW5zID0gbmcuY29yZVRva2VucztcbiAgICAgICAgcmV0dXJuIG1vZFJlZjtcbiAgICB9O1xufVxuZWxzZSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbiAgICBkZWNvcmF0ZU1vZHVsZVJlZiA9IChtb2RSZWYpID0+IHtcbiAgICAgICAgZGlzYWJsZURlYnVnVG9vbHMoKTtcbiAgICAgICAgcmV0dXJuIG1vZFJlZjtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICByZXR1cm4gcGxhdGZvcm1Ccm93c2VyKClcbiAgICAgICAgLmJvb3RzdHJhcE1vZHVsZUZhY3RvcnkoQXBwTW9kdWxlTmdGYWN0b3J5KVxuICAgICAgICAudGhlbihkZWNvcmF0ZU1vZHVsZVJlZilcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG59XG5jb25zdCBkb21SZWFkeUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRvbVJlYWR5SGFuZGxlcik7XG4gICAgbWFpbigpO1xufTtcbmNvbnN0IMm1MSA9IGRvbVJlYWR5SGFuZGxlcjtcbnN3aXRjaCAoZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZG9tUmVhZHlIYW5kbGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaW50ZXJhY3RpdmUnOlxuICAgIGNhc2UgJ2NvbXBsZXRlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgICBtYWluKCk7XG59XG5leHBvcnQgeyDJtTAsIMm1MSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluLmZyb250LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIl0sInNvdXJjZVJvb3QiOiIifQ==