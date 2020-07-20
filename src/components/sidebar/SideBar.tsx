import React from "react";
import { Link } from "react-router-dom";
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
  link: string;
}

interface Props {}

export default function SideBar(props: Props) {
  const sidebarItems: sidebarItem[] = [
    {
      IconComponent: HomeIcon,
      altText: "Home",
      link: "/",
    },
    {
      IconComponent: VisibilityIcon,
      altText: "My Projects",
      link: "/projects",
    },
    {
      IconComponent: EmailIcon,
      altText: "Contact Me",
      link: "/contact",
    },
  ];

  return (
    <Drawer variant="permanent" anchor="left">
      <ListItem key="main" />
      <List>
        {sidebarItems.map((item: sidebarItem) => (
          <ListItem
            button
            key={item.altText}
            className="drawer-item"
            component={Link}
            to={item.link}
          >
            <item.IconComponent />
          </ListItem>
        ))}
      </List>
      {/* This element is at the bottom of the drawer, it keeps the list centered */}
      <List>
        <ListItem
          button
          key="GitHub Max Stanley"
          onClick={() => window.location.href="https://github.com/maxstanley" }
        >
          <GitHubIcon />
        </ListItem>
      </List>
    </Drawer>
  );
}
