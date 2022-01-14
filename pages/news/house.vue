<template>
	<view class="container">
		 <view class="swiper-box">
			<swiper @change="change">
				<swiper-item v-for="(item,index) in detail.picList" :key="index">
					<image :src="item" mode="scaleToFill" class="thumb">
					</image>
				</swiper-item>
			</swiper>
			<view class="swiper-dot f12">{{current*1+1}}/{{detail.picList.length}}</view>
		</view>
		<view class="bg-white pb10 pt10">
			<view class="f16 mlr10 bold  mt10">
				{{detail.title}}
			</view>
			<view class="f12 mlr10 gray mt10">
				更新时间：{{detail.updatetime}} 发布时间：{{detail.createtime}} <!-- 房源数量：95 -->
			</view>
			<view class="flex p10 between align-center">
				<view class="f18 bold red">{{detail.createtime}}</view>
				<view class="share flex">
					<button class="flex align-center" @click="favor">
						<image src="../../static/images/icon2@2x.png" mode="scaleToFill" class="icon"></image>
						<text class="f12">收藏</text>
					</button>
					<button class="flex ml10 align-center" open-type="share">
						<image src="../../static/images/icon1@2x.png" mode="scaleToFill" class="icon"></image>
						<text class="f12">分享</text>
					</button>
				</view>
			</view>
			<view class="tags ml10">
				<view class="tag" v-for="son in teseArr(detail.trait)" :key="son">{{son}}</view>
			</view>
			<view class="flex between infos mlr10">
				<view class="f12 item"><text class="color6">面积：</text><text class="color3">{{detail.area}}</text>
				</view>
				<view class="f12 item"><text class="color6">物业类型：</text><text class="color3">{{detail.wuyelx}}</text>
				</view>		
				<view class="f12 item"><text class="color6">朝向：</text><text class="color3">{{detail.chaoxiang}}</text>
				</view>	
				<view class="f12 item"><text class="color6">户型：</text><text class="color3">{{detail.huxing}}</text>
				</view>
				<view class="f12 item"><text class="color6">最早开盘：</text><text class="color3">{{detail.kpdate}}</text>
				</view>
				<view class="f12 item"><text class="color6">最早交房：</text><text class="color3">{{detail.jfdate}}</text>
				</view>
				<view class="f12 item" style="width: 100%;"><text class="color6">所属楼盘：</text><text class="color3">{{detail.buildname}}</text>
				</view>			
				<view class="f12 item" style="width: 100%;"><text class="color6">首付预算：</text><text
						class="color3">首付及贷款情况请咨询经纪人</text></view>

			</view>
			<!-- <view class="btn-gray">
				更多房源信息
			</view> -->
		</view>
		<view class="bg-white mt10 p10">
			<view class="peitao">
				<view class="f16 bold">位置及周边配套</view>
				<view class="f12 color6 mt10">位置：<text class="color3">{{detail.buildname}}</text></view>
				<view class="f12 color6 mt10">房源信息：<text class="red" @click="makecall">咨询经纪人</text></view>
			</view>
			<map style="width: 100%; height: 300rpx;margin: 20rpx 0 0 0;" :latitude="latitude" :longitude="longitude"
				:markers="covers">
			</map>
		</view>
		<view class="bg-white mt10 p10">
			<navigator class="flex between" hover-class="none" :url="'./info?id='+id">
				<view class="f16 bold">房源介绍</view>
				<uni-icons type="right" size="14"></uni-icons>
			</navigator>
			<view class="f12 color6 mt10" style="line-height: 48rpx;">
				<u-parse :html="detail.xiaoqujs"></u-parse>
			</view>
		</view>
		<view style="height: 120rpx;"></view>
		<view class="chat-box flex align-center">
			<image :src="agent.photo" mode="scaleToFill" class="avatar ml10"></image>
			<view class="flex1 ml10">
				<view class="f16">{{agent.username}}</view>
				<view class="f12">房产经纪人</view>
			</view>
			<button class="btn mr10" open-type="contact">立即咨询</button>
			<view class="btn active mr10" @click="makecall">拨打电话</view>
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
				path: '/pages/news/house?id=' + this.id,
				imageUrl: this.detail.mainpic,
			}
		},
		components: {
			uParse
		},
		methods: {
			async getDetail() {
				let res = await this.$u.post('/api/newhouseDetails', {
					newhouseid: this.id
				})
				this.agent = res.data.agent
				this.detail = res.data.newhouse
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
					type: 2
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

	.btn-gray {
		width: 427rpx;
		height: 75rpx;
		border-radius: 8rpx;
		background-color: #DBDBDB;
		text-align: center;
		margin: 20rpx auto;
		font-size: 28rpx;
		line-height: 75rpx;
	}

	.chat-box {
		background-color: #fff;
		position: fixed;
		height: 100rpx;
		box-shadow: -20rpx 0 10px rgba(0, 0, 0, 0.5);
		width: 750rpx;
		bottom: 0;
	}

	.chat-box .avatar {
		width: 75rpx;
		height: 75rpx;
		border-radius: 50%;
	}

	.chat-box .btn {
		width: 226rpx;
		height: 75rpx;
		border: #C71114 1px solid;
		border-radius: 8rpx;
		color: #C71114;
		text-align: center;
		line-height: 75rpx;
	}

	.chat-box .btn.active {
		background-color: #C71114;
		color: #fff;
	}
</style>
