import React, {useState} from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from "../../assets/logo.png";
import Typography from "@material-ui/core/Typography";

import Stepper from "../common/Stepper";
import MasterLayout from "../Layouts";
const useStyles = makeStyles((theme) => ({
  Layout: {
    marginTop: "3rem",
    width:"100%",
    [theme.breakpoints.up("xl")]: {
      marginTop: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  Heading: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "2.15rem",
    marginTop: "0.75rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.15rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.15rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  Stepper:{
      marginTop:"4em",
      [theme.breakpoints.down("sm")]: {
        marginTop: "1rem",
      },
  
      [theme.breakpoints.down("xs")]: {
        marginTop: "1rem",
      },
      width:300
  },
  SubLayout:{
      marginTop:"4rem",
  }
}));

const Boarding = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  return (
    <Grid container direction="column" className={classes.Layout} alignItems="center" justifyContent="center">

        {/**Heading */}
      <Grid item container direction="row"  className={classes.IconHeading} justifyContent="center" alignItems="center">
        <Grid item>
          <img src={Logo} alt="Eden Icon" width={60} height={60} />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h5" className={classes.Heading}>
            Eden
          </Typography>
        </Grid>
      </Grid>

        {/** Stepper */}
      <Grid item container direction="row" className={classes.Stepper}>
        { <Stepper currentStep={page+1} stages={4} /> }
      </Grid>

        {/** Layout */}
      <Grid item container className={classes.SubLayout} justifyContent="center" alignItems="center">
        <MasterLayout  onPageChange = {setPage} currentPage={page}/>
      </Grid>

    </Grid>
  );
};

export default Boarding;
