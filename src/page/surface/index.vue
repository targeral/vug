<template>
  <div id="surface">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'surface'
  }
</script>

<style>
#surface {
  background-color:dimgrey;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
