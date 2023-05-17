import { useState } from "react";
import bookstar from "../img/Bookmark.svg";
import closebutton from "../img/Vector.svg";

const Shoppinglist = function Shoppinglist({ Col, data, idx }) {
  const [clickimg, setClickimg] = useState(false);

  function imgclick() {
    setClickimg(!clickimg);
    if (clickimg === true) {
      console.log(1);
    }
  }

  return (
    <>
      <Col sm>
        <div className="shopping-items">
          <div className="shoppinglist-img">
            <img
              className="shoppingimg"
              src={
                data[idx].image_url === null
                  ? data[idx].brand_image_url
                  : data[idx].image_url
              }
              alt=""
              onClick={() => {
                imgclick();
              }}
            />
            <img src={bookstar} alt="" className="bookstar" />
          </div>
          <div className="shoppinglist-text">
            <div className="shop-title">{data[idx].title}</div>
            <div className="shop-right">
              <div className="shop-percent">
                {data[idx].discountPercentage === null
                  ? null
                  : data[idx].discountPercentage + "%"}
              </div>
              <div className="shop-price">
                {data[idx].price === null
                  ? null
                  : Number(data[idx].price)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
              </div>
            </div>
          </div>
        </div>
      </Col>
      {clickimg === true ? (
        <Modal data={data} idx={idx} setClickimg={setClickimg} />
      ) : null}
    </>
  );
};

function Modal({ data, idx, setClickimg }) {
  return (
    <div className="modal-bg">
      <div className="test">
        <img
          className="modal-img"
          src={
            data[idx].image_url === null
              ? data[idx].brand_image_url
              : data[idx].image_url
          }
          alt=""
        />
        <img
          className="closebutton"
          src={closebutton}
          alt=""
          onClick={() => {
            setClickimg(false);
          }}
        />
        <div className="modal-title">
          <img src={bookstar} alt="" />
          {data[idx].title}
        </div>
      </div>
    </div>
  );
}

export default Shoppinglist;
