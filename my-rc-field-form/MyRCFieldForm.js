import React, {Component, useEffect} from 'react';

import Form, {Field} from './components'
import Input from './components/Input'
import { func } from 'prop-types';

const nameRules = {required: true, message: '请输入姓名'};
const passwordRules = {required: true, message: '请输入密码'};

export default function MyRCFieldForm(props) {
  const [form] = Form.useForm()

  const onFinish = (val) => {
    console.log('onFinish', val);
  }

  // 表单校验失败执行
  const onFinishFailed = (errorInfo) => {
    console.log('onFinishFailed', errorInfo);
  }

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Field name="name" label="姓名" rules={[nameRules]}>
        <Input />
      </Field>
      <Field name="password" label="密码" rules={[passwordRules]}>
        <Input type="password" />
      </Field>
      <button type="primary" htmlType="submit">
        Submit
      </button>
    </Form>
  );
}