import {
  Button,
  Fade,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { ReactComponent as Discord } from "../statics/socialNetworks/discord-blue.svg";
import { ReactComponent as Facebook } from "../statics/socialNetworks/facebook-blue.svg";
import { ReactComponent as Instagram } from "../statics/socialNetworks/instagram-blue.svg";
import { ReactComponent as Telegram } from "../statics/socialNetworks/telegram-blue.svg";
import { ReactComponent as Twitter } from "../statics/socialNetworks/twitter-blue.svg";
import { ReactComponent as Youtube } from "../statics/socialNetworks/youtube-blue.svg";
import { ReactComponent as Reddit } from "../statics/socialNetworks/reddit-blue.svg";
import { ReactComponent as Linkedin } from "../statics/socialNetworks/linkedin1.svg";
import styled from "@emotion/styled";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CachedIcon from "@mui/icons-material/Cached";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import { envairDatosServidor } from "./apis/sendForm";
import iconCloser from "../statics/iconCloser.png";
import Backdrop from "@mui/material/Backdrop";

const socialNetworks = [
  {
    name: "instagram",
    img: <Instagram />,
    fill: "#020061",
    link: "https://google.com",
    state: false,
  },
  {
    name: "facebook",
    img: <Facebook />,
    fill: "#020061",
    link: "https://google.com",
    state: false,
  },
  {
    name: "youtube",
    img: <Youtube />,
    fill: "#020061",
    link: "https://google.com",
    state: false,
  },
  {
    name: "twitter",
    img: <Twitter />,
    fill: "#020061",
    link: "https://twitter.com/kamaleontGlobal",
    state: true,
  },
  {
    name: "telegram",
    img: <Telegram />,
    fill: "#020061",
    link: "https://t.me/Kamaleont_Global",
    state: true,
  },
  {
    name: "discord",
    img: <Discord />,
    fill: "#020061",
    link: "https://google.com",
    state: false,
  },
  {
    name: "reddit",
    img: <Reddit />,
    fill: "#020061",
    link: "https://google.com",
    state: false,
  },
  {
    name: "linkedin",
    img: <Linkedin />,
    fill: "#020061",
    link: "https://www.linkedin.com/company/kamaleont/",
    state: true,
  },
];

const CssTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  },
});

const HR1 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
const HR2 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
    // background:'red',
    margin: "20px 0px",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

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
  py: "50px",
};

