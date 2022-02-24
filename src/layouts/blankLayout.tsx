import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const BlankLayout: React.FC = (props: any) => {
    return (
        <ConfigProvider locale={zhCN}>
            {props.children}
        </ConfigProvider>
    )
}

export default BlankLayout;