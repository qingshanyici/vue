<template>
  <div>
    <!-- 正在热映
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
        {{ data }}
      </li>
    </ul> -->

    <div>
      <slot></slot>
      <p>这是内容</p>
      <slot></slot>

    </div>

   

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      datalist: [],
      filteredTodos: [
        { id: 1, text: "王花花" },
        { id: 1, text: "赵明明" },
        { id: 1, text: "李春春" },
      ],
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
      console.log("正在热映-->>", res.data);
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

<style lang="scss" scoped>
.slot-box {
  border: 1px solid red;
}
</style>