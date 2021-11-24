<template>
  <div>
    大家好，我是{{defaultName}}。
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props,context) {
    // 一个可以实际使用它的地方。在 Vue 组件中，我们将此位置称为 setup
    // setup 选项在组件创建之前执行。 在 setup 中你应该避免使用 this，因为它不会找到组件实例。
    // setup 选项是一个接收 props 和 context 的函数
    console.log(props); // { user: '' }
    const defaultName = props.user||'码农胖大海'
    return {
      defaultName
    }; // 这里返回的任何内容都可以用于组件的其余部分
  },
};
</script>
