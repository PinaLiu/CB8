import "./index.css";

const ImgEl = ({ imgObj }) => {
  return (
    <div className="img-container">
      <img src={imgObj.img} alt={imgObj.title} />
    </div>
  );
};

export default ImgEl;
