(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4543],{44374:function(e,n,o){"use strict";o.d(n,{Z:function(){return A}});var t=o(82684),l=o(71180),r=o(94629),i=o(46866),u=o(82394),c=o(12691),a=o.n(c),s=o(9518),d=o(34376),p=o(55485),f=o(48670),h=o(75499),v=o(30160),b=o(5332),m=o(72473),j=o(8193),k={default:!0,monospace:!0},P=o(81728),g=o(3917),_=o(55283),w=o(86735),x=o(70320),y=o(28598);function Z(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function O(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(o),!0).forEach((function(n){(0,u.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Z(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var E=function(e){var n=e.rootProject,o=(0,x.qB)(),l=(0,t.useContext)(s.ThemeContext),r=(0,d.useRouter)(),i=(0,t.useState)(null),u=i[0],c=(i[1],b.ZP.global_hooks.list(O({_format:"with_pipeline_details",include_snapshot_validation:1},n?{root_project:n}:{})).data),Z=(0,t.useMemo)((function(){return(null==c?void 0:c.global_hooks)||[]}),[c]);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(h.Z,{columnFlex:[null,null,null,null,1,null,null],columns:[{uuid:"UUID"},{uuid:"Resource"},{uuid:"Operation"},{uuid:"Pipeline"},{uuid:"Outputs"},{center:!0,uuid:"Valid"},{rightAligned:!0,uuid:"Snapshotted at"}],onClickRow:function(e,o){var t=null==Z?void 0:Z[e],l=t.operation_type,i=t.resource_type,u=t.uuid;r.push("/".concat(n?"platform/":"","global-hooks/").concat(u,"?operation_type=").concat(l,"&resource_type=").concat(i))},getObjectAtRowIndex:function(e){return null==Z?void 0:Z[e]},rows:null==Z?void 0:Z.map((function(e){var n,r=e.metadata,i=e.operation_type,u=e.outputs,c=e.pipeline,s=e.pipeline_details,d=e.resource_type,h=e.uuid,b=null==c?void 0:c.uuid,x=b?(0,y.jsx)(a(),{as:"/pipelines/".concat(b,"/edit"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,y.jsx)(f.Z,O(O({},k),{},{openNewWindow:!0,children:b}))},"pipeline"):(0,t.createElement)(v.ZP,O(O({},k),{},{key:"pipeline",muted:!0}),"-"),Z=[];if((null==u?void 0:u.length)>=1&&(null==s||null===(n=s.blocks)||void 0===n?void 0:n.length)>=1){var E=(0,w.HK)((null==s?void 0:s.blocks)||[],(function(e){return e.uuid}));null==u||u.forEach((function(e,n){var o;if(null!=e&&null!==(o=e.block)&&void 0!==o&&o.uuid){var r,i=null==E?void 0:E[null==e||null===(r=e.block)||void 0===r?void 0:r.uuid];i&&(n>=1&&Z.push((0,t.createElement)(v.ZP,O(O({},k),{},{inline:!0,key:"".concat(null==i?void 0:i.uuid,"-").concat(n,"-comma"),muted:!0}),", ")),Z.push((0,y.jsx)(a(),{as:"/pipelines/".concat(b,"/edit?block_uuid=").concat(null==i?void 0:i.uuid),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,y.jsx)(f.Z,O(O({},k),{},{inline:!0,openNewWindow:!0,sameColorAsText:!0,children:(0,y.jsx)(v.ZP,O(O({},k),{},{color:(0,_.qn)(null==i?void 0:i.type,{blockColor:null==i?void 0:i.color,theme:l}).accent,inline:!0,children:null==i?void 0:i.uuid}))}))},"".concat(null==i?void 0:i.uuid,"-").concat(n,"-link"))))}}))}return[(0,t.createElement)(v.ZP,O(O({},k),{},{key:"uuid"}),h),(0,t.createElement)(v.ZP,O(O({},k),{},{key:"resourceType",monospace:!1}),d?(0,P.j3)(d):"-"),(0,t.createElement)(v.ZP,O(O({},k),{},{key:"operationType",monospace:!1}),i?(0,P.vg)(i):"-"),x,(0,y.jsxs)("div",{children:[(null==Z?void 0:Z.length)>=1&&Z,!(null!=Z&&Z.length)&&(0,y.jsx)(v.ZP,O(O({},k),{},{muted:!0,children:"-"}))]},"outputs"),(0,y.jsx)(p.ZP,{justifyContent:"center",children:null!=r&&r.snapshot_valid?(0,y.jsx)(m.Check,{size:j.Z,success:!0}):(0,y.jsx)(m.AlertTriangle,{danger:!0,size:j.Z})},"valid"),(0,t.createElement)(v.ZP,O(O({},k),{},{key:"snapshottedAt",rightAligned:!0}),null!=r&&r.snapshotted_at?(0,g.XG)(null==r?void 0:r.snapshotted_at,o):"-")]})),selectedRowIndexInternal:u,uuid:"GlobalHooks/Table"})})},C=o(70515),T=o(69419);var A=function(e){var n=e.rootProject,o=(0,t.useState)(!1),u=o[0],c=o[1],a=(0,T.iV)();(0,t.useEffect)((function(){var e=a.new;c(!!e)}),[a]);var s=n?"Platform global hooks":"Global hooks";return(0,y.jsxs)(r.Z,{addProjectBreadcrumbToCustomBreadcrumbs:u,breadcrumbs:u?[{label:function(){return s},linkProps:{href:"/".concat(n?"platform/":"","global-hooks")}},{bold:!0,label:function(){return"New"}}]:null,subheaderChildren:!u&&(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(l.ZP,{beforeIcon:(0,y.jsx)(m.Add,{size:2.5*C.iI}),inline:!0,linkProps:{as:"/".concat(n?"platform/":"","global-hooks?new=1"),href:"/".concat(n?"platform/":"","global-hooks")},noHoverUnderline:!0,primary:!0,sameColorAsText:!0,children:"Add new global hook"})}),title:s,uuid:"GlobalHooks/index",children:[u&&(0,y.jsx)(i.Z,{isNew:u,rootProject:n}),!u&&(0,y.jsx)(E,{rootProject:n})]})}},46751:function(e,n,o){"use strict";o.r(n);var t=o(77837),l=o(38860),r=o.n(l),i=o(44374),u=o(93808),c=o(28598);function a(){return(0,c.jsx)(i.Z,{rootProject:!0})}a.getInitialProps=(0,t.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,u.Z)(a)},52248:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/platform/global-hooks",function(){return o(46751)}])}},function(e){e.O(0,[2678,365,184,9518,5946,2655,3745,9565,5329,3656,5332,9868,9895,564,2371,1557,2512,5604,5499,4586,9774,2888,179],(function(){return n=52248,e(e.s=n);var n}));var n=e.O();_N_E=n}]);