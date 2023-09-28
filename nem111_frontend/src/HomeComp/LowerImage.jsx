import React from "react";
import image1 from "../Images/homepagebottom.jpg";
import styled from "styled-components";

const LowerImage = () => {
  return (
    <DIV id="lastimage">
      <img id="lastimage1" src={image1} alt="Last Image" />
    </DIV>
  );
};

export default LowerImage;

const DIV = styled.div`
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Optionally, adjust the height to center the image vertically */
  }

  .centered-image {
    max-width: 100%;
    max-height: 100%;
  }

  #lastimage1 {
    display: flex;

    margin: auto;
    justify-content: center;
    align-items: center;
  }
`;
