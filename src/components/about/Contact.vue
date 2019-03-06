<template>
	<div class="contact">
		<h1>联系我们</h1>
		<router-link tag="button" :to="{name:'tellLink'}">电话</router-link>
		<router-link tag="button" :to="{name:'nameLink'}">联系人</router-link>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>