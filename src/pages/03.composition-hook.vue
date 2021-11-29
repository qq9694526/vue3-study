<template>
  <div>
    大家好，我是{{ defaultName }}。
    <br />
    我的特长有
    <p v-for="(item, index) in myTags" :key="index">{{ item }}</p>
  </div>
</template>
<script>
import { onMounted, onUpdated, ref } from 'vue'
// setup中的生命周期函数

export default {
  setup(props, context) {
    let defaultName = ref("码农胖大海");
    // 和Vue的生命周期是一致的，除了create，因为setup本身就是这个阶段。
    onMounted(() => {
      console.log('mounted!')
      // 更新数据以触发update
      defaultName.value = "mounted后的大海"
    })
    onUpdated(() => {
      console.log('updated!')
    })
    // 更多钩子参看官网 https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
    return {
      defaultName,
    };
  },
};
</script>
