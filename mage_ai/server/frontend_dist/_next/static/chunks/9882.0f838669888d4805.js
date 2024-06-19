(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9882],{89882:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var n=t(51774),l=t.n(n),o=t(11611),r=t(53544),_=t.n(r),c={cache_block_output_in_memory:!1,concurrency_config:{block_run_limit:40},created_at:"2024-05-26 07:48:27.696425+00:00",data_integration:null,description:null,executor_config:{},executor_count:1,executor_type:null,name:"dynamic",notification_config:{},remote_variables_dir:null,retry_config:{},run_pipeline_in_one_process:!1,settings:{triggers:null},tags:[],type:"python",uuid:"dynamic",variables_dir:"/root/.mage_data/memory_upgrade_v2",spark_config:{},blocks:[{all_upstream_blocks_executed:!0,color:null,configuration:{dynamic:{modes:[{type:"stream"}],parent:!0},file_path:"memory_upgrade_v2/data_loaders/dynamic1.py",file_source:{path:"memory_upgrade_v2/data_loaders/dynamic1.py"}},downstream_blocks:["child_2x","child_1x_childspawn_1x_reduce"],executor_config:null,executor_type:"local_python",has_callback:!1,name:"dynamic1",language:"python",retry_config:null,status:"executed",timeout:null,type:"data_loader",upstream_blocks:[],uuid:"dynamic1",callback_blocks:[],conditional_blocks:[],content:"@data_loader\ndef load_data1(*args, **kwargs):\n    arr = [i + 10 for i in range(0, 2)]\n    return [\n        arr,\n        [dict(block_uuid=f'child_{i}') for i in arr],\n    ]",outputs:[],metadata:{},tags:[],pipelines:[{added_at:null,pipeline:{created_at:"2024-05-26 07:48:27.696425+00:00",description:null,name:"dynamic",tags:[],type:"python",uuid:"dynamic",repo_path:"memory_upgrade_v2"},updated_at:1718506200.356602}]},{all_upstream_blocks_executed:!0,color:null,configuration:{dynamic:{modes:[{type:"stream"}],parent:!1},file_path:"memory_upgrade_v2/data_loaders/dynamic2.py",file_source:{path:"memory_upgrade_v2/data_loaders/dynamic2.py"}},downstream_blocks:["child_2x","child_1x_spawn_1x"],executor_config:null,executor_type:"local_python",has_callback:!1,name:"dynamic2",language:"python",retry_config:null,status:"executed",timeout:null,type:"data_loader",upstream_blocks:[],uuid:"dynamic2",callback_blocks:[],conditional_blocks:[],content:"@data_loader\ndef load_data2(*args, **kwargs):\n    arr = [i + 20 for i in range(0, 2)]\n    return [\n        arr,\n        [dict(block_uuid=f'child_{i}') for i in arr],\n    ]",outputs:[],metadata:{},tags:[],pipelines:[{added_at:null,pipeline:{created_at:"2024-05-26 07:48:27.696425+00:00",description:null,name:"dynamic",tags:[],type:"python",uuid:"dynamic",repo_path:"memory_upgrade_v2"},updated_at:1718506200.356658}]},{all_upstream_blocks_executed:!0,color:null,configuration:{file_path:"memory_upgrade_v2/transformers/child_2x.py",file_source:{path:"memory_upgrade_v2/transformers/child_2x.py"}},downstream_blocks:["child_1x","dynamic_spawn_2x"],executor_config:null,executor_type:"local_python",has_callback:!1,name:"child 2x",language:"python",retry_config:null,status:"executed",timeout:null,type:"transformer",upstream_blocks:["dynamic1","dynamic2"],uuid:"child_2x",callback_blocks:[],conditional_blocks:[],content:"",outputs:[],error:{error:"No such file or directory",message:"You may have moved it or changed its filename. Delete the current block to remove it from the pipeline or write code and save the pipeline to create a new file at /home/src/default_repo/mlops/mlops/memory_upgrade_v2/transformers/child_2x.py."},metadata:{},tags:[],pipelines:[{added_at:null,pipeline:{created_at:"2024-05-26 07:48:27.696425+00:00",description:null,name:"dynamic",tags:[],type:"python",uuid:"dynamic",repo_path:"memory_upgrade_v2"},updated_at:1718506200.3567}]},{all_upstream_blocks_executed:!0,color:null,configuration:{dynamic:!0,file_path:"memory_upgrade_v2/data_exporters/dynamic_spawn_2x.py",file_source:{path:"memory_upgrade_v2/data_exporters/dynamic_spawn_2x.py"}},downstream_blocks:["child_1x_spawn_1x","replica"],executor_config:null,executor_type:"local_python",has_callback:!1,name:"dynamic spawn 2x",language:"python",retry_config:null,status:"updated",timeout:null,type:"data_exporter",upstream_blocks:["child_2x","child_1x"],uuid:"dynamic_spawn_2x",callback_blocks:[],conditional_blocks:[],content:"@data_exporter\ndef transform_2_1(arr, number, **kwargs):\n    arr = [arr, kwargs.get('upstream_data', 0), number]\n    return [\n        arr,\n    ]",outputs:[],metadata:{},tags:["dynamic"],pipelines:[{added_at:null,pipeline:{created_at:"2024-05-26 07:48:27.696425+00:00",description:null,name:"dynamic",tags:[],type:"python",uuid:"dynamic",repo_path:"memory_upgrade_v2"},updated_at:1718506200.35674}]},{all_upstream_blocks_executed:!0,color:"teal",configuration:{file_path:"memory_upgrade_v2/custom/child_1x.py",file_source:{path:"memory_upgrade_v2/custom/child_1x.py"}},downstream_blocks:["child_1x_spawn_1x","dynamic_spawn_2x"],executor_config:null,executor_type:"local_python",has_callback:!1,name:"child 1x",language:"python",retry_config:null,status:"executed",timeout:null,type:"custom",upstream_blocks:["child_2x"],uuid:"child_1x",callback_blocks:[],conditional_blocks:[],content:"@custom\ndef transform(data, *args, **kwargs):\n    return data",outputs:[],metadata:{},tags:[],pipelines:[{added_at:null,pipeline:{created_at:"2024-05-26 07:48:27.696425+00:00",description:null,name:"dynamic",tags:[],type:"python",uuid:"dynamic",repo_path:"memory_upgrade_v2"},updated_at:1718506200.356759}]},{all_upstream_blocks_executed:!1,color:null,configuration:{file_path:"memory_upgrade_v2/transformers/child_1x_spawn_1x.py",file_source:{path:"memory_upgrade_v2/transformers/child_1x_spawn_1x.py"},reduce_output:!0},downstream_blocks:["child_1x_childspawn_1x_reduce","replica"],executor_config:null,executor_type:"local_python",has_callback:!1,name:"child 1x spawn 1x",language:"python",retry_config:null,status:"executed",timeout:null,type:"transformer",upstream_blocks:["dynamic2","dynamic_spawn_2x","child_1x"],uuid:"child_1x_spawn_1x",callback_blocks:[],conditional_blocks:[],content:"",outputs:[{sample_data:{columns:["output"],rows:[[{}]]},shape:[1,1],type:"table",variable_uuid:"output_1",multi_output:!0}],error:{error:"No such file or directory",message:"You may have moved it or changed its filename. Delete the current block to remove it from the pipeline or write code and save the pipeline to create a new file at /home/src/default_repo/mlops/mlops/memory_upgrade_v2/transformers/child_1x_spawn_1x.py."},metadata:{},tags:["dynamic_child","reduce_output"],pipelines:[{added_at:null,pipeline:{created_at:"2024-05-26 07:48:27.696425+00:00",description:null,name:"dynamic",tags:[],type:"python",uuid:"dynamic",repo_path:"memory_upgrade_v2"},updated_at:1718506200.356797}]},{all_upstream_blocks_executed:!1,color:null,configuration:{dynamic:!0,file_path:"memory_upgrade_v2/data_exporters/child_1x_childspawn_1x_reduce.py",file_source:{path:"memory_upgrade_v2/data_exporters/child_1x_childspawn_1x_reduce.py"}},downstream_blocks:["child_1x_childspawn_1x_reduce"],executor_config:null,executor_type:"local_python",has_callback:!1,name:"replica",language:"python",retry_config:null,status:"executed",timeout:null,type:"data_exporter",upstream_blocks:["dynamic_spawn_2x","child_1x_spawn_1x"],uuid:"replica",callback_blocks:[],conditional_blocks:[],replicated_block:"child_1x_childspawn_1x_reduce",content:"@data_exporter\ndef export_data(*args, **kwargs):\n    output = []\n    for input_data in args:\n        if isinstance(input_data, list):\n            for data in input_data:\n                output.append(data)\n        else:\n            output.append(input_data)\n    \n    return output",outputs:[{sample_data:{columns:["dynamic child blocks"],rows:[[{}]]},shape:[1,1],type:"table",variable_uuid:"output_1",multi_output:!0}],metadata:{},tags:["dynamic","dynamic_child","replica"],pipelines:[{added_at:null,pipeline:{created_at:"2024-05-26 07:48:27.696425+00:00",description:null,name:"dynamic",tags:[],type:"python",uuid:"dynamic",repo_path:"memory_upgrade_v2"},updated_at:1718506200.356834}]},{all_upstream_blocks_executed:!1,color:null,configuration:{file_path:"memory_upgrade_v2/data_exporters/child_1x_childspawn_1x_reduce.py",file_source:{path:"memory_upgrade_v2/data_exporters/child_1x_childspawn_1x_reduce.py"}},downstream_blocks:[],executor_config:null,executor_type:"local_python",has_callback:!1,name:"child 1x childspawn 1x reduce",language:"python",retry_config:null,status:"updated",timeout:null,type:"data_exporter",upstream_blocks:["dynamic1","child_1x_spawn_1x","replica"],uuid:"child_1x_childspawn_1x_reduce",callback_blocks:[],conditional_blocks:[],content:"@data_exporter\ndef export_data(*args, **kwargs):\n    output = []\n    for input_data in args:\n        if isinstance(input_data, list):\n            for data in input_data:\n                output.append(data)\n        else:\n            output.append(input_data)\n    \n    return output",outputs:[{sample_data:{columns:["output"],rows:[[{}]]},shape:[1,1],type:"table",variable_uuid:"output_1",multi_output:!0}],metadata:{},tags:["dynamic_child"],pipelines:[{added_at:null,pipeline:{created_at:"2024-05-26 07:48:27.696425+00:00",description:null,name:"dynamic",tags:[],type:"python",uuid:"dynamic",repo_path:"memory_upgrade_v2"},updated_at:1718506200.356834}]}],callbacks:[],conditionals:[],widgets:[],extensions:{},updated_at:"2024-05-28T15:39:02.396763+00:00"},i=t(28598);function d(){var e=l()((function(){return Promise.all([t.e(341),t.e(1890)]).then(t.bind(t,31890))}),{ssr:!1,loadableGenerated:{webpack:function(){return[31890]}}});return(0,i.jsx)("div",{className:_().container,children:(0,i.jsxs)(o.Z,{autoColumns:"auto",height:"inherit",templateRows:"auto 1fr auto",width:"100%",children:[(0,i.jsx)("div",{}),(0,i.jsxs)(o.Z,{autoRows:"auto",height:"inherit",templateColumns:"auto 1fr",width:"100%",children:[(0,i.jsx)("div",{}),(0,i.jsx)(e,{blocks:c.blocks})]}),(0,i.jsx)("div",{})]})})}},53544:function(e){e.exports={container:"Main_container__NftHR",expanded:"Main_expanded__YV_Uv",collapsed:"Main_collapsed__f1HJ5"}}}]);