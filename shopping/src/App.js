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

function App() {
  const [data, setDate] = useState(dummydata);

  console.log(data[1].image_url);

  return (
    <div className="App">
      <Header />

      <Container className="shoppinglist">
        <div className="shoppinglist-title"> 상품리스트</div>
        <Row>
          <Col sm>
            <div className="shoppinglist-img">
              <img className="shoppingimg" src={data[1].image_url} alt="" />
            </div>
            <div className="shoppinglist-text">
              <div className="shop-title">{data[1].title}</div>
              <div className="shop-right">
                <div className="shop-percent">
                  {data[1].discountPercentage}%
                </div>
                <div className="shop-price">
                  {data[1].price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </div>
              </div>
            </div>
          </Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
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
