import { baseHandlers } from './handlers'
import { isNormalType } from './checkers';
import { ProxyRaw, RawProxy } from './environment';
export const createObservable = (target, key, value) => {
    // 如果 value 不是对象，直接返回
    if (typeof value !== 'object') return value;
    // 如果能找到对应的原生对象，说明此原生对象已经创建过代理对象了
    const raw = ProxyRaw.get(value)
    if (raw) {
        return value // 说明它本身就是一个代理对象，可以直接返回
    }
    // 如果 value 是普通对象的话就可以创建响应式对象
    if (isNormalType(value)) return createNormalProxy(value)
    return value
}
const createNormalProxy = (target) => {
    const proxy = new Proxy(target, baseHandlers)
    // 做一个 proxy 和 target 的双向映射
    ProxyRaw.set(proxy, target)
    RawProxy.set(target, proxy)
    return proxy
}