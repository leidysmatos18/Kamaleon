import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import img from "../statics/imagenes-Animandas/kamaleont_a9_v1.png";

function OurSolution({ id }) {
  return (
    <Box sx={{ background: "#020060" }}>
      <Container
        id={id}
        sx={{
          pb: 10,
          color: "#fff",
        }}
        maxWidth="xl"
      >
        {/* TITLE */}
        <Box component="div">
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "32px",
              marginBottom: "20px",
              paddingTop: "42px",
            }}
          >
            OUR SOLUTION
          </Typography>
          <Box sx={{ margin: "10px 0px" }}>
            <hr className="hr-barra" />
          </Box>
        </Box>
        {/*BODY*/}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography
              component="p"
              sx={{ marginY: "20px", textAlign: "justify" }}
            >
              Kamaleont is a innovative investment company that specializes in
              blockchain economy assets. We make investing in the crypto space
              simple, accessible, professional, and trustworthy, providing a
              holistic solution for both beginner and experienced investors.
            </Typography>
            <Typography
              component="p"
              sx={{ marginY: "20px", textAlign: "justify" }}
            >
              Kamaleont has been built based on blockchain technology which
              implies indispensable advantages for the company and its
              investors, including transparency, cost efficiency, immutability,
              automatization of processes, and liquidity, amongst others.
            </Typography>

            <Box component="div">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "32px",
                  marginY: "20px",
                  paddingTop: "42px",
                }}
              >
                OUR VISION
              </Typography>
              <Box sx={{ margin: "10px 0px" }}>
                <hr className="hr-icons" />
              </Box>
            </Box>

            <Typography
              component="p"
              sx={{ marginY: "20px", textAlign: "justify" }}
            >
              To become a leading international blockchain economy investment
              company, that provides simplified investing and superior
              mid/long-term returns.
            </Typography>

            <Box component="div">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "32px",
                  marginY: "20px",
                  paddingTop: "42px",
                }}
              >
                OUR MODEL
              </Typography>
              <Box sx={{ margin: "10px 0px" }}>
                <hr className="hr-icons" />
              </Box>
            </Box>

            <Typography
              component="p"
              sx={{ marginY: "20px", textAlign: "justify" }}
            >
              As a decentralized platform, investors are invited to participate
              as fractional owners of Kamaleont company, therefore being a part
              of all future returns generated. To achieve this, Kamaleont has
              been tokenized, meaning that a definite number of tokens have been
              created to represent ownership of the company. Investors will
              acquire Kamaleont Tokens (KLT) which are equivalent to % property
              of the company and entitles that investor to its % of dividends.
            </Typography>

            <Typography
              component="p"
              sx={{ marginY: "20px", textAlign: "justify" }}
            >
              Kamaleont will structure specific investment vehicles based on
              expert team analysis, advanced technological support, and
              innovative business model structures (smart contract based), where
              Kamaleont will invest directly. Our first investment vehicle is
              Kamaleont Portafolio (KP), that targets added value opportunities
              in the blockchain economy (please see investment strategy for
              details).
            </Typography>

            <Typography
              component="p"
              sx={{ marginY: "20px", textAlign: "justify" }}
            >
              To recognize long term investors and increase value to the
              company, KLT buy or sell transactions will be taxed by 9%, all of
              which will be reinvested in the project: 5pp invested in KP, 3pp
              back to investors (liquidity pool, dividends and burns) and 1pp
              for project operations.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={img}
              sx={{
                display: "block",
                width: { xs: "60%", md: "80%" },
                margin: "auto",
              }}
              data-aos="flip-right"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OurSolution;
