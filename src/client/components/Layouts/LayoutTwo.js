import React, {  useState } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

import InputField from "../common/Input/SimpleText";
import ActionButton from "../common/Button";

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



const LayoutTwo = (props) =>{
    const classes = useStyles();
    const {onPageChange, currentPage} = props;
    const [workspace, setWorkspace] = useState('');
    const [url, setUrl] = useState('');

    const [message, setMessage] = useState({workspace:'',url:''});


    const onInputChange = (e,field) =>{
        if(field==="Workspace Name"){
            setMessage({...message, workspace:e.target.value.length>0?'':"Please enter first name"})
        }
        if(field === "WorkSpaceUrl"){
            setMessage({...message, url:e.target.value.length>0?'':"Please enter url"});
        }
    }
    
    //Basic validation when button click
    const handleChange = () => {
    
        let w='';
        let u='';
        let isError= false;
        if(workspace.length===0){
            w="Please enter workspace name";    
            isError = true;        
        }else{
            w="";
        }
    
        if(url.length===0){
            u="Please enter url";    
            isError = true;        
        }else{
            u="";
        }
        setMessage({workspace:w,url:u});
        console.log(u);
        if(!isError){
            onPageChange(2);
        }
    }

    return  (
        <React.Fragment>
            <Grid item container direction="column" align="center">
                <Grid item>
                    <Typography variant="h5" className={classes.Heading}>Let's set up a home for all your work</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" className={classes.Subtitle}>You can always create another work space later.</Typography>
                </Grid>
            </Grid>


            <Grid item container direction="column" alignItems="center" className={classes.Inputs}>
                <Grid item className={classes.Gap}>
                    <InputField fieldName="Workspace Name" isError={message.workspace.length !== 0} errorMessage={message.workspace}  onChangeFunc={setWorkspace} onChangeValidFunc={onInputChange} value={workspace}/>
                </Grid>
                <Grid item className={classes.Gap}>
                    <InputField fieldName={`WorkSpaceUrl`} isError={message.url.length!==0} errorMessage={message.url} onChangeFunc={setUrl} onChangeValidFunc={onInputChange} value={url}/>
                </Grid>
                <Grid item className={classes.Gap}>
                    <ActionButton name="Continue" onButtonClick={handleChange} />
                </Grid>
            </Grid>

        </React.Fragment>
    );
};
export default LayoutTwo;