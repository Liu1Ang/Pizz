// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

//组件
import Home from './components/Home'
import Menus from './components/Menus'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级导航
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import Dering from './components/about/Dering'
import History from './components/about/History'

//三级导航
import Tells from './components/about/contact/Tell'
import Names from './components/about/contact/Names'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
	{path:'/',components:{
		default:Home,
		'deliveryLink':Delivery,
		'historyLink':History
	}},
	{path:'/menus',name:'menusLink',component:Menus},
	{path:'/admin',component:Admin
	/*beforeEnter:(to,from,next)=>{
		//局部守卫(路由独享的)
//		alert('非登录状态，不能访问！');
		next('/login')
	}*/
	},
	{path:'/about',redirect:'/about/contact',component:About,children:[
		{path:'/about/contact',name:'contactLink',redirect:'/about/contact/name',component:Contact,children:[
			{path:'/about/contact/tell',name:'tellLink',component:Tells},
			{path:'/about/contact/name',name:'nameLink',component:Names}
		]},
		{path:'/about/delivery',name:'deliveryLink',component:Delivery},
		{path:'/about/dering',name:'deringLink',component:Dering},
		{path:'/about/history',name:'historyLink',component:History}
	]},
	{path:'/login',component:Login},
	{path:'/register',component:Register},
	{path:'*',redirect:'/'}
]

const router = new VueRouter({
	routes,
	//去除路径中的#号
//	mode:'history',
	scrollBehavior:(to,from,savedPosition)=>{
//		return{x:0,y:200}滑动到具体位置坐标
//		return {selector:'.btn'}滑动到某个选择器
		if(savedPosition){
			//通过浏览器的前进后退按钮才能触发
			return savedPosition
		}else{
			return{x:0,y:0}
		}
	}
})

//全局守卫(进入组件前，检测登录)
/*router.beforeEach((to,from,next)=>{
	//判断store.gettes.isLogin == false
	//next() 执行下一步，显示页面
	//form 从哪个路由来
	//to 到哪个路由去
	if(to.path == '/login' || to.path == '/register'){
		next();
	}else{
		alert("请登录！");
		next('/login')
	}
})*/

//后置钩子 (进入组件后，检测登录)
/*router.afterEach((to,from)=>{
	alert("请登录！");
})*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
