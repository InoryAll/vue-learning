<template>
  <div class="content-card">
    <template v-for="(item, index) in computedList">
      <card :key="index" class="product-card">
        <div slot="content">
          <div class="content-name">
            <h3 class="content-appearance-title">{{item.productName}}</h3>
            <ul class="content-appearance-ul">
              <li
                v-for="(appear, appearIndex) in item.appearance"
                :key="appearIndex"
                class="content-appearance-li">{{appear}}</li>
            </ul>
          </div>
          <div class="content-des">
            <span>承保年龄:{{item.age[0]}}-{{item.age[1]}}</span>
            <span>保险期间:{{item.insurance}}</span>
          </div>
          <div class="content-price">
            <img :src="item.imgUrl" alt="." class="content-price-img">
            <span class="content-price-tip">
              ￥<span class="big">{{item.price}}</span>
              <span class="grey">起</span>
            </span>
          </div>
          <div class="content-describe">
            <div class="content-split">
              <template v-if="item.des.length <= 3">
                <div class="split"></div>
              </template>
              <template v-if="item.des.length > 3">
                <div class="split"></div>
                <div
                  class="arrow"
                  @click="showTotal(index)"
                  :class="{ rotateIn: item.listAll, rotateOut: !item.listAll }">
                  <x-icon type="ios-arrow-down" class="arrow-icon" size="14"></x-icon>
                </div>
              </template>
            </div>
            <template v-if="item.listAll">
              <div
                class="content-detail"
                v-for="(desItem, desIndex) in item.des"
                :key="desIndex">
                <span>{{desItem.label}}</span>
                <span>{{desItem.value}}</span>
              </div>
            </template>
            <template v-else>
              <div
                class="content-detail"
                v-for="(desItem, desIndex) in item.des.slice(0,3)"
                :key="desIndex">
                <span>{{desItem.label}}</span>
                <span>{{desItem.value}}</span>
              </div>
            </template>
          </div>
        </div>
      </card>
    </template>
  </div>
</template>

<script>
import { Card } from 'vux';

export default {
  name: 'content-card',
  components: {
    Card,
  },
  props: {
    dataList: {
      type: Array,
    },
  },
  data() {
    const defaultList = [{
      productName: '一个测试用的产品名称',
      appearance: ['小标签1', '小标签2', '小标签3'],
      age: ['30days', '17ages'],
      insurance: '1year',
      price: '110.00',
      imgUrl: 'https://m.xyz.cn/p/brand/comCode654000-5.jpg',
      des: [{
        label: '测试价格1',
        value: '10000',
      }, {
        label: '测试价格2',
        value: '100000',
      }],
    }, {
      productName: '一个测试用的产品名称',
      appearance: ['小标签1', '小标签2', '小标签3'],
      age: ['30days', '17ages'],
      insurance: '1year',
      price: '210.00',
      imgUrl: 'https://m.xyz.cn/p/brand/comCode654000-5.jpg',
      des: [{
        label: '测试价格1',
        value: '10000',
      }, {
        label: '测试价格2',
        value: '100000',
      }, {
        label: '测试价格3',
        value: '20000',
      }, {
        label: '测试价格4',
        value: '10000',
      }, {
        label: '测试价格5',
        value: '50000',
      }],
    }, {
      productName: '一个测试用的产品名称',
      appearance: ['小标签1', '小标签2', '小标签3'],
      age: ['30days', '17ages'],
      insurance: '1year',
      price: '310.00',
      imgUrl: 'https://m.xyz.cn/p/brand/comCode654000-5.jpg',
      des: [{
        label: '测试价格1',
        value: '10000',
      }, {
        label: '测试价格2',
        value: '100000',
      }, {
        label: '测试价格3',
        value: '20000',
      }, {
        label: '测试价格4',
        value: '10000',
      }, {
        label: '测试价格5',
        value: '50000',
      }],
    }, {
      productName: '一个测试用的产品名称',
      appearance: ['小标签1', '小标签2', '小标签3'],
      age: ['30days', '17ages'],
      insurance: '1year',
      price: '110.00',
      imgUrl: 'https://m.xyz.cn/p/brand/comCode654000-5.jpg',
      des: [{
        label: '测试价格1',
        value: '10000',
      }, {
        label: '测试价格2',
        value: '100000',
      }, {
        label: '测试价格3',
        value: '20000',
      }],
    }];
    return {
      defaultList,
    };
  },
  computed: {
    computedList() {
      if (!this.dataList) {
        return this.formatDataList(this.defaultList);
      }
      return this.formatDataList([...this.dataList]);
    },
  },
  methods: {
    mapAgeToCN(val) {
      const config = new Map();
      let newVal = '';
      config.set('ages', '周岁');
      config.set('days', '天');
      config.set('year', '年');
      config.forEach((value, key) => {
        if (val.indexOf(key) > -1) {
          newVal = val.replace(key, value);
        }
        return true;
      });
      return newVal;
    },
    mapMoneyToMillion(val) {
      const cloneVal = val;
      return Math.round(cloneVal / 10000).toString().concat('万元');
    },
    formatDataList(list) {
      const formatList = [];
      list.map((item) => {
        let formatItem = { age: [], des: [] };
        item.age.map((val) => { formatItem.age.push(this.mapAgeToCN(val)); return true; });
        formatItem.insurance = this.mapAgeToCN(item.insurance);
        item.des.map((val) => {
          const newVal = val;
          if (val.value.indexOf('万元') < 0) {
            newVal.value = this.mapMoneyToMillion(val.value);
          }
          formatItem.des.push(newVal);
          return true;
        });
        if (formatItem.des.length > 3) {
          formatItem.listAll = false;
        } else {
          formatItem.listAll = true;
        }
        formatItem = { ...item, ...formatItem };
        formatList.push(formatItem);
        return item;
      });
      return formatList;
    },
    showTotal(index) {
      this.$set(this.computedList[index], 'listAll', !this.computedList[index].listAll);
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="less">
  @import "../animation.less";

  li{
    list-style: none;
  }
  .rotateIn{
    animation: rotateIn 0.3s linear 0s 1;
    animation-fill-mode: both;
  }
  .rotateOut{
    animation: rotateOut 0.3s linear 0s 1;
    animation-fill-mode: both;
  }
  .content-card{
    background: #f5f5f5;
  }
  .product-card{
    margin: 6px 0;
    padding: 10px;
  }
  .content-appearance{
    &-title{
      font-size: 16px;
      color: #333;
      font-weight: normal;
      text-align: left;
      margin: 0;
    }
    &-ul{
      margin: 0;
      text-align: left;
      padding: 8px 0;
    }
    &-li{
      display: inline-block;
      font-size: 12px;
      border: 1px solid #333;
      padding: 2px 4px;
      margin-right: 10px;
    }
  }
  .content-des{
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 12px;
  }
  .content-price{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    &-img{
      width: 80px;
      height: 30px;
    }
    &-tip{
      color: #f75730;
      font-size: 12px;
      .big{
        font-size: 24px;
      }
      .grey{
        color: #999;
      }
    }
  }
  .content-split{
    position: relative;
    width: 100%;
    padding-bottom: 12px;
    .split{
      overflow: hidden;
      margin: 4px 0;
      border-top: 1px solid #d9d9d9;
    }
    .arrow{
      position: absolute;
      right: 0;
      width: 20px;
      height: 20px;
      top: -10px;
      border: 1px solid #d9d9d9;
      background: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &-icon{
        color: #9d9d9d;
      }
    }
  }
  .content-detail{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
</style>
