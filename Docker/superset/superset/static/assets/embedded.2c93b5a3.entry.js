/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/superset-ui-switchboard/src/index.ts":
/*!*******************************************************!*\
  !*** ./packages/superset-ui-switchboard/src/index.ts ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _switchboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchboard */ \"./packages/superset-ui-switchboard/src/switchboard.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */ \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_switchboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9zdXBlcnNldC11aS1zd2l0Y2hib2FyZC9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFJQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJzZXQvLi9wYWNrYWdlcy9zdXBlcnNldC11aS1zd2l0Y2hib2FyZC9zcmMvaW5kZXgudHM/MmVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IFN3aXRjaGJvYXJkIGZyb20gJy4vc3dpdGNoYm9hcmQnO1xuXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaGJvYXJkJztcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGJvYXJkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/superset-ui-switchboard/src/index.ts\n\n}");

/***/ }),

/***/ "./packages/superset-ui-switchboard/src/switchboard.ts":
/*!*************************************************************!*\
  !*** ./packages/superset-ui-switchboard/src/switchboard.ts ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* unused harmony export Switchboard */\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _async_to_generator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n// Each message we send on the channel specifies an action we want the other side to cooperate with.\nvar Actions = /*#__PURE__*/ function(Actions) {\n    Actions[\"GET\"] = \"get\";\n    Actions[\"REPLY\"] = \"reply\";\n    Actions[\"EMIT\"] = \"emit\";\n    Actions[\"ERROR\"] = \"error\";\n    return Actions;\n}(Actions || {});\nfunction isGet(message) {\n    return message.switchboardAction === \"get\";\n}\nfunction isReply(message) {\n    return message.switchboardAction === \"reply\";\n}\nfunction isEmit(message) {\n    return message.switchboardAction === \"emit\";\n}\nfunction isError(message) {\n    return message.switchboardAction === \"error\";\n}\n/**\n * A utility for communications between an iframe and its parent, used by the Superset embedded SDK.\n * This builds useful patterns on top of the basic functionality offered by MessageChannel.\n *\n * Both windows instantiate a Switchboard, passing in their MessagePorts.\n * Calling methods on the switchboard causes messages to be sent through the channel.\n */ class Switchboard {\n    init(params) {\n        if (this.isInitialised) {\n            this.logError('already initialized');\n            return;\n        }\n        const { port, name = 'switchboard', debug = false } = params;\n        this.port = port;\n        this.name = name;\n        this.debugMode = debug;\n        port.addEventListener('message', (event)=>_async_to_generator(function*() {\n                this.log('message received', event);\n                const message = event.data;\n                if (isGet(message)) {\n                    // find the method, call it, and reply with the result\n                    this.port.postMessage((yield this.getMethodResult(message)));\n                } else if (isEmit(message)) {\n                    const { method, args } = message;\n                    // Find the method and call it, but no result necessary.\n                    // Should this multicast to a set of listeners?\n                    // Maybe, but that requires writing a bunch more code\n                    // and I haven't found a need for it yet.\n                    const executor = this.methods[method];\n                    if (executor) {\n                        executor(args);\n                    }\n                }\n            }).call(this));\n        this.isInitialised = true;\n    }\n    getMethodResult() {\n        return _async_to_generator(function*({ messageId, method, args }) {\n            const executor = this.methods[method];\n            if (executor == null) {\n                return {\n                    switchboardAction: \"error\",\n                    messageId,\n                    error: `[${this.name}] Method \"${method}\" is not defined`\n                };\n            }\n            try {\n                const result = yield executor(args);\n                return {\n                    switchboardAction: \"reply\",\n                    messageId,\n                    result\n                };\n            } catch (err) {\n                this.logError(err);\n                return {\n                    switchboardAction: \"error\",\n                    messageId,\n                    error: `[${this.name}] Method \"${method}\" threw an error`\n                };\n            }\n        }).apply(this, arguments);\n    }\n    /**\n   * Defines a method that can be \"called\" from the other side by sending an event.\n   */ defineMethod(methodName, executor) {\n        this.methods[methodName] = executor;\n    }\n    /**\n   * Calls a method registered on the other side, and returns the result.\n   *\n   * How this is accomplished:\n   * This switchboard sends a \"get\" message over the channel describing which method to call with which arguments.\n   * The other side's switchboard finds a method with that name, and calls it with the arguments.\n   * It then packages up the returned value into a \"reply\" message, sending it back to us across the channel.\n   * This switchboard has attached a listener on the channel, which will resolve with the result when a reply is detected.\n   *\n   * Instead of an arguments list, arguments are supplied as a map.\n   *\n   * @param method the name of the method to call\n   * @param args arguments that will be supplied. Must be serializable, no functions or other nonsense.\n   * @returns whatever is returned from the method\n   */ get(method, args = undefined) {\n        return new Promise((resolve, reject)=>{\n            if (!this.isInitialised) {\n                reject(new Error('Switchboard not initialised'));\n                return;\n            }\n            // In order to \"call a method\" on the other side of the port,\n            // we will send a message with a unique id\n            const messageId = this.getNewMessageId();\n            // attach a new listener to our port, and remove it when we get a response\n            const listener = (event)=>{\n                const message = event.data;\n                if (message.messageId !== messageId) return;\n                this.port.removeEventListener('message', listener);\n                if (isReply(message)) {\n                    resolve(message.result);\n                } else {\n                    const errStr = isError(message) ? message.error : 'Unexpected response message';\n                    reject(new Error(errStr));\n                }\n            };\n            this.port.addEventListener('message', listener);\n            this.port.start();\n            const message = {\n                switchboardAction: \"get\",\n                method,\n                messageId,\n                args\n            };\n            this.port.postMessage(message);\n        });\n    }\n    /**\n   * Emit calls a method on the other side just like get does.\n   * But emit doesn't wait for a response, it just sends and forgets.\n   *\n   * @param method\n   * @param args\n   */ emit(method, args = undefined) {\n        if (!this.isInitialised) {\n            this.logError('Switchboard not initialised');\n            return;\n        }\n        const message = {\n            switchboardAction: \"emit\",\n            method,\n            args\n        };\n        this.port.postMessage(message);\n    }\n    start() {\n        if (!this.isInitialised) {\n            this.logError('Switchboard not initialised');\n            return;\n        }\n        this.port.start();\n    }\n    log(...args) {\n        if (this.debugMode) {\n            console.debug(`[${this.name}]`, ...args);\n        }\n    }\n    logError(...args) {\n        console.error(`[${this.name}]`, ...args);\n    }\n    getNewMessageId() {\n        // eslint-disable-next-line no-plusplus\n        return `m_${this.name}_${this.incrementor++}`;\n    }\n    constructor(params){\n        this.name = '';\n        this.methods = {};\n        // used to make unique ids\n        this.incrementor = 1;\n        if (!params) {\n            return;\n        }\n        this.init(params);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Switchboard());\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9zdXBlcnNldC11aS1zd2l0Y2hib2FyZC9zcmMvc3dpdGNoYm9hcmQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBc0JBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUtBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBNUtBO0FBWEE7QUFFQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBd0tBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnNldC8uL3BhY2thZ2VzL3N1cGVyc2V0LXVpLXN3aXRjaGJvYXJkL3NyYy9zd2l0Y2hib2FyZC50cz9hMjU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgdHlwZSBQYXJhbXMgPSB7XG4gIHBvcnQ6IE1lc3NhZ2VQb3J0O1xuICBuYW1lPzogc3RyaW5nO1xuICBkZWJ1Zz86IGJvb2xlYW47XG59O1xuXG4vLyBFYWNoIG1lc3NhZ2Ugd2Ugc2VuZCBvbiB0aGUgY2hhbm5lbCBzcGVjaWZpZXMgYW4gYWN0aW9uIHdlIHdhbnQgdGhlIG90aGVyIHNpZGUgdG8gY29vcGVyYXRlIHdpdGguXG5lbnVtIEFjdGlvbnMge1xuICBHRVQgPSAnZ2V0JyxcbiAgUkVQTFkgPSAncmVwbHknLFxuICBFTUlUID0gJ2VtaXQnLFxuICBFUlJPUiA9ICdlcnJvcicsXG59XG5cbnR5cGUgTWV0aG9kPEEgZXh0ZW5kcyB7fSwgUj4gPSAoYXJnczogQSkgPT4gUiB8IFByb21pc2U8Uj47XG5cbi8vIGhlbHBlciB0eXBlcy9mdW5jdGlvbnMgZm9yIG1ha2luZyBzdXJlIHdpcmVzIGRvbid0IGdldCBjcm9zc2VkXG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgc3dpdGNoYm9hcmRBY3Rpb246IEFjdGlvbnM7XG59XG5cbmludGVyZmFjZSBHZXRNZXNzYWdlPFQgPSBhbnk+IGV4dGVuZHMgTWVzc2FnZSB7XG4gIHN3aXRjaGJvYXJkQWN0aW9uOiBBY3Rpb25zLkdFVDtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIG1lc3NhZ2VJZDogc3RyaW5nO1xuICBhcmdzOiBUO1xufVxuXG5mdW5jdGlvbiBpc0dldChtZXNzYWdlOiBNZXNzYWdlKTogbWVzc2FnZSBpcyBHZXRNZXNzYWdlIHtcbiAgcmV0dXJuIG1lc3NhZ2Uuc3dpdGNoYm9hcmRBY3Rpb24gPT09IEFjdGlvbnMuR0VUO1xufVxuXG5pbnRlcmZhY2UgUmVwbHlNZXNzYWdlPFQgPSBhbnk+IGV4dGVuZHMgTWVzc2FnZSB7XG4gIHN3aXRjaGJvYXJkQWN0aW9uOiBBY3Rpb25zLlJFUExZO1xuICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgcmVzdWx0OiBUO1xufVxuXG5mdW5jdGlvbiBpc1JlcGx5KG1lc3NhZ2U6IE1lc3NhZ2UpOiBtZXNzYWdlIGlzIFJlcGx5TWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlLnN3aXRjaGJvYXJkQWN0aW9uID09PSBBY3Rpb25zLlJFUExZO1xufVxuXG5pbnRlcmZhY2UgRW1pdE1lc3NhZ2U8VCA9IGFueT4gZXh0ZW5kcyBNZXNzYWdlIHtcbiAgc3dpdGNoYm9hcmRBY3Rpb246IEFjdGlvbnMuRU1JVDtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIGFyZ3M6IFQ7XG59XG5cbmZ1bmN0aW9uIGlzRW1pdChtZXNzYWdlOiBNZXNzYWdlKTogbWVzc2FnZSBpcyBFbWl0TWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlLnN3aXRjaGJvYXJkQWN0aW9uID09PSBBY3Rpb25zLkVNSVQ7XG59XG5cbmludGVyZmFjZSBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgc3dpdGNoYm9hcmRBY3Rpb246IEFjdGlvbnMuRVJST1I7XG4gIG1lc3NhZ2VJZDogc3RyaW5nO1xuICBlcnJvcjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKG1lc3NhZ2U6IE1lc3NhZ2UpOiBtZXNzYWdlIGlzIEVycm9yTWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlLnN3aXRjaGJvYXJkQWN0aW9uID09PSBBY3Rpb25zLkVSUk9SO1xufVxuXG4vKipcbiAqIEEgdXRpbGl0eSBmb3IgY29tbXVuaWNhdGlvbnMgYmV0d2VlbiBhbiBpZnJhbWUgYW5kIGl0cyBwYXJlbnQsIHVzZWQgYnkgdGhlIFN1cGVyc2V0IGVtYmVkZGVkIFNESy5cbiAqIFRoaXMgYnVpbGRzIHVzZWZ1bCBwYXR0ZXJucyBvbiB0b3Agb2YgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdHkgb2ZmZXJlZCBieSBNZXNzYWdlQ2hhbm5lbC5cbiAqXG4gKiBCb3RoIHdpbmRvd3MgaW5zdGFudGlhdGUgYSBTd2l0Y2hib2FyZCwgcGFzc2luZyBpbiB0aGVpciBNZXNzYWdlUG9ydHMuXG4gKiBDYWxsaW5nIG1ldGhvZHMgb24gdGhlIHN3aXRjaGJvYXJkIGNhdXNlcyBtZXNzYWdlcyB0byBiZSBzZW50IHRocm91Z2ggdGhlIGNoYW5uZWwuXG4gKi9cbmV4cG9ydCBjbGFzcyBTd2l0Y2hib2FyZCB7XG4gIHBvcnQ6IE1lc3NhZ2VQb3J0O1xuXG4gIG5hbWUgPSAnJztcblxuICBtZXRob2RzOiBSZWNvcmQ8c3RyaW5nLCBNZXRob2Q8YW55LCB1bmtub3duPj4gPSB7fTtcblxuICAvLyB1c2VkIHRvIG1ha2UgdW5pcXVlIGlkc1xuICBpbmNyZW1lbnRvciA9IDE7XG5cbiAgZGVidWdNb2RlOiBib29sZWFuO1xuXG4gIHByaXZhdGUgaXNJbml0aWFsaXNlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBQYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXQocGFyYW1zKTtcbiAgfVxuXG4gIGluaXQocGFyYW1zOiBQYXJhbXMpIHtcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpc2VkKSB7XG4gICAgICB0aGlzLmxvZ0Vycm9yKCdhbHJlYWR5IGluaXRpYWxpemVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBwb3J0LCBuYW1lID0gJ3N3aXRjaGJvYXJkJywgZGVidWcgPSBmYWxzZSB9ID0gcGFyYW1zO1xuXG4gICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVidWdNb2RlID0gZGVidWc7XG5cbiAgICBwb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBhc3luYyBldmVudCA9PiB7XG4gICAgICB0aGlzLmxvZygnbWVzc2FnZSByZWNlaXZlZCcsIGV2ZW50KTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgaWYgKGlzR2V0KG1lc3NhZ2UpKSB7XG4gICAgICAgIC8vIGZpbmQgdGhlIG1ldGhvZCwgY2FsbCBpdCwgYW5kIHJlcGx5IHdpdGggdGhlIHJlc3VsdFxuICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2UoYXdhaXQgdGhpcy5nZXRNZXRob2RSZXN1bHQobWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIGlmIChpc0VtaXQobWVzc2FnZSkpIHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QsIGFyZ3MgfSA9IG1lc3NhZ2U7XG4gICAgICAgIC8vIEZpbmQgdGhlIG1ldGhvZCBhbmQgY2FsbCBpdCwgYnV0IG5vIHJlc3VsdCBuZWNlc3NhcnkuXG4gICAgICAgIC8vIFNob3VsZCB0aGlzIG11bHRpY2FzdCB0byBhIHNldCBvZiBsaXN0ZW5lcnM/XG4gICAgICAgIC8vIE1heWJlLCBidXQgdGhhdCByZXF1aXJlcyB3cml0aW5nIGEgYnVuY2ggbW9yZSBjb2RlXG4gICAgICAgIC8vIGFuZCBJIGhhdmVuJ3QgZm91bmQgYSBuZWVkIGZvciBpdCB5ZXQuXG4gICAgICAgIGNvbnN0IGV4ZWN1dG9yID0gdGhpcy5tZXRob2RzW21ldGhvZF07XG4gICAgICAgIGlmIChleGVjdXRvcikge1xuICAgICAgICAgIGV4ZWN1dG9yKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzSW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRNZXRob2RSZXN1bHQoe1xuICAgIG1lc3NhZ2VJZCxcbiAgICBtZXRob2QsXG4gICAgYXJncyxcbiAgfTogR2V0TWVzc2FnZSk6IFByb21pc2U8UmVwbHlNZXNzYWdlIHwgRXJyb3JNZXNzYWdlPiB7XG4gICAgY29uc3QgZXhlY3V0b3IgPSB0aGlzLm1ldGhvZHNbbWV0aG9kXTtcbiAgICBpZiAoZXhlY3V0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e1xuICAgICAgICBzd2l0Y2hib2FyZEFjdGlvbjogQWN0aW9ucy5FUlJPUixcbiAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICBlcnJvcjogYFske3RoaXMubmFtZX1dIE1ldGhvZCBcIiR7bWV0aG9kfVwiIGlzIG5vdCBkZWZpbmVkYCxcbiAgICAgIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjdXRvcihhcmdzKTtcbiAgICAgIHJldHVybiA8UmVwbHlNZXNzYWdlPntcbiAgICAgICAgc3dpdGNoYm9hcmRBY3Rpb246IEFjdGlvbnMuUkVQTFksXG4gICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubG9nRXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntcbiAgICAgICAgc3dpdGNoYm9hcmRBY3Rpb246IEFjdGlvbnMuRVJST1IsXG4gICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgZXJyb3I6IGBbJHt0aGlzLm5hbWV9XSBNZXRob2QgXCIke21ldGhvZH1cIiB0aHJldyBhbiBlcnJvcmAsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGEgbWV0aG9kIHRoYXQgY2FuIGJlIFwiY2FsbGVkXCIgZnJvbSB0aGUgb3RoZXIgc2lkZSBieSBzZW5kaW5nIGFuIGV2ZW50LlxuICAgKi9cbiAgZGVmaW5lTWV0aG9kPEEgZXh0ZW5kcyB7fSwgUiA9IGFueT4oXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nLFxuICAgIGV4ZWN1dG9yOiBNZXRob2Q8QSwgUj4sXG4gICkge1xuICAgIHRoaXMubWV0aG9kc1ttZXRob2ROYW1lXSA9IGV4ZWN1dG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIGEgbWV0aG9kIHJlZ2lzdGVyZWQgb24gdGhlIG90aGVyIHNpZGUsIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXG4gICAqXG4gICAqIEhvdyB0aGlzIGlzIGFjY29tcGxpc2hlZDpcbiAgICogVGhpcyBzd2l0Y2hib2FyZCBzZW5kcyBhIFwiZ2V0XCIgbWVzc2FnZSBvdmVyIHRoZSBjaGFubmVsIGRlc2NyaWJpbmcgd2hpY2ggbWV0aG9kIHRvIGNhbGwgd2l0aCB3aGljaCBhcmd1bWVudHMuXG4gICAqIFRoZSBvdGhlciBzaWRlJ3Mgc3dpdGNoYm9hcmQgZmluZHMgYSBtZXRob2Qgd2l0aCB0aGF0IG5hbWUsIGFuZCBjYWxscyBpdCB3aXRoIHRoZSBhcmd1bWVudHMuXG4gICAqIEl0IHRoZW4gcGFja2FnZXMgdXAgdGhlIHJldHVybmVkIHZhbHVlIGludG8gYSBcInJlcGx5XCIgbWVzc2FnZSwgc2VuZGluZyBpdCBiYWNrIHRvIHVzIGFjcm9zcyB0aGUgY2hhbm5lbC5cbiAgICogVGhpcyBzd2l0Y2hib2FyZCBoYXMgYXR0YWNoZWQgYSBsaXN0ZW5lciBvbiB0aGUgY2hhbm5lbCwgd2hpY2ggd2lsbCByZXNvbHZlIHdpdGggdGhlIHJlc3VsdCB3aGVuIGEgcmVwbHkgaXMgZGV0ZWN0ZWQuXG4gICAqXG4gICAqIEluc3RlYWQgb2YgYW4gYXJndW1lbnRzIGxpc3QsIGFyZ3VtZW50cyBhcmUgc3VwcGxpZWQgYXMgYSBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2QgdGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB0byBjYWxsXG4gICAqIEBwYXJhbSBhcmdzIGFyZ3VtZW50cyB0aGF0IHdpbGwgYmUgc3VwcGxpZWQuIE11c3QgYmUgc2VyaWFsaXphYmxlLCBubyBmdW5jdGlvbnMgb3Igb3RoZXIgbm9uc2Vuc2UuXG4gICAqIEByZXR1cm5zIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gdGhlIG1ldGhvZFxuICAgKi9cbiAgZ2V0PFQgPSB1bmtub3duPihtZXRob2Q6IHN0cmluZywgYXJnczogdW5rbm93biA9IHVuZGVmaW5lZCk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXNlZCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdTd2l0Y2hib2FyZCBub3QgaW5pdGlhbGlzZWQnKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEluIG9yZGVyIHRvIFwiY2FsbCBhIG1ldGhvZFwiIG9uIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBwb3J0LFxuICAgICAgLy8gd2Ugd2lsbCBzZW5kIGEgbWVzc2FnZSB3aXRoIGEgdW5pcXVlIGlkXG4gICAgICBjb25zdCBtZXNzYWdlSWQgPSB0aGlzLmdldE5ld01lc3NhZ2VJZCgpO1xuICAgICAgLy8gYXR0YWNoIGEgbmV3IGxpc3RlbmVyIHRvIG91ciBwb3J0LCBhbmQgcmVtb3ZlIGl0IHdoZW4gd2UgZ2V0IGEgcmVzcG9uc2VcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VJZCAhPT0gbWVzc2FnZUlkKSByZXR1cm47XG4gICAgICAgIHRoaXMucG9ydC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIpO1xuICAgICAgICBpZiAoaXNSZXBseShtZXNzYWdlKSkge1xuICAgICAgICAgIHJlc29sdmUobWVzc2FnZS5yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVyclN0ciA9IGlzRXJyb3IobWVzc2FnZSlcbiAgICAgICAgICAgID8gbWVzc2FnZS5lcnJvclxuICAgICAgICAgICAgOiAnVW5leHBlY3RlZCByZXNwb25zZSBtZXNzYWdlJztcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyclN0cikpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5wb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgICB0aGlzLnBvcnQuc3RhcnQoKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IEdldE1lc3NhZ2UgPSB7XG4gICAgICAgIHN3aXRjaGJvYXJkQWN0aW9uOiBBY3Rpb25zLkdFVCxcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgIGFyZ3MsXG4gICAgICB9O1xuICAgICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgY2FsbHMgYSBtZXRob2Qgb24gdGhlIG90aGVyIHNpZGUganVzdCBsaWtlIGdldCBkb2VzLlxuICAgKiBCdXQgZW1pdCBkb2Vzbid0IHdhaXQgZm9yIGEgcmVzcG9uc2UsIGl0IGp1c3Qgc2VuZHMgYW5kIGZvcmdldHMuXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2RcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIGVtaXQobWV0aG9kOiBzdHJpbmcsIGFyZ3M6IHVua25vd24gPSB1bmRlZmluZWQpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXNlZCkge1xuICAgICAgdGhpcy5sb2dFcnJvcignU3dpdGNoYm9hcmQgbm90IGluaXRpYWxpc2VkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2U6IEVtaXRNZXNzYWdlID0ge1xuICAgICAgc3dpdGNoYm9hcmRBY3Rpb246IEFjdGlvbnMuRU1JVCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGFyZ3MsXG4gICAgfTtcbiAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXNlZCkge1xuICAgICAgdGhpcy5sb2dFcnJvcignU3dpdGNoYm9hcmQgbm90IGluaXRpYWxpc2VkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucG9ydC5zdGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2coLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgaWYgKHRoaXMuZGVidWdNb2RlKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKGBbJHt0aGlzLm5hbWV9XWAsIC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9nRXJyb3IoLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgY29uc29sZS5lcnJvcihgWyR7dGhpcy5uYW1lfV1gLCAuLi5hcmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3TWVzc2FnZUlkKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgIHJldHVybiBgbV8ke3RoaXMubmFtZX1fJHt0aGlzLmluY3JlbWVudG9yKyt9YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3dpdGNoYm9hcmQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/superset-ui-switchboard/src/switchboard.ts\n\n}");

