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
    <div class="sort-pop-up">
      <div v-transfer-dom>
        <popup
          v-model="showSort"
          :show-mask="false"
          class="dropdown-filter"
          position="top"
          @on-hide="handlePopUpHide('sortActive')">
          <div class="sort-pop-up-content">
            1111111111
          </div>
        </popup>
      </div>
    </div>
    <div class="insurance-pop-up">
      <div v-transfer-dom>
        <popup
          v-model="showInsurance"
          :show-mask="false"
          class="dropdown-filter"
          position="top"
          @on-hide="handlePopUpHide('insuranceActive')">
          <div class="sort-pop-up-content">
            2222222222
          </div>
        </popup>
      </div>
    </div>
    <div class="filter-pop-up">
      <div v-transfer-dom>
        <popup
          v-model="showFilter"
          :show-mask="true"
          class="slide-filter"
          width="80%"
          position="right"
          @on-hide="handlePopUpHide('filterActive')">
          <div class="sort-pop-up-content">
            33333333333
          </div>
        </popup>
      </div>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Popup, TransferDom } from 'vux';
// eslint-disable-next-line
import $ from 'jquery';

export default {
  name: 'filter-util',
  directives: {
    TransferDom,
  },
  components: {
    Flexbox,
    FlexboxItem,
    Popup,
  },
  data() {
    const sourceMap = new Map();
    sourceMap.set('sortActive', 'showSort');
    sourceMap.set('insuranceActive', 'showInsurance');
    sourceMap.set('filterActive', 'showFilter');
    return {
      showSort: false,
      showInsurance: false,
      showFilter: false,
      sortActive: 0,
      insuranceActive: 0,
      filterActive: 0,
      sourceMap,
    };
  },
  computed: {},
  methods: {
    handleAnimationClick(paramName) {
      this[this.sourceMap.get(paramName)] = !this[this.sourceMap.get(paramName)];
      if (this[paramName] === 0) {
        this[paramName] = 1;
        return;
      }
      this[paramName] = -1 * this[paramName];
    },
    handlePopUpHide(paramName) {
      this[paramName] = -1;
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
  .dropdown-filter{
    position: relative;
    left: 0;
    bottom: 0;
  }
  .slide-filter{
  }
</style>
