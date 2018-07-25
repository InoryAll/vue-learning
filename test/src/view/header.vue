<template>
    <x-header :left-options="{ backText: ''}" class="x-header-extend">
      <slot name="header-content">这里是顶部菜单栏</slot>
      <span slot="right">
        <a href="#" class="right-action-btn">
          <icon class="right-action-btn-icon" type="search"></icon>
        </a>
        <a href="#" class="right-action-btn">···</a>
      </span>
    </x-header>
</template>

<script>
import { XHeader, Icon } from 'vux';

export default {
  name: 'insurance-header',
  components: {
    XHeader,
    Icon,
  },
  data() {
    return {};
  },
  computed: {
  // 计算属性
  },
  methods: {
  // 自定义函数
  },
};
</script>

<style lang="less" scoped>
  .x-header-extend{
    border-bottom: 1px solid #d9d9d9;
  }
  .right-action-btn{
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    &-icon{
      font-size: 20px;
      color: #333;
    }
  }
</style>
