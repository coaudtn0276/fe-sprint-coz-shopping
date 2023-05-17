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
  // console.log(data[1].image_url);
  return (
    <div className="App">
      <Header />
      <Container className="shoppinglist">
        <div className="shoppinglist-title"> 상품리스트</div>
        <Row>
          {data.map((el, idx) => (
            <Shoppinglist Col={Col} data={data} idx={idx} key={idx} />
          ))}
        </Row>
      </Container>

      <Container className="shoppinglist">
        <div className="shoppinglist-title"> 북마크 리스트</div>
        <Row>
          {data.map((el, idx) => (
            <Shoppinglist Col={Col} data={data} idx={idx} key={idx} />
          ))}
        </Row>
      </Container>

      {/* <div className="test">
        <img src={data[1].image_url} alt="" className="modal" />
      </div> */}

      <Footer />
    </div>
  );
}
function Modal({ data, idx }) {
  <div>
    <img src={data[1].image_url} alt="" className="modal" />
  </div>;
}

export default App;
