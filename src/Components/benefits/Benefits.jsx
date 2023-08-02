import { Container, Stack, Box, Typography } from "@mui/material";
import benefit1 from "../../assets/imgs/Benefit1.png";
import benefit2 from "../../assets/imgs/Benefit2.png";
import benefit3 from "../../assets/imgs/Benefit3.png";
import { SectionWrapper } from "../hoc";
const Benefits = () => {
  return (
    <Box className="section" sx={{ backgroundColor: "white" }}>
      <Container>
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "28px", md: "40px" },
            fontWeight: 700,
            fontFamily: "'Montserrat', sans-serif",
            color: "#232222",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "0px",
          }}>
          Your Main Features & Benefits
        </Typography>
        <Stack
          className="benifitsConatiner"
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
          <Box
            className="benefitNum1"
            sx={{
              flex: { xs: "0 0 100%", sm: " 0 0 33.33333333%" },
              maxWidth: { xs: "100%", sm: "33.33333333%" },
            }}>
            <Box
              className="content"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
              }}>
              <Box
                className="logoBenefit"
                sx={{
                  paddingTop: "50px",
                  paddingBottom: "15px",
                }}>
                <img src={benefit1} alt="" />
              </Box>{" "}
              <Box className="texts">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#232222",
                    fontSize: { xs: "20px", sm: "14px", md: "20px" },
                    lineHeight: 1.2,
                    letterSpacing: "0px",
                    marginBottom: "22.5px",
                  }}>
                  Benefit 1
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontFamily: "'Roboto Slab', serif",
                    color: "#6d6b6b",
                    fontSize: { xs: "14px", sm: "12px", md: "15px" },
                    lineHeight: 1.5,
                    letterSpacing: "0px",
                    textAlign: "center",
                  }}>
                  Add short description of your benefits to show the best of
                  your product, service.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className="benefitNum2"
            sx={{
              flex: { xs: "0 0 100%", sm: " 0 0 33.33333333%" },
              maxWidth: { xs: "100%", sm: "33.33333333%" },
            }}>
            <Box
              className="content"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
              }}>
              <Box
                className="logoBenefit"
                sx={{
                  paddingTop: "50px",
                  paddingBottom: "15px",
                }}>
                <img src={benefit2} alt="" />
              </Box>
              <Box className="texts">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#232222",
                    fontSize: { xs: "20px", sm: "14px", md: "20px" },
                    lineHeight: 1.2,
                    letterSpacing: "0px",
                    marginBottom: "22.5px",
                  }}>
                  Benefit 2
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontFamily: "'Roboto Slab', serif",
                    color: "#6d6b6b",
                    fontSize: { xs: "14px", sm: "12px", md: "15px" },
                    lineHeight: 1.5,
                    letterSpacing: "0px",
                    textAlign: "center",
                  }}>
                  Add short description of your benefits to show the best of
                  your product, service.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className="benefitNum3"
            sx={{
              flex: { xs: "0 0 100%", sm: " 0 0 33.33333333%" },
              maxWidth: { xs: "100%", sm: "33.33333333%" },
            }}>
            <Box
              className="content"
              sx={{
                paddingLeft: "15px",
                paddingRight: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
              }}>
              <Box
                className="logoBenefit"
                sx={{
                  paddingTop: "50px",
                  paddingBottom: "15px",
                }}>
                <img src={benefit3} alt="" />
              </Box>
              <Box className="texts">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#232222",
                    fontSize: { xs: "20px", sm: "14px", md: "20px" },
                    lineHeight: 1.2,
                    letterSpacing: "0px",
                    marginBottom: "22.5px",
                  }}>
                  Benefit 3
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontFamily: "'Roboto Slab', serif",
                    color: "#6d6b6b",
                    fontSize: { xs: "14px", sm: "12px", md: "15px" },
                    lineHeight: 1.5,
                    letterSpacing: "0px",
                    textAlign: "center",
                  }}>
                  Add short description of your benefits to show the best of
                  your product, service.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionWrapper(Benefits, "benefits");
