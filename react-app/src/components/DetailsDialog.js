import { Typography, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { wpConfig } from "../config/wpConfig";
import "../styles/DetailsDialog.css";

const DetailsDialog = ({ stateInfo, open, setOpen, extraText = "" }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      slotProps={{
        paper: {
          sx: {
            overflowX: "hidden", // Prevent horizontal scroll
          },
        },
      }}
    >
      <DialogTitle
        sx={{ paddingBottom: 5, backgroundColor: (stateInfo ? stateInfo.color : wpConfig.secondaryColor)}}
      >
        {stateInfo?.shortDescription} {stateInfo?.textRepresentation}{" "}
        {stateInfo?.extraData}
      </DialogTitle>
      <DialogContent
        style={{
          backgroundColor: stateInfo
            ? stateInfo.color
            : wpConfig.secondaryColor,
        }}
      >
        <Typography component="p">{stateInfo?.description}</Typography>
        <Typography
          component="p"
          dangerouslySetInnerHTML={{ __html: extraText }}
        ></Typography>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
