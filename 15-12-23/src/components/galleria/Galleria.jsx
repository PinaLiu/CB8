import "./index.css";
import "../imgEl/ImgEl";
import ImgEl from "../imgEl/ImgEl";

const Galleria = ({ listObj }) => {
  // console.log(listObj.list);
  return (
    <div className="gallery">
      <h2>{listObj.title}</h2>
      <div className="gallery-container">
        {listObj.list.map((image) => (
          <ImgEl imgObj={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default Galleria;
