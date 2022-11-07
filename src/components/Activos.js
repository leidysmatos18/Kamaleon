import React from "react";
import { Grid, Container, Box, useTheme } from "@mui/material";
import HeadSection from "./elements/HeadSection";
import Cardtoken from "./elements/Cardtoken";
import Imagewhat from "../statics/imagenes-Animandas/kamaleont_a2_v1.png";
import Tokenomics from "./elements/Tokenomics";
import Tokenomicard from "./elements/Tokenomicard";

const Activos = ({ id }) => {
  return (
    <>
      <Box
        id={id}
        component="section"
        maxWidth="100%"
        sx={{
          bgcolor: "#020060",
          overflowX: "hidden",
        }}
      >
        <Container
          sx={{
            pt: 6,
            pb: 3,
          }}
          maxWidth="xl"
        >
          <HeadSection ttl="KLT" colorttl="#fff" colorhr="#35D6E7" />

          <Grid
            container
            direction="row"
            sx={{
              mt: "3%",
              mb: {
                xs: "50px",
                sm: "80px",
                md: "100px",
                lg: "150px",
                xl: "200px",
              },
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={7}>
              <Cardtoken />
              <Tokenomics />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="img"
                src={Imagewhat}
                // maxWidth="750px"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "450px",
                    md: "60%",
                    lg: "670px",
                    xl: "750px",
                    display: "inline-block",
                  },
                }}
                alt="token KLT"
                data-aos="flip-right"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Tokenomicard />
    </>
  );
};

export default Activos;
