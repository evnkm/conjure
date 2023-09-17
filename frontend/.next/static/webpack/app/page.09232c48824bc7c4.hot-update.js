"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Client.js":
/*!**********************************!*\
  !*** ./src/components/Client.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Client(param) {\n    let { imageFiles } = param;\n    var _chat;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imageFiles);\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function fetchChats() {\n        if (window !== undefined) {\n            setChat(JSON.parse(localStorage.getItem(\"chat\")));\n        }\n    }\n    function addChat(input, author) {\n        localStorage.setItem(\"chat\", JSON.stringify([\n            ...JSON.parse(localStorage.getItem(\"chat\")) || [],\n            {\n                message: input,\n                author: author\n            }\n        ]));\n        fetchChats();\n    }\n    async function query(input) {\n        const res = await fetch(\"/query\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                query: input,\n                type: selectedImage === null ? \"filter\" : \"qna\",\n                selectedImage: selectedImage\n            })\n        });\n        const data = await res.json();\n        if (data.type === \"filter\") {\n            return setImages(data.data);\n        }\n        if (data.type === \"qna\") {\n            return addChat(data.data, \"sys\");\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchChats();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                role: \"list\",\n                className: \"w-[75%] h-full grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 p-4\",\n                children: images.map((file, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative w-full h-fit\",\n                        onClick: ()=>{\n                            if (selectedImage === file) {\n                                setSelectedImage(null);\n                                addChat(\"\".concat(file, \" has been deselected.\"), \"sys\");\n                                return;\n                            }\n                            setSelectedImage(file);\n                            addChat(\"\".concat(file, \" has been selected.\"), \"sys\");\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative group aspect-square block w-full overflow-hidden \".concat(selectedImage === file && \"ring-2 ring-green-500\", \" rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/images/\".concat(file),\n                                    alt: \"\",\n                                    layout: \"fill\",\n                                    className: \"pointer-events-none object-cover object-center group-hover:opacity-75\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900\",\n                                children: file.name\n                            }, void 0, false, {\n                                fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"pointer-events-none block text-sm font-medium text-gray-500\",\n                                children: file.size\n                            }, void 0, false, {\n                                fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, key, true, {\n                        fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[25%] bg-pink-100 text-black h-full flex flex-col justify-between min-h-screen fixed top-0 right-0 p-4 border-l border-neutral-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-pink-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            style: {\n                                fontSize: \"2rem\",\n                                fontFamily: \"sans-serif\",\n                                paddingBottom: \"10px\",\n                                color: \"black\"\n                            },\n                            children: \"Ask Stanley\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full flex flex-col gap-2 overflow-auto pb-4\",\n                        children: (_chat = chat) === null || _chat === void 0 ? void 0 : _chat.map((c, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-fit break-words text-sm p-2 \".concat(c.author == \"me\" ? \"bg-blue-400 text-white\" : \"bg-neutral-100 text-black\", \" rounded-lg\"),\n                                children: c.message\n                            }, key, false, {\n                                fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full min-h-[64px] max-h-48 border border-neutral-300 rounded-lg text-black text-sm p-2\",\n                        value: input,\n                        onChange: (e)=>setInput(e.target.value),\n                        onKeyDownCapture: (e)=>{\n                            if (e.key === \"Enter\") {\n                                e.preventDefault();\n                                setInput(\"\");\n                                //add to localStorage chat object, which should be an array of objects with message and author\n                                addChat(input, \"me\");\n                                query(input);\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saniya/Documents/programming/hackmit23/conjure/frontend/src/components/Client.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Client, \"rN5VwR3eD8qIuMoxsN3E8KK3b64=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0QztBQUNiO0FBRWhCLFNBQVNHLE9BQU8sS0FBYztRQUFkLEVBQUVDLFVBQVUsRUFBRSxHQUFkO1FBK0ZwQkM7O0lBOUZULE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE1BQU1HLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUNHO0lBQ3JDLE1BQU0sQ0FBQ08sZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5ELFNBQVNZO1FBQ1AsSUFBSUMsV0FBV0MsV0FBVztZQUN4QlAsUUFBUVEsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDMUM7SUFDRjtJQUVBLFNBQVNDLFFBQVFkLEtBQUssRUFBRWUsTUFBTTtRQUM1QkgsYUFBYUksT0FBTyxDQUNsQixRQUNBTixLQUFLTyxTQUFTLENBQUM7ZUFDVFAsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ2xEO2dCQUFFSyxTQUFTbEI7Z0JBQU9lLFFBQVFBO1lBQU87U0FDbEM7UUFFSFI7SUFDRjtJQUVBLGVBQWVZLE1BQU1uQixLQUFLO1FBQ3hCLE1BQU1vQixNQUFNLE1BQU1DLE1BQU0sVUFBVTtZQUNoQ0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNZCxLQUFLTyxTQUFTLENBQUM7Z0JBQ25CRSxPQUFPbkI7Z0JBQ1B5QixNQUFNcEIsa0JBQWtCLE9BQU8sV0FBVztnQkFDMUNBLGVBQWVBO1lBQ2pCO1FBQ0Y7UUFFQSxNQUFNcUIsT0FBTyxNQUFNTixJQUFJTyxJQUFJO1FBQzNCLElBQUlELEtBQUtELElBQUksS0FBSyxVQUFVO1lBQzFCLE9BQU9yQixVQUFVc0IsS0FBS0EsSUFBSTtRQUM1QjtRQUNBLElBQUlBLEtBQUtELElBQUksS0FBSyxPQUFPO1lBQ3ZCLE9BQU9YLFFBQVFZLEtBQUtBLElBQUksRUFBRTtRQUM1QjtJQUNGO0lBRUFoQyxnREFBU0EsQ0FBQztRQUNSYTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ3FCO2dCQUNDQyxNQUFLO2dCQUNMQyxXQUFVOzBCQUVUM0IsT0FBTzRCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDakIsOERBQUNDO3dCQUVDSixXQUFZO3dCQUNaSyxTQUFTOzRCQUNQLElBQUk5QixrQkFBa0IyQixNQUFNO2dDQUMxQjFCLGlCQUFpQjtnQ0FDakJRLFFBQVEsR0FBUSxPQUFMa0IsTUFBSywwQkFBd0I7Z0NBQ3hDOzRCQUNGOzRCQUNBMUIsaUJBQWlCMEI7NEJBQ2pCbEIsUUFBUSxHQUFRLE9BQUxrQixNQUFLLHdCQUFzQjt3QkFDeEM7OzBDQUVBLDhEQUFDSTtnQ0FDQ04sV0FBVyw2REFFVixPQURDekIsa0JBQWtCMkIsUUFBUSx5QkFDM0I7MENBRUQsNEVBQUNwQyxtREFBS0E7b0NBQ0p5QyxLQUFLLFdBQWdCLE9BQUxMO29DQUNoQk0sS0FBSTtvQ0FDSkMsUUFBTztvQ0FDUFQsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNVO2dDQUFFVixXQUFVOzBDQUNWRSxLQUFLUyxJQUFJOzs7Ozs7MENBRVosOERBQUNEO2dDQUFFVixXQUFVOzBDQUNWRSxLQUFLVSxJQUFJOzs7Ozs7O3VCQTVCUFQ7Ozs7Ozs7Ozs7MEJBaUNYLDhEQUFDRztnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFJTixXQUFVO2tDQUNiLDRFQUFDYTs0QkFBR0MsT0FBTztnQ0FBRUMsVUFBVTtnQ0FBUUMsWUFBWTtnQ0FBY0MsZUFBZTtnQ0FBUUMsT0FBTzs0QkFBUTtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBRXBHLDhEQUFDWjt3QkFBSU4sV0FBVTttQ0FDWi9CLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTWdDLEdBQUcsQ0FBQyxDQUFDa0IsR0FBR2hCLG9CQUNiLDhEQUFDRztnQ0FFQ04sV0FBVyx3Q0FJVixPQUhDbUIsRUFBRWxDLE1BQU0sSUFBSSxPQUNSLDJCQUNBLDZCQUNMOzBDQUVBa0MsRUFBRS9CLE9BQU87K0JBUExlOzs7Ozs7Ozs7O2tDQVdYLDhEQUFDaUI7d0JBQ0NwQixXQUFVO3dCQUNWcUIsT0FBT25EO3dCQUNQb0QsVUFBVSxDQUFDQyxJQUFNcEQsU0FBU29ELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDeENJLGtCQUFrQixDQUFDRjs0QkFDakIsSUFBSUEsRUFBRXBCLEdBQUcsS0FBSyxTQUFTO2dDQUNyQm9CLEVBQUVHLGNBQWM7Z0NBQ2hCdkQsU0FBUztnQ0FDVCw4RkFBOEY7Z0NBQzlGYSxRQUFRZCxPQUFPO2dDQUNmbUIsTUFBTW5COzRCQUNSO3dCQUNGOzs7Ozs7Ozs7Ozs7OztBQUtWO0dBN0h3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2xpZW50LmpzP2ZhMTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50KHsgaW1hZ2VGaWxlcyB9KSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGF0LCBzZXRDaGF0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKGltYWdlRmlsZXMpO1xuICBjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBmZXRjaENoYXRzKCkge1xuICAgIGlmICh3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0Q2hhdChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhdFwiKSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENoYXQoaW5wdXQsIGF1dGhvcikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJjaGF0XCIsXG4gICAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIC4uLihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhdFwiKSkgfHwgW10pLFxuICAgICAgICB7IG1lc3NhZ2U6IGlucHV0LCBhdXRob3I6IGF1dGhvciB9LFxuICAgICAgXSlcbiAgICApO1xuICAgIGZldGNoQ2hhdHMoKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KGlucHV0KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvcXVlcnlcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVyeTogaW5wdXQsXG4gICAgICAgIHR5cGU6IHNlbGVjdGVkSW1hZ2UgPT09IG51bGwgPyBcImZpbHRlclwiIDogXCJxbmFcIixcbiAgICAgICAgc2VsZWN0ZWRJbWFnZTogc2VsZWN0ZWRJbWFnZSxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gXCJmaWx0ZXJcIikge1xuICAgICAgcmV0dXJuIHNldEltYWdlcyhkYXRhLmRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSBcInFuYVwiKSB7XG4gICAgICByZXR1cm4gYWRkQ2hhdChkYXRhLmRhdGEsIFwic3lzXCIpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hDaGF0cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsXG4gICAgICAgIHJvbGU9XCJsaXN0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1bNzUlXSBoLWZ1bGwgZ3JpZCBncmlkLWNvbHMtMiBnYXAteC00IGdhcC15LTggc206Z3JpZC1jb2xzLTMgc206Z2FwLXgtNiBsZzpncmlkLWNvbHMtNCB4bDpnYXAteC04IHAtNFwiXG4gICAgICA+XG4gICAgICAgIHtpbWFnZXMubWFwKChmaWxlLCBrZXkpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgdy1mdWxsIGgtZml0YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW1hZ2UgPT09IGZpbGUpIHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEltYWdlKG51bGwpO1xuICAgICAgICAgICAgICAgIGFkZENoYXQoYCR7ZmlsZX0gaGFzIGJlZW4gZGVzZWxlY3RlZC5gLCBcInN5c1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJbWFnZShmaWxlKTtcbiAgICAgICAgICAgICAgYWRkQ2hhdChgJHtmaWxlfSBoYXMgYmVlbiBzZWxlY3RlZC5gLCBcInN5c1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBncm91cCBhc3BlY3Qtc3F1YXJlIGJsb2NrIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gJHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEltYWdlID09PSBmaWxlICYmIFwicmluZy0yIHJpbmctZ3JlZW4tNTAwXCJcbiAgICAgICAgICAgICAgfSByb3VuZGVkLWxnIGJnLWdyYXktMTAwIGZvY3VzLXdpdGhpbjpyaW5nLTIgZm9jdXMtd2l0aGluOnJpbmctaW5kaWdvLTUwMCBmb2N1cy13aXRoaW46cmluZy1vZmZzZXQtMiBmb2N1cy13aXRoaW46cmluZy1vZmZzZXQtZ3JheS0xMDBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7ZmlsZX1gfVxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBncm91cC1ob3ZlcjpvcGFjaXR5LTc1XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBtdC0yIGJsb2NrIHRydW5jYXRlIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAge2ZpbGUuc2l6ZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzI1JV0gYmctcGluay0xMDAgdGV4dC1ibGFjayBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gbWluLWgtc2NyZWVuIGZpeGVkIHRvcC0wIHJpZ2h0LTAgcC00IGJvcmRlci1sIGJvcmRlci1uZXV0cmFsLTMwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXBpbmstMTAwXCI+XG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIsIHBhZGRpbmdCb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkFzayBTdGFubGV5PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGdhcC0yIG92ZXJmbG93LWF1dG8gcGItNFwiPlxuICAgICAgICAgIHtjaGF0Py5tYXAoKGMsIGtleSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZml0IGJyZWFrLXdvcmRzIHRleHQtc20gcC0yICR7XG4gICAgICAgICAgICAgICAgYy5hdXRob3IgPT0gXCJtZVwiXG4gICAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZS00MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICA6IFwiYmctbmV1dHJhbC0xMDAgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgIH0gcm91bmRlZC1sZ2B9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1bNjRweF0gbWF4LWgtNDggYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkLWxnIHRleHQtYmxhY2sgdGV4dC1zbSBwLTJcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleURvd25DYXB0dXJlPXsoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBzZXRJbnB1dChcIlwiKTtcbiAgICAgICAgICAgICAgLy9hZGQgdG8gbG9jYWxTdG9yYWdlIGNoYXQgb2JqZWN0LCB3aGljaCBzaG91bGQgYmUgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIG1lc3NhZ2UgYW5kIGF1dGhvclxuICAgICAgICAgICAgICBhZGRDaGF0KGlucHV0LCBcIm1lXCIpO1xuICAgICAgICAgICAgICBxdWVyeShpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQ2xpZW50IiwiaW1hZ2VGaWxlcyIsImNoYXQiLCJpbnB1dCIsInNldElucHV0Iiwic2V0Q2hhdCIsImltYWdlcyIsInNldEltYWdlcyIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwiZmV0Y2hDaGF0cyIsIndpbmRvdyIsInVuZGVmaW5lZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRDaGF0IiwiYXV0aG9yIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJxdWVyeSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJ0eXBlIiwiZGF0YSIsImpzb24iLCJ1bCIsInJvbGUiLCJjbGFzc05hbWUiLCJtYXAiLCJmaWxlIiwia2V5IiwibGkiLCJvbkNsaWNrIiwiZGl2Iiwic3JjIiwiYWx0IiwibGF5b3V0IiwicCIsIm5hbWUiLCJzaXplIiwiaDIiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInBhZGRpbmdCb3R0b20iLCJjb2xvciIsImMiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlEb3duQ2FwdHVyZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Client.js\n"));

/***/ })

});