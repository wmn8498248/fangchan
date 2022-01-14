<template>
	<view class="container">
	 
		<image src="../../static/images/logo.png" mode="scaleToFill" class="logo"></image>
		<navigator   hover-class="none" url="./phone"><image src="../../static/images/btn1.png" mode="scaleToFill" class="btn1"></image></navigator>
		<image src="../../static/images/btn2.png" mode="scaleToFill" class="btn1" @click="toAuth()"></image>
	<!-- 	<navigator class="otherlogin" hover-class="none" url="./phone">
			<view class="t"> 其他方式登录</view>
			<image src="../../static/images/tel.png" mode="widthFix" class="phone"></image>
		</navigator> -->
		<!-- <view class="bottom">
			<uni-icons type="checkbox-filled" size="16" color="#2F80FF" v-if="checked"></uni-icons>
			<uni-icons type="circle" size="16" color="#2F80FF" v-else></uni-icons>
			<view class="text">我已阅读并同意<text>《用户协议》</text>和<text>《隐私协议》</text> </view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: true,
				from: {}
			}
		},
		onLoad() {

		},
		methods: {
			toAuth() {
				this.$u.auth.getUserProfile().then(res => {
					this.from = res
					if (res?.userInfo) {
						this.userInfo = res.userInfo;
						return this.$u.auth.login();
					}
				}).then(res => {
					let rawData = JSON.parse(this.from.rawData)
					this.$u.post('/api/login', {
						area:'',
						code: res.code,
						//encryptedData: this.from.encryptedData,
						//iv: this.from.iv,
						//rawData: this.from.rawData,
						//signature: this.from.signature,
						touxiangUrl: rawData.avatarUrl,
						nikeName: rawData.nickName,
					}).then(res => {
						//处理
						console.log(res)
						if (res.code == 0) {
							this.$u.vuex('vuex_token', res.data.token);
							this.$u.vuex('vuex_user', res.data.user);
							this.$u.vuex('vuex_wechat', this.userInfo);
							this.$u.vuex('vuex_login', 1);
							uni.navigateBack({
								delta: 1
							})
						} else {
							this.$u.toast(res.message)
						}

					}).catch(err => {
						console.log(err)
					})
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.container {
		height: calc(100vh - var(--window-top));
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
	}
	.container .logo{
		width: 240rpx;
		height: 240rpx;
		margin:200rpx  0 80rpx 0;
	}
	.container  .btn1{
		width: 575rpx;
		height: 75rpx;
		margin-top: 50rpx;
	}
	.container .tips {
		font-size: 32rpx;
		color: #888;
		margin: 40rpx 0;
	}

	.container .nologin {
		width: 200rpx;
		margin-top: 80rpx;
		margin-bottom: 80rpx;
	}

	.container .buttons {
		display: flex;
		justify-content: space-around;
	}

	.container .buttons button {
		width: 70vw;
		border-radius: 40rpx;
		background: linear-gradient(83deg, #FF4400 0%, #FF6600 100%);
	}
	.otherlogin{
		margin-top: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 100rpx;
	}
	.otherlogin .t{
		font-size: 24rpx;
		color: #999;
		margin-bottom: 20rpx;
	}
	.otherlogin .phone{
		width: 82rpx;
	}
	.bottom {
		margin-top: auto;
		margin-bottom: 60rpx;
		color: #999;
		font-size: 24rpx;
		display: flex;
		align-items: center; 
	}

	.bottom .text {
		margin-left: 10rpx;
	}

	.bottom text {
		color: #2F80FF;
	}
</style>
