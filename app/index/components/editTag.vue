<template>
    <div>
        <section class="todoapp">
            <header class="header">
                <h1>edit-Tag</h1>
                <router-link to="/addTodo">关闭</router-link>
            </header>
            <div class="tag" v-show="addFlag">
                <input type="text" placeholder="描述" v-model="newDescription">
                <input type="color" placeholder="颜色" v-model="newColor">
            </div>
            <div class="tag" v-for="tag in tags" :key="tag.id">
                <input type="text" placeholder="描述" v-model="tag.description">
                <input type="color" placeholder="颜色" v-model="tag.color">
                <button @click="delTag(tag)">删除标签</button>
            </div>
            <button @click="addTag">添加标签</button>
            <router-link to="/todos"><button @click="commitModify">确认修改</button></router-link>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["tags"])
  },
  methods: {
    delTag(tag) {
      if (!tag) {
        return;
      }
      Promise.all([this.DELTAG(tag)]).then(() => {
        console.log(this);
      });
    },
    addTag() {
      this.addFlag = true;
    },
    commitModify() {
      //增加新的
      if (this.addFlag) {
        var value = this.newDescription && this.newDescription.trim();
        if (!value) {
          return;
        }
        Promise.all([
          this.ADDTAG({
            description: this.newDescription,
            color: this.newColor
          })
        ]).then(() => {
          console.log(this);
        });
        this.newDescription = "";
        this.newColor = "#fff";
        this.addFlag = false;
      } else {
        //修改旧的
        Promise.all([this.COMMITMODIFY(this.tags)]).then(() => {
          console.log(this);
        });
      }
    },
    ...mapMutations(["ADDTAG", "COMMITMODIFY", "DELTAG"])
  },
  data() {
    return {
      newDescription: "",
      newColor: "#fff",
      addFlag: false
    };
  }
};
</script>

<style lang="stylus">
</style>