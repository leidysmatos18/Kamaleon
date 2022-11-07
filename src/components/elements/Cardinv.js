import React from "react";
import { Box, Card, CardMedia, CardContent } from "@mui/material";
import BotonMini from "./BotonMini";

const Cardinv = ({
  titulo,
  icon,
  text,
  link,
  page, 
  redire,
  redirecionar,
  PAGE_INVEST,
}) => {
  const styles0 =
    page !== "/howtoinvest"
      ? {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "49%", lg: "49%" },
          alignItems: "center",
          boxShadow: "0",
          cardmedia: {
            width: { xs: "150px" },
            height: { xs: "150px" },
            margin: "10px",
          },
        }
      : {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "600px" },
          alignItems: "center",
          boxShadow: "0",
          margin: { xs: "10px 0px", sm: "20px auto" },
          borderRadius: "20px",
          cardmedia: {
            width: { xs: "150px" },
            height: { xs: "150px" },
            margin: "10px",
          },
        };
  return (
    <>
      <Card sx={styles0} data-aos="fade-right">
        <CardMedia
          component="img"
          sx={styles0.cardmedia}
          image={icon}
          alt="Live from space album cover"
        />
        <CardContent
          sx={{
            color: "#000",
            fontStyle: "italic",
          }}
        >
          <Box
            component="h4"
            sx={{
              fontSize: "22px",
              fontStyle: "normal",
              marginY: "5px",
              color: "#020060",
              fontWeight: "900",
            }}
          >
            {titulo}
          </Box>
          <hr className="hr-icons" />
          <Box
            component="div"
            sx={{
              minHeight: { xs: "120px" },
              textAlign: "justify",
            }}
          >
            {text}
          </Box>
          {page !== "/howtoinvest" ? (
            <BotonMini
              text="Read More"
              link=""
              redirecionar={redirecionar}
              PAGE_INVEST={PAGE_INVEST}
              redire={redire}
            />
          ) : (
            ""
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Cardinv;
