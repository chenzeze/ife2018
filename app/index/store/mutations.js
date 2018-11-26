import * as types from './mutations-types';
import service from '../service/index.js';
export default {
    [types.addTodo](state, todo) {
        todo.id = state.paramsTodoID++;
        state.todos.unshift(todo);
        service.updateCacheTodos(state.todos);
        // for (let i = 0; i < todo.tagList.length; i++) {
        //     state.mergeTodoTag.push(todo.id, todo.tagList[i].id);
        // }
    },

    [types.editTodo](state, todo) {
        state.beforeEditCache["title"] = todo.title;
        state.beforeEditCache["finishTime"] = todo.finishTime;
        state.beforeEditCache["remarks"] = todo.remarks;
    },
    [types.removeTodo](state, index) {
        state.todos.splice(index, 1);
        service.updateCacheTodos(state.todos);
    },
    [types.cancelEdit](state, index) {
        state.todos[index].title = state.beforeEditCache.title;
        state.todos[index].finishTime = state.beforeEditCache.finishTime;
        state.todos[index].remarks = state.beforeEditCache.remarks;
        service.updateCacheTodos(state.todos);
    },
    [types.doneEdit](state, todo) {
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i].id == todo.id) {
                state.todos[i] = todo;
            }
        }
        state.beforeEditCache = null;
        service.updateCacheTodos(state.todos);
    },
    [types.removeCompleted](state, todos) {
        state.todos = todos;
        service.updateCacheTodos(state.todos);
    },

    [types.ADDTAG](state, tag) {
        state.tags.unshift(tag);
        tag.id = state.paramsTagID++;
        service.updateCacheTags(state.tags);
    },
    [types.DELTAG](state, tag) {
        var index = state.tags.indexOf(tag);
        state.tags.splice(index, 1);
        service.updateCacheTags(state.tags);
    },
    [types.COMMITMODIFY](state, tags) {
        state.tags = tags;
        service.updateCacheTags(tags);
    },

    [types.SETERROR](state, payload) {
        state.errors = payload;
    },

    [types.COUNTASYNC](state, payload) {
        state.counts = payload;
    }
}