<template>

  <div class="dropList">
    <i @click="handleToggle()" class="fas fa-list-ul  fa-lg" ></i>
    <i class="fas fa-columns  fa-lg"></i>
  </div>
  <div class="[toggle ? 'todos_column':'todos_line']">
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
  data() {
    return {
      toggle:false
    }
  },
  methods: {
    ...mapActions(["fetchTodos"]),
    handleToggle(){
      this.toggle=true;
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style >
.todos_line {
  width: 100%;
  height: 31em;
  border: 1px solid black;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3,1fr) !important;
  gap: 1rem;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.todos_line::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.todos_line {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.todos_column{
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(1fr);
  width: 100%;
  height: 31em;
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
.dropList{
  float:right;
  display:flex;
  justify-content:space-between;
  width:6%;
  margin-bottom: 5px;
}


@media (max-width:  500px){
.todos {
  grid-template-columns: repeat(1fr);
}
}


</style>
