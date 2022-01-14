<template>
	<view class="container">
		<view class="follow">
			<view class="item" v-for="(item,index) in lists" :key="index">
				<image src="../../static/images/g1@2x.png" class="guanzhu" @click="remove"></image>
				<image :src="item.photo" mode="scaleToFill" class="avatar"></image>
				<view class="flex1">
					<view class="flex align-center f16 bold">{{item.username}}
						<image src="../../static/images/vip@2x.png" class="icon" v-if="item.auth"></image>
					</view>
					<view class="f12 gray mt5">买卖经纪人</view>
				</view>
				<view class="mr20 flex column align-center">
					<view class="f18">{{item.count}}</view>
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
			async getLists() {
				let res = await this.$u.post('/api/follow/list', {
					type: this.active
				})
				this.lists = res.data
			},
			async remove() {
				// let res = await this.$u.post('/api/follow/remove', {
				// 	followid : this.active
				// })
				// this.lists = res.data
			}


		}
	}
</script>
<style>
	page {
		background-color: #F1F4F8;
	}
</style>
<style scoped>
	.follow .item {
		background-color: #fff;
		border-radius: 8rpx;
		margin: 20rpx;
		position: relative;
		display: flex;
		padding: 20rpx;
		align-items: center;
	}

	.follow .item .guanzhu {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		width: 28rpx;
		height: 25rpx;
		z-index: 20;
	}

	.follow .item .avatar {
		width: 125rpx;
		height: 125rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.follow .item .icon {
		width: 25rpx;
		height: 19rpx;
		margin-left: 10rpx;
	}
</style>
