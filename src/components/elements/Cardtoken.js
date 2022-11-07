import React from "react";
import Imagecoin from "../../statics/coin.png";
import { Card, CardContent, CardMedia, Box } from "@mui/material";
import i18n from "../i18n";

const Cardtoken = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          maxWidth: "100%",
          backgroundColor: "#004BB7",
          padding: 2,
          borderRadius: "15px",
          ":-webkit-box-shadow": "5px 7px 0px -1px rgba(0,0,0,0.60)",
          ":-moz-box-shadow": "5px 7px 0px -1px rgba(0,0,0,0.60)",
          boxShadow: "5px 7px 0px -1px rgba(0,0,0,0.60)",
          alignItems: "center",
        }}
        data-aos="fade-down"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "150px" },
              height: { xs: "150px" },
              margin: "10px",
            }}
            image={Imagecoin}
            alt="Live from space album cover"
            data-aos="fade-up"
          />
          <CardContent
            sx={{
              color: "#fff",
              fontStyle: "italic",
              textAlign: "justify",
            }}
          >
            {i18n.t("textcoin")}
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default Cardtoken;
