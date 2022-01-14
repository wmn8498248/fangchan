<template>
	<view class="container">
		<view class="bg-white pt10 pb10">
			<view class="f16 bold mlr10 mb10">公司风采</view>
			<view class="infos mlr10">
				<view class="item" v-for="(item,index) in swipers" :key="index" @click="preview(index)">
					<image :src="item.pic" mode="scaleToFill" class="thumb"></image>
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
				let res = await this.$u.post('/api/gsfc')
				this.swipers = res.data
			},
			preview(index) {
				let urls = this.swipers.map((item)=>{
					return item.pic
				})
				console.log(urls)
				uni.previewImage({
					index: index,
					urls: urls				 
				});
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
	.infos {
		display: grid;
		justify-content: space-between;
		grid-template-columns: 338rpx 338rpx;
		grid-row-gap: 20px;
	}

	.infos .item {
		width: 338rpx;
		height: 303rpx;
	}

	.infos .item .thumb {
		width: 338rpx;
		height: 303rpx;
		border-radius: 8rpx;
	}
</style>
