import React from 'react'
import Options from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";
import style from './style'


const useStyles = makeStyles(theme => (style));
  
const DashboardHeader = ()=>{
    const classes = useStyles();
  
    return(
        <div style={{overflow:'hidden'}}>
        <div style={{float:'left' , width: '50%'}}>
              <h2 style={{ fontWeight:'500', paddingTop:'5px',marginLeft:'10px', textAlign: "initial", }}>
                System Dashboard
              </h2>
            </div >
            <div style={{float:'right', width:'50%'}}>
             <Options className={classes.options} />
            </div>
        </div>
    )
}

export default DashboardHeader