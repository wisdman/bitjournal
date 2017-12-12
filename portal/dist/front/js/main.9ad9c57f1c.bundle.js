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

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/zone.js/dist/zone.js
var zone = __webpack_require__(94);
var zone_default = /*#__PURE__*/__webpack_require__.n(zone);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(21);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(13);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/router/esm5/router.js
var router = __webpack_require__(3);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/common/esm5/http.js
var http = __webpack_require__(37);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/Observable.js
var Observable = __webpack_require__(5);
var Observable_default = /*#__PURE__*/__webpack_require__.n(Observable);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/observable/of.js
var of = __webpack_require__(56);
var of_default = /*#__PURE__*/__webpack_require__.n(of);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/catch.js
var operator_catch = __webpack_require__(57);
var catch_default = /*#__PURE__*/__webpack_require__.n(operator_catch);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/filter.js
var filter = __webpack_require__(58);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/map.js
var map = __webpack_require__(59);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(2);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/material.es5.js + 26 modules
var material_es5 = __webpack_require__(43);

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
        this._title.setTitle(title);
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


// CONCATENATED MODULE: ./services/index.ts







// CONCATENATED MODULE: ./components/article/article.component.ts


const API_PUBLICATIONS = 'publications';
class ArticleComponent {
    constructor(_api, _meta) {
        this._api = _api;
        this._meta = _meta;
    }
    setMetaTags(item) {
        this._meta.setMetaTags({
            title: item.title,
            description: item.description,
            ogTitle: item.ogTitle,
            ogDescription: item.ogDescription,
            ogImage: item.ogImage || undefined
        });
    }
    ngOnInit() {
        this.items = this._api
            .get(`/${API_PUBLICATIONS}/${this.value.date}/${this.value.url}`)
            .map(item => {
            this.setMetaTags(item);
            return new Array(item);
        });
    }
}

// CONCATENATED MODULE: ./components/article/index.ts


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



const page_article_component_API_PUBLICATIONS = 'publications';
class PageArticleComponent {
    constructor(_route, _api) {
        this._route = _route;
        this._api = _api;
    }
    ngOnInit() {
        this.item = this._route
            .params
            .map(params => {
            const date = String(params['date']).trim();
            const url = String(params['url']).trim();
            return { url, date };
        });
        this.publications = this._api
            .get(`/${page_article_component_API_PUBLICATIONS}?limit=12`);
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



const page_main_component_API_PUBLICATIONS = 'publications';
class PageMainComponent {
    constructor(_route, _api, _meta) {
        this._route = _route;
        this._api = _api;
        this._meta = _meta;
    }
    setMetaTags() { }
    ngOnInit() {
        this.publications_weight_0 = this._api
            .get(`/${page_main_component_API_PUBLICATIONS}?weight=0&limit=30`);
        this.publications_weight_12 = this._api
            .get(`/${page_main_component_API_PUBLICATIONS}?weight=1,2&limit=30`);
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


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/mergeAll.js
var mergeAll = __webpack_require__(143);
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
    PubLineComponent,
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
var styles = [".bj-page-main__wrapper{display:block;max-width:var(--max-width);margin:0 auto;padding:var(--indent-double) 0}@media (min-width:600px){.bj-page-main__wrapper{padding:var(--indent-double) var(--indent-base)}}.bj-page-main__row{width:100%;display:flex;justify-content:flex-start;align-items:stretch}.bj-page-main__col{flex:1 1 auto}.bj-page-main__aside{width:var(--aside-width);flex:0 0 var(--aside-width);margin-left:var(--indent-double);flex-direction:column;justify-content:flex-start;align-items:center;display:none}@media (min-width:700px){.bj-page-main__aside{display:flex}}.bj-page-main__card{margin-top:var(--indent-double)}.bj-page-main__card:first-child{margin-top:0}@supports (display:grid){@media (min-width:1000px){.bj-page-main__card{margin-top:0}.bj-page-main__card--wide{grid-column-end:span 2}.bj-page-main__col--grid{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:var(--indent-double);grid-row-gap:var(--indent-double);grid-auto-flow:dense}}@media (min-width:1200px){.bj-page-main__col--grid{grid-template-columns:1fr 1fr 1fr}}}"];


// CONCATENATED MODULE: ./components/pub-card/pub-card.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var pub_card_component_css_ngstyle_styles = [".bj-pub-card{display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start;max-width:100%;text-decoration:none;text-transform:none;color:var(--color-main)}.bj-pub-card__figure{flex:0 0 100%;width:100%;min-height:calc(100vw/1.5);position:relative;margin:0;padding:0;background:#f6f6f6;display:flex;flex-direction:column;justify-content:space-between}@media (min-width:600px){.bj-pub-card__figure{min-height:250px}}.bj-pub-card__picture{position:absolute;left:0;top:0;right:0;bottom:0;height:100%;overflow:hidden;background:#f9f9f9}.bj-pub-card__picture,.bj-pub-card__picture img,.bj-pub-card__row{display:block;box-sizing:border-box;width:100%}.bj-pub-card__picture img{min-width:100%;min-height:100%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover;position:absolute}.bj-pub-card__row{position:relative;padding:var(--indent-base) 0}.bj-pub-card__row--dark{background:linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.1) 10%,rgba(0,0,0,.7) 100%);padding-top:var(--indent-double)}.bj-pub-card__h2{margin:0 0 -.1em;font-family:inherit;font-size:1.5rem;font-weight:300;line-height:1.35;color:#fff;text-shadow:0 0 13px rgba(0,0,0,.7)}.bj-pub-card__datetime,.bj-pub-card__h1,.bj-pub-card__h2{display:block;box-sizing:border-box;padding:0 var(--indent-base)}.bj-pub-card__h1{flex:0 0 100%;width:100%;margin:0;font-family:inherit;line-height:1.35;margin-top:var(--indent-half);font-size:1.25rem}.bj-pub-card__datetime{margin-top:var(--indent-base);color:#73787e;font-size:.85rem}"];


// CONCATENATED MODULE: ./components/pub-card/pub-card.component.ngfactory.js
/** PURE_IMPORTS_START _pub_card.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_angular_common,_pub_card.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _pub_card.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_angular_common,_pub_card.component PURE_IMPORTS_END */






var styles_PubCardComponent = [pub_card_component_css_ngstyle_styles];
var RenderType_PubCardComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PubCardComponent, data: {} });

function View_PubCardComponent_1(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "figcaption", [["class", "bj-pub-card__row bj-pub-card__row--dark"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [["class", "bj-pub-card__h2"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value.bigTitle; _ck(_v, 2, 0, currVal_0); }); }
function View_PubCardComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 6, "figure", [["class", "bj-pub-card__figure"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 2, "picture", [["class", "bj-pub-card__picture"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_18" /* ɵppd */](5, 1), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 0, "figcaption", [["class", "bj-pub-card__row"]], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_PubCardComponent_1)), core["_2" /* ɵdid */](8, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 3, "time", [["class", "bj-pub-card__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_18" /* ɵppd */](10, 1), (_l()(), core["_22" /* ɵted */](11, null, ["", ""])), core["_18" /* ɵppd */](12, 2), (_l()(), core["_3" /* ɵeld */](13, 0, null, null, 1, "h1", [["class", "bj-pub-card__h1"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](14, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = !!_co.value.bigTitle; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 4, 0, _ck(_v, 5, 0, core["_15" /* ɵnov */](_v, 0), _co.value.image)); _ck(_v, 4, 0, currVal_0); var currVal_2 = core["_23" /* ɵunv */](_v, 9, 0, _ck(_v, 10, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts)); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_23" /* ɵunv */](_v, 11, 0, _ck(_v, 12, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts, "HR")); _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.value.title; _ck(_v, 14, 0, currVal_4); }); }
function View_PubCardComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-pub-card"]], null, null, null, View_PubCardComponent_0, RenderType_PubCardComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, PubCardComponent, [], null, null)], null, null); }
var PubCardComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-pub-card", PubCardComponent, View_PubCardComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pub-line/pub-line.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var pub_line_component_css_ngstyle_styles = [".bj-pub-line{display:flex;margin-top:var(--indent-base);text-decoration:none;text-transform:none;color:var(--color-main)}.bj-pub-line__picture{display:block;position:relative;width:60px;min-width:60px;max-width:60px;height:60px;min-height:60px;max-height:60px;flex:0 0 60px;border-radius:50%;overflow:hidden;margin-right:var(--indent-base);background:#f9f9f9}.bj-pub-line__picture img{display:block;box-sizing:border-box;position:absolute;min-width:100%;min-height:100%;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover}.bj-pub-line__data{flex:1 1 auto}.bj-pub-line__datetime,.bj-pub-line__h1{display:block;box-sizing:border-box;padding:0}.bj-pub-line__datetime{color:#aaa;font-size:12px;margin:0}.bj-pub-line__h1{width:100%;margin:5px 0 0;font-family:inherit;font-size:1rem;line-height:1.4}"];


// CONCATENATED MODULE: ./components/pub-line/pub-line.component.ngfactory.js
/** PURE_IMPORTS_START _pub_line.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_pub_line.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _pub_line.component.css.ngstyle,_angular_core,_.._pipes_image_image.pipe,_.._pipes_timestamp_timestamp,_pub_line.component PURE_IMPORTS_END */





var styles_PubLineComponent = [pub_line_component_css_ngstyle_styles];
var RenderType_PubLineComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PubLineComponent, data: {} });

function View_PubLineComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, image_pipe_ImagePipe, []), core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 2, "picture", [["class", "bj-pub-line__picture"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_18" /* ɵppd */](4, 1), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 6, "div", [["class", "bj-pub-line__data"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 3, "time", [["class", "bj-pub-line__datetime"]], [[1, "datetime", 0]], null, null, null, null)), core["_18" /* ɵppd */](7, 1), (_l()(), core["_22" /* ɵted */](8, null, ["", ""])), core["_18" /* ɵppd */](9, 2), (_l()(), core["_3" /* ɵeld */](10, 0, null, null, 1, "h1", [["class", "bj-pub-line__h1"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](11, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 3, 0, _ck(_v, 4, 0, core["_15" /* ɵnov */](_v, 0), _co.value.image)); _ck(_v, 3, 0, currVal_0); var currVal_1 = core["_23" /* ɵunv */](_v, 6, 0, _ck(_v, 7, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts)); _ck(_v, 6, 0, currVal_1); var currVal_2 = core["_23" /* ɵunv */](_v, 8, 0, _ck(_v, 9, 0, core["_15" /* ɵnov */](_v, 1), _co.value.ts, "HR")); _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.value.title; _ck(_v, 11, 0, currVal_3); }); }
function View_PubLineComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-pub-line"]], null, null, null, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, PubLineComponent, [], null, null)], null, null); }
var PubLineComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-pub-line", PubLineComponent, View_PubLineComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pages/main/page-main.component.ngfactory.js
/** PURE_IMPORTS_START _page_main.component.css.ngstyle,_angular_core,_.._pub_card_pub_card.component.ngfactory,_angular_router,_angular_common,_.._pub_card_pub_card.component,_.._pub_line_pub_line.component.ngfactory,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_page_main.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_main.component.css.ngstyle,_angular_core,_.._pub_card_pub_card.component.ngfactory,_angular_router,_angular_common,_.._pub_card_pub_card.component,_.._pub_line_pub_line.component.ngfactory,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_page_main.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service PURE_IMPORTS_END */












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
        }, View_PubCardComponent_0, RenderType_PubCardComponent)), core["_2" /* ɵdid */](1, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵppd */](2, 2), core["_16" /* ɵpad */](3, 2), core["_2" /* ɵdid */](4, 49152, null, 0, PubCardComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_3 = _ck(_v, 3, 0, core["_23" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "URL")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_3); var currVal_4 = _v.context.$implicit; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.weight > 1); var currVal_1 = core["_15" /* ɵnov */](_v, 1).target; var currVal_2 = core["_15" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); });
}
function View_PageMainComponent_2(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "a", [["class", "bj-pub-line"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_2" /* ɵdid */](1, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵppd */](2, 2), core["_16" /* ɵpad */](3, 2), core["_2" /* ɵdid */](4, 49152, null, 0, PubLineComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, core["_23" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "URL")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).target; var currVal_1 = core["_15" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageMainComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 11, "main", [["class", "bj-page-main__wrapper"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 10, "div", [["class", "bj-page-main__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 3, "div", [["class", "bj-page-main__col bj-page-main__col--grid"]], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageMainComponent_1)), core["_2" /* ɵdid */](5, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 5, "aside", [["class", "bj-page-main__aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 1, "h1", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageMainComponent_2)), core["_2" /* ɵdid */](11, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 5, 0, core["_15" /* ɵnov */](_v, 6).transform(_co.publications_weight_12)); _ck(_v, 5, 0, currVal_0); var currVal_1 = core["_23" /* ɵunv */](_v, 11, 0, core["_15" /* ɵnov */](_v, 12).transform(_co.publications_weight_0)); _ck(_v, 11, 0, currVal_1); }, null); }
function View_PageMainComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-main", [], null, null, null, View_PageMainComponent_0, RenderType_PageMainComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMainComponent, [router["a" /* ActivatedRoute */], api_service_APIService, meta_service_MetaService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMainComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-main", PageMainComponent, View_PageMainComponent_Host_0, {}, {}, []);


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
function View_VideoRibbonComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VideoRibbonComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("video-ribbon", video_ribbon_component_VideoRibbonComponent, View_VideoRibbonComponent_Host_0, {}, {}, []);


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


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies-item.component.ngfactory.js
/** PURE_IMPORTS_START _page_currencies_item.component.css.ngstyle,_angular_core,_page_currencies_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_currencies_item.component.css.ngstyle,_angular_core,_page_currencies_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageCurrenciesItemComponent = [page_currencies_item_component_css_ngstyle_styles];
var RenderType_PageCurrenciesItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageCurrenciesItemComponent, data: {} });

function View_PageCurrenciesItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
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
/** PURE_IMPORTS_START _page_events_item.component.css.ngstyle,_angular_core,_page_events_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_events_item.component.css.ngstyle,_angular_core,_page_events_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageEventsItemComponent = [page_events_item_component_css_ngstyle_styles];
var RenderType_PageEventsItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageEventsItemComponent, data: {} });

function View_PageEventsItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
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
/** PURE_IMPORTS_START _page_exchanges_item.component.css.ngstyle,_angular_core,_page_exchanges_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_exchanges_item.component.css.ngstyle,_angular_core,_page_exchanges_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageExchangesItemComponent = [page_exchanges_item_component_css_ngstyle_styles];
var RenderType_PageExchangesItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageExchangesItemComponent, data: {} });

function View_PageExchangesItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
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
/** PURE_IMPORTS_START _page_ico_item.component.css.ngstyle,_angular_core,_page_ico_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_ico_item.component.css.ngstyle,_angular_core,_page_ico_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageICOItemComponent = [page_ico_item_component_css_ngstyle_styles];
var RenderType_PageICOItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageICOItemComponent, data: {} });

function View_PageICOItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
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
/** PURE_IMPORTS_START _page_markets_item.component.css.ngstyle,_angular_core,_page_markets_item.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_markets_item.component.css.ngstyle,_angular_core,_page_markets_item.component,_angular_router PURE_IMPORTS_END */




var styles_PageMarketsItemComponent = [page_markets_item_component_css_ngstyle_styles];
var RenderType_PageMarketsItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMarketsItemComponent, data: {} });

function View_PageMarketsItemComponent_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "article", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "aside", [], null, null, null, null, null))], null, null); }
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
var page_article_component_css_ngstyle_styles = [".bj-article{display:block;flex:0 0 100%;width:100%}"];


// CONCATENATED MODULE: ./components/article/article.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var article_component_css_ngstyle_styles = [".bj-article{display:block;flex:1 1 auto}.bj-article__wrapper{display:block;width:100%}.bj-article__header{position:relative;width:100%}.bj-article__header__picture,.bj-article__header__picture img{display:block;box-sizing:border-box;position:absolute;width:100%}.bj-article__header__picture{right:0;bottom:0;height:100%;overflow:hidden;background:#f9f9f9;left:0;top:0}.bj-article__header__picture img{min-width:100%;min-height:100%;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover}"];


// CONCATENATED MODULE: ./components/article/article.component.ngfactory.js
/** PURE_IMPORTS_START _article.component.css.ngstyle,_angular_core,_angular_common,_.._pipes_image_image.pipe,_article.component,_.._services_api_api.service,_.._services_meta_meta.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _article.component.css.ngstyle,_angular_core,_angular_common,_.._pipes_image_image.pipe,_article.component,_.._services_api_api.service,_.._services_meta_meta.service PURE_IMPORTS_END */







var styles_ArticleComponent = [article_component_css_ngstyle_styles];
var RenderType_ArticleComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_ArticleComponent, data: {} });

function View_ArticleComponent_2(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "h2", [["class", "bj-article__header__h2"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.bigTitle; _ck(_v, 1, 0, currVal_0); }); }
function View_ArticleComponent_1(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 9, "div", [["class", "bj-article__wrapper"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 7, "div", [["class", "bj-article__header"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 2, "picture", [["class", "bj-article__header__picture"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_18" /* ɵppd */](4, 1), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_ArticleComponent_2)), core["_2" /* ɵdid */](6, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 1, "h1", [["class", "bj-article__header__h1"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](8, null, ["", ""])), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 0, "div", [["class", "bj-article__content .article"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_1 = !!_v.context.$implicit.bigTitle; _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_23" /* ɵunv */](_v, 3, 0, _ck(_v, 4, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.image)); _ck(_v, 3, 0, currVal_0); var currVal_2 = _v.context.$implicit.title; _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.context.$implicit.content; _ck(_v, 9, 0, currVal_3); }); }
function View_ArticleComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, image_pipe_ImagePipe, []), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_ArticleComponent_1)), core["_2" /* ɵdid */](2, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 2, 0, core["_15" /* ɵnov */](_v, 3).transform(_co.items)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ArticleComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-article"]], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [api_service_APIService, meta_service_MetaService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ArticleComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-article", ArticleComponent, View_ArticleComponent_Host_0, { value: "value" }, {}, []);


// CONCATENATED MODULE: ./components/pages/article/page-article.component.ngfactory.js
/** PURE_IMPORTS_START _page_article.component.css.ngstyle,_angular_core,_.._pub_line_pub_line.component.ngfactory,_angular_router,_angular_common,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_.._article_article.component.ngfactory,_.._article_article.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_page_article.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _page_article.component.css.ngstyle,_angular_core,_.._pub_line_pub_line.component.ngfactory,_angular_router,_angular_common,_.._pub_line_pub_line.component,_.._.._pipes_timestamp_timestamp,_.._article_article.component.ngfactory,_.._article_article.component,_.._.._services_api_api.service,_.._.._services_meta_meta.service,_page_article.component PURE_IMPORTS_END */












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
        }, View_PubLineComponent_0, RenderType_PubLineComponent)), core["_2" /* ɵdid */](1, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), core["_18" /* ɵppd */](2, 2), core["_16" /* ɵpad */](3, 2), core["_2" /* ɵdid */](4, 49152, null, 0, PubLineComponent, [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, core["_23" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.ts, "URL")), _v.context.$implicit.url); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).target; var currVal_1 = core["_15" /* ɵnov */](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_PageArticleComponent_0(_l) { return core["_24" /* ɵvid */](0, [core["_17" /* ɵpid */](0, timestamp_TimestampPipe, []), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 10, "main", [["class", "bj-grid"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 9, "div", [["class", "bj-grid__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 2, "article", [["class", "bj-grid__col bj-article"]], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](4, 114688, null, 0, ArticleComponent, [api_service_APIService, meta_service_MetaService], { value: [0, "value"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 5, "aside", [["class", "bj-grid__aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 1, "h1", [["class", "column-header"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0442\u0430\u043A\u0436\u0435"])), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageArticleComponent_1)), core["_2" /* ɵdid */](10, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_17" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_23" /* ɵunv */](_v, 4, 0, core["_15" /* ɵnov */](_v, 5).transform(_co.item)); _ck(_v, 4, 0, currVal_0); var currVal_1 = core["_23" /* ɵunv */](_v, 10, 0, core["_15" /* ɵnov */](_v, 11).transform(_co.publications)); _ck(_v, 10, 0, currVal_1); }, null); }
function View_PageArticleComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-article", [], null, null, null, View_PageArticleComponent_0, RenderType_PageArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageArticleComponent, [router["a" /* ActivatedRoute */], api_service_APIService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
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
var dialog_es5 = __webpack_require__(39);

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
var button_es5 = __webpack_require__(33);

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
        }, null, null)), core["_2" /* ɵdid */](5, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 0, "img", [["alt", "BitJournal"], ["src", "/svg/logo.svg"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 4, "nav", [["class", "bj-header__nav"]], [[2, "bj-header__nav--show", null]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](8, 0, null, null, 3, "a", [["class", "bj-header__button"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](9, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_3" /* ɵeld */](12, 0, null, null, 1, "button", [["class", "bj-header__button bj-header__button--icon"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](13, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](14, 0, null, null, 3, "div", [["class", "bj-header__row-wrapper"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](15, 0, null, null, 2, "div", [["class", "bj-header__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](16, 0, null, null, 1, "currencies-ribbon", [], null, null, null, View_CurrenciesRsibbonComponent_0, RenderType_CurrenciesRsibbonComponent)), core["_2" /* ɵdid */](17, 114688, null, 0, CurrenciesRsibbonComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 5, 0, currVal_2); var currVal_6 = "/"; _ck(_v, 9, 0, currVal_6); _ck(_v, 17, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_15" /* ɵnov */](_v, 5).target; var currVal_1 = core["_15" /* ɵnov */](_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = _co.navBarVisibility; _ck(_v, 7, 0, currVal_3); var currVal_4 = core["_15" /* ɵnov */](_v, 9).target; var currVal_5 = core["_15" /* ɵnov */](_v, 9).href; _ck(_v, 8, 0, currVal_4, currVal_5); });
}
function View_HeaderComponent_Host_0(_l) { return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "bj-header"]], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */](".bj-header", HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/footer/footer.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var footer_component_css_ngstyle_styles = [".bj-footer,.bj-footer__logo{display:block;overflow:hidden;background:var(--color-main)}.bj-footer{padding:0 0 var(--indent-double);color:#fff;position:relative;width:100%}.bj-footer__logo{position:absolute;left:-100px;top:-100px;height:200px;width:200px;border:3px solid #fff;border-radius:50%;z-index:800;cursor:pointer}.bj-footer__logo img{display:block;position:absolute;top:119px;left:107px;height:38px;width:auto}.bj-footer__nav{margin:0 auto;max-width:var(--max-width);padding:var(--indent-base) var(--indent-base) var(--indent-base) calc(100px + var(--indent-base));min-height:100px;display:block}@media (min-width:1200px){.bj-footer__nav{padding:var(--indent-base) var(--indent-double) var(--indent-base) calc(100px + var(--indent-double))}}.bj-footer__nav__row{width:100%;display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:flex-start}.bj-footer__nav__item{margin:0 0 1em 1em;border-bottom:1px solid #fff;padding-bottom:.1em;text-transform:none;text-decoration:none;font-family:inherit;font-size:100%;font-style:normal;color:inherit;white-space:nowrap}.bj-footer__nav__item:first-child{margin-left:0}.bj-footer__nav__item--donate{color:#ef6c00;border-bottom-color:#ef6c00}.bj-footer__row{margin-top:0 auto;max-width:var(--max-width);padding:0 var(--indent-half);display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:center}@media (min-width:1000px){.bj-footer__row{flex-wrap:nowrap}}@media (min-width:1200px){.bj-footer__row{padding:0 calc(var(--indent-base) + var(--indent-half))}}.bj-footer__col{order:2;width:200px;flex:0 0 200px;margin:var(--indent-half);display:flex;flex-direction:column;justify-content:center}.bj-footer__col:last-child{width:auto;flex:1 1 auto;text-align:center;margin-top:calc(var(--indent-base) + var(--indent-half))}@media (min-width:1000px){.bj-footer__col:last-child{order:1;margin-top:var(--indent-half);margin-right:auto;text-align:left}}.bj-footer__col>p{padding:0 var(--indent-base) 0 0;margin:0 0 var(--indent-half);line-height:1.4}.bj-footer__col__widget{width:100%;overflow:hidden;border-radius:3px;display:flex;justify-content:flex-start}.bj-footer__col__widget+.bj-footer__col__widget{margin-top:var(--indent-base)}.bj-footer__bottom{margin:0 auto;max-width:var(--max-width);padding:0 var(--indent-base);display:flex;flex-wrap:wrap;justify-content:center}@media (min-width:1200px){.bj-footer__bottom{padding:0 var(--indent-double)}}.bj-footer__bottom a,.bj-footer__bottom__copyright{font-size:12px;font-weight:300;white-space:nowrap;margin-top:var(--indent-base)}.bj-footer__bottom a{text-transform:none;text-decoration:none;font-family:inherit;font-style:normal;color:inherit;border-bottom:1px solid #fff;padding-bottom:.1em}.bj-footer__bottom span{margin:var(--indent-base) 1em 0}.bj-footer__bottom__copyright{flex:0 0 100%;text-align:center}@media (min-width:600px){.bj-footer__bottom__copyright{flex-basis:auto;margin-left:auto}}.bj-footer__telegram{height:28px;padding:0 .7em;text-decoration:none;text-transform:none;font-size:13px;font-weight:500;line-height:1;display:flex;align-items:center;justify-content:flex-start;color:inherit;background:#08c;border-radius:3px}.bj-footer__telegram svg{width:18px;height:18px;margin-right:.7em}.bj-footer__telegram path{fill:currentColor}"];


// CONCATENATED MODULE: ./components/footer/footer.component.ngfactory.js
/** PURE_IMPORTS_START _footer.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_footer.component,_.._services_social_social.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _footer.component.css.ngstyle,_angular_core,_angular_router,_angular_common,_footer.component,_.._services_social_social.service PURE_IMPORTS_END */






var styles_FooterComponent = [footer_component_css_ngstyle_styles];
var RenderType_FooterComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) {
    return core["_24" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 22, "nav", [["class", "bj-footer__nav"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 4, "div", [["class", "bj-footer__nav__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](3, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 16, "div", [["class", "bj-footer__nav__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/about"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](8, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435"])), (_l()(), core["_3" /* ɵeld */](11, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/staff"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](12, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](13, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0420\u0435\u0434\u0430\u043A\u0446\u0438\u044F"])), (_l()(), core["_3" /* ɵeld */](15, 0, null, null, 3, "a", [["class", "bj-footer__nav__item"], ["routerLink", "/ads"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](16, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](17, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0420\u0435\u043A\u043B\u0430\u043C\u0430"])), (_l()(), core["_3" /* ɵeld */](19, 0, null, null, 3, "a", [["class", "bj-footer__nav__item bj-footer__nav__item--donate"], ["routerLink", "/donate"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](20, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](21, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C"])), (_l()(), core["_3" /* ɵeld */](23, 0, null, null, 28, "div", [["class", "bj-footer__row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](24, 0, null, null, 2, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](25, 0, null, null, 1, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](26, 0, null, null, 0, "div", [["id", "vk_group_vidget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](27, 0, null, null, 5, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](28, 0, null, null, 4, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](29, 0, null, null, 3, "div", [["class", "fb-page"], ["data-adapt-container-width", "false"], ["data-height", "160"], ["data-hide-cover", "true"], ["data-href", "https://www.facebook.com/bitjournalOfficial/"], ["data-show-facepile", "false"], ["data-small-header", "false"], ["data-width", "200"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](30, 0, null, null, 2, "blockquote", [["cite", "https://www.facebook.com/bitjournalOfficial/"], ["class", "fb-xfbml-parse-ignore"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](31, 0, null, null, 1, "a", [["href", "https://www.facebook.com/bitjournalOfficial/"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["BitJournal"])), (_l()(), core["_3" /* ɵeld */](33, 0, null, null, 11, "div", [["class", "bj-footer__col bj-footer__col--widgets"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](34, 0, null, null, 5, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](35, 0, null, null, 4, "a", [["class", "bj-footer__telegram"], ["href", "https://t.me/bitjournal_io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](36, 0, null, null, 1, ":svg:svg", [["height", "24"], ["viewBox", "0 0 24 24"], ["width", "24"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](37, 0, null, null, 0, ":svg:path", [["d", "M.4 11.6l5.6 2 2 7c.2.3.8.5 1 .2l3.2-2.5c.3-.3.8-.3 1 0l5.7 4c.3.3.8 0 1-.4l4-19.7c0-.5-.4-1-1-.7L.5 10.4c-.5.2-.5 1 0 1.2zm7.3 1l10.8-6.8c.3 0 .5.2.3.4l-9 8.3-.5 1L9 18c0 .3-.5.3-.5 0l-1.2-4c-.2-.5 0-1 .4-1.3z"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](38, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["BitJournal \u0432 \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C"])), (_l()(), core["_3" /* ɵeld */](40, 0, null, null, 1, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](41, 0, null, null, 0, "div", [["class", "g-ytsubscribe"], ["data-channelid", "UCeOLUeYNcYDos1wcTJVLGlw"], ["data-count", "default"], ["data-layout", "default"], ["data-theme", "dark"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](42, 0, null, null, 2, "div", [["class", "bj-footer__col__widget"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](43, 0, null, null, 1, "a", [["class", "twitter-follow-button"], ["data-show-count", "false"], ["data-size", "large"], ["href", "https://twitter.com/bitjournal_io"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Follow @bitjournal_io"])), (_l()(), core["_3" /* ɵeld */](45, 0, null, null, 6, "div", [["class", "bj-footer__col"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](46, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u0412\u0441\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439."])), (_l()(), core["_3" /* ɵeld */](48, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["BitJournal \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u043E\u0432."])), (_l()(), core["_3" /* ɵeld */](50, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430."])), (_l()(), core["_3" /* ɵeld */](52, 0, null, null, 14, "div", [["class", "bj-footer__bottom"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](53, 0, null, null, 1, "a", [["href", "/rss"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["RSS"])), (_l()(), core["_3" /* ɵeld */](55, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["|"])), (_l()(), core["_3" /* ɵeld */](57, 0, null, null, 1, "a", [["href", "/api"]], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["API"])), (_l()(), core["_3" /* ɵeld */](59, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["|"])), (_l()(), core["_3" /* ɵeld */](61, 0, null, null, 2, "a", [["routerLink", "/privacy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 62).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](62, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_22" /* ɵted */](-1, null, ["\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](64, 0, null, null, 2, "div", [["class", "bj-footer__bottom__copyright"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](65, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_22" /* ɵted */](-1, null, ["Copyright \u00A9 2017 BitJournal"])), (_l()(), core["_3" /* ɵeld */](67, 0, null, null, 2, "a", [["class", "bj-footer__logo"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 68).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](68, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_3" /* ɵeld */](69, 0, null, null, 0, "img", [["alt", "BitJournal"], ["src", "/svg/logo.svg"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 3, 0, currVal_2); var currVal_5 = "/about"; _ck(_v, 8, 0, currVal_5); var currVal_8 = "/staff"; _ck(_v, 12, 0, currVal_8); var currVal_11 = "/ads"; _ck(_v, 16, 0, currVal_11); var currVal_14 = "/donate"; _ck(_v, 20, 0, currVal_14); var currVal_17 = "/privacy"; _ck(_v, 62, 0, currVal_17); var currVal_20 = "/"; _ck(_v, 68, 0, currVal_20); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 3).target; var currVal_1 = core["_15" /* ɵnov */](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = core["_15" /* ɵnov */](_v, 8).target; var currVal_4 = core["_15" /* ɵnov */](_v, 8).href; _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_6 = core["_15" /* ɵnov */](_v, 12).target; var currVal_7 = core["_15" /* ɵnov */](_v, 12).href; _ck(_v, 11, 0, currVal_6, currVal_7); var currVal_9 = core["_15" /* ɵnov */](_v, 16).target; var currVal_10 = core["_15" /* ɵnov */](_v, 16).href; _ck(_v, 15, 0, currVal_9, currVal_10); var currVal_12 = core["_15" /* ɵnov */](_v, 20).target; var currVal_13 = core["_15" /* ɵnov */](_v, 20).href; _ck(_v, 19, 0, currVal_12, currVal_13); var currVal_15 = core["_15" /* ɵnov */](_v, 62).target; var currVal_16 = core["_15" /* ɵnov */](_v, 62).href; _ck(_v, 61, 0, currVal_15, currVal_16); var currVal_18 = core["_15" /* ɵnov */](_v, 68).target; var currVal_19 = core["_15" /* ɵnov */](_v, 68).href; _ck(_v, 67, 0, currVal_18, currVal_19); });
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
var browser = __webpack_require__(91);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/animations.js
var animations = __webpack_require__(148);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/animations.js
var esm5_animations = __webpack_require__(15);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/bidi.es5.js
var bidi_es5 = __webpack_require__(11);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/scrolling.es5.js
var scrolling_es5 = __webpack_require__(32);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/overlay.es5.js
var overlay_es5 = __webpack_require__(19);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/sort.es5.js
var sort_es5 = __webpack_require__(89);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/layout.es5.js
var layout_es5 = __webpack_require__(63);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/snack-bar.es5.js
var snack_bar_es5 = __webpack_require__(62);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/portal.es5.js
var portal_es5 = __webpack_require__(20);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/table.es5.js
var table_es5 = __webpack_require__(64);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/table.es5.js
var esm5_table_es5 = __webpack_require__(90);

// CONCATENATED MODULE: ./app.module.ngfactory.js
/** PURE_IMPORTS_START _angular_core,_app.module,_components_layout_layout.component,_.._node_modules__angular_material_dialog_typings_index.ngfactory,_.._node_modules__angular_material_snack_bar_typings_index.ngfactory,_components_pages_main_page_main.component.ngfactory,_components_pages_101_page_101.component.ngfactory,_components_pages_currencies_page_currencies.component.ngfactory,_components_pages_currencies_page_currencies_item.component.ngfactory,_components_pages_events_page_events.component.ngfactory,_components_pages_events_page_events_item.component.ngfactory,_components_pages_exchanges_page_exchanges.component.ngfactory,_components_pages_exchanges_page_exchanges_item.component.ngfactory,_components_pages_ico_page_ico.component.ngfactory,_components_pages_ico_page_ico_item.component.ngfactory,_components_pages_markets_page_markets.component.ngfactory,_components_pages_markets_page_markets_item.component.ngfactory,_components_pages_section_page_section.component.ngfactory,_components_pages_article_page_article.component.ngfactory,_components_no_content_no_content.component.ngfactory,_components_auth_auth_dialog.component.ngfactory,_components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,_services_message_message.service,_services_user_user.service,_services_api_api.service,_services_meta_meta.service,_services_social_social.service,_services_youtube_youtube.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,_components_pages_main_page_main.component,_components_pages_101_page_101.component,_components_pages_currencies_page_currencies.component,_components_pages_currencies_page_currencies_item.component,_components_pages_events_page_events.component,_components_pages_events_page_events_item.component,_components_pages_exchanges_page_exchanges.component,_components_pages_exchanges_page_exchanges_item.component,_components_pages_ico_page_ico.component,_components_pages_ico_page_ico_item.component,_components_pages_markets_page_markets.component,_components_pages_markets_page_markets_item.component,_components_pages_section_page_section.component,_components_pages_article_page_article.component,_components_no_content_no_content.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_app.module,_components_layout_layout.component,_.._node_modules__angular_material_dialog_typings_index.ngfactory,_.._node_modules__angular_material_snack_bar_typings_index.ngfactory,_components_pages_main_page_main.component.ngfactory,_components_pages_101_page_101.component.ngfactory,_components_pages_currencies_page_currencies.component.ngfactory,_components_pages_currencies_page_currencies_item.component.ngfactory,_components_pages_events_page_events.component.ngfactory,_components_pages_events_page_events_item.component.ngfactory,_components_pages_exchanges_page_exchanges.component.ngfactory,_components_pages_exchanges_page_exchanges_item.component.ngfactory,_components_pages_ico_page_ico.component.ngfactory,_components_pages_ico_page_ico_item.component.ngfactory,_components_pages_markets_page_markets.component.ngfactory,_components_pages_markets_page_markets_item.component.ngfactory,_components_pages_section_page_section.component.ngfactory,_components_pages_article_page_article.component.ngfactory,_components_no_content_no_content.component.ngfactory,_components_auth_auth_dialog.component.ngfactory,_components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,_services_message_message.service,_services_user_user.service,_services_api_api.service,_services_meta_meta.service,_services_social_social.service,_services_youtube_youtube.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,_components_pages_main_page_main.component,_components_pages_101_page_101.component,_components_pages_currencies_page_currencies.component,_components_pages_currencies_page_currencies_item.component,_components_pages_events_page_events.component,_components_pages_events_page_events_item.component,_components_pages_exchanges_page_exchanges.component,_components_pages_exchanges_page_exchanges_item.component,_components_pages_ico_page_ico.component,_components_pages_ico_page_ico_item.component,_components_pages_markets_page_markets.component,_components_pages_markets_page_markets_item.component,_components_pages_section_page_section.component,_components_pages_article_page_article.component,_components_no_content_no_content.component PURE_IMPORTS_END */



































































var AppModuleNgFactory = /*@__PURE__*/ core["_0" /* ɵcmf */](AppModule, [LayoutComponent], function (_l) { return core["_12" /* ɵmod */]([core["_13" /* ɵmpd */](512, core["j" /* ComponentFactoryResolver */], core["W" /* ɵCodegenComponentFactoryResolver */], [[8, [index_ngfactory["a" /* MatDialogContainerNgFactory */], typings_index_ngfactory["a" /* MatSnackBarContainerNgFactory */], typings_index_ngfactory["b" /* SimpleSnackBarNgFactory */], PageMainComponentNgFactory, Page101ComponentNgFactory, PageCurrenciesComponentNgFactory, PageCurrenciesItemComponentNgFactory, PageEventsComponentNgFactory, PageEventsItemComponentNgFactory, PageExchangesComponentNgFactory, PageExchangesItemComponentNgFactory, PageICOComponentNgFactory, PageICOItemComponentNgFactory, PageMarketsComponentNgFactory, PageMarketsItemComponentNgFactory, PageSectionComponentNgFactory, PageArticleComponentNgFactory, NoContentComponentNgFactory, AuthDialogComponentNgFactory, LayoutComponentNgFactory]], [3, core["j" /* ComponentFactoryResolver */]], core["w" /* NgModuleRef */]]), core["_13" /* ɵmpd */](5120, core["t" /* LOCALE_ID */], core["_11" /* ɵm */], [[3, core["t" /* LOCALE_ID */]]]), core["_13" /* ɵmpd */](4608, common["l" /* NgLocalization */], common["k" /* NgLocaleLocalization */], [core["t" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_13" /* ɵmpd */](5120, core["r" /* IterableDiffers */], core["_8" /* ɵk */], []), core["_13" /* ɵmpd */](5120, core["s" /* KeyValueDiffers */], core["_9" /* ɵl */], []), core["_13" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["t" /* ɵe */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](6144, core["F" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_13" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], platform_browser["g" /* HammerGestureConfig */], []), core["_13" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["l" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["p" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["o" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["d" /* DOCUMENT */], core["y" /* NgZone */], common["d" /* DOCUMENT */], common["d" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_13" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](135680, platform_browser["n" /* ɵDomSharedStylesHost */], platform_browser["n" /* ɵDomSharedStylesHost */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["m" /* ɵDomRendererFactory2 */], platform_browser["m" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["n" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](5120, browser["a" /* AnimationDriver */], animations["d" /* ɵc */], []), core["_13" /* ɵmpd */](5120, browser["c" /* ɵAnimationStyleNormalizer */], animations["e" /* ɵd */], []), core["_13" /* ɵmpd */](4608, browser["b" /* ɵAnimationEngine */], animations["c" /* ɵb */], [browser["a" /* AnimationDriver */], browser["c" /* ɵAnimationStyleNormalizer */]]), core["_13" /* ɵmpd */](5120, core["D" /* RendererFactory2 */], animations["f" /* ɵe */], [platform_browser["m" /* ɵDomRendererFactory2 */], browser["b" /* ɵAnimationEngine */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](6144, platform_browser["q" /* ɵSharedStylesHost */], null, [platform_browser["n" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](4608, core["L" /* Testability */], core["L" /* Testability */], [core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_animations["b" /* AnimationBuilder */], animations["b" /* ɵBrowserAnimationBuilder */], [core["D" /* RendererFactory2 */], platform_browser["b" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_forms["s" /* ɵi */], esm5_forms["s" /* ɵi */], []), core["_13" /* ɵmpd */](4608, esm5_forms["e" /* FormBuilder */], esm5_forms["e" /* FormBuilder */], []), core["_13" /* ɵmpd */](4608, http["k" /* HttpXsrfTokenExtractor */], http["p" /* ɵg */], [common["d" /* DOCUMENT */], core["A" /* PLATFORM_ID */], http["n" /* ɵe */]]), core["_13" /* ɵmpd */](4608, http["q" /* ɵh */], http["q" /* ɵh */], [http["k" /* HttpXsrfTokenExtractor */], http["o" /* ɵf */]]), core["_13" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["q" /* ɵh */]]), core["_13" /* ɵmpd */](4608, http["m" /* ɵd */], http["m" /* ɵd */], []), core["_13" /* ɵmpd */](6144, http["l" /* XhrFactory */], null, [http["m" /* ɵd */]]), core["_13" /* ɵmpd */](4608, http["j" /* HttpXhrBackend */], http["j" /* HttpXhrBackend */], [http["l" /* XhrFactory */]]), core["_13" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["j" /* HttpXhrBackend */]]), core["_13" /* ɵmpd */](5120, http["g" /* HttpHandler */], http["r" /* ɵinterceptingHandler */], [http["b" /* HttpBackend */], [2, http["a" /* HTTP_INTERCEPTORS */]]]), core["_13" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["g" /* HttpHandler */]]), core["_13" /* ɵmpd */](6144, bidi_es5["b" /* DIR_DOCUMENT */], null, [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, bidi_es5["c" /* Directionality */], bidi_es5["c" /* Directionality */], [[2, bidi_es5["b" /* DIR_DOCUMENT */]]]), core["_13" /* ɵmpd */](4608, platform_es5["a" /* Platform */], platform_es5["a" /* Platform */], []), core["_13" /* ɵmpd */](5120, scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, scrolling_es5["c" /* ScrollDispatcher */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, scrolling_es5["f" /* ViewportRuler */], scrolling_es5["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, scrolling_es5["f" /* ViewportRuler */]], platform_es5["a" /* Platform */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["f" /* ScrollStrategyOptions */], [scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["f" /* ViewportRuler */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](5120, overlay_es5["c" /* OverlayContainer */], overlay_es5["g" /* ɵa */], [[3, overlay_es5["c" /* OverlayContainer */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["k" /* ɵh */], overlay_es5["k" /* ɵh */], [scrolling_es5["f" /* ViewportRuler */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["d" /* OverlayKeyboardDispatcher */], overlay_es5["j" /* ɵf */], [[3, overlay_es5["d" /* OverlayKeyboardDispatcher */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["a" /* Overlay */], overlay_es5["a" /* Overlay */], [overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["c" /* OverlayContainer */], core["j" /* ComponentFactoryResolver */], overlay_es5["k" /* ɵh */], overlay_es5["d" /* OverlayKeyboardDispatcher */], core["g" /* ApplicationRef */], core["q" /* Injector */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["h" /* ɵc */], overlay_es5["i" /* ɵd */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, a11y_es5["i" /* InteractivityChecker */], a11y_es5["i" /* InteractivityChecker */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](4608, a11y_es5["h" /* FocusTrapFactory */], a11y_es5["h" /* FocusTrapFactory */], [a11y_es5["i" /* InteractivityChecker */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](136192, a11y_es5["d" /* AriaDescriber */], a11y_es5["b" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, a11y_es5["d" /* AriaDescriber */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["l" /* LiveAnnouncer */], a11y_es5["k" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, a11y_es5["l" /* LiveAnnouncer */]], [2, a11y_es5["j" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["g" /* FocusMonitor */], a11y_es5["e" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, a11y_es5["g" /* FocusMonitor */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], dialog_es5["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, dialog_es5["d" /* MatDialog */], dialog_es5["d" /* MatDialog */], [overlay_es5["a" /* Overlay */], core["q" /* Injector */], [2, common["g" /* Location */]], dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, dialog_es5["d" /* MatDialog */]]]), core["_13" /* ɵmpd */](5120, sort_es5["b" /* MatSortHeaderIntl */], sort_es5["a" /* MAT_SORT_HEADER_INTL_PROVIDER_FACTORY */], [[3, sort_es5["b" /* MatSortHeaderIntl */]]]), core["_13" /* ɵmpd */](4608, layout_es5["d" /* MediaMatcher */], layout_es5["d" /* MediaMatcher */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](135680, layout_es5["a" /* BreakpointObserver */], layout_es5["a" /* BreakpointObserver */], [layout_es5["d" /* MediaMatcher */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, snack_bar_es5["b" /* MatSnackBar */], snack_bar_es5["b" /* MatSnackBar */], [overlay_es5["a" /* Overlay */], a11y_es5["l" /* LiveAnnouncer */], core["q" /* Injector */], layout_es5["a" /* BreakpointObserver */], [3, snack_bar_es5["b" /* MatSnackBar */]]]), core["_13" /* ɵmpd */](4608, core_es5["c" /* ErrorStateMatcher */], core_es5["c" /* ErrorStateMatcher */], []), core["_13" /* ɵmpd */](5120, router["a" /* ActivatedRoute */], router["w" /* ɵf */], [router["k" /* Router */]]), core["_13" /* ɵmpd */](4608, router["e" /* PreloadAllModules */], router["e" /* PreloadAllModules */], []), core["_13" /* ɵmpd */](6144, router["f" /* PreloadingStrategy */], null, [router["e" /* PreloadAllModules */]]), core["_13" /* ɵmpd */](135680, router["o" /* RouterPreloader */], router["o" /* RouterPreloader */], [router["k" /* Router */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], core["q" /* Injector */], router["f" /* PreloadingStrategy */]]), core["_13" /* ɵmpd */](4608, router["d" /* NoPreloading */], router["d" /* NoPreloading */], []), core["_13" /* ɵmpd */](5120, router["h" /* ROUTER_INITIALIZER */], router["z" /* ɵi */], [router["x" /* ɵg */]]), core["_13" /* ɵmpd */](5120, core["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [router["h" /* ROUTER_INITIALIZER */]]), core["_13" /* ɵmpd */](4608, message_service_MessageService, message_service_MessageService, [core["A" /* PLATFORM_ID */], snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, user_service_UserService, user_service_UserService, [core["A" /* PLATFORM_ID */], http["c" /* HttpClient */], dialog_es5["d" /* MatDialog */], message_service_MessageService, snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, api_service_APIService, api_service_APIService, [http["c" /* HttpClient */], router["k" /* Router */], user_service_UserService, message_service_MessageService]), core["_13" /* ɵmpd */](4608, meta_service_MetaService, meta_service_MetaService, [platform_browser["h" /* Meta */], platform_browser["i" /* Title */]]), core["_13" /* ɵmpd */](4608, social_service_SocialService, social_service_SocialService, [core["A" /* PLATFORM_ID */]]), core["_13" /* ɵmpd */](4608, youtube_service_YouTubeService, youtube_service_YouTubeService, [http["c" /* HttpClient */], message_service_MessageService]), core["_13" /* ɵmpd */](512, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["_13" /* ɵmpd */](1024, core["m" /* ErrorHandler */], platform_browser["s" /* ɵa */], []), core["_13" /* ɵmpd */](1024, core["x" /* NgProbeToken */], function () { return [router["s" /* ɵb */]()]; }, []), core["_13" /* ɵmpd */](256, core["c" /* APP_ID */], "null-vnull", []), core["_13" /* ɵmpd */](2048, platform_browser["r" /* ɵTRANSITION_ID */], null, [core["c" /* APP_ID */]]), core["_13" /* ɵmpd */](512, router["x" /* ɵg */], router["x" /* ɵg */], [core["q" /* Injector */]]), core["_13" /* ɵmpd */](1024, core["d" /* APP_INITIALIZER */], function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [platform_browser["w" /* ɵh */](p0_0), platform_browser["u" /* ɵf */](p1_0, p1_1, p1_2), router["y" /* ɵh */](p2_0)]; }, [[2, core["x" /* NgProbeToken */]], platform_browser["r" /* ɵTRANSITION_ID */], common["d" /* DOCUMENT */], core["q" /* Injector */], router["x" /* ɵg */]]), core["_13" /* ɵmpd */](512, core["e" /* ApplicationInitStatus */], core["e" /* ApplicationInitStatus */], [[2, core["d" /* APP_INITIALIZER */]]]), core["_13" /* ɵmpd */](131584, core["g" /* ApplicationRef */], core["g" /* ApplicationRef */], [core["y" /* NgZone */], core["X" /* ɵConsole */], core["q" /* Injector */], core["m" /* ErrorHandler */], core["j" /* ComponentFactoryResolver */], core["e" /* ApplicationInitStatus */]]), core["_13" /* ɵmpd */](512, core["f" /* ApplicationModule */], core["f" /* ApplicationModule */], [core["g" /* ApplicationRef */]]), core["_13" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_13" /* ɵmpd */](512, animations["a" /* BrowserAnimationsModule */], animations["a" /* BrowserAnimationsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["q" /* ɵba */], esm5_forms["q" /* ɵba */], []), core["_13" /* ɵmpd */](512, esm5_forms["h" /* FormsModule */], esm5_forms["h" /* FormsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["o" /* ReactiveFormsModule */], esm5_forms["o" /* ReactiveFormsModule */], []), core["_13" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_13" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_13" /* ɵmpd */](512, bidi_es5["a" /* BidiModule */], bidi_es5["a" /* BidiModule */], []), core["_13" /* ɵmpd */](512, portal_es5["g" /* PortalModule */], portal_es5["g" /* PortalModule */], []), core["_13" /* ɵmpd */](512, platform_es5["b" /* PlatformModule */], platform_es5["b" /* PlatformModule */], []), core["_13" /* ɵmpd */](512, scrolling_es5["b" /* ScrollDispatchModule */], scrolling_es5["b" /* ScrollDispatchModule */], []), core["_13" /* ɵmpd */](512, overlay_es5["e" /* OverlayModule */], overlay_es5["e" /* OverlayModule */], []), core["_13" /* ɵmpd */](512, a11y_es5["a" /* A11yModule */], a11y_es5["a" /* A11yModule */], []), core["_13" /* ɵmpd */](256, core_es5["d" /* MATERIAL_SANITY_CHECKS */], true, []), core["_13" /* ɵmpd */](512, core_es5["g" /* MatCommonModule */], core_es5["g" /* MatCommonModule */], [[2, core_es5["d" /* MATERIAL_SANITY_CHECKS */]]]), core["_13" /* ɵmpd */](512, dialog_es5["h" /* MatDialogModule */], dialog_es5["h" /* MatDialogModule */], []), core["_13" /* ɵmpd */](512, sort_es5["c" /* MatSortModule */], sort_es5["c" /* MatSortModule */], []), core["_13" /* ɵmpd */](512, table_es5["k" /* CdkTableModule */], table_es5["k" /* CdkTableModule */], []), core["_13" /* ɵmpd */](512, esm5_table_es5["a" /* MatTableModule */], esm5_table_es5["a" /* MatTableModule */], []), core["_13" /* ɵmpd */](512, layout_es5["c" /* LayoutModule */], layout_es5["c" /* LayoutModule */], []), core["_13" /* ɵmpd */](512, snack_bar_es5["d" /* MatSnackBarModule */], snack_bar_es5["d" /* MatSnackBarModule */], []), core["_13" /* ɵmpd */](512, form_field_es5["d" /* MatFormFieldModule */], form_field_es5["d" /* MatFormFieldModule */], []), core["_13" /* ɵmpd */](512, input_es5["b" /* MatInputModule */], input_es5["b" /* MatInputModule */], []), core["_13" /* ɵmpd */](512, core_es5["k" /* MatRippleModule */], core_es5["k" /* MatRippleModule */], []), core["_13" /* ɵmpd */](512, button_es5["d" /* MatButtonModule */], button_es5["d" /* MatButtonModule */], []), core["_13" /* ɵmpd */](1024, router["r" /* ɵa */], router["u" /* ɵd */], [[3, router["k" /* Router */]]]), core["_13" /* ɵmpd */](512, router["q" /* UrlSerializer */], router["c" /* DefaultUrlSerializer */], []), core["_13" /* ɵmpd */](512, router["b" /* ChildrenOutletContexts */], router["b" /* ChildrenOutletContexts */], []), core["_13" /* ɵmpd */](256, router["g" /* ROUTER_CONFIGURATION */], { useHash: false, preloadingStrategy: router["e" /* PreloadAllModules */] }, []), core["_13" /* ɵmpd */](1024, common["h" /* LocationStrategy */], router["t" /* ɵc */], [common["p" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], router["g" /* ROUTER_CONFIGURATION */]]), core["_13" /* ɵmpd */](512, common["g" /* Location */], common["g" /* Location */], [common["h" /* LocationStrategy */]]), core["_13" /* ɵmpd */](512, core["i" /* Compiler */], core["i" /* Compiler */], []), core["_13" /* ɵmpd */](512, core["v" /* NgModuleFactoryLoader */], core["I" /* SystemJsNgModuleLoader */], [core["i" /* Compiler */], [2, core["J" /* SystemJsNgModuleLoaderConfig */]]]), core["_13" /* ɵmpd */](1024, router["i" /* ROUTES */], function () { return [[{ path: "", component: PageMainComponent }, { path: "101", component: Page101Component }, { path: "currencies/:id", component: PageCurrenciesComponent }, { path: "currencies", component: PageCurrenciesItemComponent }, { path: "events/:id", component: PageEventsComponent }, { path: "events", component: PageEventsItemComponent }, { path: "exchanges/:id", component: PageExchangesComponent }, { path: "exchanges", component: PageExchangesItemComponent }, { path: "ico/:id", component: PageICOComponent }, { path: "ico", component: PageICOItemComponent }, { path: "markets/:id", component: PageMarketsComponent }, { path: "markets", component: PageMarketsItemComponent }, { path: ":section", component: PageSectionComponent }, { path: ":date/:url", component: PageArticleComponent }, { path: "**", component: NoContentComponent }]]; }, []), core["_13" /* ɵmpd */](1024, router["k" /* Router */], router["v" /* ɵe */], [core["g" /* ApplicationRef */], router["q" /* UrlSerializer */], router["b" /* ChildrenOutletContexts */], common["g" /* Location */], core["q" /* Injector */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], router["i" /* ROUTES */], router["g" /* ROUTER_CONFIGURATION */], [2, router["p" /* UrlHandlingStrategy */]], [2, router["j" /* RouteReuseStrategy */]]]), core["_13" /* ɵmpd */](512, router["m" /* RouterModule */], router["m" /* RouterModule */], [[2, router["r" /* ɵa */]], [2, router["k" /* Router */]]]), core["_13" /* ɵmpd */](512, AppModule, AppModule, []), core["_13" /* ɵmpd */](256, http["n" /* ɵe */], "XSRF-TOKEN", []), core["_13" /* ɵmpd */](256, http["o" /* ɵf */], "X-XSRF-TOKEN", [])]); });


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

},[92]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3JhbmRvbUJ5dGVzLWJyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2J5dGVzVG9VdWlkLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC92MS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvcGF0dGVybnMudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3V1aWQudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdGltZXN0YW1wL3RpbWVzdGFtcC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3RpbWVzdGFtcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL2VudW0vZW51bS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL2VudW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9hZHMvYmxvY2suZW51bS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9hZHMudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9hZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL3ByaWNlLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9oaXN0b3JpY2FsLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9jb2luLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3JhdGluZy9yYXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9yYXRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jdXJyZW5jeS9jdXJyZW5jeS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXhjaGFuZ2UvZXhjaGFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9leGNoYW5nZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pY28udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pY28vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvbWFya2V0LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvbWFya2V0L2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXJsLWJ1aWxkZXIvdXJsLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zZWN0aW9uL3NlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc3RhdHVzL3N0YXR1cy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3N0YXR1cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3VzZXIvcm9sZS5lbnVtLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci91c2VyLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3ZpZGVvL3ZpZGVvLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9ldmVudC9ldmVudC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V2ZW50L2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvbWVzc2FnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9lbnZlcm9tZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3lvdXR1YmUveW91dHViZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3lvdXR1YmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc29jaWFsL3ZrLWluaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc29jaWFsL3R3aXR0ZXItaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zb2NpYWwvZ29vZ2xlLWluaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc29jaWFsL2ZiLWluaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc29jaWFsL2VudmVyb21lbnRzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NvY2lhbC9zb2NpYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zb2NpYWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGlwZXMvdGltZXN0YW1wL3RpbWVzdGFtcC50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy90aW1lc3RhbXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGlwZXMvaW1hZ2UvZW52ZXJvbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vcGlwZXMvaW1hZ2UvaW1hZ2UucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy9pbWFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy9vcmRlci9vcmRlci50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy9vcmRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy9maWx0ZXIvZmlsdGVyLnRzIiwid2VicGFjazovLy8uL3BpcGVzL2ZpbHRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXRhL21ldGEuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FydGljbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9sbG93L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vLWNvbnRlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvMTAxL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21haW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItY2FyZC9wdWItY2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItY2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Yi1saW5lL3B1Yi1saW5lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Yi1saW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92aWRlby1yaWJib24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9wYWdlLW1haW4uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Yi1saW5lL3B1Yi1saW5lLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Yi1saW5lL3B1Yi1saW5lLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvMTAxL3BhZ2UtMTAxLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvMTAxL3BhZ2UtMTAxLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2FwcC5tb2R1bGUubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL21haW4uZnJvbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTs7O0FDUFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOzs7QUM3Q0EsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEc7QUFDQTs7O0FDTEE7QUFDeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeEZBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2RkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxHQUFHLCtCQUErQixzQkFBc0I7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckRBOzs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbEJlO0FBQ0s7QUFDQTtBQUNwQixrQ0FBa0MsY0FBYztBQUNoRCx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsSEE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbkRvQjtBQUNKO0FBQ2hCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUNvQjtBQUNKO0FBQ0s7QUFDckI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPLHdCQUF3QixzQkFBc0I7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZIQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hEQTs7O0FDQWlCO0FBQ0c7QUFDcEI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoR0E7OztBQ0FlO0FBQ0s7QUFDSDtBQUNqQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNGQTs7O0FDQWU7QUFDSztBQUNIO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakdBOzs7QUNBZTtBQUNLO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzRkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pCQTs7O0FDQWU7QUFDTTtBQUNEO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakpBOzs7QUNBZTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyRUE7OztBQ0FlO0FBQ2Y7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcERBOzs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDZmU7QUFDSTtBQUNGO0FBQ2pCLHVDQUFrQyxjQUFjO0FBQ2hEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25IQTtBQUNBOzs7QUNEQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUNBOzs7QUNBZTtBQUNLO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4RkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNaVTtBQUNpQjtBQUNMO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxXQUFXO0FBQ2hFO0FBQ0E7OztBQ2RBOzs7QUNBVTtBQUNpQjtBQUMwQjtBQUNoQztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNvQjtBQUNFO0FBQ1E7QUFDZjtBQUNNO0FBQ0k7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Msb0RBQW9EO0FBQ3BGO0FBQ0E7QUFDQSw4RUFBa0UsNEJBQTRCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHFGQUErRCxhQUFhO0FBQzVFO0FBQ0Esb0RBQW9ELGFBQWEsSUFBSSxjQUFjO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQTJFLDRCQUE0QjtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDBFQUE4RCw0QkFBNEI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FDakZBOzs7QUNBQTtBQUNBOzs7QUNEb0Q7QUFDbkM7QUFDSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNzQjtBQUNHO0FBQ0o7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsYUFBYSxJQUFJLGNBQWM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHVEQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQWtFLGtDQUFrQztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUFpRSxrQ0FBa0M7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBOEQsa0NBQWtDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOzs7QUMvREE7OztBQ0FxQjtBQUNBO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCO0FBQ3pCO0FBQ0EsNEVBQTRFLEtBQUssT0FBTyxlQUFlO0FBQ3ZHLDBIQUEwSCxLQUFLO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxFQUFFLFdBQVcsRUFBRTtBQUNqRTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQ3pDQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUNqQkE7OztBQ0FVO0FBQ2lCO0FBQ1Y7QUFDSztBQUNEO0FBQ0o7QUFDTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckNBOzs7QUNBd0I7QUFDSjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsQkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7QUNId0I7QUFDWTtBQUNwQztBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JCQTs7O0FDQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNQQTs7O0FDQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNQQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7OztBQ0hzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4RkFBOEYsS0FBSztBQUNwSDtBQUNBLDJCQUEyQixpREFBaUQ7QUFDNUUsMkJBQTJCLG1FQUFtRTtBQUM5RiwyQkFBMkIsMERBQTBEO0FBQ3JGLDJCQUEyQiwwQ0FBMEM7QUFDckUsMkJBQTJCLG1FQUFtRTtBQUM5RiwyQkFBMkIsMkZBQTJGO0FBQ3RILDJCQUEyQixxRUFBMEQ7QUFDckYsMkJBQTJCLHVEQUF1RDtBQUNsRiwyQkFBMkIsa0RBQWtEO0FBQzdFLDJCQUEyQixxREFBcUQ7QUFDaEYsMkJBQTJCLG9FQUFvRTtBQUMvRiwyQkFBMkIsNEZBQTRGO0FBQ3ZILDJCQUEyQixzRUFBMkQ7QUFDdEY7QUFDQTs7O0FDMUJBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0xpQjtBQUNpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCLEdBQUcsZ0JBQWdCLEdBQUcsZUFBZTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FDekJBOzs7QUNBVTtBQUN3QjtBQUNYO0FBQ0Q7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxlQUFlO0FBQ3pELFNBQVM7QUFDVDtBQUNBOzs7QUN2QkE7OztBQ0FpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSQTs7O0FDQVU7QUFDVjtBQUNBOzs7QUNGQTs7O0FDQXdCO0FBQ0E7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0RBQWtELEVBQUU7QUFDcEQ7QUFDQTtBQUNBLGlEQUFpRCxFQUFFO0FBQ25EO0FBQ0E7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoQ0E7OztBQ0FpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1RBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUkE7OztBQ0FVO0FBQ1Y7QUFDQTs7O0FDRkE7OztBQ0FpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7OztBQ0FpQjtBQUNRO0FBQ0g7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBLHFCQUFxQix3Q0FBaUI7QUFDdEM7QUFDQTs7O0FDcEJBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUkE7QUFDQTs7O0FDRGlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSQTtBQUNBOzs7QUNEaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNRO0FBQ1M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHFCQUFxQixxQ0FBaUI7QUFDdEM7QUFDQSxxQkFBcUIscUNBQWlCO0FBQ3RDO0FBQ0E7QUFDQTs7O0FDbEJBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUlU7QUFDVjtBQUNBOzs7QUNGQTs7O0FDQVU7QUFDVjtBQUNBOzs7QUNGQTs7Ozs7OztBQ0FpQjtBQUNBO0FBQ2pCO0FBQ3NDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbENBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1grZ0I7QUFDL2dCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzdCVTtBQUNBO0FBQ0E7QUFDVjtBQUNBOzs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0Esc0NBQXNDLGNBQWMsMkJBQTJCLGNBQWMsK0JBQStCLHlCQUF5Qix1QkFBdUIsaURBQWlELG1CQUFtQixXQUFXLGFBQWEsMkJBQTJCLG9CQUFvQixtQkFBbUIsY0FBYyxxQkFBcUIseUJBQXlCLDRCQUE0QixpQ0FBaUMsc0JBQXNCLDJCQUEyQixtQkFBbUIsYUFBYSx5QkFBeUIscUJBQXFCLGNBQWMsb0JBQW9CLGdDQUFnQyxnQ0FBZ0MsYUFBYSx5QkFBeUIsMEJBQTBCLG9CQUFvQixhQUFhLDBCQUEwQix1QkFBdUIseUJBQXlCLGFBQWEsOEJBQThCLHFDQUFxQyxrQ0FBa0Msc0JBQXNCLDBCQUEwQix5QkFBeUIsb0NBQW9DO0FBQ3RpQzs7O0FDSFI7QUFDQTtBQUNBLDJEQUE0QixhQUFhLGVBQWUsMkJBQTJCLHlCQUF5Qix1QkFBdUIsZUFBZSxxQkFBcUIsb0JBQW9CLHdCQUF3QixxQkFBcUIsY0FBYyxXQUFXLDJCQUEyQixrQkFBa0IsU0FBUyxVQUFVLG1CQUFtQixhQUFhLHNCQUFzQiw4QkFBOEIseUJBQXlCLHFCQUFxQixrQkFBa0Isc0JBQXNCLGtCQUFrQixPQUFPLE1BQU0sUUFBUSxTQUFTLFlBQVksZ0JBQWdCLG1CQUFtQixrRUFBa0UsY0FBYyxzQkFBc0IsV0FBVywwQkFBMEIsZUFBZSxnQkFBZ0IsUUFBUSxTQUFTLCtCQUErQixpQkFBaUIsa0JBQWtCLGtCQUFrQixrQkFBa0IsNkJBQTZCLHdCQUF3Qiw0RkFBNEYsaUNBQWlDLGlCQUFpQixpQkFBaUIsb0JBQW9CLGlCQUFpQixnQkFBZ0IsaUJBQWlCLFdBQVcsb0NBQW9DLHlEQUF5RCxjQUFjLHNCQUFzQiw2QkFBNkIsaUJBQWlCLGNBQWMsV0FBVyxTQUFTLG9CQUFvQixpQkFBaUIsOEJBQThCLGtCQUFrQix1QkFBdUIsOEJBQThCLGNBQWMsaUJBQWlCO0FBQ2xnRDs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXlELDREQUE0RCxFQUFFO0FBQy9HO0FBQ1Isc0NBQXNDLHVZQUE2VSx3QkFBd0Isb0NBQW9DLDBCQUEwQixFQUFFLEVBQUU7QUFDN2Msc0NBQTZDLDQzQkFBcXJCLG9CQUFvQixxZEFBNlgsd0JBQXdCLHNDQUFzQywwQkFBMEIsRUFBRSxzQkFBc0Isd0JBQXdCLGlIQUFtRiwwQkFBMEIsK0dBQWlGLDBCQUEwQixzSEFBd0YsMkJBQTJCLGlDQUFpQywyQkFBMkIsRUFBRSxFQUFFO0FBQ3RvRCwyQ0FBa0QsNlJBQXFQO0FBQ3ZTLG9JQUEwSCxpQkFBaUIsSUFBSTtBQUN2STs7O0FDZlI7QUFDQTtBQUNBLDJEQUE0QixhQUFhLDhCQUE4QixxQkFBcUIsb0JBQW9CLHdCQUF3QixzQkFBc0IsY0FBYyxrQkFBa0IsV0FBVyxlQUFlLGVBQWUsWUFBWSxnQkFBZ0IsZ0JBQWdCLGNBQWMsa0JBQWtCLGdCQUFnQixnQ0FBZ0MsbUJBQW1CLDBCQUEwQixjQUFjLHNCQUFzQixrQkFBa0IsZUFBZSxnQkFBZ0IsV0FBVyxRQUFRLFNBQVMsK0JBQStCLGlCQUFpQixtQkFBbUIsY0FBYyx3Q0FBd0MsY0FBYyxzQkFBc0IsVUFBVSx1QkFBdUIsV0FBVyxlQUFlLFNBQVMsaUJBQWlCLFdBQVcsZUFBZSxvQkFBb0IsZUFBZSxnQkFBZ0I7QUFDeHpCOzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXlELDREQUE0RCxFQUFFO0FBQy9HO0FBQ1Isc0NBQTZDLHcrQkFBMnhCLHdCQUF3QixpSEFBbUYsMEJBQTBCLDhHQUFnRiwwQkFBMEIsb0hBQXNGLDBCQUEwQixpQ0FBaUMsMkJBQTJCLEVBQUUsRUFBRTtBQUN2dUMsMkNBQWtELDZSQUFxUDtBQUN2UyxvSUFBMEgsaUJBQWlCLElBQUk7QUFDdkk7OztBQ2JSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUEwRCw2REFBNkQsRUFBRTtBQUNqSDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZPQUF5SyxnQ0FBZ0MscUlBQTRGLHNCQUFzQiw4QkFBOEIsZ0xBQWtKLDBCQUEwQixzQ0FBc0MsMEJBQTBCLEVBQUUsc0JBQXNCLG1EQUFtRCxzREFBdUMsb0RBQXFDLGdEQUFnRCxFQUFFO0FBQ3Z4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZPQUF5SyxnQ0FBZ0MscUlBQTRGLHNCQUFzQiw4QkFBOEIsZ0xBQWtKLDBCQUEwQixzQ0FBc0MsMEJBQTBCLEVBQUUsc0JBQXNCLHNEQUF1QyxvREFBcUMscUNBQXFDLEVBQUU7QUFDenRCO0FBQ0EsdUNBQThDLGt2QkFBa2xCLDBCQUEwQixrc0JBQTJoQiwwQkFBMEIsZ0lBQXFGLHdCQUF3Qix1SEFBeUYsMEJBQTBCLHdIQUEwRiwyQkFBMkIsRUFBRSxRQUFRO0FBQzlpRCw0Q0FBbUQseVdBQWlTLGVBQWUsRUFBRSxRQUFRO0FBQzdXLHFJQUEySCxJQUFJO0FBQ3ZIOzs7QUN4Q1I7QUFDQTtBQUNBLDBEQUEyQixrQkFBa0IsU0FBUyxRQUFRLCtCQUErQixrQkFBa0I7QUFDdkc7OztBQ0hSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUE2RCxnRUFBZ0UsRUFBRTtBQUN2SDtBQUNSLDBDQUEwQyxvekNBQXVvQywyQ0FBMkMsMEJBQTBCLDRDQUE0QywwQkFBMEIsK0NBQStDLDBCQUEwQiwyQ0FBMkMsMEJBQTBCLDJDQUEyQywwQkFBMEIsMkNBQTJDLDBCQUEwQiw0Q0FBNEMsMkJBQTJCLEVBQUUsRUFBRTtBQUMvcEQsMENBQWlELDJhQUE2VCwwQkFBMEIsZ0lBQXFGLHdCQUF3QixzR0FBd0UsMEJBQTBCLEVBQUUsUUFBUTtBQUNqbUIsK0NBQXNELDBZQUFzUyxlQUFlLEVBQUUsUUFBUTtBQUNyWCx3S0FBdUksSUFBSTtBQUNuSTs7O0FDaEJSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBeUQsNERBQTRELEVBQUU7QUFDL0c7QUFDUixzQ0FBNkMsKzBCQUF5cUIsZUFBZSxFQUFFLFFBQVE7QUFDL3VCLDJDQUFrRCxtUkFBMk8sZUFBZSxFQUFFLFFBQVE7QUFDdFQsaUlBQXVILElBQUk7QUFDbkg7OztBQ2hCUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBZ0UsbUVBQW1FLEVBQUU7QUFDN0g7QUFDUiw2Q0FBb0Qsa0RBQW1DO0FBQ3ZGLGtEQUF5RCx1VUFBZ1IsZUFBZSxFQUFFLFFBQVE7QUFDbFcsNkpBQW1KLElBQUk7QUFDL0k7OztBQ1pSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFvRSx1RUFBdUUsRUFBRTtBQUNySTtBQUNSLGlEQUF3RCxvUEFBeU07QUFDalEsc0RBQTZELHdWQUFpUyxlQUFlLEVBQUUsUUFBUTtBQUN2WCw4S0FBb0ssSUFBSTtBQUNoSzs7O0FDWlI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTRELCtEQUErRCxFQUFFO0FBQ3JIO0FBQ1IseUNBQWdELGtEQUFtQztBQUNuRiw4Q0FBcUQsdVRBQWdRLGVBQWUsRUFBRSxRQUFRO0FBQzlVLDZJQUFtSSxJQUFJO0FBQy9IOzs7QUNaUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBZ0UsbUVBQW1FLEVBQUU7QUFDN0g7QUFDUiw2Q0FBb0Qsb1BBQXlNO0FBQzdQLGtEQUF5RCx3VUFBaVIsZUFBZSxFQUFFLFFBQVE7QUFDblcsOEpBQW9KLElBQUk7QUFDaEo7OztBQ1pSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUErRCxrRUFBa0UsRUFBRTtBQUMzSDtBQUNSLDRDQUFtRCxrREFBbUM7QUFDdEYsaURBQXdELG1VQUE0USxlQUFlLEVBQUUsUUFBUTtBQUM3Vix5SkFBK0ksSUFBSTtBQUMzSTs7O0FDWlI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQW1FLHNFQUFzRSxFQUFFO0FBQ25JO0FBQ1IsZ0RBQXVELG9QQUF5TTtBQUNoUSxxREFBNEQsb1ZBQTZSLGVBQWUsRUFBRSxRQUFRO0FBQ2xYLDBLQUFnSyxJQUFJO0FBQzVKOzs7QUNaUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBeUQsNERBQTRELEVBQUU7QUFDL0c7QUFDUixzQ0FBNkMsa0RBQW1DO0FBQ2hGLDJDQUFrRCwyU0FBb1AsZUFBZSxFQUFFLFFBQVE7QUFDL1QsaUlBQXVILElBQUk7QUFDbkg7OztBQ1pSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUE2RCxnRUFBZ0UsRUFBRTtBQUN2SDtBQUNSLDBDQUFpRCxvUEFBeU07QUFDMVAsK0NBQXNELDRUQUFxUSxlQUFlLEVBQUUsUUFBUTtBQUNwVixrSkFBd0ksSUFBSTtBQUNwSTs7O0FDWlI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTZELGdFQUFnRSxFQUFFO0FBQ3ZIO0FBQ1IsMENBQWlELGtEQUFtQztBQUNwRiwrQ0FBc0QsMlRBQW9RLGVBQWUsRUFBRSxRQUFRO0FBQ25WLGlKQUF1SSxJQUFJO0FBQ25JOzs7QUNaUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBaUUsb0VBQW9FLEVBQUU7QUFDL0g7QUFDUiw4Q0FBcUQsb1BBQXlNO0FBQzlQLG1EQUEwRCw0VUFBcVIsZUFBZSxFQUFFLFFBQVE7QUFDeFcsa0tBQXdKLElBQUk7QUFDcEo7OztBQ1pSO0FBQ0E7QUFDQSw4REFBMkIsa0JBQWtCLFNBQVMsUUFBUSwrQkFBK0Isa0JBQWtCO0FBQ3ZHOzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBNkQsZ0VBQWdFLEVBQUU7QUFDdkg7QUFDUiwwQ0FBaUQsMFZBQWdTO0FBQ2pWLCtDQUFzRCxtU0FBMlAsZUFBZSxFQUFFLFFBQVE7QUFDMVUsaUpBQXVJLElBQUk7QUFDbkk7OztBQ1hSO0FBQ0E7QUFDQSw4REFBMkIsY0FBYyxjQUFjLFdBQVc7QUFDMUQ7OztBQ0hSO0FBQ0E7QUFDQSx5REFBMkIsY0FBYyxjQUFjLHFCQUFxQixjQUFjLFdBQVcsb0JBQW9CLGtCQUFrQixXQUFXLDhEQUE4RCxjQUFjLHNCQUFzQixrQkFBa0IsV0FBVyw2QkFBNkIsUUFBUSxTQUFTLFlBQVksZ0JBQWdCLG1CQUFtQixPQUFPLE1BQU0saUNBQWlDLGVBQWUsZ0JBQWdCLFFBQVEsU0FBUywrQkFBK0IsaUJBQWlCO0FBQ3hmOzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF5RCw0REFBNEQsRUFBRTtBQUMvRztBQUNSLHNDQUFzQyxvUEFBd00sc0RBQXNELDBCQUEwQixFQUFFLEVBQUU7QUFDbFUsc0NBQXNDLDh3QkFBb25CLG9CQUFvQiw2V0FBa1UsaURBQWlELDBCQUEwQixFQUFFLHNCQUFzQixtSUFBcUcsMEJBQTBCLDRDQUE0QywwQkFBMEIsOENBQThDLDBCQUEwQixFQUFFLEVBQUU7QUFDcDJDLHNDQUE2Qyx3VkFBaU8sMEJBQTBCLGdJQUFxRix3QkFBd0Isc0dBQXdFLDBCQUEwQixFQUFFLFFBQVE7QUFDamdCLDJDQUFrRCxxVkFBMFIsZUFBZSxFQUFFLFFBQVE7QUFDclcsbUlBQXlILGlCQUFpQixJQUFJO0FBQ3RJOzs7QUNqQlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTZELGdFQUFnRSxFQUFFO0FBQ3ZIO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNk9BQXlLLGdDQUFnQyxxSUFBNEYsc0JBQXNCLDhCQUE4QixnTEFBa0osMEJBQTBCLHNDQUFzQywwQkFBMEIsRUFBRSxzQkFBc0Isc0RBQXVDLG9EQUFxQyxxQ0FBcUMsRUFBRTtBQUN6dEI7QUFDQSwwQ0FBaUQsMG1CQUFvZ0Isc0JBQXNCLCt0QkFBd2pCLDBCQUEwQixnSUFBcUYsd0JBQXdCLHFHQUF1RSwwQkFBMEIsK0dBQWlGLDJCQUEyQixFQUFFLFFBQVE7QUFDaitDLCtDQUFzRCwyVkFBNFIsZUFBZSxFQUFFLFFBQVE7QUFDM1csaUpBQXdJLElBQUk7QUFDcEk7OztBQzlCUjtBQUNBO0FBQ0EsNERBQTJCLGtCQUFrQixTQUFTLFFBQVEsK0JBQStCLGtCQUFrQjtBQUN2Rzs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQTJELDhEQUE4RCxFQUFFO0FBQ25IO0FBQ1Isd0NBQStDLHdYQUErUztBQUM5Viw2Q0FBb0Qsa1JBQTBPO0FBQzlSLHlJQUErSCxJQUFJO0FBQzNIOzs7QUNYUjtBQUNBO0FBQ0EsMEZBQW1ELHlCQUF5QixrQkFBa0IsOEJBQThCLGdCQUFnQixrQ0FBa0MsZ0JBQWdCLGNBQWMsV0FBVyw4Q0FBOEMsYUFBYSxxQ0FBcUMsaUJBQWlCLGtCQUFrQjtBQUNsVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUE0RCwrREFBK0QsRUFBRTtBQUNySDtBQUNSLHlDQUF5QywrZ0JBQWlhLGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQzNnQix5Q0FBeUMsNFlBQTJULGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQ3JhLHlDQUF5QyxtaEJBQXFhLGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQy9nQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrTkFBZ0osb0JBQW9CLEdBQUcsdUJBQXVCLHc0Q0FBMmpDLGNBQWMseUNBQTBCLHVCQUF1Qix5Q0FBMEIsaUJBQWlCLHlDQUEwQixvQkFBb0IseUNBQTBCLG1CQUFtQix5Q0FBMEIscUJBQXFCLHlDQUEwQixxQkFBcUI7QUFDcmlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNlRBQTZNLGVBQWUsRUFBRSx1UEFBNkosb0JBQW9CLG1qQkFBOFQscURBQXFELG1XQUF1TyxvQkFBb0IscU9BQWlLLG9CQUFvQixtaUNBQWcyQixjQUFjLHlDQUEwQix1QkFBdUIsMENBQTJCLGlCQUFpQiwwQ0FBMkIsb0JBQW9CLDBDQUEyQixtQkFBbUIsMENBQTJCLHFCQUFxQiwwQ0FBMkIscUJBQXFCO0FBQ24wRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZUQUE2TSxlQUFlLEVBQUUsdVBBQTZKLG9CQUFvQixtakJBQThULHFEQUFxRCxtV0FBdU8sb0JBQW9CO0FBQ3RnQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK1NBQWlKLGlEQUFpRCwyTEFBNEksd0JBQXdCLGVBQWUsOEJBQThCLDBCQUEwQiwwQkFBMEIsNEJBQTRCLDJCQUEyQix5QkFBeUIsd0NBQXdDLG1FQUFtRSw0QkFBNEIsZ0VBQWdFLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLDZCQUE2Qiw2QkFBNkIsd0NBQXdDLHNFQUFzRSw0QkFBNEIsdUNBQXVDLDRCQUE0Qix3Q0FBd0MsRUFBRSxzQkFBc0Isa0RBQW1DLDBCQUEwQixnRUFBaUQsOERBQStDLCtEQUFnRCw0REFBNkMsNERBQTZDLDhEQUErQyw4REFBK0MsNEZBQTRGLG9FQUFxRCxxRUFBc0QsZ0VBQWlELHFFQUFzRCwyRUFBNEQsbUVBQW9ELGtFQUFtRCxzRUFBdUQscUVBQXNELG1FQUFvRCw2RUFBOEQsMkVBQTRELDRFQUE2RCx5RUFBMEQseUVBQTBELDJFQUE0RCwyRUFBNEQsNE5BQTROLGtFQUFtRCxnRUFBaUQsaUVBQWtELDhEQUErQyw4REFBK0MsZ0VBQWlELGdFQUFpRCwyREFBNEMsb0RBQXFDLDZEQUE4QywwREFBMkMsMERBQTJDLDBEQUEyQyw0RUFBNkQsNERBQTZDLHFFQUFzRCxrTkFBa04scUVBQXNELHFFQUFzRCxnRUFBaUQscUVBQXNELDJFQUE0RCxtRUFBb0Qsa0VBQW1ELHNFQUF1RCxxRUFBc0QsbUVBQW9ELDZFQUE4RCwyRUFBNEQsNEVBQTZELHlFQUEwRCx5RUFBMEQsMkVBQTRELDJFQUE0RCw4TkFBOE4sa0VBQW1ELGdFQUFpRCxpRUFBa0QsOERBQStDLDhEQUErQyxnRUFBaUQsZ0VBQWlELDJEQUE0QyxvREFBcUMsNkRBQThDLDBEQUEyQywwREFBMkMsMERBQTJDLDRFQUE2RCw0REFBNkMscUVBQXNELGtOQUFrTixvRUFBcUQsNEJBQTRCLEVBQUU7QUFDcDNMO0FBQ0EsOENBQXFELHdaQUFrUztBQUN2VixtS0FBb0ksSUFBSTtBQUNoSTs7O0FDakhSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0EsdURBQTBCLGVBQWUsT0FBTyxNQUFNLFdBQVcsYUFBYSxZQUFZLCtEQUErRCx3QkFBd0IsY0FBYyxXQUFXLFdBQVcsZ0JBQWdCLDhCQUE4Qiw2QkFBNkIsV0FBVyxnQkFBZ0IsY0FBYyxZQUFZLDJCQUEyQixhQUFhLDBCQUEwQixnQkFBZ0Isa0NBQWtDLDBCQUEwQixnQkFBZ0IsZ0NBQWdDLG1CQUFtQixZQUFZLDZCQUE2Qix5QkFBeUIscUJBQXFCLG9CQUFvQixlQUFlLGtCQUFrQixTQUFTLGdCQUFnQiw2QkFBNkIsZ0JBQWdCLGNBQWMsbUJBQW1CLGFBQWEsbUJBQW1CLGVBQWUsZ0NBQWdDLHlCQUF5QiwwQ0FBMEMseUJBQXlCLGlCQUFpQiwwQkFBMEIsYUFBYSwwQkFBMEIseUJBQXlCLGFBQWEsMEJBQTBCLGNBQWMsaUJBQWlCLFlBQVksV0FBVyxtQkFBbUIsVUFBVSw2QkFBNkIsc0JBQXNCLGtCQUFrQixhQUFhLHVCQUF1QixtQkFBbUIsWUFBWSxlQUFlLHFCQUFxQixXQUFXLFdBQVcsZ0JBQWdCLDBCQUEwQixpQkFBaUIsWUFBWSxXQUFXLG1DQUFtQyxnQkFBZ0IsY0FBYyxlQUFlLFNBQVMsU0FBUyxZQUFZLFFBQVEsV0FBVyxnQkFBZ0Isa0JBQWtCLDZCQUE2QixXQUFXLFlBQVksMkJBQTJCLHlCQUF5QixzQkFBc0Isd0JBQXdCLG1DQUFtQyxZQUFZLDBCQUEwQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixnQkFBZ0IsYUFBYSxlQUFlLHNCQUFzQixlQUFlLG1DQUFtQyxrQkFBa0Isc0JBQXNCO0FBQzFoRTs7O0FDSFI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQW1FLHNFQUFzRSxFQUFFO0FBQ25JO0FBQ1IsZ0RBQXVELDh0QkFBMm5CO0FBQ2xyQixxREFBNEQsa1ZBQTJSLGVBQWUsRUFBRSxRQUFRO0FBQ2hYLHdLQUE4SixJQUFJO0FBQzFKOzs7QUNaUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUF3RCwyREFBMkQsRUFBRTtBQUM3RztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1NQUF5SCxnQ0FBZ0M7QUFDbEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtTUFBeUgsZ0NBQWdDLGtoQ0FBMjVCLHFCQUFxQiwwQkFBMEIscUJBQXFCLDBCQUEwQixnQkFBZ0IsRUFBRSxzQkFBc0Isd0JBQXdCLHNEQUF1QyxvREFBcUMscUNBQXFDLHNDQUFzQywwQkFBMEIsc0RBQXVDLG9EQUFxQyxxQ0FBcUMsRUFBRTtBQUMvL0M7QUFDQSwwQ0FBaUQseVRBQWtRLGVBQWUsRUFBRSxRQUFRO0FBQzVVLGdJQUFzSCxJQUFJO0FBQ2xIOzs7QUN2Q1I7QUFDQTtBQUNBLHdFQUEyQyxjQUFjLGdCQUFnQiw2QkFBNkIsV0FBVyxpQ0FBaUMsV0FBVyxrQkFBa0IsV0FBVyxpQkFBaUIsa0JBQWtCLFlBQVksV0FBVyxhQUFhLFlBQVksc0JBQXNCLGtCQUFrQixZQUFZLGVBQWUscUJBQXFCLGNBQWMsa0JBQWtCLFVBQVUsV0FBVyxZQUFZLFdBQVcsZ0JBQWdCLGNBQWMsMkJBQTJCLGtHQUFrRyxpQkFBaUIsY0FBYywwQkFBMEIsZ0JBQWdCLHVHQUF1RyxxQkFBcUIsV0FBVyxhQUFhLGVBQWUseUJBQXlCLHVCQUF1QixzQkFBc0IsbUJBQW1CLDZCQUE2QixvQkFBb0Isb0JBQW9CLHFCQUFxQixvQkFBb0IsZUFBZSxrQkFBa0IsY0FBYyxtQkFBbUIsa0NBQWtDLGNBQWMsOEJBQThCLGNBQWMsNEJBQTRCLGdCQUFnQixrQkFBa0IsMkJBQTJCLDZCQUE2QixhQUFhLHVCQUF1QixlQUFlLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLGtCQUFrQiwwQkFBMEIsZ0JBQWdCLHlEQUF5RCxnQkFBZ0IsUUFBUSxZQUFZLGVBQWUsMEJBQTBCLGFBQWEsc0JBQXNCLHVCQUF1QiwyQkFBMkIsV0FBVyxjQUFjLGtCQUFrQix5REFBeUQsMEJBQTBCLDJCQUEyQixRQUFRLDhCQUE4QixrQkFBa0IsaUJBQWlCLGtCQUFrQixpQ0FBaUMsOEJBQThCLGdCQUFnQix3QkFBd0IsV0FBVyxnQkFBZ0Isa0JBQWtCLGFBQWEsMkJBQTJCLGdEQUFnRCw4QkFBOEIsbUJBQW1CLGNBQWMsMkJBQTJCLDZCQUE2QixhQUFhLGVBQWUsdUJBQXVCLDBCQUEwQixtQkFBbUIsZ0NBQWdDLG1EQUFtRCxlQUFlLGdCQUFnQixtQkFBbUIsOEJBQThCLHFCQUFxQixvQkFBb0IscUJBQXFCLG9CQUFvQixrQkFBa0IsY0FBYyw2QkFBNkIsb0JBQW9CLHdCQUF3QixnQ0FBZ0MsOEJBQThCLGNBQWMsa0JBQWtCLHlCQUF5Qiw4QkFBOEIsZ0JBQWdCLGtCQUFrQixxQkFBcUIsWUFBWSxlQUFlLHFCQUFxQixvQkFBb0IsZUFBZSxnQkFBZ0IsY0FBYyxhQUFhLG1CQUFtQiwyQkFBMkIsY0FBYyxnQkFBZ0Isa0JBQWtCLHlCQUF5QixXQUFXLFlBQVksa0JBQWtCLDBCQUEwQixrQkFBa0I7QUFDanNHOzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBd0QsMkRBQTJELEVBQUU7QUFDN0c7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtTUFBeUgsZ0NBQWdDO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbU1BQXlILGdDQUFnQztBQUNsSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb01BQTBILGdDQUFnQztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDLDZLQUErSixxQkFBcUIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDJCQUEyQix5QkFBeUIsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsNkJBQTZCLDRCQUE0QixzQkFBc0IsNEJBQTRCLEVBQUUsc0JBQXNCLHNEQUF1QyxvREFBcUMscUNBQXFDLHNEQUF1QyxvREFBcUMscUNBQXFDLHVEQUF3QyxxREFBc0Msc0NBQXNDLHVEQUF3QyxzREFBdUMsdUNBQXVDLHdEQUF5QyxzREFBdUMsd0NBQXdDLHdEQUF5QyxzREFBdUMsd0NBQXdDLHdEQUF5QyxzREFBdUMsd0NBQXdDLEVBQUU7QUFDaGdEO0FBQ0EsMENBQWlELHVVQUFrUTtBQUNuVCxpSkFBc0gsSUFBSTtBQUNsSDs7O0FDakVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUF3RCwyREFBMkQsRUFBRTtBQUM3RztBQUNSLHFDQUE0QyxtOEJBQWl3QixlQUFlLGVBQWUsRUFBRSxRQUFRO0FBQ3IxQiwwQ0FBaUQsb1NBQTZPLGVBQWUsRUFBRSxRQUFRO0FBQ3ZULDBIQUFnSCxJQUFJO0FBQzVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEdBQWtHLHkyREFBcTBDLGtNQUEwSCxFQUFFLHVpRkFBOHlDLGVBQWUsRUFBRSxnNUxBQXd1RyxlQUFlLEVBQUUseXpDQUEwdUIsaUNBQW1CLEVBQUUsb1lBQWdPLDZIQUErRCxFQUFFLDgxSEFBb25FLDBFQUE0RCxrcUJBQTJZLFdBQVcseUNBQTZDLEdBQUcsMkNBQStDLEdBQUcsNkRBQWlFLEdBQUcsNkRBQWlFLEdBQUcscURBQXlELEdBQUcscURBQXlELEdBQUcsMkRBQStELEdBQUcsMkRBQStELEdBQUcsK0NBQW1ELEdBQUcsK0NBQW1ELEdBQUcsdURBQTJELEdBQUcsdURBQTJELEdBQUcsb0RBQXdELEdBQUcsc0RBQTBELEdBQUcsNENBQWdELEdBQUcsRUFBRSwyeUJBQW9lLEVBQUU7QUFDMWhXOzs7OztBQ3RFUjtBQUN5QztBQUNzQjtBQUNsQztBQUM3QixlQUFlLGFBQXFCLElBQUksUUFBd0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUSIsImZpbGUiOiJqcy9tYWluLjlhZDljNTdmMWMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gNzM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5XG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJjb25zdCByYW5kb21CeXRlcyA9IChzaXplKSA9PiB7XG4gICAgbGV0IHJuZCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICAgIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZCk7XG4gICAgcmV0dXJuIHJuZDtcbn07XG5jb25zdCDJtTAgPSByYW5kb21CeXRlcztcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbUJ5dGVzO1xuZXhwb3J0IHsgybUwIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC9yYW5kb21CeXRlcy1icm93c2VyLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgQlRIID0gW1wiMDBcIiwgXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLCBcIjA1XCIsIFwiMDZcIiwgXCIwN1wiLCBcIjA4XCIsIFwiMDlcIiwgXCIwYVwiLCBcIjBiXCIsIFwiMGNcIiwgXCIwZFwiLCBcIjBlXCIsIFwiMGZcIixcbiAgICBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiLCBcIjEzXCIsIFwiMTRcIiwgXCIxNVwiLCBcIjE2XCIsIFwiMTdcIiwgXCIxOFwiLCBcIjE5XCIsIFwiMWFcIiwgXCIxYlwiLCBcIjFjXCIsIFwiMWRcIiwgXCIxZVwiLCBcIjFmXCIsXG4gICAgXCIyMFwiLCBcIjIxXCIsIFwiMjJcIiwgXCIyM1wiLCBcIjI0XCIsIFwiMjVcIiwgXCIyNlwiLCBcIjI3XCIsIFwiMjhcIiwgXCIyOVwiLCBcIjJhXCIsIFwiMmJcIiwgXCIyY1wiLCBcIjJkXCIsIFwiMmVcIiwgXCIyZlwiLFxuICAgIFwiMzBcIiwgXCIzMVwiLCBcIjMyXCIsIFwiMzNcIiwgXCIzNFwiLCBcIjM1XCIsIFwiMzZcIiwgXCIzN1wiLCBcIjM4XCIsIFwiMzlcIiwgXCIzYVwiLCBcIjNiXCIsIFwiM2NcIiwgXCIzZFwiLCBcIjNlXCIsIFwiM2ZcIixcbiAgICBcIjQwXCIsIFwiNDFcIiwgXCI0MlwiLCBcIjQzXCIsIFwiNDRcIiwgXCI0NVwiLCBcIjQ2XCIsIFwiNDdcIiwgXCI0OFwiLCBcIjQ5XCIsIFwiNGFcIiwgXCI0YlwiLCBcIjRjXCIsIFwiNGRcIiwgXCI0ZVwiLCBcIjRmXCIsXG4gICAgXCI1MFwiLCBcIjUxXCIsIFwiNTJcIiwgXCI1M1wiLCBcIjU0XCIsIFwiNTVcIiwgXCI1NlwiLCBcIjU3XCIsIFwiNThcIiwgXCI1OVwiLCBcIjVhXCIsIFwiNWJcIiwgXCI1Y1wiLCBcIjVkXCIsIFwiNWVcIiwgXCI1ZlwiLFxuICAgIFwiNjBcIiwgXCI2MVwiLCBcIjYyXCIsIFwiNjNcIiwgXCI2NFwiLCBcIjY1XCIsIFwiNjZcIiwgXCI2N1wiLCBcIjY4XCIsIFwiNjlcIiwgXCI2YVwiLCBcIjZiXCIsIFwiNmNcIiwgXCI2ZFwiLCBcIjZlXCIsIFwiNmZcIixcbiAgICBcIjcwXCIsIFwiNzFcIiwgXCI3MlwiLCBcIjczXCIsIFwiNzRcIiwgXCI3NVwiLCBcIjc2XCIsIFwiNzdcIiwgXCI3OFwiLCBcIjc5XCIsIFwiN2FcIiwgXCI3YlwiLCBcIjdjXCIsIFwiN2RcIiwgXCI3ZVwiLCBcIjdmXCIsXG4gICAgXCI4MFwiLCBcIjgxXCIsIFwiODJcIiwgXCI4M1wiLCBcIjg0XCIsIFwiODVcIiwgXCI4NlwiLCBcIjg3XCIsIFwiODhcIiwgXCI4OVwiLCBcIjhhXCIsIFwiOGJcIiwgXCI4Y1wiLCBcIjhkXCIsIFwiOGVcIiwgXCI4ZlwiLFxuICAgIFwiOTBcIiwgXCI5MVwiLCBcIjkyXCIsIFwiOTNcIiwgXCI5NFwiLCBcIjk1XCIsIFwiOTZcIiwgXCI5N1wiLCBcIjk4XCIsIFwiOTlcIiwgXCI5YVwiLCBcIjliXCIsIFwiOWNcIiwgXCI5ZFwiLCBcIjllXCIsIFwiOWZcIixcbiAgICBcImEwXCIsIFwiYTFcIiwgXCJhMlwiLCBcImEzXCIsIFwiYTRcIiwgXCJhNVwiLCBcImE2XCIsIFwiYTdcIiwgXCJhOFwiLCBcImE5XCIsIFwiYWFcIiwgXCJhYlwiLCBcImFjXCIsIFwiYWRcIiwgXCJhZVwiLCBcImFmXCIsXG4gICAgXCJiMFwiLCBcImIxXCIsIFwiYjJcIiwgXCJiM1wiLCBcImI0XCIsIFwiYjVcIiwgXCJiNlwiLCBcImI3XCIsIFwiYjhcIiwgXCJiOVwiLCBcImJhXCIsIFwiYmJcIiwgXCJiY1wiLCBcImJkXCIsIFwiYmVcIiwgXCJiZlwiLFxuICAgIFwiYzBcIiwgXCJjMVwiLCBcImMyXCIsIFwiYzNcIiwgXCJjNFwiLCBcImM1XCIsIFwiYzZcIiwgXCJjN1wiLCBcImM4XCIsIFwiYzlcIiwgXCJjYVwiLCBcImNiXCIsIFwiY2NcIiwgXCJjZFwiLCBcImNlXCIsIFwiY2ZcIixcbiAgICBcImQwXCIsIFwiZDFcIiwgXCJkMlwiLCBcImQzXCIsIFwiZDRcIiwgXCJkNVwiLCBcImQ2XCIsIFwiZDdcIiwgXCJkOFwiLCBcImQ5XCIsIFwiZGFcIiwgXCJkYlwiLCBcImRjXCIsIFwiZGRcIiwgXCJkZVwiLCBcImRmXCIsXG4gICAgXCJlMFwiLCBcImUxXCIsIFwiZTJcIiwgXCJlM1wiLCBcImU0XCIsIFwiZTVcIiwgXCJlNlwiLCBcImU3XCIsIFwiZThcIiwgXCJlOVwiLCBcImVhXCIsIFwiZWJcIiwgXCJlY1wiLCBcImVkXCIsIFwiZWVcIiwgXCJlZlwiLFxuICAgIFwiZjBcIiwgXCJmMVwiLCBcImYyXCIsIFwiZjNcIiwgXCJmNFwiLCBcImY1XCIsIFwiZjZcIiwgXCJmN1wiLCBcImY4XCIsIFwiZjlcIiwgXCJmYVwiLCBcImZiXCIsIFwiZmNcIiwgXCJmZFwiLCBcImZlXCIsIFwiZmZcIl07XG5leHBvcnQgZGVmYXVsdCAoYnVmKSA9PiBCVEhbYnVmWzBdXSArIEJUSFtidWZbMV1dICtcbiAgICBCVEhbYnVmWzJdXSArIEJUSFtidWZbM11dICsgJy0nICtcbiAgICBCVEhbYnVmWzRdXSArIEJUSFtidWZbNV1dICsgJy0nICtcbiAgICBCVEhbYnVmWzZdXSArIEJUSFtidWZbN11dICsgJy0nICtcbiAgICBCVEhbYnVmWzhdXSArIEJUSFtidWZbOV1dICsgJy0nICtcbiAgICBCVEhbYnVmWzEwXV0gKyBCVEhbYnVmWzExXV0gK1xuICAgIEJUSFtidWZbMTJdXSArIEJUSFtidWZbMTNdXSArXG4gICAgQlRIW2J1ZlsxNF1dICsgQlRIW2J1ZlsxNV1dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvYnl0ZXNUb1V1aWQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgcmFuZG9tQnl0ZXMgZnJvbSAnLi9yYW5kb21CeXRlcyc7XG5pbXBvcnQgYnl0ZXNUb1V1aWQgZnJvbSAnLi9ieXRlc1RvVXVpZCc7XG5jb25zdCBTRUVEX0JZVEVTID0gcmFuZG9tQnl0ZXMoMTYpO1xuY29uc3QgTk9ERV9JRCA9IFtcbiAgICBTRUVEX0JZVEVTWzBdIHwgMHgwMSxcbiAgICBTRUVEX0JZVEVTWzFdLFxuICAgIFNFRURfQllURVNbMl0sXG4gICAgU0VFRF9CWVRFU1szXSxcbiAgICBTRUVEX0JZVEVTWzRdLFxuICAgIFNFRURfQllURVNbNV0sXG5dO1xubGV0IF9jbG9ja3NlcSA9IChTRUVEX0JZVEVTWzZdIDw8IDggfCBTRUVEX0JZVEVTWzddKSAmIDB4M2ZmZjtcbmxldCBsYXN0TVNlY3MgPSAwO1xubGV0IGxhc3ROU2VjcyA9IDA7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgbGV0IG1zZWNzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgbGV0IG5zZWNzID0gbGFzdE5TZWNzICsgMTtcbiAgICBsZXQgZHQgPSAobXNlY3MgLSBsYXN0TVNlY3MpICsgKG5zZWNzIC0gbGFzdE5TZWNzKSAvIDEwMDAwO1xuICAgIGxldCBjbG9ja3NlcSA9IGR0IDwgMCA/IF9jbG9ja3NlcSArIDEgJiAweDNmZmYgOiBfY2xvY2tzZXE7XG4gICAgaWYgKGR0IDwgMCB8fCBtc2VjcyA+IGxhc3RNU2Vjcykge1xuICAgICAgICBuc2VjcyA9IDA7XG4gICAgfVxuICAgIGlmIChuc2VjcyA+PSAxMDAwMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gICAgbGFzdE1TZWNzID0gbXNlY3M7XG4gICAgbGFzdE5TZWNzID0gbnNlY3M7XG4gICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG4gICAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBiID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIGxldCB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsICYgMHhmZjtcbiAgICBsZXQgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gICAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bWggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuICAgIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcbiAgICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCA2OyArK24pXG4gICAgICAgIGJbaSArIG5dID0gTk9ERV9JRFtuXTtcbiAgICByZXR1cm4gYnl0ZXNUb1V1aWQoYik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvdjEudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgY29uc3QgVVVJRHYxX1BBVFRFUk4gPSAnW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tMVthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSc7XG5leHBvcnQgY29uc3QgVVVJRHYxX1JFR0VYUCA9IC9eW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tMVthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSQvaTtcbmV4cG9ydCBjb25zdCBVVUlEdjRfUEFUVEVSTiA9ICdbYS1mMC05XXs4fS1bYS1mMC05XXs0fS00W2EtZjAtOV17M30tWzg5YWJdW2EtZjAtOV17M30tW2EtZjAtOV17MTJ9JztcbmV4cG9ydCBjb25zdCBVVUlEdjRfUkVHRVhQID0gL15bYS1mMC05XXs4fS1bYS1mMC05XXs0fS00W2EtZjAtOV17M30tWzg5YWJdW2EtZjAtOV17M30tW2EtZjAtOV17MTJ9JC9pO1xuZXhwb3J0IGNvbnN0IFVVSURuaWxfUEFUVEVSTiA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuZXhwb3J0IGNvbnN0IFVVSURuaWxfUkVHRVhQID0gL14wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAkLztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3BhdHRlcm5zLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHYxIGZyb20gJy4vdjEnO1xuaW1wb3J0IHsgVVVJRHYxX1JFR0VYUCwgVVVJRHY0X1JFR0VYUCwgVVVJRG5pbF9SRUdFWFAsIFVVSURuaWxfUEFUVEVSTiwgfSBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCBjbGFzcyBVVUlEIHtcbiAgICBzdGF0aWMgZ2V0QXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpLmNvbmNhdCh2YWx1ZSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHV1aWQgPSBuZXcgVVVJRChpdGVtICYmIGl0ZW0uaWQgfHwgaXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV1aWQudmVyc2lvbiA9PT0gbnVsbCA/IG51bGwgOiB1dWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IodXVpZCA9IG51bGwpIHtcbiAgICAgICAgaWYgKHV1aWQgaW5zdGFuY2VvZiBVVUlEKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSB1dWlkLnZlcnNpb247XG4gICAgICAgICAgICB0aGlzLnV1aWQgPSB1dWlkLnV1aWQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB1dWlkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoVVVJRG5pbF9SRUdFWFAudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudXVpZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFVVSUR2MV9SRUdFWFAudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMudXVpZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFVVSUR2NF9SRUdFWFAudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMudXVpZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVVUlEIFwiJHt1dWlkfVwiIGRvZXMgbm90IG1hdGNoIHRoZSBVVUlEIHN0cmluZ2ApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dWlkID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gVVVJRG5pbF9QQVRURVJOO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV1aWQgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IDE7XG4gICAgICAgICAgICB0aGlzLnV1aWQgPSB2MSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV1aWQgPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IDQ7XG4gICAgICAgICAgICB0aGlzLnV1aWQgPSB2MSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIFVVSUQgdmVyc2lvbiBvZiBcIiR7dXVpZH1cImApO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBVVUlEIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdVVUlEJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC91dWlkLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi91dWlkJztcbmV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBHRU5JVElWRV9NT05USFMgPSBbXG4gICAgJ9Cv0L3QstCw0YDRjycsXG4gICAgJ9Ck0LXQstGA0LDQu9GPJyxcbiAgICAn0JzQsNGA0YLQsCcsXG4gICAgJ9CQ0L/RgNC10LvRjycsXG4gICAgJ9Cc0LDRjycsXG4gICAgJ9CY0Y7QvdGPJyxcbiAgICAn0JjRjtC70Y8nLFxuICAgICfQkNCy0LPRg9GB0YLQsCcsXG4gICAgJ9Ch0LXQvdGC0Y/QsdGA0Y8nLFxuICAgICfQntC60YLRj9Cx0YDRjycsXG4gICAgJ9Cd0L7Rj9Cx0YDRjycsXG4gICAgJ9CU0LXQutCw0LHRgNGPJ1xuXTtcbmV4cG9ydCBjbGFzcyBUaW1lc3RhbXAgZXh0ZW5kcyBEYXRlIHtcbiAgICBzdGF0aWMgZnJvbVVudXgodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdXRzID0gfn52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lc3RhbXAodXRzICogMTAwMCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgICAgIHJldHVybiAhTnVtYmVyLmlzTmFOKHRoaXMuZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZ2V0IGlzSW52YWxpZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVmFsaWQ7XG4gICAgfVxuICAgIHRvVVJMU3RyaW5nKCkge1xuICAgICAgICBjb25zdCB5ZWFyID0gU3RyaW5nKHRoaXMuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKHRoaXMuZ2V0VVRDTW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBTdHJpbmcodGhpcy5nZXRVVENEYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YDtcbiAgICB9XG4gICAgY29tcGFyZURhdGVXaXRoT3V0VGltZShvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGdWxsWWVhcigpID09PSBvdGhlci5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAmJiB0aGlzLmdldE1vbnRoKCkgPT09IG90aGVyLmdldE1vbnRoKClcbiAgICAgICAgICAgICYmIHRoaXMuZ2V0RGF0ZSgpID09PSBvdGhlci5nZXREYXRlKCk7XG4gICAgfVxuICAgIHRvSFJTdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBvdXQgPSAnJztcbiAgICAgICAgaWYgKHRoaXMuY29tcGFyZURhdGVXaXRoT3V0VGltZShub3cpKVxuICAgICAgICAgICAgb3V0ICs9ICfQodC10LPQvtC00L3Rjyc7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm93LnNldERhdGUobm93LmdldERhdGUoKSAtIDEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tcGFyZURhdGVXaXRoT3V0VGltZShub3cpKVxuICAgICAgICAgICAgICAgIG91dCArPSAn0JLRh9C10YDQsCc7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gU3RyaW5nKHRoaXMuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBvdXQgKz0gJyAnICsgR0VOSVRJVkVfTU9OVEhTW3RoaXMuZ2V0TW9udGgoKV07XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHRoaXMuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoeWVhciAhPT0gbm93LmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAgICAgICAgIG91dCArPSAnICcgKyBTdHJpbmcoeWVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3V0ICs9ICcgJyArIFN0cmluZyh0aGlzLmdldEhvdXJzKCkpO1xuICAgICAgICBvdXQgKz0gJzonICsgU3RyaW5nKHRoaXMuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcyk7XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IE1vZGVsIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdUaW1lc3RhbXAnO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS90aW1lc3RhbXAvdGltZXN0YW1wLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi90aW1lc3RhbXAnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3RpbWVzdGFtcC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IEVOVU1fSURfUkVHRVhQID0gL15bYS16XVthLXowLTldKiQvO1xuZXhwb3J0IGNsYXNzIEVudW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCFFTlVNX0lEX1JFR0VYUC50ZXN0KGlkKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEVudW0gSUQgXCIke2lkfVwiIGRvZXMgbm90IG1hdGMgdGhlIHBhdHRlcm4gXCIke0VOVU1fSURfUkVHRVhQLnNvdXJjZX1cImApO1xuICAgIH1cbiAgICBzdGF0aWMgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldCh2YWx1ZSkge1xuICAgICAgICBsZXQgaWQgPSBTdHJpbmcodmFsdWUgJiYgdmFsdWUuaWQgfHwgdmFsdWUpO1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMpXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBcnJheSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KCkuY29uY2F0KHZhbHVlKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHRoaXMuZ2V0KGl0ZW0pKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBFbnVtIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdFbnVtJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9lbnVtLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9lbnVtJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS9lbnVtL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgRW51bSB9IGZyb20gJ0Bjb3JlL2VudW0nO1xuZXhwb3J0IGNsYXNzIEJsb2NrRW51bSBleHRlbmRzIEVudW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB2YWx1ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3VwZXIoaWQsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdCbG9ja0VudW0nO1xuICAgIH1cbn1cbkJsb2NrRW51bS5BMSA9IG5ldyBCbG9ja0VudW0oJ2ExJywgJ0ExJywgJ9CS0LXRgNGI0L3QuNC5Jyk7XG5CbG9ja0VudW0uQTIgPSBuZXcgQmxvY2tFbnVtKCdhMicsICdBMicsICfQn9C+0LQg0LLQuNC00LXQvicpO1xuQmxvY2tFbnVtLkEzID0gbmV3IEJsb2NrRW51bSgnYTMnLCAnQTMnLCAn0J/QvtC0INC90L7QstC+0YHRgtGM0Y4nKTtcbkJsb2NrRW51bS5CMSA9IG5ldyBCbG9ja0VudW0oJ2IxJywgJ0IxJywgJ9CR0LDRiNC90Y8nKTtcbkJsb2NrRW51bS5CMiA9IG5ldyBCbG9ja0VudW0oJ2IyJywgJ0IyJywgJ9CR0LDRiNC90Y8nKTtcbkJsb2NrRW51bS5CMyA9IG5ldyBCbG9ja0VudW0oJ2IzJywgJ0IzJywgJ9CR0LDRiNC90Y8nKTtcbkJsb2NrRW51bS5NMSA9IG5ldyBCbG9ja0VudW0oJ20xJywgJ00xJywgJ9Cc0L7QsdC40LvRjNC90YvQuScpO1xuQmxvY2tFbnVtLk0yID0gbmV3IEJsb2NrRW51bSgnbTInLCAnTTInLCAn0JzQvtCx0LjQu9GM0L3Ri9C5Jyk7XG5CbG9ja0VudW0uTTMgPSBuZXcgQmxvY2tFbnVtKCdtMycsICdNMycsICfQnNC+0LHQuNC70YzQvdGL0LknKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9hZHMvYmxvY2suZW51bS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBCbG9ja0VudW0gfSBmcm9tICcuL2Jsb2NrLmVudW0nO1xuY29uc3QgRU5VTV9QR19BUlJBWV9QQVRURVJOID0gL15cXHsoW2EtejAtOSxdKylcXH0kLztcbmNvbnN0IERBVEVfUkVHRVhQID0gL15cXGR7NH0tXFxkezJ9LVxcZHszfSQvO1xuZXhwb3J0IGNsYXNzIEFkcyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICBpZiAodmFsdWUuYmxvY2tzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IEVOVU1fUEdfQVJSQVlfUEFUVEVSTi5leGVjKHZhbHVlLmJsb2Nrcyk7XG4gICAgICAgICAgICBjb25zdCBibG9ja3MgPSBtYXRjaCAmJiBtYXRjaFsxXS5zcGxpdCgnLCcpIHx8IHZhbHVlLmJsb2NrcztcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gQmxvY2tFbnVtLmdldEFycmF5KGJsb2Nrcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5lbmREYXRlKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5maWxlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUuZmlsZXMpID8gdmFsdWUuZmlsZXNcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IE1hdGgubWF4KH5+dmFsdWUuY29sbGVjdGVkLCAwKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPiAwKVxuICAgICAgICAgICAgOiBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5saW1pdHMgPVxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlLmxpbWl0cyA9PT0gJ29iamVjdCcgPyB7XG4gICAgICAgICAgICAgICAgc2hvdzogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuc2hvdywgMCksXG4gICAgICAgICAgICAgICAgc2hvd1BlckRheTogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuc2hvd1BlckRheSwgMCksXG4gICAgICAgICAgICAgICAgc2hvd1BlclVzZXI6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLnNob3dQZXJVc2VyLCAwKSxcbiAgICAgICAgICAgICAgICBjbGljazogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuY2xpY2ssIDApLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyRGF5OiBNYXRoLm1heCh+fnZhbHVlLmxpbWl0cy5jbGlja1BlckRheSwgMCksXG4gICAgICAgICAgICAgICAgY2xpY2tQZXJVc2VyOiBNYXRoLm1heCh+fnZhbHVlLmxpbWl0cy5jbGlja1BlclVzZXIsIDApLFxuICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICBzaG93OiAwLFxuICAgICAgICAgICAgICAgIHNob3dQZXJEYXk6IDAsXG4gICAgICAgICAgICAgICAgc2hvd1BlclVzZXI6IDAsXG4gICAgICAgICAgICAgICAgY2xpY2s6IDAsXG4gICAgICAgICAgICAgICAgY2xpY2tQZXJEYXk6IDAsXG4gICAgICAgICAgICAgICAgY2xpY2tQZXJVc2VyOiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0cyA9IHt9O1xuICAgICAgICBpZiAodmFsdWUuc3RhdHMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlLnN0YXRzKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gU3RyaW5nKGtleSkudHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmIChEQVRFX1JFR0VYUC50ZXN0KGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IE1hdGgubWF4KH5+dmFsdWUuc3RhdHNba2V5XS5zaG93LCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBNYXRoLm1heCh+fnZhbHVlLnN0YXRzW2tleV0uY2xpY2ssIDApLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIGJsb2NrczogdGhpcy5ibG9ja3MubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBmaWxlczogdGhpcy5maWxlcyxcbiAgICAgICAgICAgIGxpbWl0czogdGhpcy5saW1pdHMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIGJsb2NrczogdGhpcy5ibG9ja3MsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGZpbGVzOiB0aGlzLmZpbGVzLFxuICAgICAgICAgICAgbGltaXRzOiB0aGlzLmxpbWl0cyxcbiAgICAgICAgICAgIHN0YXRzOiB0aGlzLnN0YXRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBBZHMgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0Fkcyc7XG4gICAgfVxufVxuQWRzLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAnYmxvY2tzJyxcbiAgICAndGl0bGUnLFxuICAgICdzdGFydERhdGUnLFxuICAgICdlbmREYXRlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2Fkcy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYWRzJztcbmV4cG9ydCAqIGZyb20gJy4vYmxvY2suZW51bSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNsYXNzIFByaWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9idGMgPSAwO1xuICAgICAgICB0aGlzLl91c2QgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBidGMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idGM7XG4gICAgfVxuICAgIGdldCB1c2QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2Q7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGJ0YyA9IHZhbHVlLmJ0YyAhPT0gdW5kZWZpbmVkICYmIE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUuYnRjKSwgMCk7XG4gICAgICAgIHRoaXMuX2J0YyA9IGJ0YyB8fCB0aGlzLmJ0YztcbiAgICAgICAgY29uc3QgdXNkID0gdmFsdWUudXNkICE9PSB1bmRlZmluZWQgJiYgTWF0aC5tYXgocGFyc2VGbG9hdCh2YWx1ZS51c2QpLCAwKTtcbiAgICAgICAgdGhpcy5fdXNkID0gdXNkIHx8IHRoaXMudXNkO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnRjOiB0aGlzLmJ0YyxcbiAgICAgICAgICAgIHVzZDogdGhpcy51c2QsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ0YzogdGhpcy5idGMsXG4gICAgICAgICAgICB1c2Q6IHRoaXMudXNkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNkIHx8IDA7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudG9OdW1iZXIoKSk7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFByaWNlIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdQcmljZSc7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2NvaW4vcHJpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUHJpY2UgfSBmcm9tICcuL3ByaWNlJztcbmV4cG9ydCBjbGFzcyBIaXN0b3JpY2FsIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucHJpY2UgPSBuZXcgUHJpY2UoKTtcbiAgICAgICAgdGhpcy50cyA9IG5ldyBUaW1lc3RhbXAodmFsdWUudHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHZhbHVlLnByaWNlKTtcbiAgICB9XG4gICAgdXBkYXRlUHJpY2UodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLnByaWNlLnVwZGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2UudG9OdW1iZXIoKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy50cyk7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IEhpc3RvcmljYWwgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0hpc3RvcmljYWwnO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2hpc3RvcmljYWwudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUHJpY2UgfSBmcm9tICcuL3ByaWNlJztcbmltcG9ydCB7IEhpc3RvcmljYWwgfSBmcm9tICcuL2hpc3RvcmljYWwnO1xuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXltBLVowLTlAJF0rJC87XG5leHBvcnQgY2xhc3MgQ29pbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLl9tYXggPSAwO1xuICAgICAgICB0aGlzLl9hdmFpbGFibGUgPSAwO1xuICAgICAgICB0aGlzLnByaWNlID0gbmV3IFByaWNlKCk7XG4gICAgICAgIHRoaXMuX3ZvbHVtZTI0ID0gMDtcbiAgICAgICAgdGhpcy5faGlzdG9yaWNhbCA9IG5ldyBBcnJheSgpO1xuICAgICAgICBjb25zdCBzeW1ib2wgPSBTdHJpbmcodmFsdWUuc3ltYm9sIHx8ICcnKS50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKCFTWU1CT0xfUEFUVEVSTi50ZXN0KHN5bWJvbCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBTeW1ib2wgXCIke3N5bWJvbH0gbm90IG1hdGNoIHRvIHBhdHRlcm4gJHtTWU1CT0xfUEFUVEVSTi5zb3VyY2V9YCk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICB0aGlzLnVwZGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBtYXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXg7XG4gICAgfVxuICAgIGdldCBhdmFpbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGU7XG4gICAgfVxuICAgIGdldCBjYXBpdGFsaXphdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ0YzogdGhpcy5wcmljZS5idGMgKiB0aGlzLmF2YWlsYWJsZSxcbiAgICAgICAgICAgIHVzZDogdGhpcy5wcmljZS51c2QgKiB0aGlzLmF2YWlsYWJsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHZvbHVtZTI0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lMjQ7XG4gICAgfVxuICAgIGdldCB0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RzO1xuICAgIH1cbiAgICBnZXQgaGlzdG9yaWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpc3RvcmljYWwuc29ydCgoYSwgYikgPT4gYS50cyA8IGIudHMgPyAtMSA6IDEpO1xuICAgIH1cbiAgICBnZXQgbGFzdEhpc3RvcmljYWwoKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcmljYWwgPSB0aGlzLmhpc3RvcmljYWw7XG4gICAgICAgIGlmIChoaXN0b3JpY2FsLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBoaXN0b3JpY2FsW2hpc3RvcmljYWwubGVuZ3RoIC0gMV0udHM7XG4gICAgfVxuICAgIHVwZGF0ZVByaWNlKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5wcmljZS51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICB1cGRhdGVIaXN0b3JpY2FsKHZhbHVlID0gW10pIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFsdWUubWFwKGl0ZW0gPT4gbmV3IEhpc3RvcmljYWwoaXRlbSkpXG4gICAgICAgICAgICAuZm9yRWFjaChuZXdJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5faGlzdG9yaWNhbC5maW5kKGl0ZW0gPT4gTnVtYmVyKGl0ZW0udHMpID09PSBOdW1iZXIobmV3SXRlbS50cykpO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hpc3RvcmljYWwucHVzaChuZXdJdGVtKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SXRlbS51cGRhdGVQcmljZShuZXdJdGVtLnByaWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh2YWx1ZS5zeW1ib2wgIT09IHRoaXMuc3ltYm9sKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLl9tYXggPSB2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUubWF4KSwgMCkgOiAwO1xuICAgICAgICB0aGlzLl9hdmFpbGFibGUgPSB2YWx1ZS5hdmFpbGFibGUgIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUuYXZhaWxhYmxlKSwgMCkgOiAwO1xuICAgICAgICB0aGlzLl92b2x1bWUyNCA9IHZhbHVlLnZvbHVtZTI0ICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLnZvbHVtZTI0KSwgMCkgOiAwO1xuICAgICAgICB0aGlzLl90cyA9IG5ldyBUaW1lc3RhbXAodmFsdWUudHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHZhbHVlLnByaWNlKTtcbiAgICAgICAgdGhpcy51cGRhdGVIaXN0b3JpY2FsKHZhbHVlLmhpc3RvcmljYWwpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRoaXMuYXZhaWxhYmxlLFxuICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UudmFsdWVPZigpLFxuICAgICAgICAgICAgY2FwaXRhbGl6YXRpb246IHRoaXMuY2FwaXRhbGl6YXRpb24sXG4gICAgICAgICAgICB2b2x1bWUyNDogdGhpcy52b2x1bWUyNCxcbiAgICAgICAgICAgIHRzOiB0aGlzLnRzLFxuICAgICAgICAgICAgaGlzdG9yaWNhbDogdGhpcy5oaXN0b3JpY2FsLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uOiB0aGlzLmNhcGl0YWxpemF0aW9uLFxuICAgICAgICAgICAgdm9sdW1lMjQ6IHRoaXMudm9sdW1lMjQsXG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZXF1YWwoaXRlbSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoaXRlbSkgPT09IEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FwaXRhbGl6YXRpb24udXNkO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBDb2luIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdDb2luJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9jb2luLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9jb2luJztcbmV4cG9ydCAqIGZyb20gJy4vcHJpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9oaXN0b3JpY2FsJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNsYXNzIFJhdGluZyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLmxpa2UgPSBNYXRoLm1heCh+fnZhbHVlLmxpa2UsIDApO1xuICAgICAgICB0aGlzLmRpc2xpa2UgPSBNYXRoLm1heCh+fnZhbHVlLmRpc2xpa2UsIDApO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpa2UgLyAodGhpcy5saWtlICsgdGhpcy5kaXNsaWtlKTtcbiAgICB9XG4gICAgZ2V0IHN0YXJzKCkge1xuICAgICAgICByZXR1cm4gNSAqIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaWtlOiB0aGlzLmxpa2UsXG4gICAgICAgICAgICBkaXNsaWtlOiB0aGlzLmRpc2xpa2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpa2U6IHRoaXMubGlrZSxcbiAgICAgICAgICAgIGRpc2xpa2U6IHRoaXMuZGlzbGlrZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgUmFpdGluZyB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnUmFpdGluZyc7XG4gICAgfVxufVxuUmF0aW5nLk1haW5GaWVsZHMgPSBbXG4gICAgJ2xpa2UnLFxuICAgICdkaXNsaWtlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcmF0aW5nL3JhdGluZy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcmF0aW5nJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9yYXRpbmcvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBTdHJpbmcodmFsdWUuc3ltYm9sIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMuZXh0VXJsID0gU3RyaW5nKHZhbHVlLmV4dFVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMuZm91bmRlciA9IFN0cmluZyh2YWx1ZS5mb3VuZGVyIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMubWF4Q29pbiA9IE1hdGgubWF4KH5+dmFsdWUubWF4Q29pbiwgMCk7XG4gICAgICAgIHRoaXMuYWxnb3JpdGhtID0gU3RyaW5nKHZhbHVlLmFsZ29yaXRobSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnN5c3RlbSA9IFN0cmluZyh2YWx1ZS5zeXN0ZW0gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGZvdW5kZXI6IHRoaXMuZm91bmRlcixcbiAgICAgICAgICAgIG1heENvaW46IHRoaXMubWF4Q29pbixcbiAgICAgICAgICAgIGFsZ29yaXRobTogdGhpcy5hbGdvcml0aG0sXG4gICAgICAgICAgICBzeXN0ZW06IHRoaXMuc3lzdGVtLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBmb3VuZGVyOiB0aGlzLmZvdW5kZXIsXG4gICAgICAgICAgICBtYXhDb2luOiB0aGlzLm1heENvaW4sXG4gICAgICAgICAgICBhbGdvcml0aG06IHRoaXMuYWxnb3JpdGhtLFxuICAgICAgICAgICAgc3lzdGVtOiB0aGlzLnN5c3RlbSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IEN1cnJlbmN5IHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdDdXJyZW5jeSc7XG4gICAgfVxufVxuQ3VycmVuY3kuTWFpbkZpZWxkcyA9IFtcbiAgICAnc3ltYm9sJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2N1cnJlbmN5LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9jdXJyZW5jeSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY3VycmVuY3kvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBFeGNoYW5nZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5yZWZlcnJhbCA9ICEhdmFsdWUucmVmZXJyYWw7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICByZWZlcnJhbDogdGhpcy5yZWZlcnJhbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZWZlcnJhbDogdGhpcy5yZWZlcnJhbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IEV4Y2hhbmdlIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdFeGNoYW5nZSc7XG4gICAgfVxufVxuRXhjaGFuZ2UuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd1cmwnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXhjaGFuZ2UvZXhjaGFuZ2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2V4Y2hhbmdlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9leGNoYW5nZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuZXhwb3J0IGNsYXNzIElDTyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5nb2FsID0gTWF0aC5tYXgofn52YWx1ZS5nb2FsLCAwKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0ZWQgPSBNYXRoLm1heCh+fnZhbHVlLmNvbGxlY3RlZCwgMCk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gU3RyaW5nKHZhbHVlLnN0YXR1cyB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBTdHJpbmcodmFsdWUuY29udGVudCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZ29hbDogdGhpcy5nb2FsLFxuICAgICAgICAgICAgY29sbGVjdGVkOiB0aGlzLmNvbGxlY3RlZCxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuaXNWYWxpZCA/IHRoaXMuc3RhcnREYXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ29hbDogdGhpcy5nb2FsLFxuICAgICAgICAgICAgY29sbGVjdGVkOiB0aGlzLmNvbGxlY3RlZCxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBJQ08gdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0lDTyc7XG4gICAgfVxufVxuSUNPLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pY28udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2ljbyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvaWNvL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5leHBvcnQgY2xhc3MgTWFya2V0IHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmV4dFVybCA9IFN0cmluZyh2YWx1ZS5leHRVcmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5zdGFydERhdGUpO1xuICAgICAgICB0aGlzLnJlZmVycmFsID0gISF2YWx1ZS5yZWZlcnJhbDtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIHJlZmVycmFsOiB0aGlzLnJlZmVycmFsLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmlzVmFsaWQgPyB0aGlzLnN0YXJ0RGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlZmVycmFsOiB0aGlzLnJlZmVycmFsLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgTWFya2V0IHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdNYXJrZXQnO1xuICAgIH1cbn1cbk1hcmtldC5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3VybCcsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvbWFya2V0LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9tYXJrZXQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL21hcmtldC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IFJVUyA9ICfRiSAg0YggINGHICDRhiAg0Y4gINGPICDRkSDQtiAg0Ysg0Y0g0LAg0LEg0LIg0LMg0LQg0LUg0Lcg0Lgg0Lkg0Log0Lsg0Lwg0L0g0L4g0L8g0YAg0YEg0YIg0YMg0YQg0YUnLnNwbGl0KC9cXHMrLyk7XG5jb25zdCBFTkcgPSAnc2ggc2ggY2ggY3ogeXUgeWEgZSB6aCB5IGUgYSBiIHYgZyBkIGUgeiBpIGogayBsIG0gbiBvIHAgciBzIHQgdSBmIHgnLnNwbGl0KC9cXHMrLyk7XG5leHBvcnQgY2xhc3MgVVJMQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cblVSTEJ1aWxkZXIuYnVpbGQgPSAoaW5wdXQsIG1heExlbmd0aCA9IDEyOCkgPT4ge1xuICAgIGxldCB0ZXh0ID0gaW5wdXQudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnXycpO1xuICAgIHRleHQgPSB0ZXh0LnNwbGl0KCcnKVxuICAgICAgICAubWFwKGNoYXIgPT4ge1xuICAgICAgICBsZXQgaSA9IFJVUy5pbmRleE9mKGNoYXIpO1xuICAgICAgICByZXR1cm4gaSA8IDAgPyBjaGFyIDogRU5HW2ldO1xuICAgIH0pLmpvaW4oJycpO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1teMC05YS16X10vZywgJycpXG4gICAgICAgIC5zbGljZSgwLCBtYXhMZW5ndGgpXG4gICAgICAgIC5yZXBsYWNlKC8oXl8rfF8rJCkvZywgJycpO1xuICAgIHJldHVybiB0ZXh0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci91cmwtYnVpbGRlci50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdXJsLWJ1aWxkZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3VybC1idWlsZGVyL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgVVJMQnVpbGRlciB9IGZyb20gJ0Bjb3JlL3VybC1idWlsZGVyJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuZXhwb3J0IGNsYXNzIFB1YmxpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMudHMgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnRzKTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMuc2VjdGlvbnMgPSBVVUlELmdldEFycmF5KHZhbHVlLnNlY3Rpb25zKTtcbiAgICAgICAgdGhpcy5jdXJyZW5jaWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZS5jdXJyZW5jaWVzKSA/IHZhbHVlLmN1cnJlbmNpZXNcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IFN0cmluZyhpdGVtKS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICEhaXRlbSlcbiAgICAgICAgICAgIDogbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuZXhjaGFuZ2VzID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5leGNoYW5nZXMpO1xuICAgICAgICB0aGlzLmljbyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUuaWNvKTtcbiAgICAgICAgdGhpcy5tYXJrZXRzID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5tYXJrZXRzKTtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSB2YWx1ZS53ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDEgOiBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLndlaWdodCwgMCksIDMpO1xuICAgICAgICB0aGlzLmJpZ1RpdGxlID0gU3RyaW5nKHZhbHVlLmJpZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLmF1dGhvcnMgPSBVVUlELmdldEFycmF5KHZhbHVlLmF1dGhvcnMpO1xuICAgICAgICB0aGlzLnRhZ3MgPSBBcnJheS5pc0FycmF5KHZhbHVlLnRhZ3MpID8gdmFsdWUudGFnc1xuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gU3RyaW5nKGl0ZW0pLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gISFpdGVtKVxuICAgICAgICAgICAgOiBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zaGFyaW5nID0gdmFsdWUuc2hhcmluZyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuc2hhcmluZztcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IHZhbHVlLmNvbW1lbnRzID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5jb21tZW50cztcbiAgICAgICAgdGhpcy5hZHMgPSB2YWx1ZS5hZHMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmFkcztcbiAgICAgICAgdGhpcy5yc3MgPSB2YWx1ZS5yc3MgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLnJzcztcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWQgPSBuZXcgVGltZXN0YW1wKHZhbHVlLmxhc3RNb2RpZmllZCk7XG4gICAgICAgIGlmICghdGhpcy51cmwpXG4gICAgICAgICAgICB0aGlzLnVybCA9IFVSTEJ1aWxkZXIuYnVpbGQodGhpcy50aXRsZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgc2VjdGlvbnM6IHRoaXMuc2VjdGlvbnMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgY3VycmVuY2llczogdGhpcy5jdXJyZW5jaWVzLFxuICAgICAgICAgICAgZXhjaGFuZ2VzOiB0aGlzLmV4Y2hhbmdlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICBpY286IHRoaXMuaWNvLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIG1hcmtldHM6IHRoaXMubWFya2V0cy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICB3ZWlnaHQ6IHRoaXMud2VpZ2h0LFxuICAgICAgICAgICAgYmlnVGl0bGU6IHRoaXMuYmlnVGl0bGUsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBhdXRob3JzOiB0aGlzLmF1dGhvcnMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgc2hhcmluZzogdGhpcy5zaGFyaW5nLFxuICAgICAgICAgICAgY29tbWVudHM6IHRoaXMuY29tbWVudHMsXG4gICAgICAgICAgICBhZHM6IHRoaXMuYWRzLFxuICAgICAgICAgICAgcnNzOiB0aGlzLnJzcyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIHRzOiB0aGlzLnRzLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBzZWN0aW9uczogdGhpcy5zZWN0aW9ucyxcbiAgICAgICAgICAgIGN1cnJlbmNpZXM6IHRoaXMuY3VycmVuY2llcyxcbiAgICAgICAgICAgIGV4Y2hhbmdlczogdGhpcy5leGNoYW5nZXMsXG4gICAgICAgICAgICBpY286IHRoaXMuaWNvLFxuICAgICAgICAgICAgbWFya2V0czogdGhpcy5tYXJrZXRzLFxuICAgICAgICAgICAgd2VpZ2h0OiB0aGlzLndlaWdodCxcbiAgICAgICAgICAgIGJpZ1RpdGxlOiB0aGlzLmJpZ1RpdGxlLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgYXV0aG9yczogdGhpcy5hdXRob3JzLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgc2hhcmluZzogdGhpcy5zaGFyaW5nLFxuICAgICAgICAgICAgY29tbWVudHM6IHRoaXMuY29tbWVudHMsXG4gICAgICAgICAgICBhZHM6IHRoaXMuYWRzLFxuICAgICAgICAgICAgcnNzOiB0aGlzLnJzcyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZDogdGhpcy5sYXN0TW9kaWZpZWQuaXNWYWxpZCA/IHRoaXMubGFzdE1vZGlmaWVkIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBQdWJsaWNhdGlvbiB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnUHVibGljYXRpb24nO1xuICAgIH1cbn1cblB1YmxpY2F0aW9uLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAndHMnLFxuICAgICd1cmwnLFxuICAgICdlbmFibGUnLFxuICAgICdzZWN0aW9ucycsXG4gICAgJ2N1cnJlbmNpZXMnLFxuICAgICdleGNoYW5nZXMnLFxuICAgICdpY28nLFxuICAgICdtYXJrZXRzJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnYmlnVGl0bGUnLFxuICAgICd0aXRsZScsXG4gICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAnaW1hZ2UnLFxuICAgICdhdXRob3JzJyxcbiAgICAndGFncycsXG4gICAgJ3JzcycsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JyYW5kaW5nJyxcbiAgICAnbGFzdE1vZGlmaWVkJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vcHVibGljYXRpb24udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3B1YmxpY2F0aW9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9wdWJsaWNhdGlvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBTZWN0aW9uIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdTZWN0aW9uJztcbiAgICB9XG59XG5TZWN0aW9uLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zZWN0aW9uL3NlY3Rpb24udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3NlY3Rpb24nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5leHBvcnQgY2xhc3MgU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgU3RhdHVzIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdTdGF0dXMnO1xuICAgIH1cbn1cblN0YXR1cy5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zdGF0dXMvc3RhdHVzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9zdGF0dXMnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3N0YXR1cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEVudW0gfSBmcm9tICdAY29yZS9lbnVtJztcbmV4cG9ydCBjbGFzcyBSb2xlRW51bSBleHRlbmRzIEVudW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB2YWx1ZSwgaWNvbikge1xuICAgICAgICBzdXBlcihpZCwgdmFsdWUpO1xuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdVc2VyUm9sZSc7XG4gICAgfVxufVxuUm9sZUVudW0uVXNlciA9IG5ldyBSb2xlRW51bSgndXNlcicsICfQn9C+0LvRjNC30L7QstCw0YLQtdC70YwnLCBudWxsKTtcblJvbGVFbnVtLkF1dGhvciA9IG5ldyBSb2xlRW51bSgnYXV0aG9yJywgJ9CQ0LLRgtC+0YAnLCBudWxsKTtcblJvbGVFbnVtLlB1Ymxpc2hlciA9IG5ldyBSb2xlRW51bSgncHVibGlzaGVyJywgJ9Cf0YPQsdC70LjQutCw0YLQvtGAJywgbnVsbCk7XG5Sb2xlRW51bS5DaGllZiA9IG5ldyBSb2xlRW51bSgnY2hpZWYnLCAn0KDQtdC00LDQutGC0L7RgCcsIG51bGwpO1xuUm9sZUVudW0uQWRtaW5pc3RyYXRvciA9IG5ldyBSb2xlRW51bSgnYWRtaW5pc3RyYXRvcicsICfQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCcsIG51bGwpO1xuUm9sZUVudW0uU3UgPSBuZXcgUm9sZUVudW0oJ3N1JywgJ1N1cGVyIHVzZXInLCBudWxsKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL3JvbGUuZW51bS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFJvbGVFbnVtIH0gZnJvbSAnLi9yb2xlLmVudW0nO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmNvbnN0IEVOVU1fUEdfQVJSQVlfUEFUVEVSTiA9IC9eXFx7KFthLXowLTksXSspXFx9JC87XG5leHBvcnQgY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICBpZiAodmFsdWUucm9sZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gRU5VTV9QR19BUlJBWV9QQVRURVJOLmV4ZWModmFsdWUucm9sZXMpO1xuICAgICAgICAgICAgY29uc3Qgcm9sZXMgPSBtYXRjaCAmJiBtYXRjaFsxXS5zcGxpdCgnLCcpIHx8IHZhbHVlLnJvbGVzO1xuICAgICAgICAgICAgdGhpcy5yb2xlcyA9IFJvbGVFbnVtLmdldEFycmF5KHJvbGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnJvbGVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmVtYWlsID0gU3RyaW5nKHZhbHVlLmVtYWlsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucGhvbmUgPSBTdHJpbmcodmFsdWUucGhvbmUgfHwgJycpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9hdXRoID0ge307XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXR1c2VzID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5zdGF0dXNlcyk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuY2FyZCA9IHt9O1xuICAgIH1cbiAgICBjaGVja1JvbGUocm9sZXMpIHtcbiAgICAgICAgZm9yIChsZXQgcm9sZSBvZiByb2xlcylcbiAgICAgICAgICAgIGlmICh0aGlzLnJvbGVzLmluY2x1ZGVzKHJvbGUpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCB2YWxpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgIT09IG51bGxcbiAgICAgICAgICAgICYmIHRoaXMuaWQudmVyc2lvbiAhPT0gbnVsbDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICByb2xlczogdGhpcy5yb2xlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB0aGlzLnN0YXR1c2VzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBjYXJkOiB0aGlzLmNhcmRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgcm9sZXM6IHRoaXMucm9sZXMsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXG4gICAgICAgICAgICBvYXV0aDogdGhpcy5vYXV0aCxcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHRoaXMuc3RhdHVzZXMsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGNhcmQ6IHRoaXMuY2FyZFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBVc2VyIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdVc2VyJztcbiAgICB9XG59XG5Vc2VyLkFub255bW91c0ZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICd0aXRsZScsXG4gICAgJ3VybCcsXG4gICAgJ2ltYWdlJyxcbiAgICAnc3RhdHVzZXMnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblVzZXIuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd0aXRsZScsXG4gICAgJ2VtYWlsJyxcbiAgICAncGhvbmUnLFxuICAgICd1cmwnLFxuICAgICdyb2xlcycsXG4gICAgJ2ltYWdlJyxcbiAgICAnc3RhdHVzZXMnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL3VzZXIudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3JvbGUuZW51bSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3VzZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgY2xhc3MgVmlkZW8ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBTdHJpbmcodmFsdWUuaWQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBWaWRlbyB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVmlkZW8nO1xuICAgIH1cbn1cblZpZGVvLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vdmlkZW8udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3ZpZGVvJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy92aWRlby9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuZXhwb3J0IGNsYXNzIEV2ZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmV4dFVybCA9IFN0cmluZyh2YWx1ZS5leHRVcmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5zdGFydERhdGUpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBTdHJpbmcodmFsdWUuY29udGVudCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmlzVmFsaWQgPyB0aGlzLnN0YXJ0RGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IEV2ZW50IHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdFdmVudCc7XG4gICAgfVxufVxuRXZlbnQuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd1cmwnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXZlbnQvZXZlbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2V2ZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9ldmVudC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYWRzJztcbmV4cG9ydCAqIGZyb20gJy4vY29pbic7XG5leHBvcnQgKiBmcm9tICcuL2N1cnJlbmN5JztcbmV4cG9ydCAqIGZyb20gJy4vZXhjaGFuZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pY28nO1xuZXhwb3J0ICogZnJvbSAnLi9tYXJrZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3JhdGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0dXMnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlkZW8nO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZCwgX3NuYWNrQmFyKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyID0gX3NuYWNrQmFyO1xuICAgICAgICB0aGlzLmlzU2VydmVyID0gaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKTtcbiAgICB9XG4gICAgbWVzc2FnZShtZXNzYWdlLCBkdXJhdGlvbiA9IDIwMDApIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbihtZXNzYWdlLCB1bmRlZmluZWQsIHsgZHVyYXRpb24gfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvbWVzc2FnZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBBdXRoRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGNvbW1vbi9tb2RlbHMnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2UnO1xuY29uc3QgQVVUSF9UT0tFTl9MU19JRCA9ICdhdXRoLXRva2VuJztcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZCwgX2h0dHAsIF9tYXREaWFsb2csIF9tZXNzYWdlLCBfc25hY2tCYXIpIHtcbiAgICAgICAgdGhpcy5faHR0cCA9IF9odHRwO1xuICAgICAgICB0aGlzLl9tYXREaWFsb2cgPSBfbWF0RGlhbG9nO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gX21lc3NhZ2U7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyID0gX3NuYWNrQmFyO1xuICAgICAgICB0aGlzLmlzU2VydmVyID0gaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKTtcbiAgICB9XG4gICAgZ2V0IF9hdXRoVG9rZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VydmVyKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oQVVUSF9UT0tFTl9MU19JRCkgfHwgbnVsbDtcbiAgICB9XG4gICAgc2V0IF9hdXRoVG9rZW4odmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhbHVlID0gdmFsdWUgJiYgdmFsdWUudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShBVVRIX1RPS0VOX0xTX0lELCB2YWx1ZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBVVRIX1RPS0VOX0xTX0lEKTtcbiAgICB9XG4gICAgZ2V0IGF1dGhUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhUb2tlbjtcbiAgICB9XG4gICAgZ2V0IGF1dGhIZWFkZXJzKCkge1xuICAgICAgICBsZXQgYXV0aFRva2VuID0gdGhpcy5fYXV0aFRva2VuO1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiAndG9rZW4gJyArIChhdXRoVG9rZW4gfHwgJ251bGwnKSB9KTtcbiAgICB9XG4gICAgbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChBUElTZXJ2aWNlLmJ1aWxkUGF0aCgnL3VzZXJzL21lJyksIHsgaGVhZGVyczogdGhpcy5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXREaWFsb2cub3BlbihBdXRoRGlhbG9nQ29tcG9uZW50LCB7IGRhdGE6IHRoaXMgfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoYNCe0YjQuNCx0LrQsCAke2Vycm9yLnN0YXR1c306ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJ9Ce0YjQuNCx0LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRjycpO1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobnVsbCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbClcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBuZXcgVXNlcihpdGVtKSk7XG4gICAgfVxuICAgIGxvZ2luKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChBUElTZXJ2aWNlLmJ1aWxkUGF0aCgnL2F1dGgvbG9naW4nKSwgZGF0YSwgeyBoZWFkZXJzOiB0aGlzLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS5vZihudWxsKSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZSgn0J3QtdCy0LXRgNC90L7QtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCDQv9Cw0YDQvtC70YwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hdXRoVG9rZW4gPSBpdGVtLnRva2VuO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuX2h0dHAuZ2V0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKCcvYXV0aC9sb2dvdXQnKSwgeyBoZWFkZXJzOiB0aGlzLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS5vZihudWxsKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hdXRoVG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy91c2VyL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwibGV0IEFQSV9TRVJWRVJfVkFMVUUgPSBcImh0dHBzOi8vYXBpLmJpdGpvdXJuYWwuaW9cIjtcbmV4cG9ydCBjb25zdCBBUElfU0VSVkVSID0gQVBJX1NFUlZFUl9WQUxVRTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvYXBpL2VudmVyb21lbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXInO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlJztcbmltcG9ydCB7IEFQSV9TRVJWRVIgfSBmcm9tICcuL2VudmVyb21lbnRzJztcbmNvbnN0IFBBVEhfUkVHRVhQID0gL15cXC8/KC4qKS87XG5leHBvcnQgY2xhc3MgQVBJU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoX2h0dHAsIF9yb3V0ZXIsIF91c2VyLCBfbWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9odHRwID0gX2h0dHA7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgIHRoaXMuX3VzZXIgPSBfdXNlcjtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IF9tZXNzYWdlO1xuICAgIH1cbiAgICBzdGF0aWMgYnVpbGRQYXRoKHZhbHVlID0gJycpIHtcbiAgICAgICAgbGV0IG1hdGNoID0gUEFUSF9SRUdFWFAuZXhlYyh2YWx1ZS50cmltKCkpO1xuICAgICAgICByZXR1cm4gQVBJX1NFUlZFUiArICcvJyArIChtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJyk7XG4gICAgfVxuICAgIF9oYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgc3dpdGNoIChlcnJvci5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCc0MDM6INCU0L7RgdGC0YPQvyDQt9Cw0L/RgNC10YnQtdC9Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJzQwNDog0K3Qu9C10LzQtdC90YIg0L3QtSDQvdCw0LnQtNC10L0nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKGDQntGI0LjQsdC60LAgJHtlcnJvci5zdGF0dXN9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCfQntGI0LjQsdC60LAg0L/RgNC40LvQvtC20LXQvdC40Y8nKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobnVsbCk7XG4gICAgfVxuICAgIGdldChwYXRoLCBpbnB1dFBhcmFtcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogaW5wdXRQYXJhbXMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChBUElTZXJ2aWNlLmJ1aWxkUGF0aChwYXRoKSwge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5fdXNlci5hdXRoSGVhZGVycyxcbiAgICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuX2hhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG4gICAgcG9zdChwYXRoLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoQVBJU2VydmljZS5idWlsZFBhdGgocGF0aCksIGRhdGEsIHsgaGVhZGVyczogdGhpcy5fdXNlci5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuX2hhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG4gICAgcHV0KHBhdGgsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKHBhdGgpLCBkYXRhLCB7IGhlYWRlcnM6IHRoaXMuX3VzZXIuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLl9oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxuICAgIGRlbGV0ZShwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShBUElTZXJ2aWNlLmJ1aWxkUGF0aChwYXRoKSwgeyBoZWFkZXJzOiB0aGlzLl91c2VyLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL2FwaS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbWVzc2FnZSc7XG5jb25zdCBHT09HTEVfQVBJX0tFWSA9ICdBSXphU3lCMmdZODZob210LXV2cURRclJBMHJ1OGdzTmtQS1JkWmMnO1xuY29uc3QgWU9VVFVCRV9EQVRBX1VSTCA9IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcz9pZD17e0lEU319JmtleT0ke0dPT0dMRV9BUElfS0VZfSZwYXJ0PXNuaXBwZXQsc3RhdGlzdGljcyxjb250ZW50RGV0YWlsc2A7XG5jb25zdCBZT1VUVUJFX1VSTF9SRUdFWFAgPSAvKD86eW91dHViZVxcLmNvbVxcL1xcUyooPzooPzpcXC9lKD86bWJlZCkpP1xcL3x3YXRjaFxcLz9cXD8oPzpcXFMqPyY/dlxcPSkpfHlvdXR1XFwuYmVcXC8pKFthLXpBLVowLTlfLV17NiwxMX0pLztcbmV4cG9ydCBjbGFzcyBZb3VUdWJlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoX2h0dHAsIF9tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IF9tZXNzYWdlO1xuICAgIH1cbiAgICBzdGF0aWMgcGFyc2VWaWRlb0lkKHRleHQpIHtcbiAgICAgICAgdGV4dCA9IHRleHQudHJpbSgpO1xuICAgICAgICBjb25zdCBpZE1hdGNoID0gL15bYS16QS1aMC05Xy1dezYsMTF9JC8uZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKGlkTWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gaWRNYXRjaFswXTtcbiAgICAgICAgY29uc3QgdXJsTWF0Y2ggPSBZT1VUVUJFX1VSTF9SRUdFWFAuZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKHVybE1hdGNoKVxuICAgICAgICAgICAgcmV0dXJuIHVybE1hdGNoWzFdO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgZm9ybWF0RHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLnJlcGxhY2UoL1teMC05XSsvZywgJzonKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyheOit8OiskKS9nLCAnJyk7XG4gICAgfVxuICAgIGdldFZpZGVvRGF0YShpZHMgPSBbXSkge1xuICAgICAgICBpZiAoaWRzLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobmV3IEFycmF5KCkpO1xuICAgICAgICBjb25zdCBxdWVyeSA9IFlPVVRVQkVfREFUQV9VUkwucmVwbGFjZSgvXFx7XFx7XFxzKklEU1xccypcXH1cXH0vLCBpZHMuam9pbignLCcpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHF1ZXJ5KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZShgWW91VHViZTogJHtTdHJpbmcoZXJyb3IpfWApO1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YobnVsbCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbSAmJiBpdGVtLml0ZW1zIHx8IG51bGwpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gQXJyYXkuaXNBcnJheShpdGVtKSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMveW91dHViZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IFZLX0FQSSA9ICdodHRwczovL3ZrLmNvbS9qcy9hcGkvb3BlbmFwaS5qcyc7XG5leHBvcnQgZnVuY3Rpb24gVktJbml0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdpbmRvdy52a0FzeW5jSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IFZLID0gd2luZG93LlZLO1xuICAgICAgICAgICAgaWYgKFZLKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoVkspO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1ZLIEluaXRpYWxpc2F0aW9uIGVycm9yJykpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LmlkID0gJ3Zrb250YWt0ZS1qc3Nkayc7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBWS19BUEk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvc29jaWFsL3ZrLWluaXQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBUV19BUEkgPSAnaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBUd2l0dGVySW5pdCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3aW5kb3cudHd0dHIgPSB7XG4gICAgICAgICAgICBfZTogW2Z1bmN0aW9uIChUVykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVFcpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFRXKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVFcgSW5pdGlhbGlzYXRpb24gZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIHNjcmlwdC5pZCA9ICd0d2l0dGVyLWpzc2RrJztcbiAgICAgICAgc2NyaXB0LnNyYyA9IFRXX0FQSTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvdHdpdHRlci1pbml0LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgR09PR0xFX0FQSSA9ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbGF0Zm9ybS5qcyc7XG5leHBvcnQgZnVuY3Rpb24gR29vZ2xlSW5pdCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3aW5kb3cub25Hb29nbGVMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZ2FwaSA9IHdpbmRvdy5nYXBpO1xuICAgICAgICAgICAgaWYgKGdhcGkpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShnYXBpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdHb29nbGUgQVBJIEluaXRpYWxpc2F0aW9uIGVycm9yJykpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LmlkID0gJ2dvb2dsZS1qc3Nkayc7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBHT09HTEVfQVBJICsgJz9vbmxvYWQ9b25Hb29nbGVMb2FkJztcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvZ29vZ2xlLWluaXQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBGQl9BUEkgPSAnaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9ydV9SVS9zZGsuanMjeGZibWw9MSZ2ZXJzaW9uPXYyLjExJmFwcElkPTEzOTQyNzY1MzMwNDYyMSc7XG5leHBvcnQgZnVuY3Rpb24gRkJJbml0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdpbmRvdy5mYkFzeW5jSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IEZCID0gd2luZG93LkZCO1xuICAgICAgICAgICAgaWYgKEZCKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoRkIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ZCIEluaXRpYWxpc2F0aW9uIGVycm9yJykpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LmlkID0gJ2ZhY2Vib29rLWpzc2RrJztcbiAgICAgICAgc2NyaXB0LnNyYyA9IEZCX0FQSTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvZmItaW5pdC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBjb25zdCBWS19TT0NJQUxfSUQgPSAnMTQ5MDExMjA2JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvc29jaWFsL2VudmVyb21lbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVktJbml0IH0gZnJvbSAnLi92ay1pbml0JztcbmltcG9ydCB7IFR3aXR0ZXJJbml0IH0gZnJvbSAnLi90d2l0dGVyLWluaXQnO1xuaW1wb3J0IHsgR29vZ2xlSW5pdCB9IGZyb20gJy4vZ29vZ2xlLWluaXQnO1xuaW1wb3J0IHsgRkJJbml0IH0gZnJvbSAnLi9mYi1pbml0JztcbmltcG9ydCB7IFZLX1NPQ0lBTF9JRCB9IGZyb20gJy4vZW52ZXJvbWVudHMnO1xuZXhwb3J0IGNsYXNzIFNvY2lhbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQpIHtcbiAgICAgICAgdGhpcy5fdmsgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3R3aXR0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2dvb2dsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZmIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNTZXJ2ZXIgPSBpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX3ZrID0gVktJbml0KCk7XG4gICAgICAgIHRoaXMuX3R3aXR0ZXIgPSBUd2l0dGVySW5pdCgpO1xuICAgICAgICB0aGlzLl9nb29nbGUgPSBHb29nbGVJbml0KCk7XG4gICAgICAgIHRoaXMuX2ZiID0gRkJJbml0KCk7XG4gICAgfVxuICAgIHZrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmsgfHwgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHR3aXR0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90d2l0dGVyIHx8IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgICBnb29nbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nb29nbGUgfHwgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGZiKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmIgfHwgUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxufVxuU29jaWFsU2VydmljZS5WS19TT0NJQUxfSUQgPSBWS19TT0NJQUxfSUQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3NvY2lhbC9zb2NpYWwuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vc29jaWFsLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zb2NpYWwvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuZXhwb3J0IGNsYXNzIFRpbWVzdGFtcFBpcGUge1xuICAgIHRyYW5zZm9ybShpbnB1dCwgdHlwZSA9ICdJU08nKSB7XG4gICAgICAgIGNvbnN0IHRzID0gbmV3IFRpbWVzdGFtcChpbnB1dCk7XG4gICAgICAgIGlmICh0cy5pc0ludmFsaWQpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnSVNPJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHMudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgJ0hSJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHMudG9IUlN0cmluZygpO1xuICAgICAgICAgICAgY2FzZSAnVVJMJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHMudG9VUkxTdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BpcGVzL3RpbWVzdGFtcC90aW1lc3RhbXAudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3RpbWVzdGFtcCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BpcGVzL3RpbWVzdGFtcC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImxldCBSQVdfU0VSVkVSX1ZBTFVFID0gXCJodHRwczovL3Jhdy5iaXRqb3VybmFsLmlvXCI7XG5sZXQgUE9SVEFMX1NFUlZFUl9WQUxVRSA9IFwiaHR0cHM6Ly9iaXRqb3VybmFsLmlvXCI7XG5leHBvcnQgY29uc3QgUkFXX1NFUlZFUiA9IFJBV19TRVJWRVJfVkFMVUU7XG5leHBvcnQgY29uc3QgUE9SVEFMX1NFUlZFUiA9IFBPUlRBTF9TRVJWRVJfVkFMVUU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BpcGVzL2ltYWdlL2VudmVyb21lbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkFXX1NFUlZFUiwgUE9SVEFMX1NFUlZFUiB9IGZyb20gJy4vZW52ZXJvbWVudHMnO1xuY29uc3QgUEFUSF9SRUdFWFAgPSAvXlxcLz8oLiopLztcbmNvbnN0IEVNUFRZX1BORyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JztcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUge1xuICAgIHN0YXRpYyBvZ1VSTChpbnB1dCkge1xuICAgICAgICBpZiAoIWlucHV0KVxuICAgICAgICAgICAgcmV0dXJuIFBPUlRBTF9TRVJWRVIgKyAnL29nLnBuZyc7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gUEFUSF9SRUdFWFAuZXhlYyhTdHJpbmcoaW5wdXQpLnRyaW0oKSk7XG4gICAgICAgIGlmICghbWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gUE9SVEFMX1NFUlZFUiArICcvb2cucG5nJztcbiAgICAgICAgcmV0dXJuIFJBV19TRVJWRVIgKyAnLycgKyAobWF0Y2ggJiYgbWF0Y2hbMV0pO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0oaW5wdXQpIHtcbiAgICAgICAgaWYgKCFpbnB1dClcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9QTkc7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gUEFUSF9SRUdFWFAuZXhlYyhTdHJpbmcoaW5wdXQpLnRyaW0oKSk7XG4gICAgICAgIGlmICghbWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfUE5HO1xuICAgICAgICByZXR1cm4gUkFXX1NFUlZFUiArICcvJyArIChtYXRjaCAmJiBtYXRjaFsxXSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZS5waXBlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGlwZXMvaW1hZ2UvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgT3JkZXJQaXBlIHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQsIGtleSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuc29ydCgoYSwgYikgPT4gYVtrZXldID4gYltrZXldID8gMSA6IC0xKTtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGlwZXMvb3JkZXIvb3JkZXIudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL29yZGVyJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGlwZXMvb3JkZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSB7XG4gICAgdHJhbnNmb3JtKGlucHV0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSlcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1ba2V5XSA9PT0gdmFsdWUpO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9maWx0ZXIvZmlsdGVyLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9maWx0ZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9maWx0ZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3RpbWVzdGFtcCc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vb3JkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE1ldGEsIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5jb25zdCBERUZBVUxUX1RJVExFID0gJ0JpdEpvdXJuYWwg4oCUINC40LfQtNCw0L3QuNC1INC/0YDQviDQsdC40YLQutC+0LjQvSwg0LrRgNC40L/RgtC+0LLQsNC70Y7RgtGLLCBJQ08sINC80LDQudC90LjQvdCzINC4INCx0LvQvtC60YfQtdC50L0nO1xuY29uc3QgREVGQVVMVF9ERVNDUklQVElPTiA9ICfQndCwINGB0LDQudGC0LUgQml0Sm91cm5hbCDQstGLINC90LDQudC00LXRgtC1INC+0L/QtdGA0LDRgtC40LLQvdGL0LUg0L3QvtCy0L7RgdGC0Lgg0LjQtyDQvNC40YDQsCDQutGA0LjQv9GC0L7QuNC90LTRg9GB0YLRgNC40Lgg4oCUINCy0YHQtSDQviDRgdCw0LzRi9GFINCz0YDQsNC90LTQuNC+0LfQvdGL0YUgSUNPINCyINC40YHRgtC+0YDQuNC4LCDQvtCz0YDQvtC80L3Ri9C1INC80LDQudC90LjQvdCzLdGE0LXRgNC80Ysg0L/RgNC+INC70LXRgtGP0YnQuNC5INC90LAg0LvRg9C90YMg0LHQuNGC0LrQvtC40L0g0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtSc7XG5jb25zdCBERUZBVUxUX0tFWVdPUkRTID0gJ9Cx0LjRgtC60L7QuNC9LCBiaXRqb3VybmFsLCDQutGA0LjQv9GC0L7QstCw0LvRjtGC0YssIGljbywg0LzQsNC50L3QuNC90LMsINCx0LvQvtC60YfQtdC50L0nO1xuaW1wb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMnO1xuZXhwb3J0IGNsYXNzIE1ldGFTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihfbWV0YSwgX3RpdGxlKSB7XG4gICAgICAgIHRoaXMuX21ldGEgPSBfbWV0YTtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBfdGl0bGU7XG4gICAgfVxuICAgIHNldE1ldGFUYWdzKHsgdGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJywga2V5d29yZHMgPSAnJywgb2dUaXRsZSA9ICcnLCBvZ0Rlc2NyaXB0aW9uID0gJycsIG9nSW1hZ2UgPSAwLCB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fdGl0bGUuc2V0VGl0bGUodGl0bGUpO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IG5hbWU6ICd0aXRsZScsIGNvbnRlbnQ6IHRpdGxlIHx8IERFRkFVTFRfVElUTEUgfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogZGVzY3JpcHRpb24gfHwgREVGQVVMVF9ERVNDUklQVElPTiB9KTtcbiAgICAgICAgdGhpcy5fbWV0YS5hZGRUYWcoeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiBrZXl3b3JkcyB8fCBERUZBVUxUX0tFWVdPUkRTIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6ICd3ZWJzaXRlJyB9KTtcbiAgICAgICAgdGhpcy5fbWV0YS5hZGRUYWcoeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogb2dUaXRsZSB8fCB0aXRsZSB8fCBERUZBVUxUX1RJVExFIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBvZ0Rlc2NyaXB0aW9uIHx8IGRlc2NyaXB0aW9uIHx8IERFRkFVTFRfREVTQ1JJUFRJT04gfSk7XG4gICAgICAgIHRoaXMuX21ldGEuYWRkVGFnKHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IEltYWdlUGlwZS5vZ1VSTChvZ0ltYWdlKSB9KTtcbiAgICAgICAgdGhpcy5fbWV0YS5hZGRUYWcoeyBuYW1lOiAndHdpdHRlcjpjYXJkJywgY29udGVudDogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IG5hbWU6ICd0d2l0dGVyOnNpdGUnLCBjb250ZW50OiAnQGJpdGpvdXJuYWxfaW8nIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IG5hbWU6ICd0d2l0dGVyOmNyZWF0b3InLCBjb250ZW50OiAnQGJpdGpvdXJuYWxfaW8nIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IG5hbWU6ICd0d2l0dGVyOnRpdGxlJywgY29udGVudDogb2dUaXRsZSB8fCB0aXRsZSB8fCBERUZBVUxUX1RJVExFIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IG5hbWU6ICd0d2l0dGVyOmRlc2NyaXB0aW9uJywgY29udGVudDogb2dEZXNjcmlwdGlvbiB8fCBkZXNjcmlwdGlvbiB8fCBERUZBVUxUX0RFU0NSSVBUSU9OIH0pO1xuICAgICAgICB0aGlzLl9tZXRhLmFkZFRhZyh7IG5hbWU6ICd0d2l0dGVyOmltYWdlJywgY29udGVudDogSW1hZ2VQaXBlLm9nVVJMKG9nSW1hZ2UpIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvbWV0YS9tZXRhLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL21ldGEuc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL21ldGEvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL3lvdXR1YmUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL3NvY2lhbCc7XG5leHBvcnQgKiBmcm9tICcuL21ldGEnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBJU2VydmljZSwgTWV0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5jb25zdCBBUElfUFVCTElDQVRJT05TID0gJ3B1YmxpY2F0aW9ucyc7XG5leHBvcnQgY2xhc3MgQXJ0aWNsZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX2FwaSwgX21ldGEpIHtcbiAgICAgICAgdGhpcy5fYXBpID0gX2FwaTtcbiAgICAgICAgdGhpcy5fbWV0YSA9IF9tZXRhO1xuICAgIH1cbiAgICBzZXRNZXRhVGFncyhpdGVtKSB7XG4gICAgICAgIHRoaXMuX21ldGEuc2V0TWV0YVRhZ3Moe1xuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nVGl0bGU6IGl0ZW0ub2dUaXRsZSxcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IGl0ZW0ub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nSW1hZ2U6IGl0ZW0ub2dJbWFnZSB8fCB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5fYXBpXG4gICAgICAgICAgICAuZ2V0KGAvJHtBUElfUFVCTElDQVRJT05TfS8ke3RoaXMudmFsdWUuZGF0ZX0vJHt0aGlzLnZhbHVlLnVybH1gKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWV0YVRhZ3MoaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYXJ0aWNsZS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmV4cG9ydCBjbGFzcyBBdXRoRGlhbG9nQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dSZWYsIGZiLCB1c2VyKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmID0gZGlhbG9nUmVmO1xuICAgICAgICB0aGlzLmZiID0gZmI7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoRm9ybS52YWxpZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy51c2VyLmxvZ2luKHRoaXMuYXV0aEZvcm0udmFsdWUpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoRm9ybS5wYXRjaFZhbHVlKHsgcGFzc3dvcmQ6ICcnIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2F1dGgtZGlhbG9nLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2N1cnJlbmNpZXMtcmliYm9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjbGFzcyBGb2xsb3dDb21wb25lbnQge1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9mb2xsb3cuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9mb2xsb3cvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb2NpYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3NvY2lhbFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc29jaWFsU2VydmljZSA9IF9zb2NpYWxTZXJ2aWNlO1xuICAgIH1cbiAgICBhZGRWS1dpZGdldCgpIHtcbiAgICAgICAgdGhpcy5fc29jaWFsU2VydmljZS52aygpLnRoZW4oVksgPT4ge1xuICAgICAgICAgICAgaWYgKCFWSylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBWSy5XaWRnZXRzLkdyb3VwKCd2a19ncm91cF92aWRnZXQnLCB7XG4gICAgICAgICAgICAgICAgbW9kZTogMSxcbiAgICAgICAgICAgICAgICBub19jb3ZlcjogMSxcbiAgICAgICAgICAgICAgICBjb2xvcjI6ICcyNDI5MmUnLFxuICAgICAgICAgICAgfSwgU29jaWFsU2VydmljZS5WS19TT0NJQUxfSUQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkVHdpdHRlcldpZGdldCgpIHtcbiAgICAgICAgdGhpcy5fc29jaWFsU2VydmljZS50d2l0dGVyKCkudGhlbih0dyA9PiB7IH0pO1xuICAgIH1cbiAgICBhZGRZb3VUdWJlV2lkZ2V0KCkge1xuICAgICAgICB0aGlzLl9zb2NpYWxTZXJ2aWNlLmdvb2dsZSgpLnRoZW4oZ2EgPT4geyB9KTtcbiAgICB9XG4gICAgYWRkRkJXaWRnZXQoKSB7XG4gICAgICAgIHRoaXMuX3NvY2lhbFNlcnZpY2UuZmIoKS50aGVuKGZiID0+IHsgfSk7XG4gICAgfVxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5hZGRWS1dpZGdldCgpO1xuICAgICAgICB0aGlzLmFkZFR3aXR0ZXJXaWRnZXQoKTtcbiAgICAgICAgdGhpcy5hZGRZb3VUdWJlV2lkZ2V0KCk7XG4gICAgICAgIHRoaXMuYWRkRkJXaWRnZXQoKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2Zvb3Rlci5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICAgICAgdGhpcy5uYXZCYXJWaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIExheW91dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgTm9Db250ZW50Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9uby1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFBhZ2UxMDFDb21wb25lbnQge1xuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLTEwMS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQVBJU2VydmljZSwgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5jb25zdCBBUElfUFVCTElDQVRJT05TID0gJ3B1YmxpY2F0aW9ucyc7XG5leHBvcnQgY2xhc3MgUGFnZUFydGljbGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZSwgX2FwaSkge1xuICAgICAgICB0aGlzLl9yb3V0ZSA9IF9yb3V0ZTtcbiAgICAgICAgdGhpcy5fYXBpID0gX2FwaTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX3JvdXRlXG4gICAgICAgICAgICAucGFyYW1zXG4gICAgICAgICAgICAubWFwKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gU3RyaW5nKHBhcmFtc1snZGF0ZSddKS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBTdHJpbmcocGFyYW1zWyd1cmwnXSkudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIHsgdXJsLCBkYXRlIH07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnB1YmxpY2F0aW9ucyA9IHRoaXMuX2FwaVxuICAgICAgICAgICAgLmdldChgLyR7QVBJX1BVQkxJQ0FUSU9OU30/bGltaXQ9MTJgKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLWFydGljbGUuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlRXZlbnRzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UtZXZlbnRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VJQ09Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUlDT0l0ZW1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1pY28uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZS1pY28taXRlbS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQVBJU2VydmljZSwgTWV0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5jb25zdCBBUElfUFVCTElDQVRJT05TID0gJ3B1YmxpY2F0aW9ucyc7XG5leHBvcnQgY2xhc3MgUGFnZU1haW5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZSwgX2FwaSwgX21ldGEpIHtcbiAgICAgICAgdGhpcy5fcm91dGUgPSBfcm91dGU7XG4gICAgICAgIHRoaXMuX2FwaSA9IF9hcGk7XG4gICAgICAgIHRoaXMuX21ldGEgPSBfbWV0YTtcbiAgICB9XG4gICAgc2V0TWV0YVRhZ3MoKSB7IH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wdWJsaWNhdGlvbnNfd2VpZ2h0XzAgPSB0aGlzLl9hcGlcbiAgICAgICAgICAgIC5nZXQoYC8ke0FQSV9QVUJMSUNBVElPTlN9P3dlaWdodD0wJmxpbWl0PTMwYCk7XG4gICAgICAgIHRoaXMucHVibGljYXRpb25zX3dlaWdodF8xMiA9IHRoaXMuX2FwaVxuICAgICAgICAgICAgLmdldChgLyR7QVBJX1BVQkxJQ0FUSU9OU30/d2VpZ2h0PTEsMiZsaW1pdD0zMGApO1xuICAgICAgICB0aGlzLl9tZXRhLnNldE1ldGFUYWdzKCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1tYWluLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlTWFya2V0c0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UtbWFya2V0cy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjbGFzcyBQYWdlU2VjdGlvbkNvbXBvbmVudCB7XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1zZWN0aW9uLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vMTAxJztcbmV4cG9ydCAqIGZyb20gJy4vYXJ0aWNsZSc7XG5leHBvcnQgKiBmcm9tICcuL2N1cnJlbmNpZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9leGNoYW5nZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pY28nO1xuZXhwb3J0ICogZnJvbSAnLi9tYWluJztcbmV4cG9ydCAqIGZyb20gJy4vbWFya2V0cyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3Rpb24nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjbGFzcyBQdWJDYXJkQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wdWItY2FyZC9wdWItY2FyZC5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3B1Yi1jYXJkLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcHViLWNhcmQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFB1YkxpbmVDb21wb25lbnQge1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3B1Yi1saW5lL3B1Yi1saW5lLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcHViLWxpbmUuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wdWItbGluZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VBbGwnO1xuaW1wb3J0IHsgQVBJU2VydmljZSwgWW91VHViZVNlcnZpY2UsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuY29uc3QgQVBJX0JBU0UgPSAndmlkZW8nO1xuZXhwb3J0IGNsYXNzIFZpZGVvUmliYm9uQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyLCBfYXBpU2VydmljZSwgX3lvdVR1YmVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UgPSBfYXBpU2VydmljZTtcbiAgICAgICAgdGhpcy5feW91VHViZVNlcnZpY2UgPSBfeW91VHViZVNlcnZpY2U7XG4gICAgfVxuICAgIGNyZWF0ZVZpZGVvUmliYm9uSXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PScgKyBpdGVtLmlkLFxuICAgICAgICAgICAgdGh1bWI6IGl0ZW0uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsLFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoaXRlbS5zbmlwcGV0LnB1Ymxpc2hlZEF0KSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnNuaXBwZXQudGl0bGUsXG4gICAgICAgICAgICBkdXJhdGlvbjogWW91VHViZVNlcnZpY2UuZm9ybWF0RHVyYXRpb24oaXRlbS5jb250ZW50RGV0YWlscy5kdXJhdGlvbiksXG4gICAgICAgICAgICB2aWV3OiBwYXJzZUludChpdGVtLnN0YXRpc3RpY3Mudmlld0NvdW50KSB8fCAwLFxuICAgICAgICAgICAgbGlrZTogcGFyc2VJbnQoaXRlbS5zdGF0aXN0aWNzLmxpa2VDb3VudCkgfHwgMCxcbiAgICAgICAgICAgIGRpc2xpa2U6IHBhcnNlSW50KGl0ZW0uc3RhdGlzdGljcy5kaXNsaWtlQ291bnQpIHx8IDAsXG4gICAgICAgICAgICBjb21tZW50OiBwYXJzZUludChpdGVtLnN0YXRpc3RpY3MuY29tbWVudENvdW50KSB8fCAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuX2FwaVNlcnZpY2VcbiAgICAgICAgICAgIC5nZXQoYC8ke0FQSV9CQVNFfWApXG4gICAgICAgICAgICAubWFwKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uZW5hYmxlKSlcbiAgICAgICAgICAgIC5tYXAoaXRlbXMgPT4gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5pZCkpXG4gICAgICAgICAgICAubWFwKGl0ZW1zID0+IHRoaXMuX3lvdVR1YmVTZXJ2aWNlLmdldFZpZGVvRGF0YShpdGVtcykpXG4gICAgICAgICAgICAubWVyZ2VBbGwoKVxuICAgICAgICAgICAgLm1hcChpdGVtcyA9PiBpdGVtcy5tYXAoaXRlbSA9PiB0aGlzLmNyZWF0ZVZpZGVvUmliYm9uSXRlbShpdGVtKSkpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdmlkZW8tcmliYm9uLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9hcnRpY2xlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aCc7XG5leHBvcnQgKiBmcm9tICcuL2N1cnJlbmNpZXMtcmliYm9uJztcbmV4cG9ydCAqIGZyb20gJy4vZm9sbG93JztcbmV4cG9ydCAqIGZyb20gJy4vZm9vdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0JztcbmV4cG9ydCAqIGZyb20gJy4vbm8tY29udGVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vcHViLWNhcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWItbGluZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvLXJpYmJvbic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBBcnRpY2xlQ29tcG9uZW50LCBBdXRoRGlhbG9nQ29tcG9uZW50LCBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIE5vQ29udGVudENvbXBvbmVudCwgUGFnZTEwMUNvbXBvbmVudCwgUGFnZUFydGljbGVDb21wb25lbnQsIFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50LCBQYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQsIFBhZ2VFdmVudHNDb21wb25lbnQsIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50LCBQYWdlRXhjaGFuZ2VzQ29tcG9uZW50LCBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCwgUGFnZUlDT0NvbXBvbmVudCwgUGFnZUlDT0l0ZW1Db21wb25lbnQsIFBhZ2VNYWluQ29tcG9uZW50LCBQYWdlTWFya2V0c0NvbXBvbmVudCwgUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50LCBQYWdlU2VjdGlvbkNvbXBvbmVudCwgUHViQ2FyZENvbXBvbmVudCwgRm9sbG93Q29tcG9uZW50LCBWaWRlb1JpYmJvbkNvbXBvbmVudCwgUHViTGluZUNvbXBvbmVudCwgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IENPTVBPTkVOVFMgPSBbXG4gICAgQXJ0aWNsZUNvbXBvbmVudCxcbiAgICBBdXRoRGlhbG9nQ29tcG9uZW50LFxuICAgIEN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgTm9Db250ZW50Q29tcG9uZW50LFxuICAgIFBhZ2UxMDFDb21wb25lbnQsXG4gICAgUGFnZUFydGljbGVDb21wb25lbnQsXG4gICAgUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsXG4gICAgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VFdmVudHNDb21wb25lbnQsXG4gICAgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsXG4gICAgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCxcbiAgICBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCxcbiAgICBQYWdlSUNPQ29tcG9uZW50LFxuICAgIFBhZ2VJQ09JdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VNYWluQ29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZXRzQ29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCxcbiAgICBQYWdlU2VjdGlvbkNvbXBvbmVudCxcbiAgICBQdWJDYXJkQ29tcG9uZW50LFxuICAgIEZvbGxvd0NvbXBvbmVudCxcbiAgICBWaWRlb1JpYmJvbkNvbXBvbmVudCxcbiAgICBQdWJMaW5lQ29tcG9uZW50LFxuXTtcbmV4cG9ydCBjb25zdCBFTlRSWV9DT01QT05FTlRTID0gW1xuICAgIEF1dGhEaWFsb2dDb21wb25lbnQsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAuY29tcG9uZW50cy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgfSBmcm9tICcuL2FwcC5jb21wb25lbnRzJztcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAubW9kdWxlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5iai1wYWdlLW1haW5fX3dyYXBwZXJ7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTttYXJnaW46MCBhdXRvO3BhZGRpbmc6dmFyKC0taW5kZW50LWRvdWJsZSkgMH1AbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7LmJqLXBhZ2UtbWFpbl9fd3JhcHBlcntwYWRkaW5nOnZhcigtLWluZGVudC1kb3VibGUpIHZhcigtLWluZGVudC1iYXNlKX19LmJqLXBhZ2UtbWFpbl9fcm93e3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOnN0cmV0Y2h9LmJqLXBhZ2UtbWFpbl9fY29se2ZsZXg6MSAxIGF1dG99LmJqLXBhZ2UtbWFpbl9fYXNpZGV7d2lkdGg6dmFyKC0tYXNpZGUtd2lkdGgpO2ZsZXg6MCAwIHZhcigtLWFzaWRlLXdpZHRoKTttYXJnaW4tbGVmdDp2YXIoLS1pbmRlbnQtZG91YmxlKTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6bm9uZX1AbWVkaWEgKG1pbi13aWR0aDo3MDBweCl7LmJqLXBhZ2UtbWFpbl9fYXNpZGV7ZGlzcGxheTpmbGV4fX0uYmotcGFnZS1tYWluX19jYXJke21hcmdpbi10b3A6dmFyKC0taW5kZW50LWRvdWJsZSl9LmJqLXBhZ2UtbWFpbl9fY2FyZDpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjB9QHN1cHBvcnRzIChkaXNwbGF5OmdyaWQpe0BtZWRpYSAobWluLXdpZHRoOjEwMDBweCl7LmJqLXBhZ2UtbWFpbl9fY2FyZHttYXJnaW4tdG9wOjB9LmJqLXBhZ2UtbWFpbl9fY2FyZC0td2lkZXtncmlkLWNvbHVtbi1lbmQ6c3BhbiAyfS5iai1wYWdlLW1haW5fX2NvbC0tZ3JpZHtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7Z3JpZC1jb2x1bW4tZ2FwOnZhcigtLWluZGVudC1kb3VibGUpO2dyaWQtcm93LWdhcDp2YXIoLS1pbmRlbnQtZG91YmxlKTtncmlkLWF1dG8tZmxvdzpkZW5zZX19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuYmotcGFnZS1tYWluX19jb2wtLWdyaWR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyfX19XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIuYmotcHViLWNhcmR7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O21heC13aWR0aDoxMDAlO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOm5vbmU7Y29sb3I6dmFyKC0tY29sb3ItbWFpbil9LmJqLXB1Yi1jYXJkX19maWd1cmV7ZmxleDowIDAgMTAwJTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6Y2FsYygxMDB2dy8xLjUpO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOiNmNmY2ZjY7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1AbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7LmJqLXB1Yi1jYXJkX19maWd1cmV7bWluLWhlaWdodDoyNTBweH19LmJqLXB1Yi1jYXJkX19waWN0dXJle3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiNmOWY5Zjl9LmJqLXB1Yi1jYXJkX19waWN0dXJlLC5iai1wdWItY2FyZF9fcGljdHVyZSBpbWcsLmJqLXB1Yi1jYXJkX19yb3d7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJX0uYmotcHViLWNhcmRfX3BpY3R1cmUgaW1ne21pbi13aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTAwJTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtvYmplY3QtZml0OmNvdmVyO3Bvc2l0aW9uOmFic29sdXRlfS5iai1wdWItY2FyZF9fcm93e3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6dmFyKC0taW5kZW50LWJhc2UpIDB9LmJqLXB1Yi1jYXJkX19yb3ctLWRhcmt7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHRyYW5zcGFyZW50IDAlLHJnYmEoMCwwLDAsLjEpIDEwJSxyZ2JhKDAsMCwwLC43KSAxMDAlKTtwYWRkaW5nLXRvcDp2YXIoLS1pbmRlbnQtZG91YmxlKX0uYmotcHViLWNhcmRfX2gye21hcmdpbjowIDAgLS4xZW07Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MS41cmVtO2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDoxLjM1O2NvbG9yOiNmZmY7dGV4dC1zaGFkb3c6MCAwIDEzcHggcmdiYSgwLDAsMCwuNyl9LmJqLXB1Yi1jYXJkX19kYXRldGltZSwuYmotcHViLWNhcmRfX2gxLC5iai1wdWItY2FyZF9faDJ7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowIHZhcigtLWluZGVudC1iYXNlKX0uYmotcHViLWNhcmRfX2gxe2ZsZXg6MCAwIDEwMCU7d2lkdGg6MTAwJTttYXJnaW46MDtmb250LWZhbWlseTppbmhlcml0O2xpbmUtaGVpZ2h0OjEuMzU7bWFyZ2luLXRvcDp2YXIoLS1pbmRlbnQtaGFsZik7Zm9udC1zaXplOjEuMjVyZW19LmJqLXB1Yi1jYXJkX19kYXRldGltZXttYXJnaW4tdG9wOnZhcigtLWluZGVudC1iYXNlKTtjb2xvcjojNzM3ODdlO2ZvbnQtc2l6ZTouODVyZW19XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3B1Yl9jYXJkLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9waXBlc19pbWFnZV9pbWFnZS5waXBlLF8uLl9waXBlc190aW1lc3RhbXBfdGltZXN0YW1wLF9hbmd1bGFyX2NvbW1vbixfcHViX2NhcmQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3B1Yl9jYXJkLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9waXBlc19pbWFnZV9pbWFnZS5waXBlLF8uLl9waXBlc190aW1lc3RhbXBfdGltZXN0YW1wLF9hbmd1bGFyX2NvbW1vbixfcHViX2NhcmQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3B1Yi1jYXJkLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi4vLi4vcGlwZXMvdGltZXN0YW1wL3RpbWVzdGFtcFwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4vcHViLWNhcmQuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX1B1YkNhcmRDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1B1YkNhcmRDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUHViQ2FyZENvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1B1YkNhcmRDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QdWJDYXJkQ29tcG9uZW50IH07XG5mdW5jdGlvbiBWaWV3X1B1YkNhcmRDb21wb25lbnRfMShfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDIsIFwiZmlnY2FwdGlvblwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZF9fcm93IGJqLXB1Yi1jYXJkX19yb3ctLWRhcmtcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDEsIFwiaDJcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWNhcmRfX2gyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgyLCBudWxsLCBbXCJcIiwgXCJcIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBfY28udmFsdWUuYmlnVGl0bGU7IF9jayhfdiwgMiwgMCwgY3VyclZhbF8wKTsgfSk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1B1YkNhcmRDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW2kxLsm1cGlkKDAsIGkyLkltYWdlUGlwZSwgW10pLCBpMS7JtXBpZCgwLCBpMy5UaW1lc3RhbXBQaXBlLCBbXSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDYsIFwiZmlndXJlXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkX19maWd1cmVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDIsIFwicGljdHVyZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZF9fcGljdHVyZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJpbWdcIiwgW10sIFtbOCwgXCJzcmNcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDUsIDEpLCAoX2woKSgpLCBpMS7JtWVsZCg2LCAwLCBudWxsLCBudWxsLCAwLCBcImZpZ2NhcHRpb25cIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWNhcmRfX3Jvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIG51bGwsIDEsIG51bGwsIFZpZXdfUHViQ2FyZENvbXBvbmVudF8xKSksIGkxLsm1ZGlkKDgsIDE2Mzg0LCBudWxsLCAwLCBpNC5OZ0lmLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWZdLCB7IG5nSWY6IFswLCBcIm5nSWZcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDksIDAsIG51bGwsIG51bGwsIDMsIFwidGltZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZF9fZGF0ZXRpbWVcIl1dLCBbWzEsIFwiZGF0ZXRpbWVcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDEwLCAxKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTEsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCBpMS7JtXBwZCgxMiwgMiksIChfbCgpKCksIGkxLsm1ZWxkKDEzLCAwLCBudWxsLCBudWxsLCAxLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkX19oMVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoMTQsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMSA9ICEhX2NvLnZhbHVlLmJpZ1RpdGxlOyBfY2soX3YsIDgsIDAsIGN1cnJWYWxfMSk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBpMS7JtXVudihfdiwgNCwgMCwgX2NrKF92LCA1LCAwLCBpMS7JtW5vdihfdiwgMCksIF9jby52YWx1ZS5pbWFnZSkpOyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzIgPSBpMS7JtXVudihfdiwgOSwgMCwgX2NrKF92LCAxMCwgMCwgaTEuybVub3YoX3YsIDEpLCBfY28udmFsdWUudHMpKTsgX2NrKF92LCA5LCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gaTEuybV1bnYoX3YsIDExLCAwLCBfY2soX3YsIDEyLCAwLCBpMS7JtW5vdihfdiwgMSksIF9jby52YWx1ZS50cywgXCJIUlwiKSk7IF9jayhfdiwgMTEsIDAsIGN1cnJWYWxfMyk7IHZhciBjdXJyVmFsXzQgPSBfY28udmFsdWUudGl0bGU7IF9jayhfdiwgMTQsIDAsIGN1cnJWYWxfNCk7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QdWJDYXJkQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1jYXJkXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QdWJDYXJkQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUHViQ2FyZENvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTUuUHViQ2FyZENvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBQdWJDYXJkQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcIi5iai1wdWItY2FyZFwiLCBpNS5QdWJDYXJkQ29tcG9uZW50LCBWaWV3X1B1YkNhcmRDb21wb25lbnRfSG9zdF8wLCB7IHZhbHVlOiBcInZhbHVlXCIgfSwge30sIFtdKTtcbmV4cG9ydCB7IFB1YkNhcmRDb21wb25lbnROZ0ZhY3RvcnkgYXMgUHViQ2FyZENvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLmJqLXB1Yi1saW5le2Rpc3BsYXk6ZmxleDttYXJnaW4tdG9wOnZhcigtLWluZGVudC1iYXNlKTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTpub25lO2NvbG9yOnZhcigtLWNvbG9yLW1haW4pfS5iai1wdWItbGluZV9fcGljdHVyZXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjYwcHg7bWluLXdpZHRoOjYwcHg7bWF4LXdpZHRoOjYwcHg7aGVpZ2h0OjYwcHg7bWluLWhlaWdodDo2MHB4O21heC1oZWlnaHQ6NjBweDtmbGV4OjAgMCA2MHB4O2JvcmRlci1yYWRpdXM6NTAlO292ZXJmbG93OmhpZGRlbjttYXJnaW4tcmlnaHQ6dmFyKC0taW5kZW50LWJhc2UpO2JhY2tncm91bmQ6I2Y5ZjlmOX0uYmotcHViLWxpbmVfX3BpY3R1cmUgaW1ne2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOmFic29sdXRlO21pbi13aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO29iamVjdC1maXQ6Y292ZXJ9LmJqLXB1Yi1saW5lX19kYXRhe2ZsZXg6MSAxIGF1dG99LmJqLXB1Yi1saW5lX19kYXRldGltZSwuYmotcHViLWxpbmVfX2gxe2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH0uYmotcHViLWxpbmVfX2RhdGV0aW1le2NvbG9yOiNhYWE7Zm9udC1zaXplOjEycHg7bWFyZ2luOjB9LmJqLXB1Yi1saW5lX19oMXt3aWR0aDoxMDAlO21hcmdpbjo1cHggMCAwO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MS40fVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wdWJfbGluZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfLi5fcGlwZXNfaW1hZ2VfaW1hZ2UucGlwZSxfLi5fcGlwZXNfdGltZXN0YW1wX3RpbWVzdGFtcCxfcHViX2xpbmUuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3B1Yl9saW5lLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9waXBlc19pbWFnZV9pbWFnZS5waXBlLF8uLl9waXBlc190aW1lc3RhbXBfdGltZXN0YW1wLF9wdWJfbGluZS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcHViLWxpbmUuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL3BpcGVzL2ltYWdlL2ltYWdlLnBpcGVcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9waXBlcy90aW1lc3RhbXAvdGltZXN0YW1wXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiLi9wdWItbGluZS5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUHViTGluZUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUHViTGluZUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QdWJMaW5lQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUHViTGluZUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1B1YkxpbmVDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1B1YkxpbmVDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW2kxLsm1cGlkKDAsIGkyLkltYWdlUGlwZSwgW10pLCBpMS7JtXBpZCgwLCBpMy5UaW1lc3RhbXBQaXBlLCBbXSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDIsIFwicGljdHVyZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItbGluZV9fcGljdHVyZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJpbWdcIiwgW10sIFtbOCwgXCJzcmNcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDQsIDEpLCAoX2woKSgpLCBpMS7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCA2LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItbGluZV9fZGF0YVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNiwgMCwgbnVsbCwgbnVsbCwgMywgXCJ0aW1lXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1saW5lX19kYXRldGltZVwiXV0sIFtbMSwgXCJkYXRldGltZVwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVwcGQoNywgMSksIChfbCgpKCksIGkxLsm1dGVkKDgsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCBpMS7JtXBwZCg5LCAyKSwgKF9sKCkoKSwgaTEuybVlbGQoMTAsIDAsIG51bGwsIG51bGwsIDEsIFwiaDFcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWxpbmVfX2gxXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgxMSwgbnVsbCwgW1wiXCIsIFwiXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gaTEuybV1bnYoX3YsIDMsIDAsIF9jayhfdiwgNCwgMCwgaTEuybVub3YoX3YsIDApLCBfY28udmFsdWUuaW1hZ2UpKTsgX2NrKF92LCAzLCAwLCBjdXJyVmFsXzApOyB2YXIgY3VyclZhbF8xID0gaTEuybV1bnYoX3YsIDYsIDAsIF9jayhfdiwgNywgMCwgaTEuybVub3YoX3YsIDEpLCBfY28udmFsdWUudHMpKTsgX2NrKF92LCA2LCAwLCBjdXJyVmFsXzEpOyB2YXIgY3VyclZhbF8yID0gaTEuybV1bnYoX3YsIDgsIDAsIF9jayhfdiwgOSwgMCwgaTEuybVub3YoX3YsIDEpLCBfY28udmFsdWUudHMsIFwiSFJcIikpOyBfY2soX3YsIDgsIDAsIGN1cnJWYWxfMik7IHZhciBjdXJyVmFsXzMgPSBfY28udmFsdWUudGl0bGU7IF9jayhfdiwgMTEsIDAsIGN1cnJWYWxfMyk7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QdWJMaW5lQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1saW5lXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QdWJMaW5lQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUHViTGluZUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTQuUHViTGluZUNvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBQdWJMaW5lQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcIi5iai1wdWItbGluZVwiLCBpNC5QdWJMaW5lQ29tcG9uZW50LCBWaWV3X1B1YkxpbmVDb21wb25lbnRfSG9zdF8wLCB7IHZhbHVlOiBcInZhbHVlXCIgfSwge30sIFtdKTtcbmV4cG9ydCB7IFB1YkxpbmVDb21wb25lbnROZ0ZhY3RvcnkgYXMgUHViTGluZUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3B1Yi1saW5lL3B1Yi1saW5lLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX21haW4uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsXy4uX3B1Yl9jYXJkX3B1Yl9jYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfLi5fcHViX2NhcmRfcHViX2NhcmQuY29tcG9uZW50LF8uLl9wdWJfbGluZV9wdWJfbGluZS5jb21wb25lbnQubmdmYWN0b3J5LF8uLl9wdWJfbGluZV9wdWJfbGluZS5jb21wb25lbnQsXy4uXy4uX3BpcGVzX3RpbWVzdGFtcF90aW1lc3RhbXAsX3BhZ2VfbWFpbi5jb21wb25lbnQsXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fLi5fc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9tYWluLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9wdWJfY2FyZF9wdWJfY2FyZC5jb21wb25lbnQubmdmYWN0b3J5LF9hbmd1bGFyX3JvdXRlcixfYW5ndWxhcl9jb21tb24sXy4uX3B1Yl9jYXJkX3B1Yl9jYXJkLmNvbXBvbmVudCxfLi5fcHViX2xpbmVfcHViX2xpbmUuY29tcG9uZW50Lm5nZmFjdG9yeSxfLi5fcHViX2xpbmVfcHViX2xpbmUuY29tcG9uZW50LF8uLl8uLl9waXBlc190aW1lc3RhbXBfdGltZXN0YW1wLF9wYWdlX21haW4uY29tcG9uZW50LF8uLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uXy4uX3NlcnZpY2VzX21ldGFfbWV0YS5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtbWFpbi5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vLi4vcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uLy4uL3B1Yi1jYXJkL3B1Yi1jYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIi4uLy4uL3B1Yi1saW5lL3B1Yi1saW5lLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuLi8uLi9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk4IGZyb20gXCIuLi8uLi8uLi9waXBlcy90aW1lc3RhbXAvdGltZXN0YW1wXCI7XG5pbXBvcnQgKiBhcyBpOSBmcm9tIFwiLi9wYWdlLW1haW4uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTExIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9tZXRhL21ldGEuc2VydmljZVwiO1xudmFyIHN0eWxlc19QYWdlTWFpbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZU1haW5Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZU1haW5Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlTWFpbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VNYWluQ29tcG9uZW50IH07XG5mdW5jdGlvbiBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzEoX2wpIHtcbiAgICByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wdWItY2FyZCBiai1wYWdlLW1haW5fX2NhcmRcIl1dLCBbWzIsIFwiYmotcGFnZS1tYWluX19jYXJkLS13aWRlXCIsIG51bGxdLCBbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDEpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIGkyLlZpZXdfUHViQ2FyZENvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX1B1YkNhcmRDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNjcxNzQ0LCBudWxsLCAwLCBpMy5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMy5Sb3V0ZXIsIGkzLkFjdGl2YXRlZFJvdXRlLCBpNC5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCBpMS7JtXBwZCgyLCAyKSwgaTEuybVwYWQoMywgMiksIGkxLsm1ZGlkKDQsIDQ5MTUyLCBudWxsLCAwLCBpNS5QdWJDYXJkQ29tcG9uZW50LCBbXSwgeyB2YWx1ZTogWzAsIFwidmFsdWVcIl0gfSwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8zID0gX2NrKF92LCAzLCAwLCBpMS7JtXVudihfdiwgMSwgMCwgX2NrKF92LCAyLCAwLCBpMS7JtW5vdihfdi5wYXJlbnQsIDApLCBfdi5jb250ZXh0LiRpbXBsaWNpdC50cywgXCJVUkxcIikpLCBfdi5jb250ZXh0LiRpbXBsaWNpdC51cmwpOyBfY2soX3YsIDEsIDAsIGN1cnJWYWxfMyk7IHZhciBjdXJyVmFsXzQgPSBfdi5jb250ZXh0LiRpbXBsaWNpdDsgX2NrKF92LCA0LCAwLCBjdXJyVmFsXzQpOyB9LCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gKF92LmNvbnRleHQuJGltcGxpY2l0LndlaWdodCA+IDEpOyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDEpLnRhcmdldDsgdmFyIGN1cnJWYWxfMiA9IGkxLsm1bm92KF92LCAxKS5ocmVmOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCwgY3VyclZhbF8xLCBjdXJyVmFsXzIpOyB9KTtcbn1cbmZ1bmN0aW9uIFZpZXdfUGFnZU1haW5Db21wb25lbnRfMihfbCkge1xuICAgIHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgNCwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLXB1Yi1saW5lXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgaTYuVmlld19QdWJMaW5lQ29tcG9uZW50XzAsIGk2LlJlbmRlclR5cGVfUHViTGluZUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA2NzE3NDQsIG51bGwsIDAsIGkzLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kzLlJvdXRlciwgaTMuQWN0aXZhdGVkUm91dGUsIGk0LkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIGkxLsm1cHBkKDIsIDIpLCBpMS7JtXBhZCgzLCAyKSwgaTEuybVkaWQoNCwgNDkxNTIsIG51bGwsIDAsIGk3LlB1YkxpbmVDb21wb25lbnQsIFtdLCB7IHZhbHVlOiBbMCwgXCJ2YWx1ZVwiXSB9LCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzIgPSBfY2soX3YsIDMsIDAsIGkxLsm1dW52KF92LCAxLCAwLCBfY2soX3YsIDIsIDAsIGkxLsm1bm92KF92LnBhcmVudCwgMCksIF92LmNvbnRleHQuJGltcGxpY2l0LnRzLCBcIlVSTFwiKSksIF92LmNvbnRleHQuJGltcGxpY2l0LnVybCk7IF9jayhfdiwgMSwgMCwgY3VyclZhbF8yKTsgdmFyIGN1cnJWYWxfMyA9IF92LmNvbnRleHQuJGltcGxpY2l0OyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMyk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMSkudGFyZ2V0OyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDEpLmhyZWY7IF9jayhfdiwgMCwgMCwgY3VyclZhbF8wLCBjdXJyVmFsXzEpOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtpMS7JtXBpZCgwLCBpOC5UaW1lc3RhbXBQaXBlLCBbXSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDExLCBcIm1haW5cIiwgW1tcImNsYXNzXCIsIFwiYmotcGFnZS1tYWluX193cmFwcGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAxMCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotcGFnZS1tYWluX19yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDMsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLXBhZ2UtbWFpbl9fY29sIGJqLXBhZ2UtbWFpbl9fY29sLS1ncmlkXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgVmlld19QYWdlTWFpbkNvbXBvbmVudF8xKSksIGkxLsm1ZGlkKDUsIDgwMjgxNiwgbnVsbCwgMCwgaTQuTmdGb3JPZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmLCBpMS5JdGVyYWJsZURpZmZlcnNdLCB7IG5nRm9yT2Y6IFswLCBcIm5nRm9yT2ZcIl0gfSwgbnVsbCksIGkxLsm1cGlkKDEzMTA3MiwgaTQuQXN5bmNQaXBlLCBbaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdKSwgKF9sKCkoKSwgaTEuybVlbGQoNywgMCwgbnVsbCwgbnVsbCwgNSwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1wYWdlLW1haW5fX2FzaWRlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg4LCAwLCBudWxsLCBudWxsLCAxLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcImNvbHVtbi1oZWFkZXJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFEXFx1MDQzRVxcdTA0MzJcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDM4XCJdKSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAyLCBudWxsLCBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzIpKSwgaTEuybVkaWQoMTEsIDgwMjgxNiwgbnVsbCwgMCwgaTQuTmdGb3JPZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmLCBpMS5JdGVyYWJsZURpZmZlcnNdLCB7IG5nRm9yT2Y6IFswLCBcIm5nRm9yT2ZcIl0gfSwgbnVsbCksIGkxLsm1cGlkKDEzMTA3MiwgaTQuQXN5bmNQaXBlLCBbaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IHZhciBjdXJyVmFsXzAgPSBpMS7JtXVudihfdiwgNSwgMCwgaTEuybVub3YoX3YsIDYpLnRyYW5zZm9ybShfY28ucHVibGljYXRpb25zX3dlaWdodF8xMikpOyBfY2soX3YsIDUsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzEgPSBpMS7JtXVudihfdiwgMTEsIDAsIGkxLsm1bm92KF92LCAxMikudHJhbnNmb3JtKF9jby5wdWJsaWNhdGlvbnNfd2VpZ2h0XzApKTsgX2NrKF92LCAxMSwgMCwgY3VyclZhbF8xKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYWluQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1tYWluXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VNYWluQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZU1haW5Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpOS5QYWdlTWFpbkNvbXBvbmVudCwgW2kzLkFjdGl2YXRlZFJvdXRlLCBpMTAuQVBJU2VydmljZSwgaTExLk1ldGFTZXJ2aWNlXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VNYWluQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtbWFpblwiLCBpOS5QYWdlTWFpbkNvbXBvbmVudCwgVmlld19QYWdlTWFpbkNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5uby1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtYWxpZ246Y2VudGVyfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9jb21tb24sX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9jb21tb24sX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi92aWRlby1yaWJib24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vc2VydmljZXMveW91dHViZS95b3V0dWJlLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfVmlkZW9SaWJib25Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1ZpZGVvUmliYm9uQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1ZpZGVvUmliYm9uQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfVmlkZW9SaWJib25Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9WaWRlb1JpYmJvbkNvbXBvbmVudCB9O1xuZnVuY3Rpb24gVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMTAsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai12aWRlby1yaWJib25fX2l0ZW1cIl0sIFtcInRhcmdldFwiLCBcIl9ibGFua1wiXV0sIFtbOCwgXCJocmVmXCIsIDRdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCA1LCBcImZpZ3VyZVwiLCBbW1wiY2xhc3NcIiwgXCJiai12aWRlby1yaWJib25fX2ZpZ3VyZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJpbWdcIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX190aHVtYlwiXV0sIFtbOCwgXCJzcmNcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwiZmlnY2FwdGlvblwiLCBbW1wiY2xhc3NcIiwgXCJiai12aWRlby1yaWJib25fX2NhcHRpb24gYmotdmlkZW8tcmliYm9uX19jYXB0aW9uLS1sZWZ0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCg0LCBudWxsLCBbXCJcIiwgXCJcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJmaWdjYXB0aW9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fY2FwdGlvbiBiai12aWRlby1yaWJib25fX2NhcHRpb24tLXJpZ2h0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCg2LCBudWxsLCBbXCJcIiwgXCJcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNywgMCwgbnVsbCwgbnVsbCwgMSwgXCJ0aW1lXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fZGF0ZXRpbWVcIl1dLCBbWzEsIFwiZGF0ZXRpbWVcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDgsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAxLCBcImgzXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fdGl0bGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDEwLCBudWxsLCBbXCJcIiwgXCJcIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBfdi5jb250ZXh0LiRpbXBsaWNpdC5ocmVmOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzEgPSBfdi5jb250ZXh0LiRpbXBsaWNpdC50aHVtYjsgX2NrKF92LCAyLCAwLCBjdXJyVmFsXzEpOyB2YXIgY3VyclZhbF8yID0gX3YuY29udGV4dC4kaW1wbGljaXQuZHVyYXRpb247IF9jayhfdiwgNCwgMCwgY3VyclZhbF8yKTsgdmFyIGN1cnJWYWxfMyA9IF92LmNvbnRleHQuJGltcGxpY2l0Lmxpa2U7IF9jayhfdiwgNiwgMCwgY3VyclZhbF8zKTsgdmFyIGN1cnJWYWxfNCA9IF92LmNvbnRleHQuJGltcGxpY2l0LmRhdGU7IF9jayhfdiwgNywgMCwgY3VyclZhbF80KTsgdmFyIGN1cnJWYWxfNSA9IF92LmNvbnRleHQuJGltcGxpY2l0LmRhdGU7IF9jayhfdiwgOCwgMCwgY3VyclZhbF81KTsgdmFyIGN1cnJWYWxfNiA9IF92LmNvbnRleHQuJGltcGxpY2l0LnRpdGxlOyBfY2soX3YsIDEwLCAwLCBjdXJyVmFsXzYpOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDMsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fd3JhcHBlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIG51bGwsIDIsIG51bGwsIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfMSkpLCBpMS7JtWRpZCgyLCA4MDI4MTYsIG51bGwsIDAsIGkyLk5nRm9yT2YsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZiwgaTEuSXRlcmFibGVEaWZmZXJzXSwgeyBuZ0Zvck9mOiBbMCwgXCJuZ0Zvck9mXCJdIH0sIG51bGwpLCBpMS7JtXBpZCgxMzEwNzIsIGkyLkFzeW5jUGlwZSwgW2kxLkNoYW5nZURldGVjdG9yUmVmXSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gaTEuybV1bnYoX3YsIDIsIDAsIGkxLsm1bm92KF92LCAzKS50cmFuc2Zvcm0oX2NvLml0ZW1zKSk7IF9jayhfdiwgMiwgMCwgY3VyclZhbF8wKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwidmlkZW8tcmliYm9uXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfVmlkZW9SaWJib25Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMy5WaWRlb1JpYmJvbkNvbXBvbmVudCwgW2k0LlJvdXRlciwgaTUuQVBJU2VydmljZSwgaTYuWW91VHViZVNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgVmlkZW9SaWJib25Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwidmlkZW8tcmliYm9uXCIsIGkzLlZpZGVvUmliYm9uQ29tcG9uZW50LCBWaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBWaWRlb1JpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSBhcyBWaWRlb1JpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfMTAxLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlcixfLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLF8uLl8uLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSxfcGFnZV8xMDEuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfMTAxLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlcixfLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLF8uLl8uLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSxfcGFnZV8xMDEuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtMTAxLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3lvdXR1YmUveW91dHViZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNyBmcm9tIFwiLi9wYWdlLTEwMS5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUGFnZTEwMUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZTEwMUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlMTAxQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZTEwMUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2UxMDFDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2UxMDFDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDIsIFwiYXNpZGVcIiwgW1tcImNsYXNzXCIsIFwiYmotYXNpZGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDEsIFwiaDJcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MURcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiVmlkZW9cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJ2aWRlby1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGkyLlZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfMCwgaTIuUmVuZGVyVHlwZV9WaWRlb1JpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCg2LCAxMTQ2ODgsIG51bGwsIDAsIGkzLlZpZGVvUmliYm9uQ29tcG9uZW50LCBbaTQuUm91dGVyLCBpNS5BUElTZXJ2aWNlLCBpNi5Zb3VUdWJlU2VydmljZV0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCA2LCAwKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2UxMDFDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLTEwMVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlMTAxQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZTEwMUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGk3LlBhZ2UxMDFDb21wb25lbnQsIFtdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZTEwMUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLTEwMVwiLCBpNy5QYWdlMTAxQ29tcG9uZW50LCBWaWV3X1BhZ2UxMDFDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2UxMDFDb21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZTEwMUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlQ3VycmVuY2llc0NvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUN1cnJlbmNpZXNDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW10sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQ3VycmVuY2llc0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtY3VycmVuY2llc1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlQ3VycmVuY2llc0NvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUN1cnJlbmNpZXNDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1jdXJyZW5jaWVzXCIsIGkyLlBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50LCBWaWV3X1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlQ3VycmVuY2llc0NvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlQ3VycmVuY2llc0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAwLCBcImFydGljbGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhc2lkZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtY3VycmVuY2llcy1pdGVtXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1jdXJyZW5jaWVzLWl0ZW1cIiwgaTIuUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LCBWaWV3X1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXZlbnRzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V2ZW50cy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXZlbnRzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V2ZW50cy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtZXZlbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlRXZlbnRzQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlRXZlbnRzQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VFdmVudHNDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlRXZlbnRzQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUV2ZW50c0NvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV2ZW50c0NvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFdmVudHNDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLWV2ZW50c1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlRXZlbnRzQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUV2ZW50c0NvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VFdmVudHNDb21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUV2ZW50c0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWV2ZW50c1wiLCBpMi5QYWdlRXZlbnRzQ29tcG9uZW50LCBWaWV3X1BhZ2VFdmVudHNDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VFdmVudHNDb21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUV2ZW50c0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDAsIFwiYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAwLCBcImFzaWRlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLWV2ZW50cy1pdGVtXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlRXZlbnRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWV2ZW50cy1pdGVtXCIsIGkyLlBhZ2VFdmVudHNJdGVtQ29tcG9uZW50LCBWaWV3X1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlRXZlbnRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlRXZlbnRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VFeGNoYW5nZXNDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFeGNoYW5nZXNDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW10sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1leGNoYW5nZXNcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VFeGNoYW5nZXNDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlRXhjaGFuZ2VzQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VFeGNoYW5nZXNDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1leGNoYW5nZXNcIiwgaTIuUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCwgVmlld19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlRXhjaGFuZ2VzQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VFeGNoYW5nZXNDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAwLCBcImFydGljbGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhc2lkZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1leGNoYW5nZXMtaXRlbVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1leGNoYW5nZXMtaXRlbVwiLCBpMi5QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCwgVmlld19QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9pY28uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfaWNvLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9pY28uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfaWNvLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1pY28uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1pY28uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VJQ09Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VJQ09Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUlDT0NvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VJQ09Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlSUNPQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlSUNPQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtdLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUlDT0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtaWNvXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VJQ09Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlSUNPQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUlDT0NvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlSUNPQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtaWNvXCIsIGkyLlBhZ2VJQ09Db21wb25lbnQsIFZpZXdfUGFnZUlDT0NvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUlDT0NvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlSUNPQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX2ljb19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX2ljb19pdGVtLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1pY28taXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLWljby1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlSUNPSXRlbUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUlDT0l0ZW1Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUlDT0l0ZW1Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlSUNPSXRlbUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VJQ09JdGVtQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlSUNPSXRlbUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhcnRpY2xlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDAsIFwiYXNpZGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlSUNPSXRlbUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtaWNvLWl0ZW1cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUlDT0l0ZW1Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlSUNPSXRlbUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VJQ09JdGVtQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VJQ09JdGVtQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtaWNvLWl0ZW1cIiwgaTIuUGFnZUlDT0l0ZW1Db21wb25lbnQsIFZpZXdfUGFnZUlDT0l0ZW1Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VJQ09JdGVtQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VJQ09JdGVtQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9tYXJrZXRzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX21hcmtldHMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX21hcmtldHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2VfbWFya2V0cy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtbWFya2V0cy5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLW1hcmtldHMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VNYXJrZXRzQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0NvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlTWFya2V0c0NvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZU1hcmtldHNDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYXJrZXRzQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtdLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZU1hcmtldHNDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLW1hcmtldHNcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZU1hcmtldHNDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0NvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VNYXJrZXRzQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VNYXJrZXRzQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtbWFya2V0c1wiLCBpMi5QYWdlTWFya2V0c0NvbXBvbmVudCwgVmlld19QYWdlTWFya2V0c0NvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZU1hcmtldHNDb21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZU1hcmtldHNDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX21hcmtldHNfaXRlbS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9wYWdlX21hcmtldHNfaXRlbS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhcnRpY2xlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDAsIFwiYXNpZGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlTWFya2V0c0l0ZW1Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLW1hcmtldHMtaXRlbVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlTWFya2V0c0l0ZW1Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtbWFya2V0cy1pdGVtXCIsIGkyLlBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCwgVmlld19QYWdlTWFya2V0c0l0ZW1Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlTWFya2V0c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLm5vLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXJ9XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfcGFnZV9zZWN0aW9uLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9wYWdlX3NlY3Rpb24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2Utc2VjdGlvbi5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUGFnZVNlY3Rpb25Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VTZWN0aW9uQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VTZWN0aW9uQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZVNlY3Rpb25Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlU2VjdGlvbkNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZVNlY3Rpb25Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDIsIFwiYXNpZGVcIiwgW1tcImNsYXNzXCIsIFwiYmotYXNpZGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDEsIFwiaDJcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MjBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQlwiXSkpXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VTZWN0aW9uQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1zZWN0aW9uXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VTZWN0aW9uQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZVNlY3Rpb25Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlU2VjdGlvbkNvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlU2VjdGlvbkNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLXNlY3Rpb25cIiwgaTIuUGFnZVNlY3Rpb25Db21wb25lbnQsIFZpZXdfUGFnZVNlY3Rpb25Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VTZWN0aW9uQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VTZWN0aW9uQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIuYmotYXJ0aWNsZXtkaXNwbGF5OmJsb2NrO2ZsZXg6MCAwIDEwMCU7d2lkdGg6MTAwJX1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5iai1hcnRpY2xle2Rpc3BsYXk6YmxvY2s7ZmxleDoxIDEgYXV0b30uYmotYXJ0aWNsZV9fd3JhcHBlcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9LmJqLWFydGljbGVfX2hlYWRlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5iai1hcnRpY2xlX19oZWFkZXJfX3BpY3R1cmUsLmJqLWFydGljbGVfX2hlYWRlcl9fcGljdHVyZSBpbWd7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJX0uYmotYXJ0aWNsZV9faGVhZGVyX19waWN0dXJle3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2Y5ZjlmOTtsZWZ0OjA7dG9wOjB9LmJqLWFydGljbGVfX2hlYWRlcl9fcGljdHVyZSBpbWd7bWluLXdpZHRoOjEwMCU7bWluLWhlaWdodDoxMDAlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO29iamVjdC1maXQ6Y292ZXJ9XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX2NvbW1vbixfLi5fcGlwZXNfaW1hZ2VfaW1hZ2UucGlwZSxfYXJ0aWNsZS5jb21wb25lbnQsXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9jb21tb24sXy4uX3BpcGVzX2ltYWdlX2ltYWdlLnBpcGUsX2FydGljbGUuY29tcG9uZW50LF8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsXy4uX3NlcnZpY2VzX21ldGFfbWV0YS5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uLy4uL3BpcGVzL2ltYWdlL2ltYWdlLnBpcGVcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuL2FydGljbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWV0YS9tZXRhLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfQXJ0aWNsZUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19BcnRpY2xlQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQgfTtcbmZ1bmN0aW9uIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8yKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbW1wiY2xhc3NcIiwgXCJiai1hcnRpY2xlX19oZWFkZXJfX2gyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgxLCBudWxsLCBbXCJcIiwgXCJcIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBfdi5wYXJlbnQuY29udGV4dC4kaW1wbGljaXQuYmlnVGl0bGU7IF9jayhfdiwgMSwgMCwgY3VyclZhbF8wKTsgfSk7IH1cbmZ1bmN0aW9uIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgOSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotYXJ0aWNsZV9fd3JhcHBlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgNywgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotYXJ0aWNsZV9faGVhZGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAyLCBcInBpY3R1cmVcIiwgW1tcImNsYXNzXCIsIFwiYmotYXJ0aWNsZV9faGVhZGVyX19waWN0dXJlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAxLCBcImltZ1wiLCBbXSwgW1s4LCBcInNyY1wiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVwcGQoNCwgMSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAxLCBudWxsLCBWaWV3X0FydGljbGVDb21wb25lbnRfMikpLCBpMS7JtWRpZCg2LCAxNjM4NCwgbnVsbCwgMCwgaTIuTmdJZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmXSwgeyBuZ0lmOiBbMCwgXCJuZ0lmXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg3LCAwLCBudWxsLCBudWxsLCAxLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcImJqLWFydGljbGVfX2hlYWRlcl9faDFcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDgsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAwLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1hcnRpY2xlX19jb250ZW50IC5hcnRpY2xlXCJdXSwgW1s4LCBcImlubmVySFRNTFwiLCAxXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzEgPSAhIV92LmNvbnRleHQuJGltcGxpY2l0LmJpZ1RpdGxlOyBfY2soX3YsIDYsIDAsIGN1cnJWYWxfMSk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtXVudihfdiwgMywgMCwgX2NrKF92LCA0LCAwLCBpMS7JtW5vdihfdi5wYXJlbnQsIDApLCBfdi5jb250ZXh0LiRpbXBsaWNpdC5pbWFnZSkpOyBfY2soX3YsIDMsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzIgPSBfdi5jb250ZXh0LiRpbXBsaWNpdC50aXRsZTsgX2NrKF92LCA4LCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gX3YuY29udGV4dC4kaW1wbGljaXQuY29udGVudDsgX2NrKF92LCA5LCAwLCBjdXJyVmFsXzMpOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbaTEuybVwaWQoMCwgaTMuSW1hZ2VQaXBlLCBbXSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAyLCBudWxsLCBWaWV3X0FydGljbGVDb21wb25lbnRfMSkpLCBpMS7JtWRpZCgyLCA4MDI4MTYsIG51bGwsIDAsIGkyLk5nRm9yT2YsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZiwgaTEuSXRlcmFibGVEaWZmZXJzXSwgeyBuZ0Zvck9mOiBbMCwgXCJuZ0Zvck9mXCJdIH0sIG51bGwpLCBpMS7JtXBpZCgxMzEwNzIsIGkyLkFzeW5jUGlwZSwgW2kxLkNoYW5nZURldGVjdG9yUmVmXSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gaTEuybV1bnYoX3YsIDIsIDAsIGkxLsm1bm92KF92LCAzKS50cmFuc2Zvcm0oX2NvLml0ZW1zKSk7IF9jayhfdiwgMiwgMCwgY3VyclZhbF8wKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0FydGljbGVDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotYXJ0aWNsZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpNC5BcnRpY2xlQ29tcG9uZW50LCBbaTUuQVBJU2VydmljZSwgaTYuTWV0YVNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCIuYmotYXJ0aWNsZVwiLCBpNC5BcnRpY2xlQ29tcG9uZW50LCBWaWV3X0FydGljbGVDb21wb25lbnRfSG9zdF8wLCB7IHZhbHVlOiBcInZhbHVlXCIgfSwge30sIFtdKTtcbmV4cG9ydCB7IEFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgYXMgQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9wdWJfbGluZV9wdWJfbGluZS5jb21wb25lbnQubmdmYWN0b3J5LF9hbmd1bGFyX3JvdXRlcixfYW5ndWxhcl9jb21tb24sXy4uX3B1Yl9saW5lX3B1Yl9saW5lLmNvbXBvbmVudCxfLi5fLi5fcGlwZXNfdGltZXN0YW1wX3RpbWVzdGFtcCxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fLi5fc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UsX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfcGFnZV9hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF8uLl9wdWJfbGluZV9wdWJfbGluZS5jb21wb25lbnQubmdmYWN0b3J5LF9hbmd1bGFyX3JvdXRlcixfYW5ndWxhcl9jb21tb24sXy4uX3B1Yl9saW5lX3B1Yl9saW5lLmNvbXBvbmVudCxfLi5fLi5fcGlwZXNfdGltZXN0YW1wX3RpbWVzdGFtcCxfLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfLi5fLi5fc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UsX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi9wdWItbGluZS9wdWItbGluZS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vcHViLWxpbmUvcHViLWxpbmUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vLi4vcGlwZXMvdGltZXN0YW1wL3RpbWVzdGFtcFwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIi4uLy4uL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpOCBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTkgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTEwIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9tZXRhL21ldGEuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTExIGZyb20gXCIuL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUGFnZUFydGljbGVDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VBcnRpY2xlQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VBcnRpY2xlQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUFydGljbGVDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlQXJ0aWNsZUNvbXBvbmVudCB9O1xuZnVuY3Rpb24gVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF8xKF9sKSB7XG4gICAgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA0LCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotcHViLWxpbmVcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxKS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBpMi5WaWV3X1B1YkxpbmVDb21wb25lbnRfMCwgaTIuUmVuZGVyVHlwZV9QdWJMaW5lQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDY3MTc0NCwgbnVsbCwgMCwgaTMuUm91dGVyTGlua1dpdGhIcmVmLCBbaTMuUm91dGVyLCBpMy5BY3RpdmF0ZWRSb3V0ZSwgaTQuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgaTEuybVwcGQoMiwgMiksIGkxLsm1cGFkKDMsIDIpLCBpMS7JtWRpZCg0LCA0OTE1MiwgbnVsbCwgMCwgaTUuUHViTGluZUNvbXBvbmVudCwgW10sIHsgdmFsdWU6IFswLCBcInZhbHVlXCJdIH0sIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMiA9IF9jayhfdiwgMywgMCwgaTEuybV1bnYoX3YsIDEsIDAsIF9jayhfdiwgMiwgMCwgaTEuybVub3YoX3YucGFyZW50LCAwKSwgX3YuY29udGV4dC4kaW1wbGljaXQudHMsIFwiVVJMXCIpKSwgX3YuY29udGV4dC4kaW1wbGljaXQudXJsKTsgX2NrKF92LCAxLCAwLCBjdXJyVmFsXzIpOyB2YXIgY3VyclZhbF8zID0gX3YuY29udGV4dC4kaW1wbGljaXQ7IF9jayhfdiwgNCwgMCwgY3VyclZhbF8zKTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS50YXJnZXQ7IHZhciBjdXJyVmFsXzEgPSBpMS7JtW5vdihfdiwgMSkuaHJlZjsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzAsIGN1cnJWYWxfMSk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUFydGljbGVDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW2kxLsm1cGlkKDAsIGk2LlRpbWVzdGFtcFBpcGUsIFtdKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMTAsIFwibWFpblwiLCBbW1wiY2xhc3NcIiwgXCJiai1ncmlkXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCA5LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1ncmlkX19yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDIsIFwiYXJ0aWNsZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1ncmlkX19jb2wgYmotYXJ0aWNsZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIGk3LlZpZXdfQXJ0aWNsZUNvbXBvbmVudF8wLCBpNy5SZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQpKSwgaTEuybVkaWQoNCwgMTE0Njg4LCBudWxsLCAwLCBpOC5BcnRpY2xlQ29tcG9uZW50LCBbaTkuQVBJU2VydmljZSwgaTEwLk1ldGFTZXJ2aWNlXSwgeyB2YWx1ZTogWzAsIFwidmFsdWVcIl0gfSwgbnVsbCksIGkxLsm1cGlkKDEzMTA3MiwgaTQuQXN5bmNQaXBlLCBbaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdKSwgKF9sKCkoKSwgaTEuybVlbGQoNiwgMCwgbnVsbCwgbnVsbCwgNSwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1ncmlkX19hc2lkZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNywgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMVwiLCBbW1wiY2xhc3NcIiwgXCJjb2x1bW4taGVhZGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQyN1xcdTA0MzhcXHUwNDQyXFx1MDQzMFxcdTA0MzlcXHUwNDQyXFx1MDQzNSBcXHUwNDQyXFx1MDQzMFxcdTA0M0FcXHUwNDM2XFx1MDQzNVwiXSkpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF8xKSksIGkxLsm1ZGlkKDEwLCA4MDI4MTYsIG51bGwsIDAsIGk0Lk5nRm9yT2YsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZiwgaTEuSXRlcmFibGVEaWZmZXJzXSwgeyBuZ0Zvck9mOiBbMCwgXCJuZ0Zvck9mXCJdIH0sIG51bGwpLCBpMS7JtXBpZCgxMzEwNzIsIGk0LkFzeW5jUGlwZSwgW2kxLkNoYW5nZURldGVjdG9yUmVmXSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gaTEuybV1bnYoX3YsIDQsIDAsIGkxLsm1bm92KF92LCA1KS50cmFuc2Zvcm0oX2NvLml0ZW0pKTsgX2NrKF92LCA0LCAwLCBjdXJyVmFsXzApOyB2YXIgY3VyclZhbF8xID0gaTEuybV1bnYoX3YsIDEwLCAwLCBpMS7JtW5vdihfdiwgMTEpLnRyYW5zZm9ybShfY28ucHVibGljYXRpb25zKSk7IF9jayhfdiwgMTAsIDAsIGN1cnJWYWxfMSk7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VBcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTExLlBhZ2VBcnRpY2xlQ29tcG9uZW50LCBbaTMuQWN0aXZhdGVkUm91dGUsIGk5LkFQSVNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1hcnRpY2xlXCIsIGkxMS5QYWdlQXJ0aWNsZUNvbXBvbmVudCwgVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5uby1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtYWxpZ246Y2VudGVyfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfbm9fY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfbm9fY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vbm8tY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9uby1jb250ZW50LmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19Ob0NvbnRlbnRDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX05vQ29udGVudENvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19Ob0NvbnRlbnRDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9Ob0NvbnRlbnRDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9Ob0NvbnRlbnRDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X05vQ29udGVudENvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMywgXCJoMVwiLCBbW1wiY2xhc3NcIiwgXCJuby1jb250ZW50XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiNDA0XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDAsIFwiYnJcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlBhZ2Ugbm90IGZvdW50XCJdKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTm9Db250ZW50Q29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwibm8tY29udGVudFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19Ob0NvbnRlbnRDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9Ob0NvbnRlbnRDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNDkxNTIsIG51bGwsIDAsIGkyLk5vQ29udGVudENvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBOb0NvbnRlbnRDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwibm8tY29udGVudFwiLCBpMi5Ob0NvbnRlbnRDb21wb25lbnQsIFZpZXdfTm9Db250ZW50Q29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBOb0NvbnRlbnRDb21wb25lbnROZ0ZhY3RvcnkgYXMgTm9Db250ZW50Q29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLmF1dGgtZm9ybS10aXRsZVtfbmdjb250ZW50LSVDT01QJV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyfS5hdXRoLWZvcm1bX25nY29udGVudC0lQ09NUCVde21pbi13aWR0aDozMDBweH0uYXV0aC1mb3JtLXJvd1tfbmdjb250ZW50LSVDT01QJV17bWFyZ2luLXRvcDoxMHB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0uYXV0aC1mb3JtLXJvd1tfbmdjb250ZW50LSVDT01QJV06Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDowfS5hdXRoLWZvcm0tYnV0dG9uW19uZ2NvbnRlbnQtJUNPTVAlXXttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfYXV0aF9kaWFsb2cuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkLF9hbmd1bGFyX21hdGVyaWFsX2RpYWxvZyxfYW5ndWxhcl9mb3JtcyxfLi5fLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGRfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2FuZ3VsYXJfbWF0ZXJpYWxfY29yZSxfYW5ndWxhcl9tYXRlcmlhbF9pbnB1dCxfYW5ndWxhcl9jZGtfcGxhdGZvcm0sX2FuZ3VsYXJfY29tbW9uLF8uLl8uLl8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9hbmd1bGFyX21hdGVyaWFsX2J1dHRvbixfYW5ndWxhcl9jZGtfYTExeSxfYXV0aF9kaWFsb2cuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2F1dGhfZGlhbG9nLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZCxfYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2csX2FuZ3VsYXJfZm9ybXMsXy4uXy4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9hbmd1bGFyX21hdGVyaWFsX2NvcmUsX2FuZ3VsYXJfbWF0ZXJpYWxfaW5wdXQsX2FuZ3VsYXJfY2RrX3BsYXRmb3JtLF9hbmd1bGFyX2NvbW1vbixfLi5fLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX2J1dHRvbl90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSxfYW5ndWxhcl9tYXRlcmlhbF9idXR0b24sX2FuZ3VsYXJfY2RrX2ExMXksX2F1dGhfZGlhbG9nLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9hdXRoLWRpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZC90eXBpbmdzL2luZGV4Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xuaW1wb3J0ICogYXMgaTggZnJvbSBcIkBhbmd1bGFyL2Nkay9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgaTkgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTEwIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uL3R5cGluZ3MvaW5kZXgubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTEgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0ICogYXMgaTEyIGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xuaW1wb3J0ICogYXMgaTEzIGZyb20gXCIuL2F1dGgtZGlhbG9nLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19BdXRoRGlhbG9nQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9BdXRoRGlhbG9nQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDAsIHN0eWxlczogc3R5bGVzX0F1dGhEaWFsb2dDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9BdXRoRGlhbG9nQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfQXV0aERpYWxvZ0NvbXBvbmVudCB9O1xuZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzEoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA0LCBcIm1hdC1lcnJvclwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtZXJyb3JcIl0sIFtcInJvbGVcIiwgXCJhbGVydFwiXV0sIFtbMSwgXCJpZFwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMSwgMTYzODQsIFtbNCwgNF1dLCAwLCBpMi5NYXRFcnJvciwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiRW1haWwgaXMgXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwic3Ryb25nXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJyZXF1aXJlZFwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5pZDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzIoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAyLCBcIm1hdC1lcnJvclwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtZXJyb3JcIl0sIFtcInJvbGVcIiwgXCJhbGVydFwiXV0sIFtbMSwgXCJpZFwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMSwgMTYzODQsIFtbNCwgNF1dLCAwLCBpMi5NYXRFcnJvciwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5pZDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzMoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA0LCBcIm1hdC1lcnJvclwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtZXJyb3JcIl0sIFtcInJvbGVcIiwgXCJhbGVydFwiXV0sIFtbMSwgXCJpZFwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMSwgMTYzODQsIFtbMTEsIDRdXSwgMCwgaTIuTWF0RXJyb3IsIFtdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlBhc3N3b3JkIGlzIFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAxLCBcInN0cm9uZ1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wicmVxdWlyZWRcIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMSkuaWQ7IF9jayhfdiwgMCwgMCwgY3VyclZhbF8wKTsgfSk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMChfbCkge1xuICAgIHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJoMVwiLCBbW1wiY2xhc3NcIiwgXCJhdXRoLWZvcm0tdGl0bGUgbWF0LWRpYWxvZy10aXRsZVwiXSwgW1wibWF0LWRpYWxvZy10aXRsZVwiLCBcIlwiXV0sIFtbOCwgXCJpZFwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMSwgODE5MjAsIG51bGwsIDAsIGkzLk1hdERpYWxvZ1RpdGxlLCBbWzIsIGkzLk1hdERpYWxvZ0NvbnRhaW5lcl1dLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIkF1dGhvcml6YXRpb25cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgNDYsIFwiZm9ybVwiLCBbW1wiY2xhc3NcIiwgXCJhdXRoLWZvcm0gbWF0LWRpYWxvZy1jb250ZW50XCJdLCBbXCJtYXQtZGlhbG9nLWNvbnRlbnRcIiwgXCJcIl0sIFtcIm5vdmFsaWRhdGVcIiwgXCJcIl1dLCBbWzIsIFwibmctdW50b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy10b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy1wcmlzdGluZVwiLCBudWxsXSwgWzIsIFwibmctZGlydHlcIiwgbnVsbF0sIFsyLCBcIm5nLXZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1wZW5kaW5nXCIsIG51bGxdXSwgW1tudWxsLCBcIm5nU3VibWl0XCJdLCBbbnVsbCwgXCJzdWJtaXRcIl0sIFtudWxsLCBcInJlc2V0XCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9jbyA9IF92LmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmICgoXCJzdWJtaXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDUpLm9uU3VibWl0KCRldmVudCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJyZXNldFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMSA9IChpMS7JtW5vdihfdiwgNSkub25SZXNldCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMSAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwibmdTdWJtaXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzIgPSAoX2NvLm9uU3VibWl0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8yICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg0LCAxNjM4NCwgbnVsbCwgMCwgaTQuybViZiwgW10sIG51bGwsIG51bGwpLCBpMS7JtWRpZCg1LCA1NDA2NzIsIG51bGwsIDAsIGk0LkZvcm1Hcm91cERpcmVjdGl2ZSwgW1s4LCBudWxsXSwgWzgsIG51bGxdXSwgeyBmb3JtOiBbMCwgXCJmb3JtXCJdIH0sIHsgbmdTdWJtaXQ6IFwibmdTdWJtaXRcIiB9KSwgaTEuybVwcmQoMjA0OCwgbnVsbCwgaTQuQ29udHJvbENvbnRhaW5lciwgbnVsbCwgW2k0LkZvcm1Hcm91cERpcmVjdGl2ZV0pLCBpMS7JtWRpZCg3LCAxNjM4NCwgbnVsbCwgMCwgaTQuTmdDb250cm9sU3RhdHVzR3JvdXAsIFtpNC5Db250cm9sQ29udGFpbmVyXSwgbnVsbCwgbnVsbCksIGkxLsm1ZGlkKDgsIDE2Mzg0LCBudWxsLCAwLCBpMy5NYXREaWFsb2dDb250ZW50LCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDksIDAsIG51bGwsIG51bGwsIDIwLCBcIm1hdC1mb3JtLWZpZWxkXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybS1yb3cgbWF0LWlucHV0LWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZFwiXV0sIFtbMiwgXCJtYXQtaW5wdXQtaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0XCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWhpZGUtcGxhY2Vob2xkZXJcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9jdXNlZFwiLCBudWxsXSwgWzIsIFwibWF0LXByaW1hcnlcIiwgbnVsbF0sIFsyLCBcIm1hdC1hY2NlbnRcIiwgbnVsbF0sIFsyLCBcIm1hdC13YXJuXCIsIG51bGxdLCBbMiwgXCJuZy11bnRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXByaXN0aW5lXCIsIG51bGxdLCBbMiwgXCJuZy1kaXJ0eVwiLCBudWxsXSwgWzIsIFwibmctdmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLXBlbmRpbmdcIiwgbnVsbF1dLCBudWxsLCBudWxsLCBpNS5WaWV3X01hdEZvcm1GaWVsZF8wLCBpNS5SZW5kZXJUeXBlX01hdEZvcm1GaWVsZCkpLCBpMS7JtWRpZCgxMCwgNzM4OTE4NCwgbnVsbCwgNywgaTIuTWF0Rm9ybUZpZWxkLCBbaTEuRWxlbWVudFJlZiwgaTEuQ2hhbmdlRGV0ZWN0b3JSZWYsIFsyLCBpNi5NQVRfTEFCRUxfR0xPQkFMX09QVElPTlNdXSwgbnVsbCwgbnVsbCksIGkxLsm1cXVkKDMzNTU0NDMyMCwgMSwgeyBfY29udHJvbDogMCB9KSwgaTEuybVxdWQoMzM1NTQ0MzIwLCAyLCB7IF9wbGFjZWhvbGRlckNoaWxkOiAwIH0pLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDMsIHsgX2xhYmVsQ2hpbGQ6IDAgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgNCwgeyBfZXJyb3JDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCA1LCB7IF9oaW50Q2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgNiwgeyBfcHJlZml4Q2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgNywgeyBfc3VmZml4Q2hpbGRyZW46IDEgfSksIChfbCgpKCksIGkxLsm1ZWxkKDE4LCAwLCBudWxsLCAxLCA3LCBcImlucHV0XCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1pbnB1dC1lbGVtZW50IG1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2xcIl0sIFtcImZvcm1Db250cm9sTmFtZVwiLCBcImVtYWlsXCJdLCBbXCJtYXRJbnB1dFwiLCBcIlwiXSwgW1wicGxhY2Vob2xkZXJcIiwgXCJFLW1haWxcIl0sIFtcInR5cGVcIiwgXCJ0ZXh0XCJdXSwgW1syLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXSwgWzIsIFwibWF0LWlucHV0LXNlcnZlclwiLCBudWxsXSwgWzEsIFwiaWRcIiwgMF0sIFs4LCBcInBsYWNlaG9sZGVyXCIsIDBdLCBbOCwgXCJkaXNhYmxlZFwiLCAwXSwgWzgsIFwicmVxdWlyZWRcIiwgMF0sIFs4LCBcInJlYWRPbmx5XCIsIDBdLCBbMSwgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIDBdLCBbMSwgXCJhcmlhLWludmFsaWRcIiwgMF0sIFsxLCBcImFyaWEtcmVxdWlyZWRcIiwgMF1dLCBbW251bGwsIFwiaW5wdXRcIl0sIFtudWxsLCBcImJsdXJcIl0sIFtudWxsLCBcImNvbXBvc2l0aW9uc3RhcnRcIl0sIFtudWxsLCBcImNvbXBvc2l0aW9uZW5kXCJdLCBbbnVsbCwgXCJmb2N1c1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJpbnB1dFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMTkpLl9oYW5kbGVJbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImJsdXJcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzEgPSAoaTEuybVub3YoX3YsIDE5KS5vblRvdWNoZWQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzEgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImNvbXBvc2l0aW9uc3RhcnRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzIgPSAoaTEuybVub3YoX3YsIDE5KS5fY29tcG9zaXRpb25TdGFydCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiY29tcG9zaXRpb25lbmRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzMgPSAoaTEuybVub3YoX3YsIDE5KS5fY29tcG9zaXRpb25FbmQoJGV2ZW50LnRhcmdldC52YWx1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8zICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJibHVyXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF80ID0gKGkxLsm1bm92KF92LCAyNCkuX2ZvY3VzQ2hhbmdlZChmYWxzZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF80ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJmb2N1c1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNSA9IChpMS7JtW5vdihfdiwgMjQpLl9mb2N1c0NoYW5nZWQodHJ1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF81ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJpbnB1dFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNiA9IChpMS7JtW5vdihfdiwgMjQpLl9vbklucHV0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF82ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxOSwgMTYzODQsIG51bGwsIDAsIGk0LkRlZmF1bHRWYWx1ZUFjY2Vzc29yLCBbaTEuUmVuZGVyZXIyLCBpMS5FbGVtZW50UmVmLCBbMiwgaTQuQ09NUE9TSVRJT05fQlVGRkVSX01PREVdXSwgbnVsbCwgbnVsbCksIGkxLsm1cHJkKDEwMjQsIG51bGwsIGk0Lk5HX1ZBTFVFX0FDQ0VTU09SLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTQuRGVmYXVsdFZhbHVlQWNjZXNzb3JdKSwgaTEuybVkaWQoMjEsIDY3MTc0NCwgbnVsbCwgMCwgaTQuRm9ybUNvbnRyb2xOYW1lLCBbWzMsIGk0LkNvbnRyb2xDb250YWluZXJdLCBbOCwgbnVsbF0sIFs4LCBudWxsXSwgWzIsIGk0Lk5HX1ZBTFVFX0FDQ0VTU09SXV0sIHsgbmFtZTogWzAsIFwibmFtZVwiXSB9LCBudWxsKSwgaTEuybVwcmQoMjA0OCwgbnVsbCwgaTQuTmdDb250cm9sLCBudWxsLCBbaTQuRm9ybUNvbnRyb2xOYW1lXSksIGkxLsm1ZGlkKDIzLCAxNjM4NCwgbnVsbCwgMCwgaTQuTmdDb250cm9sU3RhdHVzLCBbaTQuTmdDb250cm9sXSwgbnVsbCwgbnVsbCksIGkxLsm1ZGlkKDI0LCA5MzM4ODgsIG51bGwsIDAsIGk3Lk1hdElucHV0LCBbaTEuRWxlbWVudFJlZiwgaTguUGxhdGZvcm0sIFsyLCBpNC5OZ0NvbnRyb2xdLCBbMiwgaTQuTmdGb3JtXSwgWzIsIGk0LkZvcm1Hcm91cERpcmVjdGl2ZV0sIGk2LkVycm9yU3RhdGVNYXRjaGVyLCBbOCwgbnVsbF1dLCB7IHBsYWNlaG9sZGVyOiBbMCwgXCJwbGFjZWhvbGRlclwiXSwgdHlwZTogWzEsIFwidHlwZVwiXSB9LCBudWxsKSwgaTEuybVwcmQoMjA0OCwgW1sxLCA0XV0sIGkyLk1hdEZvcm1GaWVsZENvbnRyb2wsIG51bGwsIFtpNy5NYXRJbnB1dF0pLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgNSwgMSwgbnVsbCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzEpKSwgaTEuybVkaWQoMjcsIDE2Mzg0LCBudWxsLCAwLCBpOS5OZ0lmLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWZdLCB7IG5nSWY6IFswLCBcIm5nSWZcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCA1LCAxLCBudWxsLCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMikpLCBpMS7JtWRpZCgyOSwgMTYzODQsIG51bGwsIDAsIGk5Lk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMzAsIDAsIG51bGwsIG51bGwsIDE4LCBcIm1hdC1mb3JtLWZpZWxkXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybS1yb3cgbWF0LWlucHV0LWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZFwiXV0sIFtbMiwgXCJtYXQtaW5wdXQtaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0XCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWhpZGUtcGxhY2Vob2xkZXJcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9jdXNlZFwiLCBudWxsXSwgWzIsIFwibWF0LXByaW1hcnlcIiwgbnVsbF0sIFsyLCBcIm1hdC1hY2NlbnRcIiwgbnVsbF0sIFsyLCBcIm1hdC13YXJuXCIsIG51bGxdLCBbMiwgXCJuZy11bnRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXByaXN0aW5lXCIsIG51bGxdLCBbMiwgXCJuZy1kaXJ0eVwiLCBudWxsXSwgWzIsIFwibmctdmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLXBlbmRpbmdcIiwgbnVsbF1dLCBudWxsLCBudWxsLCBpNS5WaWV3X01hdEZvcm1GaWVsZF8wLCBpNS5SZW5kZXJUeXBlX01hdEZvcm1GaWVsZCkpLCBpMS7JtWRpZCgzMSwgNzM4OTE4NCwgbnVsbCwgNywgaTIuTWF0Rm9ybUZpZWxkLCBbaTEuRWxlbWVudFJlZiwgaTEuQ2hhbmdlRGV0ZWN0b3JSZWYsIFsyLCBpNi5NQVRfTEFCRUxfR0xPQkFMX09QVElPTlNdXSwgbnVsbCwgbnVsbCksIGkxLsm1cXVkKDMzNTU0NDMyMCwgOCwgeyBfY29udHJvbDogMCB9KSwgaTEuybVxdWQoMzM1NTQ0MzIwLCA5LCB7IF9wbGFjZWhvbGRlckNoaWxkOiAwIH0pLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDEwLCB7IF9sYWJlbENoaWxkOiAwIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDExLCB7IF9lcnJvckNoaWxkcmVuOiAxIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDEyLCB7IF9oaW50Q2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgMTMsIHsgX3ByZWZpeENoaWxkcmVuOiAxIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDE0LCB7IF9zdWZmaXhDaGlsZHJlbjogMSB9KSwgKF9sKCkoKSwgaTEuybVlbGQoMzksIDAsIG51bGwsIDEsIDcsIFwiaW5wdXRcIiwgW1tcImNsYXNzXCIsIFwibWF0LWlucHV0LWVsZW1lbnQgbWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbFwiXSwgW1wiZm9ybUNvbnRyb2xOYW1lXCIsIFwicGFzc3dvcmRcIl0sIFtcIm1hdElucHV0XCIsIFwiXCJdLCBbXCJwbGFjZWhvbGRlclwiLCBcIlBhc3N3b3JkXCJdLCBbXCJ0eXBlXCIsIFwicGFzc3dvcmRcIl1dLCBbWzIsIFwibmctdW50b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy10b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy1wcmlzdGluZVwiLCBudWxsXSwgWzIsIFwibmctZGlydHlcIiwgbnVsbF0sIFsyLCBcIm5nLXZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1wZW5kaW5nXCIsIG51bGxdLCBbMiwgXCJtYXQtaW5wdXQtc2VydmVyXCIsIG51bGxdLCBbMSwgXCJpZFwiLCAwXSwgWzgsIFwicGxhY2Vob2xkZXJcIiwgMF0sIFs4LCBcImRpc2FibGVkXCIsIDBdLCBbOCwgXCJyZXF1aXJlZFwiLCAwXSwgWzgsIFwicmVhZE9ubHlcIiwgMF0sIFsxLCBcImFyaWEtZGVzY3JpYmVkYnlcIiwgMF0sIFsxLCBcImFyaWEtaW52YWxpZFwiLCAwXSwgWzEsIFwiYXJpYS1yZXF1aXJlZFwiLCAwXV0sIFtbbnVsbCwgXCJpbnB1dFwiXSwgW251bGwsIFwiYmx1clwiXSwgW251bGwsIFwiY29tcG9zaXRpb25zdGFydFwiXSwgW251bGwsIFwiY29tcG9zaXRpb25lbmRcIl0sIFtudWxsLCBcImZvY3VzXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImlucHV0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCA0MCkuX2hhbmRsZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiYmx1clwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMSA9IChpMS7JtW5vdihfdiwgNDApLm9uVG91Y2hlZCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMSAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiY29tcG9zaXRpb25zdGFydFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMiA9IChpMS7JtW5vdihfdiwgNDApLl9jb21wb3NpdGlvblN0YXJ0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8yICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJjb21wb3NpdGlvbmVuZFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMyA9IChpMS7JtW5vdihfdiwgNDApLl9jb21wb3NpdGlvbkVuZCgkZXZlbnQudGFyZ2V0LnZhbHVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzMgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImJsdXJcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzQgPSAoaTEuybVub3YoX3YsIDQ1KS5fZm9jdXNDaGFuZ2VkKGZhbHNlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzQgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImZvY3VzXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF81ID0gKGkxLsm1bm92KF92LCA0NSkuX2ZvY3VzQ2hhbmdlZCh0cnVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzUgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImlucHV0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF82ID0gKGkxLsm1bm92KF92LCA0NSkuX29uSW5wdXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzYgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDQwLCAxNjM4NCwgbnVsbCwgMCwgaTQuRGVmYXVsdFZhbHVlQWNjZXNzb3IsIFtpMS5SZW5kZXJlcjIsIGkxLkVsZW1lbnRSZWYsIFsyLCBpNC5DT01QT1NJVElPTl9CVUZGRVJfTU9ERV1dLCBudWxsLCBudWxsKSwgaTEuybVwcmQoMTAyNCwgbnVsbCwgaTQuTkdfVkFMVUVfQUNDRVNTT1IsIGZ1bmN0aW9uIChwMF8wKSB7IHJldHVybiBbcDBfMF07IH0sIFtpNC5EZWZhdWx0VmFsdWVBY2Nlc3Nvcl0pLCBpMS7JtWRpZCg0MiwgNjcxNzQ0LCBudWxsLCAwLCBpNC5Gb3JtQ29udHJvbE5hbWUsIFtbMywgaTQuQ29udHJvbENvbnRhaW5lcl0sIFs4LCBudWxsXSwgWzgsIG51bGxdLCBbMiwgaTQuTkdfVkFMVUVfQUNDRVNTT1JdXSwgeyBuYW1lOiBbMCwgXCJuYW1lXCJdIH0sIG51bGwpLCBpMS7JtXByZCgyMDQ4LCBudWxsLCBpNC5OZ0NvbnRyb2wsIG51bGwsIFtpNC5Gb3JtQ29udHJvbE5hbWVdKSwgaTEuybVkaWQoNDQsIDE2Mzg0LCBudWxsLCAwLCBpNC5OZ0NvbnRyb2xTdGF0dXMsIFtpNC5OZ0NvbnRyb2xdLCBudWxsLCBudWxsKSwgaTEuybVkaWQoNDUsIDkzMzg4OCwgbnVsbCwgMCwgaTcuTWF0SW5wdXQsIFtpMS5FbGVtZW50UmVmLCBpOC5QbGF0Zm9ybSwgWzIsIGk0Lk5nQ29udHJvbF0sIFsyLCBpNC5OZ0Zvcm1dLCBbMiwgaTQuRm9ybUdyb3VwRGlyZWN0aXZlXSwgaTYuRXJyb3JTdGF0ZU1hdGNoZXIsIFs4LCBudWxsXV0sIHsgcGxhY2Vob2xkZXI6IFswLCBcInBsYWNlaG9sZGVyXCJdLCB0eXBlOiBbMSwgXCJ0eXBlXCJdIH0sIG51bGwpLCBpMS7JtXByZCgyMDQ4LCBbWzgsIDRdXSwgaTIuTWF0Rm9ybUZpZWxkQ29udHJvbCwgbnVsbCwgW2k3Lk1hdElucHV0XSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCA1LCAxLCBudWxsLCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMykpLCBpMS7JtWRpZCg0OCwgMTYzODQsIG51bGwsIDAsIGk5Lk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNDksIDAsIG51bGwsIG51bGwsIDAsIFwiaW5wdXRcIiwgW1tcImhpZGRlblwiLCBcIlwiXSwgW1widHlwZVwiLCBcInN1Ym1pdFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNTAsIDAsIG51bGwsIG51bGwsIDUsIFwibWF0LWRpYWxvZy1hY3Rpb25zXCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1kaWFsb2ctYWN0aW9uc1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoNTEsIDE2Mzg0LCBudWxsLCAwLCBpMy5NYXREaWFsb2dBY3Rpb25zLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDUyLCAwLCBudWxsLCBudWxsLCAzLCBcImJ1dHRvblwiLCBbW1wiY2xhc3NcIiwgXCJhdXRoLWZvcm0tYnV0dG9uIG1hdC1idXR0b25cIl0sIFtcImNvbG9yXCIsIFwicHJpbWFyeVwiXSwgW1wibWF0LWJ1dHRvblwiLCBcIlwiXSwgW1widHlwZVwiLCBcInN1Ym1pdFwiXV0sIFtbOCwgXCJkaXNhYmxlZFwiLCAwXV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfY28gPSBfdi5jb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoX2NvLm9uU3VibWl0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgaTEwLlZpZXdfTWF0QnV0dG9uXzAsIGkxMC5SZW5kZXJUeXBlX01hdEJ1dHRvbikpLCBpMS7JtWRpZCg1MywgMTgwMjI0LCBudWxsLCAwLCBpMTEuTWF0QnV0dG9uLCBbaTEuRWxlbWVudFJlZiwgaTguUGxhdGZvcm0sIGkxMi5Gb2N1c01vbml0b3JdLCB7IGRpc2FibGVkOiBbMCwgXCJkaXNhYmxlZFwiXSwgY29sb3I6IFsxLCBcImNvbG9yXCJdIH0sIG51bGwpLCBpMS7JtWRpZCg1NCwgMTYzODQsIG51bGwsIDAsIGkxMS5NYXRCdXR0b25Dc3NNYXRTdHlsZXIsIFtdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIDAsIFtcIlN1Ym1pdFwiXSkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgX2NrKF92LCAxLCAwKTsgdmFyIGN1cnJWYWxfOCA9IF9jby5hdXRoRm9ybTsgX2NrKF92LCA1LCAwLCBjdXJyVmFsXzgpOyB2YXIgY3VyclZhbF80MiA9IFwiZW1haWxcIjsgX2NrKF92LCAyMSwgMCwgY3VyclZhbF80Mik7IHZhciBjdXJyVmFsXzQzID0gXCJFLW1haWxcIjsgdmFyIGN1cnJWYWxfNDQgPSBcInRleHRcIjsgX2NrKF92LCAyNCwgMCwgY3VyclZhbF80MywgY3VyclZhbF80NCk7IHZhciBjdXJyVmFsXzQ1ID0gX2NvLmF1dGhGb3JtLmNvbnRyb2xzLmVtYWlsLmhhc0Vycm9yKFwicmVxdWlyZWRcIik7IF9jayhfdiwgMjcsIDAsIGN1cnJWYWxfNDUpOyB2YXIgY3VyclZhbF80NiA9IF9jby5hdXRoRm9ybS5jb250cm9scy5lbWFpbC5oYXNFcnJvcihcImVtYWlsXCIpOyBfY2soX3YsIDI5LCAwLCBjdXJyVmFsXzQ2KTsgdmFyIGN1cnJWYWxfODAgPSBcInBhc3N3b3JkXCI7IF9jayhfdiwgNDIsIDAsIGN1cnJWYWxfODApOyB2YXIgY3VyclZhbF84MSA9IFwiUGFzc3dvcmRcIjsgdmFyIGN1cnJWYWxfODIgPSBcInBhc3N3b3JkXCI7IF9jayhfdiwgNDUsIDAsIGN1cnJWYWxfODEsIGN1cnJWYWxfODIpOyB2YXIgY3VyclZhbF84MyA9IF9jby5hdXRoRm9ybS5jb250cm9scy5wYXNzd29yZC5oYXNFcnJvcihcInJlcXVpcmVkXCIpOyBfY2soX3YsIDQ4LCAwLCBjdXJyVmFsXzgzKTsgdmFyIGN1cnJWYWxfODUgPSBfY28uYXV0aEZvcm0uaW52YWxpZDsgdmFyIGN1cnJWYWxfODYgPSBcInByaW1hcnlcIjsgX2NrKF92LCA1MywgMCwgY3VyclZhbF84NSwgY3VyclZhbF84Nik7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMSkuaWQ7IF9jayhfdiwgMCwgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzVW50b3VjaGVkOyB2YXIgY3VyclZhbF8yID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NUb3VjaGVkOyB2YXIgY3VyclZhbF8zID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NQcmlzdGluZTsgdmFyIGN1cnJWYWxfNCA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzRGlydHk7IHZhciBjdXJyVmFsXzUgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1ZhbGlkOyB2YXIgY3VyclZhbF82ID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NJbnZhbGlkOyB2YXIgY3VyclZhbF83ID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NQZW5kaW5nOyBfY2soX3YsIDMsIDAsIGN1cnJWYWxfMSwgY3VyclZhbF8yLCBjdXJyVmFsXzMsIGN1cnJWYWxfNCwgY3VyclZhbF81LCBjdXJyVmFsXzYsIGN1cnJWYWxfNyk7IHZhciBjdXJyVmFsXzkgPSBpMS7JtW5vdihfdiwgMTApLl9jb250cm9sLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzEwID0gaTEuybVub3YoX3YsIDEwKS5fY29udHJvbC5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF8xMSA9IGkxLsm1bm92KF92LCAxMCkuX2NhbkxhYmVsRmxvYXQ7IHZhciBjdXJyVmFsXzEyID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkTGFiZWxGbG9hdCgpOyB2YXIgY3VyclZhbF8xMyA9IGkxLsm1bm92KF92LCAxMCkuX2hpZGVDb250cm9sUGxhY2Vob2xkZXIoKTsgdmFyIGN1cnJWYWxfMTQgPSBpMS7JtW5vdihfdiwgMTApLl9jb250cm9sLmRpc2FibGVkOyB2YXIgY3VyclZhbF8xNSA9IGkxLsm1bm92KF92LCAxMCkuX2NvbnRyb2wuZm9jdXNlZDsgdmFyIGN1cnJWYWxfMTYgPSAoaTEuybVub3YoX3YsIDEwKS5jb2xvciA9PSBcInByaW1hcnlcIik7IHZhciBjdXJyVmFsXzE3ID0gKGkxLsm1bm92KF92LCAxMCkuY29sb3IgPT0gXCJhY2NlbnRcIik7IHZhciBjdXJyVmFsXzE4ID0gKGkxLsm1bm92KF92LCAxMCkuY29sb3IgPT0gXCJ3YXJuXCIpOyB2YXIgY3VyclZhbF8xOSA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJ1bnRvdWNoZWRcIik7IHZhciBjdXJyVmFsXzIwID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInRvdWNoZWRcIik7IHZhciBjdXJyVmFsXzIxID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInByaXN0aW5lXCIpOyB2YXIgY3VyclZhbF8yMiA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKTsgdmFyIGN1cnJWYWxfMjMgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwidmFsaWRcIik7IHZhciBjdXJyVmFsXzI0ID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcImludmFsaWRcIik7IHZhciBjdXJyVmFsXzI1ID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInBlbmRpbmdcIik7IF9jayhfdiwgOSwgMSwgW2N1cnJWYWxfOSwgY3VyclZhbF8xMCwgY3VyclZhbF8xMSwgY3VyclZhbF8xMiwgY3VyclZhbF8xMywgY3VyclZhbF8xNCwgY3VyclZhbF8xNSwgY3VyclZhbF8xNiwgY3VyclZhbF8xNywgY3VyclZhbF8xOCwgY3VyclZhbF8xOSwgY3VyclZhbF8yMCwgY3VyclZhbF8yMSwgY3VyclZhbF8yMiwgY3VyclZhbF8yMywgY3VyclZhbF8yNCwgY3VyclZhbF8yNV0pOyB2YXIgY3VyclZhbF8yNiA9IGkxLsm1bm92KF92LCAyMykubmdDbGFzc1VudG91Y2hlZDsgdmFyIGN1cnJWYWxfMjcgPSBpMS7JtW5vdihfdiwgMjMpLm5nQ2xhc3NUb3VjaGVkOyB2YXIgY3VyclZhbF8yOCA9IGkxLsm1bm92KF92LCAyMykubmdDbGFzc1ByaXN0aW5lOyB2YXIgY3VyclZhbF8yOSA9IGkxLsm1bm92KF92LCAyMykubmdDbGFzc0RpcnR5OyB2YXIgY3VyclZhbF8zMCA9IGkxLsm1bm92KF92LCAyMykubmdDbGFzc1ZhbGlkOyB2YXIgY3VyclZhbF8zMSA9IGkxLsm1bm92KF92LCAyMykubmdDbGFzc0ludmFsaWQ7IHZhciBjdXJyVmFsXzMyID0gaTEuybVub3YoX3YsIDIzKS5uZ0NsYXNzUGVuZGluZzsgdmFyIGN1cnJWYWxfMzMgPSBpMS7JtW5vdihfdiwgMjQpLl9pc1NlcnZlcjsgdmFyIGN1cnJWYWxfMzQgPSBpMS7JtW5vdihfdiwgMjQpLmlkOyB2YXIgY3VyclZhbF8zNSA9IGkxLsm1bm92KF92LCAyNCkucGxhY2Vob2xkZXI7IHZhciBjdXJyVmFsXzM2ID0gaTEuybVub3YoX3YsIDI0KS5kaXNhYmxlZDsgdmFyIGN1cnJWYWxfMzcgPSBpMS7JtW5vdihfdiwgMjQpLnJlcXVpcmVkOyB2YXIgY3VyclZhbF8zOCA9IGkxLsm1bm92KF92LCAyNCkucmVhZG9ubHk7IHZhciBjdXJyVmFsXzM5ID0gKGkxLsm1bm92KF92LCAyNCkuX2FyaWFEZXNjcmliZWRieSB8fCBudWxsKTsgdmFyIGN1cnJWYWxfNDAgPSBpMS7JtW5vdihfdiwgMjQpLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzQxID0gaTEuybVub3YoX3YsIDI0KS5yZXF1aXJlZC50b1N0cmluZygpOyBfY2soX3YsIDE4LCAxLCBbY3VyclZhbF8yNiwgY3VyclZhbF8yNywgY3VyclZhbF8yOCwgY3VyclZhbF8yOSwgY3VyclZhbF8zMCwgY3VyclZhbF8zMSwgY3VyclZhbF8zMiwgY3VyclZhbF8zMywgY3VyclZhbF8zNCwgY3VyclZhbF8zNSwgY3VyclZhbF8zNiwgY3VyclZhbF8zNywgY3VyclZhbF8zOCwgY3VyclZhbF8zOSwgY3VyclZhbF80MCwgY3VyclZhbF80MV0pOyB2YXIgY3VyclZhbF80NyA9IGkxLsm1bm92KF92LCAzMSkuX2NvbnRyb2wuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfNDggPSBpMS7JtW5vdihfdiwgMzEpLl9jb250cm9sLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzQ5ID0gaTEuybVub3YoX3YsIDMxKS5fY2FuTGFiZWxGbG9hdDsgdmFyIGN1cnJWYWxfNTAgPSBpMS7JtW5vdihfdiwgMzEpLl9zaG91bGRMYWJlbEZsb2F0KCk7IHZhciBjdXJyVmFsXzUxID0gaTEuybVub3YoX3YsIDMxKS5faGlkZUNvbnRyb2xQbGFjZWhvbGRlcigpOyB2YXIgY3VyclZhbF81MiA9IGkxLsm1bm92KF92LCAzMSkuX2NvbnRyb2wuZGlzYWJsZWQ7IHZhciBjdXJyVmFsXzUzID0gaTEuybVub3YoX3YsIDMxKS5fY29udHJvbC5mb2N1c2VkOyB2YXIgY3VyclZhbF81NCA9IChpMS7JtW5vdihfdiwgMzEpLmNvbG9yID09IFwicHJpbWFyeVwiKTsgdmFyIGN1cnJWYWxfNTUgPSAoaTEuybVub3YoX3YsIDMxKS5jb2xvciA9PSBcImFjY2VudFwiKTsgdmFyIGN1cnJWYWxfNTYgPSAoaTEuybVub3YoX3YsIDMxKS5jb2xvciA9PSBcIndhcm5cIik7IHZhciBjdXJyVmFsXzU3ID0gaTEuybVub3YoX3YsIDMxKS5fc2hvdWxkRm9yd2FyZChcInVudG91Y2hlZFwiKTsgdmFyIGN1cnJWYWxfNTggPSBpMS7JtW5vdihfdiwgMzEpLl9zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKTsgdmFyIGN1cnJWYWxfNTkgPSBpMS7JtW5vdihfdiwgMzEpLl9zaG91bGRGb3J3YXJkKFwicHJpc3RpbmVcIik7IHZhciBjdXJyVmFsXzYwID0gaTEuybVub3YoX3YsIDMxKS5fc2hvdWxkRm9yd2FyZChcImRpcnR5XCIpOyB2YXIgY3VyclZhbF82MSA9IGkxLsm1bm92KF92LCAzMSkuX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKTsgdmFyIGN1cnJWYWxfNjIgPSBpMS7JtW5vdihfdiwgMzEpLl9zaG91bGRGb3J3YXJkKFwiaW52YWxpZFwiKTsgdmFyIGN1cnJWYWxfNjMgPSBpMS7JtW5vdihfdiwgMzEpLl9zaG91bGRGb3J3YXJkKFwicGVuZGluZ1wiKTsgX2NrKF92LCAzMCwgMSwgW2N1cnJWYWxfNDcsIGN1cnJWYWxfNDgsIGN1cnJWYWxfNDksIGN1cnJWYWxfNTAsIGN1cnJWYWxfNTEsIGN1cnJWYWxfNTIsIGN1cnJWYWxfNTMsIGN1cnJWYWxfNTQsIGN1cnJWYWxfNTUsIGN1cnJWYWxfNTYsIGN1cnJWYWxfNTcsIGN1cnJWYWxfNTgsIGN1cnJWYWxfNTksIGN1cnJWYWxfNjAsIGN1cnJWYWxfNjEsIGN1cnJWYWxfNjIsIGN1cnJWYWxfNjNdKTsgdmFyIGN1cnJWYWxfNjQgPSBpMS7JtW5vdihfdiwgNDQpLm5nQ2xhc3NVbnRvdWNoZWQ7IHZhciBjdXJyVmFsXzY1ID0gaTEuybVub3YoX3YsIDQ0KS5uZ0NsYXNzVG91Y2hlZDsgdmFyIGN1cnJWYWxfNjYgPSBpMS7JtW5vdihfdiwgNDQpLm5nQ2xhc3NQcmlzdGluZTsgdmFyIGN1cnJWYWxfNjcgPSBpMS7JtW5vdihfdiwgNDQpLm5nQ2xhc3NEaXJ0eTsgdmFyIGN1cnJWYWxfNjggPSBpMS7JtW5vdihfdiwgNDQpLm5nQ2xhc3NWYWxpZDsgdmFyIGN1cnJWYWxfNjkgPSBpMS7JtW5vdihfdiwgNDQpLm5nQ2xhc3NJbnZhbGlkOyB2YXIgY3VyclZhbF83MCA9IGkxLsm1bm92KF92LCA0NCkubmdDbGFzc1BlbmRpbmc7IHZhciBjdXJyVmFsXzcxID0gaTEuybVub3YoX3YsIDQ1KS5faXNTZXJ2ZXI7IHZhciBjdXJyVmFsXzcyID0gaTEuybVub3YoX3YsIDQ1KS5pZDsgdmFyIGN1cnJWYWxfNzMgPSBpMS7JtW5vdihfdiwgNDUpLnBsYWNlaG9sZGVyOyB2YXIgY3VyclZhbF83NCA9IGkxLsm1bm92KF92LCA0NSkuZGlzYWJsZWQ7IHZhciBjdXJyVmFsXzc1ID0gaTEuybVub3YoX3YsIDQ1KS5yZXF1aXJlZDsgdmFyIGN1cnJWYWxfNzYgPSBpMS7JtW5vdihfdiwgNDUpLnJlYWRvbmx5OyB2YXIgY3VyclZhbF83NyA9IChpMS7JtW5vdihfdiwgNDUpLl9hcmlhRGVzY3JpYmVkYnkgfHwgbnVsbCk7IHZhciBjdXJyVmFsXzc4ID0gaTEuybVub3YoX3YsIDQ1KS5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF83OSA9IGkxLsm1bm92KF92LCA0NSkucmVxdWlyZWQudG9TdHJpbmcoKTsgX2NrKF92LCAzOSwgMSwgW2N1cnJWYWxfNjQsIGN1cnJWYWxfNjUsIGN1cnJWYWxfNjYsIGN1cnJWYWxfNjcsIGN1cnJWYWxfNjgsIGN1cnJWYWxfNjksIGN1cnJWYWxfNzAsIGN1cnJWYWxfNzEsIGN1cnJWYWxfNzIsIGN1cnJWYWxfNzMsIGN1cnJWYWxfNzQsIGN1cnJWYWxfNzUsIGN1cnJWYWxfNzYsIGN1cnJWYWxfNzcsIGN1cnJWYWxfNzgsIGN1cnJWYWxfNzldKTsgdmFyIGN1cnJWYWxfODQgPSAoaTEuybVub3YoX3YsIDUzKS5kaXNhYmxlZCB8fCBudWxsKTsgX2NrKF92LCA1MiwgMCwgY3VyclZhbF84NCk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImF1dGgtZGlhbG9nXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9BdXRoRGlhbG9nQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQ5MTUyLCBudWxsLCAwLCBpMTMuQXV0aERpYWxvZ0NvbXBvbmVudCwgW2kzLk1hdERpYWxvZ1JlZiwgaTQuRm9ybUJ1aWxkZXIsIGkzLk1BVF9ESUFMT0dfREFUQV0sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBBdXRoRGlhbG9nQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcImF1dGgtZGlhbG9nXCIsIGkxMy5BdXRoRGlhbG9nQ29tcG9uZW50LCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IEF1dGhEaWFsb2dDb21wb25lbnROZ0ZhY3RvcnkgYXMgQXV0aERpYWxvZ0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLmJqLWhlYWRlcntwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwcHg7ei1pbmRleDo5MDA7Ym94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwuMTIpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNCl9LmJqLWhlYWRlcl9fcm93LXdyYXBwZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDo1MCU7YmFja2dyb3VuZDojZmZmfS5iai1oZWFkZXJfX3Jvdy13cmFwcGVyLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tY29sb3ItbWFpbik7Y29sb3I6I2ZmZn0uYmotaGVhZGVyX19yb3d7bWFyZ2luOjAgYXV0bztoZWlnaHQ6MTAwJTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtkaXNwbGF5OmZsZXh9QG1lZGlhIChtaW4td2lkdGg6MTAwMHB4KXsuYmotaGVhZGVyX19yb3d7cGFkZGluZzowIDAgMCB2YXIoLS1pbmRlbnQtYmFzZSl9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmJqLWhlYWRlcl9fcm93e3BhZGRpbmc6MCB2YXIoLS1pbmRlbnQtZG91YmxlKX19LmJqLWhlYWRlcl9fYnV0dG9ue2hlaWdodDoxMDAlO3BhZGRpbmc6MCB2YXIoLS1pbmRlbnQtYmFzZSk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7Zm9udC1zdHlsZTpub3JtYWw7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzpub25lO2NvbG9yOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm93cmFwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zc30uYmotaGVhZGVyX19idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1ob3Zlci1saWdodCl9LmJqLWhlYWRlcl9fYnV0dG9uLS1pY29ue2ZvbnQtc2l6ZToxLjVyZW19LmJqLWhlYWRlcl9fYnV0dG9uLS1sb2dpbntkaXNwbGF5Om5vbmV9QG1lZGlhIChtaW4td2lkdGg6MTAwMHB4KXsuYmotaGVhZGVyX19idXR0b24tLW1lbnV7ZGlzcGxheTpub25lfS5iai1oZWFkZXJfX2J1dHRvbi0tbG9naW57ZGlzcGxheTpmbGV4fX0uYmotaGVhZGVyX19sb2dve2hlaWdodDo1NnB4O3dpZHRoOjU2cHg7bWFyZ2luOi0zcHggYXV0byAwO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOnZhcigtLWNvbG9yLW1haW4pO2JvcmRlcjozcHggc29saWQgI2ZmZjtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ei1pbmRleDo5OTk7Y3Vyc29yOnBvaW50ZXJ9LmJqLWhlYWRlcl9fbG9nbyBpbWd7aGVpZ2h0OjUwJTt3aWR0aDphdXRvO21hcmdpbi1sZWZ0Oi01JX1AbWVkaWEgKG1pbi13aWR0aDoxMDAwcHgpey5iai1oZWFkZXJfX2xvZ297aGVpZ2h0Ojk0cHg7d2lkdGg6OTRweDttYXJnaW46NHB4IHZhcigtLWluZGVudC1oYWxmKSAwIDB9fS5iai1oZWFkZXJfX25hdntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO3RvcDo1MHB4O2JvdHRvbTowO2hlaWdodDphdXRvO2xlZnQ6MCU7d2lkdGg6NzB2dzttYXgtd2lkdGg6MzAwcHg7bWFyZ2luLXJpZ2h0OmF1dG87YmFja2dyb3VuZDp2YXIoLS1jb2xvci1tYWluKTtjb2xvcjojZmZmO3otaW5kZXg6OTUwO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEwNSUpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zc30uYmotaGVhZGVyX19uYXYtLXNob3d7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwJSl9LmJqLWhlYWRlcl9fbmF2IC5iai1oZWFkZXJfX2J1dHRvbntoZWlnaHQ6NTBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjNTU1O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMxMTF9QG1lZGlhIChtaW4td2lkdGg6MTAwMHB4KXsuYmotaGVhZGVyX19uYXZ7cG9zaXRpb246c3RhdGljO2Rpc3BsYXk6ZmxleDt0cmFuc2Zvcm06bm9uZX0uYmotaGVhZGVyX19uYXYtLXNob3d7dHJhbnNmb3JtOm5vbmV9LmJqLWhlYWRlcl9fbmF2IC5iai1oZWFkZXJfX2J1dHRvbntib3JkZXItdG9wOjAgbm9uZTtib3JkZXItYm90dG9tOjAgbm9uZX19XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfY3VycmVuY2llc19yaWJib24uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfY3VycmVuY2llc19yaWJib24uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDUsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1jdXJyZW5jaWVzLXJpYmJvbl9faXRlbVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJpbWdcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJoNVwiLCBbW1wiY2xhc3NcIiwgXCJiai1jdXJyZW5jaWVzLXJpYmJvbl9faXRlbVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotY3VycmVuY2llcy1yaWJib25fX3JhdGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDQsIDAsIG51bGwsIG51bGwsIDAsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCAwLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImN1cnJlbmNpZXMtcmliYm9uXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJjdXJyZW5jaWVzLXJpYmJvblwiLCBpMi5DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCwgVmlld19DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgQ3VycmVuY2llc1JzaWJib25Db21wb25lbnROZ0ZhY3RvcnkgYXMgQ3VycmVuY2llc1JzaWJib25Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfaGVhZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX3JvdXRlcixfYW5ndWxhcl9jb21tb24sX2N1cnJlbmNpZXNfcmliYm9uX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2N1cnJlbmNpZXNfcmliYm9uX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudCxfaGVhZGVyLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9oZWFkZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfY3VycmVuY2llc19yaWJib25fY3VycmVuY2llc19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSxfY3VycmVuY2llc19yaWJib25fY3VycmVuY2llc19yaWJib24uY29tcG9uZW50LF9oZWFkZXIuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2hlYWRlci5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiLi4vY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uL2N1cnJlbmNpZXMtcmliYm9uL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19IZWFkZXJDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX0hlYWRlckNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19IZWFkZXJDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9IZWFkZXJDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9IZWFkZXJDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0hlYWRlckNvbXBvbmVudF8wKF9sKSB7XG4gICAgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxMywgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19yb3ctd3JhcHBlciBiai1oZWFkZXJfX3Jvdy13cmFwcGVyLS1kYXJrXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAxMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDEsIFwiYnV0dG9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fYnV0dG9uIGJqLWhlYWRlcl9fYnV0dG9uLS1pY29uIGJqLWhlYWRlcl9fYnV0dG9uLS1tZW51XCJdXSwgbnVsbCwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9jbyA9IF92LmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9ICgoX2NvLm5hdkJhclZpc2liaWxpdHkgPSAhX2NvLm5hdkJhclZpc2liaWxpdHkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMCwgXCJpXCIsIFtbXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIl0sIFtcImNsYXNzXCIsIFwiZmEgZmEtYmFyc1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fbG9nb1wiXSwgW1wicm91dGVyTGlua1wiLCBcIi9cIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCA1KS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDUsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJpbWdcIiwgW1tcImFsdFwiLCBcIkJpdEpvdXJuYWxcIl0sIFtcInNyY1wiLCBcIi9zdmcvbG9nby5zdmdcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDcsIDAsIG51bGwsIG51bGwsIDQsIFwibmF2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fbmF2XCJdXSwgW1syLCBcImJqLWhlYWRlcl9fbmF2LS1zaG93XCIsIG51bGxdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg4LCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyX19idXR0b25cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgOSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg5LCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDEwLCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MUJcXHUwNDM1XFx1MDQzRFxcdTA0NDJcXHUwNDMwXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDEyLCAwLCBudWxsLCBudWxsLCAxLCBcImJ1dHRvblwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX2J1dHRvbiBiai1oZWFkZXJfX2J1dHRvbi0taWNvblwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMTMsIDAsIG51bGwsIG51bGwsIDAsIFwiaVwiLCBbW1wiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCJdLCBbXCJjbGFzc1wiLCBcImZhIGZhLXNlYXJjaFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMTQsIDAsIG51bGwsIG51bGwsIDMsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlcl9fcm93LXdyYXBwZXJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDE1LCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJfX3Jvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMTYsIDAsIG51bGwsIG51bGwsIDEsIFwiY3VycmVuY2llcy1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGk0LlZpZXdfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnRfMCwgaTQuUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgxNywgMTE0Njg4LCBudWxsLCAwLCBpNS5DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCwgW2kyLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMiA9IFwiL1wiOyBfY2soX3YsIDUsIDAsIGN1cnJWYWxfMik7IHZhciBjdXJyVmFsXzYgPSBcIi9cIjsgX2NrKF92LCA5LCAwLCBjdXJyVmFsXzYpOyBfY2soX3YsIDE3LCAwKTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCA1KS50YXJnZXQ7IHZhciBjdXJyVmFsXzEgPSBpMS7JtW5vdihfdiwgNSkuaHJlZjsgX2NrKF92LCA0LCAwLCBjdXJyVmFsXzAsIGN1cnJWYWxfMSk7IHZhciBjdXJyVmFsXzMgPSBfY28ubmF2QmFyVmlzaWJpbGl0eTsgX2NrKF92LCA3LCAwLCBjdXJyVmFsXzMpOyB2YXIgY3VyclZhbF80ID0gaTEuybVub3YoX3YsIDkpLnRhcmdldDsgdmFyIGN1cnJWYWxfNSA9IGkxLsm1bm92KF92LCA5KS5ocmVmOyBfY2soX3YsIDgsIDAsIGN1cnJWYWxfNCwgY3VyclZhbF81KTsgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVmlld19IZWFkZXJDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19IZWFkZXJDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9IZWFkZXJDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpNi5IZWFkZXJDb21wb25lbnQsIFtpMi5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgSGVhZGVyQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcIi5iai1oZWFkZXJcIiwgaTYuSGVhZGVyQ29tcG9uZW50LCBWaWV3X0hlYWRlckNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgSGVhZGVyQ29tcG9uZW50TmdGYWN0b3J5IGFzIEhlYWRlckNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIuYmotZm9vdGVyLC5iai1mb290ZXJfX2xvZ297ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDp2YXIoLS1jb2xvci1tYWluKX0uYmotZm9vdGVye3BhZGRpbmc6MCAwIHZhcigtLWluZGVudC1kb3VibGUpO2NvbG9yOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0uYmotZm9vdGVyX19sb2dve3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTEwMHB4O3RvcDotMTAwcHg7aGVpZ2h0OjIwMHB4O3dpZHRoOjIwMHB4O2JvcmRlcjozcHggc29saWQgI2ZmZjtib3JkZXItcmFkaXVzOjUwJTt6LWluZGV4OjgwMDtjdXJzb3I6cG9pbnRlcn0uYmotZm9vdGVyX19sb2dvIGltZ3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMTlweDtsZWZ0OjEwN3B4O2hlaWdodDozOHB4O3dpZHRoOmF1dG99LmJqLWZvb3Rlcl9fbmF2e21hcmdpbjowIGF1dG87bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7cGFkZGluZzp2YXIoLS1pbmRlbnQtYmFzZSkgdmFyKC0taW5kZW50LWJhc2UpIHZhcigtLWluZGVudC1iYXNlKSBjYWxjKDEwMHB4ICsgdmFyKC0taW5kZW50LWJhc2UpKTttaW4taGVpZ2h0OjEwMHB4O2Rpc3BsYXk6YmxvY2t9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuYmotZm9vdGVyX19uYXZ7cGFkZGluZzp2YXIoLS1pbmRlbnQtYmFzZSkgdmFyKC0taW5kZW50LWRvdWJsZSkgdmFyKC0taW5kZW50LWJhc2UpIGNhbGMoMTAwcHggKyB2YXIoLS1pbmRlbnQtZG91YmxlKSl9fS5iai1mb290ZXJfX25hdl9fcm93e3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5iai1mb290ZXJfX25hdl9faXRlbXttYXJnaW46MCAwIDFlbSAxZW07Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmZjtwYWRkaW5nLWJvdHRvbTouMWVtO3RleHQtdHJhbnNmb3JtOm5vbmU7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTAwJTtmb250LXN0eWxlOm5vcm1hbDtjb2xvcjppbmhlcml0O3doaXRlLXNwYWNlOm5vd3JhcH0uYmotZm9vdGVyX19uYXZfX2l0ZW06Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0uYmotZm9vdGVyX19uYXZfX2l0ZW0tLWRvbmF0ZXtjb2xvcjojZWY2YzAwO2JvcmRlci1ib3R0b20tY29sb3I6I2VmNmMwMH0uYmotZm9vdGVyX19yb3d7bWFyZ2luLXRvcDowIGF1dG87bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7cGFkZGluZzowIHZhcigtLWluZGVudC1oYWxmKTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfUBtZWRpYSAobWluLXdpZHRoOjEwMDBweCl7LmJqLWZvb3Rlcl9fcm93e2ZsZXgtd3JhcDpub3dyYXB9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmJqLWZvb3Rlcl9fcm93e3BhZGRpbmc6MCBjYWxjKHZhcigtLWluZGVudC1iYXNlKSArIHZhcigtLWluZGVudC1oYWxmKSl9fS5iai1mb290ZXJfX2NvbHtvcmRlcjoyO3dpZHRoOjIwMHB4O2ZsZXg6MCAwIDIwMHB4O21hcmdpbjp2YXIoLS1pbmRlbnQtaGFsZik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5iai1mb290ZXJfX2NvbDpsYXN0LWNoaWxke3dpZHRoOmF1dG87ZmxleDoxIDEgYXV0bzt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOmNhbGModmFyKC0taW5kZW50LWJhc2UpICsgdmFyKC0taW5kZW50LWhhbGYpKX1AbWVkaWEgKG1pbi13aWR0aDoxMDAwcHgpey5iai1mb290ZXJfX2NvbDpsYXN0LWNoaWxke29yZGVyOjE7bWFyZ2luLXRvcDp2YXIoLS1pbmRlbnQtaGFsZik7bWFyZ2luLXJpZ2h0OmF1dG87dGV4dC1hbGlnbjpsZWZ0fX0uYmotZm9vdGVyX19jb2w+cHtwYWRkaW5nOjAgdmFyKC0taW5kZW50LWJhc2UpIDAgMDttYXJnaW46MCAwIHZhcigtLWluZGVudC1oYWxmKTtsaW5lLWhlaWdodDoxLjR9LmJqLWZvb3Rlcl9fY29sX193aWRnZXR7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czozcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5iai1mb290ZXJfX2NvbF9fd2lkZ2V0Ky5iai1mb290ZXJfX2NvbF9fd2lkZ2V0e21hcmdpbi10b3A6dmFyKC0taW5kZW50LWJhc2UpfS5iai1mb290ZXJfX2JvdHRvbXttYXJnaW46MCBhdXRvO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO3BhZGRpbmc6MCB2YXIoLS1pbmRlbnQtYmFzZSk7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpjZW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuYmotZm9vdGVyX19ib3R0b217cGFkZGluZzowIHZhcigtLWluZGVudC1kb3VibGUpfX0uYmotZm9vdGVyX19ib3R0b20gYSwuYmotZm9vdGVyX19ib3R0b21fX2NvcHlyaWdodHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDozMDA7d2hpdGUtc3BhY2U6bm93cmFwO21hcmdpbi10b3A6dmFyKC0taW5kZW50LWJhc2UpfS5iai1mb290ZXJfX2JvdHRvbSBhe3RleHQtdHJhbnNmb3JtOm5vbmU7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOm5vcm1hbDtjb2xvcjppbmhlcml0O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmY7cGFkZGluZy1ib3R0b206LjFlbX0uYmotZm9vdGVyX19ib3R0b20gc3BhbnttYXJnaW46dmFyKC0taW5kZW50LWJhc2UpIDFlbSAwfS5iai1mb290ZXJfX2JvdHRvbV9fY29weXJpZ2h0e2ZsZXg6MCAwIDEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6NjAwcHgpey5iai1mb290ZXJfX2JvdHRvbV9fY29weXJpZ2h0e2ZsZXgtYmFzaXM6YXV0bzttYXJnaW4tbGVmdDphdXRvfX0uYmotZm9vdGVyX190ZWxlZ3JhbXtoZWlnaHQ6MjhweDtwYWRkaW5nOjAgLjdlbTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTpub25lO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoxO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOiMwOGM7Ym9yZGVyLXJhZGl1czozcHh9LmJqLWZvb3Rlcl9fdGVsZWdyYW0gc3Zne3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bWFyZ2luLXJpZ2h0Oi43ZW19LmJqLWZvb3Rlcl9fdGVsZWdyYW0gcGF0aHtmaWxsOmN1cnJlbnRDb2xvcn1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9mb290ZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbixfZm9vdGVyLmNvbXBvbmVudCxfLi5fc2VydmljZXNfc29jaWFsX3NvY2lhbC5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2Zvb3Rlci5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9yb3V0ZXIsX2FuZ3VsYXJfY29tbW9uLF9mb290ZXIuY29tcG9uZW50LF8uLl9zZXJ2aWNlc19zb2NpYWxfc29jaWFsLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vZm9vdGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb2NpYWwvc29jaWFsLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfRm9vdGVyQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9Gb290ZXJDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfRm9vdGVyQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19Gb290ZXJDb21wb25lbnRfMChfbCkge1xuICAgIHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMjIsIFwibmF2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCA0LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9fcm93XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19uYXZfX2l0ZW1cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMykub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgzLCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDQsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxQlxcdTA0MzVcXHUwNDNEXFx1MDQ0MlxcdTA0MzBcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNiwgMCwgbnVsbCwgbnVsbCwgMTYsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2X19yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDcsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9hYm91dFwiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDgpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoOCwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MUUgXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQzNVxcdTA0M0FcXHUwNDQyXFx1MDQzNVwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgxMSwgMCwgbnVsbCwgbnVsbCwgMywgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fbmF2X19pdGVtXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL3N0YWZmXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMTIpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMTIsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMTMsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQ2XFx1MDQzOFxcdTA0NEZcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMTUsIDAsIG51bGwsIG51bGwsIDMsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX25hdl9faXRlbVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9hZHNcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxNikub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxNiwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgxNywgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDIwXFx1MDQzNVxcdTA0M0FcXHUwNDNCXFx1MDQzMFxcdTA0M0NcXHUwNDMwXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDE5LCAwLCBudWxsLCBudWxsLCAzLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19uYXZfX2l0ZW0gYmotZm9vdGVyX19uYXZfX2l0ZW0tLWRvbmF0ZVwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9kb25hdGVcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAyMCkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgyMCwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFGXFx1MDQzRVxcdTA0MzRcXHUwNDM0XFx1MDQzNVxcdTA0NDBcXHUwNDM2XFx1MDQzMFxcdTA0NDJcXHUwNDRDXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDIzLCAwLCBudWxsLCBudWxsLCAyOCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDI0LCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbCBiai1mb290ZXJfX2NvbC0td2lkZ2V0c1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMjUsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fY29sX193aWRnZXRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDI2LCAwLCBudWxsLCBudWxsLCAwLCBcImRpdlwiLCBbW1wiaWRcIiwgXCJ2a19ncm91cF92aWRnZXRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDI3LCAwLCBudWxsLCBudWxsLCA1LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbCBiai1mb290ZXJfX2NvbC0td2lkZ2V0c1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMjgsIDAsIG51bGwsIG51bGwsIDQsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fY29sX193aWRnZXRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDI5LCAwLCBudWxsLCBudWxsLCAzLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJmYi1wYWdlXCJdLCBbXCJkYXRhLWFkYXB0LWNvbnRhaW5lci13aWR0aFwiLCBcImZhbHNlXCJdLCBbXCJkYXRhLWhlaWdodFwiLCBcIjE2MFwiXSwgW1wiZGF0YS1oaWRlLWNvdmVyXCIsIFwidHJ1ZVwiXSwgW1wiZGF0YS1ocmVmXCIsIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2JpdGpvdXJuYWxPZmZpY2lhbC9cIl0sIFtcImRhdGEtc2hvdy1mYWNlcGlsZVwiLCBcImZhbHNlXCJdLCBbXCJkYXRhLXNtYWxsLWhlYWRlclwiLCBcImZhbHNlXCJdLCBbXCJkYXRhLXdpZHRoXCIsIFwiMjAwXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJibG9ja3F1b3RlXCIsIFtbXCJjaXRlXCIsIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2JpdGpvdXJuYWxPZmZpY2lhbC9cIl0sIFtcImNsYXNzXCIsIFwiZmIteGZibWwtcGFyc2UtaWdub3JlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJhXCIsIFtbXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2JpdGpvdXJuYWxPZmZpY2lhbC9cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJCaXRKb3VybmFsXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMzLCAwLCBudWxsLCBudWxsLCAxMSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19jb2wgYmotZm9vdGVyX19jb2wtLXdpZGdldHNcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDM0LCAwLCBudWxsLCBudWxsLCA1LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbF9fd2lkZ2V0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzNSwgMCwgbnVsbCwgbnVsbCwgNCwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlcl9fdGVsZWdyYW1cIl0sIFtcImhyZWZcIiwgXCJodHRwczovL3QubWUvYml0am91cm5hbF9pb1wiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzNiwgMCwgbnVsbCwgbnVsbCwgMSwgXCI6c3ZnOnN2Z1wiLCBbW1wiaGVpZ2h0XCIsIFwiMjRcIl0sIFtcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIl0sIFtcIndpZHRoXCIsIFwiMjRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDM3LCAwLCBudWxsLCBudWxsLCAwLCBcIjpzdmc6cGF0aFwiLCBbW1wiZFwiLCBcIk0uNCAxMS42bDUuNiAyIDIgN2MuMi4zLjguNSAxIC4ybDMuMi0yLjVjLjMtLjMuOC0uMyAxIDBsNS43IDRjLjMuMy44IDAgMS0uNGw0LTE5LjdjMC0uNS0uNC0xLTEtLjdMLjUgMTAuNGMtLjUuMi0uNSAxIDAgMS4yem03LjMgMWwxMC44LTYuOGMuMyAwIC41LjIuMy40bC05IDguMy0uNSAxTDkgMThjMCAuMy0uNS4zLS41IDBsLTEuMi00Yy0uMi0uNSAwLTEgLjQtMS4zelwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMzgsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiQml0Sm91cm5hbCBcXHUwNDMyIFxcdTA0MjJcXHUwNDM1XFx1MDQzQlxcdTA0MzVcXHUwNDMzXFx1MDQ0MFxcdTA0MzBcXHUwNDNDXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDQwLCAwLCBudWxsLCBudWxsLCAxLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbF9fd2lkZ2V0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0MSwgMCwgbnVsbCwgbnVsbCwgMCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiZy15dHN1YnNjcmliZVwiXSwgW1wiZGF0YS1jaGFubmVsaWRcIiwgXCJVQ2VPTFVlWU5jWURvczF3Y1RKVkxHbHdcIl0sIFtcImRhdGEtY291bnRcIiwgXCJkZWZhdWx0XCJdLCBbXCJkYXRhLWxheW91dFwiLCBcImRlZmF1bHRcIl0sIFtcImRhdGEtdGhlbWVcIiwgXCJkYXJrXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0MiwgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19jb2xfX3dpZGdldFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNDMsIDAsIG51bGwsIG51bGwsIDEsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJ0d2l0dGVyLWZvbGxvdy1idXR0b25cIl0sIFtcImRhdGEtc2hvdy1jb3VudFwiLCBcImZhbHNlXCJdLCBbXCJkYXRhLXNpemVcIiwgXCJsYXJnZVwiXSwgW1wiaHJlZlwiLCBcImh0dHBzOi8vdHdpdHRlci5jb20vYml0am91cm5hbF9pb1wiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiRm9sbG93IEBiaXRqb3VybmFsX2lvXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDQ1LCAwLCBudWxsLCBudWxsLCA2LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2NvbFwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNDYsIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxMlxcdTA0NDFcXHUwNDM1IFxcdTA0NDFcXHUwNDQxXFx1MDQ0QlxcdTA0M0JcXHUwNDNBXFx1MDQzOCBcXHUwNDNGXFx1MDQ0MFxcdTA0MzVcXHUwNDM0XFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzMFxcdTA0MzJcXHUwNDNCXFx1MDQ0RlxcdTA0NEVcXHUwNDQyXFx1MDQ0MVxcdTA0NEYgXFx1MDQzOFxcdTA0NDFcXHUwNDNBXFx1MDQzQlxcdTA0NEVcXHUwNDQ3XFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDNEXFx1MDQzRSBcXHUwNDM0XFx1MDQzQlxcdTA0NEYgXFx1MDQ0MVxcdTA0M0ZcXHUwNDQwXFx1MDQzMFxcdTA0MzJcXHUwNDNFXFx1MDQ0N1xcdTA0M0RcXHUwNDRCXFx1MDQ0NSBcXHUwNDQ2XFx1MDQzNVxcdTA0M0JcXHUwNDM1XFx1MDQzOS5cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNDgsIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiQml0Sm91cm5hbCBcXHUwNDNEXFx1MDQzNSBcXHUwNDNEXFx1MDQzNVxcdTA0NDFcXHUwNDM1XFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0MzVcXHUwNDNEXFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0MzggXFx1MDQzN1xcdTA0MzAgXFx1MDQ0MVxcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0NDBcXHUwNDM2XFx1MDQzOFxcdTA0M0NcXHUwNDNFXFx1MDQzNSBcXHUwNDMyXFx1MDQzRFxcdTA0MzVcXHUwNDQ4XFx1MDQzRFxcdTA0MzhcXHUwNDQ1IFxcdTA0MzhcXHUwNDNEXFx1MDQ0MlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0MzVcXHUwNDQyLVxcdTA0NDFcXHUwNDMwXFx1MDQzOVxcdTA0NDJcXHUwNDNFXFx1MDQzMi5cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNTAsIDAsIG51bGwsIG51bGwsIDEsIFwicFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRlxcdTA0NDBcXHUwNDM4IFxcdTA0MzhcXHUwNDQxXFx1MDQzRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzggXFx1MDQzQ1xcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDM4XFx1MDQzMFxcdTA0M0JcXHUwNDNFXFx1MDQzMiBcXHUwNDQxXFx1MDQzMFxcdTA0MzlcXHUwNDQyXFx1MDQzMCBcXHUwNDQxXFx1MDQ0MVxcdTA0NEJcXHUwNDNCXFx1MDQzQVxcdTA0MzAgXFx1MDQzRVxcdTA0MzFcXHUwNDRGXFx1MDQzN1xcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0MzAuXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDUyLCAwLCBudWxsLCBudWxsLCAxNCwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotZm9vdGVyX19ib3R0b21cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDUzLCAwLCBudWxsLCBudWxsLCAxLCBcImFcIiwgW1tcImhyZWZcIiwgXCIvcnNzXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUlNTXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDU1LCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcInxcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNTcsIDAsIG51bGwsIG51bGwsIDEsIFwiYVwiLCBbW1wiaHJlZlwiLCBcIi9hcGlcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJBUElcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNTksIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wifFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg2MSwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhXCIsIFtbXCJyb3V0ZXJMaW5rXCIsIFwiL3ByaXZhY3lcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCA2Mikub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg2MiwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDM4XFx1MDQzQVxcdTA0MzAgXFx1MDQzQVxcdTA0M0VcXHUwNDNEXFx1MDQ0NFxcdTA0MzhcXHUwNDM0XFx1MDQzNVxcdTA0M0RcXHUwNDQ2XFx1MDQzOFxcdTA0MzBcXHUwNDNCXFx1MDQ0Q1xcdTA0M0RcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDM4XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDY0LCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2JvdHRvbV9fY29weXJpZ2h0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg2NSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJDb3B5cmlnaHQgXFx1MDBBOSAyMDE3IEJpdEpvdXJuYWxcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNjcsIDAsIG51bGwsIG51bGwsIDIsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai1mb290ZXJfX2xvZ29cIl0sIFtcInJvdXRlckxpbmtcIiwgXCIvXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgNjgpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoNjgsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNjksIDAsIG51bGwsIG51bGwsIDAsIFwiaW1nXCIsIFtbXCJhbHRcIiwgXCJCaXRKb3VybmFsXCJdLCBbXCJzcmNcIiwgXCIvc3ZnL2xvZ28uc3ZnXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMiA9IFwiL1wiOyBfY2soX3YsIDMsIDAsIGN1cnJWYWxfMik7IHZhciBjdXJyVmFsXzUgPSBcIi9hYm91dFwiOyBfY2soX3YsIDgsIDAsIGN1cnJWYWxfNSk7IHZhciBjdXJyVmFsXzggPSBcIi9zdGFmZlwiOyBfY2soX3YsIDEyLCAwLCBjdXJyVmFsXzgpOyB2YXIgY3VyclZhbF8xMSA9IFwiL2Fkc1wiOyBfY2soX3YsIDE2LCAwLCBjdXJyVmFsXzExKTsgdmFyIGN1cnJWYWxfMTQgPSBcIi9kb25hdGVcIjsgX2NrKF92LCAyMCwgMCwgY3VyclZhbF8xNCk7IHZhciBjdXJyVmFsXzE3ID0gXCIvcHJpdmFjeVwiOyBfY2soX3YsIDYyLCAwLCBjdXJyVmFsXzE3KTsgdmFyIGN1cnJWYWxfMjAgPSBcIi9cIjsgX2NrKF92LCA2OCwgMCwgY3VyclZhbF8yMCk7IH0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBpMS7JtW5vdihfdiwgMykudGFyZ2V0OyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDMpLmhyZWY7IF9jayhfdiwgMiwgMCwgY3VyclZhbF8wLCBjdXJyVmFsXzEpOyB2YXIgY3VyclZhbF8zID0gaTEuybVub3YoX3YsIDgpLnRhcmdldDsgdmFyIGN1cnJWYWxfNCA9IGkxLsm1bm92KF92LCA4KS5ocmVmOyBfY2soX3YsIDcsIDAsIGN1cnJWYWxfMywgY3VyclZhbF80KTsgdmFyIGN1cnJWYWxfNiA9IGkxLsm1bm92KF92LCAxMikudGFyZ2V0OyB2YXIgY3VyclZhbF83ID0gaTEuybVub3YoX3YsIDEyKS5ocmVmOyBfY2soX3YsIDExLCAwLCBjdXJyVmFsXzYsIGN1cnJWYWxfNyk7IHZhciBjdXJyVmFsXzkgPSBpMS7JtW5vdihfdiwgMTYpLnRhcmdldDsgdmFyIGN1cnJWYWxfMTAgPSBpMS7JtW5vdihfdiwgMTYpLmhyZWY7IF9jayhfdiwgMTUsIDAsIGN1cnJWYWxfOSwgY3VyclZhbF8xMCk7IHZhciBjdXJyVmFsXzEyID0gaTEuybVub3YoX3YsIDIwKS50YXJnZXQ7IHZhciBjdXJyVmFsXzEzID0gaTEuybVub3YoX3YsIDIwKS5ocmVmOyBfY2soX3YsIDE5LCAwLCBjdXJyVmFsXzEyLCBjdXJyVmFsXzEzKTsgdmFyIGN1cnJWYWxfMTUgPSBpMS7JtW5vdihfdiwgNjIpLnRhcmdldDsgdmFyIGN1cnJWYWxfMTYgPSBpMS7JtW5vdihfdiwgNjIpLmhyZWY7IF9jayhfdiwgNjEsIDAsIGN1cnJWYWxfMTUsIGN1cnJWYWxfMTYpOyB2YXIgY3VyclZhbF8xOCA9IGkxLsm1bm92KF92LCA2OCkudGFyZ2V0OyB2YXIgY3VyclZhbF8xOSA9IGkxLsm1bm92KF92LCA2OCkuaHJlZjsgX2NrKF92LCA2NywgMCwgY3VyclZhbF8xOCwgY3VyclZhbF8xOSk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfRm9vdGVyQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3RlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfRm9vdGVyQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQyNDM0NTYsIG51bGwsIDAsIGk0LkZvb3RlckNvbXBvbmVudCwgW2k1LlNvY2lhbFNlcnZpY2VdLCBudWxsLCBudWxsKV0sIG51bGwsIG51bGwpOyB9XG52YXIgRm9vdGVyQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcIi5iai1mb290ZXJcIiwgaTQuRm9vdGVyQ29tcG9uZW50LCBWaWV3X0Zvb3RlckNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgRm9vdGVyQ29tcG9uZW50TmdGYWN0b3J5IGFzIEZvb3RlckNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfaGVhZGVyX2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LF9oZWFkZXJfaGVhZGVyLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsX2Zvb3Rlcl9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeSxfZm9vdGVyX2Zvb3Rlci5jb21wb25lbnQsXy4uX3NlcnZpY2VzX3NvY2lhbF9zb2NpYWwuc2VydmljZSxfbGF5b3V0LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9sYXlvdXQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2hlYWRlcl9oZWFkZXIuY29tcG9uZW50Lm5nZmFjdG9yeSxfaGVhZGVyX2hlYWRlci5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLF9mb290ZXJfZm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2Zvb3Rlcl9mb290ZXIuY29tcG9uZW50LF8uLl9zZXJ2aWNlc19zb2NpYWxfc29jaWFsLnNlcnZpY2UsX2xheW91dC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vbGF5b3V0LmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIi4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNyBmcm9tIFwiLi4vLi4vc2VydmljZXMvc29jaWFsL3NvY2lhbC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpOCBmcm9tIFwiLi9sYXlvdXQuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX0xheW91dENvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX0xheW91dENvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX0xheW91dENvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0xheW91dENvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTGF5b3V0Q29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImhlYWRlclwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXJcIl1dLCBudWxsLCBudWxsLCBudWxsLCBpMi5WaWV3X0hlYWRlckNvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX0hlYWRlckNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkzLkhlYWRlckNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMSwgXCJyb3V0ZXItb3V0bGV0XCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDMsIDIxMjk5MiwgbnVsbCwgMCwgaTQuUm91dGVyT3V0bGV0LCBbaTQuQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBbOCwgbnVsbF0sIGkxLkNoYW5nZURldGVjdG9yUmVmXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDQsIDAsIG51bGwsIG51bGwsIDEsIFwiZm9vdGVyXCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3RlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIGk1LlZpZXdfRm9vdGVyQ29tcG9uZW50XzAsIGk1LlJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50KSksIGkxLsm1ZGlkKDUsIDQyNDM0NTYsIG51bGwsIDAsIGk2LkZvb3RlckNvbXBvbmVudCwgW2k3LlNvY2lhbFNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IF9jayhfdiwgMywgMCk7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19MYXlvdXRDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJib2R5XCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0xheW91dENvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0xheW91dENvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGk4LkxheW91dENvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBMYXlvdXRDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiYm9keVwiLCBpOC5MYXlvdXRDb21wb25lbnQsIFZpZXdfTGF5b3V0Q29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBMYXlvdXRDb21wb25lbnROZ0ZhY3RvcnkgYXMgTGF5b3V0Q29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfYW5ndWxhcl9jb3JlLF9hcHAubW9kdWxlLF9jb21wb25lbnRzX2xheW91dF9sYXlvdXQuY29tcG9uZW50LF8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfc25hY2tfYmFyX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX21haW5fcGFnZV9tYWluLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfMTAxX3BhZ2VfMTAxLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljby5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljb19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfc2VjdGlvbl9wYWdlX3NlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19hcnRpY2xlX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX25vX2NvbnRlbnRfbm9fY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX2F1dGhfYXV0aF9kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19sYXlvdXRfbGF5b3V0LmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfY29tbW9uLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXIsX2FuZ3VsYXJfYW5pbWF0aW9uc19icm93c2VyLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXJfYW5pbWF0aW9ucyxfYW5ndWxhcl9hbmltYXRpb25zLF9hbmd1bGFyX2Zvcm1zLF9hbmd1bGFyX2NvbW1vbl9odHRwLF9hbmd1bGFyX2Nka19iaWRpLF9hbmd1bGFyX2Nka19wbGF0Zm9ybSxfYW5ndWxhcl9jZGtfc2Nyb2xsaW5nLF9hbmd1bGFyX2Nka19vdmVybGF5LF9hbmd1bGFyX2Nka19hMTF5LF9hbmd1bGFyX21hdGVyaWFsX2RpYWxvZyxfYW5ndWxhcl9tYXRlcmlhbF9zb3J0LF9hbmd1bGFyX2Nka19sYXlvdXQsX2FuZ3VsYXJfbWF0ZXJpYWxfc25hY2tfYmFyLF9hbmd1bGFyX21hdGVyaWFsX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9zZXJ2aWNlc19tZXNzYWdlX21lc3NhZ2Uuc2VydmljZSxfc2VydmljZXNfdXNlcl91c2VyLnNlcnZpY2UsX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UsX3NlcnZpY2VzX3NvY2lhbF9zb2NpYWwuc2VydmljZSxfc2VydmljZXNfeW91dHViZV95b3V0dWJlLnNlcnZpY2UsX2FuZ3VsYXJfY2RrX3BvcnRhbCxfYW5ndWxhcl9jZGtfdGFibGUsX2FuZ3VsYXJfbWF0ZXJpYWxfdGFibGUsX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZCxfYW5ndWxhcl9tYXRlcmlhbF9pbnB1dCxfYW5ndWxhcl9tYXRlcmlhbF9idXR0b24sX2NvbXBvbmVudHNfcGFnZXNfbWFpbl9wYWdlX21haW4uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzXzEwMV9wYWdlXzEwMS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50cy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfZXhjaGFuZ2VzX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljby5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19zZWN0aW9uX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfYXJ0aWNsZV9wYWdlX2FydGljbGUuY29tcG9uZW50LF9jb21wb25lbnRzX25vX2NvbnRlbnRfbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfYW5ndWxhcl9jb3JlLF9hcHAubW9kdWxlLF9jb21wb25lbnRzX2xheW91dF9sYXlvdXQuY29tcG9uZW50LF8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfc25hY2tfYmFyX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX21haW5fcGFnZV9tYWluLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfMTAxX3BhZ2VfMTAxLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljby5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljb19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHMuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksX2NvbXBvbmVudHNfcGFnZXNfc2VjdGlvbl9wYWdlX3NlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19wYWdlc19hcnRpY2xlX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX25vX2NvbnRlbnRfbm9fY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5LF9jb21wb25lbnRzX2F1dGhfYXV0aF9kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeSxfY29tcG9uZW50c19sYXlvdXRfbGF5b3V0LmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfY29tbW9uLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXIsX2FuZ3VsYXJfYW5pbWF0aW9uc19icm93c2VyLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXJfYW5pbWF0aW9ucyxfYW5ndWxhcl9hbmltYXRpb25zLF9hbmd1bGFyX2Zvcm1zLF9hbmd1bGFyX2NvbW1vbl9odHRwLF9hbmd1bGFyX2Nka19iaWRpLF9hbmd1bGFyX2Nka19wbGF0Zm9ybSxfYW5ndWxhcl9jZGtfc2Nyb2xsaW5nLF9hbmd1bGFyX2Nka19vdmVybGF5LF9hbmd1bGFyX2Nka19hMTF5LF9hbmd1bGFyX21hdGVyaWFsX2RpYWxvZyxfYW5ndWxhcl9tYXRlcmlhbF9zb3J0LF9hbmd1bGFyX2Nka19sYXlvdXQsX2FuZ3VsYXJfbWF0ZXJpYWxfc25hY2tfYmFyLF9hbmd1bGFyX21hdGVyaWFsX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9zZXJ2aWNlc19tZXNzYWdlX21lc3NhZ2Uuc2VydmljZSxfc2VydmljZXNfdXNlcl91c2VyLnNlcnZpY2UsX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSxfc2VydmljZXNfbWV0YV9tZXRhLnNlcnZpY2UsX3NlcnZpY2VzX3NvY2lhbF9zb2NpYWwuc2VydmljZSxfc2VydmljZXNfeW91dHViZV95b3V0dWJlLnNlcnZpY2UsX2FuZ3VsYXJfY2RrX3BvcnRhbCxfYW5ndWxhcl9jZGtfdGFibGUsX2FuZ3VsYXJfbWF0ZXJpYWxfdGFibGUsX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZCxfYW5ndWxhcl9tYXRlcmlhbF9pbnB1dCxfYW5ndWxhcl9tYXRlcmlhbF9idXR0b24sX2NvbXBvbmVudHNfcGFnZXNfbWFpbl9wYWdlX21haW4uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzXzEwMV9wYWdlXzEwMS5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50cy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfZXhjaGFuZ2VzX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljby5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LF9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudCxfY29tcG9uZW50c19wYWdlc19zZWN0aW9uX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQsX2NvbXBvbmVudHNfcGFnZXNfYXJ0aWNsZV9wYWdlX2FydGljbGUuY29tcG9uZW50LF9jb21wb25lbnRzX25vX2NvbnRlbnRfbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nL3R5cGluZ3MvaW5kZXgubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhci90eXBpbmdzL2luZGV4Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpOSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTEgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTEyIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTEzIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE3IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE5IGZyb20gXCIuL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkyMCBmcm9tIFwiLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTIxIGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMjIgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTIzIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgKiBhcyBpMjQgZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3NlclwiO1xuaW1wb3J0ICogYXMgaTI1IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCAqIGFzIGkyNiBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0ICogYXMgaTI3IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0ICogYXMgaTI4IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0ICogYXMgaTI5IGZyb20gXCJAYW5ndWxhci9jZGsvYmlkaVwiO1xuaW1wb3J0ICogYXMgaTMwIGZyb20gXCJAYW5ndWxhci9jZGsvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGkzMSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3Njcm9sbGluZ1wiO1xuaW1wb3J0ICogYXMgaTMyIGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0ICogYXMgaTMzIGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xuaW1wb3J0ICogYXMgaTM0IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCAqIGFzIGkzNSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0ICogYXMgaTM2IGZyb20gXCJAYW5ndWxhci9jZGsvbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBpMzcgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0ICogYXMgaTM4IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMzkgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTQwIGZyb20gXCIuL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNDEgZnJvbSBcIi4vc2VydmljZXMvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0MiBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0MyBmcm9tIFwiLi9zZXJ2aWNlcy9tZXRhL21ldGEuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTQ0IGZyb20gXCIuL3NlcnZpY2VzL3NvY2lhbC9zb2NpYWwuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTQ1IGZyb20gXCIuL3NlcnZpY2VzL3lvdXR1YmUveW91dHViZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNDYgZnJvbSBcIkBhbmd1bGFyL2Nkay9wb3J0YWxcIjtcbmltcG9ydCAqIGFzIGk0NyBmcm9tIFwiQGFuZ3VsYXIvY2RrL3RhYmxlXCI7XG5pbXBvcnQgKiBhcyBpNDggZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XG5pbXBvcnQgKiBhcyBpNDkgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGRcIjtcbmltcG9ydCAqIGFzIGk1MCBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCAqIGFzIGk1MSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBpNTIgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1MyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1NCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU1IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1NiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1NyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU5IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjAgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjEgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28taXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2MiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYzIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2NCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb24vcGFnZS1zZWN0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTY1IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjYgZnJvbSBcIi4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50XCI7XG52YXIgQXBwTW9kdWxlTmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMC7JtWNtZihpMS5BcHBNb2R1bGUsIFtpMi5MYXlvdXRDb21wb25lbnRdLCBmdW5jdGlvbiAoX2wpIHsgcmV0dXJuIGkwLsm1bW9kKFtpMC7JtW1wZCg1MTIsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaTAuybVDb2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBbWzgsIFtpMy5NYXREaWFsb2dDb250YWluZXJOZ0ZhY3RvcnksIGk0Lk1hdFNuYWNrQmFyQ29udGFpbmVyTmdGYWN0b3J5LCBpNC5TaW1wbGVTbmFja0Jhck5nRmFjdG9yeSwgaTUuUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnksIGk2LlBhZ2UxMDFDb21wb25lbnROZ0ZhY3RvcnksIGk3LlBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50TmdGYWN0b3J5LCBpOC5QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnksIGk5LlBhZ2VFdmVudHNDb21wb25lbnROZ0ZhY3RvcnksIGkxMC5QYWdlRXZlbnRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSwgaTExLlBhZ2VFeGNoYW5nZXNDb21wb25lbnROZ0ZhY3RvcnksIGkxMi5QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSwgaTEzLlBhZ2VJQ09Db21wb25lbnROZ0ZhY3RvcnksIGkxNC5QYWdlSUNPSXRlbUNvbXBvbmVudE5nRmFjdG9yeSwgaTE1LlBhZ2VNYXJrZXRzQ29tcG9uZW50TmdGYWN0b3J5LCBpMTYuUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5LCBpMTcuUGFnZVNlY3Rpb25Db21wb25lbnROZ0ZhY3RvcnksIGkxOC5QYWdlQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSwgaTE5Lk5vQ29udGVudENvbXBvbmVudE5nRmFjdG9yeSwgaTIwLkF1dGhEaWFsb2dDb21wb25lbnROZ0ZhY3RvcnksIGkyMS5MYXlvdXRDb21wb25lbnROZ0ZhY3RvcnldXSwgWzMsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcl0sIGkwLk5nTW9kdWxlUmVmXSksIGkwLsm1bXBkKDUxMjAsIGkwLkxPQ0FMRV9JRCwgaTAuybVtLCBbWzMsIGkwLkxPQ0FMRV9JRF1dKSwgaTAuybVtcGQoNDYwOCwgaTIyLk5nTG9jYWxpemF0aW9uLCBpMjIuTmdMb2NhbGVMb2NhbGl6YXRpb24sIFtpMC5MT0NBTEVfSUQsIFsyLCBpMjIuybVhXV0pLCBpMC7JtW1wZCg1MTIwLCBpMC5JdGVyYWJsZURpZmZlcnMsIGkwLsm1aywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMC5LZXlWYWx1ZURpZmZlcnMsIGkwLsm1bCwgW10pLCBpMC7JtW1wZCg0NjA4LCBpMjMuRG9tU2FuaXRpemVyLCBpMjMuybVlLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDYxNDQsIGkwLlNhbml0aXplciwgbnVsbCwgW2kyMy5Eb21TYW5pdGl6ZXJdKSwgaTAuybVtcGQoNDYwOCwgaTIzLkhBTU1FUl9HRVNUVVJFX0NPTkZJRywgaTIzLkhhbW1lckdlc3R1cmVDb25maWcsIFtdKSwgaTAuybVtcGQoNTEyMCwgaTIzLkVWRU5UX01BTkFHRVJfUExVR0lOUywgZnVuY3Rpb24gKHAwXzAsIHAwXzEsIHAxXzAsIHAyXzAsIHAyXzEpIHsgcmV0dXJuIFtuZXcgaTIzLsm1RG9tRXZlbnRzUGx1Z2luKHAwXzAsIHAwXzEpLCBuZXcgaTIzLsm1S2V5RXZlbnRzUGx1Z2luKHAxXzApLCBuZXcgaTIzLsm1SGFtbWVyR2VzdHVyZXNQbHVnaW4ocDJfMCwgcDJfMSldOyB9LCBbaTIyLkRPQ1VNRU5ULCBpMC5OZ1pvbmUsIGkyMi5ET0NVTUVOVCwgaTIyLkRPQ1VNRU5ULCBpMjMuSEFNTUVSX0dFU1RVUkVfQ09ORklHXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy5FdmVudE1hbmFnZXIsIGkyMy5FdmVudE1hbmFnZXIsIFtpMjMuRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoMTM1NjgwLCBpMjMuybVEb21TaGFyZWRTdHlsZXNIb3N0LCBpMjMuybVEb21TaGFyZWRTdHlsZXNIb3N0LCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy7JtURvbVJlbmRlcmVyRmFjdG9yeTIsIGkyMy7JtURvbVJlbmRlcmVyRmFjdG9yeTIsIFtpMjMuRXZlbnRNYW5hZ2VyLCBpMjMuybVEb21TaGFyZWRTdHlsZXNIb3N0XSksIGkwLsm1bXBkKDUxMjAsIGkyNC5BbmltYXRpb25Ecml2ZXIsIGkyNS7JtWMsIFtdKSwgaTAuybVtcGQoNTEyMCwgaTI0Lsm1QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyLCBpMjUuybVkLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyNC7JtUFuaW1hdGlvbkVuZ2luZSwgaTI1Lsm1YiwgW2kyNC5BbmltYXRpb25Ecml2ZXIsIGkyNC7JtUFuaW1hdGlvblN0eWxlTm9ybWFsaXplcl0pLCBpMC7JtW1wZCg1MTIwLCBpMC5SZW5kZXJlckZhY3RvcnkyLCBpMjUuybVlLCBbaTIzLsm1RG9tUmVuZGVyZXJGYWN0b3J5MiwgaTI0Lsm1QW5pbWF0aW9uRW5naW5lLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNjE0NCwgaTIzLsm1U2hhcmVkU3R5bGVzSG9zdCwgbnVsbCwgW2kyMy7JtURvbVNoYXJlZFN0eWxlc0hvc3RdKSwgaTAuybVtcGQoNDYwOCwgaTAuVGVzdGFiaWxpdHksIGkwLlRlc3RhYmlsaXR5LCBbaTAuTmdab25lXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy5NZXRhLCBpMjMuTWV0YSwgW2kyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMjMuVGl0bGUsIGkyMy5UaXRsZSwgW2kyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMjYuQW5pbWF0aW9uQnVpbGRlciwgaTI1Lsm1QnJvd3NlckFuaW1hdGlvbkJ1aWxkZXIsIFtpMC5SZW5kZXJlckZhY3RvcnkyLCBpMjMuRE9DVU1FTlRdKSwgaTAuybVtcGQoNDYwOCwgaTI3Lsm1aSwgaTI3Lsm1aSwgW10pLCBpMC7JtW1wZCg0NjA4LCBpMjcuRm9ybUJ1aWxkZXIsIGkyNy5Gb3JtQnVpbGRlciwgW10pLCBpMC7JtW1wZCg0NjA4LCBpMjguSHR0cFhzcmZUb2tlbkV4dHJhY3RvciwgaTI4Lsm1ZywgW2kyMi5ET0NVTUVOVCwgaTAuUExBVEZPUk1fSUQsIGkyOC7JtWVdKSwgaTAuybVtcGQoNDYwOCwgaTI4Lsm1aCwgaTI4Lsm1aCwgW2kyOC5IdHRwWHNyZlRva2VuRXh0cmFjdG9yLCBpMjguybVmXSksIGkwLsm1bXBkKDUxMjAsIGkyOC5IVFRQX0lOVEVSQ0VQVE9SUywgZnVuY3Rpb24gKHAwXzApIHsgcmV0dXJuIFtwMF8wXTsgfSwgW2kyOC7JtWhdKSwgaTAuybVtcGQoNDYwOCwgaTI4Lsm1ZCwgaTI4Lsm1ZCwgW10pLCBpMC7JtW1wZCg2MTQ0LCBpMjguWGhyRmFjdG9yeSwgbnVsbCwgW2kyOC7JtWRdKSwgaTAuybVtcGQoNDYwOCwgaTI4Lkh0dHBYaHJCYWNrZW5kLCBpMjguSHR0cFhockJhY2tlbmQsIFtpMjguWGhyRmFjdG9yeV0pLCBpMC7JtW1wZCg2MTQ0LCBpMjguSHR0cEJhY2tlbmQsIG51bGwsIFtpMjguSHR0cFhockJhY2tlbmRdKSwgaTAuybVtcGQoNTEyMCwgaTI4Lkh0dHBIYW5kbGVyLCBpMjguybVpbnRlcmNlcHRpbmdIYW5kbGVyLCBbaTI4Lkh0dHBCYWNrZW5kLCBbMiwgaTI4LkhUVFBfSU5URVJDRVBUT1JTXV0pLCBpMC7JtW1wZCg0NjA4LCBpMjguSHR0cENsaWVudCwgaTI4Lkh0dHBDbGllbnQsIFtpMjguSHR0cEhhbmRsZXJdKSwgaTAuybVtcGQoNjE0NCwgaTI5LkRJUl9ET0NVTUVOVCwgbnVsbCwgW2kyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMjkuRGlyZWN0aW9uYWxpdHksIGkyOS5EaXJlY3Rpb25hbGl0eSwgW1syLCBpMjkuRElSX0RPQ1VNRU5UXV0pLCBpMC7JtW1wZCg0NjA4LCBpMzAuUGxhdGZvcm0sIGkzMC5QbGF0Zm9ybSwgW10pLCBpMC7JtW1wZCg1MTIwLCBpMzEuU2Nyb2xsRGlzcGF0Y2hlciwgaTMxLlNDUk9MTF9ESVNQQVRDSEVSX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTMxLlNjcm9sbERpc3BhdGNoZXJdLCBpMC5OZ1pvbmUsIGkzMC5QbGF0Zm9ybV0pLCBpMC7JtW1wZCg1MTIwLCBpMzEuVmlld3BvcnRSdWxlciwgaTMxLlZJRVdQT1JUX1JVTEVSX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTMxLlZpZXdwb3J0UnVsZXJdLCBpMzAuUGxhdGZvcm0sIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCg0NjA4LCBpMzIuU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLCBpMzIuU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLCBbaTMxLlNjcm9sbERpc3BhdGNoZXIsIGkzMS5WaWV3cG9ydFJ1bGVyLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNTEyMCwgaTMyLk92ZXJsYXlDb250YWluZXIsIGkzMi7JtWEsIFtbMywgaTMyLk92ZXJsYXlDb250YWluZXJdLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNDYwOCwgaTMyLsm1aCwgaTMyLsm1aCwgW2kzMS5WaWV3cG9ydFJ1bGVyLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNTEyMCwgaTMyLk92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsIGkzMi7JtWYsIFtbMywgaTMyLk92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXJdLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNDYwOCwgaTMyLk92ZXJsYXksIGkzMi5PdmVybGF5LCBbaTMyLlNjcm9sbFN0cmF0ZWd5T3B0aW9ucywgaTMyLk92ZXJsYXlDb250YWluZXIsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaTMyLsm1aCwgaTMyLk92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsIGkwLkFwcGxpY2F0aW9uUmVmLCBpMC5JbmplY3RvciwgaTAuTmdab25lLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNTEyMCwgaTMyLsm1YywgaTMyLsm1ZCwgW2kzMi5PdmVybGF5XSksIGkwLsm1bXBkKDQ2MDgsIGkzMy5JbnRlcmFjdGl2aXR5Q2hlY2tlciwgaTMzLkludGVyYWN0aXZpdHlDaGVja2VyLCBbaTMwLlBsYXRmb3JtXSksIGkwLsm1bXBkKDQ2MDgsIGkzMy5Gb2N1c1RyYXBGYWN0b3J5LCBpMzMuRm9jdXNUcmFwRmFjdG9yeSwgW2kzMy5JbnRlcmFjdGl2aXR5Q2hlY2tlciwgaTAuTmdab25lLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoMTM2MTkyLCBpMzMuQXJpYURlc2NyaWJlciwgaTMzLkFSSUFfREVTQ1JJQkVSX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTMzLkFyaWFEZXNjcmliZXJdLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNTEyMCwgaTMzLkxpdmVBbm5vdW5jZXIsIGkzMy5MSVZFX0FOTk9VTkNFUl9QUk9WSURFUl9GQUNUT1JZLCBbWzMsIGkzMy5MaXZlQW5ub3VuY2VyXSwgWzIsIGkzMy5MSVZFX0FOTk9VTkNFUl9FTEVNRU5UX1RPS0VOXSwgaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDUxMjAsIGkzMy5Gb2N1c01vbml0b3IsIGkzMy5GT0NVU19NT05JVE9SX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTMzLkZvY3VzTW9uaXRvcl0sIGkwLk5nWm9uZSwgaTMwLlBsYXRmb3JtXSksIGkwLsm1bXBkKDUxMjAsIGkzNC5NQVRfRElBTE9HX1NDUk9MTF9TVFJBVEVHWSwgaTM0Lk1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSX0ZBQ1RPUlksIFtpMzIuT3ZlcmxheV0pLCBpMC7JtW1wZCg0NjA4LCBpMzQuTWF0RGlhbG9nLCBpMzQuTWF0RGlhbG9nLCBbaTMyLk92ZXJsYXksIGkwLkluamVjdG9yLCBbMiwgaTIyLkxvY2F0aW9uXSwgaTM0Lk1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZLCBbMywgaTM0Lk1hdERpYWxvZ11dKSwgaTAuybVtcGQoNTEyMCwgaTM1Lk1hdFNvcnRIZWFkZXJJbnRsLCBpMzUuTUFUX1NPUlRfSEVBREVSX0lOVExfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzUuTWF0U29ydEhlYWRlckludGxdXSksIGkwLsm1bXBkKDQ2MDgsIGkzNi5NZWRpYU1hdGNoZXIsIGkzNi5NZWRpYU1hdGNoZXIsIFtpMzAuUGxhdGZvcm1dKSwgaTAuybVtcGQoMTM1NjgwLCBpMzYuQnJlYWtwb2ludE9ic2VydmVyLCBpMzYuQnJlYWtwb2ludE9ic2VydmVyLCBbaTM2Lk1lZGlhTWF0Y2hlciwgaTAuTmdab25lXSksIGkwLsm1bXBkKDQ2MDgsIGkzNy5NYXRTbmFja0JhciwgaTM3Lk1hdFNuYWNrQmFyLCBbaTMyLk92ZXJsYXksIGkzMy5MaXZlQW5ub3VuY2VyLCBpMC5JbmplY3RvciwgaTM2LkJyZWFrcG9pbnRPYnNlcnZlciwgWzMsIGkzNy5NYXRTbmFja0Jhcl1dKSwgaTAuybVtcGQoNDYwOCwgaTM4LkVycm9yU3RhdGVNYXRjaGVyLCBpMzguRXJyb3JTdGF0ZU1hdGNoZXIsIFtdKSwgaTAuybVtcGQoNTEyMCwgaTM5LkFjdGl2YXRlZFJvdXRlLCBpMzkuybVmLCBbaTM5LlJvdXRlcl0pLCBpMC7JtW1wZCg0NjA4LCBpMzkuUHJlbG9hZEFsbE1vZHVsZXMsIGkzOS5QcmVsb2FkQWxsTW9kdWxlcywgW10pLCBpMC7JtW1wZCg2MTQ0LCBpMzkuUHJlbG9hZGluZ1N0cmF0ZWd5LCBudWxsLCBbaTM5LlByZWxvYWRBbGxNb2R1bGVzXSksIGkwLsm1bXBkKDEzNTY4MCwgaTM5LlJvdXRlclByZWxvYWRlciwgaTM5LlJvdXRlclByZWxvYWRlciwgW2kzOS5Sb3V0ZXIsIGkwLk5nTW9kdWxlRmFjdG9yeUxvYWRlciwgaTAuQ29tcGlsZXIsIGkwLkluamVjdG9yLCBpMzkuUHJlbG9hZGluZ1N0cmF0ZWd5XSksIGkwLsm1bXBkKDQ2MDgsIGkzOS5Ob1ByZWxvYWRpbmcsIGkzOS5Ob1ByZWxvYWRpbmcsIFtdKSwgaTAuybVtcGQoNTEyMCwgaTM5LlJPVVRFUl9JTklUSUFMSVpFUiwgaTM5Lsm1aSwgW2kzOS7JtWddKSwgaTAuybVtcGQoNTEyMCwgaTAuQVBQX0JPT1RTVFJBUF9MSVNURU5FUiwgZnVuY3Rpb24gKHAwXzApIHsgcmV0dXJuIFtwMF8wXTsgfSwgW2kzOS5ST1VURVJfSU5JVElBTElaRVJdKSwgaTAuybVtcGQoNDYwOCwgaTQwLk1lc3NhZ2VTZXJ2aWNlLCBpNDAuTWVzc2FnZVNlcnZpY2UsIFtpMC5QTEFURk9STV9JRCwgaTM3Lk1hdFNuYWNrQmFyXSksIGkwLsm1bXBkKDQ2MDgsIGk0MS5Vc2VyU2VydmljZSwgaTQxLlVzZXJTZXJ2aWNlLCBbaTAuUExBVEZPUk1fSUQsIGkyOC5IdHRwQ2xpZW50LCBpMzQuTWF0RGlhbG9nLCBpNDAuTWVzc2FnZVNlcnZpY2UsIGkzNy5NYXRTbmFja0Jhcl0pLCBpMC7JtW1wZCg0NjA4LCBpNDIuQVBJU2VydmljZSwgaTQyLkFQSVNlcnZpY2UsIFtpMjguSHR0cENsaWVudCwgaTM5LlJvdXRlciwgaTQxLlVzZXJTZXJ2aWNlLCBpNDAuTWVzc2FnZVNlcnZpY2VdKSwgaTAuybVtcGQoNDYwOCwgaTQzLk1ldGFTZXJ2aWNlLCBpNDMuTWV0YVNlcnZpY2UsIFtpMjMuTWV0YSwgaTIzLlRpdGxlXSksIGkwLsm1bXBkKDQ2MDgsIGk0NC5Tb2NpYWxTZXJ2aWNlLCBpNDQuU29jaWFsU2VydmljZSwgW2kwLlBMQVRGT1JNX0lEXSksIGkwLsm1bXBkKDQ2MDgsIGk0NS5Zb3VUdWJlU2VydmljZSwgaTQ1LllvdVR1YmVTZXJ2aWNlLCBbaTI4Lkh0dHBDbGllbnQsIGk0MC5NZXNzYWdlU2VydmljZV0pLCBpMC7JtW1wZCg1MTIsIGkyMi5Db21tb25Nb2R1bGUsIGkyMi5Db21tb25Nb2R1bGUsIFtdKSwgaTAuybVtcGQoMTAyNCwgaTAuRXJyb3JIYW5kbGVyLCBpMjMuybVhLCBbXSksIGkwLsm1bXBkKDEwMjQsIGkwLk5nUHJvYmVUb2tlbiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gW2kzOS7JtWIoKV07IH0sIFtdKSwgaTAuybVtcGQoMjU2LCBpMC5BUFBfSUQsIFwibnVsbC12bnVsbFwiLCBbXSksIGkwLsm1bXBkKDIwNDgsIGkyMy7JtVRSQU5TSVRJT05fSUQsIG51bGwsIFtpMC5BUFBfSURdKSwgaTAuybVtcGQoNTEyLCBpMzkuybVnLCBpMzkuybVnLCBbaTAuSW5qZWN0b3JdKSwgaTAuybVtcGQoMTAyNCwgaTAuQVBQX0lOSVRJQUxJWkVSLCBmdW5jdGlvbiAocDBfMCwgcDFfMCwgcDFfMSwgcDFfMiwgcDJfMCkgeyByZXR1cm4gW2kyMy7JtWgocDBfMCksIGkyMy7JtWYocDFfMCwgcDFfMSwgcDFfMiksIGkzOS7JtWgocDJfMCldOyB9LCBbWzIsIGkwLk5nUHJvYmVUb2tlbl0sIGkyMy7JtVRSQU5TSVRJT05fSUQsIGkyMi5ET0NVTUVOVCwgaTAuSW5qZWN0b3IsIGkzOS7JtWddKSwgaTAuybVtcGQoNTEyLCBpMC5BcHBsaWNhdGlvbkluaXRTdGF0dXMsIGkwLkFwcGxpY2F0aW9uSW5pdFN0YXR1cywgW1syLCBpMC5BUFBfSU5JVElBTElaRVJdXSksIGkwLsm1bXBkKDEzMTU4NCwgaTAuQXBwbGljYXRpb25SZWYsIGkwLkFwcGxpY2F0aW9uUmVmLCBbaTAuTmdab25lLCBpMC7JtUNvbnNvbGUsIGkwLkluamVjdG9yLCBpMC5FcnJvckhhbmRsZXIsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaTAuQXBwbGljYXRpb25Jbml0U3RhdHVzXSksIGkwLsm1bXBkKDUxMiwgaTAuQXBwbGljYXRpb25Nb2R1bGUsIGkwLkFwcGxpY2F0aW9uTW9kdWxlLCBbaTAuQXBwbGljYXRpb25SZWZdKSwgaTAuybVtcGQoNTEyLCBpMjMuQnJvd3Nlck1vZHVsZSwgaTIzLkJyb3dzZXJNb2R1bGUsIFtbMywgaTIzLkJyb3dzZXJNb2R1bGVdXSksIGkwLsm1bXBkKDUxMiwgaTI1LkJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBpMjUuQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjcuybViYSwgaTI3Lsm1YmEsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjcuRm9ybXNNb2R1bGUsIGkyNy5Gb3Jtc01vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyNy5SZWFjdGl2ZUZvcm1zTW9kdWxlLCBpMjcuUmVhY3RpdmVGb3Jtc01vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyOC5IdHRwQ2xpZW50WHNyZk1vZHVsZSwgaTI4Lkh0dHBDbGllbnRYc3JmTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI4Lkh0dHBDbGllbnRNb2R1bGUsIGkyOC5IdHRwQ2xpZW50TW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI5LkJpZGlNb2R1bGUsIGkyOS5CaWRpTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTQ2LlBvcnRhbE1vZHVsZSwgaTQ2LlBvcnRhbE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzMC5QbGF0Zm9ybU1vZHVsZSwgaTMwLlBsYXRmb3JtTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTMxLlNjcm9sbERpc3BhdGNoTW9kdWxlLCBpMzEuU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzIuT3ZlcmxheU1vZHVsZSwgaTMyLk92ZXJsYXlNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzMuQTExeU1vZHVsZSwgaTMzLkExMXlNb2R1bGUsIFtdKSwgaTAuybVtcGQoMjU2LCBpMzguTUFURVJJQUxfU0FOSVRZX0NIRUNLUywgdHJ1ZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzOC5NYXRDb21tb25Nb2R1bGUsIGkzOC5NYXRDb21tb25Nb2R1bGUsIFtbMiwgaTM4Lk1BVEVSSUFMX1NBTklUWV9DSEVDS1NdXSksIGkwLsm1bXBkKDUxMiwgaTM0Lk1hdERpYWxvZ01vZHVsZSwgaTM0Lk1hdERpYWxvZ01vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzNS5NYXRTb3J0TW9kdWxlLCBpMzUuTWF0U29ydE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGk0Ny5DZGtUYWJsZU1vZHVsZSwgaTQ3LkNka1RhYmxlTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTQ4Lk1hdFRhYmxlTW9kdWxlLCBpNDguTWF0VGFibGVNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzYuTGF5b3V0TW9kdWxlLCBpMzYuTGF5b3V0TW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM3Lk1hdFNuYWNrQmFyTW9kdWxlLCBpMzcuTWF0U25hY2tCYXJNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNDkuTWF0Rm9ybUZpZWxkTW9kdWxlLCBpNDkuTWF0Rm9ybUZpZWxkTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTUwLk1hdElucHV0TW9kdWxlLCBpNTAuTWF0SW5wdXRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzguTWF0UmlwcGxlTW9kdWxlLCBpMzguTWF0UmlwcGxlTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTUxLk1hdEJ1dHRvbk1vZHVsZSwgaTUxLk1hdEJ1dHRvbk1vZHVsZSwgW10pLCBpMC7JtW1wZCgxMDI0LCBpMzkuybVhLCBpMzkuybVkLCBbWzMsIGkzOS5Sb3V0ZXJdXSksIGkwLsm1bXBkKDUxMiwgaTM5LlVybFNlcmlhbGl6ZXIsIGkzOS5EZWZhdWx0VXJsU2VyaWFsaXplciwgW10pLCBpMC7JtW1wZCg1MTIsIGkzOS5DaGlsZHJlbk91dGxldENvbnRleHRzLCBpMzkuQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgW10pLCBpMC7JtW1wZCgyNTYsIGkzOS5ST1VURVJfQ09ORklHVVJBVElPTiwgeyB1c2VIYXNoOiBmYWxzZSwgcHJlbG9hZGluZ1N0cmF0ZWd5OiBpMzkuUHJlbG9hZEFsbE1vZHVsZXMgfSwgW10pLCBpMC7JtW1wZCgxMDI0LCBpMjIuTG9jYXRpb25TdHJhdGVneSwgaTM5Lsm1YywgW2kyMi5QbGF0Zm9ybUxvY2F0aW9uLCBbMiwgaTIyLkFQUF9CQVNFX0hSRUZdLCBpMzkuUk9VVEVSX0NPTkZJR1VSQVRJT05dKSwgaTAuybVtcGQoNTEyLCBpMjIuTG9jYXRpb24sIGkyMi5Mb2NhdGlvbiwgW2kyMi5Mb2NhdGlvblN0cmF0ZWd5XSksIGkwLsm1bXBkKDUxMiwgaTAuQ29tcGlsZXIsIGkwLkNvbXBpbGVyLCBbXSksIGkwLsm1bXBkKDUxMiwgaTAuTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBpMC5TeXN0ZW1Kc05nTW9kdWxlTG9hZGVyLCBbaTAuQ29tcGlsZXIsIFsyLCBpMC5TeXN0ZW1Kc05nTW9kdWxlTG9hZGVyQ29uZmlnXV0pLCBpMC7JtW1wZCgxMDI0LCBpMzkuUk9VVEVTLCBmdW5jdGlvbiAoKSB7IHJldHVybiBbW3sgcGF0aDogXCJcIiwgY29tcG9uZW50OiBpNTIuUGFnZU1haW5Db21wb25lbnQgfSwgeyBwYXRoOiBcIjEwMVwiLCBjb21wb25lbnQ6IGk1My5QYWdlMTAxQ29tcG9uZW50IH0sIHsgcGF0aDogXCJjdXJyZW5jaWVzLzppZFwiLCBjb21wb25lbnQ6IGk1NC5QYWdlQ3VycmVuY2llc0NvbXBvbmVudCB9LCB7IHBhdGg6IFwiY3VycmVuY2llc1wiLCBjb21wb25lbnQ6IGk1NS5QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQgfSwgeyBwYXRoOiBcImV2ZW50cy86aWRcIiwgY29tcG9uZW50OiBpNTYuUGFnZUV2ZW50c0NvbXBvbmVudCB9LCB7IHBhdGg6IFwiZXZlbnRzXCIsIGNvbXBvbmVudDogaTU3LlBhZ2VFdmVudHNJdGVtQ29tcG9uZW50IH0sIHsgcGF0aDogXCJleGNoYW5nZXMvOmlkXCIsIGNvbXBvbmVudDogaTU4LlBhZ2VFeGNoYW5nZXNDb21wb25lbnQgfSwgeyBwYXRoOiBcImV4Y2hhbmdlc1wiLCBjb21wb25lbnQ6IGk1OS5QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCB9LCB7IHBhdGg6IFwiaWNvLzppZFwiLCBjb21wb25lbnQ6IGk2MC5QYWdlSUNPQ29tcG9uZW50IH0sIHsgcGF0aDogXCJpY29cIiwgY29tcG9uZW50OiBpNjEuUGFnZUlDT0l0ZW1Db21wb25lbnQgfSwgeyBwYXRoOiBcIm1hcmtldHMvOmlkXCIsIGNvbXBvbmVudDogaTYyLlBhZ2VNYXJrZXRzQ29tcG9uZW50IH0sIHsgcGF0aDogXCJtYXJrZXRzXCIsIGNvbXBvbmVudDogaTYzLlBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCB9LCB7IHBhdGg6IFwiOnNlY3Rpb25cIiwgY29tcG9uZW50OiBpNjQuUGFnZVNlY3Rpb25Db21wb25lbnQgfSwgeyBwYXRoOiBcIjpkYXRlLzp1cmxcIiwgY29tcG9uZW50OiBpNjUuUGFnZUFydGljbGVDb21wb25lbnQgfSwgeyBwYXRoOiBcIioqXCIsIGNvbXBvbmVudDogaTY2Lk5vQ29udGVudENvbXBvbmVudCB9XV07IH0sIFtdKSwgaTAuybVtcGQoMTAyNCwgaTM5LlJvdXRlciwgaTM5Lsm1ZSwgW2kwLkFwcGxpY2F0aW9uUmVmLCBpMzkuVXJsU2VyaWFsaXplciwgaTM5LkNoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGkyMi5Mb2NhdGlvbiwgaTAuSW5qZWN0b3IsIGkwLk5nTW9kdWxlRmFjdG9yeUxvYWRlciwgaTAuQ29tcGlsZXIsIGkzOS5ST1VURVMsIGkzOS5ST1VURVJfQ09ORklHVVJBVElPTiwgWzIsIGkzOS5VcmxIYW5kbGluZ1N0cmF0ZWd5XSwgWzIsIGkzOS5Sb3V0ZVJldXNlU3RyYXRlZ3ldXSksIGkwLsm1bXBkKDUxMiwgaTM5LlJvdXRlck1vZHVsZSwgaTM5LlJvdXRlck1vZHVsZSwgW1syLCBpMzkuybVhXSwgWzIsIGkzOS5Sb3V0ZXJdXSksIGkwLsm1bXBkKDUxMiwgaTEuQXBwTW9kdWxlLCBpMS5BcHBNb2R1bGUsIFtdKSwgaTAuybVtcGQoMjU2LCBpMjguybVlLCBcIlhTUkYtVE9LRU5cIiwgW10pLCBpMC7JtW1wZCgyNTYsIGkyOC7JtWYsIFwiWC1YU1JGLVRPS0VOXCIsIFtdKV0pOyB9KTtcbmV4cG9ydCB7IEFwcE1vZHVsZU5nRmFjdG9yeSBhcyBBcHBNb2R1bGVOZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwLm1vZHVsZS5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyLCBlbmFibGVEZWJ1Z1Rvb2xzLCBkaXNhYmxlRGVidWdUb29scyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQXBwTW9kdWxlTmdGYWN0b3J5IH0gZnJvbSAnLi9hcHAubW9kdWxlLm5nZmFjdG9yeSc7XG5jb25zb2xlLmxvZyhgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gdiR7cHJvY2Vzcy5lbnYuQVBQX1ZFUlNJT059YCk7XG5sZXQgZGVjb3JhdGVNb2R1bGVSZWYgPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3QgybUwID0gZGVjb3JhdGVNb2R1bGVSZWY7XG5pZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBkZWNvcmF0ZU1vZHVsZVJlZiA9IChtb2RSZWYpID0+IHtcbiAgICAgICAgY29uc3QgYXBwUmVmID0gbW9kUmVmLmluamVjdG9yLmdldChBcHBsaWNhdGlvblJlZik7XG4gICAgICAgIGNvbnN0IGNtcFJlZiA9IGFwcFJlZi5jb21wb25lbnRzWzBdO1xuICAgICAgICBsZXQgbmcgPSB3aW5kb3cubmc7XG4gICAgICAgIGVuYWJsZURlYnVnVG9vbHMoY21wUmVmKTtcbiAgICAgICAgd2luZG93Lm5nLnByb2JlID0gbmcucHJvYmU7XG4gICAgICAgIHdpbmRvdy5uZy5jb3JlVG9rZW5zID0gbmcuY29yZVRva2VucztcbiAgICAgICAgcmV0dXJuIG1vZFJlZjtcbiAgICB9O1xufVxuZWxzZSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbiAgICBkZWNvcmF0ZU1vZHVsZVJlZiA9IChtb2RSZWYpID0+IHtcbiAgICAgICAgZGlzYWJsZURlYnVnVG9vbHMoKTtcbiAgICAgICAgcmV0dXJuIG1vZFJlZjtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICByZXR1cm4gcGxhdGZvcm1Ccm93c2VyKClcbiAgICAgICAgLmJvb3RzdHJhcE1vZHVsZUZhY3RvcnkoQXBwTW9kdWxlTmdGYWN0b3J5KVxuICAgICAgICAudGhlbihkZWNvcmF0ZU1vZHVsZVJlZilcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG59XG5jb25zdCBkb21SZWFkeUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRvbVJlYWR5SGFuZGxlcik7XG4gICAgbWFpbigpO1xufTtcbmNvbnN0IMm1MSA9IGRvbVJlYWR5SGFuZGxlcjtcbnN3aXRjaCAoZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZG9tUmVhZHlIYW5kbGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaW50ZXJhY3RpdmUnOlxuICAgIGNhc2UgJ2NvbXBsZXRlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgICBtYWluKCk7XG59XG5leHBvcnQgeyDJtTAsIMm1MSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluLmZyb250LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIl0sInNvdXJjZVJvb3QiOiIifQ==