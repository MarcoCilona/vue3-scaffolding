<template>
  <img src="./assets/logo.png" />
  <div>
    <p class="a">
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <BaseButton @click="handleClick">el-button</BaseButton>
    <el-progress :percentage="50"></el-progress>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import BaseButton from './components/base/BaseButton.vue';

import { TestApi } from '@/api/index';

/**
 * Base app component, entry point for all the application
 *
 * @displayName App
 */
export default {
  name: 'App',
  components: {
    BaseButton,
    HelloWorld
  },
  data() {
    return {
      /**
       * This variable will be used to update the theme of the application.
       *
       * @values light, dark
       */
      theme: 'light'
    };
  },
  watch: {
    theme: {
      immediate: true,
      /**
       * This handler will watch for theme variable update and changes the application theme
       */
      handler: function () {
        document.documentElement.setAttribute('theme', this.theme);
      }
    }
  },
  methods: {
    async handleClick() {
      const users = await TestApi.users();
      console.log('🚀 ~ file: App.vue ~ line 57 ~ handleClick ~ users', users);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
