import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import landingimg from "../assets/imgs/landing.jpg";
import { useState } from "react";
import { Telegram } from "@mui/icons-material";
const Landing = () => {
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    alert("");
    setOpen(false);
  };
  return (
    <Box
      maxWidth="false"
      sx={{
        backgroundImage: `url(${landingimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
      }}>
      <Stack justifyContent="center" alignItems="center" height="100vh">
        <Typography
          fontWeight="bold"
          sx={{
            fontSize: { xs: "35px", sm: "55px" },
            textAlign: "center",
            color: "white",
            lineHeight: "1",
            mb: "30px",
          }}>
          Title of Your Product, <br /> Service or Event
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "20px" },
            textAlign: "center",
            color: "#d6d1d1",
          }}
          mb="10px">
          It&apos;s a tag line, where you can write a key point of your idea.
        </Typography>
        <Button></Button>
        <Box>
          <Button
            onClick={() => setOpen(true)}
            variant="text"
            sx={{ color: "#edb901", "&:hover": { color: "white" } }}
            endIcon={<Telegram sx={{ color: "white" }} />}>
            call action
          </Button>
          <Dialog
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            open={open}
            onClose={() => setOpen(false)}>
            <DialogTitle
              id="dialog-title"
              sx={{
                textAlign: "center",
                fontSize: { xs: "18px", sm: "50px" },
              }}>
              Request a Callback
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="dialog-description"
                sx={{ textAlign: "center" }}>
                We can call you in 30 seconds, just enter your number below
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <TextField required label="Name" fullWidth />
              <TextField required label="Phone" fullWidth />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#edb901",
                  border: "solid 1px #edb901",
                  color: "black",
                  "&:hover": { bgcolor: "#edb901" },
                }}>
                Request
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Stack>
    </Box>
  );
};

export default Landing;
