(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,,function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(1),r=Object(s.createContext)(null)},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_DatosContex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);function Boton(_ref){var butonClass=_ref.butonClass,value=_ref.value,estadosGlobales=_ref.estadosGlobales,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DatosContex__WEBPACK_IMPORTED_MODULE_1__.a),campoValor=_useContext.campoValor,theme=_useContext.theme,setCampoValor=estadosGlobales.setCampoValor,setResultado=estadosGlobales.setResultado,refBoton=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),handleBoton=function(){"="!==refBoton.current.innerHTML&&"c"!==refBoton.current.innerHTML&&setCampoValor((function(e){return e+refBoton.current.innerHTML})),"c"===refBoton.current.innerHTML&&(setCampoValor((function(e){return""})),setResultado((function(e){return 0}))),"="===refBoton.current.innerHTML&&(setResultado((function(e){return e+1})),calcular())};function calcular(){var operacion=campoValor.replace(/x/g,"*");operacion=operacion.replace(/\xf7/g,"/"),setResultado((function(resul){return eval(operacion)})),setCampoValor((function(resul){return eval(operacion)}))}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"grid-item",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"".concat(butonClass," ").concat(theme),ref:refBoton,onClick:handleBoton,children:value})})}__webpack_exports__.a=Boton},function(e){e.exports=JSON.parse('{"a":[{"butonClass":"btn alter  ","value":"c"},{"butonClass":"btn opera parentesis  ","value":"()"},{"butonClass":"btn opera  ","value":"%"},{"butonClass":"btn opera  ","value":"\xf7"},{"butonClass":"btn numero  ","value":"7"},{"butonClass":"btn numero  ","value":"8"},{"butonClass":"btn numero  ","value":"9"},{"butonClass":"btn opera  ","value":"x"},{"butonClass":"btn numero ","value":"4"},{"butonClass":"btn numero ","value":"5"},{"butonClass":"btn numero  ","value":"6"},{"butonClass":"btn opera  ","value":"-"},{"butonClass":"btn numero  ","value":"1"},{"butonClass":"btn numero  ","value":"2"},{"butonClass":"btn numero  ","value":"3"},{"butonClass":"btn opera  ","value":"+"},{"butonClass":"btn opera ope2 ","value":"+/-"},{"butonClass":"btn numero ","value":"0"},{"butonClass":"btn opera ope2 ","value":"."},{"butonClass":"btn    igual","value":"="}]}')},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(5),o=a.n(r),n=a(3),c=(a(12),a(2)),l=a(0),u=function(e){var t=e.setCampoValor,a=Object(s.useContext)(c.a).campoValor,r=Object(s.useState)(""),o=Object(n.a)(r,2),u=o[0],i=o[1];return Object(l.jsx)("div",{className:"grid-item grid-header",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(u),console.log(u)},children:Object(l.jsx)("input",{type:"text",placeholder:"0",value:a,className:"datos",id:"datos",autoFocus:!0,maxLength:"",onChange:function(e){console.log(e.target.value),i(e.target.value)}})})})};var i=function(e){var t=e.estadosGlobales,a=Object(s.useContext)(c.a),r=a.campoValor,o=a.historial,n=t.setCampoValor,u=t.setHistorial,i=t.setScroll,_=t.setMostrar;return Object(l.jsxs)("div",{className:"grid-item grid-header-footer",children:[Object(l.jsxs)("span",{className:"header-icon",children:[Object(l.jsx)("i",{className:"fas fa-clock btn_historial ",id:"btn_historial",onClick:function(){""===o?(u("verHistorial"),i("scroll"),_("mostrar")):(u(""),i(""),_(""))}}),Object(l.jsx)("i",{className:"fas fa-square-root-alt"}),Object(l.jsx)("i",{className:"fas fa-ruler-horizontal"})]}),Object(l.jsx)("span",{id:"borrar",className:"borrar",onClick:function(){var e=r.length,t=r.slice(0,e-1);n((function(e){return t}))},children:Object(l.jsx)("i",{className:"fas fa-backspace"})})]})};var _=function(){return Object(l.jsx)("div",{className:"error",id:"error",children:Object(l.jsx)("p",{children:"Operaci\xf3n No valida"})})};var b=function(){var e=Object(s.useContext)(c.a),t=e.theme,a=e.historial,r=e.scroll,o=e.mostrar;return Object(l.jsxs)("div",{className:"panel_historial ".concat(t,"  ").concat(o," 1"),id:"panel_historial",children:[Object(l.jsx)("ul",{id:"lista_historial 2 ".concat(a),children:Object(l.jsxs)("div",{className:"historialVacio",children:[Object(l.jsx)("p",{children:Object(l.jsx)("i",{className:"fas fa-box-open"})}),Object(l.jsx)("p",{className:"vacioText",children:"No Hay Historial"})]})}),Object(l.jsx)("div",{className:"box_btn_borrar_historial ".concat(r),id:"box_borrar_historial",children:Object(l.jsx)("button",{className:"btn_borrar_historial",id:"eliminarHistorial",children:"Eliminar historial"})})]})};var j=function(){var e=Object(s.useContext)(c.a).resultado;return Object(l.jsx)("div",{className:"grid-item grid-header-resultado",children:Object(l.jsx)("span",{className:"resultado",id:"resultado",children:e})})};var d=function(e){var t=e.setTheme,a=Object(s.useContext)(c.a).theme;return Object(l.jsxs)("div",{className:"modo",children:[Object(l.jsx)("i",{className:"fas fa-sun"}),Object(l.jsxs)("div",{className:"switchs ".concat(a),children:[Object(l.jsx)("input",{type:"checkbox",id:"darkmode"}),Object(l.jsx)("label",{htmlFor:"darkmode",onClick:function(){t("ligth"===a?function(e){return"dark"}:function(e){return"ligth"})}})]}),Object(l.jsx)("i",{className:"fas fa-moon"})]})},O=a(6),m=a(7);var x=function(e){var t=e.estadosGlobales;return Object(l.jsx)(l.Fragment,{children:m.a.map((function(e){var a=e.butonClass,s=e.value;return Object(l.jsx)(O.a,{butonClass:a,value:s,estadosGlobales:t},s)}))})};var v=function(e){var t=e.children,a=Object(s.useContext)(c.a).theme;return Object(l.jsx)("div",{className:"grid-container ".concat(a),id:"calculadora",children:t})};var h=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),a=t[0],r=t[1],o=Object(s.useState)(0),O=Object(n.a)(o,2),m=O[0],h=O[1],p=Object(s.useState)("ligth"),f=Object(n.a)(p,2),C=f[0],E=f[1],M=Object(s.useState)(""),N=Object(n.a)(M,2),D=N[0],P=N[1],g=Object(s.useState)(""),B=Object(n.a)(g,2),T=B[0],k=B[1],R=Object(s.useState)(""),L=Object(n.a)(R,2),V={campoValor:a,resultado:m,theme:C,historial:D,scroll:T,mostrar:L[0]},A={setCampoValor:r,setResultado:h,setTheme:E,setHistorial:P,setScroll:k,setMostrar:L[1]};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c.a.Provider,{value:V,children:[Object(l.jsxs)(v,{children:[Object(l.jsx)(u,{setCampoValor:r}),Object(l.jsx)(j,{}),Object(l.jsx)(i,{estadosGlobales:A}),Object(l.jsx)(b,{}),Object(l.jsx)(x,{estadosGlobales:A}),Object(l.jsx)(_,{})]}),Object(l.jsx)(d,{setTheme:E})]})})},p=(a(14),document.querySelector("#container"));o.a.render(Object(l.jsx)(h,{}),p)}],[[15,1,2]]]);
//# sourceMappingURL=main.a7373507.chunk.js.map