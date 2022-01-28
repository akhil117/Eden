import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from "../../assets/logo.png";
import Typography from "@material-ui/core/Typography";
import LayoutOne from "./LayoutOne";
import LayoutTwo from "./LayoutTwo";
import LayoutFour from "./LayoutFour";
import LayoutThree from "./LayoutThree";




const MasterLayout = (props) => {
   const {onPageChange, currentPage} = props;
  const layouts = [
    <LayoutOne {...props} />,
    <LayoutTwo {...props} />,
    <LayoutThree {...props} />,
    <LayoutFour {...props}/>
  ]

  return (
        layouts[currentPage]
  );
};

export default MasterLayout;
