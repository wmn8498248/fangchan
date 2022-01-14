<template>
	<view class="container">
		<view class="bg-white pb10 pt10">
			<view class="f16 bold mlr10 mb10">用户协议内容
			</view>
			<view class="infos mlr10">
				<view class="f12 mtb10 color6">
					 <u-parse :html="detail.content"></u-parse>

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
				detail:{}
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
uParse
		},
		methods: {
			async getSwiper() {
				let res = await this.$u.post('/api/yhxy')
				this.detail = res.data
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
	.infos {
		line-height: 48rpx;
	}
</style>
