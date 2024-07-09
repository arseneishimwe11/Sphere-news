import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Button, Icon } from "@mui/material";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

import SettingStepper from "./SettingStepper";
import ContentStepper from "./ContentStepper";
import FieldStepper from "./FieldStepper";
import RecipientsStepper from "./RecipientsStepper";
import ReviewStepper from "./ReviewStepper";

const steps = ["Settings", "Content", "Field", "Recipients", "Review"];
const stepsComponents = [
  <SettingStepper />,
  <ContentStepper />,
  <FieldStepper />,
  <RecipientsStepper />,
  <ReviewStepper />,
];
export const HorizontalLinearStepper = ({index}) => {
  const [activeStep, setActiveStep] = useState(index);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   const handleSkip = () => {
  //     if (!isStepOptional(activeStep)) {
  //       // You probably want to guard against something like this,
  //       // it should never occur unless someone's actively trying to break something.
  //       throw new Error("You can't skip a step that isn't optional.");
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped((prevSkipped) => {
  //       const newSkipped = new Set(prevSkipped.values());
  //       newSkipped.add(activeStep);
  //       return newSkipped;
  //     });
  //   };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box sx={{ width: "100%", padding: "40px" }}>
        <Typography sx={{ fontSize: "27px", marginBottom: "20px" }}>
          Create Digest
        </Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {stepsComponents.find((_, index) => index === activeStep)}
      </Box>
      {activeStep === steps.length ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
            <div>
              <label className="text-3xl font-bold">
                Weekly Digest: Top News digest is complete!
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="text-lg">
                <span className="font-bold">Schedule: </span>The recepitients
                will receive the first scheduled issue on Tue, Dec 19, 01:00
                EST.
              </label>
            </div>
            <div className="my-[20px]">
              <label className="text-lg">
                <span className="font-bold">Content: </span>All new articles
                from the selected sources collected between Mon, Dec 18, 02:23
                EST and Tue, Dec 19, 01:00 EST.
              </label>
            </div>
            <Button
              sx={{ width: "300px", marginX: "auto", textTransform: "none" }}
              variant="contained"
              onClick={handleReset}
            >
              Got it
            </Button>
            <label className="m-auto mt-[20px] italic">Editing the digest source may affect the next distribution!</label>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 2,
              backgroundColor: "#CCC",
            }}
          >
            <Button
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, color: "white", backgroundColor: "#818D9C" }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#003B6B" }}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Save" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

const NewEmailDigestButton = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        className="px-4 py-2 text-[20px] font-bold"
        style={{
          textTransform: "none",
          backgroundColor: "#1F232C",
          borderRadius: "7px",
        }}
        onClick={handleClickOpen}
      >
        + New Email Digest
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          "& .MuiPaper-root": {
            width: "750px",
          },
        }}
      >
        <HorizontalLinearStepper index={0} />
      </Dialog>
    </>
  );
};

export default NewEmailDigestButton;
