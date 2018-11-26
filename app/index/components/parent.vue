<template>
  <div>
    <child v-on:patch="onPatch"></child>
    <div>我是父组件:
      <span @click="enEdit" v-show="!editFlag">{{parentMsg}}</span></div>
    <input v-show="editFlag" type="text" v-model="parentMsg" @blur="disEdit">
  </div>
</template>
<script>
import ComponentChild from "./child.vue";
export default {
  data() {
    return {
      parentMsg: "静静等待用户输入",
      editFlag: false
    };
  },
  methods: {
    onPatch: function(value) {
      this.parentMsg = value;
      this.$emit("patch", value);
    },
    enEdit() {
      this.editFlag = true;
    },
    disEdit() {
      this.editFlag = false;
    }
  },
  components: {
    child: ComponentChild
  }
};
</script>