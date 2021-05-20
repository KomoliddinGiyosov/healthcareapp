<template>
  <div id="app" class="app">
    <Navs/>
    <div>
      <Top/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navs from './components/App/Nav'
import Top from './components/App/Top'
export default {
  components:{
    Navs,
    Top
  }
}
</script>

<style lang="scss">
.app{
  display: flex;
}

body{
    background-color: #F6F8FB;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'lr';
}
ul{
  list-style-type: none;
  text-decoration: none;
}
@font-face {
    font-family: 'lr';
    src: url(assets/Fonts/Lato-Regular.ttf);
  }
@font-face {
    font-family: 'rr';
    src: url(assets/Fonts/Roboto-Regular.ttf);
} 


</style>
