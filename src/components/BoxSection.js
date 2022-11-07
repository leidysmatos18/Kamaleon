import React from "react";
import { Box } from "@mui/material";

const BoxSection = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        width: "100%",
        zIndex: "3",
      }}
    >
      {children}
    </Box>
  );
};

export default BoxSection;
