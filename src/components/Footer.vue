<template>
	<div class="footer">
		<h4>{{ msg }} {{title}}</h4>
	</div>
</template>

<script>
	export default{
		name:"Footer",
		props:{
			title:{
				type:String
			}
		},
		data(){
			return{
				msg:"版权所有&copy"
			}
		}
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: black;
	}
</style>