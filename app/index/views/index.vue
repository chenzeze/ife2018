<style lang="stylus">
</style>

<template>
  <div id="home">
    <!-- <header>
      <router-link to="/testvue" tag='li'>testvue</router-link>
      <router-link to='/xxx/on'>XXX</router-link>
    </header> -->
    
    <router-view name="Header"></router-view>
    <!-- <router-view name="Sidebar"></router-view>
    <router-view name="Main"></router-view> -->
 
    <!-- 对应组件的内容渲染到router-view中 -->
    <router-view></router-view>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
  </div>
</template>

<script type="text/javascript">
import { mapActions } from "vuex";
export default {};
</script>