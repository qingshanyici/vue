<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
export default {
  data(){
    return {}
  },
  methods: {},
  components: {
    tabbar,
  }
}
</script>

<style>

</style>
