import { Box, Container, Grid, Typography } from "@mui/material";
import grafica1 from "../statics/porquekilt/grafica1.png";
import grafica2 from "../statics/porquekilt/grafica2.png";
function MarketOverView({ id }) {
  return (
    <Box
      id={id}
      sx={{
        background: "#F5F5F5",
      }}
    >
      <Container
        sx={{
          pb: 10,
          color: "botonHeader.main",
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
              marginX: "auto",
              textAlign: "center",
              paddingTop: "42px",
            }}
            data-aos="fade-right"
          >
            MARKET OVERVIEW
          </Typography>
          <Box sx={{ margin: "10px 0px" }}>
            <hr className="hr-items" />
          </Box>
          <Typography
            component="p"
            sx={{ marginY: "20px", textAlign: "center", color: "#000" }}
          >
            Although investments in blockchain based projects are still a small
            portion of total Assets under Management worldwide, growth in this
            sector has been substantially greater than average, presenting
            itself as a profitable investment opportunity for upcoming years.
          </Typography>
        </Box>

        {/* CARD */}
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <Box
              sx={{
                background: "#fff",
                padding: "25px",
                borderRadius: "50px",
                minHeight: "750px",
              }}
            >
              <Box
                component="img"
                src={grafica1}
                sx={{
                  display: "block",
                  width: { xs: "80%", md: "90%" },
                  margin: "auto",
                }}
              />
              <Box component="div">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "32px",
                    marginBottom: "20px",
                    marginX: "auto",
                    textAlign: "center",
                    paddingTop: "42px",
                  }}
                >
                  MARKET SIZE
                </Typography>
                <Box sx={{ margin: "10px 0px" }}>
                  <hr className="hr-items" />
                </Box>
                <Typography
                  component="p"
                  sx={{ marginY: "20px", textAlign: "justify", color: "#000" }}
                >
                  PwC anticipates that global Assets Under Management (AuM) will
                  almost double in size by 2025, from $84.9 trillion in 2016 to
                  $145.4 trillion by 2025. Investments through asset managers
                  continue to grow steadily providing access, experience, and
                  track record to investors around the world.
                </Typography>
                <Typography
                  component="p"
                  sx={{ marginY: "20px", textAlign: "justify", color: "#000" }}
                >
                  Acording to Statista, total AuM for 2020 stood at a record
                  high $103 trillion, demonstrating an estimated Compound Annual
                  Growth Rate (CAGR) of 7.8% from 2002 to 2020.
                </Typography>
                <Typography
                  component="p"
                  sx={{ marginY: "20px", textAlign: "justify", color: "#000" }}
                >
                  Investing through experienced, dedicated and skilled asset
                  managers continues to be a growing and profitable alternative
                  for all types of assets worldwide.{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <Box
              sx={{
                background: "#fff",
                padding: "25px",
                borderRadius: "50px",
                minHeight: "750px",
              }}
            >
              <Box
                component="img"
                src={grafica2}
                sx={{
                  display: "block",
                  width: { xs: "80%", md: "90%" },
                  margin: "auto",
                }}
              />
              <Box component="div">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "32px",
                    marginBottom: "20px",
                    marginX: "auto",
                    textAlign: "center",
                    paddingTop: "42px",
                  }}
                >
                  Blockchain Economy Trends and Growth
                </Typography>
                <Box sx={{ margin: "10px 0px" }}>
                  <hr className="hr-items" />
                </Box>
                <Typography
                  component="p"
                  sx={{ marginY: "20px", textAlign: "justify", color: "#000" }}
                >
                  Blockchain economy market size is valued at $1.46 tr illion
                  for 2020 and 2.20 tr illion for 2021, representing merely a
                  0.2% of total AuM. Growth has been exponential: 650% in 2017,
                  - 82.9% in 2018, 53.9% in 2019 , 357% in 2020 and 187.7% in
                  202 1 . On the funding side, venture capital has poured over
                  $30B into crypto investments during 2021, which is more than
                  the total amount raised in all prior years combined. There are
                  over 65 crypto unicorns out of which 40 were created during
                  2021. Not only is this economy growing strong, but it’s
                  occurring at a staggering growth rate.
                </Typography>
                <Typography
                  component="p"
                  sx={{ marginY: "20px", textAlign: "justify", color: "#000" }}
                >
                  According to The Insight Partners, blockchain market size will
                  be worth $228 billion globally by 2028, at a 72% CAGR.{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box component="div">
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "32px",
              marginBottom: "20px",
              marginX: "auto",
              textAlign: "center",
              paddingTop: "42px",
            }}
          >
            OPPORTUNITY
          </Typography>
          <Box sx={{ margin: "10px 0px" }}>
            <hr className="hr-items" />
          </Box>
          <Typography
            component="p"
            sx={{ marginY: "20px", textAlign: "center", color: "#000" }}
          >
            Considering the blockchain economy is still a fraction of total
            global assets under management (0.2%), and that growth is projected
            at a high rate (7x vs total asset management CAGR), the opportunity
            both for investor and blockchain asset managers is substantial.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default MarketOverView;
