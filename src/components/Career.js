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
      {(value) => (
        <div className="gallery">
          <StyledH1
            szczypiorek={"15px"}
            color={value.h1Styles.color}
            maslanka={value.h1Styles.fontSize}
          >
            Welcome {value.h1Styles.color} in Carrer rrrrr!
          </StyledH1>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Career;
