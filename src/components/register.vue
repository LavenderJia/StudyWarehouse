<template>
  <v-app id="register">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex>
            <v-card class="elevation-12">
              <v-card-title id="register_title">
                <span class="headline">您的注册信息</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="昵称" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="密码" type="password" ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="邮箱"  type="email" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="电话号码" type="tel" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="性别"
                        required
                        :items="['男', '女']"
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-menu
                        ref="menu"
                        lazy
                        :close-on-content-click="false"
                        v-model="menu"
                        transition="scale-transition"
                        offset-y
                        full-width
                        :nudge-right="40"
                        min-width="290px"
                        :return-value.sync="date"
                      >
                        <v-text-field
                          slot="activator"
                          label="请选择出生日期"
                          v-model="date"
                          prepend-icon="event"
                          readonly
                        ></v-text-field>
                        <v-date-picker v-model="date" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="menu = false">取消</v-btn>
                          <v-btn flat color="primary" @click="$refs.menu.save(date)">确定</v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="职业身份"
                        required
                        :items="['学生', '教师', '公司职员']"
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        label="预设模块"
                        multiple
                        autocomplete
                        chips
                        :items="['学习计划', '课堂笔记', '复习整理', '备课笔记', '会议记录', '教学计划', '活动策划']"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small id="reminder">标*为必要信息，请务必填写</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="purple darken-1" flat v-on:click="goWelcome">放弃</v-btn>
                <v-btn color="purple darken-1" flat  type="submit" @click.native.stop="dialog = true">提交</v-btn>
                <v-dialog v-model="dialog" max-width="290">
                  <v-card>
                    <v-card-title class="headline">是否提交注册并返回登录界面？</v-card-title>
                    <v-card-text>请您正式登录前进入您的邮箱进行账号的激活，否则将无法正常登录。</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="purple" flat="flat" @click.native="dialog = false">否</v-btn>
                      <v-btn color="purple darken-1" flat="flat" @click.native="dialog = false" v-on:click="goLogin">是</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      menu: false,
      dialog: false
    }
  },
  methods: {
    goWelcome: function () {
      this.$router.push({path: '/'})
    },
    goLogin: function () {
      this.$router.push({path: '/login'})
    }
  }

}
</script>

<style scoped>
  #register_title{
    color: purple;
    padding-left: 60px;
    padding-top: 30px;
    padding-bottom: 0px;
    text-shadow: 1.5px 1.5px 1.5px dimgrey;
  }
  #reminder{
    color: blue;
    text-shadow: 1px 1px 1px dimgrey;
    padding-left: 60px;
  }
</style>
