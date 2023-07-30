import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Numbers = () => {
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
        People Love Numbers
      </Typography>
      <Container>
        <Stack direction={"row"} alignItems={"center"} flexWrap={"wrap"}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: {
                xs: "25px",
                sm: "30px",
                md: "50px",
              },
              flex: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
            }}>
            <Box
              sx={{
                border: "2px solid var(--primary-color)",
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "30px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                }}>
                598
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              Projects Done
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: {
                xs: "25px",
                sm: "30px",
                md: "50px",
              },
              flex: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
            }}>
            <Box
              sx={{
                border: "2px solid var(--primary-color)",
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "30px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                }}>
                95
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              Contries Served
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: {
                xs: "25px",
                sm: "30px",
                md: "50px",
              },
              flex: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 33.33333333%",
              },
            }}>
            <Box
              sx={{
                border: "2px solid var(--primary-color)",
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#232222",
                  fontSize: "30px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                }}>
                10
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                color: "#232222",
                fontSize: "20px",
                lineHeight: 1.2,
                letterSpacing: "0px",
              }}>
              Offices Worldwide
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Numbers;
