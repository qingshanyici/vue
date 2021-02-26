
<template>
  <div>
    <div>
      <span>现在的年龄: {{ age }}</span>
      <Age
        :age.sync="age"
        @handleTruth="changeTruth"
        :handleHobby="changeHobby"
      ></Age>
      <span>明白的道理: {{ truth }}</span>
      <div>喜欢： {{ hobby }}</div>
    </div>
    <div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </div>
    <div class="click" @click="dialogShow">点击弹窗</div>
    <Dialog :id="id" :userid="userid" :visible.sync="dialogVisible" />
  </div>
</template>

<script>
import Dialog from "./Cinema/dialog";
import Age from "./Cinema/age";

export default {
  components: {
    Dialog,
    Age,
  },
  data() {
    return {
      name: "",
      truth: "及时行乐",
      age: 18,
      dialogVisible: false,
      id: "3",
      userid: "8",
      hobby: "睡觉",
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    changeTruth(val) {
      this.truth = val;
    },
    changeHobby() {
      this.hobby = "阅读";
    },
    dialogShow() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss">
.click {
  cursor: pointer;
}
</style>

