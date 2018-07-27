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
              <radio :options="sortOptions"  @on-change="handleSortChange">
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
          <group class="checker-group">
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
            <group title="性别">
              <checker
                default-item-class="default-checker"
                selected-item-class="selected-checker"
              >
                <checker-item value="1">不限</checker-item>
                <checker-item value="2">男</checker-item>
                <checker-item value="3">女</checker-item>
              </checker>
            </group>
            <group title="承保年龄">
              <checker
                default-item-class="default-checker"
                selected-item-class="selected-checker"
              >
                <checker-item value="1">不限</checker-item>
                <checker-item value="2">0-3周岁</checker-item>
                <checker-item value="3">4-17周岁</checker-item>
                <checker-item value="4">18-55周岁</checker-item>
                <checker-item value="5">56-60周岁</checker-item>
                <checker-item value="6">61-65周岁</checker-item>
                <checker-item value="7">66-70周岁</checker-item>
                <checker-item value="8">71-80周岁</checker-item>
                <checker-item value="9">80周岁以上</checker-item>
              </checker>
            </group>
            <group title="保险期间">
              <checker
                default-item-class="default-checker"
                selected-item-class="selected-checker"
              >
                <checker-item value="1">不限</checker-item>
                <checker-item value="2">1年</checker-item>
                <checker-item value="3">至70周岁</checker-item>
                <checker-item value="4">终身</checker-item>
              </checker>
            </group>
            <group title="品牌商家" class="end">
              <checker
                default-item-class="default-checker"
                selected-item-class="selected-checker"
              >
                <checker-item value="1">不限</checker-item>
                <checker-item value="2">百年人寿</checker-item>
                <checker-item value="3">平安养老</checker-item>
                <checker-item value="4">人保健康</checker-item>
                <checker-item value="5">人保财险</checker-item>
                <checker-item value="6">史带财险</checker-item>
                <checker-item value="7">太平洋产险</checker-item>
                <checker-item value="8">太平养老</checker-item>
                <checker-item value="9">中国平安</checker-item>
                <checker-item value="10">安联财险</checker-item>
                <checker-item value="11">安心保险</checker-item>
                <checker-item value="12">泰康在线</checker-item>
                <checker-item value="13">永安保险</checker-item>
                <checker-item value="14">弘康人寿</checker-item>
              </checker>
            </group>
            <div class="action-btn">
              <button class="action-btn-reset">重置</button>
              <button class="action-btn-success">完成</button>
            </div>
          </div>
        </popup>
      </div>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Popup, TransferDom, Group, Radio, Checklist, Checker, CheckerItem } from 'vux';
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
    Checker,
    CheckerItem,
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
      this.sourceMap.forEach((value, key) => {
        if (this[this.sourceMap.get(paramName)]) {
          return;
        }
        this[value] = false;
      });
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
    handleSortChange(value, label) {
      this.sourceMap.forEach((value, key) => {
        this[value] = false;
      });
      console.log(value, label);
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
    font-size: 14px;
    p{
      font-size: 14px;
    }
    .vux-label-desc{
      font-size: 13px;
      color: #999;
    }
  }
  .pop-up-options{
    font-size: 14px;
    margin: 0;
    padding: 0;
    text-align: left;
  }
  .slide-filter{
    height: auto !important;
    overflow-y: scroll !important;
    max-height: none !important;
    bottom: 0 !important;
    background: #fff !important;
    .weui-cells__title{
      color: #666;
      padding-left: 0;
      margin-bottom: 0.7rem;
    }
    .weui-cells::before, .weui-cells::after{
      display: none;
    }
    padding: 20px;
  }
  .default-checker {
    border: 1px solid #ccc;
    padding: 12px 0;
    width: 30.33%;
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-bottom: 8px;
  }
  .selected-checker {
    border: 1px solid #f75730;
    color: #f75730;
  }
  .action-btn{
    position: fixed;
    width: 80%;
    bottom: 0;
    background: #fff;
    padding: 10px 0;
    border-top: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
    &-reset, &-success{
      outline: none;
      color: #333;
      border: 1px solid #999;
      background: none;
      font-size: 12px;
      padding: 6px 14px;
    }
    &-success{
      color: #f75730;
      border-color: #f75730;
    }
  }
  .end{
    padding-bottom: 40px;
  }
</style>
