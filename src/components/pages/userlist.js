import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState([])
    const fetchPost = async () => {
        await getDocs(collection(db, "Users"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log(newData);
                setuserData(newData)
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const onUpdateRecord = (id) => {
        console.log(id)
        navigate('/user-form', { data: id});


        
    }

    const onDeleteRecord = async(id) => {
        await deleteDoc(doc(db, "Users", id)); 
        fetchPost()


    }

    const columns = [
        {
            title: 'Fist Name',
            dataIndex: 'firstname',
            key: 'firstname',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {console.log('reee', record.id)}
                    <Button>
                        <EditOutlined onClick={() => onUpdateRecord(record)} />
                    </Button>
                    <Button><DeleteOutlined onClick={() => onDeleteRecord(record.id)} />
                    </Button>
                </Space>
            ),
        },
    ];
    const data = [
        {
            firstname: 'John Brown',
            lastname: 'John Brown',
            age: 32,
            city: 'New York No. 1 Lake Park',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={userData} />
        </div>
    )
}

export default Profile