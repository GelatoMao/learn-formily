import { connect, mapProps } from '@/@formily/react'
export const BaseItem = ({ children, label }) => {
    return (
        <div>
            <span>{label}</span>
            {children}
        </div>
    )
}

export const FormItem = connect(
    BaseItem,
    // props 是属性， field 是字段
    // 我们在 mapProps 里面，将 field 的 title 作为 label 的值
    // 这样， label 就和 field 的 title 绑定了，当 field 的 title 发生改变， label 也会跟着改变
    // 这就实现了 label 随着 field 的 title 而自动更新的功能
    // 注意： field 的 title 是一个必填项，所以 field.props.title 一定存在，所以我们不用做非空判断
    // 但是，如果 field.props.title 是一个可选项，那么 field.props.title 可能是 undefined，所以我们需要做非空判断
    mapProps((props, field) => {
        return { label: field.props.title }
    })
)

export default FormItem