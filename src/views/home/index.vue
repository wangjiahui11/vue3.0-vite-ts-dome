<template>
  <homeHeader :category="category" @setCatogory="setCatogory"></homeHeader>
  <section>
    <!--异步组件用suspens一起使用 注意:实验性属性未来可能秀嘎 -->
    <Suspense>
      <template #default>
        <homeSwiper></homeSwiper>
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
    <homeList :lessonList='lessonList' ></homeList>
  </section>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import homeHeader from '/@/views/home/component/homeHeader.vue';
import homeSwiper from './component/homeSwiper.vue';
import homeList from './component/homeList.vue';
import { defineComponent, onMounted, reactive, ref, toRefs, computed } from 'vue';
import { createStore, Store } from 'vuex';
import { CATEGORY_TYPES } from '../../typings/home';
import * as TYPES from "/@/store/actions-types.ts";
import { IGlobalState } from '../../store/index';

function useCategory(store: Store<IGlobalState>) {
  let category = computed(() => {
    return store.state.home.currentCategory
  })

  let setCatogory = (category: CATEGORY_TYPES) => {
    store.commit(`home/${TYPES.SET_CATEGORY}`, category) // 触发事件
    store.dispatch(`home/${TYPES.GET_LESSONS}`)
  }

  return {
    category,
    setCatogory
  }
}

function useLessons(store: Store<IGlobalState>) {
  let lessonList = computed(() => {
    return store.state.home.lessons.list
  })
  onMounted(() => {
    if (lessonList.value.length===0) {
       store.dispatch(`home/${TYPES.GET_LESSONS}`)
    }
  });
  return {
    lessonList
  }
}
export default defineComponent({
  components: {
    homeHeader,
    homeList,
    homeSwiper
  },
  setup(props, content) {
    // 获取设置值
    let store = useStore<IGlobalState>()
    let { category, setCatogory } = useCategory(store)
    let { lessonList } = useLessons(store)
    //------- 生命周期-----------
    // onMounted(() => { });
    //  返回值数据
    return {
      category,
      setCatogory,
      lessonList
    };
  },
});
</script>
