import { createObservable } from './internals';
export function observable(target) {
    // 创建一个可观察对象
    return createObservable(null, null, target)
}