webpackJsonp([1],{"+c8h":function(t,e){},"2WOv":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-container",{staticStyle:{height:"768px","box-sizing":"border-box",border:"1px solid #eee"}},[a("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[a("el-menu",{attrs:{"default-openeds":["1","3"]}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),t._v("导航一")]),t._v(" "),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("分组一")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){t.$router.push("feature")}}},[t._v("脸部特征管理")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-2"},on:{click:function(e){t.$router.push("test")}}},[t._v("测试AI标注")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-3"},on:{click:function(e){t.$router.push("index")}}},[t._v("手工标注")])],2),t._v(" "),a("el-submenu",{attrs:{index:"1-4"}},[a("template",{slot:"title"},[t._v("选项4")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项4-1")])],2)],2),t._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),t._v("导航二")]),t._v(" "),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("分组一")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")])],2),t._v(" "),a("el-menu-item-group",{attrs:{title:"分组2"}},[a("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")])],1),t._v(" "),a("el-submenu",{attrs:{index:"2-4"}},[a("template",{slot:"title"},[t._v("选项4")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("选项4-1")])],2)],2),t._v(" "),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-setting"}),t._v("导航三")]),t._v(" "),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("分组一")]),t._v(" "),a("el-menu-item",{attrs:{index:"3-1"}},[t._v("选项1")]),t._v(" "),a("el-menu-item",{attrs:{index:"3-2"}},[t._v("选项2")])],2),t._v(" "),a("el-menu-item-group",{attrs:{title:"分组2"}},[a("el-menu-item",{attrs:{index:"3-3"}},[t._v("选项3")])],1),t._v(" "),a("el-submenu",{attrs:{index:"3-4"}},[a("template",{slot:"title"},[t._v("选项4")]),t._v(" "),a("el-menu-item",{attrs:{index:"3-4-1"}},[t._v("选项4-1")])],2)],2)],1)],1),t._v(" "),a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[t._v("查看")]),t._v(" "),a("el-dropdown-item",[t._v("新增")]),t._v(" "),a("el-dropdown-item",[t._v("删除")])],1)],1),t._v(" "),a("span",[t._v("王小虎")])],1),t._v(" "),a("el-main",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},r,!1,function(t){a("NJb4")},null,null).exports,s=a("/ocq"),o=a("Xxa5"),l=a.n(o),c=a("exGp"),u=a.n(c),d=a("mtWM"),p=a.n(d),f="http://manage.sharezdm.cn/";function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return p()({url:f+"photo/list",method:"get",params:{page_num:e,page_size:a,manual_label:t},withCredentials:!0})}function m(){return p()({url:f+"feature/list",method:"get",withCredentials:!0})}function v(t){return p()({url:f+"feature/feature_answer",method:"delete",data:{id:t},withCredentials:!0})}function _(t){return p()({url:f+"feature/addphotofeature",method:"post",data:t,withCredentials:!0})}function g(t){return p()({url:"http://diff.sharezdm.cn/index/analyzefacepro",method:"post",data:{image_url:t}})}function w(){return p()({url:"http://diff.sharezdm.cn/index/getuploadtoken",method:"get",withCredentials:!0})}function x(t){return-1!=t.indexOf("http")?t:"http://pc43w2wc6.bkt.clouddn.com/"+t}var b={name:"Index",data:function(){return{activeName:"first",labelData:[],notLabelData:[],labelTotal:20,notLabelTotal:20,qiniuUrl:x}},mounted:function(){this.init()},methods:{init:function(){var t=this;return u()(l.a.mark(function e(){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,t.labelData=a.data.data.rows,t.labelTotal=a.data.data.count,e.next=7,h(1);case 7:n=e.sent,t.notLabelData=n.data.data.rows,t.notLabelTotal=n.data.data.count;case 10:case"end":return e.stop()}},e,t)}))()},labelCurrentChange:function(t){var e=this;return u()(l.a.mark(function a(){var n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h(0,t,20);case 2:n=a.sent,e.labelData=n.data.data.rows,e.labelTotal=n.data.data.count;case 5:case"end":return a.stop()}},a,e)}))()},notLabelCurrentChange:function(t){var e=this;return u()(l.a.mark(function a(){var n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h(1,t,20);case 2:n=a.sent,e.notLabelData=n.data.data.rows,e.notLabelTotal=n.data.data.count;case 5:case"end":return a.stop()}},a,e)}))()},labelClick:function(t){console.log(t),this.$router.push({path:"/label",query:{id:t.id,user_id:t.user_id,file_url:t.file_url}})},updateLabelClick:function(t){console.log(t),this.$router.push({path:"/update_label",query:{id:t.id,user_id:t.user_id,file_url:t.file_url}})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"未标注照片",name:"first"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.labelData}},[a("el-table-column",{attrs:{label:"照片",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{style:{backgroundImage:"url("+t.qiniuUrl(e.row.file_url)+")",backgroundSize:"cover",width:"75px",height:"75px"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"照片id",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"上传时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.labelClick(e.row)}}},[t._v("标注")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"","page-size":20,layout:"prev, pager, next",total:t.labelTotal},on:{"current-change":t.labelCurrentChange}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"已标注照片",name:"second"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.notLabelData}},[a("el-table-column",{attrs:{label:"照片",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{style:{backgroundImage:"url("+t.qiniuUrl(e.row.file_url)+")",backgroundSize:"cover",width:"75px",height:"75px"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"照片id",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"上传时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.updateLabelClick(e.row)}}},[t._v("更改标注")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"","page-size":20,layout:"prev, pager, next",total:t.notLabelTotal},on:{"current-change":t.notLabelCurrentChange}})],1)],1)},staticRenderFns:[]};var k=a("VU/8")(b,y,!1,function(t){a("oqEy")},"data-v-2184ebd4",null).exports,C=a("mvHQ"),U=a.n(C),$={data:function(){return{circles:[[143,198],[154,168]]}},props:{photoId:{type:Number},fileUrl:{type:String,default:"http://os6zbdtt2.bkt.clouddn.com/Fmn93Hl1NzY2A9dP-FgBmrNzRxMa?nsukey=SoEyfKwopX0ZH%2FuoHP1Ua0s6xaa4DL6iW19AcUv6O%2Boenz4C25HDtZSIlkpHXh8NSvsi1fjAEGrCYrW%2BIpwRz%2FlYmzj53JVNt8iIgXERi2XX6VG5hWn8Mx75U%2F2qHQcvN9TJGT7y%2BXsjhLvjHAMP6vReveDWDdxKD9e46hk6rsuZUMU%2BznUPpAa8txpzGarQNoG2a%2FfZCvU4yg0LhZQBAg%3D%3D"}},mounted:function(){this.init()},methods:{addPonit:function(){var t=this;return u()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.circles.map(function(t){return[t.x,t.y]}),e.next=3,n=U()(a),r=t.photoId,p()({url:f+"photo/point_info",method:"post",data:{point_info:n,photo_id:r},withCredentials:!0});case 3:t.$message({message:"更新成功",type:"success"});case 4:case"end":return e.stop()}var n,r},e,t)}))()},formDataCircles:function(){if(this.circles=this.circles.map(function(t){return{x:t[0],y:t[1],isSelected:!1}}),82!==this.circles.length){var t=this.circles[28],e=this.circles[29],a={x:e.x-(e.y-t.y),y:e.y,isSelected:!1},n={x:e.x+(e.y-t.y),y:e.y,isSelected:!1};this.circles.push(a),this.circles.push(n)}},close:function(){this.$emit("close")},init:function(){var t=this;return u()(l.a.mark(function e(){var a,n,r,i,s,o,c,u,d,h,m,v,_;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _=function(t){for(var e=t.pageX-s.offsetLeft,a=t.pageY-s.offsetTop,r=n.length-1;r>=0;r--){var i=n[r];if(Math.sqrt(Math.pow(i.x-e,2)+Math.pow(i.y-a,2))<=u)return null!=d&&(d.isSelected=!1),d=i,i.isSelected=!0,v(h),s.onmousemove=function(t){var e=t.clientX-s.offsetLeft,a=t.clientY-s.offsetTop;null!=d&&(d.isSelected=!1),d=i,i.isSelected=!0,i.x=e,i.y=a,v(h)},void(s.onmouseup=function(){s.onmousemove=null,s.onmouseup=null,console.log(n)})}},v=function(t){o.clearRect(0,0,s.width,s.height),o.drawImage(t,0,0,t.width,t.height);for(var e=0;e<n.length;e++){var a=n[e],r=m[0];e<=68&&(r=m[1]),e>=n.length-2&&(r=m[2]),e>68?(u=3,o.font="12px blod",o.fillStyle="blue",o.fillText(e,a.x+8,a.y-6)):u=1.5,o.globalAlpha=.85,o.beginPath(),o.arc(a.x,a.y,u,0,2*Math.PI),a.isSelected?(o.strokeStyle=r,o.lineWidth=3,o.stroke()):(o.fillStyle=r,o.fill())}},e.next=4,l=t.photoId,p()({url:f+"photo/point_info",method:"get",params:{photo_id:l},withCredentials:!0});case 4:(a=e.sent).data.data.label_point_info?t.circles=JSON.parse(a.data.data.label_point_info):t.circles=JSON.parse(a.data.data.point_info),t.formDataCircles(),n=t.circles,r=t,i=t.fileUrl,s=document.createElement("canvas"),o=s.getContext("2d"),c=new Image,u=1.5,d=void 0,h=void 0,m=["#409EFF","white","green"],s.onmousedown=_,c.onload=function(t){s.width=this.width,s.height=this.height,v(h=this),r.$refs.container.appendChild(s)},c.src=i;case 20:case"end":return e.stop()}var l},e,t)}))()}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"container",staticClass:"wrapper"},[e("div",{staticClass:"btnBox"},[e("el-button",{attrs:{type:"primary"},on:{click:this.addPonit}},[this._v("更新")]),this._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:this.close}},[this._v("关闭")])],1)])},staticRenderFns:[]};var q=a("VU/8")($,D,!1,function(t){a("hUkF")},"data-v-3897227c",null).exports,S={name:"Label",data:function(){return{answerData:[],qiniuUrl:x,showPointBox:!1}},methods:{handleClick:function(t,e){console.log(t,e)},next:function(){var t=this;return u()(l.a.mark(function e(){var a,n,r,i,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!0,n={},t.answerData.forEach(function(t,e){n[t.info.key]={},t.list.forEach(function(e,r){e.answer||(a=!1);var i=e.item.id.toString();n[t.info.key][i]=e.answer})}),a){e.next=6;break}return t.$message.error("请将所有项目选择完，不能有不选的"),e.abrupt("return");case 6:return r={user_id:t.$route.query.user_id,photo_id:t.$route.query.id,base_feature:n},console.log(r),e.next=10,_(r);case 10:return e.next=12,h();case 12:i=e.sent,(s=i.data.data.rows[0])||t.$message({message:"没有更多了",type:"warning"}),t.$router.push({path:"/label",query:{id:s.id,user_id:s.user_id,file_url:s.file_url}}),window.location.reload();case 18:case"end":return e.stop()}},e,t)}))()},init:function(){var t=this;return u()(l.a.mark(function e(){var a,n,r,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:for(r in a=e.sent,n=[],a.data.data){for(i in a.data.data[r].list)a.data.data[r].list[i].answer="";n.push(a.data.data[r])}console.log(n),t.answerData=n;case 7:case"end":return e.stop()}},e,t)}))()}},components:{NosePoit:q},mounted:function(){this.init()}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"photo-box"},[a("div",{staticClass:"img",style:{backgroundImage:"url("+t.qiniuUrl(t.$route.query.file_url)+")"},on:{click:function(e){t.showPointBox=!0}}})]),t._v(" "),a("div",{staticClass:"label-box"},[t._l(t.answerData,function(e){return a("div",[a("div",[a("span",{staticClass:"group-name"},[t._v(t._s(e.info.name))]),t._v(" "),t._l(e.list,function(e){return a("div",{staticClass:"feature-box"},[a("div",{staticClass:"feature-name"},[t._v(t._s(e.item.name))]),t._v(" "),a("div",{staticClass:"feature-list"},t._l(e.answer_list,function(n,r){return a("el-radio",{key:r,attrs:{label:n.id},model:{value:e.answer,callback:function(a){t.$set(e,"answer",a)},expression:"feature.answer"}},[t._v(t._s(n.name))])}))])})],2)])}),t._v(" "),a("div",{staticClass:"feature-box"},[a("el-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("下一个")])],1)],2),t._v(" "),t.showPointBox?a("div",{staticClass:"point-box"},[a("nose-poit",{attrs:{fileUrl:t.qiniuUrl(t.$route.query.file_url),photoId:parseInt(t.$route.query.id)},on:{close:function(e){t.showPointBox=!1}}})],1):t._e()])},staticRenderFns:[]};var I=a("VU/8")(S,z,!1,function(t){a("2WOv")},"data-v-8f7eb5e4",null).exports,F=a("woOf"),L=a.n(F),T=a("fZjL"),P=a.n(T),B={name:"Label",data:function(){return{answerData:[],qiniuUrl:x,showPointBox:!1}},methods:{handleClick:function(t,e){console.log(t,e)},next:function(){var t=this;return u()(l.a.mark(function e(){var a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!0,n={},t.answerData.forEach(function(t,e){n[t.info.key]={},t.list.forEach(function(e,r){e.answer||(a=!1);var i=e.item.id.toString();n[t.info.key][i]=e.answer})}),a){e.next=6;break}return t.$message.error("请将所有项目选择完，不能有不选的"),e.abrupt("return");case 6:return r={user_id:t.$route.query.user_id,photo_id:t.$route.query.id,base_feature:n},e.next=9,_(r);case 9:t.$message({message:"更改完成",type:"success"});case 10:case"end":return e.stop()}},e,t)}))()},init:function(){var t=this;return u()(l.a.mark(function e(){var a,n,r,i,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o=t.$route.query.id,p()({url:f+"feature/photo_feature",method:"get",params:{photo_id:o},withCredentials:!0});case 2:return a=e.sent,n=[],e.next=6,m();case 6:if(r=e.sent,a.data.data)!function(){var e={};P()(a.data.data.base_feature).forEach(function(t){e=L()({},e,a.data.data.base_feature[t])});var i=function(t){var a=function(a){P()(e).forEach(function(n){r.data.data[t].list[a].item.id!==parseInt(n)||(r.data.data[t].list[a].answer=e[n])})};for(var i in r.data.data[t].list)a(i);n.push(r.data.data[t])};for(var s in r.data.data)i(s);t.answerData=n}();else{for(i in r.data.data){for(s in r.data.data[i].list)r.data.data[i].list[s].answer="";n.push(r.data.data[i])}console.log(n),t.answerData=n}case 8:case"end":return e.stop()}var o},e,t)}))()}},mounted:function(){this.init()},components:{NosePoit:q}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"photo-box"},[a("div",{staticClass:"img",style:{backgroundImage:"url("+t.qiniuUrl(t.$route.query.file_url)+")"},on:{click:function(e){t.showPointBox=!0}}})]),t._v(" "),a("div",{staticClass:"label-box"},[t._l(t.answerData,function(e){return a("div",[a("div",[a("span",{staticClass:"group-name"},[t._v(t._s(e.info.name))]),t._v(" "),t._l(e.list,function(e){return a("div",{staticClass:"feature-box"},[a("div",{staticClass:"feature-name"},[t._v(t._s(e.item.name))]),t._v(" "),a("div",{staticClass:"feature-list"},t._l(e.answer_list,function(n,r){return a("el-radio",{key:r,attrs:{label:n.id},model:{value:e.answer,callback:function(a){t.$set(e,"answer",a)},expression:"feature.answer"}},[t._v(t._s(n.name))])}))])})],2)])}),t._v(" "),a("div",{staticClass:"feature-box"},[a("el-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("更新")])],1)],2),t._v(" "),t.showPointBox?a("div",{staticClass:"point-box"},[a("nose-poit",{attrs:{fileUrl:t.qiniuUrl(t.$route.query.file_url),photoId:parseInt(t.$route.query.id)},on:{close:function(e){t.showPointBox=!1}}})],1):t._e()])},staticRenderFns:[]};var E=a("VU/8")(B,R,!1,function(t){a("ZIo8")},"data-v-5436f74e",null).exports,N={name:"Index",data:function(){return{treeData:[],defaultProps:{children:"children",label:"label"}}},mounted:function(){this.init()},methods:{delOpen:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(u()(l.a.mark(function a(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(t);case 2:e.init(),e.$message({type:"success",message:"删除成功!"});case 4:case"end":return a.stop()}},a,e)}))).catch(function(){e.$message({type:"info",message:"已取消删除"})})},open:function(t){var e,a=this;this.$prompt("请输入名字","添加",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((e=u()(l.a.mark(function e(n){var r=n.value;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t,i=r,p()({url:f+"feature/feature_answer",method:"post",data:{feature_item_id:n,name:i},withCredentials:!0});case 2:a.init(),a.$message({type:"success",message:"添加成功!"});case 4:case"end":return e.stop()}var n,i},e,a)})),function(t){return e.apply(this,arguments)})).catch(function(){a.$message({type:"info",message:"取消输入"})})},openAddFeature:function(t){var e,a=this;this.$prompt("请输入名字","添加",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((e=u()(l.a.mark(function e(n){var r=n.value;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,addFeature(t,r);case 2:case"end":return e.stop()}},e,a)})),function(t){return e.apply(this,arguments)})).catch(function(){a.$message({type:"info",message:"取消输入"})})},renderContent:function(t,e){var a=this,n=e.node,r=e.data;e.store;return t("span",{class:"custom-tree-node"},[t("span",[n.label]),t("span",[2==n.level?t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){2==n.level&&a.open(r.item.id)}}},["添加"]):null,3==n.level?t("el-button",{attrs:{size:"mini",type:"text"},on:{click:u()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.delOpen(r.id);case 1:case"end":return t.stop()}},t,a)}))}},["删除"]):null])])},handleNodeClick:function(t){console.log(t)},init:function(){var t=this;return u()(l.a.mark(function e(){var a,n,r,i,s,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:for(r in a=e.sent,n=[],a.data.data){for(s in(i=a.data.data[r]).label=i.info.name,i.list){for(o in i.list[s].label=i.list[s].item.name,i.list[s].answer_list)i.list[s].answer_list[o].label=i.list[s].answer_list[o].name;i.list[s].children=i.list[s].answer_list}i.children=i.list,n.push(i)}console.log(n),t.treeData=n;case 7:case"end":return e.stop()}},e,t)}))()},handleClick:function(t){this.$router.push({path:"/label",query:{id:t.id}})}}},H={render:function(){var t=this.$createElement;return(this._self._c||t)("el-tree",{attrs:{data:this.treeData,props:this.defaultProps,accordion:"","render-content":this.renderContent},on:{"node-click":this.handleNodeClick}})},staticRenderFns:[]};var O=a("VU/8")(N,H,!1,function(t){a("OhVj")},"data-v-5afcaebc",null).exports,A={data:function(){return{imageUrl:"",originalUrl:"",width:"",height:"",originalFile:"",uploadTime:"",analyzeFaceTime:"",url:"",loading:!1}},methods:{uploadBase64:function(t){var e=this;return u()(l.a.mark(function a(){var n,r,i,s,o,c,u,d,p,f;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e,r=new Date,i=t.split(","),s=i[0].match(/:(.*?);/)[1],o=s.length,c=parseInt(o+13),u=(u=t.substring(c)).replace(/^.*?,/,""),a.next=8,w();case 8:d=(d=a.sent).data.data.token,p="http://upload.qiniup.com/putb64/-1",(f=new XMLHttpRequest).onreadystatechange=function(){if(4==f.readyState){var t=new Date-r;n.uploadTime=t;var e="http://pc43w2wc6.bkt.clouddn.com/"+JSON.parse(f.responseText).hash;n.url=e,n.analyzeFace()}},f.open("POST",p,!0),f.setRequestHeader("Content-Type","application/octet-stream"),f.setRequestHeader("Authorization","UpToken "+d),f.send(u);case 17:case"end":return a.stop()}},a,e)}))()},upload:function(t){var e=this;return u()(l.a.mark(function a(){var n,r,i,s,o,c,u,d;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return");case 2:return e.loading=!0,e.imageUrl=URL.createObjectURL(t),e.getWH(),a.prev=5,n=new Date,a.next=9,w();case 9:return r=(r=a.sent).data.data.token,(i=new FormData).append("token",r),i.append("file",t),a.next=16,l=i,p()({url:"http://upload.qiniup.com",method:"post",data:l});case 16:return s=a.sent,o=s.data.hash,c="http://pc43w2wc6.bkt.clouddn.com/"+o,e.url=c,u=new Date,d=u-n,e.uploadTime=d,a.next=25,e.analyzeFace();case 25:a.next=31;break;case 27:a.prev=27,a.t0=a.catch(5),console.log(a.t0),e.loading=!1;case 31:case"end":return a.stop()}var l},a,e,[[5,27]])}))()},analyzeFace:function(){var t=this;return u()(l.a.mark(function e(){var a,n,r,i,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.url){e.next=3;break}return e.abrupt("return");case 3:return n=new Date,e.next=6,g(a);case 6:r=e.sent,i=new Date,s=i-n,t.analyzeFaceTime=s,t.loading=!1,t.drawPoint(r.data.data.faceInfo.landmark);case 12:case"end":return e.stop()}},e,t)}))()},getWH:function(){var t=this,e=new Image;e.onload=function(e){t.width=this.width,t.height=this.height},e.src=this.imageUrl},selectImg:function(t){var e=t.target.files[0];this.imageUrl=URL.createObjectURL(e),this.originalUrl=URL.createObjectURL(e),this.originalFile=e,this.getWH()},zoom:function(t){this.loading=!0;var e=this,a=document.createElement("canvas"),n=a.getContext("2d"),r=new Image;r.onload=function(r){var i=this.width/t,s=this.height/i;a.width=t,a.height=s,n.drawImage(this,0,0,t,s);var o=a.toDataURL("image/png");e.imageUrl=o,e.getWH(),e.uploadBase64(o)},r.src=this.originalUrl},drawPoint:function(t){var e=this,a=document.createElement("canvas"),n=a.getContext("2d"),r=new Image;r.onload=function(r){a.width=this.width,a.height=this.height,n.drawImage(this,0,0,this.width,this.height),t.forEach(function(t,e){var a=t[0],r=t[1],i=2*Math.PI;n.beginPath(),n.fillStyle="#409EFF",n.arc(a,r,3,0,i),n.fill()});var i=a.toDataURL("image/png");e.imageUrl=i},r.src=this.imageUrl}}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("div",{staticClass:"top"},[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:t.imageUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"info"},[a("p",[t._v("当前宽度: "+t._s(this.width)+"px")]),t._v(" "),a("p",[t._v("当前高度: "+t._s(this.height)+"px")]),t._v(" "),a("p",[t._v("上传时间: "+t._s(this.uploadTime)+"ms")]),t._v(" "),a("p",[t._v("识别时间: "+t._s(this.analyzeFaceTime)+"ms")])])]),t._v(" "),a("div",{staticClass:"btnBox"},[a("input",{attrs:{name:"file",type:"file",accept:"image/*"},on:{change:t.selectImg}}),t._v(" "),a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.upload(t.originalFile)}}},[t._v("原图识别")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.zoom(1024)}}},[t._v("压缩1024识别")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.zoom(512)}}},[t._v("压缩512识别")])],1)],1)])},staticRenderFns:[]};var M=a("VU/8")(A,W,!1,function(t){a("+c8h")},"data-v-7bd112ec",null).exports;n.default.use(s.a);var j=new s.a({routes:[{path:"/",redirect:"/index"},{path:"/index",name:"Index",component:k},{path:"/label",name:"Label",component:I},{path:"/update_label",name:"UpdateLabel",component:E},{path:"/feature",name:"Feature",component:O},{path:"/test",name:"TestAiLabelFace",component:M},{path:"/nose_point",name:"NosePoint",component:q}]}),V=a("zL8q"),X=a.n(V);a("tvR6");n.default.config.productionTip=!1,n.default.use(X.a),new n.default({el:"#app",router:j,components:{App:i},template:"<App/>"})},NJb4:function(t,e){},OhVj:function(t,e){},ZIo8:function(t,e){},hUkF:function(t,e){},oqEy:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f54e623c7f682c3c9899.js.map