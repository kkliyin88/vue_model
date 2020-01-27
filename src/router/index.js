
import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/page/home'], resolve)
//菜单一
const about = resolve => require(['@/page/about'], resolve);

Vue.use(Router);
export const menu = [
  {
    path: '/about',
    component: about,
    meta: { title: 'about' },
	flag:true,
  },
  
]
export default new Router({
  routes: [
	{ path: '*', redirect: '/about' },
    {
      path:'/',
	  redirect:'/about',
      component: Home,
      children: [
       ...menu
      ]
    },
  ]
})
