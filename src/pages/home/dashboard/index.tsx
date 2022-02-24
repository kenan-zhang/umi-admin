import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

const PageDashboard: React.FC = (props: any) => {
    return (
        <div className='page-dashboard'>
            <Row gutter={16}>
                <Col span={6}>
                    <div className='kn-card'>col-6</div>
                </Col>
                <Col span={6}>
                    <div className='kn-card'>col-6</div>
                </Col>
                <Col span={6}>
                    <div className='kn-card'>col-6</div>
                </Col>
                <Col span={6}>
                    <div className='kn-card'>col-6</div>
                </Col>
            </Row>
        </div>
    )
};

export default PageDashboard;