import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sider: React.FC = () => {
    const handleClick = (e: any) => {

    }
    return (
        <>
            <div className='logo'>LOGO</div>
            <div className='sider-menus'>
                <Menu
                    onClick={handleClick}
                    style={{ width: 199 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </>
    )
};

export default Sider;