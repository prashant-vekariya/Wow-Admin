(this["webpackJsonpwow-admin"]=this["webpackJsonpwow-admin"]||[]).push([[24],{1134:function(e,t,r){"use strict";r.r(t);var n=r(0),a=(r(16),r(503),r(453),r(115),r(472),r(482),r(1102),r(479),r(473),r(1119),r(443),r(492)),o=r(116),c=r(5);r(449),r(454),r(126),r(1103),r(1104),r(1138),r(1105),r(1107),r(622),r(654),r(655),r(600),r(656),r(523),r(524),r(493),r(525),r(567),r(657),r(568),r(480),r(481),r(1137),r(464),r(488),r(504),r(460),t.default=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e(Object(a.c)())}),[]),Object(c.jsx)("div",{className:"app-user-list"})}},460:function(e,t,r){},492:function(e,t,r){"use strict";r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(465),a=r(466),o=r.n(a),c=r(77),i=r.n(c),s=r(453),l="wow-talent_6586563476534 ".concat(JSON.parse(localStorage.getItem("token"))),u=function(){return function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("response"),e.next=3,i.a.get("".concat(s.a,"/role/get_role"),{headers:{authorization:l}}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(n.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/users/list/data",e).then((function(t){r({type:"GET_DATA",data:t.data.users,totalPages:t.data.total,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(n.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/users/user",{id:e}).then((function(e){r({type:"GET_USER",selectedUser:e.data.user})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(t,r){i.a.post("/apps/users/add-user",e).then((function(r){t({type:"ADD_USER",user:e})})).then((function(){t(p(r().users.params)),t(u())})).catch((function(e){return console.log(e)}))}},h=function(e){return function(t,r){i.a.delete("/apps/users/delete",{id:e}).then((function(e){t({type:"DELETE_USER"})})).then((function(){t(p(r().users.params)),t(u())}))}}},493:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(447),c=r.n(o);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polyline",{points:"3 6 5 6 21 6"}),a.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),a.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),a.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Trash2",t.a=l},503:function(e,t,r){"use strict";var n=r(1),a=r(20),o=r(120),c=r(601),i=r(115),s=r.n(i),l=r(1098),u=r(882),p=r(883),f=r(5),d=["width","open","toggleSidebar","size","bodyClassName","contentClassName","wrapperClassName","headerClassName","className","title","children","closeBtn"];t.a=function(e){var t,r=e.width,i=e.open,h=e.toggleSidebar,y=e.size,b=e.bodyClassName,m=e.contentClassName,O=e.wrapperClassName,g=e.headerClassName,v=e.className,j=e.title,w=e.children,x=e.closeBtn,E=Object(o.a)(e,d),k=x||Object(f.jsx)(c.a,{className:"cursor-pointer",size:15,onClick:h});return Object(f.jsxs)(l.a,Object(n.a)(Object(n.a)(Object(n.a)({isOpen:i,toggle:h,contentClassName:s()(Object(a.a)({},m,m)),modalClassName:s()("modal-slide-in",Object(a.a)({},O,O)),className:s()((t={},Object(a.a)(t,v,v),Object(a.a)(t,"sidebar-lg","lg"===y),Object(a.a)(t,"sidebar-sm","sm"===y),t))},void 0!==r?{style:{width:String(r)+"px"}}:{}),E),{},{children:[Object(f.jsx)(u.a,{className:s()(Object(a.a)({},g,g)),toggle:h,close:k,tag:"div",children:Object(f.jsx)("h5",{className:"modal-title",children:Object(f.jsx)("span",{className:"align-middle",children:j})})}),Object(f.jsx)(p.a,{className:s()("flex-grow-1",Object(a.a)({},b,b)),children:w})]}))}},504:function(e,t,r){},523:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(447),c=r.n(o);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("circle",{cx:"12",cy:"12",r:"1"}),a.a.createElement("circle",{cx:"12",cy:"5",r:"1"}),a.a.createElement("circle",{cx:"12",cy:"19",r:"1"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="MoreVertical",t.a=l},524:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(447),c=r.n(o);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polyline",{points:"21 8 21 21 3 21 3 8"}),a.a.createElement("rect",{x:"1",y:"3",width:"22",height:"5"}),a.a.createElement("line",{x1:"10",y1:"12",x2:"14",y2:"12"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Archive",t.a=l},525:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(447),c=r.n(o);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.a.createElement("polyline",{points:"14 2 14 8 20 8"}),a.a.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),a.a.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),a.a.createElement("polyline",{points:"10 9 9 9 8 9"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="FileText",t.a=l}}]);
//# sourceMappingURL=24.d723bdaa.chunk.js.map