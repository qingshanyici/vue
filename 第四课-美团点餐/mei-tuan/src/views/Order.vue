<template>
  <div class="container">
    <div class="layout">
      <!-- 左侧菜单栏 -->
      <div class="menu">
        <ul>
          <li>
            <a>特价套餐</a>
            <span>1</span>
          </li>
          <li><a>主食</a></li>
          <li><a>凉菜</a></li>
          <li><a>川菜</a></li>
          <li><a>粤菜</a></li>
          <li><a>酒水</a></li>
        </ul>
      </div>
      <!-- 右侧菜品 -->
      <div class="main">
        <h6 class="head-txt">菜品</h6>
        <ul>
          <li class="content">
            <img src="../assets/口水鸡.jpg" alt="菜的图片" />
            <div class="info">
              <div>口水鸡</div>
              <div>月售1234件 | 好评90%</div>
              <label class="choose-area">
                <strong>$10</strong>
                <div class="choose">
                  <a>-</a>
                  <span>1</span>
                  <a>-</a>
                </div>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="submit">共3分，300元</div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      cuisine: []
    };
  },
  mounted() {
    this.getCuisine();
  },
  methods: {
    getCuisine() {
      //获取全部菜系
      this.$http
        .get("/data/cuisine")
        .then((res) => console.log("res-->>", res))
        .then((err) => console.log("err-->>", err));
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  position: relative;
  height: 100%;
}

.layout {
  display: flex;
  width: 100%;
  height: 100%;
}
.menu {
  width: 20%;
  height: 100%;
  background: #ccc;
}
.main {
  flex: 1;
}
.head-txt {
  text-align: left;
  color: red;
}
ul {
  margin-bottom: 20px;
}
li {
  list-style: none;
}
.content {
  display: flex;
  align-items: flex-end;
}
img {
  width: 120px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.choose-area {
  display: flex;
  justify-content: space-around;
}
.submit {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background: cornflowerblue;
}
</style>
