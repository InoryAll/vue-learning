<template>
  <div>
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
    </div>
    <div class="sort-pop-up">
      <div v-transfer-dom>
        <popup
          v-model="showSort"
          :show-mask="true"
          :popup-style="{zIndex: 501}"
          class="dropdown-filter"
          position="top"
          @on-hide="handlePopUpHide('sortActive')">
          <div class="sort-pop-up-content">
            <group>
              <radio :options="sortOptions">
                <template
                  slot-scope="props"
                  slot="each-item"><!-- use scope="props" when vue < 2.5.0 -->
                  <p class="pop-up-options">
                    {{ props.label }}
                  </p>
                </template>
              </radio>
            </group>
          </div>
        </popup>
      </div>
    </div>
    <div class="insurance-pop-up">
      <popup
        v-model="showInsurance"
        :show-mask="true"
        :popup-style="{zIndex: 501}"
        class="dropdown-filter"
        position="top"
        @on-hide="handlePopUpHide('insuranceActive')">
        <div class="sort-pop-up-content">
          <group>
            <checklist
              required
              :options="insuranceOptions"
              label-position="right"
            ></checklist>
          </group>
        </div>
      </popup>
    </div>
    <div class="filter-pop-up">
      <div v-transfer-dom>
        <popup
          v-model="showFilter"
          :show-mask="true"
          class="slide-filter"
          :popup-style="{zIndex: 9999}"
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
import { Flexbox, FlexboxItem, Popup, TransferDom, Group, Radio, Checklist } from 'vux';
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
    Group,
    Radio,
    Checklist,
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
      sortOptions: [{
        key: '1',
        value: '智能排序',
      }, {
        key: '2',
        value: '销量由高到低',
      }, {
        key: '3',
        value: '价格由低到高',
      }, {
        key: '4',
        value: '价格由高到低',
      }],
      insuranceOptions: [{
        key: '1',
        value: '少儿健康',
        inlineDesc: '未成年人的专项保障，健康、意外均涵盖。',
      }, {
        key: '2',
        value: '中老年健康',
        inlineDesc: '未成年人的专项保障，健康、意外均涵盖。',
      }, {
        key: '3',
        value: '高端医疗',
        inlineDesc: '未成年人的专项保障，健康、意外均涵盖。',
      }, {
        key: '4',
        value: '重大疾病',
        inlineDesc: '未成年人的专项保障，健康、意外均涵盖。',
      }],
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

<style lang="less">
  @import "../animation.less";
  .weui-cells.vux-no-group-title{
    margin-top: 0 !important;
  }

  .rotateIn{
    animation: rotateIn 0.3s linear 0s 1;
    animation-fill-mode: both;
  }
  .rotateOut{
    animation: rotateOut 0.3s linear 0s 1;
    animation-fill-mode: both;
  }
  .filter-util{
    z-index: 999;
    position: relative;
    height: 40px;
    background: #fff;
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
    position: absolute !important;
    width: 100%;
    left: 0;
    top: 196px !important;
    text-align: left;
  }
  .slide-filter{
  }
  .pop-up-options{
    margin: 0;
    padding: 0;
    text-align: left;
  }
</style>
