import _Form from './Form'
import Field from './Field'
import useForm from './UseForm'

const Form = _Form

// 为了可以在代码中使用 Form.Field 的用法
Form.Field = Field
Form.useForm = useForm

// 兼容不同的导入写法
export {Field, useForm}
export default Form




