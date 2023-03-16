import React from "react";
import { LiMsg, LiOptions, Styledul,P } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
const NavList = () => {
  return (
    <Styledul>
      <li>
        <P>
          Find Work
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </P>
        <ul>
          <LiOptions>Saved Jobs</LiOptions>
          <LiOptions>Proposals</LiOptions>
          <NavLink to="/profile">
            <LiOptions>Profile</LiOptions>
          </NavLink>
        </ul>
      </li>
      <li>
        <p>
          My Jobs
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </p>
        <ul>
          <LiOptions>My Jobs</LiOptions>
          <LiOptions>All Contracts</LiOptions>
          <LiOptions>Work Dairy</LiOptions>
        </ul>
      </li>
      <li>
        <p>
          Reports
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </p>

        <ul>
          <LiOptions>Overview</LiOptions>
          <LiOptions>My Reports</LiOptions>
          <LiOptions>Transaction History</LiOptions>
        </ul>
      </li>
      <LiMsg>Messages</LiMsg>
    </Styledul>
  );
};

export default NavList;
