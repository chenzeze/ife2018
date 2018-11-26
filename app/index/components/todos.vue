<template>
    <div>
        <section class="todoapp" v-cloak>
            <header class="header">
                <h1>todos</h1>
                <input type="text" class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">
                <router-link to="/addTodo">添加</router-link>
            </header>
            <div class="tags" v-show="tags.length">
              <li :class="{tag:true,selected:judge(tag.id)}" v-for="tag in tags" :key="tag.id" @click="tagSelectedHandler(tag.id)">
                {{tag.description}}
              </li>
            </div>
            <section class="main" v-show="todos.length">
                <input type="checkbox" v-model="allDone" id="toggle-all" class="toggle-all">
                <label for="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                    <li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed:todo.completed,editing:todo==editedTodo}">
                        <div class="view">
                            <input type="checkbox" class="toggle" v-model="todo.completed">
                            <label>{{todo.title}}</label>
                            <span>{{todo.finishTime}}</span>
                            <div v-show="todo.tagList">
                              <span v-for="tag in todo.tagList" :key="tag.id">
                                {{tag.description}}
                              </span>
                            </div>
                            <button class="destroy" @click="removeTodo(todo)"></button>
                            <router-link :to="{name:'editTodo',params:{editedTodoId:todo.id}}"><button @click="editTodo(todo)">编辑</button></router-link>
                        </div>
                    </li>
                </ul>
            </section>
            <footer class="footer" v-show="todos.length">
                <span class="todo-count">
                    <strong v-text="remaining"></strong>
                    {{pluralize('item',remaining)}} left
                </span>
                <ul class="filters">
                    <li><router-link to="/todos/all" :class="{selected:visibility=='all'}">All</router-link></li>
                    <li><router-link to="/todos/active" :class="{selected:visibility=='active'}">Active</router-link></li>
                    <li><router-link to="/todos/completed" :class="{selected:visibility=='completed'}">Completed</router-link></li>
                </ul>
                <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">Clear completed</button>
            </footer>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

function filter(todos, { visibility, tagIdList }) {
  return todos.filter(function(todo) {
    let s = new Set(todo.tagList.map(item => item.id));
    console.log(s);
    switch (visibility) {
      case "all":
        return tagIdList.every(id => s.has(id));
      case "active":
        return !todo.completed && tagIdList.every(id => s.has(id));
      case "completed":
        return todo.completed && tagIdList.every(id => s.has(id));
    }
  });
}

export default {
  data() {
    return {
      selectedTagIdList: [],
      newTodo: "",
      editedTodo: null,
      visibility: "all"
    };
  },
  computed: {
    tags: function() {
      return this.$store.state.tags;
    },
    todos: function() {
      //返回taglist中包含选中的所有tagid的todo
      return this.$store.state.todos;
    },
    filteredTodos: function() {
      console.log("woshi");
      let visibility = this.visibility;
      let tagIdList = this.selectedTagIdList;
      return filter(this.todos, { visibility, tagIdList });
      // return filters[this.visibility](this.todos);
    },
    remaining: function() {
      let tagIdList = this.selectedTagIdList;
      return filter(this.todos, { visibility: "active", tagIdList }).length;
      // return filters.active(this.todos).length;
    },
    allDone: {
      get: function() {
        return this.remaining === 0;
      },
      set: function(value) {
        this.todos.forEach(function(todo) {
          todo.completed = value;
        });
      }
    }
  },
  // watch: {
  //   todos: {
  //     deep: true,
  //     handler: todoStorage.save
  //   }
  // },
  methods: {
    judge(tagId) {
      var index = this.selectedTagIdList.indexOf(tagId);
      if (index > -1) {
        return true;
      }
      return false;
    },
    tagSelectedHandler(tagId) {
      var index = this.selectedTagIdList.indexOf(tagId);
      if (index > -1) {
        this.selectedTagIdList.splice(index, 1);
      } else {
        this.selectedTagIdList.push(tagId);
      }
      console.log(this.selectedTagIdList);
    },
    editTodo(todo) {
      this.$store.commit("editTodo", todo);
    },
    pluralize(word, count) {
      return word + (count === 1 ? "" : "s");
    },
    removeTodo(todo) {
      var index = this.$store.state.todos.indexOf(todo);
      this.$store.commit("removeTodo", index);
    },
    removeCompleted() {
      var todos = filters.active(this.todos);
      this.$store.commit("removeCompleted", todos);
    }
  },
  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  },
  filters: {
    getDescription: function(tagid, tags) {
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].id == tagid) {
          return tags[i].description;
        }
      }
    }
  }
};
</script>

<style lang="stylus">
@import './index.styl';

.selected {
  background: orange;
  border: 1px solid #000;
}
</style>