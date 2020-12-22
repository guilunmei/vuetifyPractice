<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-btn icon @click.stop="mini = !mini">
        <v-icon v-show="mini">mdi-menu</v-icon>
        <v-icon v-show="!mini">mdi-menu-open</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>
    <v-list>
      <!-- <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>首页</v-list-item-title>
      </v-list-item> -->

      <v-list-group
        prepend-icon="mdi-account-circle"
        v-for="(item, i) in items"
        :key="i"
      >
        <template v-slot:activator>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </template>
        <v-list-item v-for="(child, i) in item.items" :key="i" link @click="activeItem(child.title, child.path)">
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>
          <v-list-item-title
            v-text="child.title"
          ></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        {
          action: 'mdi-ticket',
          items: [{ title: '系统权限设置', action: 'mdi-ticket', path: 'xtqx' }, { title: '密码修改', action: 'mdi-ticket', path: 'mmxg' }, { title: '密码重置', action: 'mdi-ticket', path: 'mmcz' }, { title: '配置文件设置', action: 'mdi-ticket', path: 'pzwjsz' }],
          title: '系统设置'
        },
        {
          action: 'mdi-silverware-fork-knife',
          // active: true,
          items: [
            { title: '供水单价设置' },
            { title: '阶梯水价设置' },
            { title: '抄表员设置' }
          ],
          title: '基本设置'
        },
        {
          action: 'mdi-school',
          items: [{ title: '新增发票信息' }],
          title: '发票管理'
        },
        {
          action: 'mdi-run',
          items: [{ title: '新增用户信息' }],
          title: '用户管理'
        }
      ],
      mini: false,
      // 向父组件传菜单对应的title和path
      activeMenuItemData: {
        title: '',
        path: ''
      }
    }
  },
  methods: {
    activeItem (name, path) {
      // console.log(path)
      // console.log(name)
      this.activeMenuItemData.title = name
      this.activeMenuItemData.path = path
      // 将点击菜单对应的title 和 path 传递给home组件 title->tab title || path->
      this.$emit('activeMenuItem', this.activeMenuItemData)
    }
  }
}
</script>
