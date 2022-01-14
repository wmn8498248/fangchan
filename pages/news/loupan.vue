<template>
	<view class="container">
		<image :src="detail.detailspic" mode="widthFix" class="mainpic"></image>
		<view style="height: 120rpx;"></view>
		<view class="chat-box flex align-center">
			<view class="flex1 ml10">
				  <view class="f16">{{detail.estatename}}</view>  
				<view class="f12">{{detail.areaname}}</view>
			</view>
			<!-- <button class="btn mr10" open-type="contact">立即咨询</button> -->
			<view class="btn active mr10" @click="makecall">拨打电话</view>
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
				agent: {},
				covers: [],
				lists: [],
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
				path: '/pages/news/loupan?id=' + this.id,
				imageUrl: this.detail.mainpic,
			}
		},
		components: {
			
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
					phoneNumber: this.detail.tel
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
	.mainpic{
		width: 100%;
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
