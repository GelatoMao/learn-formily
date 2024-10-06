import React, {Component} from 'react'
import FieldContext from './FieldContext'

export default class Field extends Component {

  static contextType = FieldContext;

  componentDidMount(){
    this.unregister = this.context.registerFieldEntities(this)
  }

  componentWillUnmount(){
    this.unregister()
  }

  onStoreChange = () => {
    this.forceUpdate()
  }


  getControlled = ()=>{
    const {getFieldValue, setFieldValue} = this.context
    const {name} = this.props
    return {
      value: getFieldValue(name),
      onChange: (e)=>{
        const newValue = e.target.value;
        setFieldValue({[name]: newValue})
        console.log('newValue', newValue);
      }
    }
  }


  render() {
    const {children} = this.props
    // 将 children 转化成受控组件，绑定上 value 和 onChange
    const returnChildNode = React.cloneElement(children, this.getControlled())
    return returnChildNode
  }
}


/**
 * 要使获取的children 为受控组件
 */