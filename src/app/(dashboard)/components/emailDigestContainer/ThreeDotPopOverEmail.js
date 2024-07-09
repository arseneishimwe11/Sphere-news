import { useState } from "react";
import { Divider, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Popover from "@mui/material/Popover";
import { Button } from "@mui/material";
import RecipientsPopUp from "./RecipientsPopUp";
import Link from "next/link";
import StepperModal from "./StepperModal";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ThreeDotPopOverEmail = ({ index, deleteHighlightData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const [openStepper, setOpenStepper] = useState(false);
  const [stepperPage, setStepperPage] = useState(0);

  const handleStepperOpen = (index) => {
    setOpenStepper(true);
    setStepperPage(index);
  };
  const handleStepperClose = () => {
    setOpenStepper(false);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const handleConfirmClick = () => {
    setOpenConfirm(true);
  };
  const handleConfirmClose = (conf, index) => {
    setOpenConfirm(false);
    deleteHighlightData(conf && index);
  };

  return (
    <>
      <IconButton onClick={handleClick} aria-describedby={id}>
        <MoreHorizIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="flex flex-col w-[250px] items-start">
          <Button
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "black",
              marginTop: "20px",
              width: "100%",
              justifyContent: "flex-start",
            }}
            onClick={() => {
              // handleClose();
              handleModalOpen();
            }}
          >
            Recipients
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "black",
              width: "100%",
              justifyContent: "flex-start",
            }}
            onClick={() => handleStepperOpen(0)}
          >
            Schedule
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "black",
              width: "100%",
              justifyContent: "flex-start",
            }}
            onClick={() => handleStepperOpen(1)}
          >
            Content
          </Button>
          <Link href="/Collections">
            <Button
              sx={{
                textTransform: "none",
                fontSize: "20px",
                color: "black",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              Preview
            </Button>
          </Link>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "black",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            Unsubscribe
          </Button>
          <Divider sx={{ width: "100%" }} />
          <Button
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "red",
              width: "100%",
              justifyContent: "flex-start",
            }}
            onClick={() => {
              // deleteHighlightData(index);
              handleConfirmClick();
            }}
          >
            Delete
          </Button>
          <>
            <Dialog
              open={openConfirm}
              onClose={handleConfirmClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Confirm Delete?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Delete Contacts if you confirm
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleConfirmClose}>Disagree</Button>
                <Button onClick={() => handleConfirmClose(true, index)} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </>
        </div>
        <RecipientsPopUp
          openModal={openModal}
          handleModalClose={handleModalClose}
        />
        <StepperModal
          openStepper={openStepper}
          handleStepperClose={handleStepperClose}
          index={stepperPage}
        />
      </Popover>
    </>
  );
};

export default ThreeDotPopOverEmail;
