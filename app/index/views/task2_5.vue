<template>
    <div>
        <h3>2.5 表单实现Input、Checkbox组件</h3>
        <v-input placehold="请输入用户名" @input.native="handleInput"></v-input>
        <v-input placehold="请输入用户名" :value="passvalue"></v-input>
        <v-input :value="passvalue" validator="username" type="password"></v-input>
        <v-checkbox text="爱好" id="hobby">
            <v-checkbox text="种花" id="plant">
                <v-checkbox text="养鱼" id="fish"></v-checkbox>
            </v-checkbox>
            <v-checkbox text="购物" id="shop"></v-checkbox>
            <v-checkbox text="吃饭" id="eat"></v-checkbox>
        </v-checkbox>
    </div>
</template>

<script>
import Input from "../components/input.vue";
import CheckboxGroup from "../components/checkbox-group.vue";
export default {
  components: {
    "v-input": Input,
    "v-checkbox": CheckboxGroup
  },
  data() {
    return {
      placeholder: "请输入用户名",
      passvalue: "chenzeze",
      typeValue: "username"
    };
  },
  methods: {
    handleInput() {
      alert(1);
    }
  }
};
</script>
<style lang="stylus">
.fontSizeBig {
    font-size: 5px;
}
</style>