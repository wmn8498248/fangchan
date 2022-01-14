<script>
	export default {
		onLaunch() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			url: '',
			map: 'ARKBZ-JQV3G-I56Q7-IOVGJ-M5MN7-ECFBE'
		}
	}
</script>

<style lang="scss">
	//@import url('./common/common.css');
	image {
		display: block;
	}
	.empty{
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 28rpx;
		width: 100vw;
		color: #999;
	}
	.empty image{
		width: 300rpx;
		height: 300rpx;
	}
	.p10{
		padding: 20rpx;
	}
	.pt10{
		padding-top: 20rpx;
	}
	.pb10{
		padding-bottom: 20rpx;
	}
	.mt5 {
		margin-top: 10rpx;
	}

	.mt10 {
		margin-top: 20rpx;
	}
	.mt20 {
		margin-top: 40rpx;
	}
	.mb10 {
		margin-bottom: 20rpx;
	}

	.mtb5 {
		margin: 10rpx 0;
	}

	.mtb10 {
		margin: 20rpx 0;
	}

	.mr10 {
		margin-right: 20rpx;
	}
	.mr20 {
		margin-right: 40rpx;
	}

	.ml10 {
		margin-left: 20rpx;
	}

	.mlr10 {
		margin-right: 20rpx;
		margin-left: 20rpx;
	}
	.mlr5 {
		margin-right: 10rpx;
		margin-left: 10rpx;
	}
	.f12 {
		font-size: 24rpx;
	}

	.f14 {
		font-size: 28rpx;
	}
	.f15 {
		font-size: 30rpx;
	}
	.f18 {
		font-size: 36rpx;
	}
	.f20 {
		font-size: 40rpx;
	}

	.red {
		color: #C71114;
	}

	.gray {
		color: #999999;
	}
	.color6{
		color: #666666;
	}
	.color3{
		color: #333333;
	}
	.bold {
		font-weight: bold;
	}



	.radius10 {
		border-radius: 20rpx;
	}

	/*flex布局*/
	.flex {
		display: flex;
	}

	.flex1 {
		flex: 1;
	}
	.column{
		flex-direction: column;
	}
	.between {
		justify-content: space-between;		
	}
	.around{
		justify-content: space-around;
	}
	.center{
		justify-content: center;
	}
	.align-center {
		align-items: center;
	}
	.bg-white{
		background-color: #fff;
	}
	button[type=primary] {
		background-color: #2F80FF;
		color: #fff;
	}

	button[type=primary][plain] {
		background-color: transparent;
		border: 1px solid #2F80FF;
		color: #2F80FF;
	}
</style>
