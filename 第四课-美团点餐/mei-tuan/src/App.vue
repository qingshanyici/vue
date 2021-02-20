<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
import Film from './views/Film.vue'

export default {
  data(){
    return {}
  },
  methods: {},
  components: {
    tabbar,
    Film,
  }
}
</script>

<style>

</style>
