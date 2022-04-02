import React from 'react';
import { Link } from 'umi';
import { Badge, Input, Popover, Button } from 'antd';
import { MenuFoldOutlined, BellOutlined, DownOutlined } from '@ant-design/icons';

const { Search } = Input;

const Header: React.FC = () => {

    const messageContent = (
        <div className='kn-popover-message'>
            <div className='title'>消息通知</div>
            <div className='cont'>
                <div className="list">
                    <a href="#" className='item'>
                        <span className="text">无影云电脑3月专场特惠，云桌面低至1元起！</span>
                        <span className='time'>2022年3月30日 07:44:00</span>
                    </a>
                    <a href="#" className='item'>
                        <span className="text">无影云电脑3月专场特惠，云桌面低至1元起！</span>
                        <span className='time'>2022年3月30日 07:44:00</span>
                    </a>
                    <a href="#" className='item'>
                        <span className="text">无影云电脑3月专场特惠，云桌面低至1元起！</span>
                        <span className='time'>2022年3月30日 07:44:00</span>
                    </a>
                </div>
                <Link to='/' className='more'>查看更多</Link>
            </div>
        </div>
    )

    return (
        <>
            <div className='header-menu'>
                <div className='button-menu toggle-menu'><MenuFoldOutlined /></div>
                <div className='header-search'>
                    <Search allowClear placeholder='搜索'/>
                </div>
            </div>
            <div className='header-menu'>
                <div className='button-menu message-menu'>
                    <Popover overlayClassName="kn-popover-message" placement="bottomRight" content={messageContent} title={null} trigger="hover">
                        <Badge count={5}><BellOutlined /></Badge>
                    </Popover>
                </div>
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