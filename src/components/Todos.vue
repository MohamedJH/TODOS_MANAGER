<template>
  <div class="dropList">
    <button type="button" @click.prevent="handleDisplay">
      <i class="fas fa-list-ul fa-lg"></i>
    </button>
    <button type="button" @click.prevent="handleDisplaycolumn">
      <i class="fas fa-columns fa-lg"></i>
    </button>
  </div>
  <div :class="[toggle ? 'todos_column' : 'todos_line']">
    <div
      @dblclick="handleState(todo)"
      v-for="todo in allTodos"
      :key="todo.id"
      :class="[todo.completed ? 'completedstate' : 'todo']"
    >
      {{ todo.title }}
      <button
        type="button"
        @click.prevent="deleteTodo(todo.id)"
        class="DeleteBtn"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    handleDisplay() {
      this.toggle = true;
    },
    handleDisplaycolumn() {
      this.toggle = false;
    },
    handleState(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updatedTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos_line {
  width: 100%;
  height: 31em;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1rem;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.todos_line::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.todos_line {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.todos_column {
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(1fr);
  width: 100%;
  height: 31em;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.todos_column::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.todos_column {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.todo {
  display: flex;

  justify-content: space-between;
  border-top: 2px solid #c790cc;
  border-right: 2px solid #c790cc;
  border-bottom: 2px solid #c790cc;
  border-left: 10px solid red;
  border-radius: 2px solid 20px;
  background-color: #eaecf3;
  color: #703775;
  font-weight: 500;
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
  cursor: pointer;
}
.completedstate {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #c790cc;
  border-right: 2px solid #c790cc;
  border-bottom: 2px solid #c790cc;
  border-left: 10px solid green;
  border-radius: 2px solid 20px;
  background-color: #eaecf3;
  color: #703775;
  font-weight: 500;
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
  cursor: pointer;
  text-decoration: green wavy line-through;
}

i {
  display: flex;
  align-self: flex-start;
  border: 2px solid #18031a;
  align-self: end;
  bottom: 0px;
  right: 0px;
  color: #fff;
  cursor: pointer;
}
i:before {
  color: #d7da5c;
}
.dropList {
  float: right;
  display: flex;
  justify-content: space-between;
  width: 6%;
  margin-bottom: 5px;
}
button {
  display: flex;
  align-self: flex-start;
  width: auto;
  height: auto;
  padding: auto;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: repeat(1fr);
  }
}
</style>
