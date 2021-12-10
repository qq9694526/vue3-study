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
<script>
export default {
  props: {
    defaultValue: {
      type: Number,
      default: 10,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentTime: 0,
      timer: null,
    };
  },
  computed: {
    process() {
      const totalTime = this.defaultValue;
      const currentPercent = parseFloat(this.currentTime / totalTime).toFixed(
        2
      );
      const circleLength = Math.floor(2 * Math.PI * 50);
      return currentPercent * circleLength;
    },
  },
  created() {
    this.currentTime = this.defaultValue;
    if (this.autoPlay) {
      this.start();
    }
  },
  methods: {
    start() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.currentTime <= 0) {
          clearInterval(this.timer);
          this.$emit("turnOver");
          return;
        }
        this.currentTime -= 1;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.currentTime = this.defaultValue;
      this.start();
    },
  },
};
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
