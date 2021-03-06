import {createRouter,createWebHashHistory} from "vue-router";
// 1. 定义路由组件.
// 也可以从其他文件导入
import CountDown from './pages/CountDown/index.vue'
import CountDownSetup from './pages/CountDownSetup/index.vue'
import CountDownScript from './pages/CountDownScript/index.vue'
import Setup from './pages/01.composition-setup.vue'
import Ref from './pages/02.composition-ref.vue'
import Hook from './pages/03.composition-hook.vue'
import Watch from './pages/04.composition-watch.vue'
import Computed from './pages/05.composition-computed.vue'
import Reactive from './pages/06.composition-reactive.vue'
import temp from './pages/temp.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', redirect: '/hello' },
  { path: '/count-down', component: CountDown },
  { path: '/count-down-setup', component: CountDownSetup },
  { path: '/count-down-script', component: CountDownScript },
  { path: '/setup', component: Setup },
  { path: '/ref', component: Ref },
  { path: '/hook', component: Hook },
  { path: '/watch', component: Watch },
  { path: '/computed', component: Computed },
  { path: '/reactive', component: Reactive },
  { path: '/temp', component: temp },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router