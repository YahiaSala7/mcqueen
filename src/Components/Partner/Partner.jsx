import { Container, Stack, Box, Typography } from "@mui/material";
import React from "react";
import partner1 from "../../assets/imgs/partners1.png";
import partner2 from "../../assets/imgs/partners2.png";
import partner3 from "../../assets/imgs/partners3.png";
const Partner = () => {
  return (
    <Stack className="section">
      <Container>
        <Box className="mainTitle">
          <Typography>Our Partners</Typography>
        </Box>
        <Box className="partner1">
          <img src={partner1} alt="" />
          <Box className="text">
            <Typography>Company Name</Typography>
            <Typography>Company Description</Typography>
          </Box>
        </Box>
        <Box className="partner2">
          <img src={partner2} alt="" />
          <Box className="text">
            <Typography>Company Name</Typography>
            <Typography>Company Description</Typography>
          </Box>
        </Box>
        <Box className="partner3">
          <img src={partner3} alt="" />
          <Box className="text">
            <Typography>Company Name</Typography>
            <Typography>Company Description</Typography>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default Partner;
