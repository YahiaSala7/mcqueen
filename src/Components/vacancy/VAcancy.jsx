import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import vacancyimage from "../../assets/imgs/vacancyImage.jpg";
import { SectionWrapper } from "../hoc";
const VAcancy = () => {
  return (
    <Box className="section">
      <Container>
        <Stack
          justifyContent={"center"}
          gap={"30px"}
          sx={{
            gap: { md: "30px", xs: "5px" },
          }}
          flexWrap={"wrap"}
          direction={"row"}>
          <Box
            sx={{
              flex: { md: "0 0 48.6%", xs: "0 0 100%" },
              maxWidth: { md: " 50%", xs: " 100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <img style={{ width: "100%" }} src={vacancyimage} alt="" />
          </Box>
          <Box
            sx={{
              paddingTop: "15px",
              paddingBottom: "15px",
              flex: { md: "0 0 48.6%", xs: "0 0 100%" },
              maxWidth: { md: "50%", xs: "100%" },
            }}>
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "20px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                }}>
                Senior Job Position
              </Typography>
              <p
                style={{
                  margin: "0",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                &nbsp;
              </p>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontFamily: "'Roboto Slab', serif",
                  color: "#6d6b6b",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                We're looking for experienced professionals with personal point
                of view and problem-solving technique.
              </Typography>
              <p
                style={{
                  margin: "0",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                &nbsp;
              </p>
              <p
                style={{
                  margin: "0",

                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                  display: "block",
                }}>
                &nbsp;
              </p>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "20px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                }}>
                Middle Job Position
              </Typography>
              <p
                style={{
                  margin: "0",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                &nbsp;
              </p>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontFamily: "'Roboto Slab', serif",
                  color: "#6d6b6b",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                There are a few "hot" vacancies in our company. Don;t miss your
                chance and send your CV.
              </Typography>
              <p
                style={{
                  margin: "0",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                &nbsp;
              </p>
              <p
                style={{
                  margin: "0",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                &nbsp;
              </p>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "20px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                }}>
                Junior Job Position
              </Typography>
              <p
                style={{
                  margin: "0",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                &nbsp;
              </p>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontFamily: "'Roboto Slab', serif",
                  color: "#6d6b6b",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                Don't gave enough skills, but enthusiastic about becoming a
                professional?
                <br />
                Join us!
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionWrapper(VAcancy, "vacancy");
