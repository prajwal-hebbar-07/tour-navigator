import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Typography variant="h1">Root Layout</Typography>
      <Outlet />
    </>
  );
};

export default RootLayout;
