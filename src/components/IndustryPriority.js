import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../statics/howtoinvest/Frame1.png";
import img2 from "../statics/howtoinvest/Frame2.png";
import img3 from "../statics/howtoinvest/Frame3.png";

let elements = [
  {
    title: "Priority",
    description:
      "Projects that are part of high growth potential industries where KLT team has high levels of expertise and therefore will concentrate most of the resources.",
    imagen: img1,
    delay: "250",
  },
  {
    title: "Strategy",
    description:
      "Projects that are part of an emerging industry with high potential growth where KLT will take advantage of the opportunities with secondary resources.",
    imagen: img2,
    delay: "500",
  },
  {
    title: "Exploratory",
    description:
      "Projects in industries that are worth exploring and will use few resources.",
    imagen: img3,
    delay: "1000",
  },
];

function IndustryPriority({ id }) {
  return (
    <>
      <Container
        id={id}
        maxWidth="100%"
        sx={{
          backgroundImage:
            "linear-gradient(to right, rgba(1, 0, 88, 1), rgba(46, 157, 254, 1))",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: { xs: "0px", lg: "10px 0px 100px 100px" },
            paddingY: { xs: "30px", md: "30px", lg: "60px" },
          }}
        >
          <Box Component="div">
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                // marginY: "20px",
              }}
            >
              INDUSTRY PRIORITY
            </Typography>
            <Box sx={{ margin: "10px 0px" }}>
              <hr className="hr-barra" />
            </Box>
          </Box>

          <Grid
            container
            direction="row"
            justifyContent={{ md: "flex-start", lg: "center" }}
            alignItems="center"
          >
            {elements.map((element) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  marginTop: "80px",
                }}
                data-aos="fade-up"
                data-aos-delay={element.delay}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: { md: "flex-start", lg: "center" },
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box component="div">
                    <Box
                      component="img"
                      src={element.imagen}
                      sx={{
                        width: "130px",
                        display: "block",
                        padding: "10px",
                      }}
                    />
                  </Box>
                  <Box component="div">
                    <Box
                      component="div"
                      sx={{
                        padding: "10px",
                      }}
                    >
                      <Box
                        component="h4"
                        sx={{
                          fontSize: "22px",
                          fontStyle: "normal",
                          marginY: "5px",
                          color: "#fff",
                          fontWeight: "900",
                        }}
                      >
                        {element.title}
                      </Box>
                      <hr className="hr-icons" />
                      <Typography
                        component="p"
                        sx={{
                          color: "#fff",
                          fontSize: "16px",
                          textAlign: "justify",
                        }}
                      >
                        {element.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default IndustryPriority;
