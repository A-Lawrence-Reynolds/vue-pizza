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
.info-block-warapper{
  display: flex;
  flex-direction: column;

}
.info_block{
  background-color: #f1e6da ;
  margin: 10px 0;
  padding: 10px;
}
.info_block h3 {
  text-align: center;

}
.info-block-content{
  display: flex;
  align-items: center;

}
.info_block img {
  width:30% ;
}
@media screen and (min-width: 900px){
  .info-block{
    width: 100%;
  }
  .info_block_wrapper{
    flex-direction: row;
  }
  .info-block:nth-child(2){
    margin: 10px;
  }
  .info-block-content{
    flex-direction: column;
    align-items: center;
  }
  .info-block img{
  max-width: 100%;
  }
.info-block:nth-child(2) img {
  order: -1;
}

}
</style>
