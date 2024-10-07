import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import Location from "../../Assets/images/location.png";

import Email from "../../Assets/images/email.png";
import Phone from "../../Assets/images/phone.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  IconIconButton,
  AddressTypography,
  ImgStyle,
} from "./contactStyle";
import Header from "../Header/header";
import Footer from "../Footer/footer";
const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
      }}
    >
      <Header/>
      <Container maxWidth="md" sx={{ mt: 10, marginBottom: 10 }} >
        <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ padding: "2.3rem 2.2rem", position: "relative" }}
            >
              <Typography variant="h5" color="#0E0F30" fontWeight="bold">
                Let's get in touch
              </Typography>
              <Typography color="#333" sx={{ mt: 4, mb: 2 }}>
                Fill up the form and our team will get back to you within 24
                hours.
              </Typography>
              <Box sx={{ mb: 2 }}>
                <AddressTypography color="#555">
                  <ImgStyle src={Location} alt="location icon" />
                  34/15 Balavinayagar Kovil Street, Tuticorin-628002.
                </AddressTypography>
                <AddressTypography color="#555">
                  <ImgStyle src={Email} alt="email icon" />
                  hrms@hifiitpark.com
                </AddressTypography>
                <AddressTypography color="#555">
                  <ImgStyle src={Phone} alt="phone icon" />
                  8098309295
                </AddressTypography>
                <AddressTypography>Connect with us :</AddressTypography>
                <Box sx={{ display: "flex", mt: 2 }}>
                  <IconIconButton
                    href="https://www.facebook.com/profile.php?id=61562480334115&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </IconIconButton>
                  <IconIconButton
                    href="https://www.youtube.com/@HIfI_ITPARK_HRMS"
                    target="_blank"
                  >
                    <YouTubeIcon />
                  </IconIconButton>
                  <IconIconButton
                    href="https://www.instagram.com/hifi_itpark_hrms?igsh=b2w4bG1pam1nMnl2"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </IconIconButton>
                  <IconIconButton
                    href="https://www.linkedin.com/company/hifi-itpark-hrmss/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconIconButton>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ backgroundColor: "#0E0F30", padding: "2.3rem 2.2rem" }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 130,
                    right: -40,
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(to right bottom,  #0E0F30,    #686999)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 30,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(to right bottom,  #0E0F30, #686999)",
                  }}
                />
                <Typography variant="h5" color="white" fontWeight="500">
                  Contact Us
                </Typography>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2, mb: 2, input: { color: "white" } }}
                  InputLabelProps={{
                    style: {
                      color: "#fafafa",
                      border: "2px solide white",
                      paddingLeft: "20px",
                    },
                  }}
                  InputProps={{
                    style: { border: "2px solid white", borderRadius: "50px" },
                  }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2, input: { color: "white" } }}
                  InputLabelProps={{
                    style: {
                      color: "#fafafa",
                      border: "2px solide white",
                      paddingLeft: "20px",
                    },
                  }}
                  InputProps={{
                    style: { border: "2px solid white", borderRadius: "50px" },
                  }}
                />
                <TextField
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2, input: { color: "white" } }}
                  InputLabelProps={{
                    style: {
                      color: "#fafafa",
                      border: "2px solide white",
                      paddingLeft: "20px",
                    },
                  }}
                  InputProps={{
                    style: { border: "2px solid white", borderRadius: "50px" },
                  }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ mb: 2, input: { color: "white" } }}
                  InputLabelProps={{
                    style: {
                      color: "#fafafa",
                      border: "2px solide white",
                      paddingLeft: "20px",
                    },
                  }}
                  InputProps={{
                    style: { border: "2px solid white", borderRadius: "20px" },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "25px",
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "capitalize",
                    padding: "10px 25px 10px 25px",
                  }}
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer/>
    </Box>
  );
};

export default ContactUs;
