import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./sidebar.css";

const sidebar = () => {
  return (
    <aside className="bg-light">
      <Nav className="flex-column">
        <NavLink className="nav-link" to="/search" activeClassName="active">
          <i className="fa fa-fw fa-search" /> Search
        </NavLink>
        <NavLink className="nav-link" to="/onboarding" activeClassName="active">
          <i className="fa fa-fw fa-user-plus" /> Onboarding
        </NavLink>        
      </Nav>
    </aside>
  );
};

export default sidebar;
