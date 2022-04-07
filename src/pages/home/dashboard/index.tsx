import React from 'react';
import { Row, Col } from 'antd';
import { SmileOutlined, TeamOutlined, PayCircleOutlined, HeartOutlined } from '@ant-design/icons';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import './index.less';

import DashReport from './dashReport';
import DashTable from './dashTable';
import DashTimeline from './dashTimeLine';

TweenOne.plugins.push(Children);

interface NumberTweenOneValue {
    num: number;
    floatLength ?: 0;
}

const NumberTweenOne = (props: NumberTweenOneValue) => {
    const animation: object = {
        Children: {
            value: props.num,
            floatLength: props.floatLength || 0,
            formatMoney: true,
        },
        duration: 500,
    }
    return (
        <TweenOne animation={animation}>0</TweenOne>
    )
}

const PageDashboard: React.FC = (props: any) => {

    return (
        <div className='page-dashboard'>
            <Row gutter={16}>
                <Col span={6}>
                    <div className='kn-card dash-card-user'>
                        <span className="icon color-warning"><SmileOutlined /></span>
                        <span className="info">
                            <span className="text">活跃用户</span>
                            <span className="num"><NumberTweenOne num={10000} /></span>
                        </span>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='kn-card dash-card-user'>
                        <span className="icon color-purple"><TeamOutlined /></span>
                        <span className="info">
                            <span className="text">活跃用户</span>
                            <span className="num"><NumberTweenOne num={16600} /></span>
                        </span>
                    </div>
                </Col>
                <Col span={6}>
                    
                    <div className='kn-card dash-card-user'>
                        <span className="icon color-success"><PayCircleOutlined /></span>
                        <span className="info">
                            <span className="text">活跃用户</span>
                            <span className="num"><NumberTweenOne num={32100} /></span>
                        </span>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='kn-card dash-card-user'>
                        <span className="icon color-pink"><HeartOutlined /></span>
                        <span className="info">
                            <span className="text">活跃用户</span>
                            <span className="num"><NumberTweenOne num={18000} /></span>
                        </span>
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={16}>
                    <div className='kn-card'>
                        <div className='card-title'>统计</div>
                        <div className='card-cont'>
                            <DashReport />
                        </div>
                    </div>
                    <div className='kn-card'>
                        <div className='card-title'>表格</div>
                        <div className="card-cont">
                            <DashTable />
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='kn-card'>
                        <div className='card-title'>时间轴</div>
                        <div className="card-cont">
                            <DashTimeline />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default PageDashboard;