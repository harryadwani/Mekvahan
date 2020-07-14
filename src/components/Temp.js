//screen when credentials are correct

import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Button,Modal} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


export default class Temp extends Component {
    state = { visible: false };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    render() {
        return (
            <div>
                <Modal
          title="ADD"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p><b>Add Address </b>...</p>
          <label>heading of address</label>
          <input type='text' hint='heading of address?'></input>
          <br></br>
          <label>full address</label>

          <input type='text' hint='full address ?'></input>
        </Modal>
            <Layout>
                <Header className="header">
                    <div className={logo} />
                    <img src={require('./asset/1x/Asset 1mdpi.png')} style={{float:'left'}} />
                    <p style={{color: 'white',float:'left' }} >Hi Mekvahan</p>
                    <p style={{color: 'white'}} >My Addresses</p>
                    <Button color="secondary" style={{float:'right'}} onClick={this.showModal} >+ add address</Button>
                   
                </Header>
                <Content style={{ padding: '0 50px' }}>
                   
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                
                                    <Menu.Item key="1">My Profile</Menu.Item>
                                    <Menu.Item key="2">Manage Address</Menu.Item>
                                    <Menu.Item key="3">Change Password</Menu.Item>
                                    
                            </Menu>
                        </Sider>
                        {/* <Content style={{ padding: '0 24px', minHeight: 280 }}>sorry</Content> */}
                        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Sorry for not being able to complete the final functionality(displaying address after
                             entering it in popup) due to some temporary issues.
                        </h1>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout>,
            
            </div>
        )
    }
}
const logo = {
    width: '120px',
    height: '31px',
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '16px 28px 16px 0',
    float: 'left'
}
