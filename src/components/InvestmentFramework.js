import { Container, Grid, Typography, Box } from "@mui/material";
import imagen1 from "../statics/imagenes-Animandas/kamaleont_a5_v1.png";

function InvestmentFramework({ id }) {
  return (
    <>
      <Container maxWidth="100%" id={id}>
        <Container
          maxWidth="xl"
          sx={{
            paddingY: { xs: "30px", md: "30px", lg: "60px" },
          }}
        >
          <Grid
            container
            sx={{
              marginTop: { xs: "60px" },
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
            justifyContent="center"
            alignItems="center"
          >
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
                src={imagen1}
                sx={{
                  width: { xs: "100%", sm: "80%" },
                  display: "block",
                  margin: "auto",
                }}
                data-aos="flip-left"
                data-aos-duration="2000"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Typography
                component="h2"
                sx={{
                  color: "botonHeader.main",
                  fontSize: { xs: "27px", lg: "32px" },
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                INVESTMENT FRAMEWORK
              </Typography>
              <Box sx={{ margin: "10px 0px" }}>
                <hr className="hr-icons" />
              </Box>
              <Typography
                component="p"
                sx={{ marginY: "20px", textAlign: "justify" }}
              >
                As blockchain technology progresses, new projects arise and
                investor adoption increases, Kamaleont will be in the forefront
                of crypto investing based on a clear and focused investment
                strategy, while still allowing enough flexibility to address the
                ever-changing ecosystem.
              </Typography>
              <Typography
                component="p"
                sx={{ marginY: "20px", textAlign: "justify" }}
              >
                Our approach relies on a cross-strategy portfolio between
                investment maturity (risk management) and industry
                prioritization for each investment vehicle.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default InvestmentFramework;
