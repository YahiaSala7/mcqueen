import { Box, Stack, Typography, Grid, Container } from "@mui/material";
import { ourTeam } from "../Constants/Constants";

const TeamMember = (Props) => {
  const { team } = Props;
  const { id, name, img, role, info } = team;
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      gap="20px"
      alignItems="center">
      <img
        src={img}
        alt={name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <Stack alignItems={{ xs: "center", sm: "flex-start" }}>
        <Typography
          fontWeight="bold"
          fontSize={{ xs: "18px", sm: "24px" }}
          color="black ">
          {name}
        </Typography>
        <Typography
          fontSize="14px"
          fontWeight="bold"
          color="var(--primary-color) "
          mb="20px">
          {role}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", sm: "16px" }}
          color="#777"
          textAlign={{ xs: "center", sm: "start" }}>
          {info}
        </Typography>
      </Stack>
    </Stack>
  );
};
function OurTeam() {
  return (
    <Box py="100px" px="10px" bgcolor="#f4f4f4">
      <Container>
        <Typography
          fontSize={{ xs: "22px", sm: "40px" }}
          color="black"
          fontWeight="bold"
          mb="30px"
          textAlign="center">
          Our Team
        </Typography>
        <Grid container>
          {ourTeam.map((team) => (
            <Grid item xs={12} sm={6} key={team.id} p="10px">
              <TeamMember team={team} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OurTeam;
