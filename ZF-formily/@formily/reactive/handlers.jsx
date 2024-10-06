import { isObservable } from './externals'
import { createObservable } from './internals'
import { RawProxy } from './environment'
export const baseHandlers = {
    get(target, key) {
        const result = target[key] // Reflect.get(target, key) 这种写法性能太差
        // 如果此原生对象已经创建过代理对象了，就直接返回
        const observableResult = RawProxy.get(result)
        if (observableResult) {
            return observableResult
        }
        // 如果这个结果不是一个可观察对象，就返回它对应的可观察对象
        // 懒观察，使用到再检查
        if (!isObservable(result)) {
            return createObservable(target, key, result)
        }
        return result;
    },
    set(target, key, value) {
        const newValue = createObservable(target, key, value)
        target[key] = newValue
        return true;
    }
}