(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2484],{60857:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AmpStateContext=void 0;var r=(0,t(4858).Z)(t(82684)).default.createContext({});n.AmpStateContext=r},44559:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return t||o&&a}},71028:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.defaultHead=d,n.default=void 0;var r=t(54363).Z,o=t(4858).Z,i=(0,t(27031).Z)(t(82684)),a=o(t(63845)),c=t(60857),l=t(89489),u=t(44559);t(28458);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[i.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function s(e,n){return"string"==typeof n||"number"==typeof n?e:n.type===i.default.Fragment?e.concat(i.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"==typeof n||"number"==typeof n?e:e.concat(n)}),[])):e.concat(n)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,n){var t,o,a,c,l=n.inAmpMode;return e.reduce(s,[]).reverse().concat(d(l).reverse()).filter((t=new Set,o=new Set,a=new Set,c={},function(e){var n=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?n=!1:t.add(i)}switch(e.type){case"title":case"base":o.has(e.type)?n=!1:o.add(e.type);break;case"meta":for(var l=0,u=f.length;l<u;l++){var d=f[l];if(e.props.hasOwnProperty(d))if("charSet"===d)a.has(d)?n=!1:a.add(d);else{var s=e.props[d],p=c[d]||new Set;"name"===d&&r||!p.has(s)?(p.add(s),c[d]=p):n=!1}}}return n})).reverse().map((function(e,n){var t=e.key||n;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(n){return e.props.href.startsWith(n)}))){var o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,i.default.cloneElement(e,o)}return i.default.cloneElement(e,{key:t})}))}var h=function(e){var n=e.children,t=i.useContext(c.AmpStateContext),r=i.useContext(l.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:u.isInAmpMode(t)},n)};n.default=h,("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},63845:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=e.headManager,t=e.reduceComponentsToState;function c(){if(n&&n.mountedInstances){var o=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(t(o,e))}}if(o){var l;null==n||null==(l=n.mountedInstances)||l.add(e.children),c()}return i((function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}})),i((function(){return n&&(n._pendingUpdate=c),function(){n&&(n._pendingUpdate=c)}})),a((function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}})),null};var r=(0,t(27031).Z)(t(82684));var o=!1,i=o?function(){}:r.useLayoutEffect,a=o?function(){}:r.useEffect},1887:function(e,n,t){e.exports=t(71028)},59739:function(e,n,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},54750:function(e,n,t){"use strict";var r=t(82394),o=t(12691),i=t.n(o),a=t(55485),c=t(48670),l=t(44085),u=t(38276),d=t(4190),s=t(30160),f=t(72473),p=t(70515),h=t(28598),m=t(82684);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.breadcrumbs,t=e.noMarginLeft,r=n.length,o=[];return n.forEach((function(e,n){var g=e.bold,y=e.danger,v=e.label,x=e.linkProps,w=e.loading,_=e.monospace,j=void 0===_||_,O=e.onClick,k=e.options,P=v();r>=2&&n>=1&&o.push((0,h.jsx)(u.Z,{mx:1,children:(0,h.jsx)(f.ChevronRight,{muted:!0})},"divider-".concat(P)));var I=(0,h.jsx)(s.ZP,{bold:g,danger:y,default:!g,monospace:j,noWrapping:!0,children:P});if((null==k?void 0:k.length)>=1){var Z,C,S=null==k?void 0:k.find((function(e){return!!e.selected}));if(S)(Z=((null==S||null===(C=S.uuid)||void 0===C?void 0:C.length)||0)*p.ro)&&(Z+=3*p.iI,w&&(Z+=2*p.iI));I=(0,h.jsx)(a.ZP,{alignItems:"center",children:(0,h.jsx)(l.Z,{afterIcon:w?(0,h.jsx)(d.Z,{inverted:!0,small:!0}):null,danger:y,defaultTextColor:!g,maxWidth:Z||null,monospace:j,noBackground:!0,noBorder:!0,onChange:function(e){var n,t=e.target.value,r=null==k?void 0:k.find((function(e){return e.uuid===t}));r&&null!=r&&r.onClick&&(null==r||null===(n=r.onClick)||void 0===n||n.call(r,t))},paddingHorizontal:0,paddingVertical:0,value:(null==S?void 0:S.uuid)||"",children:null==k?void 0:k.map((function(e){var n=e.label,t=e.selected,r=e.uuid,o=n?null==n?void 0:n():r;return(0,h.jsx)("option",{value:r,children:t?r:o},r)}))})})}var H=(0,h.jsx)(u.Z,{ml:t||0!==n?0:2,children:I},"breadcrumb-".concat(P));x?H=(0,m.createElement)(i(),b(b({},x),{},{key:"breadcrumb-link-".concat(P),passHref:!0}),(0,h.jsx)(c.Z,{block:!0,default:!g,noOutline:!0,sameColorAsText:g,children:H})):O&&(H=(0,h.jsx)(c.Z,{block:!0,default:!g,noOutline:!0,onClick:O,preventDefault:!0,sameColorAsText:g,children:H})),o.push(H)})),(0,h.jsx)(a.ZP,{alignItems:"center",children:o})}},65956:function(e,n,t){"use strict";var r=t(9518),o=t(55485),i=t(38276),a=t(30160),c=t(44897),l=t(42631),u=t(47041),d=t(70515),s=t(28598),f=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*d.iI,1.5*d.iI,1.5*d.iI),p=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],l.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||c.Z.interactive).defaultBorder,";\n  ")}),(function(e){return!e.noBackground&&e.success&&"\n    background-color: ".concat((e.theme.background||c.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||c.Z.background).success,";\n  ")}),(function(e){return!e.noBackground&&!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||c.Z.background).panel,";\n  ")}),(function(e){return!e.noBackground&&e.dark&&"\n    background-color: ".concat((e.theme.background||c.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],l.n_,l.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||c.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),m=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*d.iI,u.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*d.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),g=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],l.M8,l.YF,1.75*d.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,c=e.contentContainerRef,l=e.dark,u=e.footer,d=e.fullHeight,f=void 0===d||d,b=e.fullWidth,y=void 0===b||b,v=e.header,x=e.headerHeight,w=e.headerIcon,_=e.headerPaddingVertical,j=e.headerTitle,O=e.maxHeight,k=e.maxWidth,P=e.minWidth,I=e.noBackground,Z=e.noPadding,C=e.overflowVisible,S=e.subtitle,H=e.success;return(0,s.jsxs)(p,{borderless:n,dark:l,fullHeight:f,fullWidth:y,maxHeight:O,maxWidth:k,minWidth:P,noBackground:I,overflowVisible:C,ref:r,success:H,children:[(v||j)&&(0,s.jsxs)(h,{headerPaddingVertical:_,height:x,children:[v&&v,j&&(0,s.jsx)(o.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,s.jsxs)(o.ZP,{alignItems:"center",children:[w&&w,(0,s.jsx)(i.Z,{ml:w?1:0,children:(0,s.jsx)(a.ZP,{bold:!0,default:!0,children:j})})]})})]}),(0,s.jsxs)(m,{maxHeight:O,noPadding:Z,overflowVisible:C,ref:c,children:[S&&"string"==typeof S&&(0,s.jsx)(i.Z,{mb:2,children:(0,s.jsx)(a.ZP,{default:!0,children:S})}),S&&"string"!=typeof S&&S,t]}),u&&(0,s.jsx)(g,{children:u})]})}},85854:function(e,n,t){"use strict";var r,o,i,a,c,l,u,d,s=t(82394),f=t(26304),p=t(26653),h=t(9518),m=t(33591),g=t(44897),b=t(95363),y=t(61896),v=t(30160),x=t(70515),w=t(38276),_=t(28598),j=["children","condensed","inline","level","marketing","spacingBelow"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],v.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||g.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(b.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(b.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(b.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(e){return e.strikethrough&&"\n    text-decoration: line-through;\n  "})),I=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||g.Z.content).active,";\n  ")})),Z=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],P,m.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),y.aQ),m.media.lg(o||(o=(0,p.Z)(["\n    ","\n  "])),y.aQ),m.media.xl(i||(i=(0,p.Z)(["\n    ","\n  "])),y.aQ)),C=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],P,y.MJ),S=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],P,m.media.xs(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),m.media.sm(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),m.media.md(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),m.media.lg(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),m.media.xl(d||(d=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI)),H=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],P,y.BL),N=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],P),E=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],P),z=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],P),M=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],P,(function(e){return 1===e.level&&"\n    ".concat(y.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(y.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),T=function(e){var n,t=e.children,r=e.condensed,o=e.inline,i=e.level,a=e.marketing,c=e.spacingBelow,l=(0,f.Z)(e,j);o?n=M:0===Number(i)?n=Z:1===Number(i)?n=a?S:C:2===Number(i)?n=H:3===Number(i)?n=N:4===Number(i)?n=E:5===Number(i)&&(n=z);var u=(0,_.jsxs)(n,k(k({},l),{},{level:i,children:[c&&(0,_.jsx)(w.Z,{mb:r?2:3,children:t}),!c&&t]}));return o?u:(0,_.jsx)(I,{children:u})};T.defaultProps={level:3,weightStyle:6},n.Z=T},6943:function(e,n,t){"use strict";t.r(n);var r=t(77837),o=t(38860),i=t.n(o),a=t(36065),c=t(93808),l=t(28598);function u(){return(0,l.jsx)(a.Z,{uuid:"dashboard"})}u.getInitialProps=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,c.Z)(u)},91162:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/block-layout",function(){return t(6943)}])},91835:function(e,n,t){"use strict";function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:function(){return r}})},61049:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[2678,3662,365,184,9518,5946,2655,3745,341,6639,2125,125,1799,2714,140,2996,5332,9868,9895,564,2512,770,2866,6065,9774,2888,179],(function(){return n=91162,e(e.s=n);var n}));var n=e.O();_N_E=n}]);