import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";
import Itemlist from "./Itemlist";

import dummydata from "../data/dummydata";
import Shoppinglist from "./Shoppinglist";

const Main = function Main({ maindata }) {
  const [data, setDate] = useState([
    maindata[0],
    maindata[1],
    maindata[2],
    maindata[3],
  ]);
  return (
    <>
      <Shoppinglist maindata={maindata} />

      <Container className="shoppinglist">
        <div className="shoppinglist-title"> 북마크 리스트</div>
        <Row>
          {data.map((el, idx) => (
            <Itemlist Col={Col} data={data} idx={idx} key={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Main;
