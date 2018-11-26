<template>
    <div :class="[expandFlag?'':'small','task']">
        <button @click="expandFlag=!expandFlag">O</button>
        <slot name="main_title" class="main_title">任务一</slot>
        <div>标题:<slot name="title">{{title}}</slot>
        </div>
        <div>内容:<slot name="content">xxxxxx</slot>
        </div>
        <div>时间:<slot name="time">2018-01-01</slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      expandFlag: false,
      title: "插槽"
    };
  }
};
</script>

<style lang="stylus">
.task {
  width: 220px;
  height: 220px;
  text-align: center;
  margin: 20px;
  background: orange;
  overflow: hidden;
  transition: height 1s;
}

.small {
  width: 220px;
  height: 25px;
}

.main_title {
}
</style>