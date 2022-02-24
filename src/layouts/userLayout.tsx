import React from 'react'
import { Helmet } from 'umi'

const UserLayout: React.FC = (props: any) => {
    const children = props.children
    return (
        <div className="page-auth">
            <Helmet>
                <title>登录</title>
                <meta name="description" content='' />
            </Helmet>
            <div className="auth-main">
                {children}
                <div className='copyright'>
                    <p>CopyRight © 2018-2022 Anhui Technology Co., Ltd</p>
                </div>
            </div>
        </div>
    )
}

export default UserLayout