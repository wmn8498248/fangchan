<template>
	<view class="container">
		<view class="bg-white pb10">
			<view class="f16 bold mlr10 mb10">房源介绍</view>
			<view class="infos mlr10">
				<view class="color6 f14">小区介绍</view>
				<view class="f12 mtb10">
					<u-parse :html="detail.xiaoqujs"></u-parse>
				</view>
				<view class="color6 f14">核心卖点</view>
				<view class="f12 mtb10">
					<u-parse :html="detail.hxmaidian"></u-parse>
				</view>
				<view class="color6 f14">周边配置</view>
				<view class="f12 mtb10">
					<u-parse :html="detail.zppeizhi"></u-parse>
				</view>
				<view class="color6 f14">交通出行</view>
				<view class="f12 mtb10">
					<u-parse :html="detail.jiaotongxinxi"></u-parse>
				</view>
			</view>
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
				detail: {}
			}
		},
		onLoad(option) {
			this.id = option.id
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
				let res = await this.$u.post('/api/oldhouseDetails', {
					oldhouseid: this.id
				})
				//this.agent = res.data.agent
				this.detail = res.data.oldhouse
			},

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
