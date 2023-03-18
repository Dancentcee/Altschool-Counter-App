<script setup>
//import Counter from '@/components/Counter.vue'
</script>

<template>
  <div class="container">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <main>
  <div id="app">
    <router-link to='/'>Counter</router-link>
   <router-view />  
  </div>
  </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
 /* #app{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    margin-right: 200px;
  }
 .container{
   height: 900px;
   width: 900px;
   background-color: black;
   color: white;
   display: flex;
   justify-content: center
  
 } */
}
  
</style>
