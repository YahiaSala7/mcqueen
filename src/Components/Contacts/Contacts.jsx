import { Box, Container, Typography } from "@mui/material";

import FormikContainer from "./FormikContainer";
import { SectionWrapper } from "../hoc";

const Contacts = () => {
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
        Contact Us
      </Typography>
      <Container>
        <div className="formContainer">
          <FormikContainer />
        </div>
      </Container>
    </Box>
  );
};

export default SectionWrapper(Contacts, "contacts");
