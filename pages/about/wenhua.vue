<template>
	<view class="container">
		<!-- <view class="bg-white pb10 pt10">
			<view class="f16 bold mlr10 mb10">公司介绍</view>
			<view class=" mlr10">
				<view class="f12 mtb10 color6 infos">
	 
					<mp-html :content="detail.js.content"    :tag-style="style" />
				</view>
			</view>
		</view> -->
		<view class="bg-white pb10 pt10 mt10">
			<view class="f16 bold mlr10 mb10">企业文化</view>
			<view class="infos mlr10">
				<view class="f12 mtb10 color6">
					<mp-html :content="detail.wh.content"    :tag-style="style" />
					<!-- <u-parse :html="detail.wh.content"></u-parse> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import uParse from "@/components/u-parse/u-parse.vue";
	export default {
		data() {
			return {
				current: 0,
				detail:{},
				style: {		
					p: 'font-size:24rpx;line-height:32rpx;',
					img: 'max-width:100%'
				}
			}
		},
		onLoad() {
			this.getDetail()
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
			async getDetail() {
				let res = await this.$u.post('/api/gsjs')
				console.log(res.data)
				this.detail = res.data
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
		font-size: 28rpx;
		line-height:64rpx;
	}
 
</style>
