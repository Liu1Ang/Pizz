<template>
  <div class="mains">
    	<h1>hell UsersList</h1>
    	<ul>
    		<!--:class="{hui:user.show}-->
    		<li v-for="user in use" @click="user.show = !user.show" :class="user.show?hui:kou">
    			<h2>{{ user.name }}</h2>
    			<h3 v-show="user.show">{{ user.position }}</h3>
    		</li>
    	</ul>
    	<button @click="remover">删除</button>
  </div>
</template>

<script>
export default {
  name: 'mains',
  //传引用：Array object
  //传值：number string boolean
//props:["use"],
	props:{
		use:{
			type:Array,
			required:true
		}
	},
  data () {
    return {
    	hui:"hui",
    	kou:''
    }
  },
  methods:{
  	remover:function(){
  		this.use.pop()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mains{
	width: 100%;
	max-width: 1200px;
	margin: 40 auto;
	padding: 0 20px;
	box-sizing: border-box;
}
.hui{
	background: royalblue;
	color: white;
}

h1{
	color: salmon;
}

ul{
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li{
	flex-grow: 1;
	/*每个宽200px*/
	flex-basis: 200px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	background: transparent;
	color: #222222;
}
</style>
