(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ershoufang/show"],{1371:function(t,e,n){},"25b4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,i,a,o,u){try{var r=t[o](u),c=r.value}catch(s){return void n(s)}r.done?e(c):Promise.resolve(c).then(i,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var u=t.apply(e,n);function r(t){o(u,i,a,r,c,"next",t)}function c(t){o(u,i,a,r,c,"throw",t)}r(void 0)}))}}getApp();var r=function(){Promise.all([n.e("common/vendor"),n.e("components/u-parse/u-parse")]).then(function(){return resolve(n("c6cb"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{id:0,current:0,detail:{},agent:{},covers:[],latitude:"",longitude:"",user:{},economicman:null}},onLoad:function(t){this.id=t.id,this.getDetail(),this.getUserinfo()},onShow:function(){},computed:{teseArr:function(){return function(t){return t?t.split(","):[]}},danjia:function(){return 1e4*(this.detail.shouji/this.detail.area).toFixed(2)},isauth:function(){return null==this.detail.tel?"":this.$u.test.isEmpty(this.economicman)?this.detail.tel.substring(0,4)+"****"+this.detail.tel.slice(-3):this.detail.tel}},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:this.detail.title,path:"/pages/ershoufang/show?id="+this.id,imageUrl:this.detail.mainpic}},components:{uParse:r},methods:{getUserinfo:function(){var t=this;return u(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.post("/api/getuserinfo");case 2:n=e.sent,console.log(n),t.user=n.data.user,t.economicman=n.data.economicman;case 6:case"end":return e.stop()}}),e)})))()},getDetail:function(){var t=this;return u(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.post("/api/oldhouseDetails",{oldhouseid:t.id});case 2:n=e.sent,t.agent=n.data.agent,t.detail=n.data.oldhouse,t.latitude=t.detail.lat,t.longitude=t.detail.lng,t.covers=[{width:36,height:36,latitude:t.detail.lat,longitude:t.detail.lng,iconPath:"../../static/images/location.png"}];case 8:case"end":return e.stop()}}),e)})))()},change:function(t){this.current=t.detail.current},favor:function(){var t=this;return u(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.post("/api/collection/add",{houseid:t.id,type:1});case 2:n=e.sent,0==n.code&&t.$u.toast("收藏成功");case 4:case"end":return e.stop()}}),e)})))()},makecall:function(){t.makePhoneCall({phoneNumber:this.agent.tel})}}};e.default=c}).call(this,n("543d")["default"])},3591:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"6109"))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("components/u-parse/u-parse")]).then(n.bind(null,"c6cb"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.teseArr(t.detail.tese));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[]},"43b0":function(t,e,n){"use strict";n.r(e);var i=n("25b4"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"74c5":function(t,e,n){"use strict";var i=n("c0f7"),a=n.n(i);a.a},"9f03":function(t,e,n){"use strict";(function(t){n("e1f2");i(n("66fd"));var e=i(n("f594"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c0f7:function(t,e,n){},edcc:function(t,e,n){"use strict";var i=n("1371"),a=n.n(i);a.a},f594:function(t,e,n){"use strict";n.r(e);var i=n("3591"),a=n("43b0");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("74c5"),n("edcc");var u,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"03f608be",null,!1,i["a"],u);e["default"]=c.exports}},[["9f03","common/runtime","common/vendor"]]]);