(this["webpackJsonpwow-admin"]=this["webpackJsonpwow-admin"]||[]).push([[35],{1078:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n(20),s=n(14),i=n(54),o=n(114),a=n(0),c=n.n(a),l=n(4),d=n.n(l),p=n(113),h=n.n(p),u=n(15),f=n(29),b=n.n(f),g=n(1086),m=n(76),O=n(460);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={children:d.a.oneOfType([d.a.node,d.a.func]).isRequired,popperClassName:d.a.string,placement:d.a.string,placementPrefix:d.a.string,arrowClassName:d.a.string,hideArrow:d.a.bool,tag:m.q,isOpen:d.a.bool.isRequired,cssModule:d.a.object,offset:d.a.oneOfType([d.a.string,d.a.number]),fallbackPlacement:d.a.oneOfType([d.a.string,d.a.array]),flip:d.a.bool,container:m.r,target:m.r.isRequired,modifiers:d.a.object,boundariesElement:d.a.oneOfType([d.a.string,m.a]),onClosed:d.a.func,fade:d.a.bool,transition:d.a.shape(O.a.propTypes)},T={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{},onClosed:function(){},fade:!0,transition:v({},O.a.defaultProps)},w=function(e){function t(t){var n;return(n=e.call(this,t)||this).setTargetNode=n.setTargetNode.bind(Object(i.a)(n)),n.getTargetNode=n.getTargetNode.bind(Object(i.a)(n)),n.getRef=n.getRef.bind(Object(i.a)(n)),n.onClosed=n.onClosed.bind(Object(i.a)(n)),n.state={isOpen:t.isOpen},n}Object(o.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null};var n=t.prototype;return n.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},n.setTargetNode=function(e){this.targetNode="string"===typeof e?Object(m.j)(e):e},n.getTargetNode=function(){return this.targetNode},n.getContainerNode=function(){return Object(m.j)(this.props.container)},n.getRef=function(e){this._element=e},n.onClosed=function(){this.props.onClosed(),this.setState({isOpen:!1})},n.renderChildren=function(){var e=this.props,t=e.cssModule,n=e.children,r=e.isOpen,i=e.flip,o=(e.target,e.offset),a=e.fallbackPlacement,l=e.placementPrefix,d=e.arrowClassName,p=e.hideArrow,f=e.popperClassName,b=e.tag,j=(e.container,e.modifiers),y=e.boundariesElement,T=(e.onClosed,e.fade),w=e.transition,E=e.placement,C=Object(u.a)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","popperClassName","tag","container","modifiers","boundariesElement","onClosed","fade","transition","placement"]),N=Object(m.m)(h()("arrow",d),t),P=Object(m.m)(h()(f,l?l+"-auto":""),this.props.cssModule),D=v({offset:{offset:o},flip:{enabled:i,behavior:a},preventOverflow:{boundariesElement:y}},j),x=v(v(v({},O.a.defaultProps),w),{},{baseClass:T?w.baseClass:"",timeout:T?w.timeout:0});return c.a.createElement(O.a,Object(s.a)({},x,C,{in:r,onExited:this.onClosed,tag:b}),c.a.createElement(g.a,{referenceElement:this.targetNode,modifiers:D,placement:E},(function(e){var t=e.ref,r=e.style,s=e.placement,i=e.outOfBoundaries,o=e.arrowProps,a=e.scheduleUpdate;return c.a.createElement("div",{ref:t,style:r,className:P,"x-placement":s,"x-out-of-boundaries":i?"true":void 0},"function"===typeof n?n({scheduleUpdate:a}):n,!p&&c.a.createElement("span",{ref:o.ref,className:N,style:o.style}))})))},n.render=function(){return this.setTargetNode(this.props.target),this.state.isOpen?"inline"===this.props.container?this.renderChildren():b.a.createPortal(c.a.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(c.a.Component);w.propTypes=y,w.defaultProps=T;var E=w,C={children:d.a.oneOfType([d.a.node,d.a.func]),placement:d.a.oneOf(m.b),target:m.r.isRequired,container:m.r,isOpen:d.a.bool,disabled:d.a.bool,hideArrow:d.a.bool,boundariesElement:d.a.oneOfType([d.a.string,m.a]),className:d.a.string,innerClassName:d.a.string,arrowClassName:d.a.string,popperClassName:d.a.string,cssModule:d.a.object,toggle:d.a.func,autohide:d.a.bool,placementPrefix:d.a.string,delay:d.a.oneOfType([d.a.shape({show:d.a.number,hide:d.a.number}),d.a.number]),modifiers:d.a.object,offset:d.a.oneOfType([d.a.string,d.a.number]),innerRef:d.a.oneOfType([d.a.func,d.a.string,d.a.object]),trigger:d.a.string,fade:d.a.bool,flip:d.a.bool},N={show:0,hide:50},P={isOpen:!1,hideArrow:!1,autohide:!1,delay:N,toggle:function(){},trigger:"click",fade:!0};function D(e,t){return t&&(e===t||t.contains(e))}function x(e,t){return void 0===t&&(t=[]),t&&t.length&&t.filter((function(t){return D(e,t)}))[0]}var _=function(e){function t(t){var n;return(n=e.call(this,t)||this)._targets=[],n.currentTargetElement=null,n.addTargetEvents=n.addTargetEvents.bind(Object(i.a)(n)),n.handleDocumentClick=n.handleDocumentClick.bind(Object(i.a)(n)),n.removeTargetEvents=n.removeTargetEvents.bind(Object(i.a)(n)),n.toggle=n.toggle.bind(Object(i.a)(n)),n.showWithDelay=n.showWithDelay.bind(Object(i.a)(n)),n.hideWithDelay=n.hideWithDelay.bind(Object(i.a)(n)),n.onMouseOverTooltipContent=n.onMouseOverTooltipContent.bind(Object(i.a)(n)),n.onMouseLeaveTooltipContent=n.onMouseLeaveTooltipContent.bind(Object(i.a)(n)),n.show=n.show.bind(Object(i.a)(n)),n.hide=n.hide.bind(Object(i.a)(n)),n.onEscKeyDown=n.onEscKeyDown.bind(Object(i.a)(n)),n.getRef=n.getRef.bind(Object(i.a)(n)),n.state={isOpen:t.isOpen},n._isMounted=!1,n}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.updateTarget()},n.componentWillUnmount=function(){this._isMounted=!1,this.removeTargetEvents(),this._targets=null,this.clearShowTimeout(),this.clearHideTimeout()},t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null},n.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._hideTimeout&&this.clearHideTimeout(),this.state.isOpen&&!this.props.isOpen&&this.toggle())},n.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},n.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},n.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},n.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?N[e]:t[e]:t},n.show=function(e){if(!this.props.isOpen){if(this.clearShowTimeout(),this.currentTargetElement=e?e.currentTarget||e.target:null,e&&e.composedPath&&"function"===typeof e.composedPath){var t=e.composedPath();this.currentTargetElement=t&&t[0]||this.currentTargetElement}this.toggle(e)}},n.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},n.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.currentTargetElement=null,this.toggle(e))},n.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},n.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},n.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},n.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||x(e.target,this._targets))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!D(e.target,this._popover)?this.hideWithDelay(e):this.props.isOpen||this.showWithDelay(e)):t.indexOf("click")>-1&&x(e.target,this._targets)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},n.addEventOnTargets=function(e,t,n){this._targets.forEach((function(r){r.addEventListener(e,t,n)}))},n.removeEventOnTargets=function(e,t,n){this._targets.forEach((function(r){r.removeEventListener(e,t,n)}))},n.addTargetEvents=function(){if(this.props.trigger){var e=this.props.trigger.split(" ");-1===e.indexOf("manual")&&((e.indexOf("click")>-1||e.indexOf("legacy")>-1)&&document.addEventListener("click",this.handleDocumentClick,!0),this._targets&&this._targets.length&&(e.indexOf("hover")>-1&&(this.addEventOnTargets("mouseover",this.showWithDelay,!0),this.addEventOnTargets("mouseout",this.hideWithDelay,!0)),e.indexOf("focus")>-1&&(this.addEventOnTargets("focusin",this.show,!0),this.addEventOnTargets("focusout",this.hide,!0)),this.addEventOnTargets("keydown",this.onEscKeyDown,!0)))}},n.removeTargetEvents=function(){this._targets&&(this.removeEventOnTargets("mouseover",this.showWithDelay,!0),this.removeEventOnTargets("mouseout",this.hideWithDelay,!0),this.removeEventOnTargets("keydown",this.onEscKeyDown,!0),this.removeEventOnTargets("focusin",this.show,!0),this.removeEventOnTargets("focusout",this.hide,!0)),document.removeEventListener("click",this.handleDocumentClick,!0)},n.updateTarget=function(){var e=Object(m.j)(this.props.target,!0);e!==this._targets&&(this.removeTargetEvents(),this._targets=e?Array.from(e):[],this.currentTargetElement=this.currentTargetElement||this._targets[0],this.addTargetEvents())},n.toggle=function(e){return this.props.disabled||!this._isMounted?e&&e.preventDefault():this.props.toggle(e)},n.render=function(){var e=this;if(!this.props.isOpen)return null;this.updateTarget();var t=this.props,n=t.className,r=t.cssModule,i=t.innerClassName,o=t.isOpen,a=t.hideArrow,l=t.boundariesElement,d=t.placement,p=t.placementPrefix,h=t.arrowClassName,u=t.popperClassName,f=t.container,b=t.modifiers,g=t.offset,O=t.fade,j=t.flip,v=t.children,y=Object(m.n)(this.props,Object.keys(C)),T=Object(m.m)(u,r),w=Object(m.m)(i,r);return c.a.createElement(E,{className:n,target:this.currentTargetElement||this._targets[0],isOpen:o,hideArrow:a,boundariesElement:l,placement:d,placementPrefix:p,arrowClassName:h,popperClassName:T,container:f,modifiers:b,offset:g,cssModule:r,fade:O,flip:j},(function(t){var n=t.scheduleUpdate;return c.a.createElement("div",Object(s.a)({},y,{ref:e.getRef,className:w,role:"tooltip",onMouseOver:e.onMouseOverTooltipContent,onMouseLeave:e.onMouseLeaveTooltipContent,onKeyDown:e.onEscKeyDown}),"function"===typeof v?v({scheduleUpdate:n}):v)}))},t}(c.a.Component);_.propTypes=C,_.defaultProps=P;var M=_,k=function(e){var t=h()("tooltip","show",e.popperClassName),n=h()("tooltip-inner",e.innerClassName);return c.a.createElement(M,Object(s.a)({},e,{popperClassName:t,innerClassName:n}))};k.propTypes=C,k.defaultProps={placement:"top",autohide:!0,placementPrefix:"bs-tooltip",trigger:"hover focus"};var R=k;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var W=["defaultOpen"],A=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},n.toggle=n.toggle.bind(Object(i.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return c.a.createElement(R,Object(s.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(m.n)(this.props,W)))},t}(a.Component);A.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({defaultOpen:d.a.bool},R.propTypes)},1112:function(e,t,n){"use strict";n.r(t);n(1),n(20),n(0),n(115),n(1078),n(455);var r=n(5),s=(n.p,n.p,n.p,n.p,n(42)),i=n(82),o=n(55),a=n(219),c=n(526),l=n(1083);s.default,i.default,o.default,s.default,i.default,o.default,s.default,i.default,o.default,s.default,i.default,o.default,t.default=function(){return Object(r.jsxs)(c.a,{responsive:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Sr No."}),Object(r.jsx)("th",{children:"Message"}),Object(r.jsx)("th",{children:"Reported By"}),Object(r.jsx)("th",{children:"Clip"}),Object(r.jsx)("th",{children:"Posted By"}),Object(r.jsx)("th",{children:"Date Time"}),Object(r.jsx)("th",{children:"Action"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("span",{className:"align-middle font-weight-bold",children:"1"})}),Object(r.jsx)("td",{children:"Hate Speach"}),Object(r.jsx)("td",{children:"A PHP Error is Encounted"}),Object(r.jsx)("td",{children:Object(r.jsx)("img",{className:"img-fluid mb-2",src:a.default,alt:"Card cap",style:{maxHeight:"200px",maxWidth:"200px"}})}),Object(r.jsx)("td",{children:"Peter Charles"}),Object(r.jsx)("td",{children:"12/02/2022"}),Object(r.jsx)("td",{children:Object(r.jsx)(l.a,{pill:!0,color:"light-danger",className:"mr-1 cursor-pointer",onClick:function(e){return e.preventDefault()},children:"Delete"})})]})})]})}},460:function(e,t,n){"use strict";var r=n(14),s=n(15),i=n(20),o=n(0),a=n.n(o),c=n(4),l=n.n(c),d=n(113),p=n.n(d),h=n(475),u=n(76);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=b(b({},h.Transition.propTypes),{},{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:u.q,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),m=b(b({},h.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:u.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function O(e){var t=e.tag,n=e.baseClass,i=e.baseClassActive,o=e.className,c=e.cssModule,l=e.children,d=e.innerRef,f=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(u.o)(f,u.c),g=Object(u.n)(f,u.c);return a.a.createElement(h.Transition,b,(function(e){var s="entered"===e,h=Object(u.m)(p()(o,n,s&&i),c);return a.a.createElement(t,Object(r.a)({className:h},g,{ref:d}),l)}))}O.propTypes=g,O.defaultProps=m,t.a=O},526:function(e,t,n){"use strict";var r=n(14),s=n(15),i=n(0),o=n.n(i),a=n(4),c=n.n(a),l=n(113),d=n.n(l),p=n(76),h={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:p.q,responsiveTag:p.q,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},u=function(e){var t=e.className,n=e.cssModule,i=e.size,a=e.bordered,c=e.borderless,l=e.striped,h=e.dark,u=e.hover,f=e.responsive,b=e.tag,g=e.responsiveTag,m=e.innerRef,O=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(p.m)(d()(t,"table",!!i&&"table-"+i,!!a&&"table-bordered",!!c&&"table-borderless",!!l&&"table-striped",!!h&&"table-dark",!!u&&"table-hover"),n),v=o.a.createElement(b,Object(r.a)({},O,{ref:m,className:j}));if(f){var y=Object(p.m)(!0===f?"table-responsive":"table-responsive-"+f,n);return o.a.createElement(g,{className:y},v)}return v};u.propTypes=h,u.defaultProps={tag:"table",responsiveTag:"div"},t.a=u}}]);
//# sourceMappingURL=35.68576a6b.chunk.js.map