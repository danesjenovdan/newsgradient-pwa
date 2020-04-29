<template>
  <div id="login-wall">
    <h1>Please log in</h1>
    <div class="login-container">
      <label for="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        v-model="username"
        @keypress.enter="checkLogin"
      >
      <br />
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="password"
        @keypress.enter="checkLogin"
      >

      <br />
      <button
        @click="checkLogin"
      >Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapMutations } from 'vuex';

@Component({
  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    ...mapMutations([
      'TOGGLE_LOGGED_IN',
      'SET_LOGGED_IN',
    ]),
    checkLogin() {
      // @ts-ignore
      if ((this.username === this.password) && (this.username === 'usagm')) {
        // @ts-ignore
        window.localStorage.setItem('ngUsername', this.username);
        // @ts-ignore
        window.localStorage.setItem('ngPassword', this.password);
        // @ts-ignore
        this.$matomo.trackEvent('loggedIn', 'usagm');
        // @ts-ignore
        this.TOGGLE_LOGGED_IN();
      } else {
        alert('Sorry, this is a closed beta, you need the correct username and password. If you would like to try it out send an email to ziga@danesjenovdan.si');
      }
    },
  },

  created() {
    // @ts-ignore
    this.username = window.localStorage.getItem('ngUsername');
    // @ts-ignore
    this.password = window.localStorage.getItem('ngPassword');

    // @ts-ignore
    console.log(this.password);
    // @ts-ignore
    if ((this.username === this.password) && (this.username === 'usagm')) {
      // @ts-ignore
      this.SET_LOGGED_IN(true);
    }
  },
})
export default class LoginWall extends Vue {}
</script>

<style lang="scss">
#login-wall {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: #ffffff;

  padding: 30px;
  padding-top: 100px;

  .login-container {
    position: relative;
    margin: auto;
    width: 250px;
  }

  h1 {
    text-align: center;
  }
  label {
    display: inline-block;
    padding: 5px;
    width: 90px;
  }
  input {
    width: 160px;
    height: 30px;
    border: 1px solid;
    border-radius: 15px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 30px;
  }
  button {
    position: relative;
    display: block;
    margin: auto;
    border: none;

    border-radius: 5rem;
    height: 2rem;
    padding: 0 1rem;
    text-align: center;
    line-height: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.7rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2rem 35%;

    color: #0077ff;
    background-color: rgba(#0077ff, 0.25);
  }
}
</style>
