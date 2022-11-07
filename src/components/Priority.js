import { Fade, Grid, Container, Typography, Box, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Tokenitems from "./elements/Tokenitems";
import iconCloser from "../statics/iconCloser.png";
import Cardinv from "./elements/Cardinv";
import ico1 from "../statics/priority/ico1.png";
import ico2 from "../statics/priority/ico2.png";
import ico3 from "../statics/priority/ico3.png";
import ico4 from "../statics/priority/ico4.png";
import ico5 from "../statics/priority/ico5.png";
import ico6 from "../statics/priority/ico6.png";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "300px", sm: "400px", md: "50%", lg: "50%", xl: "40%" },
  bgcolor: "background.paper",
  outline: "0px solid transparent",
  border: "none",
  borderRadius: "40px",
  px: { xs: 3, sm: 3, md: 5 },
};

const listPriority = [
  {
    title: "Chains",
    img: ico1,
    content:
      "A blockchain simply put, is a network upon which information is stored. Therefore, many different blockchain may exist where different information is stored and upon which different uses and applications are created. Blockchains may be public, private or hybrid, have different security protocols and seek to resolve different problems. The following chart shows how dominance of principal blockchains have decreased as many others acquire market share. \nExamples of different blockchains include Bitcoin, Ethereum, IBM, Hyperledger.",
  },
  {
    title: "web3.0",
    img: ico2,
    content:
      "Also known as web3 is basically a new way of building businesses in a decentralized manner which is only possible thanks to blockchain technology. This presents important improvements to the prior version referred to as web2, improvements that include more transparency, direct interaction, co - ownership, better alignment of stakeholder’s interests, etc. Web 3.0 is one of the most promising and fastest growing sub - categories in the blockchain ecosystem and an important investment focus for KLT.",
  },
  {
    title: "Defi",
    img: ico3,
    content:
      "Is the a breviature for decentralized finance and refers to the financial ecosystem built on blockchain technology. The main characteristic is that its users themselves exchange (supply and demand) financial assets and services directly amongst themselves, without intermediaries, to use as an investment or financing mechanism. This results in more efficient financial solutions available to all.",
  },
];

const listStrategy = [
  {
    title: "Dexes",
    img: ico5,
    content:
      "Decentralized exchanges, also known as DEX are digital platforms that operate as traditional exchanges within the blockchain ecosystem. Contrary to traditional exchanges that are operated by organizations, DEX’s are operated by “smart contracts” or self - executing contracts that act as the exchanges framework and cannot be altered, providing more transparency, security and cost efficient than traditional exchanges.",
  },
  {
    title: "Oracles",
    img: ico6,
    content:
      "protocols that connect the exterior world (off - chain) with the blockchain ecosystem (on - chain). These projects are becoming widely popular amongst traditional companies that wish to secu re their information in blockchains, needing technological bridges or oracles to connect from off - chain to on - chain.",
  },
];

const Priority = ({ id }) => {
  const [iSopenModal, setISopenModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});
  function openModal(element, index) {
    console.log(element);
    setISopenModal(true);
    setInfoModal(element);
  }
  return (
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
      }}
    >
      <Container
        id={id}
        sx={{
          pt: "3%",
          pb: "3%",

          paddingY: { xs: "30px", md: "30px", lg: "60px" },
        }}
        maxWidth="xl"
        data-aos="fade-up"
      >
        <Grid container sx={{ mt: "40px" }} spacing={{ md: 6 }}>
          <Grid item zeroMinWidth xs={12} md={6}>
            <Typography
              sx={{
                color: "#020060",
                fontWeight: "900",
                textAlign: "center",
                textTransform: "Uppercase",
              }}
            >
              Priority
            </Typography>
            <hr className="hr-items" />
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                // margin:'5px',
                flexWrap: "wrap",
              }}
            >
              {listPriority.map((content, i) => (
                <Box
                  component="div"
                  sx={{
                    flex: {
                      xs: "0 0 48%",
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

          <Grid item zeroMinWidth xs={12} md={6}>
            <Typography
              sx={{
                color: "#020060",
                fontWeight: "900",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Strategy
            </Typography>
            <hr className="hr-items" />

            <Box
              component="div"
              sx={{
                display: "flex",
                // justifyContent: "center",
                justifyContent: {
                  xs: "space-between",
                  sm: "space-around",
                  md: "space-around",
                  lg: "center",
                },
                // marginX:'5px',
                flexWrap: "wrap",
              }}
            >
              {listStrategy.map((content, i) => (
                <Box
                  component="div"
                  sx={{
                    flex: {
                      xs: "0 0 48%",
                      sm: "0 0 180px",
                      md: "0 0 180px",
                      lg: "0 0 180px",
                    },
                    marginX: { xs: "0px", md: "1%", lg: "3%" },
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
          <Box
            component="div"
            sx={{
              marginY: "50px",
              marginX: "auto",
            }}
          >
            <Cardinv
              titulo="Exploratory"
              icon={ico4}
              text="Although priority and strategic types of investments will take up much of KLTs attention, the following blockchain economy sub-sectors deserve minimum attention and follow-up in search for specific opportunities: Cross chain; bridge; payments; privacy; staking and gaming."
              page="/howtoinvest"
            />
          </Box>
        </Grid>

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
      </Container>
    </Box>
  );
};

export default Priority;
