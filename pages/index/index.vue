<template>
	<view class="container">
		<ds-swiper></ds-swiper>
		<uni-search-bar @confirm="search" v-model="keywords"></uni-search-bar>
		<view class="grid">
			<navigator class="grid-item" hover-class="none" url="../ershoufang/index" open-type="switchTab">
				<image src="../../static/images/grid@2x.png" mode="scaleToFill" class="icon"></image>
				<view class="title">二手房</view>
			</navigator>
			<navigator class="grid-item" hover-class="none" url="../news/index">
				<image src="../../static/images/grid12@2x.png" mode="scaleToFill" class="icon"></image>
				<view class="title">新房</view>
			</navigator>
			<navigator class="grid-item" hover-class="none" url="../zufang/index">
				<image src="../../static/images/grid13@2x.png" mode="scaleToFill" class="icon"></image>
				<view class="title">租房</view>
			</navigator>
			<navigator class="grid-item" hover-class="none" url="../sale/index" open-type="switchTab">
				<image src="../../static/images/grid14@2x.png" mode="scaleToFill" class="icon"></image>
				<view class="title">急售房源</view>
			</navigator>
			<navigator class="grid-item" hover-class="none" url="../bieshu/index">
				<image src="../../static/images/grid15@2x.png" mode="scaleToFill" class="icon"></image>
				<view class="title">独栋别墅</view>
			</navigator>
			<navigator class="grid-item" hover-class="none" url="../about/index">
				<image src="../../static/images/grid16@2x.png" mode="scaleToFill" class="icon"></image>
				<view class="title">公司介绍</view>
			</navigator>
			<navigator class="grid-item" hover-class="none" url="../about/fengcai">
				<image src="../../static/images/grid12@2x.png" mode="scaleToFill" class="icon"></image>
				<view class="title">公司风采</view>
			</navigator>
			<navigator class="grid-item" url="../about/case">
				<image src="../../static/images/grid18@2x.png" mode="scaleToFill" class="icon"></image>
				<view class="title">成功案例</view>
			</navigator>
		</view>
		<uni-notice-bar showIcon="true" scrollable="true" single="true"
			text="为每一个梦想找一个家的服务宗旨及专业的服务理念，为客户提供完善、周到、贴心、放心的服务，期待为您服务，敬侯您的佳音。"></uni-notice-bar>
		<view class="box">
			<view class="box-t">
				<view class="title">
					急售房源
					<text class="line"></text>
				</view>
				<view class="small">经纪人优选房源，可随时看房</view>
				 <navigator open-type="switchTab" class="more" hover-class="none" url="../sale/index">
					更多
				</navigator> 
			</view>
			<view class="box-c">
				<view class="service-list">
					<navigator class="item  mb10" v-for="(item,index) in jsjz" :key="index" hover-class="none"
						:url="'../ershoufang/show?id='+item.oldhouseid">
						<image :src="item.mainpic" mode="scaleToFill" class="thumb mb10 radius10">
						</image>
						<view class="f14 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.floor}}</view>
						<view class="f12 bold red">{{item.shouji}}万元</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="box mt10">
			<view class="box-t">
				<view class="title">
					新盘推荐
					<text class="line"></text>
				</view>
				<view class="small">西藏新楼盘，随时随地在线看房</view>
			</view>
			<view class="box-c">
				<view class="service-list">
					<navigator class="item  mb10" v-for="(item,index) in loupans" :key="index" hover-class="none"
						:url="'../news/loupan?id='+item.estateid">
						<image :src="item.mainpic" mode="scaleToFill" class="thumb mb10 radius10">
						</image>
						<view class="f14 bold" style="text-align: center;">{{item.estatename}}</view>
						<!-- <view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
						<view class="f12 bold red">{{item.price}}</view> -->
					</navigator>
				</view>
			</view>
		</view>
		<view class="adv">
			<navigator hover-class="none" url="../post/ershoufang">
				<image src="../../static/images/diy1.jpg" mode="scaleToFill"></image>
			</navigator>
		</view>
		<view class="box mt10">
			<view class="box-t">
				<!-- <view class="title"></view> -->
				<navigator open-type="switchTab" class="more" hover-class="none" url="../ershoufang/index">
					更多
				</navigator>
				<view class="title">
					二手房推荐
					<text class="line"></text>
				</view>
				<view class="small">经纪人优选房源，可随时看房</view>
			</view>
			<view class="box-c">
				<view class="service-list">
					<navigator class="item  mb10" v-for="(item,index) in tjfy_ershoufang" :key="index"
						hover-class="none" :url="'../ershoufang/show?id='+item.oldhouseid">
						<image :src="item.mainpic" mode="scaleToFill" class="thumb mb10 radius10">
						</image>
						<view class="f14 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.floor}}</view>
						<view class="f12 bold red">{{item.shouji}}万元</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="adv">
			<!-- <view class="title">
				我要买房/租房
			</view>
			<view class="desc">
				在此登记您的房屋信息
			</view> -->
			<navigator hover-class="none" url="../post/apply">
				<image src="../../static/images/diy2.jpg" mode="scaleToFill"></image>
			</navigator>
		</view>
		<view class="box mt10">
			<view class="box-t">
				<view class="title">
					新房推荐
					<text class="line"></text>
				</view>
				<view class="small">西藏新房，随时随地在线看房</view>
			</view>
			<view class="box-c">
				<view class="service-list">
					<navigator class="item  mb10" v-for="(item,index) in tjfy_news" :key="index" hover-class="none"
						:url="'../news/house?id='+item.newhouseid">
						<image :src="item.mainpic" mode="scaleToFill" class="thumb mb10 radius10">
						</image>
						<view class="f14 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
						<view class="f12 bold red">{{item.price}}</view>
					</navigator>
				</view>
			</view>
		</view>
		<!-- <navigator class="adv" hover-class="none" url="../post/zufang">
			<view class="title">
				帮我找房
			</view>
			<view class="desc">
				在此登记您的房屋信息
			</view>
			<image src="../../static/images/home3.png" mode="scaleToFill" class="image"></image>
		</navigator> -->
		 <view class="box mt10">
			<view class="box-t">
				<navigator   class="more" hover-class="none" url="../bieshu/index">
					更多
				</navigator>
				<view class="title">
					独栋别墅推荐
					<text class="line"></text>
				</view>
				<view class="small">西藏独栋别墅，随时随地在线看房</view>
			</view>
			<view class="box-c">
				<view class="service-list">
					<navigator class="item  mb10" v-for="(item,index) in tjfy_bieshu" :key="index" hover-class="none"
						:url="'../ershoufang/show?id='+item.oldhouseid">
						<image :src="item.mainpic" mode="scaleToFill" class="thumb mb10 radius10">
						</image>
						<view class="f14 bold">{{item.title}}</view>
						<view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.floor}}</view>
						<view class="f12 bold red">{{item.shouji}}万元</view>
					</navigator>
				</view>
			</view>
		</view> 
		<view class="box mt10">
			<view class="box-t">
				<view class="box-t">
					<view class="title">
						公司介绍
						<text class="line"></text>
					</view>
					<view class="small">为每一个梦想找一个家</view>
				</view>
			</view>
			<view class="box-c article">
				<!-- <u-parse :html="about.js.content"></u-parse> -->
				<image
					src="http://xzjmfc.xzfanqie.com/profile/upload/2021/12/29/1effdddd-82be-4f34-8134-3d7aeda3cb7e.jpg"
					class="about-img" mode="widthFix" align="right" hspace="5" vspace="5"></image>
				西藏姐妹房产信息服务有限公司，位于拉萨市城关区夺底北路天露康桑1栋1单元101号；公司成立于2019年，注册资金：500万元整，由西藏藏族大学生创办，是一家集房产交易服务、资产管理服务为一体的房产服务平台，业务覆盖二手住宅、商铺及写字楼的买卖和租赁；一手楼盘的营销代理；房地产政策咨询；房产按揭、抵押贷款及产权过户等业务。
				<!-- 公司致力于改变整个行业的形象，力图将每一位员工培养成高效、高能的专业房产经纪人。公司秉承“为每一个梦想找一个家”的服务宗旨及“公正、专业”的服务理念，为广大客户、各界朋友提供完善、周到、贴心、放心的服务。姐妹房产全体员期待为您服务，恭候您的光临和垂询。 -->
				<view class="about-more">
					<uni-icons type="more-filled" size="24" class="mt5"></uni-icons>
					<navigator hover-class="none" url="../about/index" class="mlr5">查看详情</navigator>
					<uni-icons type="more-filled" size="24" class="mt5"></uni-icons>
				</view>

			</view>
		</view>
		
		<view class="box mt10">
			<view class="box-t">
				<view class="title">
					优秀员工
					<text class="line"></text>
				</view>
				<view class="small"></view>
			</view>
			<view class="box-c">
				<view class="service-list">
					<navigator class="yuangong-item  mb10" v-for="(item,index) in yxyg" :key="index" hover-class="none"
						:url="'../news/yuangong?id='+item.yxygid">
						<!-- {{item.pic}} -->
						<image :src="item.pic" mode="scaleToFill" class="thumb mb10 radius10">
						</image>
						<view class="f14 bold" style="text-align: center;">{{item.name}}</view>
						<!-- <view class="gray f12 mtb5">{{item.huxing}}/{{item.area}}㎡/{{item.chaoxiang}}</view>
						<view class="f12 bold red">{{item.price}}</view> -->
					</navigator>
				</view>
			</view>
		</view>
		
		
		
		<view class="box mt10">
			<view class="box-t">

				<view class="title">
					企业文化
					<text class="line"></text>
				</view>
			</view>
			<view class="box-c">
				<view class="wenhua-box">
					<view class="wenhua">
						<view class="wenhua-item">1、我们尊重每一位员工的个性和发展机会；</view>
						<view class="wenhua-item">2、各司其职，对结果负责；</view>
						<view class="wenhua-item">3、我们不允许信息缓慢到达；</view>
						<view class="wenhua-item">4、我们的荣誉来自每一位客户的认同；</view>
						<!--<view class="wenhua-item">5、用创新的思考方式来超越目标；</view>
					<view class="wenhua-item">6、提升专业化素养，提供专业化服务，塑造专业化公司形象；</view>
					<view class="wenhua-item">7、我们的追求是在房产中介的领域里实现客户的梦想，并依靠点点滴滴，持之以恒的努力追求，使我们成为行业翘楚。</view> -->
					</view>
					<image src="../../static/images/logo.png" class="wenhua-logo" mode="widthFix"></image>
				</view>
				<!-- <u-parse :html="about.wh.content"></u-parse> -->

				<view class="about-more">
					<uni-icons type="more-filled" size="24" class="mt5"></uni-icons>
					<navigator hover-class="none" url="../about/wenhua" class="mlr5">查看详情</navigator>
					<uni-icons type="more-filled" size="24" class="mt5"></uni-icons>
				</view>
			</view>

		</view>
		<!-- <view class="box mt10">
			<view class="box-t">
				<view class="title">企业风采</view>				 
			</view>
			<view class="box-c">
				<u-parse :html="detail.wh.content"></u-parse>
			</view>
		</view> -->
	</view>
