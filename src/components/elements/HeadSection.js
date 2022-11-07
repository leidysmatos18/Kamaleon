import React from "react";
import { Grid, Container, Box, useTheme, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HeadSection = ({ ttl, colorttl, btnlink, colorhr }) => {
  const mytheme = useTheme();
  const match = useMediaQuery(mytheme.breakpoints.up("sm"));
  return (
    <>
      {" "}
      <Box
        component="h2"
        data-aos="fade-up"
        sx={
          match
            ? {
                color: colorttl,
                fontSize: "2rem",
                marginY: "10px",
                overflowX: "hidden",
              }
            : {
                color: colorttl,
                fontSize: "2rem",
                textAlign: "center",
                overflowX: "hidden",
              }
        }
      >
        {ttl}
      </Box>
      {/* <Button
        variant="contained"
        endIcon={<ArrowRightAltIcon />}
        width="100%S"
        sx={
          match
            ? {
                color: "#020060",
                height: "40px",
                float: "right",
                marginTop: "-50px",
              }
            : {
                color: "#020060",
                float: "none",
                display: "flex",
                marginX: "auto",
              }
        }
        color="secondary"
      >
        Más información
      </Button> */}
      <Box
        component="hr"
        sx={{
          bgcolor: colorhr,
          height: "2px",
          border: "none",
        }}
      />
    </>
  );
};

export default HeadSection;
