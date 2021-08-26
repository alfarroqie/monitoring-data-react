import React, {useState} from 'react';
import './App.css';
import { Layout, Menu, } from 'antd';
import {MonitorOutlined, DatabaseFilled} from '@ant-design/icons';
import { Switch, Route, Link} from 'react-router-dom';

import QualityMonitoring from './component/QualityMonitoring'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  const [navigateKey, setNavigateKey] = useState("")

  return(
  <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout style={{minHeight: '100vh'}}>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            selectedKeys = {navigateKey}
            style={{ height: '100%', borderRight: 0 }}
            onClick={(e) => setNavigateKey(e.key)}
            theme="dark"
          >
            <SubMenu key="sidenav1" icon={<MonitorOutlined />} title="Monitoring">
              <Menu.Item key="dataQuality" icon={<DatabaseFilled />}><Link to='/dataQuality'/>Data Quality</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/dataQuality" component={QualityMonitoring} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App;