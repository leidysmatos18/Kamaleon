import { Box } from "@mui/material";
import React from "react";

const BloqueLinear = ({ img, span, ttl, link }) => {
  return (
    <>
      <Box component="a" href={link} target="_blank">
        <Box
          component="div"
          className="backgblock"
          sx={{
            width: { xs: "95%", sm: "70%", md: "550px", xl: "680px" },
            borderRadius: "15px",
            padding: "15px",
            position: "relative",
            margin: "0 auto",
            minHeight: "250px",
          }}
        >
          <Box
            component="img"
            src={img}
            sx={{
              display: "Block",
              margin: "0 auto",
              maxWidth: { xs: "235px", md: "350px" },
              marginBottom: "-55px",
            }}
          />
          <div style={{ position: "absolute", bottom: "10px" }}>
            <span
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "1.5rem",
              }}
            >
              {span}
            </span>
            <p
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "1.75rem",
                margin: 0,
              }}
            >
              {ttl}
            </p>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default BloqueLinear;
