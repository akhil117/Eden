import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: props=>props.color,
    color: theme.palette.info.main,
    borderRadius: "50%",
    width: "50px",
    display: "flex",
    height: "50px",
    color: "#fff",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    fontFamily:"Inter"
  },

}));

const TrackingBorder = (props) => {
  const classes = useStyles(props);
  const {value} = props;
  return (
  <div className={classes.avatar}>
      {value}
  </div>
  );
};

export default TrackingBorder;
