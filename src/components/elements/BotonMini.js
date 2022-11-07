import React from "react";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BotonMini = ({ link, text, redirecionar,redire, PAGE_INVEST }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          color: "#020060",
          height: "30px",
          marginY: 2,
          borderRadius: "30px",
          display: "flex",
          fontWeight: "900",
        }}
        color="secondary"
        onClick={()=>redirecionar(PAGE_INVEST, redire,'end')}
      >
        {text}
        <ArrowRightAltIcon fontSize="large" />
      </Button>
    </>
  );
};

export default BotonMini;
