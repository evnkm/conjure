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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_alexanderzhang_Documents_conjure_demo_dataset_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo_dataset.json */ \"(app-pages-browser)/../demo_dataset.json\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./src/components/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Client(param) {\n    let { imageFiles } = param;\n    var _chat;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chat, setChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imageFiles);\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function fetchChats() {\n        if (window !== undefined) {\n            setChat(JSON.parse(localStorage.getItem(\"chat\")));\n        }\n    }\n    function addChat(input, author) {\n        localStorage.setItem(\"chat\", JSON.stringify([\n            ...JSON.parse(localStorage.getItem(\"chat\")) || [],\n            {\n                message: input,\n                author: author\n            }\n        ]));\n        fetchChats();\n    }\n    async function query(input) {\n        const res = await fetch(\"/query\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                query: input,\n                type: selectedImage === null ? \"filter\" : \"qna\",\n                selectedImage: selectedImage\n            })\n        });\n        const data = await res.json();\n        if (data.type === \"filter\") {\n            return setImages(data.data);\n        }\n        if (data.type === \"qna\") {\n            return addChat(data.data, \"sys\");\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchChats();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                role: \"list\",\n                className: \"w-[75%] h-full grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 p-4\",\n                children: images.map((file, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative w-full h-fit\",\n                        onClick: ()=>{\n                            if (selectedImage === file) {\n                                setSelectedImage(null);\n                                addChat(\"\".concat(file, \" has been deselected.\"), \"sys\");\n                                return;\n                            }\n                            setSelectedImage(file);\n                            addChat(\"\".concat(file, \" has been selected.\"), \"sys\");\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative group aspect-square block w-full overflow-hidden \".concat(selectedImage === file && \"ring-2 ring-green-500\", \" rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100\"),\n                                style: {\n                                    fontSize: \"16px\",\n                                    color: \"blue\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/images/\".concat(file),\n                                        alt: \"\",\n                                        layout: \"fill\",\n                                        className: \"pointer-events-none object-cover object-center group-hover:opacity-75\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"image-caption\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: _Users_alexanderzhang_Documents_conjure_demo_dataset_json__WEBPACK_IMPORTED_MODULE_3__[\"./images/\" + file]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900\",\n                                children: file.name\n                            }, void 0, false, {\n                                fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"pointer-events-none block text-sm font-medium text-gray-500\",\n                                children: file.size\n                            }, void 0, false, {\n                                fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, key, true, {\n                        fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[25%] bg-blue-100 text-black h-full flex flex-col justify-between min-h-screen fixed top-0 right-0 p-4 border-l border-neutral-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            style: {\n                                fontSize: \"2rem\",\n                                fontFamily: \"inherit\",\n                                paddingBottom: \"10px\",\n                                color: \"black\"\n                            },\n                            children: \"Ask Stanley\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full flex flex-col gap-2 overflow-auto pb-4\",\n                        children: (_chat = chat) === null || _chat === void 0 ? void 0 : _chat.map((c, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-fit break-words text-sm p-2 \".concat(c.author == \"me\" ? \"bg-blue-400 text-white\" : \"bg-neutral-100 text-black\", \" rounded-lg\"),\n                                children: c.message\n                            }, key, false, {\n                                fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full min-h-[64px] max-h-48 border border-neutral-300 rounded-lg text-black text-sm p-2\",\n                        value: input,\n                        onChange: (e)=>setInput(e.target.value),\n                        onKeyDownCapture: (e)=>{\n                            if (e.key === \"Enter\") {\n                                e.preventDefault();\n                                setInput(\"\");\n                                //add to localStorage chat object, which should be an array of objects with message and author\n                                addChat(input, \"me\");\n                                query(input);\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexanderzhang/Documents/conjure/frontend/src/components/Client.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Client, \"rN5VwR3eD8qIuMoxsN3E8KK3b64=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2I7QUFDaUQ7QUFDMUQ7QUFFUCxTQUFTSSxPQUFPLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDtRQTRHcEJDOztJQTNHVCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxNQUFNRyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDSTtJQUNyQyxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuRCxTQUFTYTtRQUNQLElBQUlDLFdBQVdDLFdBQVc7WUFDeEJQLFFBQVFRLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQzFDO0lBQ0Y7SUFFQSxTQUFTQyxRQUFRZCxLQUFLLEVBQUVlLE1BQU07UUFDNUJILGFBQWFJLE9BQU8sQ0FDbEIsUUFDQU4sS0FBS08sU0FBUyxDQUFDO2VBQ1RQLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNsRDtnQkFBRUssU0FBU2xCO2dCQUFPZSxRQUFRQTtZQUFPO1NBQ2xDO1FBRUhSO0lBQ0Y7SUFFQSxlQUFlWSxNQUFNbkIsS0FBSztRQUN4QixNQUFNb0IsTUFBTSxNQUFNQyxNQUFNLFVBQVU7WUFDaENDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTWQsS0FBS08sU0FBUyxDQUFDO2dCQUNuQkUsT0FBT25CO2dCQUNQeUIsTUFBTXBCLGtCQUFrQixPQUFPLFdBQVc7Z0JBQzFDQSxlQUFlQTtZQUNqQjtRQUNGO1FBRUEsTUFBTXFCLE9BQU8sTUFBTU4sSUFBSU8sSUFBSTtRQUMzQixJQUFJRCxLQUFLRCxJQUFJLEtBQUssVUFBVTtZQUMxQixPQUFPckIsVUFBVXNCLEtBQUtBLElBQUk7UUFDNUI7UUFDQSxJQUFJQSxLQUFLRCxJQUFJLEtBQUssT0FBTztZQUN2QixPQUFPWCxRQUFRWSxLQUFLQSxJQUFJLEVBQUU7UUFDNUI7SUFDRjtJQUVBakMsZ0RBQVNBLENBQUM7UUFDUmM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNxQjtnQkFDQ0MsTUFBSztnQkFDTEMsV0FBVTswQkFFVDNCLE9BQU80QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBQ2pCLDhEQUFDQzt3QkFFQ0osV0FBWTt3QkFDWkssU0FBUzs0QkFDUCxJQUFJOUIsa0JBQWtCMkIsTUFBTTtnQ0FDMUIxQixpQkFBaUI7Z0NBQ2pCUSxRQUFRLEdBQVEsT0FBTGtCLE1BQUssMEJBQXdCO2dDQUN4Qzs0QkFDRjs0QkFDQTFCLGlCQUFpQjBCOzRCQUNqQmxCLFFBQVEsR0FBUSxPQUFMa0IsTUFBSyx3QkFBc0I7d0JBQ3hDOzswQ0FFQSw4REFBQ0k7Z0NBQ0NOLFdBQVcsNkRBRVYsT0FEQ3pCLGtCQUFrQjJCLFFBQVEseUJBQzNCO2dDQUNESyxPQUFPO29DQUFFQyxVQUFVO29DQUFRQyxPQUFPO2dDQUFPOztrREFFekMsOERBQUM1QyxtREFBS0E7d0NBQ0o2QyxLQUFLLFdBQWdCLE9BQUxSO3dDQUNoQlMsS0FBSTt3Q0FDSkMsUUFBTzt3Q0FDUFosV0FBVTs7Ozs7O2tEQUVaLDhEQUFDTTt3Q0FBSU4sV0FBVTtrREFDYiw0RUFBQ2E7c0RBQUcvQyxzRkFBTyxDQUFDLGNBQWNvQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbkMsOERBQUNXO2dDQUFFYixXQUFVOzBDQUNWRSxLQUFLWSxJQUFJOzs7Ozs7MENBRVosOERBQUNEO2dDQUFFYixXQUFVOzBDQUNWRSxLQUFLYSxJQUFJOzs7Ozs7O3VCQWhDUFo7Ozs7Ozs7Ozs7MEJBcUNYLDhEQUFDRztnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNNO2tDQUNDLDRFQUFDVTs0QkFDQ1QsT0FBTztnQ0FDTEMsVUFBVTtnQ0FDVlMsWUFBWTtnQ0FDWkMsZUFBZTtnQ0FDZlQsT0FBTzs0QkFDVDtzQ0FDRDs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNIO3dCQUFJTixXQUFVO21DQUNaL0IsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNZ0MsR0FBRyxDQUFDLENBQUNrQixHQUFHaEIsb0JBQ2IsOERBQUNHO2dDQUVDTixXQUFXLHdDQUlWLE9BSENtQixFQUFFbEMsTUFBTSxJQUFJLE9BQ1IsMkJBQ0EsNkJBQ0w7MENBRUFrQyxFQUFFL0IsT0FBTzsrQkFQTGU7Ozs7Ozs7Ozs7a0NBV1gsOERBQUNpQjt3QkFDQ3BCLFdBQVU7d0JBQ1ZxQixPQUFPbkQ7d0JBQ1BvRCxVQUFVLENBQUNDLElBQU1wRCxTQUFTb0QsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUN4Q0ksa0JBQWtCLENBQUNGOzRCQUNqQixJQUFJQSxFQUFFcEIsR0FBRyxLQUFLLFNBQVM7Z0NBQ3JCb0IsRUFBRUcsY0FBYztnQ0FDaEJ2RCxTQUFTO2dDQUNULDhGQUE4RjtnQ0FDOUZhLFFBQVFkLE9BQU87Z0NBQ2ZtQixNQUFNbkI7NEJBQ1I7d0JBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0ExSXdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DbGllbnQuanM/ZmExNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGRhdGFzZXQgZnJvbSBcIi9Vc2Vycy9hbGV4YW5kZXJ6aGFuZy9Eb2N1bWVudHMvY29uanVyZS9kZW1vX2RhdGFzZXQuanNvblwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudCh7IGltYWdlRmlsZXMgfSkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2hhdCwgc2V0Q2hhdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShpbWFnZUZpbGVzKTtcbiAgY29uc3QgW3NlbGVjdGVkSW1hZ2UsIHNldFNlbGVjdGVkSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgZnVuY3Rpb24gZmV0Y2hDaGF0cygpIHtcbiAgICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldENoYXQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXRcIikpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDaGF0KGlucHV0LCBhdXRob3IpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwiY2hhdFwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICAuLi4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXRcIikpIHx8IFtdKSxcbiAgICAgICAgeyBtZXNzYWdlOiBpbnB1dCwgYXV0aG9yOiBhdXRob3IgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgICBmZXRjaENoYXRzKCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeShpbnB1dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL3F1ZXJ5XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlcnk6IGlucHV0LFxuICAgICAgICB0eXBlOiBzZWxlY3RlZEltYWdlID09PSBudWxsID8gXCJmaWx0ZXJcIiA6IFwicW5hXCIsXG4gICAgICAgIHNlbGVjdGVkSW1hZ2U6IHNlbGVjdGVkSW1hZ2UsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGlmIChkYXRhLnR5cGUgPT09IFwiZmlsdGVyXCIpIHtcbiAgICAgIHJldHVybiBzZXRJbWFnZXMoZGF0YS5kYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gXCJxbmFcIikge1xuICAgICAgcmV0dXJuIGFkZENoYXQoZGF0YS5kYXRhLCBcInN5c1wiKTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ2hhdHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bFxuICAgICAgICByb2xlPVwibGlzdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInctWzc1JV0gaC1mdWxsIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLXgtNCBnYXAteS04IHNtOmdyaWQtY29scy0zIHNtOmdhcC14LTYgbGc6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOCBwLTRcIlxuICAgICAgPlxuICAgICAgICB7aW1hZ2VzLm1hcCgoZmlsZSwga2V5KSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHctZnVsbCBoLWZpdGB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEltYWdlID09PSBmaWxlKSB7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJbWFnZShudWxsKTtcbiAgICAgICAgICAgICAgICBhZGRDaGF0KGAke2ZpbGV9IGhhcyBiZWVuIGRlc2VsZWN0ZWQuYCwgXCJzeXNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSW1hZ2UoZmlsZSk7XG4gICAgICAgICAgICAgIGFkZENoYXQoYCR7ZmlsZX0gaGFzIGJlZW4gc2VsZWN0ZWQuYCwgXCJzeXNcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZ3JvdXAgYXNwZWN0LXNxdWFyZSBibG9jayB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuICR7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZSA9PT0gZmlsZSAmJiBcInJpbmctMiByaW5nLWdyZWVuLTUwMFwiXG4gICAgICAgICAgICAgIH0gcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBmb2N1cy13aXRoaW46cmluZy0yIGZvY3VzLXdpdGhpbjpyaW5nLWluZGlnby01MDAgZm9jdXMtd2l0aGluOnJpbmctb2Zmc2V0LTIgZm9jdXMtd2l0aGluOnJpbmctb2Zmc2V0LWdyYXktMTAwYH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBjb2xvcjogXCJibHVlXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2ZpbGV9YH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwPntkYXRhc2V0W1wiLi9pbWFnZXMvXCIgKyBmaWxlXX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIG10LTIgYmxvY2sgdHJ1bmNhdGUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgIHtmaWxlLm5hbWV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICB7ZmlsZS5zaXplfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjUlXSBiZy1ibHVlLTEwMCB0ZXh0LWJsYWNrIGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBtaW4taC1zY3JlZW4gZml4ZWQgdG9wLTAgcmlnaHQtMCBwLTQgYm9yZGVyLWwgYm9yZGVyLW5ldXRyYWwtMzAwXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQXNrIFN0YW5sZXlcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTIgb3ZlcmZsb3ctYXV0byBwYi00XCI+XG4gICAgICAgICAge2NoYXQ/Lm1hcCgoYywga2V5KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1maXQgYnJlYWstd29yZHMgdGV4dC1zbSBwLTIgJHtcbiAgICAgICAgICAgICAgICBjLmF1dGhvciA9PSBcIm1lXCJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1uZXV0cmFsLTEwMCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgfSByb3VuZGVkLWxnYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2MubWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLVs2NHB4XSBtYXgtaC00OCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMzAwIHJvdW5kZWQtbGcgdGV4dC1ibGFjayB0ZXh0LXNtIHAtMlwiXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG9uS2V5RG93bkNhcHR1cmU9eyhlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHNldElucHV0KFwiXCIpO1xuICAgICAgICAgICAgICAvL2FkZCB0byBsb2NhbFN0b3JhZ2UgY2hhdCBvYmplY3QsIHdoaWNoIHNob3VsZCBiZSBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggbWVzc2FnZSBhbmQgYXV0aG9yXG4gICAgICAgICAgICAgIGFkZENoYXQoaW5wdXQsIFwibWVcIik7XG4gICAgICAgICAgICAgIHF1ZXJ5KGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJkYXRhc2V0IiwiQ2xpZW50IiwiaW1hZ2VGaWxlcyIsImNoYXQiLCJpbnB1dCIsInNldElucHV0Iiwic2V0Q2hhdCIsImltYWdlcyIsInNldEltYWdlcyIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwiZmV0Y2hDaGF0cyIsIndpbmRvdyIsInVuZGVmaW5lZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRDaGF0IiwiYXV0aG9yIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJxdWVyeSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJ0eXBlIiwiZGF0YSIsImpzb24iLCJ1bCIsInJvbGUiLCJjbGFzc05hbWUiLCJtYXAiLCJmaWxlIiwia2V5IiwibGkiLCJvbkNsaWNrIiwiZGl2Iiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwic3JjIiwiYWx0IiwibGF5b3V0IiwicCIsIm5hbWUiLCJzaXplIiwiaDIiLCJmb250RmFtaWx5IiwicGFkZGluZ0JvdHRvbSIsImMiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlEb3duQ2FwdHVyZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Client.js\n"));

/***/ })

});