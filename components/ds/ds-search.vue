<template>
	<view class="search-box">
		<view class="search">
			<view v-for="(item,index) in lists" :key="index" :class="{item:true,active:active==index?true:false}"
				@click="select(index)">
				{{item}}
				<uni-icons type="bottom" size="14" color="#C71114" style="margin-left: 10rpx;" v-if="active==index">
				</uni-icons>
				<uni-icons type="bottom" size="14" style="margin-left: 10rpx;" v-else></uni-icons>
			</view>
		</view>
		<view class="popup" v-if="active==0">
			<view class="popup-content" style="height: 600rpx; margin-bottom: 0;">
				<olylis-cascader :options="area_arr" :value="selectedValue" @change="handleChange" :is-show-nav="false">
				</olylis-cascader>
			</view>
		</view>
		<view class="popup" v-if="active==1">
			<view class="popup-content">
				<view class="dl">
					<view class="tags">
						<view :class="{tag:true,active:priceIndex==index ? true:false}"
							v-for="(item,index) in jiageList" :key="index" @click="setPrice(index)">{{item.text}}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="popup" v-if="active==2">
			<view class="popup-content">
				<view class="dl">
					<view class="tags">
						<view :class="{tag:true,active:huxingIndex==index ? true:false}"
							v-for="(item,index) in huxing_arr" :key="index" @click="setHuxing(index)">{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="popup" v-if="active==3">
			<view class="popup-content">
				<view class="dl">
					<view class="dt">建筑面积</view>
					<view class="tags">
						<view :class="{tag:true,active:areaIndex==index ? true:false}"
							v-for="(item,index) in mianjiList" :key="index" @click="areaIndex=index">{{item.text}}
						</view>
					</view>
				</view>
				<view class="dl">
					<view class="dt">楼层</view>
					<view class="tags">
						<view :class="{tag:true,active:lcIndex==index ? true:false}"
							v-for="(item,index) in louchengList" :key="index" @click="lcIndex=index">{{item.text}}
						</view>
					</view>
				</view>
				<view class="dl">
					<view class="dt">装修</view>
					<view class="tags">
						<view :class="{tag:true,active:zxIndex==index ? true:false}" v-for="(item,index) in zx_arr"
							:key="index" @click="zxIndex=index">{{item.name}}</view>
					</view>
				</view>
				<view class="dl">
					<view class="dt">年代</view>
					<view class="tags">
						<view :class="{tag:true,active:ndIndex==index ? true:false}" v-for="(item,index) in nd_arr"
							:key="index" @click="ndIndex=index">{{item.name}}</view>
					</view>
				</view>
				<view class="dl">
					<view class="dt">权属</view>
					<view class="tags">
						<view :class="{tag:true,active:qsIndex==index ? true:false}" v-for="(item,index) in qs_arr"
							:key="index" @click="qsIndex=index">{{item.name}}</view>
					</view>
				</view>
				<view class="popup-btns">
					<view class="btn btn1" @click="clear">
						清空
					</view>
					<view class="btn btn2" @click="search">
						确认
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import olylisCascader from './olylis-cascader'
	let currentPage = null
	export default {
		data() {
			return {
				show: false,
				active: -1,
				priceIndex: -1,
				huxingIndex: -1,
				areaIndex: -1,
				lcIndex: -1,
				zxIndex: -1,
				ndIndex: -1,
				qsIndex: -1,
				lists: [
					'区域', '价格', '房型', '更多'
				],
				jiageList: [],
				louchengList: [],
				mianjiList: [],
				huxing_arr: [],
				zx_arr: [],
				qs_arr: [],
				nd_arr: [],
				area_arr: [],

				selectedValue: [],
				treeData: []
			};
		},
		components: {
			olylisCascader
		},
		created() {


		},
		mounted() {
			this.getParams()
			this.getHuxing()
			let pages = getCurrentPages()
			currentPage = pages[pages.length - 1]
			  

		},
		onShow() {


		},
		props: {
			district: {
				type: String,
				default: ''
			}
		},
		methods: {
			handleChange(selectedValue, clickItem) {
				if (selectedValue.length == 3) {
					this.selectedValue = selectedValue
					this.active = -1
					currentPage.$vm.form.region = selectedValue[2]
					currentPage.$vm.search()
				}

			},
			getHuxing() {
				this.$u.post('/api/huxingcode').then((res) => {
					res.data.forEach((item) => {
						this.huxing_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/zxcode').then((res) => {
					res.data.forEach((item) => {
						this.zx_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/lpqscode').then((res) => {
					res.data.forEach((item) => {
						this.qs_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/niandaicode').then((res) => {
					res.data.forEach((item) => {
						this.nd_arr.push({
							value: item.dictCode,
							name: item.dictLabel,
						})
					})
				})
				this.$u.post('/api/area').then((res) => {
					this.area_arr = res.data
				})
			},
			async getParams() {
				let res = await this.$u.post('/api/searchParam')
				this.jiageList = res.data.jiageList
				this.louchengList = res.data.louchengList
				this.mianjiList = res.data.mianjiList
			},
			select(index) {
				if (this.active == index) {
					this.active = -1
					this.show = false
					return
				} else {
					this.show = true
					this.active = index
				}
			},
			setPrice(index) {
				currentPage.$vm.form.price1 = this.jiageList[index].minkey
				currentPage.$vm.form.price2 = this.jiageList[index].maxkey
				this.active = -1
				this.priceIndex = index
				currentPage.$vm.search()
			},
			setHuxing(index) {
				//uni.$emit('filter_huxing',this.huxing_arr[index])		
				let pages = getCurrentPages()
				currentPage = pages[pages.length - 1]
				currentPage.$vm.form.huxing = this.huxing_arr[index].value
				this.active = -1
				this.huxingIndex = index
				currentPage.$vm.search()
			},
			clear() {
				currentPage.$vm.reset()
				this.active = -1
				this.priceIndex = -1
				this.huxingIndex = -1
				this.areaIndex = -1
				this.lcIndex = -1
				this.zxIndex = -1
				this.ndIndex = -1
				this.qsIndex = -1
			},
			search() {
				if (this.areaIndex > -1) {
					currentPage.$vm.form.mianji1 = this.mianjiList[this.areaIndex].minkey
					currentPage.$vm.form.mianji2 = this.mianjiList[this.areaIndex].maxkey
				}
				if (this.lcIndex > -1) {
					currentPage.$vm.form.floor1 = this.louchengList[this.lcIndex].minkey
					currentPage.$vm.form.floor2 = this.louchengList[this.lcIndex].maxkey
				}
				if (this.zxIndex > -1) {
					currentPage.$vm.form.zhuangxiu = this.zx_arr[this.zxIndex].value
				}
				if (this.ndIndex > -1) {
					currentPage.$vm.form.niandai = this.nd_arr[this.ndIndex].value
				}
				if (this.qsIndex > -1) {
					currentPage.$vm.form.chanquanlx = this.qs_arr[this.qsIndex].value
				}
				currentPage.$vm.search()
				this.active = -1
			},
			moveHandle() {}
		},
	};
</script>

<style scoped>
	/*搜索组件*/

	.search-box {
		height: 90rpx;
		position: relative;
		width: 750rpx;

	}

	.search-box .popup {
		position: absolute;
		z-index: 20;
		width: 750rpx;
		background-color: rgba(0, 0, 0, 0.5);
		height: 100vh;
		overflow: hidden;
	}

	.search-box .popup .popup-content {
		background-color: #fff;
		padding: 0 0 30rpx 0;
		border-top: #eee 1px solid;
	}

	.search-box .search {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		width: 750rpx;
		z-index: 300;
		height: 90rpx;
	}

	.search-box .search .item {
		width: 25%;
		font-size: 24rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #404040;
		height: 90rpx;
	}

	.search-box .search .item.active {
		color: #C71114;
		font-weight: bold;
	}

	.search-box .popup .dl {
		width: 678rpx;
		margin: 20rpx auto 0 auto;
	}

	.search-box .popup .dl .dt {
		color: #333333;
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}

	.search-box .popup .dl .tags {
		display: grid;
		grid-template-columns: 194rpx 194rpx 194rpx;
		grid-row-gap: 20rpx;
		justify-content: space-between;
		width: 678rpx;
	}

	.search-box .popup .dl .tags .tag {
		background-color: #EDEBEB;
		height: 40rpx;
		background: #E8E6E6;
		border-radius: 4rpx;
		font-size: 24rpx;
		color: #333333;
		text-align: center;
		line-height: 40rpx;
	}

	.search-box .popup .dl .tags .tag.active {
		background-color: #C71114;
		color: #fff;
	}

	.search-box .popup .popup-btns {
		display: flex;
		justify-content: space-between;
		width: 678rpx;
		margin: 0 auto;
		border-top: #eee 1px solid;
		margin-top: 20rpx;
		padding: 20rpx 36rpx 0 36rpx;
	}

	.search-box .popup .popup-btns .btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 75rpx;
		font-size: 28rpx;
		border-radius: 8rpx;
	}

	.search-box .popup .popup-btns .btn1 {
		width: 230rpx;
		color: #404040;
		border: #ddd 1px solid;
	}

	.search-box .popup .popup-btns .btn2 {
		width: 420rpx;
		color: #FFFFFF;
		background-color: #C71114;
	}
</style>
