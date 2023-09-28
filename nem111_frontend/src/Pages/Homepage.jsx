import React from "react";
import BottomPart from "../HomeComp/BottomPart";
import LowerImage from "../HomeComp/LowerImage";
import { Sliders } from "../HomeComp/Slider";
import SecondPart from "../HomeComp/SeconPart";
const Homepage = () => {
  return (
    <div>
      <SecondPart />
      <Sliders />
      <BottomPart />
      <LowerImage />
    </div>
  );
};

export default Homepage;
