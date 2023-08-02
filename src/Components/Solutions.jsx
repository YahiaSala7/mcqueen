import { Box, Container, Stack, Typography } from "@mui/material";
import { solutions } from "../assets/imgs";
import { solutionsSection } from "../Constants/Constants";
import { SectionWrapper } from "./hoc";
const InfoSteps = (Props) => {
  const { info } = Props;
  const { infoStep, number } = info;
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      pb={{ xs: "5px", sm: "25px" }}
      gap={{ sm: "15px", xs: "0" }}>
      <Box
        sx={{
          width: { xs: "0", md: number === "02" ? "25%" : "" },
        }}></Box>
      <Box
        sx={{
          width: { xs: "0", md: number === "03" ? "50%" : "" },
        }}></Box>

      <Typography
        color="var(--primary-color)"
        fontSize={{ sm: "50px", xs: "35px" }}
        fontWeight="bold">
        {number}
      </Typography>
      <Stack>
        <Typography
          fontSize={{
            xs: "18px",
            sm: "24px",
          }}
          color="white"
          fontWeight="bold">
          Step
        </Typography>
        <Typography
          display="flex"
          alignItems="center"
          gap="25px"
          maxWidth="500px"
          color="white">
          {infoStep}
        </Typography>
      </Stack>
    </Stack>
  );
};
function Solutions() {
  return (
    <Box
      py="100px"
      px="10px"
      bgcolor="#f4f4f4"
      sx={{
        backgroundImage: `url(${solutions})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: { sm: "70vh" },
      }}>
      <Container
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Typography
          fontSize={{
            xs: "22px",
            sm: "40px",
          }}
          color="white"
          fontWeight="bold"
          mb="30px"
          textAlign="center">
          Solution in 3 Easy Steps
        </Typography>

        <Box
          display="flex"
          justifyContent="space-around"
          flexDirection="column"
          flexGrow={1}>
          {solutionsSection.map((info) => (
            <Box key={info.id}>
              <InfoSteps info={info} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default SectionWrapper(Solutions, "3stepssolution");
