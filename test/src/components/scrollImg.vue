<template>
  <div class="scroll-img">
    <swiper
      :list="mergedList"
      auto
      height="112px"
      :show-desc-mask="false">
    </swiper>
  </div>
</template>
<script>
import { Swiper } from 'vux';

export default {
  name: 'scroll-img',
  components: {
    Swiper,
  },
  data() {
    return {
      defaultList: [{
        url: '#',
        img: '../static/img/logo.png',
      }, {
        url: '#',
        img: '../static/img/logo.png',
      }],
    };
  },
  props: {
    imgList: {
      type: Array,
    },
  },
  computed: {
    mergedList() {
      return this.imgList || this.defaultList;
    },
  },
  methods: {},
};
</script>

<style lang="less">
  .scroll-img{
    z-index: 999;
    background: #fff;
    div{
      z-index: 999;
    }
  }
  .vux-slider{
    z-index: 999;
  }
</style>
