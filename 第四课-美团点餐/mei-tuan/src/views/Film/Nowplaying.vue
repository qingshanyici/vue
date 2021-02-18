<template>
  <div>
    正在热映
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
        {{ data }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log("正在热映-->>",res.data);
      this.datalist = res.data.data.films;
      this.total = res.data.data.total;
    });
  },
  methods: {
    handleChangePage(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>