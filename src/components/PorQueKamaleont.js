import { Grid, Container, Box, useTheme, Button } from "@mui/material";
import React from "react";
import IconBox from "./elements/IconBox";
import HeadSection from "./elements/HeadSection";
import i18n from "./i18n";

const PorQueKamaleont = ({ id, PAGE_WHYKLT, redirecionar }) => {
  const datosBlocks = [
    {
      titulo: i18n.t("pkttl1"),
      text: i18n.t("pktext1"),
      link: PAGE_WHYKLT,
      ancla: "porquekilt/descripcion",
    },
    {
      titulo: i18n.t("pkttl2"),
      text: i18n.t("pktext2"),
      link: PAGE_WHYKLT,
      ancla: "porquekilt/OurSolution",
    },
    {
      titulo: i18n.t("pkttl3"),
      text: i18n.t("pktext3"),
      link: PAGE_WHYKLT,
      ancla: "porquekilt/MarketOverView",
    },
    {
      titulo: i18n.t("pkttl4"),
      text: i18n.t("pktext4"),
      link: PAGE_WHYKLT,
      ancla: "porquekilt/Adventages",
    },
  ];

  return (
    <>
      <Container
        id={id}
        sx={{
          pt: "5%",
          pb: "5%",
        }}
        maxWidth="xl"
        data-aos="fade-up"
      >
        <HeadSection ttl="Why KLT?" colorttl="#1A1478" colorhr="#35D6E7" />
        <Grid container sx={{ mt: "30px" }} spacing={2}>
          {datosBlocks.map((content, i) => (
            <IconBox
              key={i}
              titulo={content.titulo}
              text={content.text}
              link={content.link}
              ancla={content.ancla}
              redirecionar={redirecionar}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PorQueKamaleont;
