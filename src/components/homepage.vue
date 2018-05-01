<template>
  <v-app id="homepage">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item['icon-pre']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title class="nav_text">
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="nav_text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="purple"
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down" id="title">我的学习仓库</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn
          icon
          target="_blank"
          slot="activator"
        >
          <v-icon>settings</v-icon>
        </v-btn>
        <span>设置</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn
          icon
          target="_blank"
          slot="activator"
        >
          <v-icon>help</v-icon>
        </v-btn>
        <span>帮助</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn
          icon
          large
          target="_blank"
          slot="activator"
        >
          <v-icon large>apps</v-icon>
        </v-btn>
        <span>自定义模块</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>

</template>

<script>
export default {
  name: 'Homepage',
  props: {
    source: String
  },
  data () {
    return {
      dialog: false,
      drawer: null,
      items: [
        { icon: 'flag', text: '学习计划' },
        {
          icon: 'keyboard_arrow_up',
          'icon-pre': 'create',
          'icon-alt': 'keyboard_arrow_down',
          text: '课堂笔记',
          model: true,
          children: [
            {icon: 'gesture', text: '网站设计与运营'},
            {icon: 'gesture', text: '商业数据分析'},
            { icon: 'add', text: '创建笔记' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-pre': 'assignment',
          'icon-alt': 'keyboard_arrow_down',
          text: '备考整理',
          model: true,
          children: [
            { icon: 'add', text: '创建备考' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-pre': 'beenhere',
          'icon-alt': 'keyboard_arrow_down',
          text: '习题纠错',
          model: true,
          children: [
            { icon: 'add', text: '创建纠错本' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-pre': 'star',
          'icon-alt': 'keyboard_arrow_down',
          text: '技术填坑',
          model: true,
          children: [
            { icon: 'add', text: '创建技术坑' }
          ]
        }
      ]
    }
  }
}

</script>

<style scoped>
  #keep main .container {
    height: 660px;
  }


  #title{
    font-family: 幼圆;
    font-size: 30px;
    font-weight: bold;
  }
  .nav_text {
    font-family: 微软雅黑;
    font-size: 15px;
    font-weight: bold;
  }
</style>
