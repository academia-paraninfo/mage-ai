"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{74395:function(e,n,t){t.d(n,{M:function(){return c},W:function(){return o}});var r=t(9518),i=t(46684),o=34*t(70515).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},24755:function(e,n,t){t.d(n,{B2:function(){return i},DQ:function(){return E},HY:function(){return d},Pl:function(){return r},SA:function(){return f},WH:function(){return s},fF:function(){return a},tC:function(){return l}});var r,i,o=t(19452),c=t(50178),u=t(72473),a="Git settings",d="Preferences",s="Workspace";!function(e){e.PROJECT_PLATFORM="Platform",e.WORKSPACE="Workspace",e.USER_MANAGEMENT="User management"}(r||(r={})),function(e){e.PERMISSIONS="Permissions",e.PREFERENCES="Preferences",e.ROLES="Roles",e.SETTINGS="Settings",e.USERS="Users"}(i||(i={}));var l="Account",E="Profile",f=function(e,n){var t=e.owner,f=e.roles,A=e.project_access,I=(n||{projectPlatformActivated:!1}).projectPlatformActivated,L=t||f===o.No.ADMIN||!!(3&A),p=[{items:[{Icon:u.WorkspacesIcon,linkProps:{href:"/settings/workspace/preferences"},uuid:d},{Icon:u.Settings,linkProps:{href:"/settings/workspace/sync-data"},uuid:a}],uuid:s}];if((0,c.YB)()&&L){var h=[{Icon:u.WorkspacesUsersIcon,linkProps:{href:"/settings/workspace/users"},uuid:i.USERS}];(0,c.Bw)()&&h.push.apply(h,[{Icon:u.VisibleEye,linkProps:{href:"/settings/workspace/roles"},uuid:i.ROLES},{Icon:u.Locked,linkProps:{href:"/settings/workspace/permissions"},uuid:i.PERMISSIONS}]),p.push({items:h,uuid:r.USER_MANAGEMENT})}return!I||(0,c.YB)()&&!L||p.push({items:[{Icon:u.BlocksSeparated,linkProps:{href:"/settings/platform/preferences"},uuid:i.PREFERENCES},{Icon:u.SettingsWithKnobs,linkProps:{href:"/settings/platform/settings"},uuid:i.SETTINGS}],uuid:r.PROJECT_PLATFORM}),(0,c.YB)()?p.concat([{items:[{Icon:u.Sun,linkProps:{href:"/settings/account/profile"},uuid:E}],uuid:l}]):p}},28274:function(e,n,t){t.d(n,{Z:function(){return T}});var r=t(94629),i=t(82394),o=t(12691),c=t.n(o),u=t(55485),a=t(48670),d=t(38276),s=t(30160),l=t(9518),E=t(44897),f=t(70515),A=t(91437),I=(f.iI,l.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*f.iI,2.5*f.iI)),L=l.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,A.eR)(),1.5*f.iI,2.5*f.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||E.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||E.Z.background).codeTextarea,";\n  ")})),p=t(28598),h=t(82684);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=function(e){var n=e.isItemSelected,t=e.sections;return(0,p.jsx)(d.Z,{py:f.Gg,children:null==t?void 0:t.map((function(e){var t=e.items,r=e.title,i=e.uuid;return(0,p.jsxs)(d.Z,{children:[(0,p.jsx)(I,{children:(0,p.jsx)(s.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():i})}),null==t?void 0:t.map((function(e){var t=e.Icon,r=e.label,o=e.linkProps,s=e.onClick,l=e.uuid,E=null==n?void 0:n(S(S({},e),{},{uuidWorkspace:i})),A=r?r():l,I=(0,p.jsx)(L,{selected:E,children:(0,p.jsxs)(u.ZP,{alignItems:"center",children:[t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t,{default:!E,size:1.75*f.iI}),(0,p.jsx)(d.Z,{mr:1})]}),A]})});return o?(0,h.createElement)(c(),S(S({},o),{},{key:l,passHref:!0}),(0,p.jsx)(a.Z,{block:!0,default:!E,noHoverUnderline:!0,noOutline:!0,sameColorAsText:E,children:I})):(0,p.jsx)(a.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:s,preventDefault:!0,sameColorAsText:!0,children:I},l)}))]},i)}))})},g=t(77417),b=t(74395),m=t(24755),R=t(50178);var T=function(e){var n=e.after,t=e.afterHeader,i=e.afterHidden,o=e.afterWidth,c=e.appendBreadcrumbs,u=e.breadcrumbs,a=e.children,d=e.hideAfterCompletely,s=e.setAfterHidden,l=e.title,E=e.uuidItemSelected,A=e.uuidWorkspaceSelected,I=(0,R.PR)()||{},L=(0,g.Z)().projectPlatformActivated;return(0,p.jsx)(r.Z,{after:n,afterHeader:t,afterHidden:!n||i,afterWidth:n?o||50*f.iI:0,afterWidthOverride:!0,appendBreadcrumbs:c,before:(0,p.jsx)(b.M,{children:(0,p.jsx)(D,{isItemSelected:function(e){var n=e.uuid,t=e.uuidWorkspace;return A===t&&E===n},sections:(0,m.SA)(I,{projectPlatformActivated:L})})}),beforeWidth:b.W,breadcrumbs:u,hideAfterCompletely:d,setAfterHidden:s,title:l||"Settings",uuid:"".concat(l||"settings","/index"),children:a})}},8193:function(e,n,t){t.d(n,{N:function(){return a},Z:function(){return u}});var r=t(9518),i=t(44897),o=t(42631),c=t(70515),u=2*c.iI,a=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1ck7mzt-0"})(["border-radius:","px;padding:","px;",""],o.n_,c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeArea,";\n  ")}))},36288:function(e,n,t){t.d(n,{Fy:function(){return A},G9:function(){return s},H1:function(){return I},K4:function(){return a},ND:function(){return d},Pt:function(){return l},WG:function(){return o},hl:function(){return f},m_:function(){return c},oO:function(){return E}});var r,i,o,c,u=t(82394);!function(e){e[e.OWNER=1]="OWNER",e[e.ADMIN=2]="ADMIN",e[e.EDITOR=4]="EDITOR",e[e.VIEWER=8]="VIEWER",e[e.LIST=16]="LIST",e[e.DETAIL=32]="DETAIL",e[e.CREATE=64]="CREATE",e[e.UPDATE=128]="UPDATE",e[e.DELETE=512]="DELETE",e[e.OPERATION_ALL=1024]="OPERATION_ALL",e[e.QUERY=2048]="QUERY",e[e.QUERY_ALL=4096]="QUERY_ALL",e[e.READ=8192]="READ",e[e.READ_ALL=16384]="READ_ALL",e[e.WRITE=32768]="WRITE",e[e.WRITE_ALL=65536]="WRITE_ALL",e[e.ALL=131072]="ALL",e[e.DISABLE_LIST=262144]="DISABLE_LIST",e[e.DISABLE_DETAIL=524288]="DISABLE_DETAIL",e[e.DISABLE_CREATE=1048576]="DISABLE_CREATE",e[e.DISABLE_UPDATE=2097152]="DISABLE_UPDATE",e[e.DISABLE_DELETE=4194304]="DISABLE_DELETE",e[e.DISABLE_OPERATION_ALL=8388608]="DISABLE_OPERATION_ALL",e[e.DISABLE_QUERY=16777216]="DISABLE_QUERY",e[e.DISABLE_QUERY_ALL=33554432]="DISABLE_QUERY_ALL",e[e.DISABLE_READ=67108864]="DISABLE_READ",e[e.DISABLE_READ_ALL=134217728]="DISABLE_READ_ALL",e[e.DISABLE_WRITE=268435456]="DISABLE_WRITE",e[e.DISABLE_WRITE_ALL=536870912]="DISABLE_WRITE_ALL",e[e.DISABLE_UNLESS_CONDITIONS=1073741824]="DISABLE_UNLESS_CONDITIONS"}(o||(o={})),function(e){e.HAS_NOTEBOOK_EDIT_ACCESS="HAS_NOTEBOOK_EDIT_ACCESS",e.HAS_PIPELINE_EDIT_ACCESS="HAS_PIPELINE_EDIT_ACCESS",e.USER_OWNS_ENTITY="USER_OWNS_ENTITY"}(c||(c={}));var a=(r={},(0,u.Z)(r,o.OWNER,"Owner"),(0,u.Z)(r,o.ADMIN,"Admin"),(0,u.Z)(r,o.EDITOR,"Editor"),(0,u.Z)(r,o.VIEWER,"Viewer"),(0,u.Z)(r,o.LIST,"List"),(0,u.Z)(r,o.DETAIL,"Detail"),(0,u.Z)(r,o.CREATE,"Create"),(0,u.Z)(r,o.UPDATE,"Update"),(0,u.Z)(r,o.DELETE,"Delete"),(0,u.Z)(r,o.OPERATION_ALL,"All operations"),(0,u.Z)(r,o.QUERY,"Query"),(0,u.Z)(r,o.QUERY_ALL,"Query all attributes"),(0,u.Z)(r,o.READ,"Read"),(0,u.Z)(r,o.READ_ALL,"Read all attributes"),(0,u.Z)(r,o.WRITE,"Write"),(0,u.Z)(r,o.WRITE_ALL,"Write all attributes"),(0,u.Z)(r,o.ALL,"All"),(0,u.Z)(r,o.DISABLE_LIST,"Disable list"),(0,u.Z)(r,o.DISABLE_DETAIL,"Disable detail"),(0,u.Z)(r,o.DISABLE_CREATE,"Disable create"),(0,u.Z)(r,o.DISABLE_UPDATE,"Disable update"),(0,u.Z)(r,o.DISABLE_DELETE,"Disable delete"),(0,u.Z)(r,o.DISABLE_OPERATION_ALL,"Disable all operations"),(0,u.Z)(r,o.DISABLE_QUERY,"Disable query"),(0,u.Z)(r,o.DISABLE_QUERY_ALL,"Disable all query parameters"),(0,u.Z)(r,o.DISABLE_READ,"Disable read"),(0,u.Z)(r,o.DISABLE_READ_ALL,"Disable all read attributes"),(0,u.Z)(r,o.DISABLE_WRITE,"Disable write"),(0,u.Z)(r,o.DISABLE_WRITE_ALL,"Disable all write attributes"),r),d=(i={},(0,u.Z)(i,c.HAS_NOTEBOOK_EDIT_ACCESS,"Disable unless user has notebook edit access"),(0,u.Z)(i,c.HAS_PIPELINE_EDIT_ACCESS,"Disable unless user has pipeline edit access"),(0,u.Z)(i,c.USER_OWNS_ENTITY,"Disable unless user owns the current entity"),i),s=[o.OWNER,o.ADMIN,o.EDITOR,o.VIEWER,o.ALL],l=[o.LIST,o.DETAIL,o.CREATE,o.UPDATE,o.DELETE,o.OPERATION_ALL],E=[o.DISABLE_LIST,o.DISABLE_DETAIL,o.DISABLE_CREATE,o.DISABLE_UPDATE,o.DISABLE_DELETE,o.DISABLE_OPERATION_ALL],f=[o.QUERY,o.QUERY_ALL,o.DISABLE_QUERY,o.DISABLE_QUERY_ALL],A=[o.READ,o.READ_ALL,o.DISABLE_READ,o.DISABLE_READ_ALL],I=[o.WRITE,o.WRITE_ALL,o.DISABLE_WRITE,o.DISABLE_WRITE_ALL]},65956:function(e,n,t){var r=t(9518),i=t(55485),o=t(38276),c=t(30160),u=t(44897),a=t(42631),d=t(47041),s=t(70515),l=t(28598),E=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),f=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],a.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return!e.noBackground&&e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||u.Z.background).success,";\n  ")}),(function(e){return!e.noBackground&&!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).panel,";\n  ")}),(function(e){return!e.noBackground&&e.dark&&"\n    background-color: ".concat((e.theme.background||u.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),A=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],a.n_,a.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||u.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),E,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),I=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,d.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),L=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],a.M8,a.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,u=e.contentContainerRef,a=e.dark,d=e.footer,s=e.fullHeight,E=void 0===s||s,p=e.fullWidth,h=void 0===p||p,_=e.header,S=e.headerHeight,D=e.headerIcon,g=e.headerPaddingVertical,b=e.headerTitle,m=e.maxHeight,R=e.maxWidth,T=e.minWidth,P=e.noBackground,O=e.noPadding,x=e.overflowVisible,B=e.subtitle,v=e.success;return(0,l.jsxs)(f,{borderless:n,dark:a,fullHeight:E,fullWidth:h,maxHeight:m,maxWidth:R,minWidth:T,noBackground:P,overflowVisible:x,ref:r,success:v,children:[(_||b)&&(0,l.jsxs)(A,{headerPaddingVertical:g,height:S,children:[_&&_,b&&(0,l.jsx)(i.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,l.jsxs)(i.ZP,{alignItems:"center",children:[D&&D,(0,l.jsx)(o.Z,{ml:D?1:0,children:(0,l.jsx)(c.ZP,{bold:!0,default:!0,children:b})})]})})]}),(0,l.jsxs)(I,{maxHeight:m,noPadding:O,overflowVisible:x,ref:u,children:[B&&"string"==typeof B&&(0,l.jsx)(o.Z,{mb:2,children:(0,l.jsx)(c.ZP,{default:!0,children:B})}),B&&"string"!=typeof B&&B,t]}),d&&(0,l.jsx)(L,{children:d})]})}},76417:function(e,n,t){function r(e){return null!=e&&e.first_name?[null==e?void 0:e.first_name,null==e?void 0:e.last_name].filter((function(e){return e})).join(" "):null==e?void 0:e.username}t.d(n,{s:function(){return r}})},80022:function(e,n,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},13692:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(61049);function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,r.Z)(e,n)}},93189:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(12539),i=t(80022);function o(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}}]);