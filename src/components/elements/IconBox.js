import React from "react";
import { Box, Grid } from "@mui/material";
import BotonMini from "./BotonMini";
const IconBox = ({ titulo, text, link, ancla, redirecionar }) => {
  return (
    <>
      <Grid item zeroMinWidth md={3} xs={12}>
        <Box
          component="h3"
          sx={{
            color: "#020060",
            fontSize: "25px",
            fontWeight: "900",
            marginBottom: "10px",
            minHeight: "60px",
          }}
        >
          {titulo}
        </Box>
        <hr className="hr-icons" />
        <Box
          component="p"
          sx={{
            color: "#00000",
            fontWeight: "500",
            minHeight: "120px",
            textAlign: "justify",
          }}
        >
          {text}
        </Box>
        <div onClick={() => redirecionar(link, ancla)}>
          <BotonMini link="#" />
        </div>
      </Grid>
    </>
  );
};

export default IconBox;
