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
exports.id = "pages/api/comments/[commentId]";
exports.ids = ["pages/api/comments/[commentId]"];
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

eval("\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nmodule.exports = {\n    client: \"pg\",\n    connection: {\n        // host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        password: process.env.DB_PWD,\n        database: process.env.DB_NAME\n    },\n    migrations: {\n        tableName: \"knex_migrations\",\n        directory: `${process.cwd()}/src/api/db/migrations`\n    },\n    seeds: {\n        directory: `${process.cwd()}/src/api/db/seeds`\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9rbmV4ZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLG9EQUF3QjtBQUV4QkUsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLFFBQVE7SUFDUkMsWUFBWTtRQUNWLDZCQUE2QjtRQUM3QkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO1FBQ3pCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLE1BQU07UUFDNUJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTztJQUMvQjtJQUNBQyxZQUFZO1FBQ1ZDLFdBQVc7UUFDWEMsV0FBVyxDQUFDLEVBQUVULFFBQVFVLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQztJQUNyRDtJQUNBQyxPQUFPO1FBQ0xGLFdBQVcsQ0FBQyxFQUFFVCxRQUFRVSxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFDaEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9rbmV4ZmlsZS5qcz8yMzMxIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGllbnQ6IFwicGdcIixcbiAgY29ubmVjdGlvbjoge1xuICAgIC8vIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUFdELFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICB9LFxuICBtaWdyYXRpb25zOiB7XG4gICAgdGFibGVOYW1lOiBcImtuZXhfbWlncmF0aW9uc1wiLFxuICAgIGRpcmVjdG9yeTogYCR7cHJvY2Vzcy5jd2QoKX0vc3JjL2FwaS9kYi9taWdyYXRpb25zYCxcbiAgfSxcbiAgc2VlZHM6IHtcbiAgICBkaXJlY3Rvcnk6IGAke3Byb2Nlc3MuY3dkKCl9L3NyYy9hcGkvZGIvc2VlZHNgLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyIsImNsaWVudCIsImNvbm5lY3Rpb24iLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BXRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsIm1pZ3JhdGlvbnMiLCJ0YWJsZU5hbWUiLCJkaXJlY3RvcnkiLCJjd2QiLCJzZWVkcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./knexfile.js\n");

/***/ }),

