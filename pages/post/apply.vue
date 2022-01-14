<template>
	<view class="container">
		<ds-swiper></ds-swiper>
		<view class="bg-white">
			<view class="f15 bold mlr10 mt10 mb10">填写基本资料</view>
			<view class="input-box">
				<view class="label f15">姓名<text class="red">*</text></view>
				<uni-data-checkbox v-model="form.type" :localdata="range" @change="changeType"></uni-data-checkbox>
			</view>
			<view class="input-box">
				<view class="label f15">姓名<text class="red">*</text></view>
				<uni-easyinput placeholder="请输入" v-model="form.name" placeholderStyle="textAlign:right" class="input"
					:inputBorder="false">
				</uni-easyinput>
			</view>
			<view class="input-box">
				<view class="label f15">联系方式<text class="red">*</text></view>
				<uni-easyinput placeholder="请输入" v-model="form.tel" placeholderStyle="textAlign:right" class="input"
					:inputBorder="false">
				</uni-easyinput>
			</view>
		</view>
		<!-- 		<view class="f12 mtb10 mlr10 color6">如果您有平台的专属经理请填写下方资料</view>
		<view class="bg-white">
			<view class="input-box">
				<view class="label f15">经理姓名</view>
				<uni-easyinput placeholder="请输入" v-model="form.managername" placeholderStyle="textAlign:right" class="input" :inputBorder="false">
				</uni-easyinput>
			</view>
			<view class="input-box">
				<view class="label f15">经理工号</view>
				<uni-easyinput placeholder="请输入" v-model="form.managerno" placeholderStyle="textAlign:right" class="input" :inputBorder="false">
				</uni-easyinput>
			</view>
		</view>
		<view class="flex align-center center f12 color3 mtb10">
			<image src="../../static/images/tip.png" style="width: 35rpx;height: 35rpx; margin-right: 10rpx;"
				mode="scaleToFill"></image>一位商务经理将在24小时内联系您
		</view> -->
		<view class="buttons" @click="save">
			提交
		</view>
	</view>
</template>

<script>
	import DsSwiper from '../../components/ds/ds-swiper.vue'
	export default {
		data() {
			return {
				checked: true,
				form: {
					type: '',
					name: '',
					tel: ''
				},
				range: [{
					"value": 1,
					"text": "二手房"
				}, {
					"value": 2,
					"text": "租房"
				}],
			}
		},
		onLoad() {
			if (this.vuex_login == 0) {
				this.$u.route('pages/login/index');
				return
			}
		},
		components: {
			DsSwiper
		},
		methods: {
			changeType() {
				console.log(this.form.type)
			},
			async save() {
				if (this.$u.test.isEmpty(this.form.name) || this.$u.test.isEmpty(this.form.tel)) {
					this.$u.toast('有必填项为空')
					return
				}
				let res = await this.$u.post('/api/yzdj', this.form)
				console.log(res)
				if (res.code == 0) {				
					uni.showModal({
						title: '提示',
						content: '提交成功',
						showCancel:false,
						success: function(res) {
							uni.switchTab({
								url: '../index/index'
							})
						}
					})
				} else {
					this.$u.toast(res.msg)
				}

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
<style scoped lang="scss">
	.container {
		height: calc(100vh - var(--window-top));
		display: flex;
		flex-direction: column;
		width: 100vw;
	}

	.banner {
		width: 750rpx;
		height: 228rpx;
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

	.container .buttons {
		margin: 60rpx auto;
		width: 663rpx;
		height: 90rpx;
		background-color: #C71114;
		color: #fff;
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
		border-radius: 8rpx;
		margin-top: auto;
	}
</style>
