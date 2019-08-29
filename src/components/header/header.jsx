import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, IconButton, AppBar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import I from "@material-ui/icons/ExpandMore";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import image from "../../download.png";
import style from "./header";

const useStyles = makeStyles(theme => style);

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img src={image} alt="no" width="25px" />
          <p style={{marginLeft:'5px'}}>Task Manager</p>
          <div style={{ flexDirection: "row", marginLeft: "1%" }}>
            <div className={classes.item}>
              <Typography className={classes.title} variant="subtitle1" noWrap>
                Dashboard
              </Typography>
              <I className={classes.icon} />
            </div>
            <div className={classes.item}>
              <Typography className={classes.title} variant="subtitle1" noWrap>
                Issues
              </Typography>
              <I className={classes.icon} />
            </div>
            <div className={classes.item}>
              <Typography className={classes.title} variant="subtitle1" noWrap>
                Projects
              </Typography>
              <I className={classes.icon} />
            </div>
            <div className={classes.item}>
              <Typography className={classes.title} variant="subtitle1" noWrap>
                Boards
              </Typography>
              <I className={classes.icon} />
            </div>
            <div className={classes.item}>
              <Typography className={classes.title} variant="subtitle1" noWrap>
                Structure
              </Typography>
              <I className={classes.icon} />
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
