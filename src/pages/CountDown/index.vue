<template>
  <count-down
    ref="countdown"
    :initialValue="value"
    :auto-play="false"
    @turnOver="onTurnOver"
  ></count-down>
  <div class="handler">
    <button @click="$refs.countdown.start()">开始</button>
    <button @click="$refs.countdown.stop()">暂停</button>
    <button @click="$refs.countdown.reset()">重置</button>
  </div>
</template>
<script>
import CountDown from "./CountDown.vue";
export default {
  components: {
    CountDown,
  },
  data() {
    return {
      value: 5,
    };
  },
  methods: {
    onTurnOver() {
      console.log("倒计时结束！");
    },
  },
};
</script>
