import React from "react";
import BottomPart from "../HomeComp/BottomPart";
import LowerImage from "../HomeComp/LowerImage";
import { Sliders } from "../HomeComp/Slider";
import SecondPart from "../HomeComp/SecondPart";
import UpperSection from "../HomeComp/UpperSection";
const Homepage = () => {
  return (
    <div>
      <UpperSection />
      <SecondPart />
      <Sliders />
      <BottomPart />
      <LowerImage />
    </div>
  );
};

export default Homepage;
