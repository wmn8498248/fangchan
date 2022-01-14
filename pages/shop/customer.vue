<template>
	<view class="container">
		<view class="tab">
			<view :class="{item:true,active:active==0?true:false}" @click="setActive(0)">所有客户</view>
			<view :class="{item:true,active:active==1?true:false}" @click="setActive(1)">关注</view>
			<view :class="{item:true,active:active==2?true:false}" @click="setActive(2)">粉丝</view>
		</view>
		<view class="follow">
			<view class="item" v-for="(item,index) in lists" :key="index">
				<image src="../../static/images/g1@2x.png" class="guanzhu"></image>
				<image :src="item.pic" mode="scaleToFill" class="avatar"></image>
				<view class="flex1">
					<view class="flex align-center f16 bold">{{item.nikeName}}<image src="../../static/images/vip@2x.png"
							class="icon"></image></view>
					<view class="f12 gray mt5">买卖经纪人</view>
				</view>
				<view class="mr20 flex column align-center">
					<view class="f18">{{item.visithouse}}</view>
					<view class="f12 color6">在售/租房源</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				active: 0,
				lists: []
			}
		},
		onLoad() {
			this.getLists() 
		},
		onShow() {

		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		components: {

		},
		methods: {
			setActive(index){
				this.active = index
				this.getLists()
			},
			async getLists() {
				let res = await this.$u.post('/api/mycustomer',{
					type:this.active 
				})	
				this.lists =  res.data
				
			},	 

		}
	}
</script>
<style>
	page{
		background-color: #F1F4F8;
	}
</style>
<style scoped>
	.follow .item{
		background-color: #fff;
		border-radius: 8rpx;
		margin: 20rpx;
		position: relative;
		display: flex;
		padding: 20rpx;
		align-items: center;
	}
	.follow .item .guanzhu{
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		width: 28rpx;
		height: 25rpx;
		z-index: 20;
	}
	.follow .item .avatar{
		width: 125rpx;
		height: 125rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}
	.follow .item .icon{
		width: 25rpx;
		height: 19rpx;
		margin-left: 10rpx;
	}
	.tab {
		display: flex;
		justify-content: space-around;
		width: 750rpx;
		height: 90rpx;
		align-items: center;
		position: relative;
		z-index: 20;
		color: #333333;
		font-size: 28rpx;
		background-color: #fff;
	}
	
	.tab .item {
		padding-bottom: 10rpx;
		border-bottom: #fff 2px solid;
	}
	.tab .item.active {
		border-bottom: #C71114 2px solid;
	}
</style>
