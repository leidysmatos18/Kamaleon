import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../statics/footer/logoBlanco.png";
import redNetword from "../statics/footer/icons.png";
import { ReactComponent as Discord } from "../statics/socialNetworks/discord-blue.svg";
import { ReactComponent as Facebook } from "../statics/socialNetworks/facebook-blue.svg";
import { ReactComponent as Instagram } from "../statics/socialNetworks/instagram-blue.svg";
import { ReactComponent as Telegram } from "../statics/socialNetworks/telegram-blue.svg";
import { ReactComponent as Twitter } from "../statics/socialNetworks/twitter-blue.svg";
import { ReactComponent as Youtube } from "../statics/socialNetworks/youtube-blue.svg";
import { ReactComponent as Reddit } from "../statics/socialNetworks/reddit-blue.svg";
import { ReactComponent as Linkedin } from "../statics/socialNetworks/linkedin2.svg";

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

export default function Footer({
  redirecionar,
  location,
  PAGE_HOME,
  PAGE_ABOUT,
}) {
  const LinkMenu = [
    {
      page: PAGE_HOME,
      title: " Why Kamaleont?",
      active: location.pathname === "/",
      redired: "home/PorQueKamaleont",
    },
    {
      page: PAGE_HOME,
      title: "Investments",
      active: location.pathname === "/",
      redired: "home/Inversiones",
    },
    {
      page: PAGE_HOME,
      title: "Tokenomics",
      active: location.pathname === "/",
      redired: "home/Activos",
    },
    {
      page: PAGE_ABOUT,
      title: "Team",
      active: location.pathname === "/",
      redired: "conocenos/Team",
    },
    {
      page: PAGE_HOME,
      title: "RoadMap",
      active: location.pathname === "/",
      redired: "home/roadmap",
    },
  ];

  return (
    <>
      <Box
        component="div"
        sx={{
          background: "red",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            background: "#020061",
            paddingY: "50px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            item
            xs={10}
            sm={7}
            md={5}
            lg={5}
            sx={{
              justifyContent: { xs: "flex-start", md: "center" },
              margin: "auto",
            }}
          >
            <Box
              component="img"
              src={logo}
              sx={{
                width: { xs: "40%", md: "50%" },
                marginBottom: { xs: "40px" },
              }}
            />
          </Grid>

          <Grid
            container
            item
            xs={10}
            sm={7}
            md={7}
            lg={7}
            sx={{
              color: "white",
              margin: "auto",
            }}
          >
            <Grid
              container
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
              sx={{
                fontSize: "14px",
              }}
            >
              <Box component="div">
                <Typography component="h2">Kamaleont</Typography>
                <Box component="hr" className="hr-icons" />
                {LinkMenu.map((e, i) => (
                  <Typography
                    component="p"
                    variant="p"
                    key={i}
                    sx={{ cursor: "pointer" }}
                    onClick={() => redirecionar(e.page, e.redired)}
                  >
                    {e.title}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid
              container
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
              sx={{
                justifyContent: { xs: "flex-end", md: "flex-start" },
              }}
            >
              <Box component="div">
                <Typography component="h2">Whitepaper</Typography>
                <Box component="hr" className="hr-icons" />
                <Typography component="p" variant="p">
                  <Box
                    component="a"
                    href="Kamaleont-White-Paper-OFICIAL-ES.pdf"
                    target="_blank"
                    sx={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    Español
                  </Box>
                </Typography>
                <Typography component="p" variant="p">
                  <Box
                    component="a"
                    href="Kamaleont-White-Paper-OFICIAL-2.0.pdf"
                    target="_blank"
                    sx={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    Inglés{" "}
                  </Box>
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                marginY: { xs: "30px", md: "0px" },
              }}
            >
              <Box component="div">
                <Typography component="h2">Community</Typography>
                <Box component="hr" className="hr-icons" />
                <Box
                  component="div"
                  sx={{
                    width: "80%",
                    display: "flex-wrap",
                    minWidth: "260px",
                  }}
                >
                  {socialNetworks
                    .filter((e) => e.state)
                    .map((images, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: "34px",
                          // margin: '0px 10px',
                          display: "inline-block",
                          background: "#020061",
                          padding: "9px",
                          borderRadius: "15px",
                        }}
                      >
                        <a href={images.link} target="_blank">
                          {images.img}
                        </a>
                      </Box>
                    ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
