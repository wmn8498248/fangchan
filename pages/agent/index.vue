<template>
	<view class="container">
		<image src="../../static/images/jingjiren.png" mode="scaleToFill" class="header"></image>
		<uni-nav-bar title="我的" backgroundColor="rgba(255,255,255,0)" :statusBar="true" :border="false" color="#ffffff"
			@clickLeft="clickLeft">
			<view slot="left">
				<uni-icons type="back" size="24" color="#ffffff"></uni-icons>
			</view>
		</uni-nav-bar>
		<view class="user-box">
			<view class="user-info flex align-center">
				<image :src="detail.photo" mode="scaleToFill" class="avatar ml10"></image>
				<view class="ml10">
					<view class="f20">{{detail.username}}</view>
					<view class="f12 color6 flex align-center">买卖经纪人<image src="../../static/images/vip@2x.png"
							class="icon" v-if="detail.auth"></image>
					</view>
				</view>
			</view>
			<view class="tongji">
				<view class="f20">{{detail.count}}</view>
				<view style="font-size: 18rpx;">在售/租房源</view>
			</view>
			<image src="../../static/images/1@2x.png" mode="scaleToFill" class="bg"></image>
			<image src="../../static/images/g@2x.png" class="guanzhu" @click="guanzhu"></image>
		</view>
		<view class="bg-white">
			<view class="tab">
				<view :class="{item:true,active:active==0?true:false}" @click="setActive(0)">二手房</view>
				<view :class="{item:true,active:active==1?true:false}" @click="setActive(1)">新房</view>
				<view :class="{item:true,active:active==2?true:false}" @click="setActive(2)">租房</view>
			</view>
		</view>
		<view v-if="active==0">
			<view class="service-list" v-if="detail.oldhouselist.length>0">
				<navigator class="item " v-for="(item,index) in detail.oldhouselist" :key="index" hover-class="none"
					:url="'../ershoufang/show?id='+item.oldhouseid">
					<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
					</image>
					<view class="info">
						<view class="f16 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.floor}}</view>
						<view class="tags">
							<view class="tag" v-for="son in teseArr(item.tese)" :key="son">{{son}}</view>
						</view>
						<view class="flex align-center mt5">
							<text class="f18 bold red">{{item.shouji}}万元</text>
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
		<view v-if="active==1">
			<view class="service-list" v-if="detail.newlist.length>0">
				<navigator class="item " v-for="(item,index) in detail.newlist" :key="index" hover-class="none"
					:url="'../news/house?id='+item.newhouseid">
					<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
					</image>
					<view class="info">
						<view class="f16 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
						<view class="tags">
							<view class="tag" v-for="son in teseArr(item.tese)" :key="son">{{son}}</view>
						</view>
						<view class="flex align-center mt5">
							<text class="f18 bold red">{{item.price}}万元</text>
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
		<view v-if="active==2">
			<view class="service-list" v-if="detail.leasehouselist.length>0">
				<navigator class="item " v-for="(item,index) in detail.leasehouselist" :key="index" hover-class="none"
					:url="'../zufang/show?id='+item.leasehouseid">
					<image :src="item.mainpic" mode="scaleToFill" class="thumb mr10 radius10">
					</image>
					<view class="info">
						<view class="f16 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.buju}}/{{item.area}}㎡/{{item.floor}}</view>
						<view class="tags">
							<view class="tag" v-for="son in teseArr(item.tese)" :key="son">{{son}}</view>
						</view>
						<view class="flex align-center mt5">
							<text class="f18 bold red">{{item.zhujin}}元/月</text>
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
		<view class="chat-box flex align-center around">
		<!-- 	<view class="btn">立即咨询</view> -->
			<button class="btn" open-type="contact">立即咨询</button>
			<view class="btn active" @click="makecall">拨打电话</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				id: 0,
				active: 0,
				swipers: [],
				detail: {
					oldhouselist:[],
					newlist:[],
					leasehouselist:[],
				}
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getLists()
		},
		onShow() {

		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		computed: {
			teseArr() {
				return function(tese) {
					if (tese) {
						return tese.split(',')
					}
					return [];
				}
			}
		},
		components: {

		},
		methods: {
			setActive(index) {
				this.active = index
			},
			async getLists() {
				let res = await this.$u.post('/api/jjrlist', {
					userid: this.id
				})
				this.detail = res.data
			},
			change(e) {
				this.current = e.detail.current;
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			async guanzhu(){
				let res = await this.$u.post('/api/follow/add', {
					economicmanid: this.id
				})
				if(res.code==0){
					this.$u.toast('关注成功')
					this.getLists()
				}
			},
			makecall(){
				uni.makePhoneCall({
					phoneNumber:''
				})
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
	.header {
		width: 750rpx;
		height: 353rpx;
		position: absolute;
	}

	.user-box {
		width: 702rpx;
		height: 197rpx;
		margin: 60rpx auto 20rpx auto;
		position: relative;

	}

	.user-box .user-info {
		position: relative;
		z-index: 20;
		height: 197rpx;
	}

	.user-box .bg {
		width: 702rpx;
		height: 197rpx;
		position: absolute;
		top: 0;
		z-index: 10;
	}

	.user-box .user-info .avatar {
		width: 125rpx;
		height: 125rpx;
		border-radius: 50%;
	}

	.user-box .user-info .icon {
		width: 25rpx;
		height: 19rpx;
	}

	.user-box .guanzhu {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		width: 28rpx;
		height: 25rpx;
		z-index: 20;
	}

	.user-box .tongji {
		position: absolute;
		bottom: 20rpx;
		right: 20rpx;
		z-index: 20;
		color: #fff;
		text-align: right;
		font-size: 21rpx;
	}

	.tab {
		display: flex;
		justify-content: space-around;
		width: 750rpx;
		height: 90rpx;
		align-items: center;
		position: relative;
		z-index: 20;
		color: #333333;
		font-size: 28rpx;
	}

	.tab .item {
		padding-bottom: 10rpx;
		border-bottom: #fff 2px solid;
	}

	.tab .item.active {
		border-bottom: #C71114 2px solid;
	}

	.chat-box {
		background-color: #fff;
		position: fixed;
		height: 100rpx;
		box-shadow: -20rpx 0 10px rgba(0, 0, 0, 0.5);
		width: 750rpx;
		bottom: 0;
	}

	.chat-box .btn {
		width: 309rpx;
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

	.service-list {
		display: flex;
		flex-direction: column;
		width: 712rpx;
		margin: 0 auto;
		padding-bottom: 20rpx;
	}

	.service-list .item {
		display: flex;
		padding: 20rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		margin-top: 20rpx;
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
