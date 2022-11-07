import { Container, Grid, Box, Typography } from "@mui/material";
import Table from "../components/elements/Table";
import img1 from "../statics/imagenes-Animandas/kamaleont_a6_v1.png";
function KamaleontPorFolio({ id }) {
  return (
    <>
      <Container
        maxWidth="100%"
        id={id}
        sx={{
          background: "#F5F5F5",
          padding: "0px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingY: { xs: "30px", md: "30px", lg: "60px" },
          }}
        >
          <Grid container>
            <Grid item lg={6}>
              <Box
                component="img"
                src={img1}
                sx={{
                  width: "80%",
                  display: "block",
                }}
                data-aos="flip-left"
                data-aos-duration="2000"
              />
            </Grid>
            <Grid item lg={6}>
              <Box Component="div">
                <Typography
                  sx={{
                    color: "botonHeader.main",
                    fontWeight: "bold",
                    fontSize: "27px",
                    marginY: "20px",
                  }}
                >
                  KAMALEONT PORTFOLIO
                </Typography>
                <Box sx={{ margin: "10px 0px" }}>
                  <hr className="hr-icons" />
                </Box>
              </Box>
              <Typography
                component="p"
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
                As blockchain technology progresses, new projects arise and
                investor adoption increases, Kamaleont will be in the forefront
                of crypto investing based on a clear and focused investment
                strategy, while still allowing enough flexibility to address the
                ever-changing ecosystem.
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  marginTop: "30px",
                  textAlign: "justify",
                }}
              >
                Our approach relies on a cross-strategy portfolio between
                investment maturity (risk management) and industry
                prioritization for each investment vehicle.
              </Typography>
              <Box
                component="div"
                sx={{
                  marginY: "30px",
                  marginX: "0px",
                }}
              >
                <Table />
              </Box>
              <Typography
                component="p"
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
                At this moment in time, our analysis considers the following
                industry classifications:
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default KamaleontPorFolio;
