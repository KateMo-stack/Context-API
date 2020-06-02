import React, { Component } from "react";
import kwiat1 from "../obrazki_kwiaty/kwiat1.jpg";
import kwiat2 from "../obrazki_kwiaty/kwiat2.jpg";
import kwiat3 from "../obrazki_kwiaty/kwiat3.jpg";
import kwiat4 from "../obrazki_kwiaty/kwiat4.jpg";
import kwiat5 from "../obrazki_kwiaty/kwiat5.jpg";
import kwiat6 from "../obrazki_kwiaty/kwiat6.jpg";
import kwiat7 from "../obrazki_kwiaty/kwiat7.jpg";
import kwiat8 from "../obrazki_kwiaty/kwiat8.jpg";
import MyImage from "./MyImage.js";
import Styled from "styled-components";

const StyledGridContainer = Styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  border: green;
  margin: auto auto;
`;

class Company_gallery extends Component {
  state = {
    content: "",
    // imagesArray to obiekt:
    imagesArray: [
      kwiat1,
      kwiat2,
      kwiat3,
      kwiat4,
      kwiat5,
      kwiat6,
      kwiat7,
      kwiat8,
    ],
  };

  render() {
    return (
      <StyledGridContainer className="grid-container">
        {this.state.imagesArray.map((kwiatSrc, iterator) => (
          <MyImage
            imageAlt={`kwiat${iterator + 1}`}
            imageSrc={kwiatSrc}
            imageClassName={`item${iterator + 1}`}
            headertext={`kwiat ${iterator + 1}`}
          />
        ))}
      </StyledGridContainer>
    );
  }
}

export default Company_gallery;
