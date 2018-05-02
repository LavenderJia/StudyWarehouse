<template>
  <v-app id="welcome" light>
    <v-content>
      <section>
        <v-parallax src="../static/img/hero.jpeg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 id="title" class="white--text mb-2 display-3 text-xs-center">学习小仓库</h1>
            <div class="subheading mb-3 text-xs-center">Powered by LavenderJia</div>
            <v-btn
              class="purple darken-1 mt-5"
              dark
              large
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">为您量身定制的日常学习管理平台</h2>
              <span class="subheading">
                适用于多种职业角色
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--darken-2">face</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">学生</div>
                    </v-card-title>
                    <v-card-text class="introduction">{{intro_student}}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--darken-2">person</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">教师</div>
                    </v-card-title>
                    <v-card-text class="introduction">{{intro_teacher}}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--darken-2">work</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">公司职员</div>
                    </v-card-title>
                    <v-card-text class="introduction">{{intro_staff}}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="../static/img/light_train.jpg" height="380">
          <v-layout column align-center justify-center>
            <v-flex xs12 sm10 md10 text-xs-center>
            <div class="headline white--text mb-3 text-xs-center">{{intro_all}}</div>
            <em>新人朋友先注册噢</em>
              <br/>
            <v-btn
              class="blue darken-2 mt-5"
              dark
              large
              v-on:click="goRegister"
            >
              点我注册
            </v-btn>
            <v-btn
              class="blue darken-4 mt-5"
              dark
              large
              v-on:click="goLogin"
            >
              前往登录
            </v-btn>
            </v-flex>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">关于我们</div>
                </v-card-title>
                <v-card-text>{{about_us}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">联系我们</div>
                </v-card-title>
                <v-card-text>
                  如您遇到什么问题或者对我们的开发有所建议，请联系我们。
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--darken-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>123-456-7890</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--darken-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Nanjing University Xianlin Campus</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--darken-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>aaa@163.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue lighten-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      intro_student: '如果您是学生，您可以创建并管理自己的学习计划、课堂笔记、习题纠错、备考复习...我们努力做到承包您学习积累的每一个环节',
      intro_teacher: '如果您是教师，我们为您准备了教学规划、备课笔记、会议记录等各种模板，我们努力为您的教学工作提供支持~',
      intro_staff: '如果您是公司职员，您可以在这里进行活动策划、工作日程制定，或许我们内置的模板不能满足您的需求，我们鼓励您自定义模板并积极分享~',
      intro_all: '当然，还有更多的功能等待您去发掘！赶快加入我们吧~',
      about_us: '我们致力于为大家打造一个智能、便捷、长期存储的个性化学习小仓库，这里不仅可以搭建自己的小仓库，还可以分享你自己的作品到知识集市。当然，你也可以在知识集市上淘一淘自己需要的知识或者个性化的模板。'
    }
  },
  methods: {
    goLogin: function () {
      this.$router.push({path: '/login'})
    },
    goRegister: function () {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style scoped>
  #title{
    text-align: center;
    font-weight: bolder;
    color: floralwhite;
    text-shadow: 2px 2px 2px grey;
  }
  .headline{
    color: rebeccapurple;
    text-shadow: 1px 1px 1px grey;
  }
  .introduction{
    text-align: center;
    font-family: "华文黑体";
    color: dimgray;
  }
  #intro_all{
    font-style:italic;
  }
</style>
