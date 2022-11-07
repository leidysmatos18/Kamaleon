import {
  Stack,
  Button,
  Grid,
  Container,
  useTheme,
  Box,
  Typography,
} from "@mui/material";
import Imagebanner from "../statics/imagenes-Animandas/kamaleont_a1_v3.png";
import ImagebannerConocenos from "../statics/IMG1.png";
import ImagebannerPorquekilt from "../statics/imagenes-Animandas/kamaleont_a7_v1.png";
import ImagebannerHowToInvest from "../statics/imagenes-Animandas/kamaleont_a4_v3.png";
// import ImagebannerHowToInvest from "../statics/howtoinvest/howtoinvestbanner.png";

import NavBar from "./NavBar";
import ParticlesBackground from "./ParticlesBackground";
import useMediaQuery from "@mui/material/useMediaQuery";
import i18n from "./i18n";

const listContentBannerAux = {
  conocenos: {
    title: ["About", "us"],
    description: [
      "We are a team passionate about investments, innovation and technology, founded by Jose Miguel Güell and Pedro Iñiguez on 19/01/2022.  Since then, different labor agents have been incorporated in response to the growth of Kamaleont and that today strengthen our operations in order to deliver better results to our valued community.",
      "We are faithful believers in excellence and how important it is to give even more than 100% in order to deliver the best;  we are different and we contribute in a creative and innovative way;  We believe in the fundamentals of transparency, since it brings trust and, therefore, lasting ties.",
    ],
    imagen: ImagebannerConocenos,
  },
  porquekilt: {
    title: ["Why", "KLT?"],
    description: [
      "Kamaleont has been created to enable access and simplify investing in the blockchain economy. Through its unique investment approach and applied blockchain technology, Kamaleont creates diversified strategic investment vehicles designed for the blockchain economy. Investors participate at a company level, co-owning Kamaleont and profiting from all its revenues and investment profits. By allowing access at a company level, investors avoid investment fees or misaligned interests between fund managers and investors.",
    ],
    imagen: ImagebannerPorquekilt,
  },
  howtoinvest: {
    title: ["Investment", "Strategy"],
    description: [
      "As a company Kamaleont will develop investment vehicles that consolidate a diversified portfolio of blockchain based projects following specific parameters to maximize safety and profitability, while leveraging the team’s on-growing expertise and track-record.",
    ],
    imagen: ImagebannerHowToInvest,
  },
};

