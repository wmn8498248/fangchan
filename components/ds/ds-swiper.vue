<template>
	<uni-swiper-dot :info="swipers" :current="current" mode="default" :dots-styles="dotsStyles">
		<swiper class="swiper-box" @change="change" :autoplay="true" :interval="3000">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.bannerurl" mode="scaleToFill" class="thumb">
				</image>
			</swiper-item>
		</swiper>
	</uni-swiper-dot>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				swipers:[], 
				dotsStyles: {
					backgroundColor: 'rgba(255, 255, 255, .2)',
					border: 'none',
					color: '#fff',
					selectedBackgroundColor: 'rgba(255, 255, 255, .7)',
					selectedBorder: 'none'
				},
			};
		},
		mounted() {
			this.getSwiper() 
		},
		name: "wtitleBar",
		props: {
			 
		},
		watch: {
			 
		},
		methods: {
			async getSwiper() {
				let res = await this.$u.post('/api/getbannerUrl')
				this.swipers = res.data
			},
			change(e) {
				this.current = e.detail.current;
			}
		},
	};
</script>

<style scoped>
	swiper {
		height: 328rpx;
	}
	
	.swiper-box .thumb {
		width: 100%;
		height: 328rpx;
	} 
</style>
