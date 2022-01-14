<template>
	<view class="container">
		<view class="login">
			<view class="login-txt">手机快捷登录</view>
		</view>
		<view class="input-box">
			<uni-easyinput placeholder="请输入您的手机号码"  class="input" :inputBorder="false"></uni-easyinput>
		</view>
		<view class="input-box">
			<uni-easyinput placeholder="请输入验证码" class="input" :inputBorder="false"></uni-easyinput>
			<view class="btn">获取验证码</view>
		</view>
		<view class="buttons">
			登录
		</view>	
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
					this.$u.post('/v2/mini-program/login', {
						code: res.code,
						encryptedData: this.from.encryptedData,
						iv: this.from.iv,
						rawData: this.from.rawData,
						signature: this.from.signature
					}).then(res => {
						//处理
						console.log(res)
						if (res.code == 200) {
							this.$u.vuex('vuex_token', res.data.access_token);
							this.$u.vuex('vuex_user', res.data.member);
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
		width: 100vw;
	}

	.login{
		height: 240rpx;
		display: flex;
		flex-direction: column;	
		justify-content: center;
		margin:0 60rpx; 
	}
	.login .login-txt{
		font-size: 48rpx;
		margin-bottom: 10rpx;
	}
	.login .login-tip{
		font-size: 24rpx;
		color: #999
	}
	.input-box{
		margin:0 50rpx; 
		display: flex;
		border-bottom: #eee 1px solid;
		padding: 30rpx 0;
	}
 
	.input-box .btn{
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
		margin:60rpx auto; 
		width: 663rpx;
		height: 90rpx;
		background-color: #C71114;color: #fff;
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
		border-radius: 8rpx;
	}
 
</style>
