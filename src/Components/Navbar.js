import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarStyle";
  
const Navbar = () => {
  return (
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>About</NavLink>
          <NavLink to="/contact" activeStyle>Contact Us</NavLink>
          <NavLink to="/blogs" activeStyle>Blogs</NavLink>
          <NavLink to="/sign-up" activeStyle>Sign Up</NavLink>
          <NavLink to="/colors" activeStyle>Colors</NavLink>
          <NavLink to="/test" activeStyle>Test</NavLink>
        </NavMenu>
      </Nav>
  );
};
  
export {Navbar};