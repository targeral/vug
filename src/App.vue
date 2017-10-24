<template>
  <div id="app">
    <img src="./assets/logo.png">
    <blog-list />
    <blog-content />
  </div>
</template>

<script>
import BlogList from './mockpage/BlogList';
import BlogContent from './mockpage/BlogContent';

export default {
  name: 'app',
  components: {
    BlogContent,
    BlogList,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
