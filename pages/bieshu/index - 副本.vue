<template>
	<view class="container">
		<ds-swiper></ds-swiper>
		<ds-search></ds-search>
		<view class="service-list" v-if="lists.length>0">
			<navigator class="item  mb10" v-for="(item,index) in lists" :key="index" hover-class="none"
				:url="'../bieshu/show?id='+item.villaid">
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
</template>

<script>
	import DsSearch from '../../components/ds/ds-search.vue'
	import DsSwiper from '../../components/ds/ds-swiper.vue'
	const app = getApp()
	export default {
		data() {
			return {
				map: null,
				district: '',
				lists: [],
				grids: [0, 0],
				current: 0,
				currentGrid: 0,
				dotsStyles: {
					backgroundColor: 'rgba(255, 255, 255, .2)',
					border: 'none',
					color: '#fff',
					selectedBackgroundColor: 'rgba(255, 255, 255, .7)',
					selectedBorder: 'none'
				},
				cates: [],
				services: [],
				area_cn: '',
				form:{		
					chanquanlx:'',
					floor1:'',
					floor2:'',
					huxing:'',
					mianji1:'',
					mianji2:'',
					niandai:'',
					price1:'',
					price2:'',
					region:'',
					zhuangxiu:'',
					pageNum:1,
					pageSize:10
				},
				total:0 
			}
		},
		onLoad() {
			this.getLists()
		},
		onShow() {
			 
		},
		onPullDownRefresh(){
			this.reset()		
		},
		onReachBottom(){
			if(this.form.pageNum<this.total){
				this.form.pageNum++
				this.getLists()
			}else{
				this.$u.toast('没有更多数据了')
			}	
			
		},
		onUnload() {
			// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果			
		},
		components: {
			DsSearch,
			DsSwiper
		},
		computed:{
			teseArr(){
				return function(tese){
					if(tese){					 
						return tese.split(',')
					}
					return [];					
				}				
			}
		},
		methods: {
			reset(){
				this.total = 0
				this.lists = []
				this.form={
					chanquanlx:'',
					floor1:'',
					floor2:'',
					huxing:'',
					mianji1:'',
					mianji2:'',
					niandai:'',
					price1:'',
					price2:'',
					region:'',
					zhuangxiu:'',
					pageNum:1,
					pageSize:10
				}
				this.getLists()	
			},
			search(){
				this.lists = []
				this.form.pageNum = 1
				this.getLists()
			},
			async getLists() {
		 
				let res = await this.$u.post('/api/listilvla',this.form)
				uni.stopPullDownRefresh()
				this.lists = this.lists.concat(res.data.list)
				this.total = res.data.count
			},
			change(e) {
				this.current = e.detail.current;
			}

		}
	}
</script>
<style>
	page {
		background-color: #fff
	}
</style>
<style scoped>
	.banner {
		width: 750rpx;
		height: 162rpx;
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		margin: 30rpx 30rpx 10rpx 30rpx;
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
