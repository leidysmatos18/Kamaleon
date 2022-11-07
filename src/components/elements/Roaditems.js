import React from "react";
import { Box, Typography } from "@mui/material";

const Roaditems = ({ s, year, dev, capital, adoption, products }) => {
  return (
    <>
      <Box component="div" sx={{marginBottom:{xs:'100px', sm:'80px', md:'70px', lg:'0px'}}}>
        <Box
          sx={{
            color: "#1A1478",
            fontSize: 40,
            fontWeight: "900",
          }}
        >
          {s}
          <div className="year">{year}</div>
        </Box>
        <Box
          component="div"
          sx={{
            my: 5,
            minHeight: "10px",
            width: "100%",
            backgroundColor: "#3AE9FC",
            position: "relative",
          }}
        >
          <div className="circle"></div>
        </Box>
        <Box component="div" sx={{ px: 3, py: 0 }}>
          <div className="triangle"></div>
          <div className="boxitem">
            <Typography sx={{ fontWeight: "900" }}>DEVELOPMENT</Typography>

            <Typography fontSize="12px" sx={{}}>
              {dev}
            </Typography>

            <Typography sx={{ mt: "15px", fontWeight: "900" }}>
              CAPITAL MANAGEMENT
            </Typography>

            <Typography fontSize="12px" sx={{}}>
              {capital}
            </Typography>

            {adoption ? (
              <>
                <Typography sx={{ mt: "15px", fontWeight: "900" }}>
                  ADOPTION
                </Typography>

                <Typography fontSize="12px" sx={{}}>
                  {adoption}
                </Typography>
              </>
            ) : (
              <></>
            )}

            {products ? (
              <>
                <Typography sx={{ mt: "15px", fontWeight: "900" }}>
                  PRODUCTS
                </Typography>

                <Typography fontSize="12px" sx={{}}>
                  {products}
                </Typography>
              </>
            ) : (
              <></>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Roaditems;
