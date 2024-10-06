import { define, observable } from '@formily/reactive'
import { Field } from './Field'
import { FormPath } from '@formily/core'
import { batchSubmit } from '../shared/internals'
export class Form {
    values={} // 表单值
    fields = {} // 表单字段
    constructor(props) {
        this.initialize(props) // 初始化属性
        this.makeObservable() // 将 values 和 fields 变成响应式
        this.makeValues() // 设置初始值
    }
    initialize(props) {
        this.props = { ...props }
    }
    makeObservable() {
        define(this, {
            values: observable,
            fields: observable.shallow
        })
    }
    makeValues() {
        this.values = this.props.values
    }
    createField(props) {
        const address = FormPath.parse().concat(props.name)
        new Field(address, props, this) // 
        return this.fields[address.entire]
    }

    setValuesIn = (pattern, value) => {
        this.values[pattern.entire] = value;
    }
    getValuesIn = (pattern) => {
        return this.values[pattern.entire];
    }
    submit = (onSubmit) => {
        return batchSubmit(this, onSubmit)
    }
      
}