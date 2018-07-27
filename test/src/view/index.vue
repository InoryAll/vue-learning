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
    <div class="index-page-content">
      <content-card />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ScrollImg from '../components/scrollImg';
import FilterUtil from '../components/filterUtil';
import ContentCard from './contentCard';

export default {
  name: 'index',
  components: {
    FilterUtil,
    ScrollImg,
    ContentCard,
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
    ...mapState({
      data: state => state.data,
      filter: state => state.filter,
    }),
  },
  methods: {
    ...mapActions(['getDataListAction', 'doFilter']),
  },
  mounted() {
    this.getDataListAction();
  },
};
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>
