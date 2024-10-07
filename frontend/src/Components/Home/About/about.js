import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import "@dotlottie/player-component"; // Import Lottie player for the animation\
import {
  AboutTypography,
  StoryTypography,
  BodyTypography,
} from "./aboutStyle";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const AboutUs = () => {
  return (
    <main>
      <Header/>
      <Box
        sx={{
          backgroundColor: "#0E0F30",
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <dotlottie-player
              className="gif1"
              src="https://lottie.host/fc50f5f8-2a49-4417-a7e6-9dc2b313905e/CipFVhf1Sj.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></dotlottie-player>
          </Box>
          <Typography variant="body1" sx={{ mt: 3 }}>
            We help people find their dream jobs and companies find the best
            talent.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box>
              <AboutTypography variant="h4" component="h2" gutterBottom>
                About Us
              </AboutTypography>

              <BodyTypography variant="body1">
                Welcome to HiFi IT Park HRMS, your premier hiring consultancy
                dedicated to connecting exceptional talent with outstanding
                opportunities in the IT industry. Our mission is to streamline
                the <br /> hiring process, providing innovative HR solutions
                that empower businesses and professionals alike. <br />
                <br /> At HiFi IT Park HRMS, we specialize in delivering
                tailored recruitment strategies that meet the unique needs of
                each client. With a deep understanding of the technology
                landscape and a <br /> commitment to excellence, we ensure the
                perfect match between employers and job seekers.
              </BodyTypography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography
              variant="h5"
              component="h3"
              // sx={{ color: "error.main", mt: 4 }}
            >
              Our Story
            </StoryTypography>
            <BodyTypography variant="body1" sx={{ mt: 2 }}>
              Founded in 2023, Hi Fi IT Park began with a vision to
              revolutionize the home cleaning experience. We recognized the need
              for high-performance cleaning products that are safe for both your{" "}
              <br /> home and the environment. Today, we are proud to be a
              leading name in the home care industry, trusted by countless
              households.
            </BodyTypography>
          </Grid>

          <Grid item>
            <StoryTypography
              variant="h5"
              component="h3"
              sx={{ color: "error.main", mt: 4 }}
            >
              Our Products
            </StoryTypography>
            <BodyTypography variant="body1" sx={{ mt: 2 }}>
              We offer a comprehensive range of HR solutions designed to meet
              all your human resource management needs:
              <br />
              <br />
              <p>
                * Talent Acquisition * : Attract and hire top-tier talent with
                our strategic recruitment solutions.
              </p>
              <br />
              <p>
                * Onboarding Solutions * : Streamline your onboarding process
                with our effective and user-friendly onboarding tools.
              </p>
              <br />
              <p>
                * Payroll Management * : Ensure accurate and timely payroll
                processing with our comprehensive payroll management services.
              </p>
              <br />
              <p>
                * Performance Management * : Enhance employee performance with
                our robust performance management systems.
              </p>
              <br />
              <p>
                * HR Analytics * : Gain valuable insights and make informed
                decisions with our advanced HR analytics solutions.
              </p>
              <br />
              <p>
                * Compliance and Legal * : Stay compliant with labor laws and
                regulations with our expert compliance and legal advisory
                services.
              </p>
              <br />
              <p>
                * Employee Engagement * : Foster a positive work environment and
                boost morale with our employee engagement programs.
              </p>
              <br />
              <p>
                * Training and Development * : Equip your workforce with the
                skills they need to succeed through our tailored training and
                development programs.
              </p>
            </BodyTypography>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography
              variant="h5"
              component="h3"
              sx={{ color: "error.main", mt: 4 }}
            >
              Our Commitment
            </StoryTypography>
            <BodyTypography variant="body1" sx={{ mt: 2 }}>
              <p>At Hi Fi IT Park HRMS, we are dedicated to:</p>
              <br />

              <p>
                Excellence: We strive for excellence in all our services,
                ensuring that we provide top-notch HR solutions to meet your
                business needs.
              </p>
              <br />
              <p>
                Integrity: Our commitment to integrity ensures that we maintain
                transparency, honesty, and ethical standards in all our
                interactions.
              </p>
              <br />

              <p>
                Innovation: We embrace innovative HR technologies and practices
                to deliver cutting-edge solutions that enhance your HR
                operations.
              </p>
              <br />
              <p>
                Client Satisfaction: Your satisfaction is our priority. Our
                dedicated client service team is always ready to assist you with
                any inquiries or concerns.
              </p>
              <br />
            </BodyTypography>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography
              variant="h5"
              component="h3"
              sx={{ color: "error.main", mt: 4 }}
            >
              Why Choose Us?
            </StoryTypography>
            <BodyTypography variant="body1" sx={{ mt: 2 }}>
              <p>
                Effective Solutions: Our HR services are designed to address
                even the most complex HR challenges, ensuring optimal workforce
                management.
              </p>
              <br />
              <p>
                Innovative Practices: We utilize the latest HR technologies and
                innovative practices to enhance your HR processes and outcomes.
              </p>
              <br />
              <p>
                Trusted Expertise: We stand behind the expertise of our team,
                providing you with reliable and consistent HR consultancy
                services.
              </p>
              <br />
              <p>
                Client Focus: We prioritize your needs and actively engage with
                our clients to deliver tailored solutions that drive business
                success.
              </p>
              <br />
              <br />
            </BodyTypography>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography
              variant="h5"
              component="h3"
              sx={{ color: "error.main", mt: 4 }}
            >
              Join Our Community
            </StoryTypography>
            <BodyTypography variant="body1">
              <p>
                Become part of the Hi Fi IT Park HRMS family and stay informed
                about our latest HR solutions, industry insights, and special
                offers. Follow us on [Social Media Links] and subscribe to our{" "}
                <br />
                newsletter for exclusive updates.
              </p>
            </BodyTypography>
            <BodyTypography variant="body1">
              Thank you for choosing Hi Fi IT Park HRMS for your human resource
              management needs. We look forward to helping you achieve your HR
              goals and enhance your workforce management!
            </BodyTypography>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </main>
  );
};

export default AboutUs;
