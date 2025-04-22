var __defProp = Object.defineProperty;
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction(_global.postMessage)
);
var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/helpers/null.js
var null_default = null;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (null_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  if (utils_default.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

// node_modules/axios/lib/platform/browser/classes/FormData.js
var FormData_default = typeof FormData !== "undefined" ? FormData : null;

// node_modules/axios/lib/platform/browser/classes/Blob.js
var Blob_default = typeof Blob !== "undefined" ? Blob : null;

// node_modules/axios/lib/platform/browser/index.js
var browser_default = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: Blob_default
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};

// node_modules/axios/lib/platform/common/utils.js
var utils_exports = {};
__export(utils_exports, {
  hasBrowserEnv: () => hasBrowserEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
  navigator: () => _navigator,
  origin: () => origin
});
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var _navigator = typeof navigator === "object" && navigator || void 0;
var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
var hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var origin = hasBrowserEnv && window.location.href || "http://localhost";

// node_modules/axios/lib/platform/index.js
var platform_default = {
  ...utils_exports,
  ...browser_default
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value)) return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else if (utils_default.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/progressEventReducer.js
var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return throttle_default((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
var progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform_default.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform_default.origin),
  platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
) : () => true;

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils_default.isString(path) && cookie.push("path=" + path);
      utils_default.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/helpers/resolveConfig.js
var resolveConfig_default = (config) => {
  const newConfig = mergeConfig({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders_default.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
    );
  }
  let contentType;
  if (utils_default.isFormData(data)) {
    if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform_default.hasStandardBrowserEnv) {
    withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};

// node_modules/axios/lib/adapters/xhr.js
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig_default(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitional_default;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/helpers/composeSignals.js
var composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils_default.asap(unsubscribe);
    return signal;
  }
};
var composeSignals_default = composeSignals;

// node_modules/axios/lib/helpers/trackStream.js
var streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
var readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
var readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
var trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator.next();
        if (done2) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};

// node_modules/axios/lib/adapters/fetch.js
var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
var test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
var supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform_default.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
var resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
    !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
      throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
    });
  });
})(new Response());
var getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils_default.isBlob(body)) {
    return body.size;
  }
  if (utils_default.isSpecCompliantForm(body)) {
    const _request = new Request(platform_default.origin, {
      method: "POST",
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils_default.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils_default.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
var resolveBodyLength = async (headers, body) => {
  const length = utils_default.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
var fetch_default = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig_default(config);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils_default.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : void 0
    });
    let response = await fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }
    responseType = responseType || "text";
    let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders_default.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      );
    }
    throw AxiosError_default.from(err, err && err.code, config, request);
  }
});

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: null_default,
  xhr: xhr_default,
  fetch: fetch_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/env/data.js
var VERSION = "1.8.4";

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    if (config.allowAbsoluteUrls !== void 0) {
    } else if (this.defaults.allowAbsoluteUrls !== void 0) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }
    validator_default.assertOptions(config, {
      baseUrl: validators2.spelling("baseURL"),
      withXsrfToken: validators2.spelling("withXSRFToken")
    }, true);
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class _CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new _CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig2
} = axios_default;

