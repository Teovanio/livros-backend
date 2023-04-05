import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import Nav from "react-bootstrap/Nav";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Catálogo</Nav.Link>
            <Nav.Link href="/dados">Dados</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
}

export default App;
