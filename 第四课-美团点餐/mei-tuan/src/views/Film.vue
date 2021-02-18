<template>
  <div>
    <div>轮播</div>
    <div>film-header</div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {  
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=5553387",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.cfg.common-banner",
      },
    }).then((res) => {
      console.log("film-->>",res.data);
    });
  },
};
</script>

<style scoped>
</style>