// src/api/esi/index.ts
var ContentType = /* @__PURE__ */ ((ContentType2) => {
  ContentType2["Json"] = "application/json";
  ContentType2["FormData"] = "multipart/form-data";
  ContentType2["UrlEncoded"] = "application/x-www-form-urlencoded";
  ContentType2["Text"] = "text/plain";
  return ContentType2;
})(ContentType || {});
var HttpClient = class {
  instance;
  securityData = null;
  securityWorker;
  secure;
  format;
  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  } = {}) {
    this.instance = axios_default.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://esi.evetech.net/latest"
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }
  setSecurityData = (data) => {
    this.securityData = data;
  };
  mergeRequestParams(params1, params2) {
    const method = params1.method || params2 && params2.method;
    return {
      ...this.instance.defaults,
      ...params1,
      ...params2 || {},
      headers: {
        ...method && this.instance.defaults.headers[method.toLowerCase()] || {},
        ...params1.headers || {},
        ...params2 && params2.headers || {}
      }
    };
  }
  stringifyFormItem(formItem) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }
  createFormData(input) {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent = property instanceof Array ? property : [property];
      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }
      return formData;
    }, new FormData());
  }
  request = async ({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }) => {
    const secureParams = (typeof secure === "boolean" ? secure : this.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || void 0;
    if (type === "multipart/form-data" /* FormData */ && body && body !== null && typeof body === "object") {
      body = this.createFormData(body);
    }
    if (type === "text/plain" /* Text */ && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }
    return this.instance.request({
      ...requestParams,
      headers: {
        ...requestParams.headers || {},
        ...type ? { "Content-Type": type } : {}
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    });
  };
};
var Api = class extends HttpClient {
  alliances = {
    /**
     * @description List all active player alliances --- Alternate route: `/dev/alliances/` Alternate route: `/legacy/alliances/` Alternate route: `/v1/alliances/` Alternate route: `/v2/alliances/` --- This route is cached for up to 3600 seconds
     *
     * @tags Alliance
     * @name GetAlliances
     * @summary List all alliances
     * @request GET:/alliances/
     */
    getAlliances: (query, params = {}) => this.request({
      path: `/alliances/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Public information about an alliance --- Alternate route: `/dev/alliances/{alliance_id}/` Alternate route: `/legacy/alliances/{alliance_id}/` Alternate route: `/v3/alliances/{alliance_id}/` Alternate route: `/v4/alliances/{alliance_id}/` --- This route is cached for up to 3600 seconds
     *
     * @tags Alliance
     * @name GetAlliancesAllianceId
     * @summary Get alliance information
     * @request GET:/alliances/{alliance_id}/
     */
    getAlliancesAllianceId: (allianceId, query, params = {}) => this.request({
      path: `/alliances/${allianceId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return contacts of an alliance --- Alternate route: `/dev/alliances/{alliance_id}/contacts/` Alternate route: `/v2/alliances/{alliance_id}/contacts/` --- This route is cached for up to 300 seconds
     *
     * @tags Contacts
     * @name GetAlliancesAllianceIdContacts
     * @summary Get alliance contacts
     * @request GET:/alliances/{alliance_id}/contacts/
     * @secure
     */
    getAlliancesAllianceIdContacts: (allianceId, query, params = {}) => this.request({
      path: `/alliances/${allianceId}/contacts/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return custom labels for an alliance's contacts --- Alternate route: `/dev/alliances/{alliance_id}/contacts/labels/` Alternate route: `/legacy/alliances/{alliance_id}/contacts/labels/` Alternate route: `/v1/alliances/{alliance_id}/contacts/labels/` --- This route is cached for up to 300 seconds
     *
     * @tags Contacts
     * @name GetAlliancesAllianceIdContactsLabels
     * @summary Get alliance contact labels
     * @request GET:/alliances/{alliance_id}/contacts/labels/
     * @secure
     */
    getAlliancesAllianceIdContactsLabels: (allianceId, query, params = {}) => this.request({
      path: `/alliances/${allianceId}/contacts/labels/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List all current member corporations of an alliance --- Alternate route: `/dev/alliances/{alliance_id}/corporations/` Alternate route: `/legacy/alliances/{alliance_id}/corporations/` Alternate route: `/v1/alliances/{alliance_id}/corporations/` Alternate route: `/v2/alliances/{alliance_id}/corporations/` --- This route is cached for up to 3600 seconds
     *
     * @tags Alliance
     * @name GetAlliancesAllianceIdCorporations
     * @summary List alliance's corporations
     * @request GET:/alliances/{alliance_id}/corporations/
     */
    getAlliancesAllianceIdCorporations: (allianceId, query, params = {}) => this.request({
      path: `/alliances/${allianceId}/corporations/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get the icon urls for a alliance --- Alternate route: `/dev/alliances/{alliance_id}/icons/` Alternate route: `/legacy/alliances/{alliance_id}/icons/` Alternate route: `/v1/alliances/{alliance_id}/icons/` Alternate route: `/v2/alliances/{alliance_id}/icons/` --- This route expires daily at 11:05
     *
     * @tags Alliance
     * @name GetAlliancesAllianceIdIcons
     * @summary Get alliance icon
     * @request GET:/alliances/{alliance_id}/icons/
     */
    getAlliancesAllianceIdIcons: (allianceId, query, params = {}) => this.request({
      path: `/alliances/${allianceId}/icons/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  characters = {
    /**
     * @description Bulk lookup of character IDs to corporation, alliance and faction --- Alternate route: `/dev/characters/affiliation/` Alternate route: `/legacy/characters/affiliation/` Alternate route: `/v1/characters/affiliation/` Alternate route: `/v2/characters/affiliation/` --- This route is cached for up to 3600 seconds
     *
     * @tags Character
     * @name PostCharactersAffiliation
     * @summary Character affiliation
     * @request POST:/characters/affiliation/
     */
    postCharactersAffiliation: (characters, query, params = {}) => this.request({
      path: `/characters/affiliation/`,
      method: "POST",
      query,
      body: characters,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Public information about a character --- Alternate route: `/dev/characters/{character_id}/` Alternate route: `/legacy/characters/{character_id}/` Alternate route: `/v5/characters/{character_id}/` --- This route is cached for up to 604800 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterId
     * @summary Get character's public information
     * @request GET:/characters/{character_id}/
     */
    getCharactersCharacterId: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate) --- Alternate route: `/dev/characters/{character_id}/agents_research/` Alternate route: `/v2/characters/{character_id}/agents_research/` --- This route is cached for up to 3600 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdAgentsResearch
     * @summary Get agents research
     * @request GET:/characters/{character_id}/agents_research/
     * @secure
     */
    getCharactersCharacterIdAgentsResearch: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/agents_research/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of the characters assets --- Alternate route: `/dev/characters/{character_id}/assets/` Alternate route: `/legacy/characters/{character_id}/assets/` Alternate route: `/v4/characters/{character_id}/assets/` Alternate route: `/v5/characters/{character_id}/assets/` --- This route is cached for up to 3600 seconds
     *
     * @tags Assets
     * @name GetCharactersCharacterIdAssets
     * @summary Get character assets
     * @request GET:/characters/{character_id}/assets/
     * @secure
     */
    getCharactersCharacterIdAssets: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/assets/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0) --- Alternate route: `/dev/characters/{character_id}/assets/locations/` Alternate route: `/v2/characters/{character_id}/assets/locations/`
     *
     * @tags Assets
     * @name PostCharactersCharacterIdAssetsLocations
     * @summary Get character asset locations
     * @request POST:/characters/{character_id}/assets/locations/
     * @secure
     */
    postCharactersCharacterIdAssetsLocations: (characterId, item_ids, query, params = {}) => this.request({
      path: `/characters/${characterId}/assets/locations/`,
      method: "POST",
      query,
      body: item_ids,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships. --- Alternate route: `/dev/characters/{character_id}/assets/names/` Alternate route: `/legacy/characters/{character_id}/assets/names/` Alternate route: `/v1/characters/{character_id}/assets/names/`
     *
     * @tags Assets
     * @name PostCharactersCharacterIdAssetsNames
     * @summary Get character asset names
     * @request POST:/characters/{character_id}/assets/names/
     * @secure
     */
    postCharactersCharacterIdAssetsNames: (characterId, item_ids, query, params = {}) => this.request({
      path: `/characters/${characterId}/assets/names/`,
      method: "POST",
      query,
      body: item_ids,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Return attributes of a character --- Alternate route: `/dev/characters/{character_id}/attributes/` Alternate route: `/legacy/characters/{character_id}/attributes/` Alternate route: `/v1/characters/{character_id}/attributes/` --- This route is cached for up to 120 seconds
     *
     * @tags Skills
     * @name GetCharactersCharacterIdAttributes
     * @summary Get character attributes
     * @request GET:/characters/{character_id}/attributes/
     * @secure
     */
    getCharactersCharacterIdAttributes: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/attributes/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of blueprints the character owns --- Alternate route: `/dev/characters/{character_id}/blueprints/` Alternate route: `/v3/characters/{character_id}/blueprints/` --- This route is cached for up to 3600 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdBlueprints
     * @summary Get blueprints
     * @request GET:/characters/{character_id}/blueprints/
     * @secure
     */
    getCharactersCharacterIdBlueprints: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/blueprints/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event --- Alternate route: `/dev/characters/{character_id}/calendar/` Alternate route: `/legacy/characters/{character_id}/calendar/` Alternate route: `/v1/characters/{character_id}/calendar/` Alternate route: `/v2/characters/{character_id}/calendar/` --- This route is cached for up to 5 seconds
     *
     * @tags Calendar
     * @name GetCharactersCharacterIdCalendar
     * @summary List calendar event summaries
     * @request GET:/characters/{character_id}/calendar/
     * @secure
     */
    getCharactersCharacterIdCalendar: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/calendar/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get all the information for a specific event --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/` Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/` Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/` Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/` --- This route is cached for up to 5 seconds
     *
     * @tags Calendar
     * @name GetCharactersCharacterIdCalendarEventId
     * @summary Get an event
     * @request GET:/characters/{character_id}/calendar/{event_id}/
     * @secure
     */
    getCharactersCharacterIdCalendarEventId: (characterId, eventId, query, params = {}) => this.request({
      path: `/characters/${characterId}/calendar/${eventId}/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Set your response status to an event --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/` Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/` Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/` Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/` --- This route is cached for up to 5 seconds
     *
     * @tags Calendar
     * @name PutCharactersCharacterIdCalendarEventId
     * @summary Respond to an event
     * @request PUT:/characters/{character_id}/calendar/{event_id}/
     * @secure
     */
    putCharactersCharacterIdCalendarEventId: (characterId, eventId, response, query, params = {}) => this.request({
      path: `/characters/${characterId}/calendar/${eventId}/`,
      method: "PUT",
      query,
      body: response,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    }),
    /**
     * @description Get all invited attendees for a given event --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/` Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/` Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/` Alternate route: `/v2/characters/{character_id}/calendar/{event_id}/attendees/` --- This route is cached for up to 600 seconds
     *
     * @tags Calendar
     * @name GetCharactersCharacterIdCalendarEventIdAttendees
     * @summary Get attendees
     * @request GET:/characters/{character_id}/calendar/{event_id}/attendees/
     * @secure
     */
    getCharactersCharacterIdCalendarEventIdAttendees: (characterId, eventId, query, params = {}) => this.request({
      path: `/characters/${characterId}/calendar/${eventId}/attendees/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description A list of the character's clones --- Alternate route: `/dev/characters/{character_id}/clones/` Alternate route: `/legacy/characters/{character_id}/clones/` Alternate route: `/v2/characters/{character_id}/clones/` Alternate route: `/v3/characters/{character_id}/clones/` Alternate route: `/v4/characters/{character_id}/clones/` --- This route is cached for up to 120 seconds
     *
     * @tags Clones
     * @name GetCharactersCharacterIdClones
     * @summary Get clones
     * @request GET:/characters/{character_id}/clones/
     * @secure
     */
    getCharactersCharacterIdClones: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/clones/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Bulk delete contacts --- Alternate route: `/dev/characters/{character_id}/contacts/` Alternate route: `/legacy/characters/{character_id}/contacts/` Alternate route: `/v1/characters/{character_id}/contacts/` Alternate route: `/v2/characters/{character_id}/contacts/`
     *
     * @tags Contacts
     * @name DeleteCharactersCharacterIdContacts
     * @summary Delete contacts
     * @request DELETE:/characters/{character_id}/contacts/
     * @secure
     */
    deleteCharactersCharacterIdContacts: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/contacts/`,
      method: "DELETE",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Return contacts of a character --- Alternate route: `/dev/characters/{character_id}/contacts/` Alternate route: `/v2/characters/{character_id}/contacts/` --- This route is cached for up to 300 seconds
     *
     * @tags Contacts
     * @name GetCharactersCharacterIdContacts
     * @summary Get contacts
     * @request GET:/characters/{character_id}/contacts/
     * @secure
     */
    getCharactersCharacterIdContacts: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/contacts/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Bulk add contacts with same settings --- Alternate route: `/dev/characters/{character_id}/contacts/` Alternate route: `/v2/characters/{character_id}/contacts/`
     *
     * @tags Contacts
     * @name PostCharactersCharacterIdContacts
     * @summary Add contacts
     * @request POST:/characters/{character_id}/contacts/
     * @secure
     */
    postCharactersCharacterIdContacts: (characterId, query, contact_ids, params = {}) => this.request({
      path: `/characters/${characterId}/contacts/`,
      method: "POST",
      query,
      body: contact_ids,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Bulk edit contacts with same settings --- Alternate route: `/dev/characters/{character_id}/contacts/` Alternate route: `/v2/characters/{character_id}/contacts/`
     *
     * @tags Contacts
     * @name PutCharactersCharacterIdContacts
     * @summary Edit contacts
     * @request PUT:/characters/{character_id}/contacts/
     * @secure
     */
    putCharactersCharacterIdContacts: (characterId, query, contact_ids, params = {}) => this.request({
      path: `/characters/${characterId}/contacts/`,
      method: "PUT",
      query,
      body: contact_ids,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    }),
    /**
     * @description Return custom labels for a character's contacts --- Alternate route: `/dev/characters/{character_id}/contacts/labels/` Alternate route: `/legacy/characters/{character_id}/contacts/labels/` Alternate route: `/v1/characters/{character_id}/contacts/labels/` --- This route is cached for up to 300 seconds
     *
     * @tags Contacts
     * @name GetCharactersCharacterIdContactsLabels
     * @summary Get contact labels
     * @request GET:/characters/{character_id}/contacts/labels/
     * @secure
     */
    getCharactersCharacterIdContactsLabels: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/contacts/labels/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress". --- Alternate route: `/dev/characters/{character_id}/contracts/` Alternate route: `/legacy/characters/{character_id}/contracts/` Alternate route: `/v1/characters/{character_id}/contracts/` --- This route is cached for up to 300 seconds
     *
     * @tags Contracts
     * @name GetCharactersCharacterIdContracts
     * @summary Get contracts
     * @request GET:/characters/{character_id}/contracts/
     * @secure
     */
    getCharactersCharacterIdContracts: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/contracts/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Lists bids on a particular auction contract --- Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/bids/` Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/bids/` Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/bids/` --- This route is cached for up to 300 seconds
     *
     * @tags Contracts
     * @name GetCharactersCharacterIdContractsContractIdBids
     * @summary Get contract bids
     * @request GET:/characters/{character_id}/contracts/{contract_id}/bids/
     * @secure
     */
    getCharactersCharacterIdContractsContractIdBids: (characterId, contractId, query, params = {}) => this.request({
      path: `/characters/${characterId}/contracts/${contractId}/bids/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Lists items of a particular contract --- Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/items/` Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/items/` Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/items/` --- This route is cached for up to 3600 seconds
     *
     * @tags Contracts
     * @name GetCharactersCharacterIdContractsContractIdItems
     * @summary Get contract items
     * @request GET:/characters/{character_id}/contracts/{contract_id}/items/
     * @secure
     */
    getCharactersCharacterIdContractsContractIdItems: (characterId, contractId, query, params = {}) => this.request({
      path: `/characters/${characterId}/contracts/${contractId}/items/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of all the corporations a character has been a member of --- Alternate route: `/dev/characters/{character_id}/corporationhistory/` Alternate route: `/v2/characters/{character_id}/corporationhistory/` --- This route is cached for up to 86400 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdCorporationhistory
     * @summary Get corporation history
     * @request GET:/characters/{character_id}/corporationhistory/
     */
    getCharactersCharacterIdCorporationhistory: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/corporationhistory/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost --- Alternate route: `/dev/characters/{character_id}/cspa/` Alternate route: `/v5/characters/{character_id}/cspa/`
     *
     * @tags Character
     * @name PostCharactersCharacterIdCspa
     * @summary Calculate a CSPA charge cost
     * @request POST:/characters/{character_id}/cspa/
     * @secure
     */
    postCharactersCharacterIdCspa: (characterId, characters, query, params = {}) => this.request({
      path: `/characters/${characterId}/cspa/`,
      method: "POST",
      query,
      body: characters,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Return a character's jump activation and fatigue information --- Alternate route: `/dev/characters/{character_id}/fatigue/` Alternate route: `/v2/characters/{character_id}/fatigue/` --- This route is cached for up to 300 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdFatigue
     * @summary Get jump fatigue
     * @request GET:/characters/{character_id}/fatigue/
     * @secure
     */
    getCharactersCharacterIdFatigue: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/fatigue/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return fittings of a character --- Alternate route: `/dev/characters/{character_id}/fittings/` Alternate route: `/v2/characters/{character_id}/fittings/` --- This route is cached for up to 300 seconds
     *
     * @tags Fittings
     * @name GetCharactersCharacterIdFittings
     * @summary Get fittings
     * @request GET:/characters/{character_id}/fittings/
     * @secure
     */
    getCharactersCharacterIdFittings: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/fittings/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Save a new fitting for a character --- Alternate route: `/dev/characters/{character_id}/fittings/` Alternate route: `/legacy/characters/{character_id}/fittings/` Alternate route: `/v1/characters/{character_id}/fittings/` Alternate route: `/v2/characters/{character_id}/fittings/`
     *
     * @tags Fittings
     * @name PostCharactersCharacterIdFittings
     * @summary Create fitting
     * @request POST:/characters/{character_id}/fittings/
     * @secure
     */
    postCharactersCharacterIdFittings: (characterId, fitting, query, params = {}) => this.request({
      path: `/characters/${characterId}/fittings/`,
      method: "POST",
      query,
      body: fitting,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Delete a fitting from a character --- Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/` Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/` Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/`
     *
     * @tags Fittings
     * @name DeleteCharactersCharacterIdFittingsFittingId
     * @summary Delete fitting
     * @request DELETE:/characters/{character_id}/fittings/{fitting_id}/
     * @secure
     */
    deleteCharactersCharacterIdFittingsFittingId: (characterId, fittingId, query, params = {}) => this.request({
      path: `/characters/${characterId}/fittings/${fittingId}/`,
      method: "DELETE",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Return the fleet ID the character is in, if any. --- Alternate route: `/dev/characters/{character_id}/fleet/` Alternate route: `/legacy/characters/{character_id}/fleet/` Alternate route: `/v1/characters/{character_id}/fleet/` Alternate route: `/v2/characters/{character_id}/fleet/` --- This route is cached for up to 60 seconds
     *
     * @tags Fleets
     * @name GetCharactersCharacterIdFleet
     * @summary Get character fleet info
     * @request GET:/characters/{character_id}/fleet/
     * @secure
     */
    getCharactersCharacterIdFleet: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/fleet/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Statistical overview of a character involved in faction warfare --- Alternate route: `/dev/characters/{character_id}/fw/stats/` Alternate route: `/legacy/characters/{character_id}/fw/stats/` Alternate route: `/v1/characters/{character_id}/fw/stats/` Alternate route: `/v2/characters/{character_id}/fw/stats/` --- This route expires daily at 11:05
     *
     * @tags Faction Warfare
     * @name GetCharactersCharacterIdFwStats
     * @summary Overview of a character involved in faction warfare
     * @request GET:/characters/{character_id}/fw/stats/
     * @secure
     */
    getCharactersCharacterIdFwStats: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/fw/stats/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return implants on the active clone of a character --- Alternate route: `/dev/characters/{character_id}/implants/` Alternate route: `/legacy/characters/{character_id}/implants/` Alternate route: `/v1/characters/{character_id}/implants/` Alternate route: `/v2/characters/{character_id}/implants/` --- This route is cached for up to 120 seconds
     *
     * @tags Clones
     * @name GetCharactersCharacterIdImplants
     * @summary Get active implants
     * @request GET:/characters/{character_id}/implants/
     * @secure
     */
    getCharactersCharacterIdImplants: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/implants/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List industry jobs placed by a character --- Alternate route: `/dev/characters/{character_id}/industry/jobs/` Alternate route: `/legacy/characters/{character_id}/industry/jobs/` Alternate route: `/v1/characters/{character_id}/industry/jobs/` --- This route is cached for up to 300 seconds
     *
     * @tags Industry
     * @name GetCharactersCharacterIdIndustryJobs
     * @summary List character industry jobs
     * @request GET:/characters/{character_id}/industry/jobs/
     * @secure
     */
    getCharactersCharacterIdIndustryJobs: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/industry/jobs/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of a character's kills and losses going back 90 days --- Alternate route: `/dev/characters/{character_id}/killmails/recent/` Alternate route: `/legacy/characters/{character_id}/killmails/recent/` Alternate route: `/v1/characters/{character_id}/killmails/recent/` --- This route is cached for up to 300 seconds
     *
     * @tags Killmails
     * @name GetCharactersCharacterIdKillmailsRecent
     * @summary Get a character's recent kills and losses
     * @request GET:/characters/{character_id}/killmails/recent/
     * @secure
     */
    getCharactersCharacterIdKillmailsRecent: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/killmails/recent/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable --- Alternate route: `/dev/characters/{character_id}/location/` Alternate route: `/legacy/characters/{character_id}/location/` Alternate route: `/v1/characters/{character_id}/location/` Alternate route: `/v2/characters/{character_id}/location/` --- This route is cached for up to 5 seconds
     *
     * @tags Location
     * @name GetCharactersCharacterIdLocation
     * @summary Get character location
     * @request GET:/characters/{character_id}/location/
     * @secure
     */
    getCharactersCharacterIdLocation: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/location/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of loyalty points for all corporations the character has worked for --- Alternate route: `/dev/characters/{character_id}/loyalty/points/` Alternate route: `/legacy/characters/{character_id}/loyalty/points/` Alternate route: `/v1/characters/{character_id}/loyalty/points/` --- This route is cached for up to 3600 seconds
     *
     * @tags Loyalty
     * @name GetCharactersCharacterIdLoyaltyPoints
     * @summary Get loyalty points
     * @request GET:/characters/{character_id}/loyalty/points/
     * @secure
     */
    getCharactersCharacterIdLoyaltyPoints: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/loyalty/points/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards --- Alternate route: `/dev/characters/{character_id}/mail/` Alternate route: `/legacy/characters/{character_id}/mail/` Alternate route: `/v1/characters/{character_id}/mail/` --- This route is cached for up to 30 seconds
     *
     * @tags Mail
     * @name GetCharactersCharacterIdMail
     * @summary Return mail headers
     * @request GET:/characters/{character_id}/mail/
     * @secure
     */
    getCharactersCharacterIdMail: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Create and send a new mail --- Alternate route: `/dev/characters/{character_id}/mail/` Alternate route: `/legacy/characters/{character_id}/mail/` Alternate route: `/v1/characters/{character_id}/mail/`
     *
     * @tags Mail
     * @name PostCharactersCharacterIdMail
     * @summary Send a new mail
     * @request POST:/characters/{character_id}/mail/
     * @secure
     */
    postCharactersCharacterIdMail: (characterId, mail, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/`,
      method: "POST",
      query,
      body: mail,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of the users mail labels, unread counts for each label and a total unread count. --- Alternate route: `/dev/characters/{character_id}/mail/labels/` Alternate route: `/v3/characters/{character_id}/mail/labels/` --- This route is cached for up to 30 seconds
     *
     * @tags Mail
     * @name GetCharactersCharacterIdMailLabels
     * @summary Get mail labels and unread counts
     * @request GET:/characters/{character_id}/mail/labels/
     * @secure
     */
    getCharactersCharacterIdMailLabels: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/labels/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Create a mail label --- Alternate route: `/dev/characters/{character_id}/mail/labels/` Alternate route: `/legacy/characters/{character_id}/mail/labels/` Alternate route: `/v2/characters/{character_id}/mail/labels/`
     *
     * @tags Mail
     * @name PostCharactersCharacterIdMailLabels
     * @summary Create a mail label
     * @request POST:/characters/{character_id}/mail/labels/
     * @secure
     */
    postCharactersCharacterIdMailLabels: (characterId, label, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/labels/`,
      method: "POST",
      query,
      body: label,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Delete a mail label --- Alternate route: `/dev/characters/{character_id}/mail/labels/{label_id}/` Alternate route: `/legacy/characters/{character_id}/mail/labels/{label_id}/` Alternate route: `/v1/characters/{character_id}/mail/labels/{label_id}/`
     *
     * @tags Mail
     * @name DeleteCharactersCharacterIdMailLabelsLabelId
     * @summary Delete a mail label
     * @request DELETE:/characters/{character_id}/mail/labels/{label_id}/
     * @secure
     */
    deleteCharactersCharacterIdMailLabelsLabelId: (characterId, labelId, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/labels/${labelId}/`,
      method: "DELETE",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Return all mailing lists that the character is subscribed to --- Alternate route: `/dev/characters/{character_id}/mail/lists/` Alternate route: `/legacy/characters/{character_id}/mail/lists/` Alternate route: `/v1/characters/{character_id}/mail/lists/` --- This route is cached for up to 120 seconds
     *
     * @tags Mail
     * @name GetCharactersCharacterIdMailLists
     * @summary Return mailing list subscriptions
     * @request GET:/characters/{character_id}/mail/lists/
     * @secure
     */
    getCharactersCharacterIdMailLists: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/lists/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Delete a mail --- Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/` Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/` Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
     *
     * @tags Mail
     * @name DeleteCharactersCharacterIdMailMailId
     * @summary Delete a mail
     * @request DELETE:/characters/{character_id}/mail/{mail_id}/
     * @secure
     */
    deleteCharactersCharacterIdMailMailId: (characterId, mailId, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/${mailId}/`,
      method: "DELETE",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Return the contents of an EVE mail --- Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/` Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/` Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/` --- This route is cached for up to 30 seconds
     *
     * @tags Mail
     * @name GetCharactersCharacterIdMailMailId
     * @summary Return a mail
     * @request GET:/characters/{character_id}/mail/{mail_id}/
     * @secure
     */
    getCharactersCharacterIdMailMailId: (characterId, mailId, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/${mailId}/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Update metadata about a mail --- Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/` Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/` Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
     *
     * @tags Mail
     * @name PutCharactersCharacterIdMailMailId
     * @summary Update metadata about a mail
     * @request PUT:/characters/{character_id}/mail/{mail_id}/
     * @secure
     */
    putCharactersCharacterIdMailMailId: (characterId, mailId, contents, query, params = {}) => this.request({
      path: `/characters/${characterId}/mail/${mailId}/`,
      method: "PUT",
      query,
      body: contents,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    }),
    /**
     * @description Return a list of medals the character has --- Alternate route: `/dev/characters/{character_id}/medals/` Alternate route: `/v2/characters/{character_id}/medals/` --- This route is cached for up to 3600 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdMedals
     * @summary Get medals
     * @request GET:/characters/{character_id}/medals/
     * @secure
     */
    getCharactersCharacterIdMedals: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/medals/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Paginated record of all mining done by a character for the past 30 days --- Alternate route: `/dev/characters/{character_id}/mining/` Alternate route: `/legacy/characters/{character_id}/mining/` Alternate route: `/v1/characters/{character_id}/mining/` --- This route is cached for up to 600 seconds
     *
     * @tags Industry
     * @name GetCharactersCharacterIdMining
     * @summary Character mining ledger
     * @request GET:/characters/{character_id}/mining/
     * @secure
     */
    getCharactersCharacterIdMining: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/mining/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return character notifications --- Alternate route: `/dev/characters/{character_id}/notifications/` Alternate route: `/legacy/characters/{character_id}/notifications/` Alternate route: `/v4/characters/{character_id}/notifications/` Alternate route: `/v5/characters/{character_id}/notifications/` Alternate route: `/v6/characters/{character_id}/notifications/` --- This route is cached for up to 600 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdNotifications
     * @summary Get character notifications
     * @request GET:/characters/{character_id}/notifications/
     * @secure
     */
    getCharactersCharacterIdNotifications: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/notifications/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return notifications about having been added to someone's contact list --- Alternate route: `/dev/characters/{character_id}/notifications/contacts/` Alternate route: `/v2/characters/{character_id}/notifications/contacts/` --- This route is cached for up to 600 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdNotificationsContacts
     * @summary Get new contact notifications
     * @request GET:/characters/{character_id}/notifications/contacts/
     * @secure
     */
    getCharactersCharacterIdNotificationsContacts: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/notifications/contacts/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Checks if the character is currently online --- Alternate route: `/dev/characters/{character_id}/online/` Alternate route: `/v2/characters/{character_id}/online/` Alternate route: `/v3/characters/{character_id}/online/` --- This route is cached for up to 60 seconds
     *
     * @tags Location
     * @name GetCharactersCharacterIdOnline
     * @summary Get character online
     * @request GET:/characters/{character_id}/online/
     * @secure
     */
    getCharactersCharacterIdOnline: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/online/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List open market orders placed by a character --- Alternate route: `/dev/characters/{character_id}/orders/` Alternate route: `/v2/characters/{character_id}/orders/` --- This route is cached for up to 1200 seconds
     *
     * @tags Market
     * @name GetCharactersCharacterIdOrders
     * @summary List open orders from a character
     * @request GET:/characters/{character_id}/orders/
     * @secure
     */
    getCharactersCharacterIdOrders: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/orders/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List cancelled and expired market orders placed by a character up to 90 days in the past. --- Alternate route: `/dev/characters/{character_id}/orders/history/` Alternate route: `/legacy/characters/{character_id}/orders/history/` Alternate route: `/v1/characters/{character_id}/orders/history/` --- This route is cached for up to 3600 seconds
     *
     * @tags Market
     * @name GetCharactersCharacterIdOrdersHistory
     * @summary List historical orders by a character
     * @request GET:/characters/{character_id}/orders/history/
     * @secure
     */
    getCharactersCharacterIdOrdersHistory: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/orders/history/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a list of all planetary colonies owned by a character. --- Alternate route: `/dev/characters/{character_id}/planets/` Alternate route: `/legacy/characters/{character_id}/planets/` Alternate route: `/v1/characters/{character_id}/planets/` --- This route is cached for up to 600 seconds
     *
     * @tags Planetary Interaction
     * @name GetCharactersCharacterIdPlanets
     * @summary Get colonies
     * @request GET:/characters/{character_id}/planets/
     * @secure
     */
    getCharactersCharacterIdPlanets: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/planets/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met. --- Alternate route: `/dev/characters/{character_id}/planets/{planet_id}/` Alternate route: `/v3/characters/{character_id}/planets/{planet_id}/`
     *
     * @tags Planetary Interaction
     * @name GetCharactersCharacterIdPlanetsPlanetId
     * @summary Get colony layout
     * @request GET:/characters/{character_id}/planets/{planet_id}/
     * @secure
     */
    getCharactersCharacterIdPlanetsPlanetId: (characterId, planetId, query, params = {}) => this.request({
      path: `/characters/${characterId}/planets/${planetId}/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get portrait urls for a character --- Alternate route: `/dev/characters/{character_id}/portrait/` Alternate route: `/v2/characters/{character_id}/portrait/` Alternate route: `/v3/characters/{character_id}/portrait/` --- This route expires daily at 11:05
     *
     * @tags Character
     * @name GetCharactersCharacterIdPortrait
     * @summary Get character portraits
     * @request GET:/characters/{character_id}/portrait/
     */
    getCharactersCharacterIdPortrait: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/portrait/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a character's corporation roles --- Alternate route: `/dev/characters/{character_id}/roles/` Alternate route: `/v3/characters/{character_id}/roles/` --- This route is cached for up to 3600 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdRoles
     * @summary Get character corporation roles
     * @request GET:/characters/{character_id}/roles/
     * @secure
     */
    getCharactersCharacterIdRoles: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/roles/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Search for entities that match a given sub-string. --- Alternate route: `/dev/characters/{character_id}/search/` Alternate route: `/legacy/characters/{character_id}/search/` Alternate route: `/v3/characters/{character_id}/search/` --- This route is cached for up to 3600 seconds
     *
     * @tags Search
     * @name GetCharactersCharacterIdSearch
     * @summary Search on a string
     * @request GET:/characters/{character_id}/search/
     * @secure
     */
    getCharactersCharacterIdSearch: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/search/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get the current ship type, name and id --- Alternate route: `/dev/characters/{character_id}/ship/` Alternate route: `/legacy/characters/{character_id}/ship/` Alternate route: `/v1/characters/{character_id}/ship/` Alternate route: `/v2/characters/{character_id}/ship/` --- This route is cached for up to 5 seconds
     *
     * @tags Location
     * @name GetCharactersCharacterIdShip
     * @summary Get current ship
     * @request GET:/characters/{character_id}/ship/
     * @secure
     */
    getCharactersCharacterIdShip: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/ship/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List the configured skill queue for the given character --- Alternate route: `/dev/characters/{character_id}/skillqueue/` Alternate route: `/legacy/characters/{character_id}/skillqueue/` Alternate route: `/v2/characters/{character_id}/skillqueue/` --- This route is cached for up to 120 seconds
     *
     * @tags Skills
     * @name GetCharactersCharacterIdSkillqueue
     * @summary Get character's skill queue
     * @request GET:/characters/{character_id}/skillqueue/
     * @secure
     */
    getCharactersCharacterIdSkillqueue: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/skillqueue/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List all trained skills for the given character --- Alternate route: `/dev/characters/{character_id}/skills/` Alternate route: `/v4/characters/{character_id}/skills/` --- This route is cached for up to 120 seconds
     *
     * @tags Skills
     * @name GetCharactersCharacterIdSkills
     * @summary Get character skills
     * @request GET:/characters/{character_id}/skills/
     * @secure
     */
    getCharactersCharacterIdSkills: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/skills/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return character standings from agents, NPC corporations, and factions --- Alternate route: `/dev/characters/{character_id}/standings/` Alternate route: `/v2/characters/{character_id}/standings/` --- This route is cached for up to 3600 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdStandings
     * @summary Get standings
     * @request GET:/characters/{character_id}/standings/
     * @secure
     */
    getCharactersCharacterIdStandings: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/standings/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a character's titles --- Alternate route: `/dev/characters/{character_id}/titles/` Alternate route: `/v2/characters/{character_id}/titles/` --- This route is cached for up to 3600 seconds
     *
     * @tags Character
     * @name GetCharactersCharacterIdTitles
     * @summary Get character corporation titles
     * @request GET:/characters/{character_id}/titles/
     * @secure
     */
    getCharactersCharacterIdTitles: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/titles/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a character's wallet balance --- Alternate route: `/legacy/characters/{character_id}/wallet/` Alternate route: `/v1/characters/{character_id}/wallet/` --- This route is cached for up to 120 seconds --- [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/wallet/)
     *
     * @tags Wallet
     * @name GetCharactersCharacterIdWallet
     * @summary Get a character's wallet balance
     * @request GET:/characters/{character_id}/wallet/
     * @secure
     */
    getCharactersCharacterIdWallet: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/wallet/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve the given character's wallet journal going 30 days back --- Alternate route: `/dev/characters/{character_id}/wallet/journal/` Alternate route: `/legacy/characters/{character_id}/wallet/journal/` Alternate route: `/v5/characters/{character_id}/wallet/journal/` Alternate route: `/v6/characters/{character_id}/wallet/journal/` --- This route is cached for up to 3600 seconds
     *
     * @tags Wallet
     * @name GetCharactersCharacterIdWalletJournal
     * @summary Get character wallet journal
     * @request GET:/characters/{character_id}/wallet/journal/
     * @secure
     */
    getCharactersCharacterIdWalletJournal: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/wallet/journal/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get wallet transactions of a character --- Alternate route: `/dev/characters/{character_id}/wallet/transactions/` Alternate route: `/legacy/characters/{character_id}/wallet/transactions/` Alternate route: `/v1/characters/{character_id}/wallet/transactions/` --- This route is cached for up to 3600 seconds
     *
     * @tags Wallet
     * @name GetCharactersCharacterIdWalletTransactions
     * @summary Get wallet transactions
     * @request GET:/characters/{character_id}/wallet/transactions/
     * @secure
     */
    getCharactersCharacterIdWalletTransactions: (characterId, query, params = {}) => this.request({
      path: `/characters/${characterId}/wallet/transactions/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    })
  };
  contracts = {
    /**
     * @description Lists bids on a public auction contract --- Alternate route: `/dev/contracts/public/bids/{contract_id}/` Alternate route: `/legacy/contracts/public/bids/{contract_id}/` Alternate route: `/v1/contracts/public/bids/{contract_id}/` --- This route is cached for up to 300 seconds
     *
     * @tags Contracts
     * @name GetContractsPublicBidsContractId
     * @summary Get public contract bids
     * @request GET:/contracts/public/bids/{contract_id}/
     */
    getContractsPublicBidsContractId: (contractId, query, params = {}) => this.request({
      path: `/contracts/public/bids/${contractId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Lists items of a public contract --- Alternate route: `/dev/contracts/public/items/{contract_id}/` Alternate route: `/legacy/contracts/public/items/{contract_id}/` Alternate route: `/v1/contracts/public/items/{contract_id}/` --- This route is cached for up to 3600 seconds
     *
     * @tags Contracts
     * @name GetContractsPublicItemsContractId
     * @summary Get public contract items
     * @request GET:/contracts/public/items/{contract_id}/
     */
    getContractsPublicItemsContractId: (contractId, query, params = {}) => this.request({
      path: `/contracts/public/items/${contractId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a paginated list of all public contracts in the given region --- Alternate route: `/dev/contracts/public/{region_id}/` Alternate route: `/legacy/contracts/public/{region_id}/` Alternate route: `/v1/contracts/public/{region_id}/` --- This route is cached for up to 1800 seconds
     *
     * @tags Contracts
     * @name GetContractsPublicRegionId
     * @summary Get public contracts
     * @request GET:/contracts/public/{region_id}/
     */
    getContractsPublicRegionId: (regionId, query, params = {}) => this.request({
      path: `/contracts/public/${regionId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  corporation = {
    /**
     * @description Extraction timers for all moon chunks being extracted by refineries belonging to a corporation. --- Alternate route: `/dev/corporation/{corporation_id}/mining/extractions/` Alternate route: `/legacy/corporation/{corporation_id}/mining/extractions/` Alternate route: `/v1/corporation/{corporation_id}/mining/extractions/` --- This route is cached for up to 1800 seconds --- Requires one of the following EVE corporation role(s): Station_Manager
     *
     * @tags Industry
     * @name GetCorporationCorporationIdMiningExtractions
     * @summary Moon extraction timers
     * @request GET:/corporation/{corporation_id}/mining/extractions/
     * @secure
     */
    getCorporationCorporationIdMiningExtractions: (corporationId, query, params = {}) => this.request({
      path: `/corporation/${corporationId}/mining/extractions/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Paginated list of all entities capable of observing and recording mining for a corporation --- Alternate route: `/dev/corporation/{corporation_id}/mining/observers/` Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/` Alternate route: `/v1/corporation/{corporation_id}/mining/observers/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant
     *
     * @tags Industry
     * @name GetCorporationCorporationIdMiningObservers
     * @summary Corporation mining observers
     * @request GET:/corporation/{corporation_id}/mining/observers/
     * @secure
     */
    getCorporationCorporationIdMiningObservers: (corporationId, query, params = {}) => this.request({
      path: `/corporation/${corporationId}/mining/observers/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Paginated record of all mining seen by an observer --- Alternate route: `/dev/corporation/{corporation_id}/mining/observers/{observer_id}/` Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/` Alternate route: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant
     *
     * @tags Industry
     * @name GetCorporationCorporationIdMiningObserversObserverId
     * @summary Observed corporation mining
     * @request GET:/corporation/{corporation_id}/mining/observers/{observer_id}/
     * @secure
     */
    getCorporationCorporationIdMiningObserversObserverId: (corporationId, observerId, query, params = {}) => this.request({
      path: `/corporation/${corporationId}/mining/observers/${observerId}/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    })
  };
  corporations = {
    /**
     * @description Get a list of npc corporations --- Alternate route: `/dev/corporations/npccorps/` Alternate route: `/v2/corporations/npccorps/` --- This route expires daily at 11:05
     *
     * @tags Corporation
     * @name GetCorporationsNpccorps
     * @summary Get npc corporations
     * @request GET:/corporations/npccorps/
     */
    getCorporationsNpccorps: (query, params = {}) => this.request({
      path: `/corporations/npccorps/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Public information about a corporation --- Alternate route: `/dev/corporations/{corporation_id}/` Alternate route: `/v5/corporations/{corporation_id}/` --- This route is cached for up to 3600 seconds
     *
     * @tags Corporation
     * @name GetCorporationsCorporationId
     * @summary Get corporation information
     * @request GET:/corporations/{corporation_id}/
     */
    getCorporationsCorporationId: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of all the alliances a corporation has been a member of --- Alternate route: `/dev/corporations/{corporation_id}/alliancehistory/` Alternate route: `/v3/corporations/{corporation_id}/alliancehistory/` --- This route is cached for up to 3600 seconds
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdAlliancehistory
     * @summary Get alliance history
     * @request GET:/corporations/{corporation_id}/alliancehistory/
     */
    getCorporationsCorporationIdAlliancehistory: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/alliancehistory/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of the corporation assets --- Alternate route: `/dev/corporations/{corporation_id}/assets/` Alternate route: `/legacy/corporations/{corporation_id}/assets/` Alternate route: `/v4/corporations/{corporation_id}/assets/` Alternate route: `/v5/corporations/{corporation_id}/assets/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Assets
     * @name GetCorporationsCorporationIdAssets
     * @summary Get corporation assets
     * @request GET:/corporations/{corporation_id}/assets/
     * @secure
     */
    getCorporationsCorporationIdAssets: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/assets/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0) --- Alternate route: `/dev/corporations/{corporation_id}/assets/locations/` Alternate route: `/v2/corporations/{corporation_id}/assets/locations/` --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Assets
     * @name PostCorporationsCorporationIdAssetsLocations
     * @summary Get corporation asset locations
     * @request POST:/corporations/{corporation_id}/assets/locations/
     * @secure
     */
    postCorporationsCorporationIdAssetsLocations: (corporationId, item_ids, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/assets/locations/`,
      method: "POST",
      query,
      body: item_ids,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships --- Alternate route: `/dev/corporations/{corporation_id}/assets/names/` Alternate route: `/legacy/corporations/{corporation_id}/assets/names/` Alternate route: `/v1/corporations/{corporation_id}/assets/names/` --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Assets
     * @name PostCorporationsCorporationIdAssetsNames
     * @summary Get corporation asset names
     * @request POST:/corporations/{corporation_id}/assets/names/
     * @secure
     */
    postCorporationsCorporationIdAssetsNames: (corporationId, item_ids, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/assets/names/`,
      method: "POST",
      query,
      body: item_ids,
      secure: true,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a list of blueprints the corporation owns --- Alternate route: `/dev/corporations/{corporation_id}/blueprints/` Alternate route: `/v3/corporations/{corporation_id}/blueprints/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdBlueprints
     * @summary Get corporation blueprints
     * @request GET:/corporations/{corporation_id}/blueprints/
     * @secure
     */
    getCorporationsCorporationIdBlueprints: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/blueprints/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return contacts of a corporation --- Alternate route: `/dev/corporations/{corporation_id}/contacts/` Alternate route: `/v2/corporations/{corporation_id}/contacts/` --- This route is cached for up to 300 seconds
     *
     * @tags Contacts
     * @name GetCorporationsCorporationIdContacts
     * @summary Get corporation contacts
     * @request GET:/corporations/{corporation_id}/contacts/
     * @secure
     */
    getCorporationsCorporationIdContacts: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/contacts/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return custom labels for a corporation's contacts --- Alternate route: `/dev/corporations/{corporation_id}/contacts/labels/` Alternate route: `/legacy/corporations/{corporation_id}/contacts/labels/` Alternate route: `/v1/corporations/{corporation_id}/contacts/labels/` --- This route is cached for up to 300 seconds
     *
     * @tags Contacts
     * @name GetCorporationsCorporationIdContactsLabels
     * @summary Get corporation contact labels
     * @request GET:/corporations/{corporation_id}/contacts/labels/
     * @secure
     */
    getCorporationsCorporationIdContactsLabels: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/contacts/labels/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation --- Alternate route: `/dev/corporations/{corporation_id}/containers/logs/` Alternate route: `/v3/corporations/{corporation_id}/containers/logs/` --- This route is cached for up to 600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdContainersLogs
     * @summary Get all corporation ALSC logs
     * @request GET:/corporations/{corporation_id}/containers/logs/
     * @secure
     */
    getCorporationsCorporationIdContainersLogs: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/containers/logs/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress". --- Alternate route: `/dev/corporations/{corporation_id}/contracts/` Alternate route: `/legacy/corporations/{corporation_id}/contracts/` Alternate route: `/v1/corporations/{corporation_id}/contracts/` --- This route is cached for up to 300 seconds
     *
     * @tags Contracts
     * @name GetCorporationsCorporationIdContracts
     * @summary Get corporation contracts
     * @request GET:/corporations/{corporation_id}/contracts/
     * @secure
     */
    getCorporationsCorporationIdContracts: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/contracts/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Lists bids on a particular auction contract --- Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/bids/` Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/bids/` Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/` --- This route is cached for up to 3600 seconds
     *
     * @tags Contracts
     * @name GetCorporationsCorporationIdContractsContractIdBids
     * @summary Get corporation contract bids
     * @request GET:/corporations/{corporation_id}/contracts/{contract_id}/bids/
     * @secure
     */
    getCorporationsCorporationIdContractsContractIdBids: (contractId, corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/contracts/${contractId}/bids/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Lists items of a particular contract --- Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/items/` Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/items/` Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/items/` --- This route is cached for up to 3600 seconds
     *
     * @tags Contracts
     * @name GetCorporationsCorporationIdContractsContractIdItems
     * @summary Get corporation contract items
     * @request GET:/corporations/{corporation_id}/contracts/{contract_id}/items/
     * @secure
     */
    getCorporationsCorporationIdContractsContractIdItems: (contractId, corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/contracts/${contractId}/items/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List customs offices owned by a corporation --- Alternate route: `/dev/corporations/{corporation_id}/customs_offices/` Alternate route: `/legacy/corporations/{corporation_id}/customs_offices/` Alternate route: `/v1/corporations/{corporation_id}/customs_offices/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Planetary Interaction
     * @name GetCorporationsCorporationIdCustomsOffices
     * @summary List corporation customs offices
     * @request GET:/corporations/{corporation_id}/customs_offices/
     * @secure
     */
    getCorporationsCorporationIdCustomsOffices: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/customs_offices/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return corporation hangar and wallet division names, only show if a division is not using the default name --- Alternate route: `/dev/corporations/{corporation_id}/divisions/` Alternate route: `/v2/corporations/{corporation_id}/divisions/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdDivisions
     * @summary Get corporation divisions
     * @request GET:/corporations/{corporation_id}/divisions/
     * @secure
     */
    getCorporationsCorporationIdDivisions: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/divisions/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return a corporation's facilities --- Alternate route: `/dev/corporations/{corporation_id}/facilities/` Alternate route: `/v2/corporations/{corporation_id}/facilities/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Factory_Manager
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdFacilities
     * @summary Get corporation facilities
     * @request GET:/corporations/{corporation_id}/facilities/
     * @secure
     */
    getCorporationsCorporationIdFacilities: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/facilities/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Statistics about a corporation involved in faction warfare --- Alternate route: `/dev/corporations/{corporation_id}/fw/stats/` Alternate route: `/legacy/corporations/{corporation_id}/fw/stats/` Alternate route: `/v1/corporations/{corporation_id}/fw/stats/` Alternate route: `/v2/corporations/{corporation_id}/fw/stats/` --- This route expires daily at 11:05
     *
     * @tags Faction Warfare
     * @name GetCorporationsCorporationIdFwStats
     * @summary Overview of a corporation involved in faction warfare
     * @request GET:/corporations/{corporation_id}/fw/stats/
     * @secure
     */
    getCorporationsCorporationIdFwStats: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/fw/stats/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get the icon urls for a corporation --- Alternate route: `/dev/corporations/{corporation_id}/icons/` Alternate route: `/legacy/corporations/{corporation_id}/icons/` Alternate route: `/v1/corporations/{corporation_id}/icons/` Alternate route: `/v2/corporations/{corporation_id}/icons/` --- This route is cached for up to 3600 seconds
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdIcons
     * @summary Get corporation icon
     * @request GET:/corporations/{corporation_id}/icons/
     */
    getCorporationsCorporationIdIcons: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/icons/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description List industry jobs run by a corporation --- Alternate route: `/dev/corporations/{corporation_id}/industry/jobs/` Alternate route: `/legacy/corporations/{corporation_id}/industry/jobs/` Alternate route: `/v1/corporations/{corporation_id}/industry/jobs/` --- This route is cached for up to 300 seconds --- Requires one of the following EVE corporation role(s): Factory_Manager
     *
     * @tags Industry
     * @name GetCorporationsCorporationIdIndustryJobs
     * @summary List corporation industry jobs
     * @request GET:/corporations/{corporation_id}/industry/jobs/
     * @secure
     */
    getCorporationsCorporationIdIndustryJobs: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/industry/jobs/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of a corporation's kills and losses going back 90 days --- Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/` Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/` Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/` --- This route is cached for up to 300 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Killmails
     * @name GetCorporationsCorporationIdKillmailsRecent
     * @summary Get a corporation's recent kills and losses
     * @request GET:/corporations/{corporation_id}/killmails/recent/
     * @secure
     */
    getCorporationsCorporationIdKillmailsRecent: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/killmails/recent/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a corporation's medals --- Alternate route: `/dev/corporations/{corporation_id}/medals/` Alternate route: `/v2/corporations/{corporation_id}/medals/` --- This route is cached for up to 3600 seconds
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdMedals
     * @summary Get corporation medals
     * @request GET:/corporations/{corporation_id}/medals/
     * @secure
     */
    getCorporationsCorporationIdMedals: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/medals/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns medals issued by a corporation --- Alternate route: `/dev/corporations/{corporation_id}/medals/issued/` Alternate route: `/v2/corporations/{corporation_id}/medals/issued/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdMedalsIssued
     * @summary Get corporation issued medals
     * @request GET:/corporations/{corporation_id}/medals/issued/
     * @secure
     */
    getCorporationsCorporationIdMedalsIssued: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/medals/issued/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return the current member list of a corporation, the token's character need to be a member of the corporation. --- Alternate route: `/dev/corporations/{corporation_id}/members/` Alternate route: `/v4/corporations/{corporation_id}/members/` --- This route is cached for up to 3600 seconds
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdMembers
     * @summary Get corporation members
     * @request GET:/corporations/{corporation_id}/members/
     * @secure
     */
    getCorporationsCorporationIdMembers: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/members/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return a corporation's member limit, not including CEO himself --- Alternate route: `/dev/corporations/{corporation_id}/members/limit/` Alternate route: `/v2/corporations/{corporation_id}/members/limit/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdMembersLimit
     * @summary Get corporation member limit
     * @request GET:/corporations/{corporation_id}/members/limit/
     * @secure
     */
    getCorporationsCorporationIdMembersLimit: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/members/limit/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a corporation's members' titles --- Alternate route: `/dev/corporations/{corporation_id}/members/titles/` Alternate route: `/v2/corporations/{corporation_id}/members/titles/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdMembersTitles
     * @summary Get corporation's members' titles
     * @request GET:/corporations/{corporation_id}/members/titles/
     * @secure
     */
    getCorporationsCorporationIdMembersTitles: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/members/titles/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns additional information about a corporation's members which helps tracking their activities --- Alternate route: `/dev/corporations/{corporation_id}/membertracking/` Alternate route: `/v2/corporations/{corporation_id}/membertracking/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdMembertracking
     * @summary Track corporation members
     * @request GET:/corporations/{corporation_id}/membertracking/
     * @secure
     */
    getCorporationsCorporationIdMembertracking: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/membertracking/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List open market orders placed on behalf of a corporation --- Alternate route: `/dev/corporations/{corporation_id}/orders/` Alternate route: `/legacy/corporations/{corporation_id}/orders/` Alternate route: `/v2/corporations/{corporation_id}/orders/` Alternate route: `/v3/corporations/{corporation_id}/orders/` --- This route is cached for up to 1200 seconds --- Requires one of the following EVE corporation role(s): Accountant, Trader
     *
     * @tags Market
     * @name GetCorporationsCorporationIdOrders
     * @summary List open orders from a corporation
     * @request GET:/corporations/{corporation_id}/orders/
     * @secure
     */
    getCorporationsCorporationIdOrders: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/orders/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past. --- Alternate route: `/dev/corporations/{corporation_id}/orders/history/` Alternate route: `/legacy/corporations/{corporation_id}/orders/history/` Alternate route: `/v1/corporations/{corporation_id}/orders/history/` Alternate route: `/v2/corporations/{corporation_id}/orders/history/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant, Trader
     *
     * @tags Market
     * @name GetCorporationsCorporationIdOrdersHistory
     * @summary List historical orders from a corporation
     * @request GET:/corporations/{corporation_id}/orders/history/
     * @secure
     */
    getCorporationsCorporationIdOrdersHistory: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/orders/history/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return the roles of all members if the character has the personnel manager role or any grantable role. --- Alternate route: `/dev/corporations/{corporation_id}/roles/` Alternate route: `/v2/corporations/{corporation_id}/roles/` --- This route is cached for up to 3600 seconds
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdRoles
     * @summary Get corporation member roles
     * @request GET:/corporations/{corporation_id}/roles/
     * @secure
     */
    getCorporationsCorporationIdRoles: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/roles/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return how roles have changed for a coporation's members, up to a month --- Alternate route: `/dev/corporations/{corporation_id}/roles/history/` Alternate route: `/v2/corporations/{corporation_id}/roles/history/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdRolesHistory
     * @summary Get corporation member roles history
     * @request GET:/corporations/{corporation_id}/roles/history/
     * @secure
     */
    getCorporationsCorporationIdRolesHistory: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/roles/history/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return the current shareholders of a corporation. --- Alternate route: `/dev/corporations/{corporation_id}/shareholders/` Alternate route: `/legacy/corporations/{corporation_id}/shareholders/` Alternate route: `/v1/corporations/{corporation_id}/shareholders/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdShareholders
     * @summary Get corporation shareholders
     * @request GET:/corporations/{corporation_id}/shareholders/
     * @secure
     */
    getCorporationsCorporationIdShareholders: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/shareholders/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return corporation standings from agents, NPC corporations, and factions --- Alternate route: `/dev/corporations/{corporation_id}/standings/` Alternate route: `/v2/corporations/{corporation_id}/standings/` --- This route is cached for up to 3600 seconds
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdStandings
     * @summary Get corporation standings
     * @request GET:/corporations/{corporation_id}/standings/
     * @secure
     */
    getCorporationsCorporationIdStandings: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/standings/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns list of corporation starbases (POSes) --- Alternate route: `/dev/corporations/{corporation_id}/starbases/` Alternate route: `/v2/corporations/{corporation_id}/starbases/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdStarbases
     * @summary Get corporation starbases (POSes)
     * @request GET:/corporations/{corporation_id}/starbases/
     * @secure
     */
    getCorporationsCorporationIdStarbases: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/starbases/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns various settings and fuels of a starbase (POS) --- Alternate route: `/dev/corporations/{corporation_id}/starbases/{starbase_id}/` Alternate route: `/v2/corporations/{corporation_id}/starbases/{starbase_id}/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdStarbasesStarbaseId
     * @summary Get starbase (POS) detail
     * @request GET:/corporations/{corporation_id}/starbases/{starbase_id}/
     * @secure
     */
    getCorporationsCorporationIdStarbasesStarbaseId: (corporationId, starbaseId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/starbases/${starbaseId}/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th --- Alternate route: `/dev/corporations/{corporation_id}/structures/` Alternate route: `/v4/corporations/{corporation_id}/structures/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Station_Manager
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdStructures
     * @summary Get corporation structures
     * @request GET:/corporations/{corporation_id}/structures/
     * @secure
     */
    getCorporationsCorporationIdStructures: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/structures/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Returns a corporation's titles --- Alternate route: `/dev/corporations/{corporation_id}/titles/` Alternate route: `/v2/corporations/{corporation_id}/titles/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Director
     *
     * @tags Corporation
     * @name GetCorporationsCorporationIdTitles
     * @summary Get corporation titles
     * @request GET:/corporations/{corporation_id}/titles/
     * @secure
     */
    getCorporationsCorporationIdTitles: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/titles/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get a corporation's wallets --- Alternate route: `/dev/corporations/{corporation_id}/wallets/` Alternate route: `/legacy/corporations/{corporation_id}/wallets/` Alternate route: `/v1/corporations/{corporation_id}/wallets/` --- This route is cached for up to 300 seconds --- Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
     *
     * @tags Wallet
     * @name GetCorporationsCorporationIdWallets
     * @summary Returns a corporation's wallet balance
     * @request GET:/corporations/{corporation_id}/wallets/
     * @secure
     */
    getCorporationsCorporationIdWallets: (corporationId, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/wallets/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Retrieve the given corporation's wallet journal for the given division going 30 days back --- Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/journal/` Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/journal/` Alternate route: `/v3/corporations/{corporation_id}/wallets/{division}/journal/` Alternate route: `/v4/corporations/{corporation_id}/wallets/{division}/journal/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
     *
     * @tags Wallet
     * @name GetCorporationsCorporationIdWalletsDivisionJournal
     * @summary Get corporation wallet journal
     * @request GET:/corporations/{corporation_id}/wallets/{division}/journal/
     * @secure
     */
    getCorporationsCorporationIdWalletsDivisionJournal: (corporationId, division, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/wallets/${division}/journal/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get wallet transactions of a corporation --- Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/transactions/` Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/transactions/` Alternate route: `/v1/corporations/{corporation_id}/wallets/{division}/transactions/` --- This route is cached for up to 3600 seconds --- Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
     *
     * @tags Wallet
     * @name GetCorporationsCorporationIdWalletsDivisionTransactions
     * @summary Get corporation wallet transactions
     * @request GET:/corporations/{corporation_id}/wallets/{division}/transactions/
     * @secure
     */
    getCorporationsCorporationIdWalletsDivisionTransactions: (corporationId, division, query, params = {}) => this.request({
      path: `/corporations/${corporationId}/wallets/${division}/transactions/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    })
  };
  dogma = {
    /**
     * @description Get a list of dogma attribute ids --- Alternate route: `/dev/dogma/attributes/` Alternate route: `/legacy/dogma/attributes/` Alternate route: `/v1/dogma/attributes/` --- This route expires daily at 11:05
     *
     * @tags Dogma
     * @name GetDogmaAttributes
     * @summary Get attributes
     * @request GET:/dogma/attributes/
     */
    getDogmaAttributes: (query, params = {}) => this.request({
      path: `/dogma/attributes/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a dogma attribute --- Alternate route: `/dev/dogma/attributes/{attribute_id}/` Alternate route: `/legacy/dogma/attributes/{attribute_id}/` Alternate route: `/v1/dogma/attributes/{attribute_id}/` --- This route expires daily at 11:05
     *
     * @tags Dogma
     * @name GetDogmaAttributesAttributeId
     * @summary Get attribute information
     * @request GET:/dogma/attributes/{attribute_id}/
     */
    getDogmaAttributesAttributeId: (attributeId, query, params = {}) => this.request({
      path: `/dogma/attributes/${attributeId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Returns info about a dynamic item resulting from mutation with a mutaplasmid. --- Alternate route: `/dev/dogma/dynamic/items/{type_id}/{item_id}/` Alternate route: `/legacy/dogma/dynamic/items/{type_id}/{item_id}/` Alternate route: `/v1/dogma/dynamic/items/{type_id}/{item_id}/` --- This route expires daily at 11:05
     *
     * @tags Dogma
     * @name GetDogmaDynamicItemsTypeIdItemId
     * @summary Get dynamic item information
     * @request GET:/dogma/dynamic/items/{type_id}/{item_id}/
     */
    getDogmaDynamicItemsTypeIdItemId: (itemId, typeId, query, params = {}) => this.request({
      path: `/dogma/dynamic/items/${typeId}/${itemId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of dogma effect ids --- Alternate route: `/dev/dogma/effects/` Alternate route: `/legacy/dogma/effects/` Alternate route: `/v1/dogma/effects/` --- This route expires daily at 11:05
     *
     * @tags Dogma
     * @name GetDogmaEffects
     * @summary Get effects
     * @request GET:/dogma/effects/
     */
    getDogmaEffects: (query, params = {}) => this.request({
      path: `/dogma/effects/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a dogma effect --- Alternate route: `/dev/dogma/effects/{effect_id}/` Alternate route: `/v2/dogma/effects/{effect_id}/` --- This route expires daily at 11:05
     *
     * @tags Dogma
     * @name GetDogmaEffectsEffectId
     * @summary Get effect information
     * @request GET:/dogma/effects/{effect_id}/
     */
    getDogmaEffectsEffectId: (effectId, query, params = {}) => this.request({
      path: `/dogma/effects/${effectId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  fleets = {
    /**
     * @description Return details about a fleet --- Alternate route: `/dev/fleets/{fleet_id}/` Alternate route: `/legacy/fleets/{fleet_id}/` Alternate route: `/v1/fleets/{fleet_id}/` --- This route is cached for up to 5 seconds
     *
     * @tags Fleets
     * @name GetFleetsFleetId
     * @summary Get fleet information
     * @request GET:/fleets/{fleet_id}/
     * @secure
     */
    getFleetsFleetId: (fleetId, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Update settings about a fleet --- Alternate route: `/dev/fleets/{fleet_id}/` Alternate route: `/legacy/fleets/{fleet_id}/` Alternate route: `/v1/fleets/{fleet_id}/`
     *
     * @tags Fleets
     * @name PutFleetsFleetId
     * @summary Update fleet
     * @request PUT:/fleets/{fleet_id}/
     * @secure
     */
    putFleetsFleetId: (fleetId, new_settings, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/`,
      method: "PUT",
      query,
      body: new_settings,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    }),
    /**
     * @description Return information about fleet members --- Alternate route: `/dev/fleets/{fleet_id}/members/` Alternate route: `/legacy/fleets/{fleet_id}/members/` Alternate route: `/v1/fleets/{fleet_id}/members/` --- This route is cached for up to 5 seconds
     *
     * @tags Fleets
     * @name GetFleetsFleetIdMembers
     * @summary Get fleet members
     * @request GET:/fleets/{fleet_id}/members/
     * @secure
     */
    getFleetsFleetIdMembers: (fleetId, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/members/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI --- Alternate route: `/dev/fleets/{fleet_id}/members/` Alternate route: `/legacy/fleets/{fleet_id}/members/` Alternate route: `/v1/fleets/{fleet_id}/members/`
     *
     * @tags Fleets
     * @name PostFleetsFleetIdMembers
     * @summary Create fleet invitation
     * @request POST:/fleets/{fleet_id}/members/
     * @secure
     */
    postFleetsFleetIdMembers: (fleetId, invitation, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/members/`,
      method: "POST",
      query,
      body: invitation,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    }),
    /**
     * @description Kick a fleet member --- Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/` Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/` Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
     *
     * @tags Fleets
     * @name DeleteFleetsFleetIdMembersMemberId
     * @summary Kick fleet member
     * @request DELETE:/fleets/{fleet_id}/members/{member_id}/
     * @secure
     */
    deleteFleetsFleetIdMembersMemberId: (fleetId, memberId, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/members/${memberId}/`,
      method: "DELETE",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Move a fleet member around --- Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/` Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/` Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
     *
     * @tags Fleets
     * @name PutFleetsFleetIdMembersMemberId
     * @summary Move fleet member
     * @request PUT:/fleets/{fleet_id}/members/{member_id}/
     * @secure
     */
    putFleetsFleetIdMembersMemberId: (fleetId, memberId, movement, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/members/${memberId}/`,
      method: "PUT",
      query,
      body: movement,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    }),
    /**
     * @description Delete a fleet squad, only empty squads can be deleted --- Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/` Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/` Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
     *
     * @tags Fleets
     * @name DeleteFleetsFleetIdSquadsSquadId
     * @summary Delete fleet squad
     * @request DELETE:/fleets/{fleet_id}/squads/{squad_id}/
     * @secure
     */
    deleteFleetsFleetIdSquadsSquadId: (fleetId, squadId, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/squads/${squadId}/`,
      method: "DELETE",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Rename a fleet squad --- Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/` Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/` Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
     *
     * @tags Fleets
     * @name PutFleetsFleetIdSquadsSquadId
     * @summary Rename fleet squad
     * @request PUT:/fleets/{fleet_id}/squads/{squad_id}/
     * @secure
     */
    putFleetsFleetIdSquadsSquadId: (fleetId, squadId, naming, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/squads/${squadId}/`,
      method: "PUT",
      query,
      body: naming,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    }),
    /**
     * @description Return information about wings in a fleet --- Alternate route: `/dev/fleets/{fleet_id}/wings/` Alternate route: `/legacy/fleets/{fleet_id}/wings/` Alternate route: `/v1/fleets/{fleet_id}/wings/` --- This route is cached for up to 5 seconds
     *
     * @tags Fleets
     * @name GetFleetsFleetIdWings
     * @summary Get fleet wings
     * @request GET:/fleets/{fleet_id}/wings/
     * @secure
     */
    getFleetsFleetIdWings: (fleetId, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/wings/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Create a new wing in a fleet --- Alternate route: `/dev/fleets/{fleet_id}/wings/` Alternate route: `/legacy/fleets/{fleet_id}/wings/` Alternate route: `/v1/fleets/{fleet_id}/wings/`
     *
     * @tags Fleets
     * @name PostFleetsFleetIdWings
     * @summary Create fleet wing
     * @request POST:/fleets/{fleet_id}/wings/
     * @secure
     */
    postFleetsFleetIdWings: (fleetId, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/wings/`,
      method: "POST",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/` Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/` Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
     *
     * @tags Fleets
     * @name DeleteFleetsFleetIdWingsWingId
     * @summary Delete fleet wing
     * @request DELETE:/fleets/{fleet_id}/wings/{wing_id}/
     * @secure
     */
    deleteFleetsFleetIdWingsWingId: (fleetId, wingId, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/wings/${wingId}/`,
      method: "DELETE",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Rename a fleet wing --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/` Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/` Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
     *
     * @tags Fleets
     * @name PutFleetsFleetIdWingsWingId
     * @summary Rename fleet wing
     * @request PUT:/fleets/{fleet_id}/wings/{wing_id}/
     * @secure
     */
    putFleetsFleetIdWingsWingId: (fleetId, wingId, naming, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/wings/${wingId}/`,
      method: "PUT",
      query,
      body: naming,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    }),
    /**
     * @description Create a new squad in a fleet --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/squads/` Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/squads/` Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/squads/`
     *
     * @tags Fleets
     * @name PostFleetsFleetIdWingsWingIdSquads
     * @summary Create fleet squad
     * @request POST:/fleets/{fleet_id}/wings/{wing_id}/squads/
     * @secure
     */
    postFleetsFleetIdWingsWingIdSquads: (fleetId, wingId, query, params = {}) => this.request({
      path: `/fleets/${fleetId}/wings/${wingId}/squads/`,
      method: "POST",
      query,
      secure: true,
      format: "json",
      ...params
    })
  };
  fw = {
    /**
     * @description Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday --- Alternate route: `/dev/fw/leaderboards/` Alternate route: `/legacy/fw/leaderboards/` Alternate route: `/v1/fw/leaderboards/` Alternate route: `/v2/fw/leaderboards/` --- This route expires daily at 11:05
     *
     * @tags Faction Warfare
     * @name GetFwLeaderboards
     * @summary List of the top factions in faction warfare
     * @request GET:/fw/leaderboards/
     */
    getFwLeaderboards: (query, params = {}) => this.request({
      path: `/fw/leaderboards/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday --- Alternate route: `/dev/fw/leaderboards/characters/` Alternate route: `/legacy/fw/leaderboards/characters/` Alternate route: `/v1/fw/leaderboards/characters/` Alternate route: `/v2/fw/leaderboards/characters/` --- This route expires daily at 11:05
     *
     * @tags Faction Warfare
     * @name GetFwLeaderboardsCharacters
     * @summary List of the top pilots in faction warfare
     * @request GET:/fw/leaderboards/characters/
     */
    getFwLeaderboardsCharacters: (query, params = {}) => this.request({
      path: `/fw/leaderboards/characters/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday --- Alternate route: `/dev/fw/leaderboards/corporations/` Alternate route: `/legacy/fw/leaderboards/corporations/` Alternate route: `/v1/fw/leaderboards/corporations/` Alternate route: `/v2/fw/leaderboards/corporations/` --- This route expires daily at 11:05
     *
     * @tags Faction Warfare
     * @name GetFwLeaderboardsCorporations
     * @summary List of the top corporations in faction warfare
     * @request GET:/fw/leaderboards/corporations/
     */
    getFwLeaderboardsCorporations: (query, params = {}) => this.request({
      path: `/fw/leaderboards/corporations/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Statistical overviews of factions involved in faction warfare --- Alternate route: `/dev/fw/stats/` Alternate route: `/legacy/fw/stats/` Alternate route: `/v1/fw/stats/` Alternate route: `/v2/fw/stats/` --- This route expires daily at 11:05
     *
     * @tags Faction Warfare
     * @name GetFwStats
     * @summary An overview of statistics about factions involved in faction warfare
     * @request GET:/fw/stats/
     */
    getFwStats: (query, params = {}) => this.request({
      path: `/fw/stats/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description An overview of the current ownership of faction warfare solar systems --- Alternate route: `/dev/fw/systems/` Alternate route: `/legacy/fw/systems/` Alternate route: `/v2/fw/systems/` Alternate route: `/v3/fw/systems/` --- This route is cached for up to 1800 seconds
     *
     * @tags Faction Warfare
     * @name GetFwSystems
     * @summary Ownership of faction warfare systems
     * @request GET:/fw/systems/
     */
    getFwSystems: (query, params = {}) => this.request({
      path: `/fw/systems/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Data about which NPC factions are at war --- Alternate route: `/dev/fw/wars/` Alternate route: `/legacy/fw/wars/` Alternate route: `/v1/fw/wars/` Alternate route: `/v2/fw/wars/` --- This route expires daily at 11:05
     *
     * @tags Faction Warfare
     * @name GetFwWars
     * @summary Data about which NPC factions are at war
     * @request GET:/fw/wars/
     */
    getFwWars: (query, params = {}) => this.request({
      path: `/fw/wars/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  incursions = {
    /**
     * @description Return a list of current incursions --- Alternate route: `/dev/incursions/` Alternate route: `/legacy/incursions/` Alternate route: `/v1/incursions/` --- This route is cached for up to 300 seconds
     *
     * @tags Incursions
     * @name GetIncursions
     * @summary List incursions
     * @request GET:/incursions/
     */
    getIncursions: (query, params = {}) => this.request({
      path: `/incursions/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  industry = {
    /**
     * @description Return a list of industry facilities --- Alternate route: `/dev/industry/facilities/` Alternate route: `/legacy/industry/facilities/` Alternate route: `/v1/industry/facilities/` --- This route is cached for up to 3600 seconds
     *
     * @tags Industry
     * @name GetIndustryFacilities
     * @summary List industry facilities
     * @request GET:/industry/facilities/
     */
    getIndustryFacilities: (query, params = {}) => this.request({
      path: `/industry/facilities/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return cost indices for solar systems --- Alternate route: `/dev/industry/systems/` Alternate route: `/legacy/industry/systems/` Alternate route: `/v1/industry/systems/` --- This route is cached for up to 3600 seconds
     *
     * @tags Industry
     * @name GetIndustrySystems
     * @summary List solar system cost indices
     * @request GET:/industry/systems/
     */
    getIndustrySystems: (query, params = {}) => this.request({
      path: `/industry/systems/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  insurance = {
    /**
     * @description Return available insurance levels for all ship types --- Alternate route: `/dev/insurance/prices/` Alternate route: `/legacy/insurance/prices/` Alternate route: `/v1/insurance/prices/` --- This route is cached for up to 3600 seconds
     *
     * @tags Insurance
     * @name GetInsurancePrices
     * @summary List insurance levels
     * @request GET:/insurance/prices/
     */
    getInsurancePrices: (query, params = {}) => this.request({
      path: `/insurance/prices/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  killmails = {
    /**
     * @description Return a single killmail from its ID and hash --- Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/` Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/` Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/` --- This route is cached for up to 30758400 seconds
     *
     * @tags Killmails
     * @name GetKillmailsKillmailIdKillmailHash
     * @summary Get a single killmail
     * @request GET:/killmails/{killmail_id}/{killmail_hash}/
     */
    getKillmailsKillmailIdKillmailHash: (killmailHash, killmailId, query, params = {}) => this.request({
      path: `/killmails/${killmailId}/${killmailHash}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  loyalty = {
    /**
     * @description Return a list of offers from a specific corporation's loyalty store --- Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/` Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/` Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/` --- This route expires daily at 11:05
     *
     * @tags Loyalty
     * @name GetLoyaltyStoresCorporationIdOffers
     * @summary List loyalty store offers
     * @request GET:/loyalty/stores/{corporation_id}/offers/
     */
    getLoyaltyStoresCorporationIdOffers: (corporationId, query, params = {}) => this.request({
      path: `/loyalty/stores/${corporationId}/offers/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  markets = {
    /**
     * @description Get a list of item groups --- Alternate route: `/dev/markets/groups/` Alternate route: `/legacy/markets/groups/` Alternate route: `/v1/markets/groups/` --- This route expires daily at 11:05
     *
     * @tags Market
     * @name GetMarketsGroups
     * @summary Get item groups
     * @request GET:/markets/groups/
     */
    getMarketsGroups: (query, params = {}) => this.request({
      path: `/markets/groups/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on an item group --- Alternate route: `/dev/markets/groups/{market_group_id}/` Alternate route: `/legacy/markets/groups/{market_group_id}/` Alternate route: `/v1/markets/groups/{market_group_id}/` --- This route expires daily at 11:05
     *
     * @tags Market
     * @name GetMarketsGroupsMarketGroupId
     * @summary Get item group information
     * @request GET:/markets/groups/{market_group_id}/
     */
    getMarketsGroupsMarketGroupId: (marketGroupId, query, params = {}) => this.request({
      path: `/markets/groups/${marketGroupId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of prices --- Alternate route: `/dev/markets/prices/` Alternate route: `/legacy/markets/prices/` Alternate route: `/v1/markets/prices/` --- This route is cached for up to 3600 seconds
     *
     * @tags Market
     * @name GetMarketsPrices
     * @summary List market prices
     * @request GET:/markets/prices/
     */
    getMarketsPrices: (query, params = {}) => this.request({
      path: `/markets/prices/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return all orders in a structure --- Alternate route: `/dev/markets/structures/{structure_id}/` Alternate route: `/legacy/markets/structures/{structure_id}/` Alternate route: `/v1/markets/structures/{structure_id}/` --- This route is cached for up to 300 seconds
     *
     * @tags Market
     * @name GetMarketsStructuresStructureId
     * @summary List orders in a structure
     * @request GET:/markets/structures/{structure_id}/
     * @secure
     */
    getMarketsStructuresStructureId: (structureId, query, params = {}) => this.request({
      path: `/markets/structures/${structureId}/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of historical market statistics for the specified type in a region --- Alternate route: `/dev/markets/{region_id}/history/` Alternate route: `/legacy/markets/{region_id}/history/` Alternate route: `/v1/markets/{region_id}/history/` --- This route expires daily at 11:05
     *
     * @tags Market
     * @name GetMarketsRegionIdHistory
     * @summary List historical market statistics in a region
     * @request GET:/markets/{region_id}/history/
     */
    getMarketsRegionIdHistory: (regionId, query, params = {}) => this.request({
      path: `/markets/${regionId}/history/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of orders in a region --- Alternate route: `/dev/markets/{region_id}/orders/` Alternate route: `/legacy/markets/{region_id}/orders/` Alternate route: `/v1/markets/{region_id}/orders/` --- This route is cached for up to 300 seconds
     *
     * @tags Market
     * @name GetMarketsRegionIdOrders
     * @summary List orders in a region
     * @request GET:/markets/{region_id}/orders/
     */
    getMarketsRegionIdOrders: (regionId, query, params = {}) => this.request({
      path: `/markets/${regionId}/orders/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of type IDs that have active orders in the region, for efficient market indexing. --- Alternate route: `/dev/markets/{region_id}/types/` Alternate route: `/legacy/markets/{region_id}/types/` Alternate route: `/v1/markets/{region_id}/types/` --- This route is cached for up to 600 seconds
     *
     * @tags Market
     * @name GetMarketsRegionIdTypes
     * @summary List type IDs relevant to a market
     * @request GET:/markets/{region_id}/types/
     */
    getMarketsRegionIdTypes: (regionId, query, params = {}) => this.request({
      path: `/markets/${regionId}/types/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  route = {
    /**
     * @description Get the systems between origin and destination --- Alternate route: `/dev/route/{origin}/{destination}/` Alternate route: `/legacy/route/{origin}/{destination}/` Alternate route: `/v1/route/{origin}/{destination}/` --- This route is cached for up to 86400 seconds
     *
     * @tags Routes
     * @name GetRouteOriginDestination
     * @summary Get route
     * @request GET:/route/{origin}/{destination}/
     */
    getRouteOriginDestination: (destination, origin2, query, params = {}) => this.request({
      path: `/route/${origin2}/${destination}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  sovereignty = {
    /**
     * @description Shows sovereignty data for campaigns. --- Alternate route: `/dev/sovereignty/campaigns/` Alternate route: `/legacy/sovereignty/campaigns/` Alternate route: `/v1/sovereignty/campaigns/` --- This route is cached for up to 5 seconds
     *
     * @tags Sovereignty
     * @name GetSovereigntyCampaigns
     * @summary List sovereignty campaigns
     * @request GET:/sovereignty/campaigns/
     */
    getSovereigntyCampaigns: (query, params = {}) => this.request({
      path: `/sovereignty/campaigns/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Shows sovereignty information for solar systems --- Alternate route: `/dev/sovereignty/map/` Alternate route: `/legacy/sovereignty/map/` Alternate route: `/v1/sovereignty/map/` --- This route is cached for up to 3600 seconds
     *
     * @tags Sovereignty
     * @name GetSovereigntyMap
     * @summary List sovereignty of systems
     * @request GET:/sovereignty/map/
     */
    getSovereigntyMap: (query, params = {}) => this.request({
      path: `/sovereignty/map/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Shows sovereignty data for structures. --- Alternate route: `/dev/sovereignty/structures/` Alternate route: `/legacy/sovereignty/structures/` Alternate route: `/v1/sovereignty/structures/` --- This route is cached for up to 120 seconds
     *
     * @tags Sovereignty
     * @name GetSovereigntyStructures
     * @summary List sovereignty structures
     * @request GET:/sovereignty/structures/
     */
    getSovereigntyStructures: (query, params = {}) => this.request({
      path: `/sovereignty/structures/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  status = {
    /**
     * @description EVE Server status --- Alternate route: `/dev/status/` Alternate route: `/legacy/status/` Alternate route: `/v1/status/` Alternate route: `/v2/status/` --- This route is cached for up to 30 seconds
     *
     * @tags Status
     * @name GetStatus
     * @summary Retrieve the uptime and player counts
     * @request GET:/status/
     */
    getStatus: (query, params = {}) => this.request({
      path: `/status/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  ui = {
    /**
     * @description Set a solar system as autopilot waypoint --- Alternate route: `/dev/ui/autopilot/waypoint/` Alternate route: `/legacy/ui/autopilot/waypoint/` Alternate route: `/v2/ui/autopilot/waypoint/`
     *
     * @tags User Interface
     * @name PostUiAutopilotWaypoint
     * @summary Set Autopilot Waypoint
     * @request POST:/ui/autopilot/waypoint/
     * @secure
     */
    postUiAutopilotWaypoint: (query, params = {}) => this.request({
      path: `/ui/autopilot/waypoint/`,
      method: "POST",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Open the contract window inside the client --- Alternate route: `/dev/ui/openwindow/contract/` Alternate route: `/legacy/ui/openwindow/contract/` Alternate route: `/v1/ui/openwindow/contract/`
     *
     * @tags User Interface
     * @name PostUiOpenwindowContract
     * @summary Open Contract Window
     * @request POST:/ui/openwindow/contract/
     * @secure
     */
    postUiOpenwindowContract: (query, params = {}) => this.request({
      path: `/ui/openwindow/contract/`,
      method: "POST",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Open the information window for a character, corporation or alliance inside the client --- Alternate route: `/dev/ui/openwindow/information/` Alternate route: `/legacy/ui/openwindow/information/` Alternate route: `/v1/ui/openwindow/information/`
     *
     * @tags User Interface
     * @name PostUiOpenwindowInformation
     * @summary Open Information Window
     * @request POST:/ui/openwindow/information/
     * @secure
     */
    postUiOpenwindowInformation: (query, params = {}) => this.request({
      path: `/ui/openwindow/information/`,
      method: "POST",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Open the market details window for a specific typeID inside the client --- Alternate route: `/dev/ui/openwindow/marketdetails/` Alternate route: `/legacy/ui/openwindow/marketdetails/` Alternate route: `/v1/ui/openwindow/marketdetails/`
     *
     * @tags User Interface
     * @name PostUiOpenwindowMarketdetails
     * @summary Open Market Details
     * @request POST:/ui/openwindow/marketdetails/
     * @secure
     */
    postUiOpenwindowMarketdetails: (query, params = {}) => this.request({
      path: `/ui/openwindow/marketdetails/`,
      method: "POST",
      query,
      secure: true,
      ...params
    }),
    /**
     * @description Open the New Mail window, according to settings from the request if applicable --- Alternate route: `/dev/ui/openwindow/newmail/` Alternate route: `/legacy/ui/openwindow/newmail/` Alternate route: `/v1/ui/openwindow/newmail/`
     *
     * @tags User Interface
     * @name PostUiOpenwindowNewmail
     * @summary Open New Mail Window
     * @request POST:/ui/openwindow/newmail/
     * @secure
     */
    postUiOpenwindowNewmail: (new_mail, query, params = {}) => this.request({
      path: `/ui/openwindow/newmail/`,
      method: "POST",
      query,
      body: new_mail,
      secure: true,
      type: "application/json" /* Json */,
      ...params
    })
  };
  universe = {
    /**
     * @description Get all character ancestries --- Alternate route: `/legacy/universe/ancestries/` Alternate route: `/v1/universe/ancestries/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseAncestries
     * @summary Get ancestries
     * @request GET:/universe/ancestries/
     */
    getUniverseAncestries: (query, params = {}) => this.request({
      path: `/universe/ancestries/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on an asteroid belt --- Alternate route: `/legacy/universe/asteroid_belts/{asteroid_belt_id}/` Alternate route: `/v1/universe/asteroid_belts/{asteroid_belt_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseAsteroidBeltsAsteroidBeltId
     * @summary Get asteroid belt information
     * @request GET:/universe/asteroid_belts/{asteroid_belt_id}/
     */
    getUniverseAsteroidBeltsAsteroidBeltId: (asteroidBeltId, query, params = {}) => this.request({
      path: `/universe/asteroid_belts/${asteroidBeltId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of bloodlines --- Alternate route: `/legacy/universe/bloodlines/` Alternate route: `/v1/universe/bloodlines/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseBloodlines
     * @summary Get bloodlines
     * @request GET:/universe/bloodlines/
     */
    getUniverseBloodlines: (query, params = {}) => this.request({
      path: `/universe/bloodlines/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of item categories --- Alternate route: `/legacy/universe/categories/` Alternate route: `/v1/universe/categories/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseCategories
     * @summary Get item categories
     * @request GET:/universe/categories/
     */
    getUniverseCategories: (query, params = {}) => this.request({
      path: `/universe/categories/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information of an item category --- Alternate route: `/legacy/universe/categories/{category_id}/` Alternate route: `/v1/universe/categories/{category_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseCategoriesCategoryId
     * @summary Get item category information
     * @request GET:/universe/categories/{category_id}/
     */
    getUniverseCategoriesCategoryId: (categoryId, query, params = {}) => this.request({
      path: `/universe/categories/${categoryId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of constellations --- Alternate route: `/legacy/universe/constellations/` Alternate route: `/v1/universe/constellations/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseConstellations
     * @summary Get constellations
     * @request GET:/universe/constellations/
     */
    getUniverseConstellations: (query, params = {}) => this.request({
      path: `/universe/constellations/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a constellation --- Alternate route: `/legacy/universe/constellations/{constellation_id}/` Alternate route: `/v1/universe/constellations/{constellation_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseConstellationsConstellationId
     * @summary Get constellation information
     * @request GET:/universe/constellations/{constellation_id}/
     */
    getUniverseConstellationsConstellationId: (constellationId, query, params = {}) => this.request({
      path: `/universe/constellations/${constellationId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of factions --- Alternate route: `/dev/universe/factions/` Alternate route: `/v2/universe/factions/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseFactions
     * @summary Get factions
     * @request GET:/universe/factions/
     */
    getUniverseFactions: (query, params = {}) => this.request({
      path: `/universe/factions/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of graphics --- Alternate route: `/legacy/universe/graphics/` Alternate route: `/v1/universe/graphics/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseGraphics
     * @summary Get graphics
     * @request GET:/universe/graphics/
     */
    getUniverseGraphics: (query, params = {}) => this.request({
      path: `/universe/graphics/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a graphic --- Alternate route: `/dev/universe/graphics/{graphic_id}/` Alternate route: `/legacy/universe/graphics/{graphic_id}/` Alternate route: `/v1/universe/graphics/{graphic_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseGraphicsGraphicId
     * @summary Get graphic information
     * @request GET:/universe/graphics/{graphic_id}/
     */
    getUniverseGraphicsGraphicId: (graphicId, query, params = {}) => this.request({
      path: `/universe/graphics/${graphicId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of item groups --- Alternate route: `/legacy/universe/groups/` Alternate route: `/v1/universe/groups/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseGroups
     * @summary Get item groups
     * @request GET:/universe/groups/
     */
    getUniverseGroups: (query, params = {}) => this.request({
      path: `/universe/groups/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on an item group --- Alternate route: `/dev/universe/groups/{group_id}/` Alternate route: `/legacy/universe/groups/{group_id}/` Alternate route: `/v1/universe/groups/{group_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseGroupsGroupId
     * @summary Get item group information
     * @request GET:/universe/groups/{group_id}/
     */
    getUniverseGroupsGroupId: (groupId, query, params = {}) => this.request({
      path: `/universe/groups/${groupId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours --- Alternate route: `/dev/universe/ids/` Alternate route: `/legacy/universe/ids/` Alternate route: `/v1/universe/ids/`
     *
     * @tags Universe
     * @name PostUniverseIds
     * @summary Bulk names to IDs
     * @request POST:/universe/ids/
     */
    postUniverseIds: (names, query, params = {}) => this.request({
      path: `/universe/ids/`,
      method: "POST",
      query,
      body: names,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a moon --- Alternate route: `/legacy/universe/moons/{moon_id}/` Alternate route: `/v1/universe/moons/{moon_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseMoonsMoonId
     * @summary Get moon information
     * @request GET:/universe/moons/{moon_id}/
     */
    getUniverseMoonsMoonId: (moonId, query, params = {}) => this.request({
      path: `/universe/moons/${moonId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions --- Alternate route: `/dev/universe/names/` Alternate route: `/legacy/universe/names/` Alternate route: `/v2/universe/names/` Alternate route: `/v3/universe/names/`
     *
     * @tags Universe
     * @name PostUniverseNames
     * @summary Get names and categories for a set of IDs
     * @request POST:/universe/names/
     */
    postUniverseNames: (ids, query, params = {}) => this.request({
      path: `/universe/names/`,
      method: "POST",
      query,
      body: ids,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a planet --- Alternate route: `/legacy/universe/planets/{planet_id}/` Alternate route: `/v1/universe/planets/{planet_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniversePlanetsPlanetId
     * @summary Get planet information
     * @request GET:/universe/planets/{planet_id}/
     */
    getUniversePlanetsPlanetId: (planetId, query, params = {}) => this.request({
      path: `/universe/planets/${planetId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of character races --- Alternate route: `/dev/universe/races/` Alternate route: `/legacy/universe/races/` Alternate route: `/v1/universe/races/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseRaces
     * @summary Get character races
     * @request GET:/universe/races/
     */
    getUniverseRaces: (query, params = {}) => this.request({
      path: `/universe/races/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of regions --- Alternate route: `/legacy/universe/regions/` Alternate route: `/v1/universe/regions/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseRegions
     * @summary Get regions
     * @request GET:/universe/regions/
     */
    getUniverseRegions: (query, params = {}) => this.request({
      path: `/universe/regions/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a region --- Alternate route: `/legacy/universe/regions/{region_id}/` Alternate route: `/v1/universe/regions/{region_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseRegionsRegionId
     * @summary Get region information
     * @request GET:/universe/regions/{region_id}/
     */
    getUniverseRegionsRegionId: (regionId, query, params = {}) => this.request({
      path: `/universe/regions/${regionId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a planetary factory schematic --- Alternate route: `/dev/universe/schematics/{schematic_id}/` Alternate route: `/legacy/universe/schematics/{schematic_id}/` Alternate route: `/v1/universe/schematics/{schematic_id}/` --- This route is cached for up to 3600 seconds
     *
     * @tags Planetary Interaction
     * @name GetUniverseSchematicsSchematicId
     * @summary Get schematic information
     * @request GET:/universe/schematics/{schematic_id}/
     */
    getUniverseSchematicsSchematicId: (schematicId, query, params = {}) => this.request({
      path: `/universe/schematics/${schematicId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a stargate --- Alternate route: `/legacy/universe/stargates/{stargate_id}/` Alternate route: `/v1/universe/stargates/{stargate_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseStargatesStargateId
     * @summary Get stargate information
     * @request GET:/universe/stargates/{stargate_id}/
     */
    getUniverseStargatesStargateId: (stargateId, query, params = {}) => this.request({
      path: `/universe/stargates/${stargateId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a star --- Alternate route: `/legacy/universe/stars/{star_id}/` Alternate route: `/v1/universe/stars/{star_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseStarsStarId
     * @summary Get star information
     * @request GET:/universe/stars/{star_id}/
     */
    getUniverseStarsStarId: (starId, query, params = {}) => this.request({
      path: `/universe/stars/${starId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a station --- Alternate route: `/dev/universe/stations/{station_id}/` Alternate route: `/v2/universe/stations/{station_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseStationsStationId
     * @summary Get station information
     * @request GET:/universe/stations/{station_id}/
     */
    getUniverseStationsStationId: (stationId, query, params = {}) => this.request({
      path: `/universe/stations/${stationId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description List all public structures --- Alternate route: `/dev/universe/structures/` Alternate route: `/legacy/universe/structures/` Alternate route: `/v1/universe/structures/` --- This route is cached for up to 3600 seconds
     *
     * @tags Universe
     * @name GetUniverseStructures
     * @summary List all public structures
     * @request GET:/universe/structures/
     */
    getUniverseStructures: (query, params = {}) => this.request({
      path: `/universe/structures/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs. --- Alternate route: `/legacy/universe/structures/{structure_id}/` Alternate route: `/v1/universe/structures/{structure_id}/` Alternate route: `/v2/universe/structures/{structure_id}/` --- This route is cached for up to 3600 seconds
     *
     * @tags Universe
     * @name GetUniverseStructuresStructureId
     * @summary Get structure information
     * @request GET:/universe/structures/{structure_id}/
     * @secure
     */
    getUniverseStructuresStructureId: (structureId, query, params = {}) => this.request({
      path: `/universe/structures/${structureId}/`,
      method: "GET",
      query,
      secure: true,
      format: "json",
      ...params
    }),
    /**
     * @description Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed --- Alternate route: `/legacy/universe/system_jumps/` Alternate route: `/v1/universe/system_jumps/` --- This route is cached for up to 3600 seconds
     *
     * @tags Universe
     * @name GetUniverseSystemJumps
     * @summary Get system jumps
     * @request GET:/universe/system_jumps/
     */
    getUniverseSystemJumps: (query, params = {}) => this.request({
      path: `/universe/system_jumps/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed --- Alternate route: `/v2/universe/system_kills/` --- This route is cached for up to 3600 seconds
     *
     * @tags Universe
     * @name GetUniverseSystemKills
     * @summary Get system kills
     * @request GET:/universe/system_kills/
     */
    getUniverseSystemKills: (query, params = {}) => this.request({
      path: `/universe/system_kills/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of solar systems --- Alternate route: `/dev/universe/systems/` Alternate route: `/legacy/universe/systems/` Alternate route: `/v1/universe/systems/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseSystems
     * @summary Get solar systems
     * @request GET:/universe/systems/
     */
    getUniverseSystems: (query, params = {}) => this.request({
      path: `/universe/systems/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a solar system. --- Alternate route: `/dev/universe/systems/{system_id}/` Alternate route: `/v4/universe/systems/{system_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseSystemsSystemId
     * @summary Get solar system information
     * @request GET:/universe/systems/{system_id}/
     */
    getUniverseSystemsSystemId: (systemId, query, params = {}) => this.request({
      path: `/universe/systems/${systemId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get a list of type ids --- Alternate route: `/legacy/universe/types/` Alternate route: `/v1/universe/types/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseTypes
     * @summary Get types
     * @request GET:/universe/types/
     */
    getUniverseTypes: (query, params = {}) => this.request({
      path: `/universe/types/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Get information on a type --- Alternate route: `/dev/universe/types/{type_id}/` Alternate route: `/legacy/universe/types/{type_id}/` Alternate route: `/v2/universe/types/{type_id}/` Alternate route: `/v3/universe/types/{type_id}/` --- This route expires daily at 11:05
     *
     * @tags Universe
     * @name GetUniverseTypesTypeId
     * @summary Get type information
     * @request GET:/universe/types/{type_id}/
     */
    getUniverseTypesTypeId: (typeId, query, params = {}) => this.request({
      path: `/universe/types/${typeId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
  wars = {
    /**
     * @description Return a list of wars --- Alternate route: `/dev/wars/` Alternate route: `/legacy/wars/` Alternate route: `/v1/wars/` --- This route is cached for up to 3600 seconds
     *
     * @tags Wars
     * @name GetWars
     * @summary List wars
     * @request GET:/wars/
     */
    getWars: (query, params = {}) => this.request({
      path: `/wars/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return details about a war --- Alternate route: `/dev/wars/{war_id}/` Alternate route: `/legacy/wars/{war_id}/` Alternate route: `/v1/wars/{war_id}/` --- This route is cached for up to 3600 seconds
     *
     * @tags Wars
     * @name GetWarsWarId
     * @summary Get war information
     * @request GET:/wars/{war_id}/
     */
    getWarsWarId: (warId, query, params = {}) => this.request({
      path: `/wars/${warId}/`,
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * @description Return a list of kills related to a war --- Alternate route: `/dev/wars/{war_id}/killmails/` Alternate route: `/legacy/wars/{war_id}/killmails/` Alternate route: `/v1/wars/{war_id}/killmails/` --- This route is cached for up to 3600 seconds
     *
     * @tags Wars
     * @name GetWarsWarIdKillmails
     * @summary List kills for a war
     * @request GET:/wars/{war_id}/killmails/
     */
    getWarsWarIdKillmails: (warId, query, params = {}) => this.request({
      path: `/wars/${warId}/killmails/`,
      method: "GET",
      query,
      format: "json",
      ...params
    })
  };
};
export {
  Api,
  ContentType,
  HttpClient
};
