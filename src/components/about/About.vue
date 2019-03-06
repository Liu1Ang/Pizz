<template>
	<div class="about">
		<div class="row mb-5">
			<div class="col-4">
				<router-link class="nav-link" tag="li" :to="{name:'historyLink'}">历史订单</router-link>
				<router-link class="nav-link" tag="li" :to="{name:'contactLink'}">联系我们</router-link>
				<router-link class="nav-link" tag="li" :to="{name:'deliveryLink'}">点餐文档</router-link>
				<router-link class="nav-link" tag="li" :to="{name:'deringLink'}">点餐引导</router-link>
			</div>
			<div class="col-8">
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"about"
	}
</script>

<style>
</style>