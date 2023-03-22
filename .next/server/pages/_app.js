/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AppContext.jsx":
/*!***********************************!*\
  !*** ./components/AppContext.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_api__WEBPACK_IMPORTED_MODULE_3__]);\n_services_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst initialState = {\n    session: null\n};\nconst useAppContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppContext);\nconst AppContextProvider = (props)=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState);\n    const updateState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((newState)=>setState((previousState)=>deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(previousState, newState)), []);\n    const setSession = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((jwt)=>{\n        if (!jwt) {\n            localStorage.removeItem(\"session_jwt\");\n            updateState({\n                session: null\n            });\n            return;\n        }\n        // const { session } = JSON.parse(atob(jwt.split(\".\")[1]));\n        const { payload: session  } = JSON.parse(Buffer.from(jwt.split(\".\")[1], \"base64\").toString(\"utf-8\"));\n        localStorage.setItem(\"session_jwt\", jwt);\n        updateState({\n            session\n        });\n    }, [\n        updateState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setSession(localStorage.getItem(\"session_jwt\"));\n    }, [\n        setSession\n    ]);\n    ///////////////////////////////////////////////\n    const [nounouIdC, setNounouIdC] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const setNounouIdC1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((nounouId)=>{\n        setNounouIdC(nounouId);\n    }, []);\n    const [countComments, setCountComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const addComments = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((...comments)=>setComments((previous)=>[\n                ...previous,\n                ...comments\n            ]), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            const nounouId = nounouIdC;\n            const { data: { result1 , count  }  } = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(`/api/comments/${nounouId}`);\n            setComments(result1);\n            setCountComments(count);\n        })();\n    }, [\n        addComments,\n        nounouIdC\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        ...props,\n        value: {\n            setSession,\n            state,\n            setNounouIdC1,\n            nounouIdC,\n            addComments,\n            comments\n        }\n    }, void 0, false, {\n        fileName: \"/home/momo/code/nounous/components/AppContext.jsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContextProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFPbkI7QUFDbUI7QUFDbEMsTUFBTU8sMkJBQWFOLG9EQUFhQTtBQUNoQyxNQUFNTyxlQUFlO0lBQ25CQyxTQUFTLElBQUk7QUFDZjtBQUVPLE1BQU1DLGdCQUFnQixJQUFNUCxpREFBVUEsQ0FBQ0ksWUFBWTtBQUUxRCxNQUFNSSxxQkFBcUIsQ0FBQ0MsUUFBVTtJQUNwQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUNHO0lBRW5DLE1BQU1PLGNBQWNiLGtEQUFXQSxDQUM3QixDQUFDYyxXQUNDRixTQUFTLENBQUNHLGdCQUFrQmpCLGdEQUFTQSxDQUFDaUIsZUFBZUQsWUFDdkQsRUFBRTtJQUVKLE1BQU1FLGFBQWFoQixrREFBV0EsQ0FDNUIsQ0FBQ2lCLE1BQVE7UUFDUCxJQUFJLENBQUNBLEtBQUs7WUFDUkMsYUFBYUMsVUFBVSxDQUFDO1lBQ3hCTixZQUFZO2dCQUFFTixTQUFTLElBQUk7WUFBQztZQUU1QjtRQUNGLENBQUM7UUFFRCwyREFBMkQ7UUFDM0QsTUFBTSxFQUFFYSxTQUFTYixRQUFPLEVBQUUsR0FBR2MsS0FBS0MsS0FBSyxDQUNyQ0MsT0FBT0MsSUFBSSxDQUFDUCxJQUFJUSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVQyxRQUFRLENBQUM7UUFHcERSLGFBQWFTLE9BQU8sQ0FBQyxlQUFlVjtRQUVwQ0osWUFBWTtZQUFFTjtRQUFRO0lBQ3hCLEdBQ0E7UUFBQ007S0FBWTtJQUdmWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RjLFdBQVdFLGFBQWFVLE9BQU8sQ0FBQztJQUNsQyxHQUFHO1FBQUNaO0tBQVc7SUFFZiwrQ0FBK0M7SUFFL0MsTUFBTSxDQUFDYSxXQUFXQyxhQUFhLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNNEIsZ0JBQWdCL0Isa0RBQVdBLENBQUMsQ0FBQ2dDLFdBQWE7UUFDOUNGLGFBQWFFO0lBQ2YsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBRy9CLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2dDLFVBQVVDLFlBQVksR0FBR2pDLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTWtDLGNBQWNyQyxrREFBV0EsQ0FDN0IsQ0FBQyxHQUFHbUMsV0FBYUMsWUFBWSxDQUFDRSxXQUFhO21CQUFJQTttQkFBYUg7YUFBUyxHQUNyRSxFQUFFO0lBR0pqQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2IsV0FBWTtZQUNYLE1BQU04QixXQUFXSDtZQUNqQixNQUFNLEVBQ0pVLE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUUsR0FDekIsR0FBRyxNQUFNckMseURBQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRTRCLFNBQVMsQ0FBQztZQUU3Q0ksWUFBWUk7WUFDWk4saUJBQWlCTztRQUNuQjtJQUNGLEdBQUc7UUFBQ0o7UUFBYVI7S0FBVTtJQUUzQixxQkFDRSw4REFBQ3hCLFdBQVdzQyxRQUFRO1FBQ2pCLEdBQUdqQyxLQUFLO1FBQ1RrQyxPQUFPO1lBQ0w1QjtZQUNBTDtZQUNBb0I7WUFDQUY7WUFDQVE7WUFDQUY7UUFDRjs7Ozs7O0FBR047QUFDQSxpRUFBZTFCLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9jb21wb25lbnRzL0FwcENvbnRleHQuanN4P2ViNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZXBtZXJnZSBmcm9tIFwiZGVlcG1lcmdlXCI7XG5pbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNlc3Npb246IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbmNvbnN0IEFwcENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgdXBkYXRlU3RhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAobmV3U3RhdGUpID0+XG4gICAgICBzZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSkgPT4gZGVlcG1lcmdlKHByZXZpb3VzU3RhdGUsIG5ld1N0YXRlKSksXG4gICAgW11cbiAgKTtcbiAgY29uc3Qgc2V0U2Vzc2lvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChqd3QpID0+IHtcbiAgICAgIGlmICghand0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic2Vzc2lvbl9qd3RcIik7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHsgc2Vzc2lvbjogbnVsbCB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IHsgc2Vzc2lvbiB9ID0gSlNPTi5wYXJzZShhdG9iKGp3dC5zcGxpdChcIi5cIilbMV0pKTtcbiAgICAgIGNvbnN0IHsgcGF5bG9hZDogc2Vzc2lvbiB9ID0gSlNPTi5wYXJzZShcbiAgICAgICAgQnVmZmVyLmZyb20oand0LnNwbGl0KFwiLlwiKVsxXSwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGYtOFwiKVxuICAgICAgKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXNzaW9uX2p3dFwiLCBqd3QpO1xuXG4gICAgICB1cGRhdGVTdGF0ZSh7IHNlc3Npb24gfSk7XG4gICAgfSxcbiAgICBbdXBkYXRlU3RhdGVdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZXNzaW9uKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Vzc2lvbl9qd3RcIikpO1xuICB9LCBbc2V0U2Vzc2lvbl0pO1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3QgW25vdW5vdUlkQywgc2V0Tm91bm91SWRDXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHNldE5vdW5vdUlkQzEgPSB1c2VDYWxsYmFjaygobm91bm91SWQpID0+IHtcbiAgICBzZXROb3Vub3VJZEMobm91bm91SWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2NvdW50Q29tbWVudHMsIHNldENvdW50Q29tbWVudHNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBhZGRDb21tZW50cyA9IHVzZUNhbGxiYWNrKFxuICAgICguLi5jb21tZW50cykgPT4gc2V0Q29tbWVudHMoKHByZXZpb3VzKSA9PiBbLi4ucHJldmlvdXMsIC4uLmNvbW1lbnRzXSksXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBub3Vub3VJZCA9IG5vdW5vdUlkQztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyByZXN1bHQxLCBjb3VudCB9LFxuICAgICAgfSA9IGF3YWl0IGFwaS5nZXQoYC9hcGkvY29tbWVudHMvJHtub3Vub3VJZH1gKTtcblxuICAgICAgc2V0Q29tbWVudHMocmVzdWx0MSk7XG4gICAgICBzZXRDb3VudENvbW1lbnRzKGNvdW50KTtcbiAgICB9KSgpO1xuICB9LCBbYWRkQ29tbWVudHMsIG5vdW5vdUlkQ10pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHNldFNlc3Npb24sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBzZXROb3Vub3VJZEMxLFxuICAgICAgICBub3Vub3VJZEMsXG4gICAgICAgIGFkZENvbW1lbnRzLFxuICAgICAgICBjb21tZW50cyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiZGVlcG1lcmdlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwiQXBwQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInNlc3Npb24iLCJ1c2VBcHBDb250ZXh0IiwiQXBwQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJuZXdTdGF0ZSIsInByZXZpb3VzU3RhdGUiLCJzZXRTZXNzaW9uIiwiand0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJCdWZmZXIiLCJmcm9tIiwic3BsaXQiLCJ0b1N0cmluZyIsInNldEl0ZW0iLCJnZXRJdGVtIiwibm91bm91SWRDIiwic2V0Tm91bm91SWRDIiwic2V0Tm91bm91SWRDMSIsIm5vdW5vdUlkIiwiY291bnRDb21tZW50cyIsInNldENvdW50Q29tbWVudHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiYWRkQ29tbWVudHMiLCJwcmV2aW91cyIsImRhdGEiLCJyZXN1bHQxIiwiY291bnQiLCJnZXQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppContext.jsx\n");

/***/ }),

