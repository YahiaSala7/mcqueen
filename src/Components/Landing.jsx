import { Box, Container, Stack, Typography } from "@mui/material";
import landingimg from "../assets/imgs/landing.jpg";
const Landing = () => {
  return (
    <Box
      maxWidth="false"
      sx={{
        backgroundImage: `url(${landingimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        position: "relative",
      }}>
      <Container
        direction="row"
        sx={{
          position: "absolute",
          top: "240px",
          width: "fit-content",
          display: "flex",
          gap: "7px",
          left: { xs: "0", sm: "40px" },
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
          }}></Box>
        <Stack lineHeight={2}>
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: { xs: "35px", sm: "55px" },
            }}></Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "30px" },
            }}
            mb="10px"></Typography>
        </Stack>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "10px", sm: "20px" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <a href="#about"></a>
      </Box>
    </Box>
  );
};

export default Landing;
