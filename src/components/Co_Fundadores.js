import { Container, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import avatar1 from "../statics/avatars/EQ1.png";
import avatar2 from "../statics/avatars/EQ2.png";
import iconCloser from "../statics/iconCloser.png";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "300px", sm: "400px", md: "50%" },
  bgcolor: "background.paper",
  outline: '0px solid transparent',
  border: "none",
  borderRadius: "40px",
  px: { xs: 3, sm: 3, md: 5 },
};

const listTypografy = {
  title: "CO FOUNDERS",
  avatar: [
    {
      img: avatar1,
      nombre: `José Güell`,
      cargo: `Co Founder & CEO`,
      descripcion: [
        "Experience in entrepreneurship and crypto investments with +2 years of results. ",
        "Economics student at the Adolfo Ibáñez University in Chile.",
      ],
    },
    {
      img: avatar2,
      nombre: `Pedro Iñiguez`,
      cargo: `Co Founder & COO`,
      descripcion: [
        "Experience in entrepreneurship and investment, in addition to a 3rd place in the UC Innovation Goodyear Digital Challenge",
        "Commercial Engineering student at the Pontifical Catholic University of Chile.",
      ],
    },
  ],
};

function Co_Fundadores({ id }) {
  const [iSopenModal, setISopenModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  function openModal(element, index) {
    console.log(element);
    setISopenModal(true);
    setInfoModal(element);
  }

  console.log(iSopenModal);
  return (
    <Box
      id={id}
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
                flexDirection: { xs: "column", sm: "row" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginY: "50px",
                padding: "10px",
                cursor: "pointer",
                maxWidth: "535px",
                boxSizing: "border-box",
              }}
              data-aos="fade-right"
              onClick={() => {
                openModal(e, i);
              }}
            >
              {/* card head */}
              <Box sx={{margin:'auto'}}>
                <Box
                  component="img"
                  alt="Remy Sharp"
                  src={e.img}
                  sx={{
                    display: "block",
                    width: "75%",
                    maxWidth: { md: "218px", lg: "218px" },
                    height: "auto",
                    boxSizing: "border-box",
                    border: "14px solid #dee6f3",
                    boxShadow: '0px 0px 1px 1px #000000',
                    borderRadius: "50%",
                    boxSizing: "border-box",
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
                  {e.nombre}
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

                {infoModal?.descripcion?.map((e, i) => (
                  <Typography
                    key={i}
                    component="p"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      // marginTop:'0px'
                    }}
                  >
                    {e}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Co_Fundadores;
