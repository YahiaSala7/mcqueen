import { Box, Stack, Container, Typography, Link } from "@mui/material";
import React from "react";
import logo from "../../assets/imgs/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
const Footer = () => {
  return (
    <Box sx={{ background: "#232222" }}>
      <Container>
        <Box
          sx={{
            paddingTop: { xs: "25px", sm: "30px", md: "50px" },
            paddingBottom: "15px",
            width: "100%",
          }}>
          <div style={{ height: "15px" }}></div>
        </Box>

        {/* kjdashfkasjdf */}

        <Stack direction={"row"} flexWrap={"wrap"}>
          <Box
            sx={{
              flex: {
                xs: "0 0 100%",
                md: "0 0 25.33333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 25.3333333%",
              },
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}>
              <Link href="#">
                <Box
                  sx={{
                    display: "inline-block",
                    width: "fit-content",
                    paddingRight: "15px",
                    maxWidth: "100%",
                  }}>
                  <img
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={logo}
                    alt=""
                  />
                </Box>
              </Link>
              <Link
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: 1.2,
                  letterSpacing: "0px",
                  fontFamily: " 'Montserrat', sans-serif",
                }}
                href="#">
                Carioti
              </Link>
            </Box>

            <Box
              sx={{
                paddingBottom: "15px",
                color: "#ffffff",
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                fontSize: "15px",
                lineHeight: 1.5,
                letterSpacing: "0px",
              }}>
              Carioti has been providing reliable maintenance services for
              vehicles of all sizes and manufacturers since 2002.
            </Box>
          </Box>
          <Box
            sx={{
              flex: {
                xs: "0 0 0%",
                md: "0 0 8%",
              },
              maxWidth: {
                xs: "0 0 0%",
                md: "0 0 8%",
              },
            }}></Box>
          <Box
            sx={{
              flex: {
                xs: "0 0 100%",
                md: "0 0 33.333333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 33.3333333333%",
              },
            }}>
            <Typography
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: 1.2,
                letterSpacing: "0px",
                fontFamily: " 'Montserrat', sans-serif",
              }}>
              Contact Us
            </Typography>

            <Box>
              <ul>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                  <PhoneIcon style={{ fontSize: "14px", color: "#edb901" }} />
                  <Link
                    href=""
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      fontWeight: 300,
                      transition: "0.3s",
                    }}
                    sx={{
                      "&:hover": {
                        color: " #edb901 !important",
                      },
                    }}>
                    1-800-1234-567
                  </Link>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                  <EmailIcon style={{ fontSize: "14px", color: "#edb901" }} />
                  <Link
                    href=""
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      fontWeight: 300,
                      transition: "0.3s",
                    }}
                    sx={{
                      "&:hover": {
                        color: " #edb901 !important",
                      },
                    }}>
                    {" "}
                    info@demolink.org
                  </Link>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",

                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: 300,
                  }}>
                  <PlaceIcon style={{ fontSize: "14px", color: "#edb901" }} />
                  4801 South University Drive Suite, United States
                </li>
              </ul>
            </Box>
          </Box>
          <Box
            sx={{
              flex: {
                xs: "0 0 100%",
                md: "0 0 33.333333333%",
              },
              maxWidth: {
                xs: "0 0 100%",
                md: "0 0 33.3333333333%",
              },
            }}>
            <Typography
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: 1.2,
                letterSpacing: "0px",
                fontFamily: " 'Montserrat', sans-serif",
              }}>
              Social Links{" "}
            </Typography>
            <Box>
              <ul style={{ display: "flex" }}>
                <a href="">
                  <li
                    style={{
                      marginRight: "14px",
                      width: "28px",
                      height: "28px",
                      backgroundColor: "#edb901",
                      borderRadius: "75px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <TwitterIcon
                      style={{
                        fontSize: "14px",
                        color: "#ffffff",
                      }}
                    />
                  </li>
                </a>
                <a href="">
                  <li
                    style={{
                      marginRight: "14px",
                      width: "28px",
                      height: "28px",
                      backgroundColor: "#edb901",
                      borderRadius: "75px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <FacebookOutlinedIcon
                      style={{
                        fontSize: "14px",
                        color: "#ffffff",
                      }}
                    />
                  </li>
                </a>
                <a href="">
                  <li
                    style={{
                      marginRight: "14px",
                      width: "28px",
                      height: "28px",
                      backgroundColor: "#edb901",
                      borderRadius: "75px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <InstagramIcon
                      style={{
                        fontSize: "14px",
                        color: "#ffffff",
                      }}
                    />
                  </li>
                </a>
                <a href="">
                  <li
                    style={{
                      marginRight: "14px",
                      width: "28px",
                      height: "28px",
                      backgroundColor: "#edb901",
                      borderRadius: "75px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <PinterestIcon
                      style={{
                        fontSize: "14px",
                        color: "#ffffff",
                      }}
                    />
                  </li>
                </a>
              </ul>
            </Box>
            <Typography
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
                fontWeight: 300,
                fontFamily: "'Roboto Slab', serif",
                color: "#ffffff",
                fontSize: "14px",
                lineHeight: 1.7,
                letterSpacing: "0px",
              }}>
              {" "}
              © 2019 All rights reserved.
            </Typography>
          </Box>
        </Stack>

        {/* kjdashfkasjdf */}
        <Box
          sx={{
            width: "100%",
            paddingTop: { xs: "25px", sm: "30px", md: "50px" },
            paddingBottom: "15px",
          }}>
          <div style={{ height: "15px" }}></div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
