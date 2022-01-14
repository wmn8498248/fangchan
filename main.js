import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import index from '@/common/index.js'
Vue.use(index)
import store from '@/store';
Vue.config.productionTip = false

let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

// 引入uView对小程序分享的mixin封装
let mpShare = require('@/common/libs/mixin/mpShare.js');
Vue.mixin(mpShare);
Vue.prototype.$baseUrl = function() {
	if (this.$u.os() == 'devtools') {
		return 'https://xzjmfc.xzfanqie.com'
	} else {
		return 'https://xzjmfc.xzfanqie.com'
	}
}
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})

app.$mount()
// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
import auth from '@/common/auth.js'
Vue.use(auth, app);
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
