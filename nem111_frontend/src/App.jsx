import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Admin />
      </Box>
    </>
  );
}

export default App;