/***/ "./components/AppContextNounou.jsx":
/*!*****************************************!*\
  !*** ./components/AppContextNounou.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useAppContextNounou\": () => (/* binding */ useAppContextNounou)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AppContextNounou = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst initialState = {\n    sessionNounou: null\n};\nconst useAppContextNounou = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AppContextNounou);\nconst AppContextNounouProvider = (props)=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState);\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [timeOut, setTimeOut] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    if (timeOut) {\n        setTimeout(()=>{\n            setOpenModal(true);\n        }, \"1000\");\n    }\n    const updateState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((newState)=>setState((previousState)=>deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(previousState, newState)), []);\n    const setSessionNounou = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((jwt)=>{\n        if (!jwt) {\n            localStorage.removeItem(\"sessionNounou_jwt\");\n            updateState({\n                sessionNounou: null\n            });\n            return;\n        }\n        // const { session } = JSON.parse(atob(jwt.split(\".\")[1]));\n        const { payload1: sessionNounou  } = JSON.parse(Buffer.from(jwt.split(\".\")[1], \"base64\").toString(\"utf-8\"));\n        localStorage.setItem(\"sessionNounou_jwt\", jwt);\n        updateState({\n            sessionNounou\n        });\n    }, [\n        updateState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setSessionNounou(localStorage.getItem(\"sessionNounou_jwt\"));\n    }, [\n        setSessionNounou\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContextNounou.Provider, {\n        ...props,\n        value: {\n            setSessionNounou,\n            state,\n            openModal,\n            setOpenModal,\n            setTimeOut\n        }\n    }, void 0, false, {\n        fileName: \"/home/momo/code/nounous/components/AppContextNounou.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContextNounouProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHROb3Vub3UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQU9uQjtBQUNmLE1BQU1NLGlDQUFtQkwsb0RBQWFBO0FBQ3RDLE1BQU1NLGVBQWU7SUFDbkJDLGVBQWUsSUFBSTtBQUNyQjtBQUVPLE1BQU1DLHNCQUFzQixJQUFNTixpREFBVUEsQ0FBQ0csa0JBQWtCO0FBRXRFLE1BQU1JLDJCQUEyQixDQUFDQyxRQUFVO0lBQzFDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQ0U7SUFDbkMsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLElBQUk7SUFFM0MsSUFBSVcsU0FBUztRQUNYRSxXQUFXLElBQU07WUFDZkgsYUFBYSxJQUFJO1FBQ25CLEdBQUc7SUFDTCxDQUFDO0lBRUQsTUFBTUksY0FBY2pCLGtEQUFXQSxDQUM3QixDQUFDa0IsV0FDQ1AsU0FBUyxDQUFDUSxnQkFBa0JyQixnREFBU0EsQ0FBQ3FCLGVBQWVELFlBQ3ZELEVBQUU7SUFFSixNQUFNRSxtQkFBbUJwQixrREFBV0EsQ0FDbEMsQ0FBQ3FCLE1BQVE7UUFDUCxJQUFJLENBQUNBLEtBQUs7WUFDUkMsYUFBYUMsVUFBVSxDQUFDO1lBQ3hCTixZQUFZO2dCQUFFWCxlQUFlLElBQUk7WUFBQztZQUVsQztRQUNGLENBQUM7UUFFRCwyREFBMkQ7UUFDM0QsTUFBTSxFQUFFa0IsVUFBVWxCLGNBQWEsRUFBRSxHQUFHbUIsS0FBS0MsS0FBSyxDQUM1Q0MsT0FBT0MsSUFBSSxDQUFDUCxJQUFJUSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVQyxRQUFRLENBQUM7UUFHcERSLGFBQWFTLE9BQU8sQ0FBQyxxQkFBcUJWO1FBRTFDSixZQUFZO1lBQUVYO1FBQWM7SUFDOUIsR0FDQTtRQUFDVztLQUFZO0lBR2ZmLGdEQUFTQSxDQUFDLElBQU07UUFDZGtCLGlCQUFpQkUsYUFBYVUsT0FBTyxDQUFDO0lBQ3hDLEdBQUc7UUFBQ1o7S0FBaUI7SUFFckIscUJBQ0UsOERBQUNoQixpQkFBaUI2QixRQUFRO1FBQ3ZCLEdBQUd4QixLQUFLO1FBQ1R5QixPQUFPO1lBQ0xkO1lBQ0FWO1lBQ0FFO1lBQ0FDO1lBQ0FFO1FBQ0Y7Ozs7OztBQUdOO0FBQ0EsaUVBQWVQLHdCQUF3QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9jb21wb25lbnRzL0FwcENvbnRleHROb3Vub3UuanN4Pzg4NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZXBtZXJnZSBmcm9tIFwiZGVlcG1lcmdlXCI7XG5pbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBBcHBDb250ZXh0Tm91bm91ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzZXNzaW9uTm91bm91OiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUFwcENvbnRleHROb3Vub3UgPSAoKSA9PiB1c2VDb250ZXh0KEFwcENvbnRleHROb3Vub3UpO1xuXG5jb25zdCBBcHBDb250ZXh0Tm91bm91UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGltZU91dCwgc2V0VGltZU91dF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBpZiAodGltZU91dCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0T3Blbk1vZGFsKHRydWUpO1xuICAgIH0sIFwiMTAwMFwiKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVN0YXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKG5ld1N0YXRlKSA9PlxuICAgICAgc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUpID0+IGRlZXBtZXJnZShwcmV2aW91c1N0YXRlLCBuZXdTdGF0ZSkpLFxuICAgIFtdXG4gICk7XG4gIGNvbnN0IHNldFNlc3Npb25Ob3Vub3UgPSB1c2VDYWxsYmFjayhcbiAgICAoand0KSA9PiB7XG4gICAgICBpZiAoIWp3dCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNlc3Npb25Ob3Vub3Vfand0XCIpO1xuICAgICAgICB1cGRhdGVTdGF0ZSh7IHNlc3Npb25Ob3Vub3U6IG51bGwgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCB7IHNlc3Npb24gfSA9IEpTT04ucGFyc2UoYXRvYihqd3Quc3BsaXQoXCIuXCIpWzFdKSk7XG4gICAgICBjb25zdCB7IHBheWxvYWQxOiBzZXNzaW9uTm91bm91IH0gPSBKU09OLnBhcnNlKFxuICAgICAgICBCdWZmZXIuZnJvbShqd3Quc3BsaXQoXCIuXCIpWzFdLCBcImJhc2U2NFwiKS50b1N0cmluZyhcInV0Zi04XCIpXG4gICAgICApO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlc3Npb25Ob3Vub3Vfand0XCIsIGp3dCk7XG5cbiAgICAgIHVwZGF0ZVN0YXRlKHsgc2Vzc2lvbk5vdW5vdSB9KTtcbiAgICB9LFxuICAgIFt1cGRhdGVTdGF0ZV1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlc3Npb25Ob3Vub3UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXNzaW9uTm91bm91X2p3dFwiKSk7XG4gIH0sIFtzZXRTZXNzaW9uTm91bm91XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dE5vdW5vdS5Qcm92aWRlclxuICAgICAgey4uLnByb3BzfVxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc2V0U2Vzc2lvbk5vdW5vdSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG9wZW5Nb2RhbCxcbiAgICAgICAgc2V0T3Blbk1vZGFsLFxuICAgICAgICBzZXRUaW1lT3V0LFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHROb3Vub3VQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJkZWVwbWVyZ2UiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0Tm91bm91IiwiaW5pdGlhbFN0YXRlIiwic2Vzc2lvbk5vdW5vdSIsInVzZUFwcENvbnRleHROb3Vub3UiLCJBcHBDb250ZXh0Tm91bm91UHJvdmlkZXIiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJ0aW1lT3V0Iiwic2V0VGltZU91dCIsInNldFRpbWVvdXQiLCJ1cGRhdGVTdGF0ZSIsIm5ld1N0YXRlIiwicHJldmlvdXNTdGF0ZSIsInNldFNlc3Npb25Ob3Vub3UiLCJqd3QiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicGF5bG9hZDEiLCJKU09OIiwicGFyc2UiLCJCdWZmZXIiLCJmcm9tIiwic3BsaXQiLCJ0b1N0cmluZyIsInNldEl0ZW0iLCJnZXRJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppContextNounou.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppContext */ \"./components/AppContext.jsx\");\n/* harmony import */ var _components_AppContextNounou__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContextNounou */ \"./components/AppContextNounou.jsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AppContext__WEBPACK_IMPORTED_MODULE_1__]);\n_components_AppContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContextNounou__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/momo/code/nounous/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/momo/code/nounous/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/momo/code/nounous/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1k7QUFDdkM7QUFFL0IsU0FBU0UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSiw4REFBa0JBO2tCQUNqQiw0RUFBQ0Msb0VBQXdCQTtzQkFDdkIsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBDb250ZXh0XCI7XG5pbXBvcnQgQXBwQ29udGV4dE5vdW5vdVByb3ZpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcENvbnRleHROb3Vub3VcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPEFwcENvbnRleHROb3Vub3VQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BcHBDb250ZXh0Tm91bm91UHJvdmlkZXI+XG4gICAgPC9BcHBDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFwcENvbnRleHRQcm92aWRlciIsIkFwcENvbnRleHROb3Vub3VQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// import config from \"@/config.js\"\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:3000\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFFVDtBQUUxQixNQUFNQyxNQUFNRCxvREFBWSxDQUFDO0lBQ3ZCRyxTQUFTQyx1QkFBbUM7QUFFOUM7QUFFQSxpRUFBZUgsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9zZXJ2aWNlcy9hcGkuanM/ODAzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY29uZmlnIGZyb20gXCJAL2NvbmZpZy5qc1wiXG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VVUkwsXG4gIC8vIGNvbmZpZy5hcGkuYmFzZVVybCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();