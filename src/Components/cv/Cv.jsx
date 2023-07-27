import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import cvImage from "../../assets/imgs/cvSection.jpg";
const Cv = () => {
  return (
    <Stack className="section">
      <Container>
        <Box>
          <img src={cvImage} alt="" />
        </Box>
        <Box>
          <Box className="texts">
            <Typography>Karl Landing</Typography>
            <Typography>
              Karl is the person with the longest mechanical experience when
              cars are concerned. He’s been fixing Lincolns when you still even
              weren’t eligible for a driving license!
            </Typography>
          </Box>
          <Box className="Sills">
            <Box className="skillnum1">
              <Box>
                <Typography>car motor repair</Typography> <span>60%</span>
              </Box>
              <Box className="bar"></Box>
            </Box>
            <Box className="skillnum2">
              <Box>
                <Typography>car body repair</Typography> <span>80%</span>
              </Box>

              <Box className="bar"></Box>
            </Box>
            <Box className="skillnum3">
              <Box>
                <Typography>transmission repair</Typography> <span>90%</span>
              </Box>

              <Box className="bar"></Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default Cv;
