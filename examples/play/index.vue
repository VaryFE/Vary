<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
  import { Input } from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import Vue from 'vue';
  Vue.use(Input);
  export default {
    data() {
      return {
        input: 'Hello Var UI!'
      };
    },
    components: {
      Input
    }
  };
</script>
