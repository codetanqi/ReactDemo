import React from 'react';
import { Form, Card, Input, Button, message } from 'antd'

function Edit(props) {
    const handleSubmit = (e) => {
        console.log(e);
    }

    const valueChange = (e) => {
        console.log(e)
    }
    const submitFailure = (e) => {
        console.log(e)
    }
    return (
        <Card title="商品编辑"
        >
            <Form
                onFinish={e => handleSubmit(e)}
                onValuesChange={e => valueChange(e)}
                onFinishFailed={e => submitFailure(e)}
            >
                <Form.Item
                    label="商品名称"
                    name="name"
                    rules={[{ required: true, message: '请输入商品名称!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="商品价格"
                    name="price"
                    rules={[{ required: true, message: '请输入商品价格!' }, {
                    }]}
                >
                    <Input type='number' />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit
