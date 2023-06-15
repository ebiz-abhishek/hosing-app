import React from "react";
import { useEffect, useState } from 'react';
import { Layout } from "antd";
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigate } from 'react-router-dom';
const { Content } = Layout;

const Main = (props) => {
    const { ptitle, permission } = props;

    const navigate = useNavigate();
    useEffect(() => {
        document.title = process.env.REACT_APP_APP_NAME + ' ' + ptitle;
    }, [ptitle]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const AuthRoute = () => {
        // navigate('/dashboard')
    };


    useEffect(() => {
        AuthRoute();
    }, [AuthRoute, permission]);
    const [screenHeight, setscreenHeight] = useState(100)
    const [screenWidth, setscreenWidth] = useState(100)


    useEffect(() => {
        setscreenHeight(window.innerHeight)
        setscreenWidth(window.innerWidth)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window])
    return (
        <>
            {/* style={{height:'100vh'}} */}
            <Layout className="site-layout" style={(screenWidth === 1024 && screenHeight === 1366) ? { height: '100vh' } : {}}>
                {/* site-layout-main-div */}
                <Layout>
                    <div>
                        <Header />
                        <Content
                            style={{
                                margin: '0 16px',
                            }}
                        >
                            <div className="margin-top-100">
                                <Outlet />
                            </div>
                        </Content>
                        {/* <Footer /> */}
                    </div>
                </Layout>
            </Layout>
        </>
    );
}

export default Main;
