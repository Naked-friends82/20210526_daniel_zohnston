import React, { useEffect, useState} from 'react';
import PictureFor from '../components/PictureFor';
import ListInk from '../components/ListInk';
import ListOil from '../components/ListOil';
import noImg from '../image/noImg.jpg';
import "../css/drawing.css";
import "../css_mobile/drawing_mobile.css";





const Drawing = ({setCurrent, setPageList, pageSta}) => {
  const [currentImg, setCurrentImg] = useState("");
  const [wsh, setWsh] = useState("");

  const LIST_drawing = ["Ink", "Oil", "for Pic"];

  useEffect(() => {
    setCurrent("My Lovely Drawing");
    setPageList(LIST_drawing);
  }, []);

  return(
    <article className="drawing">
      <div className="drawing_empty"></div>
      <div className="drawing_list">
        {
        pageSta === "Ink" ? <ListInk currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} /> :
        pageSta === "Oil" ? <ListOil currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} /> :
        pageSta === "for Pic" ? <PictureFor currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} /> :
        <ListInk currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} />}
      </div>
      <div className="drawing_img">
        {currentImg ? (
          <>
            <img className={`img ${
              wsh ==="w" ? "adjust_W": 
              wsh === "s" ? "adjust_S":
              wsh === "h" ? "adjust_H": ""
            }`} src={currentImg.src} alt="currentImg" />
            <div className="caption">
              <span className="currentTitle">{currentImg.title},</span>
              <span className="currentCaption">{currentImg.caption}</span>
            </div>
          </>
        ):(
          <img className="img adjust_H" src={noImg} alt="noImg" />
        )}

      </div>
    </article>
  )
}

export default Drawing;