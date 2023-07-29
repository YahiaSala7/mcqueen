import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const TImeLine = () => {
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
        Show The Timeline of Your Project
      </Typography>
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}>
          <Box
            sx={{
              textAlign: "center",
              flex: { xs: "0 0 100%", md: " 0 0 41.66666667%" },
              maxWidth: { xs: "100%", md: "41.66666667%" },
              paddingTop: { xs: "25px", sm: "30px", md: "50px" },
              paddingBottom: { xs: "15px", md: "15px" },
            }}>
            <Typography
              sx={{
                fontWeight: 700,
                // fontStyle: normal,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              September 2016
            </Typography>
            <Typography>&nbsp;</Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                color: "#6d6b6b",
                fontSize: "15px",
                lineHeight: 1.5,
                letterSpacing: "0px",
              }}>
              Tell about most important steps of making a project. It will add
              credibility.
            </Typography>
          </Box>
          <Box
            sx={{
              color: "#edb901",
              textAlign: "center",
              flex: { xs: "0 0 100%", md: " 0 0 16.66666667%" },
              maxWidth: { xs: "100%", md: "16.66666667%" },
              paddingTop: { xs: "25px", sm: "30px", md: "50px" },
              paddingBottom: { xs: "15px", md: "15px" },
            }}>
            <KeyboardDoubleArrowRightIcon
              style={{
                fontSize: "36px",
              }}
            />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              flex: { xs: "0 0 100%", md: " 0 0 41.66666667%" },
              maxWidth: { xs: "100%", md: "41.66666667%" },
              paddingTop: { xs: "25px", sm: "30px", md: "50px" },
              paddingBottom: { xs: "15px", md: "15px" },
            }}>
            <Typography
              sx={{
                fontWeight: 700,
                // fontStyle: normal,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              October 2016
            </Typography>
            <Typography>&nbsp;</Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                color: "#6d6b6b",
                fontSize: "15px",
                lineHeight: 1.5,
                letterSpacing: "0px",
              }}>
              Tell about most important steps of making a project. It will add
              credibility.
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              width: "75%",
              textAlign: "center",
            }}>
            <hr />
          </Box>
        </Box>
        <Stack
          flexWrap={"wrap"}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Box
            sx={{
              textAlign: "center",
              flex: { xs: "0 0 100%", md: " 0 0 41.66666667%" },
              maxWidth: { xs: "100%", md: "41.66666667%" },

              paddingTop: { xs: "25px", sm: "30px", md: "50px" },
              paddingBottom: { xs: "15px", md: "15px" },
            }}>
            <Typography
              sx={{
                fontWeight: 700,
                // fontStyle: normal,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              November 2016
            </Typography>
            <Typography>&nbsp;</Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                color: "#6d6b6b",
                fontSize: "15px",
                lineHeight: 1.5,
                letterSpacing: "0px",
              }}>
              Tell about most important steps of making a project. It will add
              credibility.
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              color: "#edb901",
              paddingTop: { xs: "25px", sm: "30px", md: "50px" },
              paddingBottom: { xs: "15px", md: "15px" },
              flex: { xs: "0 0 100%", md: " 0 0 16.66666667%" },
              fontSize: "36px",
              maxWidth: { xs: "100%", md: "16.66666667%" },
            }}>
            <KeyboardDoubleArrowRightIcon
              style={{
                fontSize: "36px",
              }}
            />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              flex: { xs: "0 0 100%", md: " 0 0 41.66666667%" },
              maxWidth: { xs: "100%", md: "41.66666667%" },
              paddingTop: { xs: "25px", sm: "30px", md: "50px" },
              paddingBottom: { xs: "15px", md: "15px" },
            }}>
            <Typography
              sx={{
                fontWeight: 700,
                // fontStyle: normal,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              December 2016
            </Typography>
            <Typography>&nbsp;</Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                color: "#6d6b6b",
                fontSize: "15px",
                lineHeight: 1.5,
                letterSpacing: "0px",
              }}>
              Tell about most important steps of making a project. It will add
              credibility.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TImeLine;
