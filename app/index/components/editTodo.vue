<template>
    <div>
        <section class="todoapp">
            <header class="header">
                <h1>Edit-Todo</h1>
                <router-link to="/todos"><button @click="cancelEdit(editedTodo)">关闭</button></router-link>
            </header>
            <input type="text" placeholder="标题" v-model="editedTodo.title">
            <input type="date" placeholder="预计完成时间" v-model="editedTodo.finishTime">
            <input type="text" placeholder="备注" v-model="editedTodo.remarks">
            tags:
            <div class="tags" v-show="tags.length">
               <li v-for="tag in tags" :key="tag.id" :class="{tag:true,selected:judge(tag)}" @click="tagSelectedHandler(tag)">
                {{tag.description}}
              </li>
            </div>
            <router-link to="/editTag">编辑标签</router-link>
            <router-link to="/todos"><button @click="doneEdit(editedTodo)">确认修改</button></router-link>
        </section>
    </div>
</template>

<script>
export default {
  name: "editTodo",
  computed: {
    editedTodo: function() {
      var editedTodoId = this.$route.params.editedTodoId;
      var todos = this.$store.state.todos;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == editedTodoId) {
          this.index = i;
          return todos[i];
        }
      }
    },
    tags: function() {
      return this.$store.state.tags;
    }
  },
  data() {
    return {
      index: -1
    };
  },
  methods: {
    judge(tag) {
      console.log("wozhixingle");
      console.log(this.editedTodo.tagList);
      var index = this.editedTodo.tagList.indexOf(tag);
      console.log(index);
      if (index > -1) {
        return true;
      }
      return false;
    },
    tagSelectedHandler(tag) {
      var index = this.editedTodo.tagList.indexOf(tag);
      if (index > -1) {
        this.editedTodo.tagList.splice(index, 1);
      } else {
        this.editedTodo.tagList.push(tag);
      }
      console.log(this.editedTodo.tagList);
    },
    removeTodo() {
      this.$store.commit("removeTodo", this.index);
    },
    doneEdit(todo) {
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo();
        return;
      }
      console.log(todo.tagList);

      this.$store.commit("doneEdit", todo);
    },
    cancelEdit(todo) {
      this.$store.commit("cancelEdit", this.index);
    }
  }
};
</script>

<style lang="stylus">
.selected {
  background: orange;
  border: 1px solid #000;
}
</style>
