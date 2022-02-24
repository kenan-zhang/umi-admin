import React from 'react';
import { Breadcrumb } from 'antd';

const Beardcrumb: React.FC = () => {
    return (
        <div className='kn-beardcrumb'>
            <div className='page-title'>控制台</div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href='/home'>Home</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
};

export default Beardcrumb;