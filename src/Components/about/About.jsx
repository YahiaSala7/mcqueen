import { Box, Container, Stack, Typography } from "@mui/material";
import couches from "../../assets/imgs/couches-about.jpg";
const About = () => {
  return (
    <Stack
      className="section"
      sx={{
        backgroundColor: "white",
      }}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Container>
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "83%" },

            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <Box sx={{ maxWidth: "100%" }}>
            <img width={"100%"} src={couches} alt="" />
          </Box>
          <Typography
            textAlign={"center"}
            paddingBottom={"30px"}
            fontFamily="'Montserrat', sans-serif"
            fontWeight={700}
            lineHeight={1.2}
            sx={{
              paddingTop: "15px",
              fontSize: { xs: "25px", sm: "28px", md: "40px" },
            }}
            color={"#232222"}>
            About Our Company
          </Typography>
          <Typography
            fontFamily="'Roboto Slab', serif"
            fontWeight={300}
            lineHeight={1.6}
            fontSize={"18px"}
            textAlign={"center"}
            color="#6d6b6b">
            If you have a problem with your car, we'll quickly and effectively
            eliminate the problem, perform all work connected with the repair of
            your vehicle, efficiently and inexpensive. We are ready to provide
            you with a full range of services for warranty and post-warranty
            maintenance and repair of any car.
          </Typography>
        </Box>
      </Container>
    </Stack>
  );
};

export default About;
