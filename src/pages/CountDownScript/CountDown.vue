<template>
  <div class="c-count-wrap">
    <svg xmlns="http://www.w3.org/200/svg" height="110" width="110">
      <circle
        cx="55"
        cy="55"
        r="50"
        fill="none"
        stroke="#ccc"
        stroke-width="5"
        stroke-linecap="round"
      />
      <circle
        class="c-count-process"
        cx="55"
        cy="55"
        r="50"
        fill="none"
        stroke="#ff9800"
        stroke-width="5"
        :stroke-dasharray="`${process},10000`"
      />
    </svg>
    <span class="c-count-num">{{ currentTime }}</span>
  </div>
</template>

<script setup>
// 这里定义的所有变量都可以直接在模板使用，包括improt导入的组件或方法。（官方：顶层的绑定会被暴露给模板）
// 但是。当需要通过模板 ref 或者 $parent访问该组件实例时，需要使用defineExpose明确要暴露出去的属性

import { ref, computed } from 'vue'

// 使用defineProps声明props
const props = defineProps({
  initialValue: {
    type: Number,
    default: 10,
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
});

// 使用defineEmits声明emits
const emit = defineEmits(["turnOver"]);

let currentTime = ref(props.initialValue);
let timer = null; // 定时器

const start = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (currentTime.value <= 0) {
      clearInterval(timer);
      emit("turnOver");
      return;
    }
    currentTime.value -= 1;
  }, 1000);
};
const stop = () => {
  clearInterval(timer);
};
const reset = () => {
  stop()
  currentTime.value = props.initialValue;
};
// 环形进度条
const process = computed(() => {
  const totalTime = props.initialValue;
  const currentPercent = parseFloat(currentTime.value / totalTime).toFixed(2);
  const circleLength = Math.floor(2 * Math.PI * 50);
  return currentPercent * circleLength;
});

if (props.autoPlay) {
  start();
}

// 使用defineExpose明确要暴露出去的属性
defineExpose({
  start,
  stop,
  reset,
});
</script>

<style>
.c-count-wrap {
  display: inline-block;
  position: relative;
  font-size: 0;
}
.c-count-wrap .c-count-num {
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
  font-size: 14px;
  white-space: nowrap;
}
.c-count-wrap .c-count-process {
  transform-origin: 55px 55px;
  transform: rotate(-90deg);
}
</style>
