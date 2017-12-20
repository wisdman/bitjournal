#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/debug/index.ts + 2 modules
var debug = __webpack_require__(7);

// EXTERNAL MODULE: external "http"
var external__http_ = __webpack_require__(8);
var external__http__default = /*#__PURE__*/__webpack_require__.n(external__http_);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/error.ts

class error_HttpError extends Error {
    constructor(status, message, origin) {
        if (message instanceof Error) {
            origin = message;
            message = origin.message;
        }
        if (origin === undefined) {
            origin = new Error(message || 'Unknown internal server error');
        }
        if (!message || status >= 500) {
            message = external__http_["STATUS_CODES"][status] || 'Undefined error';
        }
        super(message);
        this.status = status;
        this.origin = origin;
    }
}

// EXTERNAL MODULE: external "string_decoder"
var external__string_decoder_ = __webpack_require__(14);
var external__string_decoder__default = /*#__PURE__*/__webpack_require__.n(external__string_decoder_);

// EXTERNAL MODULE: external "querystring"
var external__querystring_ = __webpack_require__(30);
var external__querystring__default = /*#__PURE__*/__webpack_require__.n(external__querystring_);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/context/request.ts



class request_Request {
    constructor(req, _ctx) {
        this.req = req;
        this._ctx = _ctx;
    }
    getHeader(key) {
        let value = this.req.headers[key.toLowerCase()];
        return Array.isArray(value) ? value.join(';') : value;
    }
    get socket() {
        return this.req.socket;
    }
    get ip() {
        return this.getHeader('X-Real-IP') || this.getHeader('X-Forwarded-For') || this.req.connection.remoteAddress || '';
    }
    get host() {
        let host = this.getHeader('X-Forwarded-Host') || this.getHeader('Host');
        return host && host.split(/\s*,\s*/)[0] || '';
    }
    get hostname() {
        if (!this.host)
            return '';
        if (this.host[0] === '[') {
            let hostname = /^\[[a-f0-9:]+\]/.exec(this.host);
            return hostname && hostname[0] || '';
        }
        return this.host.split(':')[0] || '';
    }
    get port() {
        let port = /\:([0-9]+)$/.exec(this.host);
        return port && ~~port[1] || 80;
    }
    get method() {
        return (this.req.method || '').toUpperCase();
    }
    get path() {
        return this.req.url || '';
    }
    get pathname() {
        return (this.req.url || '').split('?')[0]
            .split(/\/+/)
            .filter(item => !!item);
    }
    get query() {
        let query = (this.req.url || '').split('?')
            .slice(1)
            .join('?');
        return Object(external__querystring_["parse"])(query);
    }
    get type() {
        let type = this.getHeader('Content-Type');
        if (typeof type !== 'string')
            return undefined;
        return type.split(';')[0].trim();
    }
    get length() {
        return ~~(this.getHeader('content-length') || '');
    }
    async raw() {
        const contentLength = this.length;
        return new Promise((resolve, reject) => {
            let buffer = Buffer.alloc(0);
            const onAborted = () => {
                cleanup();
                reject(new error_HttpError(400, 'Request aborted'));
            };
            const onError = (error) => {
                cleanup();
                reject(new error_HttpError(400, 'Receive data error'));
            };
            const onData = (chunk) => {
                buffer = Buffer.concat([buffer, chunk]);
            };
            const onEnd = () => {
                cleanup();
                if (contentLength > 0 && buffer.length !== contentLength) {
                    reject(new error_HttpError(400, 'Request size did not match content length'));
                }
                resolve(buffer);
            };
            const onClose = () => {
                cleanup();
            };
            var cleanup = () => {
                this.req.removeListener('aborted', onAborted);
                this.req.removeListener('end', onError);
                this.req.removeListener('data', onData);
                this.req.removeListener('error', onEnd);
                this.req.removeListener('close', onClose);
                this.req.unpipe();
            };
            this.req.on('aborted', onAborted);
            this.req.on('error', onError);
            this.req.on('data', onData);
            this.req.on('end', onEnd);
            this.req.on('close', onClose);
        });
    }
    async text() {
        let raw = await this.raw();
        try {
            let decoder = new external__string_decoder_["StringDecoder"]('utf8');
            return decoder.end(raw);
        }
        catch (error) {
            throw new error_HttpError(400, 'Receive data is not a UTF8 string', error);
        }
    }
    async json() {
        if (this.type !== 'application/json') {
            throw new error_HttpError(400, 'Only application/json data are allowed');
        }
        let text = await this.text();
        try {
            return JSON.parse(text);
        }
        catch (err) {
            throw new error_HttpError(400, 'Invalid json received');
        }
    }
    valueOf() {
        return {
            heders: this.req.headers,
            ip: this.ip,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            method: this.method,
            path: this.path,
            pathname: this.pathname,
            query: this.query,
            type: this.type,
            length: this.length
        };
    }
    toJSON() {
        return this.valueOf();
    }
}

// EXTERNAL MODULE: external "path"
var external__path_ = __webpack_require__(10);
var external__path__default = /*#__PURE__*/__webpack_require__.n(external__path_);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/file-type/magic.ts
/* harmony default export */ var magic = ([
    { mime: 'image/jpeg', extension: 'jpg',
        offset: 0, header: new Uint8Array([0xFF, 0xD8, 0xFF]) },
    { mime: 'image/png', extension: 'png',
        offset: 0, header: new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]) },
    { mime: 'image/gif', extension: 'gif',
        offset: 0, header: new Uint8Array([0x47, 0x49, 0x46]) },
    { mime: 'image/webp', extension: 'webp',
        offset: 8, header: new Uint8Array([0x57, 0x45, 0x42, 0x50]) },
]);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/file-type/is-svg.ts
const HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
const SVG_REGEX = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:<![^>]*>)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;
const isBinary = (input) => {
    for (let i = 0; i < 24; i++)
        if (input[i] === 65533 || input[i] <= 8)
            return true;
    return false;
};
/* harmony default export */ var is_svg = ((input) => !isBinary(input) && SVG_REGEX.test(input.toString().replace(HTML_COMMENT_REGEX, '')));

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/file-type/file-type.ts


