import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const NavbarLogin = () => {
  return (
    <>
      <Nav>
        <NavLink to='/Login'>
            <h1>MACO</h1>
        </NavLink>
        <Bars />
        <NavMenu>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Register'>Registar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavbarLogin;