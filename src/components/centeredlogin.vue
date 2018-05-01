<template>
  <v-app id="login">
    <v-content>
      <v-jumbotron src="../static/img/purple_mountain.jpg"
                   :gradient="gradient"
                   dark
                   height="650px">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="purple">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    target="_blank"
                    slot="activator"
                    v-on:click="goRegister"
                  >
                    <v-icon large>reply</v-icon>
                  </v-btn>
                  <span>{{back}}</span>
                </v-tooltip>
               </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="purple" v-on:click="goHomepage">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </v-jumbotron>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    drawer: null,
    back: '返回注册',
    gradient: 'to top right, rgba(63,81,181, .3), rgba(25,32,72, .3)'
  }),
  props: {source: String},
  methods: {
    goHomepage: function () {
      this.$router.push({path: '/homepage'})
    },
    goRegister: function () {
      this.$router.push({path: '/register'})
    }
  }
}
</script>
