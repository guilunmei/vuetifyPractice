import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../components/shouye'
import xtqx from '../components/xtsz/xtqx'
import login from '../components/login.vue'
import home from '../components/Home.vue'
import pzwj from '../components/xtsz/pzwj.vue'
import mmxg from '../components/xtsz/mmxg.vue'
import mmcz from '../components/xtsz/mmcz.vue'
// import MainCom from '../components/mainCom.vue'

Vue.use(VueRouter)
// 解决重复点击同一路由 冗余报错问题
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  {
    path: '/home',
    component: home,
    redirect: '/shouye',
    children: [
      { path: '/shouye', component: shouye },
      { path: '/xtqx', component: xtqx },
      { path: '/pzwjsz', component: pzwj },
      { path: '/mmxg', component: mmxg },
      { path: '/mmcz', component: mmcz }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
