<template>
  <div class="filter-util">
    <flexbox>
      <flexbox-item>
        <button class="sort-btn filter-util-btn" @click="handleAnimationClick('sortActive')">
          <span>排序</span>
          <x-icon
            class="filter-util-icon"
            :class="{ rotateIn: sortActive === 1, rotateOut: sortActive === -1 }"
            type="ios-arrow-down"
            size="18"></x-icon>
        </button>
      </flexbox-item>
      <flexbox-item>
        <button
          class="insurance-btn filter-util-btn"
          @click="handleAnimationClick('insuranceActive')">
          <span>特色保障</span>
          <x-icon
            class="filter-util-icon"
            :class="{ rotateIn: insuranceActive === 1, rotateOut: insuranceActive === -1 }"
            type="ios-arrow-down"
            size="18"></x-icon>
        </button>
      </flexbox-item>
      <flexbox-item>
        <button class="filter-btn filter-util-btn" @click="handleAnimationClick('filterActive')">
          <span>筛选</span>
          <x-icon
            class="filter-util-icon"
            :class="{ rotateIn: filterActive === 1, rotateOut: filterActive === -1 }"
            type="ios-arrow-down"
            size="18"></x-icon>
        </button>
      </flexbox-item>
    </flexbox>
    <div class="sort-pop-up"></div>
    <div class="insurance-pop-up"></div>
    <div class="filter-pop-up"></div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux';
// eslint-disable-next-line
import $ from 'jquery';

export default {
  name: 'filter-util',
  components: {
    Flexbox,
    FlexboxItem,
  },
  data() {
    return {
      sortActive: 0,
      insuranceActive: 0,
      filterActive: 0,
    };
  },
  computed: {},
  methods: {
    handleAnimationClick(paramName) {
      if (this[paramName] === 0) {
        this[paramName] = 1;
        return;
      }
      this[paramName] = -1 * this[paramName];
    },
  },
};
</script>

<style lang="less" scoped>
  @import "../animation.less";

  .rotateIn{
    animation: rotateIn 0.3s linear 0s 1;
    animation-fill-mode: both;
  }
  .rotateOut{
    animation: rotateOut 0.3s linear 0s 1;
    animation-fill-mode: both;
  }
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
