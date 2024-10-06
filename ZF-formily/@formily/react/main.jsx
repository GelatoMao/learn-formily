import React from "react";
import ReactDOM from "react-dom/client";
import { createForm } from "@/@formily/core";
import { FormProvider, Field } from "@/@formily/react";
import { FormItem, Input } from "@/@formily/antd";
const form = createForm();
const App = () => {
    return (
        <FormProvider form={form}>
            <Field
                name="username"
                title="用户名"
                value="jiagou"
                decorator={[FormItem]} // 第一个是组件，第二个是组件的类型
                component={[Input]}
            />
            <button onClick={() => {
                form.submit(console.log)
            }}>提交</button>
        </FormProvider>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);