/***/ "(api)/./pages/api/comments/[commentId].js":
/*!*******************************************!*\
  !*** ./pages/api/comments/[commentId].js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_api_db_models_Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/api/db/models/Comment */ \"(api)/./src/api/db/models/Comment.js\");\n/* harmony import */ var _src_hashPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/hashPassword */ \"(api)/./src/hashPassword.js\");\n/* harmony import */ var _src_hashPassword__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_hashPassword__WEBPACK_IMPORTED_MODULE_1__);\n// import auth from \"@/api/auth\"\n\n\nconst userIdRoutes = async (req, res)=>{\n    if (req.method === \"GET\") {\n        const { query: { commentId  }  } = req;\n        const comment = await _src_api_db_models_Comment__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query().where({\n            nounouId: commentId\n        }).returning(\"*\");\n        if (!comment) {\n            res.status(200).send(\"Ok\");\n            return;\n        }\n        res.status(200).send({\n            result1: comment\n        });\n    }\n    if (req.method === \"PUT\") {\n        const { query: { commentId  } , body: { // firstName,\n        // lastName,\n        // email,\n        password  }  } = req;\n        ////////////////////////\n        console.log(commentId);\n        console.log(password);\n        const [user] = await User.query().where({\n            email: commentId\n        });\n        console.log(user);\n        if (!user) {\n            res.status(404).send({\n                error: [\n                    \"User not found.\"\n                ]\n            });\n            return;\n        }\n        let passwordHash;\n        let passwordSalt;\n        if (password) {\n            const { hash , salt  } = _src_hashPassword__WEBPACK_IMPORTED_MODULE_1___default()(password);\n            passwordHash = hash;\n            passwordSalt = salt;\n        }\n        ///////////////////////\n        const ubdateuser = await User.query().where({\n            email: commentId\n        })// .patchAndFetchById(id, {\n        .update({\n            // firstName,\n            // lastName,\n            // email,\n            passwordHash,\n            passwordSalt\n        });\n        if (!ubdateuser) {\n            res.status(404).send({\n                error: \"Abandon. Aucun utilisateur pour cet ID.\"\n            });\n            return;\n        }\n        res.status(200).send({\n            result: ubdateuser\n        });\n    }\n    if (req.method === \"DELETE\") {\n        const { params: { id  }  } = req;\n        const user = await User.query().deleteById(id).returning(\"*\");\n        if (!user) {\n            res.status(404).send({\n                error: \"Erreur. Aucun utilisateur pour cet ID.\"\n            });\n        }\n        res.status(200).send(user);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userIdRoutes);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2NvbW1lbnRJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGdDQUFnQztBQUV5QjtBQUNKO0FBRXJELE1BQU1FLGVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUN2QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNLEVBQ0pDLE9BQU8sRUFBRUMsVUFBUyxFQUFFLEdBQ3JCLEdBQUdKO1FBRUosTUFBTUssVUFBVSxNQUFNUix3RUFBYSxHQUNoQ1MsS0FBSyxDQUFDO1lBQUVDLFVBQVVIO1FBQVUsR0FDNUJJLFNBQVMsQ0FBQztRQUViLElBQUksQ0FBQ0gsU0FBUztZQUNaSixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBRXJCO1FBQ0YsQ0FBQztRQUVEVCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVNOO1FBQVE7SUFDMUMsQ0FBQztJQUVELElBQUlMLElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxVQUFTLEVBQUUsR0FDcEJRLE1BQU0sRUFDSixhQUFhO1FBQ2IsWUFBWTtRQUNaLFNBQVM7UUFDVEMsU0FBUSxFQU1ULEdBQ0YsR0FBR2I7UUFDSix3QkFBd0I7UUFDeEJjLFFBQVFDLEdBQUcsQ0FBQ1g7UUFDWlUsUUFBUUMsR0FBRyxDQUFDRjtRQUVaLE1BQU0sQ0FBQ0csS0FBSyxHQUFHLE1BQU1DLEtBQUtkLEtBQUssR0FBR0csS0FBSyxDQUFDO1lBQUVZLE9BQU9kO1FBQVU7UUFDM0RVLFFBQVFDLEdBQUcsQ0FBQ0M7UUFFWixJQUFJLENBQUNBLE1BQU07WUFDVGYsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRVMsT0FBTztvQkFBQztpQkFBa0I7WUFBQztZQUVsRDtRQUNGLENBQUM7UUFFRCxJQUFJQztRQUNKLElBQUlDO1FBRUosSUFBSVIsVUFBVTtZQUNaLE1BQU0sRUFBRVMsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBR3pCLHdEQUFZQSxDQUFDZTtZQUVwQ08sZUFBZUU7WUFDZkQsZUFBZUU7UUFDakIsQ0FBQztRQUNELHVCQUF1QjtRQUV2QixNQUFNQyxhQUFhLE1BQU1QLEtBQUtkLEtBQUssR0FDaENHLEtBQUssQ0FBQztZQUFFWSxPQUFPZDtRQUFVLEVBQzFCLDJCQUEyQjtTQUMxQnFCLE1BQU0sQ0FBQztZQUNOLGFBQWE7WUFDYixZQUFZO1lBQ1osU0FBUztZQUNUTDtZQUNBQztRQU1GO1FBRUYsSUFBSSxDQUFDRyxZQUFZO1lBQ2Z2QixJQUNHUSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO2dCQUFFUyxPQUFPO1lBQTBDO1lBRTNEO1FBQ0YsQ0FBQztRQUVEbEIsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFZ0IsUUFBUUY7UUFBVztJQUM1QyxDQUFDO0lBRUQsSUFBSXhCLElBQUlFLE1BQU0sS0FBSyxVQUFVO1FBQzNCLE1BQU0sRUFDSnlCLFFBQVEsRUFBRUMsR0FBRSxFQUFFLEdBQ2YsR0FBRzVCO1FBRUosTUFBTWdCLE9BQU8sTUFBTUMsS0FBS2QsS0FBSyxHQUFHMEIsVUFBVSxDQUFDRCxJQUFJcEIsU0FBUyxDQUFDO1FBRXpELElBQUksQ0FBQ1EsTUFBTTtZQUNUZixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFUyxPQUFPO1lBQXlDO1FBQ3pFLENBQUM7UUFFRGxCLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNNO0lBQ3ZCLENBQUM7QUFDSDtBQUVBLGlFQUFlakIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy9hcGkvY29tbWVudHMvW2NvbW1lbnRJZF0uanM/NGUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXV0aCBmcm9tIFwiQC9hcGkvYXV0aFwiXG5cbmltcG9ydCBDb21tZW50IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpL2RiL21vZGVscy9Db21tZW50XCI7XG5pbXBvcnQgaGFzaFBhc3N3b3JkIGZyb20gXCIuLi8uLi8uLi9zcmMvaGFzaFBhc3N3b3JkXCI7XG5cbmNvbnN0IHVzZXJJZFJvdXRlcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IHtcbiAgICAgIHF1ZXJ5OiB7IGNvbW1lbnRJZCB9LFxuICAgIH0gPSByZXE7XG5cbiAgICBjb25zdCBjb21tZW50ID0gYXdhaXQgQ29tbWVudC5xdWVyeSgpXG4gICAgICAud2hlcmUoeyBub3Vub3VJZDogY29tbWVudElkIH0pXG4gICAgICAucmV0dXJuaW5nKFwiKlwiKTtcblxuICAgIGlmICghY29tbWVudCkge1xuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoXCJPa1wiKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0MTogY29tbWVudCB9KTtcbiAgfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XG4gICAgY29uc3Qge1xuICAgICAgcXVlcnk6IHsgY29tbWVudElkIH0sXG4gICAgICBib2R5OiB7XG4gICAgICAgIC8vIGZpcnN0TmFtZSxcbiAgICAgICAgLy8gbGFzdE5hbWUsXG4gICAgICAgIC8vIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgLy8gZ2VuZGVyLFxuICAgICAgICAvLyBhZ2VDYXRlZ29yeSxcbiAgICAgICAgLy8gc2FsYXJ5Q2F0ZWdvcnksXG4gICAgICAgIC8vIHByb2Zlc3Npb25hbENhdGVnb3J5LFxuICAgICAgICAvLyBwb2xpdGljYWxQYXJ0eUlkLFxuICAgICAgfSxcbiAgICB9ID0gcmVxO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRJZCk7XG4gICAgY29uc29sZS5sb2cocGFzc3dvcmQpO1xuXG4gICAgY29uc3QgW3VzZXJdID0gYXdhaXQgVXNlci5xdWVyeSgpLndoZXJlKHsgZW1haWw6IGNvbW1lbnRJZCB9KTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogW1wiVXNlciBub3QgZm91bmQuXCJdIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBhc3N3b3JkSGFzaDtcbiAgICBsZXQgcGFzc3dvcmRTYWx0O1xuXG4gICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICBjb25zdCB7IGhhc2gsIHNhbHQgfSA9IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICAgIHBhc3N3b3JkSGFzaCA9IGhhc2g7XG4gICAgICBwYXNzd29yZFNhbHQgPSBzYWx0O1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgdWJkYXRldXNlciA9IGF3YWl0IFVzZXIucXVlcnkoKVxuICAgICAgLndoZXJlKHsgZW1haWw6IGNvbW1lbnRJZCB9KVxuICAgICAgLy8gLnBhdGNoQW5kRmV0Y2hCeUlkKGlkLCB7XG4gICAgICAudXBkYXRlKHtcbiAgICAgICAgLy8gZmlyc3ROYW1lLFxuICAgICAgICAvLyBsYXN0TmFtZSxcbiAgICAgICAgLy8gZW1haWwsXG4gICAgICAgIHBhc3N3b3JkSGFzaCxcbiAgICAgICAgcGFzc3dvcmRTYWx0LFxuICAgICAgICAvLyBnZW5kZXIsXG4gICAgICAgIC8vIGFnZUNhdGVnb3J5LFxuICAgICAgICAvLyBzYWxhcnlDYXRlZ29yeSxcbiAgICAgICAgLy8gcHJvZmVzc2lvbmFsQ2F0ZWdvcnksXG4gICAgICAgIC8vIHBvbGl0aWNhbFBhcnR5SWQsXG4gICAgICB9KTtcblxuICAgIGlmICghdWJkYXRldXNlcikge1xuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoNDA0KVxuICAgICAgICAuc2VuZCh7IGVycm9yOiBcIkFiYW5kb24uIEF1Y3VuIHV0aWxpc2F0ZXVyIHBvdXIgY2V0IElELlwiIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6IHViZGF0ZXVzZXIgfSk7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmFtczogeyBpZCB9LFxuICAgIH0gPSByZXE7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5xdWVyeSgpLmRlbGV0ZUJ5SWQoaWQpLnJldHVybmluZyhcIipcIik7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiRXJyZXVyLiBBdWN1biB1dGlsaXNhdGV1ciBwb3VyIGNldCBJRC5cIiB9KTtcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcklkUm91dGVzO1xuIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJoYXNoUGFzc3dvcmQiLCJ1c2VySWRSb3V0ZXMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImNvbW1lbnRJZCIsImNvbW1lbnQiLCJ3aGVyZSIsIm5vdW5vdUlkIiwicmV0dXJuaW5nIiwic3RhdHVzIiwic2VuZCIsInJlc3VsdDEiLCJib2R5IiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIlVzZXIiLCJlbWFpbCIsImVycm9yIiwicGFzc3dvcmRIYXNoIiwicGFzc3dvcmRTYWx0IiwiaGFzaCIsInNhbHQiLCJ1YmRhdGV1c2VyIiwidXBkYXRlIiwicmVzdWx0IiwicGFyYW1zIiwiaWQiLCJkZWxldGVCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[commentId].js\n");

