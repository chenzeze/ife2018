import service from '../service/index.js';
const todos = service.fetchLocalStorageTodos();
const tags = service.fetchLocalStorageTags();
for (let i = 0; i < todos.length; i++) {
    todos[i].id = i;
}
export default {
    todos: todos,
    tags: tags,
    beforeEditCache: {},
    paramsTodoID: todos.length,
    paramsTagID: tags.length,
};