/***/ }),

/***/ "./src/embedded/EmbeddedContextProviders.tsx":
/*!***************************************************!*\
  !*** ./src/embedded/EmbeddedContextProviders.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmbeddedContextProviders: () => (/* binding */ EmbeddedContextProviders),\n/* harmony export */   getThemeController: () => (/* binding */ getThemeController)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/ui-overrides/ExtensionsRegistry.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-query-params */ \"./node_modules/use-query-params/esm/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/common/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components */ \"./src/components/index.ts\");\n/* harmony import */ var src_components_UiConfigContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/UiConfigContext */ \"./src/components/UiConfigContext/index.tsx\");\n/* harmony import */ var src_theme_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/theme/ThemeProvider */ \"./src/theme/ThemeProvider.tsx\");\n/* harmony import */ var src_theme_ThemeController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/theme/ThemeController */ \"./src/theme/ThemeController.ts\");\n/* harmony import */ var src_views_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/views/store */ \"./src/views/store.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */ \n\n\n\n\n\n\n\n\n\n\n\n/**\n * In-memory implementation of ThemeStorage interface for embedded contexts.\n * Persistent storage is not required for embedded dashboards.\n */ class ThemeMemoryStorageAdapter {\n    getItem(key) {\n        return this.storage.get(key) || null;\n    }\n    setItem(key, value) {\n        this.storage.set(key, value);\n    }\n    removeItem(key) {\n        this.storage.delete(key);\n    }\n    constructor(){\n        this.storage = new Map();\n    }\n}\nconst themeController = new src_theme_ThemeController__WEBPACK_IMPORTED_MODULE_10__.ThemeController({\n    storage: new ThemeMemoryStorageAdapter()\n});\nconst getThemeController = ()=>themeController;\nconst extensionsRegistry = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__.getExtensionsRegistry)();\nconst EmbeddedContextProviders = ({ children })=>{\n    const RootContextProviderExtension = extensionsRegistry.get('root.context.provider');\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_theme_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__.SupersetThemeProvider, {\n        themeController: themeController,\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n            store: src_views_store__WEBPACK_IMPORTED_MODULE_11__.store,\n            children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_5__.DndProvider, {\n                backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__.HTML5Backend,\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_UiConfigContext__WEBPACK_IMPORTED_MODULE_8__.EmbeddedUiConfigProvider, {\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components__WEBPACK_IMPORTED_MODULE_7__.DynamicPluginProvider, {\n                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(use_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParamProvider, {\n                            ReactRouterRoute: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route,\n                            stringifyOptions: {\n                                encode: false\n                            },\n                            children: RootContextProviderExtension ? /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RootContextProviderExtension, {\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"/app/superset-frontend/src/embedded/EmbeddedContextProviders.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 19\n                            }, undefined) : children\n                        }, void 0, false, {\n                            fileName: \"/app/superset-frontend/src/embedded/EmbeddedContextProviders.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/app/superset-frontend/src/embedded/EmbeddedContextProviders.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/app/superset-frontend/src/embedded/EmbeddedContextProviders.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/superset-frontend/src/embedded/EmbeddedContextProviders.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/app/superset-frontend/src/embedded/EmbeddedContextProviders.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/app/superset-frontend/src/embedded/EmbeddedContextProviders.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EmbeddedContextProviders;\nvar _c;\n__webpack_require__.$Refresh$.register(_c, \"EmbeddedContextProviders\");\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW1iZWRkZWQvRW1iZWRkZWRDb250ZXh0UHJvdmlkZXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBWkE7O0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBN0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJzZXQvLi9zcmMvZW1iZWRkZWQvRW1iZWRkZWRDb250ZXh0UHJvdmlkZXJzLnRzeD82OGI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBnZXRFeHRlbnNpb25zUmVnaXN0cnkgfSBmcm9tICdAc3VwZXJzZXQtdWkvY29yZSc7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBSZWR1eFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUXVlcnlQYXJhbVByb3ZpZGVyIH0gZnJvbSAndXNlLXF1ZXJ5LXBhcmFtcyc7XG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5pbXBvcnQgeyBEeW5hbWljUGx1Z2luUHJvdmlkZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBFbWJlZGRlZFVpQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9VaUNvbmZpZ0NvbnRleHQnO1xuaW1wb3J0IHsgU3VwZXJzZXRUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3JjL3RoZW1lL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsgVGhlbWVDb250cm9sbGVyIH0gZnJvbSAnc3JjL3RoZW1lL1RoZW1lQ29udHJvbGxlcic7XG5pbXBvcnQgdHlwZSB7IFRoZW1lU3RvcmFnZSB9IGZyb20gJ0BhcGFjaGUtc3VwZXJzZXQvY29yZS91aSc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJ3NyYy92aWV3cy9zdG9yZSc7XG5cbi8qKlxuICogSW4tbWVtb3J5IGltcGxlbWVudGF0aW9uIG9mIFRoZW1lU3RvcmFnZSBpbnRlcmZhY2UgZm9yIGVtYmVkZGVkIGNvbnRleHRzLlxuICogUGVyc2lzdGVudCBzdG9yYWdlIGlzIG5vdCByZXF1aXJlZCBmb3IgZW1iZWRkZWQgZGFzaGJvYXJkcy5cbiAqL1xuY2xhc3MgVGhlbWVNZW1vcnlTdG9yYWdlQWRhcHRlciBpbXBsZW1lbnRzIFRoZW1lU3RvcmFnZSB7XG4gIHByaXZhdGUgc3RvcmFnZSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KGtleSkgfHwgbnVsbDtcbiAgfVxuXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoa2V5KTtcbiAgfVxufVxuXG5jb25zdCB0aGVtZUNvbnRyb2xsZXIgPSBuZXcgVGhlbWVDb250cm9sbGVyKHtcbiAgc3RvcmFnZTogbmV3IFRoZW1lTWVtb3J5U3RvcmFnZUFkYXB0ZXIoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0VGhlbWVDb250cm9sbGVyID0gKCk6IFRoZW1lQ29udHJvbGxlciA9PiB0aGVtZUNvbnRyb2xsZXI7XG5cbmNvbnN0IGV4dGVuc2lvbnNSZWdpc3RyeSA9IGdldEV4dGVuc2lvbnNSZWdpc3RyeSgpO1xuXG5leHBvcnQgY29uc3QgRW1iZWRkZWRDb250ZXh0UHJvdmlkZXJzOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgUm9vdENvbnRleHRQcm92aWRlckV4dGVuc2lvbiA9IGV4dGVuc2lvbnNSZWdpc3RyeS5nZXQoXG4gICAgJ3Jvb3QuY29udGV4dC5wcm92aWRlcicsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3VwZXJzZXRUaGVtZVByb3ZpZGVyIHRoZW1lQ29udHJvbGxlcj17dGhlbWVDb250cm9sbGVyfT5cbiAgICAgIDxSZWR1eFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxuICAgICAgICAgIDxFbWJlZGRlZFVpQ29uZmlnUHJvdmlkZXI+XG4gICAgICAgICAgICA8RHluYW1pY1BsdWdpblByb3ZpZGVyPlxuICAgICAgICAgICAgICA8UXVlcnlQYXJhbVByb3ZpZGVyXG4gICAgICAgICAgICAgICAgUmVhY3RSb3V0ZXJSb3V0ZT17Um91dGV9XG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5T3B0aW9ucz17eyBlbmNvZGU6IGZhbHNlIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Um9vdENvbnRleHRQcm92aWRlckV4dGVuc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxSb290Q29udGV4dFByb3ZpZGVyRXh0ZW5zaW9uPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICA8L1Jvb3RDb250ZXh0UHJvdmlkZXJFeHRlbnNpb24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9RdWVyeVBhcmFtUHJvdmlkZXI+XG4gICAgICAgICAgICA8L0R5bmFtaWNQbHVnaW5Qcm92aWRlcj5cbiAgICAgICAgICA8L0VtYmVkZGVkVWlDb25maWdQcm92aWRlcj5cbiAgICAgICAgPC9EbmRQcm92aWRlcj5cbiAgICAgIDwvUmVkdXhQcm92aWRlcj5cbiAgICA8L1N1cGVyc2V0VGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/embedded/EmbeddedContextProviders.tsx\n\n}");

