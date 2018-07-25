<template>
  <div class="filter-util">
    <flexbox>
      <flexbox-item>
        <button class="sort-btn filter-util-btn">
          <span>排序</span>
          <x-icon class="filter-util-icon" type="ios-arrow-down" size="18"></x-icon>
        </button>
      </flexbox-item>
      <flexbox-item>
        <button class="insurance-btn filter-util-btn">
          <span>特色保障</span>
          <x-icon class="filter-util-icon" type="ios-arrow-down" size="18"></x-icon>
        </button>
      </flexbox-item>
      <flexbox-item>
        <button class="filter-btn filter-util-btn">
          <span>筛选</span>
          <x-icon class="filter-util-icon" type="ios-arrow-down" size="18"></x-icon>
        </button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux';

export default {
  name: 'filter-util',
  components: {
    Flexbox,
    FlexboxItem,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="less">
  .filter-util{
    height: 40px;
    border-bottom: 1px solid #d9d9d9;
    &-icon{
      line-height: 40px;
      vertical-align: middle;
      font-size: 18px;
    }
    &-btn{
      background: none;
      border: none;
      outline: none;
      width: 100%;
      line-height: 40px;
      text-align: center;
      vertical-align: middle;
      span{
        vertical-align: middle;
      }
    }
  }
</style>