/***/ }),

/***/ "(api)/./src/api/config.js":
/*!***************************!*\
  !*** ./src/api/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../knexfile */ \"(api)/./knexfile.js\");\n/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_knexfile__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import knexfile from \"@/../knexfile\";\nconst config = {\n    db: (_knexfile__WEBPACK_IMPORTED_MODULE_1___default()),\n    security: {\n        session: {\n            jwtSecret: process.env.JWT_SECRET,\n            expiresIn: \"2 day\"\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYXBpL2NvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QjtBQUNlO0FBQ3RDLHdDQUF3QztBQUV4QyxNQUFNQyxTQUFTO0lBQ2JDLElBQUlGLGtEQUFRQTtJQUNaRyxVQUFVO1FBQ1JDLFNBQVM7WUFDUEMsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1lBQ2pDQyxXQUFXO1FBQ2I7SUFDRjtBQU1GO0FBRUEsaUVBQWVSLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vc3JjL2FwaS9jb25maWcuanM/ZjU3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5pbXBvcnQga25leGZpbGUgZnJvbSBcIi4uLy4uL2tuZXhmaWxlXCI7XG4vLyBpbXBvcnQga25leGZpbGUgZnJvbSBcIkAvLi4va25leGZpbGVcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBkYjoga25leGZpbGUsXG4gIHNlY3VyaXR5OiB7XG4gICAgc2Vzc2lvbjoge1xuICAgICAgand0U2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgICAgZXhwaXJlc0luOiBcIjIgZGF5XCIsXG4gICAgfSxcbiAgfSxcbiAgLy8gc2VydmljZXM6IHtcbiAgLy8gICBsZWJvbmNpdG95ZW46IHtcbiAgLy8gICAgIGJhc2VVcmw6IHByb2Nlc3MuZW52LkxFQk9OQ0lUT1lFTl9CQVNFX1VSTCxcbiAgLy8gICB9LFxuICAvLyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sIm5hbWVzIjpbImtuZXhmaWxlIiwiY29uZmlnIiwiZGIiLCJzZWN1cml0eSIsInNlc3Npb24iLCJqd3RTZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/api/config.js\n");

