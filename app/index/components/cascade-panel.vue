<template>
    <div class="panel">
        <li v-for="(item,index) in datalist" :key="index" @click="change(index);" :class="[index==activeId?'active':'']">{{item.label}}</li>
        <!-- <div v-if="datalist[activeId]">{{datalist[activeId].label}}</div> -->
        <div v-if="activeId>-1&&datalist[activeId].children">
            <cascade-panel :datalist="datalist[activeId].children" :activeId="activeId2" v-on:patch="onPatch"></cascade-panel>
        </div>
    </div>
</template>
<script>
export default {
  name: "cascadePanel",
  props: ["datalist", "activeId"],
  components: {},
  data() {
    return {
      activeId: -1
    };
  },
  methods: {
    change(index) {
      this.activeId2 = -1;
      this.activeId = parseInt(index);
      if (!this.datalist[this.activeId].children) {
        this.$emit("patch", this.datalist[this.activeId].label);
      }
      // console.log(this.activeId);
      // console.log(this.activeId2);
      // console.log(this.checkedVal);
      //点击之后下一个组件显示，activeId初始化-1
    },
    onPatch(val) {
      var checkedVal = this.datalist[this.activeId].label + "/" + val;
      this.$emit("patch", checkedVal);
    }
  }
};
</script>
<style lang="stylus">
.panel {
  position: absolute;
  top: -1px;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  margin-left: 101px;
  background: #fff;
}

li {
  list-style: none;
}

li:hover, li.active {
  background: red;
}
</style>

