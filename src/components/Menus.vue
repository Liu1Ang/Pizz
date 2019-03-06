<template>
	<div class="menus">
		<h1>menu</h1>
		<button @click="go">go register</button>
	</div>
</template>

<script>
	export default{
		name:"menus",
		methods:{
			go(){
				//压栈，push替换
				this.$router.push('/register')
			}
		}
	}
</script>

<style>
</style>