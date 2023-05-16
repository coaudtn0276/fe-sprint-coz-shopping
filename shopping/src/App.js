import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Header from "./components/header";
import Footer from "./components/footer";

import dummydata from "./data/dummydata";
import { useState } from "react";
import Shoppinglist from "./components/shopplinglist";

function App() {
  const [data, setDate] = useState(dummydata);

  return (
    <div className="App">
      <Header />

      <Container className="shoppinglist">
        <div className="shoppinglist-title"> 상품리스트</div>
        <Row>
          {data.map((el, idx) => (
            <Shoppinglist Col={Col} data={data} idx={idx} />
          ))}
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App;
