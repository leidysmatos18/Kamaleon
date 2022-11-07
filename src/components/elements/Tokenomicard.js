import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProgressBar from "./ProgressBar";

const Tokenomicard = () => {
  return (
    <Box
      component="div"
      className="tokenblock"
      sx={{
        width: { xs: "80%", sm: "60%", md: "550px", xl: "680px" },
        borderRadius: "40px",
        padding: "30px",
        margin: "0 auto",
        color: "#fff",
        marginTop: "-8%",
        minHeight: "250px",
      }}
      data-aos="fade-up-right"
    >
      TOKENOMICS
      <hr className="hr-icons" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography>KLT PORTFOLIO FINANCING</Typography>
          <ProgressBar valor="15" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>RESERVE</Typography>
          <ProgressBar valor="7" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>LIQUID POOL</Typography>
          <ProgressBar valor="12" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>SEED</Typography>
          <ProgressBar valor="15" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>DEVELOPMENT FINANCING</Typography>
          <ProgressBar valor="20" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>TEAM</Typography>
          <ProgressBar valor="6" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>PRE SEED</Typography>
          <ProgressBar valor="10" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>PRE SALE</Typography>
          <ProgressBar valor="15" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tokenomicard;
