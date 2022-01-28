import TextField from "@material-ui/core/TextField";
import React from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  cssLabel: {
    color: "#000",
    "&.Mui-focused": {
      color: "#784af4",
    },
  },
  LabelName: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "1.25rem",
    color: "#4d4b4b",
  },
  cssOutlinedInput: {
    display: "flex",
    flexWrap: "wrap",
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
      (props) => ({
        borderColor: "#000", //default
      }),
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#808080", //hovered
    },
    "&$cssFocused $notchedOutline": {
      borderColor: "#784af4", //focused
    },
  },
  notchedOutline: (props) => ({
    borderColor: props.isError ? "red" : "#808080",
  }),
  cssFocused: {},
  error: {},
  disabled: {},
  widthAndHeight: {
    height: 15,
    width: 400,
    [theme.breakpoints.up("lg")]: {
      width: 350,
      height: 10,
      fontSize: "1rem",
    },
    [theme.breakpoints.up("xl")]: {
      width: 450,
      height: 15,
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },

    [theme.breakpoints.down("xs")]: {
      width: 230,
    },
  },
}));

const InputField = (props) => {
  const classes = useStyles(props);
  const {
    fieldName,
    fieldType = fieldName,
    value,
    isError,
    errorMessage,
    onChangeFunc,
    onChangeValidFunc
  } = props;
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  const labelName = matchesLG ? (
    <Typography
      variant="body1"
      style={{
        fontSize: matchesXL ? "1.5rem" : matchesLG ? "1.25rem" : "inherit",
      }}
    >
      {fieldType}
    </Typography>
  ) : (
    fieldType
  );
  const helperText = matchesLG ? (
    <Typography
      variant="body1"
      style={{
        fontSize: matchesXL ? "1.25rem" : matchesLG ? "1rem" : "inherit",
      }}
    >
      {errorMessage}
    </Typography>
  ) : (
    errorMessage
  );

  return (
    <div>
      <InputLabel shrink htmlFor={fieldName}>
        <Typography variant="body1" className={classes.LabelName}>
          {fieldName}
        </Typography>
      </InputLabel>
      <TextField
        id={fieldName}
        variant="outlined"
        value={value}
        error={isError}
        helperText={isError ? helperText : ""}
        onChange={(event) => {
          onChangeValidFunc(event,fieldName);
          onChangeFunc(event.target.value);
        }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
            input: classes.widthAndHeight,
          },
        }}
      />
    </div>
  );
};
export default InputField;
