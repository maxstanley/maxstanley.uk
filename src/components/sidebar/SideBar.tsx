import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Home as HomeIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";

import "./SideBar.css";

interface sidebarItem {
  IconComponent: any;
  altText: string;
}

interface Props {}

export default function SideBar(props: Props) {
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
    },
  ];

  // <ListItemIcon></ListItemIcon>
  return (
    <Drawer variant="permanent" anchor="left">
      <ListItem key="main" />
      <List>
        {sidebarItems.map((item: sidebarItem) => (
          <ListItem
            button
            key={item.altText}
            className="drawer-item"
            onClick={() => {
              window.location.href = "https://github.com/maxstanley";
            }}
          >
            <item.IconComponent />
          </ListItem>
        ))}
      </List>
      {/* This element is at the bottom of the drawer, it keeps the list centered */}
      <ListItem />
    </Drawer>
  );
}
