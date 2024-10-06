import { connect, mapProps } from '@/@formily/react'
import { Input as AntdInput } from 'antd'


// mapProps 和 connect 相当于做一个桥接
// 通过 connect 可以做一个属性增强，将 formily 中的一些属性，一些值传到组件中进行展示
export const Input = connect(
    AntdInput,
    mapProps((props) => {
        return { ...props }
    })
)
export default Input