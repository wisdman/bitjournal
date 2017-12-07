webpackJsonp(["main"],{

/***/ 72:
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
webpackEmptyAsyncContext.id = 72;

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
var esm5_forms = __webpack_require__(14);

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


class FooterComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./components/footer/index.ts


// CONCATENATED MODULE: ./components/header/header.component.ts


class HeaderComponent {
    constructor(_router) {
        this._router = _router;
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
        this.items = this._publicationService
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
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
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


// CONCATENATED MODULE: ./components/index.ts











// CONCATENATED MODULE: ./app.components.ts

const COMPONENTS = [
    ArticleComponent,
    auth_dialog_component_AuthDialogComponent,
    CurrenciesRsibbonComponent,
    FooterComponent,
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

// CONCATENATED MODULE: ./components/video-ribbon/video-ribbon.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var video_ribbon_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/video-ribbon/video-ribbon.component.ngfactory.js
/** PURE_IMPORTS_START ._video_ribbon.component.css.ngstyle,_angular_core,_angular_common,._video_ribbon.component,_angular_router,.._.._services_api_api.service,.._.._services_youtube_youtube.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._video_ribbon.component.css.ngstyle,_angular_core,_angular_common,._video_ribbon.component,_angular_router,.._.._services_api_api.service,.._.._services_youtube_youtube.service PURE_IMPORTS_END */







var styles_VideoRibbonComponent = [video_ribbon_component_css_ngstyle_styles];
var RenderType_VideoRibbonComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_VideoRibbonComponent, data: {} });

function View_VideoRibbonComponent_1(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 10, "a", [["class", "bj-video-ribbon__item"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 5, "figure", [["class", "bj-video-ribbon__figure"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "img", [["class", "bj-video-ribbon__thumb"]], [[8, "src", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "figcaption", [["class", "bj-video-ribbon__caption bj-video-ribbon__caption--left"]], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](4, null, ["", ""])), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "figcaption", [["class", "bj-video-ribbon__caption bj-video-ribbon__caption--right"]], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](6, null, ["", ""])), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 1, "time", [["class", "bj-video-ribbon__datetime"]], [[1, "datetime", 0]], null, null, null, null)), (_l()(), core["_21" /* ɵted */](8, null, ["", ""])), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 1, "h3", [["class", "bj-video-ribbon__title"]], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](10, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.href; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.thumb; _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.duration; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.like; _ck(_v, 6, 0, currVal_3); var currVal_4 = _v.context.$implicit.date; _ck(_v, 7, 0, currVal_4); var currVal_5 = _v.context.$implicit.date; _ck(_v, 8, 0, currVal_5); var currVal_6 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_6); }); }
function View_VideoRibbonComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 3, "div", [["class", "bj-video-ribbon__wrapper"]], null, null, null, null, null)), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_VideoRibbonComponent_1)), core["_2" /* ɵdid */](2, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_16" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_22" /* ɵunv */](_v, 2, 0, core["_15" /* ɵnov */](_v, 3).transform(_co.items)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_VideoRibbonComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VideoRibbonComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("video-ribbon", video_ribbon_component_VideoRibbonComponent, View_VideoRibbonComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/main/page-main.component.ngfactory.js
/** PURE_IMPORTS_START ._page_main.component.css.ngstyle,_angular_core,.._.._.._pipes_image_image.pipe,_angular_common,.._.._video_ribbon_video_ribbon.component.ngfactory,.._.._video_ribbon_video_ribbon.component,_angular_router,.._.._.._services_api_api.service,.._.._.._services_youtube_youtube.service,._page_main.component,.._.._.._services_publication_publication.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_main.component.css.ngstyle,_angular_core,.._.._.._pipes_image_image.pipe,_angular_common,.._.._video_ribbon_video_ribbon.component.ngfactory,.._.._video_ribbon_video_ribbon.component,_angular_router,.._.._.._services_api_api.service,.._.._.._services_youtube_youtube.service,._page_main.component,.._.._.._services_publication_publication.service PURE_IMPORTS_END */











var styles_PageMainComponent = [styles];
var RenderType_PageMainComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMainComponent, data: {} });

function View_PageMainComponent_1(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 3, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), core["_17" /* ɵppd */](2, 1), (_l()(), core["_21" /* ɵted */](3, null, [" ", "\n"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_22" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_15" /* ɵnov */](_v.parent, 0), _v.context.$implicit.image)); _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_2); }); }
function View_PageMainComponent_0(_l) { return core["_23" /* ɵvid */](0, [core["_16" /* ɵpid */](0, image_pipe_ImagePipe, []), (_l()(), core["Y" /* ɵand */](16777216, null, null, 2, null, View_PageMainComponent_1)), core["_2" /* ɵdid */](2, 802816, null, 0, common["i" /* NgForOf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */], core["r" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["_16" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["h" /* ChangeDetectorRef */]]), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["Video"])), (_l()(), core["_3" /* ɵeld */](9, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](10, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_22" /* ɵunv */](_v, 2, 0, core["_15" /* ɵnov */](_v, 3).transform(_co.items)); _ck(_v, 2, 0, currVal_0); _ck(_v, 10, 0); }, null); }
function View_PageMainComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-main", [], null, null, null, View_PageMainComponent_0, RenderType_PageMainComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMainComponent, [router["k" /* Router */], PublicationService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMainComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-main", PageMainComponent, View_PageMainComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/101/page-101.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_101_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/pages/101/page-101.component.ngfactory.js
/** PURE_IMPORTS_START ._page_101.component.css.ngstyle,_angular_core,.._.._video_ribbon_video_ribbon.component.ngfactory,.._.._video_ribbon_video_ribbon.component,_angular_router,.._.._.._services_api_api.service,.._.._.._services_youtube_youtube.service,._page_101.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_101.component.css.ngstyle,_angular_core,.._.._video_ribbon_video_ribbon.component.ngfactory,.._.._video_ribbon_video_ribbon.component,_angular_router,.._.._.._services_api_api.service,.._.._.._services_youtube_youtube.service,._page_101.component PURE_IMPORTS_END */








var styles_Page101Component = [page_101_component_css_ngstyle_styles];
var RenderType_Page101Component = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_Page101Component, data: {} });

function View_Page101Component_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["Video"])), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](6, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
function View_Page101Component_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-101", [], null, null, null, View_Page101Component_0, RenderType_Page101Component)), core["_2" /* ɵdid */](1, 114688, null, 0, Page101Component, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Page101ComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-101", Page101Component, View_Page101Component_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_currencies_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies.component.ngfactory.js
/** PURE_IMPORTS_START ._page_currencies.component.css.ngstyle,_angular_core,._page_currencies.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_currencies.component.css.ngstyle,_angular_core,._page_currencies.component,_angular_router PURE_IMPORTS_END */




var styles_PageCurrenciesComponent = [page_currencies_component_css_ngstyle_styles];
var RenderType_PageCurrenciesComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageCurrenciesComponent, data: {} });

function View_PageCurrenciesComponent_0(_l) { return core["_23" /* ɵvid */](0, [], null, null); }
function View_PageCurrenciesComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-currencies", [], null, null, null, View_PageCurrenciesComponent_0, RenderType_PageCurrenciesComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageCurrenciesComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
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
/** PURE_IMPORTS_START ._article.component.css.ngstyle,_angular_core,._article.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._article.component.css.ngstyle,_angular_core,._article.component,_angular_router PURE_IMPORTS_END */




var styles_ArticleComponent = [article_component_css_ngstyle_styles];
var RenderType_ArticleComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_ArticleComponent, data: {} });

function View_ArticleComponent_0(_l) { return core["_23" /* ɵvid */](0, [], null, null); }
function View_ArticleComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ArticleComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("article", ArticleComponent, View_ArticleComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/currencies/page-currencies-item.component.ngfactory.js
/** PURE_IMPORTS_START ._page_currencies_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_currencies_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_currencies_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_currencies_item.component PURE_IMPORTS_END */






var styles_PageCurrenciesItemComponent = [page_currencies_item_component_css_ngstyle_styles];
var RenderType_PageCurrenciesItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageCurrenciesItemComponent, data: {} });

function View_PageCurrenciesItemComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageCurrenciesItemComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-currencies-item", [], null, null, null, View_PageCurrenciesItemComponent_0, RenderType_PageCurrenciesItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageCurrenciesItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageCurrenciesItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-currencies-item", PageCurrenciesItemComponent, View_PageCurrenciesItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/events/page-events.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_events_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/events/page-events.component.ngfactory.js
/** PURE_IMPORTS_START ._page_events.component.css.ngstyle,_angular_core,._page_events.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_events.component.css.ngstyle,_angular_core,._page_events.component,_angular_router PURE_IMPORTS_END */




var styles_PageEventsComponent = [page_events_component_css_ngstyle_styles];
var RenderType_PageEventsComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageEventsComponent, data: {} });

function View_PageEventsComponent_0(_l) { return core["_23" /* ɵvid */](0, [], null, null); }
function View_PageEventsComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-events", [], null, null, null, View_PageEventsComponent_0, RenderType_PageEventsComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageEventsComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageEventsComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-events", PageEventsComponent, View_PageEventsComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/events/page-events-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_events_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/events/page-events-item.component.ngfactory.js
/** PURE_IMPORTS_START ._page_events_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_events_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_events_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_events_item.component PURE_IMPORTS_END */






var styles_PageEventsItemComponent = [page_events_item_component_css_ngstyle_styles];
var RenderType_PageEventsItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageEventsItemComponent, data: {} });

function View_PageEventsItemComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageEventsItemComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-events-item", [], null, null, null, View_PageEventsItemComponent_0, RenderType_PageEventsItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageEventsItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageEventsItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-events-item", PageEventsItemComponent, View_PageEventsItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_exchanges_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges.component.ngfactory.js
/** PURE_IMPORTS_START ._page_exchanges.component.css.ngstyle,_angular_core,._page_exchanges.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_exchanges.component.css.ngstyle,_angular_core,._page_exchanges.component,_angular_router PURE_IMPORTS_END */




var styles_PageExchangesComponent = [page_exchanges_component_css_ngstyle_styles];
var RenderType_PageExchangesComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageExchangesComponent, data: {} });

function View_PageExchangesComponent_0(_l) { return core["_23" /* ɵvid */](0, [], null, null); }
function View_PageExchangesComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-exchanges", [], null, null, null, View_PageExchangesComponent_0, RenderType_PageExchangesComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageExchangesComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageExchangesComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-exchanges", PageExchangesComponent, View_PageExchangesComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_exchanges_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/exchanges/page-exchanges-item.component.ngfactory.js
/** PURE_IMPORTS_START ._page_exchanges_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_exchanges_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_exchanges_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_exchanges_item.component PURE_IMPORTS_END */






var styles_PageExchangesItemComponent = [page_exchanges_item_component_css_ngstyle_styles];
var RenderType_PageExchangesItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageExchangesItemComponent, data: {} });

function View_PageExchangesItemComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageExchangesItemComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-exchanges-item", [], null, null, null, View_PageExchangesItemComponent_0, RenderType_PageExchangesItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageExchangesItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageExchangesItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-exchanges-item", PageExchangesItemComponent, View_PageExchangesItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/ico/page-ico.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_ico_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/ico/page-ico.component.ngfactory.js
/** PURE_IMPORTS_START ._page_ico.component.css.ngstyle,_angular_core,._page_ico.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_ico.component.css.ngstyle,_angular_core,._page_ico.component,_angular_router PURE_IMPORTS_END */




var styles_PageICOComponent = [page_ico_component_css_ngstyle_styles];
var RenderType_PageICOComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageICOComponent, data: {} });

function View_PageICOComponent_0(_l) { return core["_23" /* ɵvid */](0, [], null, null); }
function View_PageICOComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-ico", [], null, null, null, View_PageICOComponent_0, RenderType_PageICOComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageICOComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageICOComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-ico", PageICOComponent, View_PageICOComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/ico/page-ico-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_ico_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/ico/page-ico-item.component.ngfactory.js
/** PURE_IMPORTS_START ._page_ico_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_ico_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_ico_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_ico_item.component PURE_IMPORTS_END */






var styles_PageICOItemComponent = [page_ico_item_component_css_ngstyle_styles];
var RenderType_PageICOItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageICOItemComponent, data: {} });

function View_PageICOItemComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageICOItemComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-ico-item", [], null, null, null, View_PageICOItemComponent_0, RenderType_PageICOItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageICOItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageICOItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-ico-item", PageICOItemComponent, View_PageICOItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/markets/page-markets.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_markets_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/markets/page-markets.component.ngfactory.js
/** PURE_IMPORTS_START ._page_markets.component.css.ngstyle,_angular_core,._page_markets.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_markets.component.css.ngstyle,_angular_core,._page_markets.component,_angular_router PURE_IMPORTS_END */




var styles_PageMarketsComponent = [page_markets_component_css_ngstyle_styles];
var RenderType_PageMarketsComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMarketsComponent, data: {} });

function View_PageMarketsComponent_0(_l) { return core["_23" /* ɵvid */](0, [], null, null); }
function View_PageMarketsComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-markets", [], null, null, null, View_PageMarketsComponent_0, RenderType_PageMarketsComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMarketsComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMarketsComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-markets", PageMarketsComponent, View_PageMarketsComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/markets/page-markets-item.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_markets_item_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/pages/markets/page-markets-item.component.ngfactory.js
/** PURE_IMPORTS_START ._page_markets_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_markets_item.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_markets_item.component.css.ngstyle,_angular_core,.._.._article_article.component.ngfactory,.._.._article_article.component,_angular_router,._page_markets_item.component PURE_IMPORTS_END */






var styles_PageMarketsItemComponent = [page_markets_item_component_css_ngstyle_styles];
var RenderType_PageMarketsItemComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageMarketsItemComponent, data: {} });

function View_PageMarketsItemComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, ArticleComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "aside", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_PageMarketsItemComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-markets-item", [], null, null, null, View_PageMarketsItemComponent_0, RenderType_PageMarketsItemComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageMarketsItemComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageMarketsItemComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-markets-item", PageMarketsItemComponent, View_PageMarketsItemComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/section/page-section.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_section_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/pages/section/page-section.component.ngfactory.js
/** PURE_IMPORTS_START ._page_section.component.css.ngstyle,_angular_core,.._.._video_ribbon_video_ribbon.component.ngfactory,.._.._video_ribbon_video_ribbon.component,_angular_router,.._.._.._services_api_api.service,.._.._.._services_youtube_youtube.service,._page_section.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_section.component.css.ngstyle,_angular_core,.._.._video_ribbon_video_ribbon.component.ngfactory,.._.._video_ribbon_video_ribbon.component,_angular_router,.._.._.._services_api_api.service,.._.._.._services_youtube_youtube.service,._page_section.component PURE_IMPORTS_END */








var styles_PageSectionComponent = [page_section_component_css_ngstyle_styles];
var RenderType_PageSectionComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageSectionComponent, data: {} });

function View_PageSectionComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["Video"])), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](6, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
function View_PageSectionComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-section", [], null, null, null, View_PageSectionComponent_0, RenderType_PageSectionComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageSectionComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageSectionComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-section", PageSectionComponent, View_PageSectionComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/pages/article/page-article.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var page_article_component_css_ngstyle_styles = [".no-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}"];


// CONCATENATED MODULE: ./components/pages/article/page-article.component.ngfactory.js
/** PURE_IMPORTS_START ._page_article.component.css.ngstyle,_angular_core,.._.._video_ribbon_video_ribbon.component.ngfactory,.._.._video_ribbon_video_ribbon.component,_angular_router,.._.._.._services_api_api.service,.._.._.._services_youtube_youtube.service,._page_article.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._page_article.component.css.ngstyle,_angular_core,.._.._video_ribbon_video_ribbon.component.ngfactory,.._.._video_ribbon_video_ribbon.component,_angular_router,.._.._.._services_api_api.service,.._.._.._services_youtube_youtube.service,._page_article.component PURE_IMPORTS_END */








var styles_PageArticleComponent = [page_article_component_css_ngstyle_styles];
var RenderType_PageArticleComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_PageArticleComponent, data: {} });

