import all from "../img/filterimg/전체.svg";
import product from "../img/filterimg/상품.svg";
import category from "../img/filterimg/카테고리.svg";
import exhibition from "../img/filterimg/기획전.svg";
import brand from "../img/filterimg/브랜드.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Itemlist from "../components/Itemlist";
import { useState } from "react";
import Filterimg from "../components/Filterimg";

const Productslist = function Productslist({ maindata }) {
  const [prdata, setData] = useState(maindata);
  const [line, setLine] = useState(false);

  return (
    <div className="p-list">
      <div className="center">
        <div className="filter-list">
          {/* <Filterimg
            maindata={maindata}
            setData={setData}
            type={"all"}
            img={all}
            title={"전체"}
          /> */}
          <div
            onClick={() => {
              setData(maindata);
              setLine(true);
            }}
          >
            <img src={all} alt="" className="filter-img" />
            <div className={`${line ? "textline" : ""}`}>전체</div>
          </div>
          <Filterimg
            maindata={maindata}
            setData={setData}
            type={"Product"}
            img={product}
            title={"상품"}
          />
          <Filterimg
            maindata={maindata}
            setData={setData}
            type={"Category"}
            img={category}
            title={"카테고리"}
          />
          <Filterimg
            maindata={maindata}
            setData={setData}
            type={"Exhibition"}
            img={exhibition}
            title={"기획전"}
          />
          <Filterimg
            maindata={maindata}
            setData={setData}
            type={"Brand"}
            img={brand}
            title={"브랜드"}
          />
        </div>
      </div>

      <div>
        <Container className="shoppinglist">
          <Row>
            {maindata === []
              ? null
              : prdata.map((el, idx) => (
                  <Itemlist Col={Col} data={prdata} idx={idx} key={idx} />
                ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Productslist;
