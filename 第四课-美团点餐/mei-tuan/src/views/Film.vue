<template>
  <div>
    <div>轮播</div>
    <div>film-header</div>
    <div>
      <ul>
        <li>
          <router-link to="/film/nowplaying" tag="li" active-class="myactive">正在热映</router-link>
        </li>
        <li>
          <router-link to="/film/commingsoon" tag="li" active-class="myactive">即将上线</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import nowplaying from "./Film/Nowplaying";
export default {
  data() {
    return {};
  },
  components: {
    nowplaying
  }
};
</script>

<style lang="scss" scoped>
.myactive {
  color: red;
}
.box {
  width: 500px;
  height: 300px;
  background: #ccc;
  &:hover .box1{
    background: yellowgreen;
  }
  #p2:hover~p {
    font-size: 24px;
  }
}
</style>