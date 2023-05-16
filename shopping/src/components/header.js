import logo from "../img/로고.svg";
import hamburger from "../img/햄버거 버튼.svg";
import dropdown from "../img/Dropdown.svg";
import gift from "../img/상품 아이콘.svg";
import star from "../img/북마크 아이콘.svg";
import { useState } from "react";

const Header = function Header() {
  const [drop, setDrop] = useState(false);

  return (
    <div className="header">
      <div className="header-2">
        <img src={logo} alt="" className="logo" />
        <span className="navtitle">COZ Shopping</span>
      </div>
      <div className="dropdown">
        <img
          src={hamburger}
          alt=""
          className="hamburger"
          onClick={() => {
            setDrop(!drop);
          }}
        />
        {drop === true ? (
          <div className="dropdown">
            <img src={dropdown} alt="" className="dropdownimg" />
            <div className="dropdowntitle-1">OOO님, 안녕하세요</div>
            <div className="dropdowntitle-2">
              <img src={gift} alt="" className="icon" />
              상품리스트 페이지
            </div>
            <div className="dropdowntitle-3">
              <img src={star} alt="" className="icon" />
              북마크 페이지
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
