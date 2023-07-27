import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import testi1 from "../../assets/imgs/testimonials1.jpg";
import testi2 from "../../assets/imgs/testimonials2.jpg";
import testi3 from "../../assets/imgs/testimonials3.jpg";
const Testimonials = () => {
  return (
    <Box className="section">
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "25px", sm: "28px", md: "40px" },
          lineHeight: { xs: 1.2, sm: "1.2" },
          letterSpacing: { xs: "0px", sm: "0px" },
          fontWeight: 700,
          fontStyle: "normal",
          fontFamily: "'Montserrat', sans-serif",
        }}>
        What People Say?
      </Typography>
      <Container>
        <Stack
          className="content"
          direction={"row"}
          sx={{
            flexWrap: "wrap",
          }}>
          <Box
            sx={{
              flex: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
            }}
            className="user1">
            <Box
              sx={{
                paddingTop: { xs: "25px", sm: "30px", md: "50px" },
                textAlign: "center",
                fontSize: "72px",
                color: "#edb901",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
              className="quteMark">
              “
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              className="image">
              <img
                style={{
                  borderRadius: "50%",
                }}
                src={testi1}
                alt=""
              />
            </Box>
            <Typography
              sx={{
                paddingTop: "15px",
                textAlign: "center",
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                color: "#6d6b6b",
                fontSize: "15px",
                lineHeight: 1.5,
                letterSpacing: "0px",
                paddingBottom: "20px",
                paddingRight: "15px",
                paddingLeft: "15px",
              }}>
              Everyone here is professional and they treat you like a person
              unlike many of the name brand shops. They are honest and will work
              with you.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              Antony Moore
            </Typography>
          </Box>
          <Box
            sx={{
              flex: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
            }}
            className="user2">
            <Box
              sx={{
                paddingTop: { xs: "25px", sm: "30px", md: "50px" },
                textAlign: "center",
                fontSize: "72px",
                color: "#edb901",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
              className="quteMark">
              “
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              className="image">
              <img
                style={{
                  borderRadius: "50%",
                }}
                src={testi2}
                alt=""
              />
            </Box>
            <Typography
              sx={{
                paddingTop: "15px",
                textAlign: "center",
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                color: "#6d6b6b",
                fontSize: "15px",
                lineHeight: 1.5,
                letterSpacing: "0px",
                paddingBottom: "20px",
                paddingRight: "15px",
                paddingLeft: "15px",
              }}>
              I have been using CarRepair for two years now. They keep my FJ in
              tip top condition. And the best thing as a single woman is being
              able to trust them.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              Bryan Thompson
            </Typography>
          </Box>
          <Box
            sx={{
              flex: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
            }}
            className="user3">
            <Box
              sx={{
                paddingTop: { xs: "25px", sm: "30px", md: "50px" },
                textAlign: "center",
                fontSize: "72px",
                color: "#edb901",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
              className="quteMark">
              “
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              className="image">
              <img
                style={{
                  borderRadius: "50%",
                }}
                src={testi3}
                alt=""
              />
            </Box>
            <Typography
              sx={{
                paddingTop: "15px",
                textAlign: "center",
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                color: "#6d6b6b",
                fontSize: "15px",
                lineHeight: 1.5,
                letterSpacing: "0px",
                paddingRight: "15px",
                paddingLeft: "15px",
                paddingBottom: "20px",
              }}>
              Good, reliable service is offered here - with attention to detail
              and with clear communication about possible problems I should be
              aware of.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              Ann Smith
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
