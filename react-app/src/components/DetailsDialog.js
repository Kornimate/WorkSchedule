import { Typography, Dialog, DialogTitle, DialogContent } from "@mui/material";
import "../styles/DetailsDialog.css"

const DetailsDialog = ({ stateInfo, open, setOpen, extraText="" }) => {
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
      <DialogTitle sx={{paddingBottom: 5}} className={stateInfo ? stateInfo.color : "bg-gray"}>{stateInfo?.shortDescription} {stateInfo?.textRepresentation} {stateInfo?.extraData}</DialogTitle>
      <DialogContent className={stateInfo ? stateInfo.color : "bg-gray"}>
        <Typography component="p" >{stateInfo?.description}</Typography>
        <Typography component="p" dangerouslySetInnerHTML={{ __html: extraText }} ></Typography>
      </DialogContent>
    </Dialog>
  );
}

export default DetailsDialog;