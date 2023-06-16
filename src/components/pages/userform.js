import React, { useEffect } from "react";
import {Form, Input, Button } from "antd";
import {db} from '../../firebase';
import {collection, addDoc, updateDoc, doc} from 'firebase/firestore';
import { useLocation, useNavigate } from "react-router-dom";

const Notification = ()=>{
    const [form] = Form.useForm();
    const {data} = useLocation();
    const navigate = useNavigate();


    const onFinish = async(event)=>{
        try {
            if(data?.id){
                await updateDoc(doc(db, "Users", data.id), { firstname:event.firstname,
                    lastname:event.lastname,
                    age:event.age,
                    city:event.city});
            }else{
                await addDoc(collection(db, "Users"), {
                    firstname:event.firstname,
                    lastname:event.lastname,
                    age:event.age,
                    city:event.city
                  }); 
            }
            navigate('/user');

        } catch (error) {
            console.log('error',error)  
        }
     
    }

    useEffect(() => {
       if(data?.id){ form.setFieldsValue({
            firstname:data?.firstname,
            lastname:data?.lastname,
            age:data?.age,
            city:data?.city
        });}
    }, [data?.id])
    


    return(
        <div className="user-main-block">
         <Form form={form}
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        // validateMessages={validateMessages()}
                        autoComplete="off"
                        className="user-form-block"
                        style={{margin:50}}
                    >
                        <Form.Item
                            label="First Name"
                            name="firstname"
                            id="firstname"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    min: 3,
                                    max: 99,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="lastname"
                            id="lastname"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    min: 3,
                                    max: 99,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Age"
                            name="age"
                            id="age"
                            rules={[
                                {
                                    required: true,
                                    // type: 'number',  

                                    // min: 1,
                                    // max: 3,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="City"
                            name="city"
                            id="city"
                            rules={[
                                {
                                    required: true,
                                    type: 'string',
                                    min: 3,
                                    max: 99,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                     

                        <Form.Item
                           
                        >
                            <Button  htmlType="submit">Submit</Button>
                            {/* <ButtonSubmitReset isLoading={isLoading} onReset={onReset} /> */}
                        </Form.Item>
                    </Form>
        </div>
    )
}

export default Notification