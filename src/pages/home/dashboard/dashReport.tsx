import React, { useEffect } from 'react';
import { Line } from '@antv/g2plot';
import MockDashReport from '@/mock/dashReport.json';

const DashReport: React.FC = () => {

    useEffect(() => {
        const linePlot = new Line('container', {
            data: MockDashReport,
            xField: 'year',
            yField: 'gdp',
            seriesField: 'name',
            yAxis: {
                label: {
                    formatter: (v: any) => `${(v / 10e8).toFixed(1)} B`,
                },
            },
            legend: {
                position: 'top',
            },
            smooth: true,
            // @TODO 后续会换一种动画方式
            animation: {
                appear: {
                    animation: 'path-in',
                    duration: 5000,
                },
            },
        });
    
        linePlot.render();
    })

    return (
        <div id='container'></div>
    )
};

export default DashReport;