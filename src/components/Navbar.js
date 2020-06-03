import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Styled from "styled-components";
import ThemeContext from "../components/ThemeContext";

const StyledContainer = Styled.div`
  background-color: #8b0000;  
  color: white;
  font-weight: bold;
  display: flex;  
  align-items: center;
  justify-content: space-between;
  // display: inline-block;
`;

const StyledUnorderList = Styled.ul`
  color: white;
  display: flex;  
  justify-content: flex-end;
  text-decoration: none;
  align-items: center;
  list-style-type: none;

`;
// Uusnięcie hiperłącza
const StyledLink = Styled(NavLink)`
  text-decoration:none;
  color: white;
  // display: inline-block;
  margin-left: 25px;

&.selected{
  text-decoration: underline;
  border: 2px dotted grey;
  font-size: ${(props) => props.alarm};
  color: ${(props) => props.uwaga};
  
}

`;

function Navbar() {
  return (
    <ThemeContext.Consumer>
      {/* dowolna nazwa, ale lepiej context */}
      {(context) => (
        <div className="navbar">
          <nav className="wrapper container">
            <StyledContainer className="container">
              <a className="brand-logo">Super Company</a>
              <StyledUnorderList className="right">
                <li>
                  <StyledLink
                    to="/gallery"
                    activeClassName="selected"
                    uwaga={context.NavStyles.primaryColor}
                    alarm={context.NavStyles.primaryFontSize}
                  >
                    Gallery
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    to="/meet_us"
                    activeClassName="selected"
                    uwaga={context.NavStyles.primaryColor}
                    alarm={context.NavStyles.primaryFontSize}
                  >
                    Meet us
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    to="/career"
                    activeClassName="selected"
                    uwaga={context.NavStyles.primaryColor}
                    alarm={context.NavStyles.primaryFontSize}
                  >
                    Carrer
                  </StyledLink>
                </li>
              </StyledUnorderList>
            </StyledContainer>
          </nav>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Navbar;
