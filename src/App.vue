<template>
  <div class="container">
    <AddTodo />
    <TodosList />
  </div>
</template>

<script>
import TodosList from "./components/TodosList.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  name: "App",
  components: {
    TodosList,
    AddTodo,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 50vw;
  height:95%;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
