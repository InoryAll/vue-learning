<template>
  <div class="index-page">
    <div class="index-page-carousel">
      <ScrollImg
        :imgList="imgList"
      />
    </div>
  </div>
</template>

<script>
import ScrollImg from '../components/scrollImg';

export default {
  name: 'index',
  components: {
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
