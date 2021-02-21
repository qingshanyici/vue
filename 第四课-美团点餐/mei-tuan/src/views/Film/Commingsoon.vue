<template>
  <div>
    <div>即将上映</div>
    <input v-model="txt" />
    <div v-if="txt">
      <ul v-for="data in searchList" :key="data.filmId">
        <li>{{data.name}}</li>
      </ul>
    </div>
    <div v-else>
      <ul v-for="data in cominglistGetter" :key="data.filmId">
        <li>{{data.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      txt: ""
    };
  },
  mounted() {
    if (this.$store.state.cominglist.length == 0) {
      //没有缓存，去请求actions
      this.$store.dispatch("getCominglist");
    }
  },
  methods: {},
  computed: {
    ...mapGetters(["cominglistGetter"]),
    searchList() {
      return this.$store.state.cominglist.filter((item, index) => {
        return item.name.indexOf(this.txt) > -1;
      });
    }
  }
};
</script>
<style scoped>
.box {
  border: 1px solid red;
  height: 500px;
}
</style>