import React from 'react';
import { Button, Card, message, Popconfirm, Table } from 'antd'

const dataSource = [
    {
        id: 1,
        name: '手机',
        price: 3699
    },
    {
        id: 2,
        name: '电脑',
        price: 5699
    }, {
        id: 3,
        name: '鼠标',
        price: 69
    }, {
        id: 4,
        name: '键盘',
        price: 99
    }
];
function List() {
    const column = [
        {
            title: '序号',
            key: 'id',
            width: 80,
            align: 'center',
            render: (text, record, index) => index + 1
        }, {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '价格',
            dataIndex: 'price'
        },
        {
            title: '操作',
            render: (text, record, index) => {
                return <div>
                    <Button size='small' type='primary' style={{ margin: '0 0.5rem 0 0.5rem' }} >修改</Button>
                    <Popconfirm
                        title="确认要操作吗"
                        onCancel={() => { message.info('取消成功'); }}
                        onConfirm={() => { message.success('删除成功'); }}
                        cancelText="取消"
                        okText="确定"
                    >
                        <Button size='small' danger style={{ margin: '0 0.5rem 0 0.5rem' }}>删除</Button></Popconfirm>
                </div>
            }
        }
    ]


    return (
        <Card title="商品列表" extra={<Button type="primary" size="small">新增</Button>}>
            <Table columns={column} bordered dataSource={dataSource} ></Table>
        </Card>
    )
}

export default List
