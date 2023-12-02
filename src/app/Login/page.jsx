import React from 'react';
import Login from '@/components/login/Login';
import AppBar from '@/components/appbar/AppBar';
import NewLogin from '@/components/login/NewLogin';

const PageLogin = () => {
    return (
        <div>
            <AppBar/>
            <NewLogin/>
        </div>
    );
};

export default PageLogin;