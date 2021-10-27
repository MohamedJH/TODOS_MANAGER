<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
  </div>
  <div class="todos">
    
    <div v-for="todo in allTodos" :key="todo.id" :class="[todo.completed ? 'completedstate':'todo']">
      {{ todo.title }}
      <i @click="deleteTodo(todo.id)" class="fas fa-times"></i>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: "Todos",

  methods: {
    ...mapActions(["fetchTodos"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style >
.todos {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1rem;
}
.todo {
  display:flex;
  justify-content:space-between;
  border-top: 2px solid #c790cc;
  border-right: 2px solid #c790cc;
  border-bottom: 2px solid #c790cc;
  border-left:10px solid red ;
  border-radius: 2px solid 20px;
  background-color: #eaecf3;
  color: #703775;
  font-weight: 500;
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
  cursor: pointer;
}
.completedstate{
  display:flex;
  justify-content:space-between;
  border-top: 2px solid #c790cc;
  border-right: 2px solid #c790cc;
  border-bottom: 2px solid #c790cc;
  border-left:10px solid green ;
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
  display:flex;
  align-self: flex-start;
  border: 2px solid #18031a;
  align-self:end;
  bottom: 0px;
  right: 0px;
  color: #fff;
  cursor: pointer;
}
i:before{
  color:#d7da5c;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
