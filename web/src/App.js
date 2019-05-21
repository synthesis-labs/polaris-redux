import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Search from "./components/search/search";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <main>
        <Container fluid>
          <Route path="/search" exact component={Search} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
