<template>
	<view class="container">
		<view class="tab">
			<view :class="{item:true,active:active==1?true:false}" @click="setActive(1)">二手房</view>
			<view :class="{item:true,active:active==2?true:false}" @click="setActive(2)">新房</view>
			<view :class="{item:true,active:active==3?true:false}" @click="setActive(3)">租房</view>
		</view>
		<view v-if="lists.length>0">
			<view class="service-list" v-if="active==1">
				<navigator class="item mb10" v-for="(item,index) in lists" :key="index" hover-class="none"
					:url="'../ershoufang/show?id='+item.oldhouseid">
					<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
					</image>
					<view class="info">
						<view class="f16 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.floor}}</view>
						<view class="tags">
							<view class="tag" v-for="son in teseArr(item.tese)" :key="son">{{son}}</view>
						</view>
						<view class="flex align-center mt5">
							<text class="f18 bold red">{{item.shouji}}万元</text>
							<text class="f12 gray"></text>
						</view>
					</view>
				</navigator>
			</view>
			<view class="service-list" v-if="active==2">
				<navigator class="item mb10" v-for="(item,index) in lists" :key="index" hover-class="none"
					:url="'../news/house?id='+item.newhouseid">
					<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
					</image>
					<view class="info">
						<view class="f16 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
						<view class="tags">
							<view class="tag" v-for="son in teseArr(item.tese)" :key="son">{{son}}</view>
						</view>
						<view class="flex align-center mt5">
							<text class="f18 bold red">{{item.shouji}}万元</text>
							<text class="f12 gray"></text>
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
						<view class="f16 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.buju}}/{{item.area}}㎡/{{item.floor}}</view>
						<view class="tags">
							<view class="tag" v-for="son in teseArr(item.tese)" :key="son">{{son}}</view>
						</view>
						<view class="flex align-center mt5">
							<text class="f18 bold red">{{item.shouji}}万元</text>
							<text class="f12 gray"></text>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		<view v-else class="empty">
			<image src="../../static/images/af02ec2419a2ef2b34e6628310739efb48d008f21924c-cqD41q@2x.png"></image>
			暂无信息
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

		},
		onShow() {
			this.getLists()
		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		components: {

		},
		computed: {
			teseArr() {
				return function(tese) {
					if (tese) {
						return tese.split(',')
					}
					return [];
				}
			}
		},
		methods: {
			async getLists() {
				let res = await this.$u.post('/api/myBrowserecords', {
					type: this.active
				})
				this.lists = res.data
			},
			setActive(index) {
				this.active = index
				this.getLists()
			},


		}
	}
</script>
<style>
	page {
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

	.service-list .item .info {

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}


	.service-list .item .tags {
		display: flex;
	}

	.service-list .item .tag {
		padding: 0 16rpx;
		height: 34rpx;
		border-radius: 6rpx;
		font-size: 24rpx;
		background: #DBDBDB;
		color: #333333;
		margin-right: 16rpx;
	}

	.service-list .item .tag:last-child {
		margin-right: 0;
	}

	.service-list .item .tag.active {
		background: #C71114;
		color: #fff;
	}
</style>
