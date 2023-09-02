import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react";
import "./index.css";
import { extendTheme } from "@chakra-ui/react";





const customTheme = extendTheme({
  config: {
    initialColorMode: "light", // Set the initial color mode to light
    useSystemColorMode: false, // Disable system preference-based color mode
  },
  colors: {
    brand: {
      light: "#007bff", // Blue color in light mode
      dark: "#17a2b8", // Blue color in dark mode
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={customTheme}>
    <ColorModeProvider options={customTheme.config}>
    <  CSSReset/>
      <App />
    </ColorModeProvider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
