import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import cvImage from "../../assets/imgs/cvSection.jpg";
const Cv = () => {
  return (
    <Box className="section">
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          alignItems={"center"}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              flex: {
                xs: "0 0 100%",
                md: " 0 0 49%",
              },
              maxWidth: {
                xs: "100%",
                md: "50%",
              },
            }}>
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              src={cvImage}
              alt=""
            />
          </Box>
          <Box
            sx={{
              flex: {
                xs: "0 0 100%",
                md: " 0 0 49%",
              },
              maxWidth: {
                xs: "100%",
                md: "50%",
              },
            }}>
            <Box
              sx={{
                paddingBottom: "15px",
                paddingTop: {
                  xs: "25px",
                  sm: "30px",
                  md: "50px",
                },
              }}
              className="texts">
              <Typography
                sx={{
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: { xs: "28px", sm: "28px", md: "40px" },
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                  marginBottom: "28.5px",
                }}>
                Karl Landing
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontFamily: "'Roboto Slab', serif",
                  lineHeight: 1.6,
                  color: "#6d6b6b",
                  fontSize: { xs: "15px", sm: "15px", md: "15px" },
                  letterSpacing: "0px",
                }}>
                Karl is the person with the longest mechanical experience when
                cars are concerned. He’s been fixing Lincolns when you still
                even weren’t eligible for a driving license!
              </Typography>
            </Box>
            <Box
              sx={{
                paddingBottom: "15px",
                paddingTop: {
                  xs: "25px",
                  sm: "30px",
                  md: "50px",
                },
              }}
              className="Sills">
              <Box
                sx={{
                  width: "100%",
                }}
                className="skillnum1">
                <Box
                  sx={{
                    display: "flex",
                    paddingBottom: "5px",
                  }}>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontFamily: "'Roboto Slab', serif",
                      color: "#6d6b6b",
                      fontSize: "15px",
                      lineHeight: 1.9,
                      letterSpacing: "0px",
                      flex: "2 1 auto",
                    }}>
                    car motor repair
                  </Typography>{" "}
                  <span
                    style={{
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontFamily: "'Roboto Slab', serif",
                      color: "#6d6b6b",
                      fontSize: "15px",
                      lineHeight: 1.9,
                      letterSpacing: "0px",
                      flex: "1 1 auto",
                      textAlign: "right",
                      marginLeft: "30px",
                    }}>
                    60%
                  </span>
                </Box>
                <Box
                  width={"60%"}
                  height={"10px"}
                  sx={{
                    backgroundColor: "#fe3f42",
                    borderRadius: "5px",
                  }}
                  className="bar"></Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
                className="skillnum2">
                <Box
                  sx={{
                    display: "flex",
                    paddingBottom: "5px",
                  }}>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontFamily: "'Roboto Slab', serif",
                      color: "#6d6b6b",
                      fontSize: "15px",
                      lineHeight: 1.9,
                      letterSpacing: "0px",
                      flex: "2 1 auto",
                    }}>
                    car body repair
                  </Typography>{" "}
                  <span
                    style={{
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontFamily: "'Roboto Slab', serif",
                      color: "#6d6b6b",
                      fontSize: "15px",
                      lineHeight: 1.9,
                      letterSpacing: "0px",
                      flex: "1 1 auto",
                      textAlign: "right",
                      marginLeft: "30px",
                    }}>
                    80%
                  </span>
                </Box>

                <Box
                  width={"80%"}
                  height={"10px"}
                  sx={{
                    backgroundColor: "#125cce",
                    borderRadius: "5px",
                  }}
                  className="bar"></Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
                className="skillnum3">
                <Box
                  sx={{
                    display: "flex",
                    paddingBottom: "5px",
                  }}>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontFamily: "'Roboto Slab', serif",
                      color: "#6d6b6b",
                      fontSize: "15px",
                      lineHeight: 1.9,
                      letterSpacing: "0px",
                      flex: "2 1 auto",
                    }}>
                    transmission repair
                  </Typography>{" "}
                  <span
                    style={{
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontFamily: "'Roboto Slab', serif",
                      color: "#6d6b6b",
                      fontSize: "15px",
                      lineHeight: 1.9,
                      letterSpacing: "0px",
                      flex: "1 1 auto",
                      textAlign: "right",
                      marginLeft: "30px",
                    }}>
                    90%
                  </span>
                </Box>

                <Box
                  width={"90%"}
                  height={"10px"}
                  sx={{
                    backgroundColor: "#edb901",
                    borderRadius: "5px",
                  }}
                  className="bar"></Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Cv;
