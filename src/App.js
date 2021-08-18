import React, {useState} from 'react';
import './App.css';
import { Layout, Menu, } from 'antd';
import { UserOutlined, MonitorOutlined, DatabaseFilled } from '@ant-design/icons';
import { Switch, Route, Link} from 'react-router-dom';
import QualityMonitoring from './component/QualityMonitoring';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  const [navigateKey, setNavigateKey] = useState("")

  return(
  <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            selectedKeys = {navigateKey}
            // defaultOpenKeys={['sidenav1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={(e) => setNavigateKey(e.key)}
          >
            <SubMenu key="sidenav1" icon={<DatabaseFilled />} title="Data">
              <Menu.Item key="qualityMonitoring" icon={<MonitorOutlined />}><Link to='/qualityMonitoring'/>Quality Monitoring</Menu.Item>
              <Menu.Item key="userLog" icon={<UserOutlined />}>User Log</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
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
            <Switch>
              <Route exact path="/qualityMonitoring" component={QualityMonitoring} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App;