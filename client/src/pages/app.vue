<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import getData from './util';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
     async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
}
</script>
<style>
body {
    color: red;
}
</style>