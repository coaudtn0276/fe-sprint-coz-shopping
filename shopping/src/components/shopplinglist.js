import bookstar from "../img/Bookmark.svg";

const Shoppinglist = function Shoppinglist({ Col, data, idx }) {
  return (
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
          />
          <img src={bookstar} alt="" className="bookstar" />
        </div>
        <div className="shoppinglist-text">
          <div className="shop-title">{data[idx].title}</div>
          <div className="shop-right">
            <div className="shop-percent">
              {data[idx].discountPercentage === null
                ? null
                : data[idx].discountPercentage + `%`}
            </div>
            <div className="shop-price">
              {data[idx].price === null
                ? null
                : Number(data[idx].price)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `원`}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Shoppinglist;
