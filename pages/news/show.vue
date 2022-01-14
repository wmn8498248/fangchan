<template>
	<view class="container">
		<view class="bg-white pb10">
			<view class="f16 mlr10 bold flex align-center">
				{{detail.estatename}}
				<view class="status ml10" v-if="detail.sealstatus">{{detail.sealstatus}}</view>
			</view>
			<view class="tags mt10 ml10">
				<view class="tag" v-for="son in teseArr(detail.biaoqian)" :key="son">{{son}}</view>
			</view>
		</view>
		<view class="swiper-box">
			<swiper @change="change">
				<swiper-item v-for="(item,index) in detail.picList" :key="index">
					<image :src="item" mode="scaleToFill" class="thumb">
					</image>
				</swiper-item>
			</swiper>
			<view class="swiper-dot f12">{{current*1+1}}/{{detail.picList.length}}</view>
		</view>
		<view class="bg-white pb10">
			<view class="flex p10 between align-center">
				<view class="">
					<view class="f15 red bold">{{detail.minPrice}} - {{detail.maxPrice}}万/㎡</view>
					<view>参考价格</view>
				</view>
				<view class="">
					<view class="f15 red bold">{{detail.minMianji}}-{{detail.maxMianji}}㎡</view>
					<view>建面</view>
				</view>
			</view>
			<view class="flex between infos mlr10">
				<view class="f12 item"><text class="color6">类型：</text><text class="color3">{{detail.housetype}}</text>
				</view>
				<view class="f12 item"><text class="color6">户型：</text><text class="color3"></text>
				</view>
				<view class="f12 item"><text class="color6">结构：</text><text class="color3">{{detail.zhuangxiu}}</text>
				</view>
				<view class="f12 item"><text class="color6">开盘：</text><text class="color3">{{detail.sealdate}}</text>
				</view>
				<view class="f12 item" style="width: 100%;"><text class="color6">装修：</text><text
						class="color3">{{detail.zhuangxiu}}</text>
				</view>
				<view class="f12 item" style="width: 100%;"><text class="color6">地址：</text><text
						class="color3">{{detail.address}}</text>
				</view>
				<view class="f12 item" style="width: 100%;"><text class="color6">更多：年限、装修标准、开发商…</text></view>
			</view>
		</view>
		<view class="bg-white mt10 p10">
			<view class="flex between mb10">
				<view class="f16 bold">在售房源列表</view>
				<!-- <uni-icons type="right" size="14"></uni-icons> -->
			</view>
			<view class="service-list" v-if="lists.length>0">
				<navigator class="item  mb10" v-for="(item,index) in lists" :key="index" hover-class="none"
					:url="'./house?id='+item.newhouseid">
					<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
					</image>
					<view class="info">
						<view class="f16 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
						<view class="tags">
							<view class="tag" v-for="son in teseArr(item.trait)" :key="son">{{son}}</view>
						</view>
						<view class="flex align-center mt5">
							<text class="f18 bold red">{{item.price}}</text>
							<text class="f12 gray"></text>
						</view>
					</view>
				</navigator>
			</view>
			<view v-else class="empty">
				<image src="../../static/images/af02ec2419a2ef2b34e6628310739efb48d008f21924c-cqD41q@2x.png"></image>
				暂无信息
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
				id: 0,
				current: 0,
				detail: {},
				agent: {},
				covers: [],
				lists:[],
				latitude: '',
				longitude: '',
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
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: this.detail.title,
				path: '/pages/ershoufang/show?id=' + this.id,
				imageUrl: this.detail.mainpic,
			}
		},
		components: {
			uParse
		},
		methods: {
			async getDetail() {
				let res = await this.$u.post('/api/estatenewhouselist', {
					estateid: this.id
				})
				this.lists = res.data.list
				this.detail = res.data.estateInfo
				this.latitude = this.detail.lat
				this.longitude = this.detail.lng
				this.covers = [{
					width: 36,
					height: 36,
					latitude: this.detail.lat,
					longitude: this.detail.lng,
					iconPath: '../../static/images/location.png',
					// label:{
					// 	content:this.detail.buildname,
					// 	bgColor:"#ffffff",
					// 	borderRadius:'4',
					// 	padding:'2',
					// 	textAlign:'center'
					// }
				}]
			},
			change(e) {
				this.current = e.detail.current;
			},
			async favor() {
				let res = await this.$u.post('/api/collection/add', {
					houseid: this.id,
					type: 1
				})
				if (res.code == 0) {
					this.$u.toast('收藏成功')
				}
			},
			makecall() {
				uni.makePhoneCall({
					phoneNumber: this.agent.phone
				})
			}

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
	 .status{
		background-color: #C71114;
		border-radius: 8rpx;
		font-size: 24rpx;
		font-weight: normal;
		color: #fff;
		padding: 4rpx 10rpx;
	}
	swiper {
		height: 415rpx;
	}

	.swiper-box {
		position: relative;
	}

	.swiper-box .swiper-dot {
		width: 100rpx;
		height: 43rpx;
		line-height: 43rpx;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 16rpx;
		color: #fff;
		font-size: 28rpx;
		z-index: 300;
		position: relative;
		margin: 0 auto;
		text-align: center;
		position: absolute;
		bottom: 20rpx;
		left: 350rpx;
	}

	.swiper-box .thumb {
		width: 100%;
		height: 415rpx;
	}

	.service-list .item .tags .tag.active {
		background: #C71114;
		color: #fff;
	}

	.tags {
		display: flex;
	}

	.tags .tag {
		padding: 0 16rpx;
		height: 34rpx;
		border-radius: 6rpx;
		font-size: 24rpx;
		background: #DBDBDB;
		color: #333333;
		margin-right: 16rpx;
	}

	.tags .tag:last-child {
		margin-right: 0;
	}

	.tags .tag.active {
		background: #C71114;
		color: #fff;
	}

	.share .icon {
		width: 30rpx;
		height: 30rpx;
		margin-right: 8rpx;
	}

	.grid {
		border-bottom: #888 1px dashed;
		padding-bottom: 20rpx;
	}

	.grid .item {
		border-right: #eee 1px solid;
		width: 32%;
		text-align: center;
		line-height: 48rpx;
	}

	.grid .item:last-child {
		border-right: none;
	}

	.infos {
		flex-wrap: wrap;
	}

	.infos .item {
		width: 50%;
		line-height: 48rpx;
	}

	.service-list {
		display: flex;
		flex-direction: column;
		width: 712rpx;
		background: #FFFFFF;
		border-radius: 14rpx;
		margin: 0 auto;
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

	.service-list .item .desc {
		font-size: 77rpx;
	}

	.service-list .item .title {
		font-size: 24rpx;
	}

	.service-list .item .tags {
		display: flex;
	}

	.service-list .item .tags .tag {
		padding: 0 16rpx;
		height: 34rpx;
		border-radius: 6rpx;
		font-size: 24rpx;
		background: #DBDBDB;
		color: #333333;
		margin-right: 16rpx;
	}

	.service-list .item .tags .tag:last-child {
		margin-right: 0;
	}

	.service-list .item .tags .tag.active {
		background: #C71114;
		color: #fff;
	}
</style>
