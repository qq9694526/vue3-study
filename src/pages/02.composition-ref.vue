<template>
  <div>
    大家好，我是{{ defaultName }}。
    <br />
    我的特长有
    <p v-for="(item, index) in myTags" :key="index">{{ item }}</p>
  </div>
</template>
<script>
import { ref } from 'vue'
// 这一节我们模拟一个获取数据并赋值的场景
// 当我们用往常的方式对变量进行赋值（下面注释的2行代码）后，会发现视图并没有更新
// vue3.0通过ref来解决这个问题
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const defaultName = props.user || "码农胖大海";
    // let myTags = [] // 当我们对它进行异步赋值的时候，该值并不会反应到模板上。因为 myTags 变量是非响应式的。
    let myTags = ref([]); // ref函数使任何响应式变量在任何地方起作用。ref函数 接受一个内部值并返回一个响应式且可变的 ref 对象
    setTimeout(() => {
      // myTags=["高", "富", "帅"]
      myTags.value = ["高", "富", "帅"]; // 通过.value对其赋值
    }, 1000);
    return {
      defaultName,
      myTags
    };
  },
};
</script>
