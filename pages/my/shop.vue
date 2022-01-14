<template>
	<view class="container">
		<image src="../../static/images/jingjiren.png" mode="scaleToFill" class="header"></image>
		<uni-nav-bar title="我的店铺" backgroundColor="rgba(255,255,255,0)" :statusBar="true" :border="false"
			color="#ffffff" @clickLeft="clickLeft">
			<view slot="left">
				<uni-icons type="back" size="24" color="#ffffff"></uni-icons>
			</view>
		</uni-nav-bar>
		<view class="user-box">
			<view class="user-info flex align-center">
				<image :src="user.touxiangUrl" mode="scaleToFill" class="avatar ml10"></image>
				<view class="ml10">
					<view class="f20 mt10">{{shop.username}}</view>
				</view>
			</view>
			<view class="flex between user-bottom">
				<navigator class="f12 item" hover-class="none" url="./favor">
					<view class="f18 bold">{{shop.remainder}}天</view>
					<view class="f12 color3 mt5">服务剩余</view>
				</navigator>
				<navigator class="f12 item" hover-class="none" url="./follow">
					<view class="f18 bold">{{shop.count==null?0:shop.count}}个</view>
					<view class="f12 color3 mt5">平台在售/租房源</view>
				</navigator>
				<navigator class="f12 item" hover-class="none" url="./mark">
					<view class="f18 bold">{{shop.followNum}}个</view>
					<view class="f12 color3 mt5">关注</view>
				</navigator>
			</view>
			<image src="../../static/images/my7.png" mode="scaleToFill" class="bg"></image>
		</view>
		<view class="cell-box">
			<view class="cell" @click="select">
				<image src="../../static/images/my10.png" class="icon"></image>
				<text class="flex1">发布房源</text>
				<uni-icons type="right" size="16"></uni-icons>
			</view>
			<navigator class="cell" hover-class="none" url="./xieyi">
				<image src="../../static/images/my11.png" class="icon"></image>
				<text class="flex1">我的发布</text>
				<uni-icons type="right" size="16"></uni-icons>
			</navigator>
			<view class="cell">
				<image src="../../static/images/my12.png" class="icon"></image>
				<text class="flex1">我的客户</text>
				<uni-icons type="right" size="16"></uni-icons>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="post-box">
				<view class="flex between mlr10 mtb10">
					<text class="f15 color3">选择发布房源类型</text>
					<uni-icons type="closeempty" size="24" @click="$refs.popup.close()"></uni-icons>
				</view>
				<view class="post">
					<navigator class="item" hover-class="none" url="../post/ershoufang">
						<image src="../../static/images/f1.png" class="icon"></image>
						<view>二手房</view>
					</navigator>
					<view class="item">
						<image src="../../static/images/f2.png" class="icon"></image>
						<view>租房</view>
					</view>
					<view class="item">
						<image src="../../static/images/f3.png" class="icon"></image>
						<view>新房</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				active: 0,
				user: {},
				economicman: {},
				shop: {
					auth: true,
					count: 0,
					followNum: 0,
					photo: "",
					remainder: 0,
					username: "",
				}
			}
		},
		onLoad() {
			this.getUserinfo()
			this.getDianpu()
		},
		onShow() {

		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		components: {

		},
		methods: {
			async getUserinfo() {
				let res = await this.$u.post('/api/getuserinfo')
				this.user = res.data.user
				this.economicman = res.data.economicman
			},
			async getDianpu() {
				let res = await this.$u.post('/api/mydianpu')
				console.log(res.data)
				this.shop = res.data
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			setActive(index) {
				this.active = index
			},
			change(e) {
				this.current = e.detail.current;
			},
			select() {
				this.$refs.popup.open()
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
		width: 722rpx;
		height: 322rpx;
		margin: 20rpx auto 20rpx auto;
		position: relative;
		display: flex;
		flex-direction: column;

	}

	.user-box .user-info {
		position: relative;
		z-index: 20;
		margin-left: 30rpx;
	}

	.user-box .bg {
		width: 722rpx;
		height: 322rpx;
		position: absolute;
		top: 0;
		z-index: 10;
	}

	.user-box .user-info .avatar {
		width: 125rpx;
		height: 125rpx;
		border-radius: 50%;
	}

	.user-box .user-bottom {
		position: relative;
		z-index: 20;
		justify-content: space-around;
		margin-top: auto;
		margin-bottom: 50rpx;
	}

	.user-box .user-bottom .item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.user-box .user-bottom image {
		width: 48rpx;
		margin-bottom: 10rpx;
	}

	.cell-box {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}

	.cell-box .cell {
		height: 100rpx;
		display: flex;
		align-items: center;
		border-bottom: #F1F1F1 1px solid;
		padding: 0 30rpx;
		font-size: 30rpx;
		color: #333333;
	}

	.cell-box .cell .icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 20rpx;
	}

	.post-box {
		background-color: #fff;
		padding: 20rpx 0;
	}

	.post {
		display: flex;
		justify-content: space-around;
		padding: 20rpx;
	}

	.post .item {
		font-size: 28rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.post .item .icon {
		width: 100rpx;
		height: 100rpx;
		margin-bottom: 10rpx;
	}
</style>
