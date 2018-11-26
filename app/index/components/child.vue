<template>
    <div>
        <div>
            子组件:<input type="text" v-model="msg"><button v-on:click="$emit('patch',msg)">通知父组件</button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是空er"
    };
  }
};
</script>