(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{74395:function(e,n,i){"use strict";i.d(n,{M:function(){return s},W:function(){return l}});var t=i(25976),r=i(46684),l=34*i(70515).iI,s=t.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],r.Mz)},8955:function(e,n,i){"use strict";i.d(n,{G7:function(){return b},ZP:function(){return P},u$:function(){return m}});var t=i(75582),r=i(82394),l=i(26304),s=i(90299),o=i(9134),c=i(24138),u=i(38276),a=i(30160),d=i(75499),p=i(70515),g=i(16488),h=i(42122),f=i(28598),v=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function x(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function j(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?x(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var m=44,Z={uuid:"Run details"},_={uuid:"Dependency tree"},b=[_,Z];function P(e){var n=e.height,i=e.heightOffset,r=e.pipeline,x=e.selectedRun,P=e.selectedTab,y=e.setSelectedTab,O=j({},(0,l.Z)(e,v));x?O.blockStatus=(0,g.IJ)(null===x||void 0===x?void 0:x.block_runs):O.noStatus=!0;var k=(0,h.Kn)(null===x||void 0===x?void 0:x.variables)?j({},null===x||void 0===x?void 0:x.variables):(null===x||void 0===x?void 0:x.variables)||{},w=null===x||void 0===x?void 0:x.event_variables;if(w&&(0,h.Kn)(w)&&!(0,h.Qr)(w))if((0,h.Kn)(k)&&k.hasOwnProperty("event")){var I=(0,h.Kn)(k.event)?k.event:{};k.event=j(j({},I),w)}else k.event=j({},w);var S=[];k&&JSON.stringify(k,null,2).split("\n").forEach((function(e){S.push("    ".concat(e))}));var C=x&&[["Run ID",null===x||void 0===x?void 0:x.id],["Variables",(0,f.jsx)(o.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],E=x&&(0,f.jsx)(u.Z,{pb:p.cd,px:p.cd,children:(0,f.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:C.map((function(e,n){var i=(0,t.Z)(e,2),r=i[0],l=i[1];return[(0,f.jsx)(a.ZP,{monospace:!0,muted:!0,children:r},"key_".concat(n)),(0,f.jsx)(a.ZP,{monospace:!0,textOverflow:!0,children:l},"val_".concat(n))]})),uuid:"LogDetail"})}),T=P&&y;return(0,f.jsxs)(f.Fragment,{children:[T&&(0,f.jsx)(s.Z,{onClickTab:y,selectedTabUUID:null===P||void 0===P?void 0:P.uuid,tabs:b,underlineStyle:!0}),(!T||_.uuid===(null===P||void 0===P?void 0:P.uuid))&&(0,f.jsx)(c.ZP,j(j({},O),{},{height:n,heightOffset:(i||0)+(T?m:0),pipeline:r})),Z.uuid===(null===P||void 0===P?void 0:P.uuid)&&E]})}},55072:function(e,n,i){"use strict";i.d(n,{Et:function(){return p},Q:function(){return d}});i(82684);var t=i(71180),r=i(55485),l=i(38276),s=i(31748),o=i(72473),c=i(79633),u=i(70515),a=i(28598),d=30,p=9;n.ZP=function(e){var n=e.page,i=e.maxPages,d=e.onUpdate,p=e.totalPages,g=[],h=i;if(h>p)g=Array.from({length:p},(function(e,n){return n}));else{var f=Math.floor(h/2),v=n-f;n+f>=p?(v=p-h+2,h-=2):n-f<=0?(v=0,h-=2):(h-=4,v=n-Math.floor(h/2)),g=Array.from({length:h},(function(e,n){return n+v}))}return(0,a.jsx)(a.Fragment,{children:p>0&&(0,a.jsxs)(r.ZP,{alignItems:"center",children:[(0,a.jsx)(t.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,a.jsx)(o.PaginateArrowLeft,{size:1.5*u.iI,stroke:s.Av})}),!g.includes(0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{ml:1,children:(0,a.jsx)(t.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!g.includes(1)&&(0,a.jsx)(l.Z,{ml:1,children:(0,a.jsx)(t.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),g.map((function(e){return(0,a.jsx)(l.Z,{ml:1,children:(0,a.jsx)(t.ZP,{backgroundColor:e===n&&c.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!g.includes(p-1)&&(0,a.jsxs)(a.Fragment,{children:[!g.includes(p-2)&&(0,a.jsx)(l.Z,{ml:1,children:(0,a.jsx)(t.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,a.jsx)(l.Z,{ml:1,children:(0,a.jsx)(t.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(p-1)},children:p})},p-1)]}),(0,a.jsx)(l.Z,{ml:1}),(0,a.jsx)(t.ZP,{disabled:n===p-1,onClick:function(){return d(n+1)},children:(0,a.jsx)(o.PaginateArrowRight,{size:1.5*u.iI,stroke:s.Av})})]})})}},36604:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return ge}});var t=i(75582),r=i(77837),l=i(82394),s=i(38860),o=i.n(s),c=i(82684),u=i(12691),a=i.n(u),d=i(25976),p=i(69864),g=i(34376),h=i(71180),f=i(39457),v=i(15338),x=i(55485),j=i(85854),m=i(48670),Z=i(55072),_=i(75457),b=i(27966),P=i(44265),y=i(30229),O=i(57653),k=i(83784),w=i(44085),I=i(38276),S=i(4190),C=i(75499),E=i(48381),T=i(30160),D=i(12468),M=i(35686),N=i(8955),A=i(77417),F=i(74395),R=i(44425),L=i(72473),U=i(72191),z=i(70515),H=i(28795),q=i(97196),X=i(8916),B=i(16488),G=i(3917),W=i(55283),K=i(44375),V=i(15610),$=i(86735),J=i(42122),Q=i(50178),Y=i(72619),ee=i(95924),ne=i(69419),ie=i(70320),te=i(28598);function re(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function le(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?re(Object(i),!0).forEach((function(n){(0,l.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):re(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var se=function(e){var n=e.errors,i=e.fetchPipelineSchedule,r=e.pipeline,l=e.pipelineSchedule,s=e.setErrors,o=e.variables,u=(0,c.useContext)(d.ThemeContext),re=(0,A.Z)().project,se=(0,g.useRouter)(),oe=(0,Q.Ct)(),ce=(0,ie.qB)(),ue=(0,c.useMemo)((function(){return(0,$.HK)((null===r||void 0===r?void 0:r.blocks)||[],(function(e){return e.uuid}))}),[r]),ae=r||{},de=ae.uuid,pe=ae.type,ge=l||{},he=ge.description,fe=ge.id,ve=ge.event_matchers,xe=ge.last_enabled_at,je=ge.name,me=ge.next_pipeline_run_date,Ze=ge.schedule_interval,_e=ge.schedule_type,be=ge.settings,Pe=ge.sla,ye=ge.start_time,Oe=ge.status,ke=ge.tags,we=ge.variables,Ie=void 0===we?{}:we,Se=(0,c.useMemo)((function(){return(0,B._U)(Ze)}),[Ze]),Ce=(0,ne.iV)(),Ee={_limit:30,_offset:30*(null!==Ce&&void 0!==Ce&&Ce.page?Ce.page:0)};null!==Ce&&void 0!==Ce&&Ce.status&&(Ee.status=Ce.status),null!==l&&void 0!==l&&l.global_data_product_uuid&&(Ee.global_data_product_uuid=null===l||void 0===l?void 0:l.global_data_product_uuid);var Te=M.ZP.pipeline_runs.pipeline_schedules.list(fe,Ee,{refreshInterval:3e3,revalidateOnFocus:!0}),De=Te.data,Me=Te.mutate,Ne=(0,c.useMemo)((function(){return(null===De||void 0===De?void 0:De.pipeline_runs)||[]}),[De]),Ae=(0,c.useMemo)((function(){var e;return(null===De||void 0===De||null===(e=De.metadata)||void 0===e?void 0:e.count)||[]}),[De]),Fe=(0,c.useState)(null),Re=Fe[0],Le=Fe[1],Ue=(0,c.useMemo)((function(){var e=null!==Ce&&void 0!==Ce&&Ce.page?Ce.page:0;return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(b.Z,{fetchPipelineRuns:Me,hideTriggerColumn:!0,onClickRow:function(e){return Le((function(n){var i=Ne[e];return(null===n||void 0===n?void 0:n.id)!==i.id?i:null}))},pipelineRuns:Ne,selectedRun:Re,setErrors:s,setSelectedRun:Le}),(0,te.jsx)(I.Z,{p:2,children:(0,te.jsx)(Z.ZP,{maxPages:9,onUpdate:function(e){var n=Number(e),i=le(le({},Ce),{},{page:n>=0?n:0});se.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(de,"/triggers/").concat(fe,"?").concat((0,ne.uM)(i)))},page:Number(e),totalPages:Math.ceil(Ae/30)})})]})}),[Me,Ne,fe,de,Ce,se,Re,s,Ae]),ze=(0,c.useState)(N.G7[0]),He=ze[0],qe=ze[1],Xe=(0,p.Db)((function(e){return M.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:(0,J.gR)(e,["id"])})}),{onSuccess:function(e){return(0,Y.wD)(e,{callback:function(){i()},onErrorCallback:function(e,n){return null===s||void 0===s?void 0:s({errors:n,response:e})}})}}),Be=(0,t.Z)(Xe,2),Ge=Be[0],We=Be[1].isLoading,Ke=M.ZP.pipeline_triggers.pipelines.list(de),Ve=Ke.data,$e=Ke.mutate,Je=(0,c.useMemo)((function(){return(0,$.HK)((null===Ve||void 0===Ve?void 0:Ve.pipeline_triggers)||[],(function(e){return e.name}))}),[Ve]),Qe=(0,c.useMemo)((function(){return!(null===Je||void 0===Je||!Je[null===l||void 0===l?void 0:l.name])}),[l,Je]),Ye=(0,p.Db)(M.ZP.pipeline_triggers.pipelines.useCreate(de),{onSuccess:function(e){return(0,Y.wD)(e,{callback:function(){$e()},onErrorCallback:function(e,n){return null===s||void 0===s?void 0:s({errors:n,response:e})}})}}),en=(0,t.Z)(Ye,2),nn=en[0],tn=en[1].isLoading,rn=(0,p.Db)(M.ZP.pipeline_runs.pipeline_schedules.useCreate(fe),{onSuccess:function(e){return(0,Y.wD)(e,{callback:function(){Me()},onErrorCallback:function(e,n){return null===s||void 0===s?void 0:s({errors:n,response:e})}})}}),ln=(0,t.Z)(rn,2),sn=ln[0],on=ln[1].isLoading,cn=(0,c.useMemo)((function(){return y.fq.ACTIVE===Oe}),[Oe]),un=(0,c.useMemo)((function(){return!cn&&!(_e===y.Xm.TIME&&Ze===y.U5.ONCE)}),[cn,Ze,_e]),an=(0,c.useMemo)((function(){var e,n,i,t={default:!0,size:1.5*z.iI},r=[[(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.MultiShare,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Trigger type"})]},"trigger_type_label"),(0,te.jsx)(T.ZP,{monospace:!0,children:null===(e=y.Z4[_e])||void 0===e?void 0:e.call(y.Z4)},"trigger_type")],[(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.Switch,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Status"})]},"trigger_status_label"),(0,te.jsx)(T.ZP,{danger:!cn,monospace:!0,success:cn,children:Oe},"trigger_status")]];if(he&&r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.Alphabet,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Description"})]},"trigger_description_label"),(0,te.jsx)(T.ZP,{children:he},"trigger_description")]),Pe){var s=(0,B.gU)(Pe),o=s.time,c=s.unit,u=1===o?c:"".concat(c,"s");r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.Info,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"SLA"})]},"trigger_sla_label"),(0,te.jsx)(T.ZP,{monospace:!0,children:"".concat(o," ").concat(u)},"trigger_sla")])}if(Ze&&r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.Schedule,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Frequency"})]},"trigger_frequency_label"),(0,te.jsx)(T.ZP,{monospace:!0,children:ce&&Se?(0,B.lO)(Ze):Ze.replace("@","")},"trigger_frequency")],[(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.CalendarDate,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Next run date"})]},"trigger_next_run_date_label"),(0,te.jsx)(T.ZP,{monospace:!0,children:me?ce?(0,G.XG)(me,ce):(0,G.d$)(me,{includeSeconds:!0,utcFormat:!0}):"N/A"},"trigger_next_run_date")]),ye&&r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.CalendarDate,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Start date"})]},"trigger_start_date_label"),(0,te.jsx)(T.ZP,{monospace:!0,children:ce?(0,G.XG)(ye,ce):ye},"trigger_start_date")]),xe&&r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.CalendarDate,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Last enabled at"})]},"trigger_last_enabled_at_label"),(0,te.jsx)(T.ZP,{monospace:!0,children:ce?(0,G.XG)(xe,ce):(0,G.d$)(xe,{includeSeconds:!0})},"trigger_last_enabled_at")]),y.Xm.API===_e){var a=(0,B.M8)(l);r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(L.PlugAPI,le({},t)),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"API endpoint"})]},"trigger_api_endpoint_label"),(0,te.jsx)(f.Z,{copiedText:a,children:(0,te.jsx)(T.ZP,{monospace:!0,small:!0,children:a})},"trigger_api_endpoint")])}if(null!==be&&void 0!==be&&be.timeout){var d=(0,B.gU)(null===be||void 0===be?void 0:be.timeout),p=d.time,g=d.unit,h=1===p?g:"".concat(g,"s");r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(D.Z,{default:!0,label:"Timeout set for runs of this trigger",size:U.gt,widthFitContent:!0}),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Timeout"})]},"trigger_timeout"),(0,te.jsx)(T.ZP,{monospace:!0,children:"".concat(p," ").concat(h)},"trigger_timeout_label")])}null!==be&&void 0!==be&&be.skip_if_previous_running&&r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(D.Z,{default:!0,label:"Skip current run if any previous runs are still in progress",size:U.gt,widthFitContent:!0}),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Skip if running"})]},"trigger_skip_if_running"),(0,te.jsx)(T.ZP,{monospace:!0,children:null===(n=be.skip_if_previous_running)||void 0===n?void 0:n.toString()},"trigger_skip_if_running_label")]);(null!==be&&void 0!==be&&be.allow_blocks_to_fail&&r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(D.Z,{default:!0,label:"Trigger runs will continue running blocks if other unrelated blocks fail",size:U.gt,widthFitContent:!0}),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Allow blocks to fail"})]},"trigger_allow_blocks_to_fail"),(0,te.jsx)(T.ZP,{monospace:!0,children:be.allow_blocks_to_fail.toString()},"trigger_allow_blocks_to_fail_label")]),null!==be&&void 0!==be&&be.create_initial_pipeline_run)&&r.push([(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(D.Z,{default:!0,label:"Create initial pipeline run if start date is before current execution period",maxWidth:32*z.iI,size:U.gt}),(0,te.jsx)(I.Z,{mr:1}),(0,te.jsx)(T.ZP,{default:!0,children:"Create initial run"})]},"trigger_create_initial_pipeline_run"),(0,te.jsx)(T.ZP,{monospace:!0,children:null===(i=be.create_initial_pipeline_run)||void 0===i?void 0:i.toString()},"trigger_create_initial_pipeline_run_label")]);return(0,te.jsx)(C.Z,{columnFlex:[null,1],rows:r})}),[he,ce,cn,Se,me,l,Ze,_e,be,Pe,ye,Oe]),dn=(0,c.useMemo)((function(){return Ie||{}}),[Ie]),pn=(0,c.useMemo)((function(){var e,n=[];return(0,J.Qr)(dn)?n=(0,X.wx)(o,(function(e){return e.uuid===k.C})):Object.entries(dn).forEach((function(e){var i=(0,t.Z)(e,2),r=i[0],l=i[1];[P.sZ,y.PN].includes(r)||n.push({uuid:r,value:(0,X.FS)(l)})})),"undefined"!==typeof(n=(0,X.JZ)(n||[],_e))&&null!==(e=n)&&void 0!==e&&e.length?(0,te.jsx)(C.Z,{columnFlex:[null,1],rows:n.map((function(e){var n=e.uuid,i=e.value;return[(0,te.jsx)(T.ZP,{default:!0,monospace:!0,children:n},"settings_variable_label_".concat(n)),(0,te.jsx)(T.ZP,{monospace:!0,children:i},"settings_variable_".concat(n))]}))}):null}),[_e,dn,o]),gn=(0,c.useMemo)((function(){var e=null===dn||void 0===dn?void 0:dn[y.PN];return e?(0,te.jsx)(te.Fragment,{children:Object.entries(e||{}).map((function(e){var n,i=(0,t.Z)(e,2),r=i[0],l=i[1],s=null===ue||void 0===ue?void 0:ue[r];return(0,te.jsxs)(I.Z,{mt:1,children:[(0,te.jsx)(I.Z,{pb:1,px:z.cd,children:(0,te.jsx)(T.ZP,{color:(0,W.qn)(null===s||void 0===s?void 0:s.type,{blockColor:null===s||void 0===s?void 0:s.color,theme:u}).accent,monospace:!0,children:r})}),(0,te.jsx)(v.Z,{light:!0}),null===(n=Object.entries(l||{}))||void 0===n?void 0:n.map((function(e,n){var i=(0,t.Z)(e,2),r=i[0],l=i[1];return(0,te.jsx)("div",{children:(0,te.jsx)(C.Z,{columnFlex:[null,1],rows:[[(0,te.jsx)(T.ZP,{default:!0,monospace:!0,children:"Stream"},"stream_title_".concat(n)),(0,te.jsx)(T.ZP,{monospace:!0,rightAligned:!0,children:r},"stream_id_".concat(n))]].concat(Object.entries(l||{}).map((function(e){var n=(0,t.Z)(e,2),i=n[0],r=n[1];return[(0,te.jsx)(T.ZP,{default:!0,monospace:!0,children:i},"settings_variable_label_".concat(i)),(0,te.jsx)(T.ZP,{monospace:!0,rightAligned:!0,children:r},"settings_variable_".concat(i))]})))})},r)}))]},r)}))}):null}),[ue,dn,u]),hn=(0,c.useMemo)((function(){var e,n,i=[],t=null===dn||void 0===dn||null===(e=dn[P.sZ])||void 0===e?void 0:e.blocks;return null===r||void 0===r||null===(n=r.blocks)||void 0===n||n.forEach((function(e){var n=e.type,r=e.uuid;if(R.tf.DBT===n){var l,s=(null===t||void 0===t||null===(l=t[r])||void 0===l?void 0:l.configuration)||{},o=s.flags,c=s.prefix,u=s.suffix,a=(0,K.IU)(e).name;(o||c||u)&&i.push({flags:o,prefix:c,suffix:u,uuid:a})}})),"undefined"!==typeof i&&null!==i&&void 0!==i&&i.length?(0,te.jsx)(C.Z,{columnFlex:[1,null],rows:i.map((function(e){var n=e.flags,i=e.prefix,t=e.suffix,r=e.uuid;return[(0,te.jsxs)(T.ZP,{monospace:!0,small:!0,children:[i&&(0,te.jsx)(T.ZP,{inline:!0,monospace:!0,muted:!0,small:!0,children:i}),r,t&&(0,te.jsx)(T.ZP,{inline:!0,monospace:!0,muted:!0,small:!0,children:t})]},"settings_variable_label_".concat(r)),(0,te.jsx)(T.ZP,{monospace:!0,muted:!0,small:!0,children:n&&n.join(", ")},"settings_variable_".concat(r))]}))}):null}),[r,dn]),fn=(0,c.useMemo)((function(){return(0,te.jsx)(C.Z,{columnFlex:[null,1],columns:[{uuid:"Provider"},{uuid:"Event"}],rows:null===ve||void 0===ve?void 0:ve.map((function(e,n){var i=e.event_type,t=e.name;return[(0,te.jsx)(T.ZP,{default:!0,monospace:!0,children:q._P[i].label()},"".concat(i,"_").concat(n,"_label")),(0,te.jsx)(T.ZP,{monospace:!0,children:t},"".concat(i,"_").concat(n,"_name"))]}))})}),[ve]),vn=(0,c.useMemo)((function(){var e,n,i,t,l,s,o;return"undefined"===typeof(null===r||void 0===r||null===(e=r.settings)||void 0===e||null===(n=e.triggers)||void 0===n?void 0:n.save_in_code_automatically)?null===re||void 0===re||null===(i=re.pipelines)||void 0===i||null===(t=i.settings)||void 0===t||null===(l=t.triggers)||void 0===l?void 0:l.save_in_code_automatically:null===r||void 0===r||null===(s=r.settings)||void 0===s||null===(o=s.triggers)||void 0===o?void 0:o.save_in_code_automatically}),[r,re]);return(0,te.jsxs)(_.Z,{afterHidden:!Re,before:(0,te.jsxs)(F.M,{children:[(0,te.jsxs)(I.Z,{mb:z.HN,pt:z.cd,px:z.cd,children:[(0,te.jsxs)(I.Z,{mb:z.cd,children:[y.Xm.TIME===_e&&(0,te.jsx)(L.Sun,{size:5*z.iI}),y.Xm.EVENT===_e&&(0,te.jsx)(L.MusicNotes,{size:5*z.iI}),y.Xm.API===_e&&(0,te.jsx)(L.Lightning,{size:5*z.iI}),!_e&&(0,te.jsx)(L.MultiShare,{size:5*z.iI})]}),(0,te.jsx)(j.Z,{children:je})]}),(0,te.jsx)(I.Z,{px:z.cd,children:(0,te.jsx)(j.Z,{level:5,children:"Settings"})}),(0,te.jsx)(v.Z,{light:!0,mt:1,short:!0}),an,(null===ve||void 0===ve?void 0:ve.length)>=1&&(0,te.jsxs)(I.Z,{my:z.HN,children:[(0,te.jsx)(I.Z,{px:z.cd,children:(0,te.jsx)(j.Z,{level:5,children:"Events"})}),(0,te.jsx)(v.Z,{light:!0,mt:1,short:!0}),fn]}),pn&&(0,te.jsxs)(I.Z,{my:z.HN,children:[(0,te.jsx)(I.Z,{px:z.cd,children:(0,te.jsx)(j.Z,{level:5,children:"Runtime variables"})}),(0,te.jsx)(v.Z,{light:!0,mt:1,short:!0}),pn]}),gn&&(0,te.jsxs)(I.Z,{my:z.HN,children:[(0,te.jsx)(I.Z,{px:z.cd,children:(0,te.jsx)(j.Z,{level:5,children:"Bookmark values"})}),(0,te.jsx)(v.Z,{light:!0,mt:1,short:!0}),gn]}),hn&&(0,te.jsxs)(I.Z,{my:z.HN,children:[(0,te.jsx)(I.Z,{px:z.cd,children:(0,te.jsx)(j.Z,{level:5,children:"dbt runtime settings"})}),(0,te.jsx)(v.Z,{light:!0,mt:1,short:!0}),hn]}),(null===ke||void 0===ke?void 0:ke.length)>=1&&(0,te.jsxs)(I.Z,{my:z.HN,children:[(0,te.jsx)(I.Z,{px:z.cd,children:(0,te.jsx)(j.Z,{level:5,children:"Tags"})}),(0,te.jsx)(v.Z,{light:!0,mt:1,short:!0}),(0,te.jsx)(I.Z,{mt:z.cd,px:z.cd,children:(0,te.jsx)(E.Z,{tags:null===ke||void 0===ke?void 0:ke.map((function(e){return{uuid:e}}))})})]}),"\\",(0,te.jsx)(I.Z,{my:z.HN,children:(0,te.jsxs)(I.Z,{px:z.cd,children:[(0,te.jsxs)(j.Z,{level:5,children:[Qe&&"Trigger exists in code",!Qe&&"Store trigger in code"]}),(0,te.jsxs)(I.Z,{mt:1,children:[vn&&(0,te.jsxs)(T.ZP,{default:!0,children:["This trigger will automatically be persisted in code. To change this behavior, update the ",(0,te.jsx)(a(),{as:"/pipelines/".concat(de,"/settings"),href:"/pipelines/[pipeline]/settings",passHref:!0,children:(0,te.jsx)(m.Z,{openNewWindow:!0,children:"pipeline\u2019s settings"})})," or ",(0,te.jsx)(a(),{as:"/settings/workspace/preferences",href:"/settings/workspace/preferences",passHref:!0,children:(0,te.jsx)(m.Z,{openNewWindow:!0,children:"project settings"})}),"."]}),!vn&&(0,te.jsxs)(T.ZP,{default:!0,children:["Save or update the trigger and its settings in the pipeline\u2019s metadata and version control the trigger using Git. For more information, please read the ",(0,te.jsx)(m.Z,{href:"https://docs.mage.ai/guides/triggers/configure-triggers-in-code",openNewWindow:!0,children:"documentation"}),"."]})]}),!vn&&(0,te.jsxs)(I.Z,{mt:z.cd,children:[!Ve&&(0,te.jsx)(S.Z,{inverted:!0}),Ve&&(0,te.jsxs)(h.ZP,{disabled:!(null!==l&&void 0!==l&&l.id),loading:tn,onClick:function(){nn({pipeline_trigger:{pipeline_schedule_id:null===l||void 0===l?void 0:l.id}})},secondary:!0,children:[Qe&&"Update trigger in code",!Qe&&"Save trigger in code"]})]})]})})]}),beforeWidth:F.W,breadcrumbs:[{label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(de,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{label:function(){return je},linkProps:{as:"/pipelines/".concat(de,"/triggers/").concat(fe),href:"/pipelines/[pipeline]/triggers/[...slug]"}}],buildSidekick:function(e){return(0,N.ZP)(le(le({},e),{},{selectedRun:Re,selectedTab:He,setSelectedTab:qe}))},errors:n,pageName:H.M.TRIGGERS,pipeline:r,setErrors:s,subheader:(0,te.jsxs)(x.ZP,{alignItems:"center",children:[(0,te.jsx)(h.ZP,{beforeIcon:cn?(0,te.jsx)(L.LightningOff,{size:U.bL}):(0,te.jsx)(L.Lightning,{inverted:!oe,size:U.bL}),danger:cn&&!oe,loading:We,onClick:function(e){(0,ee.j)(e),Ge({id:fe,status:cn?y.fq.INACTIVE:y.fq.ACTIVE})},outline:!0,success:!cn&&!oe,children:cn?"Disable trigger":"Enable trigger"}),(0,te.jsx)(I.Z,{mr:z.cd}),pe!==O.qL.STREAMING&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(h.ZP,{beforeIcon:(0,te.jsx)(L.Once,{size:U.bL}),disabled:un,loading:on,onClick:function(){return sn({pipeline_run:{pipeline_schedule_id:fe,pipeline_uuid:de,variables:dn}})},outline:!0,title:un?"Trigger must be enabled to run@once":"Manually run pipeline once immediately",children:(0,te.jsx)(T.ZP,{disabled:un,children:"Run@once"})}),(0,te.jsx)(I.Z,{mr:z.cd})]}),!oe&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(h.ZP,{beforeIcon:(0,te.jsx)(L.Edit,{size:U.bL}),linkProps:{as:"/pipelines/".concat(de,"/triggers/").concat(fe,"/edit"),href:"/pipelines/[pipeline]/triggers/[...slug]"},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Edit trigger"}),(0,te.jsx)(I.Z,{mr:z.cd})]}),(0,te.jsxs)(w.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?se.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(de,"/triggers/").concat(fe)):(0,V.u)({page:0,status:e.target.value})},paddingRight:4*z.iI,placeholder:"Select run status",value:(null===Ce||void 0===Ce?void 0:Ce.status)||"all",children:[(0,te.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),P.IK.map((function(e){return(0,te.jsx)("option",{value:e,children:P.Do[e]},e)}))]})]}),title:function(){return je},uuid:"triggers/detail",children:[(0,te.jsx)(I.Z,{mt:z.cd,px:z.cd,children:(0,te.jsx)(j.Z,{level:5,children:"Runs for this trigger"})}),(0,te.jsx)(v.Z,{light:!0,mt:z.cd,short:!0}),Ue]})},oe=i(12717),ce=i(93808),ue=i(92709);function ae(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function de(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?ae(Object(i),!0).forEach((function(n){(0,l.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ae(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function pe(e){var n=e.pipelineScheduleId,i=e.pipelineUUID,t=e.subpath,r=ue.b7===t,l=(0,c.useState)(null),s=l[0],o=l[1],u=M.ZP.variables.pipelines.list(i,{},{revalidateOnFocus:!1}).data,a=null===u||void 0===u?void 0:u.variables,d={};r&&(d._format="with_runtime_average");var p=M.ZP.pipeline_schedules.detail("undefined"!==typeof n&&n,d),g=p.data,h=p.mutate,f=null===g||void 0===g?void 0:g.pipeline_schedule,v=M.ZP.pipelines.detail(i,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,x=de(de({},null===v||void 0===v?void 0:v.pipeline),{},{uuid:i});return r?(0,te.jsx)(oe.Z,{errors:s,fetchPipelineSchedule:h,pipeline:x,pipelineSchedule:f,setErrors:o,variables:a}):(0,te.jsx)(se,{errors:s,fetchPipelineSchedule:h,pipeline:x,pipelineSchedule:f,setErrors:o,variables:a})}pe.getInitialProps=function(){var e=(0,r.Z)(o().mark((function e(n){var i,r,l,s,c,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.query,r=i.pipeline,l=i.slug,!Array.isArray(l)){e.next=4;break}return s=(0,t.Z)(l,2),c=s[0],u=s[1],e.abrupt("return",{pipelineScheduleId:c,pipelineUUID:r,subpath:u});case 4:return e.abrupt("return",{pipelineUUID:r});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var ge=(0,ce.Z)(pe)},95488:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers/[...slug]",function(){return i(36604)}])}},function(e){e.O(0,[9161,7674,26,1557,3782,7966,2717,9774,2888,179],(function(){return n=95488,e(e.s=n);var n}));var n=e.O();_N_E=n}]);