import React, { useState } from 'react';
import './index.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const { Header, Content } = Layout;
import SideBar from '../sideBar';
import HomePage from '../../pages/homePage';
import ProductPage from '../../pages/productPage';

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <SideBar collapsed={collapsed}></SideBar>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    >
                        <div
                            onClick={toggle}
                            style={{
                                height: '20px',
                                width: '20px',
                                backgroundColor: 'red',
                            }}
                        ></div>
                    </Header>
                    <Content style={{ overflow: 'auto', margin: 30 }}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route
                                exact
                                path="/product"
                                component={ProductPage}
                            />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
