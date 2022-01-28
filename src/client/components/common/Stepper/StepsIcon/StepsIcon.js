import * as React from "react";
import { styled } from "@mui/material/styles";

import TrackingBorder from "../../TrackingBorder";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
        backgroundColor: "#784af4",

      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
    }),
    ...(ownerState.completed && {
        backgroundColor: "#784af4"
    })
  }));

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#784af4"

      }
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#784af4"
      }
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1
    }
  }));
  
 export const StepsIcon = (props) => {
    const { active, completed,className} = props;
    const icons = {
      1: <TrackingBorder color={completed?"#784af4":"grey"} value={1}/>,
      2: <TrackingBorder color={completed?"#784af4":"grey"}  value={2}/>,
      3: <TrackingBorder color={completed?"#784af4":"grey"}  value={3}/>,
      4: <TrackingBorder color={completed?"#784af4":"grey"}  value={4}/>
    };
  
    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

 