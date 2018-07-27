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
      <content-card :dataList="filterDataList"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import $ from 'jquery';
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
      isShowIcon: false,
    };
  },
  computed: {
    ...mapState('apollo', {
      dataList: state => state.index.data,
      filter: state => state.filter,
    }),
    ...mapGetters('apollo', ['filterDataList']),
  },
  methods: {
    ...mapActions('apollo', ['getDataListAction', 'doFilter']),
    handleTouchScroll() {
      if ($(document).scrollTop > 0) {
      }
    },
  },
  created() {
    this.getDataListAction();
  },
  mounted() {
    $(document).bind('scroll', this.handleTouchScroll);
  },
};
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>
