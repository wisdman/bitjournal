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
var core = __webpack_require__(1);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(21);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(13);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/router/esm5/router.js
var router = __webpack_require__(30);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/material.es5.js + 26 modules
var material_es5 = __webpack_require__(42);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/common/esm5/http.js
var http = __webpack_require__(38);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/Observable.js
var Observable = __webpack_require__(4);
var Observable_default = /*#__PURE__*/__webpack_require__.n(Observable);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/observable/of.js
var of = __webpack_require__(60);
var of_default = /*#__PURE__*/__webpack_require__.n(of);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/catch.js
var operator_catch = __webpack_require__(61);
var catch_default = /*#__PURE__*/__webpack_require__.n(operator_catch);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/filter.js
var filter = __webpack_require__(62);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/map.js
var map = __webpack_require__(63);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

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
        return historical[historical.length].ts;
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
        this.weight = Math.min(Math.max(~~value.weight, 0), 3);
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
    'weight',
    'title',
    'description',
    'rating',
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


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/common/models/index.ts













// CONCATENATED MODULE: ./services/message/message.service.ts

class MessageService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    message(message, duration = 2000) {
        this._snackBar.open(message, undefined, { duration });
    }
}

// CONCATENATED MODULE: ./services/message/index.ts


// CONCATENATED MODULE: ./services/user/user.service.ts












const AUTH_TOKEN_LS_ID = 'auth-token';
class user_service_UserService {
    constructor(_http, _matDialog, _message, _snackBar) {
        this._http = _http;
        this._matDialog = _matDialog;
        this._message = _message;
        this._snackBar = _snackBar;
    }
    get _authToken() {
        if (!window || !window.localStorage)
            return null;
        return window.localStorage.getItem(AUTH_TOKEN_LS_ID) || null;
    }
    set _authToken(value) {
        if (!window || !window.localStorage)
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


// CONCATENATED MODULE: ./components/layout/layout.component.ts


class LayoutComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/layout/index.ts


// CONCATENATED MODULE: ./components/main-page/main-page.component.ts



class MainPageComponent {
    constructor(_router, _apiService) {
        this._router = _router;
        this._apiService = _apiService;
        this.publications = new Array();
        this.currencies = new Array();
        this.videos = [];
    }
    ngOnInit() {
        this._apiService
            .get('/publications')
            .subscribe(items => {
            this.publications = items;
        });
        this._apiService
            .get('/currencies')
            .subscribe(items => {
            this.currencies = items;
        });
        this.videos = ['1', '2', '3'];
    }
}

// CONCATENATED MODULE: ./components/main-page/index.ts


// CONCATENATED MODULE: ./components/no-content/no-content.component.ts

class NoContentComponent {
}

// CONCATENATED MODULE: ./components/no-content/index.ts


// CONCATENATED MODULE: ./components/index.ts





// CONCATENATED MODULE: ./app.components.ts

const COMPONENTS = [
    auth_dialog_component_AuthDialogComponent,
    NoContentComponent,
    MainPageComponent,
];
const ENTRY_COMPONENTS = [
    auth_dialog_component_AuthDialogComponent,
];

// CONCATENATED MODULE: ./app.front.module.ts



class AppModule {
}

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/dialog/typings/index.ngfactory.js
var index_ngfactory = __webpack_require__(145);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/snack-bar/typings/index.ngfactory.js
var typings_index_ngfactory = __webpack_require__(146);

// CONCATENATED MODULE: ./components/main-page/main-page.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./pipes/image/enveroments.ts
let RAW_SERVER_VALUE = "https://raw.bitjournal.io";
const RAW_SERVER = RAW_SERVER_VALUE;

// CONCATENATED MODULE: ./pipes/image/image.pipe.ts


const image_pipe_PATH_REGEXP = /^\/?(.*)/;
const EMPTY_PNG = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
class image_pipe_ImagePipe {
    transform(value) {
        if (!value)
            return EMPTY_PNG;
        const match = image_pipe_PATH_REGEXP.exec(String(value).trim());
        if (!match)
            return EMPTY_PNG;
        return RAW_SERVER + '/' + (match && match[1]);
    }
}

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(2);

// CONCATENATED MODULE: ./components/main-page/main-page.component.ngfactory.js
/** PURE_IMPORTS_START ._main_page.component.css.ngstyle,_angular_core,.._.._pipes_image_image.pipe,_angular_common,._main_page.component,_angular_router,.._.._services_api_api.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._main_page.component.css.ngstyle,_angular_core,.._.._pipes_image_image.pipe,_angular_common,._main_page.component,_angular_router,.._.._services_api_api.service PURE_IMPORTS_END */







var styles_MainPageComponent = [styles];
var RenderType_MainPageComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_MainPageComponent, data: {} });

function View_MainPageComponent_1(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_17" /* ɵppd */](2, 1), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](4, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = core["_22" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.image)); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.symbol; _ck(_v, 4, 0, currVal_1); }); }
function View_MainPageComponent_2(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_MainPageComponent_3(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "a", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_17" /* ɵppd */](2, 1), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](4, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = core["_22" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.image)); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_1); }); }
function View_MainPageComponent_0(_l) { return core["_23" /* ɵvid */](0, [core["_16" /* ɵpid */](0, image_pipe_ImagePipe, []), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["Main"])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_MainPageComponent_1)), core["_2" /* ɵdid */](5, 802816, null, 0, common["h" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_MainPageComponent_2)), core["_2" /* ɵdid */](8, 802816, null, 0, common["h" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["Y" /* ɵand */](16777216, null, null, 1, null, View_MainPageComponent_3)), core["_2" /* ɵdid */](10, 802816, null, 0, common["h" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currencies; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.videos; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.publications; _ck(_v, 10, 0, currVal_2); }, null); }
function View_MainPageComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "main-page", [], null, null, null, View_MainPageComponent_0, RenderType_MainPageComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, MainPageComponent, [router["k" /* Router */], api_service_APIService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MainPageComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("main-page", MainPageComponent, View_MainPageComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/no-content/no-content.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var no_content_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/no-content/no-content.component.ngfactory.js
/** PURE_IMPORTS_START ._no_content.component.css.ngstyle,_angular_core,._no_content.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._no_content.component.css.ngstyle,_angular_core,._no_content.component PURE_IMPORTS_END */



var styles_NoContentComponent = [no_content_component_css_ngstyle_styles];
var RenderType_NoContentComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_NoContentComponent, data: {} });

function View_NoContentComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 3, "h1", [["class", "no-content"]], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["404"])), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["Page not fount"]))], null, null); }
function View_NoContentComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "no-content", [], null, null, null, View_NoContentComponent_0, RenderType_NoContentComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, NoContentComponent, [], null, null)], null, null); }
var NoContentComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("no-content", NoContentComponent, View_NoContentComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/auth/auth-dialog.component.css.shim.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var auth_dialog_component_css_shim_ngstyle_styles = [".auth-form-title[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center}.auth-form[_ngcontent-%COMP%]{min-width:300px}.auth-form-row[_ngcontent-%COMP%]{margin-top:10px;display:block;width:100%}.auth-form-row[_ngcontent-%COMP%]:first-child{margin-top:0}.auth-form-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}"];


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/form-field.es5.js
var form_field_es5 = __webpack_require__(22);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/dialog.es5.js
var dialog_es5 = __webpack_require__(37);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/form-field/typings/index.ngfactory.js
var form_field_typings_index_ngfactory = __webpack_require__(147);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/core.es5.js
var core_es5 = __webpack_require__(3);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/input.es5.js
var input_es5 = __webpack_require__(45);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/platform.es5.js
var platform_es5 = __webpack_require__(10);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/button/typings/index.ngfactory.js
var button_typings_index_ngfactory = __webpack_require__(148);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/button.es5.js
var button_es5 = __webpack_require__(32);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/a11y.es5.js
var a11y_es5 = __webpack_require__(7);

// CONCATENATED MODULE: ./components/auth/auth-dialog.component.ngfactory.js
/** PURE_IMPORTS_START ._auth_dialog.component.css.shim.ngstyle,_angular_core,_angular_material_form_field,_angular_material_dialog,_angular_forms,.._.._.._.._node_modules__angular_material_form_field_typings_index.ngfactory,_angular_material_core,_angular_material_input,_angular_cdk_platform,_angular_common,.._.._.._.._node_modules__angular_material_button_typings_index.ngfactory,_angular_material_button,_angular_cdk_a11y,._auth_dialog.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._auth_dialog.component.css.shim.ngstyle,_angular_core,_angular_material_form_field,_angular_material_dialog,_angular_forms,.._.._.._.._node_modules__angular_material_form_field_typings_index.ngfactory,_angular_material_core,_angular_material_input,_angular_cdk_platform,_angular_common,.._.._.._.._node_modules__angular_material_button_typings_index.ngfactory,_angular_material_button,_angular_cdk_a11y,._auth_dialog.component PURE_IMPORTS_END */














var styles_AuthDialogComponent = [auth_dialog_component_css_shim_ngstyle_styles];
var RenderType_AuthDialogComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 0, styles: styles_AuthDialogComponent, data: {} });

