import React from 'react';
import { useAccess, Redirect } from 'umi';
import { Layout } from 'antd';
import KnFooter from '@/components/Footer';
import KnHeader from '@/components/Header';
import KnSider from '@/components/Sider';
import KnBeardcrumb from '@/components/Beardcrumb';

import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import '@/assets/basic.less';

const { Header, Footer, Sider, Content } = Layout;

const SecurityLayout: React.FC = (props: any) => {
    // NProgress.start()
    const access = useAccess();
    console.log(access);

    if (access.role) {
        return (
            <Layout className='kn-layout'>
                <Sider className='kn-layout-sider'><KnSider /></Sider>
                <Layout>
                    <Header className='kn-layout-header'><KnHeader /></Header>
                    <Content className='kn-layout-content'>
                        <KnBeardcrumb />
                        {props.children}
                    </Content>
                    <Footer className='kn-layout-footer'><KnFooter /></Footer>
                </Layout>
            </Layout>
        )
    }

    return <Redirect to="/user/login" />
}

export default SecurityLayout
