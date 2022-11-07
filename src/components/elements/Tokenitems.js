import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Card, CardContent, CardMedia, Button, Box } from "@mui/material";

const Tokenitems = ({ img, alt, text, icon, fn, content, key }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flex: { xs: "0 0 100%", sm: "0 0 40%", md: "0 0 45%", lg: "0 0 25%" },
          flexDirection: "column",
          flexGrow: 0,
          bgColor: "#fff",
          borderRadius: "15px",
          alignItems: "center",
          marginY: "15px",
          paddingY: 5,
          position: "relative",
          overflow: "initial",
          minHeight: "190px",
        }}
        data-aos="fade-up"
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "90px" },
            height: { xs: "90px" },
            margin: "10px",
          }}
          image={img}
          alt={alt}
        />
        <hr className="hr-items" />
        <CardContent
          sx={{
            color: "#020060",
            fontWeight: "800",
          }}
        >
          {text}
        </CardContent>
        {icon === 1 && (
          <Button
            variant="contained"
            sx={{
              color: "#020060",
              height: "30px",
              borderRadius: "30px",
              position: "absolute",
              bottom: "-15px",
            }}
            color="secondary"
            onClick={()=>fn(content,key,content.link)}
          >
            {!content.link && <ArrowRightAltIcon/>}
            {content.link && <Box component='a' sx={{marginTop:'8px', color:'#020060'}} href={content.link} target='_blank'><ArrowRightAltIcon/></Box>}
          </Button>
        )}
        {icon === 2 && (
          <Button
            variant="contained"
            sx={{
              color: "#020060",
              borderRadius: "30px",
              position: "absolute",
              bottom: "-15px",
              minWidth: "43px",
              padding: " 9px 7px",
            }}
            color="secondary"
          >
            <ArrowForwardIosIcon />
          </Button>
        )}
      </Card>
    </>
  );
};

export default Tokenitems;
