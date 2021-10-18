(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(359);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






async function getServerSideProps() {
  // appel du json pour rendre le contenu dynamique
  const res = await fetch(`http://localhost:3000/data/realisations.json`);
  const realisations = await res.json();
  return {
    props: {
      realisations
    }
  };
}
function Home({
  realisations
}) {
  const fond = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
  const image = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
  const title = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
  const text = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
  const lienProjet = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
  const modal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
  const overlay = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fond.current.classList.add((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fond));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("main", {
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentAccueil),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      ref: fond,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        children: "Alexis Flacher"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_component_header__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {
      title: "Alexis Flacher",
      subtitle: "D\xE9veloppeur Front & Webdesigner",
      lienAbout: "/posts/about",
      lienContact: "/posts/contact"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
          children: "Mes r\xE9alisations :"
        }), realisations.map(rea => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listeLien),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
              href: `/`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().lienRea),
                onMouseEnter: () => {
                  image.current.classList.add((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active));
                  image.current.src = rea.img;
                  text.current.innerHTML = rea.text;
                  title.current.innerHTML = rea.titre;
                  lienProjet.current.href = rea.url_repo;
                },
                onMouseLeave: () => {//image.current.classList.remove(css.active);
                },
                onClick: () => {
                  modal.current.classList.add((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().open));
                  overlay.current.classList.add((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().overlayOpen));
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  class: "fas fa-angle-right"
                }), " ", rea.titre]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
              children: rea.tags.map(tag => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                  children: tag.name
                }, tag.name);
              })
            })]
          }, rea.id);
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
        ref: image
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().overlay),
      ref: overlay
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      id: "myModal",
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modal),
      ref: modal,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        class: "modal-content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().close),
          onClick: () => {
            modal.current.classList.remove((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().open));
            overlay.current.classList.remove((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().overlayOpen));
          },
          children: "\xD7"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
          ref: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          ref: text
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
          class: "fas fa-link"
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
          ref: lienProjet,
          target: "_blank",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {}), "Code source du projet"]
        })]
      })
    })]
  });
}

/***/ }),

/***/ 359:
/***/ ((module) => {

// Exports
module.exports = {
	"contentAccueil": "index_contentAccueil__BVgZT",
	"fond": "index_fond__IPg2G",
	"expand": "index_expand__3frs4",
	"content": "index_content__2Yf2h",
	"image": "index_image__1943-",
	"active": "index_active__1Az3l",
	"listeLien": "index_listeLien__2Bjp-",
	"lienRea": "index_lienRea__2Cc00",
	"modal": "index_modal__2jd9_",
	"open": "index_open__2UhnF",
	"overlay": "index_overlay__3ppZB",
	"overlayOpen": "index_overlayOpen__3u3w-"
};


/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,590], () => (__webpack_exec__(666)));
module.exports = __webpack_exports__;

})();