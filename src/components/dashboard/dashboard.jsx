import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Options from "@material-ui/icons/MoreVert";
import { Typography, Container } from "@material-ui/core";

import { Paper, Grid } from "@material-ui/core";
import style from "./style.js";

import DashboardHeader from "./dashboardHeader";
import DashboardContent from "./dashboardContent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textAlign: "initial",
    color: "#9e5954"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}> 
          <div style={{float:'left', width:'50%', border:'1px solid red'}}>
            <h2 style={{ fontWeight:'500', paddingTop:'5px',marginLeft:'10px', textAlign: "initial", }}>
              System Dashboard
            </h2>
          </div >
          <div style={{float:'right', width:'50%', border:'1px solid red'}}>
            <Options />
          </div>
        </Grid>
       <div style={{flexDirection:'row' , justifyContent: 'flex-start'}}>
           <div>
               shubham
           </div>
           <div>
               kumar
           </div>
       </div>
      </Grid>
    </div>
  );
};

export default Dashboard;
