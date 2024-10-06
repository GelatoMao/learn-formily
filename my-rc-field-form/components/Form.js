import FieldContext from "./FieldContext"
// 对 Form 组件而言，核心就是将它的子组件渲染出来
export default function Form({children, form, onFinish, onFinishFailed}) {
  form.setCallbacks (
    {
      onFinish,
      onFinishFailed
    }
  )

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      form.submit()
      // 执行 form.setFieldValue 或者 form.getFieldValue 都可以
      // 1. 收集所有子元素的 value
      // 2. 交给 FormStore 去更新 state
      // 3. 局部更新 Field 组件
      // 4. 让 Field 组件重新 render
    }}>
      <FieldContext.Provider value={form}>
        {children}
      </FieldContext.Provider>  
    </form>
  )
}