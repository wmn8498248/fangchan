(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/index"],{"00b5":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={uniNavBar:function(){return e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"d648"))},uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"6109"))},uniPopup:function(){return e.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(e.bind(null,"a5b7"))}},o=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){return n.$refs.popup.close()})},i=[]},"1d13":function(n,t,e){"use strict";var u=e("2380"),o=e.n(u);o.a},2380:function(n,t,e){},"4be1":function(n,t,e){},5207:function(n,t,e){"use strict";(function(n){e("e1f2");u(e("66fd"));var t=u(e("e6a6"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},5266:function(n,t,e){"use strict";e.r(t);var u=e("6cb8"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=o.a},"6cb8":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(e("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function i(n,t,e,u,o,i,r){try{var a=n[i](r),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(u,o)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(u,o){var r=n.apply(t,e);function a(n){i(r,u,o,a,c,"next",n)}function c(n){i(r,u,o,a,c,"throw",n)}a(void 0)}))}}getApp();var a={data:function(){return{active:0,user:{},economicman:{},shop:{auth:!0,count:0,followNum:0,photo:"",remainder:0,username:""}}},onLoad:function(){0!=this.vuex_login?(this.getUserinfo(),this.getDianpu()):this.$u.route("pages/login/index")},onShow:function(){},onUnload:function(){},components:{},methods:{getUserinfo:function(){var n=this;return r(u.default.mark((function t(){var e;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$u.post("/api/getuserinfo");case 2:e=t.sent,n.user=e.data.user,n.economicman=e.data.economicman;case 5:case"end":return t.stop()}}),t)})))()},getDianpu:function(){var n=this;return r(u.default.mark((function t(){var e;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$u.post("/api/mydianpu");case 2:e=t.sent,console.log(e.data),n.shop=e.data;case 5:case"end":return t.stop()}}),t)})))()},clickLeft:function(){n.navigateBack({delta:1})},setActive:function(n){this.active=n},change:function(n){this.current=n.detail.current},select:function(){this.$refs.popup.open()}}};t.default=a}).call(this,e("543d")["default"])},"772c":function(n,t,e){"use strict";var u=e("4be1"),o=e.n(u);o.a},e6a6:function(n,t,e){"use strict";e.r(t);var u=e("00b5"),o=e("5266");for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("772c"),e("1d13");var r,a=e("f0c5"),c=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,"8596c1a8",null,!1,u["a"],r);t["default"]=c.exports}},[["5207","common/runtime","common/vendor"]]]);