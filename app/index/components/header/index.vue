<template>
  <div class="menu">
    <div class="logo"><img src="/static/picture/logo.png"></div>
    <div class="title">IFE 2018 MVVM（vue实现）</div>
    <router-link class="link" to="/event">2.4 事件处理</router-link>
    <router-link class="link" to="/form">2.5 表单实现Input、Checkbox组件</router-link>
    <router-link class="link" to="/taskMenu">2.6 插槽相关</router-link>
    <router-link class="link" to="/cascade">3.1 用递归的方式实现级联组件</router-link>
    <router-link class="link" to="/todos">4.1-4.3 Todo MVC</router-link>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  }
};
</script>
<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}

.header-container {
  width: 100%;
  height: 50px;
  background: #000;

  div {
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
}

.logo {
  width: 150px;
  height: 150px;
  margin: 50px auto;

  img {
    width: 150px;
    height: 150px;
  }
}

.menu {
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin: 30px;
  }

  .link {
    display: block;
    margin: 15px 15px 15px 150px;
    text-align: left;
    text-decoration: none;
    color: #000;
  }

  .link:hover {
    color: red;
  }
}
</style>