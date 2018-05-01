<template>
  <v-jumbotron src="../static/img/material2.jpg"
               :gradient="gradient"
               dark
               height="650px">
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm10 md10 text-xs-center>
          <h3 id="title" class="display-3">{{title}}</h3>
          <br/>
          <span id="introduction" class="subheading">
            <p>{{intro_student}}</p>
            <p>{{intro_teacher}}</p>
            <p>{{intro_staff}}</p>
          </span>
          <v-divider class="my-3" ></v-divider>
          <div id="intro_all" class="title mb-3">{{intro_all}}</div>
          <v-btn large  class="mx-0" v-on:click="goRegister">{{btn_register}}</v-btn>
          <v-btn large  class="mx-0" v-on:click="goLogin">{{btn_login}}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      title: '欢迎来到为您私人定制的学习仓库',
      intro_student: '在这里，如果您是学生，您可以创建并管理自己的学习计划、课堂笔记、习题纠错、备考复习...',
      intro_teacher: '如果您是教师，我们为您准备了教学规划、备课笔记、会议记录等各种模板，为您的工作提供支持~',
      intro_staff: '如果您是公司职员，您可以在这里进行活动策划、工作日程制定',
      intro_all: '当然，还有更多的功能等待您去发掘！赶快加入我们吧~',
      btn_register: '注册',
      btn_login: '登录',
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
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
    font-family: "幼圆";
    font-weight: bolder;
    color: floralwhite;
    text-shadow: 2px 2px 2px grey;
  }
  #introduction{
    text-align: center;
    font-family: "华文黑体";
    color: navajowhite;
  }
  #intro_all{
    font-style:italic;
  }
</style>
