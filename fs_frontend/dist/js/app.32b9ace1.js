(function(e){function t(t){for(var r,s,i=t[0],u=t[1],l=t[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0061":function(e,t,n){},"0d24":function(e,t,n){"use strict";var r=n("0061"),a=n.n(r);a.a},"141a":function(e,t,n){},"3b80":function(e,t,n){"use strict";var r=n("ba66"),a=n.n(r);a.a},"542e":function(e,t,n){"use strict";var r=n("141a"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s={name:"app"},i=s,u=n("2877"),l=Object(u["a"])(i,a,o,!1,null,"ade499e6",null),c=l.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_container"},[n("div",{staticClass:"login_box"},[e._m(0),n("el-form",{ref:"loginFormRef",staticClass:"login_form",attrs:{model:e.loginForm,rules:e.loginFormRules}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{"prefix-icon":"el-icon-user-solid"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{"prefix-icon":"el-icon-s-goods",type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("el-form-item",{staticClass:"btns"},[n("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("Login")]),n("el-button",{attrs:{type:"warning"},on:{click:e.resetLoginForm}},[e._v("Reset")])],1)],1)],1)])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"avatar_box"},[r("img",{attrs:{src:n("cf05"),alt:""}})])}],p={name:"Login",data:function(){return{loginForm:{username:"admin",password:"123456"},loginFormRules:{username:[{required:!0,message:"Please input username",trigger:"blur"},{min:5,max:10,message:"Length should be 5 to 10",trigger:"blur"}],password:[{required:!0,message:"Please input password",trigger:"blur"},{min:6,max:20,message:"Length should be 6 to 20",trigger:"blur"}]}}},methods:{resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},login:function(){var e=this;this.$refs.loginFormRef.validate((function(t){if(!t)return null;e.axios.post("login",e.loginForm).then((function(t){window.sessionStorage.setItem("token",t.data.token),e.$router.push("/home")})).catch((function(t){if(200!==t.response.data.code)return e.$message.error(t.response.data.status)}))}))}}},g=p,h=(n("0d24"),Object(u["a"])(g,d,m,!1,null,"20840882",null)),b=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"home_container"},[n("el-header",[n("Header")],1),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("Navigation")],1),n("el-main")],1)],1)},_=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation_container"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"active-text-color":"#ffd04b"}},e._l(e.menuList,(function(t){return n("el-submenu",{key:t.id,attrs:{index:t.id+""}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",[e._v(e._s(t.name))])]),e._l(t.children,(function(t){return n("el-menu-item",{key:t.id,attrs:{index:t.id+""}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-document"}),n("span",[e._v(e._s(t.name))])])],2)}))],2)})),1)],1)},x=[],y={name:"Navigation",created:function(){this.getMenuList()},data:function(){return{menuList:[]}},methods:{getMenuList:function(){var e=this;this.axios.get("menu_list").then((function(t){e.menuList=t.data})).catch((function(t){if(200!==t.response.data.code)return e.$message.error(t.response.data.status)}))}}},F=y,$=(n("542e"),Object(u["a"])(F,w,x,!1,null,"7513e5dc",null)),j=$.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header_container"},[e._m(0),n("el-button",{attrs:{type:"info"},on:{click:e.logout}},[e._v("Logout")])],1)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{src:"",alt:""}}),n("span",[e._v("Test tool platform")])])}],L={name:"Header",methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")}}},C=L,P=(n("3b80"),Object(u["a"])(C,O,k,!1,null,"46878f04",null)),S=P.exports,E={name:"home",components:{Navigation:j,Header:S}},R=E,M=(n("6fd2"),Object(u["a"])(R,v,_,!1,null,"3757c8ae",null)),T=M.exports;r["default"].use(f["a"]);var q=[{path:"/",redirect:"/login"},{path:"/login",component:b},{path:"/home",component:T}],H=new f["a"]({mode:"history",base:"/",routes:q});H.beforeEach((function(e,t,n){if("/login"===e.path)return n();var r=window.sessionStorage.getItem("token");if(!r)return n("/login");n()}));var I=H,N=n("2f62");r["default"].use(N["a"]);var J=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=n("bc3a"),A=n.n(z),U=n("a7fe"),B=n.n(U),D=(n("0fb7"),n("450d"),n("f529")),G=n.n(D),K=(n("fd71"),n("a447")),Q=n.n(K),V=(n("34db"),n("3803")),W=n.n(V),X=(n("8bd8"),n("4cb2")),Y=n.n(X),Z=(n("ce18"),n("f58e")),ee=n.n(Z),te=(n("4ca3"),n("443e")),ne=n.n(te),re=(n("de31"),n("c69e")),ae=n.n(re),oe=(n("a769"),n("5cc3")),se=n.n(oe),ie=(n("bdc7"),n("aa2f")),ue=n.n(ie),le=(n("a673"),n("7b31")),ce=n.n(le),fe=(n("adec"),n("3d2d")),de=n.n(fe),me=(n("10cb"),n("f3ad")),pe=n.n(me),ge=(n("eca7"),n("3787")),he=n.n(ge),be=(n("425f"),n("4105")),ve=n.n(be),_e=(n("1951"),n("eedf")),we=n.n(_e),xe=n("b2d6"),ye=n.n(xe),Fe=n("4897"),$e=n.n(Fe);$e.a.use(ye.a),r["default"].use(we.a),r["default"].use(ve.a),r["default"].use(he.a),r["default"].use(pe.a),r["default"].use(de.a),r["default"].use(ce.a),r["default"].use(ue.a),r["default"].use(se.a),r["default"].use(ae.a),r["default"].use(ne.a),r["default"].use(ee.a),r["default"].use(Y.a),r["default"].use(W.a),r["default"].use(Q.a),r["default"].prototype.$message=G.a;n("aede");r["default"].config.productionTip=!1,r["default"].use(B.a,A.a),A.a.defaults.baseURL="http://127.0.0.1:8000",A.a.interceptors.request.use((function(e){return e.headers.Authorization=window.sessionStorage.getItem("token"),e}),(function(e){return Promise.reject(e)})),A.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),new r["default"]({router:I,store:J,render:function(e){return e(c)}}).$mount("#app")},"5ccf":function(e,t,n){},"6fd2":function(e,t,n){"use strict";var r=n("5ccf"),a=n.n(r);a.a},aede:function(e,t,n){},ba66:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.32b9ace1.js.map