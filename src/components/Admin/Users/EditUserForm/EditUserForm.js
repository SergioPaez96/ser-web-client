import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Form, Input, Select, Button, Row, Col, Icon } from "antd";
import { useDropzone } from 'react-dropzone';
import NoAvatar from "../../../../assets/img/png/no-avatar.png"

import './EditUserForm.scss';
import { getAvatarApi } from '../../../../api/user';

export default function EditUserForm(props) {
    const { user } = props;
    const [avatar, setAvatar] = useState(null);
    const [userData, setUserData] = useState({});

    const updateUser = e => {
        e.preventDefault();
        console.log(userData);
    }

    useEffect(() => {
        setUserData({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            avatar: user.avatar
        });
    }, [user]);

    useEffect(() => {
        if (user.avatar) {
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response);
            })
        } else {
            setAvatar(null);
        }
    }, [user]);

    useEffect(() => {
        if (avatar) {
            setUserData({ ...userData.avatar, avatar: avatar.file })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [avatar]);

    return (
        <div className='edit-user-form'>
            <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
            <EditForm userData={userData} setUserData={setUserData} updateUser={updateUser} />
        </div>
    );
}

function UploadAvatar(props) {
    const { avatar, setAvatar } = props;
    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
        if (avatar) {
            if (avatar.preview) {
                setAvatarUrl(avatar.preview);
            } else {
                setAvatarUrl(avatar);
            }
        } else {
            setAvatarUrl(null);
        }
    }, [avatar]);


    const onDrop = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0];
            setAvatar({ file, preview: URL.createObjectURL(file) })
        },
        [setAvatar]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    });

    return (
        <div className="upload-avatar" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <Avatar size={150} src={NoAvatar} />
            ) : (
                <Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar} />
            )}
        </div>
    )
}

function EditForm (props){
    const { userData, setUserData, updateUser } = props;
    const { Option } = Select;
    return (
        <Form className="form-edit" onSubmit={updateUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            value={userData.name}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}