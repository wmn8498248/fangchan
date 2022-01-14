<template>
	<view class="container">
		<view class="phone-box">
			<image src="../../static/images/logo.png" mode="scaleToFill" class="logo"></image>
			<image src="../../static/images/p.png" mode="scaleToFill" class="phone"></image>
		</view>
		<view class="info">西藏姐妹房产网为购房、租房者提供房源信息搜索、浏览功能、为业主提供房源委托等功能，让您的房产交易更为便捷。
		</view>
		<!-- <view class="info bold">官方客服电话：18058989526</view> -->
		<navigator class="buttons" hover-class="none" url="/pages/about/index">
			公司简介
		</navigator>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				current: 0,
				swipers: []
			}
		},
		onLoad() {
			this.getSwiper()
		},
		onShow() {

		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		components: {

		},
		methods: {
			async getSwiper() {
				let res = await this.$u.post('/api/getbannerUrl')
				this.swipers = res.data
			},
			change(e) {
				this.current = e.detail.current;
			}

		}
	}
</script>
<style>
	page {
		background-color: #fff
	}
</style>
<style scoped>
	.logo {
		width: 240rpx;
		height: 240rpx;
		position: relative;
		margin-top: auto;
		margin-bottom: 80rpx;
	}

	.phone-box {
		position: relative;
		margin: 60rpx auto;
		width: 644rpx;
		height: 499rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.phone {
		width: 644rpx;
		height: 499rpx;
		position: absolute;
		top: 0;
	}

	.info {
		width: 644rpx;
		text-align: center;
		margin: 60rpx auto;
		line-height: 48rpx;
		font-size: 28rpx;
		color: #333;
	}
	.buttons {
		width: 240rpx;
		height: 72rpx;
		background-color: #C71114;
		color: #fff;
		text-align: center;
		line-height: 72rpx;
		font-size: 32rpx;
		margin: 0 auto;
		border-radius:20rpx;
	}
</style>
