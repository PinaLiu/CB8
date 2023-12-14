import "./index.css";
import "../imgEl/ImgEl";
import ImgEl from "../imgEl/ImgEl";

const Galleria = ({ imgListObj }) => {
  console.log(imgListObj.list);
  return (
    <div className="gallery">
      <h2>Galleria</h2>
      <div className="gallery-container">
        {imgListObj.list.map((image) => (
          <ImgEl imgObj={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default Galleria;
