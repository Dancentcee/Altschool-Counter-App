<template>
  <div class="counter">
    {{ $store.state.counter }}
  </div>
  <div class="flex items-center justify-center gap-x-4">
    <button
      class="px-4 py-2 text-white bg-blue-600 focus:outline-none"
      @click="increment">
      Increment
    </button>
    <button
      class="px-4 py-2 text-white bg-red-600 focus:outline-none"
      @click="decrement">
      Decrement
    </button>
    <button
      class="px-4 py-2 text-white bg-green-600 focus:outline-none"
      @click="reset">
      Reset
    </button>
  </div>
</template>

<script>
import { mapState }  from "vuex";

  
  export default {
    name: 'Counter',
    methods: {
      increment() {
      this.$store.commit("increment");
      },
      decrement() {
        this.$store.commit("decrement");
      },
      reset() {
        this.$store.commit("reset");
      },
    },
    computed: {
      ...mapState(["counter"]),
    },
  }
</script>
<style>
  
</style>