<template>
    <div>
        <h3>3.1 用递归的方式实现级联组件</h3>
        <v-cascade :datalist="datalist"></v-cascade>
    </div>
</template>

<script>
import Cascade from "../components/cascade";
export default {
  components: {
    "v-cascade": Cascade
  },
  data() {
    return {
      datalist: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                  children: [
                    {
                      value: "yizhi",
                      label: "ze"
                    }
                  ]
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
</style>