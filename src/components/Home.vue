<template>
  <div style="height: 100%; display: flex; flex-direction: column">
    <!-- 头部展示组件 -->
    <systemBar></systemBar>
    <!-- main 主体路由部分 -->
    <!-- <v-main> -->
    <v-row no-gutters style="flex-wrap: nowrap">
      <v-col class="flex-grow-0 flex-shrink-0">
        <!-- 侧边导航菜单 -->
        <navigation @activeMenuItem="accept" style="flex: 0 0 200px"></navigation>
      </v-col>
      <v-col
        cols="12"
        style="min-width: 100px"
        class="flex-grow-0 flex-shrink-1"
      >
        <v-card>
          <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab @click="first">首页</v-tab>
            <v-tab
              v-for="(item, i) in activeMenuData"
              :key="item.path"
              :class="i + 1 === activeMenuData.length ? 'v-tab--active' : ''"
              style="padding-right: 5px"
              @change="changeTab(item.path)"
            >
              {{ item.title }}
              <v-btn
                icon
                color="#fff"
                style="width: 25px; height: 25px; margin-left: 8px"
                @click="removeTabs(item.title)"
              >
                <v-icon dark style="font-size: 15px"> mdi-close </v-icon>
              </v-btn>
            </v-tab>
          </v-tabs>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </v-card>
      </v-col>
    </v-row>
    <!-- </v-main> -->
    <v-footer style="padding-top: 1px; padding-bottom: 1px" dark
      >©本平台由石家庄科威有限公司提供技术支持</v-footer
    >
  </div>
</template>

<script>
import systemBar from '../components/systemBar'
import navigation from '../components/navigation'
// import home from './components/Home'
export default {
  components: {
    systemBar,
    navigation
    // home
  },
  data () {
    return {
      // v-tabs 选中的tab索引
      tab: null,
      // 已点击菜单存放数据
      activeMenuData: []
    }
  },
  created () {
    // 刷新页面时路由重定向到home
    this.$router.replace('home')
  },
  methods: {
    first () {
      this.$router.replace('shouye')
    },
    // 点击tab 路由跳转到对应的视图中
    changeTab (path) {
      this.$router.replace(path)
    },
    // 接收子组件传递过来的数据
    accept (params) {
      // 将传进来的参数重新赋值 以供菜单数据更新
      const obj = {}
      obj.title = params.title
      obj.path = params.path
      // 如果数据为空 直接压入点击菜单数据
      if (this.activeMenuData.length === 0) {
        this.activeMenuData.push(obj)
        this.$router.replace(obj.path)
        console.log('压入')
      } else {
        // 判断当前点击菜单是否包含在已打开的数组中
        const result = this.activeMenuData.map(item => item.title).indexOf(params.title)
        if (result > -1) {
          console.log('包含')
        } else {
          this.activeMenuData.push(obj)
          this.$router.replace(obj.path)
        }
      }
      // console.log(this.activeMenuData)
    },
    // 判断数组中是否已存在点击的菜单
    checkActiveMenu (params) { },
    showT () {
      console.log(this.tab)
    },
    // 移除关闭的选项卡
    removeTabs (name) {
      console.log(name)
      this.activeMenuData.forEach((item, i) => {
        if (item.title === name) {
          this.activeMenuData.splice(i, 1)
        }
      })
      console.log(this.activeMenuData)
      // 判断如果当前数据数组为空 直接跳转首页
      if (this.activeMenuData.length === 0) {
        this.$router.replace('shouye')
      } else {
        // 判断当前是否处于最后一个导航
        if (this.$route.path === '/' + this.activeMenuData[this.activeMenuData.length - 1].path) {
          return
        }
        this.$router.replace(this.activeMenuData[this.activeMenuData.length - 1].path)
      }
    }
  }
}
</script>
<style></style>
