<template>
  <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">
    <slot>这里是顶部菜单栏</slot>
  </x-header>
</template>

<script>
import { XHeader } from 'vux';

export default {
  name: 'insurance-header',
  components: {
    XHeader,
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

<style lang="less">

</style>
