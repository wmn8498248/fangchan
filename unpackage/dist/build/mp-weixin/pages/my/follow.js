(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/follow"],{"4b17":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,n,e,r,u,o,a){try{var c=t[o](a),i=c.value}catch(f){return void e(f)}c.done?n(i):Promise.resolve(i).then(r,u)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var a=t.apply(n,e);function c(t){o(a,r,u,c,i,"next",t)}function i(t){o(a,r,u,c,i,"throw",t)}c(void 0)}))}}getApp();var c={data:function(){return{active:0,lists:[]}},onLoad:function(){this.getLists()},onShow:function(){},onUnload:function(){},components:{},methods:{getLists:function(){var t=this;return a(r.default.mark((function n(){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$u.post("/api/follow/list",{type:t.active});case 2:e=n.sent,t.lists=e.data;case 4:case"end":return n.stop()}}),n)})))()},remove:function(){return a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}};n.default=c},"4ef8":function(t,n,e){},"4f33":function(t,n,e){"use strict";e.r(n);var r=e("4b17"),u=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=u.a},"85e2":function(t,n,e){"use strict";e.r(n);var r=e("c136"),u=e("4f33");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("ba9e"),e("dfd2");var a,c=e("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"1b930f66",null,!1,r["a"],a);n["default"]=i.exports},8893:function(t,n,e){},b88e:function(t,n,e){"use strict";(function(t){e("e1f2");r(e("66fd"));var n=r(e("85e2"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},ba9e:function(t,n,e){"use strict";var r=e("4ef8"),u=e.n(r);u.a},c136:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},o=[]},dfd2:function(t,n,e){"use strict";var r=e("8893"),u=e.n(r);u.a}},[["b88e","common/runtime","common/vendor"]]]);