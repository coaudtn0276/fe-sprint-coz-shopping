const Filterimg = function Filterimg({ maindata, setData, type, img, title }) {
  const filter = maindata.filter((el) => {
    if (el.type === String(type)) {
      return true;
    }
    return false;
  });

  return (
    <div onClick={() => setData(filter)}>
      <img src={img} alt="" className="filter-img" />
      <div>{title}</div>
    </div>
  );
};

export default Filterimg;
