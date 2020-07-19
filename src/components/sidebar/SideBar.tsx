import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Home as HomeIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons"

import "./SideBar.css";

const useStyles = makeStyles((theme: Theme) => ({
root: {
  justifyContent: "center"
}
}));

const mui = createMuiTheme({
overrides: {
MuiDrawer: {
paper: {
  justifyContent: "center"
}
}
}
});

interface sidebarItem {
  IconComponent: any;
  altText: string;
};

interface Props {}

export default function SideBar(props: Props) {

  const classes = useStyles();

  const sidebarItems: sidebarItem[] = [
    {
      IconComponent: HomeIcon,
      altText: "Home",
    },
    {
      IconComponent: VisibilityIcon,
      altText: "My Projects",
    },
    {
     IconComponent: GitHubIcon,
     altText: "My GitHub",
    },
    {
      IconComponent: EmailIcon,
      altText: "Contact Me",
    }
  ];

  //<ListItemIcon></ListItemIcon>
  return (
    <Drawer
      variant="permanent"
      anchor="left" 
      className={classes.root}
    >
      <ListItem key="main">
        <span>Max</span>
      </ListItem>
      <List>
      {sidebarItems.map((item: sidebarItem) => (
        <ListItem button key={item.altText} className="drawer-item">
          <item.IconComponent />
        </ListItem>
      ))}
      </List>
    </Drawer>
  );
}
