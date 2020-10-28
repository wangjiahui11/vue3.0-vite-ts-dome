<template>
  <section>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="swiperList.length">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item.url" alt="" srcset="" />
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script lang="ts">
import { getsliderList } from '/@/api/index.ts';
import { useStore} from "vuex";
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue';
import * as TYPES from "/@/store/actions-types.ts";
import { IGlobalState } from '../../../store/index';
export default defineComponent({
  async setup(props, context) {
    let store = useStore<IGlobalState>()
    let swiperList = computed(() => {
      return store.state.home.sliders
    })
    //------- 切换页面做缓存作用------------
    if (swiperList.value.length === 0) {
      await store.dispatch(`home/${TYPES.GET_SLIDER}`)
    }
    return {
      swiperList
    }
  },
})
</script>
<style lang='scss'>
.my-swipe {
  .van-swipe-item {
    color: #fff;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
