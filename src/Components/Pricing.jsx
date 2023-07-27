import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { infoPricing } from "../Constants/Constants";

const PricingCard = (Props) => {
  const { infoPricing } = Props;
  const { id, plan, price, details } = infoPricing;
  return (
    <Box
      flexBasis="27%"
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.12)",
      }}>
      <Stack>
        <Stack
          className={id === 2 ? "active" : ""}
          p="60px"
          alignItems="center">
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            fontSize={{ xs: "22px", sm: "25px" }}
            color="black"
            textAlign="center">
            {plan}
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            gutterBottom
            fontWeight="bold"
            fontSize={{ xs: "18px", sm: "22px" }}
            color="black">
            <span
              className={id === 2 ? "active" : ""}
              style={{ color: "var(--primary-color)" }}>
              ${price}
            </span>
            /month
          </Typography>
        </Stack>
        <Divider />
        <Stack alignItems="center" my="30px">
          <Typography color="#777">{details.install} install</Typography>
          <Typography color="#777">{details.Visits}k Visits/mo. </Typography>
          <Typography color="#777">
            {details.localStorage}gb Local Storage
          </Typography>
          <Typography color="#777">{details.data}</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Button
          variant="contained"
          sx={{
            m: "auto",
            p: "10px 30px",
            mb: "50px ",
            bgcolor: "var(--primary-color)",
            color: "white",
            border: "1px solid var(--primary-color)",
            "&:hover": { bgcolor: "#6d6b6b", border: "1px solid #6d6b6b" },
            borderRadius: "none",
          }}>
          Call2Action
        </Button>
      </Stack>
    </Box>
  );
};

function Pricing() {
  return (
    <Box py="100px" px="10px" bgcolor="white">
      <Container>
        <Typography
          fontSize={{ xs: "22px", sm: "40px" }}
          color="black"
          fontWeight="bold"
          mb="30px"
          textAlign="center">
          Pricing Tables
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap="10px"
          flexDirection={{ xs: "column", sm: "column", md: "row" }}>
          {infoPricing.map((infoPricing) => (
            <PricingCard infoPricing={infoPricing} key={infoPricing.id} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;
