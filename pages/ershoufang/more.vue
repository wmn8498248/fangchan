<template>
	<view class="container">
		<view class="bg-white pb10">
			<view class="f16 bold mlr10 mb10">基础属性</view>
			<view class="flex between infos mlr10">
				<view class="item">
					<view class="f12"><text class="color6">房源户型：</text><text class="color3"></text></view>
					<view class="f12"><text class="color6">建筑面积：</text><text class="color3"></text></view>				 
				</view>		 
			</view>
		</view>
		<view class="bg-white pt10 mt10 pb10">
			<view class="f16 bold mlr10 mb10">交易属性</view>
			<view class="flex between infos mlr10">
				<view class="item">
					<view class="f12"><text class="color6">上次交易：</text><text class="color3"></text></view>
					<view class="f12"><text class="color6">房屋年限：</text><text class="color3"></text></view>
					<view class="f12"><text class="color6">房屋用途：</text><text class="color3"></text></view>
					<view class="f12"><text class="color6">交易权限：</text><text class="color3"></text></view>
					<view class="f12"><text class="color6">抵押信息：</text><text class="color3"></text></view>
					<view class="f12"><text class="color6">房本备件：</text><text class="color3"></text></view>
					<view class="f12"><text class="color6">编    号：</text><text class="color3"></text></view>
					<view class="f12"><text class="color6">土地年限：</text><text class="color3"></text></view>
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
		background-color: #F1F4F8
	}
</style>
<style scoped>
	.infos .item {		
		line-height: 48rpx;
	}
</style>
