import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import dummydata from "../data/dummydata";
import { useEffect, useState } from "react";
import Shoppinglist from "./shopplinglist";
import axios from "axios";

const Main = function Main() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios("http://cozshopping.codestates-seb.link/api/v1/products").then(
      (res) => {
        setDate([res.data[0], res.data[1], res.data[2], res.data[3]]);
        // console.log(res.data[0], res.data[1], res.data[2], res.data[3]);
      }
    );
  }, []);

  return (
    <>
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
    </>
  );
};

export default Main;
