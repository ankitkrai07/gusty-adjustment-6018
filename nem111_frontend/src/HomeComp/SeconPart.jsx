import React from "react";
import styled from "styled-components";

const SecondPart = () => {
  return (
    <DIV id="SecondPart">
      <h2>Explore rentals on HomeSweeter</h2>
      <p>
        Take a deep dive and browse homes or apartments for rent and local
        insights to find what is right for you.
      </p>
    </DIV>
  );
};

export default SecondPart;

const DIV = styled.div`
  #SecondPart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    text-align: center;
    /* border: 1px solid ; */
  }

  #SecondPart h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  #SecondPart p {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    width: 50%;
  }

  /* Media Queries */
  @media screen and (max-width: 768px) {
    /* Adjust styles for smaller screens */

    #SecondPart p {
      font-size: 1.2rem;
      width: 90%;
    }
  }
`;
