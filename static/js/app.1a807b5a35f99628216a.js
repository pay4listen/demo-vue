webpackJsonp([1],{Bv0f:function(t,a,e){t.exports=e.p+"static/img/iphone7.ba9f781.jpg"},JFQ1:function(t,a){},K8x4:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),e("div",{staticClass:"main-panel"},[e("router-view"),t._v(" "),e("footer",{staticClass:"footer"},[e("div",{staticClass:"container-fluid"},[e("nav",{staticClass:"pull-left"},[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"homeComponent"}}},[t._v("About us")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),e("div",{staticClass:"copyright pull-right"},[t._v("\n            Intellecture to belonged to Gamelab Technology\n          ")])])])],1)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"logo"},[e("a",{staticClass:"simple-text logo-mini"},[e("div",{staticClass:"logo-img"},[e("img",{attrs:{src:"",alt:""}})])]),t._v(" "),e("a",{staticClass:"simple-text logo-normal",attrs:{href:"https://www.creative-tim.com"}},[t._v("Game Lab")])]),t._v(" "),e("div",{staticClass:"sidebar-wrapper"},[e("div",{staticClass:"history-wrapper"},[e("h5",{staticClass:"card-title"},[t._v("Recently Search")]),t._v(" "),e("ul",{staticClass:"history-content"},[e("li",[e("a",{staticClass:"product-name",attrs:{href:"product-detail.html"}},[t._v("IPhone X")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("Mobile Phone")])]),t._v(" "),e("li",[e("a",{staticClass:"product-name",attrs:{href:"product-detail.html"}},[t._v("PS4")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("Game Console")])]),t._v(" "),e("li",[e("a",{staticClass:"product-name",attrs:{href:"product-detail.html"}},[t._v("GoPro Hero 6")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("Camera")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("a",[this._v("Help")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("a",[this._v("Feedback")])])}]};var r=e("VU/8")({name:"App"},i,!1,function(t){e("m2cE"),e("vEYl")},null,null).exports,n=e("Gu7T"),c=e.n(n),o=e("VU/8")(null,null,!1,null,null,null).exports,l=e("VU/8")(null,null,!1,null,null,null).exports,d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"product"}},[a("router-view")],1)},staticRenderFns:[]};var v=[{path:"/product",component:e("VU/8")({name:"product"},d,!1,function(t){e("fkFF")},"data-v-711cfe5e",null).exports,children:[{path:"",component:o,name:"productList"},{path:":id/detail",component:l,name:"productDetail"}]}],u=[{id:1,name:"IPhone7",price:9e6,provider:"FPT Shop",image:"iphone7.jpg"},{id:2,name:"IPhone7",price:1e7,provider:"Thế giới di động",image:"iphone7.jpg"},{id:3,name:"IPhone7",price:85e5,provider:"Lazada",image:"iphone7.jpg"},{id:4,name:"IPhone7",price:95e5,provider:"Tiki",image:"iphone7.jpg"}],p=e("mtWM"),_=e.n(p).a.create({baseURL:"https://746unittbe.execute-api.us-west-2.amazonaws.com/development/"}),h={name:"Home",data:function(){return{products:[]}},methods:{onSearchBtnClick:function(){_.get("products-select-top?rows=20").then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}},created:function(){this.products=u,_.get("products-select-top?rows=10").then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}},m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"home"}},[t._m(0),t._v(" "),s("div",{staticClass:"main-content"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-md-offset-3"},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{placeholder:"Search...",type:"text",value:""}}),t._v(" "),s("span",{staticClass:"input-group-addon",on:{click:t.onSearchBtnClick}},[s("i",{staticClass:"fa fa-search"})])])])]),t._v(" "),s("h3",{staticClass:"card-title text-center"},[t._v("Today's Trending")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.products,function(a){return s("div",{key:a.id,staticClass:"col-lg-3"},[s("router-link",{attrs:{to:{name:"productDetail",params:{id:a.id}}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header text-center"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.name))])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"row"},[s("img",{attrs:{src:e("Bv0f")}})]),t._v(" "),s("div",{staticClass:"card-footer"},[s("hr"),t._v(" "),s("p",[t._v(t._s(a.provider))]),t._v(" "),s("div",{staticClass:"footer-title"},[t._v(t._s(a.price)+" VND")])])])])])],1)})),t._v(" "),s("h3",{staticClass:"card-title text-center"},[t._v("Today's Dealers")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.products,function(a){return s("div",{key:a.id,staticClass:"col-lg-3"},[s("router-link",{attrs:{to:{name:"productDetail",params:{id:a.id}}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header text-center"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.name))])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"row"},[s("img",{attrs:{src:e("Bv0f")}})]),t._v(" "),s("div",{staticClass:"card-footer"},[s("hr"),t._v(" "),s("p",[t._v(t._s(a.provider))]),t._v(" "),s("div",{staticClass:"footer-title"},[t._v(t._s(a.price)+" VND")])])])])])],1)})),t._v(" "),s("h3",{staticClass:"card-title text-center"},[t._v("Today's Products")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.products,function(a){return s("div",{key:a.id,staticClass:"col-lg-3"},[s("router-link",{attrs:{to:{name:"productDetail",params:{id:a.id}}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header text-center"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.name))])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"row"},[s("img",{attrs:{src:e("Bv0f")}})]),t._v(" "),s("div",{staticClass:"card-footer"},[s("hr"),t._v(" "),s("p",[t._v(t._s(a.provider))]),t._v(" "),s("div",{staticClass:"footer-title"},[t._v(t._s(a.price)+" VND")])])])])])],1)}))])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"navbar navbar-transparent navbar-absolute fund-navbar"},[a("div",{staticClass:"collapse navbar-collapse"},[a("ul",{staticClass:"nav navbar-nav nav-center"},[a("li",[a("a",[this._v("Trending")])]),this._v(" "),a("li",[a("a",[this._v("Hot Deals")])]),this._v(" "),a("li",[a("a",[this._v("New Update")])])])])])}]};var f=e("VU/8")(h,m,!1,function(t){e("JFQ1")},"data-v-d43066de",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"page-not-found"}},[a("h1",[this._v("Page Not Found")])])}]};var g=e("VU/8")({name:"PageNotFound"},C,!1,function(t){e("K8x4")},null,null).exports,w=[{path:"/home",component:f,name:"homeComponent"}].concat(c()(v),[{path:"",redirect:"/home"},{path:"**",component:g,name:"pageNotFound"}]),b=e("/ocq");s.a.use(b.a);var x=new b.a({mode:"history",routes:w}),k=e("NYxO");s.a.use(k.a);var F=new k.a.Store({state:{},getters:{},actions:{},mutations:{}});s.a.config.productionTip=!1,new s.a({el:"#app",router:x,store:F,components:{App:r},template:"<App/>"})},fkFF:function(t,a){},m2cE:function(t,a){},vEYl:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.1a807b5a35f99628216a.js.map