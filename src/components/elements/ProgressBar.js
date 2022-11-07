import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, LinearProgress } from "@mui/material";
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 3 }}>
        <LinearProgress
          color="bar"
          variant="determinate"
          sx={{
            height: "20px",
            "&.MuiLinearProgress-determinate": {
              bgcolor: "#fff !important",
              width: "105%",
            },
            borderRadius: "22px",
          }}
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 50 }}>
        <Typography variant="body2" color="#fff">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function ProgressBar({ valor }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= valor ? valor : prevProgress + 1
      );
    }, 80);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
