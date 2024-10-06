import {useRef} from 'react'

// 定义状态管理库
class FormStore {
  constructor(){
    this.store = {}; // 状态值 name: value
    this.fieldEntities = []
    this.callbacks = {}
  }

  setCallbacks = (callbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...callbacks,
    }
  }

  // 注册实例 forceUpdate
  // 注册与取消注册，订阅与取消订阅 都是要成对出现
  registerFieldEntities = (entity) => {
    this.fieldEntities.push(entity)
    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity)
      delete this.store[entity.props.name]
    }
  }

  // get 
  getFieldsValue = () => {
    return {
      ...this.store
    }
  }

  getFieldValue = (name) => {
    return this.store[name]
  }

  // set
  // password: 123
  setFieldValue = (newStore) => {
    // 1. update store
    this.store = {
      ...this.store,
      ...newStore
    }
    // 2. update Field
    // 局部更新
    this.fieldEntities.forEach(entity => {
      Object.keys(newStore).forEach(k=> {
        if(k === entity.props.name){
          entity.onStoreChange()
        }
      })
    })

  }

  validate = () => {
    let err = []
    // todo 校验
    return err
  }

  submit = () => {
    let err = this.validate()
    const {onFinish, onFinishFailed} = this.callbacks

    if (err.length  === 0) {
      onFinish(this.getFieldsValue())
    } else {
      onFinishFailed(err, this.getFieldsValue())
    }

  }


  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      registerFieldEntities: this.registerFieldEntities,
      submit: this.submit,
      setCallbacks: this.setCallbacks
    }
  }
}





export default function useForm(){
  // 存值，在组件卸载之前指向的都是同一个值
  const formRef = useRef()
  if(!formRef.current) {
    const formStore = new FormStore()
    formRef.current = formStore.getForm()
  }
  return [formRef.current]
}