function View_AuthDialogComponent_1(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_2" /* ɵdid */](1, 16384, [[3, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_21" /* ɵted */](-1, null, ["Email is "])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["required"]))], null, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_2(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_2" /* ɵdid */](1, 16384, [[3, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_21" /* ɵted */](-1, null, ["Please enter a valid email address"]))], null, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_3(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), core["_2" /* ɵdid */](1, 16384, [[9, 4]], 0, form_field_es5["a" /* MatError */], [], null, null), (_l()(), core["_21" /* ɵted */](-1, null, ["Password is "])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["required"]))], null, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_AuthDialogComponent_0(_l) {
    return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "h1", [["class", "auth-form-title mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), core["_2" /* ɵdid */](1, 81920, null, 0, dialog_es5["j" /* MatDialogTitle */], [[2, dialog_es5["f" /* MatDialogContainer */]]], null, null), (_l()(), core["_21" /* ɵted */](-1, null, ["Authorization"])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 44, "form", [["class", "auth-form mat-dialog-content"], ["mat-dialog-content", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
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
        }, null, null)), core["_2" /* ɵdid */](4, 16384, null, 0, esm5_forms["r" /* ɵbf */], [], null, null), core["_2" /* ɵdid */](5, 540672, null, 0, esm5_forms["g" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_18" /* ɵprd */](2048, null, esm5_forms["c" /* ControlContainer */], null, [esm5_forms["g" /* FormGroupDirective */]]), core["_2" /* ɵdid */](7, 16384, null, 0, esm5_forms["m" /* NgControlStatusGroup */], [esm5_forms["c" /* ControlContainer */]], null, null), core["_2" /* ɵdid */](8, 16384, null, 0, dialog_es5["g" /* MatDialogContent */], [], null, null), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 19, "mat-form-field", [["class", "auth-form-row mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["_2" /* ɵdid */](10, 7389184, null, 6, form_field_es5["b" /* MatFormField */], [core["k" /* ElementRef */], core["h" /* ChangeDetectorRef */], [2, core_es5["e" /* MAT_PLACEHOLDER_GLOBAL_OPTIONS */]]], null, null), core["_19" /* ɵqud */](335544320, 1, { _control: 0 }), core["_19" /* ɵqud */](335544320, 2, { _placeholderChild: 0 }), core["_19" /* ɵqud */](603979776, 3, { _errorChildren: 1 }), core["_19" /* ɵqud */](603979776, 4, { _hintChildren: 1 }), core["_19" /* ɵqud */](603979776, 5, { _prefixChildren: 1 }), core["_19" /* ɵqud */](603979776, 6, { _suffixChildren: 1 }), (_l()(), core["_3" /* ɵeld */](17, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "email"], ["matInput", ""], ["placeholder", "E-mail"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 18)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["_15" /* ɵnov */](_v, 18).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["_15" /* ɵnov */](_v, 18)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["_15" /* ɵnov */](_v, 18)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("blur" === en)) {
                var pd_4 = (core["_15" /* ɵnov */](_v, 23)._focusChanged(false) !== false);
                ad = (pd_4 && ad);
            }
            if (("focus" === en)) {
                var pd_5 = (core["_15" /* ɵnov */](_v, 23)._focusChanged(true) !== false);
                ad = (pd_5 && ad);
            }
            if (("input" === en)) {
                var pd_6 = (core["_15" /* ɵnov */](_v, 23)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](18, 16384, null, 0, esm5_forms["d" /* DefaultValueAccessor */], [core["C" /* Renderer2 */], core["k" /* ElementRef */], [2, esm5_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["_18" /* ɵprd */](1024, null, esm5_forms["j" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm5_forms["d" /* DefaultValueAccessor */]]), core["_2" /* ɵdid */](20, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["c" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["j" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_18" /* ɵprd */](2048, null, esm5_forms["k" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_2" /* ɵdid */](22, 16384, null, 0, esm5_forms["l" /* NgControlStatus */], [esm5_forms["k" /* NgControl */]], null, null), core["_2" /* ɵdid */](23, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [2, esm5_forms["k" /* NgControl */]], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["c" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["_18" /* ɵprd */](2048, [[1, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["Y" /* ɵand */](16777216, null, 4, 1, null, View_AuthDialogComponent_1)), core["_2" /* ɵdid */](26, 16384, null, 0, common["i" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Y" /* ɵand */](16777216, null, 4, 1, null, View_AuthDialogComponent_2)), core["_2" /* ɵdid */](28, 16384, null, 0, common["i" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](29, 0, null, null, 17, "mat-form-field", [["class", "auth-form-row mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["_2" /* ɵdid */](30, 7389184, null, 6, form_field_es5["b" /* MatFormField */], [core["k" /* ElementRef */], core["h" /* ChangeDetectorRef */], [2, core_es5["e" /* MAT_PLACEHOLDER_GLOBAL_OPTIONS */]]], null, null), core["_19" /* ɵqud */](335544320, 7, { _control: 0 }), core["_19" /* ɵqud */](335544320, 8, { _placeholderChild: 0 }), core["_19" /* ɵqud */](603979776, 9, { _errorChildren: 1 }), core["_19" /* ɵqud */](603979776, 10, { _hintChildren: 1 }), core["_19" /* ɵqud */](603979776, 11, { _prefixChildren: 1 }), core["_19" /* ɵqud */](603979776, 12, { _suffixChildren: 1 }), (_l()(), core["_3" /* ɵeld */](37, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "password"], ["matInput", ""], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
            var ad = true;
            if (("input" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 38)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (core["_15" /* ɵnov */](_v, 38).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("compositionstart" === en)) {
                var pd_2 = (core["_15" /* ɵnov */](_v, 38)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (("compositionend" === en)) {
                var pd_3 = (core["_15" /* ɵnov */](_v, 38)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (("blur" === en)) {
                var pd_4 = (core["_15" /* ɵnov */](_v, 43)._focusChanged(false) !== false);
                ad = (pd_4 && ad);
            }
            if (("focus" === en)) {
                var pd_5 = (core["_15" /* ɵnov */](_v, 43)._focusChanged(true) !== false);
                ad = (pd_5 && ad);
            }
            if (("input" === en)) {
                var pd_6 = (core["_15" /* ɵnov */](_v, 43)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](38, 16384, null, 0, esm5_forms["d" /* DefaultValueAccessor */], [core["C" /* Renderer2 */], core["k" /* ElementRef */], [2, esm5_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["_18" /* ɵprd */](1024, null, esm5_forms["j" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm5_forms["d" /* DefaultValueAccessor */]]), core["_2" /* ɵdid */](40, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["c" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["j" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_18" /* ɵprd */](2048, null, esm5_forms["k" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_2" /* ɵdid */](42, 16384, null, 0, esm5_forms["l" /* NgControlStatus */], [esm5_forms["k" /* NgControl */]], null, null), core["_2" /* ɵdid */](43, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [2, esm5_forms["k" /* NgControl */]], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["c" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["_18" /* ɵprd */](2048, [[7, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["Y" /* ɵand */](16777216, null, 4, 1, null, View_AuthDialogComponent_3)), core["_2" /* ɵdid */](46, 16384, null, 0, common["i" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](47, 0, null, null, 0, "input", [["hidden", ""], ["type", "submit"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](48, 0, null, null, 5, "mat-dialog-actions", [["class", "mat-dialog-actions"]], null, null, null, null, null)), core["_2" /* ɵdid */](49, 16384, null, 0, dialog_es5["e" /* MatDialogActions */], [], null, null), (_l()(), core["_3" /* ɵeld */](50, 0, null, null, 3, "button", [["class", "auth-form-button mat-button"], ["color", "primary"], ["mat-button", ""], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onSubmit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_typings_index_ngfactory["b" /* View_MatButton_0 */], button_typings_index_ngfactory["a" /* RenderType_MatButton */])), core["_2" /* ɵdid */](51, 180224, null, 0, button_es5["b" /* MatButton */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], a11y_es5["g" /* FocusMonitor */]], { disabled: [0, "disabled"], color: [1, "color"] }, null), core["_2" /* ɵdid */](52, 16384, null, 0, button_es5["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), core["_21" /* ɵted */](-1, 0, ["Submit"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_8 = _co.authForm; _ck(_v, 5, 0, currVal_8); var currVal_40 = "email"; _ck(_v, 20, 0, currVal_40); var currVal_41 = "E-mail"; var currVal_42 = "text"; _ck(_v, 23, 0, currVal_41, currVal_42); var currVal_43 = _co.authForm.controls.email.hasError("required"); _ck(_v, 26, 0, currVal_43); var currVal_44 = _co.authForm.controls.email.hasError("email"); _ck(_v, 28, 0, currVal_44); var currVal_76 = "password"; _ck(_v, 40, 0, currVal_76); var currVal_77 = "Password"; var currVal_78 = "password"; _ck(_v, 43, 0, currVal_77, currVal_78); var currVal_79 = _co.authForm.controls.password.hasError("required"); _ck(_v, 46, 0, currVal_79); var currVal_81 = _co.authForm.invalid; var currVal_82 = "primary"; _ck(_v, 51, 0, currVal_81, currVal_82); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_15" /* ɵnov */](_v, 7).ngClassUntouched; var currVal_2 = core["_15" /* ɵnov */](_v, 7).ngClassTouched; var currVal_3 = core["_15" /* ɵnov */](_v, 7).ngClassPristine; var currVal_4 = core["_15" /* ɵnov */](_v, 7).ngClassDirty; var currVal_5 = core["_15" /* ɵnov */](_v, 7).ngClassValid; var currVal_6 = core["_15" /* ɵnov */](_v, 7).ngClassInvalid; var currVal_7 = core["_15" /* ɵnov */](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = core["_15" /* ɵnov */](_v, 10)._control.errorState; var currVal_10 = core["_15" /* ɵnov */](_v, 10)._control.errorState; var currVal_11 = core["_15" /* ɵnov */](_v, 10)._canPlaceholderFloat; var currVal_12 = (core["_15" /* ɵnov */](_v, 10)._control.shouldPlaceholderFloat || core["_15" /* ɵnov */](_v, 10)._shouldAlwaysFloat); var currVal_13 = core["_15" /* ɵnov */](_v, 10)._control.disabled; var currVal_14 = core["_15" /* ɵnov */](_v, 10)._control.focused; var currVal_15 = (core["_15" /* ɵnov */](_v, 10).color == "primary"); var currVal_16 = (core["_15" /* ɵnov */](_v, 10).color == "accent"); var currVal_17 = (core["_15" /* ɵnov */](_v, 10).color == "warn"); var currVal_18 = core["_15" /* ɵnov */](_v, 10)._shouldForward("untouched"); var currVal_19 = core["_15" /* ɵnov */](_v, 10)._shouldForward("touched"); var currVal_20 = core["_15" /* ɵnov */](_v, 10)._shouldForward("pristine"); var currVal_21 = core["_15" /* ɵnov */](_v, 10)._shouldForward("dirty"); var currVal_22 = core["_15" /* ɵnov */](_v, 10)._shouldForward("valid"); var currVal_23 = core["_15" /* ɵnov */](_v, 10)._shouldForward("invalid"); var currVal_24 = core["_15" /* ɵnov */](_v, 10)._shouldForward("pending"); _ck(_v, 9, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24]); var currVal_25 = core["_15" /* ɵnov */](_v, 22).ngClassUntouched; var currVal_26 = core["_15" /* ɵnov */](_v, 22).ngClassTouched; var currVal_27 = core["_15" /* ɵnov */](_v, 22).ngClassPristine; var currVal_28 = core["_15" /* ɵnov */](_v, 22).ngClassDirty; var currVal_29 = core["_15" /* ɵnov */](_v, 22).ngClassValid; var currVal_30 = core["_15" /* ɵnov */](_v, 22).ngClassInvalid; var currVal_31 = core["_15" /* ɵnov */](_v, 22).ngClassPending; var currVal_32 = core["_15" /* ɵnov */](_v, 23).id; var currVal_33 = core["_15" /* ɵnov */](_v, 23).placeholder; var currVal_34 = core["_15" /* ɵnov */](_v, 23).disabled; var currVal_35 = core["_15" /* ɵnov */](_v, 23).required; var currVal_36 = core["_15" /* ɵnov */](_v, 23).readonly; var currVal_37 = (core["_15" /* ɵnov */](_v, 23)._ariaDescribedby || null); var currVal_38 = core["_15" /* ɵnov */](_v, 23).errorState; var currVal_39 = core["_15" /* ɵnov */](_v, 23).required.toString(); _ck(_v, 17, 1, [currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]); var currVal_45 = core["_15" /* ɵnov */](_v, 30)._control.errorState; var currVal_46 = core["_15" /* ɵnov */](_v, 30)._control.errorState; var currVal_47 = core["_15" /* ɵnov */](_v, 30)._canPlaceholderFloat; var currVal_48 = (core["_15" /* ɵnov */](_v, 30)._control.shouldPlaceholderFloat || core["_15" /* ɵnov */](_v, 30)._shouldAlwaysFloat); var currVal_49 = core["_15" /* ɵnov */](_v, 30)._control.disabled; var currVal_50 = core["_15" /* ɵnov */](_v, 30)._control.focused; var currVal_51 = (core["_15" /* ɵnov */](_v, 30).color == "primary"); var currVal_52 = (core["_15" /* ɵnov */](_v, 30).color == "accent"); var currVal_53 = (core["_15" /* ɵnov */](_v, 30).color == "warn"); var currVal_54 = core["_15" /* ɵnov */](_v, 30)._shouldForward("untouched"); var currVal_55 = core["_15" /* ɵnov */](_v, 30)._shouldForward("touched"); var currVal_56 = core["_15" /* ɵnov */](_v, 30)._shouldForward("pristine"); var currVal_57 = core["_15" /* ɵnov */](_v, 30)._shouldForward("dirty"); var currVal_58 = core["_15" /* ɵnov */](_v, 30)._shouldForward("valid"); var currVal_59 = core["_15" /* ɵnov */](_v, 30)._shouldForward("invalid"); var currVal_60 = core["_15" /* ɵnov */](_v, 30)._shouldForward("pending"); _ck(_v, 29, 1, [currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60]); var currVal_61 = core["_15" /* ɵnov */](_v, 42).ngClassUntouched; var currVal_62 = core["_15" /* ɵnov */](_v, 42).ngClassTouched; var currVal_63 = core["_15" /* ɵnov */](_v, 42).ngClassPristine; var currVal_64 = core["_15" /* ɵnov */](_v, 42).ngClassDirty; var currVal_65 = core["_15" /* ɵnov */](_v, 42).ngClassValid; var currVal_66 = core["_15" /* ɵnov */](_v, 42).ngClassInvalid; var currVal_67 = core["_15" /* ɵnov */](_v, 42).ngClassPending; var currVal_68 = core["_15" /* ɵnov */](_v, 43).id; var currVal_69 = core["_15" /* ɵnov */](_v, 43).placeholder; var currVal_70 = core["_15" /* ɵnov */](_v, 43).disabled; var currVal_71 = core["_15" /* ɵnov */](_v, 43).required; var currVal_72 = core["_15" /* ɵnov */](_v, 43).readonly; var currVal_73 = (core["_15" /* ɵnov */](_v, 43)._ariaDescribedby || null); var currVal_74 = core["_15" /* ɵnov */](_v, 43).errorState; var currVal_75 = core["_15" /* ɵnov */](_v, 43).required.toString(); _ck(_v, 37, 1, [currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75]); var currVal_80 = (core["_15" /* ɵnov */](_v, 51).disabled || null); _ck(_v, 50, 0, currVal_80); });
}
function View_AuthDialogComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "auth-dialog", [], null, null, null, View_AuthDialogComponent_0, RenderType_AuthDialogComponent)), core["_2" /* ɵdid */](1, 49152, null, 0, auth_dialog_component_AuthDialogComponent, [dialog_es5["i" /* MatDialogRef */], esm5_forms["e" /* FormBuilder */], dialog_es5["a" /* MAT_DIALOG_DATA */]], null, null)], null, null); }
var AuthDialogComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("auth-dialog", auth_dialog_component_AuthDialogComponent, View_AuthDialogComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/layout/layout.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var layout_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/layout/layout.component.ngfactory.js
/** PURE_IMPORTS_START ._layout.component.css.ngstyle,_angular_core,_angular_router,._layout.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._layout.component.css.ngstyle,_angular_core,_angular_router,._layout.component PURE_IMPORTS_END */




var styles_LayoutComponent = [layout_component_css_ngstyle_styles];
var RenderType_LayoutComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_LayoutComponent, data: {} });

function View_LayoutComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core["_2" /* ɵdid */](1, 212992, null, 0, router["m" /* RouterOutlet */], [router["b" /* ChildrenOutletContexts */], core["N" /* ViewContainerRef */], core["j" /* ComponentFactoryResolver */], [8, null], core["h" /* ChangeDetectorRef */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LayoutComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "body", [], null, null, null, View_LayoutComponent_0, RenderType_LayoutComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, LayoutComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LayoutComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("body", LayoutComponent, View_LayoutComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/browser.js
var browser = __webpack_require__(90);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/animations.js
var animations = __webpack_require__(149);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/animations.js
var esm5_animations = __webpack_require__(14);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/bidi.es5.js
var bidi_es5 = __webpack_require__(9);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/scrolling.es5.js
var scrolling_es5 = __webpack_require__(31);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/overlay.es5.js
var overlay_es5 = __webpack_require__(18);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/sort.es5.js
var sort_es5 = __webpack_require__(88);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/layout.es5.js
var layout_es5 = __webpack_require__(58);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/snack-bar.es5.js
var snack_bar_es5 = __webpack_require__(57);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/portal.es5.js
var portal_es5 = __webpack_require__(19);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/table.es5.js
var table_es5 = __webpack_require__(59);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/table.es5.js
var esm5_table_es5 = __webpack_require__(89);

// CONCATENATED MODULE: ./app.front.module.ngfactory.js
/** PURE_IMPORTS_START _angular_core,._app.front.module,._components_layout_layout.component,.._.._node_modules__angular_material_dialog_typings_index.ngfactory,.._.._node_modules__angular_material_snack_bar_typings_index.ngfactory,._components_main_page_main_page.component.ngfactory,._components_no_content_no_content.component.ngfactory,._components_auth_auth_dialog.component.ngfactory,._components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,._services_message_message.service,._services_user_user.service,._services_api_api.service,._services_youtube_youtube.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,._components_main_page_main_page.component,._components_no_content_no_content.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,._app.front.module,._components_layout_layout.component,.._.._node_modules__angular_material_dialog_typings_index.ngfactory,.._.._node_modules__angular_material_snack_bar_typings_index.ngfactory,._components_main_page_main_page.component.ngfactory,._components_no_content_no_content.component.ngfactory,._components_auth_auth_dialog.component.ngfactory,._components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,._services_message_message.service,._services_user_user.service,._services_api_api.service,._services_youtube_youtube.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,._components_main_page_main_page.component,._components_no_content_no_content.component PURE_IMPORTS_END */







































var AppModuleNgFactory = /*@__PURE__*/ core["_0" /* ɵcmf */](AppModule, [LayoutComponent], function (_l) { return core["_12" /* ɵmod */]([core["_13" /* ɵmpd */](512, core["j" /* ComponentFactoryResolver */], core["W" /* ɵCodegenComponentFactoryResolver */], [[8, [index_ngfactory["a" /* MatDialogContainerNgFactory */], typings_index_ngfactory["a" /* MatSnackBarContainerNgFactory */], typings_index_ngfactory["b" /* SimpleSnackBarNgFactory */], MainPageComponentNgFactory, NoContentComponentNgFactory, AuthDialogComponentNgFactory, LayoutComponentNgFactory]], [3, core["j" /* ComponentFactoryResolver */]], core["w" /* NgModuleRef */]]), core["_13" /* ɵmpd */](5120, core["t" /* LOCALE_ID */], core["_11" /* ɵm */], [[3, core["t" /* LOCALE_ID */]]]), core["_13" /* ɵmpd */](4608, common["k" /* NgLocalization */], common["j" /* NgLocaleLocalization */], [core["t" /* LOCALE_ID */], [2, common["q" /* ɵa */]]]), core["_13" /* ɵmpd */](5120, core["r" /* IterableDiffers */], core["_8" /* ɵk */], []), core["_13" /* ɵmpd */](5120, core["s" /* KeyValueDiffers */], core["_9" /* ɵl */], []), core["_13" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["t" /* ɵe */], [common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](6144, core["F" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_13" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], platform_browser["g" /* HammerGestureConfig */], []), core["_13" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["l" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["p" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["o" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["c" /* DOCUMENT */], core["y" /* NgZone */], common["c" /* DOCUMENT */], common["c" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_13" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](135680, platform_browser["n" /* ɵDomSharedStylesHost */], platform_browser["n" /* ɵDomSharedStylesHost */], [common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["m" /* ɵDomRendererFactory2 */], platform_browser["m" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["n" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](5120, browser["a" /* AnimationDriver */], animations["d" /* ɵc */], []), core["_13" /* ɵmpd */](5120, browser["c" /* ɵAnimationStyleNormalizer */], animations["e" /* ɵd */], []), core["_13" /* ɵmpd */](4608, browser["b" /* ɵAnimationEngine */], animations["c" /* ɵb */], [browser["a" /* AnimationDriver */], browser["c" /* ɵAnimationStyleNormalizer */]]), core["_13" /* ɵmpd */](5120, core["D" /* RendererFactory2 */], animations["f" /* ɵe */], [platform_browser["m" /* ɵDomRendererFactory2 */], browser["b" /* ɵAnimationEngine */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](6144, platform_browser["q" /* ɵSharedStylesHost */], null, [platform_browser["n" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](4608, core["L" /* Testability */], core["L" /* Testability */], [core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_animations["b" /* AnimationBuilder */], animations["b" /* ɵBrowserAnimationBuilder */], [core["D" /* RendererFactory2 */], platform_browser["b" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_forms["s" /* ɵi */], esm5_forms["s" /* ɵi */], []), core["_13" /* ɵmpd */](4608, esm5_forms["e" /* FormBuilder */], esm5_forms["e" /* FormBuilder */], []), core["_13" /* ɵmpd */](4608, http["k" /* HttpXsrfTokenExtractor */], http["p" /* ɵg */], [common["c" /* DOCUMENT */], core["A" /* PLATFORM_ID */], http["n" /* ɵe */]]), core["_13" /* ɵmpd */](4608, http["q" /* ɵh */], http["q" /* ɵh */], [http["k" /* HttpXsrfTokenExtractor */], http["o" /* ɵf */]]), core["_13" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["q" /* ɵh */]]), core["_13" /* ɵmpd */](4608, http["m" /* ɵd */], http["m" /* ɵd */], []), core["_13" /* ɵmpd */](6144, http["l" /* XhrFactory */], null, [http["m" /* ɵd */]]), core["_13" /* ɵmpd */](4608, http["j" /* HttpXhrBackend */], http["j" /* HttpXhrBackend */], [http["l" /* XhrFactory */]]), core["_13" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["j" /* HttpXhrBackend */]]), core["_13" /* ɵmpd */](5120, http["g" /* HttpHandler */], http["r" /* ɵinterceptingHandler */], [http["b" /* HttpBackend */], [2, http["a" /* HTTP_INTERCEPTORS */]]]), core["_13" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["g" /* HttpHandler */]]), core["_13" /* ɵmpd */](6144, bidi_es5["b" /* DIR_DOCUMENT */], null, [common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, bidi_es5["c" /* Directionality */], bidi_es5["c" /* Directionality */], [[2, bidi_es5["b" /* DIR_DOCUMENT */]]]), core["_13" /* ɵmpd */](4608, platform_es5["a" /* Platform */], platform_es5["a" /* Platform */], []), core["_13" /* ɵmpd */](5120, scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, scrolling_es5["c" /* ScrollDispatcher */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, scrolling_es5["f" /* ViewportRuler */], scrolling_es5["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, scrolling_es5["f" /* ViewportRuler */]], platform_es5["a" /* Platform */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["f" /* ScrollStrategyOptions */], [scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["f" /* ViewportRuler */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](5120, overlay_es5["c" /* OverlayContainer */], overlay_es5["g" /* ɵa */], [[3, overlay_es5["c" /* OverlayContainer */]], common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["k" /* ɵh */], overlay_es5["k" /* ɵh */], [scrolling_es5["f" /* ViewportRuler */], common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["d" /* OverlayKeyboardDispatcher */], overlay_es5["j" /* ɵf */], [[3, overlay_es5["d" /* OverlayKeyboardDispatcher */]], common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["a" /* Overlay */], overlay_es5["a" /* Overlay */], [overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["c" /* OverlayContainer */], core["j" /* ComponentFactoryResolver */], overlay_es5["k" /* ɵh */], overlay_es5["d" /* OverlayKeyboardDispatcher */], core["g" /* ApplicationRef */], core["q" /* Injector */], core["y" /* NgZone */], common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["h" /* ɵc */], overlay_es5["i" /* ɵd */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, a11y_es5["i" /* InteractivityChecker */], a11y_es5["i" /* InteractivityChecker */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](4608, a11y_es5["h" /* FocusTrapFactory */], a11y_es5["h" /* FocusTrapFactory */], [a11y_es5["i" /* InteractivityChecker */], core["y" /* NgZone */], common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](136192, a11y_es5["d" /* AriaDescriber */], a11y_es5["b" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, a11y_es5["d" /* AriaDescriber */]], common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["l" /* LiveAnnouncer */], a11y_es5["k" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, a11y_es5["l" /* LiveAnnouncer */]], [2, a11y_es5["j" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], common["c" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["g" /* FocusMonitor */], a11y_es5["e" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, a11y_es5["g" /* FocusMonitor */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], dialog_es5["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, dialog_es5["d" /* MatDialog */], dialog_es5["d" /* MatDialog */], [overlay_es5["a" /* Overlay */], core["q" /* Injector */], [2, common["f" /* Location */]], dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, dialog_es5["d" /* MatDialog */]]]), core["_13" /* ɵmpd */](5120, sort_es5["b" /* MatSortHeaderIntl */], sort_es5["a" /* MAT_SORT_HEADER_INTL_PROVIDER_FACTORY */], [[3, sort_es5["b" /* MatSortHeaderIntl */]]]), core["_13" /* ɵmpd */](4608, layout_es5["d" /* MediaMatcher */], layout_es5["d" /* MediaMatcher */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](135680, layout_es5["a" /* BreakpointObserver */], layout_es5["a" /* BreakpointObserver */], [layout_es5["d" /* MediaMatcher */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, snack_bar_es5["b" /* MatSnackBar */], snack_bar_es5["b" /* MatSnackBar */], [overlay_es5["a" /* Overlay */], a11y_es5["l" /* LiveAnnouncer */], core["q" /* Injector */], layout_es5["a" /* BreakpointObserver */], [3, snack_bar_es5["b" /* MatSnackBar */]]]), core["_13" /* ɵmpd */](4608, core_es5["c" /* ErrorStateMatcher */], core_es5["c" /* ErrorStateMatcher */], []), core["_13" /* ɵmpd */](5120, router["a" /* ActivatedRoute */], router["v" /* ɵf */], [router["k" /* Router */]]), core["_13" /* ɵmpd */](4608, router["e" /* PreloadAllModules */], router["e" /* PreloadAllModules */], []), core["_13" /* ɵmpd */](6144, router["f" /* PreloadingStrategy */], null, [router["e" /* PreloadAllModules */]]), core["_13" /* ɵmpd */](135680, router["n" /* RouterPreloader */], router["n" /* RouterPreloader */], [router["k" /* Router */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], core["q" /* Injector */], router["f" /* PreloadingStrategy */]]), core["_13" /* ɵmpd */](4608, router["d" /* NoPreloading */], router["d" /* NoPreloading */], []), core["_13" /* ɵmpd */](5120, router["h" /* ROUTER_INITIALIZER */], router["y" /* ɵi */], [router["w" /* ɵg */]]), core["_13" /* ɵmpd */](5120, core["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [router["h" /* ROUTER_INITIALIZER */]]), core["_13" /* ɵmpd */](4608, MessageService, MessageService, [snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, user_service_UserService, user_service_UserService, [http["c" /* HttpClient */], dialog_es5["d" /* MatDialog */], MessageService, snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, api_service_APIService, api_service_APIService, [http["c" /* HttpClient */], router["k" /* Router */], user_service_UserService, MessageService]), core["_13" /* ɵmpd */](4608, youtube_service_YouTubeService, youtube_service_YouTubeService, [http["c" /* HttpClient */], MessageService]), core["_13" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_13" /* ɵmpd */](1024, core["m" /* ErrorHandler */], platform_browser["s" /* ɵa */], []), core["_13" /* ɵmpd */](1024, core["x" /* NgProbeToken */], function () { return [router["r" /* ɵb */]()]; }, []), core["_13" /* ɵmpd */](256, core["c" /* APP_ID */], "null-vnull", []), core["_13" /* ɵmpd */](2048, platform_browser["r" /* ɵTRANSITION_ID */], null, [core["c" /* APP_ID */]]), core["_13" /* ɵmpd */](512, router["w" /* ɵg */], router["w" /* ɵg */], [core["q" /* Injector */]]), core["_13" /* ɵmpd */](1024, core["d" /* APP_INITIALIZER */], function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [platform_browser["w" /* ɵh */](p0_0), platform_browser["u" /* ɵf */](p1_0, p1_1, p1_2), router["x" /* ɵh */](p2_0)]; }, [[2, core["x" /* NgProbeToken */]], platform_browser["r" /* ɵTRANSITION_ID */], common["c" /* DOCUMENT */], core["q" /* Injector */], router["w" /* ɵg */]]), core["_13" /* ɵmpd */](512, core["e" /* ApplicationInitStatus */], core["e" /* ApplicationInitStatus */], [[2, core["d" /* APP_INITIALIZER */]]]), core["_13" /* ɵmpd */](131584, core["g" /* ApplicationRef */], core["g" /* ApplicationRef */], [core["y" /* NgZone */], core["X" /* ɵConsole */], core["q" /* Injector */], core["m" /* ErrorHandler */], core["j" /* ComponentFactoryResolver */], core["e" /* ApplicationInitStatus */]]), core["_13" /* ɵmpd */](512, core["f" /* ApplicationModule */], core["f" /* ApplicationModule */], [core["g" /* ApplicationRef */]]), core["_13" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_13" /* ɵmpd */](512, animations["a" /* BrowserAnimationsModule */], animations["a" /* BrowserAnimationsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["q" /* ɵba */], esm5_forms["q" /* ɵba */], []), core["_13" /* ɵmpd */](512, esm5_forms["h" /* FormsModule */], esm5_forms["h" /* FormsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["o" /* ReactiveFormsModule */], esm5_forms["o" /* ReactiveFormsModule */], []), core["_13" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_13" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_13" /* ɵmpd */](512, bidi_es5["a" /* BidiModule */], bidi_es5["a" /* BidiModule */], []), core["_13" /* ɵmpd */](512, portal_es5["g" /* PortalModule */], portal_es5["g" /* PortalModule */], []), core["_13" /* ɵmpd */](512, platform_es5["b" /* PlatformModule */], platform_es5["b" /* PlatformModule */], []), core["_13" /* ɵmpd */](512, scrolling_es5["b" /* ScrollDispatchModule */], scrolling_es5["b" /* ScrollDispatchModule */], []), core["_13" /* ɵmpd */](512, overlay_es5["e" /* OverlayModule */], overlay_es5["e" /* OverlayModule */], []), core["_13" /* ɵmpd */](512, a11y_es5["a" /* A11yModule */], a11y_es5["a" /* A11yModule */], []), core["_13" /* ɵmpd */](256, core_es5["d" /* MATERIAL_SANITY_CHECKS */], true, []), core["_13" /* ɵmpd */](512, core_es5["g" /* MatCommonModule */], core_es5["g" /* MatCommonModule */], [[2, core_es5["d" /* MATERIAL_SANITY_CHECKS */]]]), core["_13" /* ɵmpd */](512, dialog_es5["h" /* MatDialogModule */], dialog_es5["h" /* MatDialogModule */], []), core["_13" /* ɵmpd */](512, sort_es5["c" /* MatSortModule */], sort_es5["c" /* MatSortModule */], []), core["_13" /* ɵmpd */](512, table_es5["k" /* CdkTableModule */], table_es5["k" /* CdkTableModule */], []), core["_13" /* ɵmpd */](512, esm5_table_es5["a" /* MatTableModule */], esm5_table_es5["a" /* MatTableModule */], []), core["_13" /* ɵmpd */](512, layout_es5["c" /* LayoutModule */], layout_es5["c" /* LayoutModule */], []), core["_13" /* ɵmpd */](512, snack_bar_es5["d" /* MatSnackBarModule */], snack_bar_es5["d" /* MatSnackBarModule */], []), core["_13" /* ɵmpd */](512, form_field_es5["d" /* MatFormFieldModule */], form_field_es5["d" /* MatFormFieldModule */], []), core["_13" /* ɵmpd */](512, input_es5["b" /* MatInputModule */], input_es5["b" /* MatInputModule */], []), core["_13" /* ɵmpd */](512, core_es5["k" /* MatRippleModule */], core_es5["k" /* MatRippleModule */], []), core["_13" /* ɵmpd */](512, button_es5["d" /* MatButtonModule */], button_es5["d" /* MatButtonModule */], []), core["_13" /* ɵmpd */](1024, router["q" /* ɵa */], router["t" /* ɵd */], [[3, router["k" /* Router */]]]), core["_13" /* ɵmpd */](512, router["p" /* UrlSerializer */], router["c" /* DefaultUrlSerializer */], []), core["_13" /* ɵmpd */](512, router["b" /* ChildrenOutletContexts */], router["b" /* ChildrenOutletContexts */], []), core["_13" /* ɵmpd */](256, router["g" /* ROUTER_CONFIGURATION */], { useHash: false, preloadingStrategy: router["e" /* PreloadAllModules */] }, []), core["_13" /* ɵmpd */](1024, common["g" /* LocationStrategy */], router["s" /* ɵc */], [common["o" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], router["g" /* ROUTER_CONFIGURATION */]]), core["_13" /* ɵmpd */](512, common["f" /* Location */], common["f" /* Location */], [common["g" /* LocationStrategy */]]), core["_13" /* ɵmpd */](512, core["i" /* Compiler */], core["i" /* Compiler */], []), core["_13" /* ɵmpd */](512, core["v" /* NgModuleFactoryLoader */], core["I" /* SystemJsNgModuleLoader */], [core["i" /* Compiler */], [2, core["J" /* SystemJsNgModuleLoaderConfig */]]]), core["_13" /* ɵmpd */](1024, router["i" /* ROUTES */], function () { return [[{ path: "", component: MainPageComponent }, { path: "**", component: NoContentComponent }]]; }, []), core["_13" /* ɵmpd */](1024, router["k" /* Router */], router["u" /* ɵe */], [core["g" /* ApplicationRef */], router["p" /* UrlSerializer */], router["b" /* ChildrenOutletContexts */], common["f" /* Location */], core["q" /* Injector */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], router["i" /* ROUTES */], router["g" /* ROUTER_CONFIGURATION */], [2, router["o" /* UrlHandlingStrategy */]], [2, router["j" /* RouteReuseStrategy */]]]), core["_13" /* ɵmpd */](512, router["l" /* RouterModule */], router["l" /* RouterModule */], [[2, router["q" /* ɵa */]], [2, router["k" /* Router */]]]), core["_13" /* ɵmpd */](512, AppModule, AppModule, []), core["_13" /* ɵmpd */](256, http["n" /* ɵe */], "XSRF-TOKEN", []), core["_13" /* ɵmpd */](256, http["o" /* ɵf */], "X-XSRF-TOKEN", [])]); });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3JhbmRvbUJ5dGVzLWJyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2J5dGVzVG9VdWlkLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC92MS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvcGF0dGVybnMudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3V1aWQudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdGltZXN0YW1wL3RpbWVzdGFtcC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3RpbWVzdGFtcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL2VudW0vZW51bS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL2VudW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9hZHMvYmxvY2suZW51bS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9hZHMudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9hZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL3ByaWNlLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9oaXN0b3JpY2FsLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9jb2luLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3JhdGluZy9yYXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9yYXRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jdXJyZW5jeS9jdXJyZW5jeS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXhjaGFuZ2UvZXhjaGFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9leGNoYW5nZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pY28udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pY28vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvbWFya2V0LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvbWFya2V0L2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXJsLWJ1aWxkZXIvdXJsLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zZWN0aW9uL3NlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc3RhdHVzL3N0YXR1cy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3N0YXR1cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3VzZXIvcm9sZS5lbnVtLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci91c2VyLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3ZpZGVvL3ZpZGVvLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL2VudmVyb21lbnRzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMveW91dHViZS95b3V0dWJlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMveW91dHViZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluLXBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm8tY29udGVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnRzLnRzIiwid2VicGFjazovLy8uL2FwcC5mcm9udC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9waXBlcy9pbWFnZS9lbnZlcm9tZW50cy50cyIsIndlYnBhY2s6Ly8vLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2FwcC5mcm9udC5tb2R1bGUubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL21haW4uZnJvbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTs7O0FDUFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOzs7QUM3Q0EsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEcsaUNBQXdDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDbEc7QUFDQTs7O0FDTEE7QUFDeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeEZBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDekNBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsR0FBRywrQkFBK0Isc0JBQXNCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JEQTs7O0FDQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xCZTtBQUNLO0FBQ0E7QUFDcEIsa0NBQWtDLGNBQWM7QUFDaEQseUJBQXlCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN2QztBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbEhBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25Eb0I7QUFDSjtBQUNoQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVDb0I7QUFDSjtBQUNLO0FBQ3JCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTyx3QkFBd0Isc0JBQXNCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2SEE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoREE7OztBQ0FpQjtBQUNHO0FBQ3BCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDaEdBOzs7QUNBZTtBQUNLO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzRkE7OztBQ0FlO0FBQ0s7QUFDSDtBQUNqQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pHQTs7O0FDQWU7QUFDSztBQUNIO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0ZBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNqQkE7OztBQ0FlO0FBQ007QUFDRDtBQUNIO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdElBOzs7QUNBZTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyRUE7OztBQ0FlO0FBQ2Y7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcERBOzs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDZmU7QUFDSTtBQUNGO0FBQ2pCLHVDQUFrQyxjQUFjO0FBQ2hEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25IQTtBQUNBOzs7QUNEQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUNBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1hzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTs7O0FDUkE7OztBQ0FxRDtBQUNoQztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNvQjtBQUNFO0FBQ1E7QUFDZjtBQUNNO0FBQ0k7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdDLG9EQUFvRDtBQUNwRjtBQUNBO0FBQ0EsOEVBQWtFLDRCQUE0QjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSxxRkFBK0QsYUFBYTtBQUM1RTtBQUNBLG9EQUFvRCxhQUFhLElBQUksY0FBYztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUEyRSw0QkFBNEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwRUFBOEQsNEJBQTRCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQzlFQTs7O0FDQUE7QUFDQTs7O0FDRG9EO0FBQ25DO0FBQ0k7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7QUFDRztBQUNKO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWEsSUFBSSxjQUFjO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qix1REFBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUFrRSxrQ0FBa0M7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBaUUsa0NBQWtDO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQThELGtDQUFrQztBQUNoRztBQUNBO0FBQ0E7QUFDQTs7O0FDL0RBOzs7QUNBcUI7QUFDQTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUN5QjtBQUN6QjtBQUNBLDRFQUE0RSxLQUFLLE9BQU8sZUFBZTtBQUN2RywwSEFBMEgsS0FBSztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsRUFBRSxXQUFXLEVBQUU7QUFDakU7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUN6Q0E7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7QUNIVTtBQUN3QjtBQUNYO0FBQ0Q7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxlQUFlO0FBQ3pELFNBQVM7QUFDVDtBQUNBOzs7QUN2QkE7OztBQ0FpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSQTs7O0FDQWlCO0FBQ0E7QUFDSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQ3hCQTs7O0FDQVU7QUFDVjtBQUNBOzs7QUNGQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7OztBQ0hzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSVTtBQUNBO0FBQ0E7QUFDVjtBQUNBOzs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQixTQUFTLFFBQVEsK0JBQStCLGtCQUFrQjtBQUN2Rzs7O0FDSFI7QUFDQTs7O0FDRHdCO0FBQ0g7QUFDckI7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQTBELDZEQUE2RCxFQUFFO0FBQ2pIO0FBQ1IsdUNBQXVDLDBiQUFtVyxtSUFBcUcsMEJBQTBCLDZDQUE2QywwQkFBMEIsRUFBRSxFQUFFO0FBQ3BsQix1Q0FBdUMsb05BQXdLLHNDQUFzQywwQkFBMEIsRUFBRSxFQUFFO0FBQ25SLHVDQUF1QyxzYkFBK1YsbUlBQXFHLDBCQUEwQiw0Q0FBNEMsMEJBQTBCLEVBQUUsRUFBRTtBQUMva0IsdUNBQThDLDRrQkFBMGEsMEJBQTBCLHlXQUEwUSwwQkFBMEIsMlFBQTBMLDBCQUEwQiw4QkFBOEIsd0JBQXdCLGdDQUFnQywwQkFBMEIsNEJBQTRCLDBCQUEwQixrQ0FBa0MsMkJBQTJCLEVBQUUsUUFBUTtBQUN2dEMsNENBQW1ELHVVQUF1USxlQUFlLEVBQUUsUUFBUTtBQUNuVixxSUFBMkgsSUFBSTtBQUN2SDs7O0FDbEJSO0FBQ0E7QUFDQSw0REFBMkIsa0JBQWtCLFNBQVMsUUFBUSwrQkFBK0Isa0JBQWtCO0FBQ3ZHOzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBMkQsOERBQThELEVBQUU7QUFDbkg7QUFDUix3Q0FBK0Msd1hBQStTO0FBQzlWLDZDQUFvRCxrUkFBME87QUFDOVIseUlBQStILElBQUk7QUFDM0g7OztBQ1hSO0FBQ0E7QUFDQSwwRkFBbUQseUJBQXlCLGtCQUFrQiw4QkFBOEIsZ0JBQWdCLGtDQUFrQyxnQkFBZ0IsY0FBYyxXQUFXLDhDQUE4QyxhQUFhLHFDQUFxQyxpQkFBaUIsa0JBQWtCO0FBQ2xWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTRELCtEQUErRCxFQUFFO0FBQ3JIO0FBQ1IseUNBQXlDLCtnQkFBaWEsa0RBQW1DLDBCQUEwQixFQUFFLEVBQUU7QUFDM2dCLHlDQUF5Qyw0WUFBMlQsa0RBQW1DLDBCQUEwQixFQUFFLEVBQUU7QUFDcmEseUNBQXlDLGtoQkFBb2Esa0RBQW1DLDBCQUEwQixFQUFFLEVBQUU7QUFDOWdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtOQUFnSixvQkFBb0IsR0FBRyx1QkFBdUIsZzJDQUFtaEMsY0FBYyx5Q0FBMEIsdUJBQXVCLHlDQUEwQixvQkFBb0IseUNBQTBCLG1CQUFtQix5Q0FBMEIscUJBQXFCLHlDQUEwQixxQkFBcUI7QUFDbDlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNlRBQTZNLGVBQWUsRUFBRSx1UEFBNkosb0JBQW9CLG1qQkFBOFQscURBQXFELG1XQUF1TyxvQkFBb0IscU9BQWlLLG9CQUFvQiwyL0JBQXd6QixjQUFjLHlDQUEwQix1QkFBdUIseUNBQTBCLG9CQUFvQiwwQ0FBMkIsbUJBQW1CLDBDQUEyQixxQkFBcUIsMENBQTJCLHFCQUFxQjtBQUM5dUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2VEFBNk0sZUFBZSxFQUFFLHVQQUE2SixvQkFBb0IsbWpCQUE4VCxxREFBcUQsbVdBQXVPLG9CQUFvQjtBQUN0Z0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtTQUFpSixpREFBaUQsMkxBQTRJLHdCQUF3QixlQUFlLDhCQUE4QiwwQkFBMEIsMEJBQTBCLDRCQUE0QiwyQkFBMkIseUJBQXlCLHdDQUF3QyxtRUFBbUUsNEJBQTRCLGdFQUFnRSw0QkFBNEIsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsNkJBQTZCLHdDQUF3QyxzRUFBc0UsNEJBQTRCLHVDQUF1Qyw0QkFBNEIsd0NBQXdDLEVBQUUsc0JBQXNCLGtEQUFtQywwQkFBMEIsZ0VBQWlELDhEQUErQywrREFBZ0QsNERBQTZDLDREQUE2Qyw4REFBK0MsOERBQStDLDRGQUE0RixvRUFBcUQscUVBQXNELHNFQUF1RCx3SUFBMEcsbUVBQW9ELGtFQUFtRCxzRUFBdUQscUVBQXNELG1FQUFvRCw2RUFBOEQsMkVBQTRELDRFQUE2RCx5RUFBMEQseUVBQTBELDJFQUE0RCwyRUFBNEQsZ05BQWdOLGtFQUFtRCxnRUFBaUQsaUVBQWtELDhEQUErQyw4REFBK0MsZ0VBQWlELGdFQUFpRCxvREFBcUMsNkRBQThDLDBEQUEyQywwREFBMkMsMERBQTJDLDRFQUE2RCw0REFBNkMscUVBQXNELHNNQUFzTSxxRUFBc0QscUVBQXNELHNFQUF1RCx3SUFBMEcsbUVBQW9ELGtFQUFtRCxzRUFBdUQscUVBQXNELG1FQUFvRCw2RUFBOEQsMkVBQTRELDRFQUE2RCx5RUFBMEQseUVBQTBELDJFQUE0RCwyRUFBNEQsa05BQWtOLGtFQUFtRCxnRUFBaUQsaUVBQWtELDhEQUErQyw4REFBK0MsZ0VBQWlELGdFQUFpRCxvREFBcUMsNkRBQThDLDBEQUEyQywwREFBMkMsMERBQTJDLDRFQUE2RCw0REFBNkMscUVBQXNELHNNQUFzTSxvRUFBcUQsNEJBQTRCLEVBQUU7QUFDeHVMO0FBQ0EsOENBQXFELHdaQUFrUztBQUN2VixtS0FBb0ksSUFBSTtBQUNoSTs7O0FDakhSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUF3RCwyREFBMkQsRUFBRTtBQUM3RztBQUNSLHFDQUE0QyxxYUFBcVQsZUFBZSxFQUFFLFFBQVE7QUFDMVgsMENBQWlELG9TQUE2TyxlQUFlLEVBQUUsUUFBUTtBQUN2VCwwSEFBZ0gsSUFBSTtBQUM1Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUFrRyxzOENBQTIyQixrTUFBMEgsRUFBRSx1aUZBQXV5QyxlQUFlLEVBQUUsZzVMQUErdEcsZUFBZSxFQUFFLDY1QkFBeWpCLGlDQUFtQixFQUFFLG9ZQUFnTyw2SEFBK0QsRUFBRSw4MUhBQW1uRSwwRUFBNEQsa3FCQUFxWSxXQUFXLHlDQUE2QyxHQUFHLDRDQUFnRCxHQUFHLEVBQUUsMnlCQUFtZSxFQUFFO0FBQ2ptVDs7Ozs7QUMxQ1I7QUFDeUM7QUFDc0I7QUFDbEM7QUFDN0IsZUFBZSxhQUFxQixJQUFJLFFBQXdCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1EiLCJmaWxlIjoianMvbWFpbi4xOTgyZTY2NjJiLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDczO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eVxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSBtYWluIiwiY29uc3QgcmFuZG9tQnl0ZXMgPSAoc2l6ZSkgPT4ge1xuICAgIGxldCBybmQgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmQpO1xuICAgIHJldHVybiBybmQ7XG59O1xuY29uc3QgybUwID0gcmFuZG9tQnl0ZXM7XG5leHBvcnQgZGVmYXVsdCByYW5kb21CeXRlcztcbmV4cG9ydCB7IMm1MCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvcmFuZG9tQnl0ZXMtYnJvd3Nlci50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IEJUSCA9IFtcIjAwXCIsIFwiMDFcIiwgXCIwMlwiLCBcIjAzXCIsIFwiMDRcIiwgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiLCBcIjA5XCIsIFwiMGFcIiwgXCIwYlwiLCBcIjBjXCIsIFwiMGRcIiwgXCIwZVwiLCBcIjBmXCIsXG4gICAgXCIxMFwiLCBcIjExXCIsIFwiMTJcIiwgXCIxM1wiLCBcIjE0XCIsIFwiMTVcIiwgXCIxNlwiLCBcIjE3XCIsIFwiMThcIiwgXCIxOVwiLCBcIjFhXCIsIFwiMWJcIiwgXCIxY1wiLCBcIjFkXCIsIFwiMWVcIiwgXCIxZlwiLFxuICAgIFwiMjBcIiwgXCIyMVwiLCBcIjIyXCIsIFwiMjNcIiwgXCIyNFwiLCBcIjI1XCIsIFwiMjZcIiwgXCIyN1wiLCBcIjI4XCIsIFwiMjlcIiwgXCIyYVwiLCBcIjJiXCIsIFwiMmNcIiwgXCIyZFwiLCBcIjJlXCIsIFwiMmZcIixcbiAgICBcIjMwXCIsIFwiMzFcIiwgXCIzMlwiLCBcIjMzXCIsIFwiMzRcIiwgXCIzNVwiLCBcIjM2XCIsIFwiMzdcIiwgXCIzOFwiLCBcIjM5XCIsIFwiM2FcIiwgXCIzYlwiLCBcIjNjXCIsIFwiM2RcIiwgXCIzZVwiLCBcIjNmXCIsXG4gICAgXCI0MFwiLCBcIjQxXCIsIFwiNDJcIiwgXCI0M1wiLCBcIjQ0XCIsIFwiNDVcIiwgXCI0NlwiLCBcIjQ3XCIsIFwiNDhcIiwgXCI0OVwiLCBcIjRhXCIsIFwiNGJcIiwgXCI0Y1wiLCBcIjRkXCIsIFwiNGVcIiwgXCI0ZlwiLFxuICAgIFwiNTBcIiwgXCI1MVwiLCBcIjUyXCIsIFwiNTNcIiwgXCI1NFwiLCBcIjU1XCIsIFwiNTZcIiwgXCI1N1wiLCBcIjU4XCIsIFwiNTlcIiwgXCI1YVwiLCBcIjViXCIsIFwiNWNcIiwgXCI1ZFwiLCBcIjVlXCIsIFwiNWZcIixcbiAgICBcIjYwXCIsIFwiNjFcIiwgXCI2MlwiLCBcIjYzXCIsIFwiNjRcIiwgXCI2NVwiLCBcIjY2XCIsIFwiNjdcIiwgXCI2OFwiLCBcIjY5XCIsIFwiNmFcIiwgXCI2YlwiLCBcIjZjXCIsIFwiNmRcIiwgXCI2ZVwiLCBcIjZmXCIsXG4gICAgXCI3MFwiLCBcIjcxXCIsIFwiNzJcIiwgXCI3M1wiLCBcIjc0XCIsIFwiNzVcIiwgXCI3NlwiLCBcIjc3XCIsIFwiNzhcIiwgXCI3OVwiLCBcIjdhXCIsIFwiN2JcIiwgXCI3Y1wiLCBcIjdkXCIsIFwiN2VcIiwgXCI3ZlwiLFxuICAgIFwiODBcIiwgXCI4MVwiLCBcIjgyXCIsIFwiODNcIiwgXCI4NFwiLCBcIjg1XCIsIFwiODZcIiwgXCI4N1wiLCBcIjg4XCIsIFwiODlcIiwgXCI4YVwiLCBcIjhiXCIsIFwiOGNcIiwgXCI4ZFwiLCBcIjhlXCIsIFwiOGZcIixcbiAgICBcIjkwXCIsIFwiOTFcIiwgXCI5MlwiLCBcIjkzXCIsIFwiOTRcIiwgXCI5NVwiLCBcIjk2XCIsIFwiOTdcIiwgXCI5OFwiLCBcIjk5XCIsIFwiOWFcIiwgXCI5YlwiLCBcIjljXCIsIFwiOWRcIiwgXCI5ZVwiLCBcIjlmXCIsXG4gICAgXCJhMFwiLCBcImExXCIsIFwiYTJcIiwgXCJhM1wiLCBcImE0XCIsIFwiYTVcIiwgXCJhNlwiLCBcImE3XCIsIFwiYThcIiwgXCJhOVwiLCBcImFhXCIsIFwiYWJcIiwgXCJhY1wiLCBcImFkXCIsIFwiYWVcIiwgXCJhZlwiLFxuICAgIFwiYjBcIiwgXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJiNFwiLCBcImI1XCIsIFwiYjZcIiwgXCJiN1wiLCBcImI4XCIsIFwiYjlcIiwgXCJiYVwiLCBcImJiXCIsIFwiYmNcIiwgXCJiZFwiLCBcImJlXCIsIFwiYmZcIixcbiAgICBcImMwXCIsIFwiYzFcIiwgXCJjMlwiLCBcImMzXCIsIFwiYzRcIiwgXCJjNVwiLCBcImM2XCIsIFwiYzdcIiwgXCJjOFwiLCBcImM5XCIsIFwiY2FcIiwgXCJjYlwiLCBcImNjXCIsIFwiY2RcIiwgXCJjZVwiLCBcImNmXCIsXG4gICAgXCJkMFwiLCBcImQxXCIsIFwiZDJcIiwgXCJkM1wiLCBcImQ0XCIsIFwiZDVcIiwgXCJkNlwiLCBcImQ3XCIsIFwiZDhcIiwgXCJkOVwiLCBcImRhXCIsIFwiZGJcIiwgXCJkY1wiLCBcImRkXCIsIFwiZGVcIiwgXCJkZlwiLFxuICAgIFwiZTBcIiwgXCJlMVwiLCBcImUyXCIsIFwiZTNcIiwgXCJlNFwiLCBcImU1XCIsIFwiZTZcIiwgXCJlN1wiLCBcImU4XCIsIFwiZTlcIiwgXCJlYVwiLCBcImViXCIsIFwiZWNcIiwgXCJlZFwiLCBcImVlXCIsIFwiZWZcIixcbiAgICBcImYwXCIsIFwiZjFcIiwgXCJmMlwiLCBcImYzXCIsIFwiZjRcIiwgXCJmNVwiLCBcImY2XCIsIFwiZjdcIiwgXCJmOFwiLCBcImY5XCIsIFwiZmFcIiwgXCJmYlwiLCBcImZjXCIsIFwiZmRcIiwgXCJmZVwiLCBcImZmXCJdO1xuZXhwb3J0IGRlZmF1bHQgKGJ1ZikgPT4gQlRIW2J1ZlswXV0gKyBCVEhbYnVmWzFdXSArXG4gICAgQlRIW2J1ZlsyXV0gKyBCVEhbYnVmWzNdXSArICctJyArXG4gICAgQlRIW2J1Zls0XV0gKyBCVEhbYnVmWzVdXSArICctJyArXG4gICAgQlRIW2J1Zls2XV0gKyBCVEhbYnVmWzddXSArICctJyArXG4gICAgQlRIW2J1Zls4XV0gKyBCVEhbYnVmWzldXSArICctJyArXG4gICAgQlRIW2J1ZlsxMF1dICsgQlRIW2J1ZlsxMV1dICtcbiAgICBCVEhbYnVmWzEyXV0gKyBCVEhbYnVmWzEzXV0gK1xuICAgIEJUSFtidWZbMTRdXSArIEJUSFtidWZbMTVdXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2J5dGVzVG9VdWlkLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHJhbmRvbUJ5dGVzIGZyb20gJy4vcmFuZG9tQnl0ZXMnO1xuaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQnO1xuY29uc3QgU0VFRF9CWVRFUyA9IHJhbmRvbUJ5dGVzKDE2KTtcbmNvbnN0IE5PREVfSUQgPSBbXG4gICAgU0VFRF9CWVRFU1swXSB8IDB4MDEsXG4gICAgU0VFRF9CWVRFU1sxXSxcbiAgICBTRUVEX0JZVEVTWzJdLFxuICAgIFNFRURfQllURVNbM10sXG4gICAgU0VFRF9CWVRFU1s0XSxcbiAgICBTRUVEX0JZVEVTWzVdLFxuXTtcbmxldCBfY2xvY2tzZXEgPSAoU0VFRF9CWVRFU1s2XSA8PCA4IHwgU0VFRF9CWVRFU1s3XSkgJiAweDNmZmY7XG5sZXQgbGFzdE1TZWNzID0gMDtcbmxldCBsYXN0TlNlY3MgPSAwO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGxldCBtc2VjcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBuc2VjcyA9IGxhc3ROU2VjcyArIDE7XG4gICAgbGV0IGR0ID0gKG1zZWNzIC0gbGFzdE1TZWNzKSArIChuc2VjcyAtIGxhc3ROU2VjcykgLyAxMDAwMDtcbiAgICBsZXQgY2xvY2tzZXEgPSBkdCA8IDAgPyBfY2xvY2tzZXEgKyAxICYgMHgzZmZmIDogX2Nsb2Nrc2VxO1xuICAgIGlmIChkdCA8IDAgfHwgbXNlY3MgPiBsYXN0TVNlY3MpIHtcbiAgICAgICAgbnNlY3MgPSAwO1xuICAgIH1cbiAgICBpZiAobnNlY3MgPj0gMTAwMDApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICAgIGxhc3RNU2VjcyA9IG1zZWNzO1xuICAgIGxhc3ROU2VjcyA9IG5zZWNzO1xuICAgIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgYiA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICBsZXQgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gICAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCAmIDB4ZmY7XG4gICAgbGV0IHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdG1oICYgMHhmZjtcbiAgICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDtcbiAgICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcbiAgICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG4gICAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKVxuICAgICAgICBiW2kgKyBuXSA9IE5PREVfSURbbl07XG4gICAgcmV0dXJuIGJ5dGVzVG9VdWlkKGIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3YxLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNvbnN0IFVVSUR2MV9QQVRURVJOID0gJ1thLWYwLTldezh9LVthLWYwLTldezR9LTFbYS1mMC05XXszfS1bODlhYl1bYS1mMC05XXszfS1bYS1mMC05XXsxMn0nO1xuZXhwb3J0IGNvbnN0IFVVSUR2MV9SRUdFWFAgPSAvXlthLWYwLTldezh9LVthLWYwLTldezR9LTFbYS1mMC05XXszfS1bODlhYl1bYS1mMC05XXszfS1bYS1mMC05XXsxMn0kL2k7XG5leHBvcnQgY29uc3QgVVVJRHY0X1BBVFRFUk4gPSAnW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tNFthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSc7XG5leHBvcnQgY29uc3QgVVVJRHY0X1JFR0VYUCA9IC9eW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tNFthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSQvaTtcbmV4cG9ydCBjb25zdCBVVUlEbmlsX1BBVFRFUk4gPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbmV4cG9ydCBjb25zdCBVVUlEbmlsX1JFR0VYUCA9IC9eMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJC87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC9wYXR0ZXJucy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB2MSBmcm9tICcuL3YxJztcbmltcG9ydCB7IFVVSUR2MV9SRUdFWFAsIFVVSUR2NF9SRUdFWFAsIFVVSURuaWxfUkVHRVhQLCBVVUlEbmlsX1BBVFRFUk4sIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgY2xhc3MgVVVJRCB7XG4gICAgc3RhdGljIGdldEFycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoKS5jb25jYXQodmFsdWUpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1dWlkID0gbmV3IFVVSUQoaXRlbSAmJiBpdGVtLmlkIHx8IGl0ZW0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB1dWlkLnZlcnNpb24gPT09IG51bGwgPyBudWxsIDogdXVpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHV1aWQgPSBudWxsKSB7XG4gICAgICAgIGlmICh1dWlkIGluc3RhbmNlb2YgVVVJRCkge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdXVpZC52ZXJzaW9uO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdXVpZC51dWlkO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdXVpZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKFVVSURuaWxfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVVUlEdjFfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVVUlEdjRfUkVHRVhQLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVVVJRCBcIiR7dXVpZH1cIiBkb2VzIG5vdCBtYXRjaCB0aGUgVVVJRCBzdHJpbmdgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXVpZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXVpZCA9IFVVSURuaWxfUEFUVEVSTjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dWlkID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdjEoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dWlkID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSA0O1xuICAgICAgICAgICAgdGhpcy51dWlkID0gdjEoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBVVUlEIHZlcnNpb24gb2YgXCIke3V1aWR9XCJgKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgVVVJRCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVVVJRCc7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvdXVpZC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdXVpZCc7XG5leHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNsYXNzIFRpbWVzdGFtcCBleHRlbmRzIERhdGUge1xuICAgIHN0YXRpYyBmcm9tVW51eCh2YWx1ZSkge1xuICAgICAgICBjb25zdCB1dHMgPSB+fnZhbHVlO1xuICAgICAgICByZXR1cm4gbmV3IFRpbWVzdGFtcCh1dHMgKiAxMDAwKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgaXNWYWxpZCgpIHtcbiAgICAgICAgcmV0dXJuICFOdW1iZXIuaXNOYU4odGhpcy5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBnZXQgaXNJbnZhbGlkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNWYWxpZDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMpO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBNb2RlbCB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVGltZXN0YW1wJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdGltZXN0YW1wL3RpbWVzdGFtcC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdGltZXN0YW1wJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS90aW1lc3RhbXAvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCBFTlVNX0lEX1JFR0VYUCA9IC9eW2Etel1bYS16MC05XSokLztcbmV4cG9ydCBjbGFzcyBFbnVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICghRU5VTV9JRF9SRUdFWFAudGVzdChpZCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFbnVtIElEIFwiJHtpZH1cIiBkb2VzIG5vdCBtYXRjIHRoZSBwYXR0ZXJuIFwiJHtFTlVNX0lEX1JFR0VYUC5zb3VyY2V9XCJgKTtcbiAgICB9XG4gICAgc3RhdGljICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgeWllbGQgdGhpc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXQodmFsdWUpIHtcbiAgICAgICAgbGV0IGlkID0gU3RyaW5nKHZhbHVlICYmIHZhbHVlLmlkIHx8IHZhbHVlKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzKVxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpLmNvbmNhdCh2YWx1ZSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLmdldChpdGVtKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgRW51bSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnRW51bSc7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL2VudW0vZW51bS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vZW51bSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEVudW0gfSBmcm9tICdAY29yZS9lbnVtJztcbmV4cG9ydCBjbGFzcyBCbG9ja0VudW0gZXh0ZW5kcyBFbnVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdmFsdWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHN1cGVyKGlkLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnQmxvY2tFbnVtJztcbiAgICB9XG59XG5CbG9ja0VudW0uQTEgPSBuZXcgQmxvY2tFbnVtKCdhMScsICdBMScsICfQktC10YDRiNC90LjQuScpO1xuQmxvY2tFbnVtLkEyID0gbmV3IEJsb2NrRW51bSgnYTInLCAnQTInLCAn0J/QvtC0INCy0LjQtNC10L4nKTtcbkJsb2NrRW51bS5BMyA9IG5ldyBCbG9ja0VudW0oJ2EzJywgJ0EzJywgJ9Cf0L7QtCDQvdC+0LLQvtGB0YLRjNGOJyk7XG5CbG9ja0VudW0uQjEgPSBuZXcgQmxvY2tFbnVtKCdiMScsICdCMScsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uQjIgPSBuZXcgQmxvY2tFbnVtKCdiMicsICdCMicsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uQjMgPSBuZXcgQmxvY2tFbnVtKCdiMycsICdCMycsICfQkdCw0YjQvdGPJyk7XG5CbG9ja0VudW0uTTEgPSBuZXcgQmxvY2tFbnVtKCdtMScsICdNMScsICfQnNC+0LHQuNC70YzQvdGL0LknKTtcbkJsb2NrRW51bS5NMiA9IG5ldyBCbG9ja0VudW0oJ20yJywgJ00yJywgJ9Cc0L7QsdC40LvRjNC90YvQuScpO1xuQmxvY2tFbnVtLk0zID0gbmV3IEJsb2NrRW51bSgnbTMnLCAnTTMnLCAn0JzQvtCx0LjQu9GM0L3Ri9C5Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2Jsb2NrLmVudW0udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgQmxvY2tFbnVtIH0gZnJvbSAnLi9ibG9jay5lbnVtJztcbmNvbnN0IEVOVU1fUEdfQVJSQVlfUEFUVEVSTiA9IC9eXFx7KFthLXowLTksXSspXFx9JC87XG5jb25zdCBEQVRFX1JFR0VYUCA9IC9eXFxkezR9LVxcZHsyfS1cXGR7M30kLztcbmV4cG9ydCBjbGFzcyBBZHMge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgaWYgKHZhbHVlLmJsb2Nrcykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBFTlVNX1BHX0FSUkFZX1BBVFRFUk4uZXhlYyh2YWx1ZS5ibG9ja3MpO1xuICAgICAgICAgICAgY29uc3QgYmxvY2tzID0gbWF0Y2ggJiYgbWF0Y2hbMV0uc3BsaXQoJywnKSB8fCB2YWx1ZS5ibG9ja3M7XG4gICAgICAgICAgICB0aGlzLmJsb2NrcyA9IEJsb2NrRW51bS5nZXRBcnJheShibG9ja3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuZW5kRGF0ZSk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlLmZpbGVzKSA/IHZhbHVlLmZpbGVzXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiBNYXRoLm1heCh+fnZhbHVlLmNvbGxlY3RlZCwgMCkpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtID4gMClcbiAgICAgICAgICAgIDogbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMubGltaXRzID1cbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS5saW1pdHMgPT09ICdvYmplY3QnID8ge1xuICAgICAgICAgICAgICAgIHNob3c6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLnNob3csIDApLFxuICAgICAgICAgICAgICAgIHNob3dQZXJEYXk6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLnNob3dQZXJEYXksIDApLFxuICAgICAgICAgICAgICAgIHNob3dQZXJVc2VyOiBNYXRoLm1heCh+fnZhbHVlLmxpbWl0cy5zaG93UGVyVXNlciwgMCksXG4gICAgICAgICAgICAgICAgY2xpY2s6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLmNsaWNrLCAwKSxcbiAgICAgICAgICAgICAgICBjbGlja1BlckRheTogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuY2xpY2tQZXJEYXksIDApLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyVXNlcjogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuY2xpY2tQZXJVc2VyLCAwKSxcbiAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogMCxcbiAgICAgICAgICAgICAgICBzaG93UGVyRGF5OiAwLFxuICAgICAgICAgICAgICAgIHNob3dQZXJVc2VyOiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrOiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyRGF5OiAwLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyVXNlcjogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdHMgPSB7fTtcbiAgICAgICAgaWYgKHZhbHVlLnN0YXRzID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZS5zdGF0cykge1xuICAgICAgICAgICAgICAgIGtleSA9IFN0cmluZyhrZXkpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoREFURV9SRUdFWFAudGVzdChrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBNYXRoLm1heCh+fnZhbHVlLnN0YXRzW2tleV0uc2hvdywgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogTWF0aC5tYXgofn52YWx1ZS5zdGF0c1trZXldLmNsaWNrLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBibG9ja3M6IHRoaXMuYmxvY2tzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgZmlsZXM6IHRoaXMuZmlsZXMsXG4gICAgICAgICAgICBsaW1pdHM6IHRoaXMubGltaXRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBibG9ja3M6IHRoaXMuYmxvY2tzLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBmaWxlczogdGhpcy5maWxlcyxcbiAgICAgICAgICAgIGxpbWl0czogdGhpcy5saW1pdHMsXG4gICAgICAgICAgICBzdGF0czogdGhpcy5zdGF0cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgQWRzIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdBZHMnO1xuICAgIH1cbn1cbkFkcy5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ2Jsb2NrcycsXG4gICAgJ3RpdGxlJyxcbiAgICAnc3RhcnREYXRlJyxcbiAgICAnZW5kRGF0ZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9hZHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2Fkcyc7XG5leHBvcnQgKiBmcm9tICcuL2Jsb2NrLmVudW0nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBjbGFzcyBQcmljZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYnRjID0gMDtcbiAgICAgICAgdGhpcy5fdXNkID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgYnRjKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnRjO1xuICAgIH1cbiAgICBnZXQgdXNkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNkO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWUgPSB7fSkge1xuICAgICAgICBjb25zdCBidGMgPSB2YWx1ZS5idGMgIT09IHVuZGVmaW5lZCAmJiBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLmJ0YyksIDApO1xuICAgICAgICB0aGlzLl9idGMgPSBidGMgfHwgdGhpcy5idGM7XG4gICAgICAgIGNvbnN0IHVzZCA9IHZhbHVlLnVzZCAhPT0gdW5kZWZpbmVkICYmIE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUudXNkKSwgMCk7XG4gICAgICAgIHRoaXMuX3VzZCA9IHVzZCB8fCB0aGlzLnVzZDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ0YzogdGhpcy5idGMsXG4gICAgICAgICAgICB1c2Q6IHRoaXMudXNkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidGM6IHRoaXMuYnRjLFxuICAgICAgICAgICAgdXNkOiB0aGlzLnVzZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZCB8fCAwO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnRvTnVtYmVyKCkpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBQcmljZSB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnUHJpY2UnO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL3ByaWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi9wcmljZSc7XG5leHBvcnQgY2xhc3MgSGlzdG9yaWNhbCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLnByaWNlID0gbmV3IFByaWNlKCk7XG4gICAgICAgIHRoaXMudHMgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnRzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh2YWx1ZS5wcmljZSk7XG4gICAgfVxuICAgIHVwZGF0ZVByaWNlKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5wcmljZS51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlLnRvTnVtYmVyKCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudHMpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBIaXN0b3JpY2FsIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdIaXN0b3JpY2FsJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9oaXN0b3JpY2FsLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFByaWNlIH0gZnJvbSAnLi9wcmljZSc7XG5pbXBvcnQgeyBIaXN0b3JpY2FsIH0gZnJvbSAnLi9oaXN0b3JpY2FsJztcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15bQS1aMC05QCRdKyQvO1xuZXhwb3J0IGNsYXNzIENvaW4ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5fbWF4ID0gMDtcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gMDtcbiAgICAgICAgdGhpcy5wcmljZSA9IG5ldyBQcmljZSgpO1xuICAgICAgICB0aGlzLl92b2x1bWUyNCA9IDA7XG4gICAgICAgIHRoaXMuX2hpc3RvcmljYWwgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gU3RyaW5nKHZhbHVlLnN5bWJvbCB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmICghU1lNQk9MX1BBVFRFUk4udGVzdChzeW1ib2wpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgU3ltYm9sIFwiJHtzeW1ib2x9IG5vdCBtYXRjaCB0byBwYXR0ZXJuICR7U1lNQk9MX1BBVFRFUk4uc291cmNlfWApO1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgbWF4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4O1xuICAgIH1cbiAgICBnZXQgYXZhaWxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlO1xuICAgIH1cbiAgICBnZXQgY2FwaXRhbGl6YXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidGM6IHRoaXMucHJpY2UuYnRjICogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgICAgICB1c2Q6IHRoaXMucHJpY2UudXNkICogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCB2b2x1bWUyNCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZTI0O1xuICAgIH1cbiAgICBnZXQgdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cztcbiAgICB9XG4gICAgZ2V0IGhpc3RvcmljYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaXN0b3JpY2FsLnNvcnQoKGEsIGIpID0+IGEudHMgPCBiLnRzID8gLTEgOiAxKTtcbiAgICB9XG4gICAgZ2V0IGxhc3RIaXN0b3JpY2FsKCkge1xuICAgICAgICBjb25zdCBoaXN0b3JpY2FsID0gdGhpcy5oaXN0b3JpY2FsO1xuICAgICAgICBpZiAoaGlzdG9yaWNhbC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gaGlzdG9yaWNhbFtoaXN0b3JpY2FsLmxlbmd0aF0udHM7XG4gICAgfVxuICAgIHVwZGF0ZVByaWNlKHZhbHVlID0ge30pIHtcbiAgICAgICAgdGhpcy5wcmljZS51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgICB1cGRhdGVIaXN0b3JpY2FsKHZhbHVlID0gW10pIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFsdWUubWFwKGl0ZW0gPT4gbmV3IEhpc3RvcmljYWwoaXRlbSkpXG4gICAgICAgICAgICAuZm9yRWFjaChuZXdJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5faGlzdG9yaWNhbC5maW5kKGl0ZW0gPT4gTnVtYmVyKGl0ZW0udHMpID09PSBOdW1iZXIobmV3SXRlbS50cykpO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hpc3RvcmljYWwucHVzaChuZXdJdGVtKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SXRlbS51cGRhdGVQcmljZShuZXdJdGVtLnByaWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh2YWx1ZS5zeW1ib2wgIT09IHRoaXMuc3ltYm9sKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLl9tYXggPSB2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUubWF4KSwgMCkgOiAwO1xuICAgICAgICB0aGlzLl9hdmFpbGFibGUgPSB2YWx1ZS5hdmFpbGFibGUgIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUuYXZhaWxhYmxlKSwgMCkgOiAwO1xuICAgICAgICB0aGlzLl92b2x1bWUyNCA9IHZhbHVlLnZvbHVtZTI0ICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChwYXJzZUZsb2F0KHZhbHVlLnZvbHVtZTI0KSwgMCkgOiAwO1xuICAgICAgICB0aGlzLl90cyA9IG5ldyBUaW1lc3RhbXAodmFsdWUudHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHZhbHVlLnByaWNlKTtcbiAgICAgICAgdGhpcy51cGRhdGVIaXN0b3JpY2FsKHZhbHVlLmhpc3RvcmljYWwpO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRoaXMuYXZhaWxhYmxlLFxuICAgICAgICAgICAgcHJpY2U6IHRoaXMucHJpY2UudmFsdWVPZigpLFxuICAgICAgICAgICAgY2FwaXRhbGl6YXRpb246IHRoaXMuY2FwaXRhbGl6YXRpb24sXG4gICAgICAgICAgICB2b2x1bWUyNDogdGhpcy52b2x1bWUyNCxcbiAgICAgICAgICAgIHRzOiB0aGlzLnRzLFxuICAgICAgICAgICAgaGlzdG9yaWNhbDogdGhpcy5oaXN0b3JpY2FsLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZSxcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uOiB0aGlzLmNhcGl0YWxpemF0aW9uLFxuICAgICAgICAgICAgdm9sdW1lMjQ6IHRoaXMudm9sdW1lMjQsXG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZXF1YWwoaXRlbSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoaXRlbSkgPT09IEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FwaXRhbGl6YXRpb24udXNkO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBDb2luIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdDb2luJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY29pbi9jb2luLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9jb2luJztcbmV4cG9ydCAqIGZyb20gJy4vcHJpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9oaXN0b3JpY2FsJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNsYXNzIFJhdGluZyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLmxpa2UgPSBNYXRoLm1heCh+fnZhbHVlLmxpa2UsIDApO1xuICAgICAgICB0aGlzLmRpc2xpa2UgPSBNYXRoLm1heCh+fnZhbHVlLmRpc2xpa2UsIDApO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpa2UgLyAodGhpcy5saWtlICsgdGhpcy5kaXNsaWtlKTtcbiAgICB9XG4gICAgZ2V0IHN0YXJzKCkge1xuICAgICAgICByZXR1cm4gNSAqIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaWtlOiB0aGlzLmxpa2UsXG4gICAgICAgICAgICBkaXNsaWtlOiB0aGlzLmRpc2xpa2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpa2U6IHRoaXMubGlrZSxcbiAgICAgICAgICAgIGRpc2xpa2U6IHRoaXMuZGlzbGlrZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgUmFpdGluZyB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnUmFpdGluZyc7XG4gICAgfVxufVxuUmF0aW5nLk1haW5GaWVsZHMgPSBbXG4gICAgJ2xpa2UnLFxuICAgICdkaXNsaWtlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcmF0aW5nL3JhdGluZy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcmF0aW5nJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9yYXRpbmcvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBTdHJpbmcodmFsdWUuc3ltYm9sIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMuZXh0VXJsID0gU3RyaW5nKHZhbHVlLmV4dFVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMuZm91bmRlciA9IFN0cmluZyh2YWx1ZS5mb3VuZGVyIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMubWF4Q29pbiA9IE1hdGgubWF4KH5+dmFsdWUubWF4Q29pbiwgMCk7XG4gICAgICAgIHRoaXMuYWxnb3JpdGhtID0gU3RyaW5nKHZhbHVlLmFsZ29yaXRobSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnN5c3RlbSA9IFN0cmluZyh2YWx1ZS5zeXN0ZW0gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGZvdW5kZXI6IHRoaXMuZm91bmRlcixcbiAgICAgICAgICAgIG1heENvaW46IHRoaXMubWF4Q29pbixcbiAgICAgICAgICAgIGFsZ29yaXRobTogdGhpcy5hbGdvcml0aG0sXG4gICAgICAgICAgICBzeXN0ZW06IHRoaXMuc3lzdGVtLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBmb3VuZGVyOiB0aGlzLmZvdW5kZXIsXG4gICAgICAgICAgICBtYXhDb2luOiB0aGlzLm1heENvaW4sXG4gICAgICAgICAgICBhbGdvcml0aG06IHRoaXMuYWxnb3JpdGhtLFxuICAgICAgICAgICAgc3lzdGVtOiB0aGlzLnN5c3RlbSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IEN1cnJlbmN5IHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdDdXJyZW5jeSc7XG4gICAgfVxufVxuQ3VycmVuY3kuTWFpbkZpZWxkcyA9IFtcbiAgICAnc3ltYm9sJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2N1cnJlbmN5LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9jdXJyZW5jeSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY3VycmVuY3kvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBFeGNoYW5nZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5yZWZlcnJhbCA9ICEhdmFsdWUucmVmZXJyYWw7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICByZWZlcnJhbDogdGhpcy5yZWZlcnJhbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZWZlcnJhbDogdGhpcy5yZWZlcnJhbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IEV4Y2hhbmdlIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdFeGNoYW5nZSc7XG4gICAgfVxufVxuRXhjaGFuZ2UuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd1cmwnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXhjaGFuZ2UvZXhjaGFuZ2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2V4Y2hhbmdlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9leGNoYW5nZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuZXhwb3J0IGNsYXNzIElDTyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5nb2FsID0gTWF0aC5tYXgofn52YWx1ZS5nb2FsLCAwKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0ZWQgPSBNYXRoLm1heCh+fnZhbHVlLmNvbGxlY3RlZCwgMCk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gU3RyaW5nKHZhbHVlLnN0YXR1cyB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBTdHJpbmcodmFsdWUuY29udGVudCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZ29hbDogdGhpcy5nb2FsLFxuICAgICAgICAgICAgY29sbGVjdGVkOiB0aGlzLmNvbGxlY3RlZCxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuaXNWYWxpZCA/IHRoaXMuc3RhcnREYXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ29hbDogdGhpcy5nb2FsLFxuICAgICAgICAgICAgY29sbGVjdGVkOiB0aGlzLmNvbGxlY3RlZCxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBJQ08gdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0lDTyc7XG4gICAgfVxufVxuSUNPLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pY28udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2ljbyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvaWNvL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5leHBvcnQgY2xhc3MgTWFya2V0IHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmV4dFVybCA9IFN0cmluZyh2YWx1ZS5leHRVcmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5zdGFydERhdGUpO1xuICAgICAgICB0aGlzLnJlZmVycmFsID0gISF2YWx1ZS5yZWZlcnJhbDtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIHJlZmVycmFsOiB0aGlzLnJlZmVycmFsLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmlzVmFsaWQgPyB0aGlzLnN0YXJ0RGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlZmVycmFsOiB0aGlzLnJlZmVycmFsLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgTWFya2V0IHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdNYXJrZXQnO1xuICAgIH1cbn1cbk1hcmtldC5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3VybCcsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvbWFya2V0LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9tYXJrZXQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL21hcmtldC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IFJVUyA9ICfRiSAg0YggINGHICDRhiAg0Y4gINGPICDRkSDQtiAg0Ysg0Y0g0LAg0LEg0LIg0LMg0LQg0LUg0Lcg0Lgg0Lkg0Log0Lsg0Lwg0L0g0L4g0L8g0YAg0YEg0YIg0YMg0YQg0YUnLnNwbGl0KC9cXHMrLyk7XG5jb25zdCBFTkcgPSAnc2ggc2ggY2ggY3ogeXUgeWEgZSB6aCB5IGUgYSBiIHYgZyBkIGUgeiBpIGogayBsIG0gbiBvIHAgciBzIHQgdSBmIHgnLnNwbGl0KC9cXHMrLyk7XG5leHBvcnQgY2xhc3MgVVJMQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cblVSTEJ1aWxkZXIuYnVpbGQgPSAoaW5wdXQsIG1heExlbmd0aCA9IDEyOCkgPT4ge1xuICAgIGxldCB0ZXh0ID0gaW5wdXQudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnXycpO1xuICAgIHRleHQgPSB0ZXh0LnNwbGl0KCcnKVxuICAgICAgICAubWFwKGNoYXIgPT4ge1xuICAgICAgICBsZXQgaSA9IFJVUy5pbmRleE9mKGNoYXIpO1xuICAgICAgICByZXR1cm4gaSA8IDAgPyBjaGFyIDogRU5HW2ldO1xuICAgIH0pLmpvaW4oJycpO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1teMC05YS16X10vZywgJycpXG4gICAgICAgIC5zbGljZSgwLCBtYXhMZW5ndGgpXG4gICAgICAgIC5yZXBsYWNlKC8oXl8rfF8rJCkvZywgJycpO1xuICAgIHJldHVybiB0ZXh0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci91cmwtYnVpbGRlci50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdXJsLWJ1aWxkZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3VybC1idWlsZGVyL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgVVJMQnVpbGRlciB9IGZyb20gJ0Bjb3JlL3VybC1idWlsZGVyJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuZXhwb3J0IGNsYXNzIFB1YmxpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMudHMgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnRzKTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMuc2VjdGlvbnMgPSBVVUlELmdldEFycmF5KHZhbHVlLnNlY3Rpb25zKTtcbiAgICAgICAgdGhpcy5jdXJyZW5jaWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZS5jdXJyZW5jaWVzKSA/IHZhbHVlLmN1cnJlbmNpZXNcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IFN0cmluZyhpdGVtKS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICEhaXRlbSlcbiAgICAgICAgICAgIDogbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuZXhjaGFuZ2VzID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5leGNoYW5nZXMpO1xuICAgICAgICB0aGlzLmljbyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUuaWNvKTtcbiAgICAgICAgdGhpcy5tYXJrZXRzID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5tYXJrZXRzKTtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLndlaWdodCwgMCksIDMpO1xuICAgICAgICB0aGlzLmJpZ1RpdGxlID0gU3RyaW5nKHZhbHVlLmJpZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLmF1dGhvcnMgPSBVVUlELmdldEFycmF5KHZhbHVlLmF1dGhvcnMpO1xuICAgICAgICB0aGlzLnRhZ3MgPSBBcnJheS5pc0FycmF5KHZhbHVlLnRhZ3MpID8gdmFsdWUudGFnc1xuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gU3RyaW5nKGl0ZW0pLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gISFpdGVtKVxuICAgICAgICAgICAgOiBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zaGFyaW5nID0gdmFsdWUuc2hhcmluZyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuc2hhcmluZztcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IHZhbHVlLmNvbW1lbnRzID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5jb21tZW50cztcbiAgICAgICAgdGhpcy5hZHMgPSB2YWx1ZS5hZHMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmFkcztcbiAgICAgICAgdGhpcy5yc3MgPSB2YWx1ZS5yc3MgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLnJzcztcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWQgPSBuZXcgVGltZXN0YW1wKHZhbHVlLmxhc3RNb2RpZmllZCk7XG4gICAgICAgIGlmICghdGhpcy51cmwpXG4gICAgICAgICAgICB0aGlzLnVybCA9IFVSTEJ1aWxkZXIuYnVpbGQodGhpcy50aXRsZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgc2VjdGlvbnM6IHRoaXMuc2VjdGlvbnMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgY3VycmVuY2llczogdGhpcy5jdXJyZW5jaWVzLFxuICAgICAgICAgICAgZXhjaGFuZ2VzOiB0aGlzLmV4Y2hhbmdlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICBpY286IHRoaXMuaWNvLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIG1hcmtldHM6IHRoaXMubWFya2V0cy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICB3ZWlnaHQ6IHRoaXMud2VpZ2h0LFxuICAgICAgICAgICAgYmlnVGl0bGU6IHRoaXMuYmlnVGl0bGUsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBhdXRob3JzOiB0aGlzLmF1dGhvcnMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgc2hhcmluZzogdGhpcy5zaGFyaW5nLFxuICAgICAgICAgICAgY29tbWVudHM6IHRoaXMuY29tbWVudHMsXG4gICAgICAgICAgICBhZHM6IHRoaXMuYWRzLFxuICAgICAgICAgICAgcnNzOiB0aGlzLnJzcyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIHRzOiB0aGlzLnRzLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBzZWN0aW9uczogdGhpcy5zZWN0aW9ucyxcbiAgICAgICAgICAgIGN1cnJlbmNpZXM6IHRoaXMuY3VycmVuY2llcyxcbiAgICAgICAgICAgIGV4Y2hhbmdlczogdGhpcy5leGNoYW5nZXMsXG4gICAgICAgICAgICBpY286IHRoaXMuaWNvLFxuICAgICAgICAgICAgbWFya2V0czogdGhpcy5tYXJrZXRzLFxuICAgICAgICAgICAgd2VpZ2h0OiB0aGlzLndlaWdodCxcbiAgICAgICAgICAgIGJpZ1RpdGxlOiB0aGlzLmJpZ1RpdGxlLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgYXV0aG9yczogdGhpcy5hdXRob3JzLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgc2hhcmluZzogdGhpcy5zaGFyaW5nLFxuICAgICAgICAgICAgY29tbWVudHM6IHRoaXMuY29tbWVudHMsXG4gICAgICAgICAgICBhZHM6IHRoaXMuYWRzLFxuICAgICAgICAgICAgcnNzOiB0aGlzLnJzcyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZDogdGhpcy5sYXN0TW9kaWZpZWQuaXNWYWxpZCA/IHRoaXMubGFzdE1vZGlmaWVkIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBQdWJsaWNhdGlvbiB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnUHVibGljYXRpb24nO1xuICAgIH1cbn1cblB1YmxpY2F0aW9uLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAndHMnLFxuICAgICd1cmwnLFxuICAgICdlbmFibGUnLFxuICAgICd3ZWlnaHQnLFxuICAgICd0aXRsZScsXG4gICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAncmF0aW5nJyxcbiAgICAnbGFzdE1vZGlmaWVkJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vcHVibGljYXRpb24udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3B1YmxpY2F0aW9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9wdWJsaWNhdGlvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBTZWN0aW9uIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdTZWN0aW9uJztcbiAgICB9XG59XG5TZWN0aW9uLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zZWN0aW9uL3NlY3Rpb24udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3NlY3Rpb24nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5leHBvcnQgY2xhc3MgU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgU3RhdHVzIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdTdGF0dXMnO1xuICAgIH1cbn1cblN0YXR1cy5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zdGF0dXMvc3RhdHVzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9zdGF0dXMnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3N0YXR1cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEVudW0gfSBmcm9tICdAY29yZS9lbnVtJztcbmV4cG9ydCBjbGFzcyBSb2xlRW51bSBleHRlbmRzIEVudW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB2YWx1ZSwgaWNvbikge1xuICAgICAgICBzdXBlcihpZCwgdmFsdWUpO1xuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdVc2VyUm9sZSc7XG4gICAgfVxufVxuUm9sZUVudW0uVXNlciA9IG5ldyBSb2xlRW51bSgndXNlcicsICfQn9C+0LvRjNC30L7QstCw0YLQtdC70YwnLCBudWxsKTtcblJvbGVFbnVtLkF1dGhvciA9IG5ldyBSb2xlRW51bSgnYXV0aG9yJywgJ9CQ0LLRgtC+0YAnLCBudWxsKTtcblJvbGVFbnVtLlB1Ymxpc2hlciA9IG5ldyBSb2xlRW51bSgncHVibGlzaGVyJywgJ9Cf0YPQsdC70LjQutCw0YLQvtGAJywgbnVsbCk7XG5Sb2xlRW51bS5DaGllZiA9IG5ldyBSb2xlRW51bSgnY2hpZWYnLCAn0KDQtdC00LDQutGC0L7RgCcsIG51bGwpO1xuUm9sZUVudW0uQWRtaW5pc3RyYXRvciA9IG5ldyBSb2xlRW51bSgnYWRtaW5pc3RyYXRvcicsICfQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCcsIG51bGwpO1xuUm9sZUVudW0uU3UgPSBuZXcgUm9sZUVudW0oJ3N1JywgJ1N1cGVyIHVzZXInLCBudWxsKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL3JvbGUuZW51bS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFJvbGVFbnVtIH0gZnJvbSAnLi9yb2xlLmVudW0nO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmNvbnN0IEVOVU1fUEdfQVJSQVlfUEFUVEVSTiA9IC9eXFx7KFthLXowLTksXSspXFx9JC87XG5leHBvcnQgY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICBpZiAodmFsdWUucm9sZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gRU5VTV9QR19BUlJBWV9QQVRURVJOLmV4ZWModmFsdWUucm9sZXMpO1xuICAgICAgICAgICAgY29uc3Qgcm9sZXMgPSBtYXRjaCAmJiBtYXRjaFsxXS5zcGxpdCgnLCcpIHx8IHZhbHVlLnJvbGVzO1xuICAgICAgICAgICAgdGhpcy5yb2xlcyA9IFJvbGVFbnVtLmdldEFycmF5KHJvbGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnJvbGVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmVtYWlsID0gU3RyaW5nKHZhbHVlLmVtYWlsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucGhvbmUgPSBTdHJpbmcodmFsdWUucGhvbmUgfHwgJycpLnRyaW0oKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9hdXRoID0ge307XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXR1c2VzID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5zdGF0dXNlcyk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuY2FyZCA9IHt9O1xuICAgIH1cbiAgICBjaGVja1JvbGUocm9sZXMpIHtcbiAgICAgICAgZm9yIChsZXQgcm9sZSBvZiByb2xlcylcbiAgICAgICAgICAgIGlmICh0aGlzLnJvbGVzLmluY2x1ZGVzKHJvbGUpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCB2YWxpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgIT09IG51bGxcbiAgICAgICAgICAgICYmIHRoaXMuaWQudmVyc2lvbiAhPT0gbnVsbDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICByb2xlczogdGhpcy5yb2xlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB0aGlzLnN0YXR1c2VzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBjYXJkOiB0aGlzLmNhcmRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgcm9sZXM6IHRoaXMucm9sZXMsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXG4gICAgICAgICAgICBvYXV0aDogdGhpcy5vYXV0aCxcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHRoaXMuc3RhdHVzZXMsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGNhcmQ6IHRoaXMuY2FyZFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBVc2VyIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdVc2VyJztcbiAgICB9XG59XG5Vc2VyLkFub255bW91c0ZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICd0aXRsZScsXG4gICAgJ3VybCcsXG4gICAgJ2ltYWdlJyxcbiAgICAnc3RhdHVzZXMnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblVzZXIuTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd0aXRsZScsXG4gICAgJ2VtYWlsJyxcbiAgICAncGhvbmUnLFxuICAgICd1cmwnLFxuICAgICdyb2xlcycsXG4gICAgJ2ltYWdlJyxcbiAgICAnc3RhdHVzZXMnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL3VzZXIudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3JvbGUuZW51bSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3VzZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgY2xhc3MgVmlkZW8ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBTdHJpbmcodmFsdWUuaWQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBWaWRlbyB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnVmlkZW8nO1xuICAgIH1cbn1cblZpZGVvLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vdmlkZW8udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3ZpZGVvJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy92aWRlby9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYWRzJztcbmV4cG9ydCAqIGZyb20gJy4vY29pbic7XG5leHBvcnQgKiBmcm9tICcuL2N1cnJlbmN5JztcbmV4cG9ydCAqIGZyb20gJy4vZXhjaGFuZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pY28nO1xuZXhwb3J0ICogZnJvbSAnLi9tYXJrZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3JhdGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0dXMnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlkZW8nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKF9zbmFja0Jhcikge1xuICAgICAgICB0aGlzLl9zbmFja0JhciA9IF9zbmFja0JhcjtcbiAgICB9XG4gICAgbWVzc2FnZShtZXNzYWdlLCBkdXJhdGlvbiA9IDIwMDApIHtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbihtZXNzYWdlLCB1bmRlZmluZWQsIHsgZHVyYXRpb24gfSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvbWVzc2FnZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBBdXRoRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGNvbW1vbi9tb2RlbHMnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2UnO1xuY29uc3QgQVVUSF9UT0tFTl9MU19JRCA9ICdhdXRoLXRva2VuJztcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoX2h0dHAsIF9tYXREaWFsb2csIF9tZXNzYWdlLCBfc25hY2tCYXIpIHtcbiAgICAgICAgdGhpcy5faHR0cCA9IF9odHRwO1xuICAgICAgICB0aGlzLl9tYXREaWFsb2cgPSBfbWF0RGlhbG9nO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gX21lc3NhZ2U7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyID0gX3NuYWNrQmFyO1xuICAgIH1cbiAgICBnZXQgX2F1dGhUb2tlbigpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5sb2NhbFN0b3JhZ2UpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShBVVRIX1RPS0VOX0xTX0lEKSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgX2F1dGhUb2tlbih2YWx1ZSkge1xuICAgICAgICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LmxvY2FsU3RvcmFnZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSAmJiB2YWx1ZS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKEFVVEhfVE9LRU5fTFNfSUQsIHZhbHVlKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEFVVEhfVE9LRU5fTFNfSUQpO1xuICAgIH1cbiAgICBnZXQgYXV0aFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFRva2VuO1xuICAgIH1cbiAgICBnZXQgYXV0aEhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBhdXRoVG9rZW4gPSB0aGlzLl9hdXRoVG9rZW47XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICd0b2tlbiAnICsgKGF1dGhUb2tlbiB8fCAnbnVsbCcpIH0pO1xuICAgIH1cbiAgICBtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKCcvdXNlcnMvbWUnKSwgeyBoZWFkZXJzOiB0aGlzLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdERpYWxvZy5vcGVuKEF1dGhEaWFsb2dDb21wb25lbnQsIHsgZGF0YTogdGhpcyB9KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZShg0J7RiNC40LHQutCwICR7ZXJyb3Iuc3RhdHVzfTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZSgn0J7RiNC40LHQutCwINC/0YDQuNC70L7QttC10L3QuNGPJyk7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihudWxsKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IG5ldyBVc2VyKGl0ZW0pKTtcbiAgICB9XG4gICAgbG9naW4oZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKCcvYXV0aC9sb2dpbicpLCBkYXRhLCB7IGhlYWRlcnM6IHRoaXMuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLm9mKG51bGwpKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCfQndC10LLQtdGA0L3QvtC1INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQu9C4INC/0LDRgNC+0LvRjCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2F1dGhUb2tlbiA9IGl0ZW0udG9rZW47XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5faHR0cC5nZXQoQVBJU2VydmljZS5idWlsZFBhdGgoJy9hdXRoL2xvZ291dCcpLCB7IGhlYWRlcnM6IHRoaXMuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLm9mKG51bGwpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2F1dGhUb2tlbiA9IG51bGw7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvdXNlci91c2VyLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3VzZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJsZXQgQVBJX1NFUlZFUl9WQUxVRSA9IFwiaHR0cHM6Ly9hcGkuYml0am91cm5hbC5pb1wiO1xuZXhwb3J0IGNvbnN0IEFQSV9TRVJWRVIgPSBBUElfU0VSVkVSX1ZBTFVFO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9hcGkvZW52ZXJvbWVudHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlcic7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2UnO1xuaW1wb3J0IHsgQVBJX1NFUlZFUiB9IGZyb20gJy4vZW52ZXJvbWVudHMnO1xuY29uc3QgUEFUSF9SRUdFWFAgPSAvXlxcLz8oLiopLztcbmV4cG9ydCBjbGFzcyBBUElTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihfaHR0cCwgX3JvdXRlciwgX3VzZXIsIF9tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICAgICAgdGhpcy5fdXNlciA9IF91c2VyO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gX21lc3NhZ2U7XG4gICAgfVxuICAgIHN0YXRpYyBidWlsZFBhdGgodmFsdWUgPSAnJykge1xuICAgICAgICBsZXQgbWF0Y2ggPSBQQVRIX1JFR0VYUC5leGVjKHZhbHVlLnRyaW0oKSk7XG4gICAgICAgIHJldHVybiBBUElfU0VSVkVSICsgJy8nICsgKG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnKTtcbiAgICB9XG4gICAgX2hhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVycm9yLnN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJzQwMzog0JTQvtGB0YLRg9C/INC30LDQv9GA0LXRidC10L0nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZSgnNDA0OiDQrdC70LXQvNC10L3RgiDQvdC1INC90LDQudC00LXQvScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoYNCe0YjQuNCx0LrQsCAke2Vycm9yLnN0YXR1c306ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJ9Ce0YjQuNCx0LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRjycpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihudWxsKTtcbiAgICB9XG4gICAgZ2V0KHBhdGgsIGlucHV0UGFyYW1zID0ge30pIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBpbnB1dFBhcmFtcyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKHBhdGgpLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl91c2VyLmF1dGhIZWFkZXJzLFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xuICAgIH1cbiAgICBwb3N0KHBhdGgsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChBUElTZXJ2aWNlLmJ1aWxkUGF0aChwYXRoKSwgZGF0YSwgeyBoZWFkZXJzOiB0aGlzLl91c2VyLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xuICAgIH1cbiAgICBwdXQocGF0aCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoQVBJU2VydmljZS5idWlsZFBhdGgocGF0aCksIGRhdGEsIHsgaGVhZGVyczogdGhpcy5fdXNlci5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuX2hhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG4gICAgZGVsZXRlKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKEFQSVNlcnZpY2UuYnVpbGRQYXRoKHBhdGgpLCB7IGhlYWRlcnM6IHRoaXMuX3VzZXIuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLl9oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvYXBpL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlJztcbmNvbnN0IEdPT0dMRV9BUElfS0VZID0gJ0FJemFTeUIyZ1k4NmhvbXQtdXZxRFFyUkEwcnU4Z3NOa1BLUmRaYyc7XG5jb25zdCBZT1VUVUJFX0RBVEFfVVJMID0gYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zP2lkPXt7SURTfX0ma2V5PSR7R09PR0xFX0FQSV9LRVl9JnBhcnQ9c25pcHBldCxzdGF0aXN0aWNzLGNvbnRlbnREZXRhaWxzYDtcbmNvbnN0IFlPVVRVQkVfVVJMX1JFR0VYUCA9IC8oPzp5b3V0dWJlXFwuY29tXFwvXFxTKig/Oig/OlxcL2UoPzptYmVkKSk/XFwvfHdhdGNoXFwvP1xcPyg/OlxcUyo/Jj92XFw9KSl8eW91dHVcXC5iZVxcLykoW2EtekEtWjAtOV8tXXs2LDExfSkvO1xuZXhwb3J0IGNsYXNzIFlvdVR1YmVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihfaHR0cCwgX21lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5faHR0cCA9IF9odHRwO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gX21lc3NhZ2U7XG4gICAgfVxuICAgIHN0YXRpYyBwYXJzZVZpZGVvSWQodGV4dCkge1xuICAgICAgICB0ZXh0ID0gdGV4dC50cmltKCk7XG4gICAgICAgIGNvbnN0IGlkTWF0Y2ggPSAvXlthLXpBLVowLTlfLV17NiwxMX0kLy5leGVjKHRleHQpO1xuICAgICAgICBpZiAoaWRNYXRjaClcbiAgICAgICAgICAgIHJldHVybiBpZE1hdGNoWzBdO1xuICAgICAgICBjb25zdCB1cmxNYXRjaCA9IFlPVVRVQkVfVVJMX1JFR0VYUC5leGVjKHRleHQpO1xuICAgICAgICBpZiAodXJsTWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gdXJsTWF0Y2hbMV07XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBmb3JtYXREdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gZHVyYXRpb24ucmVwbGFjZSgvW14wLTldKy9nLCAnOicpXG4gICAgICAgICAgICAucmVwbGFjZSgvKF46K3w6KyQpL2csICcnKTtcbiAgICB9XG4gICAgZ2V0VmlkZW9EYXRhKGlkcyA9IFtdKSB7XG4gICAgICAgIGlmIChpZHMubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihuZXcgQXJyYXkoKSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gWU9VVFVCRV9EQVRBX1VSTC5yZXBsYWNlKC9cXHtcXHtcXHMqSURTXFxzKlxcfVxcfS8sIGlkcy5qb2luKCcsJykpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQocXVlcnkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKGBZb3VUdWJlOiAke1N0cmluZyhlcnJvcil9YCk7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihudWxsKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtICYmIGl0ZW0uaXRlbXMgfHwgbnVsbClcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3lvdXR1YmUveW91dHViZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy95b3V0dWJlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi95b3V0dWJlJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuZXhwb3J0IGNsYXNzIEF1dGhEaWFsb2dDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGRpYWxvZ1JlZiwgZmIsIHVzZXIpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYgPSBkaWFsb2dSZWY7XG4gICAgICAgIHRoaXMuZmIgPSBmYjtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dGhGb3JtLnZhbGlkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnVzZXIubG9naW4odGhpcy5hdXRoRm9ybS52YWx1ZSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdClcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhGb3JtLnBhdGNoVmFsdWUoeyBwYXNzd29yZDogJycgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC1kaWFsb2cuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hdXRoL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIExheW91dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5leHBvcnQgY2xhc3MgTWFpblBhZ2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIsIF9hcGlTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UgPSBfYXBpU2VydmljZTtcbiAgICAgICAgdGhpcy5wdWJsaWNhdGlvbnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5jdXJyZW5jaWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMudmlkZW9zID0gW107XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0KCcvcHVibGljYXRpb25zJylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaXRlbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wdWJsaWNhdGlvbnMgPSBpdGVtcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2VcbiAgICAgICAgICAgIC5nZXQoJy9jdXJyZW5jaWVzJylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaXRlbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW5jaWVzID0gaXRlbXM7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZGVvcyA9IFsnMScsICcyJywgJzMnXTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL21haW4tcGFnZS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21haW4tcGFnZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgTm9Db250ZW50Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9uby1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYXV0aCc7XG5leHBvcnQgKiBmcm9tICcuL2xheW91dCc7XG5leHBvcnQgKiBmcm9tICcuL21haW4tcGFnZSc7XG5leHBvcnQgKiBmcm9tICcuL25vLWNvbnRlbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgQXV0aERpYWxvZ0NvbXBvbmVudCwgTm9Db250ZW50Q29tcG9uZW50LCBNYWluUGFnZUNvbXBvbmVudCwgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IENPTVBPTkVOVFMgPSBbXG4gICAgQXV0aERpYWxvZ0NvbXBvbmVudCxcbiAgICBOb0NvbnRlbnRDb21wb25lbnQsXG4gICAgTWFpblBhZ2VDb21wb25lbnQsXG5dO1xuZXhwb3J0IGNvbnN0IEVOVFJZX0NPTVBPTkVOVFMgPSBbXG4gICAgQXV0aERpYWxvZ0NvbXBvbmVudCxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC5jb21wb25lbnRzLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyB9IGZyb20gJy4vYXBwLmNvbXBvbmVudHMnO1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC5mcm9udC5tb2R1bGUudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLm5vLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXJ9XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwibGV0IFJBV19TRVJWRVJfVkFMVUUgPSBcImh0dHBzOi8vcmF3LmJpdGpvdXJuYWwuaW9cIjtcbmV4cG9ydCBjb25zdCBSQVdfU0VSVkVSID0gUkFXX1NFUlZFUl9WQUxVRTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGlwZXMvaW1hZ2UvZW52ZXJvbWVudHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSQVdfU0VSVkVSIH0gZnJvbSAnLi9lbnZlcm9tZW50cyc7XG5jb25zdCBQQVRIX1JFR0VYUCA9IC9eXFwvPyguKikvO1xuY29uc3QgRU1QVFlfUE5HID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQVAvLy93QUFBQ0g1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlDUkFFQU93PT0nO1xuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfUE5HO1xuICAgICAgICBjb25zdCBtYXRjaCA9IFBBVEhfUkVHRVhQLmV4ZWMoU3RyaW5nKHZhbHVlKS50cmltKCkpO1xuICAgICAgICBpZiAoIW1hdGNoKVxuICAgICAgICAgICAgcmV0dXJuIEVNUFRZX1BORztcbiAgICAgICAgcmV0dXJuIFJBV19TRVJWRVIgKyAnLycgKyAobWF0Y2ggJiYgbWF0Y2hbMV0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGlwZXMvaW1hZ2UvaW1hZ2UucGlwZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9tYWluX3BhZ2UuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLi5fLi5fcGlwZXNfaW1hZ2VfaW1hZ2UucGlwZSxfYW5ndWxhcl9jb21tb24sLl9tYWluX3BhZ2UuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciwuLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX21haW5fcGFnZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuLl8uLl9waXBlc19pbWFnZV9pbWFnZS5waXBlLF9hbmd1bGFyX2NvbW1vbiwuX21haW5fcGFnZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9tYWluLXBhZ2UuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL3BpcGVzL2ltYWdlL2ltYWdlLnBpcGVcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuL21haW4tcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfTWFpblBhZ2VDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX01haW5QYWdlQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX01haW5QYWdlQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfTWFpblBhZ2VDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9NYWluUGFnZUNvbXBvbmVudCB9O1xuZnVuY3Rpb24gVmlld19NYWluUGFnZUNvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgNCwgXCJkaXZcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJpbWdcIiwgW10sIFtbOCwgXCJzcmNcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDIsIDEpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAxLCBcInNwYW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoNCwgbnVsbCwgW1wiXCIsIFwiXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybV1bnYoX3YsIDEsIDAsIF9jayhfdiwgMiwgMCwgaTEuybVub3YoX3YucGFyZW50LCAwKSwgX3YuY29udGV4dC4kaW1wbGljaXQuaW1hZ2UpKTsgX2NrKF92LCAxLCAwLCBjdXJyVmFsXzApOyB2YXIgY3VyclZhbF8xID0gX3YuY29udGV4dC4kaW1wbGljaXQuc3ltYm9sOyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMSk7IH0pOyB9XG5mdW5jdGlvbiBWaWV3X01haW5QYWdlQ29tcG9uZW50XzIoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImRpdlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgxLCBudWxsLCBbXCIgXCIsIFwiIFwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IF92LmNvbnRleHQuJGltcGxpY2l0OyBfY2soX3YsIDEsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG5mdW5jdGlvbiBWaWV3X01haW5QYWdlQ29tcG9uZW50XzMoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA0LCBcImFcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJpbWdcIiwgW10sIFtbOCwgXCJzcmNcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDIsIDEpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAxLCBcImgzXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDQsIG51bGwsIFtcIlwiLCBcIlwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1dW52KF92LCAxLCAwLCBfY2soX3YsIDIsIDAsIGkxLsm1bm92KF92LnBhcmVudCwgMCksIF92LmNvbnRleHQuJGltcGxpY2l0LmltYWdlKSk7IF9jayhfdiwgMSwgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IF92LmNvbnRleHQuJGltcGxpY2l0LnRpdGxlOyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMSk7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19NYWluUGFnZUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbaTEuybVwaWQoMCwgaTIuSW1hZ2VQaXBlLCBbXSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDEsIFwiaDFcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIk1haW5cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMiwgXCJkaXZcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIG51bGwsIDEsIG51bGwsIFZpZXdfTWFpblBhZ2VDb21wb25lbnRfMSkpLCBpMS7JtWRpZCg1LCA4MDI4MTYsIG51bGwsIDAsIGkzLk5nRm9yT2YsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZiwgaTEuSXRlcmFibGVEaWZmZXJzXSwgeyBuZ0Zvck9mOiBbMCwgXCJuZ0Zvck9mXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg2LCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMSwgbnVsbCwgVmlld19NYWluUGFnZUNvbXBvbmVudF8yKSksIGkxLsm1ZGlkKDgsIDgwMjgxNiwgbnVsbCwgMCwgaTMuTmdGb3JPZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmLCBpMS5JdGVyYWJsZURpZmZlcnNdLCB7IG5nRm9yT2Y6IFswLCBcIm5nRm9yT2ZcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCBudWxsLCAxLCBudWxsLCBWaWV3X01haW5QYWdlQ29tcG9uZW50XzMpKSwgaTEuybVkaWQoMTAsIDgwMjgxNiwgbnVsbCwgMCwgaTMuTmdGb3JPZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmLCBpMS5JdGVyYWJsZURpZmZlcnNdLCB7IG5nRm9yT2Y6IFswLCBcIm5nRm9yT2ZcIl0gfSwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gX2NvLmN1cnJlbmNpZXM7IF9jayhfdiwgNSwgMCwgY3VyclZhbF8wKTsgdmFyIGN1cnJWYWxfMSA9IF9jby52aWRlb3M7IF9jayhfdiwgOCwgMCwgY3VyclZhbF8xKTsgdmFyIGN1cnJWYWxfMiA9IF9jby5wdWJsaWNhdGlvbnM7IF9jayhfdiwgMTAsIDAsIGN1cnJWYWxfMik7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19NYWluUGFnZUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcIm1haW4tcGFnZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19NYWluUGFnZUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX01haW5QYWdlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTQuTWFpblBhZ2VDb21wb25lbnQsIFtpNS5Sb3V0ZXIsIGk2LkFQSVNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgTWFpblBhZ2VDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwibWFpbi1wYWdlXCIsIGk0Lk1haW5QYWdlQ29tcG9uZW50LCBWaWV3X01haW5QYWdlQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBNYWluUGFnZUNvbXBvbmVudE5nRmFjdG9yeSBhcyBNYWluUGFnZUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIubm8tY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcn1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9ub19jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC5fbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX25vX2NvbnRlbnQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLl9ub19jb250ZW50LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9uby1jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL25vLWNvbnRlbnQuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX05vQ29udGVudENvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfTm9Db250ZW50Q29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX05vQ29udGVudENvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX05vQ29udGVudENvbXBvbmVudCBhcyBSZW5kZXJUeXBlX05vQ29udGVudENvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTm9Db250ZW50Q29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAzLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcIm5vLWNvbnRlbnRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCI0MDRcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJiclwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUGFnZSBub3QgZm91bnRcIl0pKV0sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19Ob0NvbnRlbnRDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJuby1jb250ZW50XCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X05vQ29udGVudENvbXBvbmVudF8wLCBSZW5kZXJUeXBlX05vQ29udGVudENvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTIuTm9Db250ZW50Q29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBudWxsLCBudWxsKTsgfVxudmFyIE5vQ29udGVudENvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJuby1jb250ZW50XCIsIGkyLk5vQ29udGVudENvbXBvbmVudCwgVmlld19Ob0NvbnRlbnRDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IE5vQ29udGVudENvbXBvbmVudE5nRmFjdG9yeSBhcyBOb0NvbnRlbnRDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIuYXV0aC1mb3JtLXRpdGxlW19uZ2NvbnRlbnQtJUNPTVAlXXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXJ9LmF1dGgtZm9ybVtfbmdjb250ZW50LSVDT01QJV17bWluLXdpZHRoOjMwMHB4fS5hdXRoLWZvcm0tcm93W19uZ2NvbnRlbnQtJUNPTVAlXXttYXJnaW4tdG9wOjEwcHg7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfS5hdXRoLWZvcm0tcm93W19uZ2NvbnRlbnQtJUNPTVAlXTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjB9LmF1dGgtZm9ybS1idXR0b25bX25nY29udGVudC0lQ09NUCVde21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fYXV0aF9kaWFsb2cuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkLF9hbmd1bGFyX21hdGVyaWFsX2RpYWxvZyxfYW5ndWxhcl9mb3JtcywuLl8uLl8uLl8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZF90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSxfYW5ndWxhcl9tYXRlcmlhbF9jb3JlLF9hbmd1bGFyX21hdGVyaWFsX2lucHV0LF9hbmd1bGFyX2Nka19wbGF0Zm9ybSxfYW5ndWxhcl9jb21tb24sLi5fLi5fLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX2J1dHRvbl90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSxfYW5ndWxhcl9tYXRlcmlhbF9idXR0b24sX2FuZ3VsYXJfY2RrX2ExMXksLl9hdXRoX2RpYWxvZy5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX2F1dGhfZGlhbG9nLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZCxfYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2csX2FuZ3VsYXJfZm9ybXMsLi5fLi5fLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGRfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2FuZ3VsYXJfbWF0ZXJpYWxfY29yZSxfYW5ndWxhcl9tYXRlcmlhbF9pbnB1dCxfYW5ndWxhcl9jZGtfcGxhdGZvcm0sX2FuZ3VsYXJfY29tbW9uLC4uXy4uXy4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9idXR0b25fdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uLF9hbmd1bGFyX2Nka19hMTF5LC5fYXV0aF9kaWFsb2cuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkL3R5cGluZ3MvaW5kZXgubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2lucHV0XCI7XG5pbXBvcnQgKiBhcyBpOCBmcm9tIFwiQGFuZ3VsYXIvY2RrL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBpOSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9idXR0b24vdHlwaW5ncy9pbmRleC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxMSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBpMTIgZnJvbSBcIkBhbmd1bGFyL2Nkay9hMTF5XCI7XG5pbXBvcnQgKiBhcyBpMTMgZnJvbSBcIi4vYXV0aC1kaWFsb2cuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX0F1dGhEaWFsb2dDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX0F1dGhEaWFsb2dDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMCwgc3R5bGVzOiBzdHlsZXNfQXV0aERpYWxvZ0NvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX0F1dGhEaWFsb2dDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9BdXRoRGlhbG9nQ29tcG9uZW50IH07XG5mdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMShfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQsIFwibWF0LWVycm9yXCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1lcnJvclwiXSwgW1wicm9sZVwiLCBcImFsZXJ0XCJdXSwgW1sxLCBcImlkXCIsIDBdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxLCAxNjM4NCwgW1szLCA0XV0sIDAsIGkyLk1hdEVycm9yLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJFbWFpbCBpcyBcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJzdHJvbmdcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcInJlcXVpcmVkXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDEpLmlkOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG5mdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMihfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDIsIFwibWF0LWVycm9yXCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1lcnJvclwiXSwgW1wicm9sZVwiLCBcImFsZXJ0XCJdXSwgW1sxLCBcImlkXCIsIDBdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxLCAxNjM4NCwgW1szLCA0XV0sIDAsIGkyLk1hdEVycm9yLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDEpLmlkOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG5mdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMyhfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDQsIFwibWF0LWVycm9yXCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1lcnJvclwiXSwgW1wicm9sZVwiLCBcImFsZXJ0XCJdXSwgW1sxLCBcImlkXCIsIDBdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxLCAxNjM4NCwgW1s5LCA0XV0sIDAsIGkyLk1hdEVycm9yLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJQYXNzd29yZCBpcyBcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJzdHJvbmdcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcInJlcXVpcmVkXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDEpLmlkOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IH0pOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzAoX2wpIHtcbiAgICByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDIsIFwiaDFcIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtLXRpdGxlIG1hdC1kaWFsb2ctdGl0bGVcIl0sIFtcIm1hdC1kaWFsb2ctdGl0bGVcIiwgXCJcIl1dLCBbWzgsIFwiaWRcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDEsIDgxOTIwLCBudWxsLCAwLCBpMy5NYXREaWFsb2dUaXRsZSwgW1syLCBpMy5NYXREaWFsb2dDb250YWluZXJdXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJBdXRob3JpemF0aW9uXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDQ0LCBcImZvcm1cIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtIG1hdC1kaWFsb2ctY29udGVudFwiXSwgW1wibWF0LWRpYWxvZy1jb250ZW50XCIsIFwiXCJdLCBbXCJub3ZhbGlkYXRlXCIsIFwiXCJdXSwgW1syLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXV0sIFtbbnVsbCwgXCJuZ1N1Ym1pdFwiXSwgW251bGwsIFwic3VibWl0XCJdLCBbbnVsbCwgXCJyZXNldFwiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfY28gPSBfdi5jb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoKFwic3VibWl0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCA1KS5vblN1Ym1pdCgkZXZlbnQpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwicmVzZXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzEgPSAoaTEuybVub3YoX3YsIDUpLm9uUmVzZXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzEgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcIm5nU3VibWl0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8yID0gKF9jby5vblN1Ym1pdCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoNCwgMTYzODQsIG51bGwsIDAsIGk0Lsm1YmYsIFtdLCBudWxsLCBudWxsKSwgaTEuybVkaWQoNSwgNTQwNjcyLCBudWxsLCAwLCBpNC5Gb3JtR3JvdXBEaXJlY3RpdmUsIFtbOCwgbnVsbF0sIFs4LCBudWxsXV0sIHsgZm9ybTogWzAsIFwiZm9ybVwiXSB9LCB7IG5nU3VibWl0OiBcIm5nU3VibWl0XCIgfSksIGkxLsm1cHJkKDIwNDgsIG51bGwsIGk0LkNvbnRyb2xDb250YWluZXIsIG51bGwsIFtpNC5Gb3JtR3JvdXBEaXJlY3RpdmVdKSwgaTEuybVkaWQoNywgMTYzODQsIG51bGwsIDAsIGk0Lk5nQ29udHJvbFN0YXR1c0dyb3VwLCBbaTQuQ29udHJvbENvbnRhaW5lcl0sIG51bGwsIG51bGwpLCBpMS7JtWRpZCg4LCAxNjM4NCwgbnVsbCwgMCwgaTMuTWF0RGlhbG9nQ29udGVudCwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAxOSwgXCJtYXQtZm9ybS1maWVsZFwiLCBbW1wiY2xhc3NcIiwgXCJhdXRoLWZvcm0tcm93IG1hdC1pbnB1dC1jb250YWluZXIgbWF0LWZvcm0tZmllbGRcIl1dLCBbWzIsIFwibWF0LWlucHV0LWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0XCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1kaXNhYmxlZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvY3VzZWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1wcmltYXJ5XCIsIG51bGxdLCBbMiwgXCJtYXQtYWNjZW50XCIsIG51bGxdLCBbMiwgXCJtYXQtd2FyblwiLCBudWxsXSwgWzIsIFwibmctdW50b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy10b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy1wcmlzdGluZVwiLCBudWxsXSwgWzIsIFwibmctZGlydHlcIiwgbnVsbF0sIFsyLCBcIm5nLXZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1wZW5kaW5nXCIsIG51bGxdXSwgbnVsbCwgbnVsbCwgaTUuVmlld19NYXRGb3JtRmllbGRfMCwgaTUuUmVuZGVyVHlwZV9NYXRGb3JtRmllbGQpKSwgaTEuybVkaWQoMTAsIDczODkxODQsIG51bGwsIDYsIGkyLk1hdEZvcm1GaWVsZCwgW2kxLkVsZW1lbnRSZWYsIGkxLkNoYW5nZURldGVjdG9yUmVmLCBbMiwgaTYuTUFUX1BMQUNFSE9MREVSX0dMT0JBTF9PUFRJT05TXV0sIG51bGwsIG51bGwpLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDEsIHsgX2NvbnRyb2w6IDAgfSksIGkxLsm1cXVkKDMzNTU0NDMyMCwgMiwgeyBfcGxhY2Vob2xkZXJDaGlsZDogMCB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCAzLCB7IF9lcnJvckNoaWxkcmVuOiAxIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDQsIHsgX2hpbnRDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCA1LCB7IF9wcmVmaXhDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCA2LCB7IF9zdWZmaXhDaGlsZHJlbjogMSB9KSwgKF9sKCkoKSwgaTEuybVlbGQoMTcsIDAsIG51bGwsIDEsIDcsIFwiaW5wdXRcIiwgW1tcImNsYXNzXCIsIFwibWF0LWlucHV0LWVsZW1lbnQgbWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbFwiXSwgW1wiZm9ybUNvbnRyb2xOYW1lXCIsIFwiZW1haWxcIl0sIFtcIm1hdElucHV0XCIsIFwiXCJdLCBbXCJwbGFjZWhvbGRlclwiLCBcIkUtbWFpbFwiXSwgW1widHlwZVwiLCBcInRleHRcIl1dLCBbWzIsIFwibmctdW50b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy10b3VjaGVkXCIsIG51bGxdLCBbMiwgXCJuZy1wcmlzdGluZVwiLCBudWxsXSwgWzIsIFwibmctZGlydHlcIiwgbnVsbF0sIFsyLCBcIm5nLXZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJuZy1wZW5kaW5nXCIsIG51bGxdLCBbMSwgXCJpZFwiLCAwXSwgWzgsIFwicGxhY2Vob2xkZXJcIiwgMF0sIFs4LCBcImRpc2FibGVkXCIsIDBdLCBbOCwgXCJyZXF1aXJlZFwiLCAwXSwgWzgsIFwicmVhZE9ubHlcIiwgMF0sIFsxLCBcImFyaWEtZGVzY3JpYmVkYnlcIiwgMF0sIFsxLCBcImFyaWEtaW52YWxpZFwiLCAwXSwgWzEsIFwiYXJpYS1yZXF1aXJlZFwiLCAwXV0sIFtbbnVsbCwgXCJpbnB1dFwiXSwgW251bGwsIFwiYmx1clwiXSwgW251bGwsIFwiY29tcG9zaXRpb25zdGFydFwiXSwgW251bGwsIFwiY29tcG9zaXRpb25lbmRcIl0sIFtudWxsLCBcImZvY3VzXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImlucHV0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxOCkuX2hhbmRsZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiYmx1clwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMSA9IChpMS7JtW5vdihfdiwgMTgpLm9uVG91Y2hlZCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMSAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiY29tcG9zaXRpb25zdGFydFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMiA9IChpMS7JtW5vdihfdiwgMTgpLl9jb21wb3NpdGlvblN0YXJ0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8yICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJjb21wb3NpdGlvbmVuZFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMyA9IChpMS7JtW5vdihfdiwgMTgpLl9jb21wb3NpdGlvbkVuZCgkZXZlbnQudGFyZ2V0LnZhbHVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzMgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImJsdXJcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzQgPSAoaTEuybVub3YoX3YsIDIzKS5fZm9jdXNDaGFuZ2VkKGZhbHNlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzQgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImZvY3VzXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF81ID0gKGkxLsm1bm92KF92LCAyMykuX2ZvY3VzQ2hhbmdlZCh0cnVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzUgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImlucHV0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF82ID0gKGkxLsm1bm92KF92LCAyMykuX29uSW5wdXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzYgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDE4LCAxNjM4NCwgbnVsbCwgMCwgaTQuRGVmYXVsdFZhbHVlQWNjZXNzb3IsIFtpMS5SZW5kZXJlcjIsIGkxLkVsZW1lbnRSZWYsIFsyLCBpNC5DT01QT1NJVElPTl9CVUZGRVJfTU9ERV1dLCBudWxsLCBudWxsKSwgaTEuybVwcmQoMTAyNCwgbnVsbCwgaTQuTkdfVkFMVUVfQUNDRVNTT1IsIGZ1bmN0aW9uIChwMF8wKSB7IHJldHVybiBbcDBfMF07IH0sIFtpNC5EZWZhdWx0VmFsdWVBY2Nlc3Nvcl0pLCBpMS7JtWRpZCgyMCwgNjcxNzQ0LCBudWxsLCAwLCBpNC5Gb3JtQ29udHJvbE5hbWUsIFtbMywgaTQuQ29udHJvbENvbnRhaW5lcl0sIFs4LCBudWxsXSwgWzgsIG51bGxdLCBbMiwgaTQuTkdfVkFMVUVfQUNDRVNTT1JdXSwgeyBuYW1lOiBbMCwgXCJuYW1lXCJdIH0sIG51bGwpLCBpMS7JtXByZCgyMDQ4LCBudWxsLCBpNC5OZ0NvbnRyb2wsIG51bGwsIFtpNC5Gb3JtQ29udHJvbE5hbWVdKSwgaTEuybVkaWQoMjIsIDE2Mzg0LCBudWxsLCAwLCBpNC5OZ0NvbnRyb2xTdGF0dXMsIFtpNC5OZ0NvbnRyb2xdLCBudWxsLCBudWxsKSwgaTEuybVkaWQoMjMsIDkzMzg4OCwgbnVsbCwgMCwgaTcuTWF0SW5wdXQsIFtpMS5FbGVtZW50UmVmLCBpOC5QbGF0Zm9ybSwgWzIsIGk0Lk5nQ29udHJvbF0sIFsyLCBpNC5OZ0Zvcm1dLCBbMiwgaTQuRm9ybUdyb3VwRGlyZWN0aXZlXSwgaTYuRXJyb3JTdGF0ZU1hdGNoZXIsIFs4LCBudWxsXV0sIHsgcGxhY2Vob2xkZXI6IFswLCBcInBsYWNlaG9sZGVyXCJdLCB0eXBlOiBbMSwgXCJ0eXBlXCJdIH0sIG51bGwpLCBpMS7JtXByZCgyMDQ4LCBbWzEsIDRdXSwgaTIuTWF0Rm9ybUZpZWxkQ29udHJvbCwgbnVsbCwgW2k3Lk1hdElucHV0XSksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCA0LCAxLCBudWxsLCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMSkpLCBpMS7JtWRpZCgyNiwgMTYzODQsIG51bGwsIDAsIGk5Lk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIDQsIDEsIG51bGwsIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8yKSksIGkxLsm1ZGlkKDI4LCAxNjM4NCwgbnVsbCwgMCwgaTkuTmdJZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmXSwgeyBuZ0lmOiBbMCwgXCJuZ0lmXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyOSwgMCwgbnVsbCwgbnVsbCwgMTcsIFwibWF0LWZvcm0tZmllbGRcIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtLXJvdyBtYXQtaW5wdXQtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkXCJdXSwgW1syLCBcIm1hdC1pbnB1dC1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1jYW4tZmxvYXRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtZGlzYWJsZWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb2N1c2VkXCIsIG51bGxdLCBbMiwgXCJtYXQtcHJpbWFyeVwiLCBudWxsXSwgWzIsIFwibWF0LWFjY2VudFwiLCBudWxsXSwgWzIsIFwibWF0LXdhcm5cIiwgbnVsbF0sIFsyLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXV0sIG51bGwsIG51bGwsIGk1LlZpZXdfTWF0Rm9ybUZpZWxkXzAsIGk1LlJlbmRlclR5cGVfTWF0Rm9ybUZpZWxkKSksIGkxLsm1ZGlkKDMwLCA3Mzg5MTg0LCBudWxsLCA2LCBpMi5NYXRGb3JtRmllbGQsIFtpMS5FbGVtZW50UmVmLCBpMS5DaGFuZ2VEZXRlY3RvclJlZiwgWzIsIGk2Lk1BVF9QTEFDRUhPTERFUl9HTE9CQUxfT1BUSU9OU11dLCBudWxsLCBudWxsKSwgaTEuybVxdWQoMzM1NTQ0MzIwLCA3LCB7IF9jb250cm9sOiAwIH0pLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDgsIHsgX3BsYWNlaG9sZGVyQ2hpbGQ6IDAgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgOSwgeyBfZXJyb3JDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCAxMCwgeyBfaGludENoaWxkcmVuOiAxIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDExLCB7IF9wcmVmaXhDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCAxMiwgeyBfc3VmZml4Q2hpbGRyZW46IDEgfSksIChfbCgpKCksIGkxLsm1ZWxkKDM3LCAwLCBudWxsLCAxLCA3LCBcImlucHV0XCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1pbnB1dC1lbGVtZW50IG1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2xcIl0sIFtcImZvcm1Db250cm9sTmFtZVwiLCBcInBhc3N3b3JkXCJdLCBbXCJtYXRJbnB1dFwiLCBcIlwiXSwgW1wicGxhY2Vob2xkZXJcIiwgXCJQYXNzd29yZFwiXSwgW1widHlwZVwiLCBcInBhc3N3b3JkXCJdXSwgW1syLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXSwgWzEsIFwiaWRcIiwgMF0sIFs4LCBcInBsYWNlaG9sZGVyXCIsIDBdLCBbOCwgXCJkaXNhYmxlZFwiLCAwXSwgWzgsIFwicmVxdWlyZWRcIiwgMF0sIFs4LCBcInJlYWRPbmx5XCIsIDBdLCBbMSwgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIDBdLCBbMSwgXCJhcmlhLWludmFsaWRcIiwgMF0sIFsxLCBcImFyaWEtcmVxdWlyZWRcIiwgMF1dLCBbW251bGwsIFwiaW5wdXRcIl0sIFtudWxsLCBcImJsdXJcIl0sIFtudWxsLCBcImNvbXBvc2l0aW9uc3RhcnRcIl0sIFtudWxsLCBcImNvbXBvc2l0aW9uZW5kXCJdLCBbbnVsbCwgXCJmb2N1c1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJpbnB1dFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMzgpLl9oYW5kbGVJbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImJsdXJcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzEgPSAoaTEuybVub3YoX3YsIDM4KS5vblRvdWNoZWQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzEgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImNvbXBvc2l0aW9uc3RhcnRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzIgPSAoaTEuybVub3YoX3YsIDM4KS5fY29tcG9zaXRpb25TdGFydCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiY29tcG9zaXRpb25lbmRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzMgPSAoaTEuybVub3YoX3YsIDM4KS5fY29tcG9zaXRpb25FbmQoJGV2ZW50LnRhcmdldC52YWx1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8zICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJibHVyXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF80ID0gKGkxLsm1bm92KF92LCA0MykuX2ZvY3VzQ2hhbmdlZChmYWxzZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF80ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJmb2N1c1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNSA9IChpMS7JtW5vdihfdiwgNDMpLl9mb2N1c0NoYW5nZWQodHJ1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF81ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJpbnB1dFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNiA9IChpMS7JtW5vdihfdiwgNDMpLl9vbklucHV0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF82ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgzOCwgMTYzODQsIG51bGwsIDAsIGk0LkRlZmF1bHRWYWx1ZUFjY2Vzc29yLCBbaTEuUmVuZGVyZXIyLCBpMS5FbGVtZW50UmVmLCBbMiwgaTQuQ09NUE9TSVRJT05fQlVGRkVSX01PREVdXSwgbnVsbCwgbnVsbCksIGkxLsm1cHJkKDEwMjQsIG51bGwsIGk0Lk5HX1ZBTFVFX0FDQ0VTU09SLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTQuRGVmYXVsdFZhbHVlQWNjZXNzb3JdKSwgaTEuybVkaWQoNDAsIDY3MTc0NCwgbnVsbCwgMCwgaTQuRm9ybUNvbnRyb2xOYW1lLCBbWzMsIGk0LkNvbnRyb2xDb250YWluZXJdLCBbOCwgbnVsbF0sIFs4LCBudWxsXSwgWzIsIGk0Lk5HX1ZBTFVFX0FDQ0VTU09SXV0sIHsgbmFtZTogWzAsIFwibmFtZVwiXSB9LCBudWxsKSwgaTEuybVwcmQoMjA0OCwgbnVsbCwgaTQuTmdDb250cm9sLCBudWxsLCBbaTQuRm9ybUNvbnRyb2xOYW1lXSksIGkxLsm1ZGlkKDQyLCAxNjM4NCwgbnVsbCwgMCwgaTQuTmdDb250cm9sU3RhdHVzLCBbaTQuTmdDb250cm9sXSwgbnVsbCwgbnVsbCksIGkxLsm1ZGlkKDQzLCA5MzM4ODgsIG51bGwsIDAsIGk3Lk1hdElucHV0LCBbaTEuRWxlbWVudFJlZiwgaTguUGxhdGZvcm0sIFsyLCBpNC5OZ0NvbnRyb2xdLCBbMiwgaTQuTmdGb3JtXSwgWzIsIGk0LkZvcm1Hcm91cERpcmVjdGl2ZV0sIGk2LkVycm9yU3RhdGVNYXRjaGVyLCBbOCwgbnVsbF1dLCB7IHBsYWNlaG9sZGVyOiBbMCwgXCJwbGFjZWhvbGRlclwiXSwgdHlwZTogWzEsIFwidHlwZVwiXSB9LCBudWxsKSwgaTEuybVwcmQoMjA0OCwgW1s3LCA0XV0sIGkyLk1hdEZvcm1GaWVsZENvbnRyb2wsIG51bGwsIFtpNy5NYXRJbnB1dF0pLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgNCwgMSwgbnVsbCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzMpKSwgaTEuybVkaWQoNDYsIDE2Mzg0LCBudWxsLCAwLCBpOS5OZ0lmLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWZdLCB7IG5nSWY6IFswLCBcIm5nSWZcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDQ3LCAwLCBudWxsLCBudWxsLCAwLCBcImlucHV0XCIsIFtbXCJoaWRkZW5cIiwgXCJcIl0sIFtcInR5cGVcIiwgXCJzdWJtaXRcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDQ4LCAwLCBudWxsLCBudWxsLCA1LCBcIm1hdC1kaWFsb2ctYWN0aW9uc1wiLCBbW1wiY2xhc3NcIiwgXCJtYXQtZGlhbG9nLWFjdGlvbnNcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDQ5LCAxNjM4NCwgbnVsbCwgMCwgaTMuTWF0RGlhbG9nQWN0aW9ucywgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg1MCwgMCwgbnVsbCwgbnVsbCwgMywgXCJidXR0b25cIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtLWJ1dHRvbiBtYXQtYnV0dG9uXCJdLCBbXCJjb2xvclwiLCBcInByaW1hcnlcIl0sIFtcIm1hdC1idXR0b25cIiwgXCJcIl0sIFtcInR5cGVcIiwgXCJzdWJtaXRcIl1dLCBbWzgsIFwiZGlzYWJsZWRcIiwgMF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2NvID0gX3YuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKF9jby5vblN1Ym1pdCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIGkxMC5WaWV3X01hdEJ1dHRvbl8wLCBpMTAuUmVuZGVyVHlwZV9NYXRCdXR0b24pKSwgaTEuybVkaWQoNTEsIDE4MDIyNCwgbnVsbCwgMCwgaTExLk1hdEJ1dHRvbiwgW2kxLkVsZW1lbnRSZWYsIGk4LlBsYXRmb3JtLCBpMTIuRm9jdXNNb25pdG9yXSwgeyBkaXNhYmxlZDogWzAsIFwiZGlzYWJsZWRcIl0sIGNvbG9yOiBbMSwgXCJjb2xvclwiXSB9LCBudWxsKSwgaTEuybVkaWQoNTIsIDE2Mzg0LCBudWxsLCAwLCBpMTEuTWF0QnV0dG9uQ3NzTWF0U3R5bGVyLCBbXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCAwLCBbXCJTdWJtaXRcIl0pKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBfY28gPSBfdi5jb21wb25lbnQ7IF9jayhfdiwgMSwgMCk7IHZhciBjdXJyVmFsXzggPSBfY28uYXV0aEZvcm07IF9jayhfdiwgNSwgMCwgY3VyclZhbF84KTsgdmFyIGN1cnJWYWxfNDAgPSBcImVtYWlsXCI7IF9jayhfdiwgMjAsIDAsIGN1cnJWYWxfNDApOyB2YXIgY3VyclZhbF80MSA9IFwiRS1tYWlsXCI7IHZhciBjdXJyVmFsXzQyID0gXCJ0ZXh0XCI7IF9jayhfdiwgMjMsIDAsIGN1cnJWYWxfNDEsIGN1cnJWYWxfNDIpOyB2YXIgY3VyclZhbF80MyA9IF9jby5hdXRoRm9ybS5jb250cm9scy5lbWFpbC5oYXNFcnJvcihcInJlcXVpcmVkXCIpOyBfY2soX3YsIDI2LCAwLCBjdXJyVmFsXzQzKTsgdmFyIGN1cnJWYWxfNDQgPSBfY28uYXV0aEZvcm0uY29udHJvbHMuZW1haWwuaGFzRXJyb3IoXCJlbWFpbFwiKTsgX2NrKF92LCAyOCwgMCwgY3VyclZhbF80NCk7IHZhciBjdXJyVmFsXzc2ID0gXCJwYXNzd29yZFwiOyBfY2soX3YsIDQwLCAwLCBjdXJyVmFsXzc2KTsgdmFyIGN1cnJWYWxfNzcgPSBcIlBhc3N3b3JkXCI7IHZhciBjdXJyVmFsXzc4ID0gXCJwYXNzd29yZFwiOyBfY2soX3YsIDQzLCAwLCBjdXJyVmFsXzc3LCBjdXJyVmFsXzc4KTsgdmFyIGN1cnJWYWxfNzkgPSBfY28uYXV0aEZvcm0uY29udHJvbHMucGFzc3dvcmQuaGFzRXJyb3IoXCJyZXF1aXJlZFwiKTsgX2NrKF92LCA0NiwgMCwgY3VyclZhbF83OSk7IHZhciBjdXJyVmFsXzgxID0gX2NvLmF1dGhGb3JtLmludmFsaWQ7IHZhciBjdXJyVmFsXzgyID0gXCJwcmltYXJ5XCI7IF9jayhfdiwgNTEsIDAsIGN1cnJWYWxfODEsIGN1cnJWYWxfODIpOyB9LCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDEpLmlkOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzEgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1VudG91Y2hlZDsgdmFyIGN1cnJWYWxfMiA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzVG91Y2hlZDsgdmFyIGN1cnJWYWxfMyA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzUHJpc3RpbmU7IHZhciBjdXJyVmFsXzQgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc0RpcnR5OyB2YXIgY3VyclZhbF81ID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NWYWxpZDsgdmFyIGN1cnJWYWxfNiA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzSW52YWxpZDsgdmFyIGN1cnJWYWxfNyA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzUGVuZGluZzsgX2NrKF92LCAzLCAwLCBjdXJyVmFsXzEsIGN1cnJWYWxfMiwgY3VyclZhbF8zLCBjdXJyVmFsXzQsIGN1cnJWYWxfNSwgY3VyclZhbF82LCBjdXJyVmFsXzcpOyB2YXIgY3VyclZhbF85ID0gaTEuybVub3YoX3YsIDEwKS5fY29udHJvbC5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF8xMCA9IGkxLsm1bm92KF92LCAxMCkuX2NvbnRyb2wuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfMTEgPSBpMS7JtW5vdihfdiwgMTApLl9jYW5QbGFjZWhvbGRlckZsb2F0OyB2YXIgY3VyclZhbF8xMiA9IChpMS7JtW5vdihfdiwgMTApLl9jb250cm9sLnNob3VsZFBsYWNlaG9sZGVyRmxvYXQgfHwgaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkQWx3YXlzRmxvYXQpOyB2YXIgY3VyclZhbF8xMyA9IGkxLsm1bm92KF92LCAxMCkuX2NvbnRyb2wuZGlzYWJsZWQ7IHZhciBjdXJyVmFsXzE0ID0gaTEuybVub3YoX3YsIDEwKS5fY29udHJvbC5mb2N1c2VkOyB2YXIgY3VyclZhbF8xNSA9IChpMS7JtW5vdihfdiwgMTApLmNvbG9yID09IFwicHJpbWFyeVwiKTsgdmFyIGN1cnJWYWxfMTYgPSAoaTEuybVub3YoX3YsIDEwKS5jb2xvciA9PSBcImFjY2VudFwiKTsgdmFyIGN1cnJWYWxfMTcgPSAoaTEuybVub3YoX3YsIDEwKS5jb2xvciA9PSBcIndhcm5cIik7IHZhciBjdXJyVmFsXzE4ID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInVudG91Y2hlZFwiKTsgdmFyIGN1cnJWYWxfMTkgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKTsgdmFyIGN1cnJWYWxfMjAgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwicHJpc3RpbmVcIik7IHZhciBjdXJyVmFsXzIxID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcImRpcnR5XCIpOyB2YXIgY3VyclZhbF8yMiA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKTsgdmFyIGN1cnJWYWxfMjMgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwiaW52YWxpZFwiKTsgdmFyIGN1cnJWYWxfMjQgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwicGVuZGluZ1wiKTsgX2NrKF92LCA5LCAxLCBbY3VyclZhbF85LCBjdXJyVmFsXzEwLCBjdXJyVmFsXzExLCBjdXJyVmFsXzEyLCBjdXJyVmFsXzEzLCBjdXJyVmFsXzE0LCBjdXJyVmFsXzE1LCBjdXJyVmFsXzE2LCBjdXJyVmFsXzE3LCBjdXJyVmFsXzE4LCBjdXJyVmFsXzE5LCBjdXJyVmFsXzIwLCBjdXJyVmFsXzIxLCBjdXJyVmFsXzIyLCBjdXJyVmFsXzIzLCBjdXJyVmFsXzI0XSk7IHZhciBjdXJyVmFsXzI1ID0gaTEuybVub3YoX3YsIDIyKS5uZ0NsYXNzVW50b3VjaGVkOyB2YXIgY3VyclZhbF8yNiA9IGkxLsm1bm92KF92LCAyMikubmdDbGFzc1RvdWNoZWQ7IHZhciBjdXJyVmFsXzI3ID0gaTEuybVub3YoX3YsIDIyKS5uZ0NsYXNzUHJpc3RpbmU7IHZhciBjdXJyVmFsXzI4ID0gaTEuybVub3YoX3YsIDIyKS5uZ0NsYXNzRGlydHk7IHZhciBjdXJyVmFsXzI5ID0gaTEuybVub3YoX3YsIDIyKS5uZ0NsYXNzVmFsaWQ7IHZhciBjdXJyVmFsXzMwID0gaTEuybVub3YoX3YsIDIyKS5uZ0NsYXNzSW52YWxpZDsgdmFyIGN1cnJWYWxfMzEgPSBpMS7JtW5vdihfdiwgMjIpLm5nQ2xhc3NQZW5kaW5nOyB2YXIgY3VyclZhbF8zMiA9IGkxLsm1bm92KF92LCAyMykuaWQ7IHZhciBjdXJyVmFsXzMzID0gaTEuybVub3YoX3YsIDIzKS5wbGFjZWhvbGRlcjsgdmFyIGN1cnJWYWxfMzQgPSBpMS7JtW5vdihfdiwgMjMpLmRpc2FibGVkOyB2YXIgY3VyclZhbF8zNSA9IGkxLsm1bm92KF92LCAyMykucmVxdWlyZWQ7IHZhciBjdXJyVmFsXzM2ID0gaTEuybVub3YoX3YsIDIzKS5yZWFkb25seTsgdmFyIGN1cnJWYWxfMzcgPSAoaTEuybVub3YoX3YsIDIzKS5fYXJpYURlc2NyaWJlZGJ5IHx8IG51bGwpOyB2YXIgY3VyclZhbF8zOCA9IGkxLsm1bm92KF92LCAyMykuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfMzkgPSBpMS7JtW5vdihfdiwgMjMpLnJlcXVpcmVkLnRvU3RyaW5nKCk7IF9jayhfdiwgMTcsIDEsIFtjdXJyVmFsXzI1LCBjdXJyVmFsXzI2LCBjdXJyVmFsXzI3LCBjdXJyVmFsXzI4LCBjdXJyVmFsXzI5LCBjdXJyVmFsXzMwLCBjdXJyVmFsXzMxLCBjdXJyVmFsXzMyLCBjdXJyVmFsXzMzLCBjdXJyVmFsXzM0LCBjdXJyVmFsXzM1LCBjdXJyVmFsXzM2LCBjdXJyVmFsXzM3LCBjdXJyVmFsXzM4LCBjdXJyVmFsXzM5XSk7IHZhciBjdXJyVmFsXzQ1ID0gaTEuybVub3YoX3YsIDMwKS5fY29udHJvbC5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF80NiA9IGkxLsm1bm92KF92LCAzMCkuX2NvbnRyb2wuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfNDcgPSBpMS7JtW5vdihfdiwgMzApLl9jYW5QbGFjZWhvbGRlckZsb2F0OyB2YXIgY3VyclZhbF80OCA9IChpMS7JtW5vdihfdiwgMzApLl9jb250cm9sLnNob3VsZFBsYWNlaG9sZGVyRmxvYXQgfHwgaTEuybVub3YoX3YsIDMwKS5fc2hvdWxkQWx3YXlzRmxvYXQpOyB2YXIgY3VyclZhbF80OSA9IGkxLsm1bm92KF92LCAzMCkuX2NvbnRyb2wuZGlzYWJsZWQ7IHZhciBjdXJyVmFsXzUwID0gaTEuybVub3YoX3YsIDMwKS5fY29udHJvbC5mb2N1c2VkOyB2YXIgY3VyclZhbF81MSA9IChpMS7JtW5vdihfdiwgMzApLmNvbG9yID09IFwicHJpbWFyeVwiKTsgdmFyIGN1cnJWYWxfNTIgPSAoaTEuybVub3YoX3YsIDMwKS5jb2xvciA9PSBcImFjY2VudFwiKTsgdmFyIGN1cnJWYWxfNTMgPSAoaTEuybVub3YoX3YsIDMwKS5jb2xvciA9PSBcIndhcm5cIik7IHZhciBjdXJyVmFsXzU0ID0gaTEuybVub3YoX3YsIDMwKS5fc2hvdWxkRm9yd2FyZChcInVudG91Y2hlZFwiKTsgdmFyIGN1cnJWYWxfNTUgPSBpMS7JtW5vdihfdiwgMzApLl9zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKTsgdmFyIGN1cnJWYWxfNTYgPSBpMS7JtW5vdihfdiwgMzApLl9zaG91bGRGb3J3YXJkKFwicHJpc3RpbmVcIik7IHZhciBjdXJyVmFsXzU3ID0gaTEuybVub3YoX3YsIDMwKS5fc2hvdWxkRm9yd2FyZChcImRpcnR5XCIpOyB2YXIgY3VyclZhbF81OCA9IGkxLsm1bm92KF92LCAzMCkuX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKTsgdmFyIGN1cnJWYWxfNTkgPSBpMS7JtW5vdihfdiwgMzApLl9zaG91bGRGb3J3YXJkKFwiaW52YWxpZFwiKTsgdmFyIGN1cnJWYWxfNjAgPSBpMS7JtW5vdihfdiwgMzApLl9zaG91bGRGb3J3YXJkKFwicGVuZGluZ1wiKTsgX2NrKF92LCAyOSwgMSwgW2N1cnJWYWxfNDUsIGN1cnJWYWxfNDYsIGN1cnJWYWxfNDcsIGN1cnJWYWxfNDgsIGN1cnJWYWxfNDksIGN1cnJWYWxfNTAsIGN1cnJWYWxfNTEsIGN1cnJWYWxfNTIsIGN1cnJWYWxfNTMsIGN1cnJWYWxfNTQsIGN1cnJWYWxfNTUsIGN1cnJWYWxfNTYsIGN1cnJWYWxfNTcsIGN1cnJWYWxfNTgsIGN1cnJWYWxfNTksIGN1cnJWYWxfNjBdKTsgdmFyIGN1cnJWYWxfNjEgPSBpMS7JtW5vdihfdiwgNDIpLm5nQ2xhc3NVbnRvdWNoZWQ7IHZhciBjdXJyVmFsXzYyID0gaTEuybVub3YoX3YsIDQyKS5uZ0NsYXNzVG91Y2hlZDsgdmFyIGN1cnJWYWxfNjMgPSBpMS7JtW5vdihfdiwgNDIpLm5nQ2xhc3NQcmlzdGluZTsgdmFyIGN1cnJWYWxfNjQgPSBpMS7JtW5vdihfdiwgNDIpLm5nQ2xhc3NEaXJ0eTsgdmFyIGN1cnJWYWxfNjUgPSBpMS7JtW5vdihfdiwgNDIpLm5nQ2xhc3NWYWxpZDsgdmFyIGN1cnJWYWxfNjYgPSBpMS7JtW5vdihfdiwgNDIpLm5nQ2xhc3NJbnZhbGlkOyB2YXIgY3VyclZhbF82NyA9IGkxLsm1bm92KF92LCA0MikubmdDbGFzc1BlbmRpbmc7IHZhciBjdXJyVmFsXzY4ID0gaTEuybVub3YoX3YsIDQzKS5pZDsgdmFyIGN1cnJWYWxfNjkgPSBpMS7JtW5vdihfdiwgNDMpLnBsYWNlaG9sZGVyOyB2YXIgY3VyclZhbF83MCA9IGkxLsm1bm92KF92LCA0MykuZGlzYWJsZWQ7IHZhciBjdXJyVmFsXzcxID0gaTEuybVub3YoX3YsIDQzKS5yZXF1aXJlZDsgdmFyIGN1cnJWYWxfNzIgPSBpMS7JtW5vdihfdiwgNDMpLnJlYWRvbmx5OyB2YXIgY3VyclZhbF83MyA9IChpMS7JtW5vdihfdiwgNDMpLl9hcmlhRGVzY3JpYmVkYnkgfHwgbnVsbCk7IHZhciBjdXJyVmFsXzc0ID0gaTEuybVub3YoX3YsIDQzKS5lcnJvclN0YXRlOyB2YXIgY3VyclZhbF83NSA9IGkxLsm1bm92KF92LCA0MykucmVxdWlyZWQudG9TdHJpbmcoKTsgX2NrKF92LCAzNywgMSwgW2N1cnJWYWxfNjEsIGN1cnJWYWxfNjIsIGN1cnJWYWxfNjMsIGN1cnJWYWxfNjQsIGN1cnJWYWxfNjUsIGN1cnJWYWxfNjYsIGN1cnJWYWxfNjcsIGN1cnJWYWxfNjgsIGN1cnJWYWxfNjksIGN1cnJWYWxfNzAsIGN1cnJWYWxfNzEsIGN1cnJWYWxfNzIsIGN1cnJWYWxfNzMsIGN1cnJWYWxfNzQsIGN1cnJWYWxfNzVdKTsgdmFyIGN1cnJWYWxfODAgPSAoaTEuybVub3YoX3YsIDUxKS5kaXNhYmxlZCB8fCBudWxsKTsgX2NrKF92LCA1MCwgMCwgY3VyclZhbF84MCk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImF1dGgtZGlhbG9nXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9BdXRoRGlhbG9nQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDQ5MTUyLCBudWxsLCAwLCBpMTMuQXV0aERpYWxvZ0NvbXBvbmVudCwgW2kzLk1hdERpYWxvZ1JlZiwgaTQuRm9ybUJ1aWxkZXIsIGkzLk1BVF9ESUFMT0dfREFUQV0sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBBdXRoRGlhbG9nQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcImF1dGgtZGlhbG9nXCIsIGkxMy5BdXRoRGlhbG9nQ29tcG9uZW50LCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IEF1dGhEaWFsb2dDb21wb25lbnROZ0ZhY3RvcnkgYXMgQXV0aERpYWxvZ0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fbGF5b3V0LmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX3JvdXRlciwuX2xheW91dC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSxfYW5ndWxhcl9yb3V0ZXIsLl9sYXlvdXQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2xheW91dC5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi9sYXlvdXQuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX0xheW91dENvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX0xheW91dENvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX0xheW91dENvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0xheW91dENvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTGF5b3V0Q29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMSwgXCJyb3V0ZXItb3V0bGV0XCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDEsIDIxMjk5MiwgbnVsbCwgMCwgaTIuUm91dGVyT3V0bGV0LCBbaTIuQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBbOCwgbnVsbF0sIGkxLkNoYW5nZURldGVjdG9yUmVmXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTGF5b3V0Q29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYm9keVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19MYXlvdXRDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9MYXlvdXRDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMy5MYXlvdXRDb21wb25lbnQsIFtpMi5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgTGF5b3V0Q29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcImJvZHlcIiwgaTMuTGF5b3V0Q29tcG9uZW50LCBWaWV3X0xheW91dENvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgTGF5b3V0Q29tcG9uZW50TmdGYWN0b3J5IGFzIExheW91dENvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2FuZ3VsYXJfY29yZSwuX2FwcC5mcm9udC5tb2R1bGUsLl9jb21wb25lbnRzX2xheW91dF9sYXlvdXQuY29tcG9uZW50LC4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2dfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX3NuYWNrX2Jhcl90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfbWFpbl9wYWdlX21haW5fcGFnZS5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19ub19jb250ZW50X25vX2NvbnRlbnQuY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfYXV0aF9hdXRoX2RpYWxvZy5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19sYXlvdXRfbGF5b3V0LmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfY29tbW9uLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXIsX2FuZ3VsYXJfYW5pbWF0aW9uc19icm93c2VyLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXJfYW5pbWF0aW9ucyxfYW5ndWxhcl9hbmltYXRpb25zLF9hbmd1bGFyX2Zvcm1zLF9hbmd1bGFyX2NvbW1vbl9odHRwLF9hbmd1bGFyX2Nka19iaWRpLF9hbmd1bGFyX2Nka19wbGF0Zm9ybSxfYW5ndWxhcl9jZGtfc2Nyb2xsaW5nLF9hbmd1bGFyX2Nka19vdmVybGF5LF9hbmd1bGFyX2Nka19hMTF5LF9hbmd1bGFyX21hdGVyaWFsX2RpYWxvZyxfYW5ndWxhcl9tYXRlcmlhbF9zb3J0LF9hbmd1bGFyX2Nka19sYXlvdXQsX2FuZ3VsYXJfbWF0ZXJpYWxfc25hY2tfYmFyLF9hbmd1bGFyX21hdGVyaWFsX2NvcmUsX2FuZ3VsYXJfcm91dGVyLC5fc2VydmljZXNfbWVzc2FnZV9tZXNzYWdlLnNlcnZpY2UsLl9zZXJ2aWNlc191c2VyX3VzZXIuc2VydmljZSwuX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSwuX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLF9hbmd1bGFyX2Nka19wb3J0YWwsX2FuZ3VsYXJfY2RrX3RhYmxlLF9hbmd1bGFyX21hdGVyaWFsX3RhYmxlLF9hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGQsX2FuZ3VsYXJfbWF0ZXJpYWxfaW5wdXQsX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uLC5fY29tcG9uZW50c19tYWluX3BhZ2VfbWFpbl9wYWdlLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfbm9fY29udGVudF9ub19jb250ZW50LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9hbmd1bGFyX2NvcmUsLl9hcHAuZnJvbnQubW9kdWxlLC5fY29tcG9uZW50c19sYXlvdXRfbGF5b3V0LmNvbXBvbmVudCwuLl8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LC4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9zbmFja19iYXJfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX21haW5fcGFnZV9tYWluX3BhZ2UuY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfbm9fY29udGVudF9ub19jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX2F1dGhfYXV0aF9kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfbGF5b3V0X2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5LF9hbmd1bGFyX2NvbW1vbixfYW5ndWxhcl9wbGF0Zm9ybV9icm93c2VyLF9hbmd1bGFyX2FuaW1hdGlvbnNfYnJvd3NlcixfYW5ndWxhcl9wbGF0Zm9ybV9icm93c2VyX2FuaW1hdGlvbnMsX2FuZ3VsYXJfYW5pbWF0aW9ucyxfYW5ndWxhcl9mb3JtcyxfYW5ndWxhcl9jb21tb25faHR0cCxfYW5ndWxhcl9jZGtfYmlkaSxfYW5ndWxhcl9jZGtfcGxhdGZvcm0sX2FuZ3VsYXJfY2RrX3Njcm9sbGluZyxfYW5ndWxhcl9jZGtfb3ZlcmxheSxfYW5ndWxhcl9jZGtfYTExeSxfYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2csX2FuZ3VsYXJfbWF0ZXJpYWxfc29ydCxfYW5ndWxhcl9jZGtfbGF5b3V0LF9hbmd1bGFyX21hdGVyaWFsX3NuYWNrX2JhcixfYW5ndWxhcl9tYXRlcmlhbF9jb3JlLF9hbmd1bGFyX3JvdXRlciwuX3NlcnZpY2VzX21lc3NhZ2VfbWVzc2FnZS5zZXJ2aWNlLC5fc2VydmljZXNfdXNlcl91c2VyLnNlcnZpY2UsLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSxfYW5ndWxhcl9jZGtfcG9ydGFsLF9hbmd1bGFyX2Nka190YWJsZSxfYW5ndWxhcl9tYXRlcmlhbF90YWJsZSxfYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkLF9hbmd1bGFyX21hdGVyaWFsX2lucHV0LF9hbmd1bGFyX21hdGVyaWFsX2J1dHRvbiwuX2NvbXBvbmVudHNfbWFpbl9wYWdlX21haW5fcGFnZS5jb21wb25lbnQsLl9jb21wb25lbnRzX25vX2NvbnRlbnRfbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuL2FwcC5mcm9udC5tb2R1bGVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nL3R5cGluZ3MvaW5kZXgubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhci90eXBpbmdzL2luZGV4Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCIuL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpOCBmcm9tIFwiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTkgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTEwIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgKiBhcyBpMTEgZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3NlclwiO1xuaW1wb3J0ICogYXMgaTEyIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCAqIGFzIGkxMyBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0ICogYXMgaTE0IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0ICogYXMgaTE1IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0ICogYXMgaTE2IGZyb20gXCJAYW5ndWxhci9jZGsvYmlkaVwiO1xuaW1wb3J0ICogYXMgaTE3IGZyb20gXCJAYW5ndWxhci9jZGsvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGkxOCBmcm9tIFwiQGFuZ3VsYXIvY2RrL3Njcm9sbGluZ1wiO1xuaW1wb3J0ICogYXMgaTE5IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0ICogYXMgaTIwIGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xuaW1wb3J0ICogYXMgaTIxIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCAqIGFzIGkyMiBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0ICogYXMgaTIzIGZyb20gXCJAYW5ndWxhci9jZGsvbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBpMjQgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0ICogYXMgaTI1IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMjYgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTI3IGZyb20gXCIuL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpMjggZnJvbSBcIi4vc2VydmljZXMvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGkyOSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGkzMCBmcm9tIFwiLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTMxIGZyb20gXCJAYW5ndWxhci9jZGsvcG9ydGFsXCI7XG5pbXBvcnQgKiBhcyBpMzIgZnJvbSBcIkBhbmd1bGFyL2Nkay90YWJsZVwiO1xuaW1wb3J0ICogYXMgaTMzIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xuaW1wb3J0ICogYXMgaTM0IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBpMzUgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2lucHV0XCI7XG5pbXBvcnQgKiBhcyBpMzYgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0ICogYXMgaTM3IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzOCBmcm9tIFwiLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnRcIjtcbnZhciBBcHBNb2R1bGVOZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkwLsm1Y21mKGkxLkFwcE1vZHVsZSwgW2kyLkxheW91dENvbXBvbmVudF0sIGZ1bmN0aW9uIChfbCkgeyByZXR1cm4gaTAuybVtb2QoW2kwLsm1bXBkKDUxMiwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMC7JtUNvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFtbOCwgW2kzLk1hdERpYWxvZ0NvbnRhaW5lck5nRmFjdG9yeSwgaTQuTWF0U25hY2tCYXJDb250YWluZXJOZ0ZhY3RvcnksIGk0LlNpbXBsZVNuYWNrQmFyTmdGYWN0b3J5LCBpNS5NYWluUGFnZUNvbXBvbmVudE5nRmFjdG9yeSwgaTYuTm9Db250ZW50Q29tcG9uZW50TmdGYWN0b3J5LCBpNy5BdXRoRGlhbG9nQ29tcG9uZW50TmdGYWN0b3J5LCBpOC5MYXlvdXRDb21wb25lbnROZ0ZhY3RvcnldXSwgWzMsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcl0sIGkwLk5nTW9kdWxlUmVmXSksIGkwLsm1bXBkKDUxMjAsIGkwLkxPQ0FMRV9JRCwgaTAuybVtLCBbWzMsIGkwLkxPQ0FMRV9JRF1dKSwgaTAuybVtcGQoNDYwOCwgaTkuTmdMb2NhbGl6YXRpb24sIGk5Lk5nTG9jYWxlTG9jYWxpemF0aW9uLCBbaTAuTE9DQUxFX0lELCBbMiwgaTkuybVhXV0pLCBpMC7JtW1wZCg1MTIwLCBpMC5JdGVyYWJsZURpZmZlcnMsIGkwLsm1aywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMC5LZXlWYWx1ZURpZmZlcnMsIGkwLsm1bCwgW10pLCBpMC7JtW1wZCg0NjA4LCBpMTAuRG9tU2FuaXRpemVyLCBpMTAuybVlLCBbaTkuRE9DVU1FTlRdKSwgaTAuybVtcGQoNjE0NCwgaTAuU2FuaXRpemVyLCBudWxsLCBbaTEwLkRvbVNhbml0aXplcl0pLCBpMC7JtW1wZCg0NjA4LCBpMTAuSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBpMTAuSGFtbWVyR2VzdHVyZUNvbmZpZywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMTAuRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCBmdW5jdGlvbiAocDBfMCwgcDBfMSwgcDFfMCwgcDJfMCwgcDJfMSkgeyByZXR1cm4gW25ldyBpMTAuybVEb21FdmVudHNQbHVnaW4ocDBfMCwgcDBfMSksIG5ldyBpMTAuybVLZXlFdmVudHNQbHVnaW4ocDFfMCksIG5ldyBpMTAuybVIYW1tZXJHZXN0dXJlc1BsdWdpbihwMl8wLCBwMl8xKV07IH0sIFtpOS5ET0NVTUVOVCwgaTAuTmdab25lLCBpOS5ET0NVTUVOVCwgaTkuRE9DVU1FTlQsIGkxMC5IQU1NRVJfR0VTVFVSRV9DT05GSUddKSwgaTAuybVtcGQoNDYwOCwgaTEwLkV2ZW50TWFuYWdlciwgaTEwLkV2ZW50TWFuYWdlciwgW2kxMC5FVkVOVF9NQU5BR0VSX1BMVUdJTlMsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCgxMzU2ODAsIGkxMC7JtURvbVNoYXJlZFN0eWxlc0hvc3QsIGkxMC7JtURvbVNoYXJlZFN0eWxlc0hvc3QsIFtpOS5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMTAuybVEb21SZW5kZXJlckZhY3RvcnkyLCBpMTAuybVEb21SZW5kZXJlckZhY3RvcnkyLCBbaTEwLkV2ZW50TWFuYWdlciwgaTEwLsm1RG9tU2hhcmVkU3R5bGVzSG9zdF0pLCBpMC7JtW1wZCg1MTIwLCBpMTEuQW5pbWF0aW9uRHJpdmVyLCBpMTIuybVjLCBbXSksIGkwLsm1bXBkKDUxMjAsIGkxMS7JtUFuaW1hdGlvblN0eWxlTm9ybWFsaXplciwgaTEyLsm1ZCwgW10pLCBpMC7JtW1wZCg0NjA4LCBpMTEuybVBbmltYXRpb25FbmdpbmUsIGkxMi7JtWIsIFtpMTEuQW5pbWF0aW9uRHJpdmVyLCBpMTEuybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXJdKSwgaTAuybVtcGQoNTEyMCwgaTAuUmVuZGVyZXJGYWN0b3J5MiwgaTEyLsm1ZSwgW2kxMC7JtURvbVJlbmRlcmVyRmFjdG9yeTIsIGkxMS7JtUFuaW1hdGlvbkVuZ2luZSwgaTAuTmdab25lXSksIGkwLsm1bXBkKDYxNDQsIGkxMC7JtVNoYXJlZFN0eWxlc0hvc3QsIG51bGwsIFtpMTAuybVEb21TaGFyZWRTdHlsZXNIb3N0XSksIGkwLsm1bXBkKDQ2MDgsIGkwLlRlc3RhYmlsaXR5LCBpMC5UZXN0YWJpbGl0eSwgW2kwLk5nWm9uZV0pLCBpMC7JtW1wZCg0NjA4LCBpMTAuTWV0YSwgaTEwLk1ldGEsIFtpOS5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMTAuVGl0bGUsIGkxMC5UaXRsZSwgW2k5LkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkxMy5BbmltYXRpb25CdWlsZGVyLCBpMTIuybVCcm93c2VyQW5pbWF0aW9uQnVpbGRlciwgW2kwLlJlbmRlcmVyRmFjdG9yeTIsIGkxMC5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMTQuybVpLCBpMTQuybVpLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkxNC5Gb3JtQnVpbGRlciwgaTE0LkZvcm1CdWlsZGVyLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkxNS5IdHRwWHNyZlRva2VuRXh0cmFjdG9yLCBpMTUuybVnLCBbaTkuRE9DVU1FTlQsIGkwLlBMQVRGT1JNX0lELCBpMTUuybVlXSksIGkwLsm1bXBkKDQ2MDgsIGkxNS7JtWgsIGkxNS7JtWgsIFtpMTUuSHR0cFhzcmZUb2tlbkV4dHJhY3RvciwgaTE1Lsm1Zl0pLCBpMC7JtW1wZCg1MTIwLCBpMTUuSFRUUF9JTlRFUkNFUFRPUlMsIGZ1bmN0aW9uIChwMF8wKSB7IHJldHVybiBbcDBfMF07IH0sIFtpMTUuybVoXSksIGkwLsm1bXBkKDQ2MDgsIGkxNS7JtWQsIGkxNS7JtWQsIFtdKSwgaTAuybVtcGQoNjE0NCwgaTE1LlhockZhY3RvcnksIG51bGwsIFtpMTUuybVkXSksIGkwLsm1bXBkKDQ2MDgsIGkxNS5IdHRwWGhyQmFja2VuZCwgaTE1Lkh0dHBYaHJCYWNrZW5kLCBbaTE1LlhockZhY3RvcnldKSwgaTAuybVtcGQoNjE0NCwgaTE1Lkh0dHBCYWNrZW5kLCBudWxsLCBbaTE1Lkh0dHBYaHJCYWNrZW5kXSksIGkwLsm1bXBkKDUxMjAsIGkxNS5IdHRwSGFuZGxlciwgaTE1Lsm1aW50ZXJjZXB0aW5nSGFuZGxlciwgW2kxNS5IdHRwQmFja2VuZCwgWzIsIGkxNS5IVFRQX0lOVEVSQ0VQVE9SU11dKSwgaTAuybVtcGQoNDYwOCwgaTE1Lkh0dHBDbGllbnQsIGkxNS5IdHRwQ2xpZW50LCBbaTE1Lkh0dHBIYW5kbGVyXSksIGkwLsm1bXBkKDYxNDQsIGkxNi5ESVJfRE9DVU1FTlQsIG51bGwsIFtpOS5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMTYuRGlyZWN0aW9uYWxpdHksIGkxNi5EaXJlY3Rpb25hbGl0eSwgW1syLCBpMTYuRElSX0RPQ1VNRU5UXV0pLCBpMC7JtW1wZCg0NjA4LCBpMTcuUGxhdGZvcm0sIGkxNy5QbGF0Zm9ybSwgW10pLCBpMC7JtW1wZCg1MTIwLCBpMTguU2Nyb2xsRGlzcGF0Y2hlciwgaTE4LlNDUk9MTF9ESVNQQVRDSEVSX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTE4LlNjcm9sbERpc3BhdGNoZXJdLCBpMC5OZ1pvbmUsIGkxNy5QbGF0Zm9ybV0pLCBpMC7JtW1wZCg1MTIwLCBpMTguVmlld3BvcnRSdWxlciwgaTE4LlZJRVdQT1JUX1JVTEVSX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTE4LlZpZXdwb3J0UnVsZXJdLCBpMTcuUGxhdGZvcm0sIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCg0NjA4LCBpMTkuU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLCBpMTkuU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLCBbaTE4LlNjcm9sbERpc3BhdGNoZXIsIGkxOC5WaWV3cG9ydFJ1bGVyLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNTEyMCwgaTE5Lk92ZXJsYXlDb250YWluZXIsIGkxOS7JtWEsIFtbMywgaTE5Lk92ZXJsYXlDb250YWluZXJdLCBpOS5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMTkuybVoLCBpMTkuybVoLCBbaTE4LlZpZXdwb3J0UnVsZXIsIGk5LkRPQ1VNRU5UXSksIGkwLsm1bXBkKDUxMjAsIGkxOS5PdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBpMTkuybVmLCBbWzMsIGkxOS5PdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyXSwgaTkuRE9DVU1FTlRdKSwgaTAuybVtcGQoNDYwOCwgaTE5Lk92ZXJsYXksIGkxOS5PdmVybGF5LCBbaTE5LlNjcm9sbFN0cmF0ZWd5T3B0aW9ucywgaTE5Lk92ZXJsYXlDb250YWluZXIsIGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaTE5Lsm1aCwgaTE5Lk92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsIGkwLkFwcGxpY2F0aW9uUmVmLCBpMC5JbmplY3RvciwgaTAuTmdab25lLCBpOS5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMTkuybVjLCBpMTkuybVkLCBbaTE5Lk92ZXJsYXldKSwgaTAuybVtcGQoNDYwOCwgaTIwLkludGVyYWN0aXZpdHlDaGVja2VyLCBpMjAuSW50ZXJhY3Rpdml0eUNoZWNrZXIsIFtpMTcuUGxhdGZvcm1dKSwgaTAuybVtcGQoNDYwOCwgaTIwLkZvY3VzVHJhcEZhY3RvcnksIGkyMC5Gb2N1c1RyYXBGYWN0b3J5LCBbaTIwLkludGVyYWN0aXZpdHlDaGVja2VyLCBpMC5OZ1pvbmUsIGk5LkRPQ1VNRU5UXSksIGkwLsm1bXBkKDEzNjE5MiwgaTIwLkFyaWFEZXNjcmliZXIsIGkyMC5BUklBX0RFU0NSSUJFUl9QUk9WSURFUl9GQUNUT1JZLCBbWzMsIGkyMC5BcmlhRGVzY3JpYmVyXSwgaTkuRE9DVU1FTlRdKSwgaTAuybVtcGQoNTEyMCwgaTIwLkxpdmVBbm5vdW5jZXIsIGkyMC5MSVZFX0FOTk9VTkNFUl9QUk9WSURFUl9GQUNUT1JZLCBbWzMsIGkyMC5MaXZlQW5ub3VuY2VyXSwgWzIsIGkyMC5MSVZFX0FOTk9VTkNFUl9FTEVNRU5UX1RPS0VOXSwgaTkuRE9DVU1FTlRdKSwgaTAuybVtcGQoNTEyMCwgaTIwLkZvY3VzTW9uaXRvciwgaTIwLkZPQ1VTX01PTklUT1JfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMjAuRm9jdXNNb25pdG9yXSwgaTAuTmdab25lLCBpMTcuUGxhdGZvcm1dKSwgaTAuybVtcGQoNTEyMCwgaTIxLk1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZLCBpMjEuTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVJfRkFDVE9SWSwgW2kxOS5PdmVybGF5XSksIGkwLsm1bXBkKDQ2MDgsIGkyMS5NYXREaWFsb2csIGkyMS5NYXREaWFsb2csIFtpMTkuT3ZlcmxheSwgaTAuSW5qZWN0b3IsIFsyLCBpOS5Mb2NhdGlvbl0sIGkyMS5NQVRfRElBTE9HX1NDUk9MTF9TVFJBVEVHWSwgWzMsIGkyMS5NYXREaWFsb2ddXSksIGkwLsm1bXBkKDUxMjAsIGkyMi5NYXRTb3J0SGVhZGVySW50bCwgaTIyLk1BVF9TT1JUX0hFQURFUl9JTlRMX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTIyLk1hdFNvcnRIZWFkZXJJbnRsXV0pLCBpMC7JtW1wZCg0NjA4LCBpMjMuTWVkaWFNYXRjaGVyLCBpMjMuTWVkaWFNYXRjaGVyLCBbaTE3LlBsYXRmb3JtXSksIGkwLsm1bXBkKDEzNTY4MCwgaTIzLkJyZWFrcG9pbnRPYnNlcnZlciwgaTIzLkJyZWFrcG9pbnRPYnNlcnZlciwgW2kyMy5NZWRpYU1hdGNoZXIsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCg0NjA4LCBpMjQuTWF0U25hY2tCYXIsIGkyNC5NYXRTbmFja0JhciwgW2kxOS5PdmVybGF5LCBpMjAuTGl2ZUFubm91bmNlciwgaTAuSW5qZWN0b3IsIGkyMy5CcmVha3BvaW50T2JzZXJ2ZXIsIFszLCBpMjQuTWF0U25hY2tCYXJdXSksIGkwLsm1bXBkKDQ2MDgsIGkyNS5FcnJvclN0YXRlTWF0Y2hlciwgaTI1LkVycm9yU3RhdGVNYXRjaGVyLCBbXSksIGkwLsm1bXBkKDUxMjAsIGkyNi5BY3RpdmF0ZWRSb3V0ZSwgaTI2Lsm1ZiwgW2kyNi5Sb3V0ZXJdKSwgaTAuybVtcGQoNDYwOCwgaTI2LlByZWxvYWRBbGxNb2R1bGVzLCBpMjYuUHJlbG9hZEFsbE1vZHVsZXMsIFtdKSwgaTAuybVtcGQoNjE0NCwgaTI2LlByZWxvYWRpbmdTdHJhdGVneSwgbnVsbCwgW2kyNi5QcmVsb2FkQWxsTW9kdWxlc10pLCBpMC7JtW1wZCgxMzU2ODAsIGkyNi5Sb3V0ZXJQcmVsb2FkZXIsIGkyNi5Sb3V0ZXJQcmVsb2FkZXIsIFtpMjYuUm91dGVyLCBpMC5OZ01vZHVsZUZhY3RvcnlMb2FkZXIsIGkwLkNvbXBpbGVyLCBpMC5JbmplY3RvciwgaTI2LlByZWxvYWRpbmdTdHJhdGVneV0pLCBpMC7JtW1wZCg0NjA4LCBpMjYuTm9QcmVsb2FkaW5nLCBpMjYuTm9QcmVsb2FkaW5nLCBbXSksIGkwLsm1bXBkKDUxMjAsIGkyNi5ST1VURVJfSU5JVElBTElaRVIsIGkyNi7JtWksIFtpMjYuybVnXSksIGkwLsm1bXBkKDUxMjAsIGkwLkFQUF9CT09UU1RSQVBfTElTVEVORVIsIGZ1bmN0aW9uIChwMF8wKSB7IHJldHVybiBbcDBfMF07IH0sIFtpMjYuUk9VVEVSX0lOSVRJQUxJWkVSXSksIGkwLsm1bXBkKDQ2MDgsIGkyNy5NZXNzYWdlU2VydmljZSwgaTI3Lk1lc3NhZ2VTZXJ2aWNlLCBbaTI0Lk1hdFNuYWNrQmFyXSksIGkwLsm1bXBkKDQ2MDgsIGkyOC5Vc2VyU2VydmljZSwgaTI4LlVzZXJTZXJ2aWNlLCBbaTE1Lkh0dHBDbGllbnQsIGkyMS5NYXREaWFsb2csIGkyNy5NZXNzYWdlU2VydmljZSwgaTI0Lk1hdFNuYWNrQmFyXSksIGkwLsm1bXBkKDQ2MDgsIGkyOS5BUElTZXJ2aWNlLCBpMjkuQVBJU2VydmljZSwgW2kxNS5IdHRwQ2xpZW50LCBpMjYuUm91dGVyLCBpMjguVXNlclNlcnZpY2UsIGkyNy5NZXNzYWdlU2VydmljZV0pLCBpMC7JtW1wZCg0NjA4LCBpMzAuWW91VHViZVNlcnZpY2UsIGkzMC5Zb3VUdWJlU2VydmljZSwgW2kxNS5IdHRwQ2xpZW50LCBpMjcuTWVzc2FnZVNlcnZpY2VdKSwgaTAuybVtcGQoNTEyLCBpOS5Db21tb25Nb2R1bGUsIGk5LkNvbW1vbk1vZHVsZSwgW10pLCBpMC7JtW1wZCgxMDI0LCBpMC5FcnJvckhhbmRsZXIsIGkxMC7JtWEsIFtdKSwgaTAuybVtcGQoMTAyNCwgaTAuTmdQcm9iZVRva2VuLCBmdW5jdGlvbiAoKSB7IHJldHVybiBbaTI2Lsm1YigpXTsgfSwgW10pLCBpMC7JtW1wZCgyNTYsIGkwLkFQUF9JRCwgXCJudWxsLXZudWxsXCIsIFtdKSwgaTAuybVtcGQoMjA0OCwgaTEwLsm1VFJBTlNJVElPTl9JRCwgbnVsbCwgW2kwLkFQUF9JRF0pLCBpMC7JtW1wZCg1MTIsIGkyNi7JtWcsIGkyNi7JtWcsIFtpMC5JbmplY3Rvcl0pLCBpMC7JtW1wZCgxMDI0LCBpMC5BUFBfSU5JVElBTElaRVIsIGZ1bmN0aW9uIChwMF8wLCBwMV8wLCBwMV8xLCBwMV8yLCBwMl8wKSB7IHJldHVybiBbaTEwLsm1aChwMF8wKSwgaTEwLsm1ZihwMV8wLCBwMV8xLCBwMV8yKSwgaTI2Lsm1aChwMl8wKV07IH0sIFtbMiwgaTAuTmdQcm9iZVRva2VuXSwgaTEwLsm1VFJBTlNJVElPTl9JRCwgaTkuRE9DVU1FTlQsIGkwLkluamVjdG9yLCBpMjYuybVnXSksIGkwLsm1bXBkKDUxMiwgaTAuQXBwbGljYXRpb25Jbml0U3RhdHVzLCBpMC5BcHBsaWNhdGlvbkluaXRTdGF0dXMsIFtbMiwgaTAuQVBQX0lOSVRJQUxJWkVSXV0pLCBpMC7JtW1wZCgxMzE1ODQsIGkwLkFwcGxpY2F0aW9uUmVmLCBpMC5BcHBsaWNhdGlvblJlZiwgW2kwLk5nWm9uZSwgaTAuybVDb25zb2xlLCBpMC5JbmplY3RvciwgaTAuRXJyb3JIYW5kbGVyLCBpMC5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGkwLkFwcGxpY2F0aW9uSW5pdFN0YXR1c10pLCBpMC7JtW1wZCg1MTIsIGkwLkFwcGxpY2F0aW9uTW9kdWxlLCBpMC5BcHBsaWNhdGlvbk1vZHVsZSwgW2kwLkFwcGxpY2F0aW9uUmVmXSksIGkwLsm1bXBkKDUxMiwgaTEwLkJyb3dzZXJNb2R1bGUsIGkxMC5Ccm93c2VyTW9kdWxlLCBbWzMsIGkxMC5Ccm93c2VyTW9kdWxlXV0pLCBpMC7JtW1wZCg1MTIsIGkxMi5Ccm93c2VyQW5pbWF0aW9uc01vZHVsZSwgaTEyLkJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTE0Lsm1YmEsIGkxNC7JtWJhLCBbXSksIGkwLsm1bXBkKDUxMiwgaTE0LkZvcm1zTW9kdWxlLCBpMTQuRm9ybXNNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMTQuUmVhY3RpdmVGb3Jtc01vZHVsZSwgaTE0LlJlYWN0aXZlRm9ybXNNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMTUuSHR0cENsaWVudFhzcmZNb2R1bGUsIGkxNS5IdHRwQ2xpZW50WHNyZk1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkxNS5IdHRwQ2xpZW50TW9kdWxlLCBpMTUuSHR0cENsaWVudE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkxNi5CaWRpTW9kdWxlLCBpMTYuQmlkaU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzMS5Qb3J0YWxNb2R1bGUsIGkzMS5Qb3J0YWxNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMTcuUGxhdGZvcm1Nb2R1bGUsIGkxNy5QbGF0Zm9ybU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkxOC5TY3JvbGxEaXNwYXRjaE1vZHVsZSwgaTE4LlNjcm9sbERpc3BhdGNoTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTE5Lk92ZXJsYXlNb2R1bGUsIGkxOS5PdmVybGF5TW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTIwLkExMXlNb2R1bGUsIGkyMC5BMTF5TW9kdWxlLCBbXSksIGkwLsm1bXBkKDI1NiwgaTI1Lk1BVEVSSUFMX1NBTklUWV9DSEVDS1MsIHRydWUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjUuTWF0Q29tbW9uTW9kdWxlLCBpMjUuTWF0Q29tbW9uTW9kdWxlLCBbWzIsIGkyNS5NQVRFUklBTF9TQU5JVFlfQ0hFQ0tTXV0pLCBpMC7JtW1wZCg1MTIsIGkyMS5NYXREaWFsb2dNb2R1bGUsIGkyMS5NYXREaWFsb2dNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjIuTWF0U29ydE1vZHVsZSwgaTIyLk1hdFNvcnRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzIuQ2RrVGFibGVNb2R1bGUsIGkzMi5DZGtUYWJsZU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzMy5NYXRUYWJsZU1vZHVsZSwgaTMzLk1hdFRhYmxlTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTIzLkxheW91dE1vZHVsZSwgaTIzLkxheW91dE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyNC5NYXRTbmFja0Jhck1vZHVsZSwgaTI0Lk1hdFNuYWNrQmFyTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM0Lk1hdEZvcm1GaWVsZE1vZHVsZSwgaTM0Lk1hdEZvcm1GaWVsZE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzNS5NYXRJbnB1dE1vZHVsZSwgaTM1Lk1hdElucHV0TW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI1Lk1hdFJpcHBsZU1vZHVsZSwgaTI1Lk1hdFJpcHBsZU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzNi5NYXRCdXR0b25Nb2R1bGUsIGkzNi5NYXRCdXR0b25Nb2R1bGUsIFtdKSwgaTAuybVtcGQoMTAyNCwgaTI2Lsm1YSwgaTI2Lsm1ZCwgW1szLCBpMjYuUm91dGVyXV0pLCBpMC7JtW1wZCg1MTIsIGkyNi5VcmxTZXJpYWxpemVyLCBpMjYuRGVmYXVsdFVybFNlcmlhbGl6ZXIsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjYuQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgaTI2LkNoaWxkcmVuT3V0bGV0Q29udGV4dHMsIFtdKSwgaTAuybVtcGQoMjU2LCBpMjYuUk9VVEVSX0NPTkZJR1VSQVRJT04sIHsgdXNlSGFzaDogZmFsc2UsIHByZWxvYWRpbmdTdHJhdGVneTogaTI2LlByZWxvYWRBbGxNb2R1bGVzIH0sIFtdKSwgaTAuybVtcGQoMTAyNCwgaTkuTG9jYXRpb25TdHJhdGVneSwgaTI2Lsm1YywgW2k5LlBsYXRmb3JtTG9jYXRpb24sIFsyLCBpOS5BUFBfQkFTRV9IUkVGXSwgaTI2LlJPVVRFUl9DT05GSUdVUkFUSU9OXSksIGkwLsm1bXBkKDUxMiwgaTkuTG9jYXRpb24sIGk5LkxvY2F0aW9uLCBbaTkuTG9jYXRpb25TdHJhdGVneV0pLCBpMC7JtW1wZCg1MTIsIGkwLkNvbXBpbGVyLCBpMC5Db21waWxlciwgW10pLCBpMC7JtW1wZCg1MTIsIGkwLk5nTW9kdWxlRmFjdG9yeUxvYWRlciwgaTAuU3lzdGVtSnNOZ01vZHVsZUxvYWRlciwgW2kwLkNvbXBpbGVyLCBbMiwgaTAuU3lzdGVtSnNOZ01vZHVsZUxvYWRlckNvbmZpZ11dKSwgaTAuybVtcGQoMTAyNCwgaTI2LlJPVVRFUywgZnVuY3Rpb24gKCkgeyByZXR1cm4gW1t7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogaTM3Lk1haW5QYWdlQ29tcG9uZW50IH0sIHsgcGF0aDogXCIqKlwiLCBjb21wb25lbnQ6IGkzOC5Ob0NvbnRlbnRDb21wb25lbnQgfV1dOyB9LCBbXSksIGkwLsm1bXBkKDEwMjQsIGkyNi5Sb3V0ZXIsIGkyNi7JtWUsIFtpMC5BcHBsaWNhdGlvblJlZiwgaTI2LlVybFNlcmlhbGl6ZXIsIGkyNi5DaGlsZHJlbk91dGxldENvbnRleHRzLCBpOS5Mb2NhdGlvbiwgaTAuSW5qZWN0b3IsIGkwLk5nTW9kdWxlRmFjdG9yeUxvYWRlciwgaTAuQ29tcGlsZXIsIGkyNi5ST1VURVMsIGkyNi5ST1VURVJfQ09ORklHVVJBVElPTiwgWzIsIGkyNi5VcmxIYW5kbGluZ1N0cmF0ZWd5XSwgWzIsIGkyNi5Sb3V0ZVJldXNlU3RyYXRlZ3ldXSksIGkwLsm1bXBkKDUxMiwgaTI2LlJvdXRlck1vZHVsZSwgaTI2LlJvdXRlck1vZHVsZSwgW1syLCBpMjYuybVhXSwgWzIsIGkyNi5Sb3V0ZXJdXSksIGkwLsm1bXBkKDUxMiwgaTEuQXBwTW9kdWxlLCBpMS5BcHBNb2R1bGUsIFtdKSwgaTAuybVtcGQoMjU2LCBpMTUuybVlLCBcIlhTUkYtVE9LRU5cIiwgW10pLCBpMC7JtW1wZCgyNTYsIGkxNS7JtWYsIFwiWC1YU1JGLVRPS0VOXCIsIFtdKV0pOyB9KTtcbmV4cG9ydCB7IEFwcE1vZHVsZU5nRmFjdG9yeSBhcyBBcHBNb2R1bGVOZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwLmZyb250Lm1vZHVsZS5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyLCBlbmFibGVEZWJ1Z1Rvb2xzLCBkaXNhYmxlRGVidWdUb29scyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQXBwTW9kdWxlTmdGYWN0b3J5IH0gZnJvbSAnLi9hcHAuZnJvbnQubW9kdWxlLm5nZmFjdG9yeSc7XG5jb25zb2xlLmxvZyhgJHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gdiR7cHJvY2Vzcy5lbnYuQVBQX1ZFUlNJT059YCk7XG5sZXQgZGVjb3JhdGVNb2R1bGVSZWYgPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3QgybUwID0gZGVjb3JhdGVNb2R1bGVSZWY7XG5pZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBkZWNvcmF0ZU1vZHVsZVJlZiA9IChtb2RSZWYpID0+IHtcbiAgICAgICAgY29uc3QgYXBwUmVmID0gbW9kUmVmLmluamVjdG9yLmdldChBcHBsaWNhdGlvblJlZik7XG4gICAgICAgIGNvbnN0IGNtcFJlZiA9IGFwcFJlZi5jb21wb25lbnRzWzBdO1xuICAgICAgICBsZXQgbmcgPSB3aW5kb3cubmc7XG4gICAgICAgIGVuYWJsZURlYnVnVG9vbHMoY21wUmVmKTtcbiAgICAgICAgd2luZG93Lm5nLnByb2JlID0gbmcucHJvYmU7XG4gICAgICAgIHdpbmRvdy5uZy5jb3JlVG9rZW5zID0gbmcuY29yZVRva2VucztcbiAgICAgICAgcmV0dXJuIG1vZFJlZjtcbiAgICB9O1xufVxuZWxzZSB7XG4gICAgZW5hYmxlUHJvZE1vZGUoKTtcbiAgICBkZWNvcmF0ZU1vZHVsZVJlZiA9IChtb2RSZWYpID0+IHtcbiAgICAgICAgZGlzYWJsZURlYnVnVG9vbHMoKTtcbiAgICAgICAgcmV0dXJuIG1vZFJlZjtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICByZXR1cm4gcGxhdGZvcm1Ccm93c2VyKClcbiAgICAgICAgLmJvb3RzdHJhcE1vZHVsZUZhY3RvcnkoQXBwTW9kdWxlTmdGYWN0b3J5KVxuICAgICAgICAudGhlbihkZWNvcmF0ZU1vZHVsZVJlZilcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG59XG5jb25zdCBkb21SZWFkeUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRvbVJlYWR5SGFuZGxlcik7XG4gICAgbWFpbigpO1xufTtcbmNvbnN0IMm1MSA9IGRvbVJlYWR5SGFuZGxlcjtcbnN3aXRjaCAoZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZG9tUmVhZHlIYW5kbGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaW50ZXJhY3RpdmUnOlxuICAgIGNhc2UgJ2NvbXBsZXRlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgICBtYWluKCk7XG59XG5leHBvcnQgeyDJtTAsIMm1MSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluLmZyb250LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIl0sInNvdXJjZVJvb3QiOiIifQ==