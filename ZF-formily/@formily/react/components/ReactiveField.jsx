import React from 'react';
import { observer } from '@/@formily/reactive-react'
const ReactiveInternal = (props) => {
    const field = props.field

    // component 是 decorator 的孩子
    const renderDecorator = (children) => {
        return React.createElement(
            field.decoratorType,
            {},
            children
        )
    }
    const renderComponent = () => {
        const value = field.value;
        const onChange = (...args) => {
            field.onInput(...args)
        }
        return React.createElement(
            field.componentType,
            {
                value,
                onChange
            }
        )
    }
    return renderDecorator(renderComponent())
}

// 外面是普通组件，用 observer 进行包裹，变成响应式组件
export const ReactiveField = observer(ReactiveInternal)