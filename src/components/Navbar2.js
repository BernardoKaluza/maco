import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar2 = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <h1>MACO</h1>
        </NavLink>
        <Bars />
        <NavMenu>

          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/calendario' activeStyle>
            Agenda
          </NavLink>
          <NavLink to='/PesquisaUtente' activeStyle>
            Utentes
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Terminar Sessão</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar2;