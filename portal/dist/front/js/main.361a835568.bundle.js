webpackJsonp(["main"],{

/***/ 73:
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
webpackEmptyAsyncContext.id = 73;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/zone.js/dist/zone.js
var zone = __webpack_require__(93);
var zone_default = /*#__PURE__*/__webpack_require__.n(zone);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(22);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(13);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/router/esm5/router.js
var router = __webpack_require__(3);

// CONCATENATED MODULE: ./components/article/article.component.ts


class ArticleComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/article/index.ts


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/material.es5.js + 26 modules
var material_es5 = __webpack_require__(42);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/common/esm5/http.js
var http = __webpack_require__(38);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/Observable.js
var Observable = __webpack_require__(5);
var Observable_default = /*#__PURE__*/__webpack_require__.n(Observable);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/observable/of.js
var of = __webpack_require__(61);
var of_default = /*#__PURE__*/__webpack_require__.n(of);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/catch.js
var operator_catch = __webpack_require__(62);
var catch_default = /*#__PURE__*/__webpack_require__.n(operator_catch);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/filter.js
var filter = __webpack_require__(63);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/map.js
var map = __webpack_require__(64);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(2);

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
if (true) {
    API_SERVER_VALUE = "http://api.bitjournal.dev:8081";
}
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


// CONCATENATED MODULE: ./services/publication/publication.service.ts

const API_BASE = 'publications';
class PublicationService {
    constructor(_api) {
        this._api = _api;
    }
    get() {
        return this._api
            .get(`/${API_BASE}`)
            .map(items => items.filter(item => item.enable));
    }
}

// CONCATENATED MODULE: ./services/publication/index.ts


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
        script.id = 'vkontakte-js';
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
        script.id = 'twitter-js';
        script.src = TW_API;
        document.head.appendChild(script);
    });
}

// CONCATENATED MODULE: ./services/social/google-init.ts
const GOOGLE_API = 'https://apis.google.com/js/platform.js';
function GoogleInit() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.id = 'google-js';
        script.src = GOOGLE_API;
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
        this.isServer = Object(common["q" /* isPlatformServer */])(platformId);
        this.init();
    }
    init() {
        if (this.isServer)
            return;
        this._vk = VKInit();
        this._twitter = TwitterInit();
        this._google = GoogleInit();
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
}
social_service_SocialService.VK_SOCIAL_ID = VK_SOCIAL_ID;

// CONCATENATED MODULE: ./services/social/index.ts


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


// CONCATENATED MODULE: ./components/footer/footer.component.ts


class footer_component_FooterComponent {
    constructor(_socialService) {
        this._socialService = _socialService;
    }
    addVKWidget() {
        this._socialService.vk().then(VK => {
            console.log('Resolve');
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
        this._socialService.twitter().then(TW => { });
    }
    addYouTubeWidget() {
        this._socialService.google().then(ga => { });
    }
    ngAfterViewInit() {
        this.addVKWidget();
        this.addTwitterWidget();
        this.addYouTubeWidget();
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


class LayoutComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/layout/index.ts


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

class PageArticleComponent {
    ngOnInit() {
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



// CONCATENATED MODULE: ./components/pages/main/page-main.component.ts



class PageMainComponent {
    constructor(_router, _publicationService) {
        this._router = _router;
        this._publicationService = _publicationService;
    }
    ngOnInit() {
        this.publications = this._publicationService
            .get();
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
    get h1() {
        return this.value.bigTitle;
    }
}

// CONCATENATED MODULE: ./components/pub-card/index.ts


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/mergeAll.js
var mergeAll = __webpack_require__(143);
var mergeAll_default = /*#__PURE__*/__webpack_require__.n(mergeAll);

// CONCATENATED MODULE: ./components/video-ribbon/video-ribbon.component.ts




const video_ribbon_component_API_BASE = 'video';
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
            .get(`/${video_ribbon_component_API_BASE}`)
            .map(items => items.filter(item => item.enable))
            .map(items => items.map(item => item.id))
            .map(items => this._youTubeService.getVideoData(items))
            .mergeAll()
            .map(items => items.map(item => this.createVideoRibbonItem(item)));
    }
}

// CONCATENATED MODULE: ./components/video-ribbon/index.ts


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


// CONCATENATED MODULE: ./components/index.ts












// CONCATENATED MODULE: ./app.components.ts

const COMPONENTS = [
    ArticleComponent,
    auth_dialog_component_AuthDialogComponent,
    CurrenciesRsibbonComponent,
    footer_component_FooterComponent,
    HeaderComponent,
    NoContentComponent,
    Page101Component,
    PageArticleComponent,
    PageCurrenciesComponent,
    PageCurrenciesItemComponent,
    PageEventsComponent,
    PageEventsItemComponent,
    PageExchangesComponent,
    PageExchangesItemComponent,
    PageICOComponent,
    PageICOItemComponent,
    PageMainComponent,
    PageMarketsComponent,
    PageMarketsItemComponent,
    PageSectionComponent,
    PubCardComponent,
    FollowComponent,
    video_ribbon_component_VideoRibbonComponent,
];
const ENTRY_COMPONENTS = [
    auth_dialog_component_AuthDialogComponent,
];

// CONCATENATED MODULE: ./app.module.ts



class AppModule {
}

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/dialog/typings/index.ngfactory.js
var index_ngfactory = __webpack_require__(144);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/snack-bar/typings/index.ngfactory.js
var typings_index_ngfactory = __webpack_require__(145);

// CONCATENATED MODULE: ./components/pages/main/page-main.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var styles = [""];


// CONCATENATED MODULE: ./components/pub-card/pub-card.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var pub_card_component_css_ngstyle_styles = [".bj-pub-card{display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start;max-width:100%;text-decoration:none;text-transform:none;color:var(--color-main)}.bj-pub-card+.bj-pub-card{margin-top:var(--indent-double)}@supports (display:grid){@media (min-width:700px){.bj-pub-card+.bj-pub-card{margin-top:0}}}.bj-pub-card__figure{flex:0 0 100%;width:100%;min-height:calc(100vw/1.5);position:relative;margin:0;padding:0;background:#f6f6f6;display:flex;flex-direction:column;justify-content:space-between}@media (min-width:600px){.bj-pub-card__figure{min-height:320px}}.bj-pub-card__picture{position:absolute;left:0;top:0;right:0;bottom:0;height:100%;overflow:hidden}.bj-pub-card__picture,.bj-pub-card__picture img,.bj-pub-card__row{display:block;box-sizing:border-box;width:100%}.bj-pub-card__picture img{min-width:100%;min-height:100%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover;position:absolute}.bj-pub-card__row{position:relative;padding:var(--indent-base) 0}.bj-pub-card__row--dark{background:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.1) 10%,rgba(0,0,0,.7) 100%);padding-top:var(--indent-double)}.bj-pub-card__h2{margin:0 0 -.1em;font-family:inherit;font-size:2rem;font-weight:300;line-height:1.35;color:#fff}.bj-pub-card__h1,.bj-pub-card__h2,.bj-video-ribbon__datetime{display:block;box-sizing:border-box;padding:0 var(--indent-base)}.bj-pub-card__h1{flex:0 0 100%;width:100%;margin:0;font-family:inherit;font-size:1.5rem;line-height:1.35;margin-top:var(--indent-half)}.bj-video-ribbon__datetime{margin-top:var(--indent-base)}"];


// CONCATENATED MODULE: ./pipes/image/enveroments.ts
let RAW_SERVER_VALUE = "https://raw.bitjournal.io";
const RAW_SERVER = RAW_SERVER_VALUE;

// CONCATENATED MODULE: ./pipes/image/image.pipe.ts


const image_pipe_PATH_REGEXP = /^\/?(.*)/;
const EMPTY_PNG = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
class image_pipe_ImagePipe {
    transform(input) {
        if (!input)
            return EMPTY_PNG;
        const match = image_pipe_PATH_REGEXP.exec(String(input).trim());
        if (!match)
            return EMPTY_PNG;
        return RAW_SERVER + '/' + (match && match[1]);
    }
}

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

// CONCATENATED MODULE: ./components/pub-card/pub-card.component.ngfactory.js
/** PURE_IMPORTS_START _pub_card.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_angular_common,_pub_card.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _pub_card.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_angular_common,_pub_card.component PURE_IMPORTS_END */






var styles_PubCardComponent = [pub_card_component_css_ngstyle_styles];
var RenderType_PubCardComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PubCardComponent, data: {} });

function View_PubCardComponent_1(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "figcaption", [["class", "bj-pub-card__row bj-pub-card__row--dark"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [["class", "bj-pub-card__h2"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.bigTitle; _ck(_v, 2, 0, currVal_0); }); }
function View_PubCardComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 6, "figure", [["class", "bj-pub-card__figure"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 2, "picture", [["class", "bj-pub-card__picture"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_18" /* ɵppd */](5, 1), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 0, "figcaption", [["class", "bj-pub-card__row"]], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_PubCardComponent_1)), core["_2" /* ɵdid */](8, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 3, "time", [["class", "bj-video-ribbon__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_18" /* ɵppd */](10, 1), (_l()(), core["_22" /* ɵted */](11, null, ["", ""])), core["_18" /* ɵppd */](12, 2), (_l()(), core["_3" /* ɵeld */](13, 0, null, null, 1, "h1", [["class", "bj-pub-card__h1"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](14, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = !!_co.value.bigTitle; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_15" /* ɵnov */](_v, 0), _co.value.image)); _ck(_v, 4, 0, currVal_0); var currVal_2 = core["_23" /* ɵunv */](_v, 9, 0, _ck(_v, 10, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts)); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_23" /* ɵunv */](_v, 11, 0, _ck(_v, 12, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts, "HR")); _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.value.title; _ck(_v, 14, 0, currVal_4); }); }
function View_PubCardComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-pub-card"]], null, null, null, View_PubCardComponent_0, RenderType_PubCardComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, PubCardComponent, [], null, null)], null, null); }
var PubCardComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-pub-card", PubCardComponent, View_PubCardComponent_Host_0, { value: "value" }, {}, []);


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
function View_VideoRibbonComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VideoRibbonComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("video-ribbon", video_ribbon_component_VideoRibbonComponent, View_VideoRibbonComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/main/page-main.component.ngfactory.js
/** PURE_IMPORTS_START _page_main.component.css.ngstyle,_angular_core,_.._pub_card_pub_card.component.ngfactory,_angular_router,_angular_common,_.._pub_card_pub_card.component,_.._.._pipes_timestamp_timestamp,_.._video_ribbon_video_ribbon.component.ngfactory,_.._video_ribbon_video_ribbon.component,_.._.._services_api_api.service,_.._.._services_youtube_youtube.service,_page_main.component,_.._.._services_publication_publication.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_main.component.css.ngstyle,_angular_core,_.._pub_card_pub_card.component.ngfactory,_angular_router,_angular_common,_.._pub_card_pub_card.component,_.._.._pipes_timestamp_timestamp,_.._video_ribbon_video_ribbon.component.ngfactory,_.._video_ribbon_video_ribbon.component,_.._.._services_api_api.service,_.._.._services_youtube_youtube.service,_page_main.component,_.._.._services_publication_publication.service PURE_IMPORTS_END */













var styles_PageMainComponent = [styles];
var RenderType_PageMainComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMainComponent, data: {} });

function View_PageMainComponent_1(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-card"]], [[2, "bj-grid__item--wide", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubCardComponent_0, RenderType_PubCardComponent)), core["_2" /* ɵdid */](1, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵppd */](2, 2), core["_16" /* ɵpad */](3, 2), core["_2" /* ɵdid */](4, 49152, null, 0, PubCardComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_3 = _ck(_v, 3, 0, core["_23" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "URL")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_3); var currVal_4 = _v.context.$implicit; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.weight > 1); var currVal_1 = core["_15" /* ɵnov */](_v, 1).target; var currVal_2 = core["_15" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); });
}
function View_PageMainComponent_2(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "a", [["class", "a1"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 1, 0, currVal_0); }); }
function View_PageMainComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 13, "main", [["class", "bj-page__box bj-page__box--grid2"]], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageMainComponent_1)), core["_2" /* ɵdid */](3, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 9, "main", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 5, "aside", [["class", "bj-page__aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 1, "h1", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageMainComponent_2)), core["_2" /* ɵdid */](10, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](13, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null), (_l()(), core["_3" /* ɵeld */](14, 0, null, null, 0, "main", [["class", "bj-page__box bj-page__box--grid3"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 3, 0, core["_15" /* ɵnov */](_v, 4).transform(_co.publications)); _ck(_v, 3, 0, currVal_0); var currVal_1 = core["_23" /* ɵunv */](_v, 10, 0, core["_15" /* ɵnov */](_v, 11).transform(_co.publications)); _ck(_v, 10, 0, currVal_1); _ck(_v, 13, 0); }, null); }
function View_PageMainComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-main", [], null, null, null, View_PageMainComponent_0, RenderType_PageMainComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMainComponent, [router["k" /* Router */], PublicationService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMainComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-main", PageMainComponent, View_PageMainComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/101/page-101.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_101_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/pages/101/page-101.component.ngfactory.js
/** PURE_IMPORTS_START _page_101.component.css.ngstyle,_angular_core,_.._video_ribbon_video_ribbon.component.ngfactory,_.._video_ribbon_video_ribbon.component,_angular_router,_.._.._services_api_api.service,_.._.._services_youtube_youtube.service,_page_101.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_101.component.css.ngstyle,_angular_core,_.._video_ribbon_video_ribbon.component.ngfactory,_.._video_ribbon_video_ribbon.component,_angular_router,_.._.._services_api_api.service,_.._.._services_youtube_youtube.service,_page_101.component PURE_IMPORTS_END */








var styles_Page101Component = [page_101_component_css_ngstyle_styles];
var RenderType_Page101Component = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_Page101Component, data: {} });

function View_Page101Component_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Video"])), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](6, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
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
function View_PageCurrenciesComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-currencies", [], null, null, null, View_PageCurrenciesComponent_0, RenderType_PageCurrenciesComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageCurrenciesComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageCurrenciesComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-currencies", PageCurrenciesComponent, View_PageCurrenciesComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_currencies_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/article/article.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var article_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/article/article.component.ngfactory.js
/** PURE_IMPORTS_START _article.component.css.ngstyle,_angular_core,_article.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _article.component.css.ngstyle,_angular_core,_article.component,_angular_router PURE_IMPORTS_END */




var styles_ArticleComponent = [article_component_css_ngstyle_styles];
var RenderType_ArticleComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_ArticleComponent, data: {} });

function View_ArticleComponent_0(_l) { return core["_24" /* ɵvid */](0, [], null, null); }
function View_ArticleComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ArticleComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("article", ArticleComponent, View_ArticleComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_currencies_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_currencies_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_currencies_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_currencies_item.component PURE_IMPORTS_END */






var styles_PageCurrenciesItemComponent = [page_currencies_item_component_css_ngstyle_styles];
var RenderType_PageCurrenciesItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageCurrenciesItemComponent, data: {} });

function View_PageCurrenciesItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageCurrenciesItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-currencies-item", [], null, null, null, View_PageCurrenciesItemComponent_0, RenderType_PageCurrenciesItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageCurrenciesItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
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
function View_PageEventsComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-events", [], null, null, null, View_PageEventsComponent_0, RenderType_PageEventsComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageEventsComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageEventsComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-events", PageEventsComponent, View_PageEventsComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/events/page-events-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_events_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/events/page-events-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_events_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_events_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_events_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_events_item.component PURE_IMPORTS_END */






var styles_PageEventsItemComponent = [page_events_item_component_css_ngstyle_styles];
var RenderType_PageEventsItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageEventsItemComponent, data: {} });

function View_PageEventsItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageEventsItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-events-item", [], null, null, null, View_PageEventsItemComponent_0, RenderType_PageEventsItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageEventsItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
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
function View_PageExchangesComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-exchanges", [], null, null, null, View_PageExchangesComponent_0, RenderType_PageExchangesComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageExchangesComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageExchangesComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-exchanges", PageExchangesComponent, View_PageExchangesComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_exchanges_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_exchanges_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_exchanges_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_exchanges_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_exchanges_item.component PURE_IMPORTS_END */






var styles_PageExchangesItemComponent = [page_exchanges_item_component_css_ngstyle_styles];
var RenderType_PageExchangesItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageExchangesItemComponent, data: {} });

function View_PageExchangesItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageExchangesItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-exchanges-item", [], null, null, null, View_PageExchangesItemComponent_0, RenderType_PageExchangesItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageExchangesItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
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
function View_PageICOComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-ico", [], null, null, null, View_PageICOComponent_0, RenderType_PageICOComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageICOComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageICOComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-ico", PageICOComponent, View_PageICOComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/ico/page-ico-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_ico_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/ico/page-ico-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_ico_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_ico_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_ico_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_ico_item.component PURE_IMPORTS_END */






var styles_PageICOItemComponent = [page_ico_item_component_css_ngstyle_styles];
var RenderType_PageICOItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageICOItemComponent, data: {} });

function View_PageICOItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageICOItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-ico-item", [], null, null, null, View_PageICOItemComponent_0, RenderType_PageICOItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageICOItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
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
function View_PageMarketsComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-markets", [], null, null, null, View_PageMarketsComponent_0, RenderType_PageMarketsComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMarketsComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMarketsComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-markets", PageMarketsComponent, View_PageMarketsComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/markets/page-markets-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_markets_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/markets/page-markets-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_markets_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_markets_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_markets_item.component.css.ngstyle,_angular_core,_.._article_article.component.ngfactory,_.._article_article.component,_angular_router,_page_markets_item.component PURE_IMPORTS_END */






var styles_PageMarketsItemComponent = [page_markets_item_component_css_ngstyle_styles];
var RenderType_PageMarketsItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMarketsItemComponent, data: {} });

function View_PageMarketsItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageMarketsItemComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-markets-item", [], null, null, null, View_PageMarketsItemComponent_0, RenderType_PageMarketsItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMarketsItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
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
var page_article_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/pages/article/page-article.component.ngfactory.js
/** PURE_IMPORTS_START _page_article.component.css.ngstyle,_angular_core,_page_article.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_article.component.css.ngstyle,_angular_core,_page_article.component PURE_IMPORTS_END */



var styles_PageArticleComponent = [page_article_component_css_ngstyle_styles];
var RenderType_PageArticleComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageArticleComponent, data: {} });

