(this["webpackJsonpwow-admin"]=this["webpackJsonpwow-admin"]||[]).push([[15],{426:function(e,t,n){"use strict";var a=n(3),c=n(24),i=n(113),r=n(0),s=n(695),o=n(111),l=n.n(o),u=n(6),d=["color","className","imgClassName","initials","size","badgeUp","content","icon","badgeColor","badgeText","img","imgHeight","imgWidth","status","tag","contentStyles"],b=Object(r.forwardRef)((function(e,t){var n,r,o=e.color,b=e.className,j=e.imgClassName,m=e.initials,h=e.size,f=e.badgeUp,O=e.content,p=e.icon,v=e.badgeColor,x=e.badgeText,g=e.img,k=e.imgHeight,y=e.imgWidth,N=e.status,w=e.tag,L=e.contentStyles,C=Object(i.a)(e,d);return Object(u.jsxs)(w,Object(a.a)(Object(a.a)({className:l()("avatar",(n={},Object(c.a)(n,b,b),Object(c.a)(n,"bg-".concat(o),o),Object(c.a)(n,"avatar-".concat(h),h),n)),ref:t},C),{},{children:[!1===g||void 0===g?Object(u.jsxs)("span",{className:l()("avatar-content",{"position-relative":f}),style:L,children:[m?function(e){var t=[];return e.split(" ").forEach((function(e){t.push(e[0])})),t.join("")}(O):O,p||null,f?Object(u.jsx)(s.a,{color:v||"primary",className:"badge-sm badge-up",pill:!0,children:x||"0"}):null]}):Object(u.jsx)("img",{className:l()(Object(c.a)({},j,j)),src:g,alt:"avatarImg",height:k&&!h?k:32,width:y&&!h?y:32}),N?Object(u.jsx)("span",{className:l()((r={},Object(c.a)(r,"avatar-status-".concat(N),N),Object(c.a)(r,"avatar-status-".concat(h),h),r))}):null]}))}));t.a=b,b.defaultProps={tag:"div"}},429:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r}));var a=n(3),c=function(e){return 0===Object.keys(e).length},i=function(){return localStorage.getItem("userData")},r=function(e){return Object(a.a)(Object(a.a)({},e),{},{colors:Object(a.a)(Object(a.a)({},e.colors),{},{primary25:"#7367f01a",primary:"#7367f0",neutral10:"#7367f0",neutral20:"#ededed",neutral30:"#ededed"})})}},442:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(428),c=n(19),i=n(0),r=n(40),s=function(){var e=Object(i.useState)((function(){try{var e=window.localStorage.getItem("skin");return e?JSON.parse(e):r.a.layout.skin}catch(t){return console.log(t),r.a.layout.skin}})),t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(i.useEffect)((function(){var e,t=window.document.body;(e=t.classList).remove.apply(e,Object(a.a)(t.classList)),"light"!==n&&t.classList.add({dark:"dark-layout",bordered:"bordered-layout","semi-dark":"semi-dark-layout"}[n])}),[n]),[n,function(e){try{var t=e instanceof Function?e(n):e;s(t),window.localStorage.setItem("skin",JSON.stringify(t))}catch(a){console.log(a)}}]}},447:function(e,t,n){},559:function(e,t,n){},560:function(e,t,n){},561:function(e,t,n){},744:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(19),i=n(0),r=n(429),s=n(40),o=n(501),l=Object(i.createContext)(),u=(Object(o.a)(l.Consumer),n(24)),d=n(111),b=n.n(d),j=n(112),m=function(e){return function(t){return t({type:"HANDLE_CONTENT_WIDTH",value:e})}},h=function(e){return function(t){return t({type:"HANDLE_MENU_COLLAPSED",value:e})}},f=function(e){return function(t){return t({type:"HANDLE_MENU_HIDDEN",value:e})}},O=(n(502),n(6)),p=function(e){var t,n=e.layout,c=e.children,r=e.appLayout,s=e.wrapperClass,o=e.transition,l=e.routeMeta,d=Object(j.b)(),p=Object(j.c)((function(e){return e})),v=p.navbar,x=p.layout.contentWidth,g="HorizontalLayout"!==n||r?i.Fragment:"div";return Object(i.useEffect)((function(){return l&&(l.contentWidth&&d(m(l.contentWidth)),l.menuCollapsed&&d(h(l.menuCollapsed)),l.menuHidden&&d(f(l.menuHidden))),function(){l&&(l.contentWidth&&d(m("full")),l.menuCollapsed&&d(h(!l.menuCollapsed)),l.menuHidden&&d(f(!l.menuHidden)))}}),[]),Object(O.jsxs)("div",{className:b()("app-content content overflow-hidden",(t={},Object(u.a)(t,s,s),Object(u.a)(t,"show-overlay",v.query.length),t)),children:[Object(O.jsx)("div",{className:"content-overlay"}),Object(O.jsx)("div",{className:"header-navbar-shadow"}),Object(O.jsx)("div",{className:b()(Object(u.a)({"content-wrapper":!r,"content-area-wrapper":r,"container p-0":"boxed"===x},"animate__animated animate__".concat(o),"none"!==o&&o.length)),children:Object(O.jsx)(g,Object(a.a)(Object(a.a)({},"HorizontalLayout"!==n||r?{}:{className:b()({"content-body":!r})}),{},{children:c}))})]})},v=n(425),x=n(424),g=[{path:"/dashboard",component:Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(12),n.e(16)]).then(n.bind(null,745))}))},{path:"/roles",exact:!0,component:Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(17)]).then(n.bind(null,747))}))},{path:"/roles/permission/:id",component:Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,754))}))},{path:"/wowuser/list",component:Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3)]).then(n.bind(null,748))}))},{path:"/internaluser/list",component:Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3)]).then(n.bind(null,748))}))},{path:"/wowuser/edit/:id",component:Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11),n.e(18)]).then(n.bind(null,749))})),meta:{navLink:"/apps/user/edit"}},{path:"/wowuser/view/:id",component:Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(19)]).then(n.bind(null,746))})),meta:{navLink:"/apps/user/view"}},{path:"/login",component:Object(i.lazy)((function(){return Promise.all([n.e(13),n.e(10)]).then(n.bind(null,755))})),layout:"BlankLayout",meta:{authRoute:!0}},{path:"/error",component:Object(i.lazy)((function(){return n.e(5).then(n.bind(null,719))})),layout:"BlankLayout"}],k=n(113),y=n(442),N=["children"],w=function(e){var t=e.children,n=(Object(k.a)(e,N),Object(y.a)()),a=Object(c.a)(n,2),r=(a[0],a[1],Object(i.useState)(!1)),s=Object(c.a)(r,2),o=s[0],l=s[1];return Object(i.useEffect)((function(){return l(!0),function(){return l(!1)}}),[]),o?Object(O.jsx)("div",{className:"blank-page",children:Object(O.jsx)("div",{className:"app-content content",children:Object(O.jsx)("div",{className:"content-wrapper",children:Object(O.jsx)("div",{className:"content-body",children:t})})})}):null},L=n(716),C=n(462),T=n.n(C),z=n(715),A=n(420),I=n(460),S=n(691),H=n(692),M=n(750),E=n(693),P=n(463),D=n.n(P),R=(n(447),function(e){var t=e.skin,n=e.setSkin,a=e.isRtl,s=e.setIsRtl,o=e.layout,l=e.setLayout,u=e.navbarType,d=e.setNavbarType,j=e.footerType,m=e.setFooterType,h=e.navbarColor,f=e.setNavbarColor,p=e.isHidden,v=e.setIsHidden,x=e.contentWidth,g=e.setContentWidth,k=e.menuCollapsed,y=e.setMenuCollapsed,N=e.transition,w=e.setTransition,L=Object(i.useState)(!1),C=Object(c.a)(L,2),T=C[0],z=C[1],A=function(e){e.preventDefault(),z(!T)},P=[{value:"fadeIn",label:"Fade"},{value:"fadeInLeft",label:"Fade In Left"},{value:"zoomIn",label:"Zoom In"},{value:"none",label:"None"}],R=P.find((function(e){return e.value===N}));return Object(O.jsxs)("div",{className:b()("customizer d-none d-md-block",{open:T}),children:[Object(O.jsx)("a",{href:"/",className:"customizer-toggle d-flex align-items-center justify-content-center",onClick:A,children:Object(O.jsx)(S.a,{size:14,className:"spinner"})}),Object(O.jsxs)(D.a,{className:"customizer-content",children:[Object(O.jsxs)("div",{className:"customizer-header px-2 pt-1 pb-0 position-relative",children:[Object(O.jsx)("h4",{className:"mb-0",children:"Theme Customizer"}),Object(O.jsx)("p",{className:"m-0",children:"Customize & Preview in Real Time"}),Object(O.jsx)("a",{href:"/",className:"customizer-close",onClick:A,children:Object(O.jsx)(H.a,{})})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"px-2",children:[Object(O.jsxs)(E.a,{className:"mb-2",children:[Object(O.jsx)("p",{className:"font-weight-bold",children:"Skin"}),Object(O.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"light",label:"Light",checked:"light"===t},{name:"bordered",label:"Bordered",checked:"bordered"===t},{name:"dark",label:"Dark",checked:"dark"===t},{name:"semi-dark",label:"Semi Dark",checked:"semi-dark"===t}];return e.map((function(t,a){var c=a!==e.length-1;return"HorizontalLayout"===o&&"semi-dark"===t.name?null:Object(O.jsx)(M.a,{type:"radio",id:t.name,label:t.label,checked:t.checked,onChange:function(){return n(t.name)},className:b()({"mr-1":c})},a)}))}()})]}),Object(O.jsxs)(E.a,{className:"mb-2",children:[Object(O.jsx)("p",{className:"font-weight-bold",children:"Content Width"}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)(M.a,{type:"radio",id:"full-width",className:"mr-1",label:"Full Width",checked:"full"===x,onChange:function(){return g("full")}}),Object(O.jsx)(M.a,{type:"radio",id:"boxes",label:"Boxed",checked:"boxed"===x,onChange:function(){return g("boxed")}})]})]}),Object(O.jsx)(E.a,{className:"mb-2",children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"RTL"}),Object(O.jsx)(M.a,{type:"switch",id:"rtl",name:"RTL",checked:a,onChange:function(){return s(!a)}})]})}),Object(O.jsx)(E.a,{className:"mb-2",children:Object(O.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(O.jsx)("p",{className:"font-weight-bold mb-0",children:"Router Transition"}),Object(O.jsx)(I.a,{theme:r.c,className:"react-select",classNamePrefix:"select",defaultValue:P[0],value:R,options:P,isClearable:!1,onChange:function(e){var t=e.value;return w(t)}})]})})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"px-2",children:[Object(O.jsx)("p",{className:"font-weight-bold",children:"Menu Layout"}),Object(O.jsx)(E.a,{className:"mb-2",children:Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)(M.a,{type:"radio",id:"vertical-layout",label:"Vertical",checked:"VerticalLayout"===o,onChange:function(){return l("vertical")},className:"mr-1"}),Object(O.jsx)(M.a,{type:"radio",id:"horizontal-layout",label:"Horizontal",checked:"HorizontalLayout"===o,onChange:function(){return l("horizontal")}})]})}),"HorizontalLayout"!==o?Object(O.jsx)(E.a,{className:"mb-2",children:Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"Menu Collapsed"}),Object(O.jsx)(M.a,{type:"switch",id:"menu-collapsed",name:"menu-collapsed",checked:k,onChange:function(){return y(!k)}})]})}):null,Object(O.jsx)(E.a,{className:"mb-2",children:Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"Menu Hidden"}),Object(O.jsx)(M.a,{type:"switch",id:"menu-hidden",name:"menu-hidden",checked:p,onChange:function(){return v(!p)}})]})})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"px-2",children:["HorizontalLayout"!==o?Object(O.jsxs)(E.a,{className:"mb-2",children:[Object(O.jsx)("p",{className:"font-weight-bold",children:"Navbar Color"}),Object(O.jsx)("ul",{className:"list-inline unstyled-list",children:["white","primary","secondary","success","danger","info","warning","dark"].map((function(e){return Object(O.jsx)("li",{className:b()("color-box bg-".concat(e),{selected:h===e,border:"white"===e}),onClick:function(){return f(e)}},e)}))})]}):null,Object(O.jsxs)(E.a,{className:"mb-2",children:[Object(O.jsxs)("p",{className:"font-weight-bold",children:["HorizontalLayout"===o?"Menu":"Navbar"," Type"]}),Object(O.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"floating",label:"Floating",checked:"floating"===u},{name:"sticky",label:"Sticky",checked:"sticky"===u},{name:"static",label:"Static",checked:"static"===u},{name:"hidden",label:"Hidden",checked:"hidden"===u}];return e.map((function(t,n){var a=n!==e.length-1;return"HorizontalLayout"===o&&"hidden"===t.name?null:Object(O.jsx)(M.a,{type:"radio",id:t.name,label:t.label,checked:t.checked,onChange:function(){return d(t.name)},className:b()({"mr-1":a})},n)}))}()})]})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"px-2",children:Object(O.jsxs)(E.a,{className:"mb-2",children:[Object(O.jsx)("p",{className:"font-weight-bold",children:"Footer Type"}),Object(O.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"sticky",label:"Sticky",checked:"sticky"===j},{name:"static",label:"Static",checked:"static"===j},{name:"hidden",label:"Hidden",checked:"hidden"===j}];return e.map((function(t,n){var a=n!==e.length-1;return Object(O.jsx)(M.a,{type:"radio",id:"footer-".concat(t.name),label:t.label,checked:t.checked,onChange:function(){return m(t.name)},className:b()({"mr-1":a})},n)}))}()})]})})]})]})}),F=n(694),W=function(){return Object(O.jsxs)("p",{className:"clearfix mb-0",children:[Object(O.jsxs)("span",{className:"float-md-left d-block d-md-inline-block mt-25",children:["COPYRIGHT \xa9 ",(new Date).getFullYear()," ",Object(O.jsx)("a",{href:"https://1.envato.market/pixinvent_portfolio",target:"_blank",rel:"noopener noreferrer",children:"Pixinvent"}),Object(O.jsx)("span",{className:"d-none d-sm-inline-block",children:", All rights Reserved"})]}),Object(O.jsxs)("span",{className:"float-md-right d-none d-md-block",children:["Hand-crafted & Made with",Object(O.jsx)(F.a,{size:14})]})]})},G=n(426),V=n(434),_=n(435),B=n(72),K=n.n(B),U={loginEndpoint:"/jwt/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/jwt/refresh-token",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken"},J=function(){function e(t){var n=this;Object(V.a)(this,e),this.jwtConfig=Object(a.a)({},U),this.isAlreadyFetchingAccessToken=!1,this.subscribers=[],this.jwtConfig=Object(a.a)(Object(a.a)({},this.jwtConfig),t),K.a.interceptors.request.use((function(e){var t=n.getToken();return t&&(e.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t)),e}),(function(e){return Promise.reject(e)})),K.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,a=e.response,c=t;return a&&401===a.status?(n.isAlreadyFetchingAccessToken||(n.isAlreadyFetchingAccessToken=!0,n.refreshToken().then((function(e){n.isAlreadyFetchingAccessToken=!1,n.setToken(e.data.accessToken),n.setRefreshToken(e.data.refreshToken),n.onAccessTokenFetched(e.data.accessToken)}))),new Promise((function(e){n.addSubscriber((function(t){c.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t),e(n.axios(c))}))}))):Promise.reject(e)}))}return Object(_.a)(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return K.a.post.apply(K.a,[this.jwtConfig.loginEndpoint].concat(t))}},{key:"register",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return K.a.post.apply(K.a,[this.jwtConfig.registerEndpoint].concat(t))}},{key:"refreshToken",value:function(){return K.a.post(this.jwtConfig.refreshEndpoint,{refreshToken:this.getRefreshToken()})}}]),e}();var Y={jwt:new J({})}.jwt.jwtConfig,q=n(696),Z=n(751),Q=n(697),X=n(699),$=n(700),ee=n(701),te=n(702),ne=n(703),ae=n(704),ce=n(77),ie=function(){var e=Object(j.b)(),t=Object(i.useState)(null),n=Object(c.a)(t,2),a=n[0],s=n[1];Object(i.useEffect)((function(){null!==Object(r.b)()&&s(JSON.parse(localStorage.getItem("userData")))}),[]);var o=a&&a.avatar||ce.default;return Object(O.jsxs)(q.a,{tag:"li",className:"dropdown-user nav-item",children:[Object(O.jsxs)(Z.a,{href:"/",tag:"a",className:"nav-link dropdown-user-link",onClick:function(e){return e.preventDefault()},children:[Object(O.jsxs)("div",{className:"user-nav d-sm-flex d-none",children:[Object(O.jsx)("span",{className:"user-name font-weight-bold",children:a&&a.username||"John Doe"}),Object(O.jsx)("span",{className:"user-status",children:a&&a.role||"Admin"})]}),Object(O.jsx)(G.a,{img:o,imgHeight:"40",imgWidth:"40",status:"online"})]}),Object(O.jsxs)(Q.a,{right:!0,children:[Object(O.jsxs)(X.a,{tag:x.b,to:"#",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)($.a,{size:14,className:"mr-75"}),Object(O.jsx)("span",{className:"align-middle",children:"Profile"})]}),Object(O.jsxs)(X.a,{tag:x.b,to:"#",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(ee.a,{size:14,className:"mr-75"}),Object(O.jsx)("span",{className:"align-middle",children:"Inbox"})]}),Object(O.jsxs)(X.a,{tag:x.b,to:"#",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(te.a,{size:14,className:"mr-75"}),Object(O.jsx)("span",{className:"align-middle",children:"Tasks"})]}),Object(O.jsxs)(X.a,{tag:x.b,to:"#",onClick:function(e){return e.preventDefault()},children:[Object(O.jsx)(ne.a,{size:14,className:"mr-75"}),Object(O.jsx)("span",{className:"align-middle",children:"Chats"})]}),Object(O.jsxs)(X.a,{tag:x.b,to:"/login",onClick:function(){return e((function(e){var t;e((t={type:"LOGOUT"},Object(u.a)(t,Y.storageTokenKeyName,null),Object(u.a)(t,Y.storageRefreshTokenKeyName,null),t)),localStorage.removeItem("userData"),localStorage.removeItem(Y.storageTokenKeyName),localStorage.removeItem(Y.storageRefreshTokenKeyName)}))},children:[Object(O.jsx)(ae.a,{size:14,className:"mr-75"}),Object(O.jsx)("span",{className:"align-middle",children:"Logout"})]})]})]})},re=n(705),se=n(706),oe=n(709),le=n(707),ue=n(708),de=function(e){var t=e.skin,n=e.setSkin,a=e.setMenuVisibility,c=function(){return"dark"===t?Object(O.jsx)(re.a,{className:"ficon",onClick:function(){return n("light")}}):Object(O.jsx)(se.a,{className:"ficon",onClick:function(){return n("dark")}})};return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)("ul",{className:"navbar-nav d-xl-none d-flex align-items-center",children:Object(O.jsx)(le.a,{className:"mobile-menu mr-auto",children:Object(O.jsx)(ue.a,{className:"nav-menu-main menu-toggle hidden-xs is-active",onClick:function(){return a(!0)},children:Object(O.jsx)(oe.a,{className:"ficon"})})})}),Object(O.jsx)("div",{className:"bookmark-wrapper d-flex align-items-center",children:Object(O.jsx)(le.a,{className:"d-none d-lg-block",children:Object(O.jsx)(ue.a,{className:"nav-link-style",children:Object(O.jsx)(c,{})})})}),Object(O.jsx)("ul",{className:"nav navbar-nav align-items-center ml-auto",children:Object(O.jsx)(ie,{})})]})},be=function(e){var t=e.skin,n=e.setSkin,a=e.setMenuVisibility;return Object(O.jsx)(i.Fragment,{children:Object(O.jsx)(de,{skin:t,setSkin:n,setMenuVisibility:a})})},je=n(710),me=n(711),he=[{id:"dashboard",title:"Dashboard",icon:Object(O.jsx)(je.a,{size:20}),navLink:"/dashboard"},{id:"role",title:"Role",icon:Object(O.jsx)(ee.a,{size:20}),navLink:"/roles"},{id:"users",title:"User",icon:Object(O.jsx)($.a,{size:20}),children:[{id:"wowuser",title:"WOW Users",icon:Object(O.jsx)(me.a,{size:12}),navLink:"/wowuser/list"},{id:"internaluser",title:"Internal User",icon:Object(O.jsx)(me.a,{size:12}),navLink:"/internaluser/list"}]}],fe=n(712),Oe=function(e){var t=e.menuCollapsed,n=e.setMenuCollapsed,a=e.setMenuVisibility,c=e.setGroupOpen,r=e.menuHover;Object(i.useEffect)((function(){!r&&t&&c([])}),[r,t]);var o=function(){return t?Object(O.jsx)(me.a,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:function(){return n(!1)}}):Object(O.jsx)(fe.a,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:function(){return n(!0)}})};return Object(O.jsx)("div",{className:"navbar-header",children:Object(O.jsxs)("ul",{className:"nav navbar-nav flex-row",children:[Object(O.jsx)("li",{className:"nav-item mr-auto",children:Object(O.jsxs)(x.c,{to:"/",className:"navbar-brand",children:[Object(O.jsx)("span",{className:"brand-logo",children:Object(O.jsx)("img",{src:s.a.app.appLogoImage,alt:"logo"})}),Object(O.jsx)("h2",{className:"brand-text mb-0",children:s.a.app.appName})]})}),Object(O.jsx)("li",{className:"nav-item nav-toggle",children:Object(O.jsxs)("div",{className:"nav-link modern-nav-toggle cursor-pointer",children:[Object(O.jsx)(o,{}),Object(O.jsx)(H.a,{onClick:function(){return a(!1)},className:"toggle-icon icon-x d-block d-xl-none",size:20})]})})]})})},pe=n(428),ve=n(695),xe=function(e,t,n){return t===e||n&&n.meta&&n.meta.navLink&&n.meta.navLink===e},ge=function e(t,n,a){return t.some((function(t){return t.children?e(t.children,n,a):xe(t.navLink,n,a)}))},ke=function e(t,n,a){var c;return t.some((function(t){var i;return t.children&&(i=e(t.children,n,a))?c={id:t.id,children:i}:xe(t.navLink,n,a)?c={id:t.id}:void 0})),c},ye=function(e,t){var n=[];return function e(a,c){for(var i in a){var r=a[i];void 0!==r&&(r&&"object"===typeof r?e(r,i):i===t&&n.push(r))}}(e),n},Ne=function(e){var t=e.item,n=(e.groupActive,e.setGroupActive),c=e.activeItem,r=e.setActiveItem,s=(e.groupOpen,e.setGroupOpen),o=e.toggleActiveGroup,l=e.parentItem,u=e.routerProps,d=e.currentActiveItem,j=t.externalLink?"a":x.c,m=Object(v.g)(),h=m.pathname,f=Object(v.f)(h,{path:"".concat(t.navLink,"/:param"),exact:!0,strict:!1});return Object(i.useEffect)((function(){if(null!==d){r(d);var e=function(e,t){var n=ke(e,t,u);return ye(n,"id")}(he,h);n(Object(pe.a)(e))}}),[m]),Object(O.jsx)("li",{className:b()({"nav-item":!t.children,disabled:t.disabled,active:t.navLink===c}),children:Object(O.jsxs)(j,Object(a.a)(Object(a.a)({className:"d-flex align-items-center",target:t.newTab?"_blank":void 0},!0===t.externalLink?{href:t.navLink||"/"}:{to:t.navLink||"/",isActive:function(e,n){if(!e)return!1;e.url&&""!==e.url&&e.url===t.navLink&&(d=t.navLink)}}),{},{onClick:function(e){t.navLink.length||e.preventDefault(),l?function(e){var n=ke(he,e,f);o(t.id,n)}(t.navLink):(n([]),s([]))},children:[t.icon,Object(O.jsx)("span",{className:"menu-item text-truncate",children:t.title}),t.badge&&t.badgeText?Object(O.jsx)(ve.a,{className:"ml-auto mr-1",color:t.badge,pill:!0,children:t.badgeText}):null]}))})},we=n(713),Le=function(e){var t,n=e.item,a=e.groupActive,c=e.setGroupActive,i=e.activeItem,r=e.setActiveItem,s=e.groupOpen,o=e.setGroupOpen,l=e.parentItem,u=e.menuCollapsed,d=e.menuHover,j=e.routerProps,m=e.currentActiveItem,h=Object(v.g)().pathname,f=function(e,t){var n,i=a;t?(n=ye(t,"id"),i=n):i.includes(e)?i.splice(i.indexOf(e),1):i.push(e);var r=s.filter((function(e){return!i.includes(e)}));o(Object(pe.a)(r)),c(Object(pe.a)(i))},p=function(e,t){a&&a.includes(t.id)||ge(t.children,h,j)?f(t.id):function(e,t){var n,a=s;t&&(n=ye(t,"id")).pop(),s&&n&&s[0]===n[0]?s.includes(e)?a.splice(a.indexOf(e),1):a.push(e):(a=[],s.includes(e)||a.push(e)),o(Object(pe.a)(a))}(t.id,l),e.preventDefault()};return Object(O.jsxs)("li",{className:b()("nav-item has-sub",{open:(t=n.id,u&&d||!1===u?!(!a.includes(t)&&!s.includes(n.id))||void 0:(!a.includes(t)||!u||!1!==d)&&null),"menu-collapsed-open":a.includes(n.id),"sidebar-group-active":a.includes(n.id)||s.includes(n.id)}),children:[Object(O.jsxs)(x.b,{className:"d-flex align-items-center",to:"/",onClick:function(e){return p(e,n)},children:[n.icon,Object(O.jsx)("span",{className:"menu-title text-truncate",children:n.title}),n.badge&&n.badgeText?Object(O.jsx)(ve.a,{className:"ml-auto mr-1",color:n.badge,pill:!0,children:n.badgeText}):null]}),Object(O.jsx)("ul",{className:"menu-content",children:Object(O.jsx)(we.a,{isOpen:a&&a.includes(n.id)||s&&s.includes(n.id),children:Object(O.jsx)(ze,{items:n.children,groupActive:a,setGroupActive:c,groupOpen:s,setGroupOpen:o,toggleActiveGroup:f,parentItem:n,menuCollapsed:u,menuHover:d,routerProps:j,currentActiveItem:m,activeItem:i,setActiveItem:r})})})]})},Ce=n(714),Te=function(e){var t=e.item;e.index;return Object(O.jsxs)("li",{className:"navigation-header",children:[Object(O.jsx)("span",{children:t.header}),Object(O.jsx)(Ce.a,{className:"feather-more-horizontal"})]})},ze=function(e){var t={VerticalNavMenuSectionHeader:Te,VerticalNavMenuGroup:Le,VerticalNavMenuLink:Ne};return e.items.map((function(n,c){var i=t[function(e){return e.header?"VerticalNavMenuSectionHeader":e.children?"VerticalNavMenuGroup":"VerticalNavMenuLink"}(n)];return Object(O.jsx)(i,Object(a.a)({item:n},e),n.id||n.header)}))},Ae=function(e){var t=e.menuCollapsed,n=e.routerProps,r=e.menu,s=e.currentActiveItem,o=e.skin,l=Object(i.useState)([]),u=Object(c.a)(l,2),d=u[0],j=u[1],m=Object(i.useState)([]),h=Object(c.a)(m,2),f=h[0],p=h[1],v=Object(i.useState)(null),x=Object(c.a)(v,2),g=x[0],k=x[1],y=Object(i.useState)(!1),N=Object(c.a)(y,2),w=N[0],L=N[1],C=Object(i.useRef)(null);return Object(O.jsx)(i.Fragment,{children:Object(O.jsx)("div",{className:b()("main-menu menu-fixed menu-accordion menu-shadow",{expanded:w||!1===t,"menu-light":"semi-dark"!==o&&"dark"!==o,"menu-dark":"semi-dark"===o||"dark"===o}),onMouseEnter:function(){t&&L(!0)},onMouseLeave:function(){return L(!1)},children:r?r(e):Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)(Oe,Object(a.a)({setGroupOpen:j,menuHover:w},e)),Object(O.jsx)("div",{className:"shadow-bottom",ref:C}),Object(O.jsx)(D.a,{className:"main-menu-content",options:{wheelPropagation:!1},onScrollY:function(e){return function(e){C&&e.scrollTop>0?C.current.classList.contains("d-block")||C.current.classList.add("d-block"):C.current.classList.contains("d-block")&&C.current.classList.remove("d-block")}(e)},children:Object(O.jsx)("ul",{className:"navigation navigation-main",children:Object(O.jsx)(ze,{items:he,groupActive:f,setGroupActive:p,activeItem:g,setActiveItem:k,groupOpen:d,setGroupOpen:j,routerProps:n,menuCollapsed:t,menuHover:w,currentActiveItem:s})})})]})})})},Ie=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.layout.isRTL}));return Object(i.useEffect)((function(){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("dir","rtl"):e.setAttribute("dir","ltr")}),[t]),[t,function(n){try{var a=n instanceof Function?n(t):n;e(function(e){return function(t){return t({type:"HANDLE_RTL",value:e})}}(a))}catch(c){console.log(c)}}]},Se=function(){var e=Object(i.useState)((function(){try{return s.a.layout.navbar.type}catch(e){return console.log(e),s.a.layout.navbar.type}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},He=function(){var e=Object(i.useState)((function(){try{return s.a.layout.footer.type}catch(e){return console.log(e),s.a.layout.footer.type}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},Me=function(){var e=Object(i.useState)((function(){try{return s.a.layout.navbar.backgroundColor}catch(e){return console.log(e),s.a.layout.navbar.backgroundColor}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},Ee=(n(559),n(560),function(e){var t=e.children,n=e.navbar,r=(e.footer,e.menu),o=e.routerProps,l=e.currentActiveItem,u=Object(y.a)(),d=Object(c.a)(u,2),p=d[0],x=d[1],g=Ie(),k=Object(c.a)(g,2),N=k[0],w=k[1],C=Se(),I=Object(c.a)(C,2),S=I[0],H=I[1],M=He(),E=Object(c.a)(M,2),P=E[0],D=E[1],F=Me(),W=Object(c.a)(F,2),G=W[0],V=W[1],_=Object(i.useState)(!1),B=Object(c.a)(_,2),K=B[0],U=B[1],J=Object(i.useState)(!1),Y=Object(c.a)(J,2),q=Y[0],Z=Y[1],Q=Object(i.useState)(window.innerWidth),X=Object(c.a)(Q,2),$=X[0],ee=X[1],te=Object(j.b)(),ne=Object(j.c)((function(e){return e.layout})),ae=function(){ee(window.innerWidth)},ce=Object(v.g)(),ie=ne.contentWidth,re=ne.menuCollapsed,se=ne.menuHidden,oe=function(e){return te(h(e))};Object(i.useEffect)((function(){q&&$<1200&&Z(!1)}),[ce]),Object(i.useEffect)((function(){void 0!==window&&window.addEventListener("resize",ae)}),[$]),Object(i.useEffect)((function(){return U(!0),function(){return U(!1)}}),[]);var le=""!==G&&"light"!==G&&"white"!==G;return K?Object(O.jsxs)("div",Object(a.a)(Object(a.a)({className:b()("wrapper vertical-layout ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static",hidden:"navbar-hidden"}[S]||"navbar-floating"," ").concat({static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"}[P]||"footer-static"),{"vertical-menu-modern":$>=1200,"menu-collapsed":re&&$>=1200,"menu-expanded":!re&&$>1200,"vertical-overlay-menu":$<1200,"menu-hide":!q&&$<1200,"menu-open":q&&$<1200})},se?{"data-col":"1-column"}:{}),{},{children:[se?null:Object(O.jsx)(Ae,{skin:p,menu:r,menuCollapsed:re,menuVisibility:q,setMenuCollapsed:oe,setMenuVisibility:Z,routerProps:o,currentActiveItem:l}),Object(O.jsx)(z.a,{expand:"lg",light:"dark"!==p,dark:"dark"===p||le,color:le?G:void 0,className:b()("header-navbar navbar align-items-center ".concat({floating:"floating-nav",sticky:"fixed-top",static:"navbar-static-top",hidden:"d-none"}[S]||"floating-nav"," navbar-shadow")),children:Object(O.jsx)("div",{className:"navbar-container d-flex content",children:n?n({setMenuVisibility:Z,skin:p,setSkin:x}):Object(O.jsx)(be,{setMenuVisibility:Z,skin:p,setSkin:x})})}),t,Object(O.jsx)("div",{className:b()("sidenav-overlay",{show:q}),onClick:function(){return Z(!1)}}),!0===s.a.layout.customizer?Object(O.jsx)(R,{skin:p,setSkin:x,footerType:P,setFooterType:D,navbarType:S,setNavbarType:H,navbarColor:G,setNavbarColor:V,isRtl:N,setIsRtl:w,layout:e.layout,setLayout:e.setLayout,isHidden:se,setIsHidden:function(e){return te(f(e))},contentWidth:ie,setContentWidth:function(e){return te(m(e))},menuCollapsed:re,setMenuCollapsed:oe,transition:e.transition,setTransition:e.setTransition,themeConfig:s.a}):null,!0===s.a.layout.scrollTop?Object(O.jsx)("div",{className:"scroll-to-top",children:Object(O.jsx)(T.a,{showUnder:300,style:{bottom:"5%"},children:Object(O.jsx)(A.a,{className:"btn-icon",color:"primary",children:Object(O.jsx)(L.a,{size:14})})})}):null]})):null}),Pe=function(e){return Object(O.jsx)(Ee,Object(a.a)(Object(a.a)({},e),{},{children:e.children}))},De=n(717),Re=[{id:"home",title:"Home",icon:Object(O.jsx)(De.a,{size:20}),navLink:"/home"},{id:"secondPage",title:"Second Page",icon:Object(O.jsx)(ee.a,{size:20}),navLink:"/second-page"}],Fe=function(e){var t=e.item,n=e.setOpenDropdown,c=e.setGroupActive,r=e.activeItem,s=e.setActiveItem,o=e.routerProps,l=e.currentActiveItem,u=e.isChild,d=t.externalLink?"a":x.c,j=Object(v.g)(),m=j.pathname;xe(t.navLink,m,o);return Object(i.useEffect)((function(){if(null!==l){s(l);var e=function(e,t){var n=ke(e,t,o),a=ye(n,"id");return a.pop(),a}(Re,m);c(Object(pe.a)(e))}}),[j]),Object(O.jsx)("li",{className:b()("nav-item",{active:t.navLink===r,disabled:t.disabled}),onClick:function(){return n([])},children:Object(O.jsxs)(d,Object(a.a)(Object(a.a)({className:b()("d-flex align-items-center",{"dropdown-item":u,"nav-link":!u}),tag:d,target:t.newTab?"_blank":void 0},!0===t.externalLink?{href:t.navLink||"/"}:{to:t.navLink||"/",isActive:function(e,n){if(!e)return!1;e.url&&""!==e.url&&e.url===t.navLink&&(l=t.navLink)}}),{},{children:[t.icon,Object(O.jsx)("span",{children:t.title})]}))})},We=n(468),Ge=function(e){var t=e.item,n=e.submenu,c=e.groupActive,i=e.onMouseEnter,r=e.onMouseLeave,s=e.openDropdown,o=e.setGroupActive,l=e.activeItem,u=e.setActiveItem,d=e.routerProps,j=e.setOpenDropdown,m=e.currentActiveItem,h=Object(v.g)().pathname,f={setMaxHeight:{enabled:!0,fn:function(e){var t,n=window.innerHeight,c=e.instance.reference.getBoundingClientRect().top;n-c-e.popper.height-28<1&&(t={maxHeight:n-c-25,overflowY:"auto"});var i=e.instance.popper.getBoundingClientRect();return i.left+i.width-(window.innerWidth-16)>=0&&e.instance.popper.closest(".dropdown").classList.add("openLeft"),Object(a.a)(Object(a.a)({},e),{},{styles:Object(a.a)({},t)})}}};return Object(O.jsxs)(We.a,{tag:"li",className:b()({"nav-item":!1===n,"dropdown-submenu":!0===n,"sidebar-group-active active":ge(t.children,h,d)||c.includes(t.id)}),isOpen:s.includes(t.id),toggle:function(){return i(t.id)},onMouseEnter:function(){return i(t.id)},onMouseLeave:function(){return r(t.id)},children:[Object(O.jsxs)(Z.a,{to:"/",tag:x.b,className:b()("dropdown-toggle d-flex align-items-center",{"dropdown-item":!0===n,"nav-link":!1===n}),onClick:function(e){return e.preventDefault()},children:[t.icon,Object(O.jsx)("span",{children:t.title})]}),Object(O.jsx)(Q.a,{tag:"ul",modifiers:f,children:Object(O.jsx)(Ve,{submenu:!0,parentItem:t,items:t.children,activeItem:l,groupActive:c,routerProps:d,openDropdown:s,onMouseEnter:i,onMouseLeave:r,setActiveItem:u,setGroupActive:o,isChild:!0,setOpenDropdown:j,currentActiveItem:m})})]})},Ve=function(e){var t={HorizontalNavMenuGroup:Ge,HorizontalNavMenuLink:Fe};return e.items.map((function(n,c){var i=t[function(e){return e.children?"HorizontalNavMenuGroup":"HorizontalNavMenuLink"}(n)];return Object(O.jsx)(i,Object(a.a)({item:n,index:c},e),n.id)}))},_e=function(e){var t=e.currentActiveItem,n=e.routerProps,a=Object(i.useState)(null),r=Object(c.a)(a,2),s=r[0],o=r[1],l=Object(i.useState)([]),u=Object(c.a)(l,2),d=u[0],b=u[1],j=Object(i.useState)([]),m=Object(c.a)(j,2),h=m[0],f=m[1];return Object(O.jsx)("div",{className:"navbar-container main-menu-content",children:Object(O.jsx)("ul",{className:"nav navbar-nav",id:"main-menu-navigation",children:Object(O.jsx)(Ve,{submenu:!1,items:Re,activeItem:s,groupActive:d,routerProps:n,onMouseEnter:function(e){var t=h;t.push(e),f(Object(pe.a)(t))},onMouseLeave:function(e){var t=h;t.splice(t.indexOf(e),1),f(Object(pe.a)(t))},openDropdown:h,setActiveItem:o,setGroupActive:b,setOpenDropdown:f,currentActiveItem:t})})})},Be=(n(561),function(e){var t,n=e.children,r=e.navbar,o=e.footer,l=e.menu,d=e.currentActiveItem,h=e.routerProps,p=Object(y.a)(),v=Object(c.a)(p,2),g=v[0],k=v[1],N=Ie(),w=Object(c.a)(N,2),C=w[0],I=w[1],S=Se(),H=Object(c.a)(S,2),M=H[0],E=H[1],P=He(),D=Object(c.a)(P,2),F=D[0],G=D[1],V=Me(),_=Object(c.a)(V,2),B=_[0],K=_[1],U=Object(i.useState)(!1),J=Object(c.a)(U,2),Y=J[0],q=J[1],Z=Object(i.useState)(!1),Q=Object(c.a)(Z,2),X=Q[0],$=Q[1],ee=Object(j.b)(),te=Object(j.c)((function(e){return e.layout})),ne=te.contentWidth,ae=te.menuHidden;Object(i.useEffect)((function(){return q(!0),window.addEventListener("scroll",(function(){window.pageYOffset>65&&!1===X&&$(!0),window.pageYOffset<65&&$(!1)})),function(){return q(!1),void $(!1)}}),[]);var ce={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},ie={floating:"floating-nav",sticky:"fixed-top"},re=""!==B&&"light"!==B&&"white"!==B;return Y?Object(O.jsxs)("div",Object(a.a)(Object(a.a)({className:b()("wrapper horizontal-layout horizontal-menu ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static"}[M]||"navbar-floating"," ").concat(ce[F]||"footer-static"," menu-expanded"))},ae?{"data-col":"1-column"}:{}),{},{children:[Object(O.jsxs)(z.a,{expand:"lg",className:b()("header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center",{"navbar-scrolled":X}),children:[!r&&Object(O.jsx)("div",{className:"navbar-header d-xl-block d-none",children:Object(O.jsx)("ul",{className:"nav navbar-nav",children:Object(O.jsx)(le.a,{children:Object(O.jsxs)(x.b,{to:"/",className:"navbar-brand",children:[Object(O.jsx)("span",{className:"brand-logo",children:Object(O.jsx)("img",{src:s.a.app.appLogoImage,alt:"logo"})}),Object(O.jsx)("h2",{className:"brand-text mb-0",children:s.a.app.appName})]})})})}),Object(O.jsx)("div",{className:"navbar-container d-flex content",children:r?r({skin:g,setSkin:k}):Object(O.jsx)(be,{skin:g,setSkin:k})})]}),ae?null:Object(O.jsx)("div",{className:"horizontal-menu-wrapper",children:Object(O.jsx)(z.a,{tag:"div",expand:"sm",light:"dark"!==g,dark:"dark"===g||re,className:b()("header-navbar navbar-horizontal navbar-shadow menu-border",(t={},Object(u.a)(t,ie[M],"static"!==M),Object(u.a)(t,"floating-nav",!ie[M]&&"static"!==M||"floating"===M),t)),children:l?l({routerProps:h,currentActiveItem:d}):Object(O.jsx)(_e,{routerProps:h,currentActiveItem:d})})}),n,!0===s.a.layout.customizer?Object(O.jsx)(R,{skin:g,setSkin:k,footerType:F,setFooterType:G,navbarType:M,setNavbarType:E,navbarColor:B,setNavbarColor:K,isRtl:C,setIsRtl:I,layout:e.layout,setLayout:e.setLayout,isHidden:ae,setIsHidden:function(e){return ee(f(e))},contentWidth:ne,setContentWidth:function(e){return ee(m(e))},transition:e.transition,setTransition:e.setTransition,themeConfig:s.a}):null,Object(O.jsx)("footer",{className:b()("footer footer-light ".concat(ce[F]||"footer-static"),{"d-none":"hidden"===F}),children:o?o({footerType:F,footerClasses:ce}):Object(O.jsx)(W,{footerType:F,footerClasses:ce})}),!0===s.a.layout.scrollTop?Object(O.jsx)("div",{className:"scroll-to-top",children:Object(O.jsx)(T.a,{showUnder:300,style:{bottom:"5%"},children:Object(O.jsx)(A.a,{className:"btn-icon",color:"primary",children:Object(O.jsx)(L.a,{size:14})})})}):null]})):null}),Ke=function(e){return Object(O.jsx)(Be,Object(a.a)(Object(a.a)({},e),{},{children:e.children}))},Ue=function(){var e=function(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)((function(){try{return s.a.layout.type}catch(e){return console.log(e),s.a.layout.type}})),o=Object(c.a)(r,2),l=o[0],u=o[1],d=function(){"horizontal"===l&&window.innerWidth<=1200&&(u("vertical"),a("horizontal")),"horizontal"===n&&window.innerWidth>=1200&&u("horizontal")};return Object(i.useEffect)((function(){d()}),[]),Object(i.useEffect)((function(){window.addEventListener("resize",d)}),[l,n]),[l,function(e){try{var t=e instanceof Function?e(l):e;u(t)}catch(n){console.log(n)}}]}(),t=Object(c.a)(e,2),r=t[0],o=t[1],u=function(){var e=Object(i.useState)((function(){try{return s.a.layout.routerTransition}catch(e){return console.log(e),s.a.layout.routerTransition}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]}(),d=Object(c.a)(u,2),b=d[0],j=d[1],m=(Object(i.useContext)(l),"horizontal"===r?"HorizontalLayout":"VerticalLayout"),h={BlankLayout:w,VerticalLayout:Pe,HorizontalLayout:Ke},f=Object(i.lazy)((function(){return n.e(20).then(n.bind(null,718))})),k=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,719))}));return Object(O.jsx)(x.a,{basename:"",children:Object(O.jsxs)(v.d,{children:[Object(O.jsx)(v.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(v.a,{to:"/dashboard"})}}),Object(O.jsx)(v.b,{exact:!0,path:"/not-authorized",render:function(e){return Object(O.jsx)(h.BlankLayout,{children:Object(O.jsx)(f,{})})}}),Object.keys(h).map((function(e,t){var n=h[e],c=function(e){var t=[],n=[];return g&&g.filter((function(a){(a.layout===e||void 0===a.layout&&m===e)&&(t.push(a),n.push(a.path))})),{LayoutRoutes:t,LayoutPaths:n}}(e),r=c.LayoutRoutes,s=c.LayoutPaths,l={};return Object(O.jsx)(v.b,{path:s,children:Object(O.jsx)(n,{routerProps:l,layout:e,setLayout:o,transition:b,setTransition:j,currentActiveItem:null,children:Object(O.jsx)(v.d,{children:r.map((function(e){return Object(O.jsx)(v.b,{path:e.path,exact:!0===e.exact,render:function(t){return Object.assign(l,Object(a.a)(Object(a.a)({},t),{},{meta:e.meta})),Object(O.jsx)(i.Suspense,{fallback:null,children:Object(O.jsx)(p,Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({layout:m,transition:b,setTransition:j},e.appLayout?{appLayout:e.appLayout}:{}),e.meta?{routeMeta:e.meta}:{}),e.className?{wrapperClass:e.className}:{}),{},{children:Object(O.jsx)(e.component,Object(a.a)({},t))}))})}},e.path)}))})})},t)})),Object(O.jsx)(v.b,{path:"*",component:k}),"/"]})})};t.default=function(e){return Object(O.jsx)(Ue,{})}}}]);
//# sourceMappingURL=15.ace409a1.chunk.js.map