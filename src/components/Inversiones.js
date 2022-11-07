import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import HeadSection from "./elements/HeadSection";
import R1 from "../statics/cards/R1.png";
import R2 from "../statics/cards/R2.png";
import R3 from "../statics/cards/R3.png";
import pancakes from "../statics/pancakes.png";
import coinstore from "../statics/logoCoinstoreIconSmall.png";
import Asset13 from "../statics/Asset13.png";
import Asset12 from "../statics/Asset12.png";
import i18n from "./i18n";
import Cardinv from "./elements/Cardinv";
import BloqueLinear from "./elements/BloqueLinear";

const Inversiones = ({ id, redirecionar, PAGE_INVEST }) => {
  const datosCards = [
    {
      titulo: "Invesment STRATEGY",
      icon: R1,
      text: i18n.t("textinv1"),
      link: "#",
      redire: "banner",
    },
    // {
    //   titulo: "Earsy Stage",
    //   icon: R2,
    //   text: i18n.t("textinv2"),
    //   link: "#",
    // },
    {
      titulo: "Kamaleont Portfolio",
      icon: R3,
      text: i18n.t("textinv3"),
      link: "#",
      redire: "/howtoinvest/KamaleontPorFolio",
    },
  ];

  const botonBuy = [
    {
      title:'BUY',
      image: pancakes,
      alt:"buy with pancakes",
      href:"https://pancakeswap.finance/swap?outputCurrency=0xF87940f78F2f4d99A0c5c22e3fCC21795Cd53245"
    },
    {
      title:'BUY',
      image: coinstore,
      alt:"buy with coinstore",
      href:"https://www.coinstore.com/#/spot/KLTUSDT?lang=en_US"
    },

  ]
  return (
    <>
      <Box
        id={id}
        component="section"
        maxWidth="100%"
        sx={{
          bgcolor: "#fff",
          overflow: "hidden",
        }}
      >
        <Container
          sx={{
            pt: 10,
            pb: 10,
          }}
          maxWidth="xl"
        >
          <HeadSection ttl="Investments" colorttl="#1A1478" colorhr="#35D6E7" />

          <Grid
            container
            sx={{
              justifyContent: "center",
              gap: "20px",
              paddingY: "20px",
            }}
          >
            {datosCards.map((content) => (
              <Cardinv
                titulo={content.titulo}
                icon={content.icon}
                key={content.titulo}
                text={content.text}
                link={content.link}
                redire={content.redire}
                redirecionar={redirecionar}
                PAGE_INVEST={PAGE_INVEST}
              />
            ))}
          </Grid>
          <Grid
            container
            sx={{
              marginY: "20px",
            }}
            data-aos="fade-left"
          >
            <Grid item xs={12} md={12} lg={6} sx={{ padding: "10px" }}>
              <BloqueLinear
                img={Asset13}
                span="Download"
                ttl="White Paper"
                link="Kamaleont-White-Paper-OFICIAL-2.0.pdf"
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6} sx={{ padding: "10px" }}>
              <BloqueLinear
                img={Asset12}
                span="Download"
                ttl="How to invest?"
                link="STEP-BY-STEP-HOW-TO-BUY-AND-SELL-KLT-.pdf"
              />
            </Grid>
          </Grid>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            {
              botonBuy.map(icon => (
                <Button
                  variant="contained"
                  sx={{
                    color: "",
                    background: "#3ae9fc",
                    fontSize: "25px",
                    borderRadius: "25px",
                    padding: "0 30px",
                    marginX:'5px'
                  }}
                >
                  <Box
                    component="a"
                    href= {icon.href}
                    target="_blank"
                    sx={{
                      color: "#020060",
                      fontWeight: "900",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {icon.title}{" "}
                    <Box
                      component="img"
                      src={icon.image}
                      alt={icon.alt}
                      sx={{ marginLeft: "20px" }}
                    />
                  </Box>
                </Button>
              ))
            }
            
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Inversiones;
