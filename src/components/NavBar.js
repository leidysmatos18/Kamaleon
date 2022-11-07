import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../statics/logo.svg";
import MenuMobile from "./MenuMobile";
import { useNavigate } from "react-router-dom";

const styleBoton = {
  borderRadius: "22px",
  backgroundColor: "#fff0",
  color: "#fff !important",
  fontSize: "17px",
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "#fff0",
  },
  height: "30px",
};

const NavBar = ({ LinkMenu, redirecionar }, ...props) => {
  const themeprop = useTheme();
  const isMatch = useMediaQuery(themeprop.breakpoints.down("md"));
  const elevation = 0;
  const { notMobile } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={elevation}
        sx={{ justifyContent: "flex-end", paddingY: 3 }}
      >
        <Toolbar variant="dense">
          <Box
            component="img"
            sx={
              notMobile
                ? {
                    height: "auto",
                    width: "70px",
                    cursor: "pointer",
                  }
                : {
                    width: "230px",
                    height: "auto",
                    cursor: "pointer",
                  }
            }
            alt="Logo Kamaleont"
            src={Logo}
            onClick={() => redirecionar("/", "/")}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {isMatch ? (
            <MenuMobile LinkMenu={LinkMenu} redirecionar={redirecionar} />
          ) : (
            <Stack direction="row" spacing={1}>
              {LinkMenu.filter((e) => e.title).map((e, i) => (
                <Button
                  key={i}
                  variant={e.active ? "contained" : "text"}
                  sx={
                    e.active === false
                      ? styleBoton
                      : {
                          ...styleBoton,
                          backgroundImage:
                            "linear-gradient(to right, rgba(71, 75, 255, 0) 0%, #3ae9fc 100%)",
                        }
                  }
                  size="small"
                  onClick={() => redirecionar(e.page, e.redired)}
                >
                  {e.title}
                </Button>
              ))}
              <Button
                variant="text"
                target="_blank"
                href="/blog"
                sx={styleBoton}
              >
                BLOG
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
