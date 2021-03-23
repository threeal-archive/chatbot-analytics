import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { List as ListIcon } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Navigation({ children }) {
  const classes = useStyles();

  const links = [
    {
      icon: <ListIcon />,
      name: "Customer Service List",
      path: "/customer-service-list",
    },
    {
      icon: <ListIcon />,
      name: "Service List",
      path: "/service-list",
    },
  ];

  const drawerItems = links.map((link) => (
    <ListItem
      key={link.path}
      onClick={() => {
        window.location = link.path;
      }}
      button
      divider
    >
      <ListItemIcon>{link.icon}</ListItemIcon>
      <ListItemText primary={link.name} />
    </ListItem>
  ));

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Chatbot Analytics</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div classes={classes.drawerContainer}>
          <List classes={{ root: classes.list }}>{drawerItems}</List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}

export default Navigation;
