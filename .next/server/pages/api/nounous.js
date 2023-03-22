"use strict";
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
exports.id = "pages/api/nounous";
exports.ids = ["pages/api/nounous"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "objection":
/*!****************************!*\
  !*** external "objection" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("objection");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./knexfile.js":
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nmodule.exports = {\n    client: \"pg\",\n    connection: {\n        user: process.env.DB_USER,\n        password: process.env.DB_PWD,\n        database: process.env.DB_NAME\n    },\n    migrations: {\n        tableName: \"knex_migrations\",\n        directory: `${process.cwd()}/src/api/db/migrations`\n    },\n    seeds: {\n        directory: `${process.cwd()}/src/api/db/seeds`\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9rbmV4ZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLG9EQUF3QjtBQUV4QkUsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLFFBQVE7SUFDUkMsWUFBWTtRQUNWQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87UUFDekJDLFVBQVVILFFBQVFDLEdBQUcsQ0FBQ0csTUFBTTtRQUM1QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxPQUFPO0lBQy9CO0lBQ0FDLFlBQVk7UUFDVkMsV0FBVztRQUNYQyxXQUFXLENBQUMsRUFBRVQsUUFBUVUsR0FBRyxHQUFHLHNCQUFzQixDQUFDO0lBQ3JEO0lBQ0FDLE9BQU87UUFDTEYsV0FBVyxDQUFDLEVBQUVULFFBQVFVLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUNoRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL2tuZXhmaWxlLmpzPzIzMzEiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsaWVudDogXCJwZ1wiLFxuICBjb25uZWN0aW9uOiB7XG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUFdELFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICB9LFxuICBtaWdyYXRpb25zOiB7XG4gICAgdGFibGVOYW1lOiBcImtuZXhfbWlncmF0aW9uc1wiLFxuICAgIGRpcmVjdG9yeTogYCR7cHJvY2Vzcy5jd2QoKX0vc3JjL2FwaS9kYi9taWdyYXRpb25zYCxcbiAgfSxcbiAgc2VlZHM6IHtcbiAgICBkaXJlY3Rvcnk6IGAke3Byb2Nlc3MuY3dkKCl9L3NyYy9hcGkvZGIvc2VlZHNgLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyIsImNsaWVudCIsImNvbm5lY3Rpb24iLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BXRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsIm1pZ3JhdGlvbnMiLCJ0YWJsZU5hbWUiLCJkaXJlY3RvcnkiLCJjd2QiLCJzZWVkcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./knexfile.js\n");

/***/ }),

