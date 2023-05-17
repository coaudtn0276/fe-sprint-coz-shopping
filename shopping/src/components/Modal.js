import bookstar from "../img/Bookmark.svg";
import closebutton from "../img/Vector.svg";

const Modal = function Modal({ data, idx, setClickimg }) {
  return (
    <div
      className="modal-bg"
      onClick={() => {
        setClickimg(false);
      }}
    >
      <div className="modal-main">
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
};

export default Modal;
