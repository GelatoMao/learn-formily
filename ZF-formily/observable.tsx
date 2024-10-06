import { observable, autorun } from './@formily/reactive'
// observable 是用来创建不同响应式行为的可观察对象
const obs = observable({
  name: '1',
})

// reaction 可订阅对象的订阅者
// 当 tracker 函数执行的时候，如果函数内部有对 observable 对象的某个属性进行读操作，则会进行依赖收集
// 那么当前的 reaction 就会与属性进行一个绑定，当属性发生了写操作，就会触发 tracker 重新执行
// 从订阅到派发订阅，是一个封闭的循环状态机。每当调用 tracker 的时候，都会重新收集依赖，依赖发生改变，又会重新调用 tracker

// 跟踪器
const tracker = () => {
  console.log(obs.name);
}

// autorun 是一个函数，它会在 observable 对象的属性发生变化的时候执行 tracker 函数
// autorun 可以创建一个自动执行的响应器
// 可以接收一个 tracker 函数，如果函数内有消费 observable 数据，数据发生变化的时候 tracker 会重新执行
autorun(tracker)
obs.name = '2';
/**
1
2
 */