/***/ }),

/***/ "./src/embedded/api.tsx":
/*!******************************!*\
  !*** ./src/embedded/api.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   embeddedApi: () => (/* binding */ embeddedApi)\n/* harmony export */ });\n/* harmony import */ var src_utils_getBootstrapData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/getBootstrapData */ \"./src/utils/getBootstrapData.ts\");\n/* harmony import */ var _views_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/store */ \"./src/views/store.ts\");\n/* harmony import */ var _utils_urlUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/urlUtils */ \"./src/utils/urlUtils.ts\");\n/* harmony import */ var _dashboard_util_chartStateConverter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/util/chartStateConverter */ \"./src/dashboard/util/chartStateConverter.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _async_to_generator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nconst bootstrapData = (0,src_utils_getBootstrapData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst getScrollSize = ()=>({\n        width: document.body.scrollWidth,\n        height: document.body.scrollHeight\n    });\nconst getDashboardPermalink = ({ anchor })=>_async_to_generator(function*() {\n        var _state_dashboardInfo, _state_dashboardState, _state_dashboardState1, _state_sliceEntities;\n        const state = _views_store__WEBPACK_IMPORTED_MODULE_1__.store == null ? void 0 : _views_store__WEBPACK_IMPORTED_MODULE_1__.store.getState();\n        const { dashboardId, dataMask, activeTabs, chartStates, sliceEntities } = {\n            dashboardId: (state == null ? void 0 : (_state_dashboardInfo = state.dashboardInfo) == null ? void 0 : _state_dashboardInfo.id) || (bootstrapData == null ? void 0 : bootstrapData.embedded.dashboard_id),\n            dataMask: state == null ? void 0 : state.dataMask,\n            activeTabs: (_state_dashboardState = state.dashboardState) == null ? void 0 : _state_dashboardState.activeTabs,\n            chartStates: (_state_dashboardState1 = state.dashboardState) == null ? void 0 : _state_dashboardState1.chartStates,\n            sliceEntities: state == null ? void 0 : (_state_sliceEntities = state.sliceEntities) == null ? void 0 : _state_sliceEntities.slices\n        };\n        const includeChartState = (0,_dashboard_util_chartStateConverter__WEBPACK_IMPORTED_MODULE_3__.hasStatefulCharts)(sliceEntities) && chartStates && Object.keys(chartStates).length > 0;\n        return (0,_utils_urlUtils__WEBPACK_IMPORTED_MODULE_2__.getDashboardPermalink)({\n            dashboardId,\n            dataMask,\n            activeTabs,\n            anchor,\n            chartStates: includeChartState ? chartStates : undefined,\n            includeChartState\n        });\n    })();\nconst getActiveTabs = ()=>{\n    var _store_getState_dashboardState, _store_getState;\n    return (_views_store__WEBPACK_IMPORTED_MODULE_1__.store == null ? void 0 : (_store_getState = _views_store__WEBPACK_IMPORTED_MODULE_1__.store.getState()) == null ? void 0 : (_store_getState_dashboardState = _store_getState.dashboardState) == null ? void 0 : _store_getState_dashboardState.activeTabs) || [];\n};\nconst getDataMask = ()=>{\n    var _store_getState;\n    return (_views_store__WEBPACK_IMPORTED_MODULE_1__.store == null ? void 0 : (_store_getState = _views_store__WEBPACK_IMPORTED_MODULE_1__.store.getState()) == null ? void 0 : _store_getState.dataMask) || {};\n};\nconst getChartStates = ()=>{\n    var _store_getState_dashboardState, _store_getState;\n    return (_views_store__WEBPACK_IMPORTED_MODULE_1__.store == null ? void 0 : (_store_getState = _views_store__WEBPACK_IMPORTED_MODULE_1__.store.getState()) == null ? void 0 : (_store_getState_dashboardState = _store_getState.dashboardState) == null ? void 0 : _store_getState_dashboardState.chartStates) || {};\n};\nconst embeddedApi = {\n    getScrollSize,\n    getDashboardPermalink,\n    getActiveTabs,\n    getDataMask,\n    getChartStates\n};\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW1iZWRkZWQvYXBpLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnNldC8uL3NyYy9lbWJlZGRlZC9hcGkudHN4P2NmMTAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgRGF0YU1hc2tTdGF0ZVdpdGhJZCB9IGZyb20gJ0BzdXBlcnNldC11aS9jb3JlJztcbmltcG9ydCBnZXRCb290c3RyYXBEYXRhIGZyb20gJ3NyYy91dGlscy9nZXRCb290c3RyYXBEYXRhJztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vdmlld3Mvc3RvcmUnO1xuaW1wb3J0IHsgZ2V0RGFzaGJvYXJkUGVybWFsaW5rIGFzIGdldERhc2hib2FyZFBlcm1hbGlua1V0aWwgfSBmcm9tICcuLi91dGlscy91cmxVdGlscyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRDaGFydFN0YXRlcyB9IGZyb20gJy4uL2Rhc2hib2FyZC90eXBlcy9jaGFydFN0YXRlJztcbmltcG9ydCB7IGhhc1N0YXRlZnVsQ2hhcnRzIH0gZnJvbSAnLi4vZGFzaGJvYXJkL3V0aWwvY2hhcnRTdGF0ZUNvbnZlcnRlcic7XG5cbmNvbnN0IGJvb3RzdHJhcERhdGEgPSBnZXRCb290c3RyYXBEYXRhKCk7XG5cbnR5cGUgU2l6ZSA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG50eXBlIEVtYmVkZGVkU3VwZXJzZXRBcGkgPSB7XG4gIGdldFNjcm9sbFNpemU6ICgpID0+IFNpemU7XG4gIGdldERhc2hib2FyZFBlcm1hbGluazogKHsgYW5jaG9yIH06IHsgYW5jaG9yOiBzdHJpbmcgfSkgPT4gUHJvbWlzZTxzdHJpbmc+O1xuICBnZXRBY3RpdmVUYWJzOiAoKSA9PiBzdHJpbmdbXTtcbiAgZ2V0RGF0YU1hc2s6ICgpID0+IERhdGFNYXNrU3RhdGVXaXRoSWQ7XG4gIGdldENoYXJ0U3RhdGVzOiAoKSA9PiBEYXNoYm9hcmRDaGFydFN0YXRlcztcbn07XG5cbmNvbnN0IGdldFNjcm9sbFNpemUgPSAoKTogU2l6ZSA9PiAoe1xuICB3aWR0aDogZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCxcbiAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbn0pO1xuXG5jb25zdCBnZXREYXNoYm9hcmRQZXJtYWxpbmsgPSBhc3luYyAoe1xuICBhbmNob3IsXG59OiB7XG4gIGFuY2hvcjogc3RyaW5nO1xufSk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IHN0YXRlID0gc3RvcmU/LmdldFN0YXRlKCk7XG4gIGNvbnN0IHsgZGFzaGJvYXJkSWQsIGRhdGFNYXNrLCBhY3RpdmVUYWJzLCBjaGFydFN0YXRlcywgc2xpY2VFbnRpdGllcyB9ID0ge1xuICAgIGRhc2hib2FyZElkOlxuICAgICAgc3RhdGU/LmRhc2hib2FyZEluZm8/LmlkIHx8IGJvb3RzdHJhcERhdGE/LmVtYmVkZGVkIS5kYXNoYm9hcmRfaWQsXG4gICAgZGF0YU1hc2s6IHN0YXRlPy5kYXRhTWFzayxcbiAgICBhY3RpdmVUYWJzOiBzdGF0ZS5kYXNoYm9hcmRTdGF0ZT8uYWN0aXZlVGFicyxcbiAgICBjaGFydFN0YXRlczogc3RhdGUuZGFzaGJvYXJkU3RhdGU/LmNoYXJ0U3RhdGVzLFxuICAgIHNsaWNlRW50aXRpZXM6IHN0YXRlPy5zbGljZUVudGl0aWVzPy5zbGljZXMsXG4gIH07XG5cbiAgY29uc3QgaW5jbHVkZUNoYXJ0U3RhdGUgPVxuICAgIGhhc1N0YXRlZnVsQ2hhcnRzKHNsaWNlRW50aXRpZXMpICYmXG4gICAgY2hhcnRTdGF0ZXMgJiZcbiAgICBPYmplY3Qua2V5cyhjaGFydFN0YXRlcykubGVuZ3RoID4gMDtcblxuICByZXR1cm4gZ2V0RGFzaGJvYXJkUGVybWFsaW5rVXRpbCh7XG4gICAgZGFzaGJvYXJkSWQsXG4gICAgZGF0YU1hc2ssXG4gICAgYWN0aXZlVGFicyxcbiAgICBhbmNob3IsXG4gICAgY2hhcnRTdGF0ZXM6IGluY2x1ZGVDaGFydFN0YXRlID8gY2hhcnRTdGF0ZXMgOiB1bmRlZmluZWQsXG4gICAgaW5jbHVkZUNoYXJ0U3RhdGUsXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWN0aXZlVGFicyA9ICgpID0+IHN0b3JlPy5nZXRTdGF0ZSgpPy5kYXNoYm9hcmRTdGF0ZT8uYWN0aXZlVGFicyB8fCBbXTtcblxuY29uc3QgZ2V0RGF0YU1hc2sgPSAoKSA9PiBzdG9yZT8uZ2V0U3RhdGUoKT8uZGF0YU1hc2sgfHwge307XG5cbmNvbnN0IGdldENoYXJ0U3RhdGVzID0gKCkgPT5cbiAgc3RvcmU/LmdldFN0YXRlKCk/LmRhc2hib2FyZFN0YXRlPy5jaGFydFN0YXRlcyB8fCB7fTtcblxuZXhwb3J0IGNvbnN0IGVtYmVkZGVkQXBpOiBFbWJlZGRlZFN1cGVyc2V0QXBpID0ge1xuICBnZXRTY3JvbGxTaXplLFxuICBnZXREYXNoYm9hcmRQZXJtYWxpbmssXG4gIGdldEFjdGl2ZVRhYnMsXG4gIGdldERhdGFNYXNrLFxuICBnZXRDaGFydFN0YXRlcyxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/embedded/api.tsx\n\n}");

