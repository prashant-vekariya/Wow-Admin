(this["webpackJsonpwow-admin"]=this["webpackJsonpwow-admin"]||[]).push([[35],{458:function(e,t,n){},499:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var s=n(473),c=n(474),a=n.n(c),r=n(77),i=n.n(r),l=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/users/list/all-data").then((function(e){t({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/users/list/data",e).then((function(t){n({type:"GET_DATA",data:t.data.users,totalPages:t.data.total,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/users/user",{id:e}).then((function(e){n({type:"GET_USER",selectedUser:e.data.user})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},o=function(e){return function(t,n){i.a.post("/apps/users/add-user",e).then((function(n){t({type:"ADD_USER",user:e})})).then((function(){t(d(n().users.params)),t(l())})).catch((function(e){return console.log(e)}))}},u=function(e){return function(t,n){i.a.delete("/apps/users/delete",{id:e}).then((function(e){t({type:"DELETE_USER"})})).then((function(){t(d(n().users.params)),t(l())}))}}},982:function(e,t,n){"use strict";n.r(t);var s=n(16),c=n(0),a=n(452),r=n(447),i=n(451),l=n(526),d=n(483),j=n(497),o=n(466),u=n(467),h=n(549),b=n(441),m=n(475),x=n(468),O=n(943),p=n(465),f=n(553),g=n(976),v=n(5),y=function(e){var t=e.selectedUser,n=Object(c.useState)(null),a=Object(s.a)(n,2),y=a[0],N=a[1],w=Object(c.useState)(null),k=Object(s.a)(w,2),U=k[0],E=k[1];Object(c.useEffect)((function(){if(null!==t||null!==t&&null!==U&&t.id!==U.id)return E(t),t.avatar.length?N(t.avatar):N(null)}),[t]);return null===U||void 0===U?null:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{sm:"12",children:Object(v.jsxs)(h.a,{className:"mb-2",children:[function(){if(null===y){var e=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(v.jsx)(i.a,{initials:!0,color:e,className:"rounded mr-2 my-25",content:t.fullName,contentStyles:{borderRadius:0,fontSize:"calc(36px)",width:"100%",height:"100%"},style:{height:"90px",width:"90px"}})}return Object(v.jsx)("img",{className:"user-avatar rounded mr-2 my-25 cursor-pointer",src:y,alt:"user profile avatar",height:"90",width:"90"})}(),Object(v.jsxs)(h.a,{className:"mt-50",body:!0,children:[Object(v.jsxs)("h4",{children:[t.fullName," "]}),Object(v.jsxs)("div",{className:"d-flex flex-wrap mt-1 px-0",children:[Object(v.jsxs)(b.a.Ripple,{id:"change-img",tag:m.a,className:"mr-75 mb-0",color:"primary",children:[Object(v.jsx)("span",{className:"d-none d-sm-block",children:"Change"}),Object(v.jsx)("span",{className:"d-block d-sm-none",children:Object(v.jsx)(l.a,{size:14})}),Object(v.jsx)("input",{type:"file",hidden:!0,id:"change-img",onChange:function(e){var t=new FileReader,n=e.target.files;t.onload=function(){N(t.result)},t.readAsDataURL(n[0])},accept:"image/*"})]}),Object(v.jsxs)(b.a.Ripple,{color:"secondary",outline:!0,children:[Object(v.jsx)("span",{className:"d-none d-sm-block",children:"Remove"}),Object(v.jsx)("span",{className:"d-block d-sm-none",children:Object(v.jsx)(d.a,{size:14})})]})]})]})]})}),Object(v.jsx)(u.a,{sm:"12",children:Object(v.jsx)(x.a,{onSubmit:function(e){return e.preventDefault()},children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{md:"4",sm:"12",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(m.a,{for:"username",children:"Username"}),Object(v.jsx)(p.a,{type:"text",id:"username",placeholder:"Username",defaultValue:U.username})]})}),Object(v.jsx)(u.a,{md:"4",sm:"12",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(m.a,{for:"name",children:"Name"}),Object(v.jsx)(p.a,{type:"text",id:"name",placeholder:"Name",defaultValue:U.fullName})]})}),Object(v.jsx)(u.a,{md:"4",sm:"12",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(m.a,{for:"email",children:"Email"}),Object(v.jsx)(p.a,{type:"text",id:"email",placeholder:"Email",defaultValue:U.email})]})}),Object(v.jsx)(u.a,{md:"4",sm:"12",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(m.a,{for:"status",children:"Status"}),Object(v.jsxs)(p.a,{type:"select",name:"status",id:"status",defaultValue:U.status,children:[Object(v.jsx)("option",{value:"pending",children:"Pending"}),Object(v.jsx)("option",{value:"active",children:"Active"}),Object(v.jsx)("option",{value:"inactive",children:"Inactive"})]})]})}),Object(v.jsx)(u.a,{md:"4",sm:"12",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(m.a,{for:"role",children:"Role"}),Object(v.jsxs)(p.a,{type:"select",name:"role",id:"role",defaultValue:U.role,children:[Object(v.jsx)("option",{value:"admin",children:"Admin"}),Object(v.jsx)("option",{value:"author",children:"Author"}),Object(v.jsx)("option",{value:"editor",children:"Editor"}),Object(v.jsx)("option",{value:"maintainer",children:"Maintainer"}),Object(v.jsx)("option",{value:"subscriber",children:"Subscriber"})]})]})}),Object(v.jsx)(u.a,{md:"4",sm:"12",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(m.a,{for:"company",children:"Password"}),Object(v.jsx)(p.a,{type:"text",id:"company",defaultValue:U.company,placeholder:"WinDon Technologies Pvt Ltd"})]})}),Object(v.jsx)(u.a,{sm:"12",children:Object(v.jsxs)("div",{className:"permissions border mt-1",children:[Object(v.jsxs)("h6",{className:"py-1 mx-1 mb-0 font-medium-2",children:[Object(v.jsx)(j.a,{size:18,className:"mr-25"}),Object(v.jsx)("span",{className:"align-middle",children:"Permissions"})]}),Object(v.jsxs)(f.a,{borderless:!0,striped:!0,responsive:!0,children:[Object(v.jsx)("thead",{className:"thead-light",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Manage User"}),Object(v.jsx)("th",{children:"Manage Clips"}),Object(v.jsx)("th",{children:"Change Password"}),Object(v.jsx)("th",{children:"Manage Reported Contents"}),Object(v.jsx)("th",{children:"Manage Tages"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)(g.a,{type:"checkbox",id:"admin-1",label:""})}),Object(v.jsx)("td",{children:Object(v.jsx)(g.a,{type:"checkbox",id:"admin-1",label:"",defaultChecked:!0})}),Object(v.jsx)("td",{children:Object(v.jsx)(g.a,{type:"checkbox",id:"admin-2",label:""})}),Object(v.jsx)("td",{children:Object(v.jsx)(g.a,{type:"checkbox",id:"admin-3",label:"",defaultChecked:!0})}),Object(v.jsx)("td",{children:Object(v.jsx)(g.a,{type:"checkbox",id:"admin-4",label:""})})]})})]})]})}),Object(v.jsxs)(u.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(v.jsx)(b.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(v.jsx)(b.a.Ripple,{tag:r.b,to:"/internaluser/list",color:"secondary",outline:!0,children:"Cancel"})]})]})})})]})},N=n(499),w=n(116),k=n(463),U=n(469),E=n(548);n(458),t.default=function(){var e=Object(c.useState)("1"),t=Object(s.a)(e,2),n=(t[0],t[1],Object(w.c)((function(e){return e.users}))),i=Object(w.b)(),l=Object(a.i)().id;return Object(c.useEffect)((function(){return i(Object(N.e)(parseInt(l))),function(){return i(Object(N.e)(parseInt(0)))}}),[i,l]),null!==n.selectedUser&&void 0!==n.selectedUser?Object(v.jsx)(o.a,{className:"app-user-edit",children:Object(v.jsx)(u.a,{sm:"12",children:Object(v.jsx)(k.a,{children:Object(v.jsx)(U.a,{className:"pt-2",children:Object(v.jsx)(y,{selectedUser:n.selectedUser})})})})}):Object(v.jsxs)(E.a,{color:"danger",children:[Object(v.jsx)("h4",{className:"alert-heading",children:"User not found"}),Object(v.jsxs)("div",{className:"alert-body",children:["User with id: ",l," doesn't exist. Check list of all Users: ",Object(v.jsx)(r.b,{to:"/apps/user/list",children:"Users List"})]})]})}}}]);
//# sourceMappingURL=35.7cb72018.chunk.js.map