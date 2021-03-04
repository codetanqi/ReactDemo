import React from 'react'
import { Layout, Menu, Breadcrumb, } from 'antd';
import logo from './logo.png';
import './Frame.css';
import { adminRoutes } from '../../routes';
import { withRouter } from 'react-router-dom';//当在component里使用路由时，需要将该组件包裹在withRouter中

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const route = adminRoutes.filter(route => route.isShow)

function Frame(props) {
    return (
        <Layout>
            <Header className="header" style={{ backgroundColor: "rgb(30, 169, 162)" }}>
                <div className="logo" >
                    <img src={logo} alt='logo' style={{ width: '4em' }} />
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {route.map(route => {
                            return <Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>
                                {route.title}
                            </Menu.Item>
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '16px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default withRouter(Frame)
