<template>
	<div class="header" @click="rem">
		<h1>{{ msg }} {{title}}</h1>
	</div>
</template>

<script>
	export default{
		name:"Header",
		props:{
			title:{
				type:String
			}
		},
		data(){
			return{
				msg:"我的vue小demo！"
			}
		},
		methods:{
			rem:function(){
//				this.title="wo"
				this.$emit("titlechange",this.msg)
			}
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 100px;
		line-height: 100px;
		background: springgreen;
	}
</style>