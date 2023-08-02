import { Container, Stack, Box, Typography } from "@mui/material";
import React from "react";
import partner1 from "../../assets/imgs/partners1.png";
import partner2 from "../../assets/imgs/partners2.png";
import partner3 from "../../assets/imgs/partners3.png";
import { SectionWrapper } from "../hoc";
const Partner = () => {
  return (
    <Stack className="section">
      <Box className="mainTitle">
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
          Our Partners
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
          className="parteners">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: { xs: "25px", md: "40px" },
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            className="partner1">
            <div
              style={{
                flex: " 0 0 50%",
                maxWidth: "50%",
              }}
              className="iamge">
              <img
                style={{
                  maxWidth: "100%",
                }}
                src={partner1}
                alt=""
              />
            </div>

            <Box
              sx={{
                flex: " 0 0 50%",
                maxWidth: "50%",
              }}
              className="text">
              <Typography
                sx={{
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "20px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                  paddingBottom: "20px",
                }}>
                Company Name
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontFamily: "'Roboto Slab', serif",
                  color: "#6d6b6b",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                Company Description
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: { xs: "25px", md: "40px" },
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            className="partner2">
            <div
              style={{
                flex: " 0 0 50%",
                maxWidth: "50%",
              }}
              className="iamge">
              <img
                style={{
                  maxWidth: "100%",
                }}
                src={partner2}
                alt=""
              />
            </div>{" "}
            <Box
              sx={{
                flex: " 0 0 50%",
                maxWidth: "50%",
              }}
              className="text">
              <Typography
                sx={{
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "20px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                  paddingBottom: "20px",
                }}>
                Company Name
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontFamily: "'Roboto Slab', serif",
                  color: "#6d6b6b",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                Company Description
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: { xs: "25px", md: "40px" },
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            className="partner3">
            <div
              style={{
                flex: " 0 0 50%",
                maxWidth: "50%",
              }}
              className="iamge">
              <img
                style={{
                  maxWidth: "100%",
                }}
                src={partner3}
                alt=""
              />
            </div>{" "}
            <Box
              sx={{
                flex: " 0 0 50%",
                maxWidth: "50%",
              }}
              className="text">
              <Typography
                sx={{
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "20px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                  paddingBottom: "20px",
                }}>
                Company Name
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontFamily: "'Roboto Slab', serif",
                  color: "#6d6b6b",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0px",
                }}>
                Company Description
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default SectionWrapper(Partner, "sponsors");
