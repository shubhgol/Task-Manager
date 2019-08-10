import React from 'react'
import Header from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { height } from '@material-ui/system';
const dashboardHeader = ()=>{

    return(
        <div style={{width:'100%'}}>
            <div style={{backgroundColor:'red' ,height:'100px',width:'500px',float:'left',}}>

            </div>
            <div style={{backgroundColor:'green',height:'100px', width:'500px',float:"right"}}>

            </div>
        </div>
    )
}

export default dashboardHeader