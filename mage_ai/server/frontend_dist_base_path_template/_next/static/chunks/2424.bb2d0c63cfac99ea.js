"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2424],{62424:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r=e(77837),u=e(82394),o=e(38860),c=e.n(o),i=e(82684),a=e(18735),l=e(75582);function f(n,t){Object.entries(t).forEach((function(t){var e=(0,l.Z)(t,2),r=e[0],u=e[1];r in n&&n[r]((function(t){return u(n,t)}))}))}function s(n,t){Object.entries(t).forEach((function(t){var e=(0,l.Z)(t,2),r=e[0],u=e[1];r in n&&n[r]((function(t){return u(n,t)}))}))}var A=e(83455),O=e(5332),T=e(89706);function R(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?R(Object(e),!0).forEach((function(t){(0,u.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var D=function(n,t,u){var o=(0,i.useRef)(!1),a=(0,i.useRef)(null),f=(0,i.useState)(null),s=f[0],R=f[1],D=(0,i.useState)({languageServer:!1,workspace:!1,wrapper:!1}),E=D[0],d=D[1],S=(0,A.Db)((function(n){return O.ZP.browser_items.listAsync(p({exclude_pattern:T.I1,include_pattern:encodeURIComponent(String(T.d2))},n))})),L=(0,l.Z)(S,1)[0],C=(0,i.useCallback)((function(n,t){return L(t).then((function(t){var e=t.data.browser_items;return n(e)}))}),[]);return(0,i.useEffect)((function(){if(null==o||!o.current){var i=function(){var i=(0,r.Z)(c().mark((function r(){var i,l,f;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.current=!0,r.next=3,e.e(3528).then(e.bind(e,3528));case 3:return l=r.sent,f=l.Manager,a.current=f.getInstance(n),r.next=8,a.current.initialize(t,p(p({},u),{},{languageServer:{onComplete:function(){d((function(n){return p(p({},n),{},{languageServer:!0})}))}},workspace:{onComplete:function(){d((function(n){return p(p({},n),{},{workspace:!0})}))},options:{fetch:C}},wrapper:p(p({},null==u||null===(i=u.wrapper)||void 0===i?void 0:i.options),{},{onComplete:function(){var n,t,e;(d((function(n){return p(p({},n),{},{wrapper:!0})})),null!=u&&null!==(n=u.wrapper)&&void 0!==n&&n.onComplete)&&(null==u||null===(t=u.wrapper)||void 0===t||null===(e=t.onComplete)||void 0===e||e.call(t))}})}));case 8:case"end":return r.stop()}}),r)})));return function(){return i.apply(this,arguments)}}();i()}return function(){a.current=null}}),[]),(0,i.useEffect)((function(){null!=a&&a.current&&!s&&Object.values(E).every((function(n){return n}))&&R(null==a?void 0:a.current)}),[E,s]),s},E=e(9518),d=e(59886),S=E.default.div.withConfig({displayName:"indexstyle__ContainerStyled",componentId:"sc-1833csf-0"})(["height:100%;overflow:hidden;width:100%;&.mounted{.ide-container{","}.ide-loading{display:none;}}"],(0,d.FL)("45deg","#6B50D71A","#FF141A4D",30,100)),L=E.default.div.withConfig({displayName:"indexstyle__IDEStyled",componentId:"sc-1833csf-1"})(["background-color:",";font-family:",";",""],(function(n){return n.theme.ide.background.color.base}),(function(n){return n.theme.fonts.family.monospace.regular}),(function(n){return n.hideDuplicateMenuItems&&'\n    /*\n     * The (n + 10) assumes a specific number of items in the block editor context\n     * menu. This includes "Run selected block", "Change All Occurrences", "Cut",\n     * "Copy", "Paste", "Command Palette", and 3 dividers. The 10th item from the\n     * bottom and higher are hidden to avoid duplicate shortcut items in the\n     * context menu.\n     */\n    .monaco-menu li.action-item:nth-last-child(n + 10) {\n      display: none;\n    }\n  '})),C=e(28598);function N(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function _(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?N(Object(e),!0).forEach((function(t){(0,u.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var P=function(n){var t=n.configurations,e=n.eventListeners,u=n.persistManagerOnUnmount,o=n.resource,l=n.theme,A=n.uuid,O=(0,i.useRef)(null),T=(0,i.useRef)(null),R=(0,i.useRef)(null),p=(0,i.useRef)(null),E=(0,i.useRef)(null),d=D(A,o,{wrapper:{options:{configurations:_(_({},t),{},{theme:l})}}});return(0,i.useEffect)((function(){if(null!=O&&O.current&&!p.current&&d){var n=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p.current=d,n.next=3,d.start(O.current);case 3:d.isUsingDiffEditor()?(T.current=d.getDiffEditor(),null!=T&&T.current&&f(null==T?void 0:T.current,e)):(R.current=d.getEditor(),null!=R&&R.current&&s(null==R?void 0:R.current,e));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}var t=E.current;d&&t&&!t.classList.contains("mounted")&&t&&t.classList.add("mounted");var o=null==p?void 0:p.current;return function(){o&&(u?o.closeResource():u&&(o.dispose(),T.current=null,R.current=null,p.current=null))}}),[e,d,u]),(0,C.jsxs)(S,{ref:E,children:[(0,C.jsx)(a.Z,{className:"ide-loading"}),(0,C.jsx)(L,{className:"ide-container",children:(0,C.jsx)("div",{ref:O,style:{height:"100vh"}})}),(0,C.jsx)("div",{id:"monaco-suggest-application-root-".concat(A)})]})}},44425:function(n,t,e){e.d(t,{$W:function(){return _},DA:function(){return C},GJ:function(){return d},HX:function(){return m},Hv:function(){return L},J8:function(){return M},L8:function(){return a},LE:function(){return p},Lk:function(){return v},Lq:function(){return D},M5:function(){return S},Q3:function(){return P},Qj:function(){return b},Ut:function(){return w},V4:function(){return j},VZ:function(){return Z},dO:function(){return R},f2:function(){return g},iZ:function(){return h},qC:function(){return E},t6:function(){return l},tf:function(){return T},vn:function(){return y}});var r,u,o,c,i,a,l,f=e(75582),s=e(82394);function A(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function O(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?A(Object(e),!0).forEach((function(t){(0,s.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(a||(a={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(l||(l={}));var T,R=(r={},(0,s.Z)(r,l.MARKDOWN,"MD"),(0,s.Z)(r,l.PYTHON,"PY"),(0,s.Z)(r,l.R,"R"),(0,s.Z)(r,l.SQL,"SQL"),(0,s.Z)(r,l.YAML,"YAML"),r),p=(u={},(0,s.Z)(u,l.MARKDOWN,"Markdown"),(0,s.Z)(u,l.PYTHON,"Python"),(0,s.Z)(u,l.R,"R"),(0,s.Z)(u,l.SQL,"SQL"),(0,s.Z)(u,l.YAML,"YAML"),u);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(T||(T={}));var D,E=(o={},(0,s.Z)(o,T.CUSTOM,T.CUSTOM),(0,s.Z)(o,T.DBT,T.DBT),o),d=Object.entries(T).reduce((function(n,t){var e=(0,f.Z)(t,2),r=e[0],u=e[1];return O(O({},n),{},(0,s.Z)({},u,r))}),{}),S=[T.CALLBACK,T.CONDITIONAL,T.EXTENSION],L=[T.CALLBACK,T.CONDITIONAL];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(D||(D={}));var C,N,_=[T.CHART,T.CUSTOM,T.DATA_EXPORTER,T.DATA_LOADER,T.DBT,T.MARKDOWN,T.SCRATCHPAD,T.SENSOR,T.TRANSFORMER],P=[T.CALLBACK,T.CONDITIONAL,T.CUSTOM,T.DATA_EXPORTER,T.DATA_LOADER,T.DBT,T.MARKDOWN,T.SCRATCHPAD,T.SENSOR,T.TRANSFORMER],Z=[T.DATA_EXPORTER,T.DATA_LOADER],M=[T.DATA_EXPORTER,T.DATA_LOADER,T.TRANSFORMER],m=[T.DATA_EXPORTER,T.DATA_LOADER,T.DBT,T.TRANSFORMER],b=[T.CHART,T.SCRATCHPAD,T.SENSOR,T.MARKDOWN],h=[T.CALLBACK,T.CHART,T.EXTENSION,T.SCRATCHPAD,T.MARKDOWN],y=[T.CALLBACK,T.CHART,T.CONDITIONAL,T.EXTENSION,T.MARKDOWN,T.SCRATCHPAD,T.SENSOR],v=[T.CUSTOM,T.DATA_EXPORTER,T.DATA_LOADER,T.SENSOR,T.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(C||(C={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(N||(N={}));var g=[T.CUSTOM,T.DATA_EXPORTER,T.DATA_LOADER,T.TRANSFORMER],j=(c={},(0,s.Z)(c,T.CALLBACK,"Callback"),(0,s.Z)(c,T.CHART,"Chart"),(0,s.Z)(c,T.CONDITIONAL,"Conditional"),(0,s.Z)(c,T.CUSTOM,"Custom"),(0,s.Z)(c,T.DATA_EXPORTER,"Data exporter"),(0,s.Z)(c,T.DATA_LOADER,"Data loader"),(0,s.Z)(c,T.DBT,"DBT"),(0,s.Z)(c,T.EXTENSION,"Extension"),(0,s.Z)(c,T.GLOBAL_DATA_PRODUCT,"Global data product"),(0,s.Z)(c,T.MARKDOWN,"Markdown"),(0,s.Z)(c,T.SCRATCHPAD,"Scratchpad"),(0,s.Z)(c,T.SENSOR,"Sensor"),(0,s.Z)(c,T.TRANSFORMER,"Transformer"),c),w=[T.DATA_LOADER,T.TRANSFORMER,T.DATA_EXPORTER,T.SENSOR];i={},(0,s.Z)(i,T.DATA_EXPORTER,"DE"),(0,s.Z)(i,T.DATA_LOADER,"DL"),(0,s.Z)(i,T.SCRATCHPAD,"SP"),(0,s.Z)(i,T.SENSOR,"SR"),(0,s.Z)(i,T.MARKDOWN,"MD"),(0,s.Z)(i,T.TRANSFORMER,"TF")},89706:function(n,t,e){e.d(t,{BB:function(){return R},I1:function(){return C},JD:function(){return M},KA:function(){return m},Lu:function(){return l},PF:function(){return _},QX:function(){return A},_n:function(){return N},aZ:function(){return a},bL:function(){return d},d2:function(){return L},dT:function(){return f},n6:function(){return p},nB:function(){return Z},oy:function(){return P},tE:function(){return D},xF:function(){return S}});var r,u,o,c,i,a,l,f,s,A,O=e(82394),T=e(44425);!function(n){n.DBT="dbt"}(a||(a={})),function(n){n.CSV="csv",n.JINJA="jinja",n.JSON="json",n.MD="md",n.PY="py",n.R="r",n.SH="sh",n.SQL="sql",n.TXT="txt",n.YAML="yaml",n.YML="yml"}(l||(l={})),function(n){n.INIT_PY="__init__.py",n.METADATA_YAML="metadata.yaml",n.REQS_TXT="requirements.txt"}(f||(f={})),function(n){n.EXCLUDE_DIR_PATTERN="exclude_dir_pattern",n.EXCLUDE_PATTERN="exclude_pattern",n.PATTERN="pattern"}(s||(s={})),function(n){n.ALL_FILES="all_files",n.UNUSED_BLOCK_FILES="unused_block_files"}(A||(A={}));var R=(r={},(0,O.Z)(r,s.EXCLUDE_PATTERN,"a^"),(0,O.Z)(r,s.EXCLUDE_DIR_PATTERN,"a^"),r),p=[l.PY,l.SQL],D=[l.MD,l.PY,l.R,l.SQL,l.YAML],E=[l.JSON,l.MD,l.PY,l.R,l.SH,l.SQL,l.TXT,l.YAML,l.YML],d=(u={},(0,O.Z)(u,l.PY,0),(0,O.Z)(u,l.SQL,1),(0,O.Z)(u,l.R,2),(0,O.Z)(u,l.YAML,3),(0,O.Z)(u,l.YML,3),(0,O.Z)(u,l.MD,4),(0,O.Z)(u,l.TXT,5),(0,O.Z)(u,l.JSON,6),(0,O.Z)(u,l.CSV,7),(0,O.Z)(u,l.SH,8),u),S=new RegExp(E.map((function(n){return".".concat(n,"$")})).join("|")),L=new RegExp([l.CSV,l.JINJA,l.JSON,l.MD,l.PY,l.R,l.SH,l.SQL,l.TXT,l.YAML,l.YML].map((function(n){return".".concat(n,"$")})).join("|")),C=new RegExp(["__init__.py","metadata.yaml","interactions.yaml",".DS_Store"].join("|")),N=new RegExp(["compiled","__pycache__"].join("|")),_="charts",P="pipelines",Z=(o={},(0,O.Z)(o,l.MD,T.t6.MARKDOWN),(0,O.Z)(o,l.JSON,l.JSON),(0,O.Z)(o,l.PY,T.t6.PYTHON),(0,O.Z)(o,l.R,T.t6.R),(0,O.Z)(o,l.SQL,T.t6.SQL),(0,O.Z)(o,l.TXT,"text"),(0,O.Z)(o,l.YAML,T.t6.YAML),(0,O.Z)(o,l.YML,T.t6.YAML),o),M=(c={},(0,O.Z)(c,T.t6.MARKDOWN,l.MD),(0,O.Z)(c,T.t6.PYTHON,l.PY),(0,O.Z)(c,T.t6.R,l.R),(0,O.Z)(c,T.t6.SQL,l.SQL),(0,O.Z)(c,T.t6.YAML,l.YAML),(0,O.Z)(c,"text",l.TXT),c),m=(i={},(0,O.Z)(i,l.CSV,"Comma-separated values"),(0,O.Z)(i,l.JSON,"JSON"),(0,O.Z)(i,l.MD,"Markdown"),(0,O.Z)(i,l.PY,"Python"),(0,O.Z)(i,l.R,"R"),(0,O.Z)(i,l.SH,"Shell script"),(0,O.Z)(i,l.SQL,"SQL"),(0,O.Z)(i,l.TXT,"Text"),(0,O.Z)(i,l.YAML,"YAML"),(0,O.Z)(i,l.YML,"YAML"),i)}}]);