import { Typography, Dialog, DialogTitle, DialogContent } from "@mui/material";
import "../styles/WeeklyView.css"

const DetailsDialog = ({ stateInfo, open, setOpen }) => {
    const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open} slotProps={{
        paper: {
          sx: {
            overflowX: 'hidden', // Prevent horizontal scroll
          },
        },
      }} >
      <DialogTitle className={stateInfo ? stateInfo.color : "bg-gray"}>{stateInfo?.shortDescription} {stateInfo?.textRepresentation} {stateInfo?.extraData}</DialogTitle>
      <DialogContent className={stateInfo ? stateInfo.color : "bg-gray"}>
        <Typography component="p" >{stateInfo?.description}</Typography>
      </DialogContent>
    </Dialog>
  );
}

export default DetailsDialog;