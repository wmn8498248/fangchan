<template>
	<view class="container">
		<view class="bg-white pb10">
			<view class="f12 mlr10 mt10">
				<uni-icons type="sound-filled" size="16" color="#C71114"></uni-icons> 您还可以发布5套二手房房源
			</view>
			<view  class=" mlr10 pt10 mb10" style="border-bottom: none;">
				<view class="label f15">房屋亮点</view>
			</view>
			<view class="mlr10">
				<uni-data-checkbox  mode="tag" :localdata="ld_arr"  multiple selectedColor="#C71114" v-model="tese"></uni-data-checkbox>
			</view>
		</view>
		<view class="bg-white mt10 pb10">
			<view class=" mlr10 pt10">
				<view class="label f15 bold">房源介绍</view>
			</view>
			<view class="input-box">
				<view class="f14">小区介绍</view>
				<uni-easyinput placeholder="请输入小区介绍（选填）" :inputBorder="false" type="textarea" v-model="form.xiaoqujs">
				</uni-easyinput>
			</view>
			<view class="input-box ">
				<view class="f14">核心卖点</view>
				<uni-easyinput placeholder="请输入核心卖点（选填）" :inputBorder="false" type="textarea" v-model="form.hxmaidian">
				</uni-easyinput>
			</view>
			<view class="input-box">
				<view class="f14">周边配置</view>
				<uni-easyinput placeholder="请输入周边配置（选填）" :inputBorder="false" type="textarea" v-model="form.zppeizhi">
				</uni-easyinput>
			</view>
			<view class="input-box">
				<view class="f14">交通出行</view>
				<uni-easyinput placeholder="请输入周围公交地铁信息（选填）" :inputBorder="false" type="textarea" v-model="form.jiaotongxinxi">
				</uni-easyinput>
			</view>
		</view>
		<view class="buttons" @click="save">
			确定
		</view>
 
	</view>
</template>

<script>
	export default {
		data() {
			return {			
				ld_arr:[],
				tese:[],
				form: {
					tese:'',
					hxmaidian:'',
					xiaoqujs:'',
					zppeizhi:'',
					jiaotongxinxi:''
				},

			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init(){
				this.$u.post('/api/ldcode').then((res) => {
					res.data.forEach((item) => {
						this.ld_arr.push({
							value: item.dictCode,
							text: item.dictLabel,
						})
						
					})
					console.log(this.ld_arr)
				})
				 
			},
			async save(){
				let pages = getCurrentPages();					
				let beforePage = pages[pages.length - 2];
				var form = Object.assign(beforePage.$vm.form,this.form);
				if(!this.$u.test.mobile(form.tel)){
					this.$u.toast('联系电话必填')
					return
				}
				form.mainpic = form.picList[0]
				//form.mainpic = 'https://imgwcs2.soufunimg.com/viewimage/house/2021_11/05/3a4a04dd-3653-42de-9836-1c4dcfdd2917/1400x933.png'
				//form.picList = ['https://imgwcs2.soufunimg.com/viewimage/house/2021_11/05/3a4a04dd-3653-42de-9836-1c4dcfdd2917/1400x933.png']
				if(this.tese.length>0){
					form.tese = this.tese.join(',')
				}
				
				let res = await this.$u.post('/api/addoldhouse',form,{
					'content-type': 'application/json'
				})
				console.log(res)
				if(res.code==0){
					this.$u.toast('发布成功')
					uni.navigateTo({
						url:'../shop/index'
					})
				}
				 
			}
		}
	}
</script>
<style>
	page {
		background-color: #F1F4F8;
	}
 
</style>
<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		min-height: 100vh;
	}

	.upload-box {
		margin: 10rpx auto 0 auto;
		width: 710rpx;
		border-bottom: #eee 1px solid;
		padding-bottom: 30rpx;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-row-gap: 15px;
		grid-column-gap: 15px
	}

	.upload-box .upload-item {
		border: #eee 1px dashed;
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.upload-box .upload-item .top {
		position: absolute;
		width: 50rpx;
		height: 50rpx;
		top: 0;
		left: 0;
	}

	.upload-box .upload-item .icon {
		position: absolute;
	}

	.upload-box .upload-item .thumb {
		height: 120rpx;
		width: 100%;
	}

	.input-box {
		margin: 0 20rpx;	
		border-bottom: #eee 1px solid;
		padding: 20rpx 0;
		height:120rpx;
		
	}

	.input-box .label {
		flex: 1;
	}

	.input-box .input {
		text-align: right;
	}

	.input-box .btn {
		height: 60rpx;
		color: #C71114;
		border-radius: 40rpx;
		text-align: center;
		line-height: 60rpx;
		margin-right: 16rpx;
		margin-left: auto;
		font-size: 30rpx;
	}

	.input-box:last-child {
		border-bottom: none;
	}

	.container .buttons {
		margin-top: auto;
		width: 750rpx;
		height: 90rpx;
		background-color: #C71114;
		color: #fff;
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
		margin-top: auto;
	}


	.popup {

		width: 750rpx;
	}

	.picker-view {
		height: 600rpx;

	}

	.picker-btn {
		width: 700rpx;
		height: 90rpx;
		background-color: #C71114;
		color: #fff;
		text-align: center;
		line-height: 90rpx;
		margin: 20rpx auto;
		border-radius: 16rpx;
	}

	.picker-view .item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
		line-height: 50px;
	}
</style>
