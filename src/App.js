import React, {useState} from 'react';
import './App.css';
import { Layout, Menu, } from 'antd';
import { UserOutlined, DatabaseFilled, AppstoreOutlined } from '@ant-design/icons';
import { Switch, Route, Link} from 'react-router-dom';

import TableUserLog from './component/TableUserLog';
import TableTopTenModule from './component/TableTopTenModuleVisit'
import UserModuleVisit from './component/UserModuleVisit'

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
            <SubMenu key="sidenav1" icon={<DatabaseFilled />} title="User Visit">
              <Menu.Item key="userLog" icon={<UserOutlined />}><Link to='/userLog'/>User Log</Menu.Item>
              <Menu.Item key="userModuleVisit" icon={<AppstoreOutlined />}><Link to='/userModuleVisit'/>User Module Visit</Menu.Item>
              <Menu.Item key="topTenModule" icon={<AppstoreOutlined />}><Link to='/topTenModule'/>Top Ten Module</Menu.Item>
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
              <Route exact path="/userLog" component={TableUserLog} />
              <Route exact path="/userModuleVisit" component={UserModuleVisit} />
              <Route exact path="/topTenModule" component={TableTopTenModule} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App;