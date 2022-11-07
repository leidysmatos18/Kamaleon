import { Fade, Grid, Modal, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import img1 from "../statics/porquekilt/R2.png";
import img2 from "../statics/imagenes-Animandas/kamaleont_a8_v1.png";
import frame1 from "../statics/porquekilt/Frame1.png";
import frame2 from "../statics/porquekilt/Frame2.png";
import frame3 from "../statics/porquekilt/Frame3.png";
import frame4 from "../statics/porquekilt/Frame4.png";
import frame5 from "../statics/porquekilt/Frame5.png";
import iconCloser from "../statics/iconCloser.png";
import Backdrop from "@mui/material/Backdrop";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Tokenitems from "./elements/Tokenitems";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "300px", sm: "400px", md: "50%", lg: "50%", xl: "40%" },
  bgcolor: "background.paper",
  border: "none",
  outline: '0px solid transparent',
  borderRadius: "40px",
  px: { xs: 3, sm: 3, md: 5 },
};

const listToRender = [
  {
    title: "Understanding blockchain",
    img: frame1,
    content:
      "Blockchain technology is both new and complicated. It requires some level of knowledge that due to the novelty of the technology and its applications, most investors have not gotten around to understanding. There is a need to make blockchain investments simple and allow hundreds of potential investors to access this growing asset class.",
  },
  {
    title: "Lack of expertise and dedicated team",
    img: frame2,
    content:
      "To really take advantage of the investment opportunities available in the blockchain economy, a dedicated, experienced, and talented team of analysts is needed. The fast-paced change in applications and ever-growing industries that are adopting these technologies, require expert investors to safely seek profitable investments, time and resources that new investors to this space rarely have access to.",
  },
  {
    title: "Liquidity and Intermediary Fees",
    img: frame3,
    content:
      "The more liquid investments are, the more attractive they become for investors, as these can be sold at any given time. Private investment funds set an investing timeframe that investors must commit to, disallowing uninvesting during that timeframe, no matter what the investors needs are, and therefore preventing many that cannot commit to set timeframes from participating in these funds.\r\n Although public funds do trade publicly and are more liquid, they still require a certain level of sophistication and/or investor knowledge that not all potential investors have.\r\nIn any case, investment funds charge a number of fees that affect profitability and access for investors.",
  },
  {
    title: "Ticket size",
    img: frame4,
    content:
      "For small investors, the available alternatives to invest in traditional funds are scarce. Most investment funds have both a minimum ticket per investor that is usually high and setup costs that make investing small amounts unviable. ",
  },
  {
    title: "Geopolitical barriers",
    img: frame5,
    content:
      "Investors want to be able to invest in the best opportunities wherever they present themselves with no limitation to geographical barriers. Currently, investment platforms are not completely flexible with reagards to investing in varied jurisdictions.",
  },
];

function PorqueKilt({ id }) {
  const [iSopenModal, setISopenModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  function openModal(element, index) {
    console.log(element);
    setISopenModal(true);
    setInfoModal(element);
  }

  return (
    <>
      <Container
        id={id}
        sx={{
          pb: 10,
        }}
        maxWidth="xl"
      >
        <Box
          component="div"
          sx={{
            pb: 10,
          }}
          maxWidth="xl"
        >
          <Grid container alignItems="center" justifyContent="space-evenly">
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              data-aos="fade-right"
            >
              <Typography
                component="h2"
                sx={{
                  color: "botonHeader.main",
                  fontSize: "32px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  marginTop: { xs: "40px", md: "0px" },
                }}
              >
                DESCRIPTION OF THE PROBLEM
              </Typography>
              <Box sx={{ margin: "10px 0px" }}>
                <hr className="hr-icons" />
              </Box>
              <Typography
                component="p"
                sx={{ marginY: "20px", textAlign: "justify" }}
              >
                There is an increasing interest in investors for blockchain
                technology investments as many new projects are being created
                daily. Still, for many traditional investors, blockchain
                technology is complicated both to understand and to invest in.
              </Typography>
              <Typography
                component="p"
                sx={{ marginY: "20px", textAlign: "justify" }}
              >
                Also, traditional investing via private or public investment
                funds in blockchain technology presents a series of difficulties
                that Kamaleont is addressing and that include the following.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={img2}
                sx={{
                  width: "50%",
                }}
                data-aos="flip-right"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Box
              component="div"
              sx={{
                marginY: 5,
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: { sm: "2em", md: "3.5em", lg: "5em" },
              }}
            >
              {listToRender.map((content, i) => (
                <Box
                  component="div"
                  sx={{
                    flex: {
                      xs: "0 0 90%",
                      sm: "0 0 180px",
                      md: "0 0 180px",
                      lg: "0 0 180px",
                    },
                    cursor: "pointer",
                  }}
                  key={i}
                  onClick={() => {
                    openModal(content, i);
                  }}
                >
                  <Tokenitems
                    img={content.img}
                    text={content.title}
                    alt={content.title}
                    icon={2}
                    link="#"
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Box>
      </Container>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={iSopenModal}
        onClose={() => setISopenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={iSopenModal}>
          <Box sx={style}>
            <Box
              component="div"
              sx={{
                flexDirection: { xs: "column", sm: "column", md: "column" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginY: "20px",
                paddingX: { xs: "0px", sm: "20px" },
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={iconCloser}
                sx={{
                  position: "absolute",
                  top: "-12px",
                  right: "-11px",
                }}
                onClick={() => setISopenModal(false)}
              />
              {/* card head */}
              <Box
                component="img"
                alt="Remy Sharp"
                src={infoModal.img}
                sx={{
                  display: "block",
                  height: "auto",
                }}
              />
              {/* card body */}
              <Box
                component="div"
                sx={{
                  textAlign: { xs: "center", sm: "center", md: "center" },
                  width: "100%",
                  // marginX: '20px',
                  // background:'red'
                }}
              >
                <Box component="div">
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "25px",
                        sm: "25px",
                        md: "27px",
                        lg: "27px",
                        xl: "30px",
                      },
                      marginBottom: "20px",
                      marginX: "auto",
                      textAlign: "center",
                      paddingTop: {
                        xs: "20px",
                        sm: "25px",
                        md: "25px",
                        lg: "30px",
                        xl: "42px",
                      },
                      color: "botonHeader.main",
                    }}
                  >
                    {infoModal.title}
                  </Typography>
                  <Box sx={{ margin: { xs: "5px 0px", md: "10px 0px" } }}>
                    <hr className="hr-items" />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        md: "16px",
                        lg: "16px",
                        xl: "18px",
                      },
                      // marginBottom: "20px",
                      marginX: "auto",
                      textAlign: "justify",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {infoModal.content}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default PorqueKilt;
