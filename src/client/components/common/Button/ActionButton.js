import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    ButtonStyle:{
        backgroundColor:"#784af4",
        color: "#ffffff",
        width: 400,
        height: 40,
        fontFamily: 'Inter',
        textTransform: "none",
        [theme.breakpoints.up("lg")]: {
            width: 370,
            fontSize: "1rem"
        },
        [theme.breakpoints.up("xl")]: {
            width: 450,
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down("sm")]: {
            width: 320
        },

        [theme.breakpoints.down("xs")]: {
            width: 260
        },
        "&:hover":{
            backgroundColor:"#784af4"
        },
    }
}));

const ActionButton = (props) => {
    const classes = useStyles();
    const {onButtonClick, name} = props;

    return (
        <Button className={classes.ButtonStyle} onClick= {onButtonClick}>{name}</Button>
    );
};

export default ActionButton;