<template>
  <div id="app">
  <app-header/>
  <Home/>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
export default {
  name: 'App',
  components: {
  Home,
  appHeader: Header
  }
}
</script>

<style>

</style>
