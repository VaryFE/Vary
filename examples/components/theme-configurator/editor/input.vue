<template>
  <el-input 
    @keyup.enter.native="onUpdate"
    v-model="value"
    @blur="onUpdate"
    v-bind="$attrs"
  >
    <template slot="suffix">
      <slot name="suffix"></slot>
    </template>
  </el-input>
</template>

<script>
import { Input } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
Vue.use(Input);
export default {
  props: ['val', 'onChange'],
  data() {
    return {
      value: '',
      oldValue: ''
    };
  },
  components: {
    Input
  },
  methods: {
    onUpdate(e) {
      const { value } = e.target;
      if (value !== this.oldValue) {
        this.oldValue = value;
        this.$emit('change', value);
      }
    }
  },
  watch: {
    val: {
      immediate: true,
      handler(value) {
        this.value = value;
        if (!this.oldValue) {
          this.oldValue = value;
        }
      }
    }
  }
};
</script>