import React from 'react';
import { Menu } from 'antd';
import { DashboardOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MenuList = [
    { name: '控制台', key: 'dashboard', icon: <DashboardOutlined /> },
    { name: 'CRM', key: 'crm', icon: <SettingOutlined />, children: [
        { name: '公海', key: 'public' }
    ] },
    { name: '账户', key: 'account', icon: <SettingOutlined />, children: [
        { name: '基本资料', key: 'info' }
    ] }
]

const Sider: React.FC = () => {

    const handleClick = (e: any) => {
    }

    const MenuHtml = () => {
        let html:any = [];
        MenuList.forEach((item: any) => {
            let children: any = [];
            if(!item.children){
                html.push(<Menu.Item key={item.key} icon={item.icon}>{item.name}</Menu.Item>)
            }else{
                if(item.children.length == 0){
                    children = []
                }else{
                    item.children.forEach((item2: any) => {
                        children.push(<Menu.Item key={item.key + ':' + item2.key}>{item2.name}</Menu.Item>)
                    })
                }
                html.push(<SubMenu key={children.length ? item.key : ''} icon={item.icon} title={item.name}>{children}</SubMenu>)
            }
        })
        return html;
    }
    
    return (
        <>
            <div className='logo'>LOGO</div>
            <div className='sider-menus'>
                <Menu
                    onClick={handleClick}
                    style={{ width: 199 }}
                    defaultSelectedKeys={['dashboard']}
                    defaultOpenKeys={['dashboard']}
                    mode="inline"
                >
                    {MenuHtml()}
                </Menu>
            </div>
        </>
    )
};

export default Sider;