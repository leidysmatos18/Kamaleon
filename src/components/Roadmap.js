import React from "react";
import { Box, Container, Grid } from "@mui/material";
import HeadCenter from "./elements/HeadCenter";
import Roaditems from "./elements/Roaditems";

const listRoadmap = [
  {
    s: "S2",
    year: "2021",
    dev: "IDEA INCEPTION \nMARKET ANALYSIS\n SMART CONTRACT STRUCTURING\n KAMALEONT PORTFOLIO INVESTMENT",
    capital: "BNB LIQUIDITY\n PRE SEED AND SEED ROUNDS",
  },
  {
    s: "S1",
    year: "2022",
    dev: "OFFICIAL SMART CONTRACT \nKLT LAUNCH \nWHITE PAPER 1.0 \nWEB SITE 1.0 \nTEAM ANNOUNCEMENT \nWHITE PAPER \nVESTING OF BIG HOLDERS \nWEB SITE 2.0 \nPARTNERSHIPS",
    capital:
      "PRE SALE ROUND\n KAMALEONT PORTFOLIO INITIAL INVESTMENT \nKAMALEONT PORTFOLIO START OF BUYBACK & BURN \nUSDT LIQUIDITY",
  },
  {
    s: "S2",
    year: "2022",
    dev: "KLT USER ACCOUNT \nAUDITS \nCOMPANY AT CRYPTOFRIENDLY COUNTRY (cayman islands) 1 KLT = 1 STOCK",
    capital: "KAMALEONT PORTFOLIO GROWTH",
    adoption:
      "FIRST CEX LISTING \nOPENING OF ASIA MARKETS \nMARKETING \nSOCIAL NETWORKS EXPANSION \nPOST ON NEWS CHANNELS \nPRIVATE GROUP FOR KYC HOLDERS \nLISTING ON COINMARKETCAP & COINGECKO \nOPENING OF EUROPEAN MARKETS \nSECOND CEX LISTING",
  },
  {
    s: "S1",
    year: "2023",
    dev: "BLOCKCHAIN FUNDS DEVELOPMENT \nWEBSITE PAYMENT \nWEB UPGRADE TO CONNECT DECENTRALIZED WALLET & USER ACCOUNT",
    capital: "INITIAL FUNDS INVESTORS ROUND \nKAMALEONT PORTFOLIO GROWTH",
    products: "FUNDS: BTC, DEFI AND WEB3 \nCEX REPRESENTATION \nACADEMY",
  },
];
const Roadmap = ({ id }) => {
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
            pb: 10,
          }}
          maxWidth="xl"
        >
          <HeadCenter title="Roadmap" frase="" />
          <Grid container direction="row" sx={{ py: 5 }} data-aos="fade-left">
            {listRoadmap.map((content, i) => (
              <Grid key={i} item xs={12} sm={6} md={6} lg={3}>
                <Roaditems
                  s={content.s}
                  year={content.year}
                  dev={content.dev}
                  capital={content.capital}
                  adoption={content.adoption}
                  products={content.products}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Roadmap;
