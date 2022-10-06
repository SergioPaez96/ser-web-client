import React, { useState } from "react";
import {
  Form,
  Icon,
  Input,
  Select,
  Button,
  Row,
  Col,
  notification,
} from "antd";
import { signUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddUserForm.scss";

export default function AddUserForm(props) {
  const { setIsVisibleModal, setReloadUsers } = props;
  const [userData, setUserData] = useState({});

  const addUser = (e) => {
    e.preventDefault();
    console.log("Creando Usuario...");
  };

  return (
    <div className='add-user-form'>
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      />
    </div>
  );
}

function AddForm(props) {
  const { userData, setUserData, addUser } = props;
  const { Option } = Select;

  return (
    <Form className='form-add' onSubmit={addUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type='user' />}
              placeholder='Nombre'
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type='user' />}
              placeholder='Apellido'
              value={userData.lastname}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type='mail' />}
              placeholder='Correo Electrónico'
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder='Selecciona un rol'
              value={userData.role}
              onChange={(e) => setUserData({ ...userData, role: e })}>
              <Option value='admin'>Administrador</Option>
              <Option value='editor'>Editor</Option>
              <Option value='reviewr'>Revisor</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type='lock' />}
              type='password'
              placeholder='Contraseña'
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type='lock' />}
              type='password'
              placeholder='Repetir contraseña'
              value={userData.repeatPass}
              onChange={(e) =>
                setUserData({ ...userData, repeatPass: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type='primary' htmlType='submit' className='btn-submit'>
          Crear usuario
        </Button>
      </Form.Item>
    </Form>
  );
}
