import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./header";
import Footer from "./footer";

import dummydata from "../data/dummydata";
import { useState } from "react";
import Shoppinglist from "./shopplinglist";

const Main = function Main() {
  const [data, setDate] = useState(dummydata);

  return (
    <>
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

      <Footer />
    </>
  );
};

export default Main;