/***/ }),

/***/ "./src/embedded/index.tsx":
/*!********************************!*\
  !*** ./src/embedded/index.tsx ***!
  \********************************/
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("{/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js\");\n/* harmony import */ var src_public_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/public-path */ \"./src/public-path.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/translation/TranslatorSingleton.ts\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/utils/logging.ts\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/query/api/v1/makeApi.ts\");\n/* harmony import */ var _apache_superset_core_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apache-superset/core/ui */ \"./packages/superset-core/src/ui/theme/types.ts\");\n/* harmony import */ var _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @superset-ui/switchboard */ \"./packages/superset-ui-switchboard/src/index.ts\");\n/* harmony import */ var src_utils_getBootstrapData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/utils/getBootstrapData */ \"./src/utils/getBootstrapData.ts\");\n/* harmony import */ var src_setup_setupClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/setup/setupClient */ \"./src/setup/setupClient.ts\");\n/* harmony import */ var src_setup_setupPlugins__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/setup/setupPlugins */ \"./src/setup/setupPlugins.ts\");\n/* harmony import */ var src_components_UiConfigContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/UiConfigContext */ \"./src/components/UiConfigContext/index.tsx\");\n/* harmony import */ var src_views_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/views/store */ \"./src/views/store.ts\");\n/* harmony import */ var _superset_ui_core_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @superset-ui/core/components */ \"./packages/superset-ui-core/src/components/Loading/index.tsx\");\n/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components */ \"./src/components/index.ts\");\n/* harmony import */ var src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/MessageToasts/actions */ \"./src/components/MessageToasts/actions.ts\");\n/* harmony import */ var src_components_MessageToasts_ToastContainer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/components/MessageToasts/ToastContainer */ \"./src/components/MessageToasts/ToastContainer.tsx\");\n/* harmony import */ var src_setup_setupCodeOverrides__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/setup/setupCodeOverrides */ \"./src/setup/setupCodeOverrides.ts\");\n/* harmony import */ var _EmbeddedContextProviders__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./EmbeddedContextProviders */ \"./src/embedded/EmbeddedContextProviders.tsx\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./api */ \"./src/embedded/api.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils */ \"./src/embedded/utils.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */ function _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,src_setup_setupPlugins__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\n(0,src_setup_setupCodeOverrides__WEBPACK_IMPORTED_MODULE_20__[\"default\"])({\n    embedded: true\n});\nconst debugMode = \"development\" === 'development';\nconst bootstrapData = (0,src_utils_getBootstrapData__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\nfunction log(...info) {\n    if (debugMode) _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"default\"].debug(`[superset]`, ...info);\n}\nconst LazyDashboardPage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(()=>__webpack_require__.e(/*! import() | DashboardPage */ \"DashboardPage\").then(__webpack_require__.bind(__webpack_require__, /*! src/dashboard/containers/DashboardPage */ \"./src/dashboard/containers/DashboardPage.tsx\")));\n_c = LazyDashboardPage;\nconst EmbededLazyDashboardPage = ()=>{\n    _s();\n    const uiConfig = (0,src_components_UiConfigContext__WEBPACK_IMPORTED_MODULE_14__.useUiConfig)();\n    // Emit data mask changes to the parent window\n    if (uiConfig == null ? void 0 : uiConfig.emitDataMasks) {\n        log('setting up Switchboard event emitter');\n        let previousDataMask = src_views_store__WEBPACK_IMPORTED_MODULE_15__.store.getState().dataMask;\n        src_views_store__WEBPACK_IMPORTED_MODULE_15__.store.subscribe(()=>{\n            const currentState = src_views_store__WEBPACK_IMPORTED_MODULE_15__.store.getState();\n            const currentDataMask = currentState.dataMask;\n            // Only emit if the dataMask has changed\n            if (previousDataMask !== currentDataMask) {\n                _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].emit('observeDataMask', _extends({}, currentDataMask, (0,_utils__WEBPACK_IMPORTED_MODULE_23__.getDataMaskChangeTrigger)(currentDataMask, previousDataMask)));\n                previousDataMask = currentDataMask;\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LazyDashboardPage, {\n        idOrSlug: bootstrapData.embedded.dashboard_id\n    }, void 0, false, {\n        fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n        lineNumber: 86,\n        columnNumber: 10\n    }, undefined);\n};\n_s(EmbededLazyDashboardPage, \"NNPn/Mv2pb06Yo1ZmeS9IWTsffI=\", false, function() {\n    return [\n        src_components_UiConfigContext__WEBPACK_IMPORTED_MODULE_14__.useUiConfig\n    ];\n});\n_c1 = EmbededLazyDashboardPage;\nconst EmbeddedRoute = ()=>/*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EmbeddedContextProviders__WEBPACK_IMPORTED_MODULE_21__.EmbeddedContextProviders, {\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n            fallback: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_superset_ui_core_components__WEBPACK_IMPORTED_MODULE_16__.Loading, {}, void 0, false, {\n                fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 25\n            }, void 0),\n            children: [\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components__WEBPACK_IMPORTED_MODULE_17__.ErrorBoundary, {\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmbededLazyDashboardPage, {}, void 0, false, {\n                        fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_MessageToasts_ToastContainer__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                    position: \"top\"\n                }, void 0, false, {\n                    fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n            lineNumber: 91,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n        lineNumber: 90,\n        columnNumber: 3\n    }, undefined);\n_c2 = EmbeddedRoute;\nconst EmbeddedApp = ()=>/*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, {\n        basename: (0,src_utils_getBootstrapData__WEBPACK_IMPORTED_MODULE_11__.applicationRoot)(),\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n                path: \"/dashboard/:idOrSlug/embedded/\",\n                component: EmbeddedRoute\n            }, void 0, false, {\n                fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n                path: \"/embedded/:uuid/\",\n                component: EmbeddedRoute\n            }, void 0, false, {\n                fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n                lineNumber: 104,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n        lineNumber: 101,\n        columnNumber: 3\n    }, undefined);\n_c3 = EmbeddedApp;\nconst appMountPoint = document.getElementById('app');\nconst MESSAGE_TYPE = '__embedded_comms__';\nfunction showFailureMessage(message) {\n    appMountPoint.innerHTML = message;\n}\nif (!window.parent || window.parent === window) {\n    showFailureMessage((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('This page is intended to be embedded in an iframe, but it looks like that is not the case.'));\n}\n// if the page is embedded in an origin that hasn't\n// been authorized by the curator, we forbid access entirely.\n// todo: check the referrer on the route serving this page instead\n// const ALLOW_ORIGINS = ['http://127.0.0.1:9001', 'http://localhost:9001'];\n// const parentOrigin = new URL(document.referrer).origin;\n// if (!ALLOW_ORIGINS.includes(parentOrigin)) {\n//   throw new Error(\n//     `[superset] iframe parent ${parentOrigin} is not in the list of allowed origins`,\n//   );\n// }\nlet displayedUnauthorizedToast = false;\n/**\n * If there is a problem with the guest token, we will start getting\n * 401 errors from the api and SupersetClient will call this function.\n */ function guestUnauthorizedHandler() {\n    if (displayedUnauthorizedToast) return; // no need to display this message every time we get another 401\n    displayedUnauthorizedToast = true;\n    // If a guest user were sent to a login screen on 401, they would have no valid login to use.\n    // For embedded it makes more sense to just display a message\n    // and let them continue accessing the page, to whatever extent they can.\n    src_views_store__WEBPACK_IMPORTED_MODULE_15__.store.dispatch((0,src_components_MessageToasts_actions__WEBPACK_IMPORTED_MODULE_18__.addDangerToast)((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('This session has encountered an interruption, and some controls may not work as intended. If you are the developer of this app, please check that the guest token is being generated correctly.'), {\n        duration: -1,\n        noDuplicate: true\n    }));\n}\nfunction start() {\n    const getMeWithRole = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n        method: 'GET',\n        endpoint: '/api/v1/me/roles/'\n    });\n    return getMeWithRole().then(({ result })=>{\n        // fill in some missing bootstrap data\n        // (because at pageload, we don't have any auth yet)\n        // this allows the frontend's permissions checks to work.\n        bootstrapData.user = result;\n        src_views_store__WEBPACK_IMPORTED_MODULE_15__.store.dispatch({\n            type: src_views_store__WEBPACK_IMPORTED_MODULE_15__.USER_LOADED,\n            user: result\n        });\n        react_dom__WEBPACK_IMPORTED_MODULE_3___default().render(/*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmbeddedApp, {}, void 0, false, {\n            fileName: \"/app/superset-frontend/src/embedded/index.tsx\",\n            lineNumber: 175,\n            columnNumber: 23\n        }, this), appMountPoint);\n    }, (err)=>{\n        // something is most likely wrong with the guest token\n        _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(err);\n        showFailureMessage((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Something went wrong with embedded authentication. Check the dev console for details.'));\n    });\n}\n/**\n * Configures SupersetClient with the correct settings for the embedded dashboard page.\n */ function setupGuestClient(guestToken) {\n    var _bootstrapData_config;\n    (0,src_setup_setupClient__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({\n        appRoot: (0,src_utils_getBootstrapData__WEBPACK_IMPORTED_MODULE_11__.applicationRoot)(),\n        guestToken,\n        guestTokenHeaderName: (_bootstrapData_config = bootstrapData.config) == null ? void 0 : _bootstrapData_config.GUEST_TOKEN_HEADER_NAME,\n        unauthorizedHandler: guestUnauthorizedHandler\n    });\n}\nfunction validateMessageEvent(event) {\n    // if (!ALLOW_ORIGINS.includes(event.origin)) {\n    //   throw new Error('Message origin is not in the allowed list');\n    // }\n    if (typeof event.data !== 'object' || event.data.type !== MESSAGE_TYPE) {\n        throw new Error(`Message type does not match type used for embedded comms`);\n    }\n}\nwindow.addEventListener('message', function embeddedPageInitializer(event) {\n    var _event_ports;\n    try {\n        validateMessageEvent(event);\n    } catch (err) {\n        log('ignoring message unrelated to embedded comms', err, event);\n        return;\n    }\n    const port = (_event_ports = event.ports) == null ? void 0 : _event_ports[0];\n    if (event.data.handshake === 'port transfer' && port) {\n        log('message port received', event);\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].init({\n            port,\n            name: 'superset',\n            debug: debugMode\n        });\n        let started = false;\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defineMethod('guestToken', ({ guestToken })=>{\n            setupGuestClient(guestToken);\n            if (!started) {\n                start();\n                started = true;\n            }\n        });\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defineMethod('getScrollSize', _api__WEBPACK_IMPORTED_MODULE_22__.embeddedApi.getScrollSize);\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defineMethod('getDashboardPermalink', _api__WEBPACK_IMPORTED_MODULE_22__.embeddedApi.getDashboardPermalink);\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defineMethod('getActiveTabs', _api__WEBPACK_IMPORTED_MODULE_22__.embeddedApi.getActiveTabs);\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defineMethod('getDataMask', _api__WEBPACK_IMPORTED_MODULE_22__.embeddedApi.getDataMask);\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defineMethod('getChartStates', _api__WEBPACK_IMPORTED_MODULE_22__.embeddedApi.getChartStates);\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defineMethod('setThemeConfig', (payload)=>{\n            const { themeConfig } = payload;\n            log('Received setThemeConfig request:', themeConfig);\n            try {\n                const themeController = (0,_EmbeddedContextProviders__WEBPACK_IMPORTED_MODULE_21__.getThemeController)();\n                themeController.setThemeConfig(themeConfig);\n                return {\n                    success: true,\n                    message: 'Theme applied'\n                };\n            } catch (error) {\n                _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error('Failed to apply theme config:', error);\n                throw new Error(`Failed to apply theme config: ${error.message}`);\n            }\n        });\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defineMethod('setThemeMode', (payload)=>{\n            const { mode } = payload;\n            log('Received setThemeMode request:', mode);\n            try {\n                const themeController = (0,_EmbeddedContextProviders__WEBPACK_IMPORTED_MODULE_21__.getThemeController)();\n                const themeModeMap = {\n                    default: _apache_superset_core_ui__WEBPACK_IMPORTED_MODULE_9__.ThemeMode.DEFAULT,\n                    dark: _apache_superset_core_ui__WEBPACK_IMPORTED_MODULE_9__.ThemeMode.DARK,\n                    system: _apache_superset_core_ui__WEBPACK_IMPORTED_MODULE_9__.ThemeMode.SYSTEM\n                };\n                const themeMode = themeModeMap[mode];\n                if (!themeMode) {\n                    throw new Error(`Invalid theme mode: ${mode}`);\n                }\n                themeController.setThemeMode(themeMode);\n                return {\n                    success: true,\n                    message: `Theme mode set to ${mode}`\n                };\n            } catch (error) {\n                _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"default\"].debug('Theme mode not changed:', error.message);\n                return {\n                    success: false,\n                    message: `Theme locked to current mode`,\n                    silent: true\n                };\n            }\n        });\n        _superset_ui_switchboard__WEBPACK_IMPORTED_MODULE_10__[\"default\"].start();\n    }\n});\n// Clean up theme controller on page unload\nwindow.addEventListener('beforeunload', ()=>{\n    try {\n        const controller = (0,_EmbeddedContextProviders__WEBPACK_IMPORTED_MODULE_21__.getThemeController)();\n        if (controller) {\n            log('Destroying theme controller');\n            controller.destroy();\n        }\n    } catch (error) {\n        _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"default\"].warn('Failed to destroy theme controller:', error);\n    }\n});\nlog('embed page is ready to receive messages');\nvar _c, _c1, _c2, _c3;\n__webpack_require__.$Refresh$.register(_c, \"LazyDashboardPage\");\n__webpack_require__.$Refresh$.register(_c1, \"EmbededLazyDashboardPage\");\n__webpack_require__.$Refresh$.register(_c2, \"EmbeddedRoute\");\n__webpack_require__.$Refresh$.register(_c3, \"EmbeddedApp\");\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW1iZWRkZWQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBT0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7Ozs7O0FBQ0E7QUF6QkE7O0FBQ0E7OztBQURBO0FBMkJBO0FBRUE7QUFBQTs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTkE7QUFXQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUFKQTtBQVFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUVBOztBQUVBO0FBS0E7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVyc2V0Ly4vc3JjL2VtYmVkZGVkL2luZGV4LnRzeD80NjY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAnc3JjL3B1YmxpYy1wYXRoJztcblxuaW1wb3J0IHsgbGF6eSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgbWFrZUFwaSwgdCwgbG9nZ2luZyB9IGZyb20gJ0BzdXBlcnNldC11aS9jb3JlJztcbmltcG9ydCB7IHR5cGUgU3VwZXJzZXRUaGVtZUNvbmZpZywgVGhlbWVNb2RlIH0gZnJvbSAnQGFwYWNoZS1zdXBlcnNldC9jb3JlL3VpJztcbmltcG9ydCBTd2l0Y2hib2FyZCBmcm9tICdAc3VwZXJzZXQtdWkvc3dpdGNoYm9hcmQnO1xuaW1wb3J0IGdldEJvb3RzdHJhcERhdGEsIHsgYXBwbGljYXRpb25Sb290IH0gZnJvbSAnc3JjL3V0aWxzL2dldEJvb3RzdHJhcERhdGEnO1xuaW1wb3J0IHNldHVwQ2xpZW50IGZyb20gJ3NyYy9zZXR1cC9zZXR1cENsaWVudCc7XG5pbXBvcnQgc2V0dXBQbHVnaW5zIGZyb20gJ3NyYy9zZXR1cC9zZXR1cFBsdWdpbnMnO1xuaW1wb3J0IHsgdXNlVWlDb25maWcgfSBmcm9tICdzcmMvY29tcG9uZW50cy9VaUNvbmZpZ0NvbnRleHQnO1xuaW1wb3J0IHsgc3RvcmUsIFVTRVJfTE9BREVEIH0gZnJvbSAnc3JjL3ZpZXdzL3N0b3JlJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICdAc3VwZXJzZXQtdWkvY29yZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICdzcmMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBhZGREYW5nZXJUb2FzdCB9IGZyb20gJ3NyYy9jb21wb25lbnRzL01lc3NhZ2VUb2FzdHMvYWN0aW9ucyc7XG5pbXBvcnQgVG9hc3RDb250YWluZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvTWVzc2FnZVRvYXN0cy9Ub2FzdENvbnRhaW5lcic7XG5pbXBvcnQgeyBVc2VyV2l0aFBlcm1pc3Npb25zQW5kUm9sZXMgfSBmcm9tICdzcmMvdHlwZXMvYm9vdHN0cmFwVHlwZXMnO1xuaW1wb3J0IHNldHVwQ29kZU92ZXJyaWRlcyBmcm9tICdzcmMvc2V0dXAvc2V0dXBDb2RlT3ZlcnJpZGVzJztcbmltcG9ydCB7XG4gIEVtYmVkZGVkQ29udGV4dFByb3ZpZGVycyxcbiAgZ2V0VGhlbWVDb250cm9sbGVyLFxufSBmcm9tICcuL0VtYmVkZGVkQ29udGV4dFByb3ZpZGVycyc7XG5pbXBvcnQgeyBlbWJlZGRlZEFwaSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGdldERhdGFNYXNrQ2hhbmdlVHJpZ2dlciB9IGZyb20gJy4vdXRpbHMnO1xuXG5zZXR1cFBsdWdpbnMoKTtcbnNldHVwQ29kZU92ZXJyaWRlcyh7IGVtYmVkZGVkOiB0cnVlIH0pO1xuXG5jb25zdCBkZWJ1Z01vZGUgPSBwcm9jZXNzLmVudi5XRUJQQUNLX01PREUgPT09ICdkZXZlbG9wbWVudCc7XG5jb25zdCBib290c3RyYXBEYXRhID0gZ2V0Qm9vdHN0cmFwRGF0YSgpO1xuXG5mdW5jdGlvbiBsb2coLi4uaW5mbzogdW5rbm93bltdKSB7XG4gIGlmIChkZWJ1Z01vZGUpIGxvZ2dpbmcuZGVidWcoYFtzdXBlcnNldF1gLCAuLi5pbmZvKTtcbn1cblxuY29uc3QgTGF6eURhc2hib2FyZFBhZ2UgPSBsYXp5KFxuICAoKSA9PlxuICAgIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiRGFzaGJvYXJkUGFnZVwiICovICdzcmMvZGFzaGJvYXJkL2NvbnRhaW5lcnMvRGFzaGJvYXJkUGFnZSdcbiAgICApLFxuKTtcblxuY29uc3QgRW1iZWRlZExhenlEYXNoYm9hcmRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB1aUNvbmZpZyA9IHVzZVVpQ29uZmlnKCk7XG5cbiAgLy8gRW1pdCBkYXRhIG1hc2sgY2hhbmdlcyB0byB0aGUgcGFyZW50IHdpbmRvd1xuICBpZiAodWlDb25maWc/LmVtaXREYXRhTWFza3MpIHtcbiAgICBsb2coJ3NldHRpbmcgdXAgU3dpdGNoYm9hcmQgZXZlbnQgZW1pdHRlcicpO1xuXG4gICAgbGV0IHByZXZpb3VzRGF0YU1hc2sgPSBzdG9yZS5nZXRTdGF0ZSgpLmRhdGFNYXNrO1xuXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgICBjb25zdCBjdXJyZW50RGF0YU1hc2sgPSBjdXJyZW50U3RhdGUuZGF0YU1hc2s7XG5cbiAgICAgIC8vIE9ubHkgZW1pdCBpZiB0aGUgZGF0YU1hc2sgaGFzIGNoYW5nZWRcbiAgICAgIGlmIChwcmV2aW91c0RhdGFNYXNrICE9PSBjdXJyZW50RGF0YU1hc2spIHtcbiAgICAgICAgU3dpdGNoYm9hcmQuZW1pdCgnb2JzZXJ2ZURhdGFNYXNrJywge1xuICAgICAgICAgIC4uLmN1cnJlbnREYXRhTWFzayxcbiAgICAgICAgICAuLi5nZXREYXRhTWFza0NoYW5nZVRyaWdnZXIoY3VycmVudERhdGFNYXNrLCBwcmV2aW91c0RhdGFNYXNrKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZpb3VzRGF0YU1hc2sgPSBjdXJyZW50RGF0YU1hc2s7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gPExhenlEYXNoYm9hcmRQYWdlIGlkT3JTbHVnPXtib290c3RyYXBEYXRhLmVtYmVkZGVkIS5kYXNoYm9hcmRfaWR9IC8+O1xufTtcblxuY29uc3QgRW1iZWRkZWRSb3V0ZSA9ICgpID0+IChcbiAgPEVtYmVkZGVkQ29udGV4dFByb3ZpZGVycz5cbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxMb2FkaW5nIC8+fT5cbiAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICA8RW1iZWRlZExhenlEYXNoYm9hcmRQYWdlIC8+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJ0b3BcIiAvPlxuICAgIDwvU3VzcGVuc2U+XG4gIDwvRW1iZWRkZWRDb250ZXh0UHJvdmlkZXJzPlxuKTtcblxuY29uc3QgRW1iZWRkZWRBcHAgPSAoKSA9PiAoXG4gIDxSb3V0ZXIgYmFzZW5hbWU9e2FwcGxpY2F0aW9uUm9vdCgpfT5cbiAgICB7LyogdG9kbyAoZW1iZWRkZWQpIHJlbW92ZSB0aGlzIGxpbmUgYWZ0ZXIgdXVpZHMgYXJlIGRlcGxveWVkICovfVxuICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZC86aWRPclNsdWcvZW1iZWRkZWQvXCIgY29tcG9uZW50PXtFbWJlZGRlZFJvdXRlfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiL2VtYmVkZGVkLzp1dWlkL1wiIGNvbXBvbmVudD17RW1iZWRkZWRSb3V0ZX0gLz5cbiAgPC9Sb3V0ZXI+XG4pO1xuXG5jb25zdCBhcHBNb3VudFBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpITtcblxuY29uc3QgTUVTU0FHRV9UWVBFID0gJ19fZW1iZWRkZWRfY29tbXNfXyc7XG5cbmZ1bmN0aW9uIHNob3dGYWlsdXJlTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgYXBwTW91bnRQb2ludC5pbm5lckhUTUwgPSBtZXNzYWdlO1xufVxuXG5pZiAoIXdpbmRvdy5wYXJlbnQgfHwgd2luZG93LnBhcmVudCA9PT0gd2luZG93KSB7XG4gIHNob3dGYWlsdXJlTWVzc2FnZShcbiAgICB0KFxuICAgICAgJ1RoaXMgcGFnZSBpcyBpbnRlbmRlZCB0byBiZSBlbWJlZGRlZCBpbiBhbiBpZnJhbWUsIGJ1dCBpdCBsb29rcyBsaWtlIHRoYXQgaXMgbm90IHRoZSBjYXNlLicsXG4gICAgKSxcbiAgKTtcbn1cblxuLy8gaWYgdGhlIHBhZ2UgaXMgZW1iZWRkZWQgaW4gYW4gb3JpZ2luIHRoYXQgaGFzbid0XG4vLyBiZWVuIGF1dGhvcml6ZWQgYnkgdGhlIGN1cmF0b3IsIHdlIGZvcmJpZCBhY2Nlc3MgZW50aXJlbHkuXG4vLyB0b2RvOiBjaGVjayB0aGUgcmVmZXJyZXIgb24gdGhlIHJvdXRlIHNlcnZpbmcgdGhpcyBwYWdlIGluc3RlYWRcbi8vIGNvbnN0IEFMTE9XX09SSUdJTlMgPSBbJ2h0dHA6Ly8xMjcuMC4wLjE6OTAwMScsICdodHRwOi8vbG9jYWxob3N0OjkwMDEnXTtcbi8vIGNvbnN0IHBhcmVudE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpbjtcbi8vIGlmICghQUxMT1dfT1JJR0lOUy5pbmNsdWRlcyhwYXJlbnRPcmlnaW4pKSB7XG4vLyAgIHRocm93IG5ldyBFcnJvcihcbi8vICAgICBgW3N1cGVyc2V0XSBpZnJhbWUgcGFyZW50ICR7cGFyZW50T3JpZ2lufSBpcyBub3QgaW4gdGhlIGxpc3Qgb2YgYWxsb3dlZCBvcmlnaW5zYCxcbi8vICAgKTtcbi8vIH1cblxubGV0IGRpc3BsYXllZFVuYXV0aG9yaXplZFRvYXN0ID0gZmFsc2U7XG5cbi8qKlxuICogSWYgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhlIGd1ZXN0IHRva2VuLCB3ZSB3aWxsIHN0YXJ0IGdldHRpbmdcbiAqIDQwMSBlcnJvcnMgZnJvbSB0aGUgYXBpIGFuZCBTdXBlcnNldENsaWVudCB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ3Vlc3RVbmF1dGhvcml6ZWRIYW5kbGVyKCkge1xuICBpZiAoZGlzcGxheWVkVW5hdXRob3JpemVkVG9hc3QpIHJldHVybjsgLy8gbm8gbmVlZCB0byBkaXNwbGF5IHRoaXMgbWVzc2FnZSBldmVyeSB0aW1lIHdlIGdldCBhbm90aGVyIDQwMVxuICBkaXNwbGF5ZWRVbmF1dGhvcml6ZWRUb2FzdCA9IHRydWU7XG4gIC8vIElmIGEgZ3Vlc3QgdXNlciB3ZXJlIHNlbnQgdG8gYSBsb2dpbiBzY3JlZW4gb24gNDAxLCB0aGV5IHdvdWxkIGhhdmUgbm8gdmFsaWQgbG9naW4gdG8gdXNlLlxuICAvLyBGb3IgZW1iZWRkZWQgaXQgbWFrZXMgbW9yZSBzZW5zZSB0byBqdXN0IGRpc3BsYXkgYSBtZXNzYWdlXG4gIC8vIGFuZCBsZXQgdGhlbSBjb250aW51ZSBhY2Nlc3NpbmcgdGhlIHBhZ2UsIHRvIHdoYXRldmVyIGV4dGVudCB0aGV5IGNhbi5cbiAgc3RvcmUuZGlzcGF0Y2goXG4gICAgYWRkRGFuZ2VyVG9hc3QoXG4gICAgICB0KFxuICAgICAgICAnVGhpcyBzZXNzaW9uIGhhcyBlbmNvdW50ZXJlZCBhbiBpbnRlcnJ1cHRpb24sIGFuZCBzb21lIGNvbnRyb2xzIG1heSBub3Qgd29yayBhcyBpbnRlbmRlZC4gSWYgeW91IGFyZSB0aGUgZGV2ZWxvcGVyIG9mIHRoaXMgYXBwLCBwbGVhc2UgY2hlY2sgdGhhdCB0aGUgZ3Vlc3QgdG9rZW4gaXMgYmVpbmcgZ2VuZXJhdGVkIGNvcnJlY3RseS4nLFxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgZHVyYXRpb246IC0xLCAvLyBzdGF5IG9wZW4gdW50aWwgbWFudWFsbHkgY2xvc2VkXG4gICAgICAgIG5vRHVwbGljYXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICApLFxuICApO1xufVxuXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgY29uc3QgZ2V0TWVXaXRoUm9sZSA9IG1ha2VBcGk8dm9pZCwgeyByZXN1bHQ6IFVzZXJXaXRoUGVybWlzc2lvbnNBbmRSb2xlcyB9Pih7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBlbmRwb2ludDogJy9hcGkvdjEvbWUvcm9sZXMvJyxcbiAgfSk7XG4gIHJldHVybiBnZXRNZVdpdGhSb2xlKCkudGhlbihcbiAgICAoeyByZXN1bHQgfSkgPT4ge1xuICAgICAgLy8gZmlsbCBpbiBzb21lIG1pc3NpbmcgYm9vdHN0cmFwIGRhdGFcbiAgICAgIC8vIChiZWNhdXNlIGF0IHBhZ2Vsb2FkLCB3ZSBkb24ndCBoYXZlIGFueSBhdXRoIHlldClcbiAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBmcm9udGVuZCdzIHBlcm1pc3Npb25zIGNoZWNrcyB0byB3b3JrLlxuICAgICAgYm9vdHN0cmFwRGF0YS51c2VyID0gcmVzdWx0O1xuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVU0VSX0xPQURFRCxcbiAgICAgICAgdXNlcjogcmVzdWx0LFxuICAgICAgfSk7XG4gICAgICBSZWFjdERPTS5yZW5kZXIoPEVtYmVkZGVkQXBwIC8+LCBhcHBNb3VudFBvaW50KTtcbiAgICB9LFxuICAgIGVyciA9PiB7XG4gICAgICAvLyBzb21ldGhpbmcgaXMgbW9zdCBsaWtlbHkgd3Jvbmcgd2l0aCB0aGUgZ3Vlc3QgdG9rZW5cbiAgICAgIGxvZ2dpbmcuZXJyb3IoZXJyKTtcbiAgICAgIHNob3dGYWlsdXJlTWVzc2FnZShcbiAgICAgICAgdChcbiAgICAgICAgICAnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBlbWJlZGRlZCBhdXRoZW50aWNhdGlvbi4gQ2hlY2sgdGhlIGRldiBjb25zb2xlIGZvciBkZXRhaWxzLicsXG4gICAgICAgICksXG4gICAgICApO1xuICAgIH0sXG4gICk7XG59XG5cbi8qKlxuICogQ29uZmlndXJlcyBTdXBlcnNldENsaWVudCB3aXRoIHRoZSBjb3JyZWN0IHNldHRpbmdzIGZvciB0aGUgZW1iZWRkZWQgZGFzaGJvYXJkIHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHNldHVwR3Vlc3RDbGllbnQoZ3Vlc3RUb2tlbjogc3RyaW5nKSB7XG4gIHNldHVwQ2xpZW50KHtcbiAgICBhcHBSb290OiBhcHBsaWNhdGlvblJvb3QoKSxcbiAgICBndWVzdFRva2VuLFxuICAgIGd1ZXN0VG9rZW5IZWFkZXJOYW1lOiBib290c3RyYXBEYXRhLmNvbmZpZz8uR1VFU1RfVE9LRU5fSEVBREVSX05BTUUsXG4gICAgdW5hdXRob3JpemVkSGFuZGxlcjogZ3Vlc3RVbmF1dGhvcml6ZWRIYW5kbGVyLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlRXZlbnQoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAvLyBpZiAoIUFMTE9XX09SSUdJTlMuaW5jbHVkZXMoZXZlbnQub3JpZ2luKSkge1xuICAvLyAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBvcmlnaW4gaXMgbm90IGluIHRoZSBhbGxvd2VkIGxpc3QnKTtcbiAgLy8gfVxuXG4gIGlmICh0eXBlb2YgZXZlbnQuZGF0YSAhPT0gJ29iamVjdCcgfHwgZXZlbnQuZGF0YS50eXBlICE9PSBNRVNTQUdFX1RZUEUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE1lc3NhZ2UgdHlwZSBkb2VzIG5vdCBtYXRjaCB0eXBlIHVzZWQgZm9yIGVtYmVkZGVkIGNvbW1zYCk7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiBlbWJlZGRlZFBhZ2VJbml0aWFsaXplcihldmVudCkge1xuICB0cnkge1xuICAgIHZhbGlkYXRlTWVzc2FnZUV2ZW50KGV2ZW50KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nKCdpZ25vcmluZyBtZXNzYWdlIHVucmVsYXRlZCB0byBlbWJlZGRlZCBjb21tcycsIGVyciwgZXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBvcnQgPSBldmVudC5wb3J0cz8uWzBdO1xuICBpZiAoZXZlbnQuZGF0YS5oYW5kc2hha2UgPT09ICdwb3J0IHRyYW5zZmVyJyAmJiBwb3J0KSB7XG4gICAgbG9nKCdtZXNzYWdlIHBvcnQgcmVjZWl2ZWQnLCBldmVudCk7XG5cbiAgICBTd2l0Y2hib2FyZC5pbml0KHtcbiAgICAgIHBvcnQsXG4gICAgICBuYW1lOiAnc3VwZXJzZXQnLFxuICAgICAgZGVidWc6IGRlYnVnTW9kZSxcbiAgICB9KTtcblxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG5cbiAgICBTd2l0Y2hib2FyZC5kZWZpbmVNZXRob2QoXG4gICAgICAnZ3Vlc3RUb2tlbicsXG4gICAgICAoeyBndWVzdFRva2VuIH06IHsgZ3Vlc3RUb2tlbjogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgc2V0dXBHdWVzdENsaWVudChndWVzdFRva2VuKTtcbiAgICAgICAgaWYgKCFzdGFydGVkKSB7XG4gICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuXG4gICAgU3dpdGNoYm9hcmQuZGVmaW5lTWV0aG9kKCdnZXRTY3JvbGxTaXplJywgZW1iZWRkZWRBcGkuZ2V0U2Nyb2xsU2l6ZSk7XG4gICAgU3dpdGNoYm9hcmQuZGVmaW5lTWV0aG9kKFxuICAgICAgJ2dldERhc2hib2FyZFBlcm1hbGluaycsXG4gICAgICBlbWJlZGRlZEFwaS5nZXREYXNoYm9hcmRQZXJtYWxpbmssXG4gICAgKTtcbiAgICBTd2l0Y2hib2FyZC5kZWZpbmVNZXRob2QoJ2dldEFjdGl2ZVRhYnMnLCBlbWJlZGRlZEFwaS5nZXRBY3RpdmVUYWJzKTtcbiAgICBTd2l0Y2hib2FyZC5kZWZpbmVNZXRob2QoJ2dldERhdGFNYXNrJywgZW1iZWRkZWRBcGkuZ2V0RGF0YU1hc2spO1xuICAgIFN3aXRjaGJvYXJkLmRlZmluZU1ldGhvZCgnZ2V0Q2hhcnRTdGF0ZXMnLCBlbWJlZGRlZEFwaS5nZXRDaGFydFN0YXRlcyk7XG4gICAgU3dpdGNoYm9hcmQuZGVmaW5lTWV0aG9kKFxuICAgICAgJ3NldFRoZW1lQ29uZmlnJyxcbiAgICAgIChwYXlsb2FkOiB7IHRoZW1lQ29uZmlnOiBTdXBlcnNldFRoZW1lQ29uZmlnIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyB0aGVtZUNvbmZpZyB9ID0gcGF5bG9hZDtcbiAgICAgICAgbG9nKCdSZWNlaXZlZCBzZXRUaGVtZUNvbmZpZyByZXF1ZXN0OicsIHRoZW1lQ29uZmlnKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHRoZW1lQ29udHJvbGxlciA9IGdldFRoZW1lQ29udHJvbGxlcigpO1xuICAgICAgICAgIHRoZW1lQ29udHJvbGxlci5zZXRUaGVtZUNvbmZpZyh0aGVtZUNvbmZpZyk7XG4gICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ1RoZW1lIGFwcGxpZWQnIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbG9nZ2luZy5lcnJvcignRmFpbGVkIHRvIGFwcGx5IHRoZW1lIGNvbmZpZzonLCBlcnJvcik7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gYXBwbHkgdGhlbWUgY29uZmlnOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcblxuICAgIFN3aXRjaGJvYXJkLmRlZmluZU1ldGhvZChcbiAgICAgICdzZXRUaGVtZU1vZGUnLFxuICAgICAgKHBheWxvYWQ6IHsgbW9kZTogJ2RlZmF1bHQnIHwgJ2RhcmsnIHwgJ3N5c3RlbScgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IG1vZGUgfSA9IHBheWxvYWQ7XG4gICAgICAgIGxvZygnUmVjZWl2ZWQgc2V0VGhlbWVNb2RlIHJlcXVlc3Q6JywgbW9kZSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB0aGVtZUNvbnRyb2xsZXIgPSBnZXRUaGVtZUNvbnRyb2xsZXIoKTtcblxuICAgICAgICAgIGNvbnN0IHRoZW1lTW9kZU1hcDogUmVjb3JkPHN0cmluZywgVGhlbWVNb2RlPiA9IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFRoZW1lTW9kZS5ERUZBVUxULFxuICAgICAgICAgICAgZGFyazogVGhlbWVNb2RlLkRBUkssXG4gICAgICAgICAgICBzeXN0ZW06IFRoZW1lTW9kZS5TWVNURU0sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IHRoZW1lTW9kZSA9IHRoZW1lTW9kZU1hcFttb2RlXTtcbiAgICAgICAgICBpZiAoIXRoZW1lTW9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRoZW1lIG1vZGU6ICR7bW9kZX1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGVtZUNvbnRyb2xsZXIuc2V0VGhlbWVNb2RlKHRoZW1lTW9kZSk7XG4gICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYFRoZW1lIG1vZGUgc2V0IHRvICR7bW9kZX1gIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbG9nZ2luZy5kZWJ1ZygnVGhlbWUgbW9kZSBub3QgY2hhbmdlZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVGhlbWUgbG9ja2VkIHRvIGN1cnJlbnQgbW9kZWAsXG4gICAgICAgICAgICBzaWxlbnQ6IHRydWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuXG4gICAgU3dpdGNoYm9hcmQuc3RhcnQoKTtcbiAgfVxufSk7XG5cbi8vIENsZWFuIHVwIHRoZW1lIGNvbnRyb2xsZXIgb24gcGFnZSB1bmxvYWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udHJvbGxlciA9IGdldFRoZW1lQ29udHJvbGxlcigpO1xuICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICBsb2coJ0Rlc3Ryb3lpbmcgdGhlbWUgY29udHJvbGxlcicpO1xuICAgICAgY29udHJvbGxlci5kZXN0cm95KCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dpbmcud2FybignRmFpbGVkIHRvIGRlc3Ryb3kgdGhlbWUgY29udHJvbGxlcjonLCBlcnJvcik7XG4gIH1cbn0pO1xuXG5sb2coJ2VtYmVkIHBhZ2UgaXMgcmVhZHkgdG8gcmVjZWl2ZSBtZXNzYWdlcycpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/embedded/index.tsx\n\n}");