/***/ "(api)/./pages/api/nounous.js":
/*!******************************!*\
  !*** ./pages/api/nounous.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_api_db_models_Nounou__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/api/db/models/Nounou */ \"(api)/./src/api/db/models/Nounou.js\");\n/* harmony import */ var _src_hashPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/hashPassword */ \"(api)/./src/hashPassword.js\");\n/* harmony import */ var _src_hashPassword__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_hashPassword__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import hashPassword from \"../../src/hashPassword\";\nconst nounousRoutes = async (req, res)=>{\n    // if (!auth(req, res)) {\n    //   return\n    // }\n    if (req.method === \"GET\") {\n        const nounous = await _src_api_db_models_Nounou__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query();\n        // const nounous = await db(\"nounous\");\n        if (!nounous) {\n            res.status(404).send({\n                error: \"Erreur. Aucun r\\xe9sultat.\"\n            });\n            return;\n        }\n        const [{ count  }] = await _src_api_db_models_Nounou__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query().count();\n        res.status(200).send({\n            result: nounous,\n            count\n        });\n    }\n    if (req.method === \"POST\") {\n        const { body: { email , username , telephone , localite , situation , // image,\n        password  }  } = req;\n        if (email === null || email === \"\") {\n            res.status(400).send({\n                error: \"Erreur. Champs email obligatoire.\"\n            });\n            return;\n        }\n        const { hash , salt  } = _src_hashPassword__WEBPACK_IMPORTED_MODULE_1___default()(password);\n        const nounou = await _src_api_db_models_Nounou__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query().insert({\n            email,\n            username,\n            telephone,\n            localite,\n            situation,\n            // image,\n            passwordHash: hash,\n            passwordSalt: salt\n        }).returning(\"*\");\n        res.status(200).send({\n            result: nounou\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nounousRoutes);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm91bm91cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9EO0FBQ0Y7QUFDbEQscURBQXFEO0FBRXJELE1BQU1FLGdCQUFnQixPQUFPQyxLQUFLQyxNQUFRO0lBQ3hDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsSUFBSTtJQUVKLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1DLFVBQVUsTUFBTU4sdUVBQVk7UUFDbEMsdUNBQXVDO1FBRXZDLElBQUksQ0FBQ00sU0FBUztZQUNaRixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTBCO1lBRXhEO1FBQ0YsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFQyxNQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU1YLHVFQUFZLEdBQUdXLEtBQUs7UUFDOUNQLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUcsUUFBUU47WUFBU0s7UUFBTTtJQUNoRCxDQUFDO0lBRUQsSUFBSVIsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUNKUSxNQUFNLEVBQ0pDLE1BQUssRUFDTEMsU0FBUSxFQUNSQyxVQUFTLEVBQ1RDLFNBQVEsRUFDUkMsVUFBUyxFQUNULFNBQVM7UUFDVEMsU0FBUSxFQUNULEdBQ0YsR0FBR2hCO1FBQ0osSUFBSVcsVUFBVSxJQUFJLElBQUlBLFVBQVUsSUFBSTtZQUNsQ1YsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFvQztZQUNsRTtRQUNGLENBQUM7UUFDRCxNQUFNLEVBQUVVLEtBQUksRUFBRUMsS0FBSSxFQUFFLEdBQUdwQix3REFBWUEsQ0FBQ2tCO1FBQ3BDLE1BQU1HLFNBQVMsTUFBTXRCLHVFQUFZLEdBQzlCdUIsTUFBTSxDQUFDO1lBQ05UO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0EsU0FBUztZQUNUTSxjQUFjSjtZQUNkSyxjQUFjSjtRQUNoQixHQUNDSyxTQUFTLENBQUM7UUFDYnRCLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUcsUUFBUVU7UUFBTztJQUN4QyxDQUFDO0FBQ0g7QUFFQSxpRUFBZXBCLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvYXBpL25vdW5vdXMuanM/N2ZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm91bm91IGZyb20gXCIuLi8uLi9zcmMvYXBpL2RiL21vZGVscy9Ob3Vub3VcIjtcbmltcG9ydCBoYXNoUGFzc3dvcmQgZnJvbSBcIi4uLy4uL3NyYy9oYXNoUGFzc3dvcmRcIjtcbi8vIGltcG9ydCBoYXNoUGFzc3dvcmQgZnJvbSBcIi4uLy4uL3NyYy9oYXNoUGFzc3dvcmRcIjtcblxuY29uc3Qgbm91bm91c1JvdXRlcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyBpZiAoIWF1dGgocmVxLCByZXMpKSB7XG4gIC8vICAgcmV0dXJuXG4gIC8vIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IG5vdW5vdXMgPSBhd2FpdCBOb3Vub3UucXVlcnkoKTtcbiAgICAvLyBjb25zdCBub3Vub3VzID0gYXdhaXQgZGIoXCJub3Vub3VzXCIpO1xuXG4gICAgaWYgKCFub3Vub3VzKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcIkVycmV1ci4gQXVjdW4gcsOpc3VsdGF0LlwiIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IFt7IGNvdW50IH1dID0gYXdhaXQgTm91bm91LnF1ZXJ5KCkuY291bnQoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogbm91bm91cywgY291bnQgfSk7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7XG4gICAgICBib2R5OiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgdGVsZXBob25lLFxuICAgICAgICBsb2NhbGl0ZSxcbiAgICAgICAgc2l0dWF0aW9uLFxuICAgICAgICAvLyBpbWFnZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9LFxuICAgIH0gPSByZXE7XG4gICAgaWYgKGVtYWlsID09PSBudWxsIHx8IGVtYWlsID09PSBcIlwiKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IGVycm9yOiBcIkVycmV1ci4gQ2hhbXBzIGVtYWlsIG9ibGlnYXRvaXJlLlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGhhc2gsIHNhbHQgfSA9IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG4gICAgY29uc3Qgbm91bm91ID0gYXdhaXQgTm91bm91LnF1ZXJ5KClcbiAgICAgIC5pbnNlcnQoe1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHRlbGVwaG9uZSxcbiAgICAgICAgbG9jYWxpdGUsXG4gICAgICAgIHNpdHVhdGlvbixcbiAgICAgICAgLy8gaW1hZ2UsXG4gICAgICAgIHBhc3N3b3JkSGFzaDogaGFzaCxcbiAgICAgICAgcGFzc3dvcmRTYWx0OiBzYWx0LFxuICAgICAgfSlcbiAgICAgIC5yZXR1cm5pbmcoXCIqXCIpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiBub3Vub3UgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdW5vdXNSb3V0ZXM7XG4iXSwibmFtZXMiOlsiTm91bm91IiwiaGFzaFBhc3N3b3JkIiwibm91bm91c1JvdXRlcyIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5vdW5vdXMiLCJxdWVyeSIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsImNvdW50IiwicmVzdWx0IiwiYm9keSIsImVtYWlsIiwidXNlcm5hbWUiLCJ0ZWxlcGhvbmUiLCJsb2NhbGl0ZSIsInNpdHVhdGlvbiIsInBhc3N3b3JkIiwiaGFzaCIsInNhbHQiLCJub3Vub3UiLCJpbnNlcnQiLCJwYXNzd29yZEhhc2giLCJwYXNzd29yZFNhbHQiLCJyZXR1cm5pbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/nounous.js\n");

