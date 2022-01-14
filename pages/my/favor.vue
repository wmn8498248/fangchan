<template>
	<view class="container">
		<view class="tab">
			<view :class="{item:true,active:active==1?true:false}" @click="setActive(1)">二手房</view>
			<view :class="{item:true,active:active==2?true:false}" @click="setActive(2)">新房</view>
			<view :class="{item:true,active:active==3?true:false}" @click="setActive(3)">租房</view>
		</view>
		<view class="service-list" v-if="active==1">
			<navigator class="item mb10" v-for="(item,index) in lists" :key="index" hover-class="none"
				:url="'../ershoufang/show?id='+item.oldhouseid">
				<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
				</image>
				<view class="info">
					<view class="f15 bold">{{item.title}}</view>
					<view class="f12 gray">{{item.huxing}}/{{item.area}}平米/{{item.chaoxiang}}</view>
					<view class="f20 red bold">
						约{{item.shouji}}万
					</view> 
				</view>
			</navigator>
		</view>
		<view class="service-list" v-if="active==2">
			<navigator class="item mb10" v-for="(item,index) in lists" :key="index" hover-class="none"
				:url="'../news/house?id='+item.oldhouseid">
				<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
				</image>
				<view class="info">
					<view class="f15 bold">{{item.title}}</view>
					<view class="f12 gray">{{item.huxing}}/{{item.area}}平米/{{item.chaoxiang}}</view>
					<view class="f20 red bold">
						约{{item.price}}万
					</view> 
				</view>
			</navigator>
		</view>
		<view class="service-list" v-if="active==3">
			<navigator class="item mb10" v-for="(item,index) in lists" :key="index" hover-class="none"
				:url="'../zufang/show?id='+item.leasehouseid">
				<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
				</image>
				<view class="info">
					<view class="f15 bold">{{item.title}}</view>
					<view class="f12 gray">{{item.buju}}/{{item.area}}平米/{{item.chaoxiang}}</view>
					<view class="f20 red bold">
						{{item.zhujin}}元/月
					</view> 
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				active: 1,
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
				this.lists  = []
				this.getLists()
			},
			async getLists() {
				let res = await this.$u.post('/api/collection/list',{
					type:this.active
				})
				this.lists = res.data
			},
		}
	}
</script>
<style>
	page{
		background-color: #fff;
	}
</style>
<style scoped>
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
	}

	.tab .item {
		padding-bottom: 10rpx;
		border-bottom: #fff 2px solid;
	}

	.tab .item.active {
		border-bottom: #C71114 2px solid;
	}
	.service-list {
		display: flex;
		flex-direction: column;
		width: 712rpx;
		background: #FFFFFF;
		border-radius: 14rpx;
		margin: 20rpx auto;
		padding-bottom: 20rpx;
	}
	
	.service-list .item {
		display: flex;
		border-bottom: #eee 1px solid;
		padding-bottom: 20rpx;
	}
		
	.service-list .item:last-child {
		border-bottom: none;
	}
	
	.service-list .item .thumb {
		width: 259rpx;
		height: 178rpx;
	}
	.service-list .item .info{
		height: 178rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
