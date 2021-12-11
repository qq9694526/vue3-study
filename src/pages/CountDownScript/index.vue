<template>
  <count-down
    ref="countdown"
    :initialValue="value"
    :auto-play="true"
    @turnOver="onTurnOver"
  ></count-down>
  <div class="handler">
    <button @click="$refs.countdown.start()">开始</button>
    <button @click="$refs.countdown.stop()">暂停</button>
    <button @click="$refs.countdown.reset()">重置</button>
  </div>
</template>
<script setup>
// 这里定义的所有变量都可以直接在模板使用，包括组件
import CountDown from "./CountDown.vue";
const value = 5;
const onTurnOver = () => {
  console.log("倒计时结束！");
};
</script>
