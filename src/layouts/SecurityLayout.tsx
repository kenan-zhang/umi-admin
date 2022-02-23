import React from 'react';
import { useAccess, Redirect } from 'umi';


const SecurityLayout: React.FC = (props: any) => {
    const access = useAccess();

    if (access.role) {
        return <>{props.children}</>;
    }

    return <Redirect to="/user/login" />;
};

export default SecurityLayout;
