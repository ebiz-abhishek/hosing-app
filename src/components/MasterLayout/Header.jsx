import React, { useEffect, useState } from 'react';
import { Col, Layout, Row, Button, Image } from 'antd';
import { Menu } from 'antd';

import { useNavigate } from "react-router-dom";
import Drawer from 'react-modern-drawer'
import {
    HomeOutlined,
    NotificationOutlined,
    InfoCircleOutlined,
    MenuFoldOutlined,
    CloseOutlined
} from '@ant-design/icons';
//import styles 👇
import 'react-modern-drawer/dist/index.css'

const { Header } = Layout;
const HeaderPage = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const navigate = useNavigate();
    const onMenuClick = (event) => {
        const { key } = event
        console.log(key)
        navigate(key)
        toggleDrawer()
    }
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    let  headerItems = [
        {
            label: 'Dashboard',
            key: 'dashboard',
            icon: <HomeOutlined />
        },
     
        {
            label: 'Notification',
            key: 'notification',
            icon: <NotificationOutlined />
        },
        {
            label: 'My Profile',
            key: 'profile',
            icon: <InfoCircleOutlined />,
        },
       
       
    ];
    return (
        <Header style={{ backgroundColor: 'lightblue' }}>
            <Row style={{display:'flex'}}>
            <Col className=''>
                <>
                    <MenuFoldOutlined onClick={toggleDrawer} style={{ fontSize:20}}/>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                        className='bla bla bla'
                    >
                        <div className='profile-menu ant-layout-header'>
                        <div className='sidebar-close'>
                            <CloseOutlined style={{alignSelf:'end',float:'right',margin:20}} onClick={toggleDrawer} />
                        </div>
                        <Menu mode="inline" onClick={onMenuClick} items={headerItems} style={{width:'100%'}} />
                    </div>
                    </Drawer>
                </>
                </Col>
               
            </Row>

        </Header>
    )

}
export default HeaderPage;