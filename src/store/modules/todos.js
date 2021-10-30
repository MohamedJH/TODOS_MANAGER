import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
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
      { id: state.todos.length + 1, title, completed: false }
    );
    commit("addTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
};

const mutations = {
  setTodos: (state, listTodos) => (state.todos = listTodos),
  addTodo: (state, newTodos) => (state.todos = [newTodos, ...state.todos]),
  removeTodo: (state, id) => state.todos.filter((todo) => todo.id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
