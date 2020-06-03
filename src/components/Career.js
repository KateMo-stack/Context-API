import React from "react";
import ThemeContext from "../components/ThemeContext";
import Styled from "styled-components";

const StyledH1 = Styled.h1`
  font-size:40px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.maslanka};
  
`;

function Career() {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div className="gallery">
          <StyledH1
            // obiekty są w {}, szczypiorek jest na sztywno wpisany, {value.h1Styles.color} i {value.h1Styles.fontSize} są zmienne
            szczypiorek={"15px"}
            color={context.h1Styles.color}
            maslanka={context.h1Styles.fontSize}
          >
            Welcome {context.h1Styles.color} in Carrer rrrrr!
          </StyledH1>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Career;
