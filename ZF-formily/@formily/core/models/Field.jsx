import { define, observable } from '@/@formily/reactive'
export class Field {
    constructor(address, props, form) {
        this.props = { ...props };
        this.form = form;
        this.locate(address) // 定位路径
        this.initialize() // 初始化
        this.makeObservable() // 变成响应式
    }
    initialize() {
        this.value = this.props.value;
        // 渲染装饰器和组件
        this.decorator = this.props.decorator
        this.component = this.props.component
    }
    makeObservable() {
        define(this, {
            value: observable
        })
    }
    // 表单 fields 对象的 key 是当前 field 的路径
    locate(address) {
        this.form.fields[address.entire] = this
        this.path = address;
    }

    get value() {
        return this.form.getValuesIn(this.path)
    }
    set value(value) {
        this.form.setValuesIn(this.path, value)
    }

    get decorator() {
        return [this.decoratorType]
    }
    set decorator(value) {
        this.decoratorType = value[0]
    }

    get component() {
        return [this.componentType]
    }
    set component(value) {
        this.componentType = value[0]
    }
}
