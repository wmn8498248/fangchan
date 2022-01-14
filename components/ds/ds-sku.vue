<template>
	<u-popup v-model="showPop" mode="center" border-radius="20" :closeable="true">
		<view class="cart">
			<view class="price">{{item.title}}</view>
			<view class="guige-box">
				<block v-for="(item,index) in sku" :key="index">
					<view class="guige-title">{{item.name}}</view>
					<view class="guige-item">
						<view v-for="(son,son_index) in item.children" :key="son_index"
							:class="{item:true,active:select_sku[index]==son_index?true:false}"
							@click="selectSku(index,son_index)">{{son.name}}</view>
					</view>
				</block>
			</view>
			<view class="quantity">
				<view class="quantity-title">数量</view>
				<u-number-box v-model="quantity"></u-number-box>
			</view>
			<view class="addbtn" @click="addCart()" v-if="isAdd">加入购物车</view>
			<view class="addbtn active" @click="addCart()" v-else>加入购物车</view>
		</view>
	</u-popup>
</template>

<script>
	export default {
		data() {
			return {
				salePrice: 0,
				quantity: 1,
				showPop: false,
				select_sku: [],
				product: {},
				sku: [],
				skuid: '',
				isAdd: false,
				item: {}
			};
		},
		components: {

		},
		created() {

		},
		name: "wtitleBar",
		props: {

		},

		methods: {
			/*获取多规格商品*/
			getItem(item) {
				/*判断是不是登录过，如果没有登录跳到登录页面*/
				this.item = item
				this.sku = item.specs
				this.showPop = true
			},
			selectSku(index, son_index) {
				this.select_sku[index] = son_index
				this.$forceUpdate()
				/*只有选择全部规格才触发*/ 
				let  select = []
				for(let i in this.select_sku){
					select.push(i);
				}
				if (this.sku.length == select.length) {
					//this.checkAttr()
					this.isAdd = true
				}

			},
			async addCart() {
				console.log(this.select_sku)
				if(!this.isAdd){
					this.$u.toast('规格选择不全')
					return
				}
				let sku_name = []
				let sku = []
				for (let i in this.select_sku) {
					sku_name.push(this.sku[i].children[this.select_sku[i]].name)
					sku.push(this.sku[i].children[this.select_sku[i]].id)
				}
				this.$emit('select_ok', {
					quantity: this.quantity,
					sku: sku.join('_'),
					specs: sku_name.join(','),
					goodsid: this.item.id
				})
				this.showPop = false
				
			}
		},
	};
</script>

<style scoped>
	/*商品购物车*/
 
	.cart {
		width: 680rpx;
		border-radius: 10px;
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.cart .price {
		font-size: 16px;
		padding: 20rpx 0;
	}

	.cart .addbtn {
			background-color:#FF0000;
		height:82rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 640rpx;
		border-radius: 30px;
		color: #fff;
	}
 
	/*商品规格*/
	.cart .guige-box {
		padding: 20rpx 0 0 0;
	}

	.cart .guige-box .guige-title {
		font-size: 12px;
		font-weight: bold;
	}

	.cart .guige-box .guige-item {
		display: flex;
		margin: 20rpx 0;
		flex-wrap: wrap;
	}

	.cart .guige-box .guige-item .item {
		border: #eee 1px solid;
		height: 48rpx;
		line-height: 48rpx;
		text-align: center;
		border-radius: 8rpx;
		padding: 0 20rpx;
		margin: 10rpx;
		font-size: 12px;
		color: #777;
	}

	.cart .guige-box .guige-item .item.active {
		color: #FF7C00;
		border: #FF7C00 1px solid;
	}

	.quantity {
		margin: 0 0 20rpx 0;
	}

	.quantity .quantity-title {
		margin-bottom: 10rpx;
		font-weight: bold;
		font-size: 12px;
	}
</style>
