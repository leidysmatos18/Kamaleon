import { Box } from "@mui/material";
import React from "react";

const HeadCenter = ({ title, frase }) => {
  return (
    <>
      <Box component="div" sx={{ textAlign: "center" }}>
        <h2>{title}</h2>
        <hr className="hr-items" />
        <p>{frase}</p>
      </Box>
    </>
  );
};

export default HeadCenter;
