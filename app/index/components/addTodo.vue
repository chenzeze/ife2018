<template>
    <div>
        <section class="todoapp">
            <header class="header">
                <h1>Add-Todo</h1>
                <router-link to="/todos">关闭</router-link>
            </header>
            <input type="text" placeholder="标题" v-model="newTodo">
            <input type="date" placeholder="预计完成时间" v-model="finishTime">
            <input type="text" placeholder="备注" v-model="remarks">
            tags:
            <div class="tags" v-show="tags.length">
              <li v-for="tag in tags" :key="tag.id" :class="{tag:true,selected:judge(tag)}" @click="tagSelectedHandler(tag)">
                {{tag.description}}
              </li>
            </div>
            <router-link to="/editTag">编辑标签</router-link>
            <router-link to="/todos"><button @click="addTodo">确认添加</button></router-link>
        </section>
    </div>
</template>

<script>
export default {
  methods: {
    judge(tag) {
      var index = this.tagList.indexOf(tag);
      if (index > -1) {
        return true;
      }
      return false;
    },
    tagSelectedHandler(tag) {
      var index = this.tagList.indexOf(tag);
      if (index > -1) {
        this.tagList.splice(index, 1);
      } else {
        this.tagList.push(tag);
      }
      console.log(this.tagList);
    },
    addTodo() {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      //检查选中选项的个数有没有超过两个
      if (this.tagList.length > 2) {
        alert("标签个数不能超过两个");
        return;
      }
      var todo = {
        title: this.newTodo,
        finishTime: this.finishTime,
        remarks: this.remarks,
        completed: false,
        tagList: this.tagList
      };
      console.log(todo);
      this.$store.commit("addTodo", todo);
      this.newTodo = "";
    }
  },
  data() {
    return {
      newTodo: "",
      finishTime: null,
      remarks: "",
      tagList: [],
      tags: this.$store.state.tags,
      selectedFlag: false
    };
  }
};
</script>

<style lang="stylus">
</style>
