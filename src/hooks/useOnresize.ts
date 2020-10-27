import { ref, onMounted, onUnmounted } from 'vue'
// hooks 操作
function useOnresize() {
  let initWidth = document.body.clientWidth
  let initHeight = document.body.clientHeight
  const x = ref(initWidth)
  const y = ref(initHeight)
  const update = () => {
    x.value = document.body.clientWidth
    y.value = document.body.clientHeight
  }
  onMounted(() => {
    window.addEventListener('resize', update)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })
  return { x, y }
}

export default useOnresize;
