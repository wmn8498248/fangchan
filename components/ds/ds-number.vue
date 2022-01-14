<template>
	<view class="number-box">
		<view class="minus btn" @click="minus">
			<uni-icons type="minus-filled" color="#2F80FF"  size="24"></uni-icons>
		</view>
		<view class="input">
			<input :value="num" @blur="setNum()" />
		</view>
		<view class="plus btn" @click="plus">
			<uni-icons type="plus-filled"  color="#2F80FF" size="24"></uni-icons>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				isStock: true
			};
		},
		mounted() {
			this.num = this.total
		},
		name: "wtitleBar",
		props: {
			index: {
				type: Number,
				default: 0
			},
			total: {
				type: Number,
				default: 0
			},
			cid: {
				type: Number,
				default: 0
			}
		},
		watch: {
			total() {
				this.num = this.total
			}
		},
		methods: {
			reset() {
				this.num = 0
			},
			setNum(type) {
				if (type == 'plus') {
					this.num++
				} else {
					if (this.num > 1) {
						this.num-- 
					}
				}
			},
			plus() {
				this.setNum('plus')
				this.$emit('plus', {
					num: this.num,
					index: this.index,
					cid: this.cid
				})
			},
			minus() {
				this.setNum('minus')
				this.$emit('minus', {
					num: this.num,
					index: this.index,
					cid: this.cid
				})
			}
		},
	};
</script>

<style scoped>
	input{
		text-align: center;
	}
	.number-box {
		display: flex;
		align-items: center;
	}

	.number-box .input {
		width: 64rpx;
		font-size: 24rpx;
		color: #777;
		text-align: center;	
		margin: 0 8rpx;
	}

	.number-box .btn {
		/* background-image: linear-gradient(to bottom, #F2DA4D, #FCBB4A); */
		font-size: 24rpx;
		font-weight: bold;
		height: 42rpx;
		width: 42rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}
</style>
