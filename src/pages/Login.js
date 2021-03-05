import React from 'react'
import { Form, Input, Button, message } from 'antd';
import bgImg from '../bgPng/bgImg.jpg'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onFinish = () => {
        this.props.history.push('/admin/dashboard')
    }
    onFinishFailed = () => {

    }

    render() {
        return (
            <div className='wrap' style={{ width: '100%', height: '100%', backgroundColor: "linen" }}>
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
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
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
            </div>
        )
    }

}

export default Login