</template>

<script>
	const app = getApp()
	import uParse from "@/components/u-parse/u-parse.vue";
	import DsSwiper from '../../components/ds/ds-swiper.vue'
	export default {
		data() {
			return {
				map: null,
				district: '',
				keywords:'',
				swipers: [],
				grids: [0, 0],
				currentGrid: 0,
				cates: [],
				services: [],
				area_cn: '',
				jsjz: [],
				tjfy: [],
				tjfy_ershoufang: [],
				tjfy_zufang: [],
				tjfy_news: [],
				tjfy_bieshu: [],
				about: {},
				loupans:[],
				yxyg:[]
			}
		},
		onLoad() {

		},
		onShow() {
			//this.getSwiper()
			this.getJsjz()
			this.getAbout()
			this.getTjfy()
			this.getLoupan()
			this.getYxyg()
		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		components: {
			uParse,
			DsSwiper
		},
		methods: {
			search(e){
				console.log(e)
				uni.navigateTo({
					url:'/pages/index/search?k='+this.keywords
				})
			},
			async getLoupan(){
				let res = await this.$u.post('/api/listestate')
				this.loupans = res.data
			},
			async getJsjz() {
				let res = await this.$u.post('/api/urgentList', {
					type: 2
				})
				this.jsjz = res.data.list
			},
			async getTjfy() {
				this.$u.post('/api/tuijianlist', {
					type: 1
				}).then((res) => {
					this.tjfy_ershoufang = res.data
				})
				this.$u.post('/api/tuijianlist', {
					type: 2
				}).then((res) => {
					this.tjfy_news = res.data
				})
				this.$u.post('/api/tuijianlist', {
					type: 3
				}).then((res) => {
					this.tjfy_zufang = res.data
				})
				this.$u.post('/api/tuijianlist', {
					type: 4
				}).then((res) => {
					this.tjfy_bieshu = res.data
				})
			},
			async getAbout() {
				let res = await this.$u.post('/api/gsjs')
				console.log(res.data)
				this.about = res.data
			},
			async getYxyg(){
				let res = await this.$u.post('/api/yxyg')
				this.yxyg = res.data
				console.log('yxyg====='+this.yxyg)
			},
			
		}
	}
</script>
<style>
	page {
		background-color: #F1F4F8;
	}
</style>
<style scoped>
	.grid {
		display: flex;
		flex-wrap: wrap;
		margin: 30rpx 20rpx 10rpx 20rpx;
	}

	.grid .grid-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24rpx;
		color: #333333;
		margin-bottom: 30rpx;
	}

	.grid .grid-item .icon {
		width: 92rpx;
		height: 92rpx;
		margin-bottom: 10rpx;
	}

	.box {
		width: 750rpx;
		background: #FFFFFF;
	}

	.box .box-t {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		padding: 20rpx;
		position: relative;
	}

	.box .box-t .title {
		font-size: 32rpx;
		font-weight: bold;
		position: relative;
		z-index: 0;
	}

	.box .box-t .small {
		font-size: 24rpx;
		color: #888;
		margin-top: 10rpx;
	}

	.box .box-t .title .line {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 16rpx;
		background-color: rgba(255, 177, 158, .6);
		border-radius: 20rpx;
	}

	.box .box-t .more {
		font-size: 24rpx;
		color: #777;
		position: absolute;
		top:20rpx;
		right: 20rpx;
	}

	.box .box-t .more image {
		width: 19rpx;
		height: 14rpx;
	}

	.adv {
		width: 750rpx;
		height: 200rpx;
		position: relative;
		margin: 20rpx auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.adv image {
		width: 750rpx;
		height: 200rpx;
	}

	.adv .image {
		position: absolute;
		z-index: 2;
	}

	.adv .title {
		font-size: 56rpx;
		font-weight: bold;
		color: #FFFFFF;
		text-shadow: 0px 3px 1px rgba(68, 1, 1, 0.56);
		position: relative;
		z-index: 20;
		letter-spacing: 10rpx;
		margin-bottom: 20rpx;
	}

	.adv .desc {
		width: 246rpx;
		height: 28rpx;
		border-radius: 16rpx;
		font-size: 21rpx;
		font-weight: 500;
		color: #7C0701;
		position: relative;
		z-index: 20;
		text-align: center;
		line-height: 28rpx;
		background-color: #fff;
	}

	.service-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 0 20rpx;
		padding-bottom: 20rpx;
	}

	.service-list .item {
		width: 330rpx;
	}

	.service-list .item .thumb {
		width: 100%;
		height: 185rpx;
	}
	.service-list .yuangong-item {
		width:calc(100vw /4 - 30rpx);
	}

	.service-list .yuangong-item .thumb {
		width: 100%;
		height: calc(100vw /4 - 30rpx);
	}
	.service-list .item .desc {
		font-size: 77rpx;
	}

	.service-list .item .title {
		font-size: 24rpx;
	}

	.article {
		font-size: 28rpx;
		padding: 0 20rpx 20rpx 20rpx;
		overflow: hidden;
		color: #666;
		line-height: 48rpx;
	}

	.about-img {
		width: 320rpx;
		float: left;
		border-radius: 16rpx;
		margin: 0 20rpx 0 0;
	}

	.about-more {
		font-size: 32rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		padding: 10rpx 0 30rpx 0;
		justify-content: center;
		height: 36rpx;
		line-height: 36rpx;
		color: #666;
	}

	.wenhua-box {
		display: flex;
		padding: 0 20rpx 20rpx 20rpx;
		color: #666;
		font-size: 28rpx;
		line-height: 48rpx;
	}

	.wenhua-box .wenhua-logo {
		width: 200rpx;
	}
</style>
