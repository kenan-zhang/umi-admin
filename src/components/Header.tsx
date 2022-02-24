import React from 'react';
import { Badge } from 'antd';
import { MenuFoldOutlined, BellOutlined, DownOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
    return (
        <>
            <div className='header-menu'>
                <div className='button-menu toggle-menu'><MenuFoldOutlined /></div>
            </div>
            <div className='header-menu float-right'>
                <div className='button-menu message-menu'><Badge count={5}><BellOutlined /></Badge></div>
                <div className='dropdown-toggle'>
                    <div className="user-menu button-menu">
                        <span className="avatar"></span>
                        <span className="name">用户中心</span>
                        <DownOutlined />
                    </div>
                    <div className='dropdown-menus'>
                        <a href="#" className='dorpdown-item'>基本资料</a>
                        <a href="#" className='dorpdown-item'>实名认证</a>
                        <a href="#" className='dorpdown-item'>安全设置</a>
                        <a href="#" className='dorpdown-item'>退出登录</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;