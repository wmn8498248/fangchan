<template>
	<view class="container">
		<image src="../../static/images/jingjiren.png" mode="scaleToFill" class="header"></image>
		<uni-nav-bar title="我的" backgroundColor="rgba(255,255,255,0)" :statusBar="true" :border="false" color="#ffffff"
			@clickLeft="clickLeft">
			<view slot="left">
				<uni-icons type="back" size="24" color="#ffffff"></uni-icons>
			</view>
		</uni-nav-bar>
		<view class="user-box">
			<view class="user-info flex">
				<image :src="user.touxiangUrl" mode="scaleToFill" class="avatar ml10"></image>
				<view class="ml10">
					<view class="f18 mt20  mb10">{{user.nikeName}}</view>
					<button type="default" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"
						v-if="user.tel==null">手机号：未授权</button>
					<view class="f12 color6 flex align-center" v-else>手机号：{{user.tel}}</view>

				</view>
			</view>
			<view class="flex between user-bottom">
				<navigator class="f12 item" hover-class="none" url="./favor">
					<image src="../../static/images/my6.png" mode="widthFix"></image>
					<view>我的收藏</view>
				</navigator>
				<navigator class="f12 item" hover-class="none" url="./follow">
					<image src="../../static/images/my3.png" mode="widthFix"></image>
					<view>我的关注</view>
				</navigator>
				<navigator class="f12 item" hover-class="none" url="./mark">
					<image src="../../static/images/m5.png" mode="widthFix"></image>
					<view>我的足迹</view>
				</navigator>
			</view>
			<image src="../../static/images/my7.png" mode="scaleToFill" class="bg"></image>
		</view>
		<view class="cell-box">
			<navigator class="cell" hover-class="none" url="../agent/apply" v-if="isauth">
				<image src="../../static/images/my4.png" class="icon"></image>
				<text class="flex1">申请入驻</text>
				<uni-icons type="right" size="16"></uni-icons>
			</navigator>
			<navigator class="cell" hover-class="none" url="./xieyi">
				<image src="../../static/images/my9.png" class="icon"></image>
				<text class="flex1">用户协议</text>
				<uni-icons type="right" size="16"></uni-icons>
			</navigator>
			<navigator class="cell" hover-class="none" url="../shop/index"  v-if="!isauth">
				<image src="../../static/images/my1.png" class="icon"></image>
				<text class="flex1">我的店铺</text>
				<uni-icons type="right" size="16"></uni-icons>
			</navigator>
			<navigator class="cell" hover-class="none" url="./about">
				<image src="../../static/images/my2.png" class="icon"></image>
				<text class="flex1">关于我们</text>
				<uni-icons type="right" size="16"></uni-icons>
			</navigator>
		</view>

	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				active: 0,
				user: {},
				economicman: null
			}
		},
		onLoad() {
			if (this.vuex_login == 0) {
				this.$u.route('pages/login/index');
				return
			}


		},
		onShow() {
			this.getUserinfo()
		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		computed:{
			isauth(){
				return this.$u.test.isEmpty(this.economicman)
			}
		},
		components: {

		},
		methods: {
			setActive(index) {
				this.active = index
			},
			async getUserinfo() {
				let res = await this.$u.post('/api/getuserinfo')
				console.log(res)
				this.user = res.data.user
				this.economicman = res.data.economicman
			},
			change(e) {
				this.current = e.detail.current;
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			getPhoneNumber(e) {
				if (!e.target.iv) {
					uni.showModal({
						content: '获取手机号失败！',
						showCancel: false
					})
					return;
				}
				//e.target.iv,
				//e.target.encryptedData,
				uni.login({
					provider: 'weixin',
					success: (loginRes) => {
						console.log(loginRes.code);
						this.$u.post('/api/setWxPhone', {
							code: loginRes.code,
							iv: e.target.iv,
							encryptedData: e.target.encryptedData,
						}).then((res) => {
					 	console.log(res)
						})

					}
				});
			}
		}
	}
</script>
<style>
	page {
		background-color: #F1F4F8
	}

	button {
		background-color: rgba(255, 255, 255, 1);
		padding: 0;
		line-height: 32rpx;
		font-size: 24rpx;
	}

	button::after {
		border: none;
		padding: 0;
	}

	button[type=default] {
		background-color: #fff;
		color: #000;
	}
</style>
<style scoped>
	.header {
		width: 750rpx;
		height: 353rpx;
		position: absolute;
		top: 0;
	}

	.user-box {
		width: 722rpx;
		height: 322rpx;
		margin: 20px auto 20rpx auto;
		position: relative;
		display: flex;
		flex-direction: column;

	}

	.user-box .user-info {
		position: relative;
		z-index: 20;
		margin-left: 30rpx;

	}

	.user-box .bg {
		width: 722rpx;
		height: 322rpx;
		position: absolute;
		top: 0;
		z-index: 10;
	}

	.user-box .user-info .avatar {
		width: 125rpx;
		height: 125rpx;
		border-radius: 50%;
		position: relative;
		margin-top: -10rpx;
	}

	.user-box .user-bottom {
		position: relative;
		z-index: 20;
		justify-content: space-around;
		margin-top: auto;
		margin-bottom: 50rpx;
	}

	.user-box .user-bottom .item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.user-box .user-bottom image {
		width: 48rpx;
		margin-bottom: 10rpx;
	}

	.cell-box {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}

	.cell-box .cell {
		height: 100rpx;
		display: flex;
		align-items: center;
		border-bottom: #F1F1F1 1px solid;
		padding: 0 30rpx;
		font-size: 30rpx;
		color: #333333;
	}

	.cell-box .cell .icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 20rpx;
	}

	
</style>
