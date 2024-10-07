import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer/footer";
import Header from "./Header/header";

function Otp() {
  return (
    <div>
      <Header/>
    <Box
      sx={{
        backgroundColor: "#b8a5fe",
        height: "66vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          border: "2px solid rgb(0, 230, 122)",
          borderRadius: 2,
          padding: { xs: 2, sm: 4, md: 6, lg: 12 },
          maxWidth: 500,
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Enter your OTP
        </Typography>
        <Typography variant="body1" mt={"5vh"}>
          Enter the OTP sent to your email
        </Typography>
        <Grid container spacing={3} justifyContent="center" mt={2}>
          {[...Array(6)].map((_, index) => (
            <Grid item key={index}>
              <TextField
                type="text"
                placeholder="0"
                inputProps={{ min: 0, max: 9 }}
                sx={{
                  width: 60,
                  height: 60,
                  fontSize: "2rem",
                  textAlign: "center",
                  "& input::placeholder": {
                    fontSize: "22px",
                    textAlign: "center", // Adjust this value as needed
                  },
                }}
                required
              />
            </Grid>
          ))}
        </Grid>
        <Link to="/newpassword">
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 5, textTransform: "capitalize" }}
        >
          Verify
        </Button></Link>
        <Typography variant="body2" sx={{ marginTop: 5 }}>
          If you did not receive the OTP, click{" "}
          <Link to="/otp" component="button">Resend</Link>
        </Typography>
      </Box>
    </Box>
    <Footer/>
    </div>
  );
}

export default Otp;