/***/ }),

/***/ "(api)/./src/api/config.js":
/*!***************************!*\
  !*** ./src/api/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../knexfile */ \"(api)/./knexfile.js\");\n/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_knexfile__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    db: (_knexfile__WEBPACK_IMPORTED_MODULE_1___default()),\n    security: {\n        session: {\n            jwtSecret: process.env.JWT_SECRET,\n            expiresIn: \"2 day\"\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYXBpL2NvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QjtBQUNlO0FBRXRDLE1BQU1DLFNBQVM7SUFDYkMsSUFBSUYsa0RBQVFBO0lBQ1pHLFVBQVU7UUFDUkMsU0FBUztZQUNQQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7WUFDakNDLFdBQVc7UUFDYjtJQUNGO0FBTUY7QUFFQSxpRUFBZVIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9zcmMvYXBpL2NvbmZpZy5qcz9mNTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImRvdGVudi9jb25maWdcIjtcbmltcG9ydCBrbmV4ZmlsZSBmcm9tIFwiLi4vLi4va25leGZpbGVcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBkYjoga25leGZpbGUsXG4gIHNlY3VyaXR5OiB7XG4gICAgc2Vzc2lvbjoge1xuICAgICAgand0U2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgICAgZXhwaXJlc0luOiBcIjIgZGF5XCIsXG4gICAgfSxcbiAgfSxcbiAgLy8gc2VydmljZXM6IHtcbiAgLy8gICBsZWJvbmNpdG95ZW46IHtcbiAgLy8gICAgIGJhc2VVcmw6IHByb2Nlc3MuZW52LkxFQk9OQ0lUT1lFTl9CQVNFX1VSTCxcbiAgLy8gICB9LFxuICAvLyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sIm5hbWVzIjpbImtuZXhmaWxlIiwiY29uZmlnIiwiZGIiLCJzZWN1cml0eSIsInNlc3Npb24iLCJqd3RTZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/api/config.js\n");

/***/ }),

