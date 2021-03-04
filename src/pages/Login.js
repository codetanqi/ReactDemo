import React from 'react'
import { Form, Input, Button, message } from 'antd';
import bgImg from '../components/Frame/logo.png'

function Login(props) {

    const onFinish = (props) => {
    }
    const onFinishFailed = () => {

    }
    return (
        <div style={{
            width: '400px',
            height: '300px',
            padding: '1em',
            textAlign: 'center',
            boxShadow: '1px 2px 3px 2px #ddd',
            borderRadius: '5px',
            marginLeft: '-200px',
            marginTop: '-150px',
            position: 'absolute',
            top: '50%',
            left: '50%',
        }}>
            <h1>登录</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: '请输入账户名!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
