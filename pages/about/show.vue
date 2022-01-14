<template>
	<view class="container">
		<!-- <view class="user flex align-center">
			<image src="../../static/images/10@2x.png" mode="scaleToFill" class="avatar"></image>
			<view class="flex1 ml10">
				<view class="f18">售后客服</view>
				<view class="f12 color6 mt5">25天前</view>
			</view>
			<image src="../../static/images/g@2x.png" mode="scaleToFill" class="guanzhu"></image>
		</view> -->
		<view class="content">
			<view class="h1">
				{{detail.title}}
			</view>
			<image :src="detail.pic" class="thumb" mode="widthFix"></image>
			<u-parse :html="detail.content"></u-parse>
		</view>
		
	</view>
</template>

<script>
	import uParse from "@/components/u-parse/u-parse.vue";
	const app = getApp()
	export default {
		data() {
			return {
				current: 0,
				detail: {},
				content:''
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getSwiper()
		},
		onShow() {

		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		components: {
			uParse
		},
		methods: {
			async getSwiper() {
				let res = await this.$u.post('/api/cgalxq',{
					cgalid:this.id
				})
				this.detail = res.data
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
	.user{
		margin: 20rpx;
	}
	.user .avatar {
		width: 128rpx;
		height: 128rpx;
		border-radius: 50%;
	}
	.user .guanzhu {
		width: 28rpx;
		height: 25rpx;
	}
	.content .h1{
		font-size: 32rpx;
		text-align: center;
	}
	.content{
		padding: 20rpx;
		font-size: 24rpx;
		line-height: 48rpx;
	}
	.content .thumb{
		width: 100%;
		margin: 10rpx 0;
	}
</style>
