import "../styles/Legend.css";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const Legend = () => {
    return (
        <div className="center-div">
                <div className="legend-container">
                <Accordion sx={{backgroundColor: "#282c34", border: "3px solid white", borderRadius: 3, color: "white"}}>
                    <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        justifyContent: 'center',
                        '& .MuiAccordionSummary-content': {
                            justifyContent: 'center',
                            textAlign: 'center',
                        }
                    }}
                    >
                        <Typography component="span">Signs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="working" title="working">Work 🕐</div>
                        <div className="not-working" title="not-working">No Work ❌</div>
                        <div className="conditionally-working" title="conditionally-working">Conditional Work ❓</div>
                        <div className="offline-working" title="offline-working">Offline Work 🛜🚫</div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Legend;