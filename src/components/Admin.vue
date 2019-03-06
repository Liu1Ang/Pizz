<template>
	<div class="admin">
		<h1>admin</h1>
		<button @click="go">go about</button>
		<!--
			路由守卫：
				1、全局守卫   router.beforeEach(to,from,next)
				2、局部守卫(路由独享)beforeEnter:(to,from,next)
				3、组件守卫beforeRouteEnter:(to,from,next)
		-->
	</div>
</template>

<script>
	export default{
		name:"admin",
		data(){
			return{
				name:'Henry'
			}
		},
		/*beforeRouteEnter:(to,from,next)=>{  //进入组件前
//			alert("hello " + this.name)//未拿到数据
//			通过next()异步调用
			next(vm=>{
				alert("hello " + vm.name)
			})
			
		},*/
		//离开组件
		beforeRouteLeave:(to,from,next)=>{
			if(confirm('确定离开吗？')== true){
				next()
			}else{
				next(false)
			}
		},
		methods:{
			go(){
				//当前页面替换
				this.$router.replace('/about')
			}
		}
	}
</script>

<style>
</style>