function View_PageArticleComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0421\u0442\u0430\u0442\u044C\u044F"]))], null, null); }
function View_PageArticleComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-article", [], null, null, null, View_PageArticleComponent_0, RenderType_PageArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageArticleComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageArticleComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-article", PageArticleComponent, View_PageArticleComponent_Host_0, {}, {}, []);


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
var form_field_es5 = __webpack_require__(23);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/dialog.es5.js
var dialog_es5 = __webpack_require__(37);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/form-field/typings/index.ngfactory.js
var form_field_typings_index_ngfactory = __webpack_require__(146);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/core.es5.js
var core_es5 = __webpack_require__(4);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/input.es5.js
var input_es5 = __webpack_require__(45);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/platform.es5.js
var platform_es5 = __webpack_require__(10);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/button/typings/index.ngfactory.js
var button_typings_index_ngfactory = __webpack_require__(147);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/button.es5.js
var button_es5 = __webpack_require__(32);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/a11y.es5.js
var a11y_es5 = __webpack_require__(8);

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
var header_component_css_ngstyle_styles = [".bj-header{position:fixed;left:0;top:0;width:100%;height:100px;z-index:900;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.bj-header__row-wrapper{display:block;width:100%;height:50%;background:#fff}.bj-header__row-wrapper--dark{background:var(--color-main);color:#fff}.bj-header__row{margin:0 auto;height:100%;max-width:var(--max-width);display:flex}@media (min-width:1000px){.bj-header__row{padding:0 0 0 var(--indent-base)}}@media (min-width:1200px){.bj-header__row{padding:0 var(--indent-double)}}.bj-header__button{height:100%;padding:0 var(--indent-base);text-transform:uppercase;text-decoration:none;font-family:inherit;font-size:100%;font-style:normal;border:0;border-radius:0;background-color:transparent;box-shadow:none;color:inherit;white-space:nowrap;display:flex;align-items:center;cursor:pointer;transition:background-color .3s}.bj-header__button:hover{background-color:var(--color-hover-light)}.bj-header__button--icon{font-size:1.5rem}.bj-header__button--login{display:none}@media (min-width:1000px){.bj-header__button--menu{display:none}.bj-header__button--login{display:flex}}.bj-header__logo{height:56px;width:56px;margin:-3px auto 0;padding:0;background:var(--color-main);border:3px solid #fff;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:999;cursor:pointer}.bj-header__logo img{height:50%;width:auto;margin-left:-5%}@media (min-width:1000px){.bj-header__logo{height:94px;width:94px;margin:4px var(--indent-half) 0 0}}.bj-header__nav{display:block;position:fixed;top:50px;bottom:0;height:auto;left:0%;width:70vw;max-width:300px;margin-right:auto;background:var(--color-main);color:#fff;z-index:950;transform:translate(-105%);transition:transform .3s}.bj-header__nav--show{transform:translate(0%)}.bj-header__nav .bj-header__button{height:50px;border-top:1px solid #555;border-bottom:1px solid #111}@media (min-width:1000px){.bj-header__nav{position:static;display:flex;transform:none}.bj-header__nav--show{transform:none}.bj-header__nav .bj-header__button{border-top:0 none;border-bottom:0 none}}"];


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
function View_CurrenciesRsibbonComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "currencies-ribbon", [], null, null, null, View_CurrenciesRsibbonComponent_0, RenderType_CurrenciesRsibbonComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, CurrenciesRsibbonComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CurrenciesRsibbonComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("currencies-ribbon", CurrenciesRsibbonComponent, View_CurrenciesRsibbonComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/header/header.component.ngfactory.js
/** PURE_IMPORTS_START _header.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_currencies_ribbon_currencies_ribbon.component.ngfactory,_currencies_ribbon_currencies_ribbon.component,_header.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _header.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_currencies_ribbon_currencies_ribbon.component.ngfactory,_currencies_ribbon_currencies_ribbon.component,_header.component PURE_IMPORTS_END */







var styles_HeaderComponent = [header_component_css_ngstyle_styles];
var RenderType_HeaderComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_0(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 40, "div", [["class", "bj-header__row-wrapper bj-header__row-wrapper--dark"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 39, "div", [["class", "bj-header__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 1, "button", [["class", "bj-header__button bj-header__button--icon bj-header__button--menu"]], null, [[null, "click"]], function (_v, en, $event) {
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
        }, null, null)), core["_2" /* ɵdid */](5, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 0, "img", [["alt", "BitJournal"], ["src", "/svg/logo.svg"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 28, "nav", [["class", "bj-header__nav"]], [[2, "bj-header__nav--show", null]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](9, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/events"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](13, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0418\u0432\u0435\u043D\u0442\u044B"])), (_l()(), core["_3" /* ɵeld */](16, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/ico"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](17, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](18, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["ICO"])), (_l()(), core["_3" /* ɵeld */](20, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/101"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 21).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](21, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](22, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u0438\u0447\u043A\u0430\u043C"])), (_l()(), core["_3" /* ɵeld */](24, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/currencies"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](25, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](26, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0412\u0430\u043B\u044E\u0442\u044B"])), (_l()(), core["_3" /* ɵeld */](28, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/exchanges"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 29).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](29, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](30, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041E\u0431\u043C\u0435\u043D\u043D\u0438\u043A\u0438"])), (_l()(), core["_3" /* ɵeld */](32, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/markets"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 33).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](33, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](34, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0411\u0438\u0440\u0436\u0438"])), (_l()(), core["_3" /* ɵeld */](36, 0, null, null, 1, "button", [["class", "bj-header__button bj-header__button--icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](37, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](38, 0, null, null, 2, "button", [["class", "bj-header__button bj-header__button--login"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](39, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0412\u043E\u0439\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](41, 0, null, null, 3, "div", [["class", "bj-header__row-wrapper"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](42, 0, null, null, 2, "div", [["class", "bj-header__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](43, 0, null, null, 1, "currencies-ribbon", [], null, null, null, View_CurrenciesRsibbonComponent_0, RenderType_CurrenciesRsibbonComponent)), core["_2" /* ɵdid */](44, 114688, null, 0, CurrenciesRsibbonComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 5, 0, currVal_2); var currVal_6 = "/"; _ck(_v, 9, 0, currVal_6); var currVal_9 = "/events"; _ck(_v, 13, 0, currVal_9); var currVal_12 = "/ico"; _ck(_v, 17, 0, currVal_12); var currVal_15 = "/101"; _ck(_v, 21, 0, currVal_15); var currVal_18 = "/currencies"; _ck(_v, 25, 0, currVal_18); var currVal_21 = "/exchanges"; _ck(_v, 29, 0, currVal_21); var currVal_24 = "/markets"; _ck(_v, 33, 0, currVal_24); _ck(_v, 44, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_15" /* ɵnov */](_v, 5).target; var currVal_1 = core["_15" /* ɵnov */](_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = _co.navBarVisibility; _ck(_v, 7, 0, currVal_3); var currVal_4 = core["_15" /* ɵnov */](_v, 9).target; var currVal_5 = core["_15" /* ɵnov */](_v, 9).href; _ck(_v, 8, 0, currVal_4, currVal_5); var currVal_7 = core["_15" /* ɵnov */](_v, 13).target; var currVal_8 = core["_15" /* ɵnov */](_v, 13).href; _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_10 = core["_15" /* ɵnov */](_v, 17).target; var currVal_11 = core["_15" /* ɵnov */](_v, 17).href; _ck(_v, 16, 0, currVal_10, currVal_11); var currVal_13 = core["_15" /* ɵnov */](_v, 21).target; var currVal_14 = core["_15" /* ɵnov */](_v, 21).href; _ck(_v, 20, 0, currVal_13, currVal_14); var currVal_16 = core["_15" /* ɵnov */](_v, 25).target; var currVal_17 = core["_15" /* ɵnov */](_v, 25).href; _ck(_v, 24, 0, currVal_16, currVal_17); var currVal_19 = core["_15" /* ɵnov */](_v, 29).target; var currVal_20 = core["_15" /* ɵnov */](_v, 29).href; _ck(_v, 28, 0, currVal_19, currVal_20); var currVal_22 = core["_15" /* ɵnov */](_v, 33).target; var currVal_23 = core["_15" /* ɵnov */](_v, 33).href; _ck(_v, 32, 0, currVal_22, currVal_23); });
}
function View_HeaderComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-header"]], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-header", HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/footer/footer.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var footer_component_css_ngstyle_styles = [".bj-footer,.bj-footer__logo{display:block;overflow:hidden;background:var(--color-main)}.bj-footer{padding:0 0 var(--indent-base);color:#fff;position:relative;width:100%}.bj-footer__logo{position:absolute;left:-100px;top:-100px;height:200px;width:200px;border:3px solid #fff;border-radius:50%;z-index:800;cursor:pointer}.bj-footer__logo img{display:block;position:absolute;top:119px;left:107px;height:38px;width:auto}.bj-footer__nav{margin:0 auto;max-width:var(--max-width);padding:var(--indent-base) var(--indent-base) var(--indent-base) calc(100px + var(--indent-base));min-height:100px;display:block}@media (min-width:1200px){.bj-footer__nav{padding:var(--indent-base) var(--indent-double) var(--indent-base) calc(100px + var(--indent-double))}}.bj-footer__nav__row{width:100%;display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:flex-start}.bj-footer__nav__item{margin:0 0 .5em 1em;border-bottom:1px solid #fff;padding-bottom:.1em;text-transform:none;text-decoration:none;font-family:inherit;font-size:100%;font-style:normal;color:inherit;white-space:nowrap}.bj-footer__nav__item:first-child{margin-left:0}.bj-footer__nav__item--donate{color:#ef6c00;border-bottom-color:#ef6c00}.bj-footer__row{margin:var(--indent-base) auto 0;max-width:var(--max-width);padding:0 var(--indent-base);display:flex;flex-wrap:wrap;align-items:flex-start}@media (min-width:1200px){.bj-footer__row{padding:0 var(--indent-double)}}.bj-footer__col{order:1;flex:0 0 auto;margin-left:var(--indent-base)}.bj-footer__col:first-child{flex:1 1 auto;margin-left:0}@media (min-width:1200px){.bj-footer__col:first-child{order:2;flex-basis:100%}}.bj-footer__col p{padding:0 var(--indent-base) 0 0;margin:0 0 var(--indent-half);line-height:1.4}.bj-footer__bottom-nav{display:flex;align-items:flex-start;margin-bottom:.5em}.bj-footer__bottom-nav a,.bj-footer__copyright{font-size:12px;font-weight:300;white-space:nowrap}.bj-footer__bottom-nav a{text-transform:none;text-decoration:none;font-family:inherit;font-style:normal;color:inherit;border-bottom:1px solid #fff;padding-bottom:.1em}.bj-footer__bottom-nav span{margin:0 1em}.bj-footer__copyright{margin:0 0 .5em auto;padding-left:var(--indent-base)}"];


// CONCATENATED MODULE: ./components/footer/footer.component.ngfactory.js
/** PURE_IMPORTS_START _footer.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_footer.component,_.._services_social_social.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _footer.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_footer.component,_.._services_social_social.service PURE_IMPORTS_END */






var styles_FooterComponent = [footer_component_css_ngstyle_styles];
var RenderType_FooterComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 46, "nav", [["class", "bj-footer__nav"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 28, "div", [["class", "bj-footer__nav__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](3, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/events"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](7, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0418\u0432\u0435\u043D\u0442\u044B"])), (_l()(), core["_3" /* ɵeld */](10, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/ico"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](11, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["ICO"])), (_l()(), core["_3" /* ɵeld */](14, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/101"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](15, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u0438\u0447\u043A\u0430\u043C"])), (_l()(), core["_3" /* ɵeld */](18, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/currencies"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](19, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](20, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0412\u0430\u043B\u044E\u0442\u044B"])), (_l()(), core["_3" /* ɵeld */](22, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/exchanges"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](23, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](24, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041E\u0431\u043C\u0435\u043D\u043D\u0438\u043A\u0438"])), (_l()(), core["_3" /* ɵeld */](26, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/markets"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](27, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](28, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0411\u0438\u0440\u0436\u0438"])), (_l()(), core["_3" /* ɵeld */](30, 0, null, null, 16, "div", [["class", "bj-footer__nav__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](31, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/about"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](32, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](33, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435"])), (_l()(), core["_3" /* ɵeld */](35, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/staff"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 36).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](36, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](37, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0420\u0435\u0434\u0430\u043A\u0446\u0438\u044F"])), (_l()(), core["_3" /* ɵeld */](39, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/ads"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 40).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](40, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](41, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0420\u0435\u043A\u043B\u0430\u043C\u0430"])), (_l()(), core["_3" /* ɵeld */](43, 0, null, null, 3, "a", [["class", "bj-footer__nav__item bj-footer__nav__item--donate"], ["routerLink", "/donate"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 44).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](44, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](45, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C"])), (_l()(), core["_3" /* ɵeld */](47, 0, null, null, 13, "div", [["class", "bj-footer__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](48, 0, null, null, 6, "div", [["class", "bj-footer__col"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](49, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0412\u0441\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439."])), (_l()(), core["_3" /* ɵeld */](51, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["BitJournal \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u043E\u0432."])), (_l()(), core["_3" /* ɵeld */](53, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430."])), (_l()(), core["_3" /* ɵeld */](55, 0, null, null, 1, "div", [["class", "bj-footer__col"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](56, 0, null, null, 0, "div", [["id", "vk_group_vidget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](57, 0, null, null, 3, "div", [["class", "bj-footer__col"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](58, 0, null, null, 1, "a", [["class", "twitter-follow-button"], ["data-show-count", "false"], ["data-size", "large"], ["href", "https://twitter.com/bitjournal_io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Follow @bitjournal_io"])), (_l()(), core["_3" /* ɵeld */](60, 0, null, null, 0, "div", [["class", "g-ytsubscribe"], ["data-channelid", "UCeOLUeYNcYDos1wcTJVLGlw"], ["data-count", "default"], ["data-layout", "full"], ["data-theme", "dark"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](61, 0, null, null, 15, "div", [["class", "bj-footer__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](62, 0, null, null, 11, "div", [["class", "bj-footer__col bj-footer__bottom-nav"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](63, 0, null, null, 1, "a", [["class", "bj-footer__bottom-nav"], ["href", "/rss"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["RSS"])), (_l()(), core["_3" /* ɵeld */](65, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["|"])), (_l()(), core["_3" /* ɵeld */](67, 0, null, null, 1, "a", [["class", "bj-footer__bottom-nav"], ["href", "/api"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["API"])), (_l()(), core["_3" /* ɵeld */](69, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["|"])), (_l()(), core["_3" /* ɵeld */](71, 0, null, null, 2, "a", [["class", "bj-footer__bottom-nav"], ["routerLink", "/privacy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 72).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](72, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](74, 0, null, null, 2, "div", [["class", "bj-footer__col bj-footer__copyright"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](75, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Copyright \u00A9 2017 BitJournal"])), (_l()(), core["_3" /* ɵeld */](77, 0, null, null, 2, "a", [["class", "bj-footer__logo"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 78).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](78, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](79, 0, null, null, 0, "img", [["alt", "BitJournal"], ["src", "/svg/logo.svg"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 3, 0, currVal_2); var currVal_5 = "/events"; _ck(_v, 7, 0, currVal_5); var currVal_8 = "/ico"; _ck(_v, 11, 0, currVal_8); var currVal_11 = "/101"; _ck(_v, 15, 0, currVal_11); var currVal_14 = "/currencies"; _ck(_v, 19, 0, currVal_14); var currVal_17 = "/exchanges"; _ck(_v, 23, 0, currVal_17); var currVal_20 = "/markets"; _ck(_v, 27, 0, currVal_20); var currVal_23 = "/about"; _ck(_v, 32, 0, currVal_23); var currVal_26 = "/staff"; _ck(_v, 36, 0, currVal_26); var currVal_29 = "/ads"; _ck(_v, 40, 0, currVal_29); var currVal_32 = "/donate"; _ck(_v, 44, 0, currVal_32); var currVal_35 = "/privacy"; _ck(_v, 72, 0, currVal_35); var currVal_38 = "/"; _ck(_v, 78, 0, currVal_38); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 3).target; var currVal_1 = core["_15" /* ɵnov */](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = core["_15" /* ɵnov */](_v, 7).target; var currVal_4 = core["_15" /* ɵnov */](_v, 7).href; _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_6 = core["_15" /* ɵnov */](_v, 11).target; var currVal_7 = core["_15" /* ɵnov */](_v, 11).href; _ck(_v, 10, 0, currVal_6, currVal_7); var currVal_9 = core["_15" /* ɵnov */](_v, 15).target; var currVal_10 = core["_15" /* ɵnov */](_v, 15).href; _ck(_v, 14, 0, currVal_9, currVal_10); var currVal_12 = core["_15" /* ɵnov */](_v, 19).target; var currVal_13 = core["_15" /* ɵnov */](_v, 19).href; _ck(_v, 18, 0, currVal_12, currVal_13); var currVal_15 = core["_15" /* ɵnov */](_v, 23).target; var currVal_16 = core["_15" /* ɵnov */](_v, 23).href; _ck(_v, 22, 0, currVal_15, currVal_16); var currVal_18 = core["_15" /* ɵnov */](_v, 27).target; var currVal_19 = core["_15" /* ɵnov */](_v, 27).href; _ck(_v, 26, 0, currVal_18, currVal_19); var currVal_21 = core["_15" /* ɵnov */](_v, 32).target; var currVal_22 = core["_15" /* ɵnov */](_v, 32).href; _ck(_v, 31, 0, currVal_21, currVal_22); var currVal_24 = core["_15" /* ɵnov */](_v, 36).target; var currVal_25 = core["_15" /* ɵnov */](_v, 36).href; _ck(_v, 35, 0, currVal_24, currVal_25); var currVal_27 = core["_15" /* ɵnov */](_v, 40).target; var currVal_28 = core["_15" /* ɵnov */](_v, 40).href; _ck(_v, 39, 0, currVal_27, currVal_28); var currVal_30 = core["_15" /* ɵnov */](_v, 44).target; var currVal_31 = core["_15" /* ɵnov */](_v, 44).href; _ck(_v, 43, 0, currVal_30, currVal_31); var currVal_33 = core["_15" /* ɵnov */](_v, 72).target; var currVal_34 = core["_15" /* ɵnov */](_v, 72).href; _ck(_v, 71, 0, currVal_33, currVal_34); var currVal_36 = core["_15" /* ɵnov */](_v, 78).target; var currVal_37 = core["_15" /* ɵnov */](_v, 78).href; _ck(_v, 77, 0, currVal_36, currVal_37); });
}
function View_FooterComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-footer"]], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), core["_2" /* ɵdid */](1, 4243456, null, 0, footer_component_FooterComponent, [social_service_SocialService], null, null)], null, null); }
var FooterComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-footer", footer_component_FooterComponent, View_FooterComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/layout/layout.component.ngfactory.js
/** PURE_IMPORTS_START _layout.component.css.ngstyle,_angular_core,_header_header.component.ngfactory,_header_header.component,_angular_router,_footer_footer.component.ngfactory,_footer_footer.component,_.._services_social_social.service,_layout.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _layout.component.css.ngstyle,_angular_core,_header_header.component.ngfactory,_header_header.component,_angular_router,_footer_footer.component.ngfactory,_footer_footer.component,_.._services_social_social.service,_layout.component PURE_IMPORTS_END */









var styles_LayoutComponent = [layout_component_css_ngstyle_styles];
var RenderType_LayoutComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_LayoutComponent, data: {} });

function View_LayoutComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "header", [["class", "bj-header"]], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core["_2" /* ɵdid */](3, 212992, null, 0, router["n" /* RouterOutlet */], [router["b" /* ChildrenOutletContexts */], core["N" /* ViewContainerRef */], core["j" /* ComponentFactoryResolver */], [8, null], core["h" /* ChangeDetectorRef */]], null, null), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 1, "footer", [["class", "bj-footer"]], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), core["_2" /* ɵdid */](5, 4243456, null, 0, footer_component_FooterComponent, [social_service_SocialService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); }, null); }
function View_LayoutComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "body", [], null, null, null, View_LayoutComponent_0, RenderType_LayoutComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, LayoutComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LayoutComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("body", LayoutComponent, View_LayoutComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/browser.js
var browser = __webpack_require__(90);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/animations.js
var animations = __webpack_require__(148);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/animations.js
var esm5_animations = __webpack_require__(15);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/bidi.es5.js
var bidi_es5 = __webpack_require__(11);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/scrolling.es5.js
var scrolling_es5 = __webpack_require__(31);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/overlay.es5.js
var overlay_es5 = __webpack_require__(19);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/sort.es5.js
var sort_es5 = __webpack_require__(88);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/layout.es5.js
var layout_es5 = __webpack_require__(59);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/snack-bar.es5.js
var snack_bar_es5 = __webpack_require__(58);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/portal.es5.js
var portal_es5 = __webpack_require__(20);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/table.es5.js
var table_es5 = __webpack_require__(60);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/table.es5.js
var esm5_table_es5 = __webpack_require__(89);

// CONCATENATED MODULE: ./app.module.ngfactory.js
/** PURE_IMPORTS_START _angular_core,_app.module,_components_layout_layout.component,_.._node_modules__angular_material_dialog_typings_index.ngfactory,_.._node_modules__angular_material_snack_bar_typings_index.ngfactory,_components_pages_main_page_main.component.ngfactory,_components_pages_101_page_101.component.ngfactory,_components_pages_currencies_page_currencies.component.ngfactory,_components_pages_currencies_page_currencies_item.component.ngfactory,_components_pages_events_page_events.component.ngfactory,_components_pages_events_page_events_item.component.ngfactory,_components_pages_exchanges_page_exchanges.component.ngfactory,_components_pages_exchanges_page_exchanges_item.component.ngfactory,_components_pages_ico_page_ico.component.ngfactory,_components_pages_ico_page_ico_item.component.ngfactory,_components_pages_markets_page_markets.component.ngfactory,_components_pages_markets_page_markets_item.component.ngfactory,_components_pages_section_page_section.component.ngfactory,_components_pages_article_page_article.component.ngfactory,_components_no_content_no_content.component.ngfactory,_components_auth_auth_dialog.component.ngfactory,_components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,_services_message_message.service,_services_user_user.service,_services_api_api.service,_services_youtube_youtube.service,_services_publication_publication.service,_services_social_social.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,_components_pages_main_page_main.component,_components_pages_101_page_101.component,_components_pages_currencies_page_currencies.component,_components_pages_currencies_page_currencies_item.component,_components_pages_events_page_events.component,_components_pages_events_page_events_item.component,_components_pages_exchanges_page_exchanges.component,_components_pages_exchanges_page_exchanges_item.component,_components_pages_ico_page_ico.component,_components_pages_ico_page_ico_item.component,_components_pages_markets_page_markets.component,_components_pages_markets_page_markets_item.component,_components_pages_section_page_section.component,_components_pages_article_page_article.component,_components_no_content_no_content.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_app.module,_components_layout_layout.component,_.._node_modules__angular_material_dialog_typings_index.ngfactory,_.._node_modules__angular_material_snack_bar_typings_index.ngfactory,_components_pages_main_page_main.component.ngfactory,_components_pages_101_page_101.component.ngfactory,_components_pages_currencies_page_currencies.component.ngfactory,_components_pages_currencies_page_currencies_item.component.ngfactory,_components_pages_events_page_events.component.ngfactory,_components_pages_events_page_events_item.component.ngfactory,_components_pages_exchanges_page_exchanges.component.ngfactory,_components_pages_exchanges_page_exchanges_item.component.ngfactory,_components_pages_ico_page_ico.component.ngfactory,_components_pages_ico_page_ico_item.component.ngfactory,_components_pages_markets_page_markets.component.ngfactory,_components_pages_markets_page_markets_item.component.ngfactory,_components_pages_section_page_section.component.ngfactory,_components_pages_article_page_article.component.ngfactory,_components_no_content_no_content.component.ngfactory,_components_auth_auth_dialog.component.ngfactory,_components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,_services_message_message.service,_services_user_user.service,_services_api_api.service,_services_youtube_youtube.service,_services_publication_publication.service,_services_social_social.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,_components_pages_main_page_main.component,_components_pages_101_page_101.component,_components_pages_currencies_page_currencies.component,_components_pages_currencies_page_currencies_item.component,_components_pages_events_page_events.component,_components_pages_events_page_events_item.component,_components_pages_exchanges_page_exchanges.component,_components_pages_exchanges_page_exchanges_item.component,_components_pages_ico_page_ico.component,_components_pages_ico_page_ico_item.component,_components_pages_markets_page_markets.component,_components_pages_markets_page_markets_item.component,_components_pages_section_page_section.component,_components_pages_article_page_article.component,_components_no_content_no_content.component PURE_IMPORTS_END */



































































var AppModuleNgFactory = /*@__PURE__*/ core["_0" /* ɵcmf */](AppModule, [LayoutComponent], function (_l) { return core["_12" /* ɵmod */]([core["_13" /* ɵmpd */](512, core["j" /* ComponentFactoryResolver */], core["W" /* ɵCodegenComponentFactoryResolver */], [[8, [index_ngfactory["a" /* MatDialogContainerNgFactory */], typings_index_ngfactory["a" /* MatSnackBarContainerNgFactory */], typings_index_ngfactory["b" /* SimpleSnackBarNgFactory */], PageMainComponentNgFactory, Page101ComponentNgFactory, PageCurrenciesComponentNgFactory, PageCurrenciesItemComponentNgFactory, PageEventsComponentNgFactory, PageEventsItemComponentNgFactory, PageExchangesComponentNgFactory, PageExchangesItemComponentNgFactory, PageICOComponentNgFactory, PageICOItemComponentNgFactory, PageMarketsComponentNgFactory, PageMarketsItemComponentNgFactory, PageSectionComponentNgFactory, PageArticleComponentNgFactory, NoContentComponentNgFactory, AuthDialogComponentNgFactory, LayoutComponentNgFactory]], [3, core["j" /* ComponentFactoryResolver */]], core["w" /* NgModuleRef */]]), core["_13" /* ɵmpd */](5120, core["t" /* LOCALE_ID */], core["_11" /* ɵm */], [[3, core["t" /* LOCALE_ID */]]]), core["_13" /* ɵmpd */](4608, common["l" /* NgLocalization */], common["k" /* NgLocaleLocalization */], [core["t" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_13" /* ɵmpd */](5120, core["r" /* IterableDiffers */], core["_8" /* ɵk */], []), core["_13" /* ɵmpd */](5120, core["s" /* KeyValueDiffers */], core["_9" /* ɵl */], []), core["_13" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["t" /* ɵe */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](6144, core["F" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_13" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], platform_browser["g" /* HammerGestureConfig */], []), core["_13" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["l" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["p" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["o" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["d" /* DOCUMENT */], core["y" /* NgZone */], common["d" /* DOCUMENT */], common["d" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_13" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](135680, platform_browser["n" /* ɵDomSharedStylesHost */], platform_browser["n" /* ɵDomSharedStylesHost */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["m" /* ɵDomRendererFactory2 */], platform_browser["m" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["n" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](5120, browser["a" /* AnimationDriver */], animations["d" /* ɵc */], []), core["_13" /* ɵmpd */](5120, browser["c" /* ɵAnimationStyleNormalizer */], animations["e" /* ɵd */], []), core["_13" /* ɵmpd */](4608, browser["b" /* ɵAnimationEngine */], animations["c" /* ɵb */], [browser["a" /* AnimationDriver */], browser["c" /* ɵAnimationStyleNormalizer */]]), core["_13" /* ɵmpd */](5120, core["D" /* RendererFactory2 */], animations["f" /* ɵe */], [platform_browser["m" /* ɵDomRendererFactory2 */], browser["b" /* ɵAnimationEngine */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](6144, platform_browser["q" /* ɵSharedStylesHost */], null, [platform_browser["n" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](4608, core["L" /* Testability */], core["L" /* Testability */], [core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_animations["b" /* AnimationBuilder */], animations["b" /* ɵBrowserAnimationBuilder */], [core["D" /* RendererFactory2 */], platform_browser["b" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_forms["s" /* ɵi */], esm5_forms["s" /* ɵi */], []), core["_13" /* ɵmpd */](4608, esm5_forms["e" /* FormBuilder */], esm5_forms["e" /* FormBuilder */], []), core["_13" /* ɵmpd */](4608, http["k" /* HttpXsrfTokenExtractor */], http["p" /* ɵg */], [common["d" /* DOCUMENT */], core["A" /* PLATFORM_ID */], http["n" /* ɵe */]]), core["_13" /* ɵmpd */](4608, http["q" /* ɵh */], http["q" /* ɵh */], [http["k" /* HttpXsrfTokenExtractor */], http["o" /* ɵf */]]), core["_13" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["q" /* ɵh */]]), core["_13" /* ɵmpd */](4608, http["m" /* ɵd */], http["m" /* ɵd */], []), core["_13" /* ɵmpd */](6144, http["l" /* XhrFactory */], null, [http["m" /* ɵd */]]), core["_13" /* ɵmpd */](4608, http["j" /* HttpXhrBackend */], http["j" /* HttpXhrBackend */], [http["l" /* XhrFactory */]]), core["_13" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["j" /* HttpXhrBackend */]]), core["_13" /* ɵmpd */](5120, http["g" /* HttpHandler */], http["r" /* ɵinterceptingHandler */], [http["b" /* HttpBackend */], [2, http["a" /* HTTP_INTERCEPTORS */]]]), core["_13" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["g" /* HttpHandler */]]), core["_13" /* ɵmpd */](6144, bidi_es5["b" /* DIR_DOCUMENT */], null, [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, bidi_es5["c" /* Directionality */], bidi_es5["c" /* Directionality */], [[2, bidi_es5["b" /* DIR_DOCUMENT */]]]), core["_13" /* ɵmpd */](4608, platform_es5["a" /* Platform */], platform_es5["a" /* Platform */], []), core["_13" /* ɵmpd */](5120, scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, scrolling_es5["c" /* ScrollDispatcher */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, scrolling_es5["f" /* ViewportRuler */], scrolling_es5["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, scrolling_es5["f" /* ViewportRuler */]], platform_es5["a" /* Platform */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["f" /* ScrollStrategyOptions */], [scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["f" /* ViewportRuler */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](5120, overlay_es5["c" /* OverlayContainer */], overlay_es5["g" /* ɵa */], [[3, overlay_es5["c" /* OverlayContainer */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["k" /* ɵh */], overlay_es5["k" /* ɵh */], [scrolling_es5["f" /* ViewportRuler */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["d" /* OverlayKeyboardDispatcher */], overlay_es5["j" /* ɵf */], [[3, overlay_es5["d" /* OverlayKeyboardDispatcher */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["a" /* Overlay */], overlay_es5["a" /* Overlay */], [overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["c" /* OverlayContainer */], core["j" /* ComponentFactoryResolver */], overlay_es5["k" /* ɵh */], overlay_es5["d" /* OverlayKeyboardDispatcher */], core["g" /* ApplicationRef */], core["q" /* Injector */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["h" /* ɵc */], overlay_es5["i" /* ɵd */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, a11y_es5["i" /* InteractivityChecker */], a11y_es5["i" /* InteractivityChecker */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](4608, a11y_es5["h" /* FocusTrapFactory */], a11y_es5["h" /* FocusTrapFactory */], [a11y_es5["i" /* InteractivityChecker */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](136192, a11y_es5["d" /* AriaDescriber */], a11y_es5["b" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, a11y_es5["d" /* AriaDescriber */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["l" /* LiveAnnouncer */], a11y_es5["k" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, a11y_es5["l" /* LiveAnnouncer */]], [2, a11y_es5["j" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["g" /* FocusMonitor */], a11y_es5["e" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, a11y_es5["g" /* FocusMonitor */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], dialog_es5["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, dialog_es5["d" /* MatDialog */], dialog_es5["d" /* MatDialog */], [overlay_es5["a" /* Overlay */], core["q" /* Injector */], [2, common["g" /* Location */]], dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, dialog_es5["d" /* MatDialog */]]]), core["_13" /* ɵmpd */](5120, sort_es5["b" /* MatSortHeaderIntl */], sort_es5["a" /* MAT_SORT_HEADER_INTL_PROVIDER_FACTORY */], [[3, sort_es5["b" /* MatSortHeaderIntl */]]]), core["_13" /* ɵmpd */](4608, layout_es5["d" /* MediaMatcher */], layout_es5["d" /* MediaMatcher */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](135680, layout_es5["a" /* BreakpointObserver */], layout_es5["a" /* BreakpointObserver */], [layout_es5["d" /* MediaMatcher */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, snack_bar_es5["b" /* MatSnackBar */], snack_bar_es5["b" /* MatSnackBar */], [overlay_es5["a" /* Overlay */], a11y_es5["l" /* LiveAnnouncer */], core["q" /* Injector */], layout_es5["a" /* BreakpointObserver */], [3, snack_bar_es5["b" /* MatSnackBar */]]]), core["_13" /* ɵmpd */](4608, core_es5["c" /* ErrorStateMatcher */], core_es5["c" /* ErrorStateMatcher */], []), core["_13" /* ɵmpd */](5120, router["a" /* ActivatedRoute */], router["w" /* ɵf */], [router["k" /* Router */]]), core["_13" /* ɵmpd */](4608, router["e" /* PreloadAllModules */], router["e" /* PreloadAllModules */], []), core["_13" /* ɵmpd */](6144, router["f" /* PreloadingStrategy */], null, [router["e" /* PreloadAllModules */]]), core["_13" /* ɵmpd */](135680, router["o" /* RouterPreloader */], router["o" /* RouterPreloader */], [router["k" /* Router */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], core["q" /* Injector */], router["f" /* PreloadingStrategy */]]), core["_13" /* ɵmpd */](4608, router["d" /* NoPreloading */], router["d" /* NoPreloading */], []), core["_13" /* ɵmpd */](5120, router["h" /* ROUTER_INITIALIZER */], router["z" /* ɵi */], [router["x" /* ɵg */]]), core["_13" /* ɵmpd */](5120, core["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [router["h" /* ROUTER_INITIALIZER */]]), core["_13" /* ɵmpd */](4608, message_service_MessageService, message_service_MessageService, [core["A" /* PLATFORM_ID */], snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, user_service_UserService, user_service_UserService, [core["A" /* PLATFORM_ID */], http["c" /* HttpClient */], dialog_es5["d" /* MatDialog */], message_service_MessageService, snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, api_service_APIService, api_service_APIService, [http["c" /* HttpClient */], router["k" /* Router */], user_service_UserService, message_service_MessageService]), core["_13" /* ɵmpd */](4608, youtube_service_YouTubeService, youtube_service_YouTubeService, [http["c" /* HttpClient */], message_service_MessageService]), core["_13" /* ɵmpd */](4608, PublicationService, PublicationService, [api_service_APIService]), core["_13" /* ɵmpd */](4608, social_service_SocialService, social_service_SocialService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](512, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["_13" /* ɵmpd */](1024, core["m" /* ErrorHandler */], platform_browser["s" /* ɵa */], []), core["_13" /* ɵmpd */](1024, core["x" /* NgProbeToken */], function () { return [router["s" /* ɵb */]()]; }, []), core["_13" /* ɵmpd */](256, core["c" /* APP_ID */], "null-vnull", []), core["_13" /* ɵmpd */](2048, platform_browser["r" /* ɵTRANSITION_ID */], null, [core["c" /* APP_ID */]]), core["_13" /* ɵmpd */](512, router["x" /* ɵg */], router["x" /* ɵg */], [core["q" /* Injector */]]), core["_13" /* ɵmpd */](1024, core["d" /* APP_INITIALIZER */], function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [platform_browser["w" /* ɵh */](p0_0), platform_browser["u" /* ɵf */](p1_0, p1_1, p1_2), router["y" /* ɵh */](p2_0)]; }, [[2, core["x" /* NgProbeToken */]], platform_browser["r" /* ɵTRANSITION_ID */], common["d" /* DOCUMENT */], core["q" /* Injector */], router["x" /* ɵg */]]), core["_13" /* ɵmpd */](512, core["e" /* ApplicationInitStatus */], core["e" /* ApplicationInitStatus */], [[2, core["d" /* APP_INITIALIZER */]]]), core["_13" /* ɵmpd */](131584, core["g" /* ApplicationRef */], core["g" /* ApplicationRef */], [core["y" /* NgZone */], core["X" /* ɵConsole */], core["q" /* Injector */], core["m" /* ErrorHandler */], core["j" /* ComponentFactoryResolver */], core["e" /* ApplicationInitStatus */]]), core["_13" /* ɵmpd */](512, core["f" /* ApplicationModule */], core["f" /* ApplicationModule */], [core["g" /* ApplicationRef */]]), core["_13" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_13" /* ɵmpd */](512, animations["a" /* BrowserAnimationsModule */], animations["a" /* BrowserAnimationsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["q" /* ɵba */], esm5_forms["q" /* ɵba */], []), core["_13" /* ɵmpd */](512, esm5_forms["h" /* FormsModule */], esm5_forms["h" /* FormsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["o" /* ReactiveFormsModule */], esm5_forms["o" /* ReactiveFormsModule */], []), core["_13" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_13" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_13" /* ɵmpd */](512, bidi_es5["a" /* BidiModule */], bidi_es5["a" /* BidiModule */], []), core["_13" /* ɵmpd */](512, portal_es5["g" /* PortalModule */], portal_es5["g" /* PortalModule */], []), core["_13" /* ɵmpd */](512, platform_es5["b" /* PlatformModule */], platform_es5["b" /* PlatformModule */], []), core["_13" /* ɵmpd */](512, scrolling_es5["b" /* ScrollDispatchModule */], scrolling_es5["b" /* ScrollDispatchModule */], []), core["_13" /* ɵmpd */](512, overlay_es5["e" /* OverlayModule */], overlay_es5["e" /* OverlayModule */], []), core["_13" /* ɵmpd */](512, a11y_es5["a" /* A11yModule */], a11y_es5["a" /* A11yModule */], []), core["_13" /* ɵmpd */](256, core_es5["d" /* MATERIAL_SANITY_CHECKS */], true, []), core["_13" /* ɵmpd */](512, core_es5["g" /* MatCommonModule */], core_es5["g" /* MatCommonModule */], [[2, core_es5["d" /* MATERIAL_SANITY_CHECKS */]]]), core["_13" /* ɵmpd */](512, dialog_es5["h" /* MatDialogModule */], dialog_es5["h" /* MatDialogModule */], []), core["_13" /* ɵmpd */](512, sort_es5["c" /* MatSortModule */], sort_es5["c" /* MatSortModule */], []), core["_13" /* ɵmpd */](512, table_es5["k" /* CdkTableModule */], table_es5["k" /* CdkTableModule */], []), core["_13" /* ɵmpd */](512, esm5_table_es5["a" /* MatTableModule */], esm5_table_es5["a" /* MatTableModule */], []), core["_13" /* ɵmpd */](512, layout_es5["c" /* LayoutModule */], layout_es5["c" /* LayoutModule */], []), core["_13" /* ɵmpd */](512, snack_bar_es5["d" /* MatSnackBarModule */], snack_bar_es5["d" /* MatSnackBarModule */], []), core["_13" /* ɵmpd */](512, form_field_es5["d" /* MatFormFieldModule */], form_field_es5["d" /* MatFormFieldModule */], []), core["_13" /* ɵmpd */](512, input_es5["b" /* MatInputModule */], input_es5["b" /* MatInputModule */], []), core["_13" /* ɵmpd */](512, core_es5["k" /* MatRippleModule */], core_es5["k" /* MatRippleModule */], []), core["_13" /* ɵmpd */](512, button_es5["d" /* MatButtonModule */], button_es5["d" /* MatButtonModule */], []), core["_13" /* ɵmpd */](1024, router["r" /* ɵa */], router["u" /* ɵd */], [[3, router["k" /* Router */]]]), core["_13" /* ɵmpd */](512, router["q" /* UrlSerializer */], router["c" /* DefaultUrlSerializer */], []), core["_13" /* ɵmpd */](512, router["b" /* ChildrenOutletContexts */], router["b" /* ChildrenOutletContexts */], []), core["_13" /* ɵmpd */](256, router["g" /* ROUTER_CONFIGURATION */], { useHash: false, preloadingStrategy: router["e" /* PreloadAllModules */] }, []), core["_13" /* ɵmpd */](1024, common["h" /* LocationStrategy */], router["t" /* ɵc */], [common["p" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], router["g" /* ROUTER_CONFIGURATION */]]), core["_13" /* ɵmpd */](512, common["g" /* Location */], common["g" /* Location */], [common["h" /* LocationStrategy */]]), core["_13" /* ɵmpd */](512, core["i" /* Compiler */], core["i" /* Compiler */], []), core["_13" /* ɵmpd */](512, core["v" /* NgModuleFactoryLoader */], core["I" /* SystemJsNgModuleLoader */], [core["i" /* Compiler */], [2, core["J" /* SystemJsNgModuleLoaderConfig */]]]), core["_13" /* ɵmpd */](1024, router["i" /* ROUTES */], function () { return [[{ path: "", component: PageMainComponent }, { path: "101", component: Page101Component }, { path: "currencies/:id", component: PageCurrenciesComponent }, { path: "currencies", component: PageCurrenciesItemComponent }, { path: "events/:id", component: PageEventsComponent }, { path: "events", component: PageEventsItemComponent }, { path: "exchanges/:id", component: PageExchangesComponent }, { path: "exchanges", component: PageExchangesItemComponent }, { path: "ico/:id", component: PageICOComponent }, { path: "ico", component: PageICOItemComponent }, { path: "markets/:id", component: PageMarketsComponent }, { path: "markets", component: PageMarketsItemComponent }, { path: ":section", component: PageSectionComponent }, { path: ":date/:url", component: PageArticleComponent }, { path: "**", component: NoContentComponent }]]; }, []), core["_13" /* ɵmpd */](1024, router["k" /* Router */], router["v" /* ɵe */], [core["g" /* ApplicationRef */], router["q" /* UrlSerializer */], router["b" /* ChildrenOutletContexts */], common["g" /* Location */], core["q" /* Injector */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], router["i" /* ROUTES */], router["g" /* ROUTER_CONFIGURATION */], [2, router["p" /* UrlHandlingStrategy */]], [2, router["j" /* RouteReuseStrategy */]]]), core["_13" /* ɵmpd */](512, router["m" /* RouterModule */], router["m" /* RouterModule */], [[2, router["r" /* ɵa */]], [2, router["k" /* Router */]]]), core["_13" /* ɵmpd */](512, AppModule, AppModule, []), core["_13" /* ɵmpd */](256, http["n" /* ɵe */], "XSRF-TOKEN", []), core["_13" /* ɵmpd */](256, http["o" /* ɵf */], "X-XSRF-TOKEN", [])]); });


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
        Object(platform_browser["j" /* enableDebugTools */])(cmpRef);
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
    return Object(platform_browser["k" /* platformBrowser */])()
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

},[91]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXJ0aWNsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvcmFuZG9tQnl0ZXMtYnJvd3Nlci50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvYnl0ZXNUb1V1aWQudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3YxLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC9wYXR0ZXJucy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvdXVpZC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS90aW1lc3RhbXAvdGltZXN0YW1wLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdGltZXN0YW1wL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9lbnVtLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9ibG9jay5lbnVtLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2Fkcy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2NvaW4vcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2hpc3RvcmljYWwudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2NvaW4udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcmF0aW5nL3JhdGluZy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3JhdGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2N1cnJlbmN5LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY3VycmVuY3kvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9leGNoYW5nZS9leGNoYW5nZS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V4Y2hhbmdlL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvaWNvL2ljby50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL21hcmtldC9tYXJrZXQudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci91cmwtYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3VybC1idWlsZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vcHVibGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9wdWJsaWNhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vc2VjdGlvbi50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zdGF0dXMvc3RhdHVzLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc3RhdHVzL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci9yb2xlLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vdmlkZW8udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy92aWRlby9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V2ZW50L2V2ZW50LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXZlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL2VudmVyb21lbnRzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMveW91dHViZS95b3V0dWJlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMveW91dHViZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3B1YmxpY2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NvY2lhbC92ay1pbml0LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NvY2lhbC90d2l0dGVyLWluaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc29jaWFsL2dvb2dsZS1pbml0LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NvY2lhbC9lbnZlcm9tZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc29jaWFsL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vLWNvbnRlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvMTAxL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21haW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItY2FyZC9wdWItY2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItY2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb2xsb3cvZm9sbG93LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZvbGxvdy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnRzLnRzIiwid2VicGFjazovLy8uL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItY2FyZC9wdWItY2FyZC5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGlwZXMvaW1hZ2UvZW52ZXJvbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vcGlwZXMvaW1hZ2UvaW1hZ2UucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy90aW1lc3RhbXAvdGltZXN0YW1wLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9wYWdlLW1haW4uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5mcm9udC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7OztBQ1BSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7O0FDN0NBLGlDQUF3QyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHO0FBQ2xHLGlDQUF3QyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHO0FBQ2xHLGlDQUF3QyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHO0FBQ2xHLGlDQUF3QyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHO0FBQ2xHO0FBQ0E7OztBQ0xBO0FBQ3lFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hGQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkZBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsR0FBRywrQkFBK0Isc0JBQXNCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JEQTs7O0FDQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xCZTtBQUNLO0FBQ0E7QUFDcEIsa0NBQWtDLGNBQWM7QUFDaEQseUJBQXlCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN2QztBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbEhBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25Eb0I7QUFDSjtBQUNoQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVDb0I7QUFDSjtBQUNLO0FBQ3JCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTyx3QkFBd0Isc0JBQXNCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2SEE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoREE7OztBQ0FpQjtBQUNHO0FBQ3BCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDaEdBOzs7QUNBZTtBQUNLO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzRkE7OztBQ0FlO0FBQ0s7QUFDSDtBQUNqQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pHQTs7O0FDQWU7QUFDSztBQUNIO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0ZBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNqQkE7OztBQ0FlO0FBQ007QUFDRDtBQUNIO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pKQTs7O0FDQWU7QUFDZjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckVBOzs7QUNBZTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BEQTs7O0FDQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2ZlO0FBQ0k7QUFDRjtBQUNqQix1Q0FBa0MsY0FBYztBQUNoRDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNuSEE7QUFDQTs7O0FDREE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVDQTs7O0FDQWU7QUFDSztBQUNIO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeEZBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWlU7QUFDaUI7QUFDTDtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsV0FBVztBQUNoRTtBQUNBOzs7QUNkQTs7O0FDQVU7QUFDaUI7QUFDMEI7QUFDaEM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDb0I7QUFDRTtBQUNRO0FBQ2Y7QUFDTTtBQUNJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdDLG9EQUFvRDtBQUNwRjtBQUNBO0FBQ0EsOEVBQWtFLDRCQUE0QjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSxxRkFBK0QsYUFBYTtBQUM1RTtBQUNBLG9EQUFvRCxhQUFhLElBQUksY0FBYztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUEyRSw0QkFBNEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwRUFBOEQsNEJBQTRCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQ2pGQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDSm9EO0FBQ25DO0FBQ0k7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7QUFDRztBQUNKO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWEsSUFBSSxjQUFjO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qix1REFBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUFrRSxrQ0FBa0M7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBaUUsa0NBQWtDO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQThELGtDQUFrQztBQUNoRztBQUNBO0FBQ0E7QUFDQTs7O0FDL0RBOzs7QUNBcUI7QUFDQTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUN5QjtBQUN6QjtBQUNBLDRFQUE0RSxLQUFLLE9BQU8sZUFBZTtBQUN2RywwSEFBMEgsS0FBSztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsRUFBRSxXQUFXLEVBQUU7QUFDakU7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUN6Q0E7OztBQ0FxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTs7O0FDWEE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUNWQTs7O0FDQVU7QUFDaUI7QUFDVjtBQUNLO0FBQ0Q7QUFDRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvQkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTFU7QUFDd0I7QUFDWDtBQUNEO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RCxTQUFTO0FBQ1Q7QUFDQTs7O0FDdkJBOzs7QUNBd0I7QUFDQTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtEQUFrRCxFQUFFO0FBQ3BEO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDN0JBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNUQTs7O0FDQWlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBOzs7QUNBVTtBQUNWO0FBQ0E7OztBQ0ZBOzs7QUNBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBOzs7QUNBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUkE7QUFDQTs7O0FDRGlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSQTtBQUNBOzs7QUNEaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNBO0FBQ2E7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUlU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTs7Ozs7OztBQ0FpQjtBQUNBO0FBQ2pCO0FBQ3NDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0NBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xDQTs7O0FDQWlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBOzs7QUNBVTtBQUNWO0FBQ0E7OztBQ0ZBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWNmY7QUFDN2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVCVTtBQUNBO0FBQ0E7QUFDVjtBQUNBOzs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBLDJEQUE0QixhQUFhLGVBQWUsMkJBQTJCLHlCQUF5Qix1QkFBdUIsZUFBZSxxQkFBcUIsb0JBQW9CLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLHlCQUF5Qix5QkFBeUIsMEJBQTBCLGVBQWUscUJBQXFCLGNBQWMsV0FBVywyQkFBMkIsa0JBQWtCLFNBQVMsVUFBVSxtQkFBbUIsYUFBYSxzQkFBc0IsOEJBQThCLHlCQUF5QixxQkFBcUIsa0JBQWtCLHNCQUFzQixrQkFBa0IsT0FBTyxNQUFNLFFBQVEsU0FBUyxZQUFZLGdCQUFnQixrRUFBa0UsY0FBYyxzQkFBc0IsV0FBVywwQkFBMEIsZUFBZSxnQkFBZ0IsUUFBUSxTQUFTLCtCQUErQixpQkFBaUIsa0JBQWtCLGtCQUFrQixrQkFBa0IsNkJBQTZCLHdCQUF3Qiw0RkFBNEYsaUNBQWlDLGlCQUFpQixpQkFBaUIsb0JBQW9CLGVBQWUsZ0JBQWdCLGlCQUFpQixXQUFXLDZEQUE2RCxjQUFjLHNCQUFzQiw2QkFBNkIsaUJBQWlCLGNBQWMsV0FBVyxTQUFTLG9CQUFvQixpQkFBaUIsaUJBQWlCLDhCQUE4QiwyQkFBMkIsOEJBQThCO0FBQ3RrRDs7O0FDSFI7QUFDQTs7O0FDRHdCO0FBQ0g7QUFDckI7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2J3QjtBQUNKO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBeUQsNERBQTRELEVBQUU7QUFDL0c7QUFDUixzQ0FBc0MsdVlBQTZVLHdCQUF3QixvQ0FBb0MsMEJBQTBCLEVBQUUsRUFBRTtBQUM3YyxzQ0FBNkMsNDNCQUFxckIsb0JBQW9CLHlkQUFpWSx3QkFBd0Isc0NBQXNDLDBCQUEwQixFQUFFLHNCQUFzQix3QkFBd0IsaUhBQW1GLDBCQUEwQiwrR0FBaUYsMEJBQTBCLHNIQUF3RiwyQkFBMkIsaUNBQWlDLDJCQUEyQixFQUFFLEVBQUU7QUFDMW9ELDJDQUFrRCw2UkFBcVA7QUFDdlMsb0lBQTBILGlCQUFpQixJQUFJO0FBQ3ZJOzs7QUNmUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBNkQsZ0VBQWdFLEVBQUU7QUFDdkg7QUFDUiwwQ0FBMEMsb3pDQUF1b0MsMkNBQTJDLDBCQUEwQiw0Q0FBNEMsMEJBQTBCLCtDQUErQywwQkFBMEIsMkNBQTJDLDBCQUEwQiwyQ0FBMkMsMEJBQTBCLDJDQUEyQywwQkFBMEIsNENBQTRDLDJCQUEyQixFQUFFLEVBQUU7QUFDL3BELDBDQUFpRCwyYUFBNlQsMEJBQTBCLGdJQUFxRix3QkFBd0Isc0dBQXdFLDBCQUEwQixFQUFFLFFBQVE7QUFDam1CLCtDQUFzRCwwWUFBc1MsZUFBZSxFQUFFLFFBQVE7QUFDclgsd0tBQXVJLElBQUk7QUFDbkk7OztBQ2hCUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUEwRCw2REFBNkQsRUFBRTtBQUNqSDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZPQUF5SyxnQ0FBZ0MscUlBQTRGLHNCQUFzQiw4QkFBOEIsZ0xBQWtKLDBCQUEwQixzQ0FBc0MsMEJBQTBCLEVBQUUsc0JBQXNCLG1EQUFtRCxzREFBdUMsb0RBQXFDLGdEQUFnRCxFQUFFO0FBQ3Z4QjtBQUNBLHVDQUF1QywrTkFBbUwsNENBQTRDLDBCQUEwQixFQUFFLEVBQUU7QUFDcFMsdUNBQThDLDBlQUFzVywwQkFBMEIsNnhCQUF3bUIsMEJBQTBCLGttQkFBMmQsd0JBQXdCLDZHQUErRSwwQkFBMEIsK0dBQWlGLDJCQUEyQixnQkFBZ0IsRUFBRSxRQUFRO0FBQ2x4RCw0Q0FBbUQsbVVBQWlSLGVBQWUsRUFBRSxRQUFRO0FBQzdWLHFJQUE0SCxJQUFJO0FBQ3hIOzs7QUNoQ1I7QUFDQTtBQUNBLDBEQUEyQixrQkFBa0IsU0FBUyxRQUFRLCtCQUErQixrQkFBa0I7QUFDdkc7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBeUQsNERBQTRELEVBQUU7QUFDL0c7QUFDUixzQ0FBNkMsKzBCQUF5cUIsZUFBZSxFQUFFLFFBQVE7QUFDL3VCLDJDQUFrRCxtUkFBMk8sZUFBZSxFQUFFLFFBQVE7QUFDdFQsaUlBQXVILElBQUk7QUFDbkg7OztBQ2hCUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBZ0UsbUVBQW1FLEVBQUU7QUFDN0g7QUFDUiw2Q0FBb0Qsa0RBQW1DO0FBQ3ZGLGtEQUF5RCx1VUFBZ1IsZUFBZSxFQUFFLFFBQVE7QUFDbFcsNkpBQW1KLElBQUk7QUFDL0k7OztBQ1pSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBeUQsNERBQTRELEVBQUU7QUFDL0c7QUFDUixzQ0FBNkMsa0RBQW1DO0FBQ2hGLDJDQUFrRCwwU0FBbVAsZUFBZSxFQUFFLFFBQVE7QUFDOVQsZ0lBQXNILElBQUk7QUFDbEg7OztBQ1pSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFvRSx1RUFBdUUsRUFBRTtBQUNySTtBQUNSLGlEQUF3RCwyWUFBNFUsZUFBZSxFQUFFLFFBQVE7QUFDN1osc0RBQTZELHdWQUFpUyxlQUFlLEVBQUUsUUFBUTtBQUN2WCw4S0FBb0ssSUFBSTtBQUNoSzs7O0FDZFI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTRELCtEQUErRCxFQUFFO0FBQ3JIO0FBQ1IseUNBQWdELGtEQUFtQztBQUNuRiw4Q0FBcUQsdVRBQWdRLGVBQWUsRUFBRSxRQUFRO0FBQzlVLDZJQUFtSSxJQUFJO0FBQy9IOzs7QUNaUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQWdFLG1FQUFtRSxFQUFFO0FBQzdIO0FBQ1IsNkNBQW9ELDJZQUE0VSxlQUFlLEVBQUUsUUFBUTtBQUN6WixrREFBeUQsd1VBQWlSLGVBQWUsRUFBRSxRQUFRO0FBQ25XLDhKQUFvSixJQUFJO0FBQ2hKOzs7QUNkUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBK0Qsa0VBQWtFLEVBQUU7QUFDM0g7QUFDUiw0Q0FBbUQsa0RBQW1DO0FBQ3RGLGlEQUF3RCxtVUFBNFEsZUFBZSxFQUFFLFFBQVE7QUFDN1YseUpBQStJLElBQUk7QUFDM0k7OztBQ1pSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBbUUsc0VBQXNFLEVBQUU7QUFDbkk7QUFDUixnREFBdUQsMllBQTRVLGVBQWUsRUFBRSxRQUFRO0FBQzVaLHFEQUE0RCxvVkFBNlIsZUFBZSxFQUFFLFFBQVE7QUFDbFgsMEtBQWdLLElBQUk7QUFDNUo7OztBQ2RSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF5RCw0REFBNEQsRUFBRTtBQUMvRztBQUNSLHNDQUE2QyxrREFBbUM7QUFDaEYsMkNBQWtELDJTQUFvUCxlQUFlLEVBQUUsUUFBUTtBQUMvVCxpSUFBdUgsSUFBSTtBQUNuSDs7O0FDWlI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUE2RCxnRUFBZ0UsRUFBRTtBQUN2SDtBQUNSLDBDQUFpRCwyWUFBNFUsZUFBZSxFQUFFLFFBQVE7QUFDdFosK0NBQXNELDRUQUFxUSxlQUFlLEVBQUUsUUFBUTtBQUNwVixrSkFBd0ksSUFBSTtBQUNwSTs7O0FDZFI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTZELGdFQUFnRSxFQUFFO0FBQ3ZIO0FBQ1IsMENBQWlELGtEQUFtQztBQUNwRiwrQ0FBc0QsMlRBQW9RLGVBQWUsRUFBRSxRQUFRO0FBQ25WLGlKQUF1SSxJQUFJO0FBQ25JOzs7QUNaUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQWlFLG9FQUFvRSxFQUFFO0FBQy9IO0FBQ1IsOENBQXFELDJZQUE0VSxlQUFlLEVBQUUsUUFBUTtBQUMxWixtREFBMEQsNFVBQXFSLGVBQWUsRUFBRSxRQUFRO0FBQ3hXLGtLQUF3SixJQUFJO0FBQ3BKOzs7QUNkUjtBQUNBO0FBQ0EsOERBQTJCLGtCQUFrQixTQUFTLFFBQVEsK0JBQStCLGtCQUFrQjtBQUN2Rzs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTZELGdFQUFnRSxFQUFFO0FBQ3ZIO0FBQ1IsMENBQWlELDBWQUFnUztBQUNqViwrQ0FBc0QsbVNBQTJQLGVBQWUsRUFBRSxRQUFRO0FBQzFVLGlKQUF1SSxJQUFJO0FBQ25JOzs7QUNYUjtBQUNBO0FBQ0EsOERBQTJCLGtCQUFrQixTQUFTLFFBQVEsK0JBQStCLGtCQUFrQjtBQUN2Rzs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTZELGdFQUFnRSxFQUFFO0FBQ3ZIO0FBQ1IsMENBQWlELDBWQUFnUztBQUNqViwrQ0FBc0QsbVNBQTJQLGVBQWUsRUFBRSxRQUFRO0FBQzFVLGlKQUF1SSxJQUFJO0FBQ25JOzs7QUNYUjtBQUNBO0FBQ0EsNERBQTJCLGtCQUFrQixTQUFTLFFBQVEsK0JBQStCLGtCQUFrQjtBQUN2Rzs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQTJELDhEQUE4RCxFQUFFO0FBQ25IO0FBQ1Isd0NBQStDLHdYQUErUztBQUM5Viw2Q0FBb0Qsa1JBQTBPO0FBQzlSLHlJQUErSCxJQUFJO0FBQzNIOzs7QUNYUjtBQUNBO0FBQ0EsMEZBQW1ELHlCQUF5QixrQkFBa0IsOEJBQThCLGdCQUFnQixrQ0FBa0MsZ0JBQWdCLGNBQWMsV0FBVyw4Q0FBOEMsYUFBYSxxQ0FBcUMsaUJBQWlCLGtCQUFrQjtBQUNsVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUE0RCwrREFBK0QsRUFBRTtBQUNySDtBQUNSLHlDQUF5QywrZ0JBQWlhLGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQzNnQix5Q0FBeUMsNFlBQTJULGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQ3JhLHlDQUF5QyxtaEJBQXFhLGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQy9nQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrTkFBZ0osb0JBQW9CLEdBQUcsdUJBQXVCLHc0Q0FBMmpDLGNBQWMseUNBQTBCLHVCQUF1Qix5Q0FBMEIsaUJBQWlCLHlDQUEwQixvQkFBb0IseUNBQTBCLG1CQUFtQix5Q0FBMEIscUJBQXFCLHlDQUEwQixxQkFBcUI7QUFDcmlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNlRBQTZNLGVBQWUsRUFBRSx1UEFBNkosb0JBQW9CLG1qQkFBOFQscURBQXFELG1XQUF1TyxvQkFBb0IscU9BQWlLLG9CQUFvQixtaUNBQWcyQixjQUFjLHlDQUEwQix1QkFBdUIsMENBQTJCLGlCQUFpQiwwQ0FBMkIsb0JBQW9CLDBDQUEyQixtQkFBbUIsMENBQTJCLHFCQUFxQiwwQ0FBMkIscUJBQXFCO0FBQ24wRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZUQUE2TSxlQUFlLEVBQUUsdVBBQTZKLG9CQUFvQixtakJBQThULHFEQUFxRCxtV0FBdU8sb0JBQW9CO0FBQ3RnQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK1NBQWlKLGlEQUFpRCwyTEFBNEksd0JBQXdCLGVBQWUsOEJBQThCLDBCQUEwQiwwQkFBMEIsNEJBQTRCLDJCQUEyQix5QkFBeUIsd0NBQXdDLG1FQUFtRSw0QkFBNEIsZ0VBQWdFLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLDZCQUE2Qiw2QkFBNkIsd0NBQXdDLHNFQUFzRSw0QkFBNEIsdUNBQXVDLDRCQUE0Qix3Q0FBd0MsRUFBRSxzQkFBc0Isa0RBQW1DLDBCQUEwQixnRUFBaUQsOERBQStDLCtEQUFnRCw0REFBNkMsNERBQTZDLDhEQUErQyw4REFBK0MsNEZBQTRGLG9FQUFxRCxxRUFBc0QsZ0VBQWlELHFFQUFzRCwyRUFBNEQsbUVBQW9ELGtFQUFtRCxzRUFBdUQscUVBQXNELG1FQUFvRCw2RUFBOEQsMkVBQTRELDRFQUE2RCx5RUFBMEQseUVBQTBELDJFQUE0RCwyRUFBNEQsNE5BQTROLGtFQUFtRCxnRUFBaUQsaUVBQWtELDhEQUErQyw4REFBK0MsZ0VBQWlELGdFQUFpRCwyREFBNEMsb0RBQXFDLDZEQUE4QywwREFBMkMsMERBQTJDLDBEQUEyQyw0RUFBNkQsNERBQTZDLHFFQUFzRCxrTkFBa04scUVBQXNELHFFQUFzRCxnRUFBaUQscUVBQXNELDJFQUE0RCxtRUFBb0Qsa0VBQW1ELHNFQUF1RCxxRUFBc0QsbUVBQW9ELDZFQUE4RCwyRUFBNEQsNEVBQTZELHlFQUEwRCx5RUFBMEQsMkVBQTRELDJFQUE0RCw4TkFBOE4sa0VBQW1ELGdFQUFpRCxpRUFBa0QsOERBQStDLDhEQUErQyxnRUFBaUQsZ0VBQWlELDJEQUE0QyxvREFBcUMsNkRBQThDLDBEQUEyQywwREFBMkMsMERBQTJDLDRFQUE2RCw0REFBNkMscUVBQXNELGtOQUFrTixvRUFBcUQsNEJBQTRCLEVBQUU7QUFDcDNMO0FBQ0EsOENBQXFELHdaQUFrUztBQUN2VixtS0FBb0ksSUFBSTtBQUNoSTs7O0FDakhSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0EsdURBQTBCLGVBQWUsT0FBTyxNQUFNLFdBQVcsYUFBYSxZQUFZLCtEQUErRCx3QkFBd0IsY0FBYyxXQUFXLFdBQVcsZ0JBQWdCLDhCQUE4Qiw2QkFBNkIsV0FBVyxnQkFBZ0IsY0FBYyxZQUFZLDJCQUEyQixhQUFhLDBCQUEwQixnQkFBZ0Isa0NBQWtDLDBCQUEwQixnQkFBZ0IsZ0NBQWdDLG1CQUFtQixZQUFZLDZCQUE2Qix5QkFBeUIscUJBQXFCLG9CQUFvQixlQUFlLGtCQUFrQixTQUFTLGdCQUFnQiw2QkFBNkIsZ0JBQWdCLGNBQWMsbUJBQW1CLGFBQWEsbUJBQW1CLGVBQWUsZ0NBQWdDLHlCQUF5QiwwQ0FBMEMseUJBQXlCLGlCQUFpQiwwQkFBMEIsYUFBYSwwQkFBMEIseUJBQXlCLGFBQWEsMEJBQTBCLGNBQWMsaUJBQWlCLFlBQVksV0FBVyxtQkFBbUIsVUFBVSw2QkFBNkIsc0JBQXNCLGtCQUFrQixhQUFhLHVCQUF1QixtQkFBbUIsWUFBWSxlQUFlLHFCQUFxQixXQUFXLFdBQVcsZ0JBQWdCLDBCQUEwQixpQkFBaUIsWUFBWSxXQUFXLG1DQUFtQyxnQkFBZ0IsY0FBYyxlQUFlLFNBQVMsU0FBUyxZQUFZLFFBQVEsV0FBVyxnQkFBZ0Isa0JBQWtCLDZCQUE2QixXQUFXLFlBQVksMkJBQTJCLHlCQUF5QixzQkFBc0Isd0JBQXdCLG1DQUFtQyxZQUFZLDBCQUEwQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixnQkFBZ0IsYUFBYSxlQUFlLHNCQUFzQixlQUFlLG1DQUFtQyxrQkFBa0Isc0JBQXNCO0FBQzFoRTs7O0FDSFI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQW1FLHNFQUFzRSxFQUFFO0FBQ25JO0FBQ1IsZ0RBQXVELDh0QkFBMm5CO0FBQ2xyQixxREFBNEQsa1ZBQTJSLGVBQWUsRUFBRSxRQUFRO0FBQ2hYLHdLQUE4SixJQUFJO0FBQzFKOzs7QUNaUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUF3RCwyREFBMkQsRUFBRTtBQUM3RztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1NQUF5SCxnQ0FBZ0M7QUFDbEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtTUFBeUgsZ0NBQWdDO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb01BQTBILGdDQUFnQztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb01BQTBILGdDQUFnQztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDLDYxQ0FBMnJDLHFCQUFxQiwwQkFBMEIscUJBQXFCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLHlCQUF5Qiw0QkFBNEIseUJBQXlCLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLCtCQUErQiw0QkFBNEIsNkJBQTZCLDRCQUE0QixnQkFBZ0IsRUFBRSxzQkFBc0Isd0JBQXdCLHNEQUF1QyxvREFBcUMscUNBQXFDLHNDQUFzQywwQkFBMEIsc0RBQXVDLG9EQUFxQyxxQ0FBcUMsdURBQXdDLHFEQUFzQyxzQ0FBc0Msd0RBQXlDLHNEQUF1Qyx3Q0FBd0Msd0RBQXlDLHNEQUF1Qyx3Q0FBd0Msd0RBQXlDLHNEQUF1Qyx3Q0FBd0Msd0RBQXlDLHNEQUF1Qyx3Q0FBd0Msd0RBQXlDLHNEQUF1Qyx3Q0FBd0MsRUFBRTtBQUM1ekY7QUFDQSwwQ0FBaUQseVRBQWtRLGVBQWUsRUFBRSxRQUFRO0FBQzVVLGdJQUFzSCxJQUFJO0FBQ2xIOzs7QUNqRlI7QUFDQTtBQUNBLHdFQUEyQyxjQUFjLGdCQUFnQiw2QkFBNkIsV0FBVywrQkFBK0IsV0FBVyxrQkFBa0IsV0FBVyxpQkFBaUIsa0JBQWtCLFlBQVksV0FBVyxhQUFhLFlBQVksc0JBQXNCLGtCQUFrQixZQUFZLGVBQWUscUJBQXFCLGNBQWMsa0JBQWtCLFVBQVUsV0FBVyxZQUFZLFdBQVcsZ0JBQWdCLGNBQWMsMkJBQTJCLGtHQUFrRyxpQkFBaUIsY0FBYywwQkFBMEIsZ0JBQWdCLHVHQUF1RyxxQkFBcUIsV0FBVyxhQUFhLGVBQWUseUJBQXlCLHVCQUF1QixzQkFBc0Isb0JBQW9CLDZCQUE2QixvQkFBb0Isb0JBQW9CLHFCQUFxQixvQkFBb0IsZUFBZSxrQkFBa0IsY0FBYyxtQkFBbUIsa0NBQWtDLGNBQWMsOEJBQThCLGNBQWMsNEJBQTRCLGdCQUFnQixpQ0FBaUMsMkJBQTJCLDZCQUE2QixhQUFhLGVBQWUsdUJBQXVCLDBCQUEwQixnQkFBZ0IsZ0NBQWdDLGdCQUFnQixRQUFRLGNBQWMsK0JBQStCLDRCQUE0QixjQUFjLGNBQWMsMEJBQTBCLDRCQUE0QixRQUFRLGlCQUFpQixrQkFBa0IsaUNBQWlDLDhCQUE4QixnQkFBZ0IsdUJBQXVCLGFBQWEsdUJBQXVCLG1CQUFtQiwrQ0FBK0MsZUFBZSxnQkFBZ0IsbUJBQW1CLHlCQUF5QixvQkFBb0IscUJBQXFCLG9CQUFvQixrQkFBa0IsY0FBYyw2QkFBNkIsb0JBQW9CLDRCQUE0QixhQUFhLHNCQUFzQixxQkFBcUIsZ0NBQWdDO0FBQzdvRTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXdELDJEQUEyRCxFQUFFO0FBQzdHO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbU1BQXlILGdDQUFnQztBQUNsSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1NQUF5SCxnQ0FBZ0M7QUFDbEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb01BQTBILGdDQUFnQztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb01BQTBILGdDQUFnQztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb01BQTBILGdDQUFnQztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb01BQTBILGdDQUFnQyw2S0FBK0oscUJBQXFCLDBCQUEwQiwyQkFBMkIsMEJBQTBCLHdCQUF3QiwyQkFBMkIseUJBQXlCLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLCtCQUErQiw0QkFBNEIsNkJBQTZCLDRCQUE0QiwyQkFBMkIsNEJBQTRCLDJCQUEyQiw0QkFBNEIseUJBQXlCLDRCQUE0Qiw0QkFBNEIsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLDRCQUE0QixFQUFFLHNCQUFzQixzREFBdUMsb0RBQXFDLHFDQUFxQyxzREFBdUMsb0RBQXFDLHFDQUFxQyx1REFBd0MscURBQXNDLHNDQUFzQyx1REFBd0Msc0RBQXVDLHVDQUF1Qyx3REFBeUMsc0RBQXVDLHdDQUF3Qyx3REFBeUMsc0RBQXVDLHdDQUF3Qyx3REFBeUMsc0RBQXVDLHdDQUF3Qyx3REFBeUMsc0RBQXVDLHdDQUF3Qyx3REFBeUMsc0RBQXVDLHdDQUF3Qyx3REFBeUMsc0RBQXVDLHdDQUF3Qyx3REFBeUMsc0RBQXVDLHdDQUF3Qyx3REFBeUMsc0RBQXVDLHdDQUF3Qyx3REFBeUMsc0RBQXVDLHdDQUF3QyxFQUFFO0FBQ2xpRjtBQUNBLDBDQUFpRCx1VUFBa1E7QUFDblQsaUpBQXNILElBQUk7QUFDbEg7OztBQzNHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBd0QsMkRBQTJELEVBQUU7QUFDN0c7QUFDUixxQ0FBNEMsbThCQUFpd0IsZUFBZSxlQUFlLEVBQUUsUUFBUTtBQUNyMUIsMENBQWlELG9TQUE2TyxlQUFlLEVBQUUsUUFBUTtBQUN2VCwwSEFBZ0gsSUFBSTtBQUM1Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUFrRyx5MkRBQXEwQyxrTUFBMEgsRUFBRSx1aUZBQTh5QyxlQUFlLEVBQUUsZzVMQUF3dUcsZUFBZSxFQUFFLGd3Q0FBbXZCLGlDQUFtQixFQUFFLG9ZQUFnTyw2SEFBK0QsRUFBRSw4MUhBQW9uRSwwRUFBNEQsa3FCQUEyWSxXQUFXLHlDQUE2QyxHQUFHLDJDQUErQyxHQUFHLDZEQUFpRSxHQUFHLDZEQUFpRSxHQUFHLHFEQUF5RCxHQUFHLHFEQUF5RCxHQUFHLDJEQUErRCxHQUFHLDJEQUErRCxHQUFHLCtDQUFtRCxHQUFHLCtDQUFtRCxHQUFHLHVEQUEyRCxHQUFHLHVEQUEyRCxHQUFHLG9EQUF3RCxHQUFHLHNEQUEwRCxHQUFHLDRDQUFnRCxHQUFHLEVBQUUsMnlCQUFvZSxFQUFFO0FBQ25pVzs7Ozs7QUN0RVI7QUFDeUM7QUFDc0I7QUFDbEM7QUFDN0IsZUFBZSxhQUFxQixJQUFJLFFBQXdCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1EiLCJmaWxlIjoianMvbWFpbi4zNjFhODM1NTY4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDczO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eVxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIEFydGljbGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FydGljbGUuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hcnRpY2xlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgcmFuZG9tQnl0ZXMgPSAoc2l6ZSkgPT4ge1xuICAgIGxldCBybmQgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmQpO1xuICAgIHJldHVybiBybmQ7XG59O1xuY29uc3QgybUwID0gcmFuZG9tQnl0ZXM7XG5leHBvcnQgZGVmYXVsdCByYW5kb21CeXRlcztcbmV4cG9ydCB7IMm1MCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvcmFuZG9tQnl0ZXMtYnJvd3Nlci50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IEJUSCA9IFtcIjAwXCIsIFwiMDFcIiwgXCIwMlwiLCBcIjAzXCIsIFwiMDRcIiwgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiLCBcIjA5XCIsIFwiMGFcIiwgXCIwYlwiLCBcIjBjXCIsIFwiMGRcIiwgXCIwZVwiLCBcIjBmXCIsXG4gICAgXCIxMFwiLCBcIjExXCIsIFwiMTJcIiwgXCIxM1wiLCBcIjE0XCIsIFwiMTVcIiwgXCIxNlwiLCBcIjE3XCIsIFwiMThcIiwgXCIxOVwiLCBcIjFhXCIsIFwiMWJcIiwgXCIxY1wiLCBcIjFkXCIsIFwiMWVcIiwgXCIxZlwiLFxuICAgIFwiMjBcIiwgXCIyMVwiLCBcIjIyXCIsIFwiMjNcIiwgXCIyNFwiLCBcIjI1XCIsIFwiMjZcIiwgXCIyN1wiLCBcIjI4XCIsIFwiMjlcIiwgXCIyYVwiLCBcIjJiXCIsIFwiMmNcIiwgXCIyZFwiLCBcIjJlXCIsIFwiMmZcIixcbiAgICBcIjMwXCIsIFwiMzFcIiwgXCIzMlwiLCBcIjMzXCIsIFwiMzRcIiwgXCIzNVwiLCBcIjM2XCIsIFwiMzdcIiwgXCIzOFwiLCBcIjM5XCIsIFwiM2FcIiwgXCIzYlwiLCBcIjNjXCIsIFwiM2RcIiwgXCIzZVwiLCBcIjNmXCIsXG4gICAgXCI0MFwiLCBcIjQxXCIsIFwiNDJcIiwgXCI0M1wiLCBcIjQ0XCIsIFwiNDVcIiwgXCI0NlwiLCBcIjQ3XCIsIFwiNDhcIiwgXCI0OVwiLCBcIjRhXCIsIFwiNGJcIiwgXCI0Y1wiLCBcIjRkXCIsIFwiNGVcIiwgXCI0ZlwiLFxuICAgIFwiNTBcIiwgXCI1MVwiLCBcIjUyXCIsIFwiNTNcIiwgXCI1NFwiLCBcIjU1XCIsIFwiNTZcIiwgXCI1N1wiLCBcIjU4XCIsIFwiNTlcIiwgXCI1YVwiLCBcIjViXCIsIFwiNWNcIiwgXCI1ZFwiLCBcIjVlXCIsIFwiNWZcIixcbiAgICBcIjYwXCIsIFwiNjFcIiwgXCI2MlwiLCBcIjYzXCIsIFwiNjRcIiwgXCI2NVwiLCBcIjY2XCIsIFwiNjdcIiwgXCI2OFwiLCBcIjY5XCIsIFwiNmFcIiwgXCI2YlwiLCBcIjZjXCIsIFwiNmRcIiwgXCI2ZVwiLCBcIjZmXCIsXG4gICAgXCI3MFwiLCBcIjcxXCIsIFwiNzJcIiwgXCI3M1wiLCBcIjc0XCIsIFwiNzVcIiwgXCI3NlwiLCBcIjc3XCIsIFwiNzhcIiwgXCI3OVwiLCBcIjdhXCIsIFwiN2JcIiwgXCI3Y1wiLCBcIjdkXCIsIFwiN2VcIiwgXCI3ZlwiLFxuICAgIFwiODBcIiwgXCI4MVwiLCBcIjgyXCIsIFwiODNcIiwgXCI4NFwiLCBcIjg1XCIsIFwiODZcIiwgXCI4N1wiLCBcIjg4XCIsIFwiODlcIiwgXCI4YVwiLCBcIjhiXCIsIFwiOGNcIiwgXCI4ZFwiLCBcIjhlXCIsIFwiOGZcIixcbiAgICBcIjkwXCIsIFwiOTFcIiwgXCI5MlwiLCBcIjkzXCIsIFwiOTRcIiwgXCI5NVwiLCBcIjk2XCIsIFwiOTdcIiwgXCI5OFwiLCBcIjk5XCIsIFwiOWFcIiwgXCI5YlwiLCBcIjljXCIsIFwiOWRcIiwgXCI5ZVwiLCBcIjlmXCIsXG4gICAgXCJhMFwiLCBcImExXCIsIFwiYTJcIiwgXCJhM1wiLCBcImE0XCIsIFwiYTVcIiwgXCJhNlwiLCBcImE3XCIsIFwiYThcIiwgXCJhOVwiLCBcImFhXCIsIFwiYWJcIiwgXCJhY1wiLCBcImFkXCIsIFwiYWVcIiwgXCJhZlwiLFxuICAgIFwiYjBcIiwgXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJiNFwiLCBcImI1XCIsIFwiYjZcIiwgXCJiN1wiLCBcImI4XCIsIFwiYjlcIiwgXCJiYVwiLCBcImJiXCIsIFwiYmNcIiwgXCJiZFwiLCBcImJlXCIsIFwiYmZcIixcbiAgICBcImMwXCIsIFwiYzFcIiwgXCJjMlwiLCBcImMzXCIsIFwiYzRcIiwgXCJjNVwiLCBcImM2XCIsIFwiYzdcIiwgXCJjOFwiLCBcImM5XCIsIFwiY2FcIiwgXCJjYlwiLCBcImNjXCIsIFwiY2RcIiwgXCJjZVwiLCBcImNmXCIsXG4gICAgXCJkMFwiLCBcImQxXCIsIFwiZDJcIiwgXCJkM1wiLCBcImQ0XCIsIFwiZDVcIiwgXCJkNlwiLCBcImQ3XCIsIFwiZDhcIiwgXCJkOVwiLCBcImRhXCIsIFwiZGJcIiwgXCJkY1wiLCBcImRkXCIsIFwiZGVcIiwgXCJkZlwiLFxuICAgIFwiZTBcIiwgXCJlMVwiLCBcImUyXCIsIFwiZTNcIiwgXCJlNFwiLCBcImU1XCIsIFwiZTZcIiwgXCJlN1wiLCBcImU4XCIsIFwiZTlcIiwgXCJlYVwiLCBcImViXCIsIFwiZWNcIiwgXCJlZFwiLCBcImVlXCIsIFwiZWZcIixcbiAgICBcImYwXCIsIFwiZjFcIiwgXCJmMlwiLCBcImYzXCIsIFwiZjRcIiwgXCJmNVwiLCBcImY2XCIsIFwiZjdcIiwgXCJmOFwiLCBcImY5XCIsIFwiZmFcIiwgXCJmYlwiLCBcImZjXCIsIFwiZmRcIiwgXCJmZVwiLCBcImZmXCJdO1xuZXhwb3J0IGRlZmF1bHQgKGJ1ZikgPT4gQlRIW2J1ZlswXV0gKyBCVEhbYnVmWzFdXSArXG4gICAgQlRIW2J1ZlsyXV0gKyBCVEhbYnVmWzNdXSArICctJyArXG4gICAgQlRIW2J1Zls0XV0gKyBCVEhbYnVmWzVdXSArICctJyArXG4gICAgQlRIW2J1Zls2XV0gKyBCVEhbYnVmWzddXSArICctJyArXG4gICAgQlRIW2J1Zls4XV0gKyBCVEhbYnVmWzldXSArICctJyArXG4gICAgQlRIW2J1ZlsxMF1dICsgQlRIW2J1ZlsxMV1dICtcbiAgICBCVEhbYnVmWzEyXV0gKyBCVEhbYnVmWzEzXV0gK1xuICAgIEJUSFtidWZbMTRdXSArIEJUSFtidWZbMTVdXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2J5dGVzVG9VdWlkLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHJhbmRvbUJ5dGVzIGZyb20gJy4vcmFuZG9tQnl0ZXMnO1xuaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQnO1xuY29uc3QgU0VFRF9CWVRFUyA9IHJhbmRvbUJ5dGVzKDE2KTtcbmNvbnN0IE5PREVfSUQgPSBbXG4gICAgU0VFRF9CWVRFU1swXSB8IDB4MDEsXG4gICAgU0VFRF9CWVRFU1sxXSxcbiAgICBTRUVEX0JZVEVTWzJdLFxuICAgIFNFRURfQllURVNbM10sXG4gICAgU0VFRF9CWVRFU1s0XSxcbiAgICBTRUVEX0JZVEVTWzVdLFxuXTtcbmxldCBfY2xvY2tzZXEgPSAoU0VFRF9CWVRFU1s2XSA8PCA4IHwgU0VFRF9CWVRFU1s3XSkgJiAweDNmZmY7XG5sZXQgbGFzdE1TZWNzID0gMDtcbmxldCBsYXN0TlNlY3MgPSAwO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGxldCBtc2VjcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBuc2VjcyA9IGxhc3ROU2VjcyArIDE7XG4gICAgbGV0IGR0ID0gKG1zZWNzIC0gbGFzdE1TZWNzKSArIChuc2VjcyAtIGxhc3ROU2VjcykgLyAxMDAwMDtcbiAgICBsZXQgY2xvY2tzZXEgPSBkdCA8IDAgPyBfY2xvY2tzZXEgKyAxICYgMHgzZmZmIDogX2Nsb2Nrc2VxO1xuICAgIGlmIChkdCA8IDAgfHwgbXNlY3MgPiBsYXN0TVNlY3MpIHtcbiAgICAgICAgbnNlY3MgPSAwO1xuICAgIH1cbiAgICBpZiAobnNlY3MgPj0gMTAwMDApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICAgIGxhc3RNU2VjcyA9IG1zZWNzO1xuICAgIGxhc3ROU2VjcyA9IG5zZWNzO1xuICAgIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgYiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICBsZXQgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCAmIDB4ZmY7XG4gICAgbGV0IHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdG1oICYgMHhmZjtcbiAgICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDtcbiAgICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcbiAgICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG4gICAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKVxuICAgICAgICBiW2kgKyBuXSA9IE5PREVfSURbbl07XG4gICAgcmV0dXJuIGJ5dGVzVG9VdWlkKGIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3YxLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNvbnN0IFVVSUR2MV9QQVRURVJOID0gJ1thLWYwLTldezh9LVthLWYwLTldezR9LTFbYS1mMC05XXszfS1bODlhYl1bYS1mMC05XXszfS1bYS1mMC05XXsxMn0nO1xuZXhwb3J0IGNvbnN0IFVVSUR2MV9SRUdFWFAgPSAvXlthLWYwLTldezh9LVthLWYwLTldezR9LTFbYS1mMC05XXszfS1bODlhYl1bYS1mMC05XXszfS1bYS1mMC05XXsxMn0kL2k7XG5leHBvcnQgY29uc3QgVVVJRHY0X1BBVFRFUk4gPSAnW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tNFthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSc7XG5leHBvcnQgY29uc3QgVVVJRHY0X1JFR0VYUCA9IC9eW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tNFthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSQvaTtcbmV4cG9ydCBjb25zdCBVVUlEbmlsX1BBVFRFUk4gPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbmV4cG9ydCBjb25zdCBVVUlEbmlsX1JFR0VYUCA9IC9eMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJC87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC9wYXR0ZXJucy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB2MSBmcm9tICcuL3YxJztcbmltcG9ydCB7IFVVSUR2MV9SRUdFWFAsIFVVSUR2NF9SRUdFWFAsIFVVSURuaWxfUkVHRVhQLCBVVUlEbmlsX1BBVFRFUk4sIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgY2xhc3MgVVVJRCB7XG4gICAgc3RhdGljIGdldEFycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoKS5jb25jYXQodmFsdWUpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1dWlkID0gbmV3IFVVSUQoaXRlbSAmJiBpdGVtLmlkIHx8IGl0ZW0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB1dWlkLnZlcnNpb24gPT09IG51bGwgPyBudWxsIDogdXVpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHV1aWQgPSBudWxsKSB7XG4gICAgICAgIGlmICh1dWlkIGluc3RhbmNlb2YgVVVJRCkge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdXVpZC52ZXJzaW9uO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdXVpZC51dWlkO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdXVpZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKFVVSURuaWxfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVVUlEdjFfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVVUlEdjRfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVVVJRCBcIiR7dXVpZH1cIiBkb2VzIG5vdCBtYXRjaCB0aGUgVVVJRCBzdHJpbmdgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXVpZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXVpZCA9IFVVSURuaWxfUEFUVEVSTjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dWlkID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdjEoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dWlkID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSA0O1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdjEoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBVVUlEIHZlcnNpb24gb2YgXCIke3V1aWR9XCJgKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgVVVJRCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVVVJRCc7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvdXVpZC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdXVpZCc7XG5leHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgR0VOSVRJVkVfTU9OVEhTID0gW1xuICAgICfQr9C90LLQsNGA0Y8nLFxuICAgICfQpNC10LLRgNCw0LvRjycsXG4gICAgJ9Cc0LDRgNGC0LAnLFxuICAgICfQkNC/0YDQtdC70Y8nLFxuICAgICfQnNCw0Y8nLFxuICAgICfQmNGO0L3RjycsXG4gICAgJ9CY0Y7Qu9GPJyxcbiAgICAn0JDQstCz0YPRgdGC0LAnLFxuICAgICfQodC10L3RgtGP0LHRgNGPJyxcbiAgICAn0J7QutGC0Y/QsdGA0Y8nLFxuICAgICfQndC+0Y/QsdGA0Y8nLFxuICAgICfQlNC10LrQsNCx0YDRjydcbl07XG5leHBvcnQgY2xhc3MgVGltZXN0YW1wIGV4dGVuZHMgRGF0ZSB7XG4gICAgc3RhdGljIGZyb21VbnV4KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHV0cyA9IH5+dmFsdWU7XG4gICAgICAgIHJldHVybiBuZXcgVGltZXN0YW1wKHV0cyAqIDEwMDApO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIGdldCBpc0ludmFsaWQoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc1ZhbGlkO1xuICAgIH1cbiAgICB0b1VSTFN0cmluZygpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IFN0cmluZyh0aGlzLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZyh0aGlzLmdldFVUQ01vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBkYXRlID0gU3RyaW5nKHRoaXMuZ2V0VVRDRGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWA7XG4gICAgfVxuICAgIGNvbXBhcmVEYXRlV2l0aE91dFRpbWUob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnVsbFllYXIoKSA9PT0gb3RoZXIuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgJiYgdGhpcy5nZXRNb250aCgpID09PSBvdGhlci5nZXRNb250aCgpXG4gICAgICAgICAgICAmJiB0aGlzLmdldERhdGUoKSA9PT0gb3RoZXIuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgICB0b0hSU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGlmICh0aGlzLmNvbXBhcmVEYXRlV2l0aE91dFRpbWUobm93KSlcbiAgICAgICAgICAgIG91dCArPSAn0KHQtdCz0L7QtNC90Y8nO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBhcmVEYXRlV2l0aE91dFRpbWUobm93KSlcbiAgICAgICAgICAgICAgICBvdXQgKz0gJ9CS0YfQtdGA0LAnO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IFN0cmluZyh0aGlzLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgb3V0ICs9ICcgJyArIEdFTklUSVZFX01PTlRIU1t0aGlzLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHllYXIgIT09IG5vdy5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gJyAnICsgU3RyaW5nKHllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG91dCArPSAnICcgKyBTdHJpbmcodGhpcy5nZXRIb3VycygpKTtcbiAgICAgICAgb3V0ICs9ICc6JyArIFN0cmluZyh0aGlzLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMpO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBNb2RlbCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVGltZXN0YW1wJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdGltZXN0YW1wL3RpbWVzdGFtcC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdGltZXN0YW1wJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS90aW1lc3RhbXAvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBFTlVNX0lEX1JFR0VYUCA9IC9eW2Etel1bYS16MC05XSokLztcbmV4cG9ydCBjbGFzcyBFbnVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICghRU5VTV9JRF9SRUdFWFAudGVzdChpZCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFbnVtIElEIFwiJHtpZH1cIiBkb2VzIG5vdCBtYXRjIHRoZSBwYXR0ZXJuIFwiJHtFTlVNX0lEX1JFR0VYUC5zb3VyY2V9XCJgKTtcbiAgICB9XG4gICAgc3RhdGljICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgeWllbGQgdGhpc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXQodmFsdWUpIHtcbiAgICAgICAgbGV0IGlkID0gU3RyaW5nKHZhbHVlICYmIHZhbHVlLmlkIHx8IHZhbHVlKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzKVxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpLmNvbmNhdCh2YWx1ZSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLmdldChpdGVtKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgRW51bSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnRW51bSc7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL2VudW0vZW51bS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vZW51bSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEVudW0gfSBmcm9tICdAY29yZS9lbnVtJztcbmV4cG9ydCBjbGFzcyBCbG9ja0VudW0gZXh0ZW5kcyBFbnVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdmFsdWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHN1cGVyKGlkLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnQmxvY2tFbnVtJztcbiAgICB9XG59XG5CbG9ja0VudW0uQTEgPSBuZXcgQmxvY2tFbnVtKCdhMScsICdBMScsICfQktC10YDRiNC90LjQuScpO1xuQmxvY2tFbnVtLkEyID0gbmV3IEJsb2NrRW51bSgnYTInLCAnQTInLCAn0J/QvtC0INCy0LjQtNC10L4nKTtcbkJsb2NrRW51bS5BMyA9IG5ldyBCbG9ja0VudW0oJ2EzJywgJ0EzJywgJ9Cf0L7QtCDQvdC+0LLQvtGB0YLRjNGOJyk7XG5CbG9ja0VudW0uQjEgPSBuZXcgQmxvY2tFbnVtKCdiMScsICdCMScsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uQjIgPSBuZXcgQmxvY2tFbnVtKCdiMicsICdCMicsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uQjMgPSBuZXcgQmxvY2tFbnVtKCdiMycsICdCMycsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uTTEgPSBuZXcgQmxvY2tFbnVtKCdtMScsICdNMScsICfQnNC+0LHQuNC70YzQvdGL0LknKTtcbkJsb2NrRW51bS5NMiA9IG5ldyBCbG9ja0VudW0oJ20yJywgJ00yJywgJ9Cc0L7QsdC40LvRjNC90YvQuScpO1xuQmxvY2tFbnVtLk0zID0gbmV3IEJsb2NrRW51bSgnbTMnLCAnTTMnLCAn0JzQvtCx0LjQu9GM0L3Ri9C5Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2Jsb2NrLmVudW0udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgQmxvY2tFbnVtIH0gZnJvbSAnLi9ibG9jay5lbnVtJztcbmNvbnN0IEVOVU1fUEdfQVJSQVlfUEFUVEVSTiA9IC9eXFx7KFthLXowLTksXSspXFx9JC87XG5jb25zdCBEQVRFX1JFR0VYUCA9IC9eXFxkezR9LVxcZHsyfS1cXGR7M30kLztcbmV4cG9ydCBjbGFzcyBBZHMge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgaWYgKHZhbHVlLmJsb2Nrcykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBFTlVNX1BHX0FSUkFZX1BBVFRFUk4uZXhlYyh2YWx1ZS5ibG9ja3MpO1xuICAgICAgICAgICAgY29uc3QgYmxvY2tzID0gbWF0Y2ggJiYgbWF0Y2hbMV0uc3BsaXQoJywnKSB8fCB2YWx1ZS5ibG9ja3M7XG4gICAgICAgICAgICB0aGlzLmJsb2NrcyA9IEJsb2NrRW51bS5nZXRBcnJheShibG9ja3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuZW5kRGF0ZSk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlLmZpbGVzKSA/IHZhbHVlLmZpbGVzXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiBNYXRoLm1heCh+fnZhbHVlLmNvbGxlY3RlZCwgMCkpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtID4gMClcbiAgICAgICAgICAgIDogbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMubGltaXRzID1cbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS5saW1pdHMgPT09ICdvYmplY3QnID8ge1xuICAgICAgICAgICAgICAgIHNob3c6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLnNob3csIDApLFxuICAgICAgICAgICAgICAgIHNob3dQZXJEYXk6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLnNob3dQZXJEYXksIDApLFxuICAgICAgICAgICAgICAgIHNob3dQZXJVc2VyOiBNYXRoLm1heCh+fnZhbHVlLmxpbWl0cy5zaG93UGVyVXNlciwgMCksXG4gICAgICAgICAgICAgICAgY2xpY2s6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLmNsaWNrLCAwKSxcbiAgICAgICAgICAgICAgICBjbGlja1BlckRheTogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuY2xpY2tQZXJEYXksIDApLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyVXNlcjogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuY2xpY2tQZXJVc2VyLCAwKSxcbiAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogMCxcbiAgICAgICAgICAgICAgICBzaG93UGVyRGF5OiAwLFxuICAgICAgICAgICAgICAgIHNob3dQZXJVc2VyOiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrOiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyRGF5OiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyVXNlcjogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdHMgPSB7fTtcbiAgICAgICAgaWYgKHZhbHVlLnN0YXRzID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZS5zdGF0cykge1xuICAgICAgICAgICAgICAgIGtleSA9IFN0cmluZyhrZXkpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoREFURV9SRUdFWFAudGVzdChrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBNYXRoLm1heCh+fnZhbHVlLnN0YXRzW2tleV0uc2hvdywgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogTWF0aC5tYXgofn52YWx1ZS5zdGF0c1trZXldLmNsaWNrLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBibG9ja3M6IHRoaXMuYmxvY2tzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgZmlsZXM6IHRoaXMuZmlsZXMsXG4gICAgICAgICAgICBsaW1pdHM6IHRoaXMubGltaXRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBibG9ja3M6IHRoaXMuYmxvY2tzLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBmaWxlczogdGhpcy5maWxlcyxcbiAgICAgICAgICAgIGxpbWl0czogdGhpcy5saW1pdHMsXG4gICAgICAgICAgICBzdGF0czogdGhpcy5zdGF0cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgQWRzIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdBZHMnO1xuICAgIH1cbn1cbkFkcy5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ2Jsb2NrcycsXG4gICAgJ3RpdGxlJyxcbiAgICAnc3RhcnREYXRlJyxcbiAgICAnZW5kRGF0ZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9hZHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2Fkcyc7XG5leHBvcnQgKiBmcm9tICcuL2Jsb2NrLmVudW0nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBjbGFzcyBQcmljZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYnRjID0gMDtcbiAgICAgICAgdGhpcy5fdXNkID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgYnRjKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnRjO1xuICAgIH1cbiAgICBnZXQgdXNkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNkO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWUgPSB7fSkge1xuICAgICAgICBjb25zdCBidGMgPSB2YWx1ZS5idGMgIT09IHVuZGVmaW5lZCAmJiBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLmJ0YyksIDApO1xuICAgICAgICB0aGlzLl9idGMgPSBidGMgfHwgdGhpcy5idGM7XG4gICAgICAgIGNvbnN0IHVzZCA9IHZhbHVlLnVzZCAhPT0gdW5kZWZpbmVkICYmIE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUudXNkKSwgMCk7XG4gICAgICAgIHRoaXMuX3VzZCA9IHVzZCB8fCB0aGlzLnVzZDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ0YzogdGhpcy5idGMsXG4gICAgICAgICAgICB1c2Q6IHRoaXMudXNkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidGM6IHRoaXMuYnRjLFxuICAgICAgICAgICAgdXNkOiB0aGlzLnVzZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZCB8fCAwO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnRvTnVtYmVyKCkpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBQcmljZSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnUHJpY2UnO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL3ByaWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi9wcmljZSc7XG5leHBvcnQgY2xhc3MgSGlzdG9yaWNhbCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLnByaWNlID0gbmV3IFByaWNlKCk7XG4gICAgICAgIHRoaXMudHMgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnRzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh2YWx1ZS5wcmljZSk7XG4gICAgfVxuICAgIHVwZGF0ZVByaWNlKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5wcmljZS51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlLnRvTnVtYmVyKCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudHMpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBIaXN0b3JpY2FsIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdIaXN0b3JpY2FsJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9oaXN0b3JpY2FsLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi9wcmljZSc7XG5pbXBvcnQgeyBIaXN0b3JpY2FsIH0gZnJvbSAnLi9oaXN0b3JpY2FsJztcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15bQS1aMC05QCRdKyQvO1xuZXhwb3J0IGNsYXNzIENvaW4ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5fbWF4ID0gMDtcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gMDtcbiAgICAgICAgdGhpcy5wcmljZSA9IG5ldyBQcmljZSgpO1xuICAgICAgICB0aGlzLl92b2x1bWUyNCA9IDA7XG4gICAgICAgIHRoaXMuX2hpc3RvcmljYWwgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gU3RyaW5nKHZhbHVlLnN5bWJvbCB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmICghU1lNQk9MX1BBVFRFUk4udGVzdChzeW1ib2wpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgU3ltYm9sIFwiJHtzeW1ib2x9IG5vdCBtYXRjaCB0byBwYXR0ZXJuICR7U1lNQk9MX1BBVFRFUk4uc291cmNlfWApO1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgbWF4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4O1xuICAgIH1cbiAgICBnZXQgYXZhaWxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlO1xuICAgIH1cbiAgICBnZXQgY2FwaXRhbGl6YXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidGM6IHRoaXMucHJpY2UuYnRjICogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgICAgICB1c2Q6IHRoaXMucHJpY2UudXNkICogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCB2b2x1bWUyNCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZTI0O1xuICAgIH1cbiAgICBnZXQgdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cztcbiAgICB9XG4gICAgZ2V0IGhpc3RvcmljYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaXN0b3JpY2FsLnNvcnQoKGEsIGIpID0+IGEudHMgPCBiLnRzID8gLTEgOiAxKTtcbiAgICB9XG4gICAgZ2V0IGxhc3RIaXN0b3JpY2FsKCkge1xuICAgICAgICBjb25zdCBoaXN0b3JpY2FsID0gdGhpcy5oaXN0b3JpY2FsO1xuICAgICAgICBpZiAoaGlzdG9yaWNhbC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gaGlzdG9yaWNhbFtoaXN0b3JpY2FsLmxlbmd0aCAtIDFdLnRzO1xuICAgIH1cbiAgICB1cGRhdGVQcmljZSh2YWx1ZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucHJpY2UudXBkYXRlKHZhbHVlKTtcbiAgICB9XG4gICAgdXBkYXRlSGlzdG9yaWNhbCh2YWx1ZSA9IFtdKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhbHVlLm1hcChpdGVtID0+IG5ldyBIaXN0b3JpY2FsKGl0ZW0pKVxuICAgICAgICAgICAgLmZvckVhY2gobmV3SXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuX2hpc3RvcmljYWwuZmluZChpdGVtID0+IE51bWJlcihpdGVtLnRzKSA9PT0gTnVtYmVyKG5ld0l0ZW0udHMpKTtcbiAgICAgICAgICAgIGlmICghY3VycmVudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaXN0b3JpY2FsLnB1c2gobmV3SXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEl0ZW0udXBkYXRlUHJpY2UobmV3SXRlbS5wcmljZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodmFsdWUuc3ltYm9sICE9PSB0aGlzLnN5bWJvbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fbWF4ID0gdmFsdWUubWF4ICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLm1heCksIDApIDogMDtcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gdmFsdWUuYXZhaWxhYmxlICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLmF2YWlsYWJsZSksIDApIDogMDtcbiAgICAgICAgdGhpcy5fdm9sdW1lMjQgPSB2YWx1ZS52b2x1bWUyNCAhPT0gdW5kZWZpbmVkID8gTWF0aC5tYXgocGFyc2VGbG9hdCh2YWx1ZS52b2x1bWUyNCksIDApIDogMDtcbiAgICAgICAgdGhpcy5fdHMgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnRzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh2YWx1ZS5wcmljZSk7XG4gICAgICAgIHRoaXMudXBkYXRlSGlzdG9yaWNhbCh2YWx1ZS5oaXN0b3JpY2FsKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0aGlzLmF2YWlsYWJsZSxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLnZhbHVlT2YoKSxcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uOiB0aGlzLmNhcGl0YWxpemF0aW9uLFxuICAgICAgICAgICAgdm9sdW1lMjQ6IHRoaXMudm9sdW1lMjQsXG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIGhpc3RvcmljYWw6IHRoaXMuaGlzdG9yaWNhbCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRoaXMuYXZhaWxhYmxlLFxuICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvbjogdGhpcy5jYXBpdGFsaXphdGlvbixcbiAgICAgICAgICAgIHZvbHVtZTI0OiB0aGlzLnZvbHVtZTI0LFxuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVxdWFsKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGl0ZW0pID09PSBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcGl0YWxpemF0aW9uLnVzZDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgQ29pbiB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnQ29pbic7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2NvaW4vY29pbi50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vY29pbic7XG5leHBvcnQgKiBmcm9tICcuL3ByaWNlJztcbmV4cG9ydCAqIGZyb20gJy4vaGlzdG9yaWNhbCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBjbGFzcyBSYXRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5saWtlID0gTWF0aC5tYXgofn52YWx1ZS5saWtlLCAwKTtcbiAgICAgICAgdGhpcy5kaXNsaWtlID0gTWF0aC5tYXgofn52YWx1ZS5kaXNsaWtlLCAwKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saWtlIC8gKHRoaXMubGlrZSArIHRoaXMuZGlzbGlrZSk7XG4gICAgfVxuICAgIGdldCBzdGFycygpIHtcbiAgICAgICAgcmV0dXJuIDUgKiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlrZTogdGhpcy5saWtlLFxuICAgICAgICAgICAgZGlzbGlrZTogdGhpcy5kaXNsaWtlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaWtlOiB0aGlzLmxpa2UsXG4gICAgICAgICAgICBkaXNsaWtlOiB0aGlzLmRpc2xpa2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFJhaXRpbmcgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1JhaXRpbmcnO1xuICAgIH1cbn1cblJhdGluZy5NYWluRmllbGRzID0gW1xuICAgICdsaWtlJyxcbiAgICAnZGlzbGlrZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3JhdGluZy9yYXRpbmcudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3JhdGluZyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcmF0aW5nL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5leHBvcnQgY2xhc3MgQ3VycmVuY3kge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuc3ltYm9sID0gU3RyaW5nKHZhbHVlLnN5bWJvbCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLmV4dFVybCA9IFN0cmluZyh2YWx1ZS5leHRVcmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5zdGFydERhdGUpO1xuICAgICAgICB0aGlzLmZvdW5kZXIgPSBTdHJpbmcodmFsdWUuZm91bmRlciB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm1heENvaW4gPSBNYXRoLm1heCh+fnZhbHVlLm1heENvaW4sIDApO1xuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IFN0cmluZyh2YWx1ZS5hbGdvcml0aG0gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5zeXN0ZW0gPSBTdHJpbmcodmFsdWUuc3lzdGVtIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBmb3VuZGVyOiB0aGlzLmZvdW5kZXIsXG4gICAgICAgICAgICBtYXhDb2luOiB0aGlzLm1heENvaW4sXG4gICAgICAgICAgICBhbGdvcml0aG06IHRoaXMuYWxnb3JpdGhtLFxuICAgICAgICAgICAgc3lzdGVtOiB0aGlzLnN5c3RlbSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuaXNWYWxpZCA/IHRoaXMuc3RhcnREYXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZm91bmRlcjogdGhpcy5mb3VuZGVyLFxuICAgICAgICAgICAgbWF4Q29pbjogdGhpcy5tYXhDb2luLFxuICAgICAgICAgICAgYWxnb3JpdGhtOiB0aGlzLmFsZ29yaXRobSxcbiAgICAgICAgICAgIHN5c3RlbTogdGhpcy5zeXN0ZW0sXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBDdXJyZW5jeSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnQ3VycmVuY3knO1xuICAgIH1cbn1cbkN1cnJlbmN5Lk1haW5GaWVsZHMgPSBbXG4gICAgJ3N5bWJvbCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jdXJyZW5jeS9jdXJyZW5jeS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vY3VycmVuY3knO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5leHBvcnQgY2xhc3MgRXhjaGFuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZXh0VXJsID0gU3RyaW5nKHZhbHVlLmV4dFVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMucmVmZXJyYWwgPSAhIXZhbHVlLnJlZmVycmFsO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBTdHJpbmcodmFsdWUuY29udGVudCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgcmVmZXJyYWw6IHRoaXMucmVmZXJyYWwsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuaXNWYWxpZCA/IHRoaXMuc3RhcnREYXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVmZXJyYWw6IHRoaXMucmVmZXJyYWwsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBFeGNoYW5nZSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnRXhjaGFuZ2UnO1xuICAgIH1cbn1cbkV4Y2hhbmdlLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V4Y2hhbmdlL2V4Y2hhbmdlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9leGNoYW5nZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXhjaGFuZ2UvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBJQ08ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZXh0VXJsID0gU3RyaW5nKHZhbHVlLmV4dFVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMuZ29hbCA9IE1hdGgubWF4KH5+dmFsdWUuZ29hbCwgMCk7XG4gICAgICAgIHRoaXMuY29sbGVjdGVkID0gTWF0aC5tYXgofn52YWx1ZS5jb2xsZWN0ZWQsIDApO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFN0cmluZyh2YWx1ZS5zdGF0dXMgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGdvYWw6IHRoaXMuZ29hbCxcbiAgICAgICAgICAgIGNvbGxlY3RlZDogdGhpcy5jb2xsZWN0ZWQsXG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmlzVmFsaWQgPyB0aGlzLnN0YXJ0RGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdvYWw6IHRoaXMuZ29hbCxcbiAgICAgICAgICAgIGNvbGxlY3RlZDogdGhpcy5jb2xsZWN0ZWQsXG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgSUNPIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdJQ08nO1xuICAgIH1cbn1cbklDTy5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3VybCcsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pY28vaWNvLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9pY28nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuZXhwb3J0IGNsYXNzIE1hcmtldCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5yZWZlcnJhbCA9ICEhdmFsdWUucmVmZXJyYWw7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICByZWZlcnJhbDogdGhpcy5yZWZlcnJhbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZWZlcnJhbDogdGhpcy5yZWZlcnJhbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IE1hcmtldCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnTWFya2V0JztcbiAgICB9XG59XG5NYXJrZXQuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd1cmwnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvbWFya2V0L21hcmtldC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vbWFya2V0JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBSVVMgPSAn0YkgINGIICDRhyAg0YYgINGOICDRjyAg0ZEg0LYgINGLINGNINCwINCxINCyINCzINC0INC1INC3INC4INC5INC6INC7INC8INC9INC+INC/INGAINGBINGCINGDINGEINGFJy5zcGxpdCgvXFxzKy8pO1xuY29uc3QgRU5HID0gJ3NoIHNoIGNoIGN6IHl1IHlhIGUgemggeSBlIGEgYiB2IGcgZCBlIHogaSBqIGsgbCBtIG4gbyBwIHIgcyB0IHUgZiB4Jy5zcGxpdCgvXFxzKy8pO1xuZXhwb3J0IGNsYXNzIFVSTEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5VUkxCdWlsZGVyLmJ1aWxkID0gKGlucHV0LCBtYXhMZW5ndGggPSAxMjgpID0+IHtcbiAgICBsZXQgdGV4dCA9IGlucHV0LnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJ18nKTtcbiAgICB0ZXh0ID0gdGV4dC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IHtcbiAgICAgICAgbGV0IGkgPSBSVVMuaW5kZXhPZihjaGFyKTtcbiAgICAgICAgcmV0dXJuIGkgPCAwID8gY2hhciA6IEVOR1tpXTtcbiAgICB9KS5qb2luKCcnKTtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXjAtOWEtel9dL2csICcnKVxuICAgICAgICAuc2xpY2UoMCwgbWF4TGVuZ3RoKVxuICAgICAgICAucmVwbGFjZSgvKF5fK3xfKyQpL2csICcnKTtcbiAgICByZXR1cm4gdGV4dDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXJsLWJ1aWxkZXIvdXJsLWJ1aWxkZXIudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3VybC1idWlsZGVyJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFVSTEJ1aWxkZXIgfSBmcm9tICdAY29yZS91cmwtYnVpbGRlcic7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBQdWJsaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLnRzID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS50cyk7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnNlY3Rpb25zID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5zZWN0aW9ucyk7XG4gICAgICAgIHRoaXMuY3VycmVuY2llcyA9IEFycmF5LmlzQXJyYXkodmFsdWUuY3VycmVuY2llcykgPyB2YWx1ZS5jdXJyZW5jaWVzXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiBTdHJpbmcoaXRlbSkudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiAhIWl0ZW0pXG4gICAgICAgICAgICA6IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmV4Y2hhbmdlcyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUuZXhjaGFuZ2VzKTtcbiAgICAgICAgdGhpcy5pY28gPSBVVUlELmdldEFycmF5KHZhbHVlLmljbyk7XG4gICAgICAgIHRoaXMubWFya2V0cyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUubWFya2V0cyk7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gdmFsdWUud2VpZ2h0ID09PSB1bmRlZmluZWQgPyAxIDogTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS53ZWlnaHQsIDApLCAzKTtcbiAgICAgICAgdGhpcy5iaWdUaXRsZSA9IFN0cmluZyh2YWx1ZS5iaWdUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5hdXRob3JzID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5hdXRob3JzKTtcbiAgICAgICAgdGhpcy50YWdzID0gQXJyYXkuaXNBcnJheSh2YWx1ZS50YWdzKSA/IHZhbHVlLnRhZ3NcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IFN0cmluZyhpdGVtKS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICEhaXRlbSlcbiAgICAgICAgICAgIDogbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2hhcmluZyA9IHZhbHVlLnNoYXJpbmcgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLnNoYXJpbmc7XG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB2YWx1ZS5jb21tZW50cyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuY29tbWVudHM7XG4gICAgICAgIHRoaXMuYWRzID0gdmFsdWUuYWRzID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5hZHM7XG4gICAgICAgIHRoaXMucnNzID0gdmFsdWUucnNzID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5yc3M7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgICAgIHRoaXMubGFzdE1vZGlmaWVkID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5sYXN0TW9kaWZpZWQpO1xuICAgICAgICBpZiAoIXRoaXMudXJsKVxuICAgICAgICAgICAgdGhpcy51cmwgPSBVUkxCdWlsZGVyLmJ1aWxkKHRoaXMudGl0bGUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHNlY3Rpb25zOiB0aGlzLnNlY3Rpb25zLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIGN1cnJlbmNpZXM6IHRoaXMuY3VycmVuY2llcyxcbiAgICAgICAgICAgIGV4Y2hhbmdlczogdGhpcy5leGNoYW5nZXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgaWNvOiB0aGlzLmljby5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICBtYXJrZXRzOiB0aGlzLm1hcmtldHMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgd2VpZ2h0OiB0aGlzLndlaWdodCxcbiAgICAgICAgICAgIGJpZ1RpdGxlOiB0aGlzLmJpZ1RpdGxlLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgYXV0aG9yczogdGhpcy5hdXRob3JzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgICAgIHNoYXJpbmc6IHRoaXMuc2hhcmluZyxcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgICAgICAgYWRzOiB0aGlzLmFkcyxcbiAgICAgICAgICAgIHJzczogdGhpcy5yc3MsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgc2VjdGlvbnM6IHRoaXMuc2VjdGlvbnMsXG4gICAgICAgICAgICBjdXJyZW5jaWVzOiB0aGlzLmN1cnJlbmNpZXMsXG4gICAgICAgICAgICBleGNoYW5nZXM6IHRoaXMuZXhjaGFuZ2VzLFxuICAgICAgICAgICAgaWNvOiB0aGlzLmljbyxcbiAgICAgICAgICAgIG1hcmtldHM6IHRoaXMubWFya2V0cyxcbiAgICAgICAgICAgIHdlaWdodDogdGhpcy53ZWlnaHQsXG4gICAgICAgICAgICBiaWdUaXRsZTogdGhpcy5iaWdUaXRsZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIGF1dGhvcnM6IHRoaXMuYXV0aG9ycyxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgICAgIHNoYXJpbmc6IHRoaXMuc2hhcmluZyxcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgICAgICAgYWRzOiB0aGlzLmFkcyxcbiAgICAgICAgICAgIHJzczogdGhpcy5yc3MsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IHRoaXMubGFzdE1vZGlmaWVkLmlzVmFsaWQgPyB0aGlzLmxhc3RNb2RpZmllZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgUHVibGljYXRpb24gdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1B1YmxpY2F0aW9uJztcbiAgICB9XG59XG5QdWJsaWNhdGlvbi5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ3RzJyxcbiAgICAndXJsJyxcbiAgICAnZW5hYmxlJyxcbiAgICAnc2VjdGlvbnMnLFxuICAgICdjdXJyZW5jaWVzJyxcbiAgICAnZXhjaGFuZ2VzJyxcbiAgICAnaWNvJyxcbiAgICAnbWFya2V0cycsXG4gICAgJ3dlaWdodCcsXG4gICAgJ2JpZ1RpdGxlJyxcbiAgICAndGl0bGUnLFxuICAgICdkZXNjcmlwdGlvbicsXG4gICAgJ2ltYWdlJyxcbiAgICAnYXV0aG9ycycsXG4gICAgJ3RhZ3MnLFxuICAgICdyc3MnLFxuICAgICdyYXRpbmcnLFxuICAgICdicmFuZGluZycsXG4gICAgJ2xhc3RNb2RpZmllZCcsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNhdGlvbic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5leHBvcnQgY2xhc3MgU2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgU2VjdGlvbiB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnU2VjdGlvbic7XG4gICAgfVxufVxuU2VjdGlvbi5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3VybCcsXG4gICAgJ3RpdGxlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc2VjdGlvbi9zZWN0aW9uLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zZWN0aW9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuZXhwb3J0IGNsYXNzIFN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFN0YXR1cyB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnU3RhdHVzJztcbiAgICB9XG59XG5TdGF0dXMuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc3RhdHVzL3N0YXR1cy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vc3RhdHVzJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zdGF0dXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBFbnVtIH0gZnJvbSAnQGNvcmUvZW51bSc7XG5leHBvcnQgY2xhc3MgUm9sZUVudW0gZXh0ZW5kcyBFbnVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdmFsdWUsIGljb24pIHtcbiAgICAgICAgc3VwZXIoaWQsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVXNlclJvbGUnO1xuICAgIH1cbn1cblJvbGVFbnVtLlVzZXIgPSBuZXcgUm9sZUVudW0oJ3VzZXInLCAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJywgbnVsbCk7XG5Sb2xlRW51bS5BdXRob3IgPSBuZXcgUm9sZUVudW0oJ2F1dGhvcicsICfQkNCy0YLQvtGAJywgbnVsbCk7XG5Sb2xlRW51bS5QdWJsaXNoZXIgPSBuZXcgUm9sZUVudW0oJ3B1Ymxpc2hlcicsICfQn9GD0LHQu9C40LrQsNGC0L7RgCcsIG51bGwpO1xuUm9sZUVudW0uQ2hpZWYgPSBuZXcgUm9sZUVudW0oJ2NoaWVmJywgJ9Cg0LXQtNCw0LrRgtC+0YAnLCBudWxsKTtcblJvbGVFbnVtLkFkbWluaXN0cmF0b3IgPSBuZXcgUm9sZUVudW0oJ2FkbWluaXN0cmF0b3InLCAn0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YAnLCBudWxsKTtcblJvbGVFbnVtLlN1ID0gbmV3IFJvbGVFbnVtKCdzdScsICdTdXBlciB1c2VyJywgbnVsbCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci9yb2xlLmVudW0udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBSb2xlRW51bSB9IGZyb20gJy4vcm9sZS5lbnVtJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5jb25zdCBFTlVNX1BHX0FSUkFZX1BBVFRFUk4gPSAvXlxceyhbYS16MC05LF0rKVxcfSQvO1xuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgaWYgKHZhbHVlLnJvbGVzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IEVOVU1fUEdfQVJSQVlfUEFUVEVSTi5leGVjKHZhbHVlLnJvbGVzKTtcbiAgICAgICAgICAgIGNvbnN0IHJvbGVzID0gbWF0Y2ggJiYgbWF0Y2hbMV0uc3BsaXQoJywnKSB8fCB2YWx1ZS5yb2xlcztcbiAgICAgICAgICAgIHRoaXMucm9sZXMgPSBSb2xlRW51bS5nZXRBcnJheShyb2xlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5yb2xlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IFN0cmluZyh2YWx1ZS5lbWFpbCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnBob25lID0gU3RyaW5nKHZhbHVlLnBob25lIHx8ICcnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vYXV0aCA9IHt9O1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0dXNlcyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUuc3RhdHVzZXMpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmNhcmQgPSB7fTtcbiAgICB9XG4gICAgY2hlY2tSb2xlKHJvbGVzKSB7XG4gICAgICAgIGZvciAobGV0IHJvbGUgb2Ygcm9sZXMpXG4gICAgICAgICAgICBpZiAodGhpcy5yb2xlcy5pbmNsdWRlcyhyb2xlKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgdmFsaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICE9PSBudWxsXG4gICAgICAgICAgICAmJiB0aGlzLmlkLnZlcnNpb24gIT09IG51bGw7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgcm9sZXM6IHRoaXMucm9sZXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBzdGF0dXNlczogdGhpcy5zdGF0dXNlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgY2FyZDogdGhpcy5jYXJkXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLFxuICAgICAgICAgICAgb2F1dGg6IHRoaXMub2F1dGgsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB0aGlzLnN0YXR1c2VzLFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBjYXJkOiB0aGlzLmNhcmRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgVXNlciB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVXNlcic7XG4gICAgfVxufVxuVXNlci5Bbm9ueW1vdXNGaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAndGl0bGUnLFxuICAgICd1cmwnLFxuICAgICdpbWFnZScsXG4gICAgJ3N0YXR1c2VzJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5Vc2VyLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndGl0bGUnLFxuICAgICdlbWFpbCcsXG4gICAgJ3Bob25lJyxcbiAgICAndXJsJyxcbiAgICAncm9sZXMnLFxuICAgICdpbWFnZScsXG4gICAgJ3N0YXR1c2VzJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci91c2VyLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9yb2xlLmVudW0nO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNsYXNzIFZpZGVvIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gU3RyaW5nKHZhbHVlLmlkIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgVmlkZW8gdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1ZpZGVvJztcbiAgICB9XG59XG5WaWRlby5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3ZpZGVvL3ZpZGVvLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi92aWRlbyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBFdmVudCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnRXZlbnQnO1xuICAgIH1cbn1cbkV2ZW50Lk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V2ZW50L2V2ZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9ldmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXZlbnQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2Fkcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvaW4nO1xuZXhwb3J0ICogZnJvbSAnLi9jdXJyZW5jeSc7XG5leHBvcnQgKiBmcm9tICcuL2V4Y2hhbmdlJztcbmV4cG9ydCAqIGZyb20gJy4vaWNvJztcbmV4cG9ydCAqIGZyb20gJy4vbWFya2V0JztcbmV4cG9ydCAqIGZyb20gJy4vcHVibGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yYXRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdHVzJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQsIF9zbmFja0Jhcikge1xuICAgICAgICB0aGlzLl9zbmFja0JhciA9IF9zbmFja0JhcjtcbiAgICAgICAgdGhpcy5pc1NlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCk7XG4gICAgfVxuICAgIG1lc3NhZ2UobWVzc2FnZSwgZHVyYXRpb24gPSAyMDAwKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VydmVyKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4obWVzc2FnZSwgdW5kZWZpbmVkLCB7IGR1cmF0aW9uIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL21lc3NhZ2UvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQXV0aERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0Bjb21tb24vbW9kZWxzJztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlJztcbmNvbnN0IEFVVEhfVE9LRU5fTFNfSUQgPSAnYXV0aC10b2tlbic7XG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQsIF9odHRwLCBfbWF0RGlhbG9nLCBfbWVzc2FnZSwgX3NuYWNrQmFyKSB7XG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcbiAgICAgICAgdGhpcy5fbWF0RGlhbG9nID0gX21hdERpYWxvZztcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IF9tZXNzYWdlO1xuICAgICAgICB0aGlzLl9zbmFja0JhciA9IF9zbmFja0JhcjtcbiAgICAgICAgdGhpcy5pc1NlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCk7XG4gICAgfVxuICAgIGdldCBfYXV0aFRva2VuKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKEFVVEhfVE9LRU5fTFNfSUQpIHx8IG51bGw7XG4gICAgfVxuICAgIHNldCBfYXV0aFRva2VuKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VydmVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlICYmIHZhbHVlLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUSF9UT0tFTl9MU19JRCwgdmFsdWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQVVUSF9UT0tFTl9MU19JRCk7XG4gICAgfVxuICAgIGdldCBhdXRoVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoVG9rZW47XG4gICAgfVxuICAgIGdldCBhdXRoSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGF1dGhUb2tlbiA9IHRoaXMuX2F1dGhUb2tlbjtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ3Rva2VuICcgKyAoYXV0aFRva2VuIHx8ICdudWxsJykgfSk7XG4gICAgfVxuICAgIG1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoQVBJU2VydmljZS5idWlsZFBhdGgoJy91c2Vycy9tZScpLCB7IGhlYWRlcnM6IHRoaXMuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0RGlhbG9nLm9wZW4oQXV0aERpYWxvZ0NvbXBvbmVudCwgeyBkYXRhOiB0aGlzIH0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKGDQntGI0LjQsdC60LAgJHtlcnJvci5zdGF0dXN9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCfQntGI0LjQsdC60LAg0L/RgNC40LvQvtC20LXQvdC40Y8nKTtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKG51bGwpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gbmV3IFVzZXIoaXRlbSkpO1xuICAgIH1cbiAgICBsb2dpbihkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoQVBJU2VydmljZS5idWlsZFBhdGgoJy9hdXRoL2xvZ2luJyksIGRhdGEsIHsgaGVhZGVyczogdGhpcy5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUub2YobnVsbCkpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJ9Cd0LXQstC10YDQvdC+0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70Lgg0L/QsNGA0L7Qu9GMJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYXV0aFRva2VuID0gaXRlbS50b2tlbjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLl9odHRwLmdldChBUElTZXJ2aWNlLmJ1aWxkUGF0aCgnL2F1dGgvbG9nb3V0JyksIHsgaGVhZGVyczogdGhpcy5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUub2YobnVsbCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXV0aFRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvdXNlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImxldCBBUElfU0VSVkVSX1ZBTFVFID0gXCJodHRwczovL2FwaS5iaXRqb3VybmFsLmlvXCI7XG5pZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBBUElfU0VSVkVSX1ZBTFVFID0gXCJodHRwOi8vYXBpLmJpdGpvdXJuYWwuZGV2OjgwODFcIjtcbn1cbmV4cG9ydCBjb25zdCBBUElfU0VSVkVSID0gQVBJX1NFUlZFUl9WQUxVRTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvYXBpL2VudmVyb21lbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXInO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlJztcbmltcG9ydCB7IEFQSV9TRVJWRVIgfSBmcm9tICcuL2VudmVyb21lbnRzJztcbmNvbnN0IFBBVEhfUkVHRVhQID0gL15cXC8/KC4qKS87XG5leHBvcnQgY2xhc3MgQVBJU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoX2h0dHAsIF9yb3V0ZXIsIF91c2VyLCBfbWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9odHRwID0gX2h0dHA7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgIHRoaXMuX3VzZXIgPSBfdXNlcjtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IF9tZXNzYWdlO1xuICAgIH1cbiAgICBzdGF0aWMgYnVpbGRQYXRoKHZhbHVlID0gJycpIHtcbiAgICAgICAgbGV0IG1hdGNoID0gUEFUSF9SRUdFWFAuZXhlYyh2YWx1ZS50cmltKCkpO1xuICAgICAgICByZXR1cm4gQVBJX1NFUlZFUiArICcvJyArIChtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJyk7XG4gICAgfVxuICAgIF9oYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgc3dpdGNoIChlcnJvci5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCc0MDM6INCU0L7RgdGC0YPQvyDQt9Cw0L/RgNC10YnQtdC9Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJzQwNDog0K3Qu9C10LzQtdC90YIg0L3QtSDQvdCw0LnQtNC10L0nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKGDQntGI0LjQsdC60LAgJHtlcnJvci5zdGF0dXN9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCfQntGI0LjQsdC60LAg0L/RgNC40LvQvtC20LXQvdC40Y8nKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobnVsbCk7XG4gICAgfVxuICAgIGdldChwYXRoLCBpbnB1dFBhcmFtcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogaW5wdXRQYXJhbXMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChBUElTZXJ2aWNlLmJ1aWxkUGF0aChwYXRoKSwge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5fdXNlci5hdXRoSGVhZGVycyxcbiAgICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuX2hhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG4gICAgcG9zdChwYXRoLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoQVBJU2VydmljZS5idWlsZFBhdGgocGF0aCksIGRhdGEsIHsgaGVhZGVyczogdGhpcy5fdXNlci5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuX2hhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG4gICAgcHV0KHBhdGgsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKHBhdGgpLCBkYXRhLCB7IGhlYWRlcnM6IHRoaXMuX3VzZXIuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLl9oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxuICAgIGRlbGV0ZShwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShBUElTZXJ2aWNlLmJ1aWxkUGF0aChwYXRoKSwgeyBoZWFkZXJzOiB0aGlzLl91c2VyLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL2FwaS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbWVzc2FnZSc7XG5jb25zdCBHT09HTEVfQVBJX0tFWSA9ICdBSXphU3lCMmdZODZob210LXV2cURRclJBMHJ1OGdzTmtQS1JkWmMnO1xuY29uc3QgWU9VVFVCRV9EQVRBX1VSTCA9IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcz9pZD17e0lEU319JmtleT0ke0dPT0dMRV9BUElfS0VZfSZwYXJ0PXNuaXBwZXQsc3RhdGlzdGljcyxjb250ZW50RGV0YWlsc2A7XG5jb25zdCBZT1VUVUJFX1VSTF9SRUdFWFAgPSAvKD86eW91dHViZVxcLmNvbVxcL1xcUyooPzooPzpcXC9lKD86bWJlZCkpP1xcL3x3YXRjaFxcLz9cXD8oPzpcXFMqPyY/dlxcPSkpfHlvdXR1XFwuYmVcXC8pKFthLXpBLVowLTlfLV17NiwxMX0pLztcbmV4cG9ydCBjbGFzcyBZb3VUdWJlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoX2h0dHAsIF9tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IF9tZXNzYWdlO1xuICAgIH1cbiAgICBzdGF0aWMgcGFyc2VWaWRlb0lkKHRleHQpIHtcbiAgICAgICAgdGV4dCA9IHRleHQudHJpbSgpO1xuICAgICAgICBjb25zdCBpZE1hdGNoID0gL15bYS16QS1aMC05Xy1dezYsMTF9JC8uZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKGlkTWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gaWRNYXRjaFswXTtcbiAgICAgICAgY29uc3QgdXJsTWF0Y2ggPSBZT1VUVUJFX1VSTF9SRUdFWFAuZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKHVybE1hdGNoKVxuICAgICAgICAgICAgcmV0dXJuIHVybE1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgZm9ybWF0RHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLnJlcGxhY2UoL1teMC05XSsvZywgJzonKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyheOit8OiskKS9nLCAnJyk7XG4gICAgfVxuICAgIGdldFZpZGVvRGF0YShpZHMgPSBbXSkge1xuICAgICAgICBpZiAoaWRzLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobmV3IEFycmF5KCkpO1xuICAgICAgICBjb25zdCBxdWVyeSA9IFlPVVRVQkVfREFUQV9VUkwucmVwbGFjZSgvXFx7XFx7XFxzKklEU1xccypcXH1cXH0vLCBpZHMuam9pbignLCcpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHF1ZXJ5KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZShgWW91VHViZTogJHtTdHJpbmcoZXJyb3IpfWApO1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobnVsbCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbSAmJiBpdGVtLml0ZW1zIHx8IG51bGwpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gQXJyYXkuaXNBcnJheShpdGVtKSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMveW91dHViZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGknO1xuY29uc3QgQVBJX0JBU0UgPSAncHVibGljYXRpb25zJztcbmV4cG9ydCBjbGFzcyBQdWJsaWNhdGlvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKF9hcGkpIHtcbiAgICAgICAgdGhpcy5fYXBpID0gX2FwaTtcbiAgICB9XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBpXG4gICAgICAgICAgICAuZ2V0KGAvJHtBUElfQkFTRX1gKVxuICAgICAgICAgICAgLm1hcChpdGVtcyA9PiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmVuYWJsZSkpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvcHVibGljYXRpb24vcHVibGljYXRpb24uc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcHVibGljYXRpb24uc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3B1YmxpY2F0aW9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgVktfQVBJID0gJ2h0dHBzOi8vdmsuY29tL2pzL2FwaS9vcGVuYXBpLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBWS0luaXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2luZG93LnZrQXN5bmNJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgVksgPSB3aW5kb3cuVks7XG4gICAgICAgICAgICBpZiAoVkspXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShWSyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVksgSW5pdGlhbGlzYXRpb24gZXJyb3InKSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuaWQgPSAndmtvbnRha3RlLWpzJztcbiAgICAgICAgc2NyaXB0LnNyYyA9IFZLX0FQSTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvdmstaW5pdC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IFRXX0FQSSA9ICdodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIFR3aXR0ZXJJbml0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdpbmRvdy50d3R0ciA9IHtcbiAgICAgICAgICAgIF9lOiBbZnVuY3Rpb24gKFRXKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChUVylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoVFcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdUVyBJbml0aWFsaXNhdGlvbiBlcnJvcicpKTtcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LmlkID0gJ3R3aXR0ZXItanMnO1xuICAgICAgICBzY3JpcHQuc3JjID0gVFdfQVBJO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3NvY2lhbC90d2l0dGVyLWluaXQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBHT09HTEVfQVBJID0gJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsYXRmb3JtLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBHb29nbGVJbml0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuaWQgPSAnZ29vZ2xlLWpzJztcbiAgICAgICAgc2NyaXB0LnNyYyA9IEdPT0dMRV9BUEk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvc29jaWFsL2dvb2dsZS1pbml0LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNvbnN0IFZLX1NPQ0lBTF9JRCA9ICcxNDkwMTEyMDYnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvZW52ZXJvbWVudHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWS0luaXQgfSBmcm9tICcuL3ZrLWluaXQnO1xuaW1wb3J0IHsgVHdpdHRlckluaXQgfSBmcm9tICcuL3R3aXR0ZXItaW5pdCc7XG5pbXBvcnQgeyBHb29nbGVJbml0IH0gZnJvbSAnLi9nb29nbGUtaW5pdCc7XG5pbXBvcnQgeyBWS19TT0NJQUxfSUQgfSBmcm9tICcuL2VudmVyb21lbnRzJztcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkKSB7XG4gICAgICAgIHRoaXMuX3ZrID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90d2l0dGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9nb29nbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNTZXJ2ZXIgPSBpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX3ZrID0gVktJbml0KCk7XG4gICAgICAgIHRoaXMuX3R3aXR0ZXIgPSBUd2l0dGVySW5pdCgpO1xuICAgICAgICB0aGlzLl9nb29nbGUgPSBHb29nbGVJbml0KCk7XG4gICAgfVxuICAgIHZrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmsgfHwgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHR3aXR0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90d2l0dGVyIHx8IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgICBnb29nbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nb29nbGUgfHwgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxufVxuU29jaWFsU2VydmljZS5WS19TT0NJQUxfSUQgPSBWS19TT0NJQUxfSUQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3NvY2lhbC9zb2NpYWwuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vc29jaWFsLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL3lvdXR1YmUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc29jaWFsJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmV4cG9ydCBjbGFzcyBBdXRoRGlhbG9nQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dSZWYsIGZiLCB1c2VyKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmID0gZGlhbG9nUmVmO1xuICAgICAgICB0aGlzLmZiID0gZmI7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoRm9ybS52YWxpZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy51c2VyLmxvZ2luKHRoaXMuYXV0aEZvcm0udmFsdWUpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoRm9ybS5wYXRjaFZhbHVlKHsgcGFzc3dvcmQ6ICcnIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2F1dGgtZGlhbG9nLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvY2lhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfc29jaWFsU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zb2NpYWxTZXJ2aWNlID0gX3NvY2lhbFNlcnZpY2U7XG4gICAgfVxuICAgIGFkZFZLV2lkZ2V0KCkge1xuICAgICAgICB0aGlzLl9zb2NpYWxTZXJ2aWNlLnZrKCkudGhlbihWSyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzb2x2ZScpO1xuICAgICAgICAgICAgaWYgKCFWSylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBWSy5XaWRnZXRzLkdyb3VwKCd2a19ncm91cF92aWRnZXQnLCB7XG4gICAgICAgICAgICAgICAgbW9kZTogMSxcbiAgICAgICAgICAgICAgICBub19jb3ZlcjogMSxcbiAgICAgICAgICAgICAgICBjb2xvcjI6ICcyNDI5MmUnLFxuICAgICAgICAgICAgfSwgU29jaWFsU2VydmljZS5WS19TT0NJQUxfSUQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkVHdpdHRlcldpZGdldCgpIHtcbiAgICAgICAgdGhpcy5fc29jaWFsU2VydmljZS50d2l0dGVyKCkudGhlbihUVyA9PiB7IH0pO1xuICAgIH1cbiAgICBhZGRZb3VUdWJlV2lkZ2V0KCkge1xuICAgICAgICB0aGlzLl9zb2NpYWxTZXJ2aWNlLmdvb2dsZSgpLnRoZW4oZ2EgPT4geyB9KTtcbiAgICB9XG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmFkZFZLV2lkZ2V0KCk7XG4gICAgICAgIHRoaXMuYWRkVHdpdHRlcldpZGdldCgpO1xuICAgICAgICB0aGlzLmFkZFlvdVR1YmVXaWRnZXQoKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2Zvb3Rlci5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICAgICAgdGhpcy5uYXZCYXJWaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIExheW91dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgTm9Db250ZW50Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9uby1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFBhZ2UxMDFDb21wb25lbnQge1xuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLTEwMS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFBhZ2VBcnRpY2xlQ29tcG9uZW50IHtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLWFydGljbGUuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlRXZlbnRzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UtZXZlbnRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VJQ09Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUlDT0l0ZW1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1pY28uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZS1pY28taXRlbS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFB1YmxpY2F0aW9uU2VydmljZSwgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5leHBvcnQgY2xhc3MgUGFnZU1haW5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIsIF9wdWJsaWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICAgICAgdGhpcy5fcHVibGljYXRpb25TZXJ2aWNlID0gX3B1YmxpY2F0aW9uU2VydmljZTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHVibGljYXRpb25zID0gdGhpcy5fcHVibGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0KCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1tYWluLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlTWFya2V0c0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UtbWFya2V0cy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjbGFzcyBQYWdlU2VjdGlvbkNvbXBvbmVudCB7XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1zZWN0aW9uLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vMTAxJztcbmV4cG9ydCAqIGZyb20gJy4vYXJ0aWNsZSc7XG5leHBvcnQgKiBmcm9tICcuL2N1cnJlbmNpZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9leGNoYW5nZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pY28nO1xuZXhwb3J0ICogZnJvbSAnLi9tYWluJztcbmV4cG9ydCAqIGZyb20gJy4vbWFya2V0cyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3Rpb24nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjbGFzcyBQdWJDYXJkQ29tcG9uZW50IHtcbiAgICBnZXQgaDEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmJpZ1RpdGxlO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wdWItY2FyZC9wdWItY2FyZC5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3B1Yi1jYXJkLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcHViLWNhcmQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlQWxsJztcbmltcG9ydCB7IEFQSVNlcnZpY2UsIFlvdVR1YmVTZXJ2aWNlLCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmNvbnN0IEFQSV9CQVNFID0gJ3ZpZGVvJztcbmV4cG9ydCBjbGFzcyBWaWRlb1JpYmJvbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlciwgX2FwaVNlcnZpY2UsIF95b3VUdWJlU2VydmljZSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlID0gX2FwaVNlcnZpY2U7XG4gICAgICAgIHRoaXMuX3lvdVR1YmVTZXJ2aWNlID0gX3lvdVR1YmVTZXJ2aWNlO1xuICAgIH1cbiAgICBjcmVhdGVWaWRlb1JpYmJvbkl0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0nICsgaXRlbS5pZCxcbiAgICAgICAgICAgIHRodW1iOiBpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybCxcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGl0ZW0uc25pcHBldC5wdWJsaXNoZWRBdCksXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5zbmlwcGV0LnRpdGxlLFxuICAgICAgICAgICAgZHVyYXRpb246IFlvdVR1YmVTZXJ2aWNlLmZvcm1hdER1cmF0aW9uKGl0ZW0uY29udGVudERldGFpbHMuZHVyYXRpb24pLFxuICAgICAgICAgICAgdmlldzogcGFyc2VJbnQoaXRlbS5zdGF0aXN0aWNzLnZpZXdDb3VudCkgfHwgMCxcbiAgICAgICAgICAgIGxpa2U6IHBhcnNlSW50KGl0ZW0uc3RhdGlzdGljcy5saWtlQ291bnQpIHx8IDAsXG4gICAgICAgICAgICBkaXNsaWtlOiBwYXJzZUludChpdGVtLnN0YXRpc3RpY3MuZGlzbGlrZUNvdW50KSB8fCAwLFxuICAgICAgICAgICAgY29tbWVudDogcGFyc2VJbnQoaXRlbS5zdGF0aXN0aWNzLmNvbW1lbnRDb3VudCkgfHwgMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLl9hcGlTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0KGAvJHtBUElfQkFTRX1gKVxuICAgICAgICAgICAgLm1hcChpdGVtcyA9PiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmVuYWJsZSkpXG4gICAgICAgICAgICAubWFwKGl0ZW1zID0+IGl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpKVxuICAgICAgICAgICAgLm1hcChpdGVtcyA9PiB0aGlzLl95b3VUdWJlU2VydmljZS5nZXRWaWRlb0RhdGEoaXRlbXMpKVxuICAgICAgICAgICAgLm1lcmdlQWxsKClcbiAgICAgICAgICAgIC5tYXAoaXRlbXMgPT4gaXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5jcmVhdGVWaWRlb1JpYmJvbkl0ZW0oaXRlbSkpKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2N1cnJlbmNpZXMtcmliYm9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjbGFzcyBGb2xsb3dDb21wb25lbnQge1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9mb2xsb3cuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9mb2xsb3cvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FydGljbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZm9vdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0JztcbmV4cG9ydCAqIGZyb20gJy4vbm8tY29udGVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vcHViLWNhcmQnO1xuZXhwb3J0ICogZnJvbSAnLi92aWRlby1yaWJib24nO1xuZXhwb3J0ICogZnJvbSAnLi9jdXJyZW5jaWVzLXJpYmJvbic7XG5leHBvcnQgKiBmcm9tICcuL2ZvbGxvdyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBBcnRpY2xlQ29tcG9uZW50LCBBdXRoRGlhbG9nQ29tcG9uZW50LCBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIE5vQ29udGVudENvbXBvbmVudCwgUGFnZTEwMUNvbXBvbmVudCwgUGFnZUFydGljbGVDb21wb25lbnQsIFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50LCBQYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQsIFBhZ2VFdmVudHNDb21wb25lbnQsIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50LCBQYWdlRXhjaGFuZ2VzQ29tcG9uZW50LCBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCwgUGFnZUlDT0NvbXBvbmVudCwgUGFnZUlDT0l0ZW1Db21wb25lbnQsIFBhZ2VNYWluQ29tcG9uZW50LCBQYWdlTWFya2V0c0NvbXBvbmVudCwgUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50LCBQYWdlU2VjdGlvbkNvbXBvbmVudCwgUHViQ2FyZENvbXBvbmVudCwgRm9sbG93Q29tcG9uZW50LCBWaWRlb1JpYmJvbkNvbXBvbmVudCwgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IENPTVBPTkVOVFMgPSBbXG4gICAgQXJ0aWNsZUNvbXBvbmVudCxcbiAgICBBdXRoRGlhbG9nQ29tcG9uZW50LFxuICAgIEN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgTm9Db250ZW50Q29tcG9uZW50LFxuICAgIFBhZ2UxMDFDb21wb25lbnQsXG4gICAgUGFnZUFydGljbGVDb21wb25lbnQsXG4gICAgUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsXG4gICAgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VFdmVudHNDb21wb25lbnQsXG4gICAgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsXG4gICAgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCxcbiAgICBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCxcbiAgICBQYWdlSUNPQ29tcG9uZW50LFxuICAgIFBhZ2VJQ09JdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VNYWluQ29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZXRzQ29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCxcbiAgICBQYWdlU2VjdGlvbkNvbXBvbmVudCxcbiAgICBQdWJDYXJkQ29tcG9uZW50LFxuICAgIEZvbGxvd0NvbXBvbmVudCxcbiAgICBWaWRlb1JpYmJvbkNvbXBvbmVudCxcbl07XG5leHBvcnQgY29uc3QgRU5UUllfQ09NUE9ORU5UUyA9IFtcbiAgICBBdXRoRGlhbG9nQ29tcG9uZW50LFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwLmNvbXBvbmVudHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50cyc7XG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwLm1vZHVsZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9wYWdlLW1haW4uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5iai1wdWItY2FyZHtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7bWF4LXdpZHRoOjEwMCU7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06bm9uZTtjb2xvcjp2YXIoLS1jb2xvci1tYWluKX0uYmotcHViLWNhcmQrLmJqLXB1Yi1jYXJke21hcmdpbi10b3A6dmFyKC0taW5kZW50LWRvdWJsZSl9QHN1cHBvcnRzIChkaXNwbGF5OmdyaWQpe0BtZWRpYSAobWluLXdpZHRoOjcwMHB4KXsuYmotcHViLWNhcmQrLmJqLXB1Yi1jYXJke21hcmdpbi10b3A6MH19fS5iai1wdWItY2FyZF9fZmlndXJle2ZsZXg6MCAwIDEwMCU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OmNhbGMoMTAwdncvMS41KTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MDtwYWRkaW5nOjA7YmFja2dyb3VuZDojZjZmNmY2O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59QG1lZGlhIChtaW4td2lkdGg6NjAwcHgpey5iai1wdWItY2FyZF9fZmlndXJle21pbi1oZWlnaHQ6MzIwcHh9fS5iai1wdWItY2FyZF9fcGljdHVyZXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59LmJqLXB1Yi1jYXJkX19waWN0dXJlLC5iai1wdWItY2FyZF9fcGljdHVyZSBpbWcsLmJqLXB1Yi1jYXJkX19yb3d7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJX0uYmotcHViLWNhcmRfX3BpY3R1cmUgaW1ne21pbi13aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTAwJTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtvYmplY3QtZml0OmNvdmVyO3Bvc2l0aW9uOmFic29sdXRlfS5iai1wdWItY2FyZF9fcm93e3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6dmFyKC0taW5kZW50LWJhc2UpIDB9LmJqLXB1Yi1jYXJkX19yb3ctLWRhcmt7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHRyYW5zcGFyZW50IDAlLHJnYmEoMCwwLDAsLjEpIDEwJSxyZ2JhKDAsMCwwLC43KSAxMDAlKTtwYWRkaW5nLXRvcDp2YXIoLS1pbmRlbnQtZG91YmxlKX0uYmotcHViLWNhcmRfX2gye21hcmdpbjowIDAgLS4xZW07Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MnJlbTtmb250LXdlaWdodDozMDA7bGluZS1oZWlnaHQ6MS4zNTtjb2xvcjojZmZmfS5iai1wdWItY2FyZF9faDEsLmJqLXB1Yi1jYXJkX19oMiwuYmotdmlkZW8tcmliYm9uX19kYXRldGltZXtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjAgdmFyKC0taW5kZW50LWJhc2UpfS5iai1wdWItY2FyZF9faDF7ZmxleDowIDAgMTAwJTt3aWR0aDoxMDAlO21hcmdpbjowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEuNXJlbTtsaW5lLWhlaWdodDoxLjM1O21hcmdpbi10b3A6dmFyKC0taW5kZW50LWhhbGYpfS5iai12aWRlby1yaWJib25fX2RhdGV0aW1le21hcmdpbi10b3A6dmFyKC0taW5kZW50LWJhc2UpfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wdWItY2FyZC9wdWItY2FyZC5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJsZXQgUkFXX1NFUlZFUl9WQUxVRSA9IFwiaHR0cHM6Ly9yYXcuYml0am91cm5hbC5pb1wiO1xuZXhwb3J0IGNvbnN0IFJBV19TRVJWRVIgPSBSQVdfU0VSVkVSX1ZBTFVFO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9pbWFnZS9lbnZlcm9tZW50cy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJBV19TRVJWRVIgfSBmcm9tICcuL2VudmVyb21lbnRzJztcbmNvbnN0IFBBVEhfUkVHRVhQID0gL15cXC8/KC4qKS87XG5jb25zdCBFTVBUWV9QTkcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PSc7XG5leHBvcnQgY2xhc3MgSW1hZ2VQaXBlIHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQpIHtcbiAgICAgICAgaWYgKCFpbnB1dClcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9QTkc7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gUEFUSF9SRUdFWFAuZXhlYyhTdHJpbmcoaW5wdXQpLnRyaW0oKSk7XG4gICAgICAgIGlmICghbWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfUE5HO1xuICAgICAgICByZXR1cm4gUkFXX1NFUlZFUiArICcvJyArIChtYXRjaCAmJiBtYXRjaFsxXSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmV4cG9ydCBjbGFzcyBUaW1lc3RhbXBQaXBlIHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQsIHR5cGUgPSAnSVNPJykge1xuICAgICAgICBjb25zdCB0cyA9IG5ldyBUaW1lc3RhbXAoaW5wdXQpO1xuICAgICAgICBpZiAodHMuaXNJbnZhbGlkKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0lTTyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlICdIUic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzLnRvSFJTdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgJ1VSTCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzLnRvVVJMU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0cy50b0lTT1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy90aW1lc3RhbXAvdGltZXN0YW1wLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcHViX2NhcmQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3BpcGVzX2ltYWdlX2ltYWdlLnBpcGUsXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX2FuZ3VsYXJfY29tbW9uLF9wdWJfY2FyZC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcHViX2NhcmQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3BpcGVzX2ltYWdlX2ltYWdlLnBpcGUsXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX2FuZ3VsYXJfY29tbW9uLF9wdWJfY2FyZC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcHViLWNhcmQuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL3BpcGVzL2ltYWdlL2ltYWdlLnBpcGVcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9waXBlcy90aW1lc3RhbXAvdGltZXN0YW1wXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi9wdWItY2FyZC5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUHViQ2FyZENvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUHViQ2FyZENvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QdWJDYXJkQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUHViQ2FyZENvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1B1YkNhcmRDb21wb25lbnQgfTtcbmZ1bmN0aW9uIFZpZXdfUHViQ2FyZENvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJmaWdjYXB0aW9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkX19yb3cgYmotcHViLWNhcmRfX3Jvdy0tZGFya1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZF9faDJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDIsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMCA9IF9jby52YWx1ZS5iaWdUaXRsZTsgX2NrKF92LCAyLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUHViQ2FyZENvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbaTEuybVwaWQoMCwgaTIuSW1hZ2VQaXBlLCBbXSksIGkxLsm1cGlkKDAsIGkzLlRpbWVzdGFtcFBpcGUsIFtdKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgNiwgXCJmaWd1cmVcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWNhcmRfX2ZpZ3VyZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMiwgXCJwaWN0dXJlXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkX19waWN0dXJlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0LCAwLCBudWxsLCBudWxsLCAxLCBcImltZ1wiLCBbXSwgW1s4LCBcInNyY1wiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVwcGQoNSwgMSksIChfbCgpKCksIGkxLsm1ZWxkKDYsIDAsIG51bGwsIG51bGwsIDAsIFwiZmlnY2FwdGlvblwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZF9fcm93XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMSwgbnVsbCwgVmlld19QdWJDYXJkQ29tcG9uZW50XzEpKSwgaTEuybVkaWQoOCwgMTYzODQsIG51bGwsIDAsIGk0Lk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoOSwgMCwgbnVsbCwgbnVsbCwgMywgXCJ0aW1lXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fZGF0ZXRpbWVcIl1dLCBbWzEsIFwiZGF0ZXRpbWVcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDEwLCAxKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTEsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCBpMS7JtXBwZCgxMiwgMiksIChfbCgpKCksIGkxLsm1ZWxkKDEzLCAwLCBudWxsLCBudWxsLCAxLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkX19oMVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTQsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMSA9ICEhX2NvLnZhbHVlLmJpZ1RpdGxlOyBfY2soX3YsIDgsIDAsIGN1cnJWYWxfMSk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBpMS7JtXVudihfdiwgNCwgMCwgX2NrKF92LCA1LCAwLCBpMS7JtW5vdihfdiwgMCksIF9jby52YWx1ZS5pbWFnZSkpOyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzIgPSBpMS7JtXVudihfdiwgOSwgMCwgX2NrKF92LCAxMCwgMCwgaTEuybVub3YoX3YsIDEpLCBfY28udmFsdWUudHMpKTsgX2NrKF92LCA5LCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gaTEuybV1bnYoX3YsIDExLCAwLCBfY2soX3YsIDEyLCAwLCBpMS7JtW5vdihfdiwgMSksIF9jby52YWx1ZS50cywgXCJIUlwiKSk7IF9jayhfdiwgMTEsIDAsIGN1cnJWYWxfMyk7IHZhciBjdXJyVmFsXzQgPSBfY28udmFsdWUudGl0bGU7IF9jayhfdiwgMTQsIDAsIGN1cnJWYWxfNCk7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QdWJDYXJkQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QdWJDYXJkQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUHViQ2FyZENvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTUuUHViQ2FyZENvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBQdWJDYXJkQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcIi5iai1wdWItY2FyZFwiLCBpNS5QdWJDYXJkQ29tcG9uZW50LCBWaWV3X1B1YkNhcmRDb21wb25lbnRfSG9zdF8wLCB7IHZhbHVlOiBcInZhbHVlXCIgfSwge30sIFtdKTtcbmV4cG9ydCB7IFB1YkNhcmRDb21wb25lbnROZ0ZhY3RvcnkgYXMgUHViQ2FyZENvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfdmlkZW9fcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX2NvbW1vbixfdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fc2VydmljZXNfeW91dHViZV95b3V0dWJlLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfdmlkZW9fcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX2NvbW1vbixfdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fc2VydmljZXNfeW91dHViZV95b3V0dWJlLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuL3ZpZGVvLXJpYmJvbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZVwiO1xudmFyIHN0eWxlc19WaWRlb1JpYmJvbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfVmlkZW9SaWJib25Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfVmlkZW9SaWJib25Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9WaWRlb1JpYmJvbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1ZpZGVvUmliYm9uQ29tcG9uZW50IH07XG5mdW5jdGlvbiBWaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50XzEoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxMCwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9faXRlbVwiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgW1s4LCBcImhyZWZcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDUsIFwiZmlndXJlXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fZmlndXJlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImltZ1wiLCBbW1wiY2xhc3NcIiwgXCJiai12aWRlby1yaWJib25fX3RodW1iXCJdXSwgW1s4LCBcInNyY1wiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJmaWdjYXB0aW9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fY2FwdGlvbiBiai12aWRlby1yaWJib25fX2NhcHRpb24tLWxlZnRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDQsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCAxLCBcImZpZ2NhcHRpb25cIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX19jYXB0aW9uIGJqLXZpZGVvLXJpYmJvbl9fY2FwdGlvbi0tcmlnaHRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDYsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg3LCAwLCBudWxsLCBudWxsLCAxLCBcInRpbWVcIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX19kYXRldGltZVwiXV0sIFtbMSwgXCJkYXRldGltZVwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoOCwgbnVsbCwgW1wiXCIsIFwiXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDksIDAsIG51bGwsIG51bGwsIDEsIFwiaDNcIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX190aXRsZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTAsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IF92LmNvbnRleHQuJGltcGxpY2l0LmhyZWY7IF9jayhfdiwgMCwgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IF92LmNvbnRleHQuJGltcGxpY2l0LnRodW1iOyBfY2soX3YsIDIsIDAsIGN1cnJWYWxfMSk7IHZhciBjdXJyVmFsXzIgPSBfdi5jb250ZXh0LiRpbXBsaWNpdC5kdXJhdGlvbjsgX2NrKF92LCA0LCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gX3YuY29udGV4dC4kaW1wbGljaXQubGlrZTsgX2NrKF92LCA2LCAwLCBjdXJyVmFsXzMpOyB2YXIgY3VyclZhbF80ID0gX3YuY29udGV4dC4kaW1wbGljaXQuZGF0ZTsgX2NrKF92LCA3LCAwLCBjdXJyVmFsXzQpOyB2YXIgY3VyclZhbF81ID0gX3YuY29udGV4dC4kaW1wbGljaXQuZGF0ZTsgX2NrKF92LCA4LCAwLCBjdXJyVmFsXzUpOyB2YXIgY3VyclZhbF82ID0gX3YuY29udGV4dC4kaW1wbGljaXQudGl0bGU7IF9jayhfdiwgMTAsIDAsIGN1cnJWYWxfNik7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMywgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX193cmFwcGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8xKSksIGkxLsm1ZGlkKDIsIDgwMjgxNiwgbnVsbCwgMCwgaTIuTmdGb3JPZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmLCBpMS5JdGVyYWJsZURpZmZlcnNdLCB7IG5nRm9yT2Y6IFswLCBcIm5nRm9yT2ZcIl0gfSwgbnVsbCksIGkxLsm1cGlkKDEzMTA3MiwgaTIuQXN5bmNQaXBlLCBbaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBpMS7JtXVudihfdiwgMiwgMCwgaTEuybVub3YoX3YsIDMpLnRyYW5zZm9ybShfY28uaXRlbXMpKTsgX2NrKF92LCAyLCAwLCBjdXJyVmFsXzApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJ2aWRlby1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9WaWRlb1JpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkzLlZpZGVvUmliYm9uQ29tcG9uZW50LCBbaTQuUm91dGVyLCBpNS5BUElTZXJ2aWNlLCBpNi5Zb3VUdWJlU2VydmljZV0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBWaWRlb1JpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJ2aWRlby1yaWJib25cIiwgaTMuVmlkZW9SaWJib25Db21wb25lbnQsIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFZpZGVvUmliYm9uQ29tcG9uZW50TmdGYWN0b3J5IGFzIFZpZGVvUmliYm9uQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9tYWluLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9wdWJfY2FyZF9wdWJfY2FyZC5jb21wb25lbnQubmdmYWN0b3J5LF9hbmd1bGFyX3JvdXRlcixfYW5ndWxhcl9jb21tb24sXy4uX3B1Yl9jYXJkX3B1Yl9jYXJkLmNvbXBvbmVudCxfLi5fLi5fcGlwZXNfdGltZXN0YW1wX3RpbWVzdGFtcCxfLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LF8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLF8uLl8uLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSxfcGFnZV9tYWluLmNvbXBvbmVudCxfLi5fLi5fc2VydmljZXNfcHVibGljYXRpb25fcHVibGljYXRpb24uc2VydmljZSBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX21haW4uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3B1Yl9jYXJkX3B1Yl9jYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfLi5fcHViX2NhcmRfcHViX2NhcmQuY29tcG9uZW50LF8uLl8uLl9waXBlc190aW1lc3RhbXBfdGltZXN0YW1wLF8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50LF8uLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLF9wYWdlX21haW4uY29tcG9uZW50LF8uLl8uLl9zZXJ2aWNlc19wdWJsaWNhdGlvbl9wdWJsaWNhdGlvbi5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtbWFpbi5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vLi4vcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uLy4uL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIi4uLy4uLy4uL3BpcGVzL3RpbWVzdGFtcC90aW1lc3RhbXBcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuLi8uLi92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk4IGZyb20gXCIuLi8uLi92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTkgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTEwIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTExIGZyb20gXCIuL3BhZ2UtbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkxMiBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcHVibGljYXRpb24vcHVibGljYXRpb24uc2VydmljZVwiO1xudmFyIHN0eWxlc19QYWdlTWFpbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZU1haW5Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZU1haW5Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlTWFpbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VNYWluQ29tcG9uZW50IH07XG5mdW5jdGlvbiBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzEoX2wpIHtcbiAgICByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZFwiXV0sIFtbMiwgXCJiai1ncmlkX19pdGVtLS13aWRlXCIsIG51bGxdLCBbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDEpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIGkyLlZpZXdfUHViQ2FyZENvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX1B1YkNhcmRDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNjcxNzQ0LCBudWxsLCAwLCBpMy5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMy5Sb3V0ZXIsIGkzLkFjdGl2YXRlZFJvdXRlLCBpNC5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCBpMS7JtXBwZCgyLCAyKSwgaTEuybVwYWQoMywgMiksIGkxLsm1ZGlkKDQsIDQ5MTUyLCBudWxsLCAwLCBpNS5QdWJDYXJkQ29tcG9uZW50LCBbXSwgeyB2YWx1ZTogWzAsIFwidmFsdWVcIl0gfSwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8zID0gX2NrKF92LCAzLCAwLCBpMS7JtXVudihfdiwgMSwgMCwgX2NrKF92LCAyLCAwLCBpMS7JtW5vdihfdi5wYXJlbnQsIDApLCBfdi5jb250ZXh0LiRpbXBsaWNpdC50cywgXCJVUkxcIikpLCBfdi5jb250ZXh0LiRpbXBsaWNpdC51cmwpOyBfY2soX3YsIDEsIDAsIGN1cnJWYWxfMyk7IHZhciBjdXJyVmFsXzQgPSBfdi5jb250ZXh0LiRpbXBsaWNpdDsgX2NrKF92LCA0LCAwLCBjdXJyVmFsXzQpOyB9LCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gKF92LmNvbnRleHQuJGltcGxpY2l0LndlaWdodCA+IDEpOyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDEpLnRhcmdldDsgdmFyIGN1cnJWYWxfMiA9IGkxLsm1bm92KF92LCAxKS5ocmVmOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCwgY3VyclZhbF8xLCBjdXJyVmFsXzIpOyB9KTtcbn1cbmZ1bmN0aW9uIFZpZXdfUGFnZU1haW5Db21wb25lbnRfMihfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJhMVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoMSwgbnVsbCwgW1wiXCIsIFwiXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gX3YuY29udGV4dC4kaW1wbGljaXQudGl0bGU7IF9jayhfdiwgMSwgMCwgY3VyclZhbF8wKTsgfSk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtpMS7JtXBpZCgwLCBpNi5UaW1lc3RhbXBQaXBlLCBbXSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDEzLCBcIm1haW5cIiwgW1tcImNsYXNzXCIsIFwiYmotcGFnZV9fYm94IGJqLXBhZ2VfX2JveC0tZ3JpZDJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAyLCBudWxsLCBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzEpKSwgaTEuybVkaWQoMywgODAyODE2LCBudWxsLCAwLCBpNC5OZ0Zvck9mLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWYsIGkxLkl0ZXJhYmxlRGlmZmVyc10sIHsgbmdGb3JPZjogWzAsIFwibmdGb3JPZlwiXSB9LCBudWxsKSwgaTEuybVwaWQoMTMxMDcyLCBpNC5Bc3luY1BpcGUsIFtpMS5DaGFuZ2VEZXRlY3RvclJlZl0pLCAoX2woKSgpLCBpMS7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCA5LCBcIm1haW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNiwgMCwgbnVsbCwgbnVsbCwgNSwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wYWdlX19hc2lkZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNywgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMVwiLCBbW1wiY2xhc3NcIiwgXCJjb2x1bW4taGVhZGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRFxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzOFwiXSkpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgVmlld19QYWdlTWFpbkNvbXBvbmVudF8yKSksIGkxLsm1ZGlkKDEwLCA4MDI4MTYsIG51bGwsIDAsIGk0Lk5nRm9yT2YsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZiwgaTEuSXRlcmFibGVEaWZmZXJzXSwgeyBuZ0Zvck9mOiBbMCwgXCJuZ0Zvck9mXCJdIH0sIG51bGwpLCBpMS7JtXBpZCgxMzEwNzIsIGk0LkFzeW5jUGlwZSwgW2kxLkNoYW5nZURldGVjdG9yUmVmXSksIChfbCgpKCksIGkxLsm1ZWxkKDEyLCAwLCBudWxsLCBudWxsLCAxLCBcInZpZGVvLXJpYmJvblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTcuVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8wLCBpNy5SZW5kZXJUeXBlX1ZpZGVvUmliYm9uQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEzLCAxMTQ2ODgsIG51bGwsIDAsIGk4LlZpZGVvUmliYm9uQ29tcG9uZW50LCBbaTMuUm91dGVyLCBpOS5BUElTZXJ2aWNlLCBpMTAuWW91VHViZVNlcnZpY2VdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMTQsIDAsIG51bGwsIG51bGwsIDAsIFwibWFpblwiLCBbW1wiY2xhc3NcIiwgXCJiai1wYWdlX19ib3ggYmotcGFnZV9fYm94LS1ncmlkM1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBpMS7JtXVudihfdiwgMywgMCwgaTEuybVub3YoX3YsIDQpLnRyYW5zZm9ybShfY28ucHVibGljYXRpb25zKSk7IF9jayhfdiwgMywgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IGkxLsm1dW52KF92LCAxMCwgMCwgaTEuybVub3YoX3YsIDExKS50cmFuc2Zvcm0oX2NvLnB1YmxpY2F0aW9ucykpOyBfY2soX3YsIDEwLCAwLCBjdXJyVmFsXzEpOyBfY2soX3YsIDEzLCAwKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYWluQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1tYWluXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZU1haW5Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMTEuUGFnZU1haW5Db21wb25lbnQsIFtpMy5Sb3V0ZXIsIGkxMi5QdWJsaWNhdGlvblNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1tYWluXCIsIGkxMS5QYWdlTWFpbkNvbXBvbmVudCwgVmlld19QYWdlTWFpbkNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5uby1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtYWxpZ246Y2VudGVyfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV8xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF8uLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLF9wYWdlXzEwMS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV8xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF8uLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLF9wYWdlXzEwMS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS0xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uLy4uL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMveW91dHViZS95b3V0dWJlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuL3BhZ2UtMTAxLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19QYWdlMTAxQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlMTAxQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2UxMDFDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlMTAxQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZTEwMUNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZTEwMUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1hc2lkZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRFxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzOFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAxLCBcImgyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJWaWRlb1wiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCAxLCBcInZpZGVvLXJpYmJvblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTIuVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX1ZpZGVvUmliYm9uQ29tcG9uZW50KSksIGkxLsm1ZGlkKDYsIDExNDY4OCwgbnVsbCwgMCwgaTMuVmlkZW9SaWJib25Db21wb25lbnQsIFtpNC5Sb3V0ZXIsIGk1LkFQSVNlcnZpY2UsIGk2LllvdVR1YmVTZXJ2aWNlXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDYsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZTEwMUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtMTAxXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2UxMDFDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlMTAxQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTcuUGFnZTEwMUNvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlMTAxQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtMTAxXCIsIGk3LlBhZ2UxMDFDb21wb25lbnQsIFZpZXdfUGFnZTEwMUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZTEwMUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlMTAxQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvMTAxL3BhZ2UtMTAxLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlQ3VycmVuY2llc0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlQ3VycmVuY2llc0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQ3VycmVuY2llc0NvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1jdXJyZW5jaWVzXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlQ3VycmVuY2llc0NvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlQ3VycmVuY2llc0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWN1cnJlbmNpZXNcIiwgaTIuUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIFZpZXdfUGFnZUN1cnJlbmNpZXNDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hcnRpY2xlLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYXJ0aWNsZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vYXJ0aWNsZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfQXJ0aWNsZUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19BcnRpY2xlQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0FydGljbGVDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW10sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19BcnRpY2xlQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19BcnRpY2xlQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLkFydGljbGVDb21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJhcnRpY2xlXCIsIGkyLkFydGljbGVDb21wb25lbnQsIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSBhcyBBcnRpY2xlQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2N1cnJlbmNpZXNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF9wYWdlX2N1cnJlbmNpZXNfaXRlbS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlcixfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uLy4uL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJhcnRpY2xlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBpMi5WaWV3X0FydGljbGVDb21wb25lbnRfMCwgaTIuUmVuZGVyVHlwZV9BcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTMuQXJ0aWNsZUNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImFzaWRlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1jdXJyZW5jaWVzLWl0ZW1cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTUuUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWN1cnJlbmNpZXMtaXRlbVwiLCBpNS5QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQsIFZpZXdfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfZXZlbnRzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfZXZlbnRzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1ldmVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VFdmVudHNDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VFdmVudHNDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUV2ZW50c0NvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VFdmVudHNDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlRXZlbnRzQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXZlbnRzQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtdLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV2ZW50c0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtZXZlbnRzXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VFdmVudHNDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlRXZlbnRzQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUV2ZW50c0NvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlRXZlbnRzQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtZXZlbnRzXCIsIGkyLlBhZ2VFdmVudHNDb21wb25lbnQsIFZpZXdfUGFnZUV2ZW50c0NvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUV2ZW50c0NvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlRXZlbnRzQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlcixfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF9wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uLy4uL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImFydGljbGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGkyLlZpZXdfQXJ0aWNsZUNvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMy5BcnRpY2xlQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDAsIFwiYXNpZGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXZlbnRzSXRlbUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtZXZlbnRzLWl0ZW1cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGk1LlBhZ2VFdmVudHNJdGVtQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtZXZlbnRzLWl0ZW1cIiwgaTUuUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsIFZpZXdfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VFeGNoYW5nZXNDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFeGNoYW5nZXNDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLWV4Y2hhbmdlc1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VFeGNoYW5nZXNDb21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWV4Y2hhbmdlc1wiLCBpMi5QYWdlRXhjaGFuZ2VzQ29tcG9uZW50LCBWaWV3X1BhZ2VFeGNoYW5nZXNDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VFeGNoYW5nZXNDb21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlcixfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJhcnRpY2xlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBpMi5WaWV3X0FydGljbGVDb21wb25lbnRfMCwgaTIuUmVuZGVyVHlwZV9BcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTMuQXJ0aWNsZUNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImFzaWRlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLWV4Y2hhbmdlcy1pdGVtXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpNS5QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWV4Y2hhbmdlcy1pdGVtXCIsIGk1LlBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50LCBWaWV3X1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2ljby5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9pY28uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2ljby5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9pY28uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWljby5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLWljby5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZUlDT0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUlDT0NvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlSUNPQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUlDT0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VJQ09Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VJQ09Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW10sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlSUNPQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1pY29cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUlDT0NvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VJQ09Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlSUNPQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VJQ09Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1pY29cIiwgaTIuUGFnZUlDT0NvbXBvbmVudCwgVmlld19QYWdlSUNPQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlSUNPQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VJQ09Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9pY29faXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF9wYWdlX2ljb19pdGVtLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2ljb19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4vcGFnZS1pY28taXRlbS5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUGFnZUlDT0l0ZW1Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VJQ09JdGVtQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VJQ09JdGVtQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUlDT0l0ZW1Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlSUNPSXRlbUNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUlDT0l0ZW1Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTIuVmlld19BcnRpY2xlQ29tcG9uZW50XzAsIGkyLlJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkzLkFydGljbGVDb21wb25lbnQsIFtpNC5Sb3V0ZXJdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhc2lkZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VJQ09JdGVtQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1pY28taXRlbVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlSUNPSXRlbUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VJQ09JdGVtQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTUuUGFnZUlDT0l0ZW1Db21wb25lbnQsIFtpNC5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUlDT0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1pY28taXRlbVwiLCBpNS5QYWdlSUNPSXRlbUNvbXBvbmVudCwgVmlld19QYWdlSUNPSXRlbUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUlDT0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUlDT0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28taXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX21hcmtldHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfbWFya2V0cy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfbWFya2V0cy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9tYXJrZXRzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtbWFya2V0cy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZU1hcmtldHNDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VNYXJrZXRzQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZU1hcmtldHNDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0NvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZU1hcmtldHNDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW10sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlTWFya2V0c0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtbWFya2V0c1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlTWFya2V0c0NvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZU1hcmtldHNDb21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZU1hcmtldHNDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1tYXJrZXRzXCIsIGkyLlBhZ2VNYXJrZXRzQ29tcG9uZW50LCBWaWV3X1BhZ2VNYXJrZXRzQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlTWFya2V0c0NvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlTWFya2V0c0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlcixfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlTWFya2V0c0l0ZW1Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTIuVmlld19BcnRpY2xlQ29tcG9uZW50XzAsIGkyLlJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkzLkFydGljbGVDb21wb25lbnQsIFtpNC5Sb3V0ZXJdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhc2lkZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtbWFya2V0cy1pdGVtXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGk1LlBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlTWFya2V0c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1tYXJrZXRzLWl0ZW1cIiwgaTUuUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50LCBWaWV3X1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIubm8tY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcn1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9zZWN0aW9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX3NlY3Rpb24uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9zZWN0aW9uLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLXNlY3Rpb24uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1zZWN0aW9uLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19QYWdlU2VjdGlvbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZVNlY3Rpb25Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZVNlY3Rpb25Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlU2VjdGlvbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VTZWN0aW9uQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlU2VjdGlvbkNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1hc2lkZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQyMFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXCJdKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZVNlY3Rpb25Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLXNlY3Rpb25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZVNlY3Rpb25Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlU2VjdGlvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VTZWN0aW9uQ29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VTZWN0aW9uQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2Utc2VjdGlvblwiLCBpMi5QYWdlU2VjdGlvbkNvbXBvbmVudCwgVmlld19QYWdlU2VjdGlvbkNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZVNlY3Rpb25Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZVNlY3Rpb25Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5uby1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtYWxpZ246Y2VudGVyfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2FydGljbGUuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLWFydGljbGUuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX1BhZ2VBcnRpY2xlQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlQXJ0aWNsZUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlQXJ0aWNsZUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VBcnRpY2xlQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUFydGljbGVDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VBcnRpY2xlQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAyLCBcImFzaWRlXCIsIFtbXCJjbGFzc1wiLCBcImJqLWFzaWRlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAxLCBcImgyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDIxXFx1MDQ0MlxcdTA0MzBcXHUwNDQyXFx1MDQ0Q1xcdTA0NEZcIl0pKV0sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VBcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUFydGljbGVDb21wb25lbnQsIFtdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1hcnRpY2xlXCIsIGkyLlBhZ2VBcnRpY2xlQ29tcG9uZW50LCBWaWV3X1BhZ2VBcnRpY2xlQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2FydGljbGUvcGFnZS1hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLm5vLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXJ9XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9ub19jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9ub19jb250ZW50LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9ub19jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9ub19jb250ZW50LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9uby1jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL25vLWNvbnRlbnQuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX05vQ29udGVudENvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfTm9Db250ZW50Q29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX05vQ29udGVudENvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX05vQ29udGVudENvbXBvbmVudCBhcyBSZW5kZXJUeXBlX05vQ29udGVudENvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTm9Db250ZW50Q29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAzLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcIm5vLWNvbnRlbnRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCI0MDRcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJiclwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUGFnZSBub3QgZm91bnRcIl0pKV0sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19Ob0NvbnRlbnRDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJuby1jb250ZW50XCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X05vQ29udGVudENvbXBvbmVudF8wLCBSZW5kZXJUeXBlX05vQ29udGVudENvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTIuTm9Db250ZW50Q29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBudWxsLCBudWxsKTsgfVxudmFyIE5vQ29udGVudENvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJuby1jb250ZW50XCIsIGkyLk5vQ29udGVudENvbXBvbmVudCwgVmlld19Ob0NvbnRlbnRDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IE5vQ29udGVudENvbXBvbmVudE5nRmFjdG9yeSBhcyBOb0NvbnRlbnRDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIuYXV0aC1mb3JtLXRpdGxlW19uZ2NvbnRlbnQtJUNPTVAlXXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXJ9LmF1dGgtZm9ybVtfbmdjb250ZW50LSVDT01QJV17bWluLXdpZHRoOjMwMHB4fS5hdXRoLWZvcm0tcm93W19uZ2NvbnRlbnQtJUNPTVAlXXttYXJnaW4tdG9wOjEwcHg7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfS5hdXRoLWZvcm0tcm93W19uZ2NvbnRlbnQtJUNPTVAlXTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjB9LmF1dGgtZm9ybS1idXR0b25bX25nY29udGVudC0lQ09NUCVde21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9hdXRoX2RpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGQsX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nLF9hbmd1bGFyX2Zvcm1zLF8uLl8uLl8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZF90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSxfYW5ndWxhcl9tYXRlcmlhbF9jb3JlLF9hbmd1bGFyX21hdGVyaWFsX2lucHV0LF9hbmd1bGFyX2Nka19wbGF0Zm9ybSxfYW5ndWxhcl9jb21tb24sXy4uXy4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9idXR0b25fdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uLF9hbmd1bGFyX2Nka19hMTF5LF9hdXRoX2RpYWxvZy5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfYXV0aF9kaWFsb2cuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkLF9hbmd1bGFyX21hdGVyaWFsX2RpYWxvZyxfYW5ndWxhcl9mb3JtcyxfLi5fLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGRfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2FuZ3VsYXJfbWF0ZXJpYWxfY29yZSxfYW5ndWxhcl9tYXRlcmlhbF9pbnB1dCxfYW5ndWxhcl9jZGtfcGxhdGZvcm0sX2FuZ3VsYXJfY29tbW9uLF8uLl8uLl8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9hbmd1bGFyX21hdGVyaWFsX2J1dHRvbixfYW5ndWxhcl9jZGtfYTExeSxfYXV0aF9kaWFsb2cuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkL3R5cGluZ3MvaW5kZXgubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2lucHV0XCI7XG5pbXBvcnQgKiBhcyBpOCBmcm9tIFwiQGFuZ3VsYXIvY2RrL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBpOSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9idXR0b24vdHlwaW5ncy9pbmRleC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxMSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBpMTIgZnJvbSBcIkBhbmd1bGFyL2Nkay9hMTF5XCI7XG5pbXBvcnQgKiBhcyBpMTMgZnJvbSBcIi4vYXV0aC1kaWFsb2cuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX0F1dGhEaWFsb2dDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX0F1dGhEaWFsb2dDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMCwgc3R5bGVzOiBzdHlsZXNfQXV0aERpYWxvZ0NvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX0F1dGhEaWFsb2dDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9BdXRoRGlhbG9nQ29tcG9uZW50IH07XG5mdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMShfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQsIFwibWF0LWVycm9yXCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1lcnJvclwiXSwgW1wicm9sZVwiLCBcImFsZXJ0XCJdXSwgW1sxLCBcImlkXCIsIDBdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxLCAxNjM4NCwgW1s0LCA0XV0sIDAsIGkyLk1hdEVycm9yLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJFbWFpbCBpcyBcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJzdHJvbmdcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcInJlcXVpcmVkXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDEpLmlkOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG5mdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMihfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDIsIFwibWF0LWVycm9yXCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1lcnJvclwiXSwgW1wicm9sZVwiLCBcImFsZXJ0XCJdXSwgW1sxLCBcImlkXCIsIDBdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxLCAxNjM4NCwgW1s0LCA0XV0sIDAsIGkyLk1hdEVycm9yLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDEpLmlkOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG5mdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMyhfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQsIFwibWF0LWVycm9yXCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1lcnJvclwiXSwgW1wicm9sZVwiLCBcImFsZXJ0XCJdXSwgW1sxLCBcImlkXCIsIDBdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxLCAxNjM4NCwgW1sxMSwgNF1dLCAwLCBpMi5NYXRFcnJvciwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUGFzc3dvcmQgaXMgXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwic3Ryb25nXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJyZXF1aXJlZFwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5pZDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8wKF9sKSB7XG4gICAgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAyLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybS10aXRsZSBtYXQtZGlhbG9nLXRpdGxlXCJdLCBbXCJtYXQtZGlhbG9nLXRpdGxlXCIsIFwiXCJdXSwgW1s4LCBcImlkXCIsIDBdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxLCA4MTkyMCwgbnVsbCwgMCwgaTMuTWF0RGlhbG9nVGl0bGUsIFtbMiwgaTMuTWF0RGlhbG9nQ29udGFpbmVyXV0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiQXV0aG9yaXphdGlvblwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCA0NiwgXCJmb3JtXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybSBtYXQtZGlhbG9nLWNvbnRlbnRcIl0sIFtcIm1hdC1kaWFsb2ctY29udGVudFwiLCBcIlwiXSwgW1wibm92YWxpZGF0ZVwiLCBcIlwiXV0sIFtbMiwgXCJuZy11bnRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXByaXN0aW5lXCIsIG51bGxdLCBbMiwgXCJuZy1kaXJ0eVwiLCBudWxsXSwgWzIsIFwibmctdmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLXBlbmRpbmdcIiwgbnVsbF1dLCBbW251bGwsIFwibmdTdWJtaXRcIl0sIFtudWxsLCBcInN1Ym1pdFwiXSwgW251bGwsIFwicmVzZXRcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2NvID0gX3YuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKChcInN1Ym1pdFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgNSkub25TdWJtaXQoJGV2ZW50KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcInJlc2V0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8xID0gKGkxLsm1bm92KF92LCA1KS5vblJlc2V0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8xICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJuZ1N1Ym1pdFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMiA9IChfY28ub25TdWJtaXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzIgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDQsIDE2Mzg0LCBudWxsLCAwLCBpNC7JtWJmLCBbXSwgbnVsbCwgbnVsbCksIGkxLsm1ZGlkKDUsIDU0MDY3MiwgbnVsbCwgMCwgaTQuRm9ybUdyb3VwRGlyZWN0aXZlLCBbWzgsIG51bGxdLCBbOCwgbnVsbF1dLCB7IGZvcm06IFswLCBcImZvcm1cIl0gfSwgeyBuZ1N1Ym1pdDogXCJuZ1N1Ym1pdFwiIH0pLCBpMS7JtXByZCgyMDQ4LCBudWxsLCBpNC5Db250cm9sQ29udGFpbmVyLCBudWxsLCBbaTQuRm9ybUdyb3VwRGlyZWN0aXZlXSksIGkxLsm1ZGlkKDcsIDE2Mzg0LCBudWxsLCAwLCBpNC5OZ0NvbnRyb2xTdGF0dXNHcm91cCwgW2k0LkNvbnRyb2xDb250YWluZXJdLCBudWxsLCBudWxsKSwgaTEuybVkaWQoOCwgMTYzODQsIG51bGwsIDAsIGkzLk1hdERpYWxvZ0NvbnRlbnQsIFtdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoOSwgMCwgbnVsbCwgbnVsbCwgMjAsIFwibWF0LWZvcm0tZmllbGRcIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtLXJvdyBtYXQtaW5wdXQtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkXCJdXSwgW1syLCBcIm1hdC1pbnB1dC1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1jYW4tZmxvYXRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtaGlkZS1wbGFjZWhvbGRlclwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtZGlzYWJsZWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb2N1c2VkXCIsIG51bGxdLCBbMiwgXCJtYXQtcHJpbWFyeVwiLCBudWxsXSwgWzIsIFwibWF0LWFjY2VudFwiLCBudWxsXSwgWzIsIFwibWF0LXdhcm5cIiwgbnVsbF0sIFsyLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXV0sIG51bGwsIG51bGwsIGk1LlZpZXdfTWF0Rm9ybUZpZWxkXzAsIGk1LlJlbmRlclR5cGVfTWF0Rm9ybUZpZWxkKSksIGkxLsm1ZGlkKDEwLCA3Mzg5MTg0LCBudWxsLCA3LCBpMi5NYXRGb3JtRmllbGQsIFtpMS5FbGVtZW50UmVmLCBpMS5DaGFuZ2VEZXRlY3RvclJlZiwgWzIsIGk2Lk1BVF9MQUJFTF9HTE9CQUxfT1BUSU9OU11dLCBudWxsLCBudWxsKSwgaTEuybVxdWQoMzM1NTQ0MzIwLCAxLCB7IF9jb250cm9sOiAwIH0pLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDIsIHsgX3BsYWNlaG9sZGVyQ2hpbGQ6IDAgfSksIGkxLsm1cXVkKDMzNTU0NDMyMCwgMywgeyBfbGFiZWxDaGlsZDogMCB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCA0LCB7IF9lcnJvckNoaWxkcmVuOiAxIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDUsIHsgX2hpbnRDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCA2LCB7IF9wcmVmaXhDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCA3LCB7IF9zdWZmaXhDaGlsZHJlbjogMSB9KSwgKF9sKCkoKSwgaTEuybVlbGQoMTgsIDAsIG51bGwsIDEsIDcsIFwiaW5wdXRcIiwgW1tcImNsYXNzXCIsIFwibWF0LWlucHV0LWVsZW1lbnQgbWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbFwiXSwgW1wiZm9ybUNvbnRyb2xOYW1lXCIsIFwiZW1haWxcIl0sIFtcIm1hdElucHV0XCIsIFwiXCJdLCBbXCJwbGFjZWhvbGRlclwiLCBcIkUtbWFpbFwiXSwgW1widHlwZVwiLCBcInRleHRcIl1dLCBbWzIsIFwibmctdW50b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy10b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy1wcmlzdGluZVwiLCBudWxsXSwgWzIsIFwibmctZGlydHlcIiwgbnVsbF0sIFsyLCBcIm5nLXZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1wZW5kaW5nXCIsIG51bGxdLCBbMiwgXCJtYXQtaW5wdXQtc2VydmVyXCIsIG51bGxdLCBbMSwgXCJpZFwiLCAwXSwgWzgsIFwicGxhY2Vob2xkZXJcIiwgMF0sIFs4LCBcImRpc2FibGVkXCIsIDBdLCBbOCwgXCJyZXF1aXJlZFwiLCAwXSwgWzgsIFwicmVhZE9ubHlcIiwgMF0sIFsxLCBcImFyaWEtZGVzY3JpYmVkYnlcIiwgMF0sIFsxLCBcImFyaWEtaW52YWxpZFwiLCAwXSwgWzEsIFwiYXJpYS1yZXF1aXJlZFwiLCAwXV0sIFtbbnVsbCwgXCJpbnB1dFwiXSwgW251bGwsIFwiYmx1clwiXSwgW251bGwsIFwiY29tcG9zaXRpb25zdGFydFwiXSwgW251bGwsIFwiY29tcG9zaXRpb25lbmRcIl0sIFtudWxsLCBcImZvY3VzXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImlucHV0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxOSkuX2hhbmRsZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiYmx1clwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMSA9IChpMS7JtW5vdihfdiwgMTkpLm9uVG91Y2hlZCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMSAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiY29tcG9zaXRpb25zdGFydFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMiA9IChpMS7JtW5vdihfdiwgMTkpLl9jb21wb3NpdGlvblN0YXJ0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8yICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJjb21wb3NpdGlvbmVuZFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMyA9IChpMS7JtW5vdihfdiwgMTkpLl9jb21wb3NpdGlvbkVuZCgkZXZlbnQudGFyZ2V0LnZhbHVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzMgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImJsdXJcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzQgPSAoaTEuybVub3YoX3YsIDI0KS5fZm9jdXNDaGFuZ2VkKGZhbHNlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzQgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImZvY3VzXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF81ID0gKGkxLsm1bm92KF92LCAyNCkuX2ZvY3VzQ2hhbmdlZCh0cnVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzUgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImlucHV0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF82ID0gKGkxLsm1bm92KF92LCAyNCkuX29uSW5wdXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzYgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDE5LCAxNjM4NCwgbnVsbCwgMCwgaTQuRGVmYXVsdFZhbHVlQWNjZXNzb3IsIFtpMS5SZW5kZXJlcjIsIGkxLkVsZW1lbnRSZWYsIFsyLCBpNC5DT01QT1NJVElPTl9CVUZGRVJfTU9ERV1dLCBudWxsLCBudWxsKSwgaTEuybVwcmQoMTAyNCwgbnVsbCwgaTQuTkdfVkFMVUVfQUNDRVNTT1IsIGZ1bmN0aW9uIChwMF8wKSB7IHJldHVybiBbcDBfMF07IH0sIFtpNC5EZWZhdWx0VmFsdWVBY2Nlc3Nvcl0pLCBpMS7JtWRpZCgyMSwgNjcxNzQ0LCBudWxsLCAwLCBpNC5Gb3JtQ29udHJvbE5hbWUsIFtbMywgaTQuQ29udHJvbENvbnRhaW5lcl0sIFs4LCBudWxsXSwgWzgsIG51bGxdLCBbMiwgaTQuTkdfVkFMVUVfQUNDRVNTT1JdXSwgeyBuYW1lOiBbMCwgXCJuYW1lXCJdIH0sIG51bGwpLCBpMS7JtXByZCgyMDQ4LCBudWxsLCBpNC5OZ0NvbnRyb2wsIG51bGwsIFtpNC5Gb3JtQ29udHJvbE5hbWVdKSwgaTEuybVkaWQoMjMsIDE2Mzg0LCBudWxsLCAwLCBpNC5OZ0NvbnRyb2xTdGF0dXMsIFtpNC5OZ0NvbnRyb2xdLCBudWxsLCBudWxsKSwgaTEuybVkaWQoMjQsIDkzMzg4OCwgbnVsbCwgMCwgaTcuTWF0SW5wdXQsIFtpMS5FbGVtZW50UmVmLCBpOC5QbGF0Zm9ybSwgWzIsIGk0Lk5nQ29udHJvbF0sIFsyLCBpNC5OZ0Zvcm1dLCBbMiwgaTQuRm9ybUdyb3VwRGlyZWN0aXZlXSwgaTYuRXJyb3JTdGF0ZU1hdGNoZXIsIFs4LCBudWxsXV0sIHsgcGxhY2Vob2xkZXI6IFswLCBcInBsYWNlaG9sZGVyXCJdLCB0eXBlOiBbMSwgXCJ0eXBlXCJdIH0sIG51bGwpLCBpMS7JtXByZCgyMDQ4LCBbWzEsIDRdXSwgaTIuTWF0Rm9ybUZpZWxkQ29udHJvbCwgbnVsbCwgW2k3Lk1hdElucHV0XSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCA1LCAxLCBudWxsLCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMSkpLCBpMS7JtWRpZCgyNywgMTYzODQsIG51bGwsIDAsIGk5Lk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIDUsIDEsIG51bGwsIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8yKSksIGkxLsm1ZGlkKDI5LCAxNjM4NCwgbnVsbCwgMCwgaTkuTmdJZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmXSwgeyBuZ0lmOiBbMCwgXCJuZ0lmXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgzMCwgMCwgbnVsbCwgbnVsbCwgMTgsIFwibWF0LWZvcm0tZmllbGRcIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtLXJvdyBtYXQtaW5wdXQtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkXCJdXSwgW1syLCBcIm1hdC1pbnB1dC1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1jYW4tZmxvYXRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtaGlkZS1wbGFjZWhvbGRlclwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtZGlzYWJsZWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb2N1c2VkXCIsIG51bGxdLCBbMiwgXCJtYXQtcHJpbWFyeVwiLCBudWxsXSwgWzIsIFwibWF0LWFjY2VudFwiLCBudWxsXSwgWzIsIFwibWF0LXdhcm5cIiwgbnVsbF0sIFsyLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXV0sIG51bGwsIG51bGwsIGk1LlZpZXdfTWF0Rm9ybUZpZWxkXzAsIGk1LlJlbmRlclR5cGVfTWF0Rm9ybUZpZWxkKSksIGkxLsm1ZGlkKDMxLCA3Mzg5MTg0LCBudWxsLCA3LCBpMi5NYXRGb3JtRmllbGQsIFtpMS5FbGVtZW50UmVmLCBpMS5DaGFuZ2VEZXRlY3RvclJlZiwgWzIsIGk2Lk1BVF9MQUJFTF9HTE9CQUxfT1BUSU9OU11dLCBudWxsLCBudWxsKSwgaTEuybVxdWQoMzM1NTQ0MzIwLCA4LCB7IF9jb250cm9sOiAwIH0pLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDksIHsgX3BsYWNlaG9sZGVyQ2hpbGQ6IDAgfSksIGkxLsm1cXVkKDMzNTU0NDMyMCwgMTAsIHsgX2xhYmVsQ2hpbGQ6IDAgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgMTEsIHsgX2Vycm9yQ2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgMTIsIHsgX2hpbnRDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCAxMywgeyBfcHJlZml4Q2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgMTQsIHsgX3N1ZmZpeENoaWxkcmVuOiAxIH0pLCAoX2woKSgpLCBpMS7JtWVsZCgzOSwgMCwgbnVsbCwgMSwgNywgXCJpbnB1dFwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtaW5wdXQtZWxlbWVudCBtYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sXCJdLCBbXCJmb3JtQ29udHJvbE5hbWVcIiwgXCJwYXNzd29yZFwiXSwgW1wibWF0SW5wdXRcIiwgXCJcIl0sIFtcInBsYWNlaG9sZGVyXCIsIFwiUGFzc3dvcmRcIl0sIFtcInR5cGVcIiwgXCJwYXNzd29yZFwiXV0sIFtbMiwgXCJuZy11bnRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXByaXN0aW5lXCIsIG51bGxdLCBbMiwgXCJuZy1kaXJ0eVwiLCBudWxsXSwgWzIsIFwibmctdmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLXBlbmRpbmdcIiwgbnVsbF0sIFsyLCBcIm1hdC1pbnB1dC1zZXJ2ZXJcIiwgbnVsbF0sIFsxLCBcImlkXCIsIDBdLCBbOCwgXCJwbGFjZWhvbGRlclwiLCAwXSwgWzgsIFwiZGlzYWJsZWRcIiwgMF0sIFs4LCBcInJlcXVpcmVkXCIsIDBdLCBbOCwgXCJyZWFkT25seVwiLCAwXSwgWzEsIFwiYXJpYS1kZXNjcmliZWRieVwiLCAwXSwgWzEsIFwiYXJpYS1pbnZhbGlkXCIsIDBdLCBbMSwgXCJhcmlhLXJlcXVpcmVkXCIsIDBdXSwgW1tudWxsLCBcImlucHV0XCJdLCBbbnVsbCwgXCJibHVyXCJdLCBbbnVsbCwgXCJjb21wb3NpdGlvbnN0YXJ0XCJdLCBbbnVsbCwgXCJjb21wb3NpdGlvbmVuZFwiXSwgW251bGwsIFwiZm9jdXNcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiaW5wdXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDQwKS5faGFuZGxlSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJibHVyXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8xID0gKGkxLsm1bm92KF92LCA0MCkub25Ub3VjaGVkKCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8xICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJjb21wb3NpdGlvbnN0YXJ0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8yID0gKGkxLsm1bm92KF92LCA0MCkuX2NvbXBvc2l0aW9uU3RhcnQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzIgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImNvbXBvc2l0aW9uZW5kXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8zID0gKGkxLsm1bm92KF92LCA0MCkuX2NvbXBvc2l0aW9uRW5kKCRldmVudC50YXJnZXQudmFsdWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMyAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiYmx1clwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNCA9IChpMS7JtW5vdihfdiwgNDUpLl9mb2N1c0NoYW5nZWQoZmFsc2UpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiZm9jdXNcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzUgPSAoaTEuybVub3YoX3YsIDQ1KS5fZm9jdXNDaGFuZ2VkKHRydWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNSAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiaW5wdXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzYgPSAoaTEuybVub3YoX3YsIDQ1KS5fb25JbnB1dCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoNDAsIDE2Mzg0LCBudWxsLCAwLCBpNC5EZWZhdWx0VmFsdWVBY2Nlc3NvciwgW2kxLlJlbmRlcmVyMiwgaTEuRWxlbWVudFJlZiwgWzIsIGk0LkNPTVBPU0lUSU9OX0JVRkZFUl9NT0RFXV0sIG51bGwsIG51bGwpLCBpMS7JtXByZCgxMDI0LCBudWxsLCBpNC5OR19WQUxVRV9BQ0NFU1NPUiwgZnVuY3Rpb24gKHAwXzApIHsgcmV0dXJuIFtwMF8wXTsgfSwgW2k0LkRlZmF1bHRWYWx1ZUFjY2Vzc29yXSksIGkxLsm1ZGlkKDQyLCA2NzE3NDQsIG51bGwsIDAsIGk0LkZvcm1Db250cm9sTmFtZSwgW1szLCBpNC5Db250cm9sQ29udGFpbmVyXSwgWzgsIG51bGxdLCBbOCwgbnVsbF0sIFsyLCBpNC5OR19WQUxVRV9BQ0NFU1NPUl1dLCB7IG5hbWU6IFswLCBcIm5hbWVcIl0gfSwgbnVsbCksIGkxLsm1cHJkKDIwNDgsIG51bGwsIGk0Lk5nQ29udHJvbCwgbnVsbCwgW2k0LkZvcm1Db250cm9sTmFtZV0pLCBpMS7JtWRpZCg0NCwgMTYzODQsIG51bGwsIDAsIGk0Lk5nQ29udHJvbFN0YXR1cywgW2k0Lk5nQ29udHJvbF0sIG51bGwsIG51bGwpLCBpMS7JtWRpZCg0NSwgOTMzODg4LCBudWxsLCAwLCBpNy5NYXRJbnB1dCwgW2kxLkVsZW1lbnRSZWYsIGk4LlBsYXRmb3JtLCBbMiwgaTQuTmdDb250cm9sXSwgWzIsIGk0Lk5nRm9ybV0sIFsyLCBpNC5Gb3JtR3JvdXBEaXJlY3RpdmVdLCBpNi5FcnJvclN0YXRlTWF0Y2hlciwgWzgsIG51bGxdXSwgeyBwbGFjZWhvbGRlcjogWzAsIFwicGxhY2Vob2xkZXJcIl0sIHR5cGU6IFsxLCBcInR5cGVcIl0gfSwgbnVsbCksIGkxLsm1cHJkKDIwNDgsIFtbOCwgNF1dLCBpMi5NYXRGb3JtRmllbGRDb250cm9sLCBudWxsLCBbaTcuTWF0SW5wdXRdKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIDUsIDEsIG51bGwsIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8zKSksIGkxLsm1ZGlkKDQ4LCAxNjM4NCwgbnVsbCwgMCwgaTkuTmdJZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmXSwgeyBuZ0lmOiBbMCwgXCJuZ0lmXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg0OSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJpbnB1dFwiLCBbW1wiaGlkZGVuXCIsIFwiXCJdLCBbXCJ0eXBlXCIsIFwic3VibWl0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg1MCwgMCwgbnVsbCwgbnVsbCwgNSwgXCJtYXQtZGlhbG9nLWFjdGlvbnNcIiwgW1tcImNsYXNzXCIsIFwibWF0LWRpYWxvZy1hY3Rpb25zXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg1MSwgMTYzODQsIG51bGwsIDAsIGkzLk1hdERpYWxvZ0FjdGlvbnMsIFtdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNTIsIDAsIG51bGwsIG51bGwsIDMsIFwiYnV0dG9uXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybS1idXR0b24gbWF0LWJ1dHRvblwiXSwgW1wiY29sb3JcIiwgXCJwcmltYXJ5XCJdLCBbXCJtYXQtYnV0dG9uXCIsIFwiXCJdLCBbXCJ0eXBlXCIsIFwic3VibWl0XCJdXSwgW1s4LCBcImRpc2FibGVkXCIsIDBdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9jbyA9IF92LmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChfY28ub25TdWJtaXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBpMTAuVmlld19NYXRCdXR0b25fMCwgaTEwLlJlbmRlclR5cGVfTWF0QnV0dG9uKSksIGkxLsm1ZGlkKDUzLCAxODAyMjQsIG51bGwsIDAsIGkxMS5NYXRCdXR0b24sIFtpMS5FbGVtZW50UmVmLCBpOC5QbGF0Zm9ybSwgaTEyLkZvY3VzTW9uaXRvcl0sIHsgZGlzYWJsZWQ6IFswLCBcImRpc2FibGVkXCJdLCBjb2xvcjogWzEsIFwiY29sb3JcIl0gfSwgbnVsbCksIGkxLsm1ZGlkKDU0LCAxNjM4NCwgbnVsbCwgMCwgaTExLk1hdEJ1dHRvbkNzc01hdFN0eWxlciwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgMCwgW1wiU3VibWl0XCJdKSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyBfY2soX3YsIDEsIDApOyB2YXIgY3VyclZhbF84ID0gX2NvLmF1dGhGb3JtOyBfY2soX3YsIDUsIDAsIGN1cnJWYWxfOCk7IHZhciBjdXJyVmFsXzQyID0gXCJlbWFpbFwiOyBfY2soX3YsIDIxLCAwLCBjdXJyVmFsXzQyKTsgdmFyIGN1cnJWYWxfNDMgPSBcIkUtbWFpbFwiOyB2YXIgY3VyclZhbF80NCA9IFwidGV4dFwiOyBfY2soX3YsIDI0LCAwLCBjdXJyVmFsXzQzLCBjdXJyVmFsXzQ0KTsgdmFyIGN1cnJWYWxfNDUgPSBfY28uYXV0aEZvcm0uY29udHJvbHMuZW1haWwuaGFzRXJyb3IoXCJyZXF1aXJlZFwiKTsgX2NrKF92LCAyNywgMCwgY3VyclZhbF80NSk7IHZhciBjdXJyVmFsXzQ2ID0gX2NvLmF1dGhGb3JtLmNvbnRyb2xzLmVtYWlsLmhhc0Vycm9yKFwiZW1haWxcIik7IF9jayhfdiwgMjksIDAsIGN1cnJWYWxfNDYpOyB2YXIgY3VyclZhbF84MCA9IFwicGFzc3dvcmRcIjsgX2NrKF92LCA0MiwgMCwgY3VyclZhbF84MCk7IHZhciBjdXJyVmFsXzgxID0gXCJQYXNzd29yZFwiOyB2YXIgY3VyclZhbF84MiA9IFwicGFzc3dvcmRcIjsgX2NrKF92LCA0NSwgMCwgY3VyclZhbF84MSwgY3VyclZhbF84Mik7IHZhciBjdXJyVmFsXzgzID0gX2NvLmF1dGhGb3JtLmNvbnRyb2xzLnBhc3N3b3JkLmhhc0Vycm9yKFwicmVxdWlyZWRcIik7IF9jayhfdiwgNDgsIDAsIGN1cnJWYWxfODMpOyB2YXIgY3VyclZhbF84NSA9IF9jby5hdXRoRm9ybS5pbnZhbGlkOyB2YXIgY3VyclZhbF84NiA9IFwicHJpbWFyeVwiOyBfY2soX3YsIDUzLCAwLCBjdXJyVmFsXzg1LCBjdXJyVmFsXzg2KTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5pZDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NVbnRvdWNoZWQ7IHZhciBjdXJyVmFsXzIgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1RvdWNoZWQ7IHZhciBjdXJyVmFsXzMgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1ByaXN0aW5lOyB2YXIgY3VyclZhbF80ID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NEaXJ0eTsgdmFyIGN1cnJWYWxfNSA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzVmFsaWQ7IHZhciBjdXJyVmFsXzYgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc0ludmFsaWQ7IHZhciBjdXJyVmFsXzcgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1BlbmRpbmc7IF9jayhfdiwgMywgMCwgY3VyclZhbF8xLCBjdXJyVmFsXzIsIGN1cnJWYWxfMywgY3VyclZhbF80LCBjdXJyVmFsXzUsIGN1cnJWYWxfNiwgY3VyclZhbF83KTsgdmFyIGN1cnJWYWxfOSA9IGkxLsm1bm92KF92LCAxMCkuX2NvbnRyb2wuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfMTAgPSBpMS7JtW5vdihfdiwgMTApLl9jb250cm9sLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzExID0gaTEuybVub3YoX3YsIDEwKS5fY2FuTGFiZWxGbG9hdDsgdmFyIGN1cnJWYWxfMTIgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRMYWJlbEZsb2F0KCk7IHZhciBjdXJyVmFsXzEzID0gaTEuybVub3YoX3YsIDEwKS5faGlkZUNvbnRyb2xQbGFjZWhvbGRlcigpOyB2YXIgY3VyclZhbF8xNCA9IGkxLsm1bm92KF92LCAxMCkuX2NvbnRyb2wuZGlzYWJsZWQ7IHZhciBjdXJyVmFsXzE1ID0gaTEuybVub3YoX3YsIDEwKS5fY29udHJvbC5mb2N1c2VkOyB2YXIgY3VyclZhbF8xNiA9IChpMS7JtW5vdihfdiwgMTApLmNvbG9yID09IFwicHJpbWFyeVwiKTsgdmFyIGN1cnJWYWxfMTcgPSAoaTEuybVub3YoX3YsIDEwKS5jb2xvciA9PSBcImFjY2VudFwiKTsgdmFyIGN1cnJWYWxfMTggPSAoaTEuybVub3YoX3YsIDEwKS5jb2xvciA9PSBcIndhcm5cIik7IHZhciBjdXJyVmFsXzE5ID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInVudG91Y2hlZFwiKTsgdmFyIGN1cnJWYWxfMjAgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKTsgdmFyIGN1cnJWYWxfMjEgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwicHJpc3RpbmVcIik7IHZhciBjdXJyVmFsXzIyID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcImRpcnR5XCIpOyB2YXIgY3VyclZhbF8yMyA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKTsgdmFyIGN1cnJWYWxfMjQgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwiaW52YWxpZFwiKTsgdmFyIGN1cnJWYWxfMjUgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwicGVuZGluZ1wiKTsgX2NrKF92LCA5LCAxLCBbY3VyclZhbF85LCBjdXJyVmFsXzEwLCBjdXJyVmFsXzExLCBjdXJyVmFsXzEyLCBjdXJyVmFsXzEzLCBjdXJyVmFsXzE0LCBjdXJyVmFsXzE1LCBjdXJyVmFsXzE2LCBjdXJyVmFsXzE3LCBjdXJyVmFsXzE4LCBjdXJyVmFsXzE5LCBjdXJyVmFsXzIwLCBjdXJyVmFsXzIxLCBjdXJyVmFsXzIyLCBjdXJyVmFsXzIzLCBjdXJyVmFsXzI0LCBjdXJyVmFsXzI1XSk7IHZhciBjdXJyVmFsXzI2ID0gaTEuybVub3YoX3YsIDIzKS5uZ0NsYXNzVW50b3VjaGVkOyB2YXIgY3VyclZhbF8yNyA9IGkxLsm1bm92KF92LCAyMykubmdDbGFzc1RvdWNoZWQ7IHZhciBjdXJyVmFsXzI4ID0gaTEuybVub3YoX3YsIDIzKS5uZ0NsYXNzUHJpc3RpbmU7IHZhciBjdXJyVmFsXzI5ID0gaTEuybVub3YoX3YsIDIzKS5uZ0NsYXNzRGlydHk7IHZhciBjdXJyVmFsXzMwID0gaTEuybVub3YoX3YsIDIzKS5uZ0NsYXNzVmFsaWQ7IHZhciBjdXJyVmFsXzMxID0gaTEuybVub3YoX3YsIDIzKS5uZ0NsYXNzSW52YWxpZDsgdmFyIGN1cnJWYWxfMzIgPSBpMS7JtW5vdihfdiwgMjMpLm5nQ2xhc3NQZW5kaW5nOyB2YXIgY3VyclZhbF8zMyA9IGkxLsm1bm92KF92LCAyNCkuX2lzU2VydmVyOyB2YXIgY3VyclZhbF8zNCA9IGkxLsm1bm92KF92LCAyNCkuaWQ7IHZhciBjdXJyVmFsXzM1ID0gaTEuybVub3YoX3YsIDI0KS5wbGFjZWhvbGRlcjsgdmFyIGN1cnJWYWxfMzYgPSBpMS7JtW5vdihfdiwgMjQpLmRpc2FibGVkOyB2YXIgY3VyclZhbF8zNyA9IGkxLsm1bm92KF92LCAyNCkucmVxdWlyZWQ7IHZhciBjdXJyVmFsXzM4ID0gaTEuybVub3YoX3YsIDI0KS5yZWFkb25seTsgdmFyIGN1cnJWYWxfMzkgPSAoaTEuybVub3YoX3YsIDI0KS5fYXJpYURlc2NyaWJlZGJ5IHx8IG51bGwpOyB2YXIgY3VyclZhbF80MCA9IGkxLsm1bm92KF92LCAyNCkuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfNDEgPSBpMS7JtW5vdihfdiwgMjQpLnJlcXVpcmVkLnRvU3RyaW5nKCk7IF9jayhfdiwgMTgsIDEsIFtjdXJyVmFsXzI2LCBjdXJyVmFsXzI3LCBjdXJyVmFsXzI4LCBjdXJyVmFsXzI5LCBjdXJyVmFsXzMwLCBjdXJyVmFsXzMxLCBjdXJyVmFsXzMyLCBjdXJyVmFsXzMzLCBjdXJyVmFsXzM0LCBjdXJyVmFsXzM1LCBjdXJyVmFsXzM2LCBjdXJyVmFsXzM3LCBjdXJyVmFsXzM4LCBjdXJyVmFsXzM5LCBjdXJyVmFsXzQwLCBjdXJyVmFsXzQxXSk7IHZhciBjdXJyVmFsXzQ3ID0gaTEuybVub3YoX3YsIDMxKS5fY29udHJvbC5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF80OCA9IGkxLsm1bm92KF92LCAzMSkuX2NvbnRyb2wuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfNDkgPSBpMS7JtW5vdihfdiwgMzEpLl9jYW5MYWJlbEZsb2F0OyB2YXIgY3VyclZhbF81MCA9IGkxLsm1bm92KF92LCAzMSkuX3Nob3VsZExhYmVsRmxvYXQoKTsgdmFyIGN1cnJWYWxfNTEgPSBpMS7JtW5vdihfdiwgMzEpLl9oaWRlQ29udHJvbFBsYWNlaG9sZGVyKCk7IHZhciBjdXJyVmFsXzUyID0gaTEuybVub3YoX3YsIDMxKS5fY29udHJvbC5kaXNhYmxlZDsgdmFyIGN1cnJWYWxfNTMgPSBpMS7JtW5vdihfdiwgMzEpLl9jb250cm9sLmZvY3VzZWQ7IHZhciBjdXJyVmFsXzU0ID0gKGkxLsm1bm92KF92LCAzMSkuY29sb3IgPT0gXCJwcmltYXJ5XCIpOyB2YXIgY3VyclZhbF81NSA9IChpMS7JtW5vdihfdiwgMzEpLmNvbG9yID09IFwiYWNjZW50XCIpOyB2YXIgY3VyclZhbF81NiA9IChpMS7JtW5vdihfdiwgMzEpLmNvbG9yID09IFwid2FyblwiKTsgdmFyIGN1cnJWYWxfNTcgPSBpMS7JtW5vdihfdiwgMzEpLl9zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpOyB2YXIgY3VyclZhbF81OCA9IGkxLsm1bm92KF92LCAzMSkuX3Nob3VsZEZvcndhcmQoXCJ0b3VjaGVkXCIpOyB2YXIgY3VyclZhbF81OSA9IGkxLsm1bm92KF92LCAzMSkuX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKTsgdmFyIGN1cnJWYWxfNjAgPSBpMS7JtW5vdihfdiwgMzEpLl9zaG91bGRGb3J3YXJkKFwiZGlydHlcIik7IHZhciBjdXJyVmFsXzYxID0gaTEuybVub3YoX3YsIDMxKS5fc2hvdWxkRm9yd2FyZChcInZhbGlkXCIpOyB2YXIgY3VyclZhbF82MiA9IGkxLsm1bm92KF92LCAzMSkuX3Nob3VsZEZvcndhcmQoXCJpbnZhbGlkXCIpOyB2YXIgY3VyclZhbF82MyA9IGkxLsm1bm92KF92LCAzMSkuX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpOyBfY2soX3YsIDMwLCAxLCBbY3VyclZhbF80NywgY3VyclZhbF80OCwgY3VyclZhbF80OSwgY3VyclZhbF81MCwgY3VyclZhbF81MSwgY3VyclZhbF81MiwgY3VyclZhbF81MywgY3VyclZhbF81NCwgY3VyclZhbF81NSwgY3VyclZhbF81NiwgY3VyclZhbF81NywgY3VyclZhbF81OCwgY3VyclZhbF81OSwgY3VyclZhbF82MCwgY3VyclZhbF82MSwgY3VyclZhbF82MiwgY3VyclZhbF82M10pOyB2YXIgY3VyclZhbF82NCA9IGkxLsm1bm92KF92LCA0NCkubmdDbGFzc1VudG91Y2hlZDsgdmFyIGN1cnJWYWxfNjUgPSBpMS7JtW5vdihfdiwgNDQpLm5nQ2xhc3NUb3VjaGVkOyB2YXIgY3VyclZhbF82NiA9IGkxLsm1bm92KF92LCA0NCkubmdDbGFzc1ByaXN0aW5lOyB2YXIgY3VyclZhbF82NyA9IGkxLsm1bm92KF92LCA0NCkubmdDbGFzc0RpcnR5OyB2YXIgY3VyclZhbF82OCA9IGkxLsm1bm92KF92LCA0NCkubmdDbGFzc1ZhbGlkOyB2YXIgY3VyclZhbF82OSA9IGkxLsm1bm92KF92LCA0NCkubmdDbGFzc0ludmFsaWQ7IHZhciBjdXJyVmFsXzcwID0gaTEuybVub3YoX3YsIDQ0KS5uZ0NsYXNzUGVuZGluZzsgdmFyIGN1cnJWYWxfNzEgPSBpMS7JtW5vdihfdiwgNDUpLl9pc1NlcnZlcjsgdmFyIGN1cnJWYWxfNzIgPSBpMS7JtW5vdihfdiwgNDUpLmlkOyB2YXIgY3VyclZhbF83MyA9IGkxLsm1bm92KF92LCA0NSkucGxhY2Vob2xkZXI7IHZhciBjdXJyVmFsXzc0ID0gaTEuybVub3YoX3YsIDQ1KS5kaXNhYmxlZDsgdmFyIGN1cnJWYWxfNzUgPSBpMS7JtW5vdihfdiwgNDUpLnJlcXVpcmVkOyB2YXIgY3VyclZhbF83NiA9IGkxLsm1bm92KF92LCA0NSkucmVhZG9ubHk7IHZhciBjdXJyVmFsXzc3ID0gKGkxLsm1bm92KF92LCA0NSkuX2FyaWFEZXNjcmliZWRieSB8fCBudWxsKTsgdmFyIGN1cnJWYWxfNzggPSBpMS7JtW5vdihfdiwgNDUpLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzc5ID0gaTEuybVub3YoX3YsIDQ1KS5yZXF1aXJlZC50b1N0cmluZygpOyBfY2soX3YsIDM5LCAxLCBbY3VyclZhbF82NCwgY3VyclZhbF82NSwgY3VyclZhbF82NiwgY3VyclZhbF82NywgY3VyclZhbF82OCwgY3VyclZhbF82OSwgY3VyclZhbF83MCwgY3VyclZhbF83MSwgY3VyclZhbF83MiwgY3VyclZhbF83MywgY3VyclZhbF83NCwgY3VyclZhbF83NSwgY3VyclZhbF83NiwgY3VyclZhbF83NywgY3VyclZhbF83OCwgY3VyclZhbF83OV0pOyB2YXIgY3VyclZhbF84NCA9IChpMS7JtW5vdihfdiwgNTMpLmRpc2FibGVkIHx8IG51bGwpOyBfY2soX3YsIDUyLCAwLCBjdXJyVmFsXzg0KTsgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYXV0aC1kaWFsb2dcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0F1dGhEaWFsb2dDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNDkxNTIsIG51bGwsIDAsIGkxMy5BdXRoRGlhbG9nQ29tcG9uZW50LCBbaTMuTWF0RGlhbG9nUmVmLCBpNC5Gb3JtQnVpbGRlciwgaTMuTUFUX0RJQUxPR19EQVRBXSwgbnVsbCwgbnVsbCldLCBudWxsLCBudWxsKTsgfVxudmFyIEF1dGhEaWFsb2dDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiYXV0aC1kaWFsb2dcIiwgaTEzLkF1dGhEaWFsb2dDb21wb25lbnQsIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgQXV0aERpYWxvZ0NvbXBvbmVudE5nRmFjdG9yeSBhcyBBdXRoRGlhbG9nQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIuYmotaGVhZGVye3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDBweDt6LWluZGV4OjkwMDtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4xMiksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjI0KX0uYmotaGVhZGVyX19yb3ctd3JhcHBlcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjUwJTtiYWNrZ3JvdW5kOiNmZmZ9LmJqLWhlYWRlcl9fcm93LXdyYXBwZXItLWRhcmt7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1tYWluKTtjb2xvcjojZmZmfS5iai1oZWFkZXJfX3Jvd3ttYXJnaW46MCBhdXRvO2hlaWdodDoxMDAlO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2Rpc3BsYXk6ZmxleH1AbWVkaWEgKG1pbi13aWR0aDoxMDAwcHgpey5iai1oZWFkZXJfX3Jvd3twYWRkaW5nOjAgMCAwIHZhcigtLWluZGVudC1iYXNlKX19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuYmotaGVhZGVyX19yb3d7cGFkZGluZzowIHZhcigtLWluZGVudC1kb3VibGUpfX0uYmotaGVhZGVyX19idXR0b257aGVpZ2h0OjEwMCU7cGFkZGluZzowIHZhcigtLWluZGVudC1iYXNlKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTAwJTtmb250LXN0eWxlOm5vcm1hbDtib3JkZXI6MDtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmU7Y29sb3I6aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3dyYXA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzfS5iai1oZWFkZXJfX2J1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWhvdmVyLWxpZ2h0KX0uYmotaGVhZGVyX19idXR0b24tLWljb257Zm9udC1zaXplOjEuNXJlbX0uYmotaGVhZGVyX19idXR0b24tLWxvZ2lue2Rpc3BsYXk6bm9uZX1AbWVkaWEgKG1pbi13aWR0aDoxMDAwcHgpey5iai1oZWFkZXJfX2J1dHRvbi0tbWVudXtkaXNwbGF5Om5vbmV9LmJqLWhlYWRlcl9fYnV0dG9uLS1sb2dpbntkaXNwbGF5OmZsZXh9fS5iai1oZWFkZXJfX2xvZ297aGVpZ2h0OjU2cHg7d2lkdGg6NTZweDttYXJnaW46LTNweCBhdXRvIDA7cGFkZGluZzowO2JhY2tncm91bmQ6dmFyKC0tY29sb3ItbWFpbik7Ym9yZGVyOjNweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt6LWluZGV4Ojk5OTtjdXJzb3I6cG9pbnRlcn0uYmotaGVhZGVyX19sb2dvIGltZ3toZWlnaHQ6NTAlO3dpZHRoOmF1dG87bWFyZ2luLWxlZnQ6LTUlfUBtZWRpYSAobWluLXdpZHRoOjEwMDBweCl7LmJqLWhlYWRlcl9fbG9nb3toZWlnaHQ6OTRweDt3aWR0aDo5NHB4O21hcmdpbjo0cHggdmFyKC0taW5kZW50LWhhbGYpIDAgMH19LmJqLWhlYWRlcl9fbmF2e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246Zml4ZWQ7dG9wOjUwcHg7Ym90dG9tOjA7aGVpZ2h0OmF1dG87bGVmdDowJTt3aWR0aDo3MHZ3O21heC13aWR0aDozMDBweDttYXJnaW4tcmlnaHQ6YXV0bztiYWNrZ3JvdW5kOnZhcigtLWNvbG9yLW1haW4pO2NvbG9yOiNmZmY7ei1pbmRleDo5NTA7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTA1JSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzfS5iai1oZWFkZXJfX25hdi0tc2hvd3t0cmFuc2Zvcm06dHJhbnNsYXRlKDAlKX0uYmotaGVhZGVyX19uYXYgLmJqLWhlYWRlcl9fYnV0dG9ue2hlaWdodDo1MHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICM1NTU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzExMX1AbWVkaWEgKG1pbi13aWR0aDoxMDAwcHgpey5iai1oZWFkZXJfX25hdntwb3NpdGlvbjpzdGF0aWM7ZGlzcGxheTpmbGV4O3RyYW5zZm9ybTpub25lfS5iai1oZWFkZXJfX25hdi0tc2hvd3t0cmFuc2Zvcm06bm9uZX0uYmotaGVhZGVyX19uYXYgLmJqLWhlYWRlcl9fYnV0dG9ue2JvcmRlci10b3A6MCBub25lO2JvcmRlci1ib3R0b206MCBub25lfX1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2N1cnJlbmNpZXMtcmliYm9uL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgNSwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWN1cnJlbmNpZXMtcmliYm9uX19pdGVtXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAwLCBcImltZ1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImg1XCIsIFtbXCJjbGFzc1wiLCBcImJqLWN1cnJlbmNpZXMtcmliYm9uX19pdGVtXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1jdXJyZW5jaWVzLXJpYmJvbl9fcmF0ZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMCwgbnVsbCwgbnVsbCwgMCwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDUsIDAsIG51bGwsIG51bGwsIDAsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiY3VycmVuY2llcy1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLkN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIEN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcImN1cnJlbmNpZXMtcmliYm9uXCIsIGkyLkN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LCBWaWV3X0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSBhcyBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2N1cnJlbmNpZXMtcmliYm9uL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9oZWFkZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfY3VycmVuY2llc19yaWJib25fY3VycmVuY2llc19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSxfY3VycmVuY2llc19yaWJib25fY3VycmVuY2llc19yaWJib24uY29tcG9uZW50LF9oZWFkZXIuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2hlYWRlci5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9yb3V0ZXIsX2FuZ3VsYXJfY29tbW9uLF9jdXJyZW5jaWVzX3JpYmJvbl9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LF9jdXJyZW5jaWVzX3JpYmJvbl9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQsX2hlYWRlci5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuLi9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX0hlYWRlckNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfSGVhZGVyQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX0hlYWRlckNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX0hlYWRlckNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0hlYWRlckNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfSGVhZGVyQ29tcG9uZW50XzAoX2wpIHtcbiAgICByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQwLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX3Jvdy13cmFwcGVyIGJqLWhlYWRlcl9fcm93LXdyYXBwZXItLWRhcmtcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDM5LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX3Jvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMSwgXCJidXR0b25cIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b24gYmotaGVhZGVyX19idXR0b24tLWljb24gYmotaGVhZGVyX19idXR0b24tLW1lbnVcIl1dLCBudWxsLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2NvID0gX3YuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKChfY28ubmF2QmFyVmlzaWJpbGl0eSA9ICFfY28ubmF2QmFyVmlzaWJpbGl0eSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAwLCBcImlcIiwgW1tcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiXSwgW1wiY2xhc3NcIiwgXCJmYSBmYS1iYXJzXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0LCAwLCBudWxsLCBudWxsLCAyLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19sb2dvXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL1wiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDUpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoNSwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg2LCAwLCBudWxsLCBudWxsLCAwLCBcImltZ1wiLCBbW1wiYWx0XCIsIFwiQml0Sm91cm5hbFwiXSwgW1wic3JjXCIsIFwiL3N2Zy9sb2dvLnN2Z1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNywgMCwgbnVsbCwgbnVsbCwgMjgsIFwibmF2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fbmF2XCJdXSwgW1syLCBcImJqLWhlYWRlcl9fbmF2LS1zaG93XCIsIG51bGxdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg4LCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b25cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgOSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg5LCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDEwLCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MUJcXHUwNDM1XFx1MDQzRFxcdTA0NDJcXHUwNDMwXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDEyLCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b25cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvZXZlbnRzXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMTMpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMTMsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMTQsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxOFxcdTA0MzJcXHUwNDM1XFx1MDQzRFxcdTA0NDJcXHUwNDRCXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDE2LCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b25cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvaWNvXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMTcpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMTcsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMTgsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiSUNPXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDIwLCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b25cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvMTAxXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMjEpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMjEsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMjIsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRFxcdTA0M0VcXHUwNDMyXFx1MDQzOFxcdTA0NDdcXHUwNDNBXFx1MDQzMFxcdTA0M0NcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMjQsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX2J1dHRvblwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9jdXJyZW5jaWVzXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMjUpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMjUsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMjYsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxMlxcdTA0MzBcXHUwNDNCXFx1MDQ0RVxcdTA0NDJcXHUwNDRCXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDI4LCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b25cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvZXhjaGFuZ2VzXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMjkpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMjksIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMzAsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRVxcdTA0MzFcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDNEXFx1MDQzOFxcdTA0M0FcXHUwNDM4XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMyLCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b25cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvbWFya2V0c1wiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDMzKS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDMzLCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDM0LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MTFcXHUwNDM4XFx1MDQ0MFxcdTA0MzZcXHUwNDM4XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDM2LCAwLCBudWxsLCBudWxsLCAxLCBcImJ1dHRvblwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX2J1dHRvbiBiai1oZWFkZXJfX2J1dHRvbi0taWNvblwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMzcsIDAsIG51bGwsIG51bGwsIDAsIFwiaVwiLCBbW1wiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCJdLCBbXCJjbGFzc1wiLCBcImZhIGZhLXNlYXJjaFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMzgsIDAsIG51bGwsIG51bGwsIDIsIFwiYnV0dG9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fYnV0dG9uIGJqLWhlYWRlcl9fYnV0dG9uLS1sb2dpblwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMzksIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MlxcdTA0MzhcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNDEsIDAsIG51bGwsIG51bGwsIDMsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fcm93LXdyYXBwZXJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDQyLCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX3Jvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNDMsIDAsIG51bGwsIG51bGwsIDEsIFwiY3VycmVuY2llcy1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGk0LlZpZXdfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnRfMCwgaTQuUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCg0NCwgMTE0Njg4LCBudWxsLCAwLCBpNS5DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCwgW2kyLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMiA9IFwiL1wiOyBfY2soX3YsIDUsIDAsIGN1cnJWYWxfMik7IHZhciBjdXJyVmFsXzYgPSBcIi9cIjsgX2NrKF92LCA5LCAwLCBjdXJyVmFsXzYpOyB2YXIgY3VyclZhbF85ID0gXCIvZXZlbnRzXCI7IF9jayhfdiwgMTMsIDAsIGN1cnJWYWxfOSk7IHZhciBjdXJyVmFsXzEyID0gXCIvaWNvXCI7IF9jayhfdiwgMTcsIDAsIGN1cnJWYWxfMTIpOyB2YXIgY3VyclZhbF8xNSA9IFwiLzEwMVwiOyBfY2soX3YsIDIxLCAwLCBjdXJyVmFsXzE1KTsgdmFyIGN1cnJWYWxfMTggPSBcIi9jdXJyZW5jaWVzXCI7IF9jayhfdiwgMjUsIDAsIGN1cnJWYWxfMTgpOyB2YXIgY3VyclZhbF8yMSA9IFwiL2V4Y2hhbmdlc1wiOyBfY2soX3YsIDI5LCAwLCBjdXJyVmFsXzIxKTsgdmFyIGN1cnJWYWxfMjQgPSBcIi9tYXJrZXRzXCI7IF9jayhfdiwgMzMsIDAsIGN1cnJWYWxfMjQpOyBfY2soX3YsIDQ0LCAwKTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCA1KS50YXJnZXQ7IHZhciBjdXJyVmFsXzEgPSBpMS7JtW5vdihfdiwgNSkuaHJlZjsgX2NrKF92LCA0LCAwLCBjdXJyVmFsXzAsIGN1cnJWYWxfMSk7IHZhciBjdXJyVmFsXzMgPSBfY28ubmF2QmFyVmlzaWJpbGl0eTsgX2NrKF92LCA3LCAwLCBjdXJyVmFsXzMpOyB2YXIgY3VyclZhbF80ID0gaTEuybVub3YoX3YsIDkpLnRhcmdldDsgdmFyIGN1cnJWYWxfNSA9IGkxLsm1bm92KF92LCA5KS5ocmVmOyBfY2soX3YsIDgsIDAsIGN1cnJWYWxfNCwgY3VyclZhbF81KTsgdmFyIGN1cnJWYWxfNyA9IGkxLsm1bm92KF92LCAxMykudGFyZ2V0OyB2YXIgY3VyclZhbF84ID0gaTEuybVub3YoX3YsIDEzKS5ocmVmOyBfY2soX3YsIDEyLCAwLCBjdXJyVmFsXzcsIGN1cnJWYWxfOCk7IHZhciBjdXJyVmFsXzEwID0gaTEuybVub3YoX3YsIDE3KS50YXJnZXQ7IHZhciBjdXJyVmFsXzExID0gaTEuybVub3YoX3YsIDE3KS5ocmVmOyBfY2soX3YsIDE2LCAwLCBjdXJyVmFsXzEwLCBjdXJyVmFsXzExKTsgdmFyIGN1cnJWYWxfMTMgPSBpMS7JtW5vdihfdiwgMjEpLnRhcmdldDsgdmFyIGN1cnJWYWxfMTQgPSBpMS7JtW5vdihfdiwgMjEpLmhyZWY7IF9jayhfdiwgMjAsIDAsIGN1cnJWYWxfMTMsIGN1cnJWYWxfMTQpOyB2YXIgY3VyclZhbF8xNiA9IGkxLsm1bm92KF92LCAyNSkudGFyZ2V0OyB2YXIgY3VyclZhbF8xNyA9IGkxLsm1bm92KF92LCAyNSkuaHJlZjsgX2NrKF92LCAyNCwgMCwgY3VyclZhbF8xNiwgY3VyclZhbF8xNyk7IHZhciBjdXJyVmFsXzE5ID0gaTEuybVub3YoX3YsIDI5KS50YXJnZXQ7IHZhciBjdXJyVmFsXzIwID0gaTEuybVub3YoX3YsIDI5KS5ocmVmOyBfY2soX3YsIDI4LCAwLCBjdXJyVmFsXzE5LCBjdXJyVmFsXzIwKTsgdmFyIGN1cnJWYWxfMjIgPSBpMS7JtW5vdihfdiwgMzMpLnRhcmdldDsgdmFyIGN1cnJWYWxfMjMgPSBpMS7JtW5vdihfdiwgMzMpLmhyZWY7IF9jayhfdiwgMzIsIDAsIGN1cnJWYWxfMjIsIGN1cnJWYWxfMjMpOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0hlYWRlckNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0hlYWRlckNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0hlYWRlckNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGk2LkhlYWRlckNvbXBvbmVudCwgW2kyLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBIZWFkZXJDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiLmJqLWhlYWRlclwiLCBpNi5IZWFkZXJDb21wb25lbnQsIFZpZXdfSGVhZGVyQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBIZWFkZXJDb21wb25lbnROZ0ZhY3RvcnkgYXMgSGVhZGVyQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5iai1mb290ZXIsLmJqLWZvb3Rlcl9fbG9nb3tkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOnZhcigtLWNvbG9yLW1haW4pfS5iai1mb290ZXJ7cGFkZGluZzowIDAgdmFyKC0taW5kZW50LWJhc2UpO2NvbG9yOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0uYmotZm9vdGVyX19sb2dve3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTEwMHB4O3RvcDotMTAwcHg7aGVpZ2h0OjIwMHB4O3dpZHRoOjIwMHB4O2JvcmRlcjozcHggc29saWQgI2ZmZjtib3JkZXItcmFkaXVzOjUwJTt6LWluZGV4OjgwMDtjdXJzb3I6cG9pbnRlcn0uYmotZm9vdGVyX19sb2dvIGltZ3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMTlweDtsZWZ0OjEwN3B4O2hlaWdodDozOHB4O3dpZHRoOmF1dG99LmJqLWZvb3Rlcl9fbmF2e21hcmdpbjowIGF1dG87bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7cGFkZGluZzp2YXIoLS1pbmRlbnQtYmFzZSkgdmFyKC0taW5kZW50LWJhc2UpIHZhcigtLWluZGVudC1iYXNlKSBjYWxjKDEwMHB4ICsgdmFyKC0taW5kZW50LWJhc2UpKTttaW4taGVpZ2h0OjEwMHB4O2Rpc3BsYXk6YmxvY2t9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuYmotZm9vdGVyX19uYXZ7cGFkZGluZzp2YXIoLS1pbmRlbnQtYmFzZSkgdmFyKC0taW5kZW50LWRvdWJsZSkgdmFyKC0taW5kZW50LWJhc2UpIGNhbGMoMTAwcHggKyB2YXIoLS1pbmRlbnQtZG91YmxlKSl9fS5iai1mb290ZXJfX25hdl9fcm93e3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5iai1mb290ZXJfX25hdl9faXRlbXttYXJnaW46MCAwIC41ZW0gMWVtO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmY7cGFkZGluZy1ib3R0b206LjFlbTt0ZXh0LXRyYW5zZm9ybTpub25lO3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7Zm9udC1zdHlsZTpub3JtYWw7Y29sb3I6aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3dyYXB9LmJqLWZvb3Rlcl9fbmF2X19pdGVtOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjB9LmJqLWZvb3Rlcl9fbmF2X19pdGVtLS1kb25hdGV7Y29sb3I6I2VmNmMwMDtib3JkZXItYm90dG9tLWNvbG9yOiNlZjZjMDB9LmJqLWZvb3Rlcl9fcm93e21hcmdpbjp2YXIoLS1pbmRlbnQtYmFzZSkgYXV0byAwO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO3BhZGRpbmc6MCB2YXIoLS1pbmRlbnQtYmFzZSk7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuYmotZm9vdGVyX19yb3d7cGFkZGluZzowIHZhcigtLWluZGVudC1kb3VibGUpfX0uYmotZm9vdGVyX19jb2x7b3JkZXI6MTtmbGV4OjAgMCBhdXRvO21hcmdpbi1sZWZ0OnZhcigtLWluZGVudC1iYXNlKX0uYmotZm9vdGVyX19jb2w6Zmlyc3QtY2hpbGR7ZmxleDoxIDEgYXV0bzttYXJnaW4tbGVmdDowfUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmJqLWZvb3Rlcl9fY29sOmZpcnN0LWNoaWxke29yZGVyOjI7ZmxleC1iYXNpczoxMDAlfX0uYmotZm9vdGVyX19jb2wgcHtwYWRkaW5nOjAgdmFyKC0taW5kZW50LWJhc2UpIDAgMDttYXJnaW46MCAwIHZhcigtLWluZGVudC1oYWxmKTtsaW5lLWhlaWdodDoxLjR9LmJqLWZvb3Rlcl9fYm90dG9tLW5hdntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDttYXJnaW4tYm90dG9tOi41ZW19LmJqLWZvb3Rlcl9fYm90dG9tLW5hdiBhLC5iai1mb290ZXJfX2NvcHlyaWdodHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDozMDA7d2hpdGUtc3BhY2U6bm93cmFwfS5iai1mb290ZXJfX2JvdHRvbS1uYXYgYXt0ZXh0LXRyYW5zZm9ybTpub25lO3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTpub3JtYWw7Y29sb3I6aW5oZXJpdDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZmZmO3BhZGRpbmctYm90dG9tOi4xZW19LmJqLWZvb3Rlcl9fYm90dG9tLW5hdiBzcGFue21hcmdpbjowIDFlbX0uYmotZm9vdGVyX19jb3B5cmlnaHR7bWFyZ2luOjAgMCAuNWVtIGF1dG87cGFkZGluZy1sZWZ0OnZhcigtLWluZGVudC1iYXNlKX1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9mb290ZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfZm9vdGVyLmNvbXBvbmVudCxfLi5fc2VydmljZXNfc29jaWFsX3NvY2lhbC5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2Zvb3Rlci5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9yb3V0ZXIsX2FuZ3VsYXJfY29tbW9uLF9mb290ZXIuY29tcG9uZW50LF8uLl9zZXJ2aWNlc19zb2NpYWxfc29jaWFsLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vZm9vdGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb2NpYWwvc29jaWFsLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfRm9vdGVyQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9Gb290ZXJDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfRm9vdGVyQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19Gb290ZXJDb21wb25lbnRfMChfbCkge1xuICAgIHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgNDYsIFwibmF2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAyOCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19uYXZfX3Jvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMywgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2X19pdGVtXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL1wiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDMpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMywgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg0LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MUJcXHUwNDM1XFx1MDQzRFxcdTA0NDJcXHUwNDMwXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDYsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9ldmVudHNcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCA3KS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDcsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoOCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDE4XFx1MDQzMlxcdTA0MzVcXHUwNDNEXFx1MDQ0MlxcdTA0NEJcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMTAsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9pY29cIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxMSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxMSwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgxMiwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJJQ09cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMTQsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi8xMDFcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxNSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxNSwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgxNiwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFEXFx1MDQzRVxcdTA0MzJcXHUwNDM4XFx1MDQ0N1xcdTA0M0FcXHUwNDMwXFx1MDQzQ1wiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgxOCwgMCwgbnVsbCwgbnVsbCwgMywgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2X19pdGVtXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL2N1cnJlbmNpZXNcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxOSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxOSwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDEyXFx1MDQzMFxcdTA0M0JcXHUwNDRFXFx1MDQ0MlxcdTA0NEJcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMjIsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9leGNoYW5nZXNcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAyMykub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgyMywgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyNCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFFXFx1MDQzMVxcdTA0M0NcXHUwNDM1XFx1MDQzRFxcdTA0M0RcXHUwNDM4XFx1MDQzQVxcdTA0MzhcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMjYsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9tYXJrZXRzXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMjcpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMjcsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMjgsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxMVxcdTA0MzhcXHUwNDQwXFx1MDQzNlxcdTA0MzhcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMzAsIDAsIG51bGwsIG51bGwsIDE2LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9fcm93XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzMSwgMCwgbnVsbCwgbnVsbCwgMywgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2X19pdGVtXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL2Fib3V0XCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMzIpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMzIsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMzMsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRSBcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDM1XFx1MDQzQVxcdTA0NDJcXHUwNDM1XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDM1LCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19uYXZfX2l0ZW1cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvc3RhZmZcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAzNikub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgzNiwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgzNywgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDIwXFx1MDQzNVxcdTA0MzRcXHUwNDMwXFx1MDQzQVxcdTA0NDZcXHUwNDM4XFx1MDQ0RlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgzOSwgMCwgbnVsbCwgbnVsbCwgMywgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2X19pdGVtXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL2Fkc1wiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDQwKS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDQwLCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDQxLCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MjBcXHUwNDM1XFx1MDQzQVxcdTA0M0JcXHUwNDMwXFx1MDQzQ1xcdTA0MzBcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNDMsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbSBiai1mb290ZXJfX25hdl9faXRlbS0tZG9uYXRlXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL2RvbmF0ZVwiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDQ0KS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDQ0LCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDQ1LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzRcXHUwNDM1XFx1MDQ0MFxcdTA0MzZcXHUwNDMwXFx1MDQ0MlxcdTA0NENcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNDcsIDAsIG51bGwsIG51bGwsIDEzLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX3Jvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNDgsIDAsIG51bGwsIG51bGwsIDYsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fY29sXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0OSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDEyXFx1MDQ0MVxcdTA0MzUgXFx1MDQ0MVxcdTA0NDFcXHUwNDRCXFx1MDQzQlxcdTA0M0FcXHUwNDM4IFxcdTA0M0ZcXHUwNDQwXFx1MDQzNVxcdTA0MzRcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDRGXFx1MDQ0RVxcdTA0NDJcXHUwNDQxXFx1MDQ0RiBcXHUwNDM4XFx1MDQ0MVxcdTA0M0FcXHUwNDNCXFx1MDQ0RVxcdTA0NDdcXHUwNDM4XFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQ0Q1xcdTA0M0RcXHUwNDNFIFxcdTA0MzRcXHUwNDNCXFx1MDQ0RiBcXHUwNDQxXFx1MDQzRlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M0VcXHUwNDQ3XFx1MDQzRFxcdTA0NEJcXHUwNDQ1IFxcdTA0NDZcXHUwNDM1XFx1MDQzQlxcdTA0MzVcXHUwNDM5LlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg1MSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJCaXRKb3VybmFsIFxcdTA0M0RcXHUwNDM1IFxcdTA0M0RcXHUwNDM1XFx1MDQ0MVxcdTA0MzVcXHUwNDQyIFxcdTA0M0VcXHUwNDQyXFx1MDQzMlxcdTA0MzVcXHUwNDQyXFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0M0RcXHUwNDNEXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzOCBcXHUwNDM3XFx1MDQzMCBcXHUwNDQxXFx1MDQzRVxcdTA0MzRcXHUwNDM1XFx1MDQ0MFxcdTA0MzZcXHUwNDM4XFx1MDQzQ1xcdTA0M0VcXHUwNDM1IFxcdTA0MzJcXHUwNDNEXFx1MDQzNVxcdTA0NDhcXHUwNDNEXFx1MDQzOFxcdTA0NDUgXFx1MDQzOFxcdTA0M0RcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDNEXFx1MDQzNVxcdTA0NDItXFx1MDQ0MVxcdTA0MzBcXHUwNDM5XFx1MDQ0MlxcdTA0M0VcXHUwNDMyLlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg1MywgMCwgbnVsbCwgbnVsbCwgMSwgXCJwXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFGXFx1MDQ0MFxcdTA0MzggXFx1MDQzOFxcdTA0NDFcXHUwNDNGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzOCBcXHUwNDNDXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzQlxcdTA0M0VcXHUwNDMyIFxcdTA0NDFcXHUwNDMwXFx1MDQzOVxcdTA0NDJcXHUwNDMwIFxcdTA0NDFcXHUwNDQxXFx1MDQ0QlxcdTA0M0JcXHUwNDNBXFx1MDQzMCBcXHUwNDNFXFx1MDQzMVxcdTA0NEZcXHUwNDM3XFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDNEXFx1MDQzMC5cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNTUsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fY29sXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg1NiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJkaXZcIiwgW1tcImlkXCIsIFwidmtfZ3JvdXBfdmlkZ2V0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg1NywgMCwgbnVsbCwgbnVsbCwgMywgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19jb2xcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDU4LCAwLCBudWxsLCBudWxsLCAxLCBcImFcIiwgW1tcImNsYXNzXCIsIFwidHdpdHRlci1mb2xsb3ctYnV0dG9uXCJdLCBbXCJkYXRhLXNob3ctY291bnRcIiwgXCJmYWxzZVwiXSwgW1wiZGF0YS1zaXplXCIsIFwibGFyZ2VcIl0sIFtcImhyZWZcIiwgXCJodHRwczovL3R3aXR0ZXIuY29tL2JpdGpvdXJuYWxfaW9cIl0sIFtcInRhcmdldFwiLCBcIl9ibGFua1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIkZvbGxvdyBAYml0am91cm5hbF9pb1wiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg2MCwgMCwgbnVsbCwgbnVsbCwgMCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiZy15dHN1YnNjcmliZVwiXSwgW1wiZGF0YS1jaGFubmVsaWRcIiwgXCJVQ2VPTFVlWU5jWURvczF3Y1RKVkxHbHdcIl0sIFtcImRhdGEtY291bnRcIiwgXCJkZWZhdWx0XCJdLCBbXCJkYXRhLWxheW91dFwiLCBcImZ1bGxcIl0sIFtcImRhdGEtdGhlbWVcIiwgXCJkYXJrXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg2MSwgMCwgbnVsbCwgbnVsbCwgMTUsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fcm93XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg2MiwgMCwgbnVsbCwgbnVsbCwgMTEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fY29sIGJqLWZvb3Rlcl9fYm90dG9tLW5hdlwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNjMsIDAsIG51bGwsIG51bGwsIDEsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2JvdHRvbS1uYXZcIl0sIFtcImhyZWZcIiwgXCIvcnNzXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUlNTXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDY1LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcInxcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNjcsIDAsIG51bGwsIG51bGwsIDEsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2JvdHRvbS1uYXZcIl0sIFtcImhyZWZcIiwgXCIvYXBpXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiQVBJXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDY5LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcInxcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNzEsIDAsIG51bGwsIG51bGwsIDIsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2JvdHRvbS1uYXZcIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvcHJpdmFjeVwiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDcyKS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDcyLCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0MzhcXHUwNDNBXFx1MDQzMCBcXHUwNDNBXFx1MDQzRVxcdTA0M0RcXHUwNDQ0XFx1MDQzOFxcdTA0MzRcXHUwNDM1XFx1MDQzRFxcdTA0NDZcXHUwNDM4XFx1MDQzMFxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNzQsIDAsIG51bGwsIG51bGwsIDIsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fY29sIGJqLWZvb3Rlcl9fY29weXJpZ2h0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg3NSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJDb3B5cmlnaHQgXFx1MDBBOSAyMDE3IEJpdEpvdXJuYWxcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNzcsIDAsIG51bGwsIG51bGwsIDIsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2xvZ29cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgNzgpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoNzgsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNzksIDAsIG51bGwsIG51bGwsIDAsIFwiaW1nXCIsIFtbXCJhbHRcIiwgXCJCaXRKb3VybmFsXCJdLCBbXCJzcmNcIiwgXCIvc3ZnL2xvZ28uc3ZnXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMiA9IFwiL1wiOyBfY2soX3YsIDMsIDAsIGN1cnJWYWxfMik7IHZhciBjdXJyVmFsXzUgPSBcIi9ldmVudHNcIjsgX2NrKF92LCA3LCAwLCBjdXJyVmFsXzUpOyB2YXIgY3VyclZhbF84ID0gXCIvaWNvXCI7IF9jayhfdiwgMTEsIDAsIGN1cnJWYWxfOCk7IHZhciBjdXJyVmFsXzExID0gXCIvMTAxXCI7IF9jayhfdiwgMTUsIDAsIGN1cnJWYWxfMTEpOyB2YXIgY3VyclZhbF8xNCA9IFwiL2N1cnJlbmNpZXNcIjsgX2NrKF92LCAxOSwgMCwgY3VyclZhbF8xNCk7IHZhciBjdXJyVmFsXzE3ID0gXCIvZXhjaGFuZ2VzXCI7IF9jayhfdiwgMjMsIDAsIGN1cnJWYWxfMTcpOyB2YXIgY3VyclZhbF8yMCA9IFwiL21hcmtldHNcIjsgX2NrKF92LCAyNywgMCwgY3VyclZhbF8yMCk7IHZhciBjdXJyVmFsXzIzID0gXCIvYWJvdXRcIjsgX2NrKF92LCAzMiwgMCwgY3VyclZhbF8yMyk7IHZhciBjdXJyVmFsXzI2ID0gXCIvc3RhZmZcIjsgX2NrKF92LCAzNiwgMCwgY3VyclZhbF8yNik7IHZhciBjdXJyVmFsXzI5ID0gXCIvYWRzXCI7IF9jayhfdiwgNDAsIDAsIGN1cnJWYWxfMjkpOyB2YXIgY3VyclZhbF8zMiA9IFwiL2RvbmF0ZVwiOyBfY2soX3YsIDQ0LCAwLCBjdXJyVmFsXzMyKTsgdmFyIGN1cnJWYWxfMzUgPSBcIi9wcml2YWN5XCI7IF9jayhfdiwgNzIsIDAsIGN1cnJWYWxfMzUpOyB2YXIgY3VyclZhbF8zOCA9IFwiL1wiOyBfY2soX3YsIDc4LCAwLCBjdXJyVmFsXzM4KTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAzKS50YXJnZXQ7IHZhciBjdXJyVmFsXzEgPSBpMS7JtW5vdihfdiwgMykuaHJlZjsgX2NrKF92LCAyLCAwLCBjdXJyVmFsXzAsIGN1cnJWYWxfMSk7IHZhciBjdXJyVmFsXzMgPSBpMS7JtW5vdihfdiwgNykudGFyZ2V0OyB2YXIgY3VyclZhbF80ID0gaTEuybVub3YoX3YsIDcpLmhyZWY7IF9jayhfdiwgNiwgMCwgY3VyclZhbF8zLCBjdXJyVmFsXzQpOyB2YXIgY3VyclZhbF82ID0gaTEuybVub3YoX3YsIDExKS50YXJnZXQ7IHZhciBjdXJyVmFsXzcgPSBpMS7JtW5vdihfdiwgMTEpLmhyZWY7IF9jayhfdiwgMTAsIDAsIGN1cnJWYWxfNiwgY3VyclZhbF83KTsgdmFyIGN1cnJWYWxfOSA9IGkxLsm1bm92KF92LCAxNSkudGFyZ2V0OyB2YXIgY3VyclZhbF8xMCA9IGkxLsm1bm92KF92LCAxNSkuaHJlZjsgX2NrKF92LCAxNCwgMCwgY3VyclZhbF85LCBjdXJyVmFsXzEwKTsgdmFyIGN1cnJWYWxfMTIgPSBpMS7JtW5vdihfdiwgMTkpLnRhcmdldDsgdmFyIGN1cnJWYWxfMTMgPSBpMS7JtW5vdihfdiwgMTkpLmhyZWY7IF9jayhfdiwgMTgsIDAsIGN1cnJWYWxfMTIsIGN1cnJWYWxfMTMpOyB2YXIgY3VyclZhbF8xNSA9IGkxLsm1bm92KF92LCAyMykudGFyZ2V0OyB2YXIgY3VyclZhbF8xNiA9IGkxLsm1bm92KF92LCAyMykuaHJlZjsgX2NrKF92LCAyMiwgMCwgY3VyclZhbF8xNSwgY3VyclZhbF8xNik7IHZhciBjdXJyVmFsXzE4ID0gaTEuybVub3YoX3YsIDI3KS50YXJnZXQ7IHZhciBjdXJyVmFsXzE5ID0gaTEuybVub3YoX3YsIDI3KS5ocmVmOyBfY2soX3YsIDI2LCAwLCBjdXJyVmFsXzE4LCBjdXJyVmFsXzE5KTsgdmFyIGN1cnJWYWxfMjEgPSBpMS7JtW5vdihfdiwgMzIpLnRhcmdldDsgdmFyIGN1cnJWYWxfMjIgPSBpMS7JtW5vdihfdiwgMzIpLmhyZWY7IF9jayhfdiwgMzEsIDAsIGN1cnJWYWxfMjEsIGN1cnJWYWxfMjIpOyB2YXIgY3VyclZhbF8yNCA9IGkxLsm1bm92KF92LCAzNikudGFyZ2V0OyB2YXIgY3VyclZhbF8yNSA9IGkxLsm1bm92KF92LCAzNikuaHJlZjsgX2NrKF92LCAzNSwgMCwgY3VyclZhbF8yNCwgY3VyclZhbF8yNSk7IHZhciBjdXJyVmFsXzI3ID0gaTEuybVub3YoX3YsIDQwKS50YXJnZXQ7IHZhciBjdXJyVmFsXzI4ID0gaTEuybVub3YoX3YsIDQwKS5ocmVmOyBfY2soX3YsIDM5LCAwLCBjdXJyVmFsXzI3LCBjdXJyVmFsXzI4KTsgdmFyIGN1cnJWYWxfMzAgPSBpMS7JtW5vdihfdiwgNDQpLnRhcmdldDsgdmFyIGN1cnJWYWxfMzEgPSBpMS7JtW5vdihfdiwgNDQpLmhyZWY7IF9jayhfdiwgNDMsIDAsIGN1cnJWYWxfMzAsIGN1cnJWYWxfMzEpOyB2YXIgY3VyclZhbF8zMyA9IGkxLsm1bm92KF92LCA3MikudGFyZ2V0OyB2YXIgY3VyclZhbF8zNCA9IGkxLsm1bm92KF92LCA3MikuaHJlZjsgX2NrKF92LCA3MSwgMCwgY3VyclZhbF8zMywgY3VyclZhbF8zNCk7IHZhciBjdXJyVmFsXzM2ID0gaTEuybVub3YoX3YsIDc4KS50YXJnZXQ7IHZhciBjdXJyVmFsXzM3ID0gaTEuybVub3YoX3YsIDc4KS5ocmVmOyBfY2soX3YsIDc3LCAwLCBjdXJyVmFsXzM2LCBjdXJyVmFsXzM3KTsgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVmlld19Gb290ZXJDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19Gb290ZXJDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9Gb290ZXJDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNDI0MzQ1NiwgbnVsbCwgMCwgaTQuRm9vdGVyQ29tcG9uZW50LCBbaTUuU29jaWFsU2VydmljZV0sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBGb290ZXJDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiLmJqLWZvb3RlclwiLCBpNC5Gb290ZXJDb21wb25lbnQsIFZpZXdfRm9vdGVyQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBGb290ZXJDb21wb25lbnROZ0ZhY3RvcnkgYXMgRm9vdGVyQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfbGF5b3V0LmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9oZWFkZXJfaGVhZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2hlYWRlcl9oZWFkZXIuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlcixfZm9vdGVyX2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5LF9mb290ZXJfZm9vdGVyLmNvbXBvbmVudCxfLi5fc2VydmljZXNfc29jaWFsX3NvY2lhbC5zZXJ2aWNlLF9sYXlvdXQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfaGVhZGVyX2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LF9oZWFkZXJfaGVhZGVyLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsX2Zvb3Rlcl9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeSxfZm9vdGVyX2Zvb3Rlci5jb21wb25lbnQsXy4uX3NlcnZpY2VzX3NvY2lhbF9zb2NpYWwuc2VydmljZSxfbGF5b3V0LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9sYXlvdXQuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb2NpYWwvc29jaWFsLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk4IGZyb20gXCIuL2xheW91dC5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfTGF5b3V0Q29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9MYXlvdXRDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfTGF5b3V0Q29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50IGFzIFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19MYXlvdXRDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiaGVhZGVyXCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIGkyLlZpZXdfSGVhZGVyQ29tcG9uZW50XzAsIGkyLlJlbmRlclR5cGVfSGVhZGVyQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTMuSGVhZGVyQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDE2Nzc3MjE2LCBudWxsLCBudWxsLCAxLCBcInJvdXRlci1vdXRsZXRcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMywgMjEyOTkyLCBudWxsLCAwLCBpNC5Sb3V0ZXJPdXRsZXQsIFtpNC5DaGlsZHJlbk91dGxldENvbnRleHRzLCBpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFs4LCBudWxsXSwgaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJmb290ZXJcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTUuVmlld19Gb290ZXJDb21wb25lbnRfMCwgaTUuUmVuZGVyVHlwZV9Gb290ZXJDb21wb25lbnQpKSwgaTEuybVkaWQoNSwgNDI0MzQ1NiwgbnVsbCwgMCwgaTYuRm9vdGVyQ29tcG9uZW50LCBbaTcuU29jaWFsU2VydmljZV0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgX2NrKF92LCAzLCAwKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0xheW91dENvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImJvZHlcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfTGF5b3V0Q29tcG9uZW50XzAsIFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTguTGF5b3V0Q29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIExheW91dENvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJib2R5XCIsIGk4LkxheW91dENvbXBvbmVudCwgVmlld19MYXlvdXRDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IExheW91dENvbXBvbmVudE5nRmFjdG9yeSBhcyBMYXlvdXRDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9hbmd1bGFyX2NvcmUsX2FwcC5tb2R1bGUsX2NvbXBvbmVudHNfbGF5b3V0X2xheW91dC5jb21wb25lbnQsXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2dfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9zbmFja19iYXJfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfbWFpbl9wYWdlX21haW4uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc18xMDFfcGFnZV8xMDEuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0cy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19zZWN0aW9uX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2FydGljbGVfcGFnZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfbm9fY29udGVudF9ub19jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfYXV0aF9hdXRoX2RpYWxvZy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX2xheW91dF9sYXlvdXQuY29tcG9uZW50Lm5nZmFjdG9yeSxfYW5ndWxhcl9jb21tb24sX2FuZ3VsYXJfcGxhdGZvcm1fYnJvd3NlcixfYW5ndWxhcl9hbmltYXRpb25zX2Jyb3dzZXIsX2FuZ3VsYXJfcGxhdGZvcm1fYnJvd3Nlcl9hbmltYXRpb25zLF9hbmd1bGFyX2FuaW1hdGlvbnMsX2FuZ3VsYXJfZm9ybXMsX2FuZ3VsYXJfY29tbW9uX2h0dHAsX2FuZ3VsYXJfY2RrX2JpZGksX2FuZ3VsYXJfY2RrX3BsYXRmb3JtLF9hbmd1bGFyX2Nka19zY3JvbGxpbmcsX2FuZ3VsYXJfY2RrX292ZXJsYXksX2FuZ3VsYXJfY2RrX2ExMXksX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nLF9hbmd1bGFyX21hdGVyaWFsX3NvcnQsX2FuZ3VsYXJfY2RrX2xheW91dCxfYW5ndWxhcl9tYXRlcmlhbF9zbmFja19iYXIsX2FuZ3VsYXJfbWF0ZXJpYWxfY29yZSxfYW5ndWxhcl9yb3V0ZXIsX3NlcnZpY2VzX21lc3NhZ2VfbWVzc2FnZS5zZXJ2aWNlLF9zZXJ2aWNlc191c2VyX3VzZXIuc2VydmljZSxfc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLF9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSxfc2VydmljZXNfcHVibGljYXRpb25fcHVibGljYXRpb24uc2VydmljZSxfc2VydmljZXNfc29jaWFsX3NvY2lhbC5zZXJ2aWNlLF9hbmd1bGFyX2Nka19wb3J0YWwsX2FuZ3VsYXJfY2RrX3RhYmxlLF9hbmd1bGFyX21hdGVyaWFsX3RhYmxlLF9hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGQsX2FuZ3VsYXJfbWF0ZXJpYWxfaW5wdXQsX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uLF9jb21wb25lbnRzX3BhZ2VzX21haW5fcGFnZV9tYWluLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc18xMDFfcGFnZV8xMDEuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHMuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19pY29fcGFnZV9pY28uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljb19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0cy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHNfaXRlbS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfc2VjdGlvbl9wYWdlX3NlY3Rpb24uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2FydGljbGVfcGFnZV9hcnRpY2xlLmNvbXBvbmVudCxfY29tcG9uZW50c19ub19jb250ZW50X25vX2NvbnRlbnQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2FuZ3VsYXJfY29yZSxfYXBwLm1vZHVsZSxfY29tcG9uZW50c19sYXlvdXRfbGF5b3V0LmNvbXBvbmVudCxfLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX2RpYWxvZ190eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSxfLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX3NuYWNrX2Jhcl90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19tYWluX3BhZ2VfbWFpbi5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzXzEwMV9wYWdlXzEwMS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50cy5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfZXhjaGFuZ2VzX3BhZ2VfZXhjaGFuZ2VzLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfZXhjaGFuZ2VzX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19pY29fcGFnZV9pY28uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19pY29fcGFnZV9pY29faXRlbS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX3NlY3Rpb25fcGFnZV9zZWN0aW9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfYXJ0aWNsZV9wYWdlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19ub19jb250ZW50X25vX2NvbnRlbnQuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19hdXRoX2F1dGhfZGlhbG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfbGF5b3V0X2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5LF9hbmd1bGFyX2NvbW1vbixfYW5ndWxhcl9wbGF0Zm9ybV9icm93c2VyLF9hbmd1bGFyX2FuaW1hdGlvbnNfYnJvd3NlcixfYW5ndWxhcl9wbGF0Zm9ybV9icm93c2VyX2FuaW1hdGlvbnMsX2FuZ3VsYXJfYW5pbWF0aW9ucyxfYW5ndWxhcl9mb3JtcyxfYW5ndWxhcl9jb21tb25faHR0cCxfYW5ndWxhcl9jZGtfYmlkaSxfYW5ndWxhcl9jZGtfcGxhdGZvcm0sX2FuZ3VsYXJfY2RrX3Njcm9sbGluZyxfYW5ndWxhcl9jZGtfb3ZlcmxheSxfYW5ndWxhcl9jZGtfYTExeSxfYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2csX2FuZ3VsYXJfbWF0ZXJpYWxfc29ydCxfYW5ndWxhcl9jZGtfbGF5b3V0LF9hbmd1bGFyX21hdGVyaWFsX3NuYWNrX2JhcixfYW5ndWxhcl9tYXRlcmlhbF9jb3JlLF9hbmd1bGFyX3JvdXRlcixfc2VydmljZXNfbWVzc2FnZV9tZXNzYWdlLnNlcnZpY2UsX3NlcnZpY2VzX3VzZXJfdXNlci5zZXJ2aWNlLF9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLF9zZXJ2aWNlc19wdWJsaWNhdGlvbl9wdWJsaWNhdGlvbi5zZXJ2aWNlLF9zZXJ2aWNlc19zb2NpYWxfc29jaWFsLnNlcnZpY2UsX2FuZ3VsYXJfY2RrX3BvcnRhbCxfYW5ndWxhcl9jZGtfdGFibGUsX2FuZ3VsYXJfbWF0ZXJpYWxfdGFibGUsX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZCxfYW5ndWxhcl9tYXRlcmlhbF9pbnB1dCxfYW5ndWxhcl9tYXRlcmlhbF9idXR0b24sX2NvbXBvbmVudHNfcGFnZXNfbWFpbl9wYWdlX21haW4uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzXzEwMV9wYWdlXzEwMS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50cy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfZXhjaGFuZ2VzX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljby5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19zZWN0aW9uX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfYXJ0aWNsZV9wYWdlX2FydGljbGUuY29tcG9uZW50LF9jb21wb25lbnRzX25vX2NvbnRlbnRfbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nL3R5cGluZ3MvaW5kZXgubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhci90eXBpbmdzL2luZGV4Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpOSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTEgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTEyIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTEzIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE3IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE5IGZyb20gXCIuL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkyMCBmcm9tIFwiLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTIxIGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMjIgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTIzIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgKiBhcyBpMjQgZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3NlclwiO1xuaW1wb3J0ICogYXMgaTI1IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCAqIGFzIGkyNiBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0ICogYXMgaTI3IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0ICogYXMgaTI4IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0ICogYXMgaTI5IGZyb20gXCJAYW5ndWxhci9jZGsvYmlkaVwiO1xuaW1wb3J0ICogYXMgaTMwIGZyb20gXCJAYW5ndWxhci9jZGsvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGkzMSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3Njcm9sbGluZ1wiO1xuaW1wb3J0ICogYXMgaTMyIGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0ICogYXMgaTMzIGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xuaW1wb3J0ICogYXMgaTM0IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCAqIGFzIGkzNSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0ICogYXMgaTM2IGZyb20gXCJAYW5ndWxhci9jZGsvbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBpMzcgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0ICogYXMgaTM4IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMzkgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTQwIGZyb20gXCIuL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNDEgZnJvbSBcIi4vc2VydmljZXMvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0MiBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0MyBmcm9tIFwiLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTQ0IGZyb20gXCIuL3NlcnZpY2VzL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0NSBmcm9tIFwiLi9zZXJ2aWNlcy9zb2NpYWwvc29jaWFsLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0NiBmcm9tIFwiQGFuZ3VsYXIvY2RrL3BvcnRhbFwiO1xuaW1wb3J0ICogYXMgaTQ3IGZyb20gXCJAYW5ndWxhci9jZGsvdGFibGVcIjtcbmltcG9ydCAqIGFzIGk0OCBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcbmltcG9ydCAqIGFzIGk0OSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0ICogYXMgaTUwIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xuaW1wb3J0ICogYXMgaTUxIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcbmltcG9ydCAqIGFzIGk1MiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTUzIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvMTAxL3BhZ2UtMTAxLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU0IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNTUgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU2IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU3IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNTggZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNTkgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2MCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2MSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYyIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjMgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTY0IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjUgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2NiBmcm9tIFwiLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnRcIjtcbnZhciBBcHBNb2R1bGVOZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkwLsm1Y21mKGkxLkFwcE1vZHVsZSwgW2kyLkxheW91dENvbXBvbmVudF0sIGZ1bmN0aW9uIChfbCkgeyByZXR1cm4gaTAuybVtb2QoW2kwLsm1bXBkKDUxMiwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMC7JtUNvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFtbOCwgW2kzLk1hdERpYWxvZ0NvbnRhaW5lck5nRmFjdG9yeSwgaTQuTWF0U25hY2tCYXJDb250YWluZXJOZ0ZhY3RvcnksIGk0LlNpbXBsZVNuYWNrQmFyTmdGYWN0b3J5LCBpNS5QYWdlTWFpbkNvbXBvbmVudE5nRmFjdG9yeSwgaTYuUGFnZTEwMUNvbXBvbmVudE5nRmFjdG9yeSwgaTcuUGFnZUN1cnJlbmNpZXNDb21wb25lbnROZ0ZhY3RvcnksIGk4LlBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSwgaTkuUGFnZUV2ZW50c0NvbXBvbmVudE5nRmFjdG9yeSwgaTEwLlBhZ2VFdmVudHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5LCBpMTEuUGFnZUV4Y2hhbmdlc0NvbXBvbmVudE5nRmFjdG9yeSwgaTEyLlBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50TmdGYWN0b3J5LCBpMTMuUGFnZUlDT0NvbXBvbmVudE5nRmFjdG9yeSwgaTE0LlBhZ2VJQ09JdGVtQ29tcG9uZW50TmdGYWN0b3J5LCBpMTUuUGFnZU1hcmtldHNDb21wb25lbnROZ0ZhY3RvcnksIGkxNi5QYWdlTWFya2V0c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnksIGkxNy5QYWdlU2VjdGlvbkNvbXBvbmVudE5nRmFjdG9yeSwgaTE4LlBhZ2VBcnRpY2xlQ29tcG9uZW50TmdGYWN0b3J5LCBpMTkuTm9Db250ZW50Q29tcG9uZW50TmdGYWN0b3J5LCBpMjAuQXV0aERpYWxvZ0NvbXBvbmVudE5nRmFjdG9yeSwgaTIxLkxheW91dENvbXBvbmVudE5nRmFjdG9yeV1dLCBbMywgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXSwgaTAuTmdNb2R1bGVSZWZdKSwgaTAuybVtcGQoNTEyMCwgaTAuTE9DQUxFX0lELCBpMC7JtW0sIFtbMywgaTAuTE9DQUxFX0lEXV0pLCBpMC7JtW1wZCg0NjA4LCBpMjIuTmdMb2NhbGl6YXRpb24sIGkyMi5OZ0xvY2FsZUxvY2FsaXphdGlvbiwgW2kwLkxPQ0FMRV9JRCwgWzIsIGkyMi7JtWFdXSksIGkwLsm1bXBkKDUxMjAsIGkwLkl0ZXJhYmxlRGlmZmVycywgaTAuybVrLCBbXSksIGkwLsm1bXBkKDUxMjAsIGkwLktleVZhbHVlRGlmZmVycywgaTAuybVsLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy5Eb21TYW5pdGl6ZXIsIGkyMy7JtWUsIFtpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNjE0NCwgaTAuU2FuaXRpemVyLCBudWxsLCBbaTIzLkRvbVNhbml0aXplcl0pLCBpMC7JtW1wZCg0NjA4LCBpMjMuSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBpMjMuSGFtbWVyR2VzdHVyZUNvbmZpZywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMjMuRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCBmdW5jdGlvbiAocDBfMCwgcDBfMSwgcDFfMCwgcDJfMCwgcDJfMSkgeyByZXR1cm4gW25ldyBpMjMuybVEb21FdmVudHNQbHVnaW4ocDBfMCwgcDBfMSksIG5ldyBpMjMuybVLZXlFdmVudHNQbHVnaW4ocDFfMCksIG5ldyBpMjMuybVIYW1tZXJHZXN0dXJlc1BsdWdpbihwMl8wLCBwMl8xKV07IH0sIFtpMjIuRE9DVU1FTlQsIGkwLk5nWm9uZSwgaTIyLkRPQ1VNRU5ULCBpMjIuRE9DVU1FTlQsIGkyMy5IQU1NRVJfR0VTVFVSRV9DT05GSUddKSwgaTAuybVtcGQoNDYwOCwgaTIzLkV2ZW50TWFuYWdlciwgaTIzLkV2ZW50TWFuYWdlciwgW2kyMy5FVkVOVF9NQU5BR0VSX1BMVUdJTlMsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCgxMzU2ODAsIGkyMy7JtURvbVNoYXJlZFN0eWxlc0hvc3QsIGkyMy7JtURvbVNoYXJlZFN0eWxlc0hvc3QsIFtpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNDYwOCwgaTIzLsm1RG9tUmVuZGVyZXJGYWN0b3J5MiwgaTIzLsm1RG9tUmVuZGVyZXJGYWN0b3J5MiwgW2kyMy5FdmVudE1hbmFnZXIsIGkyMy7JtURvbVNoYXJlZFN0eWxlc0hvc3RdKSwgaTAuybVtcGQoNTEyMCwgaTI0LkFuaW1hdGlvbkRyaXZlciwgaTI1Lsm1YywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMjQuybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIGkyNS7JtWQsIFtdKSwgaTAuybVtcGQoNDYwOCwgaTI0Lsm1QW5pbWF0aW9uRW5naW5lLCBpMjUuybViLCBbaTI0LkFuaW1hdGlvbkRyaXZlciwgaTI0Lsm1QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyXSksIGkwLsm1bXBkKDUxMjAsIGkwLlJlbmRlcmVyRmFjdG9yeTIsIGkyNS7JtWUsIFtpMjMuybVEb21SZW5kZXJlckZhY3RvcnkyLCBpMjQuybVBbmltYXRpb25FbmdpbmUsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCg2MTQ0LCBpMjMuybVTaGFyZWRTdHlsZXNIb3N0LCBudWxsLCBbaTIzLsm1RG9tU2hhcmVkU3R5bGVzSG9zdF0pLCBpMC7JtW1wZCg0NjA4LCBpMC5UZXN0YWJpbGl0eSwgaTAuVGVzdGFiaWxpdHksIFtpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNDYwOCwgaTIzLk1ldGEsIGkyMy5NZXRhLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy5UaXRsZSwgaTIzLlRpdGxlLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyNi5BbmltYXRpb25CdWlsZGVyLCBpMjUuybVCcm93c2VyQW5pbWF0aW9uQnVpbGRlciwgW2kwLlJlbmRlcmVyRmFjdG9yeTIsIGkyMy5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMjcuybVpLCBpMjcuybVpLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyNy5Gb3JtQnVpbGRlciwgaTI3LkZvcm1CdWlsZGVyLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyOC5IdHRwWHNyZlRva2VuRXh0cmFjdG9yLCBpMjguybVnLCBbaTIyLkRPQ1VNRU5ULCBpMC5QTEFURk9STV9JRCwgaTI4Lsm1ZV0pLCBpMC7JtW1wZCg0NjA4LCBpMjguybVoLCBpMjguybVoLCBbaTI4Lkh0dHBYc3JmVG9rZW5FeHRyYWN0b3IsIGkyOC7JtWZdKSwgaTAuybVtcGQoNTEyMCwgaTI4LkhUVFBfSU5URVJDRVBUT1JTLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTI4Lsm1aF0pLCBpMC7JtW1wZCg0NjA4LCBpMjguybVkLCBpMjguybVkLCBbXSksIGkwLsm1bXBkKDYxNDQsIGkyOC5YaHJGYWN0b3J5LCBudWxsLCBbaTI4Lsm1ZF0pLCBpMC7JtW1wZCg0NjA4LCBpMjguSHR0cFhockJhY2tlbmQsIGkyOC5IdHRwWGhyQmFja2VuZCwgW2kyOC5YaHJGYWN0b3J5XSksIGkwLsm1bXBkKDYxNDQsIGkyOC5IdHRwQmFja2VuZCwgbnVsbCwgW2kyOC5IdHRwWGhyQmFja2VuZF0pLCBpMC7JtW1wZCg1MTIwLCBpMjguSHR0cEhhbmRsZXIsIGkyOC7JtWludGVyY2VwdGluZ0hhbmRsZXIsIFtpMjguSHR0cEJhY2tlbmQsIFsyLCBpMjguSFRUUF9JTlRFUkNFUFRPUlNdXSksIGkwLsm1bXBkKDQ2MDgsIGkyOC5IdHRwQ2xpZW50LCBpMjguSHR0cENsaWVudCwgW2kyOC5IdHRwSGFuZGxlcl0pLCBpMC7JtW1wZCg2MTQ0LCBpMjkuRElSX0RPQ1VNRU5ULCBudWxsLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyOS5EaXJlY3Rpb25hbGl0eSwgaTI5LkRpcmVjdGlvbmFsaXR5LCBbWzIsIGkyOS5ESVJfRE9DVU1FTlRdXSksIGkwLsm1bXBkKDQ2MDgsIGkzMC5QbGF0Zm9ybSwgaTMwLlBsYXRmb3JtLCBbXSksIGkwLsm1bXBkKDUxMjAsIGkzMS5TY3JvbGxEaXNwYXRjaGVyLCBpMzEuU0NST0xMX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzEuU2Nyb2xsRGlzcGF0Y2hlcl0sIGkwLk5nWm9uZSwgaTMwLlBsYXRmb3JtXSksIGkwLsm1bXBkKDUxMjAsIGkzMS5WaWV3cG9ydFJ1bGVyLCBpMzEuVklFV1BPUlRfUlVMRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzEuVmlld3BvcnRSdWxlcl0sIGkzMC5QbGF0Zm9ybSwgaTAuTmdab25lXSksIGkwLsm1bXBkKDQ2MDgsIGkzMi5TY3JvbGxTdHJhdGVneU9wdGlvbnMsIGkzMi5TY3JvbGxTdHJhdGVneU9wdGlvbnMsIFtpMzEuU2Nyb2xsRGlzcGF0Y2hlciwgaTMxLlZpZXdwb3J0UnVsZXIsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuT3ZlcmxheUNvbnRhaW5lciwgaTMyLsm1YSwgW1szLCBpMzIuT3ZlcmxheUNvbnRhaW5lcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMzIuybVoLCBpMzIuybVoLCBbaTMxLlZpZXdwb3J0UnVsZXIsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgaTMyLsm1ZiwgW1szLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMzIuT3ZlcmxheSwgaTMyLk92ZXJsYXksIFtpMzIuU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLCBpMzIuT3ZlcmxheUNvbnRhaW5lciwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMzIuybVoLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgaTAuQXBwbGljYXRpb25SZWYsIGkwLkluamVjdG9yLCBpMC5OZ1pvbmUsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuybVjLCBpMzIuybVkLCBbaTMyLk92ZXJsYXldKSwgaTAuybVtcGQoNDYwOCwgaTMzLkludGVyYWN0aXZpdHlDaGVja2VyLCBpMzMuSW50ZXJhY3Rpdml0eUNoZWNrZXIsIFtpMzAuUGxhdGZvcm1dKSwgaTAuybVtcGQoNDYwOCwgaTMzLkZvY3VzVHJhcEZhY3RvcnksIGkzMy5Gb2N1c1RyYXBGYWN0b3J5LCBbaTMzLkludGVyYWN0aXZpdHlDaGVja2VyLCBpMC5OZ1pvbmUsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCgxMzYxOTIsIGkzMy5BcmlhRGVzY3JpYmVyLCBpMzMuQVJJQV9ERVNDUklCRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzMuQXJpYURlc2NyaWJlcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzMuTGl2ZUFubm91bmNlciwgaTMzLkxJVkVfQU5OT1VOQ0VSX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTMzLkxpdmVBbm5vdW5jZXJdLCBbMiwgaTMzLkxJVkVfQU5OT1VOQ0VSX0VMRU1FTlRfVE9LRU5dLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNTEyMCwgaTMzLkZvY3VzTW9uaXRvciwgaTMzLkZPQ1VTX01PTklUT1JfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzMuRm9jdXNNb25pdG9yXSwgaTAuTmdab25lLCBpMzAuUGxhdGZvcm1dKSwgaTAuybVtcGQoNTEyMCwgaTM0Lk1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZLCBpMzQuTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVJfRkFDVE9SWSwgW2kzMi5PdmVybGF5XSksIGkwLsm1bXBkKDQ2MDgsIGkzNC5NYXREaWFsb2csIGkzNC5NYXREaWFsb2csIFtpMzIuT3ZlcmxheSwgaTAuSW5qZWN0b3IsIFsyLCBpMjIuTG9jYXRpb25dLCBpMzQuTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1ksIFszLCBpMzQuTWF0RGlhbG9nXV0pLCBpMC7JtW1wZCg1MTIwLCBpMzUuTWF0U29ydEhlYWRlckludGwsIGkzNS5NQVRfU09SVF9IRUFERVJfSU5UTF9QUk9WSURFUl9GQUNUT1JZLCBbWzMsIGkzNS5NYXRTb3J0SGVhZGVySW50bF1dKSwgaTAuybVtcGQoNDYwOCwgaTM2Lk1lZGlhTWF0Y2hlciwgaTM2Lk1lZGlhTWF0Y2hlciwgW2kzMC5QbGF0Zm9ybV0pLCBpMC7JtW1wZCgxMzU2ODAsIGkzNi5CcmVha3BvaW50T2JzZXJ2ZXIsIGkzNi5CcmVha3BvaW50T2JzZXJ2ZXIsIFtpMzYuTWVkaWFNYXRjaGVyLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNDYwOCwgaTM3Lk1hdFNuYWNrQmFyLCBpMzcuTWF0U25hY2tCYXIsIFtpMzIuT3ZlcmxheSwgaTMzLkxpdmVBbm5vdW5jZXIsIGkwLkluamVjdG9yLCBpMzYuQnJlYWtwb2ludE9ic2VydmVyLCBbMywgaTM3Lk1hdFNuYWNrQmFyXV0pLCBpMC7JtW1wZCg0NjA4LCBpMzguRXJyb3JTdGF0ZU1hdGNoZXIsIGkzOC5FcnJvclN0YXRlTWF0Y2hlciwgW10pLCBpMC7JtW1wZCg1MTIwLCBpMzkuQWN0aXZhdGVkUm91dGUsIGkzOS7JtWYsIFtpMzkuUm91dGVyXSksIGkwLsm1bXBkKDQ2MDgsIGkzOS5QcmVsb2FkQWxsTW9kdWxlcywgaTM5LlByZWxvYWRBbGxNb2R1bGVzLCBbXSksIGkwLsm1bXBkKDYxNDQsIGkzOS5QcmVsb2FkaW5nU3RyYXRlZ3ksIG51bGwsIFtpMzkuUHJlbG9hZEFsbE1vZHVsZXNdKSwgaTAuybVtcGQoMTM1NjgwLCBpMzkuUm91dGVyUHJlbG9hZGVyLCBpMzkuUm91dGVyUHJlbG9hZGVyLCBbaTM5LlJvdXRlciwgaTAuTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBpMC5Db21waWxlciwgaTAuSW5qZWN0b3IsIGkzOS5QcmVsb2FkaW5nU3RyYXRlZ3ldKSwgaTAuybVtcGQoNDYwOCwgaTM5Lk5vUHJlbG9hZGluZywgaTM5Lk5vUHJlbG9hZGluZywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMzkuUk9VVEVSX0lOSVRJQUxJWkVSLCBpMzkuybVpLCBbaTM5Lsm1Z10pLCBpMC7JtW1wZCg1MTIwLCBpMC5BUFBfQk9PVFNUUkFQX0xJU1RFTkVSLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTM5LlJPVVRFUl9JTklUSUFMSVpFUl0pLCBpMC7JtW1wZCg0NjA4LCBpNDAuTWVzc2FnZVNlcnZpY2UsIGk0MC5NZXNzYWdlU2VydmljZSwgW2kwLlBMQVRGT1JNX0lELCBpMzcuTWF0U25hY2tCYXJdKSwgaTAuybVtcGQoNDYwOCwgaTQxLlVzZXJTZXJ2aWNlLCBpNDEuVXNlclNlcnZpY2UsIFtpMC5QTEFURk9STV9JRCwgaTI4Lkh0dHBDbGllbnQsIGkzNC5NYXREaWFsb2csIGk0MC5NZXNzYWdlU2VydmljZSwgaTM3Lk1hdFNuYWNrQmFyXSksIGkwLsm1bXBkKDQ2MDgsIGk0Mi5BUElTZXJ2aWNlLCBpNDIuQVBJU2VydmljZSwgW2kyOC5IdHRwQ2xpZW50LCBpMzkuUm91dGVyLCBpNDEuVXNlclNlcnZpY2UsIGk0MC5NZXNzYWdlU2VydmljZV0pLCBpMC7JtW1wZCg0NjA4LCBpNDMuWW91VHViZVNlcnZpY2UsIGk0My5Zb3VUdWJlU2VydmljZSwgW2kyOC5IdHRwQ2xpZW50LCBpNDAuTWVzc2FnZVNlcnZpY2VdKSwgaTAuybVtcGQoNDYwOCwgaTQ0LlB1YmxpY2F0aW9uU2VydmljZSwgaTQ0LlB1YmxpY2F0aW9uU2VydmljZSwgW2k0Mi5BUElTZXJ2aWNlXSksIGkwLsm1bXBkKDQ2MDgsIGk0NS5Tb2NpYWxTZXJ2aWNlLCBpNDUuU29jaWFsU2VydmljZSwgW2kwLlBMQVRGT1JNX0lEXSksIGkwLsm1bXBkKDUxMiwgaTIyLkNvbW1vbk1vZHVsZSwgaTIyLkNvbW1vbk1vZHVsZSwgW10pLCBpMC7JtW1wZCgxMDI0LCBpMC5FcnJvckhhbmRsZXIsIGkyMy7JtWEsIFtdKSwgaTAuybVtcGQoMTAyNCwgaTAuTmdQcm9iZVRva2VuLCBmdW5jdGlvbiAoKSB7IHJldHVybiBbaTM5Lsm1YigpXTsgfSwgW10pLCBpMC7JtW1wZCgyNTYsIGkwLkFQUF9JRCwgXCJudWxsLXZudWxsXCIsIFtdKSwgaTAuybVtcGQoMjA0OCwgaTIzLsm1VFJBTlNJVElPTl9JRCwgbnVsbCwgW2kwLkFQUF9JRF0pLCBpMC7JtW1wZCg1MTIsIGkzOS7JtWcsIGkzOS7JtWcsIFtpMC5JbmplY3Rvcl0pLCBpMC7JtW1wZCgxMDI0LCBpMC5BUFBfSU5JVElBTElaRVIsIGZ1bmN0aW9uIChwMF8wLCBwMV8wLCBwMV8xLCBwMV8yLCBwMl8wKSB7IHJldHVybiBbaTIzLsm1aChwMF8wKSwgaTIzLsm1ZihwMV8wLCBwMV8xLCBwMV8yKSwgaTM5Lsm1aChwMl8wKV07IH0sIFtbMiwgaTAuTmdQcm9iZVRva2VuXSwgaTIzLsm1VFJBTlNJVElPTl9JRCwgaTIyLkRPQ1VNRU5ULCBpMC5JbmplY3RvciwgaTM5Lsm1Z10pLCBpMC7JtW1wZCg1MTIsIGkwLkFwcGxpY2F0aW9uSW5pdFN0YXR1cywgaTAuQXBwbGljYXRpb25Jbml0U3RhdHVzLCBbWzIsIGkwLkFQUF9JTklUSUFMSVpFUl1dKSwgaTAuybVtcGQoMTMxNTg0LCBpMC5BcHBsaWNhdGlvblJlZiwgaTAuQXBwbGljYXRpb25SZWYsIFtpMC5OZ1pvbmUsIGkwLsm1Q29uc29sZSwgaTAuSW5qZWN0b3IsIGkwLkVycm9ySGFuZGxlciwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMC5BcHBsaWNhdGlvbkluaXRTdGF0dXNdKSwgaTAuybVtcGQoNTEyLCBpMC5BcHBsaWNhdGlvbk1vZHVsZSwgaTAuQXBwbGljYXRpb25Nb2R1bGUsIFtpMC5BcHBsaWNhdGlvblJlZl0pLCBpMC7JtW1wZCg1MTIsIGkyMy5Ccm93c2VyTW9kdWxlLCBpMjMuQnJvd3Nlck1vZHVsZSwgW1szLCBpMjMuQnJvd3Nlck1vZHVsZV1dKSwgaTAuybVtcGQoNTEyLCBpMjUuQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsIGkyNS5Ccm93c2VyQW5pbWF0aW9uc01vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyNy7JtWJhLCBpMjcuybViYSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyNy5Gb3Jtc01vZHVsZSwgaTI3LkZvcm1zTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI3LlJlYWN0aXZlRm9ybXNNb2R1bGUsIGkyNy5SZWFjdGl2ZUZvcm1zTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI4Lkh0dHBDbGllbnRYc3JmTW9kdWxlLCBpMjguSHR0cENsaWVudFhzcmZNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjguSHR0cENsaWVudE1vZHVsZSwgaTI4Lkh0dHBDbGllbnRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjkuQmlkaU1vZHVsZSwgaTI5LkJpZGlNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNDYuUG9ydGFsTW9kdWxlLCBpNDYuUG9ydGFsTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTMwLlBsYXRmb3JtTW9kdWxlLCBpMzAuUGxhdGZvcm1Nb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzEuU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsIGkzMS5TY3JvbGxEaXNwYXRjaE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzMi5PdmVybGF5TW9kdWxlLCBpMzIuT3ZlcmxheU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzMy5BMTF5TW9kdWxlLCBpMzMuQTExeU1vZHVsZSwgW10pLCBpMC7JtW1wZCgyNTYsIGkzOC5NQVRFUklBTF9TQU5JVFlfQ0hFQ0tTLCB0cnVlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM4Lk1hdENvbW1vbk1vZHVsZSwgaTM4Lk1hdENvbW1vbk1vZHVsZSwgW1syLCBpMzguTUFURVJJQUxfU0FOSVRZX0NIRUNLU11dKSwgaTAuybVtcGQoNTEyLCBpMzQuTWF0RGlhbG9nTW9kdWxlLCBpMzQuTWF0RGlhbG9nTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM1Lk1hdFNvcnRNb2R1bGUsIGkzNS5NYXRTb3J0TW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTQ3LkNka1RhYmxlTW9kdWxlLCBpNDcuQ2RrVGFibGVNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNDguTWF0VGFibGVNb2R1bGUsIGk0OC5NYXRUYWJsZU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzNi5MYXlvdXRNb2R1bGUsIGkzNi5MYXlvdXRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzcuTWF0U25hY2tCYXJNb2R1bGUsIGkzNy5NYXRTbmFja0Jhck1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGk0OS5NYXRGb3JtRmllbGRNb2R1bGUsIGk0OS5NYXRGb3JtRmllbGRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNTAuTWF0SW5wdXRNb2R1bGUsIGk1MC5NYXRJbnB1dE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzOC5NYXRSaXBwbGVNb2R1bGUsIGkzOC5NYXRSaXBwbGVNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNTEuTWF0QnV0dG9uTW9kdWxlLCBpNTEuTWF0QnV0dG9uTW9kdWxlLCBbXSksIGkwLsm1bXBkKDEwMjQsIGkzOS7JtWEsIGkzOS7JtWQsIFtbMywgaTM5LlJvdXRlcl1dKSwgaTAuybVtcGQoNTEyLCBpMzkuVXJsU2VyaWFsaXplciwgaTM5LkRlZmF1bHRVcmxTZXJpYWxpemVyLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM5LkNoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGkzOS5DaGlsZHJlbk91dGxldENvbnRleHRzLCBbXSksIGkwLsm1bXBkKDI1NiwgaTM5LlJPVVRFUl9DT05GSUdVUkFUSU9OLCB7IHVzZUhhc2g6IGZhbHNlLCBwcmVsb2FkaW5nU3RyYXRlZ3k6IGkzOS5QcmVsb2FkQWxsTW9kdWxlcyB9LCBbXSksIGkwLsm1bXBkKDEwMjQsIGkyMi5Mb2NhdGlvblN0cmF0ZWd5LCBpMzkuybVjLCBbaTIyLlBsYXRmb3JtTG9jYXRpb24sIFsyLCBpMjIuQVBQX0JBU0VfSFJFRl0sIGkzOS5ST1VURVJfQ09ORklHVVJBVElPTl0pLCBpMC7JtW1wZCg1MTIsIGkyMi5Mb2NhdGlvbiwgaTIyLkxvY2F0aW9uLCBbaTIyLkxvY2F0aW9uU3RyYXRlZ3ldKSwgaTAuybVtcGQoNTEyLCBpMC5Db21waWxlciwgaTAuQ29tcGlsZXIsIFtdKSwgaTAuybVtcGQoNTEyLCBpMC5OZ01vZHVsZUZhY3RvcnlMb2FkZXIsIGkwLlN5c3RlbUpzTmdNb2R1bGVMb2FkZXIsIFtpMC5Db21waWxlciwgWzIsIGkwLlN5c3RlbUpzTmdNb2R1bGVMb2FkZXJDb25maWddXSksIGkwLsm1bXBkKDEwMjQsIGkzOS5ST1VURVMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtbeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IGk1Mi5QYWdlTWFpbkNvbXBvbmVudCB9LCB7IHBhdGg6IFwiMTAxXCIsIGNvbXBvbmVudDogaTUzLlBhZ2UxMDFDb21wb25lbnQgfSwgeyBwYXRoOiBcImN1cnJlbmNpZXMvOmlkXCIsIGNvbXBvbmVudDogaTU0LlBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50IH0sIHsgcGF0aDogXCJjdXJyZW5jaWVzXCIsIGNvbXBvbmVudDogaTU1LlBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCB9LCB7IHBhdGg6IFwiZXZlbnRzLzppZFwiLCBjb21wb25lbnQ6IGk1Ni5QYWdlRXZlbnRzQ29tcG9uZW50IH0sIHsgcGF0aDogXCJldmVudHNcIiwgY29tcG9uZW50OiBpNTcuUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQgfSwgeyBwYXRoOiBcImV4Y2hhbmdlcy86aWRcIiwgY29tcG9uZW50OiBpNTguUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCB9LCB7IHBhdGg6IFwiZXhjaGFuZ2VzXCIsIGNvbXBvbmVudDogaTU5LlBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50IH0sIHsgcGF0aDogXCJpY28vOmlkXCIsIGNvbXBvbmVudDogaTYwLlBhZ2VJQ09Db21wb25lbnQgfSwgeyBwYXRoOiBcImljb1wiLCBjb21wb25lbnQ6IGk2MS5QYWdlSUNPSXRlbUNvbXBvbmVudCB9LCB7IHBhdGg6IFwibWFya2V0cy86aWRcIiwgY29tcG9uZW50OiBpNjIuUGFnZU1hcmtldHNDb21wb25lbnQgfSwgeyBwYXRoOiBcIm1hcmtldHNcIiwgY29tcG9uZW50OiBpNjMuUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50IH0sIHsgcGF0aDogXCI6c2VjdGlvblwiLCBjb21wb25lbnQ6IGk2NC5QYWdlU2VjdGlvbkNvbXBvbmVudCB9LCB7IHBhdGg6IFwiOmRhdGUvOnVybFwiLCBjb21wb25lbnQ6IGk2NS5QYWdlQXJ0aWNsZUNvbXBvbmVudCB9LCB7IHBhdGg6IFwiKipcIiwgY29tcG9uZW50OiBpNjYuTm9Db250ZW50Q29tcG9uZW50IH1dXTsgfSwgW10pLCBpMC7JtW1wZCgxMDI0LCBpMzkuUm91dGVyLCBpMzkuybVlLCBbaTAuQXBwbGljYXRpb25SZWYsIGkzOS5VcmxTZXJpYWxpemVyLCBpMzkuQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgaTIyLkxvY2F0aW9uLCBpMC5JbmplY3RvciwgaTAuTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBpMC5Db21waWxlciwgaTM5LlJPVVRFUywgaTM5LlJPVVRFUl9DT05GSUdVUkFUSU9OLCBbMiwgaTM5LlVybEhhbmRsaW5nU3RyYXRlZ3ldLCBbMiwgaTM5LlJvdXRlUmV1c2VTdHJhdGVneV1dKSwgaTAuybVtcGQoNTEyLCBpMzkuUm91dGVyTW9kdWxlLCBpMzkuUm91dGVyTW9kdWxlLCBbWzIsIGkzOS7JtWFdLCBbMiwgaTM5LlJvdXRlcl1dKSwgaTAuybVtcGQoNTEyLCBpMS5BcHBNb2R1bGUsIGkxLkFwcE1vZHVsZSwgW10pLCBpMC7JtW1wZCgyNTYsIGkyOC7JtWUsIFwiWFNSRi1UT0tFTlwiLCBbXSksIGkwLsm1bXBkKDI1NiwgaTI4Lsm1ZiwgXCJYLVhTUkYtVE9LRU5cIiwgW10pXSk7IH0pO1xuZXhwb3J0IHsgQXBwTW9kdWxlTmdGYWN0b3J5IGFzIEFwcE1vZHVsZU5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAubW9kdWxlLm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXIsIGVuYWJsZURlYnVnVG9vbHMsIGRpc2FibGVEZWJ1Z1Rvb2xzIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBcHBNb2R1bGVOZ0ZhY3RvcnkgfSBmcm9tICcuL2FwcC5tb2R1bGUubmdmYWN0b3J5JztcbmNvbnNvbGUubG9nKGAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfSB2JHtwcm9jZXNzLmVudi5BUFBfVkVSU0lPTn1gKTtcbmxldCBkZWNvcmF0ZU1vZHVsZVJlZiA9ICh2YWx1ZSkgPT4gdmFsdWU7XG5jb25zdCDJtTAgPSBkZWNvcmF0ZU1vZHVsZVJlZjtcbmlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGRlY29yYXRlTW9kdWxlUmVmID0gKG1vZFJlZikgPT4ge1xuICAgICAgICBjb25zdCBhcHBSZWYgPSBtb2RSZWYuaW5qZWN0b3IuZ2V0KEFwcGxpY2F0aW9uUmVmKTtcbiAgICAgICAgY29uc3QgY21wUmVmID0gYXBwUmVmLmNvbXBvbmVudHNbMF07XG4gICAgICAgIGxldCBuZyA9IHdpbmRvdy5uZztcbiAgICAgICAgZW5hYmxlRGVidWdUb29scyhjbXBSZWYpO1xuICAgICAgICB3aW5kb3cubmcucHJvYmUgPSBuZy5wcm9iZTtcbiAgICAgICAgd2luZG93Lm5nLmNvcmVUb2tlbnMgPSBuZy5jb3JlVG9rZW5zO1xuICAgICAgICByZXR1cm4gbW9kUmVmO1xuICAgIH07XG59XG5lbHNlIHtcbiAgICBlbmFibGVQcm9kTW9kZSgpO1xuICAgIGRlY29yYXRlTW9kdWxlUmVmID0gKG1vZFJlZikgPT4ge1xuICAgICAgICBkaXNhYmxlRGVidWdUb29scygpO1xuICAgICAgICByZXR1cm4gbW9kUmVmO1xuICAgIH07XG59XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIHJldHVybiBwbGF0Zm9ybUJyb3dzZXIoKVxuICAgICAgICAuYm9vdHN0cmFwTW9kdWxlRmFjdG9yeShBcHBNb2R1bGVOZ0ZhY3RvcnkpXG4gICAgICAgIC50aGVuKGRlY29yYXRlTW9kdWxlUmVmKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbn1cbmNvbnN0IGRvbVJlYWR5SGFuZGxlciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZG9tUmVhZHlIYW5kbGVyKTtcbiAgICBtYWluKCk7XG59O1xuY29uc3QgybUxID0gZG9tUmVhZHlIYW5kbGVyO1xuc3dpdGNoIChkb2N1bWVudC5yZWFkeVN0YXRlKSB7XG4gICAgY2FzZSAnbG9hZGluZyc6XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkb21SZWFkeUhhbmRsZXIpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdpbnRlcmFjdGl2ZSc6XG4gICAgY2FzZSAnY29tcGxldGUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICAgIG1haW4oKTtcbn1cbmV4cG9ydCB7IMm1MCwgybUxIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4uZnJvbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiXSwic291cmNlUm9vdCI6IiJ9