/***/ }),

/***/ "(api)/./src/api/db/models/BaseModel.js":
/*!****************************************!*\
  !*** ./src/api/db/models/BaseModel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knex */ \"knex\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! objection */ \"objection\");\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(objection__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"(api)/./src/api/config.js\");\n// import config from \"@/api/config\";\n\n\n\nclass BaseModel extends objection__WEBPACK_IMPORTED_MODULE_1__.Model {\n}\nBaseModel.knex(knex__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].db));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYXBpL2RiL21vZGVscy9CYXNlTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUNBQXFDO0FBQ2I7QUFDVTtBQUNBO0FBRWxDLE1BQU1HLGtCQUFrQkYsNENBQUtBO0FBQUU7QUFFL0JFLFVBQVVILElBQUksQ0FBQ0EsMkNBQUlBLENBQUNFLGtEQUFTO0FBRTdCLGlFQUFlQyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy9hcGkvZGIvbW9kZWxzL0Jhc2VNb2RlbC5qcz85MWVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjb25maWcgZnJvbSBcIkAvYXBpL2NvbmZpZ1wiO1xuaW1wb3J0IGtuZXggZnJvbSBcImtuZXhcIjtcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSBcIm9iamVjdGlvblwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XG5cbmNsYXNzIEJhc2VNb2RlbCBleHRlbmRzIE1vZGVsIHt9XG5cbkJhc2VNb2RlbC5rbmV4KGtuZXgoY29uZmlnLmRiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VNb2RlbDtcbiJdLCJuYW1lcyI6WyJrbmV4IiwiTW9kZWwiLCJjb25maWciLCJCYXNlTW9kZWwiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/api/db/models/BaseModel.js\n");