export default function SocialCommunity({ id }) {
  const [datosForm, setDatosForm] = useState({
    name: "",
    email: "",
    number: "",
    text: "",
  });
  const [isSend, SetIsSend] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [iSopenModal, setISopenModal] = useState(false);

  function getDatosForm(datos) {
    if (datos.target.name) {
      const name = datos?.target.name;
      const value = datos?.target.value;
      console.log(typeof value);

      setDatosForm({ ...datosForm, [name]: value });
    }
  }

  function checkDatosForm({ name, email, number, text }) {
    const regExpCorrero =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (name.length === 0) {
      return {
        message: "the name field must be valid",
        state: false,
      };
    }
    if (number.length === 0) {
      return {
        message: "the number field must be valid",
        state: false,
      };
    }
    if (email.length === 0 || !regExpCorrero.test(email)) {
      return {
        message: "the email field must be valid",
        state: false,
      };
    }
    if (text.length <= 100) {
      return {
        message: "the text field must be greater than 100 characters",
        state: false,
      };
    }
    return {
      message: "los campos son validos",
      state: true,
    };
  }

  async function hanledSumit() {
    const res = checkDatosForm(datosForm);
    if (res.state === true) {
      let res1 = await envairDatosServidor(datosForm);
      res1 && SetIsSend(true);
    } else {
      console.log(res.state, res.message);
      openModal(res.message);
      return;
    }
  }

  function openModal(element) {
    console.log(element);
    setISopenModal(true);
    setMessageError(element);
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
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            sx={{
              color: "botonHeader.main",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Social Community
          </Typography>
          <Box sx={{ margin: "10px 0px" }}>
            <hr className="hr-items" />
          </Box>
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
            }}
          >
            CONTACT US!
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            margin: "50px 0px",
            textAlign: "center",
          }}
        >
          {socialNetworks
            .filter((e) => e.state)
            .map((images, i) => (
              <Box
                key={i}
                sx={{
                  width: "50px",
                  margin: "0px 10px",
                  display: "inline-block",
                  background: "#020061",
                  padding: "10px",
                  borderRadius: "15px",
                }}
              >
                <a href={images.link} target="_blank">
                  {images.img}
                </a>
              </Box>
            ))}
        </Box>

        <Grid
          container
          className="backgblock"
          sx={{
            width: { xs: "100%", sm: "95%", md: "95%", lg: "90%" },
            // borderRadius: '40px',
            borderRadius: { xs: "10px", sm: "20px", md: "40px" },
            minHeight: "180px",
            margin: "80px auto",
            padding: { xs: "50px 0px", sm: "50px 20px", md: "50px 30px" },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "justify",
              lg: "justify",
            },
          }}
        >
          {isSend === true ? (
            <>
              <Grid item xs={12}>
                <CheckCircleOutlineIcon
                  sx={{
                    color: "#020060", //azul
                    // color: '#33eb91', // verde
                    display: "block",
                    marginX: "auto",
                    // marginY: { xs: '30px', ms: '20px' },
                    height: {
                      xs: "150px",
                      sm: "215px",
                      md: "215px",
                      lg: "215px",
                      xl: "215px",
                    },
                    width: {
                      xs: "150px",
                      sm: "215px",
                      md: "215px",
                      lg: "215px",
                      xl: "215px",
                    },
                  }}
                />
                <Typography
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "3rem",
                      xl: "3rem",
                    },
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  your message has been successfully sent
                </Typography>
                {/* <Button
                    variant="contained"
                    sx={{
                      color: "#020060",
                      borderRadius: "30px",
                      display: 'block',
                      marginX: 'auto',
                      marginY: { xs: '30px', ms: '20px' },
                    }}
                    color="secondary"
                    onClick={() => { SetIsSend(false) }}
                  >
                    <CachedIcon
                      sx={{
                        height: { xs: '40px', sm: '60px', md: '60px', lg: '80px', xl: '80px' },
                        width: { xs: '80px', sm: '120px', md: '120px', lg: '160px', xl: '160px' },
                      }}
                    />
                  </Button> */}
              </Grid>
            </>
          ) : (
            <>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{ padding: "0px 30px" }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      md: "2rem",
                      lg: "2.5rem",
                      xl: "2.5rem",
                    },
                    textAlign: "initial",
                    color: "#fff",
                  }}
                >
                  Do you want to contact us?
                </Typography>
                <HR1 sx={{ margin: "10px 0px" }}>
                  <hr className="hr-icons" />
                </HR1>
                <HR2 sx={{ margin: "10px 0px" }}>
                  <hr className="hr-items " />
                </HR2>
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <Box
                  sx={{
                    width: { lg: "80%", xl: "90%", md: "90%", xs: "100%" },
                    margin: "auto",
                  }}
                >
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "80%", md: "20ch", lg: "30%" },
                      },
                      color: "white",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <CssTextField
                      label="Name"
                      id="custom-css-outlined-input"
                      size="small"
                      onChange={(e) => getDatosForm(e)}
                      name="name"
                    />
                    <CssTextField
                      label="Number"
                      id="custom-css-outlined-input"
                      size="small"
                      onChange={(e) => getDatosForm(e)}
                      name="number"
                      type="number"
                    />
                    <CssTextField
                      label="Email"
                      id="custom-css-outlined-input"
                      size="small"
                      onChange={(e) => getDatosForm(e)}
                      name="email"
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: "100%",
                        maxWidth: { xs: "80%", md: "94%" },
                      },
                      color: "white",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <CssTextField
                      label="Message"
                      multiline
                      maxRows={4}
                      sx={{}}
                      onChange={(e) => getDatosForm(e)}
                      name="text"
                    />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      maxWidth: { xs: "80%", md: "100%" },
                      position: "relative",
                    }}
                    onClick={() => hanledSumit()}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        color: "#020060",
                        transform: "scale(0.6)",
                        height: "30px",
                        borderRadius: "30px",
                        position: "absolute",
                        top: "-6px",
                        right: { xs: "-15%", sm: "-80px", md: "5px" },
                      }}
                      color="secondary"
                    >
                      <ArrowRightAltIcon />
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
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
              {/* card body */}
              <Box
                component="div"
                sx={{
                  textAlign: { xs: "center", sm: "center", md: "center" },
                  width: "100%",
                  // marginX: "20px",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    color: "botonHeader.main",
                    fontWeight: "bold",
                    fontSize: { xs: "27px", md: "30px", lg: "42px" },
                  }}
                >
                  {messageError}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
