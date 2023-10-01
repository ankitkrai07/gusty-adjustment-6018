import { Box } from "@chakra-ui/react";

import Navbar from "./Components/Navbar";

import { MainRoutes } from "./Pages/MainRoutes";
import { BuyProperty } from "./Pages/BuyProperty/buyProperty";

function App() {
  return (
    <>
      <Box>
        <MainRoutes />
      
      </Box>
    </>
  );
}

export default App;
