import { HiUsers } from "react-icons/hi";
import { AiFillPieChart, AiFillFilePpt } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideBar.css";
function SideBar() {
  const navigate = useNavigate();
  return (
    <div>
      <SideNav
        className="sidenav"
        onSelect={(selected) => {
          navigate(selected);
        }}
      >
        <SideNav.Toggle className="toggle" />
        <SideNav.Nav defaultSelected="DashBoard">
          <NavItem eventKey="/">
            <NavIcon>
              <HiUsers size={20} className="sidebarIcon" />
            </NavIcon>
            <NavText>Students</NavText>
            <NavItem eventKey="/admin/home">
              <NavIcon></NavIcon>
              <NavText>Users List</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="/">
            <NavIcon>
              <AiFillFilePpt size={20} className="sidebarIcon" />
            </NavIcon>
            <NavText>Uplaod</NavText>
            <NavItem eventKey="/admin/training">
              <NavIcon></NavIcon>
              <NavText>Training Video</NavText>
            </NavItem>
            <NavItem eventKey="/admin/academic">
              <NavIcon></NavIcon>
              <NavText>Academic Class</NavText>
            </NavItem>
            <NavItem eventKey="/admin/announcement">
              <NavIcon></NavIcon>
              <NavText>Announcement</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="/admin/home">
            <NavIcon>
              <BiCategory size={20} className="sidebarIcon" />
            </NavIcon>
            <NavText>Requests</NavText>
            <NavItem eventKey="/admin/donationreq">
              <NavIcon></NavIcon>
              <NavText>Donation Requests</NavText>
            </NavItem>
            <NavItem eventKey="/admin/userspost">
              <NavIcon></NavIcon>
              <NavText>User's Post</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default SideBar;

// /announcement
