import React from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

import {StepsIcon, ColorlibConnector} from "./StepsIcon/StepsIcon";


const StepperComponent = (props) => {
  const { stages,currentStep } = props;
  const steps = Array(stages).fill("");

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={currentStep} alternativeLabel connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepsIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
