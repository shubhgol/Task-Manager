import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import image from "../../intro-illustration.png"
import expend from '../../assets/download.png'
import SearchIcon from '@material-ui/icons/Search';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: '50%',
    margin: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DashboardContent = ()=>{
  const classes = useStyles();

    return(
      <div style={{overflow:'hidden'}}>
          <Card className={classes.card}>
          <h3 style={{backgroundColor:"#311ba7", margin:'0', 
          textAlign:'start', 
          color:'white',
          fontWeight:'normal'
          }}>Introduction
          <span>
            <img src={expend} width="25px" style={{float:'right', paddingRight:'5px', 
          }} />
          </span>
          </h3>
          <img src={image} alt="no" width="100px"
          style={{float:"left", margin:"10px"}}
          /> 
          <h3 style={{color:"#172b4d", fontWeight:'normal'}}>Welcome to Jira </h3>
<p>New to Jira?</p>
  <p> Check out the Jira User's Guide.</p>
    </Card>
      </div>
    )
}

export default DashboardContent