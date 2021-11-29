<template>
  <div>
    大家好，我是{{ defaultName }}。
    <br />
  </div>
</template>
<script>
import { onMounted, ref, watch } from "vue";
// setup中的watch函数，等效选项式API中的watch

export default {
  setup(props, context) {
    let defaultName = ref("码农胖大海");
    onMounted(() => {
      console.log("mounted!");
      // 更新数据以触发watch
      defaultName.value = "mounted后的大海";
    });
    watch(defaultName, (newValue, oldValue) => {
      console.log("The defaultName is: " + defaultName.value); // The defaultName is: mounted后的大海
      console.log("The defaultName newValue is: " + newValue); // The defaultName newValue is: mounted后的大海
      console.log("The defaultName oldValue is: " + oldValue); // The defaultName oldValue is: 码农胖大海
    });
    return {
      defaultName,
    };
  },
};
</script>
