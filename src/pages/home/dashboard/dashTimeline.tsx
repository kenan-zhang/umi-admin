import React from 'react';
import { Link } from 'umi';
import { Timeline } from 'antd';
import { BugOutlined, CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

const DashTimeline: React.FC = () => {
    return (
        <>
            <Timeline className='kn-timeline'>
                <Timeline.Item color="soft-success" dot={<CheckCircleOutlined />}>
                    <div className='timeline-item'>
                        <div className='tit'>任务完成</div>
                        <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. <Link to=''>[详情]</Link></div>
                    </div>
                </Timeline.Item>
                <Timeline.Item color="soft-pink" dot={<BugOutlined />}>
                    <div className='timeline-item'>
                        <div className='tit'>任务逾期</div>
                        <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. <Link to=''>[详情]</Link></div>
                    </div>
                </Timeline.Item>
                <Timeline.Item color="soft-purple" dot={<InfoCircleOutlined />}>
                    <div className='timeline-item'>
                        <div className='tit'>新任务</div>
                        <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. <Link to=''>[详情]</Link></div>
                    </div>
                </Timeline.Item>
                <Timeline.Item color="soft-warning" dot={<InfoCircleOutlined />}>
                    <div className='timeline-item'>
                        <div className='tit'>任务提醒</div>
                        <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. <Link to=''>[详情]</Link></div>
                    </div>
                </Timeline.Item>
                <Timeline.Item color="soft-secondary" dot={<InfoCircleOutlined />}>
                    <div className='timeline-item'>
                        <div className='tit'>任务进行中</div>
                        <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. <Link to=''>[详情]</Link></div>
                    </div>
                </Timeline.Item>
            </Timeline>
        </>
    )
};

export default DashTimeline;