function View_PageArticleComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 2, "aside", [["class", "bj-aside"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["Video"])), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 1, "video-ribbon", [], null, null, null, View_VideoRibbonComponent_0, RenderType_VideoRibbonComponent)), core["_2" /* ɵdid */](6, 114688, null, 0, video_ribbon_component_VideoRibbonComponent, [router["k" /* Router */], api_service_APIService, youtube_service_YouTubeService], null, null)], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
function View_PageArticleComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "page-article", [], null, null, null, View_PageArticleComponent_0, RenderType_PageArticleComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, PageArticleComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PageArticleComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("page-article", PageArticleComponent, View_PageArticleComponent_Host_0, {}, {}, []);


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
var platform_es5 = __webpack_require__(11);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/button/typings/index.ngfactory.js
var button_typings_index_ngfactory = __webpack_require__(147);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/button.es5.js
var button_es5 = __webpack_require__(32);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/a11y.es5.js
var a11y_es5 = __webpack_require__(8);

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
        }, null, null)), core["_2" /* ɵdid */](18, 16384, null, 0, esm5_forms["d" /* DefaultValueAccessor */], [core["C" /* Renderer2 */], core["k" /* ElementRef */], [2, esm5_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["_18" /* ɵprd */](1024, null, esm5_forms["j" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm5_forms["d" /* DefaultValueAccessor */]]), core["_2" /* ɵdid */](20, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["c" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["j" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_18" /* ɵprd */](2048, null, esm5_forms["k" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_2" /* ɵdid */](22, 16384, null, 0, esm5_forms["l" /* NgControlStatus */], [esm5_forms["k" /* NgControl */]], null, null), core["_2" /* ɵdid */](23, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [2, esm5_forms["k" /* NgControl */]], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["c" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["_18" /* ɵprd */](2048, [[1, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["Y" /* ɵand */](16777216, null, 4, 1, null, View_AuthDialogComponent_1)), core["_2" /* ɵdid */](26, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Y" /* ɵand */](16777216, null, 4, 1, null, View_AuthDialogComponent_2)), core["_2" /* ɵdid */](28, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](29, 0, null, null, 17, "mat-form-field", [["class", "auth-form-row mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, form_field_typings_index_ngfactory["b" /* View_MatFormField_0 */], form_field_typings_index_ngfactory["a" /* RenderType_MatFormField */])), core["_2" /* ɵdid */](30, 7389184, null, 6, form_field_es5["b" /* MatFormField */], [core["k" /* ElementRef */], core["h" /* ChangeDetectorRef */], [2, core_es5["e" /* MAT_PLACEHOLDER_GLOBAL_OPTIONS */]]], null, null), core["_19" /* ɵqud */](335544320, 7, { _control: 0 }), core["_19" /* ɵqud */](335544320, 8, { _placeholderChild: 0 }), core["_19" /* ɵqud */](603979776, 9, { _errorChildren: 1 }), core["_19" /* ɵqud */](603979776, 10, { _hintChildren: 1 }), core["_19" /* ɵqud */](603979776, 11, { _prefixChildren: 1 }), core["_19" /* ɵqud */](603979776, 12, { _suffixChildren: 1 }), (_l()(), core["_3" /* ɵeld */](37, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "password"], ["matInput", ""], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
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
        }, null, null)), core["_2" /* ɵdid */](38, 16384, null, 0, esm5_forms["d" /* DefaultValueAccessor */], [core["C" /* Renderer2 */], core["k" /* ElementRef */], [2, esm5_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["_18" /* ɵprd */](1024, null, esm5_forms["j" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [esm5_forms["d" /* DefaultValueAccessor */]]), core["_2" /* ɵdid */](40, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["c" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["j" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_18" /* ɵprd */](2048, null, esm5_forms["k" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_2" /* ɵdid */](42, 16384, null, 0, esm5_forms["l" /* NgControlStatus */], [esm5_forms["k" /* NgControl */]], null, null), core["_2" /* ɵdid */](43, 933888, null, 0, input_es5["a" /* MatInput */], [core["k" /* ElementRef */], platform_es5["a" /* Platform */], [2, esm5_forms["k" /* NgControl */]], [2, esm5_forms["n" /* NgForm */]], [2, esm5_forms["g" /* FormGroupDirective */]], core_es5["c" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), core["_18" /* ɵprd */](2048, [[7, 4]], form_field_es5["c" /* MatFormFieldControl */], null, [input_es5["a" /* MatInput */]]), (_l()(), core["Y" /* ɵand */](16777216, null, 4, 1, null, View_AuthDialogComponent_3)), core["_2" /* ɵdid */](46, 16384, null, 0, common["j" /* NgIf */], [core["N" /* ViewContainerRef */], core["K" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_3" /* ɵeld */](47, 0, null, null, 0, "input", [["hidden", ""], ["type", "submit"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](48, 0, null, null, 5, "mat-dialog-actions", [["class", "mat-dialog-actions"]], null, null, null, null, null)), core["_2" /* ɵdid */](49, 16384, null, 0, dialog_es5["e" /* MatDialogActions */], [], null, null), (_l()(), core["_3" /* ɵeld */](50, 0, null, null, 3, "button", [["class", "auth-form-button mat-button"], ["color", "primary"], ["mat-button", ""], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
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


// CONCATENATED MODULE: ./components/header/header.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var header_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/currencies-ribbon/currencies-ribbon.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var currencies_ribbon_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/currencies-ribbon/currencies-ribbon.component.ngfactory.js
/** PURE_IMPORTS_START ._currencies_ribbon.component.css.ngstyle,_angular_core,._currencies_ribbon.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._currencies_ribbon.component.css.ngstyle,_angular_core,._currencies_ribbon.component,_angular_router PURE_IMPORTS_END */




var styles_CurrenciesRsibbonComponent = [currencies_ribbon_component_css_ngstyle_styles];
var RenderType_CurrenciesRsibbonComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_CurrenciesRsibbonComponent, data: {} });

function View_CurrenciesRsibbonComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 5, "a", [["class", "bj-currencies-ribbon__item"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "img", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "h5", [["class", "bj-currencies-ribbon__item"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 2, "div", [["class", "bj-currencies-ribbon__rate"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 0, "span", [], null, null, null, null, null))], null, null); }
function View_CurrenciesRsibbonComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "currencies-ribbon", [], null, null, null, View_CurrenciesRsibbonComponent_0, RenderType_CurrenciesRsibbonComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, CurrenciesRsibbonComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CurrenciesRsibbonComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("currencies-ribbon", CurrenciesRsibbonComponent, View_CurrenciesRsibbonComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/header/header.component.ngfactory.js
/** PURE_IMPORTS_START ._header.component.css.ngstyle,_angular_core,_angular_router,_angular_common,.._currencies_ribbon_currencies_ribbon.component.ngfactory,.._currencies_ribbon_currencies_ribbon.component,._header.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._header.component.css.ngstyle,_angular_core,_angular_router,_angular_common,.._currencies_ribbon_currencies_ribbon.component.ngfactory,.._currencies_ribbon_currencies_ribbon.component,._header.component PURE_IMPORTS_END */







var styles_HeaderComponent = [header_component_css_ngstyle_styles];
var RenderType_HeaderComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_0(_l) {
    return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 29, "div", [["class", "bj-header-row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 1, "button", [["class", "bj-header-button"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 0, null, null, 21, "nav", [["class", ""]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](4, 0, null, null, 2, "a", [["class", ""], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](5, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_21" /* ɵted */](-1, null, ["\u041B\u0435\u043D\u0442\u0430"])), (_l()(), core["_3" /* ɵeld */](7, 0, null, null, 2, "a", [["class", ""], ["routerLink", "/events"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](8, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_21" /* ɵted */](-1, null, ["\u0418\u0432\u0435\u043D\u0442\u044B"])), (_l()(), core["_3" /* ɵeld */](10, 0, null, null, 2, "a", [["class", ""], ["routerLink", "/ico"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](11, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_21" /* ɵted */](-1, null, ["ICO"])), (_l()(), core["_3" /* ɵeld */](13, 0, null, null, 2, "a", [["class", ""], ["routerLink", "/101"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](14, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_21" /* ɵted */](-1, null, ["\u041D\u043E\u0432\u0438\u0447\u043A\u0430\u043C"])), (_l()(), core["_3" /* ɵeld */](16, 0, null, null, 2, "a", [["class", ""], ["routerLink", "/currencies"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](17, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_21" /* ɵted */](-1, null, ["\u0412\u0430\u043B\u044E\u0442\u044B"])), (_l()(), core["_3" /* ɵeld */](19, 0, null, null, 2, "a", [["class", ""], ["routerLink", "/exchanges"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](20, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_21" /* ɵted */](-1, null, ["\u041E\u0431\u043C\u0435\u043D\u043D\u0438\u043A\u0438"])), (_l()(), core["_3" /* ɵeld */](22, 0, null, null, 2, "a", [["class", ""], ["routerLink", "/markets"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_15" /* ɵnov */](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_2" /* ɵdid */](23, 671744, null, 0, router["l" /* RouterLinkWithHref */], [router["k" /* Router */], router["a" /* ActivatedRoute */], common["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), core["_21" /* ɵted */](-1, null, ["\u0411\u0438\u0440\u0436\u0438"])), (_l()(), core["_3" /* ɵeld */](25, 0, null, null, 1, "button", [["class", "bj-header-button"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](26, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](27, 0, null, null, 2, "button", [["class", "bj-header-button"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](28, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["\u0412\u043E\u0439\u0442\u0438"])), (_l()(), core["_3" /* ɵeld */](30, 0, null, null, 5, "div", [["class", "bj-header-row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](31, 0, null, null, 1, "currencies-ribbon", [], null, null, null, View_CurrenciesRsibbonComponent_0, RenderType_CurrenciesRsibbonComponent)), core["_2" /* ɵdid */](32, 114688, null, 0, CurrenciesRsibbonComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](33, 0, null, null, 2, "button", [["class", "bj-header-button"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](34, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_21" /* ɵted */](-1, null, ["\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043B\u044E\u0442"])), (_l()(), core["_3" /* ɵeld */](36, 0, null, null, 1, "a", [["class", "bj-header-logo"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](37, 0, null, null, 0, "img", [["alt", "BitJournal"], ["class", "bj-logo"], ["src", "/svg/logo.svg"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 5, 0, currVal_2); var currVal_5 = "/events"; _ck(_v, 8, 0, currVal_5); var currVal_8 = "/ico"; _ck(_v, 11, 0, currVal_8); var currVal_11 = "/101"; _ck(_v, 14, 0, currVal_11); var currVal_14 = "/currencies"; _ck(_v, 17, 0, currVal_14); var currVal_17 = "/exchanges"; _ck(_v, 20, 0, currVal_17); var currVal_20 = "/markets"; _ck(_v, 23, 0, currVal_20); _ck(_v, 32, 0); }, function (_ck, _v) { var currVal_0 = core["_15" /* ɵnov */](_v, 5).target; var currVal_1 = core["_15" /* ɵnov */](_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = core["_15" /* ɵnov */](_v, 8).target; var currVal_4 = core["_15" /* ɵnov */](_v, 8).href; _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_6 = core["_15" /* ɵnov */](_v, 11).target; var currVal_7 = core["_15" /* ɵnov */](_v, 11).href; _ck(_v, 10, 0, currVal_6, currVal_7); var currVal_9 = core["_15" /* ɵnov */](_v, 14).target; var currVal_10 = core["_15" /* ɵnov */](_v, 14).href; _ck(_v, 13, 0, currVal_9, currVal_10); var currVal_12 = core["_15" /* ɵnov */](_v, 17).target; var currVal_13 = core["_15" /* ɵnov */](_v, 17).href; _ck(_v, 16, 0, currVal_12, currVal_13); var currVal_15 = core["_15" /* ɵnov */](_v, 20).target; var currVal_16 = core["_15" /* ɵnov */](_v, 20).href; _ck(_v, 19, 0, currVal_15, currVal_16); var currVal_18 = core["_15" /* ɵnov */](_v, 23).target; var currVal_19 = core["_15" /* ɵnov */](_v, 23).href; _ck(_v, 22, 0, currVal_18, currVal_19); });
}
function View_HeaderComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("header", HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/footer/footer.component.css.ngstyle.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var footer_component_css_ngstyle_styles = [""];


// CONCATENATED MODULE: ./components/footer/footer.component.ngfactory.js
/** PURE_IMPORTS_START ._footer.component.css.ngstyle,_angular_core,._footer.component,_angular_router PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._footer.component.css.ngstyle,_angular_core,._footer.component,_angular_router PURE_IMPORTS_END */




var styles_FooterComponent = [footer_component_css_ngstyle_styles];
var RenderType_FooterComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 0, "div", [["class", "bj-footer-row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](1, 0, null, null, 0, "div", [["class", "bj-footer-row"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 0, "div", [["class", "bj-footer-row"]], null, null, null, null, null))], null, null); }
function View_FooterComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, FooterComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("footer", FooterComponent, View_FooterComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./components/layout/layout.component.ngfactory.js
/** PURE_IMPORTS_START ._layout.component.css.ngstyle,_angular_core,.._header_header.component.ngfactory,.._header_header.component,_angular_router,.._footer_footer.component.ngfactory,.._footer_footer.component,._layout.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START ._layout.component.css.ngstyle,_angular_core,.._header_header.component.ngfactory,.._header_header.component,_angular_router,.._footer_footer.component.ngfactory,.._footer_footer.component,._layout.component PURE_IMPORTS_END */








var styles_LayoutComponent = [layout_component_css_ngstyle_styles];
var RenderType_LayoutComponent = /*@__PURE__*/ core["_1" /* ɵcrt */]({ encapsulation: 2, styles: styles_LayoutComponent, data: {} });

function View_LayoutComponent_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, HeaderComponent, [router["k" /* Router */]], null, null), (_l()(), core["_3" /* ɵeld */](2, 0, null, null, 5, "main", [["class", "bj-main"]], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core["_2" /* ɵdid */](4, 212992, null, 0, router["n" /* RouterOutlet */], [router["b" /* ChildrenOutletContexts */], core["N" /* ViewContainerRef */], core["j" /* ComponentFactoryResolver */], [8, null], core["h" /* ChangeDetectorRef */]], null, null), (_l()(), core["_3" /* ɵeld */](5, 0, null, null, 2, "main", [], null, null, null, null, null)), (_l()(), core["_3" /* ɵeld */](6, 0, null, null, 1, "footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), core["_2" /* ɵdid */](7, 114688, null, 0, FooterComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); _ck(_v, 7, 0); }, null); }
function View_LayoutComponent_Host_0(_l) { return core["_23" /* ɵvid */](0, [(_l()(), core["_3" /* ɵeld */](0, 0, null, null, 1, "body", [], null, null, null, View_LayoutComponent_0, RenderType_LayoutComponent)), core["_2" /* ɵdid */](1, 114688, null, 0, LayoutComponent, [router["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LayoutComponentNgFactory = /*@__PURE__*/ core["Z" /* ɵccf */]("body", LayoutComponent, View_LayoutComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/browser.js
var browser = __webpack_require__(90);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/platform-browser/esm5/animations.js
var animations = __webpack_require__(148);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/animations/esm5/animations.js
var esm5_animations = __webpack_require__(15);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/bidi.es5.js
var bidi_es5 = __webpack_require__(10);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/scrolling.es5.js
var scrolling_es5 = __webpack_require__(31);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/overlay.es5.js
var overlay_es5 = __webpack_require__(19);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/sort.es5.js
var sort_es5 = __webpack_require__(88);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/layout.es5.js
var layout_es5 = __webpack_require__(58);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/snack-bar.es5.js
var snack_bar_es5 = __webpack_require__(57);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/portal.es5.js
var portal_es5 = __webpack_require__(20);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/cdk/esm5/table.es5.js
var table_es5 = __webpack_require__(59);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/@angular/material/esm5/table.es5.js
var esm5_table_es5 = __webpack_require__(89);

// CONCATENATED MODULE: ./app.module.ngfactory.js
/** PURE_IMPORTS_START _angular_core,._app.module,._components_layout_layout.component,.._.._node_modules__angular_material_dialog_typings_index.ngfactory,.._.._node_modules__angular_material_snack_bar_typings_index.ngfactory,._components_pages_main_page_main.component.ngfactory,._components_pages_101_page_101.component.ngfactory,._components_pages_currencies_page_currencies.component.ngfactory,._components_pages_currencies_page_currencies_item.component.ngfactory,._components_pages_events_page_events.component.ngfactory,._components_pages_events_page_events_item.component.ngfactory,._components_pages_exchanges_page_exchanges.component.ngfactory,._components_pages_exchanges_page_exchanges_item.component.ngfactory,._components_pages_ico_page_ico.component.ngfactory,._components_pages_ico_page_ico_item.component.ngfactory,._components_pages_markets_page_markets.component.ngfactory,._components_pages_markets_page_markets_item.component.ngfactory,._components_pages_section_page_section.component.ngfactory,._components_pages_article_page_article.component.ngfactory,._components_no_content_no_content.component.ngfactory,._components_auth_auth_dialog.component.ngfactory,._components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,._services_message_message.service,._services_user_user.service,._services_api_api.service,._services_youtube_youtube.service,._services_publication_publication.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,._components_pages_main_page_main.component,._components_pages_101_page_101.component,._components_pages_currencies_page_currencies.component,._components_pages_currencies_page_currencies_item.component,._components_pages_events_page_events.component,._components_pages_events_page_events_item.component,._components_pages_exchanges_page_exchanges.component,._components_pages_exchanges_page_exchanges_item.component,._components_pages_ico_page_ico.component,._components_pages_ico_page_ico_item.component,._components_pages_markets_page_markets.component,._components_pages_markets_page_markets_item.component,._components_pages_section_page_section.component,._components_pages_article_page_article.component,._components_no_content_no_content.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,._app.module,._components_layout_layout.component,.._.._node_modules__angular_material_dialog_typings_index.ngfactory,.._.._node_modules__angular_material_snack_bar_typings_index.ngfactory,._components_pages_main_page_main.component.ngfactory,._components_pages_101_page_101.component.ngfactory,._components_pages_currencies_page_currencies.component.ngfactory,._components_pages_currencies_page_currencies_item.component.ngfactory,._components_pages_events_page_events.component.ngfactory,._components_pages_events_page_events_item.component.ngfactory,._components_pages_exchanges_page_exchanges.component.ngfactory,._components_pages_exchanges_page_exchanges_item.component.ngfactory,._components_pages_ico_page_ico.component.ngfactory,._components_pages_ico_page_ico_item.component.ngfactory,._components_pages_markets_page_markets.component.ngfactory,._components_pages_markets_page_markets_item.component.ngfactory,._components_pages_section_page_section.component.ngfactory,._components_pages_article_page_article.component.ngfactory,._components_no_content_no_content.component.ngfactory,._components_auth_auth_dialog.component.ngfactory,._components_layout_layout.component.ngfactory,_angular_common,_angular_platform_browser,_angular_animations_browser,_angular_platform_browser_animations,_angular_animations,_angular_forms,_angular_common_http,_angular_cdk_bidi,_angular_cdk_platform,_angular_cdk_scrolling,_angular_cdk_overlay,_angular_cdk_a11y,_angular_material_dialog,_angular_material_sort,_angular_cdk_layout,_angular_material_snack_bar,_angular_material_core,_angular_router,._services_message_message.service,._services_user_user.service,._services_api_api.service,._services_youtube_youtube.service,._services_publication_publication.service,_angular_cdk_portal,_angular_cdk_table,_angular_material_table,_angular_material_form_field,_angular_material_input,_angular_material_button,._components_pages_main_page_main.component,._components_pages_101_page_101.component,._components_pages_currencies_page_currencies.component,._components_pages_currencies_page_currencies_item.component,._components_pages_events_page_events.component,._components_pages_events_page_events_item.component,._components_pages_exchanges_page_exchanges.component,._components_pages_exchanges_page_exchanges_item.component,._components_pages_ico_page_ico.component,._components_pages_ico_page_ico_item.component,._components_pages_markets_page_markets.component,._components_pages_markets_page_markets_item.component,._components_pages_section_page_section.component,._components_pages_article_page_article.component,._components_no_content_no_content.component PURE_IMPORTS_END */


































































var AppModuleNgFactory = /*@__PURE__*/ core["_0" /* ɵcmf */](AppModule, [LayoutComponent], function (_l) { return core["_12" /* ɵmod */]([core["_13" /* ɵmpd */](512, core["j" /* ComponentFactoryResolver */], core["W" /* ɵCodegenComponentFactoryResolver */], [[8, [index_ngfactory["a" /* MatDialogContainerNgFactory */], typings_index_ngfactory["a" /* MatSnackBarContainerNgFactory */], typings_index_ngfactory["b" /* SimpleSnackBarNgFactory */], PageMainComponentNgFactory, Page101ComponentNgFactory, PageCurrenciesComponentNgFactory, PageCurrenciesItemComponentNgFactory, PageEventsComponentNgFactory, PageEventsItemComponentNgFactory, PageExchangesComponentNgFactory, PageExchangesItemComponentNgFactory, PageICOComponentNgFactory, PageICOItemComponentNgFactory, PageMarketsComponentNgFactory, PageMarketsItemComponentNgFactory, PageSectionComponentNgFactory, PageArticleComponentNgFactory, NoContentComponentNgFactory, AuthDialogComponentNgFactory, LayoutComponentNgFactory]], [3, core["j" /* ComponentFactoryResolver */]], core["w" /* NgModuleRef */]]), core["_13" /* ɵmpd */](5120, core["t" /* LOCALE_ID */], core["_11" /* ɵm */], [[3, core["t" /* LOCALE_ID */]]]), core["_13" /* ɵmpd */](4608, common["l" /* NgLocalization */], common["k" /* NgLocaleLocalization */], [core["t" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_13" /* ɵmpd */](5120, core["r" /* IterableDiffers */], core["_8" /* ɵk */], []), core["_13" /* ɵmpd */](5120, core["s" /* KeyValueDiffers */], core["_9" /* ɵl */], []), core["_13" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["t" /* ɵe */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](6144, core["F" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_13" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], platform_browser["g" /* HammerGestureConfig */], []), core["_13" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["l" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["p" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["o" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["d" /* DOCUMENT */], core["y" /* NgZone */], common["d" /* DOCUMENT */], common["d" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_13" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](135680, platform_browser["n" /* ɵDomSharedStylesHost */], platform_browser["n" /* ɵDomSharedStylesHost */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["m" /* ɵDomRendererFactory2 */], platform_browser["m" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["n" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](5120, browser["a" /* AnimationDriver */], animations["d" /* ɵc */], []), core["_13" /* ɵmpd */](5120, browser["c" /* ɵAnimationStyleNormalizer */], animations["e" /* ɵd */], []), core["_13" /* ɵmpd */](4608, browser["b" /* ɵAnimationEngine */], animations["c" /* ɵb */], [browser["a" /* AnimationDriver */], browser["c" /* ɵAnimationStyleNormalizer */]]), core["_13" /* ɵmpd */](5120, core["D" /* RendererFactory2 */], animations["f" /* ɵe */], [platform_browser["m" /* ɵDomRendererFactory2 */], browser["b" /* ɵAnimationEngine */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](6144, platform_browser["q" /* ɵSharedStylesHost */], null, [platform_browser["n" /* ɵDomSharedStylesHost */]]), core["_13" /* ɵmpd */](4608, core["L" /* Testability */], core["L" /* Testability */], [core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_animations["b" /* AnimationBuilder */], animations["b" /* ɵBrowserAnimationBuilder */], [core["D" /* RendererFactory2 */], platform_browser["b" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, esm5_forms["s" /* ɵi */], esm5_forms["s" /* ɵi */], []), core["_13" /* ɵmpd */](4608, esm5_forms["e" /* FormBuilder */], esm5_forms["e" /* FormBuilder */], []), core["_13" /* ɵmpd */](4608, http["k" /* HttpXsrfTokenExtractor */], http["p" /* ɵg */], [common["d" /* DOCUMENT */], core["A" /* PLATFORM_ID */], http["n" /* ɵe */]]), core["_13" /* ɵmpd */](4608, http["q" /* ɵh */], http["q" /* ɵh */], [http["k" /* HttpXsrfTokenExtractor */], http["o" /* ɵf */]]), core["_13" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["q" /* ɵh */]]), core["_13" /* ɵmpd */](4608, http["m" /* ɵd */], http["m" /* ɵd */], []), core["_13" /* ɵmpd */](6144, http["l" /* XhrFactory */], null, [http["m" /* ɵd */]]), core["_13" /* ɵmpd */](4608, http["j" /* HttpXhrBackend */], http["j" /* HttpXhrBackend */], [http["l" /* XhrFactory */]]), core["_13" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["j" /* HttpXhrBackend */]]), core["_13" /* ɵmpd */](5120, http["g" /* HttpHandler */], http["r" /* ɵinterceptingHandler */], [http["b" /* HttpBackend */], [2, http["a" /* HTTP_INTERCEPTORS */]]]), core["_13" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["g" /* HttpHandler */]]), core["_13" /* ɵmpd */](6144, bidi_es5["b" /* DIR_DOCUMENT */], null, [common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, bidi_es5["c" /* Directionality */], bidi_es5["c" /* Directionality */], [[2, bidi_es5["b" /* DIR_DOCUMENT */]]]), core["_13" /* ɵmpd */](4608, platform_es5["a" /* Platform */], platform_es5["a" /* Platform */], []), core["_13" /* ɵmpd */](5120, scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, scrolling_es5["c" /* ScrollDispatcher */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, scrolling_es5["f" /* ViewportRuler */], scrolling_es5["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, scrolling_es5["f" /* ViewportRuler */]], platform_es5["a" /* Platform */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["f" /* ScrollStrategyOptions */], [scrolling_es5["c" /* ScrollDispatcher */], scrolling_es5["f" /* ViewportRuler */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](5120, overlay_es5["c" /* OverlayContainer */], overlay_es5["g" /* ɵa */], [[3, overlay_es5["c" /* OverlayContainer */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["k" /* ɵh */], overlay_es5["k" /* ɵh */], [scrolling_es5["f" /* ViewportRuler */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["d" /* OverlayKeyboardDispatcher */], overlay_es5["j" /* ɵf */], [[3, overlay_es5["d" /* OverlayKeyboardDispatcher */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](4608, overlay_es5["a" /* Overlay */], overlay_es5["a" /* Overlay */], [overlay_es5["f" /* ScrollStrategyOptions */], overlay_es5["c" /* OverlayContainer */], core["j" /* ComponentFactoryResolver */], overlay_es5["k" /* ɵh */], overlay_es5["d" /* OverlayKeyboardDispatcher */], core["g" /* ApplicationRef */], core["q" /* Injector */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, overlay_es5["h" /* ɵc */], overlay_es5["i" /* ɵd */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, a11y_es5["i" /* InteractivityChecker */], a11y_es5["i" /* InteractivityChecker */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](4608, a11y_es5["h" /* FocusTrapFactory */], a11y_es5["h" /* FocusTrapFactory */], [a11y_es5["i" /* InteractivityChecker */], core["y" /* NgZone */], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](136192, a11y_es5["d" /* AriaDescriber */], a11y_es5["b" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, a11y_es5["d" /* AriaDescriber */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["l" /* LiveAnnouncer */], a11y_es5["k" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, a11y_es5["l" /* LiveAnnouncer */]], [2, a11y_es5["j" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], common["d" /* DOCUMENT */]]), core["_13" /* ɵmpd */](5120, a11y_es5["g" /* FocusMonitor */], a11y_es5["e" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, a11y_es5["g" /* FocusMonitor */]], core["y" /* NgZone */], platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](5120, dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], dialog_es5["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [overlay_es5["a" /* Overlay */]]), core["_13" /* ɵmpd */](4608, dialog_es5["d" /* MatDialog */], dialog_es5["d" /* MatDialog */], [overlay_es5["a" /* Overlay */], core["q" /* Injector */], [2, common["g" /* Location */]], dialog_es5["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, dialog_es5["d" /* MatDialog */]]]), core["_13" /* ɵmpd */](5120, sort_es5["b" /* MatSortHeaderIntl */], sort_es5["a" /* MAT_SORT_HEADER_INTL_PROVIDER_FACTORY */], [[3, sort_es5["b" /* MatSortHeaderIntl */]]]), core["_13" /* ɵmpd */](4608, layout_es5["d" /* MediaMatcher */], layout_es5["d" /* MediaMatcher */], [platform_es5["a" /* Platform */]]), core["_13" /* ɵmpd */](135680, layout_es5["a" /* BreakpointObserver */], layout_es5["a" /* BreakpointObserver */], [layout_es5["d" /* MediaMatcher */], core["y" /* NgZone */]]), core["_13" /* ɵmpd */](4608, snack_bar_es5["b" /* MatSnackBar */], snack_bar_es5["b" /* MatSnackBar */], [overlay_es5["a" /* Overlay */], a11y_es5["l" /* LiveAnnouncer */], core["q" /* Injector */], layout_es5["a" /* BreakpointObserver */], [3, snack_bar_es5["b" /* MatSnackBar */]]]), core["_13" /* ɵmpd */](4608, core_es5["c" /* ErrorStateMatcher */], core_es5["c" /* ErrorStateMatcher */], []), core["_13" /* ɵmpd */](5120, router["a" /* ActivatedRoute */], router["w" /* ɵf */], [router["k" /* Router */]]), core["_13" /* ɵmpd */](4608, router["e" /* PreloadAllModules */], router["e" /* PreloadAllModules */], []), core["_13" /* ɵmpd */](6144, router["f" /* PreloadingStrategy */], null, [router["e" /* PreloadAllModules */]]), core["_13" /* ɵmpd */](135680, router["o" /* RouterPreloader */], router["o" /* RouterPreloader */], [router["k" /* Router */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], core["q" /* Injector */], router["f" /* PreloadingStrategy */]]), core["_13" /* ɵmpd */](4608, router["d" /* NoPreloading */], router["d" /* NoPreloading */], []), core["_13" /* ɵmpd */](5120, router["h" /* ROUTER_INITIALIZER */], router["z" /* ɵi */], [router["x" /* ɵg */]]), core["_13" /* ɵmpd */](5120, core["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [router["h" /* ROUTER_INITIALIZER */]]), core["_13" /* ɵmpd */](4608, message_service_MessageService, message_service_MessageService, [core["A" /* PLATFORM_ID */], snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, user_service_UserService, user_service_UserService, [core["A" /* PLATFORM_ID */], http["c" /* HttpClient */], dialog_es5["d" /* MatDialog */], message_service_MessageService, snack_bar_es5["b" /* MatSnackBar */]]), core["_13" /* ɵmpd */](4608, api_service_APIService, api_service_APIService, [http["c" /* HttpClient */], router["k" /* Router */], user_service_UserService, message_service_MessageService]), core["_13" /* ɵmpd */](4608, youtube_service_YouTubeService, youtube_service_YouTubeService, [http["c" /* HttpClient */], message_service_MessageService]), core["_13" /* ɵmpd */](4608, PublicationService, PublicationService, [api_service_APIService]), core["_13" /* ɵmpd */](512, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["_13" /* ɵmpd */](1024, core["m" /* ErrorHandler */], platform_browser["s" /* ɵa */], []), core["_13" /* ɵmpd */](1024, core["x" /* NgProbeToken */], function () { return [router["s" /* ɵb */]()]; }, []), core["_13" /* ɵmpd */](256, core["c" /* APP_ID */], "null-vnull", []), core["_13" /* ɵmpd */](2048, platform_browser["r" /* ɵTRANSITION_ID */], null, [core["c" /* APP_ID */]]), core["_13" /* ɵmpd */](512, router["x" /* ɵg */], router["x" /* ɵg */], [core["q" /* Injector */]]), core["_13" /* ɵmpd */](1024, core["d" /* APP_INITIALIZER */], function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [platform_browser["w" /* ɵh */](p0_0), platform_browser["u" /* ɵf */](p1_0, p1_1, p1_2), router["y" /* ɵh */](p2_0)]; }, [[2, core["x" /* NgProbeToken */]], platform_browser["r" /* ɵTRANSITION_ID */], common["d" /* DOCUMENT */], core["q" /* Injector */], router["x" /* ɵg */]]), core["_13" /* ɵmpd */](512, core["e" /* ApplicationInitStatus */], core["e" /* ApplicationInitStatus */], [[2, core["d" /* APP_INITIALIZER */]]]), core["_13" /* ɵmpd */](131584, core["g" /* ApplicationRef */], core["g" /* ApplicationRef */], [core["y" /* NgZone */], core["X" /* ɵConsole */], core["q" /* Injector */], core["m" /* ErrorHandler */], core["j" /* ComponentFactoryResolver */], core["e" /* ApplicationInitStatus */]]), core["_13" /* ɵmpd */](512, core["f" /* ApplicationModule */], core["f" /* ApplicationModule */], [core["g" /* ApplicationRef */]]), core["_13" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_13" /* ɵmpd */](512, animations["a" /* BrowserAnimationsModule */], animations["a" /* BrowserAnimationsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["q" /* ɵba */], esm5_forms["q" /* ɵba */], []), core["_13" /* ɵmpd */](512, esm5_forms["h" /* FormsModule */], esm5_forms["h" /* FormsModule */], []), core["_13" /* ɵmpd */](512, esm5_forms["o" /* ReactiveFormsModule */], esm5_forms["o" /* ReactiveFormsModule */], []), core["_13" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_13" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_13" /* ɵmpd */](512, bidi_es5["a" /* BidiModule */], bidi_es5["a" /* BidiModule */], []), core["_13" /* ɵmpd */](512, portal_es5["g" /* PortalModule */], portal_es5["g" /* PortalModule */], []), core["_13" /* ɵmpd */](512, platform_es5["b" /* PlatformModule */], platform_es5["b" /* PlatformModule */], []), core["_13" /* ɵmpd */](512, scrolling_es5["b" /* ScrollDispatchModule */], scrolling_es5["b" /* ScrollDispatchModule */], []), core["_13" /* ɵmpd */](512, overlay_es5["e" /* OverlayModule */], overlay_es5["e" /* OverlayModule */], []), core["_13" /* ɵmpd */](512, a11y_es5["a" /* A11yModule */], a11y_es5["a" /* A11yModule */], []), core["_13" /* ɵmpd */](256, core_es5["d" /* MATERIAL_SANITY_CHECKS */], true, []), core["_13" /* ɵmpd */](512, core_es5["g" /* MatCommonModule */], core_es5["g" /* MatCommonModule */], [[2, core_es5["d" /* MATERIAL_SANITY_CHECKS */]]]), core["_13" /* ɵmpd */](512, dialog_es5["h" /* MatDialogModule */], dialog_es5["h" /* MatDialogModule */], []), core["_13" /* ɵmpd */](512, sort_es5["c" /* MatSortModule */], sort_es5["c" /* MatSortModule */], []), core["_13" /* ɵmpd */](512, table_es5["k" /* CdkTableModule */], table_es5["k" /* CdkTableModule */], []), core["_13" /* ɵmpd */](512, esm5_table_es5["a" /* MatTableModule */], esm5_table_es5["a" /* MatTableModule */], []), core["_13" /* ɵmpd */](512, layout_es5["c" /* LayoutModule */], layout_es5["c" /* LayoutModule */], []), core["_13" /* ɵmpd */](512, snack_bar_es5["d" /* MatSnackBarModule */], snack_bar_es5["d" /* MatSnackBarModule */], []), core["_13" /* ɵmpd */](512, form_field_es5["d" /* MatFormFieldModule */], form_field_es5["d" /* MatFormFieldModule */], []), core["_13" /* ɵmpd */](512, input_es5["b" /* MatInputModule */], input_es5["b" /* MatInputModule */], []), core["_13" /* ɵmpd */](512, core_es5["k" /* MatRippleModule */], core_es5["k" /* MatRippleModule */], []), core["_13" /* ɵmpd */](512, button_es5["d" /* MatButtonModule */], button_es5["d" /* MatButtonModule */], []), core["_13" /* ɵmpd */](1024, router["r" /* ɵa */], router["u" /* ɵd */], [[3, router["k" /* Router */]]]), core["_13" /* ɵmpd */](512, router["q" /* UrlSerializer */], router["c" /* DefaultUrlSerializer */], []), core["_13" /* ɵmpd */](512, router["b" /* ChildrenOutletContexts */], router["b" /* ChildrenOutletContexts */], []), core["_13" /* ɵmpd */](256, router["g" /* ROUTER_CONFIGURATION */], { useHash: false, preloadingStrategy: router["e" /* PreloadAllModules */] }, []), core["_13" /* ɵmpd */](1024, common["h" /* LocationStrategy */], router["t" /* ɵc */], [common["p" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], router["g" /* ROUTER_CONFIGURATION */]]), core["_13" /* ɵmpd */](512, common["g" /* Location */], common["g" /* Location */], [common["h" /* LocationStrategy */]]), core["_13" /* ɵmpd */](512, core["i" /* Compiler */], core["i" /* Compiler */], []), core["_13" /* ɵmpd */](512, core["v" /* NgModuleFactoryLoader */], core["I" /* SystemJsNgModuleLoader */], [core["i" /* Compiler */], [2, core["J" /* SystemJsNgModuleLoaderConfig */]]]), core["_13" /* ɵmpd */](1024, router["i" /* ROUTES */], function () { return [[{ path: "", component: PageMainComponent }, { path: "101", component: Page101Component }, { path: "currencies/:id", component: PageCurrenciesComponent }, { path: "currencies", component: PageCurrenciesItemComponent }, { path: "events/:id", component: PageEventsComponent }, { path: "events", component: PageEventsItemComponent }, { path: "exchanges/:id", component: PageExchangesComponent }, { path: "exchanges", component: PageExchangesItemComponent }, { path: "ico/:id", component: PageICOComponent }, { path: "ico", component: PageICOItemComponent }, { path: "markets/:id", component: PageMarketsComponent }, { path: "markets", component: PageMarketsItemComponent }, { path: ":section", component: PageSectionComponent }, { path: ":date/:url", component: PageArticleComponent }, { path: "**", component: NoContentComponent }]]; }, []), core["_13" /* ɵmpd */](1024, router["k" /* Router */], router["v" /* ɵe */], [core["g" /* ApplicationRef */], router["q" /* UrlSerializer */], router["b" /* ChildrenOutletContexts */], common["g" /* Location */], core["q" /* Injector */], core["v" /* NgModuleFactoryLoader */], core["i" /* Compiler */], router["i" /* ROUTES */], router["g" /* ROUTER_CONFIGURATION */], [2, router["p" /* UrlHandlingStrategy */]], [2, router["j" /* RouteReuseStrategy */]]]), core["_13" /* ɵmpd */](512, router["m" /* RouterModule */], router["m" /* RouterModule */], [[2, router["r" /* ɵa */]], [2, router["k" /* Router */]]]), core["_13" /* ɵmpd */](512, AppModule, AppModule, []), core["_13" /* ɵmpd */](256, http["n" /* ɵe */], "XSRF-TOKEN", []), core["_13" /* ɵmpd */](256, http["o" /* ɵf */], "X-XSRF-TOKEN", [])]); });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXJ0aWNsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvcmFuZG9tQnl0ZXMtYnJvd3Nlci50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvYnl0ZXNUb1V1aWQudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3YxLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC9wYXR0ZXJucy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvdXVpZC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS90aW1lc3RhbXAvdGltZXN0YW1wLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdGltZXN0YW1wL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9lbnVtLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9ibG9jay5lbnVtLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2Fkcy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2Fkcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2NvaW4vcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2hpc3RvcmljYWwudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2NvaW4udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcmF0aW5nL3JhdGluZy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3JhdGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2N1cnJlbmN5L2N1cnJlbmN5LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY3VycmVuY3kvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9leGNoYW5nZS9leGNoYW5nZS50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V4Y2hhbmdlL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvaWNvL2ljby50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2ljby9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL21hcmtldC9tYXJrZXQudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9tYXJrZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91cmwtYnVpbGRlci91cmwtYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3VybC1idWlsZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvcHVibGljYXRpb24vcHVibGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9wdWJsaWNhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vc2VjdGlvbi50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9zdGF0dXMvc3RhdHVzLnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc3RhdHVzL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci9yb2xlLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdmlkZW8vdmlkZW8udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy92aWRlby9pbmRleC50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V2ZW50L2V2ZW50LnRzIiwid2VicGFjazovLy8vVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvZXZlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL2VudmVyb21lbnRzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMveW91dHViZS95b3V0dWJlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMveW91dHViZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3B1YmxpY2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vLWNvbnRlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvMTAxL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21haW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItY2FyZC9wdWItY2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wdWItY2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmlkZW8tcmliYm9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9wYWdlLW1haW4uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL3BpcGVzL2ltYWdlL2VudmVyb21lbnRzLnRzIiwid2VicGFjazovLy8uL3BpcGVzL2ltYWdlL2ltYWdlLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvMTAxL3BhZ2UtMTAxLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9pY28vcGFnZS1pY28uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MubmdzdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2FwcC5tb2R1bGUubmdmYWN0b3J5LmpzIiwid2VicGFjazovLy8uL21haW4uZnJvbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNROzs7QUNQUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7OztBQzdDQSxpQ0FBd0MsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRztBQUNsRyxpQ0FBd0MsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRztBQUNsRyxpQ0FBd0MsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRztBQUNsRyxpQ0FBd0MsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRztBQUNsRztBQUNBOzs7QUNMQTtBQUN5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4RkE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN6Q0E7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxHQUFHLCtCQUErQixzQkFBc0I7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckRBOzs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbEJlO0FBQ0s7QUFDQTtBQUNwQixrQ0FBa0MsY0FBYztBQUNoRCx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsSEE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbkRvQjtBQUNKO0FBQ2hCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUNvQjtBQUNKO0FBQ0s7QUFDckI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPLHdCQUF3QixzQkFBc0I7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZIQTtBQUNBO0FBQ0E7OztBQ0ZBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hEQTs7O0FDQWlCO0FBQ0c7QUFDcEI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoR0E7OztBQ0FlO0FBQ0s7QUFDSDtBQUNqQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNGQTs7O0FDQWU7QUFDSztBQUNIO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakdBOzs7QUNBZTtBQUNLO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzRkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pCQTs7O0FDQWU7QUFDTTtBQUNEO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakpBOzs7QUNBZTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyRUE7OztBQ0FlO0FBQ2Y7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcERBOzs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDZmU7QUFDSTtBQUNGO0FBQ2pCLHVDQUFrQyxjQUFjO0FBQ2hEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25IQTtBQUNBOzs7QUNEQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUNBOzs7QUNBZTtBQUNLO0FBQ0g7QUFDakI7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4RkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNaVTtBQUNpQjtBQUNMO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxXQUFXO0FBQ2hFO0FBQ0E7OztBQ2RBOzs7QUNBVTtBQUNpQjtBQUMwQjtBQUNoQztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNvQjtBQUNFO0FBQ1E7QUFDZjtBQUNNO0FBQ0k7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Msb0RBQW9EO0FBQ3BGO0FBQ0E7QUFDQSw4RUFBa0UsNEJBQTRCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHFGQUErRCxhQUFhO0FBQzVFO0FBQ0Esb0RBQW9ELGFBQWEsSUFBSSxjQUFjO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQTJFLDRCQUE0QjtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDBFQUE4RCw0QkFBNEI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FDakZBOzs7QUNBQTtBQUNBOzs7QUNEb0Q7QUFDbkM7QUFDSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNzQjtBQUNHO0FBQ0o7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsYUFBYSxJQUFJLGNBQWM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHVEQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQWtFLGtDQUFrQztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUFpRSxrQ0FBa0M7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBOEQsa0NBQWtDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOzs7QUMvREE7OztBQ0FxQjtBQUNBO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCO0FBQ3pCO0FBQ0EsNEVBQTRFLEtBQUssT0FBTyxlQUFlO0FBQ3ZHLDBIQUEwSCxLQUFLO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxFQUFFLFdBQVcsRUFBRTtBQUNqRTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQ3pDQTs7O0FDQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBOzs7QUNYQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDSlU7QUFDd0I7QUFDWDtBQUNEO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RCxTQUFTO0FBQ1Q7QUFDQTs7O0FDdkJBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUkE7OztBQ0FpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSQTs7O0FDQWlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBOzs7QUNBVTtBQUNWO0FBQ0E7OztBQ0ZBOzs7QUNBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBOzs7QUNBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUkE7QUFDQTs7O0FDRGlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JpQjtBQUNBO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNSQTtBQUNBOzs7QUNEaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNBO0FBQ2E7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7OztBQ0RpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUmlCO0FBQ0E7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBOzs7Ozs7O0FDQWlCO0FBQ0E7QUFDakI7QUFDc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQ0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbENBOzs7QUNBaUI7QUFDQTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNUNGU7QUFDNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzQlU7QUFDQTtBQUNBO0FBQ1Y7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0IsU0FBUyxRQUFRLCtCQUErQixrQkFBa0I7QUFDdkc7OztBQ0hSO0FBQ0E7OztBQ0R3QjtBQUNIO0FBQ3JCO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNiQTtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBNkQsZ0VBQWdFLEVBQUU7QUFDdkg7QUFDUiwwQ0FBMEMsb3pDQUF1b0MsMkNBQTJDLDBCQUEwQiw0Q0FBNEMsMEJBQTBCLCtDQUErQywwQkFBMEIsMkNBQTJDLDBCQUEwQiwyQ0FBMkMsMEJBQTBCLDJDQUEyQywwQkFBMEIsNENBQTRDLDJCQUEyQixFQUFFLEVBQUU7QUFDL3BELDBDQUFpRCwyYUFBNlQsMEJBQTBCLGdJQUFxRix3QkFBd0Isc0dBQXdFLDBCQUEwQixFQUFFLFFBQVE7QUFDam1CLCtDQUFzRCwwWUFBc1MsZUFBZSxFQUFFLFFBQVE7QUFDclgsd0tBQXVJLElBQUk7QUFDbkk7OztBQ2hCUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQTBELDZEQUE2RCxFQUFFO0FBQ2pIO0FBQ1IsdUNBQXVDLHVXQUE4UiwwQ0FBMEMsMEJBQTBCLG1JQUFxRywwQkFBMEIsNENBQTRDLDBCQUEwQixFQUFFLEVBQUU7QUFDbGxCLHVDQUE4Qyx5VkFBa08sMEJBQTBCLHc1QkFBc3RCLHdCQUF3QixzR0FBd0UsMEJBQTBCLGdCQUFnQixFQUFFLFFBQVE7QUFDcHBDLDRDQUFtRCxtVUFBZ1IsZUFBZSxFQUFFLFFBQVE7QUFDNVYscUlBQTJILElBQUk7QUFDdkg7OztBQ3BCUjtBQUNBO0FBQ0EsMERBQTJCLGtCQUFrQixTQUFTLFFBQVEsK0JBQStCLGtCQUFrQjtBQUN2Rzs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF5RCw0REFBNEQsRUFBRTtBQUMvRztBQUNSLHNDQUE2QywrMEJBQXlxQixlQUFlLEVBQUUsUUFBUTtBQUMvdUIsMkNBQWtELG1SQUEyTyxlQUFlLEVBQUUsUUFBUTtBQUN0VCxpSUFBdUgsSUFBSTtBQUNuSDs7O0FDaEJSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUFnRSxtRUFBbUUsRUFBRTtBQUM3SDtBQUNSLDZDQUFvRCxrREFBbUM7QUFDdkYsa0RBQXlELHVVQUFnUixlQUFlLEVBQUUsUUFBUTtBQUNsVyw2SkFBbUosSUFBSTtBQUMvSTs7O0FDWlI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF5RCw0REFBNEQsRUFBRTtBQUMvRztBQUNSLHNDQUE2QyxrREFBbUM7QUFDaEYsMkNBQWtELDBTQUFtUCxlQUFlLEVBQUUsUUFBUTtBQUM5VCxnSUFBc0gsSUFBSTtBQUNsSDs7O0FDWlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQW9FLHVFQUF1RSxFQUFFO0FBQ3JJO0FBQ1IsaURBQXdELDJZQUE0VSxlQUFlLEVBQUUsUUFBUTtBQUM3WixzREFBNkQsd1ZBQWlTLGVBQWUsRUFBRSxRQUFRO0FBQ3ZYLDhLQUFvSyxJQUFJO0FBQ2hLOzs7QUNkUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBNEQsK0RBQStELEVBQUU7QUFDckg7QUFDUix5Q0FBZ0Qsa0RBQW1DO0FBQ25GLDhDQUFxRCx1VEFBZ1EsZUFBZSxFQUFFLFFBQVE7QUFDOVUsNklBQW1JLElBQUk7QUFDL0g7OztBQ1pSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBZ0UsbUVBQW1FLEVBQUU7QUFDN0g7QUFDUiw2Q0FBb0QsMllBQTRVLGVBQWUsRUFBRSxRQUFRO0FBQ3paLGtEQUF5RCx3VUFBaVIsZUFBZSxFQUFFLFFBQVE7QUFDblcsOEpBQW9KLElBQUk7QUFDaEo7OztBQ2RSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUErRCxrRUFBa0UsRUFBRTtBQUMzSDtBQUNSLDRDQUFtRCxrREFBbUM7QUFDdEYsaURBQXdELG1VQUE0USxlQUFlLEVBQUUsUUFBUTtBQUM3Vix5SkFBK0ksSUFBSTtBQUMzSTs7O0FDWlI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFtRSxzRUFBc0UsRUFBRTtBQUNuSTtBQUNSLGdEQUF1RCwyWUFBNFUsZUFBZSxFQUFFLFFBQVE7QUFDNVoscURBQTRELG9WQUE2UixlQUFlLEVBQUUsUUFBUTtBQUNsWCwwS0FBZ0ssSUFBSTtBQUM1Sjs7O0FDZFI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXlELDREQUE0RCxFQUFFO0FBQy9HO0FBQ1Isc0NBQTZDLGtEQUFtQztBQUNoRiwyQ0FBa0QsMlNBQW9QLGVBQWUsRUFBRSxRQUFRO0FBQy9ULGlJQUF1SCxJQUFJO0FBQ25IOzs7QUNaUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTZELGdFQUFnRSxFQUFFO0FBQ3ZIO0FBQ1IsMENBQWlELDJZQUE0VSxlQUFlLEVBQUUsUUFBUTtBQUN0WiwrQ0FBc0QsNFRBQXFRLGVBQWUsRUFBRSxRQUFRO0FBQ3BWLGtKQUF3SSxJQUFJO0FBQ3BJOzs7QUNkUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBNkQsZ0VBQWdFLEVBQUU7QUFDdkg7QUFDUiwwQ0FBaUQsa0RBQW1DO0FBQ3BGLCtDQUFzRCwyVEFBb1EsZUFBZSxFQUFFLFFBQVE7QUFDblYsaUpBQXVJLElBQUk7QUFDbkk7OztBQ1pSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBaUUsb0VBQW9FLEVBQUU7QUFDL0g7QUFDUiw4Q0FBcUQsMllBQTRVLGVBQWUsRUFBRSxRQUFRO0FBQzFaLG1EQUEwRCw0VUFBcVIsZUFBZSxFQUFFLFFBQVE7QUFDeFcsa0tBQXdKLElBQUk7QUFDcEo7OztBQ2RSO0FBQ0E7QUFDQSw4REFBMkIsa0JBQWtCLFNBQVMsUUFBUSwrQkFBK0Isa0JBQWtCO0FBQ3ZHOzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTZELGdFQUFnRSxFQUFFO0FBQ3ZIO0FBQ1IsMENBQWlELCswQkFBeXFCLGVBQWUsRUFBRSxRQUFRO0FBQ252QiwrQ0FBc0QsbVNBQTJQLGVBQWUsRUFBRSxRQUFRO0FBQzFVLGlKQUF1SSxJQUFJO0FBQ25JOzs7QUNoQlI7QUFDQTtBQUNBLDhEQUEyQixrQkFBa0IsU0FBUyxRQUFRLCtCQUErQixrQkFBa0I7QUFDdkc7OztBQ0hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBNkQsZ0VBQWdFLEVBQUU7QUFDdkg7QUFDUiwwQ0FBaUQsKzBCQUF5cUIsZUFBZSxFQUFFLFFBQVE7QUFDbnZCLCtDQUFzRCxtU0FBMlAsZUFBZSxFQUFFLFFBQVE7QUFDMVUsaUpBQXVJLElBQUk7QUFDbkk7OztBQ2hCUjtBQUNBO0FBQ0EsNERBQTJCLGtCQUFrQixTQUFTLFFBQVEsK0JBQStCLGtCQUFrQjtBQUN2Rzs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQTJELDhEQUE4RCxFQUFFO0FBQ25IO0FBQ1Isd0NBQStDLHdYQUErUztBQUM5Viw2Q0FBb0Qsa1JBQTBPO0FBQzlSLHlJQUErSCxJQUFJO0FBQzNIOzs7QUNYUjtBQUNBO0FBQ0EsMEZBQW1ELHlCQUF5QixrQkFBa0IsOEJBQThCLGdCQUFnQixrQ0FBa0MsZ0JBQWdCLGNBQWMsV0FBVyw4Q0FBOEMsYUFBYSxxQ0FBcUMsaUJBQWlCLGtCQUFrQjtBQUNsVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUE0RCwrREFBK0QsRUFBRTtBQUNySDtBQUNSLHlDQUF5QywrZ0JBQWlhLGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQzNnQix5Q0FBeUMsNFlBQTJULGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQ3JhLHlDQUF5QyxraEJBQW9hLGtEQUFtQywwQkFBMEIsRUFBRSxFQUFFO0FBQzlnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrTkFBZ0osb0JBQW9CLEdBQUcsdUJBQXVCLGcyQ0FBbWhDLGNBQWMseUNBQTBCLHVCQUF1Qix5Q0FBMEIsb0JBQW9CLHlDQUEwQixtQkFBbUIseUNBQTBCLHFCQUFxQix5Q0FBMEIscUJBQXFCO0FBQ2w5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZUQUE2TSxlQUFlLEVBQUUsdVBBQTZKLG9CQUFvQixtakJBQThULHFEQUFxRCxtV0FBdU8sb0JBQW9CLHFPQUFpSyxvQkFBb0IsMi9CQUF3ekIsY0FBYyx5Q0FBMEIsdUJBQXVCLHlDQUEwQixvQkFBb0IsMENBQTJCLG1CQUFtQiwwQ0FBMkIscUJBQXFCLDBDQUEyQixxQkFBcUI7QUFDOXVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNlRBQTZNLGVBQWUsRUFBRSx1UEFBNkosb0JBQW9CLG1qQkFBOFQscURBQXFELG1XQUF1TyxvQkFBb0I7QUFDdGdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywrU0FBaUosaURBQWlELDJMQUE0SSx3QkFBd0IsZUFBZSw4QkFBOEIsMEJBQTBCLDBCQUEwQiw0QkFBNEIsMkJBQTJCLHlCQUF5Qix3Q0FBd0MsbUVBQW1FLDRCQUE0QixnRUFBZ0UsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLDZCQUE2Qix3Q0FBd0Msc0VBQXNFLDRCQUE0Qix1Q0FBdUMsNEJBQTRCLHdDQUF3QyxFQUFFLHNCQUFzQixrREFBbUMsMEJBQTBCLGdFQUFpRCw4REFBK0MsK0RBQWdELDREQUE2Qyw0REFBNkMsOERBQStDLDhEQUErQyw0RkFBNEYsb0VBQXFELHFFQUFzRCxzRUFBdUQsd0lBQTBHLG1FQUFvRCxrRUFBbUQsc0VBQXVELHFFQUFzRCxtRUFBb0QsNkVBQThELDJFQUE0RCw0RUFBNkQseUVBQTBELHlFQUEwRCwyRUFBNEQsMkVBQTRELGdOQUFnTixrRUFBbUQsZ0VBQWlELGlFQUFrRCw4REFBK0MsOERBQStDLGdFQUFpRCxnRUFBaUQsb0RBQXFDLDZEQUE4QywwREFBMkMsMERBQTJDLDBEQUEyQyw0RUFBNkQsNERBQTZDLHFFQUFzRCxzTUFBc00scUVBQXNELHFFQUFzRCxzRUFBdUQsd0lBQTBHLG1FQUFvRCxrRUFBbUQsc0VBQXVELHFFQUFzRCxtRUFBb0QsNkVBQThELDJFQUE0RCw0RUFBNkQseUVBQTBELHlFQUEwRCwyRUFBNEQsMkVBQTRELGtOQUFrTixrRUFBbUQsZ0VBQWlELGlFQUFrRCw4REFBK0MsOERBQStDLGdFQUFpRCxnRUFBaUQsb0RBQXFDLDZEQUE4QywwREFBMkMsMERBQTJDLDBEQUEyQyw0RUFBNkQsNERBQTZDLHFFQUFzRCxzTUFBc00sb0VBQXFELDRCQUE0QixFQUFFO0FBQ3h1TDtBQUNBLDhDQUFxRCx3WkFBa1M7QUFDdlYsbUtBQW9JLElBQUk7QUFDaEk7OztBQ2pIUjtBQUNBO0FBQ0E7QUFDUTs7O0FDSFI7QUFDQTtBQUNBO0FBQ1E7OztBQ0hSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFtRSxzRUFBc0UsRUFBRTtBQUNuSTtBQUNSLGdEQUF1RCw4dEJBQTJuQjtBQUNsckIscURBQTRELGtWQUEyUixlQUFlLEVBQUUsUUFBUTtBQUNoWCx3S0FBOEosSUFBSTtBQUMxSjs7O0FDWlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBd0QsMkRBQTJELEVBQUU7QUFDN0c7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtTUFBeUgsZ0NBQWdDO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbU1BQXlILGdDQUFnQztBQUNsSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb01BQTBILGdDQUFnQztBQUNuSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9NQUEwSCxnQ0FBZ0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvTUFBMEgsZ0NBQWdDLDJzREFBOC9DLHFCQUFxQiwwQkFBMEIsMkJBQTJCLDBCQUEwQix3QkFBd0IsMkJBQTJCLHlCQUF5Qiw0QkFBNEIsZ0NBQWdDLDRCQUE0QiwrQkFBK0IsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsZ0JBQWdCLEVBQUUsc0JBQXNCLHNEQUF1QyxvREFBcUMscUNBQXFDLHNEQUF1QyxvREFBcUMscUNBQXFDLHVEQUF3QyxxREFBc0Msc0NBQXNDLHVEQUF3QyxzREFBdUMsdUNBQXVDLHdEQUF5QyxzREFBdUMsd0NBQXdDLHdEQUF5QyxzREFBdUMsd0NBQXdDLHdEQUF5QyxzREFBdUMsd0NBQXdDLEVBQUU7QUFDMzNGO0FBQ0EsMENBQWlELHNTQUErTyxlQUFlLEVBQUUsUUFBUTtBQUN6VCw0SEFBa0gsSUFBSTtBQUM5Rzs7O0FDbEVSO0FBQ0E7QUFDQTtBQUNROzs7QUNIUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUF3RCwyREFBMkQsRUFBRTtBQUM3RztBQUNSLHFDQUE0QywyWkFBa1c7QUFDOVksMENBQWlELHNTQUErTyxlQUFlLEVBQUUsUUFBUTtBQUN6VCw0SEFBa0gsSUFBSTtBQUM5Rzs7O0FDWlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUF3RCwyREFBMkQsRUFBRTtBQUM3RztBQUNSLHFDQUE0QyxxbENBQXE0QixlQUFlLGVBQWUsZUFBZSxFQUFFLFFBQVE7QUFDeCtCLDBDQUFpRCxvU0FBNk8sZUFBZSxFQUFFLFFBQVE7QUFDdlQsMEhBQWdILElBQUk7QUFDNUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEdBQWtHLHkyREFBcTBDLGtNQUEwSCxFQUFFLHVpRkFBOHlDLGVBQWUsRUFBRSxnNUxBQXd1RyxlQUFlLEVBQUUsdW9DQUE0cUIsaUNBQW1CLEVBQUUsb1lBQWdPLDZIQUErRCxFQUFFLDgxSEFBb25FLDBFQUE0RCxrcUJBQTJZLFdBQVcseUNBQTZDLEdBQUcsMkNBQStDLEdBQUcsNkRBQWlFLEdBQUcsNkRBQWlFLEdBQUcscURBQXlELEdBQUcscURBQXlELEdBQUcsMkRBQStELEdBQUcsMkRBQStELEdBQUcsK0NBQW1ELEdBQUcsK0NBQW1ELEdBQUcsdURBQTJELEdBQUcsdURBQTJELEdBQUcsb0RBQXdELEdBQUcsc0RBQTBELEdBQUcsNENBQWdELEdBQUcsRUFBRSwyeUJBQW9lLEVBQUU7QUFDNTlWOzs7OztBQ3JFUjtBQUN5QztBQUNzQjtBQUNsQztBQUM3QixlQUFlLGFBQXFCLElBQUksUUFBd0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUSIsImZpbGUiOiJqcy9tYWluLjg4N2IwZWFmNmMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gNzI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5XG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IG1haW4iLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgQXJ0aWNsZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYXJ0aWNsZS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJjb25zdCByYW5kb21CeXRlcyA9IChzaXplKSA9PiB7XG4gICAgbGV0IHJuZCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICAgIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZCk7XG4gICAgcmV0dXJuIHJuZDtcbn07XG5jb25zdCDJtTAgPSByYW5kb21CeXRlcztcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbUJ5dGVzO1xuZXhwb3J0IHsgybUwIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC9yYW5kb21CeXRlcy1icm93c2VyLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgQlRIID0gW1wiMDBcIiwgXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLCBcIjA1XCIsIFwiMDZcIiwgXCIwN1wiLCBcIjA4XCIsIFwiMDlcIiwgXCIwYVwiLCBcIjBiXCIsIFwiMGNcIiwgXCIwZFwiLCBcIjBlXCIsIFwiMGZcIixcbiAgICBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiLCBcIjEzXCIsIFwiMTRcIiwgXCIxNVwiLCBcIjE2XCIsIFwiMTdcIiwgXCIxOFwiLCBcIjE5XCIsIFwiMWFcIiwgXCIxYlwiLCBcIjFjXCIsIFwiMWRcIiwgXCIxZVwiLCBcIjFmXCIsXG4gICAgXCIyMFwiLCBcIjIxXCIsIFwiMjJcIiwgXCIyM1wiLCBcIjI0XCIsIFwiMjVcIiwgXCIyNlwiLCBcIjI3XCIsIFwiMjhcIiwgXCIyOVwiLCBcIjJhXCIsIFwiMmJcIiwgXCIyY1wiLCBcIjJkXCIsIFwiMmVcIiwgXCIyZlwiLFxuICAgIFwiMzBcIiwgXCIzMVwiLCBcIjMyXCIsIFwiMzNcIiwgXCIzNFwiLCBcIjM1XCIsIFwiMzZcIiwgXCIzN1wiLCBcIjM4XCIsIFwiMzlcIiwgXCIzYVwiLCBcIjNiXCIsIFwiM2NcIiwgXCIzZFwiLCBcIjNlXCIsIFwiM2ZcIixcbiAgICBcIjQwXCIsIFwiNDFcIiwgXCI0MlwiLCBcIjQzXCIsIFwiNDRcIiwgXCI0NVwiLCBcIjQ2XCIsIFwiNDdcIiwgXCI0OFwiLCBcIjQ5XCIsIFwiNGFcIiwgXCI0YlwiLCBcIjRjXCIsIFwiNGRcIiwgXCI0ZVwiLCBcIjRmXCIsXG4gICAgXCI1MFwiLCBcIjUxXCIsIFwiNTJcIiwgXCI1M1wiLCBcIjU0XCIsIFwiNTVcIiwgXCI1NlwiLCBcIjU3XCIsIFwiNThcIiwgXCI1OVwiLCBcIjVhXCIsIFwiNWJcIiwgXCI1Y1wiLCBcIjVkXCIsIFwiNWVcIiwgXCI1ZlwiLFxuICAgIFwiNjBcIiwgXCI2MVwiLCBcIjYyXCIsIFwiNjNcIiwgXCI2NFwiLCBcIjY1XCIsIFwiNjZcIiwgXCI2N1wiLCBcIjY4XCIsIFwiNjlcIiwgXCI2YVwiLCBcIjZiXCIsIFwiNmNcIiwgXCI2ZFwiLCBcIjZlXCIsIFwiNmZcIixcbiAgICBcIjcwXCIsIFwiNzFcIiwgXCI3MlwiLCBcIjczXCIsIFwiNzRcIiwgXCI3NVwiLCBcIjc2XCIsIFwiNzdcIiwgXCI3OFwiLCBcIjc5XCIsIFwiN2FcIiwgXCI3YlwiLCBcIjdjXCIsIFwiN2RcIiwgXCI3ZVwiLCBcIjdmXCIsXG4gICAgXCI4MFwiLCBcIjgxXCIsIFwiODJcIiwgXCI4M1wiLCBcIjg0XCIsIFwiODVcIiwgXCI4NlwiLCBcIjg3XCIsIFwiODhcIiwgXCI4OVwiLCBcIjhhXCIsIFwiOGJcIiwgXCI4Y1wiLCBcIjhkXCIsIFwiOGVcIiwgXCI4ZlwiLFxuICAgIFwiOTBcIiwgXCI5MVwiLCBcIjkyXCIsIFwiOTNcIiwgXCI5NFwiLCBcIjk1XCIsIFwiOTZcIiwgXCI5N1wiLCBcIjk4XCIsIFwiOTlcIiwgXCI5YVwiLCBcIjliXCIsIFwiOWNcIiwgXCI5ZFwiLCBcIjllXCIsIFwiOWZcIixcbiAgICBcImEwXCIsIFwiYTFcIiwgXCJhMlwiLCBcImEzXCIsIFwiYTRcIiwgXCJhNVwiLCBcImE2XCIsIFwiYTdcIiwgXCJhOFwiLCBcImE5XCIsIFwiYWFcIiwgXCJhYlwiLCBcImFjXCIsIFwiYWRcIiwgXCJhZVwiLCBcImFmXCIsXG4gICAgXCJiMFwiLCBcImIxXCIsIFwiYjJcIiwgXCJiM1wiLCBcImI0XCIsIFwiYjVcIiwgXCJiNlwiLCBcImI3XCIsIFwiYjhcIiwgXCJiOVwiLCBcImJhXCIsIFwiYmJcIiwgXCJiY1wiLCBcImJkXCIsIFwiYmVcIiwgXCJiZlwiLFxuICAgIFwiYzBcIiwgXCJjMVwiLCBcImMyXCIsIFwiYzNcIiwgXCJjNFwiLCBcImM1XCIsIFwiYzZcIiwgXCJjN1wiLCBcImM4XCIsIFwiYzlcIiwgXCJjYVwiLCBcImNiXCIsIFwiY2NcIiwgXCJjZFwiLCBcImNlXCIsIFwiY2ZcIixcbiAgICBcImQwXCIsIFwiZDFcIiwgXCJkMlwiLCBcImQzXCIsIFwiZDRcIiwgXCJkNVwiLCBcImQ2XCIsIFwiZDdcIiwgXCJkOFwiLCBcImQ5XCIsIFwiZGFcIiwgXCJkYlwiLCBcImRjXCIsIFwiZGRcIiwgXCJkZVwiLCBcImRmXCIsXG4gICAgXCJlMFwiLCBcImUxXCIsIFwiZTJcIiwgXCJlM1wiLCBcImU0XCIsIFwiZTVcIiwgXCJlNlwiLCBcImU3XCIsIFwiZThcIiwgXCJlOVwiLCBcImVhXCIsIFwiZWJcIiwgXCJlY1wiLCBcImVkXCIsIFwiZWVcIiwgXCJlZlwiLFxuICAgIFwiZjBcIiwgXCJmMVwiLCBcImYyXCIsIFwiZjNcIiwgXCJmNFwiLCBcImY1XCIsIFwiZjZcIiwgXCJmN1wiLCBcImY4XCIsIFwiZjlcIiwgXCJmYVwiLCBcImZiXCIsIFwiZmNcIiwgXCJmZFwiLCBcImZlXCIsIFwiZmZcIl07XG5leHBvcnQgZGVmYXVsdCAoYnVmKSA9PiBCVEhbYnVmWzBdXSArIEJUSFtidWZbMV1dICtcbiAgICBCVEhbYnVmWzJdXSArIEJUSFtidWZbM11dICsgJy0nICtcbiAgICBCVEhbYnVmWzRdXSArIEJUSFtidWZbNV1dICsgJy0nICtcbiAgICBCVEhbYnVmWzZdXSArIEJUSFtidWZbN11dICsgJy0nICtcbiAgICBCVEhbYnVmWzhdXSArIEJUSFtidWZbOV1dICsgJy0nICtcbiAgICBCVEhbYnVmWzEwXV0gKyBCVEhbYnVmWzExXV0gK1xuICAgIEJUSFtidWZbMTJdXSArIEJUSFtidWZbMTNdXSArXG4gICAgQlRIW2J1ZlsxNF1dICsgQlRIW2J1ZlsxNV1dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvYnl0ZXNUb1V1aWQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgcmFuZG9tQnl0ZXMgZnJvbSAnLi9yYW5kb21CeXRlcyc7XG5pbXBvcnQgYnl0ZXNUb1V1aWQgZnJvbSAnLi9ieXRlc1RvVXVpZCc7XG5jb25zdCBTRUVEX0JZVEVTID0gcmFuZG9tQnl0ZXMoMTYpO1xuY29uc3QgTk9ERV9JRCA9IFtcbiAgICBTRUVEX0JZVEVTWzBdIHwgMHgwMSxcbiAgICBTRUVEX0JZVEVTWzFdLFxuICAgIFNFRURfQllURVNbMl0sXG4gICAgU0VFRF9CWVRFU1szXSxcbiAgICBTRUVEX0JZVEVTWzRdLFxuICAgIFNFRURfQllURVNbNV0sXG5dO1xubGV0IF9jbG9ja3NlcSA9IChTRUVEX0JZVEVTWzZdIDw8IDggfCBTRUVEX0JZVEVTWzddKSAmIDB4M2ZmZjtcbmxldCBsYXN0TVNlY3MgPSAwO1xubGV0IGxhc3ROU2VjcyA9IDA7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgbGV0IG1zZWNzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgbGV0IG5zZWNzID0gbGFzdE5TZWNzICsgMTtcbiAgICBsZXQgZHQgPSAobXNlY3MgLSBsYXN0TVNlY3MpICsgKG5zZWNzIC0gbGFzdE5TZWNzKSAvIDEwMDAwO1xuICAgIGxldCBjbG9ja3NlcSA9IGR0IDwgMCA/IF9jbG9ja3NlcSArIDEgJiAweDNmZmYgOiBfY2xvY2tzZXE7XG4gICAgaWYgKGR0IDwgMCB8fCBtc2VjcyA+IGxhc3RNU2Vjcykge1xuICAgICAgICBuc2VjcyA9IDA7XG4gICAgfVxuICAgIGlmIChuc2VjcyA+PSAxMDAwMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gICAgbGFzdE1TZWNzID0gbXNlY3M7XG4gICAgbGFzdE5TZWNzID0gbnNlY3M7XG4gICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG4gICAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBiID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIGxldCB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsICYgMHhmZjtcbiAgICBsZXQgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gICAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bWggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwO1xuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuICAgIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcbiAgICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCA2OyArK24pXG4gICAgICAgIGJbaSArIG5dID0gTk9ERV9JRFtuXTtcbiAgICByZXR1cm4gYnl0ZXNUb1V1aWQoYik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvdjEudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgY29uc3QgVVVJRHYxX1BBVFRFUk4gPSAnW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tMVthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSc7XG5leHBvcnQgY29uc3QgVVVJRHYxX1JFR0VYUCA9IC9eW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tMVthLWYwLTldezN9LVs4OWFiXVthLWYwLTldezN9LVthLWYwLTldezEyfSQvaTtcbmV4cG9ydCBjb25zdCBVVUlEdjRfUEFUVEVSTiA9ICdbYS1mMC05XXs4fS1bYS1mMC05XXs0fS00W2EtZjAtOV17M30tWzg5YWJdW2EtZjAtOV17M30tW2EtZjAtOV17MTJ9JztcbmV4cG9ydCBjb25zdCBVVUlEdjRfUkVHRVhQID0gL15bYS1mMC05XXs4fS1bYS1mMC05XXs0fS00W2EtZjAtOV17M30tWzg5YWJdW2EtZjAtOV17M30tW2EtZjAtOV17MTJ9JC9pO1xuZXhwb3J0IGNvbnN0IFVVSURuaWxfUEFUVEVSTiA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuZXhwb3J0IGNvbnN0IFVVSURuaWxfUkVHRVhQID0gL14wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAkLztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS91dWlkL3BhdHRlcm5zLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHYxIGZyb20gJy4vdjEnO1xuaW1wb3J0IHsgVVVJRHYxX1JFR0VYUCwgVVVJRHY0X1JFR0VYUCwgVVVJRG5pbF9SRUdFWFAsIFVVSURuaWxfUEFUVEVSTiwgfSBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCBjbGFzcyBVVUlEIHtcbiAgICBzdGF0aWMgZ2V0QXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpLmNvbmNhdCh2YWx1ZSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHV1aWQgPSBuZXcgVVVJRChpdGVtICYmIGl0ZW0uaWQgfHwgaXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV1aWQudmVyc2lvbiA9PT0gbnVsbCA/IG51bGwgOiB1dWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IodXVpZCA9IG51bGwpIHtcbiAgICAgICAgaWYgKHV1aWQgaW5zdGFuY2VvZiBVVUlEKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSB1dWlkLnZlcnNpb247XG4gICAgICAgICAgICB0aGlzLnV1aWQgPSB1dWlkLnV1aWQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB1dWlkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoVVVJRG5pbF9SRUdFWFAudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudXVpZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFVVSUR2MV9SRUdFWFAudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMudXVpZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFVVSUR2NF9SRUdFWFAudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMudXVpZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVVUlEIFwiJHt1dWlkfVwiIGRvZXMgbm90IG1hdGNoIHRoZSBVVUlEIHN0cmluZ2ApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dWlkID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gVVVJRG5pbF9QQVRURVJOO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV1aWQgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IDE7XG4gICAgICAgICAgICB0aGlzLnV1aWQgPSB2MSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV1aWQgPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IDQ7XG4gICAgICAgICAgICB0aGlzLnV1aWQgPSB2MSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIFVVSUQgdmVyc2lvbiBvZiBcIiR7dXVpZH1cImApO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBVVUlEIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdVVUlEJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXVpZC91dWlkLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi91dWlkJztcbmV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3V1aWQvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgY2xhc3MgVGltZXN0YW1wIGV4dGVuZHMgRGF0ZSB7XG4gICAgc3RhdGljIGZyb21VbnV4KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHV0cyA9IH5+dmFsdWU7XG4gICAgICAgIHJldHVybiBuZXcgVGltZXN0YW1wKHV0cyAqIDEwMDApO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIGdldCBpc0ludmFsaWQoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc1ZhbGlkO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcyk7XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IE1vZGVsIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdUaW1lc3RhbXAnO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS90aW1lc3RhbXAvdGltZXN0YW1wLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi90aW1lc3RhbXAnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3RpbWVzdGFtcC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImNvbnN0IEVOVU1fSURfUkVHRVhQID0gL15bYS16XVthLXowLTldKiQvO1xuZXhwb3J0IGNsYXNzIEVudW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCFFTlVNX0lEX1JFR0VYUC50ZXN0KGlkKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEVudW0gSUQgXCIke2lkfVwiIGRvZXMgbm90IG1hdGMgdGhlIHBhdHRlcm4gXCIke0VOVU1fSURfUkVHRVhQLnNvdXJjZX1cImApO1xuICAgIH1cbiAgICBzdGF0aWMgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldCh2YWx1ZSkge1xuICAgICAgICBsZXQgaWQgPSBTdHJpbmcodmFsdWUgJiYgdmFsdWUuaWQgfHwgdmFsdWUpO1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMpXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBcnJheSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KCkuY29uY2F0KHZhbHVlKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHRoaXMuZ2V0KGl0ZW0pKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBFbnVtIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdFbnVtJztcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvZW51bS9lbnVtLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9lbnVtJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29yZS9lbnVtL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgRW51bSB9IGZyb20gJ0Bjb3JlL2VudW0nO1xuZXhwb3J0IGNsYXNzIEJsb2NrRW51bSBleHRlbmRzIEVudW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB2YWx1ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3VwZXIoaWQsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdCbG9ja0VudW0nO1xuICAgIH1cbn1cbkJsb2NrRW51bS5BMSA9IG5ldyBCbG9ja0VudW0oJ2ExJywgJ0ExJywgJ9CS0LXRgNGI0L3QuNC5Jyk7XG5CbG9ja0VudW0uQTIgPSBuZXcgQmxvY2tFbnVtKCdhMicsICdBMicsICfQn9C+0LQg0LLQuNC00LXQvicpO1xuQmxvY2tFbnVtLkEzID0gbmV3IEJsb2NrRW51bSgnYTMnLCAnQTMnLCAn0J/QvtC0INC90L7QstC+0YHRgtGM0Y4nKTtcbkJsb2NrRW51bS5CMSA9IG5ldyBCbG9ja0VudW0oJ2IxJywgJ0IxJywgJ9CR0LDRiNC90Y8nKTtcbkJsb2NrRW51bS5CMiA9IG5ldyBCbG9ja0VudW0oJ2IyJywgJ0IyJywgJ9CR0LDRiNC90Y8nKTtcbkJsb2NrRW51bS5CMyA9IG5ldyBCbG9ja0VudW0oJ2IzJywgJ0IzJywgJ9CR0LDRiNC90Y8nKTtcbkJsb2NrRW51bS5NMSA9IG5ldyBCbG9ja0VudW0oJ20xJywgJ00xJywgJ9Cc0L7QsdC40LvRjNC90YvQuScpO1xuQmxvY2tFbnVtLk0yID0gbmV3IEJsb2NrRW51bSgnbTInLCAnTTInLCAn0JzQvtCx0LjQu9GM0L3Ri9C5Jyk7XG5CbG9ja0VudW0uTTMgPSBuZXcgQmxvY2tFbnVtKCdtMycsICdNMycsICfQnNC+0LHQuNC70YzQvdGL0LknKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9hZHMvYmxvY2suZW51bS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBCbG9ja0VudW0gfSBmcm9tICcuL2Jsb2NrLmVudW0nO1xuY29uc3QgRU5VTV9QR19BUlJBWV9QQVRURVJOID0gL15cXHsoW2EtejAtOSxdKylcXH0kLztcbmNvbnN0IERBVEVfUkVHRVhQID0gL15cXGR7NH0tXFxkezJ9LVxcZHszfSQvO1xuZXhwb3J0IGNsYXNzIEFkcyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBVVUlEKHZhbHVlLmlkIHx8IG51bGwpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgICAgICBpZiAodmFsdWUuYmxvY2tzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IEVOVU1fUEdfQVJSQVlfUEFUVEVSTi5leGVjKHZhbHVlLmJsb2Nrcyk7XG4gICAgICAgICAgICBjb25zdCBibG9ja3MgPSBtYXRjaCAmJiBtYXRjaFsxXS5zcGxpdCgnLCcpIHx8IHZhbHVlLmJsb2NrcztcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gQmxvY2tFbnVtLmdldEFycmF5KGJsb2Nrcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5lbmREYXRlKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5maWxlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUuZmlsZXMpID8gdmFsdWUuZmlsZXNcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IE1hdGgubWF4KH5+dmFsdWUuY29sbGVjdGVkLCAwKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPiAwKVxuICAgICAgICAgICAgOiBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5saW1pdHMgPVxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlLmxpbWl0cyA9PT0gJ29iamVjdCcgPyB7XG4gICAgICAgICAgICAgICAgc2hvdzogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuc2hvdywgMCksXG4gICAgICAgICAgICAgICAgc2hvd1BlckRheTogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuc2hvd1BlckRheSwgMCksXG4gICAgICAgICAgICAgICAgc2hvd1BlclVzZXI6IE1hdGgubWF4KH5+dmFsdWUubGltaXRzLnNob3dQZXJVc2VyLCAwKSxcbiAgICAgICAgICAgICAgICBjbGljazogTWF0aC5tYXgofn52YWx1ZS5saW1pdHMuY2xpY2ssIDApLFxuICAgICAgICAgICAgICAgIGNsaWNrUGVyRGF5OiBNYXRoLm1heCh+fnZhbHVlLmxpbWl0cy5jbGlja1BlckRheSwgMCksXG4gICAgICAgICAgICAgICAgY2xpY2tQZXJVc2VyOiBNYXRoLm1heCh+fnZhbHVlLmxpbWl0cy5jbGlja1BlclVzZXIsIDApLFxuICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICBzaG93OiAwLFxuICAgICAgICAgICAgICAgIHNob3dQZXJEYXk6IDAsXG4gICAgICAgICAgICAgICAgc2hvd1BlclVzZXI6IDAsXG4gICAgICAgICAgICAgICAgY2xpY2s6IDAsXG4gICAgICAgICAgICAgICAgY2xpY2tQZXJEYXk6IDAsXG4gICAgICAgICAgICAgICAgY2xpY2tQZXJVc2VyOiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0cyA9IHt9O1xuICAgICAgICBpZiAodmFsdWUuc3RhdHMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlLnN0YXRzKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gU3RyaW5nKGtleSkudHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmIChEQVRFX1JFR0VYUC50ZXN0KGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IE1hdGgubWF4KH5+dmFsdWUuc3RhdHNba2V5XS5zaG93LCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBNYXRoLm1heCh+fnZhbHVlLnN0YXRzW2tleV0uY2xpY2ssIDApLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIGJsb2NrczogdGhpcy5ibG9ja3MubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBmaWxlczogdGhpcy5maWxlcyxcbiAgICAgICAgICAgIGxpbWl0czogdGhpcy5saW1pdHMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIGJsb2NrczogdGhpcy5ibG9ja3MsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGZpbGVzOiB0aGlzLmZpbGVzLFxuICAgICAgICAgICAgbGltaXRzOiB0aGlzLmxpbWl0cyxcbiAgICAgICAgICAgIHN0YXRzOiB0aGlzLnN0YXRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBBZHMgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0Fkcyc7XG4gICAgfVxufVxuQWRzLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAnYmxvY2tzJyxcbiAgICAndGl0bGUnLFxuICAgICdzdGFydERhdGUnLFxuICAgICdlbmREYXRlJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2Fkcy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYWRzJztcbmV4cG9ydCAqIGZyb20gJy4vYmxvY2suZW51bSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvYWRzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IGNsYXNzIFByaWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9idGMgPSAwO1xuICAgICAgICB0aGlzLl91c2QgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBidGMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idGM7XG4gICAgfVxuICAgIGdldCB1c2QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2Q7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGJ0YyA9IHZhbHVlLmJ0YyAhPT0gdW5kZWZpbmVkICYmIE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUuYnRjKSwgMCk7XG4gICAgICAgIHRoaXMuX2J0YyA9IGJ0YyB8fCB0aGlzLmJ0YztcbiAgICAgICAgY29uc3QgdXNkID0gdmFsdWUudXNkICE9PSB1bmRlZmluZWQgJiYgTWF0aC5tYXgocGFyc2VGbG9hdCh2YWx1ZS51c2QpLCAwKTtcbiAgICAgICAgdGhpcy5fdXNkID0gdXNkIHx8IHRoaXMudXNkO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnRjOiB0aGlzLmJ0YyxcbiAgICAgICAgICAgIHVzZDogdGhpcy51c2QsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ0YzogdGhpcy5idGMsXG4gICAgICAgICAgICB1c2Q6IHRoaXMudXNkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNkIHx8IDA7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudG9OdW1iZXIoKSk7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFByaWNlIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdQcmljZSc7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2NvaW4vcHJpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUHJpY2UgfSBmcm9tICcuL3ByaWNlJztcbmV4cG9ydCBjbGFzcyBIaXN0b3JpY2FsIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucHJpY2UgPSBuZXcgUHJpY2UoKTtcbiAgICAgICAgdGhpcy50cyA9IG5ldyBUaW1lc3RhbXAodmFsdWUudHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHZhbHVlLnByaWNlKTtcbiAgICB9XG4gICAgdXBkYXRlUHJpY2UodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLnByaWNlLnVwZGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0czogdGhpcy50cyxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2UudG9OdW1iZXIoKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy50cyk7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IEhpc3RvcmljYWwgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0hpc3RvcmljYWwnO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2hpc3RvcmljYWwudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUHJpY2UgfSBmcm9tICcuL3ByaWNlJztcbmltcG9ydCB7IEhpc3RvcmljYWwgfSBmcm9tICcuL2hpc3RvcmljYWwnO1xuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXltBLVowLTlAJF0rJC87XG5leHBvcnQgY2xhc3MgQ29pbiB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLl9tYXggPSAwO1xuICAgICAgICB0aGlzLl9hdmFpbGFibGUgPSAwO1xuICAgICAgICB0aGlzLnByaWNlID0gbmV3IFByaWNlKCk7XG4gICAgICAgIHRoaXMuX3ZvbHVtZTI0ID0gMDtcbiAgICAgICAgdGhpcy5faGlzdG9yaWNhbCA9IG5ldyBBcnJheSgpO1xuICAgICAgICBjb25zdCBzeW1ib2wgPSBTdHJpbmcodmFsdWUuc3ltYm9sIHx8ICcnKS50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKCFTWU1CT0xfUEFUVEVSTi50ZXN0KHN5bWJvbCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBTeW1ib2wgXCIke3N5bWJvbH0gbm90IG1hdGNoIHRvIHBhdHRlcm4gJHtTWU1CT0xfUEFUVEVSTi5zb3VyY2V9YCk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICB0aGlzLnVwZGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBtYXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXg7XG4gICAgfVxuICAgIGdldCBhdmFpbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGU7XG4gICAgfVxuICAgIGdldCBjYXBpdGFsaXphdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ0YzogdGhpcy5wcmljZS5idGMgKiB0aGlzLmF2YWlsYWJsZSxcbiAgICAgICAgICAgIHVzZDogdGhpcy5wcmljZS51c2QgKiB0aGlzLmF2YWlsYWJsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHZvbHVtZTI0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lMjQ7XG4gICAgfVxuICAgIGdldCB0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RzO1xuICAgIH1cbiAgICBnZXQgaGlzdG9yaWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpc3RvcmljYWwuc29ydCgoYSwgYikgPT4gYS50cyA8IGIudHMgPyAtMSA6IDEpO1xuICAgIH1cbiAgICBnZXQgbGFzdEhpc3RvcmljYWwoKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcmljYWwgPSB0aGlzLmhpc3RvcmljYWw7XG4gICAgICAgIGlmIChoaXN0b3JpY2FsLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBoaXN0b3JpY2FsW2hpc3RvcmljYWwubGVuZ3RoXS50cztcbiAgICB9XG4gICAgdXBkYXRlUHJpY2UodmFsdWUgPSB7fSkge1xuICAgICAgICB0aGlzLnByaWNlLnVwZGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZUhpc3RvcmljYWwodmFsdWUgPSBbXSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YWx1ZS5tYXAoaXRlbSA9PiBuZXcgSGlzdG9yaWNhbChpdGVtKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKG5ld0l0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLl9oaXN0b3JpY2FsLmZpbmQoaXRlbSA9PiBOdW1iZXIoaXRlbS50cykgPT09IE51bWJlcihuZXdJdGVtLnRzKSk7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGlzdG9yaWNhbC5wdXNoKG5ld0l0ZW0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRJdGVtLnVwZGF0ZVByaWNlKG5ld0l0ZW0ucHJpY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHZhbHVlLnN5bWJvbCAhPT0gdGhpcy5zeW1ib2wpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX21heCA9IHZhbHVlLm1heCAhPT0gdW5kZWZpbmVkID8gTWF0aC5tYXgocGFyc2VGbG9hdCh2YWx1ZS5tYXgpLCAwKSA6IDA7XG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZSA9IHZhbHVlLmF2YWlsYWJsZSAhPT0gdW5kZWZpbmVkID8gTWF0aC5tYXgocGFyc2VGbG9hdCh2YWx1ZS5hdmFpbGFibGUpLCAwKSA6IDA7XG4gICAgICAgIHRoaXMuX3ZvbHVtZTI0ID0gdmFsdWUudm9sdW1lMjQgIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KHBhcnNlRmxvYXQodmFsdWUudm9sdW1lMjQpLCAwKSA6IDA7XG4gICAgICAgIHRoaXMuX3RzID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS50cyk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJpY2UodmFsdWUucHJpY2UpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhpc3RvcmljYWwodmFsdWUuaGlzdG9yaWNhbCk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdGhpcy5hdmFpbGFibGUsXG4gICAgICAgICAgICBwcmljZTogdGhpcy5wcmljZS52YWx1ZU9mKCksXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvbjogdGhpcy5jYXBpdGFsaXphdGlvbixcbiAgICAgICAgICAgIHZvbHVtZTI0OiB0aGlzLnZvbHVtZTI0LFxuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICBoaXN0b3JpY2FsOiB0aGlzLmhpc3RvcmljYWwsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0aGlzLmF2YWlsYWJsZSxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxuICAgICAgICAgICAgY2FwaXRhbGl6YXRpb246IHRoaXMuY2FwaXRhbGl6YXRpb24sXG4gICAgICAgICAgICB2b2x1bWUyNDogdGhpcy52b2x1bWUyNCxcbiAgICAgICAgICAgIHRzOiB0aGlzLnRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlcXVhbChpdGVtKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpdGVtKSA9PT0gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXBpdGFsaXphdGlvbi51c2Q7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IENvaW4gdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0NvaW4nO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jb2luL2NvaW4udHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2NvaW4nO1xuZXhwb3J0ICogZnJvbSAnLi9wcmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2hpc3RvcmljYWwnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2NvaW4vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgY2xhc3MgUmF0aW5nIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIHRoaXMubGlrZSA9IE1hdGgubWF4KH5+dmFsdWUubGlrZSwgMCk7XG4gICAgICAgIHRoaXMuZGlzbGlrZSA9IE1hdGgubWF4KH5+dmFsdWUuZGlzbGlrZSwgMCk7XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlrZSAvICh0aGlzLmxpa2UgKyB0aGlzLmRpc2xpa2UpO1xuICAgIH1cbiAgICBnZXQgc3RhcnMoKSB7XG4gICAgICAgIHJldHVybiA1ICogdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpa2U6IHRoaXMubGlrZSxcbiAgICAgICAgICAgIGRpc2xpa2U6IHRoaXMuZGlzbGlrZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlrZTogdGhpcy5saWtlLFxuICAgICAgICAgICAgZGlzbGlrZTogdGhpcy5kaXNsaWtlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBSYWl0aW5nIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdSYWl0aW5nJztcbiAgICB9XG59XG5SYXRpbmcuTWFpbkZpZWxkcyA9IFtcbiAgICAnbGlrZScsXG4gICAgJ2Rpc2xpa2UnLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9yYXRpbmcvcmF0aW5nLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9yYXRpbmcnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3JhdGluZy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLnN5bWJvbCA9IFN0cmluZyh2YWx1ZS5zeW1ib2wgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy5leHRVcmwgPSBTdHJpbmcodmFsdWUuZXh0VXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBTdHJpbmcodmFsdWUudGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ1RpdGxlID0gU3RyaW5nKHZhbHVlLm9nVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nRGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUub2dEZXNjcmlwdGlvbiB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5vZ0ltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5vZ0ltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBUaW1lc3RhbXAodmFsdWUuc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5mb3VuZGVyID0gU3RyaW5nKHZhbHVlLmZvdW5kZXIgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5tYXhDb2luID0gTWF0aC5tYXgofn52YWx1ZS5tYXhDb2luLCAwKTtcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBTdHJpbmcodmFsdWUuYWxnb3JpdGhtIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuc3lzdGVtID0gU3RyaW5nKHZhbHVlLnN5c3RlbSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBTdHJpbmcodmFsdWUuY29udGVudCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgZm91bmRlcjogdGhpcy5mb3VuZGVyLFxuICAgICAgICAgICAgbWF4Q29pbjogdGhpcy5tYXhDb2luLFxuICAgICAgICAgICAgYWxnb3JpdGhtOiB0aGlzLmFsZ29yaXRobSxcbiAgICAgICAgICAgIHN5c3RlbTogdGhpcy5zeXN0ZW0sXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmlzVmFsaWQgPyB0aGlzLnN0YXJ0RGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGZvdW5kZXI6IHRoaXMuZm91bmRlcixcbiAgICAgICAgICAgIG1heENvaW46IHRoaXMubWF4Q29pbixcbiAgICAgICAgICAgIGFsZ29yaXRobTogdGhpcy5hbGdvcml0aG0sXG4gICAgICAgICAgICBzeXN0ZW06IHRoaXMuc3lzdGVtLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgQ3VycmVuY3kgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0N1cnJlbmN5JztcbiAgICB9XG59XG5DdXJyZW5jeS5NYWluRmllbGRzID0gW1xuICAgICdzeW1ib2wnLFxuICAgICdlbmFibGUnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvY3VycmVuY3kvY3VycmVuY3kudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2N1cnJlbmN5JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9jdXJyZW5jeS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gJ0Bjb3JlL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuZXhwb3J0IGNsYXNzIEV4Y2hhbmdlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmV4dFVybCA9IFN0cmluZyh2YWx1ZS5leHRVcmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5zdGFydERhdGUpO1xuICAgICAgICB0aGlzLnJlZmVycmFsID0gISF2YWx1ZS5yZWZlcnJhbDtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gU3RyaW5nKHZhbHVlLmNvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIHJlZmVycmFsOiB0aGlzLnJlZmVycmFsLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLmlzVmFsaWQgPyB0aGlzLnN0YXJ0RGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlZmVycmFsOiB0aGlzLnJlZmVycmFsLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgRXhjaGFuZ2UgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0V4Y2hhbmdlJztcbiAgICB9XG59XG5FeGNoYW5nZS5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3VybCcsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9leGNoYW5nZS9leGNoYW5nZS50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vZXhjaGFuZ2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V4Y2hhbmdlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5leHBvcnQgY2xhc3MgSUNPIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdmFsdWUuZW5hYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIHRoaXMudXJsID0gU3RyaW5nKHZhbHVlLnVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmV4dFVybCA9IFN0cmluZyh2YWx1ZS5leHRVcmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IFRpbWVzdGFtcCh2YWx1ZS5zdGFydERhdGUpO1xuICAgICAgICB0aGlzLmdvYWwgPSBNYXRoLm1heCh+fnZhbHVlLmdvYWwsIDApO1xuICAgICAgICB0aGlzLmNvbGxlY3RlZCA9IE1hdGgubWF4KH5+dmFsdWUuY29sbGVjdGVkLCAwKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBTdHJpbmcodmFsdWUuc3RhdHVzIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBnb2FsOiB0aGlzLmdvYWwsXG4gICAgICAgICAgICBjb2xsZWN0ZWQ6IHRoaXMuY29sbGVjdGVkLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBleHRVcmw6IHRoaXMuZXh0VXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkID8gdGhpcy5zdGFydERhdGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBnb2FsOiB0aGlzLmdvYWwsXG4gICAgICAgICAgICBjb2xsZWN0ZWQ6IHRoaXMuY29sbGVjdGVkLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IElDTyB2YWx1ZSB0byB1bmtub3duIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiAnSUNPJztcbiAgICB9XG59XG5JQ08uTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd1cmwnLFxuICAgICd0aXRsZScsXG4gICAgJ2ltYWdlJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYmpyJyxcbl07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvaWNvL2ljby50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vaWNvJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pY28vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdAY29yZS90aW1lc3RhbXAnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi4vcmF0aW5nJztcbmV4cG9ydCBjbGFzcyBNYXJrZXQge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZXh0VXJsID0gU3RyaW5nKHZhbHVlLmV4dFVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMucmVmZXJyYWwgPSAhIXZhbHVlLnJlZmVycmFsO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBTdHJpbmcodmFsdWUuY29udGVudCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5ianIgPSBNYXRoLm1pbihNYXRoLm1heCh+fnZhbHVlLmJqciwgMCksIDUpO1xuICAgICAgICB0aGlzLmJyYW5kaW5nID0ge307XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGV4dFVybDogdGhpcy5leHRVcmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuICAgICAgICAgICAgcmVmZXJyYWw6IHRoaXMucmVmZXJyYWwsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuaXNWYWxpZCA/IHRoaXMuc3RhcnREYXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVmZXJyYWw6IHRoaXMucmVmZXJyYWwsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBNYXJrZXQgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ01hcmtldCc7XG4gICAgfVxufVxuTWFya2V0Lk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndXJsJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL21hcmtldC9tYXJrZXQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL21hcmtldCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvbWFya2V0L2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiY29uc3QgUlVTID0gJ9GJICDRiCAg0YcgINGGICDRjiAg0Y8gINGRINC2ICDRiyDRjSDQsCDQsSDQsiDQsyDQtCDQtSDQtyDQuCDQuSDQuiDQuyDQvCDQvSDQviDQvyDRgCDRgSDRgiDRgyDRhCDRhScuc3BsaXQoL1xccysvKTtcbmNvbnN0IEVORyA9ICdzaCBzaCBjaCBjeiB5dSB5YSBlIHpoIHkgZSBhIGIgdiBnIGQgZSB6IGkgaiBrIGwgbSBuIG8gcCByIHMgdCB1IGYgeCcuc3BsaXQoL1xccysvKTtcbmV4cG9ydCBjbGFzcyBVUkxCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuVVJMQnVpbGRlci5idWlsZCA9IChpbnB1dCwgbWF4TGVuZ3RoID0gMTI4KSA9PiB7XG4gICAgbGV0IHRleHQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICdfJyk7XG4gICAgdGV4dCA9IHRleHQuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiB7XG4gICAgICAgIGxldCBpID0gUlVTLmluZGV4T2YoY2hhcik7XG4gICAgICAgIHJldHVybiBpIDwgMCA/IGNoYXIgOiBFTkdbaV07XG4gICAgfSkuam9pbignJyk7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvW14wLTlhLXpfXS9nLCAnJylcbiAgICAgICAgLnNsaWNlKDAsIG1heExlbmd0aClcbiAgICAgICAgLnJlcGxhY2UoLyheXyt8XyskKS9nLCAnJyk7XG4gICAgcmV0dXJuIHRleHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb3JlL3VybC1idWlsZGVyL3VybC1idWlsZGVyLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi91cmwtYnVpbGRlcic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvcmUvdXJsLWJ1aWxkZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBVVUlEIH0gZnJvbSAnQGNvcmUvdXVpZCc7XG5pbXBvcnQgeyBVUkxCdWlsZGVyIH0gZnJvbSAnQGNvcmUvdXJsLWJ1aWxkZXInO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5leHBvcnQgY2xhc3MgUHVibGljYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy50cyA9IG5ldyBUaW1lc3RhbXAodmFsdWUudHMpO1xuICAgICAgICB0aGlzLnVybCA9IFN0cmluZyh2YWx1ZS51cmwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUuc2VjdGlvbnMpO1xuICAgICAgICB0aGlzLmN1cnJlbmNpZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlLmN1cnJlbmNpZXMpID8gdmFsdWUuY3VycmVuY2llc1xuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gU3RyaW5nKGl0ZW0pLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gISFpdGVtKVxuICAgICAgICAgICAgOiBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5leGNoYW5nZXMgPSBVVUlELmdldEFycmF5KHZhbHVlLmV4Y2hhbmdlcyk7XG4gICAgICAgIHRoaXMuaWNvID0gVVVJRC5nZXRBcnJheSh2YWx1ZS5pY28pO1xuICAgICAgICB0aGlzLm1hcmtldHMgPSBVVUlELmdldEFycmF5KHZhbHVlLm1hcmtldHMpO1xuICAgICAgICB0aGlzLndlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUud2VpZ2h0LCAwKSwgMyk7XG4gICAgICAgIHRoaXMuYmlnVGl0bGUgPSBTdHJpbmcodmFsdWUuYmlnVGl0bGUgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuYXV0aG9ycyA9IFVVSUQuZ2V0QXJyYXkodmFsdWUuYXV0aG9ycyk7XG4gICAgICAgIHRoaXMudGFncyA9IEFycmF5LmlzQXJyYXkodmFsdWUudGFncykgPyB2YWx1ZS50YWdzXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiBTdHJpbmcoaXRlbSkudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiAhIWl0ZW0pXG4gICAgICAgICAgICA6IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnNoYXJpbmcgPSB2YWx1ZS5zaGFyaW5nID09PSB1bmRlZmluZWQgPyB0cnVlIDogISF2YWx1ZS5zaGFyaW5nO1xuICAgICAgICB0aGlzLmNvbW1lbnRzID0gdmFsdWUuY29tbWVudHMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmNvbW1lbnRzO1xuICAgICAgICB0aGlzLmFkcyA9IHZhbHVlLmFkcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuYWRzO1xuICAgICAgICB0aGlzLnJzcyA9IHZhbHVlLnJzcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUucnNzO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBTdHJpbmcodmFsdWUuY29udGVudCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnJhdGluZyA9IG5ldyBSYXRpbmcodmFsdWUucmF0aW5nKTtcbiAgICAgICAgdGhpcy5icmFuZGluZyA9IHt9O1xuICAgICAgICB0aGlzLmxhc3RNb2RpZmllZCA9IG5ldyBUaW1lc3RhbXAodmFsdWUubGFzdE1vZGlmaWVkKTtcbiAgICAgICAgaWYgKCF0aGlzLnVybClcbiAgICAgICAgICAgIHRoaXMudXJsID0gVVJMQnVpbGRlci5idWlsZCh0aGlzLnRpdGxlKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRzOiB0aGlzLnRzLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICBzZWN0aW9uczogdGhpcy5zZWN0aW9ucy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICBjdXJyZW5jaWVzOiB0aGlzLmN1cnJlbmNpZXMsXG4gICAgICAgICAgICBleGNoYW5nZXM6IHRoaXMuZXhjaGFuZ2VzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIGljbzogdGhpcy5pY28ubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgbWFya2V0czogdGhpcy5tYXJrZXRzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIHdlaWdodDogdGhpcy53ZWlnaHQsXG4gICAgICAgICAgICBiaWdUaXRsZTogdGhpcy5iaWdUaXRsZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIGF1dGhvcnM6IHRoaXMuYXV0aG9ycy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlT2YoKSksXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgICAgICBzaGFyaW5nOiB0aGlzLnNoYXJpbmcsXG4gICAgICAgICAgICBjb21tZW50czogdGhpcy5jb21tZW50cyxcbiAgICAgICAgICAgIGFkczogdGhpcy5hZHMsXG4gICAgICAgICAgICByc3M6IHRoaXMucnNzLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50XG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgdHM6IHRoaXMudHMsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHNlY3Rpb25zOiB0aGlzLnNlY3Rpb25zLFxuICAgICAgICAgICAgY3VycmVuY2llczogdGhpcy5jdXJyZW5jaWVzLFxuICAgICAgICAgICAgZXhjaGFuZ2VzOiB0aGlzLmV4Y2hhbmdlcyxcbiAgICAgICAgICAgIGljbzogdGhpcy5pY28sXG4gICAgICAgICAgICBtYXJrZXRzOiB0aGlzLm1hcmtldHMsXG4gICAgICAgICAgICB3ZWlnaHQ6IHRoaXMud2VpZ2h0LFxuICAgICAgICAgICAgYmlnVGl0bGU6IHRoaXMuYmlnVGl0bGUsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9nVGl0bGU6IHRoaXMub2dUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5vZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBvZ0ltYWdlOiB0aGlzLm9nSW1hZ2UsXG4gICAgICAgICAgICBhdXRob3JzOiB0aGlzLmF1dGhvcnMsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgICAgICBzaGFyaW5nOiB0aGlzLnNoYXJpbmcsXG4gICAgICAgICAgICBjb21tZW50czogdGhpcy5jb21tZW50cyxcbiAgICAgICAgICAgIGFkczogdGhpcy5hZHMsXG4gICAgICAgICAgICByc3M6IHRoaXMucnNzLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJyYW5kaW5nOiB0aGlzLmJyYW5kaW5nLFxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiB0aGlzLmxhc3RNb2RpZmllZC5pc1ZhbGlkID8gdGhpcy5sYXN0TW9kaWZpZWQgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFB1YmxpY2F0aW9uIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdQdWJsaWNhdGlvbic7XG4gICAgfVxufVxuUHVibGljYXRpb24uTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICd0cycsXG4gICAgJ3VybCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3NlY3Rpb25zJyxcbiAgICAnY3VycmVuY2llcycsXG4gICAgJ2V4Y2hhbmdlcycsXG4gICAgJ2ljbycsXG4gICAgJ21hcmtldHMnLFxuICAgICd3ZWlnaHQnLFxuICAgICdiaWdUaXRsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgICdpbWFnZScsXG4gICAgJ2F1dGhvcnMnLFxuICAgICd0YWdzJyxcbiAgICAncnNzJyxcbiAgICAncmF0aW5nJyxcbiAgICAnYnJhbmRpbmcnLFxuICAgICdsYXN0TW9kaWZpZWQnLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcHVibGljYXRpb24nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3B1YmxpY2F0aW9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLm9nVGl0bGUgPSBTdHJpbmcodmFsdWUub2dUaXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dEZXNjcmlwdGlvbiA9IFN0cmluZyh2YWx1ZS5vZ0Rlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLmltYWdlLCAwKSB8fCBudWxsO1xuICAgICAgICB0aGlzLm9nSW1hZ2UgPSBNYXRoLm1heCh+fnZhbHVlLm9nSW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLm9nVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9nRGVzY3JpcHRpb246IHRoaXMub2dEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgb2dJbWFnZTogdGhpcy5vZ0ltYWdlLFxuICAgICAgICAgICAgYnJhbmRpbmc6IHRoaXMuYnJhbmRpbmcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFNlY3Rpb24gdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1NlY3Rpb24nO1xuICAgIH1cbn1cblNlY3Rpb24uTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuICAgICd1cmwnLFxuICAgICd0aXRsZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3NlY3Rpb24vc2VjdGlvbi50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vc2VjdGlvbic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc2VjdGlvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFVVSUQgfSBmcm9tICdAY29yZS91dWlkJztcbmV4cG9ydCBjbGFzcyBTdGF0dXMge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmltYWdlID0gTWF0aC5tYXgofn52YWx1ZS5pbWFnZSwgMCkgfHwgbnVsbDtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KSB7XG4gICAgICAgIHN3aXRjaCAoaGludCkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBTdGF0dXMgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1N0YXR1cyc7XG4gICAgfVxufVxuU3RhdHVzLk1haW5GaWVsZHMgPSBbXG4gICAgJ2lkJyxcbiAgICAnZW5hYmxlJyxcbiAgICAndGl0bGUnLFxuICAgICdpbWFnZScsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3N0YXR1cy9zdGF0dXMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3N0YXR1cyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvc3RhdHVzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgRW51bSB9IGZyb20gJ0Bjb3JlL2VudW0nO1xuZXhwb3J0IGNsYXNzIFJvbGVFbnVtIGV4dGVuZHMgRW51bSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHZhbHVlLCBpY29uKSB7XG4gICAgICAgIHN1cGVyKGlkLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1VzZXJSb2xlJztcbiAgICB9XG59XG5Sb2xlRW51bS5Vc2VyID0gbmV3IFJvbGVFbnVtKCd1c2VyJywgJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCcsIG51bGwpO1xuUm9sZUVudW0uQXV0aG9yID0gbmV3IFJvbGVFbnVtKCdhdXRob3InLCAn0JDQstGC0L7RgCcsIG51bGwpO1xuUm9sZUVudW0uUHVibGlzaGVyID0gbmV3IFJvbGVFbnVtKCdwdWJsaXNoZXInLCAn0J/Rg9Cx0LvQuNC60LDRgtC+0YAnLCBudWxsKTtcblJvbGVFbnVtLkNoaWVmID0gbmV3IFJvbGVFbnVtKCdjaGllZicsICfQoNC10LTQsNC60YLQvtGAJywgbnVsbCk7XG5Sb2xlRW51bS5BZG1pbmlzdHJhdG9yID0gbmV3IFJvbGVFbnVtKCdhZG1pbmlzdHJhdG9yJywgJ9CQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAJywgbnVsbCk7XG5Sb2xlRW51bS5TdSA9IG5ldyBSb2xlRW51bSgnc3UnLCAnU3VwZXIgdXNlcicsIG51bGwpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3VzZXIvcm9sZS5lbnVtLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgUm9sZUVudW0gfSBmcm9tICcuL3JvbGUuZW51bSc7XG5pbXBvcnQgeyBSYXRpbmcgfSBmcm9tICcuLi9yYXRpbmcnO1xuY29uc3QgRU5VTV9QR19BUlJBWV9QQVRURVJOID0gL15cXHsoW2EtejAtOSxdKylcXH0kLztcbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IHt9KSB7XG4gICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB2YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlkID0gbmV3IFVVSUQodmFsdWUuaWQgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gISF2YWx1ZS5lbmFibGU7XG4gICAgICAgIGlmICh2YWx1ZS5yb2xlcykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBFTlVNX1BHX0FSUkFZX1BBVFRFUk4uZXhlYyh2YWx1ZS5yb2xlcyk7XG4gICAgICAgICAgICBjb25zdCByb2xlcyA9IG1hdGNoICYmIG1hdGNoWzFdLnNwbGl0KCcsJykgfHwgdmFsdWUucm9sZXM7XG4gICAgICAgICAgICB0aGlzLnJvbGVzID0gUm9sZUVudW0uZ2V0QXJyYXkocm9sZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucm9sZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy50aXRsZSA9IFN0cmluZyh2YWx1ZS50aXRsZSB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZW1haWwgPSBTdHJpbmcodmFsdWUuZW1haWwgfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5waG9uZSA9IFN0cmluZyh2YWx1ZS5waG9uZSB8fCAnJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2F1dGggPSB7fTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdHVzZXMgPSBVVUlELmdldEFycmF5KHZhbHVlLnN0YXR1c2VzKTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBuZXcgUmF0aW5nKHZhbHVlLnJhdGluZyk7XG4gICAgICAgIHRoaXMuYmpyID0gTWF0aC5taW4oTWF0aC5tYXgofn52YWx1ZS5ianIsIDApLCA1KTtcbiAgICAgICAgdGhpcy5jYXJkID0ge307XG4gICAgfVxuICAgIGNoZWNrUm9sZShyb2xlcykge1xuICAgICAgICBmb3IgKGxldCByb2xlIG9mIHJvbGVzKVxuICAgICAgICAgICAgaWYgKHRoaXMucm9sZXMuaW5jbHVkZXMocm9sZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IHZhbGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgdGhpcy5pZC52ZXJzaW9uICE9PSBudWxsO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLm1hcChpdGVtID0+IGl0ZW0udmFsdWVPZigpKSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHRoaXMuc3RhdHVzZXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgYmpyOiB0aGlzLmJqcixcbiAgICAgICAgICAgIGNhcmQ6IHRoaXMuY2FyZFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICByb2xlczogdGhpcy5yb2xlcyxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcbiAgICAgICAgICAgIG9hdXRoOiB0aGlzLm9hdXRoLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICBzdGF0dXNlczogdGhpcy5zdGF0dXNlcyxcbiAgICAgICAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICAgICAgY2FyZDogdGhpcy5jYXJkXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFVzZXIgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1VzZXInO1xuICAgIH1cbn1cblVzZXIuQW5vbnltb3VzRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndXJsJyxcbiAgICAnaW1hZ2UnLFxuICAgICdzdGF0dXNlcycsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuVXNlci5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAnZW1haWwnLFxuICAgICdwaG9uZScsXG4gICAgJ3VybCcsXG4gICAgJ3JvbGVzJyxcbiAgICAnaW1hZ2UnLFxuICAgICdzdGF0dXNlcycsXG4gICAgJ3JhdGluZycsXG4gICAgJ2JqcicsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3VzZXIvdXNlci50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcm9sZS5lbnVtJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvd2lzZG1hbi9Qcm9qZWN0cy9iaXRqb3VybmFsL2NvbW1vbi9tb2RlbHMvdXNlci9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCBjbGFzcyBWaWRlbyB7XG4gICAgY29uc3RydWN0b3IodmFsdWUgPSB7fSkge1xuICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pZCA9IFN0cmluZyh2YWx1ZS5pZCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHZhbHVlLmVuYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhdmFsdWUuZW5hYmxlO1xuICAgIH1cbiAgICB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcbiAgICAgICAgc3dpdGNoIChoaW50KSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFZpZGVvIHZhbHVlIHRvIHVua25vd24gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdWaWRlbyc7XG4gICAgfVxufVxuVmlkZW8uTWFpbkZpZWxkcyA9IFtcbiAgICAnaWQnLFxuICAgICdlbmFibGUnLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy92aWRlby92aWRlby50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vdmlkZW8nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL3ZpZGVvL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgVVVJRCB9IGZyb20gJ0Bjb3JlL3V1aWQnO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnQGNvcmUvdGltZXN0YW1wJztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4uL3JhdGluZyc7XG5leHBvcnQgY2xhc3MgRXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlID0ge30pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgVVVJRCh2YWx1ZS5pZCB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZS5lbmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIXZhbHVlLmVuYWJsZTtcbiAgICAgICAgdGhpcy51cmwgPSBTdHJpbmcodmFsdWUudXJsIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZXh0VXJsID0gU3RyaW5nKHZhbHVlLmV4dFVybCB8fCAnJykudHJpbSgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gU3RyaW5nKHZhbHVlLnRpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMub2dUaXRsZSA9IFN0cmluZyh2YWx1ZS5vZ1RpdGxlIHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5vZ0Rlc2NyaXB0aW9uID0gU3RyaW5nKHZhbHVlLm9nRGVzY3JpcHRpb24gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUuaW1hZ2UsIDApIHx8IG51bGw7XG4gICAgICAgIHRoaXMub2dJbWFnZSA9IE1hdGgubWF4KH5+dmFsdWUub2dJbWFnZSwgMCkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgVGltZXN0YW1wKHZhbHVlLnN0YXJ0RGF0ZSk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyh2YWx1ZS5jb250ZW50IHx8ICcnKS50cmltKCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbmV3IFJhdGluZyh2YWx1ZS5yYXRpbmcpO1xuICAgICAgICB0aGlzLmJqciA9IE1hdGgubWluKE1hdGgubWF4KH5+dmFsdWUuYmpyLCAwKSwgNSk7XG4gICAgICAgIHRoaXMuYnJhbmRpbmcgPSB7fTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBianI6IHRoaXMuYmpyLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5lbmFibGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgZXh0VXJsOiB0aGlzLmV4dFVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5vZ1RpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLm9nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9nSW1hZ2U6IHRoaXMub2dJbWFnZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUuaXNWYWxpZCA/IHRoaXMuc3RhcnREYXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyxcbiAgICAgICAgICAgIGJqcjogdGhpcy5ianIsXG4gICAgICAgICAgICBicmFuZGluZzogdGhpcy5icmFuZGluZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9OdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xuICAgICAgICBzd2l0Y2ggKGhpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgRXZlbnQgdmFsdWUgdG8gdW5rbm93biB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ0V2ZW50JztcbiAgICB9XG59XG5FdmVudC5NYWluRmllbGRzID0gW1xuICAgICdpZCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ3VybCcsXG4gICAgJ3RpdGxlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdyYXRpbmcnLFxuICAgICdianInLFxuXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9ldmVudC9ldmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vZXZlbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3dpc2RtYW4vUHJvamVjdHMvYml0am91cm5hbC9jb21tb24vbW9kZWxzL2V2ZW50L2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9hZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb2luJztcbmV4cG9ydCAqIGZyb20gJy4vY3VycmVuY3knO1xuZXhwb3J0ICogZnJvbSAnLi9leGNoYW5nZSc7XG5leHBvcnQgKiBmcm9tICcuL2ljbyc7XG5leHBvcnQgKiBmcm9tICcuL21hcmtldCc7XG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcmF0aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3N0YXR1cyc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuZXhwb3J0ICogZnJvbSAnLi92aWRlbyc7XG5leHBvcnQgKiBmcm9tICcuL2V2ZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy93aXNkbWFuL1Byb2plY3RzL2JpdGpvdXJuYWwvY29tbW9uL21vZGVscy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkLCBfc25hY2tCYXIpIHtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIgPSBfc25hY2tCYXI7XG4gICAgICAgIHRoaXMuaXNTZXJ2ZXIgPSBpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpO1xuICAgIH1cbiAgICBtZXNzYWdlKG1lc3NhZ2UsIGR1cmF0aW9uID0gMjAwMCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIHVuZGVmaW5lZCwgeyBkdXJhdGlvbiB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9tZXNzYWdlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEF1dGhEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAY29tbW9uL21vZGVscyc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbWVzc2FnZSc7XG5jb25zdCBBVVRIX1RPS0VOX0xTX0lEID0gJ2F1dGgtdG9rZW4nO1xuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkLCBfaHR0cCwgX21hdERpYWxvZywgX21lc3NhZ2UsIF9zbmFja0Jhcikge1xuICAgICAgICB0aGlzLl9odHRwID0gX2h0dHA7XG4gICAgICAgIHRoaXMuX21hdERpYWxvZyA9IF9tYXREaWFsb2c7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBfbWVzc2FnZTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIgPSBfc25hY2tCYXI7XG4gICAgICAgIHRoaXMuaXNTZXJ2ZXIgPSBpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpO1xuICAgIH1cbiAgICBnZXQgX2F1dGhUb2tlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXIpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShBVVRIX1RPS0VOX0xTX0lEKSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgX2F1dGhUb2tlbih2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSAmJiB2YWx1ZS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKEFVVEhfVE9LRU5fTFNfSUQsIHZhbHVlKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEFVVEhfVE9LRU5fTFNfSUQpO1xuICAgIH1cbiAgICBnZXQgYXV0aFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFRva2VuO1xuICAgIH1cbiAgICBnZXQgYXV0aEhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBhdXRoVG9rZW4gPSB0aGlzLl9hdXRoVG9rZW47XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6ICd0b2tlbiAnICsgKGF1dGhUb2tlbiB8fCAnbnVsbCcpIH0pO1xuICAgIH1cbiAgICBtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKCcvdXNlcnMvbWUnKSwgeyBoZWFkZXJzOiB0aGlzLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdERpYWxvZy5vcGVuKEF1dGhEaWFsb2dDb21wb25lbnQsIHsgZGF0YTogdGhpcyB9KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZShg0J7RiNC40LHQutCwICR7ZXJyb3Iuc3RhdHVzfTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZSgn0J7RiNC40LHQutCwINC/0YDQuNC70L7QttC10L3QuNGPJyk7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihudWxsKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IG5ldyBVc2VyKGl0ZW0pKTtcbiAgICB9XG4gICAgbG9naW4oZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKCcvYXV0aC9sb2dpbicpLCBkYXRhLCB7IGhlYWRlcnM6IHRoaXMuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLm9mKG51bGwpKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKCfQndC10LLQtdGA0L3QvtC1INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQu9C4INC/0LDRgNC+0LvRjCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2F1dGhUb2tlbiA9IGl0ZW0udG9rZW47XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5faHR0cC5nZXQoQVBJU2VydmljZS5idWlsZFBhdGgoJy9hdXRoL2xvZ291dCcpLCB7IGhlYWRlcnM6IHRoaXMuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLm9mKG51bGwpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2F1dGhUb2tlbiA9IG51bGw7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvdXNlci91c2VyLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3VzZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJsZXQgQVBJX1NFUlZFUl9WQUxVRSA9IFwiaHR0cHM6Ly9hcGkuYml0am91cm5hbC5pb1wiO1xuZXhwb3J0IGNvbnN0IEFQSV9TRVJWRVIgPSBBUElfU0VSVkVSX1ZBTFVFO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9hcGkvZW52ZXJvbWVudHMudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlcic7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2UnO1xuaW1wb3J0IHsgQVBJX1NFUlZFUiB9IGZyb20gJy4vZW52ZXJvbWVudHMnO1xuY29uc3QgUEFUSF9SRUdFWFAgPSAvXlxcLz8oLiopLztcbmV4cG9ydCBjbGFzcyBBUElTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihfaHR0cCwgX3JvdXRlciwgX3VzZXIsIF9tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICAgICAgdGhpcy5fdXNlciA9IF91c2VyO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gX21lc3NhZ2U7XG4gICAgfVxuICAgIHN0YXRpYyBidWlsZFBhdGgodmFsdWUgPSAnJykge1xuICAgICAgICBsZXQgbWF0Y2ggPSBQQVRIX1JFR0VYUC5leGVjKHZhbHVlLnRyaW0oKSk7XG4gICAgICAgIHJldHVybiBBUElfU0VSVkVSICsgJy8nICsgKG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnKTtcbiAgICB9XG4gICAgX2hhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVycm9yLnN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJzQwMzog0JTQvtGB0YLRg9C/INC30LDQv9GA0LXRidC10L0nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UubWVzc2FnZSgnNDA0OiDQrdC70LXQvNC10L3RgiDQvdC1INC90LDQudC00LXQvScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoYNCe0YjQuNCx0LrQsCAke2Vycm9yLnN0YXR1c306ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlLm1lc3NhZ2UoJ9Ce0YjQuNCx0LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRjycpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihudWxsKTtcbiAgICB9XG4gICAgZ2V0KHBhdGgsIGlucHV0UGFyYW1zID0ge30pIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBpbnB1dFBhcmFtcyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KEFQSVNlcnZpY2UuYnVpbGRQYXRoKHBhdGgpLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl91c2VyLmF1dGhIZWFkZXJzLFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xuICAgIH1cbiAgICBwb3N0KHBhdGgsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChBUElTZXJ2aWNlLmJ1aWxkUGF0aChwYXRoKSwgZGF0YSwgeyBoZWFkZXJzOiB0aGlzLl91c2VyLmF1dGhIZWFkZXJzIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xuICAgIH1cbiAgICBwdXQocGF0aCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoQVBJU2VydmljZS5idWlsZFBhdGgocGF0aCksIGRhdGEsIHsgaGVhZGVyczogdGhpcy5fdXNlci5hdXRoSGVhZGVycyB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuX2hhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG4gICAgZGVsZXRlKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKEFQSVNlcnZpY2UuYnVpbGRQYXRoKHBhdGgpLCB7IGhlYWRlcnM6IHRoaXMuX3VzZXIuYXV0aEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLl9oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvYXBpL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlJztcbmNvbnN0IEdPT0dMRV9BUElfS0VZID0gJ0FJemFTeUIyZ1k4NmhvbXQtdXZxRFFyUkEwcnU4Z3NOa1BLUmRaYyc7XG5jb25zdCBZT1VUVUJFX0RBVEFfVVJMID0gYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zP2lkPXt7SURTfX0ma2V5PSR7R09PR0xFX0FQSV9LRVl9JnBhcnQ9c25pcHBldCxzdGF0aXN0aWNzLGNvbnRlbnREZXRhaWxzYDtcbmNvbnN0IFlPVVRVQkVfVVJMX1JFR0VYUCA9IC8oPzp5b3V0dWJlXFwuY29tXFwvXFxTKig/Oig/OlxcL2UoPzptYmVkKSk/XFwvfHdhdGNoXFwvP1xcPyg/OlxcUyo/Jj92XFw9KSl8eW91dHVcXC5iZVxcLykoW2EtekEtWjAtOV8tXXs2LDExfSkvO1xuZXhwb3J0IGNsYXNzIFlvdVR1YmVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihfaHR0cCwgX21lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5faHR0cCA9IF9odHRwO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gX21lc3NhZ2U7XG4gICAgfVxuICAgIHN0YXRpYyBwYXJzZVZpZGVvSWQodGV4dCkge1xuICAgICAgICB0ZXh0ID0gdGV4dC50cmltKCk7XG4gICAgICAgIGNvbnN0IGlkTWF0Y2ggPSAvXlthLXpBLVowLTlfLV17NiwxMX0kLy5leGVjKHRleHQpO1xuICAgICAgICBpZiAoaWRNYXRjaClcbiAgICAgICAgICAgIHJldHVybiBpZE1hdGNoWzBdO1xuICAgICAgICBjb25zdCB1cmxNYXRjaCA9IFlPVVRVQkVfVVJMX1JFR0VYUC5leGVjKHRleHQpO1xuICAgICAgICBpZiAodXJsTWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gdXJsTWF0Y2hbMV07XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBmb3JtYXREdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gZHVyYXRpb24ucmVwbGFjZSgvW14wLTldKy9nLCAnOicpXG4gICAgICAgICAgICAucmVwbGFjZSgvKF46K3w6KyQpL2csICcnKTtcbiAgICB9XG4gICAgZ2V0VmlkZW9EYXRhKGlkcyA9IFtdKSB7XG4gICAgICAgIGlmIChpZHMubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihuZXcgQXJyYXkoKSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gWU9VVFVCRV9EQVRBX1VSTC5yZXBsYWNlKC9cXHtcXHtcXHMqSURTXFxzKlxcfVxcfS8sIGlkcy5qb2luKCcsJykpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQocXVlcnkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZS5tZXNzYWdlKGBZb3VUdWJlOiAke1N0cmluZyhlcnJvcil9YCk7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihudWxsKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtICYmIGl0ZW0uaXRlbXMgfHwgbnVsbClcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL3lvdXR1YmUveW91dHViZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy95b3V0dWJlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaSc7XG5jb25zdCBBUElfQkFTRSA9ICdwdWJsaWNhdGlvbnMnO1xuZXhwb3J0IGNsYXNzIFB1YmxpY2F0aW9uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoX2FwaSkge1xuICAgICAgICB0aGlzLl9hcGkgPSBfYXBpO1xuICAgIH1cbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlcbiAgICAgICAgICAgIC5nZXQoYC8ke0FQSV9CQVNFfWApXG4gICAgICAgICAgICAubWFwKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uZW5hYmxlKSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNhdGlvbi5zZXJ2aWNlJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvcHVibGljYXRpb24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL3lvdXR1YmUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY2F0aW9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmV4cG9ydCBjbGFzcyBBdXRoRGlhbG9nQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dSZWYsIGZiLCB1c2VyKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmID0gZGlhbG9nUmVmO1xuICAgICAgICB0aGlzLmZiID0gZmI7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoRm9ybS52YWxpZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy51c2VyLmxvZ2luKHRoaXMuYXV0aEZvcm0udmFsdWUpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoRm9ybS5wYXRjaFZhbHVlKHsgcGFzc3dvcmQ6ICcnIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWRpYWxvZy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2F1dGgtZGlhbG9nLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9mb290ZXIuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIExheW91dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY2xhc3MgTm9Db250ZW50Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9uby1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFBhZ2UxMDFDb21wb25lbnQge1xuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLTEwMS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFBhZ2VBcnRpY2xlQ29tcG9uZW50IHtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLWFydGljbGUuY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlRXZlbnRzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VFdmVudHNJdGVtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UtZXZlbnRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmV4cG9ydCBjbGFzcyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VJQ09Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZUlDT0l0ZW1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1pY28uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZS1pY28taXRlbS5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFB1YmxpY2F0aW9uU2VydmljZSwgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5leHBvcnQgY2xhc3MgUGFnZU1haW5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIsIF9wdWJsaWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICAgICAgdGhpcy5fcHVibGljYXRpb25TZXJ2aWNlID0gX3B1YmxpY2F0aW9uU2VydmljZTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLl9wdWJsaWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAgIC5nZXQoKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFpbi9wYWdlLW1haW4uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLW1haW4uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYWluL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGNsYXNzIFBhZ2VNYXJrZXRzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vcGFnZS1tYXJrZXRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFBhZ2VTZWN0aW9uQ29tcG9uZW50IHtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLXNlY3Rpb24uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi8xMDEnO1xuZXhwb3J0ICogZnJvbSAnLi9hcnRpY2xlJztcbmV4cG9ydCAqIGZyb20gJy4vY3VycmVuY2llcyc7XG5leHBvcnQgKiBmcm9tICcuL2V2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2V4Y2hhbmdlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ljbyc7XG5leHBvcnQgKiBmcm9tICcuL21haW4nO1xuZXhwb3J0ICogZnJvbSAnLi9tYXJrZXRzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdGlvbic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgUHViQ2FyZENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoX3JvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcHViLWNhcmQvcHViLWNhcmQuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi9wdWItY2FyZC5jb21wb25lbnQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3B1Yi1jYXJkL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZUFsbCc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlLCBZb3VUdWJlU2VydmljZSwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5jb25zdCBBUElfQkFTRSA9ICd2aWRlbyc7XG5leHBvcnQgY2xhc3MgVmlkZW9SaWJib25Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIsIF9hcGlTZXJ2aWNlLCBfeW91VHViZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZSA9IF9hcGlTZXJ2aWNlO1xuICAgICAgICB0aGlzLl95b3VUdWJlU2VydmljZSA9IF95b3VUdWJlU2VydmljZTtcbiAgICB9XG4gICAgY3JlYXRlVmlkZW9SaWJib25JdGVtKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JyArIGl0ZW0uaWQsXG4gICAgICAgICAgICB0aHVtYjogaXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmwsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShpdGVtLnNuaXBwZXQucHVibGlzaGVkQXQpLFxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uc25pcHBldC50aXRsZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBZb3VUdWJlU2VydmljZS5mb3JtYXREdXJhdGlvbihpdGVtLmNvbnRlbnREZXRhaWxzLmR1cmF0aW9uKSxcbiAgICAgICAgICAgIHZpZXc6IHBhcnNlSW50KGl0ZW0uc3RhdGlzdGljcy52aWV3Q291bnQpIHx8IDAsXG4gICAgICAgICAgICBsaWtlOiBwYXJzZUludChpdGVtLnN0YXRpc3RpY3MubGlrZUNvdW50KSB8fCAwLFxuICAgICAgICAgICAgZGlzbGlrZTogcGFyc2VJbnQoaXRlbS5zdGF0aXN0aWNzLmRpc2xpa2VDb3VudCkgfHwgMCxcbiAgICAgICAgICAgIGNvbW1lbnQ6IHBhcnNlSW50KGl0ZW0uc3RhdGlzdGljcy5jb21tZW50Q291bnQpIHx8IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5fYXBpU2VydmljZVxuICAgICAgICAgICAgLmdldChgLyR7QVBJX0JBU0V9YClcbiAgICAgICAgICAgIC5tYXAoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbmFibGUpKVxuICAgICAgICAgICAgLm1hcChpdGVtcyA9PiBpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkKSlcbiAgICAgICAgICAgIC5tYXAoaXRlbXMgPT4gdGhpcy5feW91VHViZVNlcnZpY2UuZ2V0VmlkZW9EYXRhKGl0ZW1zKSlcbiAgICAgICAgICAgIC5tZXJnZUFsbCgpXG4gICAgICAgICAgICAubWFwKGl0ZW1zID0+IGl0ZW1zLm1hcChpdGVtID0+IHRoaXMuY3JlYXRlVmlkZW9SaWJib25JdGVtKGl0ZW0pKSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0ICogZnJvbSAnLi92aWRlby1yaWJib24uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy92aWRlby1yaWJib24vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2N1cnJlbmNpZXMtcmliYm9uL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9jdXJyZW5jaWVzLXJpYmJvbi9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImV4cG9ydCAqIGZyb20gJy4vYXJ0aWNsZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgnO1xuZXhwb3J0ICogZnJvbSAnLi9mb290ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9uby1jb250ZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWItY2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvLXJpYmJvbic7XG5leHBvcnQgKiBmcm9tICcuL2N1cnJlbmNpZXMtcmliYm9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IEFydGljbGVDb21wb25lbnQsIEF1dGhEaWFsb2dDb21wb25lbnQsIEN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgTm9Db250ZW50Q29tcG9uZW50LCBQYWdlMTAxQ29tcG9uZW50LCBQYWdlQXJ0aWNsZUNvbXBvbmVudCwgUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIFBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCwgUGFnZUV2ZW50c0NvbXBvbmVudCwgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsIFBhZ2VFeGNoYW5nZXNDb21wb25lbnQsIFBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50LCBQYWdlSUNPQ29tcG9uZW50LCBQYWdlSUNPSXRlbUNvbXBvbmVudCwgUGFnZU1haW5Db21wb25lbnQsIFBhZ2VNYXJrZXRzQ29tcG9uZW50LCBQYWdlTWFya2V0c0l0ZW1Db21wb25lbnQsIFBhZ2VTZWN0aW9uQ29tcG9uZW50LCBQdWJDYXJkQ29tcG9uZW50LCBWaWRlb1JpYmJvbkNvbXBvbmVudCwgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IENPTVBPTkVOVFMgPSBbXG4gICAgQXJ0aWNsZUNvbXBvbmVudCxcbiAgICBBdXRoRGlhbG9nQ29tcG9uZW50LFxuICAgIEN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgTm9Db250ZW50Q29tcG9uZW50LFxuICAgIFBhZ2UxMDFDb21wb25lbnQsXG4gICAgUGFnZUFydGljbGVDb21wb25lbnQsXG4gICAgUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsXG4gICAgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VFdmVudHNDb21wb25lbnQsXG4gICAgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsXG4gICAgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCxcbiAgICBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCxcbiAgICBQYWdlSUNPQ29tcG9uZW50LFxuICAgIFBhZ2VJQ09JdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VNYWluQ29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZXRzQ29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCxcbiAgICBQYWdlU2VjdGlvbkNvbXBvbmVudCxcbiAgICBQdWJDYXJkQ29tcG9uZW50LFxuICAgIFZpZGVvUmliYm9uQ29tcG9uZW50LFxuXTtcbmV4cG9ydCBjb25zdCBFTlRSWV9DT01QT05FTlRTID0gW1xuICAgIEF1dGhEaWFsb2dDb21wb25lbnQsXG5dO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAuY29tcG9uZW50cy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgfSBmcm9tICcuL2FwcC5jb21wb25lbnRzJztcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAubW9kdWxlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5uby1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtYWxpZ246Y2VudGVyfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJsZXQgUkFXX1NFUlZFUl9WQUxVRSA9IFwiaHR0cHM6Ly9yYXcuYml0am91cm5hbC5pb1wiO1xuZXhwb3J0IGNvbnN0IFJBV19TRVJWRVIgPSBSQVdfU0VSVkVSX1ZBTFVFO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9pbWFnZS9lbnZlcm9tZW50cy50c1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJBV19TRVJWRVIgfSBmcm9tICcuL2VudmVyb21lbnRzJztcbmNvbnN0IFBBVEhfUkVHRVhQID0gL15cXC8/KC4qKS87XG5jb25zdCBFTVBUWV9QTkcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PSc7XG5leHBvcnQgY2xhc3MgSW1hZ2VQaXBlIHtcbiAgICB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9QTkc7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gUEFUSF9SRUdFWFAuZXhlYyhTdHJpbmcodmFsdWUpLnRyaW0oKSk7XG4gICAgICAgIGlmICghbWF0Y2gpXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfUE5HO1xuICAgICAgICByZXR1cm4gUkFXX1NFUlZFUiArICcvJyArIChtYXRjaCAmJiBtYXRjaFsxXSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9waXBlcy9pbWFnZS9pbWFnZS5waXBlLnRzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl92aWRlb19yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfY29tbW9uLC5fdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLC4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl92aWRlb19yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfY29tbW9uLC5fdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLC4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi92aWRlby1yaWJib24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vc2VydmljZXMveW91dHViZS95b3V0dWJlLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfVmlkZW9SaWJib25Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1ZpZGVvUmliYm9uQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1ZpZGVvUmliYm9uQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfVmlkZW9SaWJib25Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9WaWRlb1JpYmJvbkNvbXBvbmVudCB9O1xuZnVuY3Rpb24gVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMTAsIFwiYVwiLCBbW1wiY2xhc3NcIiwgXCJiai12aWRlby1yaWJib25fX2l0ZW1cIl0sIFtcInRhcmdldFwiLCBcIl9ibGFua1wiXV0sIFtbOCwgXCJocmVmXCIsIDRdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCA1LCBcImZpZ3VyZVwiLCBbW1wiY2xhc3NcIiwgXCJiai12aWRlby1yaWJib25fX2ZpZ3VyZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJpbWdcIiwgW1tcImNsYXNzXCIsIFwiYmotdmlkZW8tcmliYm9uX190aHVtYlwiXV0sIFtbOCwgXCJzcmNcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwiZmlnY2FwdGlvblwiLCBbW1wiY2xhc3NcIiwgXCJiai12aWRlby1yaWJib25fX2NhcHRpb24gYmotdmlkZW8tcmliYm9uX19jYXB0aW9uLS1sZWZ0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCg0LCBudWxsLCBbXCJcIiwgXCJcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJmaWdjYXB0aW9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fY2FwdGlvbiBiai12aWRlby1yaWJib25fX2NhcHRpb24tLXJpZ2h0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCg2LCBudWxsLCBbXCJcIiwgXCJcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNywgMCwgbnVsbCwgbnVsbCwgMSwgXCJ0aW1lXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fZGF0ZXRpbWVcIl1dLCBbWzEsIFwiZGF0ZXRpbWVcIiwgMF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDgsIG51bGwsIFtcIlwiLCBcIlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAxLCBcImgzXCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fdGl0bGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKDEwLCBudWxsLCBbXCJcIiwgXCJcIl0pKV0sIG51bGwsIGZ1bmN0aW9uIChfY2ssIF92KSB7IHZhciBjdXJyVmFsXzAgPSBfdi5jb250ZXh0LiRpbXBsaWNpdC5ocmVmOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzEgPSBfdi5jb250ZXh0LiRpbXBsaWNpdC50aHVtYjsgX2NrKF92LCAyLCAwLCBjdXJyVmFsXzEpOyB2YXIgY3VyclZhbF8yID0gX3YuY29udGV4dC4kaW1wbGljaXQuZHVyYXRpb247IF9jayhfdiwgNCwgMCwgY3VyclZhbF8yKTsgdmFyIGN1cnJWYWxfMyA9IF92LmNvbnRleHQuJGltcGxpY2l0Lmxpa2U7IF9jayhfdiwgNiwgMCwgY3VyclZhbF8zKTsgdmFyIGN1cnJWYWxfNCA9IF92LmNvbnRleHQuJGltcGxpY2l0LmRhdGU7IF9jayhfdiwgNywgMCwgY3VyclZhbF80KTsgdmFyIGN1cnJWYWxfNSA9IF92LmNvbnRleHQuJGltcGxpY2l0LmRhdGU7IF9jayhfdiwgOCwgMCwgY3VyclZhbF81KTsgdmFyIGN1cnJWYWxfNiA9IF92LmNvbnRleHQuJGltcGxpY2l0LnRpdGxlOyBfY2soX3YsIDEwLCAwLCBjdXJyVmFsXzYpOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDMsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLXZpZGVvLXJpYmJvbl9fd3JhcHBlclwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIG51bGwsIDIsIG51bGwsIFZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfMSkpLCBpMS7JtWRpZCgyLCA4MDI4MTYsIG51bGwsIDAsIGkyLk5nRm9yT2YsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZiwgaTEuSXRlcmFibGVEaWZmZXJzXSwgeyBuZ0Zvck9mOiBbMCwgXCJuZ0Zvck9mXCJdIH0sIG51bGwpLCBpMS7JtXBpZCgxMzEwNzIsIGkyLkFzeW5jUGlwZSwgW2kxLkNoYW5nZURldGVjdG9yUmVmXSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyB2YXIgY3VyclZhbF8wID0gaTEuybV1bnYoX3YsIDIsIDAsIGkxLsm1bm92KF92LCAzKS50cmFuc2Zvcm0oX2NvLml0ZW1zKSk7IF9jayhfdiwgMiwgMCwgY3VyclZhbF8wKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwidmlkZW8tcmliYm9uXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfVmlkZW9SaWJib25Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMy5WaWRlb1JpYmJvbkNvbXBvbmVudCwgW2k0LlJvdXRlciwgaTUuQVBJU2VydmljZSwgaTYuWW91VHViZVNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgVmlkZW9SaWJib25Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwidmlkZW8tcmliYm9uXCIsIGkzLlZpZGVvUmliYm9uQ29tcG9uZW50LCBWaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBWaWRlb1JpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSBhcyBWaWRlb1JpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlX21haW4uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLi5fLi5fLi5fcGlwZXNfaW1hZ2VfaW1hZ2UucGlwZSxfYW5ndWxhcl9jb21tb24sLi5fLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LC4uXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciwuLl8uLl8uLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsLi5fLi5fLi5fc2VydmljZXNfeW91dHViZV95b3V0dWJlLnNlcnZpY2UsLl9wYWdlX21haW4uY29tcG9uZW50LC4uXy4uXy4uX3NlcnZpY2VzX3B1YmxpY2F0aW9uX3B1YmxpY2F0aW9uLnNlcnZpY2UgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfbWFpbi5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuLl8uLl8uLl9waXBlc19pbWFnZV9pbWFnZS5waXBlLF9hbmd1bGFyX2NvbW1vbiwuLl8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksLi5fLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC4uXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSwuLl8uLl8uLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSwuX3BhZ2VfbWFpbi5jb21wb25lbnQsLi5fLi5fLi5fc2VydmljZXNfcHVibGljYXRpb25fcHVibGljYXRpb24uc2VydmljZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLW1haW4uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uLy4uL3BpcGVzL2ltYWdlL2ltYWdlLnBpcGVcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuLi8uLi92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTggZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3lvdXR1YmUveW91dHViZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpOSBmcm9tIFwiLi9wYWdlLW1haW4uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnNlcnZpY2VcIjtcbnZhciBzdHlsZXNfUGFnZU1haW5Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VNYWluQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VNYWluQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZU1haW5Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlTWFpbkNvbXBvbmVudCB9O1xuZnVuY3Rpb24gVmlld19QYWdlTWFpbkNvbXBvbmVudF8xKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMywgXCJhXCIsIFtdLCBbWzgsIFwiaHJlZlwiLCA0XV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJpbWdcIiwgW10sIFtbOCwgXCJzcmNcIiwgNF1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIGkxLsm1cHBkKDIsIDEpLCAoX2woKSgpLCBpMS7JtXRlZCgzLCBudWxsLCBbXCIgXCIsIFwiXFxuXCJdKSldLCBudWxsLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gX3YuY29udGV4dC4kaW1wbGljaXQudXJsOyBfY2soX3YsIDAsIDAsIGN1cnJWYWxfMCk7IHZhciBjdXJyVmFsXzEgPSBpMS7JtXVudihfdiwgMSwgMCwgX2NrKF92LCAyLCAwLCBpMS7JtW5vdihfdi5wYXJlbnQsIDApLCBfdi5jb250ZXh0LiRpbXBsaWNpdC5pbWFnZSkpOyBfY2soX3YsIDEsIDAsIGN1cnJWYWxfMSk7IHZhciBjdXJyVmFsXzIgPSBfdi5jb250ZXh0LiRpbXBsaWNpdC50aXRsZTsgX2NrKF92LCAzLCAwLCBjdXJyVmFsXzIpOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZU1haW5Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW2kxLsm1cGlkKDAsIGkyLkltYWdlUGlwZSwgW10pLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgVmlld19QYWdlTWFpbkNvbXBvbmVudF8xKSksIGkxLsm1ZGlkKDIsIDgwMjgxNiwgbnVsbCwgMCwgaTMuTmdGb3JPZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmLCBpMS5JdGVyYWJsZURpZmZlcnNdLCB7IG5nRm9yT2Y6IFswLCBcIm5nRm9yT2ZcIl0gfSwgbnVsbCksIGkxLsm1cGlkKDEzMTA3MiwgaTMuQXN5bmNQaXBlLCBbaTEuQ2hhbmdlRGV0ZWN0b3JSZWZdKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhc2lkZVwiLCBbW1wiY2xhc3NcIiwgXCJiai1hc2lkZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRFxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzOFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg3LCAwLCBudWxsLCBudWxsLCAxLCBcImgyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJWaWRlb1wiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCg5LCAwLCBudWxsLCBudWxsLCAxLCBcInZpZGVvLXJpYmJvblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTQuVmlld19WaWRlb1JpYmJvbkNvbXBvbmVudF8wLCBpNC5SZW5kZXJUeXBlX1ZpZGVvUmliYm9uQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEwLCAxMTQ2ODgsIG51bGwsIDAsIGk1LlZpZGVvUmliYm9uQ29tcG9uZW50LCBbaTYuUm91dGVyLCBpNy5BUElTZXJ2aWNlLCBpOC5Zb3VUdWJlU2VydmljZV0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIF9jbyA9IF92LmNvbXBvbmVudDsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1dW52KF92LCAyLCAwLCBpMS7JtW5vdihfdiwgMykudHJhbnNmb3JtKF9jby5pdGVtcykpOyBfY2soX3YsIDIsIDAsIGN1cnJWYWxfMCk7IF9jayhfdiwgMTAsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZU1haW5Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLW1haW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZU1haW5Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlTWFpbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGk5LlBhZ2VNYWluQ29tcG9uZW50LCBbaTYuUm91dGVyLCBpMTAuUHVibGljYXRpb25TZXJ2aWNlXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VNYWluQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtbWFpblwiLCBpOS5QYWdlTWFpbkNvbXBvbmVudCwgVmlld19QYWdlTWFpbkNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZU1haW5Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5uby1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtYWxpZ246Y2VudGVyfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfMTAxLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSwuLl8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLi5fLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLC4uXy4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLC5fcGFnZV8xMDEuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlXzEwMS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuLl8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksLi5fLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC4uXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSwuLl8uLl8uLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSwuX3BhZ2VfMTAxLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLTEwMS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vLi4vdmlkZW8tcmliYm9uL3ZpZGVvLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi4vLi4vdmlkZW8tcmliYm9uL3ZpZGVvLXJpYmJvbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk2IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTcgZnJvbSBcIi4vcGFnZS0xMDEuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX1BhZ2UxMDFDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2UxMDFDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZTEwMUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2UxMDFDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlMTAxQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlMTAxQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAyLCBcImFzaWRlXCIsIFtbXCJjbGFzc1wiLCBcImJqLWFzaWRlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAxLCBcImgyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFEXFx1MDQzRVxcdTA0MzJcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDM4XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwiaDJcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlZpZGVvXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDUsIDAsIG51bGwsIG51bGwsIDEsIFwidmlkZW8tcmliYm9uXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBpMi5WaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50XzAsIGkyLlJlbmRlclR5cGVfVmlkZW9SaWJib25Db21wb25lbnQpKSwgaTEuybVkaWQoNiwgMTE0Njg4LCBudWxsLCAwLCBpMy5WaWRlb1JpYmJvbkNvbXBvbmVudCwgW2k0LlJvdXRlciwgaTUuQVBJU2VydmljZSwgaTYuWW91VHViZVNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgNiwgMCk7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlMTAxQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS0xMDFcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZTEwMUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2UxMDFDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpNy5QYWdlMTAxQ29tcG9uZW50LCBbXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2UxMDFDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS0xMDFcIiwgaTcuUGFnZTEwMUNvbXBvbmVudCwgVmlld19QYWdlMTAxQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlMTAxQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2UxMDFDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy8xMDEvcGFnZS0xMDEuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLl9wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlQ3VycmVuY2llc0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlQ3VycmVuY2llc0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQ3VycmVuY2llc0NvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1jdXJyZW5jaWVzXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VDdXJyZW5jaWVzQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlQ3VycmVuY2llc0NvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlQ3VycmVuY2llc0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWN1cnJlbmNpZXNcIiwgaTIuUGFnZUN1cnJlbmNpZXNDb21wb25lbnQsIFZpZXdfUGFnZUN1cnJlbmNpZXNDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2FydGljbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX0FydGljbGVDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfQXJ0aWNsZUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9BcnRpY2xlQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19BcnRpY2xlQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtdLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImFydGljbGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfQXJ0aWNsZUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5BcnRpY2xlQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIEFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiYXJ0aWNsZVwiLCBpMi5BcnRpY2xlQ29tcG9uZW50LCBWaWV3X0FydGljbGVDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IEFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgYXMgQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LC4uXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC5fcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlX2N1cnJlbmNpZXNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuLl8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSwuLl8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciwuX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTIuVmlld19BcnRpY2xlQ29tcG9uZW50XzAsIGkyLlJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkzLkFydGljbGVDb21wb25lbnQsIFtpNC5Sb3V0ZXJdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhc2lkZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtY3VycmVuY2llcy1pdGVtXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGk1LlBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlQ3VycmVuY2llc0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1jdXJyZW5jaWVzLWl0ZW1cIiwgaTUuUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50LCBWaWV3X1BhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUN1cnJlbmNpZXNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlX2V2ZW50cy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuX3BhZ2VfZXZlbnRzLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfZXZlbnRzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC5fcGFnZV9ldmVudHMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWV2ZW50cy5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9wYWdlLWV2ZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfUGFnZUV2ZW50c0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUV2ZW50c0NvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlRXZlbnRzQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUV2ZW50c0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VFdmVudHNDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFdmVudHNDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgW10sIG51bGwsIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXZlbnRzQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1ldmVudHNcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUV2ZW50c0NvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VFdmVudHNDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlRXZlbnRzQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VFdmVudHNDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1ldmVudHNcIiwgaTIuUGFnZUV2ZW50c0NvbXBvbmVudCwgVmlld19QYWdlRXZlbnRzQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlRXZlbnRzQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VFdmVudHNDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLi5fLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksLi5fLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLl9wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuLl8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSwuLl8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciwuX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4vcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV2ZW50c0l0ZW1Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgaTIuVmlld19BcnRpY2xlQ29tcG9uZW50XzAsIGkyLlJlbmRlclR5cGVfQXJ0aWNsZUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkzLkFydGljbGVDb21wb25lbnQsIFtpNC5Sb3V0ZXJdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMiwgMCwgbnVsbCwgbnVsbCwgMCwgXCJhc2lkZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1ldmVudHMtaXRlbVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlRXZlbnRzSXRlbUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VFdmVudHNJdGVtQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTUuUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQsIFtpNC5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1ldmVudHMtaXRlbVwiLCBpNS5QYWdlRXZlbnRzSXRlbUNvbXBvbmVudCwgVmlld19QYWdlRXZlbnRzSXRlbUNvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUV2ZW50c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC5fcGFnZV9leGNoYW5nZXMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fcGFnZV9leGNoYW5nZXMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLl9wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL3BhZ2UtZXhjaGFuZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VFeGNoYW5nZXNDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VFeGNoYW5nZXNDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLWV4Y2hhbmdlc1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlRXhjaGFuZ2VzQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLlBhZ2VFeGNoYW5nZXNDb21wb25lbnQsIFtpMy5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWV4Y2hhbmdlc1wiLCBpMi5QYWdlRXhjaGFuZ2VzQ29tcG9uZW50LCBWaWV3X1BhZ2VFeGNoYW5nZXNDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VFeGNoYW5nZXNDb21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZUV4Y2hhbmdlc0NvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuLl8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSwuLl8uLl9hcnRpY2xlX2FydGljbGUuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciwuX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LC4uXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC5fcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJhcnRpY2xlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBpMi5WaWV3X0FydGljbGVDb21wb25lbnRfMCwgaTIuUmVuZGVyVHlwZV9BcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTMuQXJ0aWNsZUNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImFzaWRlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJwYWdlLWV4Y2hhbmdlcy1pdGVtXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZUV4Y2hhbmdlc0l0ZW1Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpNS5QYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLWV4Y2hhbmdlcy1pdGVtXCIsIGk1LlBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50LCBWaWV3X1BhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlRXhjaGFuZ2VzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2V4Y2hhbmdlcy9wYWdlLWV4Y2hhbmdlcy1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fcGFnZV9pY28uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLl9wYWdlX2ljby5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlX2ljby5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuX3BhZ2VfaWNvLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1pY28uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1pY28uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG52YXIgc3R5bGVzX1BhZ2VJQ09Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VJQ09Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZUlDT0NvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VJQ09Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlSUNPQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlSUNPQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFtdLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZUlDT0NvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtaWNvXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VJQ09Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlSUNPQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTIuUGFnZUlDT0NvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlSUNPQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtaWNvXCIsIGkyLlBhZ2VJQ09Db21wb25lbnQsIFZpZXdfUGFnZUlDT0NvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgUGFnZUlDT0NvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlSUNPQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlX2ljb19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LC4uXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC5fcGFnZV9pY29faXRlbS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLi5fLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksLi5fLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLl9wYWdlX2ljb19pdGVtLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uLy4uL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX1BhZ2VJQ09JdGVtQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlSUNPSXRlbUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlSUNPSXRlbUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VJQ09JdGVtQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUlDT0l0ZW1Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VJQ09JdGVtQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImFydGljbGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGkyLlZpZXdfQXJ0aWNsZUNvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX0FydGljbGVDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMy5BcnRpY2xlQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDAsIFwiYXNpZGVcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlSUNPSXRlbUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtaWNvLWl0ZW1cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZUlDT0l0ZW1Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9QYWdlSUNPSXRlbUNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGk1LlBhZ2VJQ09JdGVtQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VJQ09JdGVtQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcInBhZ2UtaWNvLWl0ZW1cIiwgaTUuUGFnZUlDT0l0ZW1Db21wb25lbnQsIFZpZXdfUGFnZUlDT0l0ZW1Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VJQ09JdGVtQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VJQ09JdGVtQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfbWFya2V0cy5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuX3BhZ2VfbWFya2V0cy5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9wYWdlX21hcmtldHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLl9wYWdlX21hcmtldHMuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLW1hcmtldHMuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4vcGFnZS1tYXJrZXRzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19QYWdlTWFya2V0c0NvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfUGFnZU1hcmtldHNDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfUGFnZU1hcmtldHNDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0NvbXBvbmVudCBhcyBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlTWFya2V0c0NvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYXJrZXRzQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1tYXJrZXRzXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VNYXJrZXRzQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZU1hcmtldHNDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpMi5QYWdlTWFya2V0c0NvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlTWFya2V0c0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLW1hcmtldHNcIiwgaTIuUGFnZU1hcmtldHNDb21wb25lbnQsIFZpZXdfUGFnZU1hcmtldHNDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VNYXJrZXRzQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VNYXJrZXRzQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLi5fLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnksLi5fLi5fYXJ0aWNsZV9hcnRpY2xlLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLl9wYWdlX21hcmtldHNfaXRlbS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LC4uXy4uX2FydGljbGVfYXJ0aWNsZS5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC5fcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uLy4uL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJhcnRpY2xlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBpMi5WaWV3X0FydGljbGVDb21wb25lbnRfMCwgaTIuUmVuZGVyVHlwZV9BcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTMuQXJ0aWNsZUNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImFzaWRlXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1tYXJrZXRzLWl0ZW1cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTUuUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIFBhZ2VNYXJrZXRzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLW1hcmtldHMtaXRlbVwiLCBpNS5QYWdlTWFya2V0c0l0ZW1Db21wb25lbnQsIFZpZXdfUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlTWFya2V0c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnkgYXMgUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIi5uby1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RleHQtYWxpZ246Y2VudGVyfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdlcy9zZWN0aW9uL3BhZ2Utc2VjdGlvbi5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fcGFnZV9zZWN0aW9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSwuLl8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLi5fLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLC4uXy4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLC5fcGFnZV9zZWN0aW9uLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fcGFnZV9zZWN0aW9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uXy4uX3ZpZGVvX3JpYmJvbl92aWRlb19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSwuLl8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLi5fLi5fLi5fc2VydmljZXNfYXBpX2FwaS5zZXJ2aWNlLC4uXy4uXy4uX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLC5fcGFnZV9zZWN0aW9uLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9wYWdlLXNlY3Rpb24uY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uLy4uL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uLy4uL3ZpZGVvLXJpYmJvbi92aWRlby1yaWJib24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMveW91dHViZS95b3V0dWJlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuL3BhZ2Utc2VjdGlvbi5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfUGFnZVNlY3Rpb25Db21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX1BhZ2VTZWN0aW9uQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX1BhZ2VTZWN0aW9uQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfUGFnZVNlY3Rpb25Db21wb25lbnQgYXMgUmVuZGVyVHlwZV9QYWdlU2VjdGlvbkNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfUGFnZVNlY3Rpb25Db21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDIsIFwiYXNpZGVcIiwgW1tcImNsYXNzXCIsIFwiYmotYXNpZGVcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDEsIFwiaDJcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MURcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMCwgbnVsbCwgbnVsbCwgMSwgXCJoMlwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiVmlkZW9cIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNSwgMCwgbnVsbCwgbnVsbCwgMSwgXCJ2aWRlby1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGkyLlZpZXdfVmlkZW9SaWJib25Db21wb25lbnRfMCwgaTIuUmVuZGVyVHlwZV9WaWRlb1JpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCg2LCAxMTQ2ODgsIG51bGwsIDAsIGkzLlZpZGVvUmliYm9uQ29tcG9uZW50LCBbaTQuUm91dGVyLCBpNS5BUElTZXJ2aWNlLCBpNi5Zb3VUdWJlU2VydmljZV0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCA2LCAwKTsgfSwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VTZWN0aW9uQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwicGFnZS1zZWN0aW9uXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X1BhZ2VTZWN0aW9uQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfUGFnZVNlY3Rpb25Db21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpNy5QYWdlU2VjdGlvbkNvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBQYWdlU2VjdGlvbkNvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJwYWdlLXNlY3Rpb25cIiwgaTcuUGFnZVNlY3Rpb25Db21wb25lbnQsIFZpZXdfUGFnZVNlY3Rpb25Db21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IFBhZ2VTZWN0aW9uQ29tcG9uZW50TmdGYWN0b3J5IGFzIFBhZ2VTZWN0aW9uQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCIubm8tY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcn1cIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuLl8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksLi5fLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC4uXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSwuLl8uLl8uLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSwuX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuLl8uLl92aWRlb19yaWJib25fdmlkZW9fcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnksLi5fLi5fdmlkZW9fcmliYm9uX3ZpZGVvX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyLC4uXy4uXy4uX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSwuLl8uLl8uLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSwuX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vcGFnZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuLi8uLi92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi92aWRlby1yaWJib24vdmlkZW8tcmliYm9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTQgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaS9hcGkuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3lvdXR1YmUveW91dHViZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNyBmcm9tIFwiLi9wYWdlLWFydGljbGUuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX1BhZ2VBcnRpY2xlQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9QYWdlQXJ0aWNsZUNvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19QYWdlQXJ0aWNsZUNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX1BhZ2VBcnRpY2xlQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfUGFnZUFydGljbGVDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X1BhZ2VBcnRpY2xlQ29tcG9uZW50XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAyLCBcImFzaWRlXCIsIFtbXCJjbGFzc1wiLCBcImJqLWFzaWRlXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAxLCBcImgyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFEXFx1MDQzRVxcdTA0MzJcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDM4XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwiaDJcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlZpZGVvXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDUsIDAsIG51bGwsIG51bGwsIDEsIFwidmlkZW8tcmliYm9uXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBpMi5WaWV3X1ZpZGVvUmliYm9uQ29tcG9uZW50XzAsIGkyLlJlbmRlclR5cGVfVmlkZW9SaWJib25Db21wb25lbnQpKSwgaTEuybVkaWQoNiwgMTE0Njg4LCBudWxsLCAwLCBpMy5WaWRlb1JpYmJvbkNvbXBvbmVudCwgW2k0LlJvdXRlciwgaTUuQVBJU2VydmljZSwgaTYuWW91VHViZVNlcnZpY2VdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgNiwgMCk7IH0sIG51bGwpOyB9XG5leHBvcnQgZnVuY3Rpb24gVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcInBhZ2UtYXJ0aWNsZVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19QYWdlQXJ0aWNsZUNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX1BhZ2VBcnRpY2xlQ29tcG9uZW50KSksIGkxLsm1ZGlkKDEsIDExNDY4OCwgbnVsbCwgMCwgaTcuUGFnZUFydGljbGVDb21wb25lbnQsIFtdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgUGFnZUFydGljbGVDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwicGFnZS1hcnRpY2xlXCIsIGk3LlBhZ2VBcnRpY2xlQ29tcG9uZW50LCBWaWV3X1BhZ2VBcnRpY2xlQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBQYWdlQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSBhcyBQYWdlQXJ0aWNsZUNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3BhZ2VzL2FydGljbGUvcGFnZS1hcnRpY2xlLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLm5vLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXJ9XCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fbm9fY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGUsX2FuZ3VsYXJfY29yZSwuX25vX2NvbnRlbnQuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9ub19jb250ZW50LmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC5fbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vbm8tY29udGVudC5jb21wb25lbnQuY3NzLm5nc3R5bGVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9uby1jb250ZW50LmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19Ob0NvbnRlbnRDb21wb25lbnQgPSBbaTAuc3R5bGVzXTtcbnZhciBSZW5kZXJUeXBlX05vQ29udGVudENvbXBvbmVudCA9IC8qQF9fUFVSRV9fKi8gaTEuybVjcnQoeyBlbmNhcHN1bGF0aW9uOiAyLCBzdHlsZXM6IHN0eWxlc19Ob0NvbnRlbnRDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9Ob0NvbnRlbnRDb21wb25lbnQgYXMgUmVuZGVyVHlwZV9Ob0NvbnRlbnRDb21wb25lbnQgfTtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3X05vQ29udGVudENvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMywgXCJoMVwiLCBbW1wiY2xhc3NcIiwgXCJuby1jb250ZW50XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiNDA0XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDAsIFwiYnJcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlBhZ2Ugbm90IGZvdW50XCJdKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTm9Db250ZW50Q29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwibm8tY29udGVudFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19Ob0NvbnRlbnRDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9Ob0NvbnRlbnRDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgNDkxNTIsIG51bGwsIDAsIGkyLk5vQ29udGVudENvbXBvbmVudCwgW10sIG51bGwsIG51bGwpXSwgbnVsbCwgbnVsbCk7IH1cbnZhciBOb0NvbnRlbnRDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwibm8tY29udGVudFwiLCBpMi5Ob0NvbnRlbnRDb21wb25lbnQsIFZpZXdfTm9Db250ZW50Q29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBOb0NvbnRlbnRDb21wb25lbnROZ0ZhY3RvcnkgYXMgTm9Db250ZW50Q29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiLmF1dGgtZm9ybS10aXRsZVtfbmdjb250ZW50LSVDT01QJV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyfS5hdXRoLWZvcm1bX25nY29udGVudC0lQ09NUCVde21pbi13aWR0aDozMDBweH0uYXV0aC1mb3JtLXJvd1tfbmdjb250ZW50LSVDT01QJV17bWFyZ2luLXRvcDoxMHB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0uYXV0aC1mb3JtLXJvd1tfbmdjb250ZW50LSVDT01QJV06Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDowfS5hdXRoLWZvcm0tYnV0dG9uW19uZ2NvbnRlbnQtJUNPTVAlXXttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvfVwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX2F1dGhfZGlhbG9nLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZCxfYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2csX2FuZ3VsYXJfZm9ybXMsLi5fLi5fLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGRfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2FuZ3VsYXJfbWF0ZXJpYWxfY29yZSxfYW5ndWxhcl9tYXRlcmlhbF9pbnB1dCxfYW5ndWxhcl9jZGtfcGxhdGZvcm0sX2FuZ3VsYXJfY29tbW9uLC4uXy4uXy4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9idXR0b25fdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uLF9hbmd1bGFyX2Nka19hMTF5LC5fYXV0aF9kaWFsb2cuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9hdXRoX2RpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX21hdGVyaWFsX2Zvcm1fZmllbGQsX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nLF9hbmd1bGFyX2Zvcm1zLC4uXy4uXy4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9hbmd1bGFyX21hdGVyaWFsX2NvcmUsX2FuZ3VsYXJfbWF0ZXJpYWxfaW5wdXQsX2FuZ3VsYXJfY2RrX3BsYXRmb3JtLF9hbmd1bGFyX2NvbW1vbiwuLl8uLl8uLl8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfYnV0dG9uX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LF9hbmd1bGFyX21hdGVyaWFsX2J1dHRvbixfYW5ndWxhcl9jZGtfYTExeSwuX2F1dGhfZGlhbG9nLmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9hdXRoLWRpYWxvZy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBpMyBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAqIGFzIGk1IGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZC90eXBpbmdzL2luZGV4Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTYgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xuaW1wb3J0ICogYXMgaTggZnJvbSBcIkBhbmd1bGFyL2Nkay9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgaTkgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTEwIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uL3R5cGluZ3MvaW5kZXgubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTEgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0ICogYXMgaTEyIGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xuaW1wb3J0ICogYXMgaTEzIGZyb20gXCIuL2F1dGgtZGlhbG9nLmNvbXBvbmVudFwiO1xudmFyIHN0eWxlc19BdXRoRGlhbG9nQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9BdXRoRGlhbG9nQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDAsIHN0eWxlczogc3R5bGVzX0F1dGhEaWFsb2dDb21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9BdXRoRGlhbG9nQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfQXV0aERpYWxvZ0NvbXBvbmVudCB9O1xuZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzEoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA0LCBcIm1hdC1lcnJvclwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtZXJyb3JcIl0sIFtcInJvbGVcIiwgXCJhbGVydFwiXV0sIFtbMSwgXCJpZFwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMSwgMTYzODQsIFtbMywgNF1dLCAwLCBpMi5NYXRFcnJvciwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiRW1haWwgaXMgXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwic3Ryb25nXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJyZXF1aXJlZFwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5pZDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzIoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAyLCBcIm1hdC1lcnJvclwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtZXJyb3JcIl0sIFtcInJvbGVcIiwgXCJhbGVydFwiXV0sIFtbMSwgXCJpZFwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMSwgMTYzODQsIFtbMywgNF1dLCAwLCBpMi5NYXRFcnJvciwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5pZDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZnVuY3Rpb24gVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzMoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCA0LCBcIm1hdC1lcnJvclwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtZXJyb3JcIl0sIFtcInJvbGVcIiwgXCJhbGVydFwiXV0sIFtbMSwgXCJpZFwiLCAwXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMSwgMTYzODQsIFtbOSwgNF1dLCAwLCBpMi5NYXRFcnJvciwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiUGFzc3dvcmQgaXMgXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDMsIDAsIG51bGwsIG51bGwsIDEsIFwic3Ryb25nXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJyZXF1aXJlZFwiXSkpXSwgbnVsbCwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5pZDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8wKF9sKSB7XG4gICAgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAyLCBcImgxXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybS10aXRsZSBtYXQtZGlhbG9nLXRpdGxlXCJdLCBbXCJtYXQtZGlhbG9nLXRpdGxlXCIsIFwiXCJdXSwgW1s4LCBcImlkXCIsIDBdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxLCA4MTkyMCwgbnVsbCwgMCwgaTMuTWF0RGlhbG9nVGl0bGUsIFtbMiwgaTMuTWF0RGlhbG9nQ29udGFpbmVyXV0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiQXV0aG9yaXphdGlvblwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCA0NCwgXCJmb3JtXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybSBtYXQtZGlhbG9nLWNvbnRlbnRcIl0sIFtcIm1hdC1kaWFsb2ctY29udGVudFwiLCBcIlwiXSwgW1wibm92YWxpZGF0ZVwiLCBcIlwiXV0sIFtbMiwgXCJuZy11bnRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXByaXN0aW5lXCIsIG51bGxdLCBbMiwgXCJuZy1kaXJ0eVwiLCBudWxsXSwgWzIsIFwibmctdmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLXBlbmRpbmdcIiwgbnVsbF1dLCBbW251bGwsIFwibmdTdWJtaXRcIl0sIFtudWxsLCBcInN1Ym1pdFwiXSwgW251bGwsIFwicmVzZXRcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2NvID0gX3YuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKChcInN1Ym1pdFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgNSkub25TdWJtaXQoJGV2ZW50KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcInJlc2V0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8xID0gKGkxLsm1bm92KF92LCA1KS5vblJlc2V0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8xICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJuZ1N1Ym1pdFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMiA9IChfY28ub25TdWJtaXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzIgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDQsIDE2Mzg0LCBudWxsLCAwLCBpNC7JtWJmLCBbXSwgbnVsbCwgbnVsbCksIGkxLsm1ZGlkKDUsIDU0MDY3MiwgbnVsbCwgMCwgaTQuRm9ybUdyb3VwRGlyZWN0aXZlLCBbWzgsIG51bGxdLCBbOCwgbnVsbF1dLCB7IGZvcm06IFswLCBcImZvcm1cIl0gfSwgeyBuZ1N1Ym1pdDogXCJuZ1N1Ym1pdFwiIH0pLCBpMS7JtXByZCgyMDQ4LCBudWxsLCBpNC5Db250cm9sQ29udGFpbmVyLCBudWxsLCBbaTQuRm9ybUdyb3VwRGlyZWN0aXZlXSksIGkxLsm1ZGlkKDcsIDE2Mzg0LCBudWxsLCAwLCBpNC5OZ0NvbnRyb2xTdGF0dXNHcm91cCwgW2k0LkNvbnRyb2xDb250YWluZXJdLCBudWxsLCBudWxsKSwgaTEuybVkaWQoOCwgMTYzODQsIG51bGwsIDAsIGkzLk1hdERpYWxvZ0NvbnRlbnQsIFtdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoOSwgMCwgbnVsbCwgbnVsbCwgMTksIFwibWF0LWZvcm0tZmllbGRcIiwgW1tcImNsYXNzXCIsIFwiYXV0aC1mb3JtLXJvdyBtYXQtaW5wdXQtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkXCJdXSwgW1syLCBcIm1hdC1pbnB1dC1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1pbnZhbGlkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1jYW4tZmxvYXRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtZGlzYWJsZWRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb2N1c2VkXCIsIG51bGxdLCBbMiwgXCJtYXQtcHJpbWFyeVwiLCBudWxsXSwgWzIsIFwibWF0LWFjY2VudFwiLCBudWxsXSwgWzIsIFwibWF0LXdhcm5cIiwgbnVsbF0sIFsyLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXV0sIG51bGwsIG51bGwsIGk1LlZpZXdfTWF0Rm9ybUZpZWxkXzAsIGk1LlJlbmRlclR5cGVfTWF0Rm9ybUZpZWxkKSksIGkxLsm1ZGlkKDEwLCA3Mzg5MTg0LCBudWxsLCA2LCBpMi5NYXRGb3JtRmllbGQsIFtpMS5FbGVtZW50UmVmLCBpMS5DaGFuZ2VEZXRlY3RvclJlZiwgWzIsIGk2Lk1BVF9QTEFDRUhPTERFUl9HTE9CQUxfT1BUSU9OU11dLCBudWxsLCBudWxsKSwgaTEuybVxdWQoMzM1NTQ0MzIwLCAxLCB7IF9jb250cm9sOiAwIH0pLCBpMS7JtXF1ZCgzMzU1NDQzMjAsIDIsIHsgX3BsYWNlaG9sZGVyQ2hpbGQ6IDAgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgMywgeyBfZXJyb3JDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCA0LCB7IF9oaW50Q2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgNSwgeyBfcHJlZml4Q2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgNiwgeyBfc3VmZml4Q2hpbGRyZW46IDEgfSksIChfbCgpKCksIGkxLsm1ZWxkKDE3LCAwLCBudWxsLCAxLCA3LCBcImlucHV0XCIsIFtbXCJjbGFzc1wiLCBcIm1hdC1pbnB1dC1lbGVtZW50IG1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2xcIl0sIFtcImZvcm1Db250cm9sTmFtZVwiLCBcImVtYWlsXCJdLCBbXCJtYXRJbnB1dFwiLCBcIlwiXSwgW1wicGxhY2Vob2xkZXJcIiwgXCJFLW1haWxcIl0sIFtcInR5cGVcIiwgXCJ0ZXh0XCJdXSwgW1syLCBcIm5nLXVudG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctdG91Y2hlZFwiLCBudWxsXSwgWzIsIFwibmctcHJpc3RpbmVcIiwgbnVsbF0sIFsyLCBcIm5nLWRpcnR5XCIsIG51bGxdLCBbMiwgXCJuZy12YWxpZFwiLCBudWxsXSwgWzIsIFwibmctaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibmctcGVuZGluZ1wiLCBudWxsXSwgWzEsIFwiaWRcIiwgMF0sIFs4LCBcInBsYWNlaG9sZGVyXCIsIDBdLCBbOCwgXCJkaXNhYmxlZFwiLCAwXSwgWzgsIFwicmVxdWlyZWRcIiwgMF0sIFs4LCBcInJlYWRPbmx5XCIsIDBdLCBbMSwgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIDBdLCBbMSwgXCJhcmlhLWludmFsaWRcIiwgMF0sIFsxLCBcImFyaWEtcmVxdWlyZWRcIiwgMF1dLCBbW251bGwsIFwiaW5wdXRcIl0sIFtudWxsLCBcImJsdXJcIl0sIFtudWxsLCBcImNvbXBvc2l0aW9uc3RhcnRcIl0sIFtudWxsLCBcImNvbXBvc2l0aW9uZW5kXCJdLCBbbnVsbCwgXCJmb2N1c1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJpbnB1dFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMTgpLl9oYW5kbGVJbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImJsdXJcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzEgPSAoaTEuybVub3YoX3YsIDE4KS5vblRvdWNoZWQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzEgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImNvbXBvc2l0aW9uc3RhcnRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzIgPSAoaTEuybVub3YoX3YsIDE4KS5fY29tcG9zaXRpb25TdGFydCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiY29tcG9zaXRpb25lbmRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzMgPSAoaTEuybVub3YoX3YsIDE4KS5fY29tcG9zaXRpb25FbmQoJGV2ZW50LnRhcmdldC52YWx1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8zICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJibHVyXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF80ID0gKGkxLsm1bm92KF92LCAyMykuX2ZvY3VzQ2hhbmdlZChmYWxzZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF80ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJmb2N1c1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNSA9IChpMS7JtW5vdihfdiwgMjMpLl9mb2N1c0NoYW5nZWQodHJ1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF81ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJpbnB1dFwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNiA9IChpMS7JtW5vdihfdiwgMjMpLl9vbklucHV0KCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF82ICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxOCwgMTYzODQsIG51bGwsIDAsIGk0LkRlZmF1bHRWYWx1ZUFjY2Vzc29yLCBbaTEuUmVuZGVyZXIyLCBpMS5FbGVtZW50UmVmLCBbMiwgaTQuQ09NUE9TSVRJT05fQlVGRkVSX01PREVdXSwgbnVsbCwgbnVsbCksIGkxLsm1cHJkKDEwMjQsIG51bGwsIGk0Lk5HX1ZBTFVFX0FDQ0VTU09SLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTQuRGVmYXVsdFZhbHVlQWNjZXNzb3JdKSwgaTEuybVkaWQoMjAsIDY3MTc0NCwgbnVsbCwgMCwgaTQuRm9ybUNvbnRyb2xOYW1lLCBbWzMsIGk0LkNvbnRyb2xDb250YWluZXJdLCBbOCwgbnVsbF0sIFs4LCBudWxsXSwgWzIsIGk0Lk5HX1ZBTFVFX0FDQ0VTU09SXV0sIHsgbmFtZTogWzAsIFwibmFtZVwiXSB9LCBudWxsKSwgaTEuybVwcmQoMjA0OCwgbnVsbCwgaTQuTmdDb250cm9sLCBudWxsLCBbaTQuRm9ybUNvbnRyb2xOYW1lXSksIGkxLsm1ZGlkKDIyLCAxNjM4NCwgbnVsbCwgMCwgaTQuTmdDb250cm9sU3RhdHVzLCBbaTQuTmdDb250cm9sXSwgbnVsbCwgbnVsbCksIGkxLsm1ZGlkKDIzLCA5MzM4ODgsIG51bGwsIDAsIGk3Lk1hdElucHV0LCBbaTEuRWxlbWVudFJlZiwgaTguUGxhdGZvcm0sIFsyLCBpNC5OZ0NvbnRyb2xdLCBbMiwgaTQuTmdGb3JtXSwgWzIsIGk0LkZvcm1Hcm91cERpcmVjdGl2ZV0sIGk2LkVycm9yU3RhdGVNYXRjaGVyLCBbOCwgbnVsbF1dLCB7IHBsYWNlaG9sZGVyOiBbMCwgXCJwbGFjZWhvbGRlclwiXSwgdHlwZTogWzEsIFwidHlwZVwiXSB9LCBudWxsKSwgaTEuybVwcmQoMjA0OCwgW1sxLCA0XV0sIGkyLk1hdEZvcm1GaWVsZENvbnRyb2wsIG51bGwsIFtpNy5NYXRJbnB1dF0pLCAoX2woKSgpLCBpMS7JtWFuZCgxNjc3NzIxNiwgbnVsbCwgNCwgMSwgbnVsbCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzEpKSwgaTEuybVkaWQoMjYsIDE2Mzg0LCBudWxsLCAwLCBpOS5OZ0lmLCBbaTEuVmlld0NvbnRhaW5lclJlZiwgaTEuVGVtcGxhdGVSZWZdLCB7IG5nSWY6IFswLCBcIm5nSWZcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1YW5kKDE2Nzc3MjE2LCBudWxsLCA0LCAxLCBudWxsLCBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfMikpLCBpMS7JtWRpZCgyOCwgMTYzODQsIG51bGwsIDAsIGk5Lk5nSWYsIFtpMS5WaWV3Q29udGFpbmVyUmVmLCBpMS5UZW1wbGF0ZVJlZl0sIHsgbmdJZjogWzAsIFwibmdJZlwiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoMjksIDAsIG51bGwsIG51bGwsIDE3LCBcIm1hdC1mb3JtLWZpZWxkXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybS1yb3cgbWF0LWlucHV0LWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZFwiXV0sIFtbMiwgXCJtYXQtaW5wdXQtaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtaW52YWxpZFwiLCBudWxsXSwgWzIsIFwibWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0XCIsIG51bGxdLCBbMiwgXCJtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXRcIiwgbnVsbF0sIFsyLCBcIm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkXCIsIG51bGxdLCBbMiwgXCJtYXQtZm9jdXNlZFwiLCBudWxsXSwgWzIsIFwibWF0LXByaW1hcnlcIiwgbnVsbF0sIFsyLCBcIm1hdC1hY2NlbnRcIiwgbnVsbF0sIFsyLCBcIm1hdC13YXJuXCIsIG51bGxdLCBbMiwgXCJuZy11bnRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXByaXN0aW5lXCIsIG51bGxdLCBbMiwgXCJuZy1kaXJ0eVwiLCBudWxsXSwgWzIsIFwibmctdmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLXBlbmRpbmdcIiwgbnVsbF1dLCBudWxsLCBudWxsLCBpNS5WaWV3X01hdEZvcm1GaWVsZF8wLCBpNS5SZW5kZXJUeXBlX01hdEZvcm1GaWVsZCkpLCBpMS7JtWRpZCgzMCwgNzM4OTE4NCwgbnVsbCwgNiwgaTIuTWF0Rm9ybUZpZWxkLCBbaTEuRWxlbWVudFJlZiwgaTEuQ2hhbmdlRGV0ZWN0b3JSZWYsIFsyLCBpNi5NQVRfUExBQ0VIT0xERVJfR0xPQkFMX09QVElPTlNdXSwgbnVsbCwgbnVsbCksIGkxLsm1cXVkKDMzNTU0NDMyMCwgNywgeyBfY29udHJvbDogMCB9KSwgaTEuybVxdWQoMzM1NTQ0MzIwLCA4LCB7IF9wbGFjZWhvbGRlckNoaWxkOiAwIH0pLCBpMS7JtXF1ZCg2MDM5Nzk3NzYsIDksIHsgX2Vycm9yQ2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgMTAsIHsgX2hpbnRDaGlsZHJlbjogMSB9KSwgaTEuybVxdWQoNjAzOTc5Nzc2LCAxMSwgeyBfcHJlZml4Q2hpbGRyZW46IDEgfSksIGkxLsm1cXVkKDYwMzk3OTc3NiwgMTIsIHsgX3N1ZmZpeENoaWxkcmVuOiAxIH0pLCAoX2woKSgpLCBpMS7JtWVsZCgzNywgMCwgbnVsbCwgMSwgNywgXCJpbnB1dFwiLCBbW1wiY2xhc3NcIiwgXCJtYXQtaW5wdXQtZWxlbWVudCBtYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sXCJdLCBbXCJmb3JtQ29udHJvbE5hbWVcIiwgXCJwYXNzd29yZFwiXSwgW1wibWF0SW5wdXRcIiwgXCJcIl0sIFtcInBsYWNlaG9sZGVyXCIsIFwiUGFzc3dvcmRcIl0sIFtcInR5cGVcIiwgXCJwYXNzd29yZFwiXV0sIFtbMiwgXCJuZy11bnRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXRvdWNoZWRcIiwgbnVsbF0sIFsyLCBcIm5nLXByaXN0aW5lXCIsIG51bGxdLCBbMiwgXCJuZy1kaXJ0eVwiLCBudWxsXSwgWzIsIFwibmctdmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLWludmFsaWRcIiwgbnVsbF0sIFsyLCBcIm5nLXBlbmRpbmdcIiwgbnVsbF0sIFsxLCBcImlkXCIsIDBdLCBbOCwgXCJwbGFjZWhvbGRlclwiLCAwXSwgWzgsIFwiZGlzYWJsZWRcIiwgMF0sIFs4LCBcInJlcXVpcmVkXCIsIDBdLCBbOCwgXCJyZWFkT25seVwiLCAwXSwgWzEsIFwiYXJpYS1kZXNjcmliZWRieVwiLCAwXSwgWzEsIFwiYXJpYS1pbnZhbGlkXCIsIDBdLCBbMSwgXCJhcmlhLXJlcXVpcmVkXCIsIDBdXSwgW1tudWxsLCBcImlucHV0XCJdLCBbbnVsbCwgXCJibHVyXCJdLCBbbnVsbCwgXCJjb21wb3NpdGlvbnN0YXJ0XCJdLCBbbnVsbCwgXCJjb21wb3NpdGlvbmVuZFwiXSwgW251bGwsIFwiZm9jdXNcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiaW5wdXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDM4KS5faGFuZGxlSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJibHVyXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8xID0gKGkxLsm1bm92KF92LCAzOCkub25Ub3VjaGVkKCkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8xICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoXCJjb21wb3NpdGlvbnN0YXJ0XCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8yID0gKGkxLsm1bm92KF92LCAzOCkuX2NvbXBvc2l0aW9uU3RhcnQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzIgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChcImNvbXBvc2l0aW9uZW5kXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8zID0gKGkxLsm1bm92KF92LCAzOCkuX2NvbXBvc2l0aW9uRW5kKCRldmVudC50YXJnZXQudmFsdWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMyAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiYmx1clwiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfNCA9IChpMS7JtW5vdihfdiwgNDMpLl9mb2N1c0NoYW5nZWQoZmFsc2UpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiZm9jdXNcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzUgPSAoaTEuybVub3YoX3YsIDQzKS5fZm9jdXNDaGFuZ2VkKHRydWUpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNSAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKFwiaW5wdXRcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzYgPSAoaTEuybVub3YoX3YsIDQzKS5fb25JbnB1dCgpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfNiAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMzgsIDE2Mzg0LCBudWxsLCAwLCBpNC5EZWZhdWx0VmFsdWVBY2Nlc3NvciwgW2kxLlJlbmRlcmVyMiwgaTEuRWxlbWVudFJlZiwgWzIsIGk0LkNPTVBPU0lUSU9OX0JVRkZFUl9NT0RFXV0sIG51bGwsIG51bGwpLCBpMS7JtXByZCgxMDI0LCBudWxsLCBpNC5OR19WQUxVRV9BQ0NFU1NPUiwgZnVuY3Rpb24gKHAwXzApIHsgcmV0dXJuIFtwMF8wXTsgfSwgW2k0LkRlZmF1bHRWYWx1ZUFjY2Vzc29yXSksIGkxLsm1ZGlkKDQwLCA2NzE3NDQsIG51bGwsIDAsIGk0LkZvcm1Db250cm9sTmFtZSwgW1szLCBpNC5Db250cm9sQ29udGFpbmVyXSwgWzgsIG51bGxdLCBbOCwgbnVsbF0sIFsyLCBpNC5OR19WQUxVRV9BQ0NFU1NPUl1dLCB7IG5hbWU6IFswLCBcIm5hbWVcIl0gfSwgbnVsbCksIGkxLsm1cHJkKDIwNDgsIG51bGwsIGk0Lk5nQ29udHJvbCwgbnVsbCwgW2k0LkZvcm1Db250cm9sTmFtZV0pLCBpMS7JtWRpZCg0MiwgMTYzODQsIG51bGwsIDAsIGk0Lk5nQ29udHJvbFN0YXR1cywgW2k0Lk5nQ29udHJvbF0sIG51bGwsIG51bGwpLCBpMS7JtWRpZCg0MywgOTMzODg4LCBudWxsLCAwLCBpNy5NYXRJbnB1dCwgW2kxLkVsZW1lbnRSZWYsIGk4LlBsYXRmb3JtLCBbMiwgaTQuTmdDb250cm9sXSwgWzIsIGk0Lk5nRm9ybV0sIFsyLCBpNC5Gb3JtR3JvdXBEaXJlY3RpdmVdLCBpNi5FcnJvclN0YXRlTWF0Y2hlciwgWzgsIG51bGxdXSwgeyBwbGFjZWhvbGRlcjogWzAsIFwicGxhY2Vob2xkZXJcIl0sIHR5cGU6IFsxLCBcInR5cGVcIl0gfSwgbnVsbCksIGkxLsm1cHJkKDIwNDgsIFtbNywgNF1dLCBpMi5NYXRGb3JtRmllbGRDb250cm9sLCBudWxsLCBbaTcuTWF0SW5wdXRdKSwgKF9sKCkoKSwgaTEuybVhbmQoMTY3NzcyMTYsIG51bGwsIDQsIDEsIG51bGwsIFZpZXdfQXV0aERpYWxvZ0NvbXBvbmVudF8zKSksIGkxLsm1ZGlkKDQ2LCAxNjM4NCwgbnVsbCwgMCwgaTkuTmdJZiwgW2kxLlZpZXdDb250YWluZXJSZWYsIGkxLlRlbXBsYXRlUmVmXSwgeyBuZ0lmOiBbMCwgXCJuZ0lmXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg0NywgMCwgbnVsbCwgbnVsbCwgMCwgXCJpbnB1dFwiLCBbW1wiaGlkZGVuXCIsIFwiXCJdLCBbXCJ0eXBlXCIsIFwic3VibWl0XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0OCwgMCwgbnVsbCwgbnVsbCwgNSwgXCJtYXQtZGlhbG9nLWFjdGlvbnNcIiwgW1tcImNsYXNzXCIsIFwibWF0LWRpYWxvZy1hY3Rpb25zXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg0OSwgMTYzODQsIG51bGwsIDAsIGkzLk1hdERpYWxvZ0FjdGlvbnMsIFtdLCBudWxsLCBudWxsKSwgKF9sKCkoKSwgaTEuybVlbGQoNTAsIDAsIG51bGwsIG51bGwsIDMsIFwiYnV0dG9uXCIsIFtbXCJjbGFzc1wiLCBcImF1dGgtZm9ybS1idXR0b24gbWF0LWJ1dHRvblwiXSwgW1wiY29sb3JcIiwgXCJwcmltYXJ5XCJdLCBbXCJtYXQtYnV0dG9uXCIsIFwiXCJdLCBbXCJ0eXBlXCIsIFwic3VibWl0XCJdXSwgW1s4LCBcImRpc2FibGVkXCIsIDBdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9jbyA9IF92LmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChfY28ub25TdWJtaXQoKSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBpMTAuVmlld19NYXRCdXR0b25fMCwgaTEwLlJlbmRlclR5cGVfTWF0QnV0dG9uKSksIGkxLsm1ZGlkKDUxLCAxODAyMjQsIG51bGwsIDAsIGkxMS5NYXRCdXR0b24sIFtpMS5FbGVtZW50UmVmLCBpOC5QbGF0Zm9ybSwgaTEyLkZvY3VzTW9uaXRvcl0sIHsgZGlzYWJsZWQ6IFswLCBcImRpc2FibGVkXCJdLCBjb2xvcjogWzEsIFwiY29sb3JcIl0gfSwgbnVsbCksIGkxLsm1ZGlkKDUyLCAxNjM4NCwgbnVsbCwgMCwgaTExLk1hdEJ1dHRvbkNzc01hdFN0eWxlciwgW10sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgMCwgW1wiU3VibWl0XCJdKSldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgX2NvID0gX3YuY29tcG9uZW50OyBfY2soX3YsIDEsIDApOyB2YXIgY3VyclZhbF84ID0gX2NvLmF1dGhGb3JtOyBfY2soX3YsIDUsIDAsIGN1cnJWYWxfOCk7IHZhciBjdXJyVmFsXzQwID0gXCJlbWFpbFwiOyBfY2soX3YsIDIwLCAwLCBjdXJyVmFsXzQwKTsgdmFyIGN1cnJWYWxfNDEgPSBcIkUtbWFpbFwiOyB2YXIgY3VyclZhbF80MiA9IFwidGV4dFwiOyBfY2soX3YsIDIzLCAwLCBjdXJyVmFsXzQxLCBjdXJyVmFsXzQyKTsgdmFyIGN1cnJWYWxfNDMgPSBfY28uYXV0aEZvcm0uY29udHJvbHMuZW1haWwuaGFzRXJyb3IoXCJyZXF1aXJlZFwiKTsgX2NrKF92LCAyNiwgMCwgY3VyclZhbF80Myk7IHZhciBjdXJyVmFsXzQ0ID0gX2NvLmF1dGhGb3JtLmNvbnRyb2xzLmVtYWlsLmhhc0Vycm9yKFwiZW1haWxcIik7IF9jayhfdiwgMjgsIDAsIGN1cnJWYWxfNDQpOyB2YXIgY3VyclZhbF83NiA9IFwicGFzc3dvcmRcIjsgX2NrKF92LCA0MCwgMCwgY3VyclZhbF83Nik7IHZhciBjdXJyVmFsXzc3ID0gXCJQYXNzd29yZFwiOyB2YXIgY3VyclZhbF83OCA9IFwicGFzc3dvcmRcIjsgX2NrKF92LCA0MywgMCwgY3VyclZhbF83NywgY3VyclZhbF83OCk7IHZhciBjdXJyVmFsXzc5ID0gX2NvLmF1dGhGb3JtLmNvbnRyb2xzLnBhc3N3b3JkLmhhc0Vycm9yKFwicmVxdWlyZWRcIik7IF9jayhfdiwgNDYsIDAsIGN1cnJWYWxfNzkpOyB2YXIgY3VyclZhbF84MSA9IF9jby5hdXRoRm9ybS5pbnZhbGlkOyB2YXIgY3VyclZhbF84MiA9IFwicHJpbWFyeVwiOyBfY2soX3YsIDUxLCAwLCBjdXJyVmFsXzgxLCBjdXJyVmFsXzgyKTsgfSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMCA9IGkxLsm1bm92KF92LCAxKS5pZDsgX2NrKF92LCAwLCAwLCBjdXJyVmFsXzApOyB2YXIgY3VyclZhbF8xID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NVbnRvdWNoZWQ7IHZhciBjdXJyVmFsXzIgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1RvdWNoZWQ7IHZhciBjdXJyVmFsXzMgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1ByaXN0aW5lOyB2YXIgY3VyclZhbF80ID0gaTEuybVub3YoX3YsIDcpLm5nQ2xhc3NEaXJ0eTsgdmFyIGN1cnJWYWxfNSA9IGkxLsm1bm92KF92LCA3KS5uZ0NsYXNzVmFsaWQ7IHZhciBjdXJyVmFsXzYgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc0ludmFsaWQ7IHZhciBjdXJyVmFsXzcgPSBpMS7JtW5vdihfdiwgNykubmdDbGFzc1BlbmRpbmc7IF9jayhfdiwgMywgMCwgY3VyclZhbF8xLCBjdXJyVmFsXzIsIGN1cnJWYWxfMywgY3VyclZhbF80LCBjdXJyVmFsXzUsIGN1cnJWYWxfNiwgY3VyclZhbF83KTsgdmFyIGN1cnJWYWxfOSA9IGkxLsm1bm92KF92LCAxMCkuX2NvbnRyb2wuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfMTAgPSBpMS7JtW5vdihfdiwgMTApLl9jb250cm9sLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzExID0gaTEuybVub3YoX3YsIDEwKS5fY2FuUGxhY2Vob2xkZXJGbG9hdDsgdmFyIGN1cnJWYWxfMTIgPSAoaTEuybVub3YoX3YsIDEwKS5fY29udHJvbC5zaG91bGRQbGFjZWhvbGRlckZsb2F0IHx8IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEFsd2F5c0Zsb2F0KTsgdmFyIGN1cnJWYWxfMTMgPSBpMS7JtW5vdihfdiwgMTApLl9jb250cm9sLmRpc2FibGVkOyB2YXIgY3VyclZhbF8xNCA9IGkxLsm1bm92KF92LCAxMCkuX2NvbnRyb2wuZm9jdXNlZDsgdmFyIGN1cnJWYWxfMTUgPSAoaTEuybVub3YoX3YsIDEwKS5jb2xvciA9PSBcInByaW1hcnlcIik7IHZhciBjdXJyVmFsXzE2ID0gKGkxLsm1bm92KF92LCAxMCkuY29sb3IgPT0gXCJhY2NlbnRcIik7IHZhciBjdXJyVmFsXzE3ID0gKGkxLsm1bm92KF92LCAxMCkuY29sb3IgPT0gXCJ3YXJuXCIpOyB2YXIgY3VyclZhbF8xOCA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJ1bnRvdWNoZWRcIik7IHZhciBjdXJyVmFsXzE5ID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInRvdWNoZWRcIik7IHZhciBjdXJyVmFsXzIwID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInByaXN0aW5lXCIpOyB2YXIgY3VyclZhbF8yMSA9IGkxLsm1bm92KF92LCAxMCkuX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKTsgdmFyIGN1cnJWYWxfMjIgPSBpMS7JtW5vdihfdiwgMTApLl9zaG91bGRGb3J3YXJkKFwidmFsaWRcIik7IHZhciBjdXJyVmFsXzIzID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcImludmFsaWRcIik7IHZhciBjdXJyVmFsXzI0ID0gaTEuybVub3YoX3YsIDEwKS5fc2hvdWxkRm9yd2FyZChcInBlbmRpbmdcIik7IF9jayhfdiwgOSwgMSwgW2N1cnJWYWxfOSwgY3VyclZhbF8xMCwgY3VyclZhbF8xMSwgY3VyclZhbF8xMiwgY3VyclZhbF8xMywgY3VyclZhbF8xNCwgY3VyclZhbF8xNSwgY3VyclZhbF8xNiwgY3VyclZhbF8xNywgY3VyclZhbF8xOCwgY3VyclZhbF8xOSwgY3VyclZhbF8yMCwgY3VyclZhbF8yMSwgY3VyclZhbF8yMiwgY3VyclZhbF8yMywgY3VyclZhbF8yNF0pOyB2YXIgY3VyclZhbF8yNSA9IGkxLsm1bm92KF92LCAyMikubmdDbGFzc1VudG91Y2hlZDsgdmFyIGN1cnJWYWxfMjYgPSBpMS7JtW5vdihfdiwgMjIpLm5nQ2xhc3NUb3VjaGVkOyB2YXIgY3VyclZhbF8yNyA9IGkxLsm1bm92KF92LCAyMikubmdDbGFzc1ByaXN0aW5lOyB2YXIgY3VyclZhbF8yOCA9IGkxLsm1bm92KF92LCAyMikubmdDbGFzc0RpcnR5OyB2YXIgY3VyclZhbF8yOSA9IGkxLsm1bm92KF92LCAyMikubmdDbGFzc1ZhbGlkOyB2YXIgY3VyclZhbF8zMCA9IGkxLsm1bm92KF92LCAyMikubmdDbGFzc0ludmFsaWQ7IHZhciBjdXJyVmFsXzMxID0gaTEuybVub3YoX3YsIDIyKS5uZ0NsYXNzUGVuZGluZzsgdmFyIGN1cnJWYWxfMzIgPSBpMS7JtW5vdihfdiwgMjMpLmlkOyB2YXIgY3VyclZhbF8zMyA9IGkxLsm1bm92KF92LCAyMykucGxhY2Vob2xkZXI7IHZhciBjdXJyVmFsXzM0ID0gaTEuybVub3YoX3YsIDIzKS5kaXNhYmxlZDsgdmFyIGN1cnJWYWxfMzUgPSBpMS7JtW5vdihfdiwgMjMpLnJlcXVpcmVkOyB2YXIgY3VyclZhbF8zNiA9IGkxLsm1bm92KF92LCAyMykucmVhZG9ubHk7IHZhciBjdXJyVmFsXzM3ID0gKGkxLsm1bm92KF92LCAyMykuX2FyaWFEZXNjcmliZWRieSB8fCBudWxsKTsgdmFyIGN1cnJWYWxfMzggPSBpMS7JtW5vdihfdiwgMjMpLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzM5ID0gaTEuybVub3YoX3YsIDIzKS5yZXF1aXJlZC50b1N0cmluZygpOyBfY2soX3YsIDE3LCAxLCBbY3VyclZhbF8yNSwgY3VyclZhbF8yNiwgY3VyclZhbF8yNywgY3VyclZhbF8yOCwgY3VyclZhbF8yOSwgY3VyclZhbF8zMCwgY3VyclZhbF8zMSwgY3VyclZhbF8zMiwgY3VyclZhbF8zMywgY3VyclZhbF8zNCwgY3VyclZhbF8zNSwgY3VyclZhbF8zNiwgY3VyclZhbF8zNywgY3VyclZhbF8zOCwgY3VyclZhbF8zOV0pOyB2YXIgY3VyclZhbF80NSA9IGkxLsm1bm92KF92LCAzMCkuX2NvbnRyb2wuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfNDYgPSBpMS7JtW5vdihfdiwgMzApLl9jb250cm9sLmVycm9yU3RhdGU7IHZhciBjdXJyVmFsXzQ3ID0gaTEuybVub3YoX3YsIDMwKS5fY2FuUGxhY2Vob2xkZXJGbG9hdDsgdmFyIGN1cnJWYWxfNDggPSAoaTEuybVub3YoX3YsIDMwKS5fY29udHJvbC5zaG91bGRQbGFjZWhvbGRlckZsb2F0IHx8IGkxLsm1bm92KF92LCAzMCkuX3Nob3VsZEFsd2F5c0Zsb2F0KTsgdmFyIGN1cnJWYWxfNDkgPSBpMS7JtW5vdihfdiwgMzApLl9jb250cm9sLmRpc2FibGVkOyB2YXIgY3VyclZhbF81MCA9IGkxLsm1bm92KF92LCAzMCkuX2NvbnRyb2wuZm9jdXNlZDsgdmFyIGN1cnJWYWxfNTEgPSAoaTEuybVub3YoX3YsIDMwKS5jb2xvciA9PSBcInByaW1hcnlcIik7IHZhciBjdXJyVmFsXzUyID0gKGkxLsm1bm92KF92LCAzMCkuY29sb3IgPT0gXCJhY2NlbnRcIik7IHZhciBjdXJyVmFsXzUzID0gKGkxLsm1bm92KF92LCAzMCkuY29sb3IgPT0gXCJ3YXJuXCIpOyB2YXIgY3VyclZhbF81NCA9IGkxLsm1bm92KF92LCAzMCkuX3Nob3VsZEZvcndhcmQoXCJ1bnRvdWNoZWRcIik7IHZhciBjdXJyVmFsXzU1ID0gaTEuybVub3YoX3YsIDMwKS5fc2hvdWxkRm9yd2FyZChcInRvdWNoZWRcIik7IHZhciBjdXJyVmFsXzU2ID0gaTEuybVub3YoX3YsIDMwKS5fc2hvdWxkRm9yd2FyZChcInByaXN0aW5lXCIpOyB2YXIgY3VyclZhbF81NyA9IGkxLsm1bm92KF92LCAzMCkuX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKTsgdmFyIGN1cnJWYWxfNTggPSBpMS7JtW5vdihfdiwgMzApLl9zaG91bGRGb3J3YXJkKFwidmFsaWRcIik7IHZhciBjdXJyVmFsXzU5ID0gaTEuybVub3YoX3YsIDMwKS5fc2hvdWxkRm9yd2FyZChcImludmFsaWRcIik7IHZhciBjdXJyVmFsXzYwID0gaTEuybVub3YoX3YsIDMwKS5fc2hvdWxkRm9yd2FyZChcInBlbmRpbmdcIik7IF9jayhfdiwgMjksIDEsIFtjdXJyVmFsXzQ1LCBjdXJyVmFsXzQ2LCBjdXJyVmFsXzQ3LCBjdXJyVmFsXzQ4LCBjdXJyVmFsXzQ5LCBjdXJyVmFsXzUwLCBjdXJyVmFsXzUxLCBjdXJyVmFsXzUyLCBjdXJyVmFsXzUzLCBjdXJyVmFsXzU0LCBjdXJyVmFsXzU1LCBjdXJyVmFsXzU2LCBjdXJyVmFsXzU3LCBjdXJyVmFsXzU4LCBjdXJyVmFsXzU5LCBjdXJyVmFsXzYwXSk7IHZhciBjdXJyVmFsXzYxID0gaTEuybVub3YoX3YsIDQyKS5uZ0NsYXNzVW50b3VjaGVkOyB2YXIgY3VyclZhbF82MiA9IGkxLsm1bm92KF92LCA0MikubmdDbGFzc1RvdWNoZWQ7IHZhciBjdXJyVmFsXzYzID0gaTEuybVub3YoX3YsIDQyKS5uZ0NsYXNzUHJpc3RpbmU7IHZhciBjdXJyVmFsXzY0ID0gaTEuybVub3YoX3YsIDQyKS5uZ0NsYXNzRGlydHk7IHZhciBjdXJyVmFsXzY1ID0gaTEuybVub3YoX3YsIDQyKS5uZ0NsYXNzVmFsaWQ7IHZhciBjdXJyVmFsXzY2ID0gaTEuybVub3YoX3YsIDQyKS5uZ0NsYXNzSW52YWxpZDsgdmFyIGN1cnJWYWxfNjcgPSBpMS7JtW5vdihfdiwgNDIpLm5nQ2xhc3NQZW5kaW5nOyB2YXIgY3VyclZhbF82OCA9IGkxLsm1bm92KF92LCA0MykuaWQ7IHZhciBjdXJyVmFsXzY5ID0gaTEuybVub3YoX3YsIDQzKS5wbGFjZWhvbGRlcjsgdmFyIGN1cnJWYWxfNzAgPSBpMS7JtW5vdihfdiwgNDMpLmRpc2FibGVkOyB2YXIgY3VyclZhbF83MSA9IGkxLsm1bm92KF92LCA0MykucmVxdWlyZWQ7IHZhciBjdXJyVmFsXzcyID0gaTEuybVub3YoX3YsIDQzKS5yZWFkb25seTsgdmFyIGN1cnJWYWxfNzMgPSAoaTEuybVub3YoX3YsIDQzKS5fYXJpYURlc2NyaWJlZGJ5IHx8IG51bGwpOyB2YXIgY3VyclZhbF83NCA9IGkxLsm1bm92KF92LCA0MykuZXJyb3JTdGF0ZTsgdmFyIGN1cnJWYWxfNzUgPSBpMS7JtW5vdihfdiwgNDMpLnJlcXVpcmVkLnRvU3RyaW5nKCk7IF9jayhfdiwgMzcsIDEsIFtjdXJyVmFsXzYxLCBjdXJyVmFsXzYyLCBjdXJyVmFsXzYzLCBjdXJyVmFsXzY0LCBjdXJyVmFsXzY1LCBjdXJyVmFsXzY2LCBjdXJyVmFsXzY3LCBjdXJyVmFsXzY4LCBjdXJyVmFsXzY5LCBjdXJyVmFsXzcwLCBjdXJyVmFsXzcxLCBjdXJyVmFsXzcyLCBjdXJyVmFsXzczLCBjdXJyVmFsXzc0LCBjdXJyVmFsXzc1XSk7IHZhciBjdXJyVmFsXzgwID0gKGkxLsm1bm92KF92LCA1MSkuZGlzYWJsZWQgfHwgbnVsbCk7IF9jayhfdiwgNTAsIDAsIGN1cnJWYWxfODApOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0F1dGhEaWFsb2dDb21wb25lbnRfSG9zdF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJhdXRoLWRpYWxvZ1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50XzAsIFJlbmRlclR5cGVfQXV0aERpYWxvZ0NvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCA0OTE1MiwgbnVsbCwgMCwgaTEzLkF1dGhEaWFsb2dDb21wb25lbnQsIFtpMy5NYXREaWFsb2dSZWYsIGk0LkZvcm1CdWlsZGVyLCBpMy5NQVRfRElBTE9HX0RBVEFdLCBudWxsLCBudWxsKV0sIG51bGwsIG51bGwpOyB9XG52YXIgQXV0aERpYWxvZ0NvbXBvbmVudE5nRmFjdG9yeSA9IC8qQF9fUFVSRV9fKi8gaTEuybVjY2YoXCJhdXRoLWRpYWxvZ1wiLCBpMTMuQXV0aERpYWxvZ0NvbXBvbmVudCwgVmlld19BdXRoRGlhbG9nQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBBdXRoRGlhbG9nQ29tcG9uZW50TmdGYWN0b3J5IGFzIEF1dGhEaWFsb2dDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hdXRoL2F1dGgtZGlhbG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgc3R5bGVzID0gW1wiXCJdO1xuZXhwb3J0IHsgc3R5bGVzIGFzIHN0eWxlcyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBzdHlsZXMgPSBbXCJcIl07XG5leHBvcnQgeyBzdHlsZXMgYXMgc3R5bGVzIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAuX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC5fY3VycmVuY2llc19yaWJib24uY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fY3VycmVuY2llc19yaWJib24uY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLl9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQsX2FuZ3VsYXJfcm91dGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIGkwIGZyb20gXCIuL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIHN0eWxlc19DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnQsIGRhdGE6IHt9IH0pO1xuZXhwb3J0IHsgUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudF8wKF9sKSB7IHJldHVybiBpMS7JtXZpZCgwLCBbKF9sKCkoKSwgaTEuybVlbGQoMCwgMCwgbnVsbCwgbnVsbCwgNSwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcImJqLWN1cnJlbmNpZXMtcmliYm9uX19pdGVtXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAwLCBcImltZ1wiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImg1XCIsIFtbXCJjbGFzc1wiLCBcImJqLWN1cnJlbmNpZXMtcmliYm9uX19pdGVtXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAyLCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1jdXJyZW5jaWVzLXJpYmJvbl9fcmF0ZVwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNCwgMCwgbnVsbCwgbnVsbCwgMCwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDUsIDAsIG51bGwsIG51bGwsIDAsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgbnVsbCwgbnVsbCk7IH1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiY3VycmVuY2llcy1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIFZpZXdfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnRfMCwgUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLkN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LCBbaTMuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyB9LCBudWxsKTsgfVxudmFyIEN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcImN1cnJlbmNpZXMtcmliYm9uXCIsIGkyLkN1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50LCBWaWV3X0N1cnJlbmNpZXNSc2liYm9uQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSBhcyBDdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2N1cnJlbmNpZXMtcmliYm9uL2N1cnJlbmNpZXMtcmliYm9uLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5faGVhZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLF9hbmd1bGFyX3JvdXRlcixfYW5ndWxhcl9jb21tb24sLi5fY3VycmVuY2llc19yaWJib25fY3VycmVuY2llc19yaWJib24uY29tcG9uZW50Lm5nZmFjdG9yeSwuLl9jdXJyZW5jaWVzX3JpYmJvbl9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQsLl9oZWFkZXIuY29tcG9uZW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9oZWFkZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsX2FuZ3VsYXJfcm91dGVyLF9hbmd1bGFyX2NvbW1vbiwuLl9jdXJyZW5jaWVzX3JpYmJvbl9jdXJyZW5jaWVzX3JpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5LC4uX2N1cnJlbmNpZXNfcmliYm9uX2N1cnJlbmNpZXNfcmliYm9uLmNvbXBvbmVudCwuX2hlYWRlci5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCAqIGFzIGk0IGZyb20gXCIuLi9jdXJyZW5jaWVzLXJpYmJvbi9jdXJyZW5jaWVzLXJpYmJvbi5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vY3VycmVuY2llcy1yaWJib24vY3VycmVuY2llcy1yaWJib24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XG52YXIgc3R5bGVzX0hlYWRlckNvbXBvbmVudCA9IFtpMC5zdHlsZXNdO1xudmFyIFJlbmRlclR5cGVfSGVhZGVyQ29tcG9uZW50ID0gLypAX19QVVJFX18qLyBpMS7JtWNydCh7IGVuY2Fwc3VsYXRpb246IDIsIHN0eWxlczogc3R5bGVzX0hlYWRlckNvbXBvbmVudCwgZGF0YToge30gfSk7XG5leHBvcnQgeyBSZW5kZXJUeXBlX0hlYWRlckNvbXBvbmVudCBhcyBSZW5kZXJUeXBlX0hlYWRlckNvbXBvbmVudCB9O1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfSGVhZGVyQ29tcG9uZW50XzAoX2wpIHtcbiAgICByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDI5LCBcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXItcm93XCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgxLCAwLCBudWxsLCBudWxsLCAxLCBcImJ1dHRvblwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXItYnV0dG9uXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCAwLCBcImlcIiwgW1tcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiXSwgW1wiY2xhc3NcIiwgXCJmYSBmYS1iYXJzXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgzLCAwLCBudWxsLCBudWxsLCAyMSwgXCJuYXZcIiwgW1tcImNsYXNzXCIsIFwiXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCg0LCAwLCBudWxsLCBudWxsLCAyLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL1wiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDUpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoNSwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxQlxcdTA0MzVcXHUwNDNEXFx1MDQ0MlxcdTA0MzBcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoNywgMCwgbnVsbCwgbnVsbCwgMiwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcIlwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9ldmVudHNcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCA4KS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDgsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MThcXHUwNDMyXFx1MDQzNVxcdTA0M0RcXHUwNDQyXFx1MDQ0QlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgxMCwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcIlwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9pY29cIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAxMSkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgxMSwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiSUNPXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDEzLCAwLCBudWxsLCBudWxsLCAyLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiLzEwMVwiXV0sIFtbMSwgXCJ0YXJnZXRcIiwgMF0sIFs4LCBcImhyZWZcIiwgNF1dLCBbW251bGwsIFwiY2xpY2tcIl1dLCBmdW5jdGlvbiAoX3YsIGVuLCAkZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBhZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKFwiY2xpY2tcIiA9PT0gZW4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBkXzAgPSAoaTEuybVub3YoX3YsIDE0KS5vbkNsaWNrKCRldmVudC5idXR0b24sICRldmVudC5jdHJsS2V5LCAkZXZlbnQubWV0YUtleSwgJGV2ZW50LnNoaWZ0S2V5KSAhPT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFkID0gKHBkXzAgJiYgYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkO1xuICAgICAgICB9LCBudWxsLCBudWxsKSksIGkxLsm1ZGlkKDE0LCA2NzE3NDQsIG51bGwsIDAsIGkyLlJvdXRlckxpbmtXaXRoSHJlZiwgW2kyLlJvdXRlciwgaTIuQWN0aXZhdGVkUm91dGUsIGkzLkxvY2F0aW9uU3RyYXRlZ3ldLCB7IHJvdXRlckxpbms6IFswLCBcInJvdXRlckxpbmtcIl0gfSwgbnVsbCksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDFEXFx1MDQzRVxcdTA0MzJcXHUwNDM4XFx1MDQ0N1xcdTA0M0FcXHUwNDMwXFx1MDQzQ1wiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgxNiwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcIlwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9jdXJyZW5jaWVzXCJdXSwgW1sxLCBcInRhcmdldFwiLCAwXSwgWzgsIFwiaHJlZlwiLCA0XV0sIFtbbnVsbCwgXCJjbGlja1wiXV0sIGZ1bmN0aW9uIChfdiwgZW4sICRldmVudCkge1xuICAgICAgICAgICAgdmFyIGFkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoXCJjbGlja1wiID09PSBlbikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGRfMCA9IChpMS7JtW5vdihfdiwgMTcpLm9uQ2xpY2soJGV2ZW50LmJ1dHRvbiwgJGV2ZW50LmN0cmxLZXksICRldmVudC5tZXRhS2V5LCAkZXZlbnQuc2hpZnRLZXkpICE9PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgIH0sIG51bGwsIG51bGwpKSwgaTEuybVkaWQoMTcsIDY3MTc0NCwgbnVsbCwgMCwgaTIuUm91dGVyTGlua1dpdGhIcmVmLCBbaTIuUm91dGVyLCBpMi5BY3RpdmF0ZWRSb3V0ZSwgaTMuTG9jYXRpb25TdHJhdGVneV0sIHsgcm91dGVyTGluazogWzAsIFwicm91dGVyTGlua1wiXSB9LCBudWxsKSwgKF9sKCkoKSwgaTEuybV0ZWQoLTEsIG51bGwsIFtcIlxcdTA0MTJcXHUwNDMwXFx1MDQzQlxcdTA0NEVcXHUwNDQyXFx1MDQ0QlwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgxOSwgMCwgbnVsbCwgbnVsbCwgMiwgXCJhXCIsIFtbXCJjbGFzc1wiLCBcIlwiXSwgW1wicm91dGVyTGlua1wiLCBcIi9leGNoYW5nZXNcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAyMCkub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgyMCwgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxRVxcdTA0MzFcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDNEXFx1MDQzOFxcdTA0M0FcXHUwNDM4XCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDIyLCAwLCBudWxsLCBudWxsLCAyLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiXCJdLCBbXCJyb3V0ZXJMaW5rXCIsIFwiL21hcmtldHNcIl1dLCBbWzEsIFwidGFyZ2V0XCIsIDBdLCBbOCwgXCJocmVmXCIsIDRdXSwgW1tudWxsLCBcImNsaWNrXCJdXSwgZnVuY3Rpb24gKF92LCBlbiwgJGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChcImNsaWNrXCIgPT09IGVuKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZF8wID0gKGkxLsm1bm92KF92LCAyMykub25DbGljaygkZXZlbnQuYnV0dG9uLCAkZXZlbnQuY3RybEtleSwgJGV2ZW50Lm1ldGFLZXksICRldmVudC5zaGlmdEtleSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZDtcbiAgICAgICAgfSwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCgyMywgNjcxNzQ0LCBudWxsLCAwLCBpMi5Sb3V0ZXJMaW5rV2l0aEhyZWYsIFtpMi5Sb3V0ZXIsIGkyLkFjdGl2YXRlZFJvdXRlLCBpMy5Mb2NhdGlvblN0cmF0ZWd5XSwgeyByb3V0ZXJMaW5rOiBbMCwgXCJyb3V0ZXJMaW5rXCJdIH0sIG51bGwpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxMVxcdTA0MzhcXHUwNDQwXFx1MDQzNlxcdTA0MzhcIl0pKSwgKF9sKCkoKSwgaTEuybVlbGQoMjUsIDAsIG51bGwsIG51bGwsIDEsIFwiYnV0dG9uXCIsIFtbXCJjbGFzc1wiLCBcImJqLWhlYWRlci1idXR0b25cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDI2LCAwLCBudWxsLCBudWxsLCAwLCBcImlcIiwgW1tcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiXSwgW1wiY2xhc3NcIiwgXCJmYSBmYS1zZWFyY2hcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDI3LCAwLCBudWxsLCBudWxsLCAyLCBcImJ1dHRvblwiLCBbW1wiY2xhc3NcIiwgXCJiai1oZWFkZXItYnV0dG9uXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtWVsZCgyOCwgMCwgbnVsbCwgbnVsbCwgMSwgXCJzcGFuXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1dGVkKC0xLCBudWxsLCBbXCJcXHUwNDEyXFx1MDQzRVxcdTA0MzlcXHUwNDQyXFx1MDQzOFwiXSkpLCAoX2woKSgpLCBpMS7JtWVsZCgzMCwgMCwgbnVsbCwgbnVsbCwgNSwgXCJkaXZcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyLXJvd1wiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMzEsIDAsIG51bGwsIG51bGwsIDEsIFwiY3VycmVuY2llcy1yaWJib25cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGk0LlZpZXdfQ3VycmVuY2llc1JzaWJib25Db21wb25lbnRfMCwgaTQuUmVuZGVyVHlwZV9DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCkpLCBpMS7JtWRpZCgzMiwgMTE0Njg4LCBudWxsLCAwLCBpNS5DdXJyZW5jaWVzUnNpYmJvbkNvbXBvbmVudCwgW2kyLlJvdXRlcl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgzMywgMCwgbnVsbCwgbnVsbCwgMiwgXCJidXR0b25cIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyLWJ1dHRvblwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMzQsIDAsIG51bGwsIG51bGwsIDEsIFwic3BhblwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCAoX2woKSgpLCBpMS7JtXRlZCgtMSwgbnVsbCwgW1wiXFx1MDQxQVxcdTA0M0VcXHUwNDNEXFx1MDQzMlxcdTA0MzVcXHUwNDQwXFx1MDQ0MlxcdTA0MzVcXHUwNDQwIFxcdTA0MzJcXHUwNDMwXFx1MDQzQlxcdTA0NEVcXHUwNDQyXCJdKSksIChfbCgpKCksIGkxLsm1ZWxkKDM2LCAwLCBudWxsLCBudWxsLCAxLCBcImFcIiwgW1tcImNsYXNzXCIsIFwiYmotaGVhZGVyLWxvZ29cIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDM3LCAwLCBudWxsLCBudWxsLCAwLCBcImltZ1wiLCBbW1wiYWx0XCIsIFwiQml0Sm91cm5hbFwiXSwgW1wiY2xhc3NcIiwgXCJiai1sb2dvXCJdLCBbXCJzcmNcIiwgXCIvc3ZnL2xvZ28uc3ZnXCJdXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgdmFyIGN1cnJWYWxfMiA9IFwiL1wiOyBfY2soX3YsIDUsIDAsIGN1cnJWYWxfMik7IHZhciBjdXJyVmFsXzUgPSBcIi9ldmVudHNcIjsgX2NrKF92LCA4LCAwLCBjdXJyVmFsXzUpOyB2YXIgY3VyclZhbF84ID0gXCIvaWNvXCI7IF9jayhfdiwgMTEsIDAsIGN1cnJWYWxfOCk7IHZhciBjdXJyVmFsXzExID0gXCIvMTAxXCI7IF9jayhfdiwgMTQsIDAsIGN1cnJWYWxfMTEpOyB2YXIgY3VyclZhbF8xNCA9IFwiL2N1cnJlbmNpZXNcIjsgX2NrKF92LCAxNywgMCwgY3VyclZhbF8xNCk7IHZhciBjdXJyVmFsXzE3ID0gXCIvZXhjaGFuZ2VzXCI7IF9jayhfdiwgMjAsIDAsIGN1cnJWYWxfMTcpOyB2YXIgY3VyclZhbF8yMCA9IFwiL21hcmtldHNcIjsgX2NrKF92LCAyMywgMCwgY3VyclZhbF8yMCk7IF9jayhfdiwgMzIsIDApOyB9LCBmdW5jdGlvbiAoX2NrLCBfdikgeyB2YXIgY3VyclZhbF8wID0gaTEuybVub3YoX3YsIDUpLnRhcmdldDsgdmFyIGN1cnJWYWxfMSA9IGkxLsm1bm92KF92LCA1KS5ocmVmOyBfY2soX3YsIDQsIDAsIGN1cnJWYWxfMCwgY3VyclZhbF8xKTsgdmFyIGN1cnJWYWxfMyA9IGkxLsm1bm92KF92LCA4KS50YXJnZXQ7IHZhciBjdXJyVmFsXzQgPSBpMS7JtW5vdihfdiwgOCkuaHJlZjsgX2NrKF92LCA3LCAwLCBjdXJyVmFsXzMsIGN1cnJWYWxfNCk7IHZhciBjdXJyVmFsXzYgPSBpMS7JtW5vdihfdiwgMTEpLnRhcmdldDsgdmFyIGN1cnJWYWxfNyA9IGkxLsm1bm92KF92LCAxMSkuaHJlZjsgX2NrKF92LCAxMCwgMCwgY3VyclZhbF82LCBjdXJyVmFsXzcpOyB2YXIgY3VyclZhbF85ID0gaTEuybVub3YoX3YsIDE0KS50YXJnZXQ7IHZhciBjdXJyVmFsXzEwID0gaTEuybVub3YoX3YsIDE0KS5ocmVmOyBfY2soX3YsIDEzLCAwLCBjdXJyVmFsXzksIGN1cnJWYWxfMTApOyB2YXIgY3VyclZhbF8xMiA9IGkxLsm1bm92KF92LCAxNykudGFyZ2V0OyB2YXIgY3VyclZhbF8xMyA9IGkxLsm1bm92KF92LCAxNykuaHJlZjsgX2NrKF92LCAxNiwgMCwgY3VyclZhbF8xMiwgY3VyclZhbF8xMyk7IHZhciBjdXJyVmFsXzE1ID0gaTEuybVub3YoX3YsIDIwKS50YXJnZXQ7IHZhciBjdXJyVmFsXzE2ID0gaTEuybVub3YoX3YsIDIwKS5ocmVmOyBfY2soX3YsIDE5LCAwLCBjdXJyVmFsXzE1LCBjdXJyVmFsXzE2KTsgdmFyIGN1cnJWYWxfMTggPSBpMS7JtW5vdihfdiwgMjMpLnRhcmdldDsgdmFyIGN1cnJWYWxfMTkgPSBpMS7JtW5vdihfdiwgMjMpLmhyZWY7IF9jayhfdiwgMjIsIDAsIGN1cnJWYWxfMTgsIGN1cnJWYWxfMTkpOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBWaWV3X0hlYWRlckNvbXBvbmVudF9Ib3N0XzAoX2wpIHsgcmV0dXJuIGkxLsm1dmlkKDAsIFsoX2woKSgpLCBpMS7JtWVsZCgwLCAwLCBudWxsLCBudWxsLCAxLCBcImhlYWRlclwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19IZWFkZXJDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9IZWFkZXJDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpNi5IZWFkZXJDb21wb25lbnQsIFtpMi5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgSGVhZGVyQ29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcImhlYWRlclwiLCBpNi5IZWFkZXJDb21wb25lbnQsIFZpZXdfSGVhZGVyQ29tcG9uZW50X0hvc3RfMCwge30sIHt9LCBbXSk7XG5leHBvcnQgeyBIZWFkZXJDb21wb25lbnROZ0ZhY3RvcnkgYXMgSGVhZGVyQ29tcG9uZW50TmdGYWN0b3J5IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubmdmYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIHN0eWxlcyA9IFtcIlwiXTtcbmV4cG9ydCB7IHN0eWxlcyBhcyBzdHlsZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgLl9mb290ZXIuY29tcG9uZW50LmNzcy5uZ3N0eWxlLF9hbmd1bGFyX2NvcmUsLl9mb290ZXIuY29tcG9uZW50LF9hbmd1bGFyX3JvdXRlciBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fZm9vdGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC5fZm9vdGVyLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIi4vZm9vdGVyLmNvbXBvbmVudC5jc3MubmdzdHlsZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBzdHlsZXNfRm9vdGVyQ29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9Gb290ZXJDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfRm9vdGVyQ29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50IGFzIFJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19Gb290ZXJDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlci1yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDEsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlci1yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSksIChfbCgpKCksIGkxLsm1ZWxkKDIsIDAsIG51bGwsIG51bGwsIDAsIFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcImJqLWZvb3Rlci1yb3dcIl1dLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSldLCBudWxsLCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfRm9vdGVyQ29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiZm9vdGVyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBWaWV3X0Zvb3RlckNvbXBvbmVudF8wLCBSZW5kZXJUeXBlX0Zvb3RlckNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkyLkZvb3RlckNvbXBvbmVudCwgW2kzLlJvdXRlcl0sIG51bGwsIG51bGwpXSwgZnVuY3Rpb24gKF9jaywgX3YpIHsgX2NrKF92LCAxLCAwKTsgfSwgbnVsbCk7IH1cbnZhciBGb290ZXJDb21wb25lbnROZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y2NmKFwiZm9vdGVyXCIsIGkyLkZvb3RlckNvbXBvbmVudCwgVmlld19Gb290ZXJDb21wb25lbnRfSG9zdF8wLCB7fSwge30sIFtdKTtcbmV4cG9ydCB7IEZvb3RlckNvbXBvbmVudE5nRmFjdG9yeSBhcyBGb290ZXJDb21wb25lbnROZ0ZhY3RvcnkgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fbGF5b3V0LmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uX2hlYWRlcl9oZWFkZXIuY29tcG9uZW50Lm5nZmFjdG9yeSwuLl9oZWFkZXJfaGVhZGVyLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLi5fZm9vdGVyX2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5LC4uX2Zvb3Rlcl9mb290ZXIuY29tcG9uZW50LC5fbGF5b3V0LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIC5fbGF5b3V0LmNvbXBvbmVudC5jc3MubmdzdHlsZSxfYW5ndWxhcl9jb3JlLC4uX2hlYWRlcl9oZWFkZXIuY29tcG9uZW50Lm5nZmFjdG9yeSwuLl9oZWFkZXJfaGVhZGVyLmNvbXBvbmVudCxfYW5ndWxhcl9yb3V0ZXIsLi5fZm9vdGVyX2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5LC4uX2Zvb3Rlcl9mb290ZXIuY29tcG9uZW50LC5fbGF5b3V0LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiLi9sYXlvdXQuY29tcG9uZW50LmNzcy5uZ3N0eWxlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTIgZnJvbSBcIi4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBpNSBmcm9tIFwiLi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk3IGZyb20gXCIuL2xheW91dC5jb21wb25lbnRcIjtcbnZhciBzdHlsZXNfTGF5b3V0Q29tcG9uZW50ID0gW2kwLnN0eWxlc107XG52YXIgUmVuZGVyVHlwZV9MYXlvdXRDb21wb25lbnQgPSAvKkBfX1BVUkVfXyovIGkxLsm1Y3J0KHsgZW5jYXBzdWxhdGlvbjogMiwgc3R5bGVzOiBzdHlsZXNfTGF5b3V0Q29tcG9uZW50LCBkYXRhOiB7fSB9KTtcbmV4cG9ydCB7IFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50IGFzIFJlbmRlclR5cGVfTGF5b3V0Q29tcG9uZW50IH07XG5leHBvcnQgZnVuY3Rpb24gVmlld19MYXlvdXRDb21wb25lbnRfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiaGVhZGVyXCIsIFtdLCBudWxsLCBudWxsLCBudWxsLCBpMi5WaWV3X0hlYWRlckNvbXBvbmVudF8wLCBpMi5SZW5kZXJUeXBlX0hlYWRlckNvbXBvbmVudCkpLCBpMS7JtWRpZCgxLCAxMTQ2ODgsIG51bGwsIDAsIGkzLkhlYWRlckNvbXBvbmVudCwgW2k0LlJvdXRlcl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCgyLCAwLCBudWxsLCBudWxsLCA1LCBcIm1haW5cIiwgW1tcImNsYXNzXCIsIFwiYmotbWFpblwiXV0sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoMywgMTY3NzcyMTYsIG51bGwsIG51bGwsIDEsIFwicm91dGVyLW91dGxldFwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkpLCBpMS7JtWRpZCg0LCAyMTI5OTIsIG51bGwsIDAsIGk0LlJvdXRlck91dGxldCwgW2k0LkNoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGkxLlZpZXdDb250YWluZXJSZWYsIGkxLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgWzgsIG51bGxdLCBpMS5DaGFuZ2VEZXRlY3RvclJlZl0sIG51bGwsIG51bGwpLCAoX2woKSgpLCBpMS7JtWVsZCg1LCAwLCBudWxsLCBudWxsLCAyLCBcIm1haW5cIiwgW10sIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKSwgKF9sKCkoKSwgaTEuybVlbGQoNiwgMCwgbnVsbCwgbnVsbCwgMSwgXCJmb290ZXJcIiwgW10sIG51bGwsIG51bGwsIG51bGwsIGk1LlZpZXdfRm9vdGVyQ29tcG9uZW50XzAsIGk1LlJlbmRlclR5cGVfRm9vdGVyQ29tcG9uZW50KSksIGkxLsm1ZGlkKDcsIDExNDY4OCwgbnVsbCwgMCwgaTYuRm9vdGVyQ29tcG9uZW50LCBbaTQuUm91dGVyXSwgbnVsbCwgbnVsbCldLCBmdW5jdGlvbiAoX2NrLCBfdikgeyBfY2soX3YsIDEsIDApOyBfY2soX3YsIDQsIDApOyBfY2soX3YsIDcsIDApOyB9LCBudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfTGF5b3V0Q29tcG9uZW50X0hvc3RfMChfbCkgeyByZXR1cm4gaTEuybV2aWQoMCwgWyhfbCgpKCksIGkxLsm1ZWxkKDAsIDAsIG51bGwsIG51bGwsIDEsIFwiYm9keVwiLCBbXSwgbnVsbCwgbnVsbCwgbnVsbCwgVmlld19MYXlvdXRDb21wb25lbnRfMCwgUmVuZGVyVHlwZV9MYXlvdXRDb21wb25lbnQpKSwgaTEuybVkaWQoMSwgMTE0Njg4LCBudWxsLCAwLCBpNy5MYXlvdXRDb21wb25lbnQsIFtpNC5Sb3V0ZXJdLCBudWxsLCBudWxsKV0sIGZ1bmN0aW9uIChfY2ssIF92KSB7IF9jayhfdiwgMSwgMCk7IH0sIG51bGwpOyB9XG52YXIgTGF5b3V0Q29tcG9uZW50TmdGYWN0b3J5ID0gLypAX19QVVJFX18qLyBpMS7JtWNjZihcImJvZHlcIiwgaTcuTGF5b3V0Q29tcG9uZW50LCBWaWV3X0xheW91dENvbXBvbmVudF9Ib3N0XzAsIHt9LCB7fSwgW10pO1xuZXhwb3J0IHsgTGF5b3V0Q29tcG9uZW50TmdGYWN0b3J5IGFzIExheW91dENvbXBvbmVudE5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2FuZ3VsYXJfY29yZSwuX2FwcC5tb2R1bGUsLl9jb21wb25lbnRzX2xheW91dF9sYXlvdXQuY29tcG9uZW50LC4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2dfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksLi5fLi5fbm9kZV9tb2R1bGVzX19hbmd1bGFyX21hdGVyaWFsX3NuYWNrX2Jhcl90eXBpbmdzX2luZGV4Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfbWFpbl9wYWdlX21haW4uY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfMTAxX3BhZ2VfMTAxLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50c19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19wYWdlc19pY29fcGFnZV9pY28uY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHMuY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19wYWdlc19zZWN0aW9uX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19wYWdlc19hcnRpY2xlX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19ub19jb250ZW50X25vX2NvbnRlbnQuY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfYXV0aF9hdXRoX2RpYWxvZy5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19sYXlvdXRfbGF5b3V0LmNvbXBvbmVudC5uZ2ZhY3RvcnksX2FuZ3VsYXJfY29tbW9uLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXIsX2FuZ3VsYXJfYW5pbWF0aW9uc19icm93c2VyLF9hbmd1bGFyX3BsYXRmb3JtX2Jyb3dzZXJfYW5pbWF0aW9ucyxfYW5ndWxhcl9hbmltYXRpb25zLF9hbmd1bGFyX2Zvcm1zLF9hbmd1bGFyX2NvbW1vbl9odHRwLF9hbmd1bGFyX2Nka19iaWRpLF9hbmd1bGFyX2Nka19wbGF0Zm9ybSxfYW5ndWxhcl9jZGtfc2Nyb2xsaW5nLF9hbmd1bGFyX2Nka19vdmVybGF5LF9hbmd1bGFyX2Nka19hMTF5LF9hbmd1bGFyX21hdGVyaWFsX2RpYWxvZyxfYW5ndWxhcl9tYXRlcmlhbF9zb3J0LF9hbmd1bGFyX2Nka19sYXlvdXQsX2FuZ3VsYXJfbWF0ZXJpYWxfc25hY2tfYmFyLF9hbmd1bGFyX21hdGVyaWFsX2NvcmUsX2FuZ3VsYXJfcm91dGVyLC5fc2VydmljZXNfbWVzc2FnZV9tZXNzYWdlLnNlcnZpY2UsLl9zZXJ2aWNlc191c2VyX3VzZXIuc2VydmljZSwuX3NlcnZpY2VzX2FwaV9hcGkuc2VydmljZSwuX3NlcnZpY2VzX3lvdXR1YmVfeW91dHViZS5zZXJ2aWNlLC5fc2VydmljZXNfcHVibGljYXRpb25fcHVibGljYXRpb24uc2VydmljZSxfYW5ndWxhcl9jZGtfcG9ydGFsLF9hbmd1bGFyX2Nka190YWJsZSxfYW5ndWxhcl9tYXRlcmlhbF90YWJsZSxfYW5ndWxhcl9tYXRlcmlhbF9mb3JtX2ZpZWxkLF9hbmd1bGFyX21hdGVyaWFsX2lucHV0LF9hbmd1bGFyX21hdGVyaWFsX2J1dHRvbiwuX2NvbXBvbmVudHNfcGFnZXNfbWFpbl9wYWdlX21haW4uY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc18xMDFfcGFnZV8xMDEuY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQsLl9jb21wb25lbnRzX3BhZ2VzX2N1cnJlbmNpZXNfcGFnZV9jdXJyZW5jaWVzX2l0ZW0uY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHMuY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQsLl9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlcy5jb21wb25lbnQsLl9jb21wb25lbnRzX3BhZ2VzX2V4Y2hhbmdlc19wYWdlX2V4Y2hhbmdlc19pdGVtLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvX2l0ZW0uY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0cy5jb21wb25lbnQsLl9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19zZWN0aW9uX3BhZ2Vfc2VjdGlvbi5jb21wb25lbnQsLl9jb21wb25lbnRzX3BhZ2VzX2FydGljbGVfcGFnZV9hcnRpY2xlLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfbm9fY29udGVudF9ub19jb250ZW50LmNvbXBvbmVudCBQVVJFX0lNUE9SVFNfRU5EICovXG4vKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9hbmd1bGFyX2NvcmUsLl9hcHAubW9kdWxlLC5fY29tcG9uZW50c19sYXlvdXRfbGF5b3V0LmNvbXBvbmVudCwuLl8uLl9ub2RlX21vZHVsZXNfX2FuZ3VsYXJfbWF0ZXJpYWxfZGlhbG9nX3R5cGluZ3NfaW5kZXgubmdmYWN0b3J5LC4uXy4uX25vZGVfbW9kdWxlc19fYW5ndWxhcl9tYXRlcmlhbF9zbmFja19iYXJfdHlwaW5nc19pbmRleC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX21haW5fcGFnZV9tYWluLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzXzEwMV9wYWdlXzEwMS5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llcy5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX2V2ZW50c19wYWdlX2V2ZW50cy5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19wYWdlc19ldmVudHNfcGFnZV9ldmVudHNfaXRlbS5jb21wb25lbnQubmdmYWN0b3J5LC5fY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfZXhjaGFuZ2VzX3BhZ2VfZXhjaGFuZ2VzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfaWNvX3BhZ2VfaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljb19pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzLmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX3BhZ2VzX21hcmtldHNfcGFnZV9tYXJrZXRzX2l0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfc2VjdGlvbl9wYWdlX3NlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfcGFnZXNfYXJ0aWNsZV9wYWdlX2FydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfbm9fY29udGVudF9ub19jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnksLl9jb21wb25lbnRzX2F1dGhfYXV0aF9kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeSwuX2NvbXBvbmVudHNfbGF5b3V0X2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5LF9hbmd1bGFyX2NvbW1vbixfYW5ndWxhcl9wbGF0Zm9ybV9icm93c2VyLF9hbmd1bGFyX2FuaW1hdGlvbnNfYnJvd3NlcixfYW5ndWxhcl9wbGF0Zm9ybV9icm93c2VyX2FuaW1hdGlvbnMsX2FuZ3VsYXJfYW5pbWF0aW9ucyxfYW5ndWxhcl9mb3JtcyxfYW5ndWxhcl9jb21tb25faHR0cCxfYW5ndWxhcl9jZGtfYmlkaSxfYW5ndWxhcl9jZGtfcGxhdGZvcm0sX2FuZ3VsYXJfY2RrX3Njcm9sbGluZyxfYW5ndWxhcl9jZGtfb3ZlcmxheSxfYW5ndWxhcl9jZGtfYTExeSxfYW5ndWxhcl9tYXRlcmlhbF9kaWFsb2csX2FuZ3VsYXJfbWF0ZXJpYWxfc29ydCxfYW5ndWxhcl9jZGtfbGF5b3V0LF9hbmd1bGFyX21hdGVyaWFsX3NuYWNrX2JhcixfYW5ndWxhcl9tYXRlcmlhbF9jb3JlLF9hbmd1bGFyX3JvdXRlciwuX3NlcnZpY2VzX21lc3NhZ2VfbWVzc2FnZS5zZXJ2aWNlLC5fc2VydmljZXNfdXNlcl91c2VyLnNlcnZpY2UsLl9zZXJ2aWNlc19hcGlfYXBpLnNlcnZpY2UsLl9zZXJ2aWNlc195b3V0dWJlX3lvdXR1YmUuc2VydmljZSwuX3NlcnZpY2VzX3B1YmxpY2F0aW9uX3B1YmxpY2F0aW9uLnNlcnZpY2UsX2FuZ3VsYXJfY2RrX3BvcnRhbCxfYW5ndWxhcl9jZGtfdGFibGUsX2FuZ3VsYXJfbWF0ZXJpYWxfdGFibGUsX2FuZ3VsYXJfbWF0ZXJpYWxfZm9ybV9maWVsZCxfYW5ndWxhcl9tYXRlcmlhbF9pbnB1dCxfYW5ndWxhcl9tYXRlcmlhbF9idXR0b24sLl9jb21wb25lbnRzX3BhZ2VzX21haW5fcGFnZV9tYWluLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfcGFnZXNfMTAxX3BhZ2VfMTAxLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfcGFnZXNfY3VycmVuY2llc19wYWdlX2N1cnJlbmNpZXMuY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19jdXJyZW5jaWVzX3BhZ2VfY3VycmVuY2llc19pdGVtLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfcGFnZXNfZXZlbnRzX3BhZ2VfZXZlbnRzX2l0ZW0uY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXMuY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19leGNoYW5nZXNfcGFnZV9leGNoYW5nZXNfaXRlbS5jb21wb25lbnQsLl9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljby5jb21wb25lbnQsLl9jb21wb25lbnRzX3BhZ2VzX2ljb19wYWdlX2ljb19pdGVtLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfcGFnZXNfbWFya2V0c19wYWdlX21hcmtldHMuY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19tYXJrZXRzX3BhZ2VfbWFya2V0c19pdGVtLmNvbXBvbmVudCwuX2NvbXBvbmVudHNfcGFnZXNfc2VjdGlvbl9wYWdlX3NlY3Rpb24uY29tcG9uZW50LC5fY29tcG9uZW50c19wYWdlc19hcnRpY2xlX3BhZ2VfYXJ0aWNsZS5jb21wb25lbnQsLl9jb21wb25lbnRzX25vX2NvbnRlbnRfbm9fY29udGVudC5jb21wb25lbnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGkzIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nL3R5cGluZ3MvaW5kZXgubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhci90eXBpbmdzL2luZGV4Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTUgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzLzEwMS9wYWdlLTEwMS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpNyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2N1cnJlbmNpZXMvcGFnZS1jdXJyZW5jaWVzLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGk4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpOSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9wYWdlLWV2ZW50cy5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTAgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9ldmVudHMvcGFnZS1ldmVudHMtaXRlbS5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMTEgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTEyIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXhjaGFuZ2VzL3BhZ2UtZXhjaGFuZ2VzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTEzIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvaWNvL3BhZ2UtaWNvLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkxNiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21hcmtldHMvcGFnZS1tYXJrZXRzLWl0ZW0uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE3IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE4IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvYXJ0aWNsZS9wYWdlLWFydGljbGUuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTE5IGZyb20gXCIuL2NvbXBvbmVudHMvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGkyMCBmcm9tIFwiLi9jb21wb25lbnRzL2F1dGgvYXV0aC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgaTIxIGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQubmdmYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBpMjIgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgaTIzIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgKiBhcyBpMjQgZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3NlclwiO1xuaW1wb3J0ICogYXMgaTI1IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCAqIGFzIGkyNiBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0ICogYXMgaTI3IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0ICogYXMgaTI4IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0ICogYXMgaTI5IGZyb20gXCJAYW5ndWxhci9jZGsvYmlkaVwiO1xuaW1wb3J0ICogYXMgaTMwIGZyb20gXCJAYW5ndWxhci9jZGsvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGkzMSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3Njcm9sbGluZ1wiO1xuaW1wb3J0ICogYXMgaTMyIGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0ICogYXMgaTMzIGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xuaW1wb3J0ICogYXMgaTM0IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCAqIGFzIGkzNSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0ICogYXMgaTM2IGZyb20gXCJAYW5ndWxhci9jZGsvbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBpMzcgZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0ICogYXMgaTM4IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMzkgZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgaTQwIGZyb20gXCIuL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBpNDEgZnJvbSBcIi4vc2VydmljZXMvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0MiBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0MyBmcm9tIFwiLi9zZXJ2aWNlcy95b3V0dWJlL3lvdXR1YmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTQ0IGZyb20gXCIuL3NlcnZpY2VzL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGk0NSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3BvcnRhbFwiO1xuaW1wb3J0ICogYXMgaTQ2IGZyb20gXCJAYW5ndWxhci9jZGsvdGFibGVcIjtcbmltcG9ydCAqIGFzIGk0NyBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcbmltcG9ydCAqIGFzIGk0OCBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0ICogYXMgaTQ5IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xuaW1wb3J0ICogYXMgaTUwIGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcbmltcG9ydCAqIGFzIGk1MSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL21haW4vcGFnZS1tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTUyIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvMTAxL3BhZ2UtMTAxLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTUzIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvY3VycmVuY2llcy9wYWdlLWN1cnJlbmNpZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNTQgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9jdXJyZW5jaWVzL3BhZ2UtY3VycmVuY2llcy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU1IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTU2IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL3BhZ2UtZXZlbnRzLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNTcgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNTggZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9leGNoYW5nZXMvcGFnZS1leGNoYW5nZXMtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk1OSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2MCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VzL2ljby9wYWdlLWljby1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYxIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvbWFya2V0cy9wYWdlLW1hcmtldHMuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjIgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9tYXJrZXRzL3BhZ2UtbWFya2V0cy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgaTYzIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZXMvc2VjdGlvbi9wYWdlLXNlY3Rpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBpNjQgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlcy9hcnRpY2xlL3BhZ2UtYXJ0aWNsZS5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGk2NSBmcm9tIFwiLi9jb21wb25lbnRzL25vLWNvbnRlbnQvbm8tY29udGVudC5jb21wb25lbnRcIjtcbnZhciBBcHBNb2R1bGVOZ0ZhY3RvcnkgPSAvKkBfX1BVUkVfXyovIGkwLsm1Y21mKGkxLkFwcE1vZHVsZSwgW2kyLkxheW91dENvbXBvbmVudF0sIGZ1bmN0aW9uIChfbCkgeyByZXR1cm4gaTAuybVtb2QoW2kwLsm1bXBkKDUxMiwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMC7JtUNvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFtbOCwgW2kzLk1hdERpYWxvZ0NvbnRhaW5lck5nRmFjdG9yeSwgaTQuTWF0U25hY2tCYXJDb250YWluZXJOZ0ZhY3RvcnksIGk0LlNpbXBsZVNuYWNrQmFyTmdGYWN0b3J5LCBpNS5QYWdlTWFpbkNvbXBvbmVudE5nRmFjdG9yeSwgaTYuUGFnZTEwMUNvbXBvbmVudE5nRmFjdG9yeSwgaTcuUGFnZUN1cnJlbmNpZXNDb21wb25lbnROZ0ZhY3RvcnksIGk4LlBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudE5nRmFjdG9yeSwgaTkuUGFnZUV2ZW50c0NvbXBvbmVudE5nRmFjdG9yeSwgaTEwLlBhZ2VFdmVudHNJdGVtQ29tcG9uZW50TmdGYWN0b3J5LCBpMTEuUGFnZUV4Y2hhbmdlc0NvbXBvbmVudE5nRmFjdG9yeSwgaTEyLlBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50TmdGYWN0b3J5LCBpMTMuUGFnZUlDT0NvbXBvbmVudE5nRmFjdG9yeSwgaTE0LlBhZ2VJQ09JdGVtQ29tcG9uZW50TmdGYWN0b3J5LCBpMTUuUGFnZU1hcmtldHNDb21wb25lbnROZ0ZhY3RvcnksIGkxNi5QYWdlTWFya2V0c0l0ZW1Db21wb25lbnROZ0ZhY3RvcnksIGkxNy5QYWdlU2VjdGlvbkNvbXBvbmVudE5nRmFjdG9yeSwgaTE4LlBhZ2VBcnRpY2xlQ29tcG9uZW50TmdGYWN0b3J5LCBpMTkuTm9Db250ZW50Q29tcG9uZW50TmdGYWN0b3J5LCBpMjAuQXV0aERpYWxvZ0NvbXBvbmVudE5nRmFjdG9yeSwgaTIxLkxheW91dENvbXBvbmVudE5nRmFjdG9yeV1dLCBbMywgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXSwgaTAuTmdNb2R1bGVSZWZdKSwgaTAuybVtcGQoNTEyMCwgaTAuTE9DQUxFX0lELCBpMC7JtW0sIFtbMywgaTAuTE9DQUxFX0lEXV0pLCBpMC7JtW1wZCg0NjA4LCBpMjIuTmdMb2NhbGl6YXRpb24sIGkyMi5OZ0xvY2FsZUxvY2FsaXphdGlvbiwgW2kwLkxPQ0FMRV9JRCwgWzIsIGkyMi7JtWFdXSksIGkwLsm1bXBkKDUxMjAsIGkwLkl0ZXJhYmxlRGlmZmVycywgaTAuybVrLCBbXSksIGkwLsm1bXBkKDUxMjAsIGkwLktleVZhbHVlRGlmZmVycywgaTAuybVsLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy5Eb21TYW5pdGl6ZXIsIGkyMy7JtWUsIFtpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNjE0NCwgaTAuU2FuaXRpemVyLCBudWxsLCBbaTIzLkRvbVNhbml0aXplcl0pLCBpMC7JtW1wZCg0NjA4LCBpMjMuSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBpMjMuSGFtbWVyR2VzdHVyZUNvbmZpZywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMjMuRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCBmdW5jdGlvbiAocDBfMCwgcDBfMSwgcDFfMCwgcDJfMCwgcDJfMSkgeyByZXR1cm4gW25ldyBpMjMuybVEb21FdmVudHNQbHVnaW4ocDBfMCwgcDBfMSksIG5ldyBpMjMuybVLZXlFdmVudHNQbHVnaW4ocDFfMCksIG5ldyBpMjMuybVIYW1tZXJHZXN0dXJlc1BsdWdpbihwMl8wLCBwMl8xKV07IH0sIFtpMjIuRE9DVU1FTlQsIGkwLk5nWm9uZSwgaTIyLkRPQ1VNRU5ULCBpMjIuRE9DVU1FTlQsIGkyMy5IQU1NRVJfR0VTVFVSRV9DT05GSUddKSwgaTAuybVtcGQoNDYwOCwgaTIzLkV2ZW50TWFuYWdlciwgaTIzLkV2ZW50TWFuYWdlciwgW2kyMy5FVkVOVF9NQU5BR0VSX1BMVUdJTlMsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCgxMzU2ODAsIGkyMy7JtURvbVNoYXJlZFN0eWxlc0hvc3QsIGkyMy7JtURvbVNoYXJlZFN0eWxlc0hvc3QsIFtpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNDYwOCwgaTIzLsm1RG9tUmVuZGVyZXJGYWN0b3J5MiwgaTIzLsm1RG9tUmVuZGVyZXJGYWN0b3J5MiwgW2kyMy5FdmVudE1hbmFnZXIsIGkyMy7JtURvbVNoYXJlZFN0eWxlc0hvc3RdKSwgaTAuybVtcGQoNTEyMCwgaTI0LkFuaW1hdGlvbkRyaXZlciwgaTI1Lsm1YywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMjQuybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIGkyNS7JtWQsIFtdKSwgaTAuybVtcGQoNDYwOCwgaTI0Lsm1QW5pbWF0aW9uRW5naW5lLCBpMjUuybViLCBbaTI0LkFuaW1hdGlvbkRyaXZlciwgaTI0Lsm1QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyXSksIGkwLsm1bXBkKDUxMjAsIGkwLlJlbmRlcmVyRmFjdG9yeTIsIGkyNS7JtWUsIFtpMjMuybVEb21SZW5kZXJlckZhY3RvcnkyLCBpMjQuybVBbmltYXRpb25FbmdpbmUsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCg2MTQ0LCBpMjMuybVTaGFyZWRTdHlsZXNIb3N0LCBudWxsLCBbaTIzLsm1RG9tU2hhcmVkU3R5bGVzSG9zdF0pLCBpMC7JtW1wZCg0NjA4LCBpMC5UZXN0YWJpbGl0eSwgaTAuVGVzdGFiaWxpdHksIFtpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNDYwOCwgaTIzLk1ldGEsIGkyMy5NZXRhLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyMy5UaXRsZSwgaTIzLlRpdGxlLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyNi5BbmltYXRpb25CdWlsZGVyLCBpMjUuybVCcm93c2VyQW5pbWF0aW9uQnVpbGRlciwgW2kwLlJlbmRlcmVyRmFjdG9yeTIsIGkyMy5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMjcuybVpLCBpMjcuybVpLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyNy5Gb3JtQnVpbGRlciwgaTI3LkZvcm1CdWlsZGVyLCBbXSksIGkwLsm1bXBkKDQ2MDgsIGkyOC5IdHRwWHNyZlRva2VuRXh0cmFjdG9yLCBpMjguybVnLCBbaTIyLkRPQ1VNRU5ULCBpMC5QTEFURk9STV9JRCwgaTI4Lsm1ZV0pLCBpMC7JtW1wZCg0NjA4LCBpMjguybVoLCBpMjguybVoLCBbaTI4Lkh0dHBYc3JmVG9rZW5FeHRyYWN0b3IsIGkyOC7JtWZdKSwgaTAuybVtcGQoNTEyMCwgaTI4LkhUVFBfSU5URVJDRVBUT1JTLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTI4Lsm1aF0pLCBpMC7JtW1wZCg0NjA4LCBpMjguybVkLCBpMjguybVkLCBbXSksIGkwLsm1bXBkKDYxNDQsIGkyOC5YaHJGYWN0b3J5LCBudWxsLCBbaTI4Lsm1ZF0pLCBpMC7JtW1wZCg0NjA4LCBpMjguSHR0cFhockJhY2tlbmQsIGkyOC5IdHRwWGhyQmFja2VuZCwgW2kyOC5YaHJGYWN0b3J5XSksIGkwLsm1bXBkKDYxNDQsIGkyOC5IdHRwQmFja2VuZCwgbnVsbCwgW2kyOC5IdHRwWGhyQmFja2VuZF0pLCBpMC7JtW1wZCg1MTIwLCBpMjguSHR0cEhhbmRsZXIsIGkyOC7JtWludGVyY2VwdGluZ0hhbmRsZXIsIFtpMjguSHR0cEJhY2tlbmQsIFsyLCBpMjguSFRUUF9JTlRFUkNFUFRPUlNdXSksIGkwLsm1bXBkKDQ2MDgsIGkyOC5IdHRwQ2xpZW50LCBpMjguSHR0cENsaWVudCwgW2kyOC5IdHRwSGFuZGxlcl0pLCBpMC7JtW1wZCg2MTQ0LCBpMjkuRElSX0RPQ1VNRU5ULCBudWxsLCBbaTIyLkRPQ1VNRU5UXSksIGkwLsm1bXBkKDQ2MDgsIGkyOS5EaXJlY3Rpb25hbGl0eSwgaTI5LkRpcmVjdGlvbmFsaXR5LCBbWzIsIGkyOS5ESVJfRE9DVU1FTlRdXSksIGkwLsm1bXBkKDQ2MDgsIGkzMC5QbGF0Zm9ybSwgaTMwLlBsYXRmb3JtLCBbXSksIGkwLsm1bXBkKDUxMjAsIGkzMS5TY3JvbGxEaXNwYXRjaGVyLCBpMzEuU0NST0xMX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzEuU2Nyb2xsRGlzcGF0Y2hlcl0sIGkwLk5nWm9uZSwgaTMwLlBsYXRmb3JtXSksIGkwLsm1bXBkKDUxMjAsIGkzMS5WaWV3cG9ydFJ1bGVyLCBpMzEuVklFV1BPUlRfUlVMRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzEuVmlld3BvcnRSdWxlcl0sIGkzMC5QbGF0Zm9ybSwgaTAuTmdab25lXSksIGkwLsm1bXBkKDQ2MDgsIGkzMi5TY3JvbGxTdHJhdGVneU9wdGlvbnMsIGkzMi5TY3JvbGxTdHJhdGVneU9wdGlvbnMsIFtpMzEuU2Nyb2xsRGlzcGF0Y2hlciwgaTMxLlZpZXdwb3J0UnVsZXIsIGkwLk5nWm9uZV0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuT3ZlcmxheUNvbnRhaW5lciwgaTMyLsm1YSwgW1szLCBpMzIuT3ZlcmxheUNvbnRhaW5lcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMzIuybVoLCBpMzIuybVoLCBbaTMxLlZpZXdwb3J0UnVsZXIsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgaTMyLsm1ZiwgW1szLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg0NjA4LCBpMzIuT3ZlcmxheSwgaTMyLk92ZXJsYXksIFtpMzIuU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLCBpMzIuT3ZlcmxheUNvbnRhaW5lciwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMzIuybVoLCBpMzIuT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgaTAuQXBwbGljYXRpb25SZWYsIGkwLkluamVjdG9yLCBpMC5OZ1pvbmUsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzIuybVjLCBpMzIuybVkLCBbaTMyLk92ZXJsYXldKSwgaTAuybVtcGQoNDYwOCwgaTMzLkludGVyYWN0aXZpdHlDaGVja2VyLCBpMzMuSW50ZXJhY3Rpdml0eUNoZWNrZXIsIFtpMzAuUGxhdGZvcm1dKSwgaTAuybVtcGQoNDYwOCwgaTMzLkZvY3VzVHJhcEZhY3RvcnksIGkzMy5Gb2N1c1RyYXBGYWN0b3J5LCBbaTMzLkludGVyYWN0aXZpdHlDaGVja2VyLCBpMC5OZ1pvbmUsIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCgxMzYxOTIsIGkzMy5BcmlhRGVzY3JpYmVyLCBpMzMuQVJJQV9ERVNDUklCRVJfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzMuQXJpYURlc2NyaWJlcl0sIGkyMi5ET0NVTUVOVF0pLCBpMC7JtW1wZCg1MTIwLCBpMzMuTGl2ZUFubm91bmNlciwgaTMzLkxJVkVfQU5OT1VOQ0VSX1BST1ZJREVSX0ZBQ1RPUlksIFtbMywgaTMzLkxpdmVBbm5vdW5jZXJdLCBbMiwgaTMzLkxJVkVfQU5OT1VOQ0VSX0VMRU1FTlRfVE9LRU5dLCBpMjIuRE9DVU1FTlRdKSwgaTAuybVtcGQoNTEyMCwgaTMzLkZvY3VzTW9uaXRvciwgaTMzLkZPQ1VTX01PTklUT1JfUFJPVklERVJfRkFDVE9SWSwgW1szLCBpMzMuRm9jdXNNb25pdG9yXSwgaTAuTmdab25lLCBpMzAuUGxhdGZvcm1dKSwgaTAuybVtcGQoNTEyMCwgaTM0Lk1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZLCBpMzQuTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVJfRkFDVE9SWSwgW2kzMi5PdmVybGF5XSksIGkwLsm1bXBkKDQ2MDgsIGkzNC5NYXREaWFsb2csIGkzNC5NYXREaWFsb2csIFtpMzIuT3ZlcmxheSwgaTAuSW5qZWN0b3IsIFsyLCBpMjIuTG9jYXRpb25dLCBpMzQuTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1ksIFszLCBpMzQuTWF0RGlhbG9nXV0pLCBpMC7JtW1wZCg1MTIwLCBpMzUuTWF0U29ydEhlYWRlckludGwsIGkzNS5NQVRfU09SVF9IRUFERVJfSU5UTF9QUk9WSURFUl9GQUNUT1JZLCBbWzMsIGkzNS5NYXRTb3J0SGVhZGVySW50bF1dKSwgaTAuybVtcGQoNDYwOCwgaTM2Lk1lZGlhTWF0Y2hlciwgaTM2Lk1lZGlhTWF0Y2hlciwgW2kzMC5QbGF0Zm9ybV0pLCBpMC7JtW1wZCgxMzU2ODAsIGkzNi5CcmVha3BvaW50T2JzZXJ2ZXIsIGkzNi5CcmVha3BvaW50T2JzZXJ2ZXIsIFtpMzYuTWVkaWFNYXRjaGVyLCBpMC5OZ1pvbmVdKSwgaTAuybVtcGQoNDYwOCwgaTM3Lk1hdFNuYWNrQmFyLCBpMzcuTWF0U25hY2tCYXIsIFtpMzIuT3ZlcmxheSwgaTMzLkxpdmVBbm5vdW5jZXIsIGkwLkluamVjdG9yLCBpMzYuQnJlYWtwb2ludE9ic2VydmVyLCBbMywgaTM3Lk1hdFNuYWNrQmFyXV0pLCBpMC7JtW1wZCg0NjA4LCBpMzguRXJyb3JTdGF0ZU1hdGNoZXIsIGkzOC5FcnJvclN0YXRlTWF0Y2hlciwgW10pLCBpMC7JtW1wZCg1MTIwLCBpMzkuQWN0aXZhdGVkUm91dGUsIGkzOS7JtWYsIFtpMzkuUm91dGVyXSksIGkwLsm1bXBkKDQ2MDgsIGkzOS5QcmVsb2FkQWxsTW9kdWxlcywgaTM5LlByZWxvYWRBbGxNb2R1bGVzLCBbXSksIGkwLsm1bXBkKDYxNDQsIGkzOS5QcmVsb2FkaW5nU3RyYXRlZ3ksIG51bGwsIFtpMzkuUHJlbG9hZEFsbE1vZHVsZXNdKSwgaTAuybVtcGQoMTM1NjgwLCBpMzkuUm91dGVyUHJlbG9hZGVyLCBpMzkuUm91dGVyUHJlbG9hZGVyLCBbaTM5LlJvdXRlciwgaTAuTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBpMC5Db21waWxlciwgaTAuSW5qZWN0b3IsIGkzOS5QcmVsb2FkaW5nU3RyYXRlZ3ldKSwgaTAuybVtcGQoNDYwOCwgaTM5Lk5vUHJlbG9hZGluZywgaTM5Lk5vUHJlbG9hZGluZywgW10pLCBpMC7JtW1wZCg1MTIwLCBpMzkuUk9VVEVSX0lOSVRJQUxJWkVSLCBpMzkuybVpLCBbaTM5Lsm1Z10pLCBpMC7JtW1wZCg1MTIwLCBpMC5BUFBfQk9PVFNUUkFQX0xJU1RFTkVSLCBmdW5jdGlvbiAocDBfMCkgeyByZXR1cm4gW3AwXzBdOyB9LCBbaTM5LlJPVVRFUl9JTklUSUFMSVpFUl0pLCBpMC7JtW1wZCg0NjA4LCBpNDAuTWVzc2FnZVNlcnZpY2UsIGk0MC5NZXNzYWdlU2VydmljZSwgW2kwLlBMQVRGT1JNX0lELCBpMzcuTWF0U25hY2tCYXJdKSwgaTAuybVtcGQoNDYwOCwgaTQxLlVzZXJTZXJ2aWNlLCBpNDEuVXNlclNlcnZpY2UsIFtpMC5QTEFURk9STV9JRCwgaTI4Lkh0dHBDbGllbnQsIGkzNC5NYXREaWFsb2csIGk0MC5NZXNzYWdlU2VydmljZSwgaTM3Lk1hdFNuYWNrQmFyXSksIGkwLsm1bXBkKDQ2MDgsIGk0Mi5BUElTZXJ2aWNlLCBpNDIuQVBJU2VydmljZSwgW2kyOC5IdHRwQ2xpZW50LCBpMzkuUm91dGVyLCBpNDEuVXNlclNlcnZpY2UsIGk0MC5NZXNzYWdlU2VydmljZV0pLCBpMC7JtW1wZCg0NjA4LCBpNDMuWW91VHViZVNlcnZpY2UsIGk0My5Zb3VUdWJlU2VydmljZSwgW2kyOC5IdHRwQ2xpZW50LCBpNDAuTWVzc2FnZVNlcnZpY2VdKSwgaTAuybVtcGQoNDYwOCwgaTQ0LlB1YmxpY2F0aW9uU2VydmljZSwgaTQ0LlB1YmxpY2F0aW9uU2VydmljZSwgW2k0Mi5BUElTZXJ2aWNlXSksIGkwLsm1bXBkKDUxMiwgaTIyLkNvbW1vbk1vZHVsZSwgaTIyLkNvbW1vbk1vZHVsZSwgW10pLCBpMC7JtW1wZCgxMDI0LCBpMC5FcnJvckhhbmRsZXIsIGkyMy7JtWEsIFtdKSwgaTAuybVtcGQoMTAyNCwgaTAuTmdQcm9iZVRva2VuLCBmdW5jdGlvbiAoKSB7IHJldHVybiBbaTM5Lsm1YigpXTsgfSwgW10pLCBpMC7JtW1wZCgyNTYsIGkwLkFQUF9JRCwgXCJudWxsLXZudWxsXCIsIFtdKSwgaTAuybVtcGQoMjA0OCwgaTIzLsm1VFJBTlNJVElPTl9JRCwgbnVsbCwgW2kwLkFQUF9JRF0pLCBpMC7JtW1wZCg1MTIsIGkzOS7JtWcsIGkzOS7JtWcsIFtpMC5JbmplY3Rvcl0pLCBpMC7JtW1wZCgxMDI0LCBpMC5BUFBfSU5JVElBTElaRVIsIGZ1bmN0aW9uIChwMF8wLCBwMV8wLCBwMV8xLCBwMV8yLCBwMl8wKSB7IHJldHVybiBbaTIzLsm1aChwMF8wKSwgaTIzLsm1ZihwMV8wLCBwMV8xLCBwMV8yKSwgaTM5Lsm1aChwMl8wKV07IH0sIFtbMiwgaTAuTmdQcm9iZVRva2VuXSwgaTIzLsm1VFJBTlNJVElPTl9JRCwgaTIyLkRPQ1VNRU5ULCBpMC5JbmplY3RvciwgaTM5Lsm1Z10pLCBpMC7JtW1wZCg1MTIsIGkwLkFwcGxpY2F0aW9uSW5pdFN0YXR1cywgaTAuQXBwbGljYXRpb25Jbml0U3RhdHVzLCBbWzIsIGkwLkFQUF9JTklUSUFMSVpFUl1dKSwgaTAuybVtcGQoMTMxNTg0LCBpMC5BcHBsaWNhdGlvblJlZiwgaTAuQXBwbGljYXRpb25SZWYsIFtpMC5OZ1pvbmUsIGkwLsm1Q29uc29sZSwgaTAuSW5qZWN0b3IsIGkwLkVycm9ySGFuZGxlciwgaTAuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBpMC5BcHBsaWNhdGlvbkluaXRTdGF0dXNdKSwgaTAuybVtcGQoNTEyLCBpMC5BcHBsaWNhdGlvbk1vZHVsZSwgaTAuQXBwbGljYXRpb25Nb2R1bGUsIFtpMC5BcHBsaWNhdGlvblJlZl0pLCBpMC7JtW1wZCg1MTIsIGkyMy5Ccm93c2VyTW9kdWxlLCBpMjMuQnJvd3Nlck1vZHVsZSwgW1szLCBpMjMuQnJvd3Nlck1vZHVsZV1dKSwgaTAuybVtcGQoNTEyLCBpMjUuQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsIGkyNS5Ccm93c2VyQW5pbWF0aW9uc01vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyNy7JtWJhLCBpMjcuybViYSwgW10pLCBpMC7JtW1wZCg1MTIsIGkyNy5Gb3Jtc01vZHVsZSwgaTI3LkZvcm1zTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI3LlJlYWN0aXZlRm9ybXNNb2R1bGUsIGkyNy5SZWFjdGl2ZUZvcm1zTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTI4Lkh0dHBDbGllbnRYc3JmTW9kdWxlLCBpMjguSHR0cENsaWVudFhzcmZNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjguSHR0cENsaWVudE1vZHVsZSwgaTI4Lkh0dHBDbGllbnRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMjkuQmlkaU1vZHVsZSwgaTI5LkJpZGlNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNDUuUG9ydGFsTW9kdWxlLCBpNDUuUG9ydGFsTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTMwLlBsYXRmb3JtTW9kdWxlLCBpMzAuUGxhdGZvcm1Nb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzEuU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsIGkzMS5TY3JvbGxEaXNwYXRjaE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzMi5PdmVybGF5TW9kdWxlLCBpMzIuT3ZlcmxheU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzMy5BMTF5TW9kdWxlLCBpMzMuQTExeU1vZHVsZSwgW10pLCBpMC7JtW1wZCgyNTYsIGkzOC5NQVRFUklBTF9TQU5JVFlfQ0hFQ0tTLCB0cnVlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM4Lk1hdENvbW1vbk1vZHVsZSwgaTM4Lk1hdENvbW1vbk1vZHVsZSwgW1syLCBpMzguTUFURVJJQUxfU0FOSVRZX0NIRUNLU11dKSwgaTAuybVtcGQoNTEyLCBpMzQuTWF0RGlhbG9nTW9kdWxlLCBpMzQuTWF0RGlhbG9nTW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM1Lk1hdFNvcnRNb2R1bGUsIGkzNS5NYXRTb3J0TW9kdWxlLCBbXSksIGkwLsm1bXBkKDUxMiwgaTQ2LkNka1RhYmxlTW9kdWxlLCBpNDYuQ2RrVGFibGVNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNDcuTWF0VGFibGVNb2R1bGUsIGk0Ny5NYXRUYWJsZU1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzNi5MYXlvdXRNb2R1bGUsIGkzNi5MYXlvdXRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpMzcuTWF0U25hY2tCYXJNb2R1bGUsIGkzNy5NYXRTbmFja0Jhck1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGk0OC5NYXRGb3JtRmllbGRNb2R1bGUsIGk0OC5NYXRGb3JtRmllbGRNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNDkuTWF0SW5wdXRNb2R1bGUsIGk0OS5NYXRJbnB1dE1vZHVsZSwgW10pLCBpMC7JtW1wZCg1MTIsIGkzOC5NYXRSaXBwbGVNb2R1bGUsIGkzOC5NYXRSaXBwbGVNb2R1bGUsIFtdKSwgaTAuybVtcGQoNTEyLCBpNTAuTWF0QnV0dG9uTW9kdWxlLCBpNTAuTWF0QnV0dG9uTW9kdWxlLCBbXSksIGkwLsm1bXBkKDEwMjQsIGkzOS7JtWEsIGkzOS7JtWQsIFtbMywgaTM5LlJvdXRlcl1dKSwgaTAuybVtcGQoNTEyLCBpMzkuVXJsU2VyaWFsaXplciwgaTM5LkRlZmF1bHRVcmxTZXJpYWxpemVyLCBbXSksIGkwLsm1bXBkKDUxMiwgaTM5LkNoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGkzOS5DaGlsZHJlbk91dGxldENvbnRleHRzLCBbXSksIGkwLsm1bXBkKDI1NiwgaTM5LlJPVVRFUl9DT05GSUdVUkFUSU9OLCB7IHVzZUhhc2g6IGZhbHNlLCBwcmVsb2FkaW5nU3RyYXRlZ3k6IGkzOS5QcmVsb2FkQWxsTW9kdWxlcyB9LCBbXSksIGkwLsm1bXBkKDEwMjQsIGkyMi5Mb2NhdGlvblN0cmF0ZWd5LCBpMzkuybVjLCBbaTIyLlBsYXRmb3JtTG9jYXRpb24sIFsyLCBpMjIuQVBQX0JBU0VfSFJFRl0sIGkzOS5ST1VURVJfQ09ORklHVVJBVElPTl0pLCBpMC7JtW1wZCg1MTIsIGkyMi5Mb2NhdGlvbiwgaTIyLkxvY2F0aW9uLCBbaTIyLkxvY2F0aW9uU3RyYXRlZ3ldKSwgaTAuybVtcGQoNTEyLCBpMC5Db21waWxlciwgaTAuQ29tcGlsZXIsIFtdKSwgaTAuybVtcGQoNTEyLCBpMC5OZ01vZHVsZUZhY3RvcnlMb2FkZXIsIGkwLlN5c3RlbUpzTmdNb2R1bGVMb2FkZXIsIFtpMC5Db21waWxlciwgWzIsIGkwLlN5c3RlbUpzTmdNb2R1bGVMb2FkZXJDb25maWddXSksIGkwLsm1bXBkKDEwMjQsIGkzOS5ST1VURVMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtbeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IGk1MS5QYWdlTWFpbkNvbXBvbmVudCB9LCB7IHBhdGg6IFwiMTAxXCIsIGNvbXBvbmVudDogaTUyLlBhZ2UxMDFDb21wb25lbnQgfSwgeyBwYXRoOiBcImN1cnJlbmNpZXMvOmlkXCIsIGNvbXBvbmVudDogaTUzLlBhZ2VDdXJyZW5jaWVzQ29tcG9uZW50IH0sIHsgcGF0aDogXCJjdXJyZW5jaWVzXCIsIGNvbXBvbmVudDogaTU0LlBhZ2VDdXJyZW5jaWVzSXRlbUNvbXBvbmVudCB9LCB7IHBhdGg6IFwiZXZlbnRzLzppZFwiLCBjb21wb25lbnQ6IGk1NS5QYWdlRXZlbnRzQ29tcG9uZW50IH0sIHsgcGF0aDogXCJldmVudHNcIiwgY29tcG9uZW50OiBpNTYuUGFnZUV2ZW50c0l0ZW1Db21wb25lbnQgfSwgeyBwYXRoOiBcImV4Y2hhbmdlcy86aWRcIiwgY29tcG9uZW50OiBpNTcuUGFnZUV4Y2hhbmdlc0NvbXBvbmVudCB9LCB7IHBhdGg6IFwiZXhjaGFuZ2VzXCIsIGNvbXBvbmVudDogaTU4LlBhZ2VFeGNoYW5nZXNJdGVtQ29tcG9uZW50IH0sIHsgcGF0aDogXCJpY28vOmlkXCIsIGNvbXBvbmVudDogaTU5LlBhZ2VJQ09Db21wb25lbnQgfSwgeyBwYXRoOiBcImljb1wiLCBjb21wb25lbnQ6IGk2MC5QYWdlSUNPSXRlbUNvbXBvbmVudCB9LCB7IHBhdGg6IFwibWFya2V0cy86aWRcIiwgY29tcG9uZW50OiBpNjEuUGFnZU1hcmtldHNDb21wb25lbnQgfSwgeyBwYXRoOiBcIm1hcmtldHNcIiwgY29tcG9uZW50OiBpNjIuUGFnZU1hcmtldHNJdGVtQ29tcG9uZW50IH0sIHsgcGF0aDogXCI6c2VjdGlvblwiLCBjb21wb25lbnQ6IGk2My5QYWdlU2VjdGlvbkNvbXBvbmVudCB9LCB7IHBhdGg6IFwiOmRhdGUvOnVybFwiLCBjb21wb25lbnQ6IGk2NC5QYWdlQXJ0aWNsZUNvbXBvbmVudCB9LCB7IHBhdGg6IFwiKipcIiwgY29tcG9uZW50OiBpNjUuTm9Db250ZW50Q29tcG9uZW50IH1dXTsgfSwgW10pLCBpMC7JtW1wZCgxMDI0LCBpMzkuUm91dGVyLCBpMzkuybVlLCBbaTAuQXBwbGljYXRpb25SZWYsIGkzOS5VcmxTZXJpYWxpemVyLCBpMzkuQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgaTIyLkxvY2F0aW9uLCBpMC5JbmplY3RvciwgaTAuTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBpMC5Db21waWxlciwgaTM5LlJPVVRFUywgaTM5LlJPVVRFUl9DT05GSUdVUkFUSU9OLCBbMiwgaTM5LlVybEhhbmRsaW5nU3RyYXRlZ3ldLCBbMiwgaTM5LlJvdXRlUmV1c2VTdHJhdGVneV1dKSwgaTAuybVtcGQoNTEyLCBpMzkuUm91dGVyTW9kdWxlLCBpMzkuUm91dGVyTW9kdWxlLCBbWzIsIGkzOS7JtWFdLCBbMiwgaTM5LlJvdXRlcl1dKSwgaTAuybVtcGQoNTEyLCBpMS5BcHBNb2R1bGUsIGkxLkFwcE1vZHVsZSwgW10pLCBpMC7JtW1wZCgyNTYsIGkyOC7JtWUsIFwiWFNSRi1UT0tFTlwiLCBbXSksIGkwLsm1bXBkKDI1NiwgaTI4Lsm1ZiwgXCJYLVhTUkYtVE9LRU5cIiwgW10pXSk7IH0pO1xuZXhwb3J0IHsgQXBwTW9kdWxlTmdGYWN0b3J5IGFzIEFwcE1vZHVsZU5nRmFjdG9yeSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAubW9kdWxlLm5nZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXIsIGVuYWJsZURlYnVnVG9vbHMsIGRpc2FibGVEZWJ1Z1Rvb2xzIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBcHBNb2R1bGVOZ0ZhY3RvcnkgfSBmcm9tICcuL2FwcC5tb2R1bGUubmdmYWN0b3J5JztcbmNvbnNvbGUubG9nKGAke3Byb2Nlc3MuZW52LkFQUF9OQU1FfSB2JHtwcm9jZXNzLmVudi5BUFBfVkVSU0lPTn1gKTtcbmxldCBkZWNvcmF0ZU1vZHVsZVJlZiA9ICh2YWx1ZSkgPT4gdmFsdWU7XG5jb25zdCDJtTAgPSBkZWNvcmF0ZU1vZHVsZVJlZjtcbmlmIChwcm9jZXNzLmVudi5ERUJVRykge1xuICAgIGRlY29yYXRlTW9kdWxlUmVmID0gKG1vZFJlZikgPT4ge1xuICAgICAgICBjb25zdCBhcHBSZWYgPSBtb2RSZWYuaW5qZWN0b3IuZ2V0KEFwcGxpY2F0aW9uUmVmKTtcbiAgICAgICAgY29uc3QgY21wUmVmID0gYXBwUmVmLmNvbXBvbmVudHNbMF07XG4gICAgICAgIGxldCBuZyA9IHdpbmRvdy5uZztcbiAgICAgICAgZW5hYmxlRGVidWdUb29scyhjbXBSZWYpO1xuICAgICAgICB3aW5kb3cubmcucHJvYmUgPSBuZy5wcm9iZTtcbiAgICAgICAgd2luZG93Lm5nLmNvcmVUb2tlbnMgPSBuZy5jb3JlVG9rZW5zO1xuICAgICAgICByZXR1cm4gbW9kUmVmO1xuICAgIH07XG59XG5lbHNlIHtcbiAgICBlbmFibGVQcm9kTW9kZSgpO1xuICAgIGRlY29yYXRlTW9kdWxlUmVmID0gKG1vZFJlZikgPT4ge1xuICAgICAgICBkaXNhYmxlRGVidWdUb29scygpO1xuICAgICAgICByZXR1cm4gbW9kUmVmO1xuICAgIH07XG59XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIHJldHVybiBwbGF0Zm9ybUJyb3dzZXIoKVxuICAgICAgICAuYm9vdHN0cmFwTW9kdWxlRmFjdG9yeShBcHBNb2R1bGVOZ0ZhY3RvcnkpXG4gICAgICAgIC50aGVuKGRlY29yYXRlTW9kdWxlUmVmKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbn1cbmNvbnN0IGRvbVJlYWR5SGFuZGxlciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZG9tUmVhZHlIYW5kbGVyKTtcbiAgICBtYWluKCk7XG59O1xuY29uc3QgybUxID0gZG9tUmVhZHlIYW5kbGVyO1xuc3dpdGNoIChkb2N1bWVudC5yZWFkeVN0YXRlKSB7XG4gICAgY2FzZSAnbG9hZGluZyc6XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkb21SZWFkeUhhbmRsZXIpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdpbnRlcmFjdGl2ZSc6XG4gICAgY2FzZSAnY29tcGxldGUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICAgIG1haW4oKTtcbn1cbmV4cG9ydCB7IMm1MCwgybUxIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4uZnJvbnQudHNcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiXSwic291cmNlUm9vdCI6IiJ9