import React, {  useState } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

import InputField from "../common/Input/SimpleText";
import ActionButton from "../common/Button"
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

const LayoutOne = (props) => {
    const classes = useStyles();
    const {onPageChange, currentPage} = props;

    const [fname, setFname] = useState('');
    const [dname, setDname] = useState('');

    const [message, setMessage] = useState({fname:'',dname:''});



    const onInputChange = (e,field) =>{
        if(field==="Full Name"){
            setMessage({...message, fname:e.target.value.length>0?'':"Please enter first name"})
        }
        if(field === "Display Name"){
            setMessage({...message, dname:e.target.value.length>0?'': "Please enter display name"})
        }
    }

    //Basic validation when button click
    const handleChange = () => {

        let f='';
        let d='';
        let isError= false;
        if(fname.length===0){
            f="Please enter full name";    
            isError = true;        
        }else{
            f="";
        }

        if(dname.length===0){
            d="Please enter display name";    
            isError = true;        
        }else{
            d="";
        }
        setMessage({fname:f,dname:d});

        if(!isError){
            onPageChange(1);
        }
    }

    return  (
        <React.Fragment>
            <Grid item container direction="column" align="center">
                <Grid item>
                    <Typography variant="h5" className={classes.Heading}>Welcome! First things first...</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" className={classes.Subtitle}>You can always change them later.</Typography>
                </Grid>
            </Grid>


            <Grid item container direction="column" alignItems="center" className={classes.Inputs}>
                <Grid item className={classes.Gap}>
                    <InputField isError={message.fname.length !== 0} fieldName="Full Name" errorMessage={message.fname} onChangeFunc={setFname} onChangeValidFunc={onInputChange} value={fname}/>
                </Grid>
                <Grid item className={classes.Gap}>
                    <InputField fieldName="Display Name" isError={message.dname.length !== 0}  errorMessage = {message.dname} onChangeFunc={setDname} onChangeValidFunc={onInputChange} value={dname}/>
                </Grid>
                <Grid item className={classes.Gap}>
                    <ActionButton name="Continue" onButtonClick={handleChange} />
                </Grid>
            </Grid>

        </React.Fragment>
    );
};

export default LayoutOne;