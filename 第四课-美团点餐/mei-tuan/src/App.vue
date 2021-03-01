<template>
  <div id="app">
    <!-- <tabbar v-show="tabShow"></tabbar> -->
    <tabbar v-show="isShow"></tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
import Film from './views/Film.vue'
import {mapState} from 'vuex'
import bus from '@/bus/index'

export default {
  components: {
    tabbar,
    Film,
  },
  mounted(){
    bus.$on('maizuo', (val)=>{
      console.log("val-->>", val)
    })
  },
  data(){
    return {
      isShow: true
    }
  },
  methods: {},
  computed: {
    ...mapState(['tabShow'])
  }
 
}
</script>

<style>

</style>
