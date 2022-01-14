<template>
	<view class="container">

		<view class="bg-white">
			<view class="f12 mlr10 mt10">
				<uni-icons type="sound-filled" size="16" color="#C71114"></uni-icons> 您还可以发布5套新房房源
			</view>
			<view class="input-box">
				<view class="label f15">房源标题</view>
				<uni-easyinput placeholder="请输入房源标题" placeholderStyle="textAlign:right" class="input"
					:inputBorder="false" v-model="form.title">
				</uni-easyinput>
			</view>
			<view class="input-box" style="border-bottom: none;">
				<view class="label f15">房源轮播图<text class="f12 gray ml10">第一张将作为封面</text></view>
			</view>
			<view class="upload-box">
				<view class="upload-item" v-for="(item,index) in form.picList" :key="index">
					<uni-icons type="clear" size="18" color="#C71114" class="icon" @click="del(index)"></uni-icons>
					<image src="../../static/images/fm.png" mode="scaleToFill" class="top" v-if="index==0"></image>
					<image :src="item" mode="scaleToFill" class="thumb"></image>
				</view>
				<view class="upload-item" @click="upload">
					<uni-icons type="plusempty" size="36" color="#eeeeee"></uni-icons>
				</view>
			</view>
			<view class="input-box" @click="$refs.popup4.open()">
				<view class="label f15">所属楼盘</view>
				<uni-easyinput placeholder="请选择楼盘" placeholderStyle="textAlign:right" class="input" :inputBorder="false"
					:clearable="false" v-model="form.buildname">
				</uni-easyinput>
				<uni-icons type="right" size="14" color="#777"></uni-icons>
			</view>
			<view class="input-box">
				<view class="label f15">面积</view>
				<uni-easyinput placeholder="请输入建筑面积" placeholderStyle="textAlign:right" class="input"
					:inputBorder="false" v-model="form.area">
				</uni-easyinput>
				<text class="gray ml10 f12">㎡</text>
			</view>
			<view class="input-box">
				<view class="label f15">售价 </view>
				<uni-easyinput placeholder="请输入价格" placeholderStyle="textAlign:right" class="input" :inputBorder="false"
					v-model="form.price">
				</uni-easyinput>
				<text class="gray ml10 f12">万元</text>
			</view>
			<view class="input-box">
				<view class="label f15">最早开盘 </view>
				<uni-datetime-picker :border="false" type="date" v-model="form.kpdate">
					<uni-easyinput placeholder="请选择时间" placeholderStyle="textAlign:right" class="input"
						:inputBorder="false" v-model="form.kpdate">
					</uni-easyinput>
				</uni-datetime-picker>
				<text class="gray ml10 f12"></text>
			</view>
			<view class="input-box">
				<view class="label f15">最早交房 </view>
				<uni-datetime-picker :border="false" type="date" v-model="form.jfdate">
					<uni-easyinput placeholder="请选择时间" placeholderStyle="textAlign:right" class="input"
						:inputBorder="false" v-model="form.jfdate">
					</uni-easyinput>
				</uni-datetime-picker>
				<text class="gray ml10 f12"></text>
			</view>
		</view>
		<!-- <view class="bg-white mt10 pb10">
			<view class="input-box" style="border-bottom: none;">
				<view class="label f15">选择区域</view>
			</view>
			<view class="cell flex between mlr10" @click="$refs.popup.open()">
				<view class="gray f12">{{txt1}}</view>
				<uni-icons type="right" size="18" color="#777"></uni-icons>
			</view>
		</view> -->
		<!-- <view class="bg-white mt10 pb10">
			<view class="input-box" style="border-bottom: none;">
				<view class="label f15">选择区域</view>
			</view>
			<uni-data-picker :localdata="area_arr" v-model="form.region" @change="changeregion">
				<view class="cell flex between mlr10">
					<view class="gray f12">{{txt4}}</view>
					<uni-icons type="right" size="18" color="#777"></uni-icons>
				</view>
			</uni-data-picker>
		</view> -->
		<view class="bg-white mt10 pb10">
			<view class="input-box" style="border-bottom: none;">
				<view class="label f15">户型 | 朝向 | 装修</view>
			</view>
			<view class="cell flex between mlr10" @click="$refs.popup.open()">
				<view class="gray f12">{{txt1}}</view>
				<uni-icons type="right" size="18" color="#777"></uni-icons>
			</view>
		</view>
		<view class="bg-white mt10 pb10">
			<view class="input-box" style="border-bottom: none;">
				<view class="label f15">物业类型</view>
			</view>
			<view class="cell flex between mlr10" @click="$refs.popup2.open()">
				<view class="gray f12">{{txt2}}</view>
				<uni-icons type="right" size="18" color="#777"></uni-icons>
			</view>
		</view>
		<!-- 	<view class="bg-white mt10 pb10">
			<view class="input-box" style="border-bottom: none;">
				<view class="label f15">年代 | 权属</view>
			</view>
			<view class="cell flex between mlr10" @click="$refs.popup3.open()">
				<view class="gray f12">{{txt3}}</view>
				<uni-icons type="right" size="18" color="#777"></uni-icons>
			</view>
		</view> -->

		<navigator class="buttons" hover-class="none" url="./news_n">
			下一步
		</navigator>
		<uni-popup ref="popup" type="bottom" class="popup" background-color="#ffffff">
			<view class="popup-close">
				<uni-icons type="clear" size="32" color="#777" @click="$refs.popup.close()"></uni-icons>
			</view>
			<picker-view :indicator-style="indicatorStyle" class="picker-view" @change="bindChange" :value="value">
				<picker-view-column>
					<view class="item">选择户型</view>
					<view class="item" v-for="(item,index) in huxing_arr" :key="index">{{item.name}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item">选择朝向</view>
					<view class="item" v-for="(item,index) in cx_arr" :key="index">{{item.name}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item">选择装修</view>
					<view class="item" v-for="(item,index) in zx_arr" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
			<view class="picker-btn" @click="enter">确定</view>
		</uni-popup>
		<uni-popup ref="popup2" type="bottom" class="popup" background-color="#ffffff">
			<view class="popup-close">
				<uni-icons type="clear" size="32" color="#777" @click="$refs.popup2.close()"></uni-icons>
			</view>
			<picker-view :indicator-style="indicatorStyle" class="picker-view" @change="bindChange2" :value="value2">
				<picker-view-column>
					<view class="item">选择物业</view>
					<view class="item" v-for="(item,index) in wy_arr" :key="index">{{item.name}}</view>
				</picker-view-column>

			</picker-view>
			<view class="picker-btn" @click="enter2">确定</view>
		</uni-popup>
		<uni-popup ref="popup3" type="bottom" class="popup" background-color="#ffffff">
			<view class="popup-close">
				<uni-icons type="clear" size="32" color="#777" @click="$refs.popup3.close()"></uni-icons>
			</view>
			<picker-view :indicator-style="indicatorStyle" class="picker-view" @change="bindChange3" :value="value3">
				<picker-view-column>
					<view class="item">选择年代</view>
					<view class="item" v-for="(item,index) in nd_arr" :key="index">{{item.name}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item">选择权属</view>
					<view class="item" v-for="(item,index) in qs_arr" :key="index">{{item.name}}</view>
				</picker-view-column>

			</picker-view>
			<view class="picker-btn" @click="enter3">确定</view>
		</uni-popup>
		<uni-popup ref="popup4" type="bottom" class="popup" background-color="#ffffff">
			<view class="popup-close">
				<uni-icons type="clear" size="32" color="#777" @click="$refs.popup4.close()"></uni-icons>
			</view>
			<picker-view :indicator-style="indicatorStyle" class="picker-view" @change="bindChange4" :value="value4">
				<picker-view-column>
					<view class="item">选择楼盘</view>
					<view class="item" v-for="(item,index) in lp_arr" :key="index">{{item.name}}</view>
				</picker-view-column>

			</picker-view>
			<view class="picker-btn" @click="enter4">确定</view>
		</uni-popup>
	</view>
</template>

<script>
	const app = getApp()
	//const key = app.globalData.map; //使用在腾讯位置服务申请的key
	//const referer = 'app'; //调用插件的app的名称 	
	//const chooseLocation = requirePlugin('chooseLocation');
	export default {
		data() {
			return {
				checked: true,
				visible: false,
				indicatorStyle: `height: 50px;`,
				form: {
					title: '',
					mainpic: '',
					picList: [],
					buildname: '',
					estateid: '',
					area: '',
					price: '',
					huxing: '',
					chaoxiang: '',
					zhuangxiu: '',
					wuyelx: '',
					kpdate: '',
					jfdate: '',			
					hxmaidian: '',
					xiaoqujs: '',
					zppeizhi: '',
					jiaotongxinxi: ''
				},
				thumbs: [],
				picker: [],
				picker2: [],
				picker3: [],
				picker4: [],
				value: [0, 0, 0],
				value2: [0],
				value3: [0, 0],
				value4: [0],
				huxing_arr: [],
				cx_arr: [],
				zx_arr: [],
				dt_arr: [],
				lc_arr: [],
				qs_arr: [],
				nd_arr: [],
				lp_arr: [],
				area_arr: [],
				wy_arr: [],
				txt1: '请选择',
				txt2: '请选择',
				txt3: '请选择',
				txt4: '请选择'
			}
		},
		onLoad() {
			if (this.vuex_login == 0) {
				this.$u.route('pages/login/index');
				return
			}
			this.init()
		},
		onShow() {
			// const location = chooseLocation.getLocation();
			// if(location){
			// 	console.log(location)
			// 	this.form.lat = location.latitude
			// 	this.form.lng = location.longitude
			// 	this.form.buildname = location.name
			// }
		},
		onUnload() {
			// 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
			//chooseLocation.setLocation(null);
		},
		computed: {

		},
		methods: {
			checkXiaoqu() {
				wx.navigateTo({
					url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
				});
			},
			init() {
				this.$u.post('/api/huxingcode').then((res) => {
					res.data.forEach((item) => {
						this.huxing_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/cxcode').then((res) => {
					res.data.forEach((item) => {
						this.cx_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/zxcode').then((res) => {
					res.data.forEach((item) => {
						this.zx_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/lccode').then((res) => {
					res.data.forEach((item) => {
						this.lc_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/dtcode').then((res) => {
					res.data.forEach((item) => {
						this.dt_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/lpqscode').then((res) => {
					res.data.forEach((item) => {
						this.qs_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/niandaicode').then((res) => {
					res.data.forEach((item) => {
						this.nd_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})

				this.$u.post('/api/lplistcode').then((res) => {
					res.data.forEach((item) => {
						this.lp_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/wylxcode').then((res) => {
					res.data.forEach((item) => {
						this.wy_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})

				this.$u.post('/api/area').then((res) => {
					this.area_arr = res.data
				})
			},
			changeregion(e) {
				console.log(e.detail.value)
				this.txt4 = e.detail.value.map((item) => {
					return item.text
				}).join('-')
			},
			bindChange(e) {
				this.picker = e.detail.value
				console.log(e)
			},
			bindChange2(e) {
				this.picker2 = e.detail.value
				console.log(e)
			},
			bindChange3(e) {
				this.picker3 = e.detail.value
				console.log(e)
			},
			bindChange4(e) {
				this.picker4 = e.detail.value
				console.log(e)
			},
			enter() {
				if (this.picker.length == 0) {
					this.$u.toast('没有选择')
					return
				}
				let arr = this.picker.filter((item) => {
					return item == 0
				})
				if (arr.length > 0) {
					this.$u.toast('选择不完整')
					return
				}
				this.txt1 = this.huxing_arr[this.picker[0] - 1].name + ' - ' + this.cx_arr[this.picker[1] - 1].name +
					' - ' + this.zx_arr[this.picker[2] - 1].name
				this.form.huxing = this.huxing_arr[this.picker[0] - 1].value
				this.form.chaoxiang = this.cx_arr[this.picker[1] - 1].value
				this.form.zhuangxiu = this.zx_arr[this.picker[2] - 1].value
				this.$refs.popup.close()
				this.picker = [0, 0, 0]
			},
			enter2() {
				if (this.picker2.length == 0) {
					this.$u.toast('没有选择')
					return
				}
				let arr = this.picker2.filter((item) => {
					return item == 0
				})
				if (arr.length > 0) {
					this.$u.toast('选择不完整')
					return
				}
				this.txt2 = this.wy_arr[this.picker2[0] - 1].name
				this.form.wuyelx = this.wy_arr[this.picker2[0] - 1].value
				this.$refs.popup2.close()
				this.picker2 = [0]
			},
			enter3() {
				if (this.picker3.length == 0) {
					this.$u.toast('没有选择')
					return
				}
				let arr = this.picker3.filter((item) => {
					return item == 0
				})
				if (arr.length > 0) {
					this.$u.toast('选择不完整')
					return
				}
				this.txt3 = this.nd_arr[this.picker3[0] - 1].name + ' - ' + this.qs_arr[this.picker3[1] - 1].name
				this.form.niandai = this.nd_arr[this.picker3[0] - 1].value
				this.form.chanquannx = this.qs_arr[this.picker3[1] - 1].value
				this.$refs.popup3.close()
				this.picker3 = [0, 0]
			},
			enter4() {
				if (this.picker4.length == 0) {
					this.$u.toast('没有选择')
					return
				}
				let arr = this.picker4.filter((item) => {
					return item == 0
				})
				console.log(arr)
				if (arr.length > 0) {
					this.$u.toast('选择不完整')
					return
				}
				this.form.buildname = this.lp_arr[this.picker4[0] - 1].name
				this.form.estateid = this.lp_arr[this.picker4[0] - 1].value
				this.$refs.popup4.close()
				this.picker4 = [0]
			},
			del(index) {
				this.form.picList.splice(index, 1)
			},
			upload() {
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						tempFilePaths.forEach((item) => {
							uni.uploadFile({
								url: this.$baseUrl() + '/api/uploadFile', //仅为示例，非真实的接口地址
								filePath: item,
								name: 'file',
								formData: {
									'user': 'test'
								},
								success: (uploadFileRes) => {
									let data = JSON.parse(uploadFileRes.data)
									this.form.picList.push(data.msg)
								}
							});
						})
					}
				});
			},

		}
	}
</script>
<style>
	page {
		background-color: #F1F4F8;
	}

	input {
		text-align: right;
	}
</style>
<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		min-height: 100vh;
	}

	.upload-box {
		margin: 10rpx auto 0 auto;
		width: 710rpx;
		border-bottom: #eee 1px solid;
		padding-bottom: 30rpx;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-row-gap: 15px;
		grid-column-gap: 15px
	}

	.upload-box .upload-item {
		border: #eee 1px dashed;
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.upload-box .upload-item .top {
		position: absolute;
		width: 50rpx;
		height: 50rpx;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.upload-box .upload-item .icon {
		position: absolute;
		z-index: 10;
	}

	.upload-box .upload-item .thumb {
		height: 120rpx;
		width: 100%;
	}

	.input-box {
		margin: 0 20rpx;
		display: flex;
		border-bottom: #eee 1px solid;
		padding: 20rpx 0;
		justify-content: space-between;
		align-items: center;
	}

	.input-box .label {
		flex: 1;
	}

	.input-box .input {
		text-align: right;
	}

	.input-box .btn {
		height: 60rpx;
		color: #C71114;
		border-radius: 40rpx;
		text-align: center;
		line-height: 60rpx;
		margin-right: 16rpx;
		margin-left: auto;
		font-size: 30rpx;
	}

	.input-box:last-child {
		border-bottom: none;
	}

	.container .buttons {
		margin-top: auto;
		width: 750rpx;
		height: 90rpx;
		background-color: #C71114;
		color: #fff;
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
		margin-top: auto;
	}


	.popup {

		width: 750rpx;
		position: relative;
	}

	.picker-view {
		height: 600rpx;

	}

	.popup-close {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		z-index: 300;
	}

	.picker-btn {
		width: 700rpx;
		height: 90rpx;
		background-color: #C71114;
		color: #fff;
		text-align: center;
		line-height: 90rpx;
		margin: 20rpx auto;
		border-radius: 16rpx;
	}

	.picker-view .item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
		line-height: 50px;
	}
</style>