/***/ }),

/***/ "(api)/./src/api/db/models/Comment.js":
/*!**************************************!*\
  !*** ./src/api/db/models/Comment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ \"(api)/./src/api/db/models/BaseModel.js\");\n// import BaseModel from \"@/api/db/models/BaseModel\";\n// import PoliticalParty from \"@/api/db/models/PoliticalParty\";\n// import Answer from \"@/api/db/models/Answer\";\n\nclass Comment extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static get tableName() {\n        return \"comments\";\n    }\n    static get relationMappings() {\n        return {\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYXBpL2RiL21vZGVscy9Db21tZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXFEO0FBQ3JELCtEQUErRDtBQUMvRCwrQ0FBK0M7QUFDWDtBQUVwQyxNQUFNQyxnQkFBZ0JELGtEQUFTQTtJQUM3QixXQUFXRSxZQUFZO1FBQ3JCLE9BQU87SUFDVDtJQUNBLFdBQVdDLG1CQUFtQjtRQUM1QixPQUFPO1FBcUJQO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlRixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy9hcGkvZGIvbW9kZWxzL0NvbW1lbnQuanM/MTZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQmFzZU1vZGVsIGZyb20gXCJAL2FwaS9kYi9tb2RlbHMvQmFzZU1vZGVsXCI7XG4vLyBpbXBvcnQgUG9saXRpY2FsUGFydHkgZnJvbSBcIkAvYXBpL2RiL21vZGVscy9Qb2xpdGljYWxQYXJ0eVwiO1xuLy8gaW1wb3J0IEFuc3dlciBmcm9tIFwiQC9hcGkvZGIvbW9kZWxzL0Fuc3dlclwiO1xuaW1wb3J0IEJhc2VNb2RlbCBmcm9tIFwiLi9CYXNlTW9kZWxcIjtcblxuY2xhc3MgQ29tbWVudCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIHN0YXRpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiBcImNvbW1lbnRzXCI7XG4gIH1cbiAgc3RhdGljIGdldCByZWxhdGlvbk1hcHBpbmdzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBwb2xpdGljYWxQYXJ0eToge1xuICAgICAgLy8gICByZWxhdGlvbjogQmFzZU1vZGVsLkJlbG9uZ3NUb09uZVJlbGF0aW9uLFxuICAgICAgLy8gICBtb2RlbENsYXNzOiBQb2xpdGljYWxQYXJ0eSxcbiAgICAgIC8vICAgam9pbjoge1xuICAgICAgLy8gICAgIGZyb206IFwidXNlcnMucG9saXRpY2FsUGFydHlJZFwiLFxuICAgICAgLy8gICAgIHRvOiBcInBvbGl0aWNhbFBhcnRpZXMuaWRcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH0sXG4gICAgICAvLyBhbnN3ZXJzOiB7XG4gICAgICAvLyAgIHJlbGF0aW9uOiBCYXNlTW9kZWwuTWFueVRvTWFueVJlbGF0aW9uLFxuICAgICAgLy8gICBtb2RlbENsYXNzOiBBbnN3ZXIsXG4gICAgICAvLyAgIGpvaW46IHtcbiAgICAgIC8vICAgICBmcm9tOiBcInVzZXJzLmlkXCIsXG4gICAgICAvLyAgICAgdGhyb3VnaDoge1xuICAgICAgLy8gICAgICAgZnJvbTogXCJyZWxfdXNlcnNfYW5zd2Vycy51c2VySWRcIixcbiAgICAgIC8vICAgICAgIHRvOiBcInJlbF91c2Vyc19hbnN3ZXJzLmFuc3dlcklkXCIsXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICB0bzogXCJhbnN3ZXJzLmlkXCIsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiJdLCJuYW1lcyI6WyJCYXNlTW9kZWwiLCJDb21tZW50IiwidGFibGVOYW1lIiwicmVsYXRpb25NYXBwaW5ncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/api/db/models/Comment.js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[commentId].js"));
module.exports = __webpack_exports__;

})();