import React from 'react';
import ImgList from "../components/ImgList";
import folder2 from '../image/folder2.png';

//2020
import walk from "../drawings/oil/2020/walk.jpg";
import walkPeop from "../drawings/oil/2020/walkPeop.jpg";
import lyingPeop from "../drawings/oil/2020/lyingPeop.jpg";
import lyingWalk from "../drawings/oil/2020/lyingWalk.jpg";
import runAway from "../drawings/oil/2020/runAway.jpg";
import follow from "../drawings/oil/2020/follow.jpg";
import untitled__1 from "../drawings/oil/2020/untitled_1.jpg";
import untitled__2 from "../drawings/oil/2020/untitled_2.jpg";
import untitled__3 from "../drawings/oil/2020/untitled_3.jpg";
import untitled__4 from "../drawings/oil/2020/untitled_4.jpg";
import talk from "../drawings/oil/2020/talk.jpg";
import fire from "../drawings/oil/2020/fire.jpg";
import together from "../drawings/oil/2020/together.jpg";
import missed from "../drawings/oil/2020/missed.jpg";
import friend from "../drawings/oil/2020/friend.jpg";

import communist from "../drawings/oil/2020/Communist_State.jpg";
import dignity from "../drawings/oil/2020/Dignity.jpg";
import raincoat from "../drawings/oil/2020/Raincoat.jpg";
import tribute from "../drawings/oil/2020/Tribute.jpg";
import yellow from "../drawings/oil/2020/Yellow.jpg";
//2019
import actually from "../drawings/oil/2019/Actually_I_love_tragedy.jpg";
import child from "../drawings/oil/2019/Child.jpg";
import workingTime from "../drawings/oil/2019/Working_time.JPG";
import woodInMyPark from "../drawings/oil/2019/Wood_in_my_park.JPG";
import dairy from "../drawings/oil/2019/Dairy.jpg";
import digging from "../drawings/oil/2019/Digging.jpg";
import firework from "../drawings/oil/2019/Firework.JPG";
import goldenSlumber from "../drawings/oil/2019/Golden_slumber.jpg";
import letsMakeTiger from "../drawings/oil/2019/Let_s_make_tiger.jpg";
import lullaby from "../drawings/oil/2019/Lullaby.jpg";
import smile from "../drawings/oil/2019/Smile.jpg";
import stillLife from "../drawings/oil/2019/Still_life.JPG";
import reflectionOfMyLife from "../drawings/oil/2019/Reflection_of_my_life.jpg";
import untitled_1 from "../drawings/oil/2019/Untitled(1).jpg";
import untitled_2 from "../drawings/oil/2019/Untitled(2).jpg";
import untitled_3 from "../drawings/oil/2019/Untitled(3).jpg";



