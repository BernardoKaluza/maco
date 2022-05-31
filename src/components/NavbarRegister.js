import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const NavbarRegister= () => {
  return (
    <>
      <Nav>
        <NavLink to='/Register'>
            <h1>MACO</h1>
        </NavLink>
        <Bars />
        <NavMenu>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Inicar Sessão</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavbarRegister;