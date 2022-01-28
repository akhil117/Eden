import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    Heading: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.25rem",
      marginTop: "0.75rem",
    },
    Subtitle:{
        fontWeight: "300",
        fontFamily:"Inter",
        fontSize: "0.8rem",

    },
    Inputs:{
        marginTop:"2rem"
    },
    Gap:{
        marginTop:"1rem"
    },
    Card:{
        display:"grid",
        textTransform:"none",
        textAlign:"left",
        width:"10rem",
        border: props => props.value.selected===true?"0.1px solid #784af4":"0.1px solid #bababa",
        marginLeft:"1rem",
        borderWidth:"thin"
    }
  }));

const card = (props) =>{
    const classes = useStyles(props);
    const {value, onChanged,SetHelper} = props;
    return (
        <Grid item  container direction="column" component={Button} onClick={()=>{onChanged(value.Id);SetHelper(false)}} className={classes.Card}>
            <Grid item>
                {value.Icon}
            </Grid>
            <Grid item>
                <Typography gutterBottom variant="body1" className={classes.Heading}>{value.Heading}</Typography>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant="subtitle1" className={classes.Subtitle}>{value.Subtitle}</Typography>
            </Grid>
        </Grid>
    );
}

export default card;