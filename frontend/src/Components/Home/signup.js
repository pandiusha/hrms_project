import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
// import img1 from "../Assets/HIFI-IT-PARK.png";
// import img2 from "../assets/welcome1.png";
import img2 from "../../Components/Assets/loginimg/welcome1.png";
import { Link } from "react-router-dom";
import Footer from "./Footer/footer";
import Header from "./Header/header";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

function Signup() {
  return (
    <div>
      <Header/>
    <Box
      sx={{
        bgcolor: "#b8a5fe",
        minHeight: "66.4vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        padding: 2,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "#fff",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
          p: 2,
          marginBottom: 2,
        }}
      >
        <ResponsiveBox sx={{ display: "flex" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontWeight={"bold"}
            >
              Welcome Back!
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              fontWeight={"bold"}
            >
              Welcome to your next opportunity.
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Log in to connect with top employers and take the next step in
              your career journey.
            </Typography>
            <img
              src={img2}
              alt="hai"
              style={{
                margin: "0 auto",
                width: "100%",
                maxWidth: 300,
                height: "auto",
              }}
            />
            <Link to="/contact" align="center" sx={{ mt: 4 }}>
              Contact Us?
            </Link>
          </Grid>
          <Grid item xs={12} md={3} sx={{ p: 2 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontWeight={"bold"}
            >
              Sign Up
            </Typography>
            <TextField
              placeholder="First Name"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                disableUnderline: true,
                style: {
                  border: "2px solid #ccc",
                  borderRadius: "20px",
                  padding: "10px 20px 10px 20px",
                },
              }}
            />
            <TextField
              placeholder="Last Name"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                disableUnderline: true,
                style: {
                  border: "2px solid #ccc",
                  borderRadius: "20px",
                  padding: "10px 20px 10px 20px",
                },
              }}
            />
            <TextField
              placeholder="E-mail"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                disableUnderline: true,
                style: {
                  border: "2px solid #ccc",
                  borderRadius: "20px",
                  padding: "10px 20px 10px 20px",
                },
              }}
            />
            <TextField
              placeholder="Password"
              type="password"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                disableUnderline: true,
                style: {
                  border: "2px solid #ccc",
                  borderRadius: "20px",
                  padding: "10px 20px 10px 20px",
                },
              }}
            />
            <TextField
              placeholder="Confirm Password"
              type="password"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                disableUnderline: true,
                style: {
                  border: "2px solid #ccc",
                  borderRadius: "20px",
                  padding: "10px 20px 10px 20px",
                },
              }}
            />
            <Typography align="center" sx={{ mb: 2 }}>
              Already have an account? <Link to="/login">Login?</Link>
            </Typography>
            <Link to="/choose_user_type">
            <Button
              variant="contained"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#c5cae9",
                color: "black",
                textTransform: "capitalize",
              }}
            >
              Signup
            </Button>
            </Link>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                textTransform: "capitalize",
              }}
            >
              Continue with Google
            </Button>
          </Grid>
        </ResponsiveBox>
      </Container>
    </Box>
    <Footer/>
    </div>
  );
}

export default Signup;
