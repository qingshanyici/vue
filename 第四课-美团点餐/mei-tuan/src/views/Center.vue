<template>
  <div>
    <div class="header"></div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit("HideTabbar", false);
  },
  destroyed(){
    this.$store.commit("ShowTabbar", false);
  }
};
</script>

<style scoped>
   * {
       margin: 0;
       padding: 0
   }
   .w{
       width: 1200px;
       margin: 0 auto;
   }
   .header{
       height: 42px;
       margin: 30px auto;
   }
</style>