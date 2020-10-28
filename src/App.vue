<template>
<div class="main">
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/" icon="home-o">home</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="search" @click='toMine'> mine </van-tabbar-item>
    <van-tabbar-item to="/profile" icon="friends-o">profile </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';
export default defineComponent({
  setup(props, context) {
    let active = ref(0)
    const toMine = () => {
      console.log('toMine');
    }
    return {
      active,
      toMine
    }
  }
})
</script>

<style>
.main {
  height: 100vh;
  overflow: hidden;
}
</style>
