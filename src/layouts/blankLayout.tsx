import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

const BlankLayout: React.FC = (props: any) => {
    return (
        <ConfigProvider locale={zhCN}>
            {props.children}
        </ConfigProvider>
    )
}

export default BlankLayout;