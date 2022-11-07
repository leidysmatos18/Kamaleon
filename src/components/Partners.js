import { Modal, Fade, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import iconCloser from "../statics/iconCloser.png";
import Backdrop from "@mui/material/Backdrop";

import avatar0 from "../statics/partners/mit.png";
import avatar1 from "../statics/partners/CGCONSULT.png";
import avatar2 from "../statics/partners/logoCoinstore.png";
import avatar3 from "../statics/partners/partner4.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "300px", sm: "400px", md: "50%" },
  bgcolor: "background.paper",
  border: "none",
  outline: "0px solid transparent",
  borderRadius: "40px",
  px: { xs: 3, sm: 3, md: 5 },
};

const listTypografy = {
  title: "PARTNERS",
  avatar: [
    {
      img: avatar0,
      nombre: `Mit Software`,
      descripcion: [
        `MiT Software will be your perfect ally , we have a solid base in terms of the tokenization of both fungible and non fungible asstes. \nMiT Software helps clients explore all aspects of blockchain and build custom solutions designed to deliver value. `,
      ],
      link: "https://www.mitsoftware.com/",
    },
    {
      img: avatar1,
      nombre: `CG CONSULT`,
      descripcion: [
        `CG CONSULT, is a firm whose main orientation is to provide Tax and Accounting services to Companies and Individuals, with an emphasis on Tax Consulting and Accounting Outsourcing. The firm was born as an organization that intends to maintain the culture and modality of personalized professional advice to its clients, through the permanent contact of the firm's professionals with each of the clients in the portfolio, trying to interpret their needs and anticipate the permanent requirements of the market in terms of particularly tax matters, through a proactive work culture that minimizes the business risks of each company, all through practical and executive responses and solutions, with reaction times according to the new and permanent needs of the market.`,
      ],
      link: "https://www.cgconsult.cl/",
    },
    {
      img: avatar2,
      nombre: `COINSTORE`,
      descripcion: [
        `Centralized Cryptocurrencies Exchange
        "First Stop for Popular Crypto"`,
      ],
      link: "https://www.coinstore.com",
    },
    {
      img: avatar3,
      nombre: `CRYPTOSTARK`,
      descripcion: [
        `CryptoStark SPA is a Chilean company with more than 2 years in the market, a verified merchant in Binance and specialized in buying and selling digital assets such as KLT, USDT and BTC, among many others, to people and companies through the P2P system. After more than 100 btc traded, it is a company dedicated to learning and understanding its clients and collaborators in the crypto world.`,
      ],
      link: "",
    },
  ],
};
const Partners = () => {
  const [iSopenModal, setISopenModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  function openModal(element, index) {
    console.log(element);
    setISopenModal(true);
    setInfoModal(element);
  }

  return (
    <Box
      component="section"
      maxWidth="100%"
      sx={{
        margin: "auto",
        padding: "10px",
        background: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container Component="div" maxWidth="xl">
        {/* TITLE */}
        <Box Component="div">
          <Typography
            sx={{
              color: "botonHeader.main",
              fontWeight: "bold",
              fontSize: "20px",
              marginY: "20px",
            }}
          >
            {listTypografy.title}
          </Typography>
          <Box sx={{ margin: "10px 0px" }}>
            <hr className="hr-barra" />
          </Box>
        </Box>

        {/* content */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* card */}
          {listTypografy.avatar.map((e, i) => (
            <Box
              component="div"
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginY: "50px",
                // padding:'10px',
                maxWidth: "250px",
                minWidth: "200px",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
              data-aos="fade-right"
              onClick={() => {
                openModal(e, i);
              }}
            >
              {/* card head */}
              <Box
                component="div"
                sx={
                  {
                    // position:'relative',
                    // width: '100%',
                  }
                }
              >
                <Box sx={{ margin: "auto" }}>
                  <Box
                    component="img"
                    alt="Remy Sharp"
                    src={e.img}
                    sx={{
                      display: "block",
                      width: "100%",
                      maxWidth: "210px",
                      height: "auto",
                      border: "14px solid #dee6f3",
                      boxShadow: "0px 0px 1px 1px #000000",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              </Box>
              {/* card body */}
              <Box
                component="div"
                sx={{
                  // width:'100%',
                  textAlign: "center",
                  minHeight: "100px",
                  minHeight: "130px",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    color: "botonHeader.main",
                    fontWeight: "bold",
                    fontSize: "24px",
                    textAlign: "center",
                  }}
                >
                  {e.nombre}
                </Typography>
              </Box>
            </Box>
          ))}
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
                flexDirection: { xs: "column", sm: "column", md: "row" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginY: "30px",
                padding: { xs: "0px", sm: "20px" },
                cursor: "pointer",
                width: "100%",
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
                  width: "75%",
                  maxWidth: { md: "218px", lg: "218px" },
                  height: "auto",
                  border: "1px solid black",
                  borderRadius: "50%",
                }}
              />
              {/* card body */}
              <Box
                component="div"
                sx={{
                  textAlign: { xs: "center", sm: "left", md: "left" },
                  width: "100%",
                  marginX: "20px",
                  // background:'red'
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    color: "botonHeader.main",
                    fontWeight: "bold",
                    fontSize: "27px",
                  }}
                >
                  {infoModal.nombre}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    color: "botonBanner.main",
                    fontWeight: "bold",
                    fontSize: "15px",
                    // marginTop:'0px'
                  }}
                >
                  {infoModal.cargo}
                </Typography>

                {infoModal?.descripcion?.map((e, i) => (
                  <Typography
                    key={i}
                    component="p"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      // marginTop:'0px'
                      textAlign: " justify",
                    }}
                  >
                    {e}
                  </Typography>
                ))}
                <Box
                  component="a"
                  href={infoModal.link}
                  target="_blank"
                  sx={{
                    marginY: "10px",
                  }}
                >
                  {infoModal.link}
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Partners;
