<template>
	<div class="login">
		<h1>login</h1>
		<button @click="go">go 上一级</button>
	</div>
</template>

<script>
	export default{
		name:"login",
		methods:{
			go(){
				//返上一级
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>