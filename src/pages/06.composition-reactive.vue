<template>
  <div>
    state.foo:{{ state.foo }}<button @click="state.foo++">++</button>
    <br>
    state.obj.a:{{ state.obj.a }}<button @click="state.obj.a++">++</button>
    <br>
    state.obj.c:{{ state.obj.c }}<button @click="state.obj.c=3">++</button>
    <br>
    bbb.coun:{{ bbb.count }}<button @click="ccc++">++</button>
    <br>
    aaa:{{aaa}}<button @click="aaa++">++</button>
    <br>
    {{a}} <button @click="a++">a++</button>
  </div>
</template>
<script>
import { ref, reactive, toRef,toRefs } from "vue";
// 这一节我们模拟一个获取数据并赋值的场景
// 当我们用往常的方式对变量进行赋值（下面注释的2行代码）后，会发现视图并没有更新
// vue3.0通过ref来解决这个问题
export default {
  setup(props, context) {
  
    const state = reactive({
      foo: 1,
      bar: 2,
      obj:{
        a:1,
        b:2
      }
    });

    console.log("====refBase====")
    const refBase = ref(1)
    console.log(refBase); // RefImpl {_shallow: false, dep: undefined, __v_isRef: true, _rawValue: 1, _value: 1}
    console.log(refBase.value); // 1


    console.log("====refObj====")
    const refObj = ref({
      count:'1',
    })
    console.log(refObj)
    console.log(refObj.value) // Proxy {count: '1'}
    console.log("====区别====")
    const obj = {
      count:'1'
    }
    console.log(ref(obj).value === reactive(obj)) // true
    let aaa = 1
    const bbb = {
      count:1
    }
    const ccc = toRefs(bbb,'count')
    setTimeout(()=>{
      aaa=2
    },1000)
    return {
      aaa,
      bbb,
      ccc,
      refBase,
      state,
      ...toRefs(refObj)
    };
  },
  mounted() {
    // this.count = 2;
    // this.obj.count = 2;
    // this.state.obj.a = '1'
    this.refBase++
    console.log(this.aaa)
    this.bbb.count = 2
    this.a='1'
    this.aaa=3
    setTimeout(()=>{
      this.aaa=4
    },1000)
    this.setValue()
    // this.objReat.count = 3
  },
  methods:{
    setValue(){
      this.aaa=5
    }
  }
};
</script>