/***/ "(api)/./src/api/db/models/BaseModel.js":
/*!****************************************!*\
  !*** ./src/api/db/models/BaseModel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knex */ \"knex\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! objection */ \"objection\");\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(objection__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"(api)/./src/api/config.js\");\n// import config from \"@/api/config\";\n\n\n\nclass BaseModel extends objection__WEBPACK_IMPORTED_MODULE_1__.Model {\n}\nBaseModel.knex(knex__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].db));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYXBpL2RiL21vZGVscy9CYXNlTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUNBQXFDO0FBQ2I7QUFDVTtBQUNBO0FBRWxDLE1BQU1HLGtCQUFrQkYsNENBQUtBO0FBQUU7QUFFL0JFLFVBQVVILElBQUksQ0FBQ0EsMkNBQUlBLENBQUNFLGtEQUFTO0FBRTdCLGlFQUFlQyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy9hcGkvZGIvbW9kZWxzL0Jhc2VNb2RlbC5qcz85MWVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjb25maWcgZnJvbSBcIkAvYXBpL2NvbmZpZ1wiO1xuaW1wb3J0IGtuZXggZnJvbSBcImtuZXhcIjtcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSBcIm9iamVjdGlvblwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XG5cbmNsYXNzIEJhc2VNb2RlbCBleHRlbmRzIE1vZGVsIHt9XG5cbkJhc2VNb2RlbC5rbmV4KGtuZXgoY29uZmlnLmRiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VNb2RlbDtcbiJdLCJuYW1lcyI6WyJrbmV4IiwiTW9kZWwiLCJjb25maWciLCJCYXNlTW9kZWwiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/api/db/models/BaseModel.js\n");

/***/ }),

/***/ "(api)/./src/api/db/models/Nounou.js":
/*!*************************************!*\
  !*** ./src/api/db/models/Nounou.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ \"(api)/./src/api/db/models/BaseModel.js\");\n// import BaseModel from \"@/api/db/models/BaseModel\";\n// import PoliticalParty from \"@/api/db/models/PoliticalParty\";\n// import Answer from \"@/api/db/models/Answer\";\n\nclass Nounou extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static get tableName() {\n        return \"nounous\";\n    }\n    static get relationMappings() {\n        return {\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nounou);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYXBpL2RiL21vZGVscy9Ob3Vub3UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsK0RBQStEO0FBQy9ELCtDQUErQztBQUNYO0FBRXBDLE1BQU1DLGVBQWVELGtEQUFTQTtJQUM1QixXQUFXRSxZQUFZO1FBQ3JCLE9BQU87SUFDVDtJQUNBLFdBQVdDLG1CQUFtQjtRQUM1QixPQUFPO1FBcUJQO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlRixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy9hcGkvZGIvbW9kZWxzL05vdW5vdS5qcz9lZjQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBCYXNlTW9kZWwgZnJvbSBcIkAvYXBpL2RiL21vZGVscy9CYXNlTW9kZWxcIjtcbi8vIGltcG9ydCBQb2xpdGljYWxQYXJ0eSBmcm9tIFwiQC9hcGkvZGIvbW9kZWxzL1BvbGl0aWNhbFBhcnR5XCI7XG4vLyBpbXBvcnQgQW5zd2VyIGZyb20gXCJAL2FwaS9kYi9tb2RlbHMvQW5zd2VyXCI7XG5pbXBvcnQgQmFzZU1vZGVsIGZyb20gXCIuL0Jhc2VNb2RlbFwiO1xuXG5jbGFzcyBOb3Vub3UgZXh0ZW5kcyBCYXNlTW9kZWwge1xuICBzdGF0aWMgZ2V0IHRhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJub3Vub3VzXCI7XG4gIH1cbiAgc3RhdGljIGdldCByZWxhdGlvbk1hcHBpbmdzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBwb2xpdGljYWxQYXJ0eToge1xuICAgICAgLy8gICByZWxhdGlvbjogQmFzZU1vZGVsLkJlbG9uZ3NUb09uZVJlbGF0aW9uLFxuICAgICAgLy8gICBtb2RlbENsYXNzOiBQb2xpdGljYWxQYXJ0eSxcbiAgICAgIC8vICAgam9pbjoge1xuICAgICAgLy8gICAgIGZyb206IFwidXNlcnMucG9saXRpY2FsUGFydHlJZFwiLFxuICAgICAgLy8gICAgIHRvOiBcInBvbGl0aWNhbFBhcnRpZXMuaWRcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH0sXG4gICAgICAvLyBhbnN3ZXJzOiB7XG4gICAgICAvLyAgIHJlbGF0aW9uOiBCYXNlTW9kZWwuTWFueVRvTWFueVJlbGF0aW9uLFxuICAgICAgLy8gICBtb2RlbENsYXNzOiBBbnN3ZXIsXG4gICAgICAvLyAgIGpvaW46IHtcbiAgICAgIC8vICAgICBmcm9tOiBcInVzZXJzLmlkXCIsXG4gICAgICAvLyAgICAgdGhyb3VnaDoge1xuICAgICAgLy8gICAgICAgZnJvbTogXCJyZWxfdXNlcnNfYW5zd2Vycy51c2VySWRcIixcbiAgICAgIC8vICAgICAgIHRvOiBcInJlbF91c2Vyc19hbnN3ZXJzLmFuc3dlcklkXCIsXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICB0bzogXCJhbnN3ZXJzLmlkXCIsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm91bm91O1xuIl0sIm5hbWVzIjpbIkJhc2VNb2RlbCIsIk5vdW5vdSIsInRhYmxlTmFtZSIsInJlbGF0aW9uTWFwcGluZ3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/api/db/models/Nounou.js\n");

/***/ }),

