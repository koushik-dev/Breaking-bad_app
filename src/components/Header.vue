<template>
  <header class="mb-5 text-white p-3 bg-red-700 flex justify-between items-center">
    <span class="text-3xl font-bold">{{title}}</span>
    <ul class="flex text-2xl">
      <li class="mr-5"><router-link to="/">Home</router-link></li>
      <li class="mr-5"><router-link to="/characters">Characters</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active {
  color: black;
}
</style>
