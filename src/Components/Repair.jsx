import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { repair } from "../assets/imgs";

function Repair() {
  return (
    <Box bgcolor="white" py="100px" px="10px">
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}>
        <Stack
          justifyContent="center"
          alignItems={{ xs: "center", sm: "flex-start" }}>
          <Typography
            fontSize={{ xs: "22px", sm: "40px" }}
            fontWeight="bold"
            color="black"
            mb="20px"
            textAlign={{ xs: "center", sm: "start" }}>
            Brakes & Brake Repair
          </Typography>
          <Typography color="#777" textAlign={{ xs: "center", sm: "start" }}>
            If you&apos;re in need of a brake service and inspection, look no
            further than CarRepair, where we offer free brake checks seven days
            a week, all year long. Bring your vehicle in and our tire and auto
            service professionals will perform a free brake check service.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              p: "15px 40px",
              mt: "50px ",
              bgcolor: "var(--primary-color)",
              color: "white",
              border: "1px solid var(--primary-color)",
              "&:hover": { bgcolor: "#6d6b6b", border: "1px solid #6d6b6b" },
              borderRadius: "0",
            }}>
            Call2Action
          </Button>
        </Stack>
        <img src={repair} alt="repair" style={{ maxwidth: "100%" }} />
      </Container>
    </Box>
  );
}

export default Repair;
