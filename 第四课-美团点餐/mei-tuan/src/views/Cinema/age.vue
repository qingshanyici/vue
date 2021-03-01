 <template>
  <div>
    <button @click="changeAge">年龄修改器</button>
  </div>
</template>

 <script>
export default {
  props: {
      handleHobby: {
          type: Function,
          default: null
      }
  },
  data() {
    return {        
 
    };
  },
  methods: {
    changeAge() {
      this.$emit("update:age", 20);
      this.$emit("handleTruth", "少壮不努力，老大徒伤悲");
      this.handleHobby()
    },
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.data = {
            id: this.id,
            userid: this.userid,
            name: this.ruleForm.name,
            title: this.ruleForm.title,
          };
          this.resetForm();
          this.$parent.closeDialog();
        } else {
          return false;
        }
      });
    },
    resetForm() {
      console.log("reset");
      this.$parent.closeDialog();
      this.$refs["ruleForm"].resetFields();
    },
    confimCancel() {
      this.$emit("update:dialogVisible", false);
    },
  },
};
</script>

 <style lang="scss" scoped>
</style>