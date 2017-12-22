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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 2 */
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

var pgTypes = __webpack_require__(3)
// save default parsers
var parseBigInteger = pgTypes.getTypeParser(20, 'text')
var parseBigIntegerArray = pgTypes.getTypeParser(1016, 'text')

// parse int8 so you can get your count values as actual numbers
module.exports.__defineSetter__('parseInt8', function (val) {
  pgTypes.setTypeParser(20, 'text', val ? pgTypes.getTypeParser(23, 'text') : parseBigInteger)
  pgTypes.setTypeParser(1016, 'text', val ? pgTypes.getTypeParser(1007, 'text') : parseBigIntegerArray)
})


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var textParsers = __webpack_require__(22);
var binaryParsers = __webpack_require__(27);
var arrayParser = __webpack_require__(10);

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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
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
var Client = __webpack_require__(20)
var defaults = __webpack_require__(2)
var Connection = __webpack_require__(14)
var Pool = __webpack_require__(43)

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
  this.types = __webpack_require__(3)
}

if (typeof process.env.NODE_PG_FORCE_NATIVE !== 'undefined') {
  module.exports = new PG(__webpack_require__(16))
} else {
  module.exports = new PG(Client)

  // lazy require native module...the native module may not have installed
  module.exports.__defineGetter__('native', function () {
    delete module.exports.native
    var native = null
    try {
      native = new PG(__webpack_require__(16))
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

const crypto = __webpack_require__(21)

const defaults = __webpack_require__(2)

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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var array = __webpack_require__(9);

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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("stream");

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

var types = __webpack_require__(3)

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var dns = __webpack_require__(33)

var defaults = __webpack_require__(2)

var parse = __webpack_require__(34).parse // parses a connection string

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var net = __webpack_require__(39)
var EventEmitter = __webpack_require__(1).EventEmitter
var util = __webpack_require__(0)

var Writer = __webpack_require__(40)
var Reader = __webpack_require__(41)

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
    var tls = __webpack_require__(42)
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(44)


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/callable/callable.ts
class CallableClass extends Function {
    constructor(fn) {
        super('throw new TypeError("CallableClass was called")');
        return Object.setPrototypeOf(fn, new.target.prototype);
    }
}

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/callable/index.ts


// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/debug/log.ts
const DEBUG = (process.env.NODE_DEBUG || '')
    .split(/\s*,\s*/)
    .map(item => item.toLowerCase().trim())
    .filter(item => !!item);
const isEnable = (name) => DEBUG.includes(name) || DEBUG.includes('*');
const log = (str, args) => console.log(str, ...args);

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/debug/debug.ts


class debug_Debug extends CallableClass {
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


// EXTERNAL MODULE: external "http"
var external__http_ = __webpack_require__(4);
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
var external__string_decoder_ = __webpack_require__(8);
var external__string_decoder__default = /*#__PURE__*/__webpack_require__.n(external__string_decoder_);

// EXTERNAL MODULE: external "querystring"
var external__querystring_ = __webpack_require__(19);
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
var external__path_ = __webpack_require__(5);
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


const debug = new debug_Debug('Route');
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
const method_Delete = (pattern, ...queryKeyList) => Method('DELETE', pattern, ...queryKeyList);
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

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/service/middleware/middleware.ts

class Middleware extends CallableClass {
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
        this.debug = new debug_Debug('Service');
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
const environments_DEBUG = (process.env.NODE_DEBUG || '').split(/\s*,\s*/)
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







// EXTERNAL MODULE: /Users/wisdman/Projects/bitjournal/node_modules/pg/lib/index.js
var lib = __webpack_require__(6);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

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

// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/pg/env.ts
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




// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/query/abstract.ts


const abstract_debug = new debug_Debug('DB');
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



// CONCATENATED MODULE: /Users/wisdman/Projects/bitjournal/core/db/middleware/db.middleware.ts


class db_middleware_DBMiddleware extends Middleware {
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




// CONCATENATED MODULE: ./template/template.ts

const TEMPLATE = {
    interpolate: /\{\{=([\s\S]+?)\}\}/g,
    conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
    iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
    varname: 'it',
};
const template_unescape = (code) => code.replace(/\\('|\\)/g, "$1")
    .replace(/[\r\t\n]/g, " ");
class Template extends CallableClass {
    constructor(tmpl) {
        let needhtmlencode = true;
        let sid = 0;
        let str = `let out='`;
        str += tmpl.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ")
            .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "")
            .replace(/'|\\/g, "\\$&")
            .replace(TEMPLATE.interpolate, (match, code) => {
            return `'+(${template_unescape(code)})+'`;
        })
            .replace(TEMPLATE.conditional, (match, elsecase, code) => {
            if (elsecase)
                return code ? `';}else if(${template_unescape(code)}){out+='`
                    : `';}else{out+='`;
            else
                return code ? `';if(${template_unescape(code)}){out+='`
                    : `';}out+='`;
        })
            .replace(TEMPLATE.iterate, (match, iterate, vname, iname = 'index') => {
            if (!iterate)
                return `';}}out+='`;
            iterate = template_unescape(iterate);
            return `';if(${iterate}){let arr=${iterate};for(let ${iname}=0;${iname}<arr.length;${iname}++){${vname}=arr[${iname}];out+='`;
        });
        str += "';return out";
        str = str.replace(/\n/g, "\\n")
            .replace(/\t/g, '\\t')
            .replace(/\r/g, "\\r")
            .replace(/(\s|;|\}|^|\{)out\+='';/g, '$1')
            .replace(/\+''/g, "");
        let fn;
        try {
            fn = new Function(TEMPLATE.varname, str);
        }
        catch (_) {
            throw new Error("Could not create a template function: " + str);
        }
        super(fn);
    }
}

// CONCATENATED MODULE: ./template/index.ts


// EXTERNAL MODULE: ./engine/rss/rss.tpl
var rss = __webpack_require__(48);
var rss_default = /*#__PURE__*/__webpack_require__.n(rss);

// CONCATENATED MODULE: ./engine/rss/rss.engine.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



class rss_engine_RSSMiddleware extends route_middleware_RouteMiddleware {
    constructor() {
        super(...arguments);
        this._rssTpl = new Template(rss_default.a);
    }
    async getRSS(ctx, next) {
        const result = this._rssTpl({
            items: [{}]
        });
        ctx.set(result);
    }
}
__decorate([
    Get(`/`),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [context_Context, Function]),
    __metadata("design:returntype", Promise)
], rss_engine_RSSMiddleware.prototype, "getRSS", null);

// CONCATENATED MODULE: ./engine/rss/index.ts


// CONCATENATED MODULE: ./engine/index.ts


// CONCATENATED MODULE: ./main.ts



process.env.TZ = 'UTC';
new service_Service(new db_middleware_DBMiddleware(), new rss_engine_RSSMiddleware());


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var EventEmitter = __webpack_require__(1).EventEmitter
var util = __webpack_require__(0)
var utils = __webpack_require__(7)
var pgPass = __webpack_require__(28)
var TypeOverrides = __webpack_require__(12)

var ConnectionParameters = __webpack_require__(13)
var Query = __webpack_require__(36)
var defaults = __webpack_require__(2)
var Connection = __webpack_require__(14)

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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var array = __webpack_require__(9)
var arrayParser = __webpack_require__(10);
var parseDate = __webpack_require__(23);
var parseInterval = __webpack_require__(24);
var parseByteA = __webpack_require__(26);

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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(25)

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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(5)
  , fs = __webpack_require__(29)
  , helper = __webpack_require__(30)
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
/* 29 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(5)
  , Stream = __webpack_require__(11).Stream
  , Split = __webpack_require__(31)
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

//filter will reemit the data if cb(err,pass) pass is truthy

// reduce is more tricky
// maybe we want to group the reductions or emit progress updates occasionally
// the most basic reduce just emits one 'data' event after it has recieved 'end'


var through = __webpack_require__(32)
var Decoder = __webpack_require__(8).StringDecoder

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(11)

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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("dns");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(35);

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
/* 35 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var EventEmitter = __webpack_require__(1).EventEmitter
var util = __webpack_require__(0)

var Result = __webpack_require__(37)
var utils = __webpack_require__(7)

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var types = __webpack_require__(3)
var escape = __webpack_require__(38)

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
/* 38 */
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
/* 39 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(15)

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
/* 42 */
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const EventEmitter = __webpack_require__(1).EventEmitter

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
    this.Client = this.options.Client || Client || __webpack_require__(6).Client
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
/* 44 */
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
var TypeOverrides = __webpack_require__(12)
var semver = __webpack_require__(45)
var pkg = __webpack_require__(46)
var assert = __webpack_require__(15)
var EventEmitter = __webpack_require__(1).EventEmitter
var util = __webpack_require__(0)
var ConnectionParameters = __webpack_require__(13)

var msg = 'Version >= ' + pkg.minNativeVersion + ' of pg-native required.'
assert(semver.gte(Native.version, pkg.minNativeVersion), msg)

var NativeQuery = __webpack_require__(47)

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
/* 45 */
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
/* 46 */
/***/ (function(module, exports) {

module.exports = {"_from":"pg@^7.4.0","_id":"pg@7.4.0","_inBundle":false,"_integrity":"sha1-4lYGHSxScjw8hY3vuX8RWcpmD4M=","_location":"/pg","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"pg@^7.4.0","name":"pg","escapedName":"pg","rawSpec":"^7.4.0","saveSpec":null,"fetchSpec":"^7.4.0"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/pg/-/pg-7.4.0.tgz","_shasum":"e256061d2c52723c3c858defb97f1159ca660f83","_spec":"pg@^7.4.0","_where":"/Users/wisdman/Projects/bitjournal","author":{"name":"Brian Carlson","email":"brian.m.carlson@gmail.com"},"bugs":{"url":"https://github.com/brianc/node-postgres/issues"},"bundleDependencies":false,"dependencies":{"buffer-writer":"1.0.1","js-string-escape":"1.0.1","packet-reader":"0.3.1","pg-connection-string":"0.1.3","pg-pool":"~2.0.3","pg-types":"~1.12.1","pgpass":"1.x","semver":"4.3.2"},"deprecated":false,"description":"PostgreSQL client - pure javascript & libpq with the same API","devDependencies":{"async":"0.9.0","co":"4.6.0","eslint":"4.2.0","eslint-config-standard":"10.2.1","eslint-plugin-import":"2.7.0","eslint-plugin-node":"5.1.0","eslint-plugin-promise":"3.5.0","eslint-plugin-standard":"3.0.1","pg-copy-streams":"0.3.0"},"engines":{"node":">= 4.5.0"},"homepage":"http://github.com/brianc/node-postgres","keywords":["database","libpq","pg","postgre","postgres","postgresql","rdbms"],"license":"MIT","main":"./lib","minNativeVersion":"2.0.0","name":"pg","repository":{"type":"git","url":"git://github.com/brianc/node-postgres.git"},"scripts":{"test":"make test-all"},"version":"7.4.0"}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var EventEmitter = __webpack_require__(1).EventEmitter
var util = __webpack_require__(0)
var utils = __webpack_require__(7)

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
/* 48 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\" xmlns:yandex=\"http://news.yandex.ru\" xmlns:media=\"http://search.yahoo.com/mrss/\">\n  <channel>\n    <title>BitJournal</title>\n    <link>https://bitjournal.io</link>\n    <language>ru</language>\n    <copyright>Сopyright 2017, BitJournal</copyright>\n    <description>Команда BitJournal выбирает для вас самые важные новости и готовит лучшие тексты из мира криптоиндустрии — все о самых грандиозных ICO в истории, огромных майнинг-фермах про летящий на луну биткоин и многое другое</description>\n    <image>\n      <url>https://bitjournal.io/logo-100x100.png</url>\n      <title>BitJournal</title>\n      <link>https://bitjournal.io</link>\n      <width>100</width>\n      <height>100</height>\n    </image>\n    <yandex:logo type=\"square\">https://bitjournal.io/logo-100x100.png</yandex:logo>\n    <atom:link href=\"https://bitjournal.io/rss\" rel=\"self\" type=\"application/rss+xml\" />\n  </channel>\n  {{~it.items :item:index}}\n    <item>\n      <guid isPermaLink=\"true\">{{=item.link}}</guid>\n      <title>{{=item.title}}</title>\n      <link>{{=item.link}}</link>\n      <pdalink>{{=item.link}}</pdalink>\n      <comments>{{=item.link}}#comments</comments>\n      <description>{{=item.description}}</description>\n      <author>{{=item.author}}</author>\n      <enclosure url=\"{{=item.image}}\" type=\"image/jpeg\"/>\n      <pubDate>{{=item.pubDate}}</pubDate>\n      <yandex:full-text>{{=item.yandexFullText}}</yandex:full-text>\n    </item>\n  {{~}}\n</rss>\n"

/***/ })
/******/ ]);