<template>
	<view class="container" style="margin: 20rpx;">
		<view class="detail-title">
			<image :src="detail.pic" mode="widthFix" class="mainpic"></image>
			<view>
				<text class="name" > {{"姓名：" + detail.name}}</text>
				<view class="jianjie">{{"简介：" + detail.brief}}</view>
			</view>
		</view>
		<view style="height: 10rpx;"></view>
		<view class="f12 mtb10 color6">
			<mp-html :content="detail.detail"    :tag-style="style" />
		</view>
	</view>
</template>

<script>
	const app = getApp()
	//import uParse from "@/components/u-parse/u-parse.vue";
	export default {
		data() {
			return {
				id: 0,
				current: 0,
				detail: {},
				style: {
					p: 'font-size:24rpx;line-height:32rpx;',
					img: 'max-width:100%'
				}
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getDetail()
		},
		onShow() {

		},
		computed: {
			teseArr() {
				return function(tese) {
					if (tese) {
						return tese.split(',')
					}
					return [];
				}
			},
			danjia() {
				return (this.detail.shouji / this.detail.area).toFixed(2) * 10000
			}
		},
		components: {
			
		},
		methods: {
			async getDetail() {
				let res = await this.$u.post('/api/getyxyg', {
					yxygid: this.id
				})
				this.detail = res.data
			},
		}
	}
</script>
<style>
	page {
		background-color: #F1F4F8
	}

	button {
		background-color: #fff;
		padding: 0;
	}

	button::after {
		border: none;
	}
</style>
<style scoped>
	.mainpic{
		width: 30vw;
	}
	
	.detail-title{
		display: flex;
		flex-direction: row;
	}
	.detail-title .name {
		margin-left: 25rpx;
	}
	.detail-title .jianjie {
		margin-left: 25rpx;
		margin-top: 30rpx;
	}
</style>

