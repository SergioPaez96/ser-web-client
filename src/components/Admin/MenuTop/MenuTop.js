import React from "react";
import { Button, Icon } from "antd";

import { logOut } from '../../../api/auth';

import SerLogo from "../../../assets/img/png/SerLogo.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  const logoutUser = () =>{
    logOut();
    window.location.reload();
  }
  return (
    <div className='menu-top'>
      <div className='menu-top__left'>
        <img className='menu-top__left-logo' src={SerLogo} alt='Sergio Paez' />
        <Button type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? 'home' : 'menu-fold'} />
        </Button>
      </div>
      <div className='menu-top__right'>
        <Button type="link" onClick={logoutUser}>
            <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
}
