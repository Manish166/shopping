import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
// eslint-disable-next-line react/prop-types
export default function Sider({ collapsed = true, toggle = '' }) {
    return (
        <Layout.Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggle}
            trigger={null}
            style={{
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    icon={<ShoppingCartOutlined />}
                    title={
                        <span>
                            <span>Products</span>
                        </span>
                    }
                >
                    <Menu.Item key="2">
                        <Link to="/product">Vegetables</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/product">Vegetables</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Layout.Sider>
    );
}
