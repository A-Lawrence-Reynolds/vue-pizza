<template>
  <div id="app">
  <app-header/>
  <router-view></router-view>
<div class="info-block-warapper">
  <router-view name="ordering-guide"></router-view>
  <router-view name="delivery"></router-view>
  <router-view name="history"></router-view>
</div>
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
a{
  text-decoration: none;
  color: inherit;

}

ul{
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px 0px;
  background-color: #f1e6da;
}
li{
  list-style: none;
}
</style>
