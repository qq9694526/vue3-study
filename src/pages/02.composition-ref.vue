<template>
  <div>{{ introduce }}</div>
</template>
<script>
import { ref } from "vue";
// 这一节我们模拟一个获取数据并赋值的场景
// 当我们用往常的方式对变量进行赋值（下面注释的2行代码）后，会发现视图并没有更新
// 2x版本中，在data选项中的变量，vue自动帮我们实现了响应性
// vue3.0提供了reactive和ref等一系列api,使我们显式的创建使用响应性
export default {
  setup() {
    // let introduce = "大家好，我是" // 当我们对它进行异步赋值的时候，该值并不会反应到模板上。因为变量是非响应式的。
    let introduce = ref("大家好，我是"); // ref函数使任何响应式变量在任何地方起作用。ref函数 接受一个内部值并返回一个响应式且可变的 ref 对象
    setTimeout(() => {
      // introduce+= '胖大海'
      introduce.value += "胖大海"; // 通过.value对其赋值
    }, 1000);
    return {
      introduce,
    };
  },
};
</script>
