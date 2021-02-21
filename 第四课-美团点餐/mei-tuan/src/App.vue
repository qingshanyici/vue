<template>
  <div id="app">
    <tabbar v-show="tabShow"></tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
import Film from './views/Film.vue'
import {mapState} from 'vuex'

export default {
  data(){
    return {}
  },
  methods: {},
  components: {
    tabbar,
    Film,
  },
  created(){
    
  },
  computed: {
    ...mapState(['tabShow'])
  }
 
}
</script>

<style>

</style>
