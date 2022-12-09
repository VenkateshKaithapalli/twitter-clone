import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SidebarOption from "./SidebarOption";
import PermIdentityIcon  from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar--icon"/><span>My Twitter</span>

      <SidebarOption active Icon={HomeIcon} text="Home"/>
	  <SidebarOption Icon={SearchIcon} text="Explore"/>
	  <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
	  <SidebarOption Icon={MailOutlineIcon} text="Messeges"/>
	  <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
	  <SidebarOption Icon={ListAltIcon} text="List"/>
	  <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
	  <SidebarOption Icon={MoreHorizIcon} text="more"/>

	  <Button variant="outlined" className="sidebar--tweet" fullWidth>Tweet</Button>
    </div>
  );
};

export default Sidebar;
