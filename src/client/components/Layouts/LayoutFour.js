import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

import InputField from "../common/Input/SimpleText";
import ActionButton from "../common/Button";
import TrackingBorder from "../common/TrackingBorder";
import CheckIcon from '@mui/icons-material/Check';

const useStyles = makeStyles((theme) => ({
    Heading: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "2rem",
      marginTop: "0.75rem",
      [theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
    },
      [theme.breakpoints.up("xl")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
  
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.25rem",
      },
    },
    Subtitle:{
        fontWeight: "300",
        fontFamily:"Inter",
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem",
            textAlign:"center"
          },
      
          [theme.breakpoints.down("xs")]: {
            fontSize: "0.9rem",
            textAlign:"center"
          },
    },
    Inputs:{
        marginTop:"2rem"
    },
    Gap:{
        marginTop:"1rem"
    }
  }));

const LayoutFour = (props) =>{
    const classes = useStyles();
    const {onPageChange, currentPage} = props;

    const handleChange = ()=>{
        onPageChange(0);
    }

    return  (
        <React.Fragment>
            <Grid item container direction="column" alignItems="center" className={classes.Inputs}>
                <Grid item>
                    <TrackingBorder color="#784af4" value={<CheckIcon style={{fontSize:"2em"}}/>}/>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h5" className={classes.Heading}>Congratulations, Eren!</Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle2" className={classes.Subtitle}>You have completed onboarding. you can start using Eden!</Typography>
                </Grid>
                <Grid item className={classes.Gap}>
                    <ActionButton name="Launch Eden" onButtonClick={handleChange} />
                </Grid>
            </Grid>

        </React.Fragment>
    );
};
export default LayoutFour;