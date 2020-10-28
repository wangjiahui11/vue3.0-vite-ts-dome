<template>
  <section class="card-list">
    <van-card
      v-for="(item, index) in lessonList"
      :key="index"
      :title="item.title"
      :price="item.price"
      :thumb="item.url"
    >
      <template #tags>
        <van-tag plain type="danger">{{ formateCategory(item.category)}}</van-tag>
      </template>
    </van-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue';
import { ILessons } from '../../../typings/home';
export default defineComponent({
  props: {
    lessonList: {
      type: [] as PropType<ILessons>
    }
  },
  setup(props, context) {
    // 过滤器
    function formateCategory(category:number):string|null {
        switch (category) {
        case 0:
          return '全部课程'
        case 1:
          return 'VUE课程'
          break;
        case 2:
          return 'REACT课程'
        case 3:
          return 'NODE课程'
        default:
          return ''
          break;
      }
    }
    return {
      formateCategory
    }
  },
})
</script>
<style lang="scss">
.card-list {
  height: calc(100vh - 350px);
  overflow-y: auto;
  .van-image__img{
    object-fit: contain !important;
  }
}
</style>
