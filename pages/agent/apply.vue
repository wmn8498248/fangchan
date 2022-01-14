<template>
	<view class="container">
		<image src="../../static/images/shenqing.png" class="banner" mode="scaleToFill"></image>
		<view class="bg-white">
			<view class="f15 bold mlr10 mt10">填写资料</view>
			<view class="input-box">
				<view class="label f15">经纪人姓名<text class="red">*</text></view>
				<uni-easyinput placeholder="请输入" v-model="form.realname" placeholderStyle="textAlign:right"
					class="input" :inputBorder="false">
				</uni-easyinput>
			</view>
			<view class="input-box">
				<view class="label f15">联系方式<text class="red">*</text></view>
				<uni-easyinput placeholder="请输入" v-model="form.tel" placeholderStyle="textAlign:right" class="input"
					:inputBorder="false">
				</uni-easyinput>
			</view>
		</view>
		<view class="f12 mtb10 mlr10 color6">如果您有平台的专属经理请填写下方资料</view>
		<view class="bg-white">
			<view class="input-box">
				<view class="label f15">经理姓名</view>
				<uni-easyinput placeholder="请输入" v-model="form.managername" placeholderStyle="textAlign:right"
					class="input" :inputBorder="false">
				</uni-easyinput>
			</view>
			<view class="input-box">
				<view class="label f15">经理工号</view>
				<uni-easyinput placeholder="请输入" v-model="form.managerno" placeholderStyle="textAlign:right"
					class="input" :inputBorder="false">
				</uni-easyinput>
			</view>
		</view>
		<view class="flex align-center center f12 color3 mtb10">
			<image src="../../static/images/tip.png" style="width: 35rpx;height: 35rpx; margin-right: 10rpx;"
				mode="scaleToFill"></image>一位商务经理将在24小时内联系您
		</view>
		<view class="buttons" @click="save">
			申请
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: true,
				form: {
					managername: '',
					managerno: '',
					realname: '',
					tel: ''
				}
			}
		},
		onLoad() {
			if (this.vuex_login == 0) {
				this.$u.route('pages/login/index');
				return
			}
		},
		methods: {
			async save() {
				if (this.$u.test.isEmpty(this.form.realname) || this.$u.test.isEmpty(this.form.tel)) {
					this.$u.toast('有必填项为空')
					return
				}
				let res = await this.$u.post('/api/applyAuth', this.form)
				console.log(res)
				if (res.code == 0) {
					this.$u.toast('申请成功，请等待审核！')
					uni.switchTab({
						url: '../my/index'
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
