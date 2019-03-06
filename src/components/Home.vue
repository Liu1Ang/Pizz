<template>
	<div class="home">
		<div class="row">
			<div id="home" class="col-sm-12">
				<div class="background">
					<h1>欢迎</h1>
					<h1>欢迎</h1>
					<h1>home</h1>
					<router-link class="btn" tag="button" to="/login">go login</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"home"
	}
</script>

<style>
	#home{
		background: url(../assets/1.png) no-repeat;
		height: 200vh;
		padding: 10%;
	}
</style>