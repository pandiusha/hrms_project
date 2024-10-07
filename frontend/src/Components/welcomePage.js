import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "@dotlottie/player-component"; // Ensure you have dotlottie player installed

function WelcomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "#b8a5fe",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "1rem", md: "2rem" }, // Add padding for small screens
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: { xs: "100%", md: "80%", lg: 1320 },
          height: { xs: "auto", md: 600 },
          margin: "1rem",
          borderRadius: "5px",
          border: "1px solid black",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack items on small screens
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            padding: { xs: "2rem 0", md: "0" }, // Add padding for the animation on small screens
          }}
        >
          <dotlottie-player
            src="https://lottie.host/81f4cdfe-b6d6-4892-bc07-6c29adfef68b/2q9Xylg9wH.json"
            background="transparent"
            speed="1"
            style={{ width: 400, height: 400 }}
            loop
            autoplay
          />
        </Box>

        <Box
          sx={{
            textAlign: "center",
            alignContent:"center",
            padding: { xs: "2rem 1rem", md: "4rem 2rem" },
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "rgb(19, 19, 101)",
              fontWeight: 600,
              marginBottom: "1.5rem",

              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
            }}
          >
            WELCOME TO OUR HIFI IT-PARK
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "2.5rem",
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            "Challenges are what make life interesting and overcoming
            <br /> them is what makes life meaningful."
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#b8a5fe",
              "&:hover": { backgroundColor: "#8c6efa" },
              padding: { xs: "0.75rem 1.5rem", md: "1rem 2rem" },
              borderRadius: "50px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontStyle: "italic",
            }}
            endIcon={<ArrowRightAltIcon />}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default WelcomePage;
