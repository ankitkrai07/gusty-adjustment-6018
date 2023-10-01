import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import dotenv from "dotenv";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        {/* <React.StrictMode> */}
        {/* <dotenv> */}
        <App />
        {/* </dotenv> */}
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
