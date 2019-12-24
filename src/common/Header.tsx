import React from "react";
import { Link } from "@reach/router";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#212121"
    },
    toolBar: {
      backgroundColor: "#212121"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    link: {
      color: "#fff",
      textDecoration: "none"
    }
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar} variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Link className={classes.link} to="/">
              Begoos
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
