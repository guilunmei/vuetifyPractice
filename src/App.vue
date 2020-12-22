<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
// import systemBar from './components/systemBar'
// import navigation from './components/navigation'
// import home from './components/Home'
export default {
  name: 'App',

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  })
}
</script>
<style>
/* 设置外层盒子布局为flex 设置缩放比例 */
.v-application--wrap {
  display: flex;
  flex-direction: column;
}
.v-system-bar {
  flex: 0 0 40px;
}
/* .v-navigation-drawer{
  flex: 0 0 30%;
} */
</style>
