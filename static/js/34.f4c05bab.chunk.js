(this["webpackJsonpwow-admin"]=this["webpackJsonpwow-admin"]||[]).push([[34],{1131:function(e,t,a){"use strict";a.r(t);var c=a(16),s=a(0),n=a(77),i=a.n(n),l=a(1),r=a(448),j=a(699),d=a(490),b=a(20),o=a(119),O=a(449),h=a(115),u=a.n(h),x=a(656),m=a(464),p=a(647),f=a(501),g=a(1109),v=a(465),N=a(1102),y=a(5),w=function(e){var t,a=e.data,n=e.type,i=e.accordion,r=e.active,d=e.toggle,h=e.titleKey,w=e.contentKey,q=e.className,S=Object(s.useState)(i?r:Object(o.a)(r)),k=Object(c.a)(S,2),C=k[0],T=k[1],A=function(e){if(i)T(e===C?null:e);else{var t=C,a=t.indexOf(e);t.includes(e)?(t.splice(a,1),T(Object(o.a)(t))):(t.push(e),T(Object(o.a)(t)))}},z=Object(s.useState)(a),F=Object(c.a)(z,2),I=F[0],M=F[1];return Object(y.jsx)("div",{className:u()("collapse-icon",(t={},Object(b.a)(t,q,q),Object(b.a)(t,"collapse-default",!n),Object(b.a)(t,"collapse-shadow","shadow"===n),Object(b.a)(t,"collapse-border","border"===n),Object(b.a)(t,"collapse-margin","margin"===n),t)),children:Object(y.jsx)(j.ReactSortable,{className:"list-group",list:I,setList:M,children:I.map((function(e,t){var a,c=h?e[h]:e.title,s=w?e[w]:e.content;return Object(y.jsxs)(m.a,{className:u()("app-collapse",(a={},Object(b.a)(a,e.className,e.className),Object(b.a)(a,"open",i?C===t:C.includes(t)&&"shadow"===n),a)),children:[Object(y.jsxs)(p.a,Object(l.a)(Object(l.a)({className:u()("align-items-center",{collapsed:i?C!==t:!C.includes(t)})},"hover"===d?{onMouseEnter:function(){return A(t)}}:{onClick:function(){return A(t)}}),{},{children:[Object(y.jsx)(f.a,{className:"collapse-title",children:c}),Object(y.jsx)(x.a,{size:14})]})),Object(y.jsx)(g.a,{isOpen:i?C===t:C.includes(t),children:Object(y.jsxs)(v.a,{children:[s,Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{children:[Object(y.jsx)(N.a,{tag:O.b,to:"/faq/1",color:"light-primary",children:"Edit"})," \xa0",Object(y.jsx)(N.a,{color:"light-danger",children:"Delete"})]})]})})]},t)}))})})},q=w;w.defaultProps={active:[],toggle:"click"};var S=a.p+"static/media/faq-illustrations.3abcf165.svg",k=a(1107),C=a(1108),T=a(893),A=a(469),z=a(470),F=a(891),I=a(443),M=a(892),D=a(1097),E=a(884),K=a(885),P=a(1101),Q=a(475),L=a(468),R=a(990),U=(a(586),function(e){var t=e.data,a=[],n=Object(s.useState)(a),i=Object(c.a)(n,2),b=i[0],o=i[1],O=Object(s.useState)("General"),h=Object(c.a)(O,2),u=h[0],x=h[1],m=Object(s.useState)(!1),p=Object(c.a)(m,2),f=p[0],g=p[1],v=Object(s.useState)(""),N=Object(c.a)(v,2),w=N[0],U=N[1];Object.entries(t).forEach((function(e){var t=Object(c.a)(e,2),s=(t[0],t[1]);a.push(s)}));return Object(y.jsxs)("div",{id:"faq-tabs",children:[Object(y.jsxs)(A.a,{children:[Object(y.jsx)(z.a,{lg:"3",md:"4",sm:"12",children:Object(y.jsxs)("div",{className:"faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0",children:[Object(y.jsxs)(F.a,{tag:"ul",className:"nav-left",pills:!0,vertical:!0,children:[Object(y.jsx)(j.ReactSortable,{className:"list-group",list:b,setList:o,children:b.map((function(e){var t=r[e.icon];return Object(y.jsx)(k.a,{tag:"li",children:Object(y.jsxs)(C.a,{className:"d-flex justify-content-between",active:u===e.title,onClick:function(){return t=e.title,x(t);var t},children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(t,{size:18,className:"mr-1"}),Object(y.jsx)("span",{className:"font-weight-bold",children:e.title})]}),Object(y.jsx)("div",{children:Object(y.jsx)(d.b,{size:20,onClick:function(){U(""),g(!f)}})})]})},e.title)}))}),Object(y.jsx)("br",{}),Object(y.jsx)(I.a.Ripple,{color:"primary",outline:!0,onClick:function(){U("Add New"),g(!f)},children:"Add New"})]}),Object(y.jsx)("img",{className:"img-fluid d-none d-md-block",src:S,alt:"illustration",style:{transform:"scaleX(1)"}})]})}),Object(y.jsx)(z.a,{lg:"9",md:"8",sm:"12",children:Object(y.jsx)(M.a,{activeTab:u,children:a.map((function(e){var t=r[e.icon];return Object(y.jsxs)(T.a,{tabId:e.title,children:[Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)("div",{className:"avatar avatar-tag bg-light-primary mr-1",children:Object(y.jsx)(t,{size:20})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h4",{className:"mb-0",children:e.title}),Object(y.jsx)("span",{children:e.subtitle})]})]}),Object(y.jsx)(q,Object(l.a)({className:"mt-2",type:"margin",data:e.qandA,titleKey:"question",contentKey:"ans",accordion:!0},"Payment"===e.title?{active:1}:{}))]},e.title)}))})})]}),Object(y.jsxs)(D.a,{isOpen:f,toggle:function(){return g(!f)},className:"modal-dialog-centered",children:[Object(y.jsxs)(E.a,{toggle:function(){return g(!f)},children:[" ",w||"Update"," FAQ Category"]}),Object(y.jsxs)(K.a,{children:[Object(y.jsxs)(P.a,{children:[Object(y.jsx)(Q.a,{children:"Title"}),Object(y.jsx)(L.a,{placeholder:!w&&u})]}),Object(y.jsxs)(P.a,{className:"mb-2",children:[Object(y.jsx)(Q.a,{for:"blog-edit-status",children:"Status"}),Object(y.jsxs)(L.a,{type:"select",id:"blog-edit-status",children:[Object(y.jsx)("option",{value:"Published",children:"Active"}),Object(y.jsx)("option",{value:"Inactive",children:"Inactive"})]})]})]}),Object(y.jsxs)(R.a,{children:[Object(y.jsx)(I.a,{color:"primary",onClick:function(){return g(!f)},children:"Save"})," "]})]})]})}),W=a(571),J=a(492),B=a(476),G=a(499),X=a(500),Y=a(463),H=function(e){var t=e.searchTerm,c=e.setSearchTerm,s=e.getFAQData;return Object(y.jsx)("div",{id:"faq-search-filter",children:Object(y.jsx)(m.a,{className:"faq-search",style:{backgroundImage:"url(".concat(a(570).default,")")},children:Object(y.jsxs)(v.a,{className:"text-center",children:[Object(y.jsx)("h2",{className:"text-primary",children:"Let's answer some questions"}),Object(y.jsx)(J.a,{className:"mb-2",children:"or choose a category to quickly find the help you need"}),Object(y.jsx)(B.a,{className:"faq-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(y.jsxs)(G.a,{className:"input-group-merge",children:[Object(y.jsx)(X.a,{addonType:"prepend",children:Object(y.jsx)(Y.a,{children:Object(y.jsx)(W.a,{size:14})})}),Object(y.jsx)(L.a,{value:t,onChange:function(e){return function(e){c(e.target.value),s(e.target.value)}(e)},placeholder:"search faq..."})]})})]})})})},V=a(700),Z=a(622),$=function(){return Object(y.jsx)("div",{id:"faq-contact",children:Object(y.jsxs)(A.a,{className:"mt-5 pt-75",children:[Object(y.jsxs)(z.a,{className:"text-center",sm:"12",children:[Object(y.jsx)("h2",{children:"You still have a question?"}),Object(y.jsx)("p",{className:"mb-3",children:"If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"})]}),Object(y.jsx)(z.a,{sm:"6",children:Object(y.jsx)(m.a,{className:"text-center bg-light-secondary shadow-none py-1",children:Object(y.jsxs)(v.a,{children:[Object(y.jsx)("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:Object(y.jsx)(V.a,{size:18})}),Object(y.jsx)("h4",{children:"+ (810) 2548 2568"}),Object(y.jsx)("span",{className:"text-body",children:"We are always happy to help!"})]})})}),Object(y.jsx)(z.a,{sm:"6",children:Object(y.jsx)(m.a,{className:"text-center bg-light-secondary shadow-none py-1",children:Object(y.jsxs)(v.a,{children:[Object(y.jsx)("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:Object(y.jsx)(Z.a,{size:18})}),Object(y.jsx)("h4",{children:"wowtalent@help.com"}),Object(y.jsx)("span",{className:"text-body",children:"Best way to get answer faster!"})]})})})]})})};a(483),a(991),t.default=function(){var e=Object(s.useState)(null),t=Object(c.a)(e,2),a=t[0],n=t[1],l=Object(s.useState)(""),r=Object(c.a)(l,2),j=r[0],d=r[1],b=function(e){return i.a.get("/faq/data",{params:{q:e}}).then((function(e){n(e.data)}))};return Object(s.useEffect)((function(){b(j)}),[]),Object(y.jsxs)(s.Fragment,{children:[Object(y.jsx)(H,{searchTerm:j,setSearchTerm:d,getFAQData:b}),null!==a?Object(y.jsx)(U,{data:a,searchTerm:j,setSearchTerm:d}):null,Object(y.jsx)($,{})]})}},483:function(e,t,a){"use strict";a(449),a(533),a(623),a(624),a(622),a(527),a(657),a(658),a(724),a(1137),a(1104),a(1106),a(5)},570:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/banner.06ea9907.png"},586:function(e,t,a){"use strict";a(0);var c=a(1097),s=a(884),n=a(885),i=a(1101),l=a(475),r=a(468),j=a(990),d=a(443),b=a(5);t.a=function(e){var t=e.title,a=e.formModal,o=e.setFormModal;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(c.a,{isOpen:a,toggle:function(){return o(!a)},className:"modal-dialog-centered",children:[Object(b.jsxs)(s.a,{toggle:function(){return o(!a)},children:[" ",t?"Update":"Create"," Push Notification"]}),Object(b.jsxs)(n.a,{children:[Object(b.jsxs)(i.a,{children:[Object(b.jsx)(l.a,{children:"Title"}),Object(b.jsx)(r.a,{placeholder:t})]}),Object(b.jsxs)(i.a,{className:"mb-2",children:[Object(b.jsx)(l.a,{for:"message",children:"Message"}),Object(b.jsx)(r.a,{type:"textarea",name:"text",id:"message",rows:"3",placeholder:"Write a Notification Message"})]})]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{color:"primary",onClick:function(){return o(!a)},children:t?"Update":"Create"})," "]})]})})})}},991:function(e,t,a){}}]);
//# sourceMappingURL=34.f4c05bab.chunk.js.map