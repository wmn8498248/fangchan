<template>
	<view class="container">
		<view class="tab">
			<view :class="{item:true,active:active==1?true:false}" @click="setActive(1)">二手房</view>
			<view :class="{item:true,active:active==2?true:false}" @click="setActive(2)">新房</view>
			<view :class="{item:true,active:active==3?true:false}" @click="setActive(3)">租房</view>
		</view>
		<view class="service-list"  v-if="active==1">
			<view class="item mb10" v-for="(item,index) in lists" :key="index">
				<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
				</image>
				<view class="info flex1">
					
					<view class="f15 bold">{{item.title}}</view>
					<view class="f12 gray">{{item.huxing}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
					<view class="f20 red flex">
						<view class="btn active" @click="del(item.oldhouseid)">删除</view>
						<view class="btn" @click="flush(item.oldhouseid)">刷新</view>
						<view class="btn" @click="edit(item.oldhouseid)">编辑</view>
					</view> 
				</view>
			</view>
		</view>
		<view class="service-list"  v-if="active==2">
			<view class="item mb10" v-for="(item,index) in lists" :key="index">
				<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
				</image>
				<view class="info flex1">
					<view class="f15 bold">{{item.title}}</view>
					<view class="f12 gray">{{item.huxing}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
					<view class="f20 red flex">
						<view class="btn active"  @click="del(item.newhouseid)">删除</view>
						<view class="btn" @click="flush(item.newhouseid)">刷新</view>
					</view> 
				</view>
			</view>
		</view>
		<view class="service-list"   v-if="active==3">
			<view class="item mb10" v-for="(item,index) in lists" :key="index">
				<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
				</image>
				<view class="info flex1">
					<view class="f15 bold">{{item.title}}</view>
					<view class="f12 gray">{{item.buju}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
					<view class="f20 red flex">
						<view class="btn active"   @click="del(item.leasehouseid)">删除</view>
						<view class="btn" @click="flush(item.leasehouseid)">刷新</view>
					</view> 
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
				this.lists = []
				this.getLists()
			},
			async getLists() {
				let res = await this.$u.post('/api/myfabu',{
					type:this.active
				})
				this.lists = res.data
			},
			async flush(id) {
				let res = await this.$u.post('/api/flushHouse',{
					type:this.active,
					houseid:id
				})
				if(res.code==0){
					this.$u.toast('刷新成功')
				}
			},
			async del(id) {
				uni.showModal({
				    title: '提示',
				    content: '你确定要删除这个房源吗？',
				    success: (res)=>{
				        if (res.confirm) {
				            this.$u.post('/api/deleteHouse',{
				            	type:this.active,
				            	houseid:id
				            }).then((res)=>{
								if(res.code==0){
									this.$u.toast('删除成功')
									this.lists = []
									this.getLists()
								}
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				}); 
			}
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
	.service-list .item .info  .btn{
		width: 149rpx;
		height: 53rpx;
		border: 1px solid #C71114;
		border-radius: 10rpx;
		box-sizing: border-box;
		color: #C71114;
		font-size: 24rpx;
		font-weight: normal;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20rpx;
	}
	.service-list .item .info  .btn.active{
		width: 149rpx;
		height: 53rpx;
		background: #C71114;
		color: #fff;
		border-radius: 10rpx;
	}
</style>
