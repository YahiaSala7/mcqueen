import { Timer } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import BackGround from "../../assets/imgs/counterBackGround.jpg";
const Counter = () => {
  const [time, setTime] = useState({
    day: 0,
    hours: 12,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    let a = setInterval(() => {
      console.log(time);
      if (time.seconds > 0) {
        setTime({ ...time, seconds: time.seconds - 1 });
      } else if (time.minutes > 0) {
        setTime({ ...time, minutes: time.minutes - 1, seconds: 59 });
      } else if (time.hours > 0) {
        setTime({ ...time, hours: time.hours - 1, minutes: 60 });
      }
      //   else if (time.day > 0) {
      //     setTime({ ...time, day: time.day - 1, hours: 24 });
      //     console.log(time);
      //   }
      else {
        clearInterval(a);
      }
    }, 1000);

    return () => {
      clearInterval(a);
    };
  }, [time.seconds, time.hours, time.minutes, time.seconds]);
  return (
    <Box
      className="section"
      sx={{
        backgroundImage: `url(${BackGround})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: { xs: "initial", md: "fixed" },
      }}>
      <Container>
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "28px", md: "40px" },
            fontWeight: 700,
            fontFamily: "'Montserrat', sans-serif",

            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "0px",
          }}>
          People Love Numbers
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "'Montserrat', sans-serif",
                height: "160px",
                width: "160px",
              }}>
              <Box
                sx={{
                  color: "#edb901",
                  // font-style: normal,
                  fontWeight: 600,
                  fontSize: "40px",
                }}>
                {time.day}
              </Box>
              <Box
                sx={{
                  position: "relative",
                  textTransform: "capitalize",
                  bottom: "5px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "20px",
                }}>
                Days
              </Box>
            </Box>
            <Box
              sx={{
                minWidth: "53px",
                fontSize: "30px",
                color: "#ffffff",
                position: "relative",
                clear: "both",
                verticalAlign: "middle",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="seperate">
              :
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "'Montserrat', sans-serif",
                height: "160px",
                width: "160px",
              }}>
              {" "}
              <Box
                sx={{
                  color: "#edb901",
                  // font-style: normal,
                  fontWeight: 600,
                  fontSize: "40px",
                }}>
                {time.hours}
              </Box>
              <Box
                sx={{
                  position: "relative",
                  textTransform: "capitalize",
                  bottom: "5px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "20px",
                }}>
                Hours
              </Box>
            </Box>

            <Box
              sx={{
                minWidth: "53px",
                fontSize: "30px",
                color: "#ffffff",
                position: "relative",
                clear: "both",
                verticalAlign: "middle",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="seperate">
              :
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "'Montserrat', sans-serif",
                height: "160px",
                width: "160px",
              }}>
              <Box
                sx={{
                  color: "#edb901",
                  // font-style: normal,
                  fontWeight: 600,
                  fontSize: "40px",
                }}>
                {time.minutes}
              </Box>
              <Box
                sx={{
                  position: "relative",
                  textTransform: "capitalize",
                  bottom: "5px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "20px",
                }}>
                Minutes
              </Box>
            </Box>

            <Box
              sx={{
                minWidth: "53px",
                fontSize: "30px",
                color: "#ffffff",
                position: "relative",
                clear: "both",
                verticalAlign: "middle",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="seperate">
              :
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "'Montserrat', sans-serif",
                height: "160px",
                width: "160px",
              }}>
              <Box
                sx={{
                  color: "#edb901",
                  // font-style: normal,
                  fontWeight: 600,
                  fontSize: "40px",
                }}>
                {time.seconds}
              </Box>
              <Box
                sx={{
                  position: "relative",
                  textTransform: "capitalize",
                  bottom: "5px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "20px",
                }}>
                Seconds
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