/***/ }),

/***/ "./src/embedded/utils.ts":
/*!*******************************!*\
  !*** ./src/embedded/utils.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDataMaskChangeTrigger: () => (/* binding */ getDataMaskChangeTrigger)\n/* harmony export */ });\n/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ \"./node_modules/lodash/isEmpty.js\");\n/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_dashboard_components_nativeFilters_FiltersConfigModal_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/dashboard/components/nativeFilters/FiltersConfigModal/utils */ \"./src/dashboard/components/nativeFilters/FiltersConfigModal/utils.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */ \n\n\nconst getDataMaskChangeTrigger = (dataMask, previousDataMask)=>{\n    let crossFiltersChanged = false;\n    let nativeFiltersChanged = false;\n    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(dataMask) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(previousDataMask)) {\n        for(const key in dataMask){\n            if (key.startsWith(src_dashboard_components_nativeFilters_FiltersConfigModal_utils__WEBPACK_IMPORTED_MODULE_2__.NATIVE_FILTER_PREFIX) && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(dataMask[key], previousDataMask[key])) {\n                nativeFiltersChanged = true;\n                break;\n            } else if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(dataMask[key], previousDataMask[key])) {\n                crossFiltersChanged = true;\n                break;\n            }\n        }\n    }\n    return {\n        crossFiltersChanged,\n        nativeFiltersChanged\n    };\n};\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW1iZWRkZWQvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBR0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJzZXQvLi9zcmMvZW1iZWRkZWQvdXRpbHMudHM/OWU1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IERhdGFNYXNrU3RhdGVXaXRoSWQgfSBmcm9tICdAc3VwZXJzZXQtdWkvY29yZSc7XG5pbXBvcnQgeyBpc0VtcHR5LCBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE5BVElWRV9GSUxURVJfUFJFRklYIH0gZnJvbSAnc3JjL2Rhc2hib2FyZC9jb21wb25lbnRzL25hdGl2ZUZpbHRlcnMvRmlsdGVyc0NvbmZpZ01vZGFsL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGdldERhdGFNYXNrQ2hhbmdlVHJpZ2dlciA9IChcbiAgZGF0YU1hc2s6IERhdGFNYXNrU3RhdGVXaXRoSWQsXG4gIHByZXZpb3VzRGF0YU1hc2s6IERhdGFNYXNrU3RhdGVXaXRoSWQsXG4pID0+IHtcbiAgbGV0IGNyb3NzRmlsdGVyc0NoYW5nZWQgPSBmYWxzZTtcbiAgbGV0IG5hdGl2ZUZpbHRlcnNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgaWYgKCFpc0VtcHR5KGRhdGFNYXNrKSAmJiAhaXNFbXB0eShwcmV2aW91c0RhdGFNYXNrKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGFNYXNrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGtleS5zdGFydHNXaXRoKE5BVElWRV9GSUxURVJfUFJFRklYKSAmJlxuICAgICAgICAhaXNFcXVhbChkYXRhTWFza1trZXldLCBwcmV2aW91c0RhdGFNYXNrW2tleV0pXG4gICAgICApIHtcbiAgICAgICAgbmF0aXZlRmlsdGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoIWlzRXF1YWwoZGF0YU1hc2tba2V5XSwgcHJldmlvdXNEYXRhTWFza1trZXldKSkge1xuICAgICAgICBjcm9zc0ZpbHRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGNyb3NzRmlsdGVyc0NoYW5nZWQsIG5hdGl2ZUZpbHRlcnNDaGFuZ2VkIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/embedded/utils.ts\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk preload function */
