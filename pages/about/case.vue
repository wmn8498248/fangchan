<template>
	<view class="container">
			<ds-swiper></ds-swiper>
		<view class="service-list">
			<navigator class="item mb10" v-for="(item,index) in swipers" :key="index" hover-class="none"
				:url="'./show?id='+item.cgalid">
				<image :src="item.pic" mode="scaleToFill" class="thumb mr10 radius10">
				</image>
				<view class="info flex1">
					<view class="f18 bold">{{item.title}}</view>
					<view class="f14 mtb5">{{item.build}}</view>
					<view class="f12">
						{{item.miaoshu}}
					</view> 
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import DsSwiper from '../../components/ds/ds-swiper.vue'
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
DsSwiper
		},
		methods: {
			async getSwiper() {
				let res = await this.$u.post('/api/cgal')
				this.swipers = res.data
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
	.banner {
		width: 750rpx;
		height: 162rpx;
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
 
	
</style>