const ListOil = ({currentImg, setCurrentImg, setWsh}) => {

  // const LIST_oil_2021 = [
    
  // ];
  const LIST_oil_2020 = [
    {
      title: "걷기",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: walk,
      wsh: "h"
    },
    {
      title: "걸어가는 자들",
      caption: "oil on canvas, 65 * 91 cm, 2020",
      src: walkPeop,
      wsh: "w"
    },
    {
      title: "누워있는 자들",
      caption: "oil on canvas, 91 * 61 cm, 2020",
      src: lyingPeop,
      wsh: "h"
    },
    {
      title: "눕거나 걷기",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: lyingWalk,
      wsh: "h"
    },
    {
      title: "달아나기",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: runAway,
      wsh: "h"
    },
    {
      title: "따라가기",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: follow,
      wsh: "h"
    },
    {
      title: "무제_1",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: untitled__1,
      wsh: "h"
    },
    {
      title: "무제_2",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: untitled__2,
      wsh: "h"
    },
    {
      title: "무제_3",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: untitled__3,
      wsh: "h"
    },
    {
      title: "무제_4",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: untitled__4,
      wsh: "h"
    },
    {
      title: "발화",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: talk,
      wsh: "h"
    },
    {
      title: "불지피기",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: fire,
      wsh: "h"
    },
    {
      title: "어깨동무",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: together,
      wsh: "h"
    },
    {
      title: "엇갈리기",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: missed,
      wsh: "h"
    },
    {
      title: "친구하기",
      caption: "oil on canvas, 33.5 * 27 cm, 2020",
      src: friend,
      wsh: "h"
    },
    {
      title: "Communist-State",
      caption: "oil on canvas, 115 * 81 cm, 2020",
      src: communist,
      wsh: "h"
    },
    {
      title: "Dignity",
      caption: "oil on canvas, 160 * 139 cm, 2020",
      src: dignity,
      wsh: "h"
    },
    {
      title: "Raincoat",
      caption: "oil on canvas, 160 * 130 cm, 2020",
      src: raincoat,
      wsh: "h"
    },
    {
      title: "Tribute",
      caption: "oil on canvas, 129 * 194 cm, 2020",
      src: tribute,
      wsh: "h"
    },
    {
      title: "Yellow",
      caption: "oil on canvas, 160 * 130 cm, 2020",
      src: yellow,
      wsh: "h"
    },
  ];
  const LIST_oil_2019 = [
    {
      title: "Actually_I_love_tragedy",
      caption: "oil on canvas, 193.9 * 130.3 cm, 2019",
      src: actually,
      wsh: "w"
    },
    {
      title: "Child",
      caption: "oil on canvas, 193.3 * 130.3 cm, 2019",
      src: child,
      wsh: "h"
    },
    {
      title: "Dairy",
      caption: "oil on canvas, 162.1 * 130.3 cm, 2019",
      src: dairy,
      wsh: "h"
    },
    {
      title: "Digging",
      caption: "oil on canvas, 162.1 * 130.3 cm, 2019",
      src: digging,
      wsh: "h"
    },
    {
      title: "Firework",
      caption: "oil on canvas, 162.1 * 130.3 cm, 2019",
      src: firework,
      wsh: "h"
    },
    {
      title: "Golden-slumber",
      caption: "oil on canvas, 162.1 * 130.3 cm, 2019",
      src: goldenSlumber,
      wsh: "h"
    },
    {
      title: "Let's_make_tiger",
      caption: "oil on canvas, 193.9 * 130.3 cm, 2019",
      src: letsMakeTiger,
      wsh: "h"
    },
    {
      title: "Lullaby",
      caption: "oil on canvas, 53 * 33.3 cm, 2019",
      src: lullaby,
      wsh: "w"
    },
    {
      title: "Reflection_of_my_life",
      caption: "oil on canvas, 193.9 * 130.3 cm, 2019",
      src: reflectionOfMyLife,
      wsh: "h"
    },
    {
      title: "Smile",
      caption: "oil on canvas, 53 * 45.3 cm, 2019",
      src: smile,
      wsh: "h"
    },
    {
      title: "Still-life",
      caption: "oil on canvas, 162.1 * 130.3 cm, 2019",
      src: stillLife,
      wsh: "h"
    },
    {
      title: "Untitled(1)",
      caption: "oil on canvas, 53 * 41 cm, 2019",
      src: untitled_1,
      wsh: "h"
    },
    {
      title: "Untitled(2)",
      caption: "oil on canvas, 53 * 33.3 cm, 2019",
      src: untitled_2,
      wsh: "h"
    },
    {
      title: "Untitled(3)",
      caption: "oil on canvas, 116.7 * 80.3 cm, 2019",
      src: untitled_3,
      wsh: "w"
    },
    {
      title: "Wook_in_my_park",
      caption: "oil on canvas, 193.3 * 130.3 cm, 2019",
      src: woodInMyPark,
      wsh: "h"
    },
    {
      title: "Working_time",
      caption: "oil on canvas, 193.3 * 130.3 cm, 2019",
      src: workingTime,
      wsh: "h"
    },
  ]
return(
  <>
  <ul className="listBox" >
    <img className="file2" src={folder2} alt="fav" />2020_Oil Drawing
    {LIST_oil_2020.map((each) => 
      <ImgList key={each.title} each={each} currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} />
    )}
  </ul>
  <ul className="listBox" >
    <img className="file2" src={folder2} alt="fav" />2019_Oil Drawing
    {LIST_oil_2019.map((each) => 
      <ImgList key={each.title} each={each} currentImg={currentImg} setCurrentImg={setCurrentImg} setWsh={setWsh} />
    )}
  </ul>
  </>
)
}

export default ListOil;