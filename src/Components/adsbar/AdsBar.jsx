import { Container, Stack, Box, Button } from "@mui/material";
import adsImgae from "../../assets/imgs/AdsSection.jpg";
import { SectionWrapper } from "../hoc";
const AdsBar = () => {
  return (
    <Stack
      className="section"
      sx={{
        width: "100%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${adsImgae})`,
        backgroundAttachment: {
          xs: "initial",
          md: "fixed",
        },
      }}>
      <Container>
        <Box
          sx={{
            transition: "0.3s",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 1)",
            },
          }}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}>
          <Box
            display={"flex"}
            width={"100%"}
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              paddingTop: { xs: "30px", md: "50px" },
              paddingBottom: { xs: "30px", md: "50px" },
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Box
              sx={{
                flex: { md: "0 75%", xs: "0 100%" },
                width: "100%",
                fontSize: { xs: "28px", sm: "28px", md: "50px" },
                paddingRight: { xs: "30px", md: "50px" },
                paddingLeft: { xs: "30px", md: "50px" },
                paddingTop: "15px",
                paddingBottom: "15px",
                fontWeight: 700,
                fontStyle: "normal",
                fontFamily: "'Montserrat', sans-serif",
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: " 0px",
              }}>
              Get Your{" "}
              <span
                style={{
                  color: "#edb901",
                }}>
                10% Off
              </span>{" "}
              on Batteries
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flex: { md: "0 25%", xs: "0 100%" },
                width: "100%",
              }}
              style={{
                paddingRight: "15px",
                paddingLeft: "15px",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
              className="button">
              <Button
                sx={{
                  minWidth: {
                    md: "195px",
                    xs: "150px",
                  },
                  padding: {
                    md: "14px 10px",
                    xs: "11px 10px",
                  },
                  position: "relative",
                  textAlign: "center",
                  zIndex: 1,
                  borderRadius: 0,
                  lineHeight: 1.2,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  transition: ".3s",
                  fontSize: "15px",
                  fontFamily: "'Roboto Slab', serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: "#ffffff",
                  backgroundColor: "#edb901",
                  borderColor: "transparent transparent #ffffff",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#edb901",
                    borderColor: "transparent transparent #ffffff",
                  },
                }}>
                Call2Action
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default SectionWrapper(AdsBar, "adsbar");
