import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function RecipeSteps(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {props.steps.map((step, index) => {
        const id = `panel-${index}`;

        return (
          <Accordion
            expanded={expanded === id}
            onChange={handleChange(id)}
            key={`recipe-step-${index}`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={id + "-content"}
              id={id + "-header"}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {step.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{step.text_content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
