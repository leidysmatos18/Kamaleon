import { Container, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import avatar1 from "../statics/avatars/EQ1.png";
import avatar2 from "../statics/avatars/EQ2.png";
import avatar3 from "../statics/avatars/EQ3.png";
import avatar4 from "../statics/avatars/EQ4.png";
import { useState } from "react";
import iconCloser from "../statics/iconCloser.png";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "300px", sm: "400px", md: "50%" },
  bgcolor: "background.paper",
  border: "none",
  outline: '0px solid transparent',
  borderRadius: "40px",
  px: { xs: 3, sm: 3, md: 5 },
};

const listTypografy = {
  title: "TEAM",
  avatar: [
    {
      img: avatar1,
      nombre: `José Güell `,
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
        "Experience in entrepreneurship and investment, in addition to a 3rd place in the UC Innovation Goodyear Digital Challenge.",
        "Commercial Engineering student at the Pontifical Catholic University of Chile.",
      ],
    },
    {
      img: avatar3,
      nombre: `Raimundo Domínguez`,
      cargo: `Manager of Strategic Alliances`,
      descripcion: [
        "Commercial Engineer, with 10 years of experience in the real estate industry and 15 years of experience in the creation of different enterprises and brands.",
      ],
    },
    // {
    //   img: avatar4,
    //   nombre: `Nicolás Auad`,
    //   cargo: `Administration Manager`,
    //   descripcion: [
    //     "8 years of experience in traditional ventures and startups in the areas of Hospitality, Restaurants, Cafeteria, Last Mile and Marketplace. ",
    //     "Managing to position brands, with a presence in more than 200 points of sale and large retailers.",
    //   ],
    // },
  ],
};

function Team({ id }) {
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
        {/* TITLE */}
        <Box Component="div">
          <Typography
            sx={{
              color: "white",
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
                marginTop: "50px",
                maxWidth: "310px",
                minWidth: "310px",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
              data-aos="fade-right"
              onClick={() => {
                openModal(e, i);
              }}
            >
              {/* card head */}
              <Box component="div" sx={{}}>
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
                    // outline: "1px solid black",
                    boxShadow: '0px 0px 1px 1px #000000',
                    borderRadius: "50%",
                  }}
                />
              </Box>
              {/* card body */}
              <Box
                component="div"
                sx={{
                  // width:'100%',
                  textAlign: "center",
                  minHeight: "100px",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "24px",
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
                    maxWidth: { xs: '250px', md: "218px", lg: "218px" },
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
                    textTransform: "uppercase",
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
                      textAlign: 'justify'
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

export default Team;
