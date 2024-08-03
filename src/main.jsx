import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";

import App from "./App.jsx";

import "./index.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#244855",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e64833",
      contrastText: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
