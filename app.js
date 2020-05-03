new Vue({
  el: "#app",
  data: {
    todos: [],
    new_todo: "",
  },
  methods: {
    add() {
      this.todos.push({
        title: this.new_todo,
        done: false,
      });
      this.new_todo = "";
    },
    delete_item(index) {
      this.todos.splice(index, 1);
    },
  },
});
