import React from "react";
import { Navbar } from "react-bootstrap";

import "./navbar.css";

const navbar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">Facesearch</Navbar.Brand>
    </Navbar>
  );
};

export default navbar;
