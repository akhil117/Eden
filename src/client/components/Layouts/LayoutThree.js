import React, {useState} from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups'; 
import InputField from "../common/Input/SimpleText";
import ActionButton from "../common/Button";
import Card from '../common/Card';

const datas =[
    {
        Id: 1,
        Icon: <PersonIcon />,
        Heading: "For myself",
        Subtitle: "Write better. Think more clearly. Stay organized",
        selected: false,
    },
    {
        Id: 2,
        Icon: <GroupsIcon />,
        Heading: "With my team",
        Subtitle: "Wikis, docs, tasks & projects, all in one place",
        selected: false
    }
]

const useStyles = makeStyles((theme) => ({
    Heading: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.9rem",
      marginTop: "0.75rem",
    },
    Subtitle:{
        fontWeight: "300",
        fontFamily:"Inter",
    },
    Inputs:{
        marginTop:"2rem"
    },
    Gap:{
        marginTop:"2rem"
    }
  }));



const LayoutThree = (props) => {
    const classes = useStyles();
    const [data, setData]= useState(datas);
    const {onPageChange, currentPage} = props;
    const [isHelperText,setHelperText] = useState(false);

    const handleChange = (id) =>{
        for(var i in data){
            if(data[i].Id===id){
                data[i].selected = true
            }else{
                data[i].selected = false;
            }
        }
        setData([...data]);
    }

    const HasChange = ()=>{

        var output = datas.filter(x=>x.selected)
        if(output.length>0){
            onPageChange(3);
        }
        else{
            setHelperText(true);
        }
    }
    const theme = useTheme();
    const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
    const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
    const helperText = <Typography variant="body1" style={{fontSize: matchesXL ? "1.25rem" : matchesLG ? "1rem" : "inherit",color:"red"}}> Please select above option </Typography>
    return  (
        <React.Fragment>
            <Grid item container direction="column" align="center" justifyContent="center">
                <Grid item>
                    <Typography gutterBottom variant="h5" className={classes.Heading}>How are you planning to use Eden</Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle2" className={classes.Subtitle}>We'll streamline your setup experience accordingly</Typography>
                </Grid>
            </Grid>


            <Grid item container direction="row" justifyContent="center" alignItems="center" className={classes.Gap}>
                {data.map((x,index)=> <Card key={index} value={x} onChanged = {handleChange} SetHelper={setHelperText}/>)}
            </Grid>
            {
               isHelperText? <Grid item container justifyContent="center" alignItems="center" style={{marginTop:"25px"}}>
                {helperText}
                </Grid>:''
            }
            <Grid item className={classes.Gap}>
                    <ActionButton name="Create Work Space" onButtonClick={HasChange} />
                </Grid>

        </React.Fragment>
    );
};

export default LayoutThree;