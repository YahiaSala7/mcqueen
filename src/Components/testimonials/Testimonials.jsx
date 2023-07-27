import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import testi1 from "../../assets/imgs/testimonials1.jpg";
import testi2 from "../../assets/imgs/testimonials2.jpg";
import testi3 from "../../assets/imgs/testimonials3.jpg";
const Testimonials = () => {
  return (
    <Box className="section">
      <Container>
        <Box className="mainTitle">
          <Typography>What People Say?</Typography>
        </Box>
        <Stack className="content">
          <Box className="user1">
            <Box className="quteMark">“</Box>
            <Box className="image">
              <img src={testi1} alt="" />
            </Box>
            <Typography>
              Everyone here is professional and they treat you like a person
              unlike many of the name brand shops. They are honest and will work
              with you.
            </Typography>
            <Typography>Antony Moore</Typography>
          </Box>
          <Box className="user2">
            <Box className="quteMark">“</Box>
            <Box className="image">
              <img src={testi2} alt="" />
            </Box>
            <Typography>
              I have been using CarRepair for two years now. They keep my FJ in
              tip top condition. And the best thing as a single woman is being
              able to trust them.
            </Typography>
            <Typography>Bryan Thompson</Typography>
          </Box>
          <Box className="user3">
            <Box className="quteMark">“</Box>
            <Box className="image">
              <img src={testi3} alt="" />
            </Box>
            <Typography>
              Good, reliable service is offered here - with attention to detail
              and with clear communication about possible problems I should be
              aware of.
            </Typography>
            <Typography>Ann Smith</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
