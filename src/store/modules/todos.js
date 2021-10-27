import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    console.log(response.data);
    commit("addTodo", response.data);
  }
};

const mutations = {
  setTodos: (state, listTodos) => (state.todos = listTodos),
  addTodo: (state, newTodos) => (state.todos = [newTodos, ...state.todos])
};

export default {
  state,
  getters,
  actions,
  mutations
};
