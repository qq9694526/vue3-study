<template>
  <div>
    sum：{{sum}}
    obj.c:{{obj.c}}<button @click="obj.c=3">obj.c</button>
  </div>
</template>
<script>
export default{
  data(){
    return {
      val1:2,
      val2:3,
      obj:{}
    }
  },
  computed:{
    sum(){
      return this.val1 + this.val2
    }
  },
  created(){
    console.log(this.sum) // 5
    this.val1 = 3
    console.log(this.sum) // 6
  }
}
</script>