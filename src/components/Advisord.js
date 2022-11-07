import { Modal, Fade, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import iconCloser from "../statics/iconCloser.png";
import Backdrop from "@mui/material/Backdrop";
import avatar5 from "../statics/avatars/EQ5.png";
import avatar6 from "../statics/avatars/EQ6.png";
import avatar7 from "../statics/avatars/EQ7.png";
import avatar8 from "../statics/avatars/EQ8.png";
import avatar9 from "../statics/avatars/EQ9.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "300px", sm: "400px", md: "50%" },
  bgcolor: "background.paper",
  border: "none",
  outline: '0px solid transparent',
  whiteSpace: "pre-line",
  borderRadius: "40px",
  px: { xs: 3, sm: 3, md: 5 },
};

const listTypografy = {
  title: "ADVISORS",
  avatar: [
    {
      img: avatar5,
      nombre: `Daniel Pardo López`,
      cargo: `STRATEGY AND DEVELOPMENT ADVISOR`,
      descripcion: `250+ blockchain related investments since 2017 CEO of Wbuild.io, a Web 3.0 (blockchain based) real estate investment company, boutique hotel owner; former Undersecretary of Tourism.`,
    },
    {
      img: avatar6,
      nombre: `Cristián Juarez Húbner`,
      cargo: `INVESTMENT AND GROWTH ADVISOR`,
      descripcion: `MBA at Duke University with years of experience in finance, crypto investor since the beginning of 2018, dedicated today to working full time as a Venture Capitalist and Cryptocurrency advisor.`,
    },

    {
      img: avatar7,
      nombre: `Pablo Fuenzalida Sanhueza`,
      cargo: `COMMUNICATIONS AND COACHING ADVISOR`,
      descripcion:
        "Founding Partner of Human Dynamics. Speaker and Coach Organizational consultant with almost  20 years of experience promoting the evolution of the dynamics of people, teams and organizations.",
    },
    {
      img: avatar8,
      nombre: `Bernardo Gutiérrez Pérez`,
      cargo: `LEGAL ADVISOR`,
      descripcion: `Lawyer from the U Diego Portales, 1990, Master in Business Law, U. Adolfo Ibáñez, 2000 - 2001.  Professional career of 30 years, developed mainly in regulated industries in the banking, financial and stock market fields. Experience in contracting, litigation, legal advice and corporate governance.`,
    },
    {
      img: avatar9,
      nombre: `Jose Stiven Rodriguez Exposito`,
      cargo: `SMART CONTRACT DEVELOPER`,
      descripcion: `Blockchain advisor focused on the creation of new projects, maintenance and emphasis on  financial viability. Influencer for a few years on the "Quieroganar" channel for entrepreneurship. Family man and investor with +5 years of experience.`,
    },
  ],
};

function Advisord({ id }) {
  const [iSopenModal, setISopenModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  function openModal(element, index) {
    console.log(element);
    setISopenModal(true);
    setInfoModal(element);
  }

  return (
    <Box
      id={id}
      component="section"
      maxWidth="100%"
      sx={{
        margin: "auto",
        padding: "10px",
        backgroundImage:
          "linear-gradient(to right, rgba(1, 0, 88, 1), rgba(46, 157, 254, 1))",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container Component="div" maxWidth="xl">
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
                maxWidth: "240px",
                minWidth: "240px",
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
                <Box sx={{ margin: 'auto' }}>
                  <Box
                    component="img"
                    alt="Remy Sharp"
                    src={e.img}
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      boxSizing: "border-box",
                      border: "14px solid #dee6f3",
                      boxShadow: '0px 0px 1px 1px #000000',
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
                    color: "#FFF",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {e.nombre}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    color: "botonBanner.main",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  {e.cargo}
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
              <Box sx={{ margin: 'auto' }}>
                <Box
                  component="img"
                  alt="Remy Sharp"
                  src={infoModal.img}
                  sx={{
                    display: "block",
                    width: "100%",
                    maxWidth: { md: "218px", lg: "218px" },
                    height: "auto",
                    boxSizing: "border-box",
                    border: "14px solid #dee6f3",
                    boxShadow: '0px 0px 1px 1px #000000',
                    borderRadius: "50%",
                  }}
                />
              </Box>
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

                <Typography
                  component="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    lineHeight: "1",
                    // marginTop:'0px'
                    textAlign: 'justify'

                  }}
                >
                  {infoModal?.descripcion}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Advisord;
