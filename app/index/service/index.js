var STORAGE_TODO_KEY = "todos-vuejs-todo";
var STORAGE_TAG_KEY = "todos-vuejs-tag";

const todoStorage = {
    fetchTodos() {
        // localStorage.clear();
        return JSON.parse(localStorage.getItem(STORAGE_TODO_KEY) || "[]");
    },
    fetchTags() {
        // localStorage.clear();
        return JSON.parse(localStorage.getItem(STORAGE_TAG_KEY) || "[]");
    },
    saveTodos(todos) {
        if (todos) {
            localStorage.setItem(STORAGE_TODO_KEY, JSON.stringify(todos));
        }
    },
    saveTags(tags) {
        if (tags) {
            localStorage.setItem(STORAGE_TAG_KEY, JSON.stringify(tags));
        }
    },
    // save({
    //     todos,
    //     tags
    // }) {
    //     if (todos) {
    //         console.log(todos);
    //         localStorage.setItem(STORAGE_TODO_KEY, JSON.stringify(todos));
    //     }
    //     if (tags) {
    //         localStorage.setItem(STORAGE_TODO_KEY, JSON.stringify(tags));
    //     }
    // },
};

export default {
    fetchLocalStorageTodos() {
        return todoStorage.fetchTodos();
    },
    fetchLocalStorageTags() {
        return todoStorage.fetchTags();
    },
    // updateCache({
    //     todos,
    //     tags
    // }) {
    //     todoStorage.save({
    //         todos,
    //         tags
    //     });
    // }
    updateCacheTodos(todos) {
        todoStorage.saveTodos(todos);
    },
    updateCacheTags(tags) {
        todoStorage.saveTags(tags);
    },
}