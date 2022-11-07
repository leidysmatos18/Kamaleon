import React, { useState } from "react";
import { Box, Fade, Modal, Typography } from "@mui/material";
import Tokenitems from "./Tokenitems";
import Asset1 from "../../statics/cards/Asset1.png";
import Asset2 from "../../statics/cards/Asset2.png";
import Asset3 from "../../statics/cards/Asset3.png";
import Asset4 from "../../statics/cards/Asset4.png";
import Asset5 from "../../statics/cards/Asset5.png";
import i18n from "../i18n";
import iconCloser from "../../statics/iconCloser.png";
import Backdrop from "@mui/material/Backdrop";

const Tokenomics = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "300px", sm: "400px", md: "30%" },
    bgcolor: "background.paper",
    outline: '0px solid transparent',
    border: "none",
    borderRadius: "40px",
    px: { xs: 3, sm: 3, md: 5 },
  };

  const datosCards = [
    { img: Asset1, text: i18n.t("card1"), desc: "KLT", link: false },
    {
      img: Asset2,
      text: i18n.t("card2"),
      desc: "0xF87940f78F2f4d99A0c5c22e3fCC21795Cd53245",
      link: false,
    },
    {
      img: Asset3,
      text: i18n.t("card3"),
      desc: "Binance Smart Chain",
      link: false,
    },
    {
      img: Asset4,
      text: i18n.t("card4"),
      desc: "TOTAL SUPPLY: 10,000,000,000",
      link: false,
    },
    {
      img: Asset5,
      text: i18n.t("card5"),
      desc: "",
      link: "https://charts.bogged.finance/?c=bsc&t=0xF87940f78F2f4d99A0c5c22e3fCC21795Cd53245",
    },
  ];

  const [iSopenModal, setISopenModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  function openModal(element, index, isLink) {
    if (isLink === false) {
      console.log(element);
      setISopenModal(true);
      setInfoModal(element);
    }
  }

  return (
    <>
      <Box
        component="h3"
        sx={{
          marginTop: 6,
          marginBottom: 3,
          color: "#fff",
          fontWeight: "600",
          fontSize: "25px",
        }}
      >
        KLT DETAILS
      </Box>
      <hr className="hr-icons" />
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
        {datosCards.map((content, i) => (
          <Tokenitems
            key={i}
            img={content.img}
            text={content.text}
            alt={content.text}
            content={content}
            flex={{
              xs: "0 0 100%",
              sm: "0 0 40%",
              md: "0 0 45%",
              lg: "0 0 25%",
            }}
            icon={1}
            // key={content.text}
            fn={openModal}
          />
        ))}
      </Box>

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
                marginY: "30px",
                padding: { xs: "0px", sm: "20px" },

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
                  cursor: "pointer",
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
                  {infoModal.text}
                </Typography>
                <Typography sx={{
                   wordWrap:' break-word',
                }}>{infoModal.desc}</Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Tokenomics;
