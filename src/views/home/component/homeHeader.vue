<template>
  <div  class="header">
    <div class='logo-icon'></div>
    <van-dropdown-menu class="drop-select">
      <van-dropdown-item :modelValue="category" :options="option" @change="changeTab" />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, PropType } from 'vue';
import { CATEGORY_TYPES } from '../../../typings/home';
export default defineComponent({
  props: {
    category: Number as PropType<CATEGORY_TYPES>
  },
  emits: ['setCatogory'],
  setup(props, context) {
    onMounted(() => { })
    let state = reactive({
      option: [
        { text: '全部', value: CATEGORY_TYPES.ALL },
        { text: 'VUE页面', value: CATEGORY_TYPES.VUE },
        { text: 'REACT页面', value: CATEGORY_TYPES.REACT },
        { text: 'NODE页面', value: CATEGORY_TYPES.NODE },
      ],
    })
    let changeTab = (val: CATEGORY_TYPES) => {
      context.emit('setCatogory', val)
    }
    return {
      ...toRefs(state),
      changeTab
    }
  },
})
</script>

<style lang="scss">
.header{
  width: 100%;
  height: 100px;
  background-color: #24292e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-icon{
    width: 180px;
    height: 60px;
    border-radius: 5px;
    background:  url('/img/vue3.0.jpg') no-repeat 0px 0px / 100% 100%;
  }
  .drop-select{
    margin-right: 30px;
    .van-dropdown-menu__item{
      background-color: #24292e;
      .van-dropdown-menu__title{
        color: #ffff;
      }
    }
  }

}
</style>
