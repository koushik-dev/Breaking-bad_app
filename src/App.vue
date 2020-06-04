<template>
  <div id="app">
    <Layout>
      <router-view></router-view>
    </Layout>    
  </div>
</template>

<script>
import Layout from "./components/Layout";
import './assets/styles/tailwind.css';

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
body {
  font-family: 'poppins';
  background-color: #1a1732;
  color: #d1d0d8;
}
</style>
