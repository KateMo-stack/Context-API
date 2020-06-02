import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Styled from "styled-components";
import ThemeContext from "../components/ThemeContext";

const StyledContainer = Styled.div`
  background-color: #8b0000;  
  color: white;
  font-weight: bold;
  // display: inline-block;
`;

const StyledUnorderList = Styled.ul`
  color: white;
  display: inline-block;
  text-decoration: none;
  align-item: right;
  list-style-type: none;

`;
// Uusnięcie hiperłącza
const StyledLink = Styled(NavLink)`
  text-decoration:none;
  color: white;
&.selected{
  text-decoration: underline;
}

`;
const Navbar = () => {
  return (
    <nav className="wrapper container">
      <StyledContainer className="container">
        <a className="brand-logo">Super Company</a>
        <StyledUnorderList className="right">
          <li>
            <StyledLink to="/gallery" activeClassName="selected">
              Gallery
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/meet_us" activeClassName="selected">
              Meet us
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/career" activeClassName="selected">
              Carrer
            </StyledLink>
          </li>
        </StyledUnorderList>
      </StyledContainer>
    </nav>
  );
};

export default Navbar;
