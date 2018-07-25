<template>
  <div class="index-page">
    <div class="index-page-carousel">
      <scroll-img
        :imgList="imgList"
      />
    </div>
    <div class="index-page-filter">
      <filter-util />
    </div>
  </div>
</template>

<script>
import ScrollImg from '../components/scrollImg';
import FilterUtil from '../components/filterUtil';

export default {
  name: 'index',
  components: {
    FilterUtil,
    ScrollImg,
  },
  data() {
    return {
      imgList: [{
        url: '#',
        img: 'https://m.xyz.cn/p/picture/pic59686type28.jpg',
      }, {
        url: '#',
        img: 'https://m.xyz.cn/p/picture/pic59686type28.jpg',
      }],
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="less">

</style>
