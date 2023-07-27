import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExapndMoreIcon from "@mui/icons-material/ExpandMore";
function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(isExpanded) => handleExpand(isExpanded, "panel1")}>
        <AccordionSummary
          expandIcon={<ExapndMoreIcon />}
          id="panel1-header"
          aria-controls="panel1-content">
          <Typography variant="h5">AccordionSummary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio
            consectetur in similique dolorem eum illum maiores labore atque.
            Incidunt officia animi a ducimus deleniti voluptatem eos facere
            ipsam ad?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleExpand(isExpanded, "panel2")}>
        <AccordionSummary
          expandIcon={<ExapndMoreIcon />}
          id="panel2-header"
          aria-controls="panel2-content">
          <Typography variant="h5">AccordionSummary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio
            consectetur in similique dolorem eum illum maiores labore atque.
            Incidunt officia animi a ducimus deleniti voluptatem eos facere
            ipsam ad?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleExpand(isExpanded, "panel3")}>
        <AccordionSummary
          expandIcon={<ExapndMoreIcon />}
          id="panel3-header"
          aria-controls="panel3-content">
          <Typography variant="h5">AccordionSummary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio
            consectetur in similique dolorem eum illum maiores labore atque.
            Incidunt officia animi a ducimus deleniti voluptatem eos facere
            ipsam ad?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
export default FAQ;
