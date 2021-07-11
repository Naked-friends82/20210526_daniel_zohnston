import React from 'react';
import folder2 from '../image/folder2.png';
import ImgList from "../components/ImgList";

//2020
import end from "../drawings/picture/2020/end.jpg";
import see from "../drawings/picture/2020/see.jpg";
import fixedPic from "../drawings/picture/2020/fixedPic.jpg";
import side from "../drawings/picture/2020/side.jpg";
import broad from "../drawings/picture/2020/broad.jpg";
import sander from "../drawings/picture/2020/Fur_August_Sander.jpg";
import sanderBoy from "../drawings/picture/2020/Fur_August_Sander_boy.jpg";
//2019
import pray from "../drawings/picture/2019/pray.jpg";
import seeBelieve from "../drawings/picture/2019/seeBelieve.jpg";


const PictureFor = ({currentImg, setCurrentImg, setWsh}) => {

  // const LIST_pic_2021 = [

  // ];
  const LIST_pic_2020 = [
    //연출부분1,2,3,4는 머징??
    //무시
    {
      title: "끝",
      caption: "acylic on canvas, 20 * 20 cm, 2020",
      src: end,
      wsh: "s"
    },
    {
      title: "보이는 것",
      caption: "acylic on canvas, 53 * 45.5 cm, 2020",
      src: see,
      wsh: "h"
    },
    {
      title: "연출사진",
      caption: "oil on canvas, 194 * 129 cm, 2020",
      src: fixedPic,
      wsh: "h"
    },
    {
      title: "옆모습",
      caption: "oil on canvas, 33 * 24 cm, 2020",
      src: side,
      wsh: "h"
    },
    {
      title: "중계",
      caption: "oil on canvas, 129 * 194 cm, 2020",
      src: broad,
      wsh: "w"
    },
    {
      title: "Fur_August_Sander",
      caption: "acrylic on canvas, 159.5 * 109.5 cm, 2020",
      src: sander,
      wsh: "h"
    },
    {
      title: "Fur_August_Sander_boy",
      caption: "acrylic on canvas, 130.5 * 96.5 cm, 2020",
      src: sanderBoy,
      wsh: "h"
    },
  ];
  const LIST_pic_2019 = [
    {
      title: "당신을 위해 기도합니다",
      caption: "acylic on canvas, 53 * 45.5 cm, 2019",
      src: pray,
      wsh: "h",
    },
    {
      title: "보는 것은 믿는 것입니까",
      caption: "acylic on canvas, 53 * 45.3 cm, 2019",
      src: seeBelieve,
      wsh: "h",
    },
  ];


return(
  <>
  <ul className="listBox">
    <img className="file2" src={folder2} alt="fav" />2020_Picture_for_picture
    {LIST_pic_2020.map((each) => 
      <ImgList key={each.title} each={each} currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} />
    )}
  </ul>
  <ul className="listBox">
    <img className="file2" src={folder2} alt="fav" />2019_Picture_for_picture
    {LIST_pic_2019.map((each) => 
      <ImgList key={each.title} each={each} currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} />
    )}
  </ul>
  </>
)
}

export default PictureFor;