/******/ 	(() => {
/******/ 		__webpack_require__.H = {};
/******/ 		__webpack_require__.G = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.H).map((key) => {
/******/ 				__webpack_require__.H[key](chunkId);
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "vendors") return "" + chunkId + ".9e63ff19.entry.js";
/******/ 			if (chunkId === "thumbnail") return "" + chunkId + ".0759d391.entry.js";
/******/ 			if (chunkId === "vendors-node_modules_pmmmwh_react-refresh-webpack-plugin_lib_runtime_RefreshUtils_js-node_mod-945cee") return "" + chunkId + ".bda5c9cd.entry.js";
/******/ 			if (chunkId === "vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_day-010b32") return "" + chunkId + ".a5425fad.entry.js";
/******/ 			if (chunkId === "vendors-node_modules_d3-tip_index_js-node_modules_diff-match-patch_index_js-node_modules_enco-4201fc") return "" + chunkId + ".35185d78.entry.js";
/******/ 			if (chunkId === "packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319") return "" + chunkId + ".28ef4793.entry.js";
/******/ 			if (chunkId === "src_components_MessageToasts_ToastContainer_tsx-src_setup_setupCodeOverrides_ts-src_setup_set-aa4376") return "" + chunkId + ".76542957.entry.js";
/******/ 			if (chunkId === "embedded") return "" + chunkId + ".2c93b5a3.entry.js";
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"node_modules_antd_locale_en_US_js-node_modules_rc-pagination_lib_locale_en_US_js-node_modules-669ea9":"88554170","node_modules_antd_locale_fr_FR_js-node_modules_rc-pagination_lib_locale_fr_FR_js-node_modules-578d70":"158601e7","node_modules_antd_locale_es_ES_js-node_modules_rc-pagination_lib_locale_es_ES_js-node_modules-5e0740":"65f5ced8","node_modules_antd_locale_it_IT_js":"490079e4","node_modules_antd_locale_zh_CN_js-node_modules_rc-pagination_lib_locale_zh_CN_js-node_modules-02a830":"53e28a38","node_modules_antd_locale_ja_JP_js":"ad7249c9","node_modules_antd_locale_de_DE_js-node_modules_rc-pagination_lib_locale_de_DE_js-node_modules-78b21c":"aa9330a7","node_modules_antd_locale_pt_PT_js":"60ee454e","node_modules_antd_locale_pt_BR_js":"e6217ccf","node_modules_antd_locale_ru_RU_js":"b965c2b9","node_modules_antd_locale_ko_KR_js":"c9db84b8","node_modules_antd_locale_sk_SK_js":"6296f8db","node_modules_antd_locale_sl_SI_js":"4d9905ee","node_modules_antd_locale_nl_NL_js":"f3add129","node_modules_rehype-raw_index_js":"228a2b6c","node_modules_react-markdown_index_js":"f0f13fbb","node_modules_brace_mode_sql_js":"45718780","node_modules_brace_mode_markdown_js":"1515056c","node_modules_brace_mode_css_js":"f3d5fdc1","node_modules_brace_mode_json_js":"89bfa428","node_modules_brace_mode_yaml_js":"034104b9","node_modules_brace_mode_html_js":"cf2db3d7","node_modules_brace_mode_javascript_js":"0956a797","node_modules_brace_theme_textmate_js":"d8fe6574","node_modules_brace_theme_github_js":"5ee163de","node_modules_brace_ext_language_tools_js":"bc6bc53a","node_modules_brace_ext_searchbox_js":"ad339466","node_modules_diff-match-patch_index_js-packages_superset-ui-core_node_modules_ace-builds_src--8a194d":"480f4a44","packages_superset-ui-core_node_modules_ace-builds_src-noconflict_ace_js":"99371a90","packages_superset-ui-core_node_modules_ace-builds_src-min-noconflict_worker-css_js":"02f4032c","packages_superset-ui-core_node_modules_ace-builds_src-min-noconflict_worker-javascript_js":"a989cc5d","packages_superset-ui-core_node_modules_ace-builds_src-min-noconflict_worker-html_js":"a384c0df","packages_superset-ui-core_node_modules_ace-builds_src-min-noconflict_ace_js":"024e53c7","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_ballot_svg":"06ed661d","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_big_number_chart_tile_svg":"97c95346","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_binoculars_svg":"4a7f7c33","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_category_svg":"c9ede4fb","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_certified_svg":"6b0f5baa","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_checkbox_half_svg":"c2d80a77","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_checkbox_off_svg":"b3ffe876","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_checkbox_on_svg":"5bd719b0","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_circle_solid_svg":"89a19e76","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_drag_svg":"7fafc6ce","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_error_solid_small_red_svg":"8f8eefaa","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_full_svg":"652dae4d","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_layers_svg":"b02bb8e7","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_queued_svg":"82a1204c","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_redo_svg":"aea6cbbd","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_running_svg":"633c3f36","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_sort_svg":"4cce6ff1","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_sort_asc_svg":"c69e8e86","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_sort_desc_svg":"2df361a2","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_square_svg":"492461a3","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_triangle_down_svg":"73912fa9","node_modules_svgr_webpack_dist_index_js_src_assets_images_icons_undo_svg":"f31af459","src_components_Datasource_components_DatasourceEditor_index_ts":"1d721713","packages_superset-ui-chart-controls_src_index_ts":"3da031e1","packages_superset-ui-core_src_index_ts":"d1a86f3d","plugins_legacy-plugin-chart-calendar_src_ReactCalendar_jsx":"486fb196","plugins_legacy-plugin-chart-chord_src_ReactChord_jsx":"bfb9f196","plugins_legacy-plugin-chart-country-map_src_ReactCountryMap_jsx":"f9664c85","plugins_legacy-plugin-chart-horizon_src_HorizonChart_jsx":"b3ab75c1","vendors-node_modules_react-map-gl_dist_esm_index_js-node_modules_mapbox-gl_dist_mapbox-gl_css-e30058":"097332bf","plugins_legacy-plugin-chart-map-box_src_MapBox_jsx-data_image_svg_xml_charset_utf-8_3Csvg_vie-8b503a":"df592ca2","plugins_legacy-plugin-chart-map-box_src_transformProps_js-data_image_svg_xml_charset_utf-8_3C-925c43":"3b7ed8fd","plugins_legacy-plugin-chart-paired-t-test_src_PairedTTest_jsx":"b5841771","plugins_legacy-plugin-chart-parallel-coordinates_src_ReactParallelCoordinates_jsx":"20086523","plugins_legacy-plugin-chart-partition_src_ReactPartition_jsx":"3d6a7a46","plugins_legacy-plugin-chart-rose_src_ReactRose_jsx":"54b6073c","plugins_plugin-chart-table_src_TableChart_tsx":"b8d44fe9","plugins_plugin-chart-word-cloud_src_chart_WordCloud_tsx":"4bbd54cf","plugins_legacy-plugin-chart-world-map_src_ReactWorldMap_jsx":"5154af85","plugins_legacy-preset-chart-nvd3_src_ReactNVD3_jsx":"98dfcc1b","vendors-node_modules_vm-browserify_index_js-node_modules_deck_gl_geo-layers_dist_tile-layer_t-3633ab":"37c4b9d5","plugins_legacy-preset-chart-deckgl_src_layers_Arc_Arc_tsx-data_image_svg_xml_charset_utf-8_3C-2eb064":"bcc0e500","plugins_legacy-preset-chart-deckgl_src_layers_Geojson_Geojson_tsx-data_image_svg_xml_charset_-be8f35":"4f316991","plugins_legacy-preset-chart-deckgl_src_layers_Grid_Grid_tsx-data_image_svg_xml_charset_utf-8_-f3bc2a":"a9e75de1","plugins_legacy-preset-chart-deckgl_src_layers_Hex_Hex_tsx-data_image_svg_xml_charset_utf-8_3C-97a23f":"53ea80f5","plugins_legacy-preset-chart-deckgl_src_layers_Heatmap_Heatmap_tsx-data_image_svg_xml_charset_-bac63e":"8d445da6","plugins_legacy-preset-chart-deckgl_src_Multi_Multi_tsx-data_image_svg_xml_charset_utf-8_3Csvg-1b7faf":"b32979d9","plugins_legacy-preset-chart-deckgl_src_layers_Path_Path_tsx-data_image_svg_xml_charset_utf-8_-82da0d":"b14a253b","plugins_legacy-preset-chart-deckgl_src_layers_Polygon_Polygon_tsx-data_image_svg_xml_charset_-9e403b":"6a11c829","plugins_legacy-preset-chart-deckgl_src_layers_Scatter_Scatter_tsx-data_image_svg_xml_charset_-62260d":"105ffe81","plugins_legacy-preset-chart-deckgl_src_layers_Screengrid_Screengrid_tsx-data_image_svg_xml_ch-8473d3":"e66a5f4c","plugins_legacy-preset-chart-deckgl_src_layers_Contour_Contour_tsx-data_image_svg_xml_charset_-bc0607":"6f9a757a","vendors-node_modules_geostyler-openlayers-parser_build_dist_OlStyleParser_js-node_modules_ol_-d45488":"67b9004c","plugins_plugin-chart-cartodiagram_src_CartodiagramPlugin_tsx":"555be5be","vendors-node_modules_echarts_lib_chart_bar_install_js-node_modules_echarts_lib_chart_boxplot_-9902f1":"9356b542","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_BigNumber_BigNumberViz_tsx":"cfdbb2cc","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_BoxPlot_EchartsBoxPlot_tsx":"05460a28","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Timeseries_EchartsTimeseries_tsx":"878442d6","plugins_plugin-chart-echarts_src_BigNumber_BigNumberPeriodOverPeriod_PopKPI_tsx":"24d1b796","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_MixedTimeseries_EchartsMixedTim-88fde0":"600f6543","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Pie_EchartsPie_tsx":"0f50abbc","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Graph_EchartsGraph_tsx":"0953d26f","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Gauge_EchartsGauge_tsx":"c798dde3","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Histogram_Histogram_tsx":"88d0d03f","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Radar_EchartsRadar_tsx":"37422fe8","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Funnel_EchartsFunnel_tsx":"0f999404","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Tree_EchartsTree_tsx":"55ef06e6","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Heatmap_Heatmap_tsx":"48af25fb","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Treemap_EchartsTreemap_tsx":"0ceb7b79","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Sunburst_EchartsSunburst_tsx":"c4c8c5b5","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Bubble_EchartsBubble_tsx":"daf6e19f","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Sankey_Sankey_tsx":"301b227f","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Waterfall_EchartsWaterfall_tsx":"e27b9b73","node_modules_buffer_index_js-plugins_plugin-chart-echarts_src_Gantt_EchartsGantt_tsx":"352cfcc6","src_filters_components_Select_SelectFilterPlugin_tsx":"37e2a7bb","src_filters_components_Range_RangeFilterPlugin_tsx":"6b84c50c","src_filters_components_Time_TimeFilterPlugin_tsx":"fb440a28","src_filters_components_TimeColumn_TimeColumnFilterPlugin_tsx":"89d33efb","src_filters_components_TimeGrain_TimeGrainFilterPlugin_tsx":"c524b5f7","plugins_plugin-chart-pivot-table_src_PivotTableChart_tsx":"8670f045","plugins_plugin-chart-handlebars_src_Handlebars_tsx":"cabdb3c9","plugins_plugin-chart-ag-grid-table_src_AgGridTableChart_tsx":"29a02705","src_visualizations_TimeTable_TimeTable_tsx":"477aa1b4","packages_superset-core_src_ui_index_ts":"08533a97","DashboardPage":"4d0e89ec","node_modules_echarts_lib_i18n_langAR_js":"868434e4","node_modules_echarts_lib_i18n_langCS_js":"d9f680d1","node_modules_echarts_lib_i18n_langDE_js":"45bed612","node_modules_echarts_lib_i18n_langES_js":"3670a634","node_modules_echarts_lib_i18n_langFA_js":"27134455","node_modules_echarts_lib_i18n_langFI_js":"0858d01a","node_modules_echarts_lib_i18n_langFR_js":"f76c60ad","node_modules_echarts_lib_i18n_langHU_js":"c176d081","node_modules_echarts_lib_i18n_langIT_js":"4e639036","node_modules_echarts_lib_i18n_langJA_js":"67ef1a18","node_modules_echarts_lib_i18n_langKO_js":"0b6a4285","node_modules_echarts_lib_i18n_langNL_js":"80259606","node_modules_echarts_lib_i18n_langPL_js":"ae2b4da1","node_modules_echarts_lib_i18n_langPT-br_js":"4e61fcfb","node_modules_echarts_lib_i18n_langRO_js":"26dafa63","node_modules_echarts_lib_i18n_langRU_js":"bd7a57f0","node_modules_echarts_lib_i18n_langSI_js":"4330f4af","node_modules_echarts_lib_i18n_langSV_js":"d0d6abba","node_modules_echarts_lib_i18n_langTH_js":"06054328","node_modules_echarts_lib_i18n_langTR_js":"017db0dc","node_modules_echarts_lib_i18n_langUK_js":"d549eac7","node_modules_echarts_lib_i18n_langVI_js":"8881572c","vendors-node_modules_visx_responsive_esm_components_ParentSize_js-node_modules_ace-builds_src-b15192":"6a162e79","src_components_Chart_ChartContainer_jsx-src_explore_components_controls_FilterControl_AdhocFi-b96a22":"9fd0d09c","DashboardContainer":"44f405a1","node_modules_react-syntax-highlighter_dist_cjs_languages_hljs_sql_js":"3fce05ad","node_modules_react-syntax-highlighter_dist_cjs_languages_hljs_htmlbars_js":"5e17710c","node_modules_react-syntax-highlighter_dist_cjs_languages_hljs_markdown_js":"65806f64","node_modules_react-syntax-highlighter_dist_cjs_languages_hljs_json_js":"b8c0c14b","src_dashboard_components_OverwriteConfirm_OverwriteConfirmModal_tsx":"e963826a","node_modules_html2canvas_dist_html2canvas_js":"c5b6f508","node_modules_canvg_lib_index_es_js":"1843bac4"}[chunkId] + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("embedded." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0d82cec87ccc6d1a774f")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "superset:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "superset";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("antd", "5.27.6", () => (() => (__webpack_require__(/*! ./node_modules/antd/es/index.js */ "./node_modules/antd/es/index.js"))), 1);
/******/ 					register("react-dom", "17.0.2", () => (() => (__webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"))), 1);
/******/ 					register("react", "17.0.2", () => (() => (__webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"))), 1);
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 		
/******/ 			var onAccepted = function () {
/******/ 				return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 					// handle errors in accept handlers and self accepted module load
/******/ 					if (error) {
/******/ 						return setStatus("fail").then(function () {
/******/ 							throw error;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					if (queuedInvalidatedModules) {
/******/ 						return internalApply(options).then(function (list) {
/******/ 							outdatedModules.forEach(function (moduleId) {
/******/ 								if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 							});
/******/ 							return list;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					return setStatus("idle").then(function () {
/******/ 						return outdatedModules;
/******/ 					});
/******/ 				});
/******/ 			};
/******/ 		
/******/ 			return Promise.all(
/******/ 				results
/******/ 					.filter(function (result) {
/******/ 						return result.apply;
/******/ 					})
/******/ 					.map(function (result) {
/******/ 						return result.apply(reportError);
/******/ 					})
/******/ 			)
/******/ 				.then(function (applyResults) {
/******/ 					applyResults.forEach(function (modules) {
/******/ 						if (modules) {
/******/ 							for (var i = 0; i < modules.length; i++) {
/******/ 								outdatedModules.push(modules[i]);
/******/ 							}
/******/ 						}
/******/ 					});
/******/ 				})
/******/ 				.then(onAccepted);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		const setup = (moduleId) => {
/******/ 			const refresh = {
/******/ 				moduleId: moduleId,
/******/ 				register: (type, id) => {
/******/ 					const typeId = moduleId + " " + id;
/******/ 					refresh.runtime.register(type, typeId);
/******/ 				},
/******/ 				signature: () => (refresh.runtime.createSignatureFunctionForTransform()),
/******/ 				runtime: {
/******/ 					createSignatureFunctionForTransform: () => ((type) => (type)),
/******/ 					register: x => {}
/******/ 				},
/******/ 			};
/******/ 			return refresh;
/******/ 		}
/******/ 		
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				const hotRequire = (request) => (webpackRequire(request));
/******/ 				const createPropertyDescriptor = (name) => {
/******/ 					return {
/******/ 						configurable: true,
/******/ 						enumerable: true,
/******/ 						get: () => (webpackRequire[name]),
/******/ 						set: (value) => {
/******/ 							webpackRequire[name] = value;
/******/ 						},
/******/ 					};
/******/ 				};
/******/ 				for (const name in webpackRequire) {
/******/ 					if (Object.prototype.hasOwnProperty.call(webpackRequire, name) && name !== "$Refresh$") {
/******/ 						Object.defineProperty(hotRequire, name, createPropertyDescriptor(name));
/******/ 					}
/******/ 				}
/******/ 				hotRequire.$Refresh$ = setup(options.id);
/******/ 				originalFactory.call(this, moduleObject, moduleExports, hotRequire);
/******/ 			};
/******/ 		});
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map(p=>{return+p==p?+p:p})},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var exists = (scope, key) => {
/******/ 			return scope && __webpack_require__.o(scope, key);
/******/ 		}
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var eagerOnly = (versions) => {
/******/ 			return Object.keys(versions).reduce((filtered, version) => {
/******/ 					if (versions[version].eager) {
/******/ 						filtered[version] = versions[version];
/******/ 					}
/******/ 					return filtered;
/******/ 			}, {});
/******/ 		};
/******/ 		var findLatestVersion = (scope, key, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key];
/******/ 		};
/******/ 		var findSatisfyingVersion = (scope, key, requiredVersion, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion, eager) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ")" + (eager ? " for eager consumption" : "") + " of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var fail = (msg) => {
/******/ 			throw new Error(msg);
/******/ 		}
/******/ 		var failAsNotExist = (scopeName, key) => {
/******/ 			return fail("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		}
/******/ 		var warn = /*#__PURE__*/ (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, key, eager, c, d) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then && !eager) {
/******/ 				return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], key, false, c, d));
/******/ 			}
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], key, eager, c, d);
/******/ 		});
/******/ 		
/******/ 		var useFallback = (scopeName, key, fallback) => {
/******/ 			return fallback ? fallback() : failAsNotExist(scopeName, key);
/******/ 		}
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key, eager, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			return get(findLatestVersion(scope, key, eager));
/******/ 		});
/******/ 		var loadVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);
/******/ 			if (satisfyingVersion) return get(satisfyingVersion);
/******/ 			warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager))
/******/ 			return get(findLatestVersion(scope, key, eager));
/******/ 		});
/******/ 		var loadStrictVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);
/******/ 			if (satisfyingVersion) return get(satisfyingVersion);
/******/ 			if (fallback) return fallback();
/******/ 			fail(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key, eager, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var loadSingletonVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			if (!satisfy(requiredVersion, version)) {
/******/ 				warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			}
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var loadStrictSingletonVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			if (!satisfy(requiredVersion, version)) {
/******/ 				fail(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			}
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom": () => (loadSingletonVersion("default", "react-dom", true, [1,17,0,2], () => (() => (__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"))))),
/******/ 			"webpack/sharing/consume/default/react/react": () => (loadSingletonVersion("default", "react", true, [1,17,0,2], () => (() => (__webpack_require__(/*! react */ "./node_modules/react/index.js"))))),
/******/ 			"webpack/sharing/consume/default/antd/antd": () => (loadSingletonVersion("default", "antd", true, [1,5,26,0], () => (() => (__webpack_require__(/*! antd */ "./node_modules/antd/es/index.js")))))
/******/ 		};
/******/ 		var initialConsumes = ["webpack/sharing/consume/default/react-dom/react-dom","webpack/sharing/consume/default/react/react","webpack/sharing/consume/default/antd/antd"];
/******/ 		initialConsumes.forEach((id) => {
/******/ 			__webpack_require__.m[id] = (module) => {
/******/ 				// Handle case when module is used sync
/******/ 				installedModules[id] = 0;
/******/ 				delete __webpack_require__.c[id];
/******/ 				var factory = moduleToHandlerMapping[id]();
/******/ 				if(typeof factory !== "function") throw new Error("Shared module is not available for eager consumption: " + id);
/******/ 				module.exports = factory();
/******/ 			}
/******/ 		});
/******/ 		var chunkMapping = {
/******/ 			"webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom",
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319": [
/******/ 				"webpack/sharing/consume/default/antd/antd"
/******/ 			]
/******/ 		};
/******/ 		var startedInstallModules = {};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					if(!startedInstallModules[id]) {
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					startedInstallModules[id] = true;
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"embedded": 0,
/******/ 			"webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		__webpack_require__.H.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && "webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef" != chunkId) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				link.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "preload";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		globalThis["webpackHotUpdatesuperset"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					var acceptPromises = [];
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									var result;
/******/ 									try {
/******/ 										result = callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 									if (result && typeof result.then === "function") {
/******/ 										acceptPromises.push(result);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					var onAccepted = function () {
/******/ 						// Load self accepted modules
/******/ 						for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 							var item = outdatedSelfAcceptedModules[o];
/******/ 							var moduleId = item.module;
/******/ 							try {
/******/ 								item.require(moduleId);
/******/ 							} catch (err) {
/******/ 								if (typeof item.errorHandler === "function") {
/******/ 									try {
/******/ 										item.errorHandler(err, {
/******/ 											moduleId: moduleId,
/******/ 											module: __webpack_require__.c[moduleId]
/******/ 										});
/******/ 									} catch (err1) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "self-accept-error-handler-errored",
/******/ 												moduleId: moduleId,
/******/ 												error: err1,
/******/ 												originalError: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err1);
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								} else {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					};
/******/ 		
/******/ 					return Promise.all(acceptPromises)
/******/ 						.then(onAccepted)
/******/ 						.then(function () {
/******/ 							return outdatedModules;
/******/ 						});
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk preload trigger */
/******/ 	(() => {
/******/ 		var chunkToChildrenMap = {
/******/ 			"DashboardPage": [
/******/ 				"vendors",
/******/ 				"vendors-node_modules_visx_responsive_esm_components_ParentSize_js-node_modules_ace-builds_src-b15192",
/******/ 				"src_components_Chart_ChartContainer_jsx-src_explore_components_controls_FilterControl_AdhocFi-b96a22",
/******/ 				"DashboardContainer"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.preload = (chunkId) => {
/******/ 			var chunks = chunkToChildrenMap[chunkId];
/******/ 			Array.isArray(chunks) && chunks.map(__webpack_require__.G);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendors","thumbnail","vendors-node_modules_pmmmwh_react-refresh-webpack-plugin_lib_runtime_RefreshUtils_js-node_mod-945cee","vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_day-010b32","vendors-node_modules_d3-tip_index_js-node_modules_diff-match-patch_index_js-node_modules_enco-4201fc","webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef","packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319","src_components_MessageToasts_ToastContainer_tsx-src_setup_setupCodeOverrides_ts-src_setup_set-aa4376"], () => (__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors","thumbnail","vendors-node_modules_pmmmwh_react-refresh-webpack-plugin_lib_runtime_RefreshUtils_js-node_mod-945cee","vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_day-010b32","vendors-node_modules_d3-tip_index_js-node_modules_diff-match-patch_index_js-node_modules_enco-4201fc","webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef","packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319","src_components_MessageToasts_ToastContainer_tsx-src_setup_setupCodeOverrides_ts-src_setup_set-aa4376"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=0&pathname=%2Fws&logging=error&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%2C%22runtimeErrors%22%3A%22error%2520%253D%253E%2520%21%252FResizeObserver%252F.test%28error.message%29%22%7D&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["vendors","thumbnail","vendors-node_modules_pmmmwh_react-refresh-webpack-plugin_lib_runtime_RefreshUtils_js-node_mod-945cee","vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_day-010b32","vendors-node_modules_d3-tip_index_js-node_modules_diff-match-patch_index_js-node_modules_enco-4201fc","webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef","packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319","src_components_MessageToasts_ToastContainer_tsx-src_setup_setupCodeOverrides_ts-src_setup_set-aa4376"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors","thumbnail","vendors-node_modules_pmmmwh_react-refresh-webpack-plugin_lib_runtime_RefreshUtils_js-node_mod-945cee","vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_day-010b32","vendors-node_modules_d3-tip_index_js-node_modules_diff-match-patch_index_js-node_modules_enco-4201fc","webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef","packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319","src_components_MessageToasts_ToastContainer_tsx-src_setup_setupCodeOverrides_ts-src_setup_set-aa4376"], () => (__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js?sockHost=0.0.0.0&sockPath=/ws&sockProtocol=http")))
/******/ 	__webpack_require__.O(undefined, ["vendors","thumbnail","vendors-node_modules_pmmmwh_react-refresh-webpack-plugin_lib_runtime_RefreshUtils_js-node_mod-945cee","vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_day-010b32","vendors-node_modules_d3-tip_index_js-node_modules_diff-match-patch_index_js-node_modules_enco-4201fc","webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef","packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319","src_components_MessageToasts_ToastContainer_tsx-src_setup_setupCodeOverrides_ts-src_setup_set-aa4376"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http://localhost:9000")))
/******/ 	__webpack_require__.O(undefined, ["vendors","thumbnail","vendors-node_modules_pmmmwh_react-refresh-webpack-plugin_lib_runtime_RefreshUtils_js-node_mod-945cee","vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_day-010b32","vendors-node_modules_d3-tip_index_js-node_modules_diff-match-patch_index_js-node_modules_enco-4201fc","webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef","packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319","src_components_MessageToasts_ToastContainer_tsx-src_setup_setupCodeOverrides_ts-src_setup_set-aa4376"], () => (__webpack_require__("./src/preamble.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","thumbnail","vendors-node_modules_pmmmwh_react-refresh-webpack-plugin_lib_runtime_RefreshUtils_js-node_mod-945cee","vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_day-010b32","vendors-node_modules_d3-tip_index_js-node_modules_diff-match-patch_index_js-node_modules_enco-4201fc","webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-153fef","packages_superset-ui-core_src_ui-overrides_ExtensionsRegistry_ts-src_components_UiConfigConte-27f319","src_components_MessageToasts_ToastContainer_tsx-src_setup_setupCodeOverrides_ts-src_setup_set-aa4376"], () => (__webpack_require__("./src/embedded/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;