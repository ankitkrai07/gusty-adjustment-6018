import React from "react";
import { styled } from "styled-components";

const BottomPart = () => {
  return (
    <DIV>
      <div>
        <div className="columns-container">
          <div className="column">
            <img
              src="https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg"
              alt="Buy A Home"
            />
            <h2>Rent a home</h2>
            <p>
              With 35+ filters and custom keyword search, Trulia can help you
              easily find a home or apartment for rent that you'll love.
            </p>
            <button>Find rental</button>
          </div>
          <div className="column">
            <img
              src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg"
              alt="Buy A Home"
            />
            <h2>Buy a home</h2>
            <p>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
            <button>Find Home</button>
          </div>
          <div className="column">
            <img
              src="https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg"
              alt="Buy A Home"
            />
            <h2>See neighborhoods</h2>
            <p>
              With more neighborhood insights than any other real estate
              website, we've captured the color and diversity of communities.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default BottomPart;

const DIV = styled.div`
  .columns-container {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
    /* border:2px solid yellow; */
  }

  .column {
    width: 20%;
    cursor: pointer;
    /* border:2px solid green; */
    flex: 0 0 calc(33.33% - 10px); /* Adjust the width of each column as desired */
    text-align: center;
    transition: border 0.3s;
  }

  .column:hover {
    border: 2px solid #333;
  }

  .column img {
    max-width: 40%;
    margin: auto;
    height: auto;
  }
  .column h2 {
    font-size: large;
    font-weight: 600;
  }
  .column p {
    margin-top: 10px;
    width: 250px;
    margin: auto;
  }

  .column:not(:last-child) {
    margin-right: 20px; /* Adjust the gap between columns as desired */
  }

  .column button {
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: #007882;
    color: white;
    transition: background-color 0.3s, color 0.3s;
    border: none;
    padding: 10px 40px;
    cursor: pointer;
    border-radius: 8px;
  }

  .column button:hover {
    background-color: white;
    color: #007882;
    border: 1px solid #007882;
    border-radius: 8px;
    padding: 10px 40px;
  }

  /* Media Query for smaller screens */
  @media screen and (max-width: 700px) {
    .columns-container {
      width: 90%;
      margin: auto;
      flex-direction: column;
      align-items: center;
    }
    .column {
      width: 100%;
      margin-bottom: 20px;
      cursor: pointer;
      flex: 0 0 calc(33.33% - 10px); /* Adjust the width of each column as desired */
      text-align: center;
      transition: border 0.3s;
    }
    .column img {
      max-width: 60%;
      margin: auto;
      height: auto;
    }
    .column h2 {
      font-size: large;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .column p {
      margin-top: 20px;
      width: 200px;
      margin: auto;
    }

    .column:hover {
      border: 2px solid #333;
    }

    .column:not(:last-child) {
      margin-right: 0;
    }

    /* .column button {
      margin-top: 20px;
      margin-bottom: 10px;
      background-color: #007882;
      color: white;
      transition: background-color 0.3s, color 0.3s;
      border: none;
      padding: 10px 40px;
      cursor: pointer;
      border-radius: 8px;
    } */
  }

  @media screen and (min-width: 700px) and (max-width: 1020px) {
    .columns-container {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .column {
      width: 100%;
      margin-bottom: 20px;
      cursor: pointer;
      flex: 0 0 calc(33.33% - 10px); /* Adjust the width of each column as desired */
      text-align: center;
      transition: border 0.3s;
    }
    .column img {
      max-width: 60%;
      margin: auto;
      height: auto;
    }
    .column h2 {
      font-size: large;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .column p {
      margin-top: 20px;
      width: 200px;
      margin: auto;
    }

    .column:hover {
      border: 2px solid #333;
    }

    .column:not(:last-child) {
      margin-right: 0;
    }

    /* .column button {
      margin-top: 20px;
      margin-bottom: 10px;
      background-color: #007882;
      color: white;
      transition: background-color 0.3s, color 0.3s;
      border: none;
      padding: 10px 40px;
      cursor: pointer;
      border-radius: 8px;
    } */
  }
`;
