<template>
  <div class="cascadeWrap">
      <input type="text" @click="handleClick" v-model="checkedValue">
      <cascade-panel :datalist="datalist" v-on:patch="onPatch" v-show="open" id="style"></cascade-panel>
  </div>
</template>
<script>
import cascadePanel from "./cascade-panel.vue";
export default {
  props: ["datalist"],
  components: {
    "cascade-panel": cascadePanel
  },
  data() {
    return {
      open: false,
      checkedValue: ""
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
      this.checkedValue = "";
    },
    onPatch(val) {
      // alert(val);
      this.checkedValue = val;
      this.open = false;
    }
  }
};
</script>
<style lang="stylus">
.cascadeWrap {
  position: relative;
  height: 140px;
  width: 180px;
}

#style {
  top: 30px;
  left: -101px;
}
</style>
