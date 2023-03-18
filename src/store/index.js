import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
      console.log(state.counter);
    },
    decrement(state) {
      state.counter--;
      console.log(state.counter);
    },
    reset(state) {
      state.counter = 0;
      console.log(state.counter);
    },
  },
});


  