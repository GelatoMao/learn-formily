import { observable } from '@formily/reactive'
import { observer } from '@formily/reactive-react'
const counter = observable({
    number: 1
});

// 将一个组件传给 observer ，会返回一个新的组件，将这个新的组件变成响应式，变成一个观察者
// 这个组件中使用到了 number，会将这个组件与 number 进行一个绑定，进行依赖收集
// 当 number 发生改变的时候，这个组件会重新渲染
const Counter = observer(() => {
    return (
        <div>
            <p>{counter.number}</p>
            <button onClick={() => counter.number++}>+</button>
        </div>
    )
});
export default Counter;
