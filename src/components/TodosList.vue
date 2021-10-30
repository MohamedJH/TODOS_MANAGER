<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete or Incomplete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
  </div>
  <div class="list_body">
    <Todos />
  </div>
</template>

<script>
import Todos from "./Todos";

export default {
  name: "TodosList",
  components: {
    Todos,
  },
};
</script>
<style scoped>
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: green;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: red;
}
.list_body {
  display: flex;
  flex-direction: column;
  max-height: 70%;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
