import React from 'react'
import { useForm } from '../hooks'
import { ReactiveField } from './ReactiveField'
import { FieldContext } from '../shared'
export const Field = (props) => {
  const form = useForm() // 获取表单领域模型
  const field = form.createField(props) // 创建字段领域模型
  return (
    <FieldContext.Provider value={field}>
      {/* 响应式字段 */}
      <ReactiveField field={field}>{props.children}</ReactiveField>
    </FieldContext.Provider>
  )
}