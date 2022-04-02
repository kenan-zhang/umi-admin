import React from 'react';
import { Row, Col, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './index.less';

const PageDashboard: React.FC = (props: any) => {
    return (
        <div className='page-dashboard'>
            <Row gutter={16}>
                <Col span={6}>
                    <div className='kn-card dash-card-user'>
                        <span className="icon"><SmileOutlined /></span>
                        <span className="info">
                            <span className="text">活跃用户</span>
                            <span className="num">16600</span>
                        </span>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='kn-card dash-card-user'>
                        <span className="icon"><SmileOutlined /></span>
                        <span className="info">
                            <span className="text">活跃用户</span>
                            <span className="num">16600</span>
                        </span>
                    </div>
                </Col>
                <Col span={6}>
                    
                    <div className='kn-card dash-card-user'>
                        <span className="icon"><SmileOutlined /></span>
                        <span className="info">
                            <span className="text">活跃用户</span>
                            <span className="num">16600</span>
                        </span>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='kn-card dash-card-user'>
                        <span className="icon"><SmileOutlined /></span>
                        <span className="info">
                            <span className="text">活跃用户</span>
                            <span className="num">16600</span>
                        </span>
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={16}>
                    <div className='kn-card'>
                        <div className='card-title'>统计</div>
                        <div>1</div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='kn-card'>col-6</div>
                </Col>
            </Row>
        </div>
    )
};

export default PageDashboard;