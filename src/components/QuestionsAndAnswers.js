import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, breakpoints, Container } from "@mui/system";
import { Grid } from "@mui/material";
import caja from "../statics/imagenes-Animandas/kamaleont_a3_v1.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "10px",
  margin: "10px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowDownwardIcon
        sx={{
          fontSize: "25px",
          padding: "12.5px",
          color: "botonHeader.main",
          backgroundColor: "secondary.main",
          borderRadius: "10px",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  paddingRight: "0px",
  "& .MuiAccordionSummary-expandIconWrapper": {
    borderRadius: "10px",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {},
  "& .MuiAccordionSummary-content": {
    margin: "0px",
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function QuestionsAndAnswers({ id }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let ListItem = [
    {
      title: "Why invest in KLT vs a traditional fund?",
      description: `Investing in KLT means buying company equity, which blockchain allows you to both benefit from Kamaleont’s operation while you remain a holder and liquidate your investment anytime you want. Furthermore, Kamaleont’s structure aligns incentives for Kamaleont’s team and investors because both are rewarded for Kamaleont’s transactions and through achieving a higher value of the company. \n\nMeanwhile, the investment in a traditional fund is not an equity investment in the firm running the fund, and it is not necessarily liquid, getting benefit only from the assets that make up the fund, which is managed by managers motivated by commissions that could eventually generate an incentive misalignment.`,
    },
    {
      title: "Where is my money invested in?",
      description: `At Kamaleont we are specialists in investments related to the blockchain market and therefore, money is invested in different markets within this ecosystem under the strategy described in the whitepaper or Investment tab of the website.`,
    },
    {
      title: "What is the KLT project about?",
      description: `Kamaleont is a tokenized investment company on the Binance Smart Chain that specializes in investing within the blockchain market to simplify access to this ecosystem for people who want to actively or passively invest in decentralized finance but do not have the time and/or the necessary knowledge to do so.`,
    },
    {
      title: "What is the opportunity?",
      description: `Today the Blockchain market shows to be a small global fraction of assets under management (AUM) equivalent to approximately 0.2%. The opportunity lies on the high growth trend shown by the blockchain market in recent years, trends that when projected are even more promising in the long term, generating opportunities for both investors and asset managers.`,
    },
    {
      title: "What is the investment period?",
      description: `Kamaleont encourages a long-term investment period since accessing today a % share of the company implies investing on this start-up almost at its foundation. At the same time, our holders benefit not only of KLT’s valuation, but also of passive income, receiving KLT tokens for every transaction. The longer the investment period, the more passive KLT tokens our shareholders receive. Under this scenario, we expect best results for long-term investors because the company’s development, investment’s success, client growth, and all different milestones that will add value to our company and generate higher transactions will not be done from one day to the next.\n\n The way transaction volume works to recognize long-term investors and add value to the company is through taxing each KLT token transaction by 9%, where 6% is directly reinvested in the project’s operation, more specifically in the Kamaleont Portfolio, company development, and Reserves; while the remaining 3% is returned to investors through Burning, liquidity, and KLT passive income. For more details on how this works please see our White Paper.`,
    },
    {
      title: "What is the investment format?",
      description: `KLT can be transacted through the Decentralized Exchange Pancake Swap by swapping either USDT or BNB and storing the obtained tokens in a Decentralized Wallet such as Metamask. Please visit our roadmap for more information about operating through Centralized Exchanges.`,
    },
    {
      title: "Is the KLT inflationary?",
      description: `No, in fact, on the contrary. The KLT Token is DEFLATIONARY, since unlike currencies such as the dollar that are subject to supply increases due to fiat money printing, our model involves a BURN OF TOKENS in every transaction, meaning that the total initial circulating supply (and max supply) of 10,000,000,000 KLT Tokens is reduced everytime someone buys, sells, or transfers KLT tokens, lowering the circulating supply and, thus, a deflation effect that promotes a benefit for the value of the company because demand is unaffected while supply constantly reduces.`,
    },
  ];
  return (
    <Box
      id={id}
      sx={{
        backgroundImage: "linear-gradient(to right, #020061,#4340e3, #0f0cb3)",
        padding: { lg: " 60px", md: "30px", xs: "10px" },
      }}
    >
      <Grid
        container
        spacing={2}
        columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
      >
        <Grid item xs={1} sm={1} md={1} lg={1} data-aos="fade-right">
          <Box
            component="h2"
            sx={{
              textAlign: "left",
              color: "#fff",
              fontSize: "2rem",
              padding: "0px 13px",
            }}
          >
            Frequently Asked Questions and Answers
          </Box>
          {ListItem.map((item, i) => (
            <Accordion
              expanded={expanded === i}
              onChange={handleChange(i)}
              key={i}
              sx={{
                transform: "scale(.94)",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                // sx={{alignItems:' flex-start'}}
              >
                <Typography
                  sx={{ color: "botonHeader.main", fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    textAlign: "justify",
                  }}
                >
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src={caja}
            sx={{
              width: "90%",
              maxWidth: "700px",
              maxHeight: "700px",
              display: "block",
              margin: "auto",
            }}
            data-aos="fade-up"
          />
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
}
