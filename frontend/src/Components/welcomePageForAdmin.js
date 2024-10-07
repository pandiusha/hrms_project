import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "@dotlottie/player-component"; // Ensure you have this package or similar for the Lottie player

const AdminWelcomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#b8a5fe",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: { xs: "1rem", md: "0" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: { xs: "100%", sm: "90%" },
          height: { xs: "auto", md: "80%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: { xs: "0", md: "3rem" },
            marginTop: { xs: "2rem", md: "0" },
          }}
        >
          <dotlottie-player
            src="https://lottie.host/92b814fc-3681-40ef-a3f7-ed04b572eab3/mTokKJEOgK.json"
            background="transparent"
            loop
            autoplay
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
            }}
          ></dotlottie-player>
        </Box>
        <Box
          sx={{
            marginTop: { xs: "2rem", md: "4rem" },
            marginLeft: { xs: "1rem", md: "3rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "rgb(19, 19, 101)",
              fontWeight: 600,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            WELCOME To Our HIFI IT-PARK
          </Typography>
          <Typography
            sx={{
              color: "#000001",
              fontWeight: 400,
              marginTop: "1.5rem",
              maxWidth: "500px",
              fontSize: { xs: "1rem", md: "1.25rem" },
              marginLeft: { xs: "auto", md: "0" },
              marginRight: { xs: "auto", md: "0" },
            }}
          >
            "An HRMS is the heartbeat of your company, empowering employees and
            streamlining operations. Invest in your people to drive growth and
            success. Your greatest asset is your workforce."
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: { xs: "0.75rem 1.5rem", md: "1rem 2rem" },
              marginTop: { xs: "2rem", md: "3rem" },
              backgroundColor: "#b8a5fe",
              borderRadius: "50px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#8c6efa",
              },
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminWelcomePage;
