import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Itemlist from "./Itemlist";

const Shoppinglist = function Shoppinglist({ maindata }) {
  const [data, setDate] = useState([
    maindata[0],
    maindata[1],
    maindata[2],
    maindata[3],
  ]);

  return (
    <Container className="shoppinglist">
      <div className="shoppinglist-title"> 상품리스트</div>
      <Row>
        {maindata === []
          ? null
          : data.map((el, idx) => (
              <Itemlist Col={Col} data={data} idx={idx} key={idx} />
            ))}
      </Row>
    </Container>
  );
};

export default Shoppinglist;