class file_type_FileType {
    constructor(input) {
        const buffer = (input instanceof Uint8Array) ? input : new Uint8Array(input);
        if (buffer.length <= 1)
            return this;
        for (let pattern of magic)
            if (this.check(buffer, pattern.header, pattern.offset)) {
                this.mime = pattern.mime;
                this.extension = pattern.extension;
                return this;
            }
        if (is_svg(buffer)) {
            this.mime = 'image/svg+xml';
            this.extension = 'svg';
            return this;
        }
        this.mime = 'application/octet-stream';
        this.extension = '';
    }
    check(buffer, header, offset = 0) {
        for (let i = 0; i < header.length; i++)
            if (header[i] !== buffer[i + offset])
                return false;
        return true;
    }
    toJSON() {
        return {
            extension: this.extension,
            mime: this.mime,
        };
    }
    toString() {
        return this.mime;
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                throw new TypeError('Cannot convert a FileType value to a number value');
            case 'string':
            case 'default':
                return this.mime;
            default:
                throw new TypeError('Cannot convert a FileType value to unknown value');
        }
    }
    [Symbol.toStringTag]() {
        return 'FileType';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/file-type/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/context/response.ts



class response_Response {
    constructor(res, _ctx) {
        this.res = res;
        this._ctx = _ctx;
        this.set(404);
    }
    get finished() {
        return this.res.finished;
    }
    hasHeader(key) {
        return this.res.hasHeader(key);
    }
    getHeader(key) {
        let value = this.res.getHeader(key);
        return Array.isArray(value) ? value.join(';') : value;
    }
    setHeader(key, value) {
        this.res.setHeader(key, value);
    }
    removeHeader(key) {
        return this.res.removeHeader(key);
    }
    flushHeaders() {
        return this.res.flushHeaders();
    }
    get type() {
        let type = this.getHeader('Content-Type');
        if (typeof type !== 'string')
            return undefined;
        return type.split(';')[0].trim();
    }
    get length() {
        return ~~(this.getHeader('Content-Length') || '');
    }
    get status() {
        return this.res.statusCode;
    }
    get body() {
        return this._body;
    }
    set(status, value) {
        if (this.finished)
            return;
        if (this.res.headersSent)
            throw new Error('Headears was sended');
        if (typeof status !== 'number') {
            value = status;
            status = undefined;
        }
        if (value === undefined || value === null) {
            this.res.statusCode = status || 404;
            this._body = external__http_["STATUS_CODES"][this.res.statusCode];
            this.removeHeader('Content-Type');
            this.removeHeader('Content-Length');
            this.removeHeader('Transfer-Encoding');
            return;
        }
        if (value === null) {
            this.res.statusCode = status || 204;
            this._body = null;
            this.removeHeader('Content-Type');
            this.removeHeader('Content-Length');
            this.removeHeader('Transfer-Encoding');
            return;
        }
        this.res.statusCode = status || 200;
        if (typeof value === 'string') {
            this._body = value;
            this.setHeader('Content-Type', (/^\s*</.test(value) ? 'text/html' : 'text/plain') + '; charset=utf-8');
            this.setHeader('Content-Length', Buffer.byteLength(value));
            return;
        }
        if (Buffer.isBuffer(value)) {
            let type = new file_type_FileType(value);
            this._body = value;
            this.setHeader('Content-Type', type.mime || 'application/octet-stream');
            this.setHeader('Content-Length', value.length);
            let contentDisposition = 'inline';
            const path = Object(external__path_["parse"])(this._ctx.request.path);
            if (path.name) {
                const ext = type.extension || path.ext || '';
                if (ext)
                    contentDisposition += `; filename=${path.name}.${ext}`;
            }
            this.setHeader('Content-Disposition', contentDisposition);
            return;
        }
        if (typeof value === 'object') {
            let jsonString = JSON.stringify(value);
            this._body = jsonString;
            this.setHeader('Content-Type', 'application/json; charset=utf-8');
            this.setHeader('Content-Length', Buffer.byteLength(jsonString));
            return;
        }
        throw TypeError('Unknown response body type');
    }
    respond() {
        if (this.finished)
            return;
        if (this._body === null || this._body === undefined) {
            this.res.end();
            return;
        }
        else {
            this.res.end(this._body);
        }
    }
    end(status, value) {
        this.set(status, value);
        this.respond();
    }
    valueOf() {
        return {
            heders: this.res.getHeaders(),
            status: this.status,
            type: this.type,
            length: this.length,
            body: this.body
        };
    }
    toJSON() {
        return this.valueOf();
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/route.ts
class Route {
    constructor(_ctx) {
        this._ctx = _ctx;
        this.finished = false;
        this.data = {};
    }
    get method() {
        return this._ctx.request.method;
    }
    get path() {
        return this._ctx.request.path;
    }
    get pathname() {
        return '/' + this._ctx.request.pathname.join('/');
    }
    get query() {
        return this._ctx.request.query;
    }
    valueOf() {
        return {
            finished: this.finished,
            data: this.data,
            method: this.method,
            path: this.path,
            pathname: this.pathname,
            query: this.query,
        };
    }
    toJSON() {
        return this.valueOf();
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/methods.ts
class Methods extends Array {
    static get(target) {
        return this.List.get(target) || new Methods();
    }
    static set(target, fields) {
        this.List.set(target, fields);
    }
}
Methods.List = new WeakMap();

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/path-route/pattern.ts
const ANY_SYMBOLS = /^\*+$/;
const ANY_SYMBOLS_PATTERN = '[^\/]+';
const ANY_SYMBOLS_KEY_PATTERN = '([^\/]+)';
const KEY_SYMBOLS = /^\:+(.*)$/;
const KEY_PATTERN = /^[a-z][a-z0-9]*$/i;
const START_PATTERN = '^(?:\/+)?';
const END_PATTERN = '(?:\/+)?$';

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/path-route/escape-regexp.ts
const escapeRegExpString = (st) => st.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/path-route/path-route.ts


class path_route_PathRoute {
    constructor(path = '') {
        this.keys = ['*'];
        let patternString = path.split(/\s*\/\s*/)
            .filter(item => item.length)
            .map(item => {
            if (ANY_SYMBOLS.test(item))
                return ANY_SYMBOLS_PATTERN;
            let key = KEY_SYMBOLS.exec(item);
            if (!key)
                return escapeRegExpString(item);
            let id = key[1];
            if (!KEY_PATTERN.test(id))
                throw TypeError(`Key name "${id}" does not match "${KEY_PATTERN.source}" pattern`);
            this.keys.push(id);
            return ANY_SYMBOLS_KEY_PATTERN;
        })
            .join('(?:\/+)');
        this.pattern = new RegExp(START_PATTERN + patternString + END_PATTERN);
    }
    exec(path = '') {
        let result = this.pattern.exec(path);
        if (!result)
            return undefined;
        return result.reduce((prev, item, i) => {
            prev[this.keys[i]] = item;
            return prev;
        }, {});
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/path-route/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/route-function.ts


const route_function_debug = new debug["a" /* Debug */]('Route');
function generateRouteFunction(method, pattern, queryKeyList, propertyKey) {
    const pathRoute = new path_route_PathRoute(pattern);
    return async function (ctx, next) {
        const route = ctx.route;
        if (route.finished)
            return await next();
        if (route.method !== method || (route.method === 'HEAD' && method !== 'GET'))
            return await next();
        const match = pathRoute.exec(route.pathname);
        if (!match)
            return await next();
        for (let key of queryKeyList)
            if (!(key in route.query))
                return await next();
        route.data = match;
        ctx.debug('=== Route [%s %s] ===\n%s %o -> %s', route.method, route.path, pattern, queryKeyList, propertyKey);
        await this[propertyKey](ctx, next);
    };
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/method.ts


function Method(method, pattern = '', ...queryKeyList) {
    return (target, propertyKey) => {
        if (typeof propertyKey === 'symbol')
            throw new TypeError('Property name must be a string');
        let methods = Methods.get(target.constructor);
        methods.push(generateRouteFunction(method, pattern, queryKeyList, propertyKey));
        Methods.set(target.constructor, methods);
    };
}
const Delete = (pattern, ...queryKeyList) => Method('DELETE', pattern, ...queryKeyList);
const Get = (pattern, ...queryKeyList) => Method('GET', pattern, ...queryKeyList);
const Post = (pattern, ...queryKeyList) => Method('POST', pattern, ...queryKeyList);
const Put = (pattern, ...queryKeyList) => Method('PUT', pattern, ...queryKeyList);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/middleware/compose.ts
function Compose(middlewareList) {
    return async function (ctx, next = () => Promise.resolve()) {
        let index = -1;
        const dispatch = (i) => async () => {
            if (i <= index) {
                throw new Error('next() called multiple times');
            }
            index = i;
            if (i >= middlewareList.length) {
                return await next();
            }
            await middlewareList[i].call(this, ctx, dispatch(i + 1));
        };
        await dispatch(0)();
    };
}

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/callable/index.ts + 1 modules
var callable = __webpack_require__(13);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/middleware/middleware.ts

class Middleware extends callable["a" /* CallableClass */] {
    constructor() {
        super(async (ctx, next) => await this.main(ctx, next));
    }
    async main(ctx, next) {
        await next();
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/middleware/index.ts



// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/route.middleware.ts


const RouteFunction = Symbol('RouteFunction');
class route_middleware_RouteMiddleware extends Middleware {
    constructor() {
        super();
        this[RouteFunction] = Compose(Methods.get(this.constructor));
    }
    async main(ctx, next) {
        return this[RouteFunction].call(this, ctx, next);
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/route/index.ts




// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/session/roles.ts
class Roles {
    constructor() {
        this._roles = [];
    }
    static clearInput(arg = []) {
        return arg.reduce((prev, item) => prev.concat(item), new Array())
            .map(item => String(item).toLowerCase().trim())
            .filter((item, i, self) => !!item && self.indexOf(item) === i);
    }
    get all() {
        return this._roles.slice();
    }
    add(...arg) {
        const newRoles = Roles.clearInput(arg);
        this._roles = this._roles
            .concat(newRoles)
            .filter((item, i, self) => self.indexOf(item) === i);
    }
    remove(...arg) {
        const removeRoles = Roles.clearInput(arg);
        this._roles = this._roles
            .filter(item => !removeRoles.includes(item));
    }
    toggle(...arg) {
        const toggleRoles = Roles.clearInput(arg);
        const removeRoles = toggleRoles.filter(item => this._roles.includes(item));
        const newRoles = toggleRoles.filter(item => !this._roles.includes(item));
        this._roles = this._roles
            .filter(item => !removeRoles.includes(item))
            .concat(newRoles);
    }
    set(...arg) {
        this._roles = Roles.clearInput(arg);
    }
    reset() {
        this._roles = [];
    }
    checkAny(...arg) {
        const roles = Roles.clearInput(arg);
        for (let role in roles)
            if (this._roles.includes(role))
                return true;
        return false;
    }
    checkAll(...arg) {
        const roles = Roles.clearInput(arg);
        if (roles.length === 0)
            return false;
        for (let role in roles)
            if (!this._roles.includes(role))
                return false;
        return true;
    }
    valueOf() {
        return this.all;
    }
    toJSON() {
        return this.valueOf();
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/session/acl.ts

function ACL(...args) {
    const roles = Roles.clearInput(args);
    return (target, propertyKey, descriptor) => {
        if (!descriptor)
            return descriptor;
        const originalFunction = descriptor.value;
        descriptor.value = async function (ctx, next) {
            const session = ctx.session;
            if (!ctx.session) {
                ctx.debug('=== ACL Denied ===\nSession is undefined');
                ctx.set(403);
                return await next();
            }
            if (!ctx.session.roles.checkAny(roles)) {
                ctx.debug('=== ACL [%o] Denied ===\nSession roles: %o\nProperty key: %s', roles, ctx.session.roles, propertyKey);
                ctx.set(403);
                return await next();
            }
            ctx.debug('=== ACL [%o] Allow ===\nSession roles: %o\nProperty key: %s', roles, ctx.session.roles, propertyKey);
            await originalFunction.call(this, ctx, next);
        };
        return descriptor;
    };
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/session/session.ts

const SESSION_ID_REGEXP = /^[0-9a-z]+$/;
class session_Session {
    constructor(_ctx) {
        this._ctx = _ctx;
        this._id = '';
        this.data = {};
        this.roles = new Roles();
    }
    get ip() {
        return this._ctx.request.ip;
    }
    get id() {
        return this._id;
    }
    set id(input) {
        const value = String(input).toLowerCase().trim();
        if (!SESSION_ID_REGEXP.test(value))
            throw new TypeError('Incorrect session id value');
        this._id = value;
    }
    set({ id, roles, data, } = {}) {
        if (id !== undefined)
            this.id = id;
        if (roles !== undefined)
            this.roles.set(roles);
        if (data !== undefined) {
            for (let key in this.data)
                delete this.data[key];
            Object.assign(this.data, data);
        }
    }
    reset() {
        this.set();
    }
    valueOf() {
        return {
            ip: this.ip,
            id: this.id,
            data: this.data,
            roles: this.roles.valueOf(),
        };
    }
    toJSON() {
        return this.valueOf();
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/session/session.middleware.ts

class SessionMiddleware extends Middleware {
    async main(ctx, next) {
        const newSession = await this.init(ctx);
        ctx.session.set(newSession);
        ctx.debug('=== Input session ===\n%O', ctx.session);
        await next();
        ctx.debug(`=== Output session ===\n%O`, ctx.session);
        await this.finally(ctx);
    }
    async init(ctx) {
        return {};
    }
    async finally(ctx) {
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/session/index.ts




// EXTERNAL MODULE: external "util"
var external__util_ = __webpack_require__(0);
var external__util__default = /*#__PURE__*/__webpack_require__.n(external__util_);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/log-error.ts

function logError(error, ctx) {
    if (!error.status || error.status >= 500)
        console.error('\x1b[31m=== Internal context error ===\n', error, '\x1b[0m\n=== with Context ===\n', ctx === undefined ? undefined : Object(external__util_["inspect"])(ctx.valueOf(), {
            depth: 3,
            colors: true
        }));
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/context/context.ts







class context_Context {
    constructor(req, res) {
        this.debug = new debug["a" /* Debug */]('Service');
        try {
            this.request = new request_Request(req, this);
            this.response = new response_Response(res, this);
            this.route = new Route(this);
            this.session = new session_Session(this);
        }
        catch (error) {
            this.throw(error);
        }
    }
    get finished() {
        return this.response.finished;
    }
    set(status, value) {
        this.response.set(status, value);
    }
    respond() {
        this.response.respond();
    }
    end(status, value) {
        this.response.end(status, value);
    }
    throw(error) {
        if (error instanceof error_HttpError)
            this.end(error.status, error.message);
        else
            this.end(500);
        logError(error, this);
    }
    valueOf() {
        return {
            request: this.request.valueOf(),
            response: this.response.valueOf(),
            route: this.route.valueOf(),
            session: this.session.valueOf(),
        };
    }
    toJSON() {
        return this.valueOf();
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/context/index.ts




// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/environments.ts
const SERVICE_HOSTNAME = process.env.SERVICE_HOSTNAME || '0.0.0.0';
const SERVICE_PORT = Math.max(~~(process.env.SERVICE_PORT || '') || 0, 0) || 80;
const SERVICE_TIMEOUT = Math.max(~~(process.env.SERVICE_TIMEOUT || '') || 0, 0) || 120;
const SERVICE_KEEP_ALIVE = Math.max(~~(process.env.SERVICE_KEEP_ALIVE || '') || 0, 0) || 5;
const DEBUG = (process.env.NODE_DEBUG || '').split(/\s*,\s*/)
    .map(item => item.toLowerCase().trim())
    .filter(item => !!item);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/service.ts





class service_Service extends external__http_["Server"] {
    constructor(...items) {
        super();
        const middleware = Compose(items.map(item => item));
        this.on('request', (req, res) => {
            const context = new context_Context(req, res);
            context.debug('=== Input Comntext ===\n%O', context);
            middleware(context, () => Promise.resolve())
                .then(() => {
                context.respond();
                context.debug('=== Output Comntext ===\n%O', context);
            })
                .catch(error => {
                logError(error, context);
                try {
                    context.throw(error);
                }
                catch (_) { }
            });
        });
        this.on('clientError', (error, socket) => {
            socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
            logError(error);
        });
        this.timeout = SERVICE_TIMEOUT;
        this.keepAliveTimeout = SERVICE_KEEP_ALIVE;
        this.listen(SERVICE_PORT, SERVICE_HOSTNAME, () => {
            const address = this.address();
            console.log(`Opened HTTP server on ${address.address}:${address.port}`);
        });
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return context_Context; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return request_Request; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return response_Response; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return error_HttpError; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return Compose; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return Middleware; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return Route; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return Delete; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return Get; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return Post; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "g", function() { return Put; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "h", function() { return route_middleware_RouteMiddleware; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "i", function() { return service_Service; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return ACL; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return session_Session; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "j", function() { return SessionMiddleware; });








/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/pg/lib/index.js
var lib = __webpack_require__(11);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/pg-large-object/lib/index.js
var pg_large_object_lib = __webpack_require__(57);
var pg_large_object_lib_default = /*#__PURE__*/__webpack_require__.n(pg_large_object_lib);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/pg/error.ts
class DBError extends Error {
    constructor(value) {
        if (!value) {
            super('unknown database error');
            this.code = 'XXXXX';
            this.origin = undefined;
            return this;
        }
        super(value.message && String(value.message) || String(value));
        this.code = value.code && String(value.code).toUpperCase() || 'XXXXX';
        this.origin = value.origin instanceof Error ? value.origin : value instanceof Error ? value : undefined;
    }
    is(code) {
        return this.code === code.toUpperCase();
    }
}
DBError.CASE_NOT_FOUND = '20000';
DBError.CARDINALITY_VIOLATION = '21000';
DBError.DATA_EXCEPTION = '22000';
DBError.ARRAY_SUBSCRIPT_ERROR = '2202E';
DBError.CHARACTER_NOT_IN_REPERTOIRE = '22021';
DBError.DATETIME_FIELD_OVERFLOW = '22008';
DBError.DIVISION_BY_ZERO = '22012';
DBError.ERROR_IN_ASSIGNMENT = '22005';
DBError.ESCAPE_CHARACTER_CONFLICT = '2200B';
DBError.INDICATOR_OVERFLOW = '22022';
DBError.INTERVAL_FIELD_OVERFLOW = '22015';
DBError.INVALID_ARGUMENT_FOR_LOGARITHM = '2201E';
DBError.INVALID_ARGUMENT_FOR_NTILE_FUNCTION = '22014';
DBError.INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION = '22016';
DBError.INVALID_ARGUMENT_FOR_POWER_FUNCTION = '2201F';
DBError.INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION = '2201G';
DBError.INVALID_CHARACTER_VALUE_FOR_CAST = '22018';
DBError.INVALID_DATETIME_FORMAT = '22007';
DBError.INVALID_ESCAPE_CHARACTER = '22019';
DBError.INVALID_ESCAPE_OCTET = '2200D';
DBError.INVALID_ESCAPE_SEQUENCE = '22025';
DBError.NONSTANDARD_USE_OF_ESCAPE_CHARACTER = '22P06';
DBError.INVALID_INDICATOR_PARAMETER_VALUE = '22010';
DBError.INVALID_PARAMETER_VALUE = '22023';
DBError.INVALID_REGULAR_EXPRESSION = '2201B';
DBError.INVALID_ROW_COUNT_IN_LIMIT_CLAUSE = '2201W';
DBError.INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE = '2201X';
DBError.INVALID_TABLESAMPLE_ARGUMENT = '2202H';
DBError.INVALID_TABLESAMPLE_REPEAT = '2202G';
DBError.INVALID_TIME_ZONE_DISPLACEMENT_VALUE = '22009';
DBError.INVALID_USE_OF_ESCAPE_CHARACTER = '2200C';
DBError.MOST_SPECIFIC_TYPE_MISMATCH = '2200G';
DBError.NULL_VALUE_NOT_ALLOWED = '22004';
DBError.NULL_VALUE_NO_INDICATOR_PARAMETER = '22002';
DBError.NUMERIC_VALUE_OUT_OF_RANGE = '22003';
DBError.SEQUENCE_GENERATOR_LIMIT_EXCEEDED = '2200H';
DBError.STRING_DATA_LENGTH_MISMATCH = '22026';
DBError.STRING_DATA_RIGHT_TRUNCATION = '22001';
DBError.SUBSTRING_ERROR = '22011';
DBError.TRIM_ERROR = '22027';
DBError.UNTERMINATED_C_STRING = '22024';
DBError.ZERO_LENGTH_CHARACTER_STRING = '2200F';
DBError.FLOATING_POINT_EXCEPTION = '22P01';
DBError.INVALID_TEXT_REPRESENTATION = '22P02';
DBError.INVALID_BINARY_REPRESENTATION = '22P03';
DBError.BAD_COPY_FILE_FORMAT = '22P04';
DBError.UNTRANSLATABLE_CHARACTER = '22P05';
DBError.NOT_AN_XML_DOCUMENT = '2200L';
DBError.INVALID_XML_DOCUMENT = '2200M';
DBError.INVALID_XML_CONTENT = '2200N';
DBError.INVALID_XML_COMMENT = '2200S';
DBError.INVALID_XML_PROCESSING_INSTRUCTION = '2200T';
DBError.INTEGRITY_CONSTRAINT_VIOLATION = '23000';
DBError.RESTRICT_VIOLATION = '23001';
DBError.NOT_NULL_VIOLATION = '23502';
DBError.FOREIGN_KEY_VIOLATION = '23503';
DBError.UNIQUE_VIOLATION = '23505';
DBError.CHECK_VIOLATION = '23514';
DBError.EXCLUSION_VIOLATION = '23P01';
DBError.INVALID_CURSOR_STATE = '24000';
DBError.INVALID_TRANSACTION_STATE = '25000';
DBError.ACTIVE_SQL_TRANSACTION = '25001';
DBError.BRANCH_TRANSACTION_ALREADY_ACTIVE = '25002';
DBError.HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL = '25008';
DBError.INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION = '25003';
DBError.INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION = '25004';
DBError.NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION = '25005';
DBError.READ_ONLY_SQL_TRANSACTION = '25006';
DBError.SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED = '25007';
DBError.NO_ACTIVE_SQL_TRANSACTION = '25P01';
DBError.IN_FAILED_SQL_TRANSACTION = '25P02';
DBError.IDLE_IN_TRANSACTION_SESSION_TIMEOUT = '25P03';
DBError.INVALID_SQL_STATEMENT_NAME = '26000';
DBError.TRIGGERED_DATA_CHANGE_VIOLATION = '27000';
DBError.DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST = '2B000';
DBError.DEPENDENT_OBJECTS_STILL_EXIST = '2BP01';
DBError.INVALID_TRANSACTION_TERMINATION = '2D000';
DBError.SQL_ROUTINE_EXCEPTION = '2F000';
DBError.FUNCTION_EXECUTED_NO_RETURN_STATEMENT = '2F005';
DBError.MODIFYING_SQL_DATA_NOT_PERMITTED = '2F002';
DBError.PROHIBITED_SQL_STATEMENT_ATTEMPTED = '2F003';
DBError.READING_SQL_DATA_NOT_PERMITTED = '2F004';
DBError.TRANSACTION_ROLLBACK = '40000';
DBError.TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION = '40002';
DBError.SERIALIZATION_FAILURE = '40001';
DBError.STATEMENT_COMPLETION_UNKNOWN = '40003';
DBError.DEADLOCK_DETECTED = '40P01';
DBError.SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION = '42000';
DBError.SYNTAX_ERROR = '42601';
DBError.INSUFFICIENT_PRIVILEGE = '42501';
DBError.CANNOT_COERCE = '42846';
DBError.GROUPING_ERROR = '42803';
DBError.WINDOWING_ERROR = '42P20';
DBError.INVALID_RECURSION = '42P19';
DBError.INVALID_FOREIGN_KEY = '42830';
DBError.INVALID_NAME = '42602';
DBError.NAME_TOO_LONG = '42622';
DBError.RESERVED_NAME = '42939';
DBError.DATATYPE_MISMATCH = '42804';
DBError.INDETERMINATE_DATATYPE = '42P18';
DBError.COLLATION_MISMATCH = '42P21';
DBError.INDETERMINATE_COLLATION = '42P22';
DBError.WRONG_OBJECT_TYPE = '42809';
DBError.GENERATED_ALWAYS = '428C9';
DBError.UNDEFINED_COLUMN = '42703';
DBError.UNDEFINED_FUNCTION = '42883';
DBError.UNDEFINED_TABLE = '42P01';
DBError.UNDEFINED_PARAMETER = '42P02';
DBError.UNDEFINED_OBJECT = '42704';
DBError.DUPLICATE_COLUMN = '42701';
DBError.DUPLICATE_CURSOR = '42P03';
DBError.DUPLICATE_DATABASE = '42P04';
DBError.DUPLICATE_FUNCTION = '42723';
DBError.DUPLICATE_PREPARED_STATEMENT = '42P05';
DBError.DUPLICATE_SCHEMA = '42P06';
DBError.DUPLICATE_TABLE = '42P07';
DBError.DUPLICATE_ALIAS = '42712';
DBError.DUPLICATE_OBJECT = '42710';
DBError.AMBIGUOUS_COLUMN = '42702';
DBError.AMBIGUOUS_FUNCTION = '42725';
DBError.AMBIGUOUS_PARAMETER = '42P08';
DBError.AMBIGUOUS_ALIAS = '42P09';
DBError.INVALID_COLUMN_REFERENCE = '42P10';
DBError.INVALID_COLUMN_DEFINITION = '42611';
DBError.INVALID_CURSOR_DEFINITION = '42P11';
DBError.INVALID_DATABASE_DEFINITION = '42P12';
DBError.INVALID_FUNCTION_DEFINITION = '42P13';
DBError.INVALID_PREPARED_STATEMENT_DEFINITION = '42P14';
DBError.INVALID_SCHEMA_DEFINITION = '42P15';
DBError.INVALID_TABLE_DEFINITION = '42P16';
DBError.INVALID_OBJECT_DEFINITION = '42P17';
DBError.WITH_CHECK_OPTION_VIOLATION = '44000';

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/pg/environments.ts
const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';
const POSTGRES_PORT = Math.max(~~(process.env.POSTGRES_PORT || ''), 0) || 5432;
const POSTGRES_DB = process.env.POSTGRES_DB || 'postgres';
const POSTGRES_USER = process.env.POSTGRES_USER || 'postgres';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '';
const POSTGRES_IDLE_TIMEOUT = Math.max(~~(process.env.POSTGRES_IDLE_TIMEOUT || '') || 0, 0) || 10;
const POSTGRES_POOL_SIZE = Math.max(~~(process.env.POSTGRES_POOL_SIZE || '') || 0, 0) || 10;
const POSTGRES_POOL_CONFIG = {
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    idleTimeoutMillis: POSTGRES_IDLE_TIMEOUT * 1000,
    max: POSTGRES_POOL_SIZE
};

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/pg/pool.ts


const createPool = (config = {}) => {
    const poolConfig = Object.assign({}, POSTGRES_POOL_CONFIG, config);
    console.log('=== Init PG Pool with config ===\n', Object.assign({}, POSTGRES_POOL_CONFIG, { password: '*****' }));
    return new lib["Pool"](poolConfig);
};

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/pg/index.ts





// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/debug/index.ts + 2 modules
var debug = __webpack_require__(7);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/abstract.ts


const abstract_debug = new debug["a" /* Debug */]('DB');
class abstract_AbstractQuery {
    constructor(name) {
        this.name = name;
    }
    valueOf() {
        return {
            text: this.text,
            values: this.values,
        };
    }
    async exec(client) {
        if (!(client instanceof lib["Client"]))
            throw new TypeError('client is not an instanceof PG Client');
        abstract_debug(`=== SQL Query ===\n%O`, this);
        let result;
        try {
            result = await client.query(this.valueOf());
        }
        catch (error) {
            abstract_debug(`=== SQL Query Error ===\n%O`, error);
            throw new DBError(error);
        }
        abstract_debug(`=== SQL Query Successful ===\n%O`, result.rows);
        return result.rows;
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/where.ts
class Where {
    constructor(value = null, index = 0, inputValues = []) {
        this.text = '';
        this.values = [];
        if (value === null) {
            this.values = [];
            this.text = '';
            return this;
        }
        if (typeof value === 'string') {
            let i = index;
            this.values = [];
            this.text = ' WHERE '
                + value.replace(/\$\d+/g, (match) => {
                    let j = ~~(/\d+/.exec(match)[0]) - 1;
                    if (inputValues[j] === undefined)
                        return 'DEFAULT';
                    this.values.push(inputValues[j]);
                    return `$${++i}`;
                });
            return this;
        }
        throw new TypeError('value is not a null, array, object or string');
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/order.ts
class Order {
    constructor(value = null) {
        if (value === null) {
            this.text = '';
            return this;
        }
        if (Array.isArray(value)) {
            this.text = ' ORDER BY '
                + value.map(item => `"${item}" ASC`)
                    .join(', ');
            return this;
        }
        if (typeof value === 'object') {
            let feelds = Object.keys(value);
            if (feelds.length === 0) {
                this.text = '';
                return this;
            }
            this.text = ' ORDER BY '
                + feelds.map(item => `"${item}" ${value[item]}`)
                    .join(', ');
            return this;
        }
        if (typeof value === 'string') {
            this.text = ` ORDER BY "${value}" ASC`;
            return this;
        }
        throw new TypeError('value is not a null, array, object or string');
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/limit.ts
class Limit {
    constructor(limit = Infinity) {
        if (Number.isNaN(limit))
            throw new TypeError('limit is not a number');
        if (limit <= 0)
            throw new TypeError('limit is less than or equal to zero');
        if (limit < Infinity)
            this.text = ` LIMIT ${limit}`;
        else
            this.text = '';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/offset.ts
class Offset {
    constructor(offset = 0) {
        if (Number.isNaN(offset))
            throw new TypeError('offset is not a number');
        if (offset < 0)
            throw new TypeError('offset is less than zero');
        if (offset === Infinity)
            throw new TypeError('offset is Infinity');
        if (offset > 0)
            this.text = ' OFFSET ${offset}';
        else
            this.text = '';
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/select.ts





class select_Select extends abstract_AbstractQuery {
    constructor(query, value = []) {
        super('SELECT');
        this._where = new Where();
        this._order = new Order();
        this._limit = new Limit();
        this._offset = new Offset();
        let feelds = Array.isArray(value) ? value : Object.keys(value);
        feelds = feelds.map(item => `"${item}"`);
        this._command = `SELECT ${feelds.join(', ') || '*'} FROM "${query.scheme}"."${query.table}"`;
    }
    where(value, ...values) {
        this._where = new Where(value, 0, values);
        return this;
    }
    order(value) {
        this._order = new Order(value);
        return this;
    }
    limit(limit) {
        this._limit = new Limit(limit);
        return this;
    }
    offset(offset) {
        this._offset = new Offset(offset);
        return this;
    }
    get text() {
        return this._command
            + this._where.text
            + this._order.text
            + this._limit.text
            + this._offset.text;
    }
    get values() {
        return this._where.values;
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/returning.ts
class Returning {
    constructor(value = []) {
        let feelds = Array.isArray(value) ? value : typeof value === 'string' ? [value] : Object.keys(value);
        feelds = feelds.map(item => `"${item}"`);
        this.text = ` RETURNING ${feelds.join(', ') || '*'}`;
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/insert.ts


class insert_Insert extends abstract_AbstractQuery {
    constructor(query, input = {}) {
        super('INSERT');
        this._returning = new Returning();
        const value = input.valueOf instanceof Function ? input.valueOf() : input;
        let feelds = Object.keys(value);
        if (feelds.length === 0)
            throw new TypeError('filtred value is an empty object');
        this.values = [];
        let values = [];
        feelds.forEach(item => {
            if (value[item] === undefined) {
                values.push('DEFAULT');
                return;
            }
            let i = this.values.push(value[item]);
            values.push(`$${i}`);
        });
        feelds = feelds.map(item => `"${item}"`);
        this._command = `INSERT INTO "${query.scheme}"."${query.table}" (${feelds.join(', ')}) VALUES (${values.join(', ')})`;
    }
    returning(value) {
        this._returning = new Returning(value);
        return this;
    }
    get text() {
        return this._command
            + this._returning.text;
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/update.ts



class update_Update extends abstract_AbstractQuery {
    constructor(query, input = {}, inputValues = []) {
        super('UPDATE');
        this._values = [];
        this._returning = new Returning();
        this._where = new Where();
        this._command = `UPDATE "${query.scheme}"."${query.table}" SET `;
        if (typeof input === 'string') {
            this._command += input.replace(/\$\d+/g, (match) => {
                let j = ~~(/\d+/.exec(match)[0]) - 1;
                if (inputValues[j] === undefined)
                    return 'DEFAULT';
                let i = this._values.push(inputValues[j]);
                return `$${i}`;
            });
            return this;
        }
        const value = input.valueOf instanceof Function ? input.valueOf() : input;
        let feelds = Object.keys(value);
        if (feelds.length === 0)
            throw new TypeError('updated value is an empty object');
        feelds = feelds.map(item => {
            let set = `"${item}" = `;
            if (value[item] === undefined) {
                return set + 'DEFAULT';
            }
            let i = this._values.push(value[item]);
            return set + `$${i}`;
        });
        this._command += `${feelds.join(', ')}`;
    }
    where(value, ...values) {
        this._where = new Where(value, this._values.length, values);
        return this;
    }
    returning(value) {
        this._returning = new Returning(value);
        return this;
    }
    get text() {
        return this._command
            + this._where.text
            + this._returning.text;
    }
    get values() {
        return [...this._values, ...this._where.values];
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/delete.ts



class delete_Delete extends abstract_AbstractQuery {
    constructor(query) {
        super('DELETE');
        this._where = new Where();
        this._returning = new Returning();
        this._command = `DELETE FROM "${query.scheme}"."${query.table}"`;
    }
    where(value, ...values) {
        this._where = new Where(value, 0, values);
        return this;
    }
    returning(value) {
        this._returning = new Returning(value);
        return this;
    }
    get text() {
        return this._command
            + this._where.text
            + this._returning.text;
    }
    get values() {
        return this._where.values;
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/query.ts




class query_Query {
    constructor(table, { scheme } = {}) {
        this.table = table;
        this.scheme = scheme || 'public';
    }
    select(value) {
        return new select_Select(this, value);
    }
    insert(value) {
        return new insert_Insert(this, value);
    }
    update(value, ...inputValues) {
        return new update_Update(this, value, inputValues);
    }
    delete() {
        return new delete_Delete(this);
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/custom.ts

class CustomQuery extends abstract_AbstractQuery {
    constructor(input, ...inputValues) {
        super('CUSTOM');
        this.values = [];
        this.text = String(input).replace(/\$\d+/g, (match) => {
            let j = ~~(/\d+/.exec(match)[0]) - 1;
            if (inputValues[j] === undefined)
                return 'DEFAULT';
            let i = this.values.push(inputValues[j]);
            return `$${i}`;
        });
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/index.ts



// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/service/index.ts + 30 modules
var service = __webpack_require__(1);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/middleware/db.middleware.ts


class db_middleware_DBMiddleware extends service["e" /* Middleware */] {
    constructor() {
        super(...arguments);
        this._pool = createPool();
    }
    async main(ctx, next) {
        ctx.db = await this._pool.connect();
        await next();
        ctx.db.release();
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/middleware/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/index.ts
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return lib["Pool"]; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return lib["Client"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return pg_large_object_lib["LargeObjectManager"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return DBError; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return createPool; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return query_Query; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return CustomQuery; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return db_middleware_DBMiddleware; });





/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

module.exports = {
  // database host. defaults to localhost
  host: 'localhost',

  // database user's name
  user: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,

  // name of database to connect
  database: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,

  // database user's password
  password: null,

  // a Postgres connection string to be used instead of setting individual connection items
  // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
  // in the defaults object.
  connectionString: undefined,

  // database port
  port: 5432,

  // number of rows to return at a time from a prepared statement's
  // portal. 0 will return all rows at once
  rows: 0,

  // binary result mode
  binary: false,

  // Connection pool options - see https://github.com/brianc/node-pg-pool

  // number of connections to use in connection pool
  // 0 will disable connection pooling
  max: 10,

  // max milliseconds a client can go unused before it is removed
  // from the pool and destroyed
  idleTimeoutMillis: 30000,

  client_encoding: '',

  ssl: false,

  application_name: undefined,
  fallback_application_name: undefined,

  parseInputDatesAsUTC: false,

  // max milliseconds any query using this connection will execute for before timing out in error. false=unlimited
  statement_timeout: false
}

var pgTypes = __webpack_require__(5)
// save default parsers
var parseBigInteger = pgTypes.getTypeParser(20, 'text')
var parseBigIntegerArray = pgTypes.getTypeParser(1016, 'text')

// parse int8 so you can get your count values as actual numbers
module.exports.__defineSetter__('parseInt8', function (val) {
  pgTypes.setTypeParser(20, 'text', val ? pgTypes.getTypeParser(23, 'text') : parseBigInteger)
  pgTypes.setTypeParser(1016, 'text', val ? pgTypes.getTypeParser(1007, 'text') : parseBigIntegerArray)
})


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var textParsers = __webpack_require__(32);
var binaryParsers = __webpack_require__(37);
var arrayParser = __webpack_require__(16);

exports.getTypeParser = getTypeParser;
exports.setTypeParser = setTypeParser;
exports.arrayParser = arrayParser;

var typeParsers = {
  text: {},
  binary: {}
};

//the empty parse function
function noParse (val) {
  return String(val);
};

//returns a function used to convert a specific type (specified by
//oid) into a result javascript type
//note: the oid can be obtained via the following sql query:
//SELECT oid FROM pg_type WHERE typname = 'TYPE_NAME_HERE';
function getTypeParser (oid, format) {
  format = format || 'text';
  if (!typeParsers[format]) {
    return noParse;
  }
  return typeParsers[format][oid] || noParse;
};

function setTypeParser (oid, format, parseFn) {
  if(typeof format == 'function') {
    parseFn = format;
    format = 'text';
  }
  typeParsers[format][oid] = parseFn;
};

textParsers.init(function(oid, converter) {
  typeParsers.text[oid] = converter;
});

binaryParsers.init(function(oid, converter) {
  typeParsers.binary[oid] = converter;
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/callable/index.ts + 1 modules
var callable = __webpack_require__(13);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/debug/log.ts
const DEBUG = (process.env.NODE_DEBUG || '')
    .split(/\s*,\s*/)
    .map(item => item.toLowerCase().trim())
    .filter(item => !!item);
const isEnable = (name) => DEBUG.includes(name) || DEBUG.includes('*');
const log = (str, args) => console.log(str, ...args);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/debug/debug.ts


class debug_Debug extends callable["a" /* CallableClass */] {
    constructor(name) {
        const enable = isEnable(name.toLowerCase());
        super((str, ...args) => {
            if (!enable)
                return;
            log(`${name}: ${str}`, args.map(item => item && item.valueOf instanceof Function ? item.valueOf() : item));
        });
        this.enable = enable;
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/debug/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return debug_Debug; });



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var util = __webpack_require__(0)
var Client = __webpack_require__(31)
var defaults = __webpack_require__(4)
var Connection = __webpack_require__(19)
var Pool = __webpack_require__(52)

const poolFactory = (Client) => {
  var BoundPool = function (options) {
    var config = Object.assign({ Client: Client }, options)
    return new Pool(config)
  }

  util.inherits(BoundPool, Pool)

  return BoundPool
}

var PG = function (clientConstructor) {
  this.defaults = defaults
  this.Client = clientConstructor
  this.Query = this.Client.Query
  this.Pool = poolFactory(this.Client)
  this._pools = []
  this.Connection = Connection
  this.types = __webpack_require__(5)
}

if (typeof process.env.NODE_PG_FORCE_NATIVE !== 'undefined') {
  module.exports = new PG(__webpack_require__(21))
} else {
  module.exports = new PG(Client)

  // lazy require native module...the native module may not have installed
  module.exports.__defineGetter__('native', function () {
    delete module.exports.native
    var native = null
    try {
      native = new PG(__webpack_require__(21))
    } catch (err) {
      if (err.code !== 'MODULE_NOT_FOUND') {
        throw err
      }
      console.error(err.message)
    }
    module.exports.native = native
    return native
  })
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

const crypto = __webpack_require__(26)

const defaults = __webpack_require__(4)

function escapeElement (elementRepresentation) {
  var escaped = elementRepresentation
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')

  return '"' + escaped + '"'
}

// convert a JS array to a postgres array literal
// uses comma separator so won't work for types like box that use
// a different array separator.
function arrayString (val) {
  var result = '{'
  for (var i = 0; i < val.length; i++) {
    if (i > 0) {
      result = result + ','
    }
    if (val[i] === null || typeof val[i] === 'undefined') {
      result = result + 'NULL'
    } else if (Array.isArray(val[i])) {
      result = result + arrayString(val[i])
    } else if (val[i] instanceof Buffer) {
      result += '\\\\x' + val[i].toString('hex')
    } else {
      result += escapeElement(prepareValue(val[i]))
    }
  }
  result = result + '}'
  return result
}

// converts values from javascript types
// to their 'raw' counterparts for use as a postgres parameter
// note: you can override this function to provide your own conversion mechanism
// for complex types, etc...
var prepareValue = function (val, seen) {
  if (val instanceof Buffer) {
    return val
  }
  if (ArrayBuffer.isView(val)) {
    var buf = Buffer.from(val.buffer, val.byteOffset, val.byteLength)
    if (buf.length === val.byteLength) {
      return buf
    }
    return buf.slice(val.byteOffset, val.byteOffset + val.byteLength) // Node.js v4 does not support those Buffer.from params
  }
  if (val instanceof Date) {
    if (defaults.parseInputDatesAsUTC) {
      return dateToStringUTC(val)
    } else {
      return dateToString(val)
    }
  }
  if (Array.isArray(val)) {
    return arrayString(val)
  }
  if (val === null || typeof val === 'undefined') {
    return null
  }
  if (typeof val === 'object') {
    return prepareObject(val, seen)
  }
  return val.toString()
}

function prepareObject (val, seen) {
  if (val && typeof val.toPostgres === 'function') {
    seen = seen || []
    if (seen.indexOf(val) !== -1) {
      throw new Error('circular reference detected while preparing "' + val + '" for query')
    }
    seen.push(val)

    return prepareValue(val.toPostgres(prepareValue), seen)
  }
  return JSON.stringify(val)
}

function pad (number, digits) {
  number = '' + number
  while (number.length < digits) { number = '0' + number }
  return number
}

function dateToString (date) {
  var offset = -date.getTimezoneOffset()
  var ret = pad(date.getFullYear(), 4) + '-' +
    pad(date.getMonth() + 1, 2) + '-' +
    pad(date.getDate(), 2) + 'T' +
    pad(date.getHours(), 2) + ':' +
    pad(date.getMinutes(), 2) + ':' +
    pad(date.getSeconds(), 2) + '.' +
    pad(date.getMilliseconds(), 3)

  if (offset < 0) {
    ret += '-'
    offset *= -1
  } else { ret += '+' }

  return ret + pad(Math.floor(offset / 60), 2) + ':' + pad(offset % 60, 2)
}

function dateToStringUTC (date) {
  var ret = pad(date.getUTCFullYear(), 4) + '-' +
    pad(date.getUTCMonth() + 1, 2) + '-' +
    pad(date.getUTCDate(), 2) + 'T' +
    pad(date.getUTCHours(), 2) + ':' +
    pad(date.getUTCMinutes(), 2) + ':' +
    pad(date.getUTCSeconds(), 2) + '.' +
    pad(date.getUTCMilliseconds(), 3)

  return ret + '+00:00'
}

function normalizeQueryConfig (config, values, callback) {
  // can take in strings or config objects
  config = (typeof (config) === 'string') ? { text: config } : config
  if (values) {
    if (typeof values === 'function') {
      config.callback = values
    } else {
      config.values = values
    }
  }
  if (callback) {
    config.callback = callback
  }
  return config
}

const md5 = function (string) {
  return crypto.createHash('md5').update(string, 'utf-8').digest('hex')
}

// See AuthenticationMD5Password at https://www.postgresql.org/docs/current/static/protocol-flow.html
const postgresMd5PasswordHash = function (user, password, salt) {
  var inner = md5(password + user)
  var outer = md5(Buffer.concat([Buffer.from(inner), salt]))
  return 'md5' + outer
}

module.exports = {
  prepareValue: function prepareValueWrapper (value) {
    // this ensures that extra arguments do not get passed into prepareValue
    // by accident, eg: from calling values.map(utils.prepareValue)
    return prepareValue(value)
  },
  normalizeQueryConfig,
  postgresMd5PasswordHash,
  md5
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/callable/callable.ts
class CallableClass extends Function {
    constructor(fn) {
        super('throw new TypeError("CallableClass was called")');
        return Object.setPrototypeOf(fn, new.target.prototype);
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/callable/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return CallableClass; });



/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = function (source, transform) {
  return new ArrayParser(source, transform).parse()
}

function ArrayParser (source, transform) {
  this.source = source
  this.transform = transform || identity
  this.position = 0
  this.entries = []
  this.recorded = []
  this.dimension = 0
}

ArrayParser.prototype.isEof = function () {
  return this.position >= this.source.length
}

ArrayParser.prototype.nextCharacter = function () {
  var character = this.source[this.position++]
  if (character === '\\') {
    return {
      value: this.source[this.position++],
      escaped: true
    }
  }
  return {
    value: character,
    escaped: false
  }
}

ArrayParser.prototype.record = function (character) {
  this.recorded.push(character)
}

ArrayParser.prototype.newEntry = function (includeEmpty) {
  var entry
  if (this.recorded.length > 0 || includeEmpty) {
    entry = this.recorded.join('')
    if (entry === 'NULL' && !includeEmpty) {
      entry = null
    }
    if (entry !== null) entry = this.transform(entry)
    this.entries.push(entry)
    this.recorded = []
  }
}

ArrayParser.prototype.parse = function (nested) {
  var character, parser, quote
  while (!this.isEof()) {
    character = this.nextCharacter()
    if (character.value === '{' && !quote) {
      this.dimension++
      if (this.dimension > 1) {
        parser = new ArrayParser(this.source.substr(this.position - 1), this.transform)
        this.entries.push(parser.parse(true))
        this.position += parser.position - 2
      }
    } else if (character.value === '}' && !quote) {
      this.dimension--
      if (!this.dimension) {
        this.newEntry()
        if (nested) return this.entries
      }
    } else if (character.value === '"' && !character.escaped) {
      if (quote) this.newEntry(true)
      quote = !quote
    } else if (character.value === ',' && !quote) {
      this.newEntry()
    } else {
      this.record(character.value)
    }
  }
  if (this.dimension !== 0) {
    throw new Error('array dimension not balanced')
  }
  return this.entries
}

function identity (value) {
  return value
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var array = __webpack_require__(15);

module.exports = {
  create: function (source, transform) {
    return {
      parse: function() {
        return array.parse(source, transform);
      }
    };
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var types = __webpack_require__(5)

function TypeOverrides (userTypes) {
  this._types = userTypes || types
  this.text = {}
  this.binary = {}
}

TypeOverrides.prototype.getOverrides = function (format) {
  switch (format) {
    case 'text': return this.text
    case 'binary': return this.binary
    default: return {}
  }
}

TypeOverrides.prototype.setTypeParser = function (oid, format, parseFn) {
  if (typeof format === 'function') {
    parseFn = format
    format = 'text'
  }
  this.getOverrides(format)[oid] = parseFn
}

TypeOverrides.prototype.getTypeParser = function (oid, format) {
  format = format || 'text'
  return this.getOverrides(format)[oid] || this._types.getTypeParser(oid, format)
}

module.exports = TypeOverrides


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var dns = __webpack_require__(43)

var defaults = __webpack_require__(4)

var parse = __webpack_require__(44).parse // parses a connection string

var val = function (key, config, envVar) {
  if (envVar === undefined) {
    envVar = process.env[ 'PG' + key.toUpperCase() ]
  } else if (envVar === false) {
    // do nothing ... use false
  } else {
    envVar = process.env[ envVar ]
  }

  return config[key] ||
    envVar ||
    defaults[key]
}

var useSsl = function () {
  switch (process.env.PGSSLMODE) {
    case 'disable':
      return false
    case 'prefer':
    case 'require':
    case 'verify-ca':
    case 'verify-full':
      return true
  }
  return defaults.ssl
}

var ConnectionParameters = function (config) {
  // if a string is passed, it is a raw connection string so we parse it into a config
  config = typeof config === 'string' ? parse(config) : config || {}

  // if the config has a connectionString defined, parse IT into the config we use
  // this will override other default values with what is stored in connectionString
  if (config.connectionString) {
    config = Object.assign({}, config, parse(config.connectionString))
  }

  this.user = val('user', config)
  this.database = val('database', config)
  this.port = parseInt(val('port', config), 10)
  this.host = val('host', config)
  this.password = val('password', config)
  this.binary = val('binary', config)
  this.ssl = typeof config.ssl === 'undefined' ? useSsl() : config.ssl
  this.client_encoding = val('client_encoding', config)
  this.replication = val('replication', config)
  // a domain socket begins with '/'
  this.isDomainSocket = (!(this.host || '').indexOf('/'))

  this.application_name = val('application_name', config, 'PGAPPNAME')
  this.fallback_application_name = val('fallback_application_name', config, false)
  this.statement_timeout = val('statement_timeout', config, false)
}

// Convert arg to a string, surround in single quotes, and escape single quotes and backslashes
var quoteParamValue = function (value) {
  return "'" + ('' + value).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
}

var add = function (params, config, paramName) {
  var value = config[paramName]
  if (value) {
    params.push(paramName + '=' + quoteParamValue(value))
  }
}

ConnectionParameters.prototype.getLibpqConnectionString = function (cb) {
  var params = []
  add(params, this, 'user')
  add(params, this, 'password')
  add(params, this, 'port')
  add(params, this, 'application_name')
  add(params, this, 'fallback_application_name')

  var ssl = typeof this.ssl === 'object' ? this.ssl : {sslmode: this.ssl}
  add(params, ssl, 'sslmode')
  add(params, ssl, 'sslca')
  add(params, ssl, 'sslkey')
  add(params, ssl, 'sslcert')
  add(params, ssl, 'sslrootcert')

  if (this.database) {
    params.push('dbname=' + quoteParamValue(this.database))
  }
  if (this.replication) {
    params.push('replication=' + quoteParamValue(this.replication))
  }
  if (this.host) {
    params.push('host=' + quoteParamValue(this.host))
  }
  if (this.isDomainSocket) {
    return cb(null, params.join(' '))
  }
  if (this.client_encoding) {
    params.push('client_encoding=' + quoteParamValue(this.client_encoding))
  }
  dns.lookup(this.host, function (err, address) {
    if (err) return cb(err, null)
    params.push('hostaddr=' + quoteParamValue(address))
    return cb(null, params.join(' '))
  })
}

module.exports = ConnectionParameters


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var net = __webpack_require__(48)
var EventEmitter = __webpack_require__(2).EventEmitter
var util = __webpack_require__(0)

var Writer = __webpack_require__(49)
var Reader = __webpack_require__(50)

var TEXT_MODE = 0
var BINARY_MODE = 1
var Connection = function (config) {
  EventEmitter.call(this)
  config = config || {}
  this.stream = config.stream || new net.Stream()
  this._keepAlive = config.keepAlive
  this.lastBuffer = false
  this.lastOffset = 0
  this.buffer = null
  this.offset = null
  this.encoding = config.encoding || 'utf8'
  this.parsedStatements = {}
  this.writer = new Writer()
  this.ssl = config.ssl || false
  this._ending = false
  this._mode = TEXT_MODE
  this._emitMessage = false
  this._reader = new Reader({
    headerSize: 1,
    lengthPadding: -4
  })
  var self = this
  this.on('newListener', function (eventName) {
    if (eventName === 'message') {
      self._emitMessage = true
    }
  })
}

util.inherits(Connection, EventEmitter)

Connection.prototype.connect = function (port, host) {
  if (this.stream.readyState === 'closed') {
    this.stream.connect(port, host)
  } else if (this.stream.readyState === 'open') {
    this.emit('connect')
  }

  var self = this

  this.stream.on('connect', function () {
    if (self._keepAlive) {
      self.stream.setKeepAlive(true)
    }
    self.emit('connect')
  })

  this.stream.on('error', function (error) {
    // don't raise ECONNRESET errors - they can & should be ignored
    // during disconnect
    if (self._ending && error.code === 'ECONNRESET') {
      return
    }
    self.emit('error', error)
  })

  this.stream.on('close', function () {
    self.emit('end')
  })

  if (!this.ssl) {
    return this.attachListeners(this.stream)
  }

  this.stream.once('data', function (buffer) {
    var responseCode = buffer.toString('utf8')
    if (responseCode !== 'S') {
      return self.emit('error', new Error('The server does not support SSL connections'))
    }
    var tls = __webpack_require__(51)
    self.stream = tls.connect({
      socket: self.stream,
      servername: host,
      rejectUnauthorized: self.ssl.rejectUnauthorized,
      ca: self.ssl.ca,
      pfx: self.ssl.pfx,
      key: self.ssl.key,
      passphrase: self.ssl.passphrase,
      cert: self.ssl.cert,
      NPNProtocols: self.ssl.NPNProtocols
    })
    self.attachListeners(self.stream)
    self.emit('sslconnect')

    self.stream.on('error', function (error) {
      self.emit('error', error)
    })
  })
}

Connection.prototype.attachListeners = function (stream) {
  var self = this
  stream.on('data', function (buff) {
    self._reader.addChunk(buff)
    var packet = self._reader.read()
    while (packet) {
      var msg = self.parseMessage(packet)
      if (self._emitMessage) {
        self.emit('message', msg)
      }
      self.emit(msg.name, msg)
      packet = self._reader.read()
    }
  })
  stream.on('end', function () {
    self.emit('end')
  })
}

Connection.prototype.requestSsl = function () {
  var bodyBuffer = this.writer
    .addInt16(0x04D2)
    .addInt16(0x162F).flush()

  var length = bodyBuffer.length + 4

  var buffer = new Writer()
    .addInt32(length)
    .add(bodyBuffer)
    .join()
  this.stream.write(buffer)
}

Connection.prototype.startup = function (config) {
  var writer = this.writer
    .addInt16(3)
    .addInt16(0)

  Object.keys(config).forEach(function (key) {
    var val = config[key]
    writer.addCString(key).addCString(val)
  })

  writer.addCString('client_encoding').addCString("'utf-8'")

  var bodyBuffer = writer.addCString('').flush()
  // this message is sent without a code

  var length = bodyBuffer.length + 4

  var buffer = new Writer()
    .addInt32(length)
    .add(bodyBuffer)
    .join()
  this.stream.write(buffer)
}

Connection.prototype.cancel = function (processID, secretKey) {
  var bodyBuffer = this.writer
    .addInt16(1234)
    .addInt16(5678)
    .addInt32(processID)
    .addInt32(secretKey)
    .flush()

  var length = bodyBuffer.length + 4

  var buffer = new Writer()
    .addInt32(length)
    .add(bodyBuffer)
    .join()
  this.stream.write(buffer)
}

Connection.prototype.password = function (password) {
  // 0x70 = 'p'
  this._send(0x70, this.writer.addCString(password))
}

Connection.prototype._send = function (code, more) {
  if (!this.stream.writable) {
    return false
  }
  if (more === true) {
    this.writer.addHeader(code)
  } else {
    return this.stream.write(this.writer.flush(code))
  }
}

Connection.prototype.query = function (text) {
  // 0x51 = Q
  this.stream.write(this.writer.addCString(text).flush(0x51))
}

// send parse message
// "more" === true to buffer the message until flush() is called
Connection.prototype.parse = function (query, more) {
  // expect something like this:
  // { name: 'queryName',
  //   text: 'select * from blah',
  //   types: ['int8', 'bool'] }

  // normalize missing query names to allow for null
  query.name = query.name || ''
  if (query.name.length > 63) {
    console.error('Warning! Postgres only supports 63 characters for query names.')
    console.error('You supplied', query.name, '(', query.name.length, ')')
    console.error('This can cause conflicts and silent errors executing queries')
  }
  // normalize null type array
  query.types = query.types || []
  var len = query.types.length
  var buffer = this.writer
    .addCString(query.name) // name of query
    .addCString(query.text) // actual query text
    .addInt16(len)
  for (var i = 0; i < len; i++) {
    buffer.addInt32(query.types[i])
  }

  var code = 0x50
  this._send(code, more)
}

// send bind message
// "more" === true to buffer the message until flush() is called
Connection.prototype.bind = function (config, more) {
  // normalize config
  config = config || {}
  config.portal = config.portal || ''
  config.statement = config.statement || ''
  config.binary = config.binary || false
  var values = config.values || []
  var len = values.length
  var useBinary = false
  for (var j = 0; j < len; j++) { useBinary |= values[j] instanceof Buffer }
  var buffer = this.writer
    .addCString(config.portal)
    .addCString(config.statement)
  if (!useBinary) { buffer.addInt16(0) } else {
    buffer.addInt16(len)
    for (j = 0; j < len; j++) { buffer.addInt16(values[j] instanceof Buffer) }
  }
  buffer.addInt16(len)
  for (var i = 0; i < len; i++) {
    var val = values[i]
    if (val === null || typeof val === 'undefined') {
      buffer.addInt32(-1)
    } else if (val instanceof Buffer) {
      buffer.addInt32(val.length)
      buffer.add(val)
    } else {
      buffer.addInt32(Buffer.byteLength(val))
      buffer.addString(val)
    }
  }

  if (config.binary) {
    buffer.addInt16(1) // format codes to use binary
    buffer.addInt16(1)
  } else {
    buffer.addInt16(0) // format codes to use text
  }
  // 0x42 = 'B'
  this._send(0x42, more)
}

// send execute message
// "more" === true to buffer the message until flush() is called
Connection.prototype.execute = function (config, more) {
  config = config || {}
  config.portal = config.portal || ''
  config.rows = config.rows || ''
  this.writer
    .addCString(config.portal)
    .addInt32(config.rows)

  // 0x45 = 'E'
  this._send(0x45, more)
}

var emptyBuffer = Buffer.alloc(0)

Connection.prototype.flush = function () {
  // 0x48 = 'H'
  this.writer.add(emptyBuffer)
  this._send(0x48)
}

Connection.prototype.sync = function () {
  // clear out any pending data in the writer
  this.writer.flush(0)

  this.writer.add(emptyBuffer)
  this._ending = true
  this._send(0x53)
}

const END_BUFFER = Buffer.from([0x58, 0x00, 0x00, 0x00, 0x04])

Connection.prototype.end = function () {
  // 0x58 = 'X'
  this.writer.add(emptyBuffer)
  this._ending = true
  return this.stream.write(END_BUFFER)
}

Connection.prototype.close = function (msg, more) {
  this.writer.addCString(msg.type + (msg.name || ''))
  this._send(0x43, more)
}

Connection.prototype.describe = function (msg, more) {
  this.writer.addCString(msg.type + (msg.name || ''))
  this._send(0x44, more)
}

Connection.prototype.sendCopyFromChunk = function (chunk) {
  this.stream.write(this.writer.add(chunk).flush(0x64))
}

Connection.prototype.endCopyFrom = function () {
  this.stream.write(this.writer.add(emptyBuffer).flush(0x63))
}

Connection.prototype.sendCopyFail = function (msg) {
  // this.stream.write(this.writer.add(emptyBuffer).flush(0x66));
  this.writer.addCString(msg)
  this._send(0x66)
}

var Message = function (name, length) {
  this.name = name
  this.length = length
}

Connection.prototype.parseMessage = function (buffer) {
  this.offset = 0
  var length = buffer.length + 4
  switch (this._reader.header) {
    case 0x52: // R
      return this.parseR(buffer, length)

    case 0x53: // S
      return this.parseS(buffer, length)

    case 0x4b: // K
      return this.parseK(buffer, length)

    case 0x43: // C
      return this.parseC(buffer, length)

    case 0x5a: // Z
      return this.parseZ(buffer, length)

    case 0x54: // T
      return this.parseT(buffer, length)

    case 0x44: // D
      return this.parseD(buffer, length)

    case 0x45: // E
      return this.parseE(buffer, length)

    case 0x4e: // N
      return this.parseN(buffer, length)

    case 0x31: // 1
      return new Message('parseComplete', length)

    case 0x32: // 2
      return new Message('bindComplete', length)

    case 0x33: // 3
      return new Message('closeComplete', length)

    case 0x41: // A
      return this.parseA(buffer, length)

    case 0x6e: // n
      return new Message('noData', length)

    case 0x49: // I
      return new Message('emptyQuery', length)

    case 0x73: // s
      return new Message('portalSuspended', length)

    case 0x47: // G
      return this.parseG(buffer, length)

    case 0x48: // H
      return this.parseH(buffer, length)

    case 0x57: // W
      return new Message('replicationStart', length)

    case 0x63: // c
      return new Message('copyDone', length)

    case 0x64: // d
      return this.parsed(buffer, length)
  }
}

Connection.prototype.parseR = function (buffer, length) {
  var code = 0
  var msg = new Message('authenticationOk', length)
  if (msg.length === 8) {
    code = this.parseInt32(buffer)
    if (code === 3) {
      msg.name = 'authenticationCleartextPassword'
    }
    return msg
  }
  if (msg.length === 12) {
    code = this.parseInt32(buffer)
    if (code === 5) { // md5 required
      msg.name = 'authenticationMD5Password'
      msg.salt = Buffer.alloc(4)
      buffer.copy(msg.salt, 0, this.offset, this.offset + 4)
      this.offset += 4
      return msg
    }
  }
  throw new Error('Unknown authenticationOk message type' + util.inspect(msg))
}

Connection.prototype.parseS = function (buffer, length) {
  var msg = new Message('parameterStatus', length)
  msg.parameterName = this.parseCString(buffer)
  msg.parameterValue = this.parseCString(buffer)
  return msg
}

Connection.prototype.parseK = function (buffer, length) {
  var msg = new Message('backendKeyData', length)
  msg.processID = this.parseInt32(buffer)
  msg.secretKey = this.parseInt32(buffer)
  return msg
}

Connection.prototype.parseC = function (buffer, length) {
  var msg = new Message('commandComplete', length)
  msg.text = this.parseCString(buffer)
  return msg
}

Connection.prototype.parseZ = function (buffer, length) {
  var msg = new Message('readyForQuery', length)
  msg.name = 'readyForQuery'
  msg.status = this.readString(buffer, 1)
  return msg
}

var ROW_DESCRIPTION = 'rowDescription'
Connection.prototype.parseT = function (buffer, length) {
  var msg = new Message(ROW_DESCRIPTION, length)
  msg.fieldCount = this.parseInt16(buffer)
  var fields = []
  for (var i = 0; i < msg.fieldCount; i++) {
    fields.push(this.parseField(buffer))
  }
  msg.fields = fields
  return msg
}

var Field = function () {
  this.name = null
  this.tableID = null
  this.columnID = null
  this.dataTypeID = null
  this.dataTypeSize = null
  this.dataTypeModifier = null
  this.format = null
}

var FORMAT_TEXT = 'text'
var FORMAT_BINARY = 'binary'
Connection.prototype.parseField = function (buffer) {
  var field = new Field()
  field.name = this.parseCString(buffer)
  field.tableID = this.parseInt32(buffer)
  field.columnID = this.parseInt16(buffer)
  field.dataTypeID = this.parseInt32(buffer)
  field.dataTypeSize = this.parseInt16(buffer)
  field.dataTypeModifier = this.parseInt32(buffer)
  if (this.parseInt16(buffer) === TEXT_MODE) {
    this._mode = TEXT_MODE
    field.format = FORMAT_TEXT
  } else {
    this._mode = BINARY_MODE
    field.format = FORMAT_BINARY
  }
  return field
}

var DATA_ROW = 'dataRow'
var DataRowMessage = function (length, fieldCount) {
  this.name = DATA_ROW
  this.length = length
  this.fieldCount = fieldCount
  this.fields = []
}

// extremely hot-path code
Connection.prototype.parseD = function (buffer, length) {
  var fieldCount = this.parseInt16(buffer)
  var msg = new DataRowMessage(length, fieldCount)
  for (var i = 0; i < fieldCount; i++) {
    msg.fields.push(this._readValue(buffer))
  }
  return msg
}

// extremely hot-path code
Connection.prototype._readValue = function (buffer) {
  var length = this.parseInt32(buffer)
  if (length === -1) return null
  if (this._mode === TEXT_MODE) {
    return this.readString(buffer, length)
  }
  return this.readBytes(buffer, length)
}

// parses error
Connection.prototype.parseE = function (buffer, length) {
  var fields = {}
  var msg, item
  var input = new Message('error', length)
  var fieldType = this.readString(buffer, 1)
  while (fieldType !== '\0') {
    fields[fieldType] = this.parseCString(buffer)
    fieldType = this.readString(buffer, 1)
  }
  if (input.name === 'error') {
    // the msg is an Error instance
    msg = new Error(fields.M)
    for (item in input) {
      // copy input properties to the error
      if (input.hasOwnProperty(item)) {
        msg[item] = input[item]
      }
    }
  } else {
    // the msg is an object literal
    msg = input
    msg.message = fields.M
  }
  msg.severity = fields.S
  msg.code = fields.C
  msg.detail = fields.D
  msg.hint = fields.H
  msg.position = fields.P
  msg.internalPosition = fields.p
  msg.internalQuery = fields.q
  msg.where = fields.W
  msg.schema = fields.s
  msg.table = fields.t
  msg.column = fields.c
  msg.dataType = fields.d
  msg.constraint = fields.n
  msg.file = fields.F
  msg.line = fields.L
  msg.routine = fields.R
  return msg
}

// same thing, different name
Connection.prototype.parseN = function (buffer, length) {
  var msg = this.parseE(buffer, length)
  msg.name = 'notice'
  return msg
}

Connection.prototype.parseA = function (buffer, length) {
  var msg = new Message('notification', length)
  msg.processId = this.parseInt32(buffer)
  msg.channel = this.parseCString(buffer)
  msg.payload = this.parseCString(buffer)
  return msg
}

Connection.prototype.parseG = function (buffer, length) {
  var msg = new Message('copyInResponse', length)
  return this.parseGH(buffer, msg)
}

Connection.prototype.parseH = function (buffer, length) {
  var msg = new Message('copyOutResponse', length)
  return this.parseGH(buffer, msg)
}

Connection.prototype.parseGH = function (buffer, msg) {
  var isBinary = buffer[this.offset] !== 0
  this.offset++
  msg.binary = isBinary
  var columnCount = this.parseInt16(buffer)
  msg.columnTypes = []
  for (var i = 0; i < columnCount; i++) {
    msg.columnTypes.push(this.parseInt16(buffer))
  }
  return msg
}

Connection.prototype.parsed = function (buffer, length) {
  var msg = new Message('copyData', length)
  msg.chunk = this.readBytes(buffer, msg.length - 4)
  return msg
}

Connection.prototype.parseInt32 = function (buffer) {
  var value = buffer.readInt32BE(this.offset, true)
  this.offset += 4
  return value
}

Connection.prototype.parseInt16 = function (buffer) {
  var value = buffer.readInt16BE(this.offset, true)
  this.offset += 2
  return value
}

Connection.prototype.readString = function (buffer, length) {
  return buffer.toString(this.encoding, this.offset, (this.offset += length))
}

Connection.prototype.readBytes = function (buffer, length) {
  return buffer.slice(this.offset, (this.offset += length))
}

Connection.prototype.parseCString = function (buffer) {
  var start = this.offset
  var end = buffer.indexOf(0, start)
  this.offset = end + 1
  return buffer.toString(this.encoding, start, end)
}
// end parsing methods
module.exports = Connection


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(53)


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @exports pg-large-object/lib/promiseFromCallback
 * @param {function} fn
 * @param {object} self
 * @param {object} [options]
 * @returns {Promise}
 */
function promiseFromCallback(fn, self, options) {
        // there are no callbacks with more than two arguments in this project
        const twoArgs = options && options.twoArgs;

        return new Promise(function(resolve, reject) {
                function callback(error, arg1, arg2) {
                        if (error) {
                                reject(error);
                                return;
                        }

                        if (twoArgs) {
                                resolve([arg1, arg2]);
                        }
                        else {
                                resolve(arg1);
                        }
                }

                fn.call(self, callback);
        });
}

module.exports = promiseFromCallback;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var promiseFromCallback = __webpack_require__(22);
var ReadStream = __webpack_require__(24);
var WriteStream = __webpack_require__(25);


/** Represents an opened large object.
  * 
  * @constructor
  * @exports pg-large-object/lib/LargeObject
  */
function LargeObject(query, oid, fd)
{
        this._query = query;
        this.oid = oid;
        this._fd = fd;
}

/**
  * A seek from the beginning of a object
  * @constant {Number}
  */
LargeObject.SEEK_SET = 0;

/**
  * A seek from the current position
  * @constant {Number}
  */
LargeObject.SEEK_CUR = 1;

/**
  * A seek from the end of a object
  * @constant {Number}
  */
LargeObject.SEEK_END = 2;

/** @callback module:pg-large-object/lib/LargeObject~closeCallback
  * @param {?Error} error If set, an error occurred.
  */
/** Closes this large object. 
  *  You should no longer call any methods on this object.
  * @param {module:pg-large-object/lib/LargeObject~closeCallback} [callback]
  */
LargeObject.prototype.close = function(callback)
{
        this._query(
                {name: "npg_lo_close", text:"SELECT lo_close($1) as ok", values: [this._fd]},
                callback ? function(err, result)
                {
                        callback(err);       
                } : undefined
        );
};

/** Closes this large object.
 *  You should no longer call any methods on this object.
 * @returns {Promise}
 */
LargeObject.prototype.closeAsync = function()
{
        return promiseFromCallback(function(callback)
        {
                this.close(callback);
        }, this);
};

/** @callback module:pg-large-object/lib/LargeObject~readCallback
  * @param {?Error} error If set, an error occurred.
  * @param {Buffer} data The binary data that was read.
  *        If the length of this buffer is less than the supplied
  *        length param, there is no more data to be read.    
  */
/** Reads some data from the large object.
  * @param {Number} length How many bytes to read
  * @param {module:pg-large-object/lib/LargeObject~readCallback} callback
  */
LargeObject.prototype.read = function(length, callback)
{
        this._query(
                {name: "npg_loread", text:"SELECT loread($1, $2) as data", values: [this._fd, length]},
                function(err, result)
                {
                        if (err) return callback(err);
                        
                        var data = result.rows[0].data;
                        callback(null, data);
                }
        );
};

/** Reads some data from the large object.
 * @param {Number} length How many bytes to read
 * @returns {Promise.<Buffer>} The binary data that was read.
 *          If the length of this buffer is less than the supplied
 *          length param, there is no more data to be read.
 */
LargeObject.prototype.readAsync = function(length)
{
        return promiseFromCallback(function(callback)
        {
                this.read(length, callback);
        }, this);
};

/** @callback module:pg-large-object/lib/LargeObject~writeCallback
  * @param {?Error} error If set, an error occurred.
  */
/** Writes some data to the large object.
  * @param {Buffer} buffer data to write
  * @param {module:pg-large-object/lib/LargeObject~writeCallback} [callback]
  */
LargeObject.prototype.write = function(buffer, callback)
{
        this._query(
                {name: "npg_lowrite", text:"SELECT lowrite($1, $2)", values: [this._fd, buffer]},
                callback ? function(err, result)
                {
                        callback(err);
                } : undefined
        );
};

/** Writes some data to the large object.
 * @param {Buffer} buffer data to write
 * @returns {Promise}
 */
LargeObject.prototype.writeAsync = function(buffer)
{
        return promiseFromCallback(function(callback)
        {
                this.write(buffer, callback);
        }, this);
};

/** @callback module:pg-large-object/lib/LargeObject~seekCallback
  * @param {?Error} error If set, an error occurred.
  * @param {Number} position The new position  
  */
/** Sets the position within the large object.
  * Beware floating point rounding with values greater than 2^53 (8192 TiB)
  * @param {Number} position
  * @param {Number} ref One of SEEK_SET, SEEK_CUR, SEEK_END
  * @param {module:pg-large-object/lib/LargeObject~seekCallback} [callback]
  */
LargeObject.prototype.seek = function(position, ref, callback)
{
        this._query(
                {name: "npg_lo_lseek64", text:"SELECT lo_lseek64($1, $2, $3) as location", values: [this._fd, position, ref]},
                callback ? function(err, result)
                {
                        if (err) return callback(err);
                        
                        var location = result.rows[0].location;
                        callback(null, location);
                } : undefined
        );
};

/** Sets the position within the large object.
 * Beware floating point rounding with values greater than 2^53 (8192 TiB)
 * @param {Number} position
 * @param {Number} ref One of SEEK_SET, SEEK_CUR, SEEK_END
 * @returns {Promise.<number>} The new position
 */
LargeObject.prototype.seekAsync = function(position, ref)
{
        return promiseFromCallback(function(callback)
        {
                this.seek(position, ref, callback);
        }, this);
};

/** @callback module:pg-large-object/lib/LargeObject~tellCallback
  * @param {?Error} error If set, an error occurred.
  * @param {Number} position The position  
  */
/** Retrieves the current position within the large object.
  * Beware floating point rounding with values greater than 2^53 (8192 TiB)
  * @param {module:pg-large-object/lib/LargeObject~tellCallback} callback
  */
LargeObject.prototype.tell = function(callback)
{
        this._query(
                {name: "npg_lo_tell64", text:"SELECT lo_tell64($1) as location", values: [this._fd]},
                function(err, result)
                {
                        if (err) return callback(err);
                        
                        var location = result.rows[0].location;
                        callback(null, location);
                }
        );
};

/** Retrieves the current position within the large object.
 * Beware floating point rounding with values greater than 2^53 (8192 TiB)
 * @returns {Promise.<number>}
 */
LargeObject.prototype.tellAsync = function()
{
        return promiseFromCallback(function(callback)
        {
                this.tell(callback);
        }, this);
};

/** @callback module:pg-large-object/lib/LargeObject~sizeCallback
  * @param {?Error} error If set, an error occurred.
  * @param {Number} size Object size in bytes  
  */
/** Find the total size of the large object.
  * @param {module:pg-large-object/lib/LargeObject~sizeCallback} callback
  */
LargeObject.prototype.size = function(callback)
{
        var text = "SELECT lo_lseek64($1, location, 0), seek.size FROM " +
                "(SELECT lo_lseek64($1, 0, 2) AS SIZE, tell.location FROM " + 
                        "(SELECT lo_tell64($1) AS location) tell) "+ 
                "seek;";
        this._query(
                {name: "npg_size", text: text, values: [this._fd]},
                function(err, result)
                {
                        if (err) return callback(err);
                        
                        var size = result.rows[0].size;
                        callback(null, size);
                }
        );
};

/** Find the total size of the large object.
 * @returns {Promise.<number>}
 */
LargeObject.prototype.sizeAsync = function()
{
        return promiseFromCallback(function(callback)
        {
                this.size(callback);
        }, this);
};

/** @callback module:pg-large-object/lib/LargeObject~truncateCallback
  * @param {?Error} error If set, an error occurred.  
  */
/** Truncates the large object to the given length in bytes.
  * If the number of bytes is larger than the current large
  * object length, the large object will be filled with zero
  * bytes.  This method does not modify the current file offset.
  * @param {Number} length  
  * @param {module:pg-large-object/lib/LargeObject~truncateCallback} [callback]
  */
LargeObject.prototype.truncate = function(length, callback)
{
        this._query(
                {name: "npg_lo_truncate64", text:"SELECT lo_truncate64($1, $2)", values: [this._fd, length]},
                callback ? function(err, result)
                {
                        callback(err);
                } : undefined
        );
};

/** Truncates the large object to the given length in bytes.
 * If the number of bytes is larger than the current large
 * object length, the large object will be filled with zero
 * bytes.  This method does not modify the current file offset.
 * @param {Number} length
 * @returns {Promise}
 */
LargeObject.prototype.truncateAsync = function(length)
{
        return promiseFromCallback(function(callback)
        {
                this.truncate(length, callback);
        }, this);
};

/** Return a stream to read this large object.
  * Call this within a transaction block.
  * @param {Number} [bufferSize=16384] A larger buffer size will 
  * require more memory on both the server and client, however it will make 
  * transfers faster because there is less overhead (less read calls to the server). 
  * his overhead is most noticeable on high latency connections because each 
  * ransfered chunk will incur at least RTT of additional transfer time.
  * @returns {module:pg-large-object/lib/ReadStream}
  */
LargeObject.prototype.getReadableStream = function(bufferSize)
{
        return new ReadStream(this, bufferSize);
};

/** Return a stream to write to this large object.
  * Call this within a transaction block.
  * @param {Number} [bufferSize=16384] A larger buffer size will 
  * require more memory on both the server and client, however it will make 
  * transfers faster because there is less overhead (less read calls to the server). 
  * his overhead is most noticeable on high latency connections because each 
  * ransfered chunk will incur at least RTT of additional transfer time.  
  * @returns {module:pg-large-object/lib/WriteStream}
  */
LargeObject.prototype.getWritableStream = function(bufferSize)
{
        return new WriteStream(this, bufferSize);
};

module.exports = LargeObject;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var stream = __webpack_require__(6);



/** 
  * @constructor
  * @augments stream.Readable
  * @exports pg-large-object/lib/ReadStream
  */
function ReadStream(largeObject, bufferSize)
{
        stream.Readable.call(this, {
                'highWaterMark': bufferSize || 16384,
                'encoding': null,
                'objectMode': false
        });
        this._largeObject = largeObject;
}

ReadStream.prototype = Object.create(stream.Readable.prototype);

ReadStream.prototype._read = function(length)
{
        if (length <= 0)
        {
                throw "Illegal Argument";
        }
        
        this._largeObject.read(length, function(error, data)
        {
                if (error)
                {
                        this.emit('error', error);
                        return;
                }
                
                this.push(data);
                if (data.length < length)
                {
                        this.push(null); // the large object has no more data left
                }
        }.bind(this));
};

module.exports = ReadStream;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var stream = __webpack_require__(6);



/** 
  * @constructor
  * @augments stream.Writable
  * @exports pg-large-object/lib/WriteStream
  */
function WriteStream(largeObject, bufferSize)
{
        stream.Writable.call(this, {
                'highWaterMark': bufferSize || 16384,
                'decodeStrings': true,
                'objectMode': false
        });
        this._largeObject = largeObject;
}

WriteStream.prototype = Object.create(stream.Writable.prototype);

WriteStream.prototype._write = function(chunk, encoding, callback)
{
        if (!Buffer.isBuffer(chunk))
        {
                throw "Illegal Argument";
        }
        
        // callback(error)
        this._largeObject.write(chunk, callback);
};

module.exports = WriteStream;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(61);
var toSubscriber_1 = __webpack_require__(90);
var observable_1 = __webpack_require__(77);
var pipe_1 = __webpack_require__(93);
/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remove this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2.5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    /* tslint:enable:max-line-length */
    /**
     * Used to stitch together functional operators into a chain.
     * @method pipe
     * @return {Observable} the Observable result of all of the operators having
     * been called in the order they were passed in.
     *
     * @example
     *
     * import { map, filter, scan } from 'rxjs/operators';
     *
     * Rx.Observable.interval(1000)
     *   .pipe(
     *     filter(x => x % 2 === 0),
     *     map(x => x + x),
     *     scan((acc, x) => acc + x)
     *   )
     *   .subscribe(x => console.log(x))
     */
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i - 0] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    /* tslint:enable:max-line-length */
    Observable.prototype.toPromise = function (PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var EventEmitter = __webpack_require__(2).EventEmitter
var util = __webpack_require__(0)
var utils = __webpack_require__(12)
var pgPass = __webpack_require__(38)
var TypeOverrides = __webpack_require__(17)

var ConnectionParameters = __webpack_require__(18)
var Query = __webpack_require__(45)
var defaults = __webpack_require__(4)
var Connection = __webpack_require__(19)

var Client = function (config) {
  EventEmitter.call(this)

  this.connectionParameters = new ConnectionParameters(config)
  this.user = this.connectionParameters.user
  this.database = this.connectionParameters.database
  this.port = this.connectionParameters.port
  this.host = this.connectionParameters.host
  this.password = this.connectionParameters.password
  this.replication = this.connectionParameters.replication

  var c = config || {}

  this._types = new TypeOverrides(c.types)
  this._ending = false
  this._connecting = false
  this._connected = false
  this._connectionError = false

  this.connection = c.connection || new Connection({
    stream: c.stream,
    ssl: this.connectionParameters.ssl,
    keepAlive: c.keepAlive || false,
    encoding: this.connectionParameters.client_encoding || 'utf8'
  })
  this.queryQueue = []
  this.binary = c.binary || defaults.binary
  this.processID = null
  this.secretKey = null
  this.ssl = this.connectionParameters.ssl || false
}

util.inherits(Client, EventEmitter)

Client.prototype.connect = function (callback) {
  var self = this
  var con = this.connection
  if (this._connecting || this._connected) {
    const err = new Error('Client has already been connected. You cannot reuse a client.')
    if (callback) {
      callback(err)
      return undefined
    }
    return Promise.reject(err)
  }
  this._connecting = true

  if (this.host && this.host.indexOf('/') === 0) {
    con.connect(this.host + '/.s.PGSQL.' + this.port)
  } else {
    con.connect(this.port, this.host)
  }

  // once connection is established send startup message
  con.on('connect', function () {
    if (self.ssl) {
      con.requestSsl()
    } else {
      con.startup(self.getStartupConf())
    }
  })

  con.on('sslconnect', function () {
    con.startup(self.getStartupConf())
  })

  function checkPgPass (cb) {
    return function (msg) {
      if (self.password !== null) {
        cb(msg)
      } else {
        pgPass(self.connectionParameters, function (pass) {
          if (undefined !== pass) {
            self.connectionParameters.password = self.password = pass
          }
          cb(msg)
        })
      }
    }
  }

  // password request handling
  con.on('authenticationCleartextPassword', checkPgPass(function () {
    con.password(self.password)
  }))

  // password request handling
  con.on('authenticationMD5Password', checkPgPass(function (msg) {
    con.password(utils.postgresMd5PasswordHash(self.user, self.password, msg.salt))
  }))

  con.once('backendKeyData', function (msg) {
    self.processID = msg.processID
    self.secretKey = msg.secretKey
  })

  const connectingErrorHandler = (err) => {
    if (this._connectionError) {
      return
    }
    this._connectionError = true
    if (callback) {
      return callback(err)
    }
    this.emit('error', err)
  }

  const connectedErrorHandler = (err) => {
    if (this.activeQuery) {
      var activeQuery = self.activeQuery
      this.activeQuery = null
      return activeQuery.handleError(err, con)
    }
    this.emit('error', err)
  }

  con.on('error', connectingErrorHandler)

  // hook up query handling events to connection
  // after the connection initially becomes ready for queries
  con.once('readyForQuery', function () {
    self._connecting = false
    self._connected = true
    self._attachListeners(con)
    con.removeListener('error', connectingErrorHandler)
    con.on('error', connectedErrorHandler)

    // process possible callback argument to Client#connect
    if (callback) {
      callback(null, self)
      // remove callback for proper error handling
      // after the connect event
      callback = null
    }
    self.emit('connect')
  })

  con.on('readyForQuery', function () {
    var activeQuery = self.activeQuery
    self.activeQuery = null
    self.readyForQuery = true
    if (activeQuery) {
      activeQuery.handleReadyForQuery(con)
    }
    self._pulseQueryQueue()
  })

  con.once('end', () => {
    if (this.activeQuery) {
      var disconnectError = new Error('Connection terminated')
      this.activeQuery.handleError(disconnectError, con)
      this.activeQuery = null
    }
    if (!this._ending) {
      // if the connection is ended without us calling .end()
      // on this client then we have an unexpected disconnection
      // treat this as an error unless we've already emitted an error
      // during connection.
      const error = new Error('Connection terminated unexpectedly')
      if (this._connecting && !this._connectionError) {
        if (callback) {
          callback(error)
        } else {
          this.emit('error', error)
        }
      } else if (!this._connectionError) {
        this.emit('error', error)
      }
    }
    this.emit('end')
  })

  con.on('notice', function (msg) {
    self.emit('notice', msg)
  })

  if (!callback) {
    return new global.Promise((resolve, reject) => {
      this.once('error', reject)
      this.once('connect', () => {
        this.removeListener('error', reject)
        resolve()
      })
    })
  }
}

Client.prototype._attachListeners = function (con) {
  const self = this
  // delegate rowDescription to active query
  con.on('rowDescription', function (msg) {
    self.activeQuery.handleRowDescription(msg)
  })

  // delegate dataRow to active query
  con.on('dataRow', function (msg) {
    self.activeQuery.handleDataRow(msg)
  })

  // delegate portalSuspended to active query
  con.on('portalSuspended', function (msg) {
    self.activeQuery.handlePortalSuspended(con)
  })

  // deletagate emptyQuery to active query
  con.on('emptyQuery', function (msg) {
    self.activeQuery.handleEmptyQuery(con)
  })

  // delegate commandComplete to active query
  con.on('commandComplete', function (msg) {
    self.activeQuery.handleCommandComplete(msg, con)
  })

  // if a prepared statement has a name and properly parses
  // we track that its already been executed so we don't parse
  // it again on the same client
  con.on('parseComplete', function (msg) {
    if (self.activeQuery.name) {
      con.parsedStatements[self.activeQuery.name] = true
    }
  })

  con.on('copyInResponse', function (msg) {
    self.activeQuery.handleCopyInResponse(self.connection)
  })

  con.on('copyData', function (msg) {
    self.activeQuery.handleCopyData(msg, self.connection)
  })

  con.on('notification', function (msg) {
    self.emit('notification', msg)
  })
}

Client.prototype.getStartupConf = function () {
  var params = this.connectionParameters

  var data = {
    user: params.user,
    database: params.database
  }

  var appName = params.application_name || params.fallback_application_name
  if (appName) {
    data.application_name = appName
  }
  if (params.replication) {
    data.replication = '' + params.replication
  }
  if (params.statement_timeout) {
    data.statement_timeout = String(parseInt(params.statement_timeout, 10))
  }

  return data
}

Client.prototype.cancel = function (client, query) {
  if (client.activeQuery === query) {
    var con = this.connection

    if (this.host && this.host.indexOf('/') === 0) {
      con.connect(this.host + '/.s.PGSQL.' + this.port)
    } else {
      con.connect(this.port, this.host)
    }

    // once connection is established send cancel message
    con.on('connect', function () {
      con.cancel(client.processID, client.secretKey)
    })
  } else if (client.queryQueue.indexOf(query) !== -1) {
    client.queryQueue.splice(client.queryQueue.indexOf(query), 1)
  }
}

Client.prototype.setTypeParser = function (oid, format, parseFn) {
  return this._types.setTypeParser(oid, format, parseFn)
}

Client.prototype.getTypeParser = function (oid, format) {
  return this._types.getTypeParser(oid, format)
}

// Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
Client.prototype.escapeIdentifier = function (str) {
  var escaped = '"'

  for (var i = 0; i < str.length; i++) {
    var c = str[i]
    if (c === '"') {
      escaped += c + c
    } else {
      escaped += c
    }
  }

  escaped += '"'

  return escaped
}

// Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
Client.prototype.escapeLiteral = function (str) {
  var hasBackslash = false
  var escaped = '\''

  for (var i = 0; i < str.length; i++) {
    var c = str[i]
    if (c === '\'') {
      escaped += c + c
    } else if (c === '\\') {
      escaped += c + c
      hasBackslash = true
    } else {
      escaped += c
    }
  }

  escaped += '\''

  if (hasBackslash === true) {
    escaped = ' E' + escaped
  }

  return escaped
}

Client.prototype._pulseQueryQueue = function () {
  if (this.readyForQuery === true) {
    this.activeQuery = this.queryQueue.shift()
    if (this.activeQuery) {
      this.readyForQuery = false
      this.hasExecuted = true
      this.activeQuery.submit(this.connection)
    } else if (this.hasExecuted) {
      this.activeQuery = null
      this.emit('drain')
    }
  }
}

Client.prototype.query = function (config, values, callback) {
  // can take in strings, config object or query object
  var query
  var result
  if (typeof config.submit === 'function') {
    result = query = config
    if (typeof values === 'function') {
      query.callback = query.callback || values
    }
  } else {
    query = new Query(config, values, callback)
    if (!query.callback) {
      let resolveOut, rejectOut
      result = new Promise((resolve, reject) => {
        resolveOut = resolve
        rejectOut = reject
      })
      query.callback = (err, res) => err ? rejectOut(err) : resolveOut(res)
    }
  }

  if (this.binary && !query.binary) {
    query.binary = true
  }
  if (query._result) {
    query._result._getTypeParser = this._types.getTypeParser.bind(this._types)
  }

  this.queryQueue.push(query)
  this._pulseQueryQueue()
  return result
}

Client.prototype.end = function (cb) {
  this._ending = true
  if (this.activeQuery) {
    // if we have an active query we need to force a disconnect
    // on the socket - otherwise a hung query could block end forever
    this.connection.stream.destroy(new Error('Connection terminated by user'))
    return cb ? cb() : Promise.resolve()
  }
  if (cb) {
    this.connection.end()
    this.connection.once('end', cb)
  } else {
    return new global.Promise((resolve, reject) => {
      this.connection.end()
      this.connection.once('end', resolve)
    })
  }
}

// expose a Query constructor
Client.Query = Query

module.exports = Client


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var array = __webpack_require__(15)
var arrayParser = __webpack_require__(16);
var parseDate = __webpack_require__(33);
var parseInterval = __webpack_require__(34);
var parseByteA = __webpack_require__(36);

function allowNull (fn) {
  return function nullAllowed (value) {
    if (value === null) return value
    return fn(value)
  }
}

function parseBool (value) {
  if (value === null) return value
  return value === 'TRUE' ||
    value === 't' ||
    value === 'true' ||
    value === 'y' ||
    value === 'yes' ||
    value === 'on' ||
    value === '1';
}

function parseBoolArray (value) {
  if (!value) return null
  return array.parse(value, parseBool)
}

function parseBaseTenInt (string) {
  return parseInt(string, 10)
}

function parseIntegerArray (value) {
  if (!value) return null
  return array.parse(value, allowNull(parseBaseTenInt))
}

function parseBigIntegerArray (value) {
  if (!value) return null
  return array.parse(value, allowNull(function (entry) {
    return parseBigInteger(entry).trim()
  }))
}

var parsePointArray = function(value) {
  if(!value) { return null; }
  var p = arrayParser.create(value, function(entry) {
    if(entry !== null) {
      entry = parsePoint(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseFloatArray = function(value) {
  if(!value) { return null; }
  var p = arrayParser.create(value, function(entry) {
    if(entry !== null) {
      entry = parseFloat(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseStringArray = function(value) {
  if(!value) { return null; }

  var p = arrayParser.create(value);
  return p.parse();
};

var parseDateArray = function(value) {
  if (!value) { return null; }

  var p = arrayParser.create(value, function(entry) {
    if (entry !== null) {
      entry = parseDate(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseByteAArray = function(value) {
  if (!value) { return null; }

  return array.parse(value, allowNull(parseByteA));
};

var parseInteger = function(value) {
  return parseInt(value, 10);
};

var parseBigInteger = function(value) {
  var valStr = String(value);
  if (/^\d+$/.test(valStr)) { return valStr; }
  return value;
};

var parseJsonArray = function(value) {
  var arr = parseStringArray(value);

  if (!arr) {
    return arr;
  }

  return arr.map(function(el) { return JSON.parse(el); });
};

var parsePoint = function(value) {
  if (value[0] !== '(') { return null; }

  value = value.substring( 1, value.length - 1 ).split(',');

  return {
    x: parseFloat(value[0])
  , y: parseFloat(value[1])
  };
};

var parseCircle = function(value) {
  if (value[0] !== '<' && value[1] !== '(') { return null; }

  var point = '(';
  var radius = '';
  var pointParsed = false;
  for (var i = 2; i < value.length - 1; i++){
    if (!pointParsed) {
      point += value[i];
    }

    if (value[i] === ')') {
      pointParsed = true;
      continue;
    } else if (!pointParsed) {
      continue;
    }

    if (value[i] === ','){
      continue;
    }

    radius += value[i];
  }
  var result = parsePoint(point);
  result.radius = parseFloat(radius);

  return result;
};

var init = function(register) {
  register(20, parseBigInteger); // int8
  register(21, parseInteger); // int2
  register(23, parseInteger); // int4
  register(26, parseInteger); // oid
  register(700, parseFloat); // float4/real
  register(701, parseFloat); // float8/double
  register(16, parseBool);
  register(1082, parseDate); // date
  register(1114, parseDate); // timestamp without timezone
  register(1184, parseDate); // timestamp
  register(600, parsePoint); // point
  register(651, parseStringArray); // cidr[]
  register(718, parseCircle); // circle
  register(1000, parseBoolArray);
  register(1001, parseByteAArray);
  register(1005, parseIntegerArray); // _int2
  register(1007, parseIntegerArray); // _int4
  register(1028, parseIntegerArray); // oid[]
  register(1016, parseBigIntegerArray); // _int8
  register(1017, parsePointArray); // point[]
  register(1021, parseFloatArray); // _float4
  register(1022, parseFloatArray); // _float8
  register(1231, parseFloatArray); // _numeric
  register(1014, parseStringArray); //char
  register(1015, parseStringArray); //varchar
  register(1008, parseStringArray);
  register(1009, parseStringArray);
  register(1040, parseStringArray); // macaddr[]
  register(1041, parseStringArray); // inet[]
  register(1115, parseDateArray); // timestamp without time zone[]
  register(1182, parseDateArray); // _date
  register(1185, parseDateArray); // timestamp with time zone[]
  register(1186, parseInterval);
  register(17, parseByteA);
  register(114, JSON.parse.bind(JSON)); // json
  register(3802, JSON.parse.bind(JSON)); // jsonb
  register(199, parseJsonArray); // json[]
  register(3807, parseJsonArray); // jsonb[]
  register(3907, parseStringArray); // numrange[]
  register(2951, parseStringArray); // uuid[]
  register(791, parseStringArray); // money[]
  register(1183, parseStringArray); // time[]
  register(1270, parseStringArray); // timetz[]
};

module.exports = {
  init: init
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DATE_TIME = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?/
var DATE = /^(\d{1,})-(\d{2})-(\d{2})$/
var TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/
var BC = /BC$/
var INFINITY = /^-?infinity$/

module.exports = function parseDate (isoDate) {
  if (INFINITY.test(isoDate)) {
    // Capitalize to Infinity before passing to Number
    return Number(isoDate.replace('i', 'I'))
  }
  var matches = DATE_TIME.exec(isoDate)

  if (!matches) {
    // Force YYYY-MM-DD dates to be parsed as local time
    return DATE.test(isoDate) ?
      getDate(isoDate) :
      null
  }

  var isBC = BC.test(isoDate)
  var year = parseInt(matches[1], 10)
  var isFirstCentury = year > 0 && year < 100
  year = (isBC ? '-' : '') + year

  var month = parseInt(matches[2], 10) - 1
  var day = matches[3]
  var hour = parseInt(matches[4], 10)
  var minute = parseInt(matches[5], 10)
  var second = parseInt(matches[6], 10)

  var ms = matches[7]
  ms = ms ? 1000 * parseFloat(ms) : 0

  var date
  var offset = timeZoneOffset(isoDate)
  if (offset != null) {
    var utc = Date.UTC(year, month, day, hour, minute, second, ms)
    date = new Date(utc - offset)
  } else {
    date = new Date(year, month, day, hour, minute, second, ms)
  }

  if (isFirstCentury) {
    date.setUTCFullYear(year)
  }

  return date
}

function getDate (isoDate) {
  var matches = DATE.exec(isoDate)
  var year = parseInt(matches[1], 10)
  var month = parseInt(matches[2], 10) - 1
  var day = matches[3]
  // YYYY-MM-DD will be parsed as local time
  var date = new Date(year, month, day)
  date.setFullYear(year)
  return date
}

// match timezones:
// Z (UTC)
// -05
// +06:30
function timeZoneOffset (isoDate) {
  var zone = TIME_ZONE.exec(isoDate.split(' ')[1])
  if (!zone) return
  var type = zone[1]

  if (type === 'Z') {
    return 0
  }
  var sign = type === '-' ? -1 : 1
  var offset = parseInt(zone[2], 10) * 3600 +
    parseInt(zone[3] || 0, 10) * 60 +
    parseInt(zone[4] || 0, 10)

  return offset * sign * 1000
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(35)

module.exports = PostgresInterval

function PostgresInterval (raw) {
  if (!(this instanceof PostgresInterval)) {
    return new PostgresInterval(raw)
  }
  extend(this, parse(raw))
}
var properties = ['seconds', 'minutes', 'hours', 'days', 'months', 'years']
PostgresInterval.prototype.toPostgres = function () {
  var filtered = properties.filter(this.hasOwnProperty, this)

  // In addition to `properties`, we need to account for fractions of seconds.
  if (this.milliseconds && filtered.indexOf('seconds') < 0) {
    filtered.push('seconds')
  }

  if (filtered.length === 0) return '0'
  return filtered
    .map(function (property) {
      var value = this[property] || 0

      // Account for fractional part of seconds,
      // remove trailing zeroes.
      if (property === 'seconds' && this.milliseconds) {
        value = (value + this.milliseconds / 1000).toFixed(6).replace(/0+$/, '')
      }

      return value + ' ' + property
    }, this)
    .join(' ')
}

var propertiesISOEquivalent = {
  years: 'Y',
  months: 'M',
  days: 'D',
  hours: 'H',
  minutes: 'M',
  seconds: 'S'
}
var dateProperties = ['years', 'months', 'days']
var timeProperties = ['hours', 'minutes', 'seconds']
// according to ISO 8601
PostgresInterval.prototype.toISO = function () {
  var datePart = dateProperties
    .map(buildProperty, this)
    .join('')

  var timePart = timeProperties
    .map(buildProperty, this)
    .join('')

  return 'P' + datePart + 'T' + timePart

  function buildProperty (property) {
    var value = this[property] || 0

    // Account for fractional part of seconds,
    // remove trailing zeroes.
    if (property === 'seconds' && this.milliseconds) {
      value = (value + this.milliseconds / 1000).toFixed(6).replace(/0+$/, '')
    }

    return value + propertiesISOEquivalent[property]
  }

}

var NUMBER = '([+-]?\\d+)'
var YEAR = NUMBER + '\\s+years?'
var MONTH = NUMBER + '\\s+mons?'
var DAY = NUMBER + '\\s+days?'
var TIME = '([+-])?([\\d]*):(\\d\\d):(\\d\\d)\.?(\\d{1,6})?'
var INTERVAL = new RegExp([YEAR, MONTH, DAY, TIME].map(function (regexString) {
  return '(' + regexString + ')?'
})
.join('\\s*'))

// Positions of values in regex match
var positions = {
  years: 2,
  months: 4,
  days: 6,
  hours: 9,
  minutes: 10,
  seconds: 11,
  milliseconds: 12
}
// We can use negative time
var negatives = ['hours', 'minutes', 'seconds', 'milliseconds']

function parseMilliseconds (fraction) {
  // add omitted zeroes
  var microseconds = fraction + '000000'.slice(fraction.length)
  return parseInt(microseconds, 10) / 1000
}

function parse (interval) {
  if (!interval) return {}
  var matches = INTERVAL.exec(interval)
  var isNegative = matches[8] === '-'
  return Object.keys(positions)
    .reduce(function (parsed, property) {
      var position = positions[property]
      var value = matches[position]
      // no empty string
      if (!value) return parsed
      // milliseconds are actually microseconds (up to 6 digits)
      // with omitted trailing zeroes.
      value = property === 'milliseconds'
        ? parseMilliseconds(value)
        : parseInt(value, 10)
      // no zeros
      if (!value) return parsed
      if (isNegative && ~negatives.indexOf(property)) {
        value *= -1
      }
      parsed[property] = value
      return parsed
    }, {})
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseBytea (input) {
  if (/^\\x/.test(input)) {
    // new 'hex' style response (pg >9.0)
    return new Buffer(input.substr(2), 'hex')
  }
  var output = ''
  var i = 0
  while (i < input.length) {
    if (input[i] !== '\\') {
      output += input[i]
      ++i
    } else {
      if (/[0-7]{3}/.test(input.substr(i + 1, 3))) {
        output += String.fromCharCode(parseInt(input.substr(i + 1, 3), 8))
        i += 4
      } else {
        var backslashes = 1
        while (i + backslashes < input.length && input[i + backslashes] === '\\') {
          backslashes++
        }
        for (var k = 0; k < Math.floor(backslashes / 2); ++k) {
          output += '\\'
        }
        i += Math.floor(backslashes / 2) * 2
      }
    }
  }
  return new Buffer(output, 'binary')
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var parseBits = function(data, bits, offset, invert, callback) {
  offset = offset || 0;
  invert = invert || false;
  callback = callback || function(lastValue, newValue, bits) { return (lastValue * Math.pow(2, bits)) + newValue; };
  var offsetBytes = offset >> 3;

  var inv = function(value) {
    if (invert) {
      return ~value & 0xff;
    }

    return value;
  };

  // read first (maybe partial) byte
  var mask = 0xff;
  var firstBits = 8 - (offset % 8);
  if (bits < firstBits) {
    mask = (0xff << (8 - bits)) & 0xff;
    firstBits = bits;
  }

  if (offset) {
    mask = mask >> (offset % 8);
  }

  var result = 0;
  if ((offset % 8) + bits >= 8) {
    result = callback(0, inv(data[offsetBytes]) & mask, firstBits);
  }

  // read bytes
  var bytes = (bits + offset) >> 3;
  for (var i = offsetBytes + 1; i < bytes; i++) {
    result = callback(result, inv(data[i]), 8);
  }

  // bits to read, that are not a complete byte
  var lastBits = (bits + offset) % 8;
  if (lastBits > 0) {
    result = callback(result, inv(data[bytes]) >> (8 - lastBits), lastBits);
  }

  return result;
};

var parseFloatFromBits = function(data, precisionBits, exponentBits) {
  var bias = Math.pow(2, exponentBits - 1) - 1;
  var sign = parseBits(data, 1);
  var exponent = parseBits(data, exponentBits, 1);

  if (exponent === 0) {
    return 0;
  }

  // parse mantissa
  var precisionBitsCounter = 1;
  var parsePrecisionBits = function(lastValue, newValue, bits) {
    if (lastValue === 0) {
      lastValue = 1;
    }

    for (var i = 1; i <= bits; i++) {
      precisionBitsCounter /= 2;
      if ((newValue & (0x1 << (bits - i))) > 0) {
        lastValue += precisionBitsCounter;
      }
    }

    return lastValue;
  };

  var mantissa = parseBits(data, precisionBits, exponentBits + 1, false, parsePrecisionBits);

  // special cases
  if (exponent == (Math.pow(2, exponentBits + 1) - 1)) {
    if (mantissa === 0) {
      return (sign === 0) ? Infinity : -Infinity;
    }

    return NaN;
  }

  // normale number
  return ((sign === 0) ? 1 : -1) * Math.pow(2, exponent - bias) * mantissa;
};

var parseInt16 = function(value) {
  if (parseBits(value, 1) == 1) {
    return -1 * (parseBits(value, 15, 1, true) + 1);
  }

  return parseBits(value, 15, 1);
};

var parseInt32 = function(value) {
  if (parseBits(value, 1) == 1) {
    return -1 * (parseBits(value, 31, 1, true) + 1);
  }

  return parseBits(value, 31, 1);
};

var parseFloat32 = function(value) {
  return parseFloatFromBits(value, 23, 8);
};

var parseFloat64 = function(value) {
  return parseFloatFromBits(value, 52, 11);
};

var parseNumeric = function(value) {
  var sign = parseBits(value, 16, 32);
  if (sign == 0xc000) {
    return NaN;
  }

  var weight = Math.pow(10000, parseBits(value, 16, 16));
  var result = 0;

  var digits = [];
  var ndigits = parseBits(value, 16);
  for (var i = 0; i < ndigits; i++) {
    result += parseBits(value, 16, 64 + (16 * i)) * weight;
    weight /= 10000;
  }

  var scale = Math.pow(10, parseBits(value, 16, 48));
  return ((sign === 0) ? 1 : -1) * Math.round(result * scale) / scale;
};

var parseDate = function(isUTC, value) {
  var sign = parseBits(value, 1);
  var rawValue = parseBits(value, 63, 1);

  // discard usecs and shift from 2000 to 1970
  var result = new Date((((sign === 0) ? 1 : -1) * rawValue / 1000) + 946684800000);

  if (!isUTC) {
    result.setTime(result.getTime() + result.getTimezoneOffset() * 60000);
  }

  // add microseconds to the date
  result.usec = rawValue % 1000;
  result.getMicroSeconds = function() {
    return this.usec;
  };
  result.setMicroSeconds = function(value) {
    this.usec = value;
  };
  result.getUTCMicroSeconds = function() {
    return this.usec;
  };

  return result;
};

var parseArray = function(value) {
  var dim = parseBits(value, 32);

  var flags = parseBits(value, 32, 32);
  var elementType = parseBits(value, 32, 64);

  var offset = 96;
  var dims = [];
  for (var i = 0; i < dim; i++) {
    // parse dimension
    dims[i] = parseBits(value, 32, offset);
    offset += 32;

    // ignore lower bounds
    offset += 32;
  }

  var parseElement = function(elementType) {
    // parse content length
    var length = parseBits(value, 32, offset);
    offset += 32;

    // parse null values
    if (length == 0xffffffff) {
      return null;
    }

    var result;
    if ((elementType == 0x17) || (elementType == 0x14)) {
      // int/bigint
      result = parseBits(value, length * 8, offset);
      offset += length * 8;
      return result;
    }
    else if (elementType == 0x19) {
      // string
      result = value.toString(this.encoding, offset >> 3, (offset += (length << 3)) >> 3);
      return result;
    }
    else {
      console.log("ERROR: ElementType not implemented: " + elementType);
    }
  };

  var parse = function(dimension, elementType) {
    var array = [];
    var i;

    if (dimension.length > 1) {
      var count = dimension.shift();
      for (i = 0; i < count; i++) {
        array[i] = parse(dimension, elementType);
      }
      dimension.unshift(count);
    }
    else {
      for (i = 0; i < dimension[0]; i++) {
        array[i] = parseElement(elementType);
      }
    }

    return array;
  };

  return parse(dims, elementType);
};

var parseText = function(value) {
  return value.toString('utf8');
};

var parseBool = function(value) {
  if(value === null) return null;
  return (parseBits(value, 8) > 0);
};

var init = function(register) {
  register(21, parseInt16);
  register(23, parseInt32);
  register(26, parseInt32);
  register(1700, parseNumeric);
  register(700, parseFloat32);
  register(701, parseFloat64);
  register(16, parseBool);
  register(1114, parseDate.bind(null, false));
  register(1184, parseDate.bind(null, true));
  register(1000, parseArray);
  register(1007, parseArray);
  register(1016, parseArray);
  register(1008, parseArray);
  register(1009, parseArray);
  register(25, parseText);
};

module.exports = {
  init: init
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(10)
  , fs = __webpack_require__(39)
  , helper = __webpack_require__(40)
;


module.exports = function(connInfo, cb) {
    var file = helper.getFileName();
    
    fs.stat(file, function(err, stat){
        if (err || !helper.usePgPass(stat, file)) {
            return cb(undefined);
        }

        var st = fs.createReadStream(file);

        helper.getPassword(connInfo, st, cb);
    });
};

module.exports.warnTo = helper.warnTo;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(10)
  , Stream = __webpack_require__(6).Stream
  , Split = __webpack_require__(41)
  , util = __webpack_require__(0)
  , defaultPort = 5432
  , isWin = (process.platform === 'win32')
  , warnStream = process.stderr
;


var S_IRWXG = 56     //    00070(8)
  , S_IRWXO = 7      //    00007(8)
  , S_IFMT  = 61440  // 00170000(8)
  , S_IFREG = 32768  //  0100000(8)
;
function isRegFile(mode) {
    return ((mode & S_IFMT) == S_IFREG);
}

var fieldNames = [ 'host', 'port', 'database', 'user', 'password' ];
var nrOfFields = fieldNames.length;
var passKey = fieldNames[ nrOfFields -1 ];


function warn() {
    var isWritable = (
        warnStream instanceof Stream &&
          true === warnStream.writable
    );

    if (isWritable) {
        var args = Array.prototype.slice.call(arguments).concat("\n");
        warnStream.write( util.format.apply(util, args) );
    }
}


Object.defineProperty(module.exports, 'isWin', {
    get : function() {
        return isWin;
    } ,
    set : function(val) {
        isWin = val;
    }
});


module.exports.warnTo = function(stream) {
    var old = warnStream;
    warnStream = stream;
    return old;
};

module.exports.getFileName = function(env){
    env = env || process.env;
    var file = env.PGPASSFILE || (
        isWin ?
          path.join( env.APPDATA , 'postgresql', 'pgpass.conf' ) :
          path.join( env.HOME, '.pgpass' )
    );
    return file;
};

module.exports.usePgPass = function(stats, fname) {
    if (Object.prototype.hasOwnProperty.call(process.env, 'PGPASSWORD')) {
        return false;
    }

    if (isWin) {
        return true;
    }

    fname = fname || '<unkn>';

    if (! isRegFile(stats.mode)) {
        warn('WARNING: password file "%s" is not a plain file', fname);
        return false;
    }

    if (stats.mode & (S_IRWXG | S_IRWXO)) {
        /* If password file is insecure, alert the user and ignore it. */
        warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', fname);
        return false;
    }

    return true;
};


var matcher = module.exports.match = function(connInfo, entry) {
    return fieldNames.slice(0, -1).reduce(function(prev, field, idx){
        if (idx == 1) {
            // the port
            if ( Number( connInfo[field] || defaultPort ) === Number( entry[field] ) ) {
                return prev && true;
            }
        }
        return prev && (
            entry[field] === '*' ||
              entry[field] === connInfo[field]
        );
    }, true);
};


module.exports.getPassword = function(connInfo, stream, cb) {
    var pass;
    var lineStream = stream.pipe(new Split());

    function onLine(line) {
        var entry = parseLine(line);
        if (entry && isValidEntry(entry) && matcher(connInfo, entry)) {
            pass = entry[passKey];
            lineStream.end(); // -> calls onEnd(), but pass is set now
        }
    }

    var onEnd = function() {
        stream.destroy();
        cb(pass);
    };

    var onErr = function(err) {
        stream.destroy();
        warn('WARNING: error on reading file: %s', err);
        cb(undefined);
    };

    stream.on('error', onErr);
    lineStream
        .on('data', onLine)
        .on('end', onEnd)
        .on('error', onErr)
    ;

};


var parseLine = module.exports.parseLine = function(line) {
    if (line.length < 11 || line.match(/^\s+#/)) {
        return null;
    }

    var curChar = '';
    var prevChar = '';
    var fieldIdx = 0;
    var startIdx = 0;
    var endIdx = 0;
    var obj = {};
    var isLastField = false;
    var addToObj = function(idx, i0, i1) {
        var field = line.substring(i0, i1);

        if (! Object.hasOwnProperty.call(process.env, 'PGPASS_NO_DEESCAPE')) {
            field = field.replace(/\\([:\\])/g, '$1');
        }

        obj[ fieldNames[idx] ] = field;
    };

    for (var i = 0 ; i < line.length-1 ; i += 1) {
        curChar = line.charAt(i+1);
        prevChar = line.charAt(i);

        isLastField = (fieldIdx == nrOfFields-1);

        if (isLastField) {
            addToObj(fieldIdx, startIdx);
            break;
        }

        if (i >= 0 && curChar == ':' && prevChar !== '\\') {
            addToObj(fieldIdx, startIdx, i+1);

            startIdx = i+2;
            fieldIdx += 1;
        }
    }

    obj = ( Object.keys(obj).length === nrOfFields ) ? obj : null;

    return obj;
};


var isValidEntry = module.exports.isValidEntry = function(entry){
    var rules = {
        // host
        0 : function(x){
            return x.length > 0;
        } ,
        // port
        1 : function(x){
            if (x === '*') {
                return true;
            }
            x = Number(x);
            return (
                isFinite(x) &&
                  x > 0 &&
                  x < 9007199254740992 &&
                  Math.floor(x) === x
            );
        } ,
        // database
        2 : function(x){
            return x.length > 0;
        } ,
        // username
        3 : function(x){
            return x.length > 0;
        } ,
        // password
        4 : function(x){
            return x.length > 0;
        }
    };

    for (var idx = 0 ; idx < fieldNames.length ; idx += 1) {
        var rule = rules[idx];
        var value = entry[ fieldNames[idx] ] || '';

        var res = rule(value);
        if (!res) {
            return false;
        }
    }

    return true;
};



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

//filter will reemit the data if cb(err,pass) pass is truthy

// reduce is more tricky
// maybe we want to group the reductions or emit progress updates occasionally
// the most basic reduce just emits one 'data' event after it has recieved 'end'


var through = __webpack_require__(42)
var Decoder = __webpack_require__(14).StringDecoder

module.exports = split

//TODO pass in a function to map across the lines.

function split (matcher, mapper, options) {
  var decoder = new Decoder()
  var soFar = ''
  var maxLength = options && options.maxLength;
  var trailing = options && options.trailing === false ? false : true
  if('function' === typeof matcher)
    mapper = matcher, matcher = null
  if (!matcher)
    matcher = /\r?\n/

  function emit(stream, piece) {
    if(mapper) {
      try {
        piece = mapper(piece)
      }
      catch (err) {
        return stream.emit('error', err)
      }
      if('undefined' !== typeof piece)
        stream.queue(piece)
    }
    else
      stream.queue(piece)
  }

  function next (stream, buffer) {
    var pieces = ((soFar != null ? soFar : '') + buffer).split(matcher)
    soFar = pieces.pop()

    if (maxLength && soFar.length > maxLength)
      return stream.emit('error', new Error('maximum buffer reached'))

    for (var i = 0; i < pieces.length; i++) {
      var piece = pieces[i]
      emit(stream, piece)
    }
  }

  return through(function (b) {
    next(this, decoder.write(b))
  },
  function () {
    if(decoder.end)
      next(this, decoder.end())
    if(trailing && soFar != null)
      emit(this, soFar)
    this.queue(null)
  })
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(6)

// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through
through.through = through

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data) }
  end = end || function () { this.queue(null) }

  var ended = false, destroyed = false, buffer = [], _ended = false
  var stream = new Stream()
  stream.readable = stream.writable = true
  stream.paused = false

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false)

  stream.write = function (data) {
    write.call(this, data)
    return !stream.paused
  }

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift()
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data)
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true
    buffer.push(data)
    drain()
    return stream
  }

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy()
      })
  })

  function _end () {
    stream.writable = false
    end.call(stream)
    if(!stream.readable && stream.autoDestroy)
      stream.destroy()
  }

  stream.end = function (data) {
    if(ended) return
    ended = true
    if(arguments.length) stream.write(data)
    _end() // will emit or queue
    return stream
  }

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true
    ended = true
    buffer.length = 0
    stream.writable = stream.readable = false
    stream.emit('close')
    return stream
  }

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true
    return stream
  }

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false
      stream.emit('resume')
    }
    drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain')
    return stream
  }
  return stream
}



/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("dns");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(29);

//Parse method copied from https://github.com/brianc/node-postgres
//Copyright (c) 2010-2014 Brian Carlson (brian.m.carlson@gmail.com)
//MIT License

//parses a connection string
function parse(str) {
  var config;
  //unix socket
  if(str.charAt(0) === '/') {
    config = str.split(' ');
    return { host: config[0], database: config[1] };
  }
  // url parse expects spaces encoded as %20
  if(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str)) {
    str = encodeURI(str).replace(/\%25(\d\d)/g, "%$1");
  }
  var result = url.parse(str, true);
  config = {};

  if (result.query.application_name) {
    config.application_name = result.query.application_name;
  }
  if (result.query.fallback_application_name) {
    config.fallback_application_name = result.query.fallback_application_name;
  }

  config.port = result.port;
  if(result.protocol == 'socket:') {
    config.host = decodeURI(result.pathname);
    config.database = result.query.db;
    config.client_encoding = result.query.encoding;
    return config;
  }
  config.host = result.hostname;

  // result.pathname is not always guaranteed to have a '/' prefix (e.g. relative urls)
  // only strip the slash if it is present.
  var pathname = result.pathname;
  if (pathname && pathname.charAt(0) === '/') {
    pathname = result.pathname.slice(1) || null;
  }
  config.database = pathname && decodeURI(pathname);

  var auth = (result.auth || ':').split(':');
  config.user = auth[0];
  config.password = auth.splice(1).join(':');

  var ssl = result.query.ssl;
  if (ssl === 'true' || ssl === '1') {
    config.ssl = true;
  }

  return config;
}

module.exports = {
  parse: parse
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var EventEmitter = __webpack_require__(2).EventEmitter
var util = __webpack_require__(0)

var Result = __webpack_require__(46)
var utils = __webpack_require__(12)

var Query = function (config, values, callback) {
  // use of "new" optional
  if (!(this instanceof Query)) { return new Query(config, values, callback) }

  config = utils.normalizeQueryConfig(config, values, callback)

  this.text = config.text
  this.values = config.values
  this.rows = config.rows
  this.types = config.types
  this.name = config.name
  this.binary = config.binary
  this.stream = config.stream
  // use unique portal name each time
  this.portal = config.portal || ''
  this.callback = config.callback
  this._rowMode = config.rowMode
  if (process.domain && config.callback) {
    this.callback = process.domain.bind(config.callback)
  }
  this._result = new Result(this._rowMode, this.types)

  // potential for multiple results
  this._results = this._result
  this.isPreparedStatement = false
  this._canceledDueToError = false
  this._promise = null
  EventEmitter.call(this)
}

util.inherits(Query, EventEmitter)

Query.prototype.requiresPreparation = function () {
  // named queries must always be prepared
  if (this.name) { return true }
  // always prepare if there are max number of rows expected per
  // portal execution
  if (this.rows) { return true }
  // don't prepare empty text queries
  if (!this.text) { return false }
  // prepare if there are values
  if (!this.values) { return false }
  return this.values.length > 0
}

Query.prototype._checkForMultirow = function () {
  // if we already have a result with a command property
  // then we've already executed one query in a multi-statement simple query
  // turn our results into an array of results
  if (this._result.command) {
    if (!Array.isArray(this._results)) {
      this._results = [this._result]
    }
    this._result = new Result(this._rowMode, this.types)
    this._results.push(this._result)
  }
}

// associates row metadata from the supplied
// message with this query object
// metadata used when parsing row results
Query.prototype.handleRowDescription = function (msg) {
  this._checkForMultirow()
  this._result.addFields(msg.fields)
  this._accumulateRows = this.callback || !this.listeners('row').length
}

Query.prototype.handleDataRow = function (msg) {
  var row

  if (this._canceledDueToError) {
    return
  }

  try {
    row = this._result.parseRow(msg.fields)
  } catch (err) {
    this._canceledDueToError = err
    return
  }

  this.emit('row', row, this._result)
  if (this._accumulateRows) {
    this._result.addRow(row)
  }
}

Query.prototype.handleCommandComplete = function (msg, con) {
  this._checkForMultirow()
  this._result.addCommandComplete(msg)
  // need to sync after each command complete of a prepared statement
  if (this.isPreparedStatement) {
    con.sync()
  }
}

// if a named prepared statement is created with empty query text
// the backend will send an emptyQuery message but *not* a command complete message
// execution on the connection will hang until the backend receives a sync message
Query.prototype.handleEmptyQuery = function (con) {
  if (this.isPreparedStatement) {
    con.sync()
  }
}

Query.prototype.handleReadyForQuery = function (con) {
  if (this._canceledDueToError) {
    return this.handleError(this._canceledDueToError, con)
  }
  if (this.callback) {
    this.callback(null, this._results)
  }
  this.emit('end', this._results)
}

Query.prototype.handleError = function (err, connection) {
  // need to sync after error during a prepared statement
  if (this.isPreparedStatement) {
    connection.sync()
  }
  if (this._canceledDueToError) {
    err = this._canceledDueToError
    this._canceledDueToError = false
  }
  // if callback supplied do not emit error event as uncaught error
  // events will bubble up to node process
  if (this.callback) {
    return this.callback(err)
  }
  this.emit('error', err)
}

Query.prototype.submit = function (connection) {
  if (typeof this.text !== 'string' && typeof this.name !== 'string') {
    const err = new Error('A query must have either text or a name. Supplying neither is unsupported.')
    connection.emit('error', err)
    connection.emit('readyForQuery')
    return
  }
  if (this.values && !Array.isArray(this.values)) {
    const err = new Error('Query values must be an array')
    connection.emit('error', err)
    connection.emit('readyForQuery')
    return
  }
  if (this.requiresPreparation()) {
    this.prepare(connection)
  } else {
    connection.query(this.text)
  }
}

Query.prototype.hasBeenParsed = function (connection) {
  return this.name && connection.parsedStatements[this.name]
}

Query.prototype.handlePortalSuspended = function (connection) {
  this._getRows(connection, this.rows)
}

Query.prototype._getRows = function (connection, rows) {
  connection.execute({
    portal: this.portalName,
    rows: rows
  }, true)
  connection.flush()
}

Query.prototype.prepare = function (connection) {
  var self = this
  // prepared statements need sync to be called after each command
  // complete or when an error is encountered
  this.isPreparedStatement = true
  // TODO refactor this poor encapsulation
  if (!this.hasBeenParsed(connection)) {
    connection.parse({
      text: self.text,
      name: self.name,
      types: self.types
    }, true)
  }

  if (self.values) {
    self.values = self.values.map(utils.prepareValue)
  }

  // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
  connection.bind({
    portal: self.portalName,
    statement: self.name,
    values: self.values,
    binary: self.binary
  }, true)

  connection.describe({
    type: 'P',
    name: self.portalName || ''
  }, true)

  this._getRows(connection, this.rows)
}

Query.prototype.handleCopyInResponse = function (connection) {
  if (this.stream) this.stream.startStreamingToConnection(connection)
  else connection.sendCopyFail('No source stream defined')
}

Query.prototype.handleCopyData = function (msg, connection) {
  var chunk = msg.chunk
  if (this.stream) {
    this.stream.handleChunk(chunk)
  }
  // if there are no stream (for example when copy to query was sent by
  // query method instead of copyTo) error will be handled
  // on copyOutResponse event, so silently ignore this error here
}
module.exports = Query


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var types = __webpack_require__(5)
var escape = __webpack_require__(47)

// result object returned from query
// in the 'end' event and also
// passed as second argument to provided callback
var Result = function (rowMode) {
  this.command = null
  this.rowCount = null
  this.oid = null
  this.rows = []
  this.fields = []
  this._parsers = []
  this.RowCtor = null
  this.rowAsArray = rowMode === 'array'
  if (this.rowAsArray) {
    this.parseRow = this._parseRowAsArray
  }
}

var matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/

// adds a command complete message
Result.prototype.addCommandComplete = function (msg) {
  var match
  if (msg.text) {
    // pure javascript
    match = matchRegexp.exec(msg.text)
  } else {
    // native bindings
    match = matchRegexp.exec(msg.command)
  }
  if (match) {
    this.command = match[1]
    if (match[3]) {
      // COMMMAND OID ROWS
      this.oid = parseInt(match[2], 10)
      this.rowCount = parseInt(match[3], 10)
    } else if (match[2]) {
      // COMMAND ROWS
      this.rowCount = parseInt(match[2], 10)
    }
  }
}

Result.prototype._parseRowAsArray = function (rowData) {
  var row = []
  for (var i = 0, len = rowData.length; i < len; i++) {
    var rawValue = rowData[i]
    if (rawValue !== null) {
      row.push(this._parsers[i](rawValue))
    } else {
      row.push(null)
    }
  }
  return row
}

// rowData is an array of text or binary values
// this turns the row into a JavaScript object
Result.prototype.parseRow = function (rowData) {
  return new this.RowCtor(this._parsers, rowData)
}

Result.prototype.addRow = function (row) {
  this.rows.push(row)
}

var inlineParser = function (fieldName, i) {
  return "\nthis['" +
    // fields containing single quotes will break
    // the evaluated javascript unless they are escaped
    // see https://github.com/brianc/node-postgres/issues/507
    // Addendum: However, we need to make sure to replace all
    // occurences of apostrophes, not just the first one.
    // See https://github.com/brianc/node-postgres/issues/934
    escape(fieldName) +
    "'] = " +
    'rowData[' + i + '] == null ? null : parsers[' + i + '](rowData[' + i + ']);'
}

Result.prototype.addFields = function (fieldDescriptions) {
  // clears field definitions
  // multiple query statements in 1 action can result in multiple sets
  // of rowDescriptions...eg: 'select NOW(); select 1::int;'
  // you need to reset the fields
  if (this.fields.length) {
    this.fields = []
    this._parsers = []
  }
  var ctorBody = ''
  for (var i = 0; i < fieldDescriptions.length; i++) {
    var desc = fieldDescriptions[i]
    this.fields.push(desc)
    var parser = this._getTypeParser(desc.dataTypeID, desc.format || 'text')
    this._parsers.push(parser)
    // this is some craziness to compile the row result parsing
    // results in ~60% speedup on large query result sets
    ctorBody += inlineParser(desc.name, i)
  }
  if (!this.rowAsArray) {
    this.RowCtor = Function('parsers', 'rowData', ctorBody)
  }
}

Result.prototype._getTypeParser = types.getTypeParser

module.exports = Result


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function (string) {
  return ('' + string).replace(/["'\\\n\r\u2028\u2029]/g, function (character) {
    // Escape all characters not included in SingleStringCharacters and
    // DoubleStringCharacters on
    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
    switch (character) {
      case '"':
      case "'":
      case '\\':
        return '\\' + character
      // Four possible LineTerminator characters need to be escaped:
      case '\n':
        return '\\n'
      case '\r':
        return '\\r'
      case '\u2028':
        return '\\u2028'
      case '\u2029':
        return '\\u2029'
    }
  })
}


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

//binary data writer tuned for creating
//postgres message packets as effeciently as possible by reusing the
//same buffer to avoid memcpy and limit memory allocations
var Writer = module.exports = function(size) {
  this.size = size || 1024;
  this.buffer = Buffer(this.size + 5);
  this.offset = 5;
  this.headerPosition = 0;
};

//resizes internal buffer if not enough size left
Writer.prototype._ensure = function(size) {
  var remaining = this.buffer.length - this.offset;
  if(remaining < size) {
    var oldBuffer = this.buffer;
    // exponential growth factor of around ~ 1.5
    // https://stackoverflow.com/questions/2269063/buffer-growth-strategy
    var newSize = oldBuffer.length + (oldBuffer.length >> 1) + size;
    this.buffer = new Buffer(newSize);
    oldBuffer.copy(this.buffer);
  }
};

Writer.prototype.addInt32 = function(num) {
  this._ensure(4);
  this.buffer[this.offset++] = (num >>> 24 & 0xFF);
  this.buffer[this.offset++] = (num >>> 16 & 0xFF);
  this.buffer[this.offset++] = (num >>>  8 & 0xFF);
  this.buffer[this.offset++] = (num >>>  0 & 0xFF);
  return this;
};

Writer.prototype.addInt16 = function(num) {
  this._ensure(2);
  this.buffer[this.offset++] = (num >>>  8 & 0xFF);
  this.buffer[this.offset++] = (num >>>  0 & 0xFF);
  return this;
};

//for versions of node requiring 'length' as 3rd argument to buffer.write
var writeString = function(buffer, string, offset, len) {
  buffer.write(string, offset, len);
};

//overwrite function for older versions of node
if(Buffer.prototype.write.length === 3) {
  writeString = function(buffer, string, offset, len) {
    buffer.write(string, offset);
  };
}

Writer.prototype.addCString = function(string) {
  //just write a 0 for empty or null strings
  if(!string) {
    this._ensure(1);
  } else {
    var len = Buffer.byteLength(string);
    this._ensure(len + 1); //+1 for null terminator
    writeString(this.buffer, string, this.offset, len);
    this.offset += len;
  }

  this.buffer[this.offset++] = 0; // null terminator
  return this;
};

Writer.prototype.addChar = function(c) {
  this._ensure(1);
  writeString(this.buffer, c, this.offset, 1);
  this.offset++;
  return this;
};

Writer.prototype.addString = function(string) {
  string = string || "";
  var len = Buffer.byteLength(string);
  this._ensure(len);
  this.buffer.write(string, this.offset);
  this.offset += len;
  return this;
};

Writer.prototype.getByteLength = function() {
  return this.offset - 5;
};

Writer.prototype.add = function(otherBuffer) {
  this._ensure(otherBuffer.length);
  otherBuffer.copy(this.buffer, this.offset);
  this.offset += otherBuffer.length;
  return this;
};

Writer.prototype.clear = function() {
  this.offset = 5;
  this.headerPosition = 0;
  this.lastEnd = 0;
};

//appends a header block to all the written data since the last
//subsequent header or to the beginning if there is only one data block
Writer.prototype.addHeader = function(code, last) {
  var origOffset = this.offset;
  this.offset = this.headerPosition;
  this.buffer[this.offset++] = code;
  //length is everything in this packet minus the code
  this.addInt32(origOffset - (this.headerPosition+1));
  //set next header position
  this.headerPosition = origOffset;
  //make space for next header
  this.offset = origOffset;
  if(!last) {
    this._ensure(5);
    this.offset += 5;
  }
};

Writer.prototype.join = function(code) {
  if(code) {
    this.addHeader(code, true);
  }
  return this.buffer.slice(code ? 0 : 5, this.offset);
};

Writer.prototype.flush = function(code) {
  var result = this.join(code);
  this.clear();
  return result;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(20)

var Reader = module.exports = function(options) {
  //TODO - remove for version 1.0
  if(typeof options == 'number') {
    options = { headerSize: options }
  }
  options = options || {}
  this.offset = 0
  this.lastChunk = false
  this.chunk = null
  this.chunkLength = 0
  this.headerSize = options.headerSize || 0
  this.lengthPadding = options.lengthPadding || 0
  this.header = null
  assert(this.headerSize < 2, 'pre-length header of more than 1 byte length not currently supported')
}

Reader.prototype.addChunk = function(chunk) {
  if (!this.chunk || this.offset === this.chunkLength) {
    this.chunk = chunk
    this.chunkLength = chunk.length
    this.offset = 0
    return
  }

  var newChunkLength = chunk.length
  var newLength = this.chunkLength + newChunkLength

  if (newLength > this.chunk.length) {
    var newBufferLength = this.chunk.length * 2
    while (newLength >= newBufferLength) {
      newBufferLength *= 2
    }
    var newBuffer = new Buffer(newBufferLength)
    this.chunk.copy(newBuffer)
    this.chunk = newBuffer
  }
  chunk.copy(this.chunk, this.chunkLength)
  this.chunkLength = newLength
}

Reader.prototype.read = function() {
  if(this.chunkLength < (this.headerSize + 4 + this.offset)) {
    return false
  }

  if(this.headerSize) {
    this.header = this.chunk[this.offset]
  }

  //read length of next item
  var length = this.chunk.readUInt32BE(this.offset + this.headerSize) + this.lengthPadding

  //next item spans more chunks than we have
  var remaining = this.chunkLength - (this.offset + 4 + this.headerSize)
  if(length > remaining) {
    return false
  }

  this.offset += (this.headerSize + 4)
  var result = this.chunk.slice(this.offset, this.offset + length)
  this.offset += length
  return result
}


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const EventEmitter = __webpack_require__(2).EventEmitter

const NOOP = function () { }

const removeWhere = (list, predicate) => {
  const i = list.findIndex(predicate)

  return i === -1
    ? undefined
    : list.splice(i, 1)[0]
}

class IdleItem {
  constructor (client, timeoutId) {
    this.client = client
    this.timeoutId = timeoutId
  }
}

function throwOnRelease () {
  throw new Error('Release called on client which has already been released to the pool.')
}

function release (client, err) {
  client.release = throwOnRelease
  if (err || this.ending) {
    this._remove(client)
    this._pulseQueue()
    return
  }

  // idle timeout
  let tid
  if (this.options.idleTimeoutMillis) {
    tid = setTimeout(() => {
      this.log('remove idle client')
      this._remove(client)
    }, this.options.idleTimeoutMillis)
  }

  this._idle.push(new IdleItem(client, tid))
  this._pulseQueue()
}

function promisify (Promise, callback) {
  if (callback) {
    return { callback: callback, result: undefined }
  }
  let rej
  let res
  const cb = function (err, client) {
    err ? rej(err) : res(client)
  }
  const result = new Promise(function (resolve, reject) {
    res = resolve
    rej = reject
  })
  return { callback: cb, result: result }
}

class Pool extends EventEmitter {
  constructor (options, Client) {
    super()
    this.options = Object.assign({}, options)
    this.options.max = this.options.max || this.options.poolSize || 10
    this.log = this.options.log || function () { }
    this.Client = this.options.Client || Client || __webpack_require__(11).Client
    this.Promise = this.options.Promise || global.Promise

    if (typeof this.options.idleTimeoutMillis === 'undefined') {
      this.options.idleTimeoutMillis = 10000
    }

    this._clients = []
    this._idle = []
    this._pendingQueue = []
    this._endCallback = undefined
    this.ending = false
  }

  _isFull () {
    return this._clients.length >= this.options.max
  }

  _pulseQueue () {
    this.log('pulse queue')
    if (this.ending) {
      this.log('pulse queue on ending')
      if (this._idle.length) {
        this._idle.slice().map(item => {
          this._remove(item.client)
        })
      }
      if (!this._clients.length) {
        this._endCallback()
      }
      return
    }
    // if we don't have any waiting, do nothing
    if (!this._pendingQueue.length) {
      this.log('no queued requests')
      return
    }
    // if we don't have any idle clients and we have no more room do nothing
    if (!this._idle.length && this._isFull()) {
      return
    }
    const waiter = this._pendingQueue.shift()
    if (this._idle.length) {
      const idleItem = this._idle.pop()
      clearTimeout(idleItem.timeoutId)
      const client = idleItem.client
      client.release = release.bind(this, client)
      this.emit('acquire', client)
      return waiter(undefined, client, client.release)
    }
    if (!this._isFull()) {
      return this.connect(waiter)
    }
    throw new Error('unexpected condition')
  }

  _remove (client) {
    const removed = removeWhere(
      this._idle,
      item => item.client === client
    )

    if (removed !== undefined) {
      clearTimeout(removed.timeoutId)
    }

    this._clients = this._clients.filter(c => c !== client)
    client.end()
    this.emit('remove', client)
  }

  connect (cb) {
    if (this.ending) {
      const err = new Error('Cannot use a pool after calling end on the pool')
      return cb ? cb(err) : this.Promise.reject(err)
    }

    // if we don't have to connect a new client, don't do so
    if (this._clients.length >= this.options.max || this._idle.length) {
      const response = promisify(this.Promise, cb)
      const result = response.result

      // if we have idle clients schedule a pulse immediately
      if (this._idle.length) {
        process.nextTick(() => this._pulseQueue())
      }

      if (!this.options.connectionTimeoutMillis) {
        this._pendingQueue.push(response.callback)
        return result
      }

      // set connection timeout on checking out an existing client
      const tid = setTimeout(() => {
        // remove the callback from pending waiters because
        // we're going to call it with a timeout error
        this._pendingQueue = this._pendingQueue.filter(cb => cb === response.callback)
        response.callback(new Error('timeout exceeded when trying to connect'))
      }, this.options.connectionTimeoutMillis)

      this._pendingQueue.push(function (err, res, done) {
        clearTimeout(tid)
        response.callback(err, res, done)
      })
      return result
    }

    const client = new this.Client(this.options)
    this._clients.push(client)
    const idleListener = (err) => {
      err.client = client
      client.removeListener('error', idleListener)
      client.on('error', () => {
        this.log('additional client error after disconnection due to error', err)
      })
      this._remove(client)
      // TODO - document that once the pool emits an error
      // the client has already been closed & purged and is unusable
      this.emit('error', err, client)
    }

    this.log('connecting new client')

    // connection timeout logic
    let tid
    let timeoutHit = false
    if (this.options.connectionTimeoutMillis) {
      tid = setTimeout(() => {
        this.log('ending client due to timeout')
        timeoutHit = true
        // force kill the node driver, and let libpq do its teardown
        client.connection ? client.connection.stream.destroy() : client.end()
      }, this.options.connectionTimeoutMillis)
    }

    const response = promisify(this.Promise, cb)
    cb = response.callback

    this.log('connecting new client')
    client.connect((err) => {
      this.log('new client connected')
      if (tid) {
        clearTimeout(tid)
      }
      client.on('error', idleListener)
      if (err) {
        // remove the dead client from our list of clients
        this._clients = this._clients.filter(c => c !== client)
        if (timeoutHit) {
          err.message = 'Connection terminiated due to connection timeout'
        }
        cb(err, undefined, NOOP)
      } else {
        client.release = release.bind(this, client)
        this.emit('connect', client)
        this.emit('acquire', client)
        if (this.options.verify) {
          this.options.verify(client, cb)
        } else {
          cb(undefined, client, client.release)
        }
      }
    })
    return response.result
  }

  query (text, values, cb) {
    // guard clause against passing a function as the first parameter
    if (typeof text === 'function') {
      const response = promisify(this.Promise, text)
      setImmediate(function () {
        return response.callback(new Error('Passing a function as the first parameter to pool.query is not supported'))
      })
      return response.result
    }

    // allow plain text query without values
    if (typeof values === 'function') {
      cb = values
      values = undefined
    }
    const response = promisify(this.Promise, cb)
    cb = response.callback
    this.connect((err, client) => {
      if (err) {
        return cb(err)
      }
      this.log('dispatching query')
      client.query(text, values, (err, res) => {
        this.log('query dispatched')
        client.release(err)
        if (err) {
          return cb(err)
        } else {
          return cb(undefined, res)
        }
      })
    })
    return response.result
  }

  end (cb) {
    this.log('ending')
    if (this.ending) {
      const err = new Error('Called end on pool more than once')
      return cb ? cb(err) : this.Promise.reject(err)
    }
    this.ending = true
    const promised = promisify(this.Promise, cb)
    this._endCallback = promised.callback
    this._pulseQueue()
    return promised.result
  }

  get waitingCount () {
    return this._pendingQueue.length
  }

  get idleCount () {
    return this._idle.length
  }

  get totalCount () {
    return this._clients.length
  }
}
module.exports = Pool


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var Native = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"pg-native\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
var TypeOverrides = __webpack_require__(17)
var semver = __webpack_require__(54)
var pkg = __webpack_require__(55)
var assert = __webpack_require__(20)
var EventEmitter = __webpack_require__(2).EventEmitter
var util = __webpack_require__(0)
var ConnectionParameters = __webpack_require__(18)

var msg = 'Version >= ' + pkg.minNativeVersion + ' of pg-native required.'
assert(semver.gte(Native.version, pkg.minNativeVersion), msg)

var NativeQuery = __webpack_require__(56)

var Client = module.exports = function (config) {
  EventEmitter.call(this)
  config = config || {}

  this._types = new TypeOverrides(config.types)

  this.native = new Native({
    types: this._types
  })

  this._queryQueue = []
  this._connected = false
  this._connecting = false

  // keep these on the object for legacy reasons
  // for the time being. TODO: deprecate all this jazz
  var cp = this.connectionParameters = new ConnectionParameters(config)
  this.user = cp.user
  this.password = cp.password
  this.database = cp.database
  this.host = cp.host
  this.port = cp.port

  // a hash to hold named queries
  this.namedQueries = {}
}

Client.Query = NativeQuery

util.inherits(Client, EventEmitter)

// connect to the backend
// pass an optional callback to be called once connected
// or with an error if there was a connection error
// if no callback is passed and there is a connection error
// the client will emit an error event.
Client.prototype.connect = function (cb) {
  var self = this

  var onError = function (err) {
    if (cb) return cb(err)
    return self.emit('error', err)
  }

  var result
  if (!cb) {
    var resolveOut, rejectOut
    cb = (err) => err ? rejectOut(err) : resolveOut()
    result = new global.Promise(function (resolve, reject) {
      resolveOut = resolve
      rejectOut = reject
    })
  }

  if (this._connecting) {
    process.nextTick(() => cb(new Error('Client has already been connected. You cannot reuse a client.')))
    return result
  }

  this._connecting = true

  this.connectionParameters.getLibpqConnectionString(function (err, conString) {
    if (err) return onError(err)
    self.native.connect(conString, function (err) {
      if (err) return onError(err)

      // set internal states to connected
      self._connected = true

      // handle connection errors from the native layer
      self.native.on('error', function (err) {
        // error will be handled by active query
        if (self._activeQuery && self._activeQuery.state !== 'end') {
          return
        }
        self.emit('error', err)
      })

      self.native.on('notification', function (msg) {
        self.emit('notification', {
          channel: msg.relname,
          payload: msg.extra
        })
      })

      // signal we are connected now
      self.emit('connect')
      self._pulseQueryQueue(true)

      // possibly call the optional callback
      if (cb) cb()
    })
  })

  return result
}

// send a query to the server
// this method is highly overloaded to take
// 1) string query, optional array of parameters, optional function callback
// 2) object query with {
//    string query
//    optional array values,
//    optional function callback instead of as a separate parameter
//    optional string name to name & cache the query plan
//    optional string rowMode = 'array' for an array of results
//  }
Client.prototype.query = function (config, values, callback) {
  if (typeof config.submit === 'function') {
    // accept query(new Query(...), (err, res) => { }) style
    if (typeof values === 'function') {
      config.callback = values
    }
    this._queryQueue.push(config)
    this._pulseQueryQueue()
    return config
  }

  var query = new NativeQuery(config, values, callback)
  var result
  if (!query.callback) {
    let resolveOut, rejectOut
    result = new Promise((resolve, reject) => {
      resolveOut = resolve
      rejectOut = reject
    })
    query.callback = (err, res) => err ? rejectOut(err) : resolveOut(res)
  }
  this._queryQueue.push(query)
  this._pulseQueryQueue()
  return result
}

// disconnect from the backend server
Client.prototype.end = function (cb) {
  var self = this
  if (!this._connected) {
    this.once('connect', this.end.bind(this, cb))
  }
  var result
  if (!cb) {
    var resolve, reject
    cb = (err) => err ? reject(err) : resolve()
    result = new global.Promise(function (res, rej) {
      resolve = res
      reject = rej
    })
  }
  this.native.end(function () {
    // send an error to the active query
    if (self._hasActiveQuery()) {
      var msg = 'Connection terminated'
      self._queryQueue.length = 0
      self._activeQuery.handleError(new Error(msg))
    }
    self.emit('end')
    if (cb) cb()
  })
  return result
}

Client.prototype._hasActiveQuery = function () {
  return this._activeQuery && this._activeQuery.state !== 'error' && this._activeQuery.state !== 'end'
}

Client.prototype._pulseQueryQueue = function (initialConnection) {
  if (!this._connected) {
    return
  }
  if (this._hasActiveQuery()) {
    return
  }
  var query = this._queryQueue.shift()
  if (!query) {
    if (!initialConnection) {
      this.emit('drain')
    }
    return
  }
  this._activeQuery = query
  query.submit(this)
  var self = this
  query.once('_done', function () {
    self._pulseQueryQueue()
  })
}

// attempt to cancel an in-progress query
Client.prototype.cancel = function (query) {
  if (this._activeQuery === query) {
    this.native.cancel(function () {})
  } else if (this._queryQueue.indexOf(query) !== -1) {
    this._queryQueue.splice(this._queryQueue.indexOf(query), 1)
  }
}

Client.prototype.setTypeParser = function (oid, format, parseFn) {
  return this._types.setTypeParser(oid, format, parseFn)
}

Client.prototype.getTypeParser = function (oid, format) {
  return this._types.getTypeParser(oid, format)
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// export the class if we are in a Node-like system.
if (typeof module === 'object' && module.exports === exports)
  exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      return (/^[0-9]+$/.test(id)) ? +id : id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.inspect = function() {
  return '<SemVer "' + this + '">';
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.inspect = function() {
  return '<SemVer Comparator "' + this + '">';
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    return range;

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.inspect = function() {
  return '<SemVer Range "' + this.range + '">';
};

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0- <1.3.0-
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm)
          M = +M + 1
        else
          m = +m + 1
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        return true;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

// Use the define() function if we're in AMD land
if (true)
  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (exports),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {"_from":"pg@^7.4.0","_id":"pg@7.4.0","_inBundle":false,"_integrity":"sha1-4lYGHSxScjw8hY3vuX8RWcpmD4M=","_location":"/pg","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"pg@^7.4.0","name":"pg","escapedName":"pg","rawSpec":"^7.4.0","saveSpec":null,"fetchSpec":"^7.4.0"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/pg/-/pg-7.4.0.tgz","_shasum":"e256061d2c52723c3c858defb97f1159ca660f83","_spec":"pg@^7.4.0","_where":"/Users/wisdman/Projects/bitjournal","author":{"name":"Brian Carlson","email":"brian.m.carlson@gmail.com"},"bugs":{"url":"https://github.com/brianc/node-postgres/issues"},"bundleDependencies":false,"dependencies":{"buffer-writer":"1.0.1","js-string-escape":"1.0.1","packet-reader":"0.3.1","pg-connection-string":"0.1.3","pg-pool":"~2.0.3","pg-types":"~1.12.1","pgpass":"1.x","semver":"4.3.2"},"deprecated":false,"description":"PostgreSQL client - pure javascript & libpq with the same API","devDependencies":{"async":"0.9.0","co":"4.6.0","eslint":"4.2.0","eslint-config-standard":"10.2.1","eslint-plugin-import":"2.7.0","eslint-plugin-node":"5.1.0","eslint-plugin-promise":"3.5.0","eslint-plugin-standard":"3.0.1","pg-copy-streams":"0.3.0"},"engines":{"node":">= 4.5.0"},"homepage":"http://github.com/brianc/node-postgres","keywords":["database","libpq","pg","postgre","postgres","postgresql","rdbms"],"license":"MIT","main":"./lib","minNativeVersion":"2.0.0","name":"pg","repository":{"type":"git","url":"git://github.com/brianc/node-postgres.git"},"scripts":{"test":"make test-all"},"version":"7.4.0"}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var EventEmitter = __webpack_require__(2).EventEmitter
var util = __webpack_require__(0)
var utils = __webpack_require__(12)

var NativeQuery = module.exports = function (config, values, callback) {
  EventEmitter.call(this)
  config = utils.normalizeQueryConfig(config, values, callback)
  this.text = config.text
  this.values = config.values
  this.name = config.name
  this.callback = config.callback
  this.state = 'new'
  this._arrayMode = config.rowMode === 'array'

  // if the 'row' event is listened for
  // then emit them as they come in
  // without setting singleRowMode to true
  // this has almost no meaning because libpq
  // reads all rows into memory befor returning any
  this._emitRowEvents = false
  this.on('newListener', function (event) {
    if (event === 'row') this._emitRowEvents = true
  }.bind(this))
}

util.inherits(NativeQuery, EventEmitter)

var errorFieldMap = {
  'sqlState': 'code',
  'statementPosition': 'position',
  'messagePrimary': 'message',
  'context': 'where',
  'schemaName': 'schema',
  'tableName': 'table',
  'columnName': 'column',
  'dataTypeName': 'dataType',
  'constraintName': 'constraint',
  'sourceFile': 'file',
  'sourceLine': 'line',
  'sourceFunction': 'routine'
}

NativeQuery.prototype.handleError = function (err) {
  // copy pq error fields into the error object
  var fields = this.native.pq.resultErrorFields()
  if (fields) {
    for (var key in fields) {
      var normalizedFieldName = errorFieldMap[key] || key
      err[normalizedFieldName] = fields[key]
    }
  }
  if (this.callback) {
    this.callback(err)
  } else {
    this.emit('error', err)
  }
  this.state = 'error'
}

NativeQuery.prototype.then = function (onSuccess, onFailure) {
  return this._getPromise().then(onSuccess, onFailure)
}

NativeQuery.prototype.catch = function (callback) {
  return this._getPromise().catch(callback)
}

NativeQuery.prototype._getPromise = function () {
  if (this._promise) return this._promise
  this._promise = new Promise(function (resolve, reject) {
    this._once('end', resolve)
    this._once('error', reject)
  }.bind(this))
  return this._promise
}

NativeQuery.prototype.submit = function (client) {
  this.state = 'running'
  var self = this
  this.native = client.native
  client.native.arrayMode = this._arrayMode

  var after = function (err, rows, results) {
    client.native.arrayMode = false
    setImmediate(function () {
      self.emit('_done')
    })

    // handle possible query error
    if (err) {
      return self.handleError(err)
    }

    // emit row events for each row in the result
    if (self._emitRowEvents) {
      if (results.length > 1) {
        rows.forEach((rowOfRows, i) => {
          rowOfRows.forEach(row => {
            self.emit('row', row, results[i])
          })
        })
      } else {
        rows.forEach(function (row) {
          self.emit('row', row, results)
        })
      }
    }

    // handle successful result
    self.state = 'end'
    self.emit('end', results)
    if (self.callback) {
      self.callback(null, results)
    }
  }

  if (process.domain) {
    after = process.domain.bind(after)
  }

  // named query
  if (this.name) {
    if (this.name.length > 63) {
      console.error('Warning! Postgres only supports 63 characters for query names.')
      console.error('You supplied', this.name, '(', this.name.length, ')')
      console.error('This can cause conflicts and silent errors executing queries')
    }
    var values = (this.values || []).map(utils.prepareValue)

    // check if the client has already executed this named query
    // if so...just execute it again - skip the planning phase
    if (client.namedQueries[this.name]) {
      return client.native.execute(this.name, values, after)
    }
    // plan the named query the first time, then execute it
    return client.native.prepare(this.name, this.text, values.length, function (err) {
      if (err) return after(err)
      client.namedQueries[self.name] = true
      return self.native.execute(self.name, values, after)
    })
  } else if (this.values) {
    if (!Array.isArray(this.values)) {
      const err = new Error('Query values must be an array')
      return after(err)
    }
    var vals = this.values.map(utils.prepareValue)
    client.native.query(this.text, vals, after)
  } else {
    client.native.query(this.text, after)
  }
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module pg-large-object */

/**
 * {@link module:pg-large-object/lib/LargeObjectManager}
 * @constant
 * @type {function}
 */
exports.LargeObjectManager = __webpack_require__(58);

/**
 * {@link module:pg-large-object/lib/LargeObject}
 * @constant
 * @type {function}
 */
exports.LargeObject = __webpack_require__(23);

/**
 * {@link module:pg-large-object/lib/ReadStream}
 * @constant
 * @type {function}
 */
exports.ReadStream = __webpack_require__(24);

/**
 * {@link module:pg-large-object/lib/WriteStream}
 * @constant
 * @type {function}
 */
exports.WriteStream = __webpack_require__(25);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var promiseFromCallback = __webpack_require__(22);
var LargeObject = __webpack_require__(23);

function pgPromiseAdapter(tx) {
        return function query(options, callback) {
                tx.query(options)
                .then(function(rows) {
                        callback(null, {rows: rows});
                })
                .catch(function(error) {
                        callback(error);
                });
        };
}

/** This class lets you use the Large Object functionality of PostgreSQL.
  * All usage of Large Object should take place within a transaction block!
  * (BEGIN ... COMMIT)   
  * 
  * @example new LargeObjectManager(client)
  * @constructor
  * @exports pg-large-object/lib/LargeObjectManager
  * @param {object} options Either `pg` or `pgPromise` must be given
  * @param {module:pg/Client} options.pg A pg (https://www.npmjs.com/package/pg) Client object
  * @param {module:pg-promise/Task} options.pgPromise A pg-promise (https://www.npmjs.com/package/pg-promise) transaction
 *         object as given by `db.tx()`
  */
function LargeObjectManager(options)
{
        if (typeof options.query === 'function') { // backwards compatibility
                // `client` is a https://www.npmjs.com/package/pg client instance
                var client = options;
                this._query = client.query.bind(client);
        }
        else if (options.pg) {
                var client = options.pg;
                this._query = client.query.bind(client);
        }
        else if (options.pgPromise) {
                // https://www.npmjs.com/package/pg-promise
                var tx = options.pgPromise;
                this._query = pgPromiseAdapter(tx);
        }
        else {
                throw Error('Either the `pg` or `pgPromise` option must be given');
        }
}

/** @constant {Number} */
LargeObjectManager.WRITE = 0x00020000;
/** @constant {Number} */
LargeObjectManager.READ = 0x00040000;
/** @constant {Number} */ 
LargeObjectManager.READWRITE = 0x00020000 | 0x00040000;

/** @callback module:pg-large-object/lib/LargeObjectManager~openCallback
  * @param {?Error} error If set, an error occurred.
  * @param {module:pg-large-object/lib/LargeObject} result
  */
/** Open an existing large object, based on its OID.
  * In mode READ, the data read from it will reflect the 
  * contents of the large object at the time of the transaction 
  * snapshot that was active when open was executed, 
  * regardless of later writes by this or other transactions.
  * If opened using WRITE (or READWRITE), data read will reflect 
  * all writes of other committed transactions as well as 
  * writes of the current transaction.
  * @param {Number} oid
  * @param {Number} mode One of WRITE, READ, or READWRITE
  * @param {module:pg-large-object/lib/LargeObjectManager~openCallback} callback
  */
LargeObjectManager.prototype.open = function(oid, mode, callback)
{
        if (!oid)
        {
                throw Error("Illegal Argument");
        }
        
        this._query(
                {name: "npg_lo_open", text:"SELECT lo_open($1, $2) AS fd", values: [oid, mode]},
                function(err, result)
                {
                        if (err) return callback(err);
                        
                        var fd = result.rows[0].fd;
                        
                        callback(null, new LargeObject(this._query, oid, fd));
                }.bind(this)
        );
};

/** Open an existing large object, based on its OID.
 * In mode READ, the data read from it will reflect the
 * contents of the large object at the time of the transaction
 * snapshot that was active when open was executed,
 * regardless of later writes by this or other transactions.
 * If opened using WRITE (or READWRITE), data read will reflect
 * all writes of other committed transactions as well as
 * writes of the current transaction.
 * @param {Number} oid
 * @param {Number} mode One of WRITE, READ, or READWRITE
 * @returns {Promise.<module:pg-large-object/lib/LargeObject>}
 */
LargeObjectManager.prototype.openAsync = function(oid, mode)
{
        return promiseFromCallback(function(callback)
        {
                this.open(oid, mode, callback);
        }, this);
};

/** @callback module:pg-large-object/lib/LargeObjectManager~createCallback
  * @param {?Error} error If set, an error occurred.
  * @param {Number} oid
  */
/** Creates a large object, returning its OID. 
  * After which you can open() it.
  * @param {module:pg-large-object/lib/LargeObjectManager~createCallback} callback
  */
LargeObjectManager.prototype.create = function(callback)
{
        this._query(
                {name: "npg_lo_creat", text:"SELECT lo_creat($1) AS oid", values: [LargeObjectManager.READWRITE]},
                function(err, result)
                {
                        if (err) return callback(err);
                        
                        var oid = result.rows[0].oid;
                        callback(null, oid);
                }
        );
};

/** Creates a large object, returning its OID.
 * After which you can open() it.
 * @returns {Promise.<number>} oid
 */
LargeObjectManager.prototype.createAsync = function()
{
        return promiseFromCallback(function(callback)
        {
                this.create(callback);
        }, this);
};


/** @callback module:pg-large-object/lib/LargeObjectManager~unlinkCallback
  * @param {?Error} error If set, an error occurred.
  */
/** Unlinks (deletes) a large object
  * @param {number} oid
  * @param {module:pg-large-object/lib/LargeObjectManager~unlinkCallback} [callback]
  */
LargeObjectManager.prototype.unlink = function(oid, callback)
{
        if (!oid)
        {
                throw Error("Illegal Argument");
        }
        
        this._query(
                {name: "npg_lo_unlink", text:"SELECT lo_unlink($1) as ok", values: [oid]},
                callback ? function(err, result)
                {
                        callback(err);
                } : undefined
        );
};

/** Unlinks (deletes) a large object
 * @param {number} oid
 * @returns {Promise}
 */
LargeObjectManager.prototype.unlinkAsync = function(oid)
{
        return promiseFromCallback(function(callback)
        {
                this.unlink(oid, callback);
        }, this);
};

/** @callback module:pg-large-object/lib/LargeObjectManager~openAndReadableStreamCallback
  * @param {?Error} error If set, an error occurred.
  * @param {Number} size The total size of the large object
  * @param {module:pg-large-object/lib/ReadStream} stream
  */
/** Open a large object, return a stream and close the object when done streaming.
  * Only call this within a transaction block.
  * @param {Number} oid  
  * @param {Number} [bufferSize=16384]  
  * @param {module:pg-large-object/lib/LargeObjectManager~openAndReadableStreamCallback} callback
  * 
  */
LargeObjectManager.prototype.openAndReadableStream = function(oid, bufferSize, callback)
{
        if (typeof bufferSize === 'function')
        {
                callback = bufferSize;
                bufferSize = undefined;
        }
        
        this.open(oid, LargeObjectManager.READ, function(err, obj)
        {
                if (err) return callback(err);
                
                obj.size(function(err, size)
                {
                        if (err) return callback(err);
                        
                        var stream = obj.getReadableStream(bufferSize);
                        
                        stream.on('end', function()
                        {
                                // this should rarely happen, but if it does
                                // use a callback so that error handling is consistent
                                // (otherwise an error will be emmited by node-postgres) 
                                obj.close(function(err)
                                {
                                        if (err)
                                        {
                                                console.error('Warning: closing a large object failed:', err);
                                        }
                                });
                        });
                        
                        callback(null, size, stream);
                });
        });
};

/** Open a large object, return a stream and close the object when done streaming.
 * Only call this within a transaction block.
 * @param {Number} oid
 * @param {Number} [bufferSize=16384]
 * @returns {Promise.<Array>} The total size and a ReadStream
 *
 */
LargeObjectManager.prototype.openAndReadableStreamAsync = function(oid, bufferSize)
{
        return promiseFromCallback(function(callback)
        {
                this.openAndReadableStream(oid, bufferSize, callback);
        }, this, {twoArgs: true});
};

/** @callback module:pg-large-object/lib/LargeObjectManager~createAndWritableStreamCallback
  * @param {?Error} error If set, an error occurred.
  * @param {Number} oid  
  * @param {module:pg-large-object/lib/WriteStream} stream
  */
/** Create and open a large object, return a stream and close the object when done streaming.
  * Only call this within a transaction block.
  * @param {Number} [bufferSize=16384]  
  * @param {module:pg-large-object/lib/LargeObjectManager~createAndWritableStreamCallback} [callback]
  */
LargeObjectManager.prototype.createAndWritableStream = function(bufferSize, callback)
{
        if (typeof bufferSize === 'function')
        {
                callback = bufferSize;
                bufferSize = undefined;
        }

        var man = this;
        
        man.create(function(err, oid)
        {
                if (err) return callback(err);
                
                man.open(oid, LargeObjectManager.WRITE, function(err, obj)
                {
                        if (err) return callback(err);
                        
                        var stream = obj.getWritableStream(bufferSize);
                        stream.on('finish', function()
                        { 
                                obj.close(function(err)
                                {
                                        if (err)
                                        {
                                                console.error('Warning: closing a large object failed:', err);
                                        }
                                });
                        });
                        
                        callback(null, oid, stream);
                });
        });
};

/** Create and open a large object, return a stream and close the object when done streaming.
 * Only call this within a transaction block.
 * @param {Number} [bufferSize=16384]
 * @returns {promise.<Array>} The oid and a WriteStream
 */
LargeObjectManager.prototype.createAndWritableStreamAsync = function(bufferSize)
{
        return promiseFromCallback(function(callback)
        {
                this.createAndWritableStream(bufferSize, callback);
        }, this, {twoArgs: true});
};

module.exports = LargeObjectManager;

/***/ }),
/* 59 */,
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/callable/index.ts + 1 modules
var callable = __webpack_require__(13);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/model/model.ts

class Model extends callable["a" /* CallableClass */] {
    constructor(scheme) {
        const morphings = Object.keys(scheme)
            .map(key => {
            const fn = scheme[key];
            return (value) => key in value ? fn.call(value, value[key]) : undefined;
        });
        super((value) => morphings.reduce((prev, fn) => {
            let result;
            try {
                result = fn(value);
            }
            catch (error) {
                const message = String(error && error.message || error);
                prev.errors.push(message);
                result = undefined;
            }
            if (result !== undefined)
                prev.value = Object.assign(prev.value, result);
            return prev;
        }, {
            value: {},
            errors: []
        }));
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/model/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return Model; });



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();
//# sourceMappingURL=root.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(72);
var Subscription_1 = __webpack_require__(65);
var Observer_1 = __webpack_require__(76);
var rxSubscriber_1 = __webpack_require__(68);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/utc.ts
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
        const month = String(this.month + 1).padStart(2, '0');
        const date = String(this.date).padStart(2, '0');
        return `${year}-${month}-${date}`;
    }
    get timeString() {
        const hours = String(this.hours).padStart(2, '0');
        const minutes = String(this.minutes).padStart(2, '0');
        const seconds = String(this.seconds).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    setMidnight() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/locale/en.ts
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

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/locale/ru.ts
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

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/locale/locale.ts


const Locale = { EN: EN, RU: RU };

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/locale/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/timestamp.ts


class timestamp_Timestamp extends Date {
    constructor(value, locale = timestamp_Timestamp.Locale.EN) {
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
        const month = String(this.month + 1).padStart(2, '0');
        const date = String(this.date).padStart(2, '0');
        return `${year}-${month}-${date}`;
    }
    get timeString() {
        const hours = String(this.hours).padStart(2, '0');
        const minutes = String(this.minutes).padStart(2, '0');
        const seconds = String(this.seconds).padStart(2, '0');
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
        let str = '+';
        if (offset < 0) {
            offset = -1 * offset;
            str = '-';
        }
        str += String(Math.floor(offset / 60)).padStart(2, '0');
        str += ':';
        str += String(Math.round((offset % 60) * 100)).padStart(2, '0');
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
        if (this.compare(atDate, { ignoreTime: true }))
            out += 'Сегодня';
        else {
            atDate.setDate(atDate.getDate() - 1);
            if (this.compare(atDate, { ignoreTime: true }))
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
        out += ':' + String(this.getMinutes()).padStart(2, '0');
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

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return timestamp_Timestamp; });



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(73);
var isObject_1 = __webpack_require__(74);
var isFunction_1 = __webpack_require__(72);
var tryCatch_1 = __webpack_require__(91);
var errorObject_1 = __webpack_require__(75);
var UnsubscriptionError_1 = __webpack_require__(92);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(61);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(28);
var merge_1 = __webpack_require__(95);
Observable_1.Observable.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(28);
var map_1 = __webpack_require__(106);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(28);
var interval_1 = __webpack_require__(110);
Observable_1.Observable.interval = interval_1.interval;
//# sourceMappingURL=interval.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(61);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(28);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following to the console:
     * // x is equal to the count on the interval eg(0,1,2,3,...)
     * // x will occur every 1000ms
     * // if x % 2 is equal to 1 print abc
     * // if x % 2 is not equal to 1 nothing will be output
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1.Observable));
exports.EmptyObservable = EmptyObservable;
//# sourceMappingURL=EmptyObservable.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeMap_1 = __webpack_require__(98);
var identity_1 = __webpack_require__(105);
/**
 * Converts a higher-order Observable into a first-order Observable which
 * concurrently delivers all values that are emitted on the inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * <img src="./img/mergeAll.png" width="100%">
 *
 * `mergeAll` subscribes to an Observable that emits Observables, also known as
 * a higher-order Observable. Each time it observes one of these emitted inner
 * Observables, it subscribes to that and delivers all the values from the
 * inner Observable on the output Observable. The output Observable only
 * completes once all inner Observables have completed. Any error delivered by
 * a inner Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var firstOrder = higherOrder.mergeAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
 * var firstOrder = higherOrder.mergeAll(2);
 * firstOrder.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link merge}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits values coming from all the
 * inner Observables emitted by the source Observable.
 * @method mergeAll
 * @owner Observable
 */
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMap_1.mergeMap(identity_1.identity, null, concurrent);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(28);
var Subscriber_1 = __webpack_require__(62);
var Subscription_1 = __webpack_require__(65);
var ObjectUnsubscribedError_1 = __webpack_require__(108);
var SubjectSubscription_1 = __webpack_require__(109);
var rxSubscriber_1 = __webpack_require__(68);
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(28);
var fromPromise_1 = __webpack_require__(118);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(28);
var take_1 = __webpack_require__(120);
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(28);
var filter_1 = __webpack_require__(123);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(28);
var mergeAll_1 = __webpack_require__(125);
Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/Observable.js
var Observable = __webpack_require__(28);
var Observable_default = /*#__PURE__*/__webpack_require__.n(Observable);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/observable/merge.js
var merge = __webpack_require__(69);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/map.js
var map = __webpack_require__(70);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/Subject.js
var Subject = __webpack_require__(81);
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/observable/interval.js
var interval = __webpack_require__(71);
var interval_default = /*#__PURE__*/__webpack_require__.n(interval);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/observable/fromPromise.js
var fromPromise = __webpack_require__(82);
var fromPromise_default = /*#__PURE__*/__webpack_require__.n(fromPromise);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/take.js
var take = __webpack_require__(83);
var take_default = /*#__PURE__*/__webpack_require__.n(take);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/filter.js
var filter = __webpack_require__(84);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/rxjs/add/operator/mergeAll.js
var mergeAll = __webpack_require__(85);
var mergeAll_default = /*#__PURE__*/__webpack_require__.n(mergeAll);

// EXTERNAL MODULE: external "url"
var external__url_ = __webpack_require__(29);
var external__url__default = /*#__PURE__*/__webpack_require__.n(external__url_);

// EXTERNAL MODULE: external "http"
var external__http_ = __webpack_require__(8);
var external__http__default = /*#__PURE__*/__webpack_require__.n(external__http_);

// EXTERNAL MODULE: external "string_decoder"
var external__string_decoder_ = __webpack_require__(14);
var external__string_decoder__default = /*#__PURE__*/__webpack_require__.n(external__string_decoder_);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/http/response.ts

class response_Response {
    constructor(res) {
        this.res = res;
    }
    getHeader(key) {
        let value = this.res.headers[key.toLowerCase()];
        return Array.isArray(value) ? value.join(';') : value;
    }
    get socket() {
        return this.res.socket;
    }
    get ip() {
        return this.res.connection.remoteAddress || '';
    }
    get status() {
        return this.res.statusCode;
    }
    get type() {
        let type = this.getHeader('Content-Type');
        if (typeof type !== 'string')
            return undefined;
        return type.split(';')[0].trim();
    }
    get length() {
        return ~~(this.getHeader('content-length') || '');
    }
    async raw() {
        const contentLength = this.length;
        return new Promise((resolve, reject) => {
            let buffer = Buffer.alloc(0);
            const onAborted = () => {
                cleanup();
                reject(new Error('Request aborted'));
            };
            const onError = (error) => {
                cleanup();
                reject(new Error('Receive data error'));
            };
            const onData = (chunk) => {
                buffer = Buffer.concat([buffer, chunk]);
            };
            const onEnd = () => {
                cleanup();
                if (contentLength > 0 && buffer.length !== contentLength) {
                    reject(new Error('Request size did not match content length'));
                }
                resolve(buffer);
            };
            const onClose = () => {
                cleanup();
            };
            var cleanup = () => {
                this.res.removeListener('aborted', onAborted);
                this.res.removeListener('end', onError);
                this.res.removeListener('data', onData);
                this.res.removeListener('error', onEnd);
                this.res.removeListener('close', onClose);
                this.res.unpipe();
            };
            this.res.on('aborted', onAborted);
            this.res.on('error', onError);
            this.res.on('data', onData);
            this.res.on('end', onEnd);
            this.res.on('close', onClose);
        });
    }
    async text() {
        let raw = await this.raw();
        try {
            let decoder = new external__string_decoder_["StringDecoder"]('utf8');
            return decoder.end(raw);
        }
        catch (error) {
            throw new Error('Receive data is not a UTF8 string');
        }
    }
    async json() {
        if (this.type !== 'application/json')
            throw new Error(`Only application/json data are allowed! Response: ${JSON.stringify(this)}`);
        let text = await this.text();
        try {
            return JSON.parse(text);
        }
        catch (err) {
            throw new Error('Invalid json received');
        }
    }
    valueOf() {
        return {
            ip: this.ip,
            status: this.status,
            type: this.type,
            length: this.length
        };
    }
    toJSON() {
        return this.valueOf();
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/http/http-client.ts


class http_client_HTTPClient {
    request(method, url) {
        return new Promise((resolve, reject) => {
            const path = (url.pathname || '/') + (url.search && url.search || '');
            const req = external__http__default.a.request({
                hostname: url.hostname,
                port: url.port || 80,
                path: path,
                method: method,
            }, (res) => resolve(new response_Response(res)));
            req.on('error', (error) => reject(error));
            req.end();
        });
    }
}

// EXTERNAL MODULE: external "https"
var external__https_ = __webpack_require__(126);
var external__https__default = /*#__PURE__*/__webpack_require__.n(external__https_);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/http/https-client.ts


class https_client_HTTPSClient {
    request(method, url) {
        return new Promise((resolve, reject) => {
            const path = (url.pathname || '/') + (url.search && url.search || '');
            const req = external__https__default.a.request({
                hostname: url.hostname,
                port: url.port || 443,
                path: path,
                method: method,
            }, (res) => resolve(new response_Response(res)));
            req.on('error', (error) => reject(error));
            req.end();
        });
    }
}

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/debug/index.ts + 2 modules
var debug = __webpack_require__(7);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/http/http.ts




const http_debug = new debug["a" /* Debug */]('HTTP');
class http_HTTP {
    async request(method, urlString) {
        const url = new external__url_["URL"](urlString);
        const protocol = url.protocol.toLowerCase();
        const client = /^https/.test(protocol) ? new https_client_HTTPSClient() : new http_client_HTTPClient();
        http_debug(`=== HTTP(S) Request [%s] ===`, urlString);
        let response;
        try {
            response = await client.request(method, url);
        }
        catch (error) {
            http_debug(`=== HTTP(S) Request [%s] Error ===\n%O`, urlString, error);
            throw error;
        }
        http_debug(`=== HTTP(S) Request [%s] Successful ===\n%O`, urlString, response);
        return response;
    }
    async get(urlString) {
        return await this.request('GET', urlString);
    }
    async json(urlString) {
        const response = await this.get(urlString);
        const data = await response.json();
        return data;
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/http/index.ts



// CONCATENATED MODULE: ./coins/sources/coinmarketcap/env.ts
const COIN_TICKER_URL = 'https://api.coinmarketcap.com/v1/ticker/?convert=RUB&limit=0';
const UPDATE_LOOP_TIMEOUT = 30000;

// CONCATENATED MODULE: ./coins/sources/coinmarketcap/coinmarketcap.sources.ts










class coinmarketcap_sources_CoinmarketcapSources {
    constructor() {
        this._http = new http_HTTP();
        this._coinSubject = new Subject["Subject"]();
        this.coin = this._coinSubject.asObservable();
        this.update();
    }
    static coinTickerToCoin(input) {
        if (!input)
            return undefined;
        const symbol = String(input.symbol || '')
            .trim()
            .toUpperCase();
        const coinmarketcapId = String(input.id || '')
            .trim();
        if (!symbol || !coinmarketcapId)
            return undefined;
        const output = { coinmarketcapId, symbol };
        const title = String(input.name || '').trim();
        if (title)
            output.title = title;
        const priceUSD = Math.max(parseFloat(input.price_usd), 0);
        if (!Number.isNaN(priceUSD) && priceUSD > 0)
            output.priceUSD = priceUSD;
        const priceBTC = Math.max(parseFloat(input.price_btc), 0);
        if (!Number.isNaN(priceBTC) && priceBTC > 0)
            output.priceBTC = priceBTC;
        const priceRUB = Math.max(parseFloat(input.price_rub), 0);
        if (!Number.isNaN(priceRUB) && priceRUB > 0)
            output.priceRUB = priceRUB;
        const volume24h = Math.max(parseFloat(input['24h_volume_usd']), 0);
        if (!Number.isNaN(volume24h) && volume24h > 0)
            output.volume24h = volume24h;
        const availableSupply = Math.max(parseFloat(input.available_supply), 0);
        if (!Number.isNaN(availableSupply))
            output.availableSupply = availableSupply;
        const maxSupply = Math.max(parseFloat(input.max_supply), 0);
        if (!Number.isNaN(maxSupply))
            output.maxSupply = maxSupply;
        output.coinmarketcapRank = ~~input.rank;
        return output;
    }
    async _getCoinsTicker() {
        let data;
        try {
            data = await this._http.json(COIN_TICKER_URL);
        }
        catch (error) {
            console.error('Coinmarketcape ERREOR [ getCoinsTicker http ]', error);
            return [];
        }
        if (data.length === 0) {
            console.error('Coinmarketcap ERREOR [ getCoinsTicker data ]', data);
            return [];
        }
        return data
            .map(item => coinmarketcap_sources_CoinmarketcapSources.coinTickerToCoin(item))
            .filter(item => typeof item === 'object' && item !== null)
            .sort((a, b) => (a.coinmarketcapRank || 0) - (b.coinmarketcapRank || 0));
    }
    async update() {
        console.log('Coinmarketcap START [ update ]');
        const list = await this._getCoinsTicker();
        list.forEach(item => this._coinSubject.next(item));
        setTimeout(() => this.update(), UPDATE_LOOP_TIMEOUT);
        console.log('Coinmarketcap FINISH [ update ]');
    }
}

// CONCATENATED MODULE: ./coins/sources/coinmarketcap/index.ts


// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/timestamp/index.ts + 6 modules
var timestamp = __webpack_require__(64);

// CONCATENATED MODULE: ./coins/sources/cryptocompare/env.ts
const COIN_LIST_URL = 'https://www.cryptocompare.com/api/data/coinlist/';
const COIN_SNAPSHOT_URL = (id) => `https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${id}`;
const COIN_HISTODAY_URL = (from, to = 'USD') => `https://min-api.cryptocompare.com/data/histoday?fsym=${from}&tsym=${to}&allData=true`;
const env_UPDATE_LOOP_TIMEOUT = 3600000;
const REQUEST_TIMEOUT = 15000;

// CONCATENATED MODULE: ./coins/sources/cryptocompare/cryptocompare.source.ts












class cryptocompare_source_CryptocompareSources {
    constructor() {
        this._http = new http_HTTP();
        this._coinSubject = new Subject["Subject"]();
        this.coin = this._coinSubject.asObservable();
        this.update();
    }
    static coinListToCoin(input) {
        if (!input)
            return undefined;
        const symbol = String(input.Symbol || '')
            .trim()
            .toUpperCase();
        const cryptocompareId = ~~input.Id;
        if (!symbol || !cryptocompareId)
            return undefined;
        const output = { cryptocompareId, symbol };
        const title = String(input.CoinName || '').trim();
        if (title)
            output.title = title;
        const algorithm = String(input.Algorithm || '').trim();
        if (algorithm)
            output.algorithm = algorithm;
        const proofType = String(input.ProofType || '').trim();
        if (proofType)
            output.proofType = proofType;
        const maxSupply = Math.max(parseFloat(input.TotalCoinSupply), 0);
        if (!Number.isNaN(maxSupply))
            output.maxSupply = maxSupply;
        output.cryptocompareSort = ~~input.SortOrder;
        return output;
    }
    static coinSnapshotToCoin(input) {
        if (!input)
            return undefined;
        const symbol = String(input.Symbol || '')
            .trim()
            .toUpperCase();
        const cryptocompareId = ~~input.Id;
        if (!symbol || !cryptocompareId)
            return undefined;
        const output = { cryptocompareId, symbol };
        const title = String(input.Name || '').trim();
        if (title)
            output.title = title;
        try {
            const startDate = new timestamp["a" /* Timestamp */](input.StartDate).UTC.dateString;
            if (startDate)
                output.startDate = startDate;
        }
        catch (_) {
        }
        const algorithm = String(input.Algorithm || '').trim();
        if (algorithm)
            output.algorithm = algorithm;
        const proofType = String(input.ProofType || '').trim();
        if (proofType)
            output.proofType = proofType;
        const url = String(input.AffiliateUrl || '').trim();
        if (url)
            output.url = url;
        const maxSupply = Math.max(parseFloat(input.TotalCoinSupply), 0);
        if (!Number.isNaN(maxSupply))
            output.maxSupply = maxSupply;
        const availableSupply = Math.max(input.TotalCoinsMined, 0);
        if (availableSupply)
            output.availableSupply = availableSupply;
        const blockReward = Math.max(input.BlockReward, 0);
        if (blockReward)
            output.blockReward = blockReward;
        const lastBlockTS = new Date(input.LastBlockExplorerUpdateTS).getTime();
        if (lastBlockTS)
            output.lastBlockTS = lastBlockTS;
        const lastBlockNumber = Math.max(input.BlockNumber, 0);
        if (lastBlockNumber)
            output.lastBlockNumber = lastBlockNumber;
        const hashRate = Math.max(input.NetHashesPerSecond, 0);
        if (hashRate)
            output.hashRate = hashRate;
        return output;
    }
    static coinHistodayToHistoday(input) {
        const histodayList = (Array.isArray(input) ? input : [])
            .filter(item => typeof item === 'object' && item !== null)
            .map(item => {
            let ts;
            try {
                ts = item.time && new timestamp["a" /* Timestamp */](item.time * 1000) || undefined;
            }
            catch (_) {
                ts = undefined;
            }
            if (ts)
                ts.UTC.setMidnight();
            const value = item.high && item.high > 0 && item.low && item.low > 0
                ? (item.high + item.low) / 2
                : 0;
            return { ts: ts && ts.time || 0, value };
        })
            .filter(item => item.ts && item.value);
        if (histodayList.length === 0)
            return undefined;
        return histodayList.reduce((prev, item) => Object.assign(prev, { [item.ts]: item.value }), {});
    }
    async _getCoinsList() {
        let data;
        try {
            data = await this._http.json(COIN_LIST_URL);
        }
        catch (error) {
            console.error('Cryptocompare ERREOR [ getCoinsList http ]', error);
            return [];
        }
        if (data.Response !== 'Success') {
            console.error('Cryptocompare ERREOR [ getCoinsList data ]', data.Message);
            return [];
        }
        return Object.keys(data.Data)
            .map(key => {
            const item = data.Data[key];
            if (item.Symbol !== key) {
                console.error('Cryptocompare ERREOR [ getCoinsList symbol ]', item);
                return undefined;
            }
            return item;
        })
            .map(item => cryptocompare_source_CryptocompareSources.coinListToCoin(item))
            .filter(item => typeof item === 'object' && item !== null)
            .sort((a, b) => (a.cryptocompareSort || 0) - (b.cryptocompareSort || 0));
    }
    async _getCoinSnapshot(id) {
        if (!id || id <= 0)
            return undefined;
        const url = COIN_SNAPSHOT_URL(id);
        let data;
        try {
            data = await this._http.json(url);
        }
        catch (error) {
            console.error(`Cryptocompare ERREOR [ getCoinSnapshot http ${id} ]`, error);
            return undefined;
        }
        if (data.Response !== 'Success') {
            console.error(`Cryptocompare ERREOR [ getCoinsList data ${id} ]`, data.Message);
            return undefined;
        }
        const snapshot = data.Data && data.Data.General;
        if (!snapshot) {
            console.error(`Cryptocompare ERREOR [ getCoinsList data.Data.General ${id} ]`, data.Message);
            return undefined;
        }
        return cryptocompare_source_CryptocompareSources.coinSnapshotToCoin(snapshot);
    }
    async _getCoinHistoday(symbol) {
        if (!symbol)
            return undefined;
        const url = COIN_HISTODAY_URL(symbol);
        let data;
        try {
            data = await this._http.json(url);
        }
        catch (error) {
            console.error(`Cryptocompare ERREOR [ getCoinHistoday http ${symbol} ]`, error);
            return undefined;
        }
        if (data.Response !== 'Success') {
            console.error(`Cryptocompare ERREOR [ getCoinHistoday data ${symbol} ]`, data.Message);
            return undefined;
        }
        const histodayList = data.Data && data.Data;
        if (!histodayList || histodayList.length === 0) {
            console.error(`Cryptocompare ERREOR [ getCoinHistoday data.Data ${symbol} ]`, data.Message);
            return undefined;
        }
        const histoday = cryptocompare_source_CryptocompareSources.coinHistodayToHistoday(histodayList);
        return histoday && { cryptocompareId: 0, symbol, histoday };
    }
    async update() {
        console.log('Cryptocompare START [ update ]');
        const list = await this._getCoinsList();
        list.forEach(item => this._coinSubject.next(item));
        Observable["Observable"]
            .interval(REQUEST_TIMEOUT)
            .take(list.length)
            .map(i => list[i])
            .map(item => {
            const id = item.cryptocompareId;
            const symbol = item.symbol;
            return Observable["Observable"].merge(Observable["Observable"].fromPromise(this._getCoinSnapshot(id)));
        })
            .mergeAll()
            .filter(item => item !== undefined)
            .subscribe(item => this._coinSubject.next(item), error => console.error('Cryptocompare ERREOR [ update Observable error ]', error), () => {
            console.log('Cryptocompare FINISH [ update ]');
            setTimeout(() => this.update(), env_UPDATE_LOOP_TIMEOUT);
        });
    }
}

// CONCATENATED MODULE: ./coins/sources/cryptocompare/index.ts


// CONCATENATED MODULE: ./coins/sources/index.ts



// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/db/index.ts + 19 modules
var db = __webpack_require__(3);

// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/core/model/index.ts + 1 modules
var model = __webpack_require__(60);

// CONCATENATED MODULE: ./coins/update-db/coin.model.ts


const CoinModel = new model["a" /* Model */]({
    symbol: input => {
        const output = String(input || '').trim().toUpperCase();
        return output && { symbol: output } || undefined;
    },
    title: input => {
        const output = String(input || '').trim();
        return output && { title: output } || undefined;
    },
    founder: input => {
        const output = String(input || '').trim();
        return output && { founder: output } || undefined;
    },
    startDate: input => {
        let ts;
        try {
            ts = new timestamp["a" /* Timestamp */](input);
            ts.UTC.setMidnight();
            ts = ts.UTC.dateString;
        }
        catch (_) {
            ts = undefined;
        }
        return ts && { startDate: ts } || undefined;
    },
    algorithm: input => {
        const output = String(input || '').trim();
        return output && { algorithm: output } || undefined;
    },
    proofType: input => {
        const output = String(input || '').trim();
        return output && { proofType: output } || undefined;
    },
    url: input => {
        const output = String(input || '').trim();
        return output && { url: output } || undefined;
    },
    maxSupply: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { maxSupply: output } || undefined;
    },
    availableSupply: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { availableSupply: output } || undefined;
    },
    blockReward: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { blockReward: output } || undefined;
    },
    lastBlockTS: input => {
        let ts;
        try {
            ts = new timestamp["a" /* Timestamp */](input);
            ts.UTC.setMidnight();
            ts = ts.iso;
        }
        catch (_) {
            ts = undefined;
        }
        return ts && { startDate: ts } || undefined;
    },
    lastBlockNumber: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { lastBlockNumber: output } || undefined;
    },
    hashRate: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { hashRate: output } || undefined;
    },
    priceUSD: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { priceUSD: output } || undefined;
    },
    priceBTC: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { priceBTC: output } || undefined;
    },
    priceRUB: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { priceRUB: output } || undefined;
    },
    volume24h: input => {
        const output = Math.max(parseFloat(input) || 0, 0);
        return output && { volume24h: output } || undefined;
    },
    histoday: input => {
        if (typeof input !== 'object' || input === null)
            return undefined;
        const output = Object.keys(input)
            .map(key => {
            let ts;
            try {
                ts = new timestamp["a" /* Timestamp */](key);
                ts.UTC.setMidnight();
                ts = ts.UTC.dateString;
            }
            catch (_) {
                ts = undefined;
            }
            if (!ts)
                return undefined;
            const value = Math.max(parseFloat(input[key]) || 0, 0);
            if (!value)
                return undefined;
            return { [ts]: value };
        })
            .filter(item => !!item)
            .reduce((prev, item) => Object.assign(prev, item), {});
        if (Object.keys(output).length === 0)
            return undefined;
        return output;
    }
});

// CONCATENATED MODULE: ./coins/update-db/env.ts
const DATATABLE = 'coins';

// CONCATENATED MODULE: ./coins/update-db/update.ts




const STATIC_FIELDS = [
    'title',
    'founder',
    'startDate',
    'algorithm',
    'proofType',
    'maxSupply',
    'url',
];
const DYNAMIC_FIELDS = [
    'availableSupply',
    'blockReward',
    'lastBlockTS',
    'lastBlockNumber',
    'hashRate',
    'priceUSD',
    'priceBTC',
    'priceRUB',
];
class update_DBUpdater {
    constructor(items) {
        this._pool = Object(db["f" /* createPool */])({ max: 10 });
        this._queue = [];
        items.subscribe(item => this._queue.push(item));
        this._updateLoop();
    }
    async _updateLoop() {
        const item = this._queue.shift();
        if (!item) {
            setTimeout(() => this._updateLoop(), 10000);
            return;
        }
        await this._update(item);
        setTimeout(() => this._updateLoop(), 300);
    }
    async _update(item) {
        const result = CoinModel(item);
        if (result.errors.length > 0) {
            console.error(`DBUpdater ERREOR [ make coin by model ]`, item);
            return;
        }
        const coin = result.value;
        const symbol = coin.symbol;
        if (!symbol) {
            console.error(`DBUpdater ERREOR [ symbol not found ]`, item, coin);
            return;
        }
        const staticFields = { symbol };
        const dynamicFields = { symbol };
        const histoday = { symbol };
        Object.keys(coin)
            .map(key => {
            if (STATIC_FIELDS.includes(key)) {
                staticFields[key] = coin[key];
                return;
            }
            if (DYNAMIC_FIELDS.includes(key)) {
                dynamicFields[key] = coin[key];
                return;
            }
            if (key === 'histoday') {
                histoday[key] = coin[key];
                return;
            }
        });
        try {
            if (Object.keys(staticFields).length > 1)
                await this._staticFieldsUpdate(staticFields);
            if (Object.keys(dynamicFields).length > 1)
                await this._dynamicFieldsUpdate(dynamicFields);
        }
        catch (error) {
            console.error(`DBUpdater ERREOR [ ${symbol} ]`, item, error);
        }
    }
    async _staticFieldsUpdate(item) {
        const client = await this._pool.connect();
        const symbol = item.symbol;
        const query = new db["e" /* Query */](DATATABLE)
            .select(STATIC_FIELDS)
            .where('symbol = $1', symbol);
        const result = await query.exec(client);
        if (result.length > 1) {
            client.release();
            throw new Error('More then one symbol in datatable');
        }
        if (result.length === 0) {
            client.release();
            await this._createNewFeeld(item);
            return;
        }
        delete item.symbol;
        const oldFields = CoinModel(result[0]).value;
        const newFields = {};
        Object.keys(item)
            .map(key => {
            let newValue = item[key];
            let oldValue = oldFields[key];
            if (!oldValue) {
                newFields[key] = newValue;
                return;
            }
            if (key === 'title')
                return;
            if (oldValue !== newValue) {
                console.error(`=== DBUpdater WARNING [ ${symbol} ] static fields mismatch [ ${key} ] ===\nOld: `, oldValue, '\nNew: ', newValue);
                return;
            }
        });
        if (Object.keys(newFields).length === 0) {
            client.release();
            return;
        }
        const updateQuery = new db["e" /* Query */](DATATABLE)
            .update(newFields)
            .where('symbol = $1', symbol)
            .returning('symbol');
        const updateResult = await updateQuery.exec(client);
        console.log('=== DBUpdater UPDATE STATIC RECORD [%s] ===\n', updateResult[0].symbol, newFields);
        client.release();
    }
    async _createNewFeeld(item) {
        const client = await this._pool.connect();
        const query = new db["e" /* Query */](DATATABLE)
            .insert(item)
            .returning('symbol');
        const result = await query.exec(client);
        console.log('=== DBUpdater NEW RECORD [%s] ===\n', result[0].symbol, item);
        client.release();
    }
    async _dynamicFieldsUpdate(item) {
        const client = await this._pool.connect();
        const symbol = item.symbol;
        const query = new db["e" /* Query */](DATATABLE)
            .select(DYNAMIC_FIELDS)
            .where('symbol = $1', symbol);
        const result = await query.exec(client);
        if (result.length > 1) {
            client.release();
            throw new Error('More then one symbol in datatable');
        }
        if (result.length === 0) {
            client.release();
            console.log('=== DBUpdater ERREOR [%s] Dynamic update unknown record ===\n', symbol);
            return;
        }
        delete item.symbol;
        const oldFields = CoinModel(result[0]).value;
        const newFields = {};
        Object.keys(item)
            .map(key => {
            let newValue = item[key];
            let oldValue = oldFields[key];
            if (oldValue !== newValue)
                newFields[key] = newValue;
        });
        if (Object.keys(newFields).length === 0) {
            client.release();
            return;
        }
        const updateQuery = new db["e" /* Query */](DATATABLE)
            .update(newFields)
            .where('symbol = $1', symbol)
            .returning('symbol');
        const updateResult = await updateQuery.exec(client);
        client.release();
    }
}

// CONCATENATED MODULE: ./coins/update-db/index.ts


// CONCATENATED MODULE: ./coins/update.ts





const update_items = Observable["Observable"].merge(new cryptocompare_source_CryptocompareSources().coin, new coinmarketcap_sources_CoinmarketcapSources().coin);
new update_DBUpdater(update_items);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(62);
var rxSubscriber_1 = __webpack_require__(68);
var Observer_1 = __webpack_require__(76);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(75);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var noop_1 = __webpack_require__(94);
/* tslint:enable:max-line-length */
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
/* @internal */
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-empty */
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(28);
var ArrayObservable_1 = __webpack_require__(96);
var isScheduler_1 = __webpack_require__(79);
var mergeAll_1 = __webpack_require__(80);
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (as arguments), and simply
 * forwards (without doing any transformation) all the values from all the input
 * Observables to the output Observable. The output Observable only completes
 * once all input Observables have completed. Any error delivered by an input
 * Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // timer will emit ascending values, one every second(1000ms) to console
 * // clicks logs MouseEvents to console everytime the "document" is clicked
 * // Since the two streams are merged you see these happening
 * // as they occur.
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - First timer1 and timer2 will run concurrently
 * // - timer1 will emit a value every 1000ms for 10 iterations
 * // - timer2 will emit a value every 2000ms for 6 iterations
 * // - after timer1 hits it's max iteration, timer2 will
 * //   continue, and timer3 will start to run concurrently with timer2
 * // - when timer2 hits it's max iteration it terminates, and
 * //   timer3 will continue to emit a value every 500ms until it is complete
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {...ObservableInput} observables Input Observables to merge together.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @static true
 * @name merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
        return observables[0];
    }
    return mergeAll_1.mergeAll(concurrent)(new ArrayObservable_1.ArrayObservable(observables, scheduler));
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(28);
var ScalarObservable_1 = __webpack_require__(97);
var EmptyObservable_1 = __webpack_require__(78);
var isScheduler_1 = __webpack_require__(79);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayObservable = (function (_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
        _super.call(this);
        this.array = array;
        this.scheduler = scheduler;
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.value = array[0];
        }
    }
    ArrayObservable.create = function (array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };
    /**
     * Creates an Observable that emits some values you specify as arguments,
     * immediately one after the other, and then emits a complete notification.
     *
     * <span class="informal">Emits the arguments you provide, then completes.
     * </span>
     *
     * <img src="./img/of.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the arguments given, and the complete notification thereafter. It can
     * be used for composing with other Observables, such as with {@link concat}.
     * By default, it uses a `null` IScheduler, which means the `next`
     * notifications are sent synchronously, although with a different IScheduler
     * it is possible to determine when those notifications will be delivered.
     *
     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
     * var numbers = Rx.Observable.of(10, 20, 30);
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var interval = Rx.Observable.interval(1000);
     * var result = numbers.concat(letters).concat(interval);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link throw}
     *
     * @param {...T} values Arguments that represent `next` values to be emitted.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable<T>} An Observable that emits each given input value.
     * @static true
     * @name of
     * @owner Observable
     */
    ArrayObservable.of = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable_1.EmptyObservable(scheduler);
        }
    };
    ArrayObservable.dispatch = function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayObservable;
}(Observable_1.Observable));
exports.ArrayObservable = ArrayObservable;
//# sourceMappingURL=ArrayObservable.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(28);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ScalarObservable = (function (_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
        _super.call(this);
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
        if (scheduler) {
            this._isScalar = false;
        }
    }
    ScalarObservable.create = function (value, scheduler) {
        return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function (state) {
        var done = state.done, value = state.value, subscriber = state.subscriber;
        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function (subscriber) {
        var value = this.value;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value: value, subscriber: subscriber
            });
        }
        else {
            subscriber.next(value);
            if (!subscriber.closed) {
                subscriber.complete();
            }
        }
    };
    return ScalarObservable;
}(Observable_1.Observable));
exports.ScalarObservable = ScalarObservable;
//# sourceMappingURL=ScalarObservable.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var subscribeToResult_1 = __webpack_require__(99);
var OuterSubscriber_1 = __webpack_require__(104);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link mergeAll}.</span>
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
 * var letters = Rx.Observable.of('a', 'b', 'c');
 * var result = letters.mergeMap(x =>
 *   Rx.Observable.interval(1000).map(i => x+i)
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // a0
 * // b0
 * // c0
 * // a1
 * // b1
 * // c1
 * // continues to list a,b,c with respective ascending integers
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and merging the results of the Observables obtained
 * from this transformation.
 * @method mergeMap
 * @owner Observable
 */
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return function mergeMapOperatorFunction(source) {
        if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
            resultSelector = null;
        }
        return source.lift(new MergeMapOperator(project, resultSelector, concurrent));
    };
}
exports.mergeMap = mergeMap;
var MergeMapOperator = (function () {
    function MergeMapOperator(project, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.project = project;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
    };
    return MergeMapOperator;
}());
exports.MergeMapOperator = MergeMapOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeMapSubscriber = (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapSubscriber = MergeMapSubscriber;
//# sourceMappingURL=mergeMap.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(61);
var isArrayLike_1 = __webpack_require__(100);
var isPromise_1 = __webpack_require__(101);
var isObject_1 = __webpack_require__(74);
var Observable_1 = __webpack_require__(28);
var iterator_1 = __webpack_require__(102);
var InnerSubscriber_1 = __webpack_require__(103);
var observable_1 = __webpack_require__(77);
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
        return null;
    }
    if (result instanceof Observable_1.Observable) {
        if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return null;
        }
        else {
            destination.syncErrorThrowable = true;
            return result.subscribe(destination);
        }
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
            destination.next(result[i]);
        }
        if (!destination.closed) {
            destination.complete();
        }
    }
    else if (isPromise_1.isPromise(result)) {
        result.then(function (value) {
            if (!destination.closed) {
                destination.next(value);
                destination.complete();
            }
        }, function (err) { return destination.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            root_1.root.setTimeout(function () { throw err; });
        });
        return destination;
    }
    else if (result && typeof result[iterator_1.iterator] === 'function') {
        var iterator = result[iterator_1.iterator]();
        do {
            var item = iterator.next();
            if (item.done) {
                destination.complete();
                break;
            }
            destination.next(item.value);
            if (destination.closed) {
                break;
            }
        } while (true);
    }
    else if (result && typeof result[observable_1.observable] === 'function') {
        var obs = result[observable_1.observable]();
        if (typeof obs.subscribe !== 'function') {
            destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
        }
        else {
            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
        }
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = ("You provided " + value + " where a stream was expected.")
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        destination.error(new TypeError(msg));
    }
    return null;
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(61);
function symbolIteratorPonyfill(root) {
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
        if (!Symbol.iterator) {
            Symbol.iterator = Symbol('iterator polyfill');
        }
        return Symbol.iterator;
    }
    else {
        // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
        var Set_1 = root.Set;
        if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
            return '@@iterator';
        }
        var Map_1 = root.Map;
        // required for compatability with es6-shim
        if (Map_1) {
            var keys = Object.getOwnPropertyNames(Map_1.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                    return key;
                }
            }
        }
        return '@@iterator';
    }
}
exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
exports.iterator = symbolIteratorPonyfill(root_1.root);
/**
 * @deprecated use iterator instead
 */
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(62);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        _super.call(this);
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(62);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var map_1 = __webpack_require__(107);
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    return map_1.map(project, thisArg)(this);
}
exports.map = map;
//# sourceMappingURL=map.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(62);
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        _super.call(this, destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    // NOTE: This looks unoptimized, but it's actually purposefully NOT
    // using try/catch optimizations.
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(65);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IntervalObservable_1 = __webpack_require__(111);
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(112);
var Observable_1 = __webpack_require__(28);
var async_1 = __webpack_require__(113);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(73);
function isNumeric(val) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
;
//# sourceMappingURL=isNumeric.js.map

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(114);
var AsyncScheduler_1 = __webpack_require__(116);
/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(61);
var Action_1 = __webpack_require__(115);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(65);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(117);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PromiseObservable_1 = __webpack_require__(119);
exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
//# sourceMappingURL=fromPromise.js.map

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(61);
var Observable_1 = __webpack_require__(28);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PromiseObservable = (function (_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
        _super.call(this);
        this.promise = promise;
        this.scheduler = scheduler;
    }
    /**
     * Converts a Promise to an Observable.
     *
     * <span class="informal">Returns an Observable that just emits the Promise's
     * resolved value, then completes.</span>
     *
     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
     * Observable. If the Promise resolves with a value, the output Observable
     * emits that resolved value as a `next`, and then completes. If the Promise
     * is rejected, then the output Observable emits the corresponding Error.
     *
     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link bindCallback}
     * @see {@link from}
     *
     * @param {PromiseLike<T>} promise The promise to be converted.
     * @param {Scheduler} [scheduler] An optional IScheduler to use for scheduling
     * the delivery of the resolved value (or the rejection).
     * @return {Observable<T>} An Observable which wraps the Promise.
     * @static true
     * @name fromPromise
     * @owner Observable
     */
    PromiseObservable.create = function (promise, scheduler) {
        return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var promise = this.promise;
        var scheduler = this.scheduler;
        if (scheduler == null) {
            if (this._isScalar) {
                if (!subscriber.closed) {
                    subscriber.next(this.value);
                    subscriber.complete();
                }
            }
            else {
                promise.then(function (value) {
                    _this.value = value;
                    _this._isScalar = true;
                    if (!subscriber.closed) {
                        subscriber.next(value);
                        subscriber.complete();
                    }
                }, function (err) {
                    if (!subscriber.closed) {
                        subscriber.error(err);
                    }
                })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    root_1.root.setTimeout(function () { throw err; });
                });
            }
        }
        else {
            if (this._isScalar) {
                if (!subscriber.closed) {
                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                }
            }
            else {
                promise.then(function (value) {
                    _this.value = value;
                    _this._isScalar = true;
                    if (!subscriber.closed) {
                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                    }
                }, function (err) {
                    if (!subscriber.closed) {
                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                    }
                })
                    .then(null, function (err) {
                    // escape the promise trap, throw unhandled errors
                    root_1.root.setTimeout(function () { throw err; });
                });
            }
        }
    };
    return PromiseObservable;
}(Observable_1.Observable));
exports.PromiseObservable = PromiseObservable;
function dispatchNext(arg) {
    var value = arg.value, subscriber = arg.subscriber;
    if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
    }
}
function dispatchError(arg) {
    var err = arg.err, subscriber = arg.subscriber;
    if (!subscriber.closed) {
        subscriber.error(err);
    }
}
//# sourceMappingURL=PromiseObservable.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var take_1 = __webpack_require__(121);
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return take_1.take(count)(this);
}
exports.take = take;
//# sourceMappingURL=take.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(62);
var ArgumentOutOfRangeError_1 = __webpack_require__(122);
var EmptyObservable_1 = __webpack_require__(78);
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return function (source) {
        if (count === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else {
            return source.lift(new TakeOperator(count));
        }
    };
}
exports.take = take;
var TakeOperator = (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=take.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var err = _super.call(this, 'argument out of range');
        this.name = err.name = 'ArgumentOutOfRangeError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var filter_1 = __webpack_require__(124);
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return filter_1.filter(predicate, thisArg)(this);
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(62);
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
    }
    // the try catch block below is left specifically for
    // optimization and perf reasons. a tryCatcher is not necessary here.
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeAll_1 = __webpack_require__(80);
/**
 * Converts a higher-order Observable into a first-order Observable which
 * concurrently delivers all values that are emitted on the inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * <img src="./img/mergeAll.png" width="100%">
 *
 * `mergeAll` subscribes to an Observable that emits Observables, also known as
 * a higher-order Observable. Each time it observes one of these emitted inner
 * Observables, it subscribes to that and delivers all the values from the
 * inner Observable on the output Observable. The output Observable only
 * completes once all inner Observables have completed. Any error delivered by
 * a inner Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var firstOrder = higherOrder.mergeAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
 * var firstOrder = higherOrder.mergeAll(2);
 * firstOrder.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link merge}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits values coming from all the
 * inner Observables emitted by the source Observable.
 * @method mergeAll
 * @owner Observable
 */
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeAll_1.mergeAll(concurrent)(this);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ })
/******/ ]);