/***/ "(api)/./src/hashPassword.js":
/*!*****************************!*\
  !*** ./src/hashPassword.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { pbkdf2Sync , randomBytes  } = __webpack_require__(/*! crypto */ \"crypto\");\nconst hashPassword = (password, salt = randomBytes(32).toString(\"hex\"), iteration = 100000, keylen = 256, digest = \"sha512\")=>{\n    const hash = pbkdf2Sync(password, salt, iteration, keylen, digest).toString(\"hex\");\n    return {\n        salt,\n        hash\n    };\n};\nmodule.exports = hashPassword;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvaGFzaFBhc3N3b3JkLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUVBLFdBQVUsRUFBRUMsWUFBVyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLHNCQUFRO0FBRXBELE1BQU1DLGVBQWUsQ0FDbkJDLFVBQ0FDLE9BQU9KLFlBQVksSUFBSUssUUFBUSxDQUFDLE1BQU0sRUFDdENDLFlBQVksTUFBTSxFQUNsQkMsU0FBUyxHQUFHLEVBQ1pDLFNBQVMsUUFBUSxHQUNkO0lBQ0gsTUFBTUMsT0FBT1YsV0FBV0ksVUFBVUMsTUFBTUUsV0FBV0MsUUFBUUMsUUFBUUgsUUFBUSxDQUN6RTtJQUdGLE9BQU87UUFBRUQ7UUFBTUs7SUFBSztBQUN0QjtBQUVBQyxPQUFPQyxPQUFPLEdBQUdUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy9oYXNoUGFzc3dvcmQuanM/MGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHBia2RmMlN5bmMsIHJhbmRvbUJ5dGVzIH0gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5jb25zdCBoYXNoUGFzc3dvcmQgPSAoXG4gIHBhc3N3b3JkLFxuICBzYWx0ID0gcmFuZG9tQnl0ZXMoMzIpLnRvU3RyaW5nKFwiaGV4XCIpLFxuICBpdGVyYXRpb24gPSAxMDAwMDAsXG4gIGtleWxlbiA9IDI1NixcbiAgZGlnZXN0ID0gXCJzaGE1MTJcIlxuKSA9PiB7XG4gIGNvbnN0IGhhc2ggPSBwYmtkZjJTeW5jKHBhc3N3b3JkLCBzYWx0LCBpdGVyYXRpb24sIGtleWxlbiwgZGlnZXN0KS50b1N0cmluZyhcbiAgICBcImhleFwiXG4gICk7XG5cbiAgcmV0dXJuIHsgc2FsdCwgaGFzaCB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoUGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsicGJrZGYyU3luYyIsInJhbmRvbUJ5dGVzIiwicmVxdWlyZSIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwic2FsdCIsInRvU3RyaW5nIiwiaXRlcmF0aW9uIiwia2V5bGVuIiwiZGlnZXN0IiwiaGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/hashPassword.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/nounous.js"));
module.exports = __webpack_exports__;

})();