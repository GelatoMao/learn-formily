import { toJS } from '@/@formily/reactive'

// target 是 form 表单的实例
export const batchSubmit = (target, onSubmit) => {
  // target.values 是一个代理类型，需要转化成原生类型
    onSubmit(toJS(target.values))
}