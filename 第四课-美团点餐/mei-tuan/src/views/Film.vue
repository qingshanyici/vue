<template>
  <div>
    <div>轮播</div>
    <div>film-header</div>
    <div>
      <ul>
        <li>
          <router-link to="/film/nowplaying" tag="li" active-class="myactive">
            正在热映
          </router-link>
        </li>
        <li>
          <router-link to="/film/commingsoon" tag="li" active-class="myactive">
            即将上线
          </router-link>
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
    return {
      contractList: [{ templatename: "1" }, { templatename: "2" }],
      contractgenerateDto: {},
      ruleForm: { contractname: "", templatename: "", contractList: [] },
      rules: {
        contractname: [
          { required: true, message: "请输入合同名称", trigger: "blur" },
        ],
        templatename: [
          { required: true, message: "请选择合同模板名称", trigger: "change" },
        ],
      },
    };
  },
  components: {
    nowplaying,
  },
  methods: {
    change(val) {
      console.log("e-->>", val);
      debugger;
      this.contractgenerateDto = { ...item, contracttitle: this.contractname };
      console.log("contractgenerateDto-->>", this.contractgenerateDto);
    },
    onsubmit() {},
  },
};
</script>

<style lang="scss" scoped>
.myactive {
  color: red;
}
</style>