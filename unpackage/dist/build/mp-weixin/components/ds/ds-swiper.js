(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ds/ds-swiper"],{"66ef":function(n,e,t){"use strict";t.r(e);var r=t("c7f7"),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},"8fa4":function(n,e,t){"use strict";t.r(e);var r=t("f19e"),u=t("66ef");for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);t("9552");var i,a=t("f0c5"),c=Object(a["a"])(u["default"],r["b"],r["c"],!1,null,"08ea2eb8",null,!1,r["a"],i);e["default"]=c.exports},9552:function(n,e,t){"use strict";var r=t("b011"),u=t.n(r);u.a},b011:function(n,e,t){},c7f7:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function o(n,e,t,r,u,o,i){try{var a=n[o](i),c=a.value}catch(f){return void t(f)}a.done?e(c):Promise.resolve(c).then(r,u)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var i=n.apply(e,t);function a(n){o(i,r,u,a,c,"next",n)}function c(n){o(i,r,u,a,c,"throw",n)}a(void 0)}))}}var a={data:function(){return{current:0,swipers:[],dotsStyles:{backgroundColor:"rgba(255, 255, 255, .2)",border:"none",color:"#fff",selectedBackgroundColor:"rgba(255, 255, 255, .7)",selectedBorder:"none"}}},mounted:function(){this.getSwiper()},name:"wtitleBar",props:{},watch:{},methods:{getSwiper:function(){var n=this;return i(r.default.mark((function e(){var t;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$u.post("/api/getbannerUrl");case 2:t=e.sent,n.swipers=t.data;case 4:case"end":return e.stop()}}),e)})))()},change:function(n){this.current=n.detail.current}}};e.default=a},f19e:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return r}));var r={uniSwiperDot:function(){return t.e("uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot").then(t.bind(null,"c93d"))}},u=function(){var n=this,e=n.$createElement;n._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ds/ds-swiper-create-component',
    {
        'components/ds/ds-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8fa4"))
        })
    },
    [['components/ds/ds-swiper-create-component']]
]);