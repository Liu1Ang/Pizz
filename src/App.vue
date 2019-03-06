<template>
  <div id="app">
    <!--<My-Header @titlechange="update($event)" :title="title"></My-Header>
    <MyMain :use="users"></MyMain>
    <MyMain :use="users"></MyMain>
    <MyFooter :title="title"/>-->
    <div class="container">
    	<MyHeader></MyHeader>
    </div>
    <div class="container">
    	<router-view></router-view>
    </div>
    <div class="container">
    	<!--路由复用-->
    	<router-view name="deliveryLink"></router-view>
    	<router-view name="historyLink"></router-view>
    </div>
  </div>
</template>

<script>
/*import MyMain from './components/Main'
import MyHeader from './components/Header'
import MyFooter from './components/Footer'*/

import MyHeader from './components/HeaderNav'


export default {
  name: 'App',
  data(){
  	return{
  		/*users:[
	      {name:"张三",position:"web开发",show:false},
	      {name:"张三",position:"web开发",show:false},
	      {name:"张三",position:"web开发",show:false},
	      {name:"张三",position:"web开发",show:false},
	      {name:"张三",position:"web开发",show:false},
	      {name:"张三",position:"web开发",show:false},
	      {name:"张三",position:"web开发",show:false},
	      {name:"张三",position:"web开发",show:false}
      ],
      title:"传递的是一个值（）"*/
  	}
  },
  components: {
//  MyMain,MyHeader,MyFooter
	MyHeader
  },
  methods:{
  	/*update(titles){
  		this.title = titles
  	}*/
  }
}
</script>

<style>

</style>
