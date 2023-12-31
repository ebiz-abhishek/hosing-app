import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined,PlusOutlined } from '@ant-design/icons'
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
        console.log('iddddd', id)
        navigate('/user-form', {state: id});
        { }
    }

    const onDeleteRecord = async (id) => {
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
        <>
        {userData ?  <div>
             <Button className="add-button" onClick={() => navigate('/user-form')}><PlusOutlined  />
            </Button>
            <Table columns={columns} dataSource={userData} />
        </div>:
            <div>
                <img className="loder-img" src={require('../../assets/loading-gif (1).gif')}/>
            </div>
        
    }
        </>
    )
}

export default Profile