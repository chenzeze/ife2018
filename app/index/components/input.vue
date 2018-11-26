<template>
    <div>
        <input 
        v-model="myValue"
        :placeholder="placehold" 
        :type="myType"
        @mouseover="inputMouseover"
        @mouseleave="inputMouseleave" 
        @focus="inputFocus" 
        @keyup="inputKeyup"
        @blur="inputBlur" 
        :class="[active]">
        {{myValue}}
        <span v-show="error" :class="['errMsg']">{{errMsg}}</span>
        <div v-show="alert" :class="['altMsg']">{{altMsg}}</div>
    </div>
</template>
<script>
export default {
  props: ["value", "placehold", "type", "validator"],
  data() {
    return {
      myType: "text", //default input type=text
      myValue: this.value,
      errMsg: "错误提示文案",
      altMsg: "提示文字",
      active: "",
      error: false,
      alert: false
    };
  },
  created() {
    switch (this.type) {
      case "password":
        this.myType = "password";
        break;
    }
    switch (this.validator) {
      case "username":
        this.altMsg = "用户名只能包含汉字，字母，数字,且长度为6-10";
        break;
    }
  },
  methods: {
    inputFocus() {
      this.alert = true;
    },
    inputKeyup() {
      this.TestValid();
    },
    setErrMsg(msg) {
      this.active = "error";
      this.error = true;
      this.errMsg = msg;
    },
    setDefault() {
      this.active = "";
      this.error = false;
      this.errMsg = "";
    },
    inputBlur() {
      this.alert = false;
      //检测不过关
      this.TestValid();
    },
    inputMouseover() {
      this.active = "active";
    },
    inputMouseleave() {
      this.active = "";
    },
    TestValid() {
      switch (this.validator) {
        case "username":
          if (!validChar(this.myValue)) {
            this.setErrMsg("用户名中含有非法字符");
          } else if (!validLen(this.myValue, 6, 10)) {
            this.setErrMsg("用户名中长度不符合要求");
          } else {
            this.setDefault();
          }
          break;
      }
    }
  }
};

function validChar(value) {
  var pattern = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
  if (pattern.test(value)) {
    return true;
  }
  return false;
}

function validLen(value, min, max) {
  var len = value.replace(/[\u4e00-\u9fa5]/g, "xx").length;
  if (len >= min && len <= max) {
    return true;
  }
  return false;
}
</script>
<style lang="stylus">
.active {
  border: 1px solid #5d5d5d;
}

.error {
  border: 1px solid red;
}

.errMsg {
  color: red;
}

.altMsg {
  color: red;
  font-size: 12px;
}
</style>
