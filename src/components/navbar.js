import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from './NavbarElements';

import { SignOutButton } from './signoutbutton';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/Home'>
            <h1>MACO</h1>
        </NavLink>
        <Bars />
        <NavMenu>

          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      
      </Nav>
    </>
  );
};

export default Navbar;