(this["webpackJsonpwow-admin"]=this["webpackJsonpwow-admin"]||[]).push([[16],{450:function(e,t,r){"use strict";var a=r(14),n=r(15),s=r(20),o=r(0),c=r.n(o),i=r(4),l=r.n(i),u=r(113),d=r.n(u),p=r(456),b=r(76);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=f(f({},p.Transition.propTypes),{},{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:b.q,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),m=f(f({},p.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function h(e){var t=e.tag,r=e.baseClass,s=e.baseClassActive,o=e.className,i=e.cssModule,l=e.children,u=e.innerRef,j=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),f=Object(b.o)(j,b.c),O=Object(b.n)(j,b.c);return c.a.createElement(p.Transition,f,(function(e){var n="entered"===e,p=Object(b.m)(d()(o,r,n&&s),i);return c.a.createElement(t,Object(a.a)({className:p},O,{ref:u}),l)}))}h.propTypes=O,h.defaultProps=m,t.a=h},454:function(e,t,r){"use strict";var a=r(14),n=r(15),s=r(0),o=r.n(s),c=r(4),i=r.n(c),l=r(113),u=r.n(l),d=r(76),p={tag:d.q,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,r=e.cssModule,s=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(t,"input-group-text"),r);return o.a.createElement(s,Object(a.a)({},c,{className:i}))};b.propTypes=p,b.defaultProps={tag:"span"},t.a=b},464:function(e,t,r){"use strict";var a=r(1),n=r(20),s=r(16),o=r(117),c=r(0),i=r.n(c),l=r(115),u=r.n(l),d=r(483),p=r(445),b=r.n(p);function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},j.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var O=Object(c.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,s=void 0===n?24:n,o=f(e,["color","size"]);return i.a.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.a.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i.a.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));O.propTypes={color:b.a.string,size:b.a.oneOfType([b.a.string,b.a.number])},O.displayName="EyeOff";var m=O,h=r(484),g=r(485),y=r(486),v=r(487),x=r(454),w=r(5),N=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"],P=function(e){var t=e.label,r=e.hideIcon,i=e.showIcon,l=e.visible,p=e.className,b=e.htmlFor,j=e.placeholder,f=e.iconSize,O=e.inputClassName,P=Object(o.a)(e,N),E=Object(c.useState)(l),k=Object(s.a)(E,2),C=k[0],T=k[1];return Object(w.jsxs)(c.Fragment,{children:[t?Object(w.jsx)(h.a,{for:b,children:t}):null,Object(w.jsxs)(g.a,{className:u()(Object(n.a)({},p,p)),children:[Object(w.jsx)(y.a,Object(a.a)(Object(a.a)({type:!1===C?"password":"text",placeholder:j||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:u()(Object(n.a)({},O,O))},t&&b?{id:b}:{}),P)),Object(w.jsx)(v.a,{addonType:"append",onClick:function(){return T(!C)},children:Object(w.jsx)(x.a,{className:"cursor-pointer",children:function(){var e=f||14;return!1===C?r||Object(w.jsx)(d.a,{size:e}):i||Object(w.jsx)(m,{size:e})}()})})]})]})};t.a=P;P.defaultProps={visible:!1}},483:function(e,t,r){"use strict";var a=r(0),n=r.n(a),s=r(445),o=r.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return n.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.a.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),n.a.createElement("circle",{cx:"12",cy:"12",r:"3"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Eye",t.a=l},485:function(e,t,r){"use strict";var a=r(14),n=r(15),s=r(0),o=r.n(s),c=r(4),i=r.n(c),l=r(113),u=r.n(l),d=r(76),p={tag:d.q,size:i.a.string,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,r=e.cssModule,s=e.tag,c=e.size,i=Object(n.a)(e,["className","cssModule","tag","size"]),l=Object(d.m)(u()(t,"input-group",c?"input-group-"+c:null),r);return o.a.createElement(s,Object(a.a)({},i,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},487:function(e,t,r){"use strict";var a=r(14),n=r(15),s=r(0),o=r.n(s),c=r(4),i=r.n(c),l=r(113),u=r.n(l),d=r(76),p=r(454),b={tag:d.q,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},j=function(e){var t=e.className,r=e.cssModule,s=e.tag,c=e.addonType,i=e.children,l=Object(n.a)(e,["className","cssModule","tag","addonType","children"]),b=Object(d.m)(u()(t,"input-group-"+c),r);return"string"===typeof i?o.a.createElement(s,Object(a.a)({},l,{className:b}),o.a.createElement(p.a,{children:i})):o.a.createElement(s,Object(a.a)({},l,{className:b,children:i}))};j.propTypes=b,j.defaultProps={tag:"div"},t.a=j},490:function(e,t,r){"use strict";var a=r(14),n=r(15),s=r(20),o=r(0),c=r.n(o),i=r(4),l=r.n(i),u=r(113),d=r.n(u),p=r(76),b=r(450);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:p.q,transition:l.a.shape(b.a.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:f(f({},b.a.defaultProps),{},{unmountOnExit:!0})};function h(e){var t=e.className,r=e.closeClassName,s=e.closeAriaLabel,o=e.cssModule,i=e.tag,l=e.color,u=e.isOpen,j=e.toggle,O=e.children,m=e.transition,h=e.fade,g=e.innerRef,y=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(p.m)(d()(t,"alert","alert-"+l,{"alert-dismissible":j}),o),x=Object(p.m)(d()("close",r),o),w=f(f(f({},b.a.defaultProps),m),{},{baseClass:h?m.baseClass:"",timeout:h?m.timeout:0});return c.a.createElement(b.a,Object(a.a)({},y,w,{tag:i,className:v,in:u,role:"alert",innerRef:g}),j?c.a.createElement("button",{type:"button",className:x,"aria-label":s,onClick:j},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}h.propTypes=O,h.defaultProps=m,t.a=h},523:function(e,t,r){"use strict";var a=r(0),n=r.n(a),s=r(445),o=r.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return n.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Facebook",t.a=l},524:function(e,t,r){"use strict";var a=r(0),n=r.n(a),s=r(445),o=r.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return n.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Twitter",t.a=l},525:function(e,t,r){"use strict";var a=r(0),n=r.n(a),s=r(445),o=r.n(s);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,s=e.size,o=void 0===s?24:s,l=i(e,["color","size"]);return n.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="GitHub",t.a=l},779:function(e,t,r){"use strict";r.r(t);var a=r(20),n=r(1),s=r(16),o=r(0),c=r.n(o),i=r(115),l=r.n(i),u=r(449),d=r(453),p=r(496),b=r(116),j=r(463),f=r(201),O=r(474),m=r(121),h=r(448),g=r(447),y=r(464),v=r(451),x=r(445),w=r.n(x);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},N.apply(this,arguments)}function P(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var E=Object(o.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,s=void 0===n?24:n,o=P(e,["color","size"]);return c.a.createElement("svg",N({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),c.a.createElement("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),c.a.createElement("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),c.a.createElement("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),c.a.createElement("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),c.a.createElement("line",{x1:"14",y1:"1",x2:"14",y2:"4"}))}));E.propTypes={color:w.a.string,size:w.a.oneOfType([w.a.string,w.a.number])},E.displayName="Coffee";var k=E,C=r(523),T=r(524),z=r(725),L=r(525),M=r(488),S=r(489),R=r(678),F=r(679),A=r(490),W=r(491),D=r(717),I=r(484),q=r(486),B=r(775),G=r(441),V=(r(471),r(5)),H=function(e){var t=e.name,r=e.role;return Object(V.jsxs)(o.Fragment,{children:[Object(V.jsx)("div",{className:"toastify-header",children:Object(V.jsxs)("div",{className:"title-wrapper",children:[Object(V.jsx)(u.a,{size:"sm",color:"success",icon:Object(V.jsx)(k,{size:12})}),Object(V.jsxs)("h6",{className:"toast-title font-weight-bold",children:["Welcome, ",t]})]})}),Object(V.jsx)("div",{className:"toastify-body",children:Object(V.jsxs)("span",{children:["You have successfully logged in as an ",r," user to WOW Talent. Now you can start to explore. Enjoy!"]})})]})};t.default=function(e){var t,c=Object(d.a)(),i=Object(s.a)(c,2),u=i[0],x=(i[1],Object(o.useContext)(m.a)),w=Object(b.b)(),N=Object(h.g)(),P=Object(o.useState)("admin@demo.com"),E=Object(s.a)(P,2),k=E[0],J=E[1],Z=Object(o.useState)("admin"),Y=Object(s.a)(Z,2),K=Y[0],Q=Y[1],U=Object(j.b)(),X=U.register,$=U.errors,_=U.handleSubmit,ee="dark"===u?"login-v2-dark.svg":"login-v2.svg",te=r(472)("./".concat(ee)).default;return Object(V.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(V.jsxs)(M.a,{className:"auth-inner m-0",children:[Object(V.jsxs)(g.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(V.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(V.jsxs)("defs",{children:[Object(V.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(V.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(V.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(V.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(V.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(V.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(V.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(V.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(V.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(V.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(V.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(V.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(V.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(V.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(V.jsx)("h2",{className:"brand-text text-primary ml-1",children:"WOW"})]}),Object(V.jsx)(S.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(V.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(V.jsx)("img",{className:"img-fluid",src:te,alt:"Login V2"})})}),Object(V.jsx)(S.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(V.jsxs)(S.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(V.jsx)(R.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Welcome to WOW TALENT! \ud83d\udc4b"}),Object(V.jsx)(F.a,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(V.jsx)(A.a,{color:"primary",children:Object(V.jsx)("div",{className:"alert-body font-small-2",children:Object(V.jsx)("p",{children:Object(V.jsxs)("small",{className:"mr-50",children:[Object(V.jsx)("span",{className:"font-weight-bold",children:"Admin:"})," admin@demo.com | admin"]})})})}),Object(V.jsxs)(W.a,{className:"auth-login-form mt-2",onSubmit:_((function(e){Object(v.b)($)&&p.a.login({email:k,password:K}).then((function(e){var t=Object(n.a)(Object(n.a)({},e.data.userData),{},{accessToken:e.data.accessToken,refreshToken:e.data.refreshToken});w(Object(O.a)(t)),x.update(e.data.userData.ability),N.push(Object(v.a)(t.role)),f.c.success(Object(V.jsx)(H,{name:t.fullName||t.username||"John Doe",role:t.role||"admin"}),{transition:f.a,hideProgressBar:!0,autoClose:2e3})})).catch((function(e){return console.log(e)}))})),children:[Object(V.jsxs)(D.a,{children:[Object(V.jsx)(I.a,{className:"form-label",for:"login-email",children:"Email"}),Object(V.jsx)(q.a,{autoFocus:!0,type:"email",value:k,id:"login-email",name:"login-email",placeholder:"john@example.com",onChange:function(e){return J(e.target.value)},className:l()({"is-invalid":$["login-email"]}),innerRef:X({required:!0,validate:function(e){return""!==e}})})]}),Object(V.jsxs)(D.a,{children:[Object(V.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(V.jsx)(I.a,{className:"form-label",for:"login-password",children:"Password"}),Object(V.jsx)(g.b,{to:"/forgot-password",children:Object(V.jsx)("small",{children:"Forgot Password?"})})]}),Object(V.jsx)(y.a,(t={value:K,id:"login-password",name:"login-password",className:"input-group-merge",onChange:function(e){return Q(e.target.value)}},Object(a.a)(t,"className",l()({"is-invalid":$["login-password"]})),Object(a.a)(t,"innerRef",X({required:!0,validate:function(e){return""!==e}})),t))]}),Object(V.jsx)(D.a,{children:Object(V.jsx)(B.a,{type:"checkbox",className:"custom-control-Primary",id:"remember-me",label:"Remember Me"})}),Object(V.jsx)(G.a.Ripple,{type:"submit",color:"primary",block:!0,children:"Sign in"})]}),Object(V.jsxs)("p",{className:"text-center mt-2",children:[Object(V.jsx)("span",{className:"mr-25",children:"New on our platform?"}),Object(V.jsx)(g.b,{to:"/register",children:Object(V.jsx)("span",{children:"Create an account"})})]}),Object(V.jsx)("div",{className:"divider my-2",children:Object(V.jsx)("div",{className:"divider-text",children:"or"})}),Object(V.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(V.jsx)(G.a.Ripple,{color:"facebook",children:Object(V.jsx)(C.a,{size:14})}),Object(V.jsx)(G.a.Ripple,{color:"twitter",children:Object(V.jsx)(T.a,{size:14})}),Object(V.jsx)(G.a.Ripple,{color:"google",children:Object(V.jsx)(z.a,{size:14})}),Object(V.jsx)(G.a.Ripple,{className:"mr-0",color:"github",children:Object(V.jsx)(L.a,{size:14})})]})]})})]})})}}}]);
//# sourceMappingURL=16.56708efe.chunk.js.map