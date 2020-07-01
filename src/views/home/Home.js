/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Home.less';
import Organization from '../organization/Organization';
import Conversation from '../conversation/Conversation';

const { Header, Sider, Content } = Layout;

class Home extends React.Component {
    conversationHandler(e) {
        console.log('conversationHandler');
        this.props.history.push('/conversation');
    }

    organizationHandler() {
        console.log('organizationHandler');
        this.props.history.push('/organization');
    }

    wsHandler() {
        
    }
    
    render() {
        return (
            <Layout>

                <Sider style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }} width={75}>
                    <Menu mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1" icon={<UserOutlined />} onClick={this.conversationHandler.bind(this)}>
                        </Menu.Item>


                        <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={this.organizationHandler.bind(this)}>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />} onClick={this.wsHandler.bind(this)}>
                            
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 75, height: '100vh' }}>
                    <Content style={{ overflow: 'initial', height: '100vh' }}>
                        <Switch>
                            <Route exact path="/conversation" component={Conversation} />
                            <Route path="/organization" component={Organization} />
                            <Redirect to="/conversation" />
                        </Switch>
                        
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Home);