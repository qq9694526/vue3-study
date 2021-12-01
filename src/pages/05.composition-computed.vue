<template>
  <div>
    大家好，我是{{ defaultName }}。
    <br />
    我的特长有{{tagNum}}个：
    <p v-for="(item, index) in myTags" :key="index">{{ item }}</p>
  </div>
</template>
<script>
import { onMounted, ref, computed } from "vue";
// setup中的computed函数，等效选项式API中的computed，计算属性

export default {
  setup(props, context) {
    let defaultName = ref("码农胖大海");
    let myTags = ref([]);
    onMounted(() => {
      console.log("mounted!");
      // 更新数据以触发computed
      myTags.value = ["高", "富", "帅"]; 
    });
    // 显式的定义一个计算属性
    const tagNum =  computed(()=>{
      return myTags.value.length
    })
    return {
      defaultName,
      myTags,
      tagNum,
    };
  },
};
</script>
