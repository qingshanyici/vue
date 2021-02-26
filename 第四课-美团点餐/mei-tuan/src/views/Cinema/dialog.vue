 <template>
  <el-dialog title="提示"  
             width="80%"
             :visible.sync="visible"
             :destroy-on-close="true"
             :show-close="false"
             :append-to-body="true"
             :before-close="resetForm">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-select v-model="ruleForm.title" placeholder="请选择活动区域">
          <el-option
            v-for="(item, index) in titlelist"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          立即创建
        </el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

 <script>
export default {
  props: {
      visible: {
          type: Boolean,
          default: false
      },
    id: {
      type: String,
      default: "",
    },
    userid: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      data: {},
      ruleForm: {
        name: "",
        title: "",
      },
      rules: {
        name: [{ required: true, trigger: "blur" }],
        title: [{ required: true, trigger: "change" }],
      },
      titlelist: ["1号标题", "2号标题"],
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.data = {
            id: this.id,
            userid: this.userid,
            name: this.ruleForm.name,
            title: this.ruleForm.title,
          };
          console.log("submit-->>", this.data);
          this.resetForm()
          this.$parent.closeDialog();
        } else {
          return false;
        }
      });
    },
    resetForm() {
        console.log("reset")
       this.$parent.closeDialog();
      this.$refs["ruleForm"].resetFields();
    },
    
    
        confimCancel(){
            this.$emit("update:dialogVisible", false);
        },
        
  },
};
</script>

 <style lang="scss" scoped>
</style>