<template>
  <div id="app">
    <Index />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Index from './components/Index'
export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
   @import './assets/css/index.css';
</style>
