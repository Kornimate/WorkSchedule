import "../styles/Legend.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { wpConfig } from "../config/wpConfig";

const Legend = () => {
  return (
    <div className="center-div">
      <div className="legend-container">
        <Accordion
          sx={{
            backgroundColor: wpConfig.backgroundColor,
            border: `3px solid ${wpConfig.borderColor}`,
            borderRadius: 3,
            color: wpConfig.textColor,
          }}
        >
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              justifyContent: "center",
              "& .MuiAccordionSummary-content": {
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: wpConfig.backgroundColor
              },
            }}
          >
            <Typography component="span" sx={{backgroundColor: wpConfig.backgroundColor}}>Signs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              className="working"
              title="working"
              style={{ backgroundColor: wpConfig.primaryColor }}
            >
              Work 🕐
            </div>
            <div
              className="not-working"
              title="not-working"
              style={{ backgroundColor: wpConfig.secondaryColor }}
            >
              No Work ❌
            </div>
            <div
              className="conditionally-working"
              style={{ backgroundColor: wpConfig.conditionalColor }}
              title="conditionally-working"
            >
              Conditional Work ❓
            </div>
            <div
              className="offline-working"
              title="offline-working"
              style={{ backgroundColor: wpConfig.offlineColor }}
            >
              Offline Work 🛜🚫
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Legend;
