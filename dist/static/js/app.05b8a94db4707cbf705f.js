webpackJsonp([1],{CskP:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("el-container",{staticStyle:{height:"768px","box-sizing":"border-box",border:"1px solid #eee"}},[a("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[a("el-menu",{attrs:{"default-openeds":["1","3"]}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),e._v("导航一")]),e._v(" "),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("分组一")]),e._v(" "),a("el-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),e._v(" "),a("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],2),e._v(" "),a("el-menu-item-group",{attrs:{title:"分组2"}},[a("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),e._v(" "),a("el-submenu",{attrs:{index:"1-4"}},[a("template",{slot:"title"},[e._v("选项4")]),e._v(" "),a("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项4-1")])],2)],2),e._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),e._v("导航二")]),e._v(" "),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("分组一")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")])],2),e._v(" "),a("el-menu-item-group",{attrs:{title:"分组2"}},[a("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],1),e._v(" "),a("el-submenu",{attrs:{index:"2-4"}},[a("template",{slot:"title"},[e._v("选项4")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项4-1")])],2)],2),e._v(" "),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-setting"}),e._v("导航三")]),e._v(" "),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("分组一")]),e._v(" "),a("el-menu-item",{attrs:{index:"3-1"}},[e._v("选项1")]),e._v(" "),a("el-menu-item",{attrs:{index:"3-2"}},[e._v("选项2")])],2),e._v(" "),a("el-menu-item-group",{attrs:{title:"分组2"}},[a("el-menu-item",{attrs:{index:"3-3"}},[e._v("选项3")])],1),e._v(" "),a("el-submenu",{attrs:{index:"3-4"}},[a("template",{slot:"title"},[e._v("选项4")]),e._v(" "),a("el-menu-item",{attrs:{index:"3-4-1"}},[e._v("选项4-1")])],2)],2)],1)],1),e._v(" "),a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("查看")]),e._v(" "),a("el-dropdown-item",[e._v("新增")]),e._v(" "),a("el-dropdown-item",[e._v("删除")])],1)],1),e._v(" "),a("span",[e._v("王小虎")])],1),e._v(" "),a("el-main",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")({name:"App"},n,!1,function(e){a("UA1Y")},null,null).exports,r=a("/ocq"),o=a("Xxa5"),s=a.n(o),d=a("exGp"),c=a.n(d),u=a("mtWM"),v=a.n(u),m="http://localhost:3000/";function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return v()({url:m+"photo",method:"get",params:{page_num:t,page_size:a,is_label:e},withCredentials:!0})}function _(e){return v()({url:"http://diff.sharezdm.cn/index/analyzefacepro",method:"post",data:{image_url:e}})}function f(){return v()({url:"http://diff.sharezdm.cn/index/getuploadtoken",method:"get"})}var h={name:"Index",data:function(){return{activeName:"first",labelData:[],notLabelData:[]}},mounted:function(){this.init()},methods:{init:function(){var e=this;return c()(s.a.mark(function t(){var a,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:return a=t.sent,e.labelData=a.data.data.list,t.next=6,p(1);case 6:i=t.sent,e.notLabelData=i.data.data.list;case 8:case"end":return t.stop()}},t,e)}))()},handleClick:function(e,t){console.log(e,t),this.$router.push("/label")}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"未标注照片",name:"first"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.labelData}},[a("el-table-column",{attrs:{label:"照片",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("div",{style:{backgroundImage:"url("+e.row.file_url+")",backgroundSize:"cover",width:"75px",height:"75px"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"照片id",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"上传时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row)}}},[e._v("标注")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"已标注照片",name:"second"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.notLabelData}},[a("el-table-column",{attrs:{label:"照片",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("div",{style:{backgroundImage:"url("+e.row.file_url+")",backgroundSize:"cover",width:"75px",height:"75px"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"照片id",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"上传时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row)}}},[e._v("更改标注")])]}}])})],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(h,b,!1,function(e){a("QFDz")},"data-v-5ef68af8",null).exports,x={name:"Label",data:function(){return{radio:"1"}},methods:{handleClick:function(e,t){console.log(e,t)}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),e._v(" "),a("div",{staticClass:"label-box"},[a("div",{staticClass:"feature-box"},[a("div",{staticClass:"feature-name"},[e._v("脸型")]),e._v(" "),a("div",{staticClass:"feature-list"},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")])],1)]),e._v(" "),a("div",{staticClass:"feature-box"},[a("div",{staticClass:"feature-name"},[e._v("脸型")]),e._v(" "),a("div",{staticClass:"feature-list"},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")])],1)]),e._v(" "),a("div",{staticClass:"feature-box"},[a("div",{staticClass:"feature-name"},[e._v("脸型")]),e._v(" "),a("div",{staticClass:"feature-list"},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")])],1)]),e._v(" "),a("div",{staticClass:"feature-box"},[a("div",{staticClass:"feature-name"},[e._v("脸型")]),e._v(" "),a("div",{staticClass:"feature-list"},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")])],1)]),a("div",{staticClass:"feature-box"},[a("div",{staticClass:"feature-name"},[e._v("脸型")]),e._v(" "),a("div",{staticClass:"feature-list"},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("备选项")])],1)]),e._v(" "),a("div",{staticClass:"feature-box"},[a("el-button",{attrs:{type:"primary"}},[e._v("下一个")]),e._v(" "),a("el-button",{attrs:{type:"danger"}},[e._v("跳过")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"photo-box"},[t("div",{staticClass:"img"})])}]};var k=a("VU/8")(x,w,!1,function(e){a("CskP")},"data-v-0c3cc187",null).exports,C={data:function(){return{imageUrl:"",originalUrl:"",width:"",height:"",originalFile:"",uploadTime:"",analyzeFaceTime:"",url:"",loading:!1}},methods:{uploadBase64:function(e){var t=this;return c()(s.a.mark(function a(){var i,n,l,r,o,d,c,u,v,m;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=t,n=new Date,l=e.split(","),r=l[0].match(/:(.*?);/)[1],o=r.length,d=parseInt(o+13),c=(c=e.substring(d)).replace(/^.*?,/,""),a.next=8,f();case 8:u=(u=a.sent).data.data.token,v="http://upload.qiniup.com/putb64/-1",(m=new XMLHttpRequest).onreadystatechange=function(){if(4==m.readyState){var e=new Date-n;i.uploadTime=e;var t="http://os6zbdtt2.bkt.clouddn.com/"+JSON.parse(m.responseText).hash;i.url=t,i.analyzeFace()}},m.open("POST",v,!0),m.setRequestHeader("Content-Type","application/octet-stream"),m.setRequestHeader("Authorization","UpToken "+u),m.send(c);case 17:case"end":return a.stop()}},a,t)}))()},upload:function(e){var t=this;return c()(s.a.mark(function a(){var i,n,l,r,o,d,c,u;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:return t.loading=!0,t.imageUrl=URL.createObjectURL(e),t.getWH(),a.prev=5,i=new Date,a.next=9,f();case 9:return n=(n=a.sent).data.data.token,(l=new FormData).append("token",n),l.append("file",e),a.next=16,s=l,v()({url:"http://upload.qiniup.com",method:"post",data:s});case 16:return r=a.sent,o=r.data.hash,d="http://os6zbdtt2.bkt.clouddn.com/"+o,t.url=d,c=new Date,u=c-i,t.uploadTime=u,a.next=25,t.analyzeFace();case 25:a.next=31;break;case 27:a.prev=27,a.t0=a.catch(5),console.log(a.t0),t.loading=!1;case 31:case"end":return a.stop()}var s},a,t,[[5,27]])}))()},analyzeFace:function(){var e=this;return c()(s.a.mark(function t(){var a,i,n,l,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.url){t.next=3;break}return t.abrupt("return");case 3:return i=new Date,t.next=6,_(a);case 6:n=t.sent,l=new Date,r=l-i,e.analyzeFaceTime=r,e.loading=!1,e.drawPoint(n.data.data.faceInfo.landmark);case 12:case"end":return t.stop()}},t,e)}))()},getWH:function(){var e=this,t=new Image;t.onload=function(t){e.width=this.width,e.height=this.height},t.src=this.imageUrl},selectImg:function(e){var t=e.target.files[0];this.imageUrl=URL.createObjectURL(t),this.originalUrl=URL.createObjectURL(t),this.originalFile=t,this.getWH()},zoom:function(e){this.loading=!0;var t=this,a=document.createElement("canvas"),i=a.getContext("2d"),n=new Image;n.onload=function(n){var l=this.width/e,r=this.height/l;a.width=e,a.height=r,i.drawImage(this,0,0,e,r);var o=a.toDataURL("image/png");t.imageUrl=o,t.getWH(),t.uploadBase64(o)},n.src=this.originalUrl},drawPoint:function(e){var t=this,a=document.createElement("canvas"),i=a.getContext("2d"),n=new Image;n.onload=function(n){a.width=this.width,a.height=this.height,i.drawImage(this,0,0,this.width,this.height),e.forEach(function(e,t){var a=e[0],n=e[1],l=2*Math.PI;i.beginPath(),i.fillStyle="#409EFF",i.arc(a,n,3,0,l),i.fill()});var l=a.toDataURL("image/png");t.imageUrl=l},n.src=this.imageUrl}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("div",{staticClass:"top"},[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:e.imageUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"info"},[a("p",[e._v("当前宽度: "+e._s(this.width)+"px")]),e._v(" "),a("p",[e._v("当前高度: "+e._s(this.height)+"px")]),e._v(" "),a("p",[e._v("上传时间: "+e._s(this.uploadTime)+"ms")]),e._v(" "),a("p",[e._v("识别时间: "+e._s(this.analyzeFaceTime)+"ms")])])]),e._v(" "),a("div",{staticClass:"btnBox"},[a("input",{attrs:{name:"file",type:"file",accept:"image/*"},on:{change:e.selectImg}}),e._v(" "),a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.upload(e.originalFile)}}},[e._v("原图识别")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.zoom(1024)}}},[e._v("压缩1024识别")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.zoom(512)}}},[e._v("压缩512识别")])],1)],1)])},staticRenderFns:[]};var U=a("VU/8")(C,y,!1,function(e){a("uFHV")},"data-v-2e201816",null).exports;i.default.use(r.a);var z=new r.a({routes:[{path:"/",redirect:"/index"},{path:"/index",name:"Index",component:g},{path:"/label",name:"Label",component:k},{path:"/test",name:"TestAiLabelFace",component:U}]}),F=a("zL8q"),D=a.n(F);a("tvR6");i.default.config.productionTip=!1,i.default.use(D.a),new i.default({el:"#app",router:z,components:{App:l},template:"<App/>"})},QFDz:function(e,t){},UA1Y:function(e,t){},tvR6:function(e,t){},uFHV:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.05b8a94db4707cbf705f.js.map