export default function BannerPrincipal({
  LinkMenu,
  redirecionar,
  location,
  PAGE_HOME,
  PAGE_ABOUT,
  PAGE_WHYKLT,
  PAGE_INVEST,
  id,
}) {
  const mytheme = useTheme();
  const match = useMediaQuery(mytheme.breakpoints.up("sm"));

  const bannerIsDisplayed = location.pathname === PAGE_HOME;
  const bannerConocenos = location.pathname === PAGE_ABOUT;
  const bannerIsPorqueKilt = location.pathname === PAGE_WHYKLT;
  const bannerHowToInvest = location.pathname === PAGE_INVEST;

  return (
    <>
      {bannerIsDisplayed && (
        <Container maxWidth="100%" className="bannerh" id={id}>
          {/* <ParticlesBackground /> */}
          <Container maxWidth="xl">
            <NavBar
              notMobile={match}
              LinkMenu={LinkMenu}
              redirecionar={redirecionar}
            />
            <Box xl={{ flexGrow: 1 }}>
              <Grid
                container
                direction="row"
                alignItems={match ? "center" : "top"}
                justifyContent={match ? "center" : "top"}
                spacing={1}
                columns={{ xs: 4, md: 12 }}
                sx={{ height: "94vh", boxSizing: "border-box" }}
              >
                <Grid item xs={6}>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: { xs: "49px", sm: "45px", md: "60px" },
                      // color:{xs:'red',sm:'purple',md:'green',lg:'yellow'},
                      lineHeight: { xs: "30px" },
                      fontWeight: "900",
                      color: "#fff",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        lineHeight: { xs: "25px", md: "36px" },
                      }}
                      color="#3ae9fc"
                    >
                      {i18n.t("banertxt1")}
                    </Box>
                    <br />
                    {i18n.t("banertxt2")}
                  </Box>
                  <hr className="hr" />
                  <Typography
                    sx={{
                      marginTop: {
                        xs: "10vw",
                        sm: "10vw",
                        md: "5px",
                        lg: "5px",
                      },
                      marginBottom: "15px",
                      color: "#fff",
                      fontSize: "1.4rem",
                      fontWeight: { xs: 400, md: 100 },
                    }}
                  >
                    {i18n.t("banerdesc")}
                  </Typography>

                  <Stack spacing={1} direction="row">
                    <Button
                      variant="contained"
                      sx={{ borderRadius: "22px", fontWeight: "800" }}
                      color="botonBanner"
                      size="large"
                      onClick={() => redirecionar(PAGE_ABOUT, PAGE_ABOUT)}
                    >
                      {i18n.t("banerbtn")}
                    </Button>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component="img"
                    sx={{
                      height: "auto",
                      width: { xs: "65%", sm: "44%", md: "660px", xl: "660px" },
                      // background:{xs:'pink',sm:'gray',md:'green',lg:'blue',xl:'red'},
                      margin: { xs: "auto", md: "none" },
                      position: {
                        xs: "relative",
                        sm: "absolute",
                        md: "inherit",
                      },
                      top: { xs: "-39px", sm: "120px", md: "50px" },
                      right: { xs: "-10px", sm: "0px" },
                      display: { xs: "block", sm: "block" },
                      pointerEvents: "none",
                    }}
                    alt="banner kamaleont"
                    src={Imagebanner}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Container>
      )}
      {bannerConocenos && (
        <>
          <Grid container id={id}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                background: "#020061",
                textAlign: { xs: "center", sm: "left", md: "left" },
              }}
            >
              <Container maxWidth="100%">
                <Container maxWidth="xl">
                  <NavBar
                    notMobile={match}
                    LinkMenu={LinkMenu}
                    redirecionar={redirecionar}
                  />
                  <Box
                    sx={{
                      marginTop: "75px",
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "60px",
                        color: "#3ae9fc",
                        fontWeight: "bold",
                        lineHeight: ".5",
                      }}
                    >
                      {listContentBannerAux.conocenos.title[0]}
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "60px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {listContentBannerAux.conocenos.title[1]}
                    </Typography>
                  </Box>
                </Container>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={
                {
                  // background: 'purple'
                }
              }
            >
              <Container maxWidth="100%">
                <Container maxWidth="xl">
                  <Box
                    sx={{
                      marginTop: "75px",
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        sx={{
                          paddingBottom: "30px",
                          marginTop: { xs: "", sm: "150px", md: "0px" },
                        }}
                      >
                        {listContentBannerAux?.conocenos?.description?.map(
                          (e, i) => (
                            <Typography
                              component="h2"
                              key={i}
                              sx={{
                                marginBottom: "18px",
                                textAlign: "justify",
                              }}
                            >
                              {e}
                            </Typography>
                          )
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box
                          component="img"
                          src={listContentBannerAux?.conocenos?.imagen}
                          sx={{
                            position: { xs: "relative", sm: "absolute" },
                            // background:{xs:'pink',sm:'gray',md:'green',lg:'blue',xl:'red'},
                            // opacity:'0.5',
                            width: {
                              xs: "300px",
                              sm: "220px",
                              md: "266px",
                              lg: "258px",
                              xl: "270px",
                            },
                            top: {
                              xs: "0",
                              sm: "-297px",
                              md: "-322px",
                              lg: "-316px",
                              xl: "-328px",
                            },
                            left: {
                              xs: "0",
                              sm: "63%",
                              md: "66%",
                              lg: "76%",
                              xl: "75%",
                            },
                            display: "block",
                            margin: { xs: "auto", sm: "left" },
                            pointerEvents: "none",
                          }}
                          data-aos="flip-right"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </Container>
            </Grid>
          </Grid>
        </>
      )}
      {bannerIsPorqueKilt && (
        <>
          <Grid container id={id}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                background: "#020061",
                textAlign: { xs: "center", sm: "left", md: "left" },
              }}
            >
              <Container maxWidth="100%">
                <Container maxWidth="xl">
                  <NavBar
                    notMobile={match}
                    LinkMenu={LinkMenu}
                    redirecionar={redirecionar}
                  />
                  <Box
                    sx={{
                      marginTop: { xs: "70px", sm: "149px" },
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "60px",
                        color: "white",
                        fontWeight: "bold",
                        lineHeight: ".5",
                        display: { xs: "block", md: "inline-block" },
                        marginRight: "10px",
                      }}
                    >
                      {listContentBannerAux.porquekilt.title[0]}
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "60px",
                        color: "#3ae9fc",
                        fontWeight: "bold",
                        display: { xs: "block", md: "inline-block" },
                      }}
                    >
                      {listContentBannerAux.porquekilt.title[1]}
                    </Typography>
                  </Box>
                </Container>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                background: "#F5F5F5",
                marginBottom: { xs: "0", sm: "60px" },
              }}
            >
              <Container maxWidth="100%">
                <Container maxWidth="xl">
                  <Box
                    sx={{
                      marginTop: "75px",
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        sx={{
                          paddingBottom: "30px",
                          // marginTop: { xs: '', sm: '150px', md: '0px' }
                        }}
                      >
                        {listContentBannerAux.porquekilt?.description?.map(
                          (e, i) => (
                            <Typography
                              component="h2"
                              key={i}
                              sx={{
                                marginBottom: "18px",
                                textAlign: "justify",
                              }}
                            >
                              {e}
                            </Typography>
                          )
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box
                          component="img"
                          src={listContentBannerAux?.porquekilt?.imagen}
                          sx={{
                            position: { xs: "relative", sm: "absolute" },
                            // background: { xs: 'pink', sm: 'gray', md: 'green', lg: 'blue', xl: 'red' },
                            width: {
                              xs: "320px",
                              sm: "303px",
                              md: "403px",
                              lg: "524px",
                              xl: "567px",
                            },
                            top: {
                              xs: "0",
                              sm: "-327px",
                              md: "-239px",
                              lg: "-279px",
                              xl: "-322px",
                            },
                            left: {
                              xs: "0",
                              sm: "50%",
                              md: "56%",
                              lg: "56%",
                              xl: "62%",
                            },
                            display: "block",
                            margin: { xs: "auto", sm: "left" },
                          }}
                          data-aos="flip-right"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </Container>
            </Grid>
          </Grid>
        </>
      )}
      {bannerHowToInvest && (
        <>
          <Grid container id={id}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                background: "#020061",
                textAlign: { xs: "center", sm: "left", md: "left" },
              }}
            >
              <Container maxWidth="100%">
                <Container maxWidth="xl">
                  <NavBar
                    notMobile={match}
                    LinkMenu={LinkMenu}
                    redirecionar={redirecionar}
                  />
                  <Box
                    sx={{
                      marginTop: { xs: "70px", sm: "149px" },
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "60px",
                        color: "white",
                        fontWeight: "bold",
                        lineHeight: ".5",
                        display: { xs: "block", md: "inline-block" },
                        marginRight: "10px",
                      }}
                    >
                      {listContentBannerAux.howtoinvest.title[0]}
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "60px",
                        color: "#3ae9fc",
                        fontWeight: "bold",
                        display: { xs: "block", md: "inline-block" },
                      }}
                    >
                      {listContentBannerAux.howtoinvest.title[1]}
                    </Typography>
                  </Box>
                </Container>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                background: "#F5F5F5",
                marginBottom: { xs: "0", sm: "0px" },
                paddingY: { xs: "30px" },
              }}
            >
              <Container maxWidth="100%">
                <Container maxWidth="xl">
                  <Box
                    sx={{
                      marginTop: "75px",
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        sx={{
                          paddingBottom: "30px",
                          // marginTop: { xs: '', sm: '150px', md: '0px' }
                        }}
                      >
                        {listContentBannerAux.howtoinvest?.description?.map(
                          (e, i) => (
                            <Typography
                              component="h2"
                              key={i}
                              sx={{
                                marginBottom: "18px",
                              }}
                            >
                              {e}
                            </Typography>
                          )
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box
                          component="img"
                          src={listContentBannerAux?.howtoinvest?.imagen}
                          sx={{
                            position: { xs: "relative", sm: "absolute" },
                            // background: { xs: 'pink', sm: 'gray', md: 'green', lg: 'blue', xl: 'red' },
                            width: {
                              xs: "310px",
                              sm: "44%",
                              md: "400px",
                              lg: "565px",
                              xl: "600px",
                            },
                            top: {
                              xs: "0",
                              sm: "-317px",
                              md: "-323px",
                              lg: "-384px",
                              xl: "-383px",
                            },
                            left: {
                              xs: "0",
                              sm: "61%",
                              md: "56%",
                              lg: "53%",
                              xl: "62%",
                            },
                            display: "block",
                            margin: { xs: "auto", sm: "left" },
                          }}
                          data-aos="flip-right"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </Container>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
