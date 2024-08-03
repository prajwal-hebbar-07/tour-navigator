import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Box mt={10}>
        <Outlet />
      </Box>
    </>
  );
};

export default RootLayout;
