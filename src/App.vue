<template>
  <div id="app">
  <app-header/>
  <router-view></router-view>

  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
  appHeader: Header,
  }
}
</script>
<style>
body{
 font-family: 'Bree Serif', serif;
  margin:0;
  font-size: 1